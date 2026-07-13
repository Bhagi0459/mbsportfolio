import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Fixed, page-wide ambient layer sitting behind every section — a faint
 * schematic dot-grid, three slow-drifting glow blobs anchored to the
 * viewport (not the page), and a thin "signal" line with a traveling
 * pulse down the left margin. Gives the whole site continuous depth
 * instead of just the Hero, without repeating the Hero's aurora treatment.
 */
@Component({
  selector: 'app-ambient-background',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ambient-background.html',
  styleUrl: './ambient-background.scss',
})
export class AmbientBackground {}
