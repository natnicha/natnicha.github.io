# Session context — personal profile site

**Purpose of this file:** drop-in context so a new Claude Code session (or future me) can
pick this work up immediately without re-reading the PDFs or re-deriving decisions.

- **Date of session:** 27 September 2026
- **Working directory:** `C:\Users\natnicha.rodtong\Documents\Personal`
- **Owner:** Natnicha Rodtong (Fern) — SE / Team Leader at IT One (Accenture Thailand partner)
- **Not a git repo yet.** Files are loose in `Documents\Personal`.

---

## 1. What was asked

In order, across the session:

1. Read two CVs, understand them, fill gaps:
   - `NatnichaR-CV_20260620EN.pdf` — newer (Jun 2026), condensed, 3 pages
   - `NatnichaR-CV_20260608TH.pdf` — older (Jun 2026), **far more detail**, 5 pages,
     content is in English despite the `TH` filename
2. Combine both into one revised set of information.
3. Build proper **templates** for an HTML profile suitable for a personal GitHub profile.
4. Output into `C:\Users\natnicha.rodtong\Documents\Personal\`.
5. *(mid-session)* Offer **several professional / technology / developer / readable themes**.
6. *(mid-session)* Allow **more than one page** — link to separate project detail pages.
7. *(mid-session)* Add **Claude Code** to the AI skills.
8. *(mid-session)* Change Focus to **Web/Application Development · Platform · Cloud**.
9. *(mid-session)* **Calculate years of experience at runtime**: `now() − 05/2016 − 3 years`.
10. *(mid-session)* Write this context file.
11. *(mid-session)* Fix the inconsistent gap before the first "earlier" role in the timeline.
12. *(mid-session)* Map her public GitHub repos onto the project case studies.
13. *(mid-session)* Make the footer copyright year self-calculating (it already was; it is
    now also seeded in the HTML so it degrades without JS).
14. *(mid-session)* Export the CV as **3-page** `.docx` and `.pdf`.
15. *(mid-session)* Check education info everywhere — she confirmed
    **B.Eng. Computer Engineering, First Class Honours, KMUTT, 2016** is correct as
    written; the only real defect was the "Key achievements" line in the PDF and DOCX
    dropping the field of study ("B.Eng. First Class Honours"). Fixed and regenerated.

16. *(mid-session)* Fix the broken "Download CV" button.

All sixteen are done.

**Bug fixed in #16 — worth remembering.** `initChrome()` bound print handlers with
`document.querySelectorAll("[data-print]")`, but it runs *before* `renderHome()`, which is
what creates the hero "Download CV" button — so that button had no listener. The header
printer icon worked because `initChrome` creates it itself. Now a **delegated** listener on
`document` handles any `[data-print]` control regardless of render order. Same trap applies
to any future control rendered by `renderHome()` / `renderProject()`: bind by delegation,
never with `querySelectorAll` inside `initChrome()`.

17. *(mid-session)* "Download CV" must **generate** the PDF, not link the pre-built file.

**Decided behaviour for "Download CV" (#17).** It briefly linked `NatnichaR-CV_2026.pdf`;
she rejected that. It now calls `doPrint()` — expands the hidden earlier roles, swaps
`document.title` to `NatnichaRodtong-CV` so that becomes the browser's suggested filename,
prints, then restores the title on `afterprint` (with a 1s `setTimeout` fallback). The
`cvFile` field was removed from `PROFILE`. Consequence: **the site does not need
`NatnichaR-CV_2026.pdf` committed**, and the download always matches what is on screen.
The standalone `NatnichaR-CV_2026.pdf` / `.docx` remain separate artefacts for sending to
people directly.

---

## 2. What exists now

```
Personal/
├─ index.html                  home page (thin shell, renders from data.js)
├─ README.md                   deploy + customisation guide for the site
├─ NatnichaR-CV_MASTER.md      merged CV, prose source of truth, [VERIFY] markers
├─ PROFILE-SITE-CONTEXT.md     this file
├─ assets/
│  ├─ data.js                  ALL CONTENT: CAREER, PROFILE, PROJECTS
│  ├─ site.css                 5 themes x light/dark + every component style
│  └─ site.js                  theme engine, {{YEARS}} token, 3 renderers
└─ projects/
   ├─ index.html               listing + category filter buttons
   ├─ _template.html           source template, contains literal __SLUG__
   └─ 10 x <slug>.html         detail pages
