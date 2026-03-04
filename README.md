# Maxence PACHOT — Portfolio Website

Personal portfolio website showcasing my professional experience as a Data Engineer & DBA Oracle.

**Live:** [pachotmaxence.com](https://pachotmaxence.com)
**LinkedIn:** [Maxence PACHOT](https://www.linkedin.com/in/maxence-pachot-6801761b7/)

## Tech Stack

- **React 18** with React Router DOM 6
- **Vite 7** for build and dev server
- **Bootstrap 4.5** + Material Kit 2 for styling
- **Netlify** for hosting and continuous deployment

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start local dev server               |
| `npm run build`   | Production build (outputs to `dist/`)|
| `npm run preview` | Preview production build locally     |
| `npm run lint`    | ESLint check (zero-warnings policy)  |

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup
├── styles.css            # Custom styles
├── components/
│   ├── Navbar.jsx        # Sticky navigation bar
│   └── Footer.jsx        # Global footer
├── pages/
│   ├── Home.jsx          # Profile, bio, contact
│   └── Projects.jsx      # Project showcase
├── assets/css/           # Material Kit 2 CSS
└── fonts/                # Poppins font files
public/                   # Static assets (SVG logos, CV PDF, favicon)
```

## Deployment

Configured via `netlify.toml` with SPA redirect (all routes → `index.html`).
