# SHaRC Website

Public website for **SHaRC — Sheffield Hardware and Reconfigurable Computing**, the University of Sheffield's student-led chip design group.

**Live site:** https://sheffield-chip-design-team.github.io/SHaRC/

## Stack

Plain HTML, CSS and vanilla JavaScript — no build step, no dependencies. GitHub Pages serves the repo as-is.

```
index.html              the site (single page)
assets/css/style.css    styles (palette + type defined in BRANDING.md)
assets/js/main.js       nav, scroll reveals, counters, hero chip animation
assets/brand/           SVG logo colourways (master uses currentColor)
assets/img/logos/       original high-res PNG logos
BRANDING.md             brand guidelines
```

## Local development

Any static server works:

```sh
python3 -m http.server 4173
# open http://localhost:4173
```

## Contributing

- All work happens on the **`dev`** branch (or feature branches off it).
- Open a pull request into `main`. **`main` is protected** — only the maintainer merges, and every merge deploys the live site.
- Follow `BRANDING.md` for colours, type and logo usage.

## Deployment

GitHub Pages builds from the `main` branch root. Merging a PR into `main` is a deploy.