```

Original PDFs remain untouched in the same folder.

---

## 3. Key decisions and why

| Decision | Rationale |
|---|---|
| Content lives **only** in `assets/data.js` | HTML files are shells; editing content never means touching markup |
| Static, zero-dependency, no build step | Must drop straight onto GitHub Pages and open by double-click |
| Five switchable themes rather than one | She asked for choices; a live switcher beats picking blind from descriptions |
| Real `<slug>.html` files, not `?p=slug` | Better for GitHub Pages, sharing, and search indexing |
| `{{YEARS}}` token computed at load | Explicit request — the number must never go stale |
| Phone / DOB / address excluded from the site | They appear in the PDF CVs but should not be on a public web page |
| Avatar = `https://github.com/natnicha.png` | No Python/pdfimages on this machine to extract the CV photo; GitHub avatar is a sane default with an initials fallback |

### The five themes
`slate` (Nordic Slate, default) · `github` · `terminal` · `indigo` · `editorial`.
Defined as CSS custom-property blocks at the top of `site.css`, selected via
`html[data-palette=…]` combined with `html[data-theme="light|dark"]`.
`terminal` swaps headings to monospace; `editorial` swaps them to serif.

### Years-of-experience rule (confirmed by the user, corrected once)
```js
const CAREER = { startYear: 2016, startMonth: 5, gapMonths: 30 };
```
Working since **1 May 2016**, minus a **2.5-year Master's break** (30 months), floored.
**7+ as of Sep 2026; ticks to 8+ in Nov 2026.**
Verified: 2026-09-27 → 7, 2026-11-01 → 8, 2027-11-01 → 9, 2028-11-01 → 10.
*(First pass used `gapYears: 3`, which she corrected to 2.5. `gapMonths` is now the
field — `yearsOfExperience()` still falls back to `gapYears * 12` if only that is set.)*
Rendered wherever a string contains `{{YEARS}}`; substitution happens in
`tpl()` / `setHTML()` in `site.js`.

---

## 4. Content model (`assets/data.js`)

- `CAREER` — the two knobs behind `{{YEARS}}`.
- `PROFILE` — `name, role, availability, tagline, location, email, badge, photo,
  initials, links{github,linkedin,medium,zenodo}, facts[], highlights[], about[],
  contactBlurb, skills[[group, items[]]], experience[], education[], writing[]`.
  - `experience[].early: true` → hidden behind the "Show 8 earlier roles" button.
    **All 13 roles render into a single `#timeline`**; early ones are `hidden`
    `<article>`s inside it, not a second list. An earlier version used two separate
    `.timeline` divs, which killed the 36px gap at the seam, split the vertical rail,
    and pushed the 2023 TU Chemnitz roles *below* Ascend Money (Dec 2021) when
    expanded. One list keeps spacing, the rail, and reverse-chronological order correct.
  - `experience[].current: true` → highlighted timeline dot.
  - `experience[].project: "<slug>"` → renders "Read the case study" link.
- `PROJECTS` — 10 entries; 5 have `featured: true` and appear on the home page.
  Categories in use: Platform, Research, Full-stack, Product, Data & BI.

**Counts (verified):** 13 experience entries (8 early), 12 skill groups, 10 projects,
5 featured, 0 broken project cross-references.

### GitHub repos wired in (fetched from the public API, 27 Sep 2026)

She has **15 public repos**. 9 are mapped onto case studies via a `repos: []` array on the
PROJECTS entry (name, url, lang, desc); a 10th is attached to the publication card as
`link2`. All 10 URLs verified HTTP 200.

| Project slug | Repos |
|---|---|
| `k8s-rl-autoscaling` | `master-thesis-auto-scaler`, `master-thesis-docker-manipulation-API`, `master-thesis-image-classification` |
| `pv-calculator` | `…photovoltaic-system-app`, `-services`, `-batch`, `natnicha-…-cron` |
| `semantic-module-search` | `BeAcross` |
| `journi` | `journi-web` |
| publication card | `natural-language-effects-pair-programming` |

**Deliberately unmapped** (nothing on the CV corresponds to them — ask before using):
`planspiel-web-scraping`, `bangkok-bank-assignment`, `github-copilot-training`,
`natnicha` (profile README repo), `natnicha.github.io` (**already exists** — check what is
in it before pushing this site there).

Six case studies have no public code and say so implicitly: `logistics-platform`,
`search-data-platform`, `mutual-fund-backend`, `audio-evaluation`,
`gov-analytics-platform`, `ar-dictionary` — all client or proprietary work.

**Accuracy fix the repos forced:** both PDFs say the thesis control API was *FastAPI*.
The repo descriptions show the control plane (`master-thesis-docker-manipulation-API`) is
**Flask**, and FastAPI is the *target* image-classification workload. The case study and
its ASCII diagram now reflect that; the CV wording should be corrected too.

### Project slugs
`logistics-platform`, `k8s-rl-autoscaling`, `search-data-platform`,
`semantic-module-search`, `mutual-fund-backend`, `journi`, `audio-evaluation`,
`pv-calculator`, `gov-analytics-platform`, `ar-dictionary`.

---

## 5. What the merge actually added

The newer EN CV had dropped a lot. Recovered from the older TH-named CV:

