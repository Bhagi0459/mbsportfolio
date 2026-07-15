import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { TechIcon } from '../../shared/components/tech-icon/tech-icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, TiltDirective, SectionHeading, TechIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly content = inject(PortfolioContentService);
  readonly featuredList = this.content.featuredCaseStudies;
  readonly others = this.content.otherCaseStudies;

  readonly openId = signal<string | null>(null);

  toggle(id: string): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
