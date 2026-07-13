import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  private readonly content = inject(PortfolioContentService);
  readonly services = this.content.services;
  readonly marketplaces = this.content.marketplaceProfiles;
}