- **Roles missing entirely from the EN CV:** Student Software Developer at TU Chemnitz
  (Mar–Aug 2023, photovoltaic calculator); Trainee/Master's Internship (Oct 2023–Mar 2024,
  OWL ontology module search); Co-founder at AllInCode (Sep 2017–Jul 2019, AR dictionary);
  Data Analyst at KPMG Audit (Jan–Jun 2019); IT Engineer at Thai NS Solutions
  (Jun 2016–Dec 2018); Trainee at NECTEC/NSTDA (Mar–Apr 2014, OpenStack GPU passthrough).
- **Skills missing from the EN CV:** Node.js, C, C++, C#, VBA, Power BI, Tableau, UiPath,
  PowerShell / Z shell / Nano, Agile & Waterfall methodology.
- **Links missing from the EN CV:** Zenodo publication record, `journi-web` repo URL.
- **Detail missing from the EN CV:** per-role task breakdowns, the Fraunhofer ISST
  collaboration specifics, the KPMG insurance/BRD/mystery-shopping work, the "Pilot to
  MS SQL Server" and Power BI enablement sessions.

Kept from the newer EN CV: the professional-summary framing, AWS cert validity dates,
AWS Gen-AI training (Bedrock / RAG / Guardrails), and the current IT One role framing.

### Items I added or inferred — still marked [VERIFY] in `NatnichaR-CV_MASTER.md`
- **SAP S/4HANA integration** on the current IT One role.
- **15 services delivered through UAT to production go-live** on the current role.

Both came from current project context, not from either PDF. They are already live in
`data.js` and on the `logistics-platform` case study. **If she has not confirmed them,
confirm before the site is published publicly** — and consider whether naming the client
sector ("a major building-materials group") is acceptable. Client names are deliberately
generic on the site; the employer names match what is already on her CV.

---

## 5b. CV exports (PDF + DOCX)

Requested as "3 pages, good looking, professional, technology, easy to read". `.prd` in the
request was read as **PDF**.

| File | Built from | Tool |
|---|---|---|
| `NatnichaR-CV_2026.pdf` | `NatnichaR-CV_print.html` | headless Chrome `--print-to-pdf` |
| `NatnichaR-CV_2026.docx` | `build-cv-docx.js` | Node + `docx` npm package |

Both land on **exactly 3 pages** (PDF verified by reading it back; DOCX verified via Word
COM `ComputeStatistics(2)`). These are standalone — they do **not** share `assets/data.js`
with the website, so a content change must be applied in up to three places:
`assets/data.js`, `NatnichaR-CV_print.html`, and `build-cv-docx.js`.

Chrome needs `--user-data-dir` and `--virtual-time-budget`; without them the render
silently produces no file. Exact commands are in `README.md`.

Layout: single column (ATS-friendly), accent `#1F5FA8` matching the site's slate theme,
9.1pt body, tabular right-aligned dates, shaded "Stack:" line per role, two-column
Education/Certifications block. ~1,514 words.

---

## 6. Verification already performed

- `node --check` passes on `assets/data.js` and `assets/site.js`.
- Data model smoke test: no broken `experience → project` references, no project missing
  required fields.
- Every DOM id referenced by `renderHome()`, `renderProjectIndex()`, and
  `renderProject()` exists in the corresponding HTML.
- All 10 `PROJECTS` slugs have a matching `projects/<slug>.html`, and every generated page
  calls `renderProject()` with the right slug.
- `{{YEARS}}` maths checked against three dates.

**Not yet done:** nobody has opened the site in a browser. Visual QA across the five
themes, both modes, and mobile widths is the obvious next step.

---

## 7. Likely next steps

1. Open `index.html` in a browser; try all five themes, dark/light, and a narrow window.
2. Confirm or remove the two `[VERIFY]` claims (SAP S/4HANA, 15 services).
3. Decide the default theme; pin it in `DEFAULT_PALETTE` (`site.js`) **and** in the
   `data-palette` attribute of every HTML file.
4. Replace the GitHub avatar with a real photo at `assets/profile.jpg` if preferred.
5. Publish: new repo `natnicha.github.io`, commit `index.html`, `assets/`, `projects/`.
6. Optionally add a `natnicha/natnicha` profile README linking to the Pages site.
7. Optionally regenerate the PDF CV from `NatnichaR-CV_MASTER.md` so PDF and site agree.

---

## 8. Environment notes

- Windows 11, PowerShell primary, Git Bash available.
- **No Python, no ImageMagick, no pdftoppm/pdfimages** on PATH — that is why the CV photo
  was never extracted from the PDF.
- **Node.js is available** (`C:\Program Files\nodejs\node.exe`) — used for `--check` and
  the data smoke tests.
- Large file writes via Bash heredoc failed in this session (unexpected EOF); the Write
  tool was used instead. Prefer Write for anything sizeable here.
