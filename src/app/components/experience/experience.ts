import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { TechIcon } from '../../shared/components/tech-icon/tech-icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective, SectionHeading, TechIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly content = inject(PortfolioContentService);
  readonly entries = this.content.experience;

  /** Which entry is expanded to show its highlight list — starts on the current role. */
  readonly expandedIndex = signal(0);

  toggle(index: number): void {
    this.expandedIndex.update((current) => (current === index ? -1 : index));
  }
}
