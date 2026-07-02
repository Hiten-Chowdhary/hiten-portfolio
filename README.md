# Hiten Chowdhary — Portfolio

Production React app for Hiten Chowdhary's portfolio. Built with Vite, React 18, React Router, Tailwind CSS, Recharts, and lucide-react.

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```bash
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
npm run lint        # ESLint
```

## Before you deploy — things that need your input

This repo is fully functional as-is, but three things are placeholders you should replace:

1. **Profile photo.** `src/assets/profile-placeholder.svg` is a clearly-labeled placeholder — no real photo was available when this was generated. Replace the file with a real headshot and update the import in `src/pages/About.jsx` (currently `import profilePlaceholder from "../assets/profile-placeholder.svg"`) to point at your new file.
2. **LinkedIn / GitHub URLs.** In `src/data/projects.js`, the `PROFILE.linkedin` and `PROFILE.github` fields are marked `// placeholder — verify exact handle`. These were guessed from your name, not confirmed. Fix them before shipping.
3. **Resume PDF.** `public/resume.pdf` is your actual resume as of the last upload. If you have a newer version, just overwrite this file — no code changes needed, since it's referenced by path (`/resume.pdf`), not bundled into JS.

## Project structure

```
├── public/
│   ├── favicon.svg
│   └── resume.pdf                  # served at /resume.pdf, real file
│
├── src/
│   ├── assets/
│   │   ├── profile-placeholder.svg # placeholder — see above
│   │   └── screenshots/            # 13 real dashboard/workflow screenshots (.webp)
│   │
│   ├── components/
│   │   ├── common/                 # Badge, StatusDot, SectionLabel, Icon
│   │   ├── layout/                 # Nav, Footer, ContactModal, ScrollToTop
│   │   ├── home/                   # Hero, FloatingCard, KPICard, KPISection
│   │   └── project/                # ProjectCard, ExplorerCard, LivePreview,
│   │                                # FeaturedWork, ProjectExplorer,
│   │                                # N8nCaseStudyBody, CaseStudyImageCard,
│   │                                # ImageLightbox
│   │
│   ├── pages/                      # Home, Work, ProjectDetail, About
│   ├── hooks/                      # useCountUp, useInView
│   ├── data/
│   │   └── projects.js             # all project/profile/timeline/skills data
│   │                                # — single source of truth for content
│   │
│   ├── App.jsx                     # router + layout shell
│   ├── main.jsx                    # entry point
│   └── index.css                   # Tailwind directives + global styles
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── index.html
```

## Editing content

Almost everything you'd want to change — project descriptions, impact statements, skills, timeline, KPIs — lives in **`src/data/projects.js`**. You generally shouldn't need to touch component files to update copy.

To add a new project, add an object to the `PROJECTS` array following the existing shape. Set `featured: true` to have it appear in the "Featured work" grid (keep this to 5 for layout balance); otherwise it shows up in the Project Explorer on `/work`.

## Routing

Real client-side routes via `react-router-dom`:

- `/` — Home
- `/work` — full project explorer
- `/project/:id` — individual case study (matches a `PROJECTS[].id`)
- `/about` — bio, timeline, skills, education

Unknown routes render a simple "Page not found" state rather than a blank screen.

## Deploying to Vercel

This is a standard Vite SPA. On Vercel:

1. Import the repo.
2. Framework preset: **Vite**.
3. Build command: `npm run build` (default).
4. Output directory: `dist` (default).
5. Add a rewrite so client-side routes don't 404 on refresh — create `vercel.json` in the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Without this, refreshing on `/work` or `/project/sim-cost` directly will 404, since Vercel's static file server doesn't know those paths — only your client-side router does.

## Notes on data accuracy

Several dashboard links in `src/data/projects.js` point to live, real Metabase/Hex dashboards tied to the author's employer, published with the employer's consent (per prior conversation with the author). If that consent changes, those links and their "live" status should be revisited.

One screenshot (`recharge_pitch.webp`) has real customer PII (name, phone number, location) redacted with black boxes — this was done deliberately before the image was ever included in this repo. Don't swap in an unredacted version of that screenshot.
