🌐 [English](./README.md) | [中文](./README.zh-TW.md)

# Kevin Lai — Portfolio (Next.js SSG)

Personal portfolio site for **Kevin Lai**, a CIM / Industrial AI Engineer
bridging OT (Siemens SINUMERIK, TIA Portal, OPC-UA) and IT (FastAPI, React,
AI integration).

🔗 **Live site:** [kapy0312.github.io/portfolio-next](https://kapy0312.github.io/portfolio-next/)

---

## Why this exists

This is a rewrite of an earlier Vite + React CSR portfolio. The original
shipped an empty `<div id="root">` at the HTML level — fine for users, but
recruiters' link previews, some crawlers, and anything that doesn't execute
JS saw nothing. This version uses **Next.js App Router with Static Export
(SSG)**, so every page is fully rendered to HTML at build time. The output
is still 100% static files — no server, no API routes — just deployed to
GitHub Pages the same way the Vite version was.

## Tech stack

- **Framework:** Next.js 15 (App Router, `output: 'export'`)
- **UI:** React 18, Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Fonts:** `next/font/google` — Space Grotesk, Inter, Noto Sans TC
- **Animations:** IntersectionObserver-based scroll reveals (no animation library)
- **Deployment:** GitHub Actions → `gh-pages` branch → GitHub Pages

## Project structure

```
portfolio-next/
├── next.config.js          # output: 'export', basePath for GitHub Pages
├── postcss.config.mjs      # Tailwind v4 via PostCSS
├── jsconfig.json           # "@/*" path alias → "./src/*"
├── public/
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml          # CI: build → .nojekyll → push to gh-pages
└── src/
    ├── app/
    │   ├── layout.jsx      # metadata, next/font setup
    │   ├── page.jsx        # assembles all sections
    │   └── globals.css     # Tailwind theme tokens + custom CSS
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── FeaturedProjects.jsx
    │   ├── OtherProjects.jsx
    │   ├── ProjectCard.jsx     # variant="featured" | "small"
    │   ├── SectionTitle.jsx
    │   ├── SkillBadge.jsx
    │   ├── Experience.jsx
    │   └── Contact.jsx
    └── hooks/
        └── useInView.js     # fire-once scroll-reveal hook
```

Components using state or browser APIs (`useState`, `useEffect`,
`useInView`) are marked `'use client'`. Pure presentational components
(`SkillBadge`, `FeaturedProjects`, `OtherProjects`) stay as Server
Components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`basePath` only applies in production builds
(`isProd = process.env.NODE_ENV === 'production'` in `next.config.js`), so
dev mode runs at the root path — no need to visit `/portfolio-next/` locally.

## Build

```bash
npm run build
```

Static output goes to `out/`. To verify SSG actually worked, open
`out/index.html` in a text editor — the Chinese content (e.g. "CIM 工程師")
should be directly readable in the raw HTML, not hidden behind a client-side
render.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies (`npm ci`)
2. Runs `next build`
3. Adds `out/.nojekyll` (otherwise GitHub Pages' Jekyll processor silently
   drops the `_next/` asset folder because of the leading underscore)
4. Publishes `out/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

**One-time repo setup required:**
- Settings → Pages → Source → Deploy from a branch → `gh-pages`
- Settings → Actions → General → Workflow permissions → **Read and write**
  (the default read-only token will get a 403 on push otherwise)

Manual deploy is also available via `npm run deploy` (build + `gh-pages -d out`).

## TODO

- [ ] Replace placeholder email (`your@email.com`) in `Navbar.jsx` and `Contact.jsx`
- [ ] Replace placeholder 104 resume link in `Contact.jsx`
- [ ] Replace placeholder `public/favicon.svg` with the real icon
- [ ] Record and embed IIoT SCADA demo video (`FeaturedProjects.jsx` → `mediaUrl`)
- [ ] Confirm `vlt-cnc-showcase` and `bfx-lending-bot-showcase` repos exist
      and are public, or the linked buttons will 404