import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BootSequence } from './components/boot/boot-sequence';
import { AmbientBackground } from './components/ambient-background/ambient-background';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Insights } from './components/insights/insights';
import { Services } from './components/services/services';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';
import { SiteFooter } from './components/footer/site-footer';

const BOOT_SEEN_KEY = 'boot-seen';

function hasSeenBootThisSession(): boolean {
  try {
    return sessionStorage.getItem(BOOT_SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BootSequence,
    AmbientBackground,
    Nav,
    Hero,
    About,
    Experience,
    Skills,
    Projects,
    Insights,
    Services,
    Certifications,
    Contact,
    SiteFooter,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Gates the real site behind the boot sequence — set true once it completes/is skipped.
   *  Starts already-booted if this tab's session has already seen it once. */
  readonly booted = signal(hasSeenBootThisSession());

  onBootComplete(): void {
    try {
      sessionStorage.setItem(BOOT_SEEN_KEY, '1');
    } catch {
      // Storage unavailable (e.g. private browsing) — just proceed without persisting.
    }
    this.booted.set(true);
  }
}
