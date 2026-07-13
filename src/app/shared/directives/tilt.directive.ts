import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Subtle pointer-driven 3D tilt for card surfaces — reinforces the
 * "spatial panel" language used across the site without a 3D engine.
 * No-ops on coarse pointers (touch) and respects reduced motion.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
  host: {
    class: 'tilt-surface',
  },
})
export class TiltDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly canTilt =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private static readonly MAX_DEG = 6;

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.canTilt) return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * TiltDirective.MAX_DEG).toFixed(2);
    const ry = (px * TiltDirective.MAX_DEG).toFixed(2);
    this.el.nativeElement.style.setProperty('--tilt-x', `${rx}deg`);
    this.el.nativeElement.style.setProperty('--tilt-y', `${ry}deg`);
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    this.el.nativeElement.style.setProperty('--tilt-x', '0deg');
    this.el.nativeElement.style.setProperty('--tilt-y', '0deg');
  }
}
