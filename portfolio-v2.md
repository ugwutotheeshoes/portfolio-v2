# portfolio-v2

Emmanuel Ugwu's personal portfolio. Plain HTML, CSS and JavaScript — no framework, no build step.

## Run it

Open `index.html` in a browser, or serve the folder so relative links behave like production:

```sh
python3 -m http.server 8080   # then visit http://localhost:8080
```

Deploy by uploading the folder as-is to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Homepage: bio, selected work, experience, stack, writing |
| `work.html` | All projects, list/grid toggle |
| `work/<slug>.html` | One case study per project. Each has its own structure on purpose |
| `css/styles.css` | Tokens (light/dark), base, every shared component |
| `js/data.js` | **The content file** — site links, projects, jobs, stack, articles |
| `js/main.js` | Theme toggle, navbar scroll state, footer clock, renders lists from `data.js`, homepage covers |
| `assets/img/` | Screenshots, avatar, halftone texture, cover art |
| `assets/og-image.png` | Social share image (1200×630) |
| `og/og.html` + `og/render.sh` | Source + script that re-render the OG image with headless Chrome |
| `favicon.svg` | The ü mark (adapts to dark mode) |

## Common edits

- **Add a project:** add an entry to `PROJECTS` in `js/data.js` (set `featured: true` to show it on the homepage), then create `work/<slug>.html` — copy any existing case study and restructure it.
- **Hide a project:** set `hidden: true` on it in `js/data.js` (Faber Reach is hidden for now), and point the previous case study's “next project” link past it.
- **Add an article / tool / job:** edit `ARTICLES`, `STACK` or `JOBS` in `js/data.js`.
- **Email / GitHub / LinkedIn / résumé:** `SITE` in `js/data.js`. Résumé file goes at `assets/resume.pdf`.
- **Re-render the OG image:** `./og/render.sh`.
- **Social-preview tags:** `python3 og/meta.py` rewrites the Open Graph/Twitter block on every page. Once the site has a domain, run `python3 og/meta.py https://your-domain` so previews use absolute URLs.

## Conventions

- Tokens live on `:root` / `html[data-theme="dark"]`. Accent is dark red `#A61B1B` (lighter `#E2584D` in dark mode).
- Fonts: Inter (body), JetBrains Mono (labels, tools, captions). Covers use Big Shoulders Display, Bebas Neue, Instrument Serif.
- Small lowercase section headers use the accent colour.
- No list numbers or item counts anywhere — the content grows.
- Tool lists: a dot never starts a line (dots are attached to the item before them).
- Right arrows tip to ↗ on hover; back links sweep right-to-left and tip to ↖.
- Case studies never describe architecture, request routing, auth or security setup.
- Respect `prefers-reduced-motion` (handled globally in `styles.css`).

## Still to fill in

- Faber Reach lab notes in `work/faber-reach.html`
- Run `python3 og/meta.py https://<domain>` once there's a domain
