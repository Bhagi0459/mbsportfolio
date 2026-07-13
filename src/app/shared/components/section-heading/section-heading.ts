import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="index" [appReveal]="0">{{ index() }}</p>
    <h2 [appReveal]="1">{{ title() }}</h2>
    @if (lead()) {
      <p class="lead" [appReveal]="2">{{ lead() }}</p>
    }
  `,
  styleUrl: './section-heading.scss',
})
export class SectionHeading {
  readonly index = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>();
}
