import { DestroyRef, Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';

/**
 * Applies a `.is-visible` class the first time the host element crosses into
 * the viewport, then disconnects. Pure CSS handles the actual transition
 * (see :root motion tokens + .reveal base class), so this directive only
 * ever toggles one class — no inline style writes, no layout thrash.
 *
 * Respects prefers-reduced-motion by revealing immediately without observing.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'reveal',
  },
})
export class RevealDirective implements OnInit {
  /** Optional stagger index — multiplies against a fixed step in CSS via custom property.
   *  Bindable as `[appReveal]="i"` (matches the selector) so templates don't need two attrs. */
  readonly delay = input(0, { alias: 'appReveal' });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const host = this.el.nativeElement;
    this.renderer.setStyle(host, '--reveal-delay', `${this.delay() * 70}ms`);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      this.renderer.addClass(host, 'is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'is-visible');
            observer.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(host);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
