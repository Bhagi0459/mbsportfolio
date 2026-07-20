# MBS Portfolio

Personal portfolio site for Bhagya Sankar Maddela, Senior Angular Developer — experience, projects, skills, and technical writing in one place.

**Live site:** [mbs-portfolio-app.vercel.app](https://mbs-portfolio-app.vercel.app/)

Deployed on **Vercel**.

## Sections

- **Hero** — intro, with a boot-sequence intro animation on first visit
- **About** — background and education
- **Experience** — work history
- **Skills** — grouped tech stack
- **Projects** — featured personal and enterprise work
- **Insights** — Angular Performance Series and other technical posts, sourced from LinkedIn
- **Services** — freelance offerings
- **Certifications**
- **Contact**

## Tech stack

- Angular 20 — Standalone Components, single-page component composition
- RxJS

## Project structure

```
src/app/
  core/
    data/          # portfolio content (experience, projects, insights, etc.)
    models/        # TypeScript interfaces
    services/      # app services
  components/       # hero, about, experience, skills, projects, insights, services, certifications, contact, nav, footer, boot, ambient-background
  shared/
    components/
    directives/
```

All portfolio content — experience, projects, and Insight posts (each linking to its original LinkedIn post) — lives in `src/app/core/data/portfolio-content.ts`.

## Getting started

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the Angular dev server |
| `npm run build` | Production build to `dist/` |
| `npm run watch` | Incremental dev build |
| `npm test` | Run unit tests (Karma/Jasmine) |

## Deployment

Deployed on Vercel as the `portfolio-ng` project.
