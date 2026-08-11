# kilvish25.github.io

Personal portfolio of Dharmendra Ahirwar — platform & infrastructure engineer.

Live at [kilvish25.github.io](https://kilvish25.github.io).

## Stack

- Next.js 15 (App Router, static export to `out/`)
- Tailwind CSS 4
- Fonts: Archivo (display), IBM Plex Sans (body), IBM Plex Mono (data)
- No trackers, no analytics, no backend

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

Design-review screenshots: `node scripts/shot.js` (serves `out/` must already be running on :4173; writes to `shots/`, git-ignored).

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it via GitHub Pages (Actions source).
