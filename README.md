# Natnicha Rodtong — personal profile site

A static, dependency-free profile site: one home page plus a project section with a
detail page per case study. No build step, no frameworks, no trackers. Works by
double-clicking `index.html`, and deploys to GitHub Pages as-is.

---

## Files

```
Personal/
├─ index.html                  home page
├─ README.md                   this file
├─ NatnichaR-CV_MASTER.md      merged CV — prose source of truth
├─ PROFILE-SITE-CONTEXT.md     session context / handoff notes
├─ assets/
│  ├─ data.js                  ← ALL CONTENT LIVES HERE (PROFILE + PROJECTS)
│  ├─ site.css                 5 themes + all styling
│  └─ site.js                  theme engine, renderers, interactions
└─ projects/
   ├─ index.html               projects listing with category filters
   ├─ _template.html           copy this to add a new project page
   └─ <slug>.html              10 project detail pages
```

**To change content, edit `assets/data.js` only.** The HTML files are thin shells.

---

## Themes

Five themes ship with the site, each with a light and a dark mode. Use the palette
button in the header to switch; the choice is saved to `localStorage`.

| Theme | Feel | Best for |
|---|---|---|
| **Nordic Slate** *(default)* | Clean professional blue | Recruiters, corporate audiences |
| **GitHub** | Matches GitHub's own palette | Blending into a GitHub Pages site |
| **Terminal** | Near-black, monospace headings, green accent | Signalling "developer" hard |
| **Indigo** | Modern SaaS indigo/violet | Product and startup audiences |
| **Editorial** | Warm cream, serif headings | Maximum readability, long-form feel |

To pin one as the default for every visitor, change two things:

1. `DEFAULT_PALETTE` near the top of `assets/site.js`
2. the `data-palette="slate"` attribute on `<html>` in each HTML file (prevents a
   flash of the wrong theme before JS runs)

To drop the switcher entirely, delete the `paletteBtn` button and `picker` div from the
header markup in `initChrome()`.

---

## Years of experience — calculated, not hard-coded

Anywhere the site mentions years of experience it writes `{{YEARS}}`, which is replaced
at page load. The rule lives at the top of `assets/data.js`:

```js
const CAREER = {
  startYear: 2016,
  startMonth: 5,    // started 1 May 2016 — first professional role
  gapMonths: 30     // 2.5 years out for the Master's degree, subtracted
};
```

`(today − 1 May 2016) − 30 months`, floored to whole years. That is **7+ years** as of
September 2026, ticking to 8+ in **November 2026** without anyone editing a file. Use
`{{YEARS}}` in any new string and it will be substituted too.

---

## Adding a project

1. Add an object to `PROJECTS` in `assets/data.js` with a unique `slug`.
2. Copy `projects/_template.html` to `projects/<slug>.html`.
3. Replace `__SLUG__` in the `renderProject("__SLUG__")` call at the bottom of the copy.

Set `featured: true` to also surface it in "Selected work" on the home page. The
`category` field automatically becomes a filter button on the projects index.

### Linking GitHub repositories

Add a `repos: []` array to any project. Each entry renders a card in a **Source code**
section at the bottom of the detail page, puts a *Source code* button in the header, and
shows an "N repos" badge on the project card:

```js
repos:[
  { name:"journi-web", lang:"TypeScript · React",
    url:"https://github.com/natnicha/journi-web",
    desc:"What this repository contains." }
]
```

Currently wired: `k8s-rl-autoscaling` (3 repos), `pv-calculator` (4),
`semantic-module-search` (1), `journi` (1), plus the publication card's analysis repo.
The other six case studies are client or proprietary work with no public code.

Project entry shape:

```js
{
  slug:"my-project", title:"…", tag:"short label", category:"Platform",
  year:"2025", thumb:"MP", featured:true, lede:"one-paragraph summary",
  spec:[["Role","…"],["Timeframe","…"]],
  stack:["Go","PostgreSQL"],
  links:[{href:"https://…", label:"View on GitHub"}],
  body:[
    { h:"Overview", p:"…" },
    { h:"What I built", points:["…","…"] },
    { h:"Architecture", arch:"ASCII diagram" },
    { h:"Results", results:[["15","services"]], callout:"<strong>Note.</strong> …" }
  ]
}
```

Generating several pages at once (Git Bash):

```bash
cd projects
for s in slug-one slug-two; do sed "s/__SLUG__/$s/" _template.html > "$s.html"; done
```

---

## Publishing to GitHub Pages

**Option A — profile site at `natnicha.github.io`**

```bash
# in a copy of this folder, without the CV/context markdown if you prefer
git init
git add index.html assets projects
git commit -m "Add personal profile site"
git branch -M main
git remote add origin https://github.com/natnicha/natnicha.github.io.git
git push -u origin main
```

Live at `https://natnicha.github.io` within a minute or two.

**Option B — any repo**: push the files, then *Settings → Pages → Build and deployment →
Deploy from a branch → `main` / `(root)`*.

**Linking it from your GitHub profile README** (the `natnicha/natnicha` repo):

```markdown
🌐 **[natnicha.github.io](https://natnicha.github.io)** — full profile, experience, and project case studies
```

---

## CV exports (PDF + Word)

Two 3-page CV files are generated from the same content, independent of the website:

| File | Source | Regenerate with |
|---|---|---|
| `NatnichaR-CV_2026.pdf` | `NatnichaR-CV_print.html` | headless Chrome (below) |
| `NatnichaR-CV_2026.docx` | `build-cv-docx.js` | Node + the `docx` package |

**PDF** — edit `NatnichaR-CV_print.html`, then:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --user-data-dir="$TEMP/chrome-cv-profile" --virtual-time-budget=8000 \
  --print-to-pdf="NatnichaR-CV_2026.pdf" NatnichaR-CV_print.html
```

**DOCX** — edit the `SKILLS` / `JOBS` arrays in `build-cv-docx.js`, then:

```bash
npm install docx
node build-cv-docx.js "NatnichaR-CV_2026.docx"
```

Both are laid out to land on exactly **3 pages** — verified at 3 pages in Chrome and in
Word. If you add bullets, re-check the page count; the PDF has roughly a third of a page
of slack at the end, the DOCX slightly less.

---

## Profile photo

The avatar defaults to your GitHub avatar (`https://github.com/natnicha.png`), with an
initials monogram as fallback if it fails to load. To use your own image instead, save it
as `assets/profile.jpg` and set:

```js
photo: "assets/profile.jpg",
```

On project pages the path is relative to the page, so prefer an absolute URL or
`../assets/profile.jpg` if you move it.

---

## Notes

- **Print / PDF.** The header print button (and "Download CV") expands the collapsed
  earlier roles and opens the print dialog. Print styles force a clean light one-column
  layout regardless of the active theme, so `Ctrl/Cmd + P → Save as PDF` gives a usable CV.
- **Accessibility.** Semantic landmarks, a skip link, visible focus rings, `aria` state on
  all toggles, and full `prefers-reduced-motion` support.
- **Privacy.** Phone number, date of birth, and home address from the PDF CV are
  deliberately **not** on the website. Only email and public profile links are exposed.
- **Offline.** Everything works offline except the GitHub-hosted avatar.
- **Browser support.** Modern evergreen browsers. `color-mix()` powers the translucent
  header and degrades gracefully via an `@supports` fallback.
