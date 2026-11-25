# Paint It Forward — website concept (v0.1)

A responsive design concept for the Paint It Forward website, for Emily's review. This is a reference for implementation, not the live site. The live site stays on Wix at https://www.paintitforward.co/, and nothing here changes it.

## Open it

No build step. Open `index.html` in a browser, or serve the folder with any static server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's inside

| Path | What |
|---|---|
| `index.html` | All three views: Home, Chapters (`#chapters`) and Get involved (`#get-involved`) |
| `assets/tokens.css` | Design tokens from the Paint It Forward design system v0.1 |
| `assets/site.css` | Page layouts and components built on the tokens |
| `assets/site.js` | Mobile menu and hash-based view switching |
| `assets/logo.jpg` | Original Paint It Forward logo (unchanged) |
| `assets/art-community.jpg`, `assets/community.jpg` | Photos shared by Emily |
| `CONCEPT_NOTES.md` | Review notes: copy provenance, omissions, site issues found, checks run |

Every block of copy is tagged `data-copy="source"` (taken from the current site, 24 Nov 2026) or `data-copy="proposed"` (new draft copy).

## Before going live

- Get Emily's approval of the direction, copy and any major change.
- Confirm photo permissions and attribution, chapter details and which statistics may be shown (see `CONCEPT_NOTES.md`).
- Self-host DM Sans with its licence, or drop the Google Fonts import and use the system fallback.
- Rebuild the pages in Wix. Purchases and donations stay on the existing Wix shop and donation pages.

## Rights

See `NOTICE.md`. The logo and photos are not open-licensed.
