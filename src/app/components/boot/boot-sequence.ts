import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, inject, output, signal } from '@angular/core';

interface SphereNode {
  readonly transform: string;
  readonly size: number;
}

/**
 * A ~5s app-style boot sequence shown once per page load, before the
 * real site is revealed. Centerpiece is a genuinely 3D rotating sphere
 * of nodes — real CSS perspective + translate3d, not a flat canvas —
 * so nearer nodes visibly scale and pass in front of farther ones as
 * it turns. Node positions are computed once (Fibonacci sphere); the
 * rotation itself is a pure CSS animation, so there's no per-frame JS.
 *
 * Skippable at any time (click / keypress) and respects
 * prefers-reduced-motion by completing near-instantly.
 */
@Component({
  selector: 'app-boot-sequence',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './boot-sequence.html',
  styleUrl: './boot-sequence.scss',
  host: {
    '[class.leaving]': 'leaving()',
  },
})
export class BootSequence {
  private static readonly MESSAGES: readonly string[] = [
    'Initializing workspace…',
    'Loading Angular modules…',
    'Compiling signal graph…',
    'Connecting to network…',
    'Ready.',
  ];

  private static readonly STEP_MS = 900;
  private static readonly NODE_COUNT = 56;
  private static readonly RADIUS = 92;

  readonly complete = output<void>();

  readonly nodes: readonly SphereNode[] = BootSequence.buildSphere(BootSequence.NODE_COUNT, BootSequence.RADIUS);
  readonly message = signal(BootSequence.MESSAGES[0]);
  readonly progress = signal(0);
  readonly leaving = signal(false);
  readonly reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private readonly destroyRef = inject(DestroyRef);
  private readonly timeouts: ReturnType<typeof setTimeout>[] = [];
  private done = false;

  constructor() {
    if (this.reduceMotion) {
      this.message.set(BootSequence.MESSAGES[BootSequence.MESSAGES.length - 1]);
      this.progress.set(100);
      this.finish();
      return;
    }

    const total = BootSequence.MESSAGES.length * BootSequence.STEP_MS;

    BootSequence.MESSAGES.forEach((msg, i) => {
      const at = i * BootSequence.STEP_MS;
      const id = setTimeout(() => {
        this.message.set(msg);
        this.progress.set(Math.round(((i + 1) / BootSequence.MESSAGES.length) * 100));
        if (i === BootSequence.MESSAGES.length - 1) {
          const finishId = setTimeout(() => this.finish(), 550);
          this.timeouts.push(finishId);
        }
      }, at);
      this.timeouts.push(id);
    });

    // total ≈ 5s including the trailing pause on "Ready."
    void total;

    this.destroyRef.onDestroy(() => this.timeouts.forEach(clearTimeout));
  }

  @HostListener('document:keydown')
  @HostListener('click')
  skip(): void {
    this.finish();
  }

  private finish(): void {
    if (this.done) return;
    this.done = true;
    this.timeouts.forEach(clearTimeout);
    this.leaving.set(true);
    setTimeout(() => this.complete.emit(), 420);
  }

  /** Fibonacci sphere: evenly distributes N points on a sphere surface. */
  private static buildSphere(count: number, radius: number): SphereNode[] {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const nodes: SphereNode[] = [];

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const px = (x * radius).toFixed(1);
      const py = (y * radius).toFixed(1);
      const pz = (z * radius).toFixed(1);

      nodes.push({
        transform: `translate(-50%, -50%) translate3d(${px}px, ${py}px, ${pz}px)`,
        size: 3 + Math.abs(z) * 2.5,
      });
    }

    return nodes;
  }
}
