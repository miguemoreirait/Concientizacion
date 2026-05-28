# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static one-page portfolio for a cybersecurity awareness course (Concientización en Ciberseguridad) targeting SMEs. No build step, no framework, no package manager — just three files served directly.

## Running locally

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or: python -m http.server 8080
```

There are no build, lint, or test commands.

## Architecture

The site is three files:

- **[index.html](index.html)** — all markup and page content. Sections follow the nav order: `#enfoque`, `#amenazas`, `#modulos`, `#metodo`, `#acerca`, `#contacto`.
- **[styles.css](styles.css)** — all styles. Uses CSS custom properties. Layout uses CSS Grid and Flexbox, no utility framework.
- **[script.js](script.js)** — vanilla JS only, no libraries. Three responsibilities: nav scroll/mobile menu, module accordion rendering, and the threats carousel.

## Dynamic content via embedded JSON

Two sections are data-driven. Their content lives in `<script type="application/json">` tags inside `index.html`, parsed and rendered at runtime by `script.js`:

- `#threats-data` — 5 threat cards rendered into the carousel (`#amenazas` section)
- `#modules-data` — 7 module entries rendered into the accordion grid (`#modulos` section)

To add or edit threats or modules, update only these JSON blocks in `index.html` — no JS changes needed.

## Fonts

Loaded from Google Fonts: **Instrument Serif** (headings/italic), **Geist** (body), **JetBrains Mono** (code snippets and the `[MM]` monogram).

## Deploy

Push to `main` → Vercel redeploys automatically (configured to detect static site, no build command needed).
