# Vivek Vardhan Saraswathi — Portfolio

A production-ready, multi-route personal portfolio for **Vivek Vardhan Saraswathi** (aspiring AI/ML engineer).
Dark, editorial, futuristic design with a muted electric-lime accent, restrained motion, and full
`prefers-reduced-motion` support. **All content lives in `src/data/` — nothing is hardcoded in components.**

## Tech stack

- **React 19 + TypeScript + Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`, CSS-first `@theme` tokens)
- **React Router v7** — `/`, `/about`, `/projects`, `/projects/:slug`
- **Motion** (Framer Motion successor) — loader, reveals, cover hovers, nav indicator, pointer-only tilt
- **Lucide** icons + inline brand marks (GitHub/LinkedIn)
- **@fontsource** — Space Grotesk (display), Inter (body), JetBrains Mono (labels)
- **Vitest + Testing Library** — 11 route/content/accessibility tests

## Getting started

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
npm test           # run the test suite
npm run lint       # ESLint (includes the no-hardcoded-URL guard)
npm run typecheck  # TypeScript project build check
```

## Project structure

```
public/
  resume/VSR.pdf     # the real résumé served at /resume/VSR.pdf
  favicon.svg
src/
  data/              # ← SINGLE SOURCE OF TRUTH for all content & URLs
    profile.ts       #   name, positioning, contact, summary
    projects.ts      #   all 10 projects + 4 full case studies
    skills.ts        #   grouped technical skills
    experience.ts    #   Persevex internship
    education.ts     #   B.Tech
    certifications.ts
    site.ts          #   nav, meta, socials, résumé config
    types.ts         #   shared content types
  components/
    ui/              #   primitives (Button, Tag, Reveal, Section…)
    layout/          #   Navbar, Footer, Loader, ScrollManager
    sections/        #   Hero, About, Skills, Featured, Timeline, Contact
    ProjectCard.tsx  #   cover-reveal card with pointer-only tilt
    ProjectCover.tsx #   abstract per-project cover art (SVG/CSS)
    CaseStudyContent.tsx / ArchitectureDiagram.tsx
  pages/             #  Home, About, Projects, ProjectDetail, NotFound
  lib/               #  usePageMeta
  test/              #  jsdom polyfills
  App.test.tsx       #  11 integration tests
```

## Content policy (zero hardcoded content)

The ESLint rule `no-restricted-syntax` (see `eslint.config.js`) **fails the build** if a literal
`https://` or `mailto:` URL appears anywhere outside `src/data/`. Edit the data files — never
components — to change copy, links, the résumé path, or project content.

**Truthfulness rules baked into the content:**
- No invented metrics, percentages, or outcomes — evaluation sections describe *methodology*, not fabricated numbers.
- `demoUrl` is `null` unless a live demo is verified. CommerceCore's Render demo is intentionally omitted pending the real URL.
- The AI Travel Assistant entry describes the *backend* present in the repository (no unverified frontend claims).
- No contact form — the contact section opens the visitor's mail client via `mailto:`.
- Feature descriptions are grounded in the inspected repositories.

## Deploy to Vercel

The project ships with `vercel.json` (SPA rewrites, résumé excluded).

1. Install the CLI (or use the dashboard import — this repo is not yet pushed, see below).
   ```bash
   npm i -g vercel
   ```
2. From the project root, run:
   ```bash
   vercel
   ```
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
3. For production: `vercel --prod`

> **Note:** the project is not yet pushed to GitHub. Add a repository,
> `git remote add origin <repo-url>`, `git push -u origin main`, then you can
> import the repo in the Vercel dashboard for automatic deploys on push.

## Before launch — confirmation checklist

These items are intentionally placeholders/honest-neutral right now. Confirm each before going public:

- [ ] **Persevex internship** — confirm official job title (currently "Artificial Intelligence Intern") and start/end dates; the site omits dates until confirmed.
- [ ] **CGPA / degree status** — confirm "8.04 / 10" and the 2022–2026 period wording as of launch.
- [ ] **CommerceCore demo URL** — replace the Render placeholder verification note and set `demoUrl` in `src/data/projects.ts` when the real URL is known, or keep `null`.
- [ ] **Professional summary** — review `src/data/profile.ts` wording.
- [ ] **CERTIFICATIONS evidence** — the four certifications link to nothing; PDFs live in the `CERTIFICATIONS` repo if you want to add links.
- [ ] **Meta/OG copy** — `index.html` holds static meta; update if the positioning changes.
- [ ] **Favicon** — replacement optional (`public/favicon.svg`).

## Scripts summary

| Script | Purpose |
| --- | --- |
| `dev` | Vite dev server |
| `build` | `tsc -b && vite build` |
| `preview` | Serves `dist/` |
| `test` / `test:watch` | Vitest (jsdom) |
| `lint` | ESLint incl. 0-hardcoded guard |
| `format` / `format:check` | Prettier |
| `typecheck` | `tsc -b --noEmit` |