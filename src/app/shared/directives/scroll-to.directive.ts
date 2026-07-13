import { Directive, HostListener, input } from '@angular/core';

/**
 * Native `<a href="#section-id">` fragment scrolling isn't reliable in every
 * browser/environment — the hash updates but the viewport doesn't move.
 * This drives the scroll explicitly instead, keeping `href` as a working
 * fallback (right-click "open in new tab", no-JS, SEO) while owning the
 * actual navigation on click.
 *
 * Uses `behavior: 'instant'` rather than `'smooth'` — smooth scrollIntoView
 * relies on rAF-driven animation that browsers throttle/skip on background
 * or non-visible tabs, which made it silently no-op in some environments.
 * Instant jump is unaffected by that and always lands correctly.
 */
@Directive({
  selector: 'a[appScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  readonly appScrollTo = input.required<string>();

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const id = this.appScrollTo();
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'instant', block: 'start' });
    history.replaceState(null, '', `${location.pathname}#${id}`);
  }
}
