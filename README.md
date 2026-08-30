# Maxence PACHOT - Portfolio Website

Bilingual personal portfolio site: what I build as a Data Platform Engineer, and
what it changed.

**Live:** [pachotmaxence.com](https://pachotmaxence.com) ·
**LinkedIn:** [Maxence PACHOT](https://www.linkedin.com/in/maxence-pachot-6801761b7/)

## Tech stack

- **React 18** with React Router DOM 7
- **Vite 7** for build and dev server
- **Material Kit 2** (Bootstrap 5 based) plus a custom style layer
- **@fontsource/poppins** - self-hosted woff2, no font CDN
- **Netlify** for hosting and continuous deployment

No third-party JavaScript, no CDN, no analytics. The Content Security Policy is
`default-src 'self'` with no `unsafe-inline`.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                           |
|-------------------|---------------------------------------|
| `npm run dev`     | Start local dev server                |
| `npm run build`   | Production build (outputs to `dist/`) |
| `npm run preview` | Preview production build locally      |
| `npm run lint`    | ESLint check (zero-warnings policy)   |

Netlify runs `npm run lint && npm run build`, so a lint error fails the deploy.

## Languages and routing

Each page exists at one URL per language; the URL is the only source of truth for
the active language.

| Page     | English     | French          |
|----------|-------------|-----------------|
| Home     | `/`         | `/fr`           |
| Projects | `/projects` | `/fr/projets`   |

All copy lives in `src/i18n/en.js` and `src/i18n/fr.js` - the two files must stay
structurally identical. Components hold layout, never text.

## CV

`cv/` holds the HTML sources for the two CV PDFs (`cv-en.html`, `cv-fr.html`,
shared `cv.css`). `./cv/render.sh en|fr` renders them to `public/` with headless
Chrome. The PDFs are build output - never edit them directly.

## Project structure

```
src/
├── main.jsx                 # Entry point (Material Kit + fonts + App)
├── App.jsx                  # Router and language provider
├── styles.css               # Design tokens, panels, hero, print styles
├── i18n/
│   ├── en.js  fr.js         # All user-facing copy
│   ├── routes.js            # URL <-> language <-> page map
│   ├── logos.js             # Per-project technology logos
│   ├── index.jsx            # LanguageProvider
│   └── context.js           # Context + useLanguage hook
├── components/
│   ├── Navbar.jsx           # Sticky nav, React-driven mobile menu, FR/EN switch
│   ├── Footer.jsx
│   ├── Section.jsx          # The titled panel every block uses
│   └── Seo.jsx              # Per-route head tags and hreflang alternates
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── NotFound.jsx
└── assets/css/              # Material Kit 2
public/                      # SVG logos, images, CV PDF, robots.txt, sitemap.xml
```

## Deployment

`netlify.toml` holds the SPA rewrite, the security headers (CSP, HSTS,
X-Frame-Options, Referrer-Policy, Permissions-Policy) and immutable caching for
fingerprinted assets.
