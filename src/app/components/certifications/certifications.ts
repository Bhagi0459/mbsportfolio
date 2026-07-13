import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective, TiltDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  private readonly content = inject(PortfolioContentService);
  readonly certifications = this.content.certifications;
}
