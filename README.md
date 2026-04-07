# reecerunnells.github.io

Personal portfolio site, built with [Eleventy](https://www.11ty.dev/) (`@11ty/eleventy`).

## Branches

- **`main`** — production. Pushes here build the site and deploy to the `gh-pages` branch (GitHub Pages).
- **`dev`** — day-to-day work. Pushes here run CI (build only); nothing is deployed until you merge into `main`.

Suggested flow: branch from `dev` (or work directly on `dev`), open PRs into `dev`, and when you are ready to release, merge `dev` → `main`.

## Local development

```bash
npm install
npm run dev
```

Then open the URL Eleventy prints (usually `http://localhost:8080`).

```bash
npm run build
```

Output is written to `_site/`.

## Customize

- Global metadata: `src/_data/site.json`
- Nav links: `src/_data/navigation.json`
- Résumé-style roles: `src/_data/experience.json`
- Styles: `src/css/main.css`
- Pages: `src/*.md`, layout: `src/_includes/layouts/base.njk`

## GitHub Pages

In the repo **Settings → Pages**, set the source to deploy from the **`gh-pages`** branch (root). If you use the included workflow, it updates that branch on every push to **`main`**.
