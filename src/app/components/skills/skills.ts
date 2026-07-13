import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { TechIcon } from '../../shared/components/tech-icon/tech-icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, TiltDirective, SectionHeading, TechIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly content = inject(PortfolioContentService);
  readonly groups = this.content.skillGroups;
}
