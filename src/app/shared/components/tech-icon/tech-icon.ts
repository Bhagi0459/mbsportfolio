import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Exact-match lookup — stack strings are our own data, no fuzzy parsing needed. */
const ICON_KEYS: Readonly<Record<string, string>> = {
  angular: 'angular',
  'angular 12': 'angular',
  'angular 14': 'angular',
  'angular 16': 'angular',
  'angular 19': 'angular',
  'angular material': 'angular-material',
  typescript: 'typescript',
  'power bi': 'power-bi',
  'sql server': 'sql-server',
  '.net': 'dotnet',
  '.net api': 'dotnet',
  '.net rest api': 'dotnet',
  '.net rest apis': 'dotnet',
  primeng: 'primeng',
  react: 'react',
  'next.js': 'nextjs',
  'express.js': 'expressjs',
  vercel: 'vercel',
  render: 'render',
  'github actions': 'github-actions',
  rxjs: 'rxjs',
  html5: 'html5',
  scss: 'scss',
  'node.js': 'nodejs',
  git: 'git',
  postman: 'postman',
};

/**
 * Renders a small brand-colored mark for known stack entries, or nothing for
 * generic/non-branded tags (e.g. "Administration", "HIPAA", "Legacy Migration").
 * `display: contents` on the host means an unmatched icon takes up no space —
 * the surrounding chip's flex gap only applies when there's real content.
 */
@Component({
  selector: 'app-tech-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  template: `
    @switch (key()) {
      @case ('angular') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M12 2l9 3.2-1.4 12L12 22 3.4 17.2 2 5.2 12 2z" fill="#DD0031" />
          <path d="M12 2l9 3.2-1.4 12L12 22V2z" fill="#C3002F" />
          <path d="M12 6.4L6.8 17h1.9l1-2.6h4.5l1 2.6h1.9L12 6.4zm-1.6 6.6L12 9l1.6 4h-3.2z" fill="#fff" />
        </svg>
      }
      @case ('angular-material') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M12 2l10 6v8l-10 6-10-6V8l10-6z" fill="#3F51B5" />
          <path d="M12 2l10 6-10 6L2 8l10-6z" fill="#7986CB" />
        </svg>
      }
      @case ('typescript') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <text x="12" y="16.5" text-anchor="middle" font-size="10" font-weight="700" font-family="Arial, sans-serif" fill="#fff">TS</text>
        </svg>
      }
      @case ('power-bi') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect x="3" y="13" width="4" height="8" rx="1" fill="#F2C811" />
          <rect x="10" y="8" width="4" height="13" rx="1" fill="#F2C811" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811" />
        </svg>
      }
      @case ('sql-server') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#CC2927" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" fill="none" stroke="#CC2927" stroke-width="2" />
          <path d="M4 11c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#CC2927" stroke-width="2" />
        </svg>
      }
      @case ('dotnet') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#512BD4" />
          <text x="12" y="16" text-anchor="middle" font-size="8" font-weight="700" font-family="Arial, sans-serif" fill="#fff">.NET</text>
        </svg>
      }
      @case ('primeng') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#0EA5A5" />
          <text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="700" font-family="Arial, sans-serif" fill="#fff">P</text>
        </svg>
      }
      @case ('react') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <g fill="none" stroke="#61DAFB" stroke-width="1.4">
            <ellipse cx="12" cy="12" rx="9" ry="3.6" />
            <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
          </g>
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      }
      @case ('nextjs') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <circle cx="12" cy="12" r="10.5" fill="#000" stroke="rgba(255,255,255,0.28)" stroke-width="1" />
          <text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="700" font-family="Arial, sans-serif" fill="#fff">N</text>
        </svg>
      }
      @case ('expressjs') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.22)" stroke-width="1" />
          <text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Arial, sans-serif" fill="#fff">ex</text>
        </svg>
      }
      @case ('vercel') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#000" stroke="rgba(255,255,255,0.22)" stroke-width="1" />
          <path d="M12 6l7 12H5l7-12z" fill="#fff" />
        </svg>
      }
      @case ('render') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#46E3B7" />
          <text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="700" font-family="Arial, sans-serif" fill="#04211d">R</text>
        </svg>
      }
      @case ('github-actions') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#24292F" />
          <path d="M9 7l8 5-8 5V7z" fill="#2EA44F" />
        </svg>
      }
      @case ('rxjs') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#B7178C" />
          <text x="12" y="15.5" text-anchor="middle" font-size="8" font-weight="700" font-family="Arial, sans-serif" fill="#fff">Rx</text>
        </svg>
      }
      @case ('html5') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z" fill="#E44D26" />
          <path d="M12 3v18.9l5.4-1.5L18.6 5H12z" fill="#F16529" />
          <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="700" font-family="Arial, sans-serif" fill="#fff">5</text>
        </svg>
      }
      @case ('scss') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#CC6699" />
          <text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="700" font-family="Arial, sans-serif" fill="#fff">S</text>
        </svg>
      }
      @case ('nodejs') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#3C873A" />
          <text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="700" font-family="Arial, sans-serif" fill="#fff">N</text>
        </svg>
      }
      @case ('git') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F05033" />
          <circle cx="8" cy="8" r="1.8" fill="#fff" />
          <circle cx="8" cy="16" r="1.8" fill="#fff" />
          <circle cx="16" cy="16" r="1.8" fill="#fff" />
          <path d="M8 9.8v4.4M9.8 16h4.4a1.8 1.8 0 0 0 1.8-1.8V11" stroke="#fff" stroke-width="1.3" fill="none" />
        </svg>
      }
      @case ('postman') {
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="700" font-family="Arial, sans-serif" fill="#fff">P</text>
        </svg>
      }
    }
  `,
})
export class TechIcon {
  readonly name = input.required<string>();
  readonly key = computed(() => ICON_KEYS[this.name().trim().toLowerCase()] ?? null);
}
