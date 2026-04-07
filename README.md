# reecerunnells.github.io

Personal portfolio site, built with [Eleventy](https://www.11ty.dev/) (`@11ty/eleventy`).

## Deploys

**GitHub Actions deploys only on push to `main`** (minified build → `gh-pages`).

Work locally or on any other branch until you are ready; nothing updates the live site until you merge or push to `main`. Opening a PR **into** `main` runs a CI build (no deploy) so you can verify it before merging.

## Local development

```bash
npm install
npm run dev
```

Then open the URL Eleventy prints (usually `http://localhost:8080`).

```bash
npm run build
npm run build:prod   # same output as CI (minified)
```

Output is written to `_site/`.

## Customize

- Global metadata: `src/_data/site.json`
- Nav links: `src/_data/navigation.json`
- Résumé-style roles: `src/_data/experience.json`
- Styles: `src/css/main.css`
- Pages: `src/*.md`, layout: `src/_includes/layouts/base.njk`

## GitHub Pages

In the repo **Settings → Pages**, set the source to deploy from the **`gh-pages`** branch (root). The workflow updates that branch on pushes to **`main`**.
