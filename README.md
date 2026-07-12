# Same As It Ever Was

**A fact-check &amp; perspective engine.**

Every claim, checked against reputable sources — and next to every one, the receipt
from history showing a president before him who said or did the very same thing.

The goal isn't to tell you how to feel. It's to hand you two things at once:
**accurate facts** and **historical perspective**. There were nutsos before. There'll
be nutsos after. The republic keeps standing. *This too shall pass.*

## Features

- **Fact-Check Feed** — real, well-documented claims with plain-English verdicts
  (False / Misleading / Needs Context) and links to non-partisan sources:
  AP, Reuters, PolitiFact, FactCheck.org, The Washington Post Fact Checker,
  court records, and government agencies.
- **History Rhymes** — every fact-check expands into a documented parallel from a
  past president (Adams jailing journalists, Hoover's tariffs, Jackson crying stolen
  election, and more).
- **The Matrix** — a searchable, filterable, sortable table of documented
  controversies across *every administration and every role* (presidents, VPs,
  cabinet secretaries, advisors, staff), each with the date it was said or reported
  and a reputable source. Filter by role / administration / verdict; sort by date,
  person, or administration.
- **Zoom Out timeline** — 240 years of "unprecedented" scandals, all survived.
- **Panic-o-Meter™** — a deliberately reassuring gauge.
- **Take a Breath** — a rotating perspective generator.
- **Search &amp; verdict filters**, **dark/light theme** (remembered across visits),
  responsive and accessible.

## Running it

It's a static site with **no build step and no dependencies**. Either:

```bash
# just open it
open index.html

# or serve it locally
python3 -m http.server 8000   # then visit http://localhost:8000
```

Deploys as-is to GitHub Pages, Netlify, Vercel, or any static host.

## Structure

```
index.html              # markup + sections
assets/css/styles.css   # dark-first, light-aware styling
assets/js/data.js       # fact-checks, historical parallels, timeline, perspectives
assets/js/app.js         # rendering, filtering, search, theme, widgets
```

## Editing the content

All content lives in `assets/js/data.js`:

- `FACT_CHECKS` — add an object with a `claim`, `verdict`
  (`"false" | "misleading" | "context"`), `summary`, `sources[]`, and a `rhyme`
  (the historical parallel). Keep every source reputable and every parallel real.
- `ENTRIES` — the Matrix. Add `{ date, dateText, person, role, admin, party, topic,
  tag, summary, source }`. `date` is ISO (`YYYY-MM-DD`) for sorting; `dateText` is the
  human label shown. `tag` is one of `False | Misleading | Needs Context |
  Broken Promise | Scandal | Gaffe | Overreach`. You don't need to set `roleCat` or
  `theme` by hand — run `node normalize-entries.js` and they're computed for you
  (it also decodes stray HTML entities, de-dupes by person+date, and re-sorts).
  `roleCat` drives the Role filter's ~11 buckets; `theme` drives the per-row
  "History rhymes" reveal. Role/administration filters populate from the data.

After editing entries: `node normalize-entries.js && node build-standalone.js`.
- `TIMELINE` — add `{ year, president, event }`.
- `PERSPECTIVES` — add a reassuring, factual one-liner.

## The standalone build

`standalone.html` is a single self-contained page (all CSS/JS inlined) generated
from the source files. It's what gets published as the shareable preview, so the
live site and the preview share one source of truth. After editing anything under
`assets/`, regenerate it:

```bash
node build-standalone.js   # writes standalone.html
```

## A note on accuracy

This is an educational and editorial project. Verdicts summarize reporting from the
linked sources — click through and judge for yourself. Historical parallels are
documented events, not endorsements of any figure. If a fact-check needs updating or
a source rots, open a PR.
