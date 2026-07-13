import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly content = inject(PortfolioContentService);
  readonly identity = this.content.identity;
  readonly paragraphs = this.content.aboutParagraphs;
  readonly education = this.content.education;
}
