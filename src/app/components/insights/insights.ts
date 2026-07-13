import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './insights.html',
  styleUrl: './insights.scss',
})
export class Insights {
  private readonly content = inject(PortfolioContentService);
  readonly posts = this.content.insights;
}
