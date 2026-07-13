import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TiltDirective, ScrollToDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly content = inject(PortfolioContentService);
  readonly identity = this.content.identity;
  readonly resumeUrl = this.content.resumeUrl;

  /** Drives the entry sequence — flips true one frame after mount so the
   *  CSS transitions in hero.scss actually animate instead of snapping in. */
  readonly ready = signal(false);

  constructor() {
    requestAnimationFrame(() => this.ready.set(true));
  }
}
