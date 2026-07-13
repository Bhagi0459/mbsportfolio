import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';

interface NavLink {
  readonly id: string;
  readonly label: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ScrollToDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements AfterViewInit {
  readonly links: readonly NavLink[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly isOpen = signal(false);
  readonly activeId = signal<string>('');
  readonly scrolled = signal(false);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }

  ngAfterViewInit(): void {
    const onScroll = () => this.scrolled.set(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const sections = this.links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeId.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
      );
      sections.forEach((s) => observer.observe(s));
      this.destroyRef.onDestroy(() => observer.disconnect());
    }

    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
  }
}
