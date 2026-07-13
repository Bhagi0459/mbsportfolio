import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [ScrollToDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  private readonly content = inject(PortfolioContentService);
  readonly identity = this.content.identity;
  readonly year = new Date().getFullYear();
}
