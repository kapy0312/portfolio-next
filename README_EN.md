🌐 [中文](./README.md) | [English](./README_EN.md)

# Kevin Lai — Portfolio (Next.js SSG)

Personal portfolio of **Kevin Lai**, a CIM / Industrial AI engineer working across OT (Siemens SINUMERIK, TIA Portal, OPC UA) and IT (FastAPI, React, LLM / RAG, AWS).

🔗 **Live site:** [kapy0312.github.io/portfolio-next](https://kapy0312.github.io/portfolio-next/)

---

## What's on the site

| Section | Content |
|---|---|
| Selected work | [IIoT SCADA Platform](https://github.com/kapy0312/iot-scada-platform), [RAG Platform](https://github.com/kapy0312/rag-platform) (with live demo), [VLT CNC Polishing](https://github.com/kapy0312/vlt-cnc-showcase), [BFX Lending Bot](https://github.com/kapy0312/bfx-lending-bot-showcase) |
| Case studies (`/case-studies`) | Five stories: retracting a wrong evaluation conclusion, honest hit/miss rates for predictive warnings, RAG for industrial fault diagnosis, a negative fine-tuning result, and fixing the mechanism behind an API key leak |
| More work | Local AI service suite, [Subtitle generator](https://github.com/kapy0312/subtitle-app), [YT-Media-Extractor](https://github.com/kapy0312/YT-Media-Extractor), Pikmin classroom app |
| Skills, experience, certifications | OT / IT skills, work history, AWS SAA, Siemens industry instructor |

## Why Next.js SSG

The earlier Vite + React CSR version shipped an empty `<div id="root">`. Fine in a browser, but link previews, search engines and anything that doesn't run JavaScript saw nothing. This version uses **Next.js App Router with Static Export (SSG)**, so every page is rendered to full HTML at build time. The output is still plain static files, deployed to GitHub Pages.

## Tech stack

- **Framework:** Next.js 15 (App Router, `output: 'export'`)
- **UI:** React 18, Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Fonts:** `next/font/google` (Space Grotesk, Inter, Noto Sans TC)
- **Animation:** IntersectionObserver scroll reveals, no animation library
- **Deployment:** GitHub Actions → `gh-pages` branch → GitHub Pages

## Project structure

```
portfolio-next/
├── next.config.js            # output: 'export', basePath (production only)
├── postcss.config.mjs        # Tailwind v4
├── jsconfig.json             # "@/*" → "./src/*"
├── public/
│   ├── favicon.svg
│   ├── images/               # project screenshots (WebP)
│   └── architecture/         # architecture diagrams (standalone HTML, sanitized)
├── .github/workflows/
│   └── deploy.yml            # build → .nojekyll → push to gh-pages
└── src/
    ├── app/
    │   ├── layout.jsx        # metadata, fonts
    │   ├── page.jsx          # home page
    │   ├── case-studies/
    │   │   └── page.jsx      # full case studies page
    │   └── globals.css
    ├── components/           # Navbar, Hero, Skills, FeaturedProjects,
    │                         # CaseStudiesPreview, OtherProjects, ProjectCard,
    │                         # SectionTitle, SkillBadge, Experience, Contact
    ├── hooks/
    │   └── useInView.js
    └── lib/
        ├── caseStudies.js    # case study content (shared by home and /case-studies)
        └── asset.js          # prefixes public/ paths with basePath
```

## Where to edit content

| What | File |
|---|---|
| Selected work (text, metrics, tags, links, screenshots) | `src/components/FeaturedProjects.jsx` |
| More work | `src/components/OtherProjects.jsx` |
| Case studies | `src/lib/caseStudies.js` |
| Skills | `src/components/Skills.jsx` |
| Experience and certifications | `src/components/Experience.jsx` |
| Contact | `src/components/Contact.jsx`, `src/components/Navbar.jsx` |

Put screenshots in `public/images/` (`mediaUrl: "/images/name.webp"`) and diagrams in `public/architecture/` (`architecture: "/architecture/name.html"`, which adds an architecture button to the card); the base path is added automatically. The VLT diagram is a sanitized public version of a company project: PLC/NCK addresses, code names and mechanical specs are removed.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `basePath` only applies to production builds.

## Build

```bash
npm run build
```

Output goes to `out/`. Open `out/index.html` in a text editor: the page text (e.g. "CIM 工程師") should be in the raw HTML.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: `npm ci` → `next build` → create `out/.nojekyll` (otherwise Jekyll drops the `_next/` folder) → publish `out/` to `gh-pages` with `peaceiris/actions-gh-pages`.

**One-time setup:** Settings → Pages → deploy from `gh-pages`; Settings → Actions → Workflow permissions → **Read and write**.

## TODO

- [ ] Add the 104 resume link back to `Contact.jsx` once the resume is public
- [ ] Add demo video links for IIoT SCADA and RAG Platform when recorded
- [ ] Replace the placeholder `public/favicon.svg`
