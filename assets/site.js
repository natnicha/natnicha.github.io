/* ===========================================================================
   Natnicha Rodtong — site behaviour
   ---------------------------------------------------------------------------
   Exposes:
     initChrome()          header, nav, theme picker, print, reveal  (all pages)
     renderHome()          home page sections
     renderProjectIndex()  projects/index.html
     renderProject(slug)   projects/<slug>.html
   Depends on data.js (PROFILE, PROJECTS).
   =========================================================================== */
(function () {
"use strict";

/* ---------------------------------------------------------------------------
   Themes
--------------------------------------------------------------------------- */
const THEMES = [
  { id:"slate",     name:"Nordic Slate", note:"Professional · corporate-safe",
    sw:["#ffffff","#1f5fa8","#1c2430"] },
  { id:"github",    name:"GitHub",       note:"Native GitHub look",
    sw:["#ffffff","#0969da","#1f2328"] },
  { id:"terminal",  name:"Terminal",     note:"Developer · mono headings",
    sw:["#0b0f0d","#3fd27a","#d4e2d8"] },
  { id:"indigo",    name:"Indigo",       note:"Modern SaaS",
    sw:["#ffffff","#4f46e5","#1a1a2e"] },
  { id:"editorial", name:"Editorial",    note:"Warm serif · easiest to read",
    sw:["#fdfcf9","#a8491d","#221e18"] }
];

const DEFAULT_PALETTE = "slate";   // <- change this to pin a different default
const LS_PAL = "nr-palette", LS_MODE = "nr-theme";
const root = document.documentElement;
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(_) { return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(_) {} }
};

function applyPalette(id){
  root.setAttribute("data-palette", id);
  store.set(LS_PAL, id);
  document.querySelectorAll(".theme-opt").forEach(b =>
    b.setAttribute("aria-checked", String(b.dataset.pal === id)));
}
function applyMode(mode){
  root.setAttribute("data-theme", mode);
  store.set(LS_MODE, mode);
  const b = document.getElementById("themeBtn");
  if (b) b.setAttribute("aria-pressed", String(mode === "dark"));
}

/* Applied as early as possible to avoid a flash of the wrong theme. */
applyPalette(store.get(LS_PAL) || DEFAULT_PALETTE);
applyMode(store.get(LS_MODE) ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

/* ---------------------------------------------------------------------------
   Icons
--------------------------------------------------------------------------- */
const ICON = {
  pin:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  globe:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
  ext:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  gh:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.6 4.8 18.6 5.1 18.6 5.1c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  li:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.4h4.5V24H.2zM8.1 8.4h4.3v2.1h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.5 3 5.5 6.9V24h-4.5v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24H8.1z"/></svg>',
  md:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 7.2c2.9 0 5.3 2.4 5.3 5.4s-2.4 5.4-5.3 5.4-5.3-2.4-5.3-5.4 2.4-5.4 5.3-5.4zm9.6.3c1.5 0 2.7 2.3 2.7 5.1s-1.2 5.1-2.7 5.1-2.7-2.3-2.7-5.1 1.2-5.1 2.7-5.1zm5.2.5c.5 0 1 2.1 1 4.6s-.4 4.6-1 4.6-1-2.1-1-4.6.4-4.6 1-4.6z"/></svg>',
  doc:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>',
  print:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',
  palette:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r="1.2"/><circle cx="17.5" cy="10.5" r="1.2"/><circle cx="8.5" cy="7.5" r="1.2"/><circle cx="6.5" cy="12.5" r="1.2"/><path d="M12 22a10 10 0 1 1 10-10c0 2.5-2 3-3.5 3H16a2 2 0 0 0-1.4 3.4A2 2 0 0 1 12 22z"/></svg>',
  sun:  '<svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
};

const el = (id) => document.getElementById(id);

/* ---------------------------------------------------------------------------
   Years of experience — computed on every page load, never hard-coded.
   Elapsed months since CAREER.startYear/startMonth, minus CAREER.gapMonths
   (time out for the Master's degree), floored to whole years.
--------------------------------------------------------------------------- */
function yearsOfExperience(when){
  const c = (typeof CAREER !== "undefined")
    ? CAREER : { startYear:2016, startMonth:5, gapMonths:0 };
  const now = when || new Date();
  const gap = (c.gapMonths != null) ? c.gapMonths : (c.gapYears || 0) * 12;
  const months =
    (now.getFullYear() - c.startYear) * 12 +
    (now.getMonth() + 1 - c.startMonth) -
    gap;
  return Math.max(0, Math.floor(months / 12));
}

/* Replaces {{YEARS}} (and any future tokens) in rendered content. */
const TOKENS = { YEARS: () => String(yearsOfExperience()) };
function tpl(s){
  return String(s).replace(/\{\{(\w+)\}\}/g, (m, k) =>
    TOKENS[k] ? TOKENS[k]() : m);
}
/* innerHTML assignment with token substitution */
function setHTML(id, html){ const n = el(id); if (n) n.innerHTML = tpl(html); }

/* ---------------------------------------------------------------------------
   Chrome: header, nav, theme picker, print, reveal, scrollspy
--------------------------------------------------------------------------- */
function initChrome(opts){
  const o = opts || {};
  const base = o.base || "";                 // "" on home, "../" inside /projects
  const navItems = o.nav || [];

  /* header markup */
  const head = document.createElement("header");
  head.className = "site-head";
  head.id = "siteHead";
  head.innerHTML = `
    <div class="head-inner">
      <a class="brand" href="${base}index.html">Natnicha<span>.</span></a>
      <nav class="nav" id="nav" aria-label="Main"></nav>
      <div class="head-actions">
        <button class="icon-btn" id="paletteBtn" type="button" title="Change theme"
                aria-label="Change theme" aria-haspopup="true" aria-expanded="false">${ICON.palette}</button>
        <button class="icon-btn" id="printBtn" type="button" title="Print / save as PDF"
                aria-label="Print or save as PDF">${ICON.print}</button>
        <button class="icon-btn" id="themeBtn" type="button" title="Toggle light / dark"
                aria-label="Toggle light or dark mode" aria-pressed="false">${ICON.sun}${ICON.moon}</button>
        <div class="picker" id="picker" role="radiogroup" aria-label="Colour theme" hidden></div>
      </div>
    </div>`;
  document.body.insertBefore(head, document.body.firstChild);

  el("nav").innerHTML = navItems
    .map(n => `<a href="${n.href}"${n.sec ? ` data-sec="${n.sec}"` : ""}>${n.label}</a>`)
    .join("");

  /* theme picker */
  el("picker").innerHTML =
    `<h4>Colour theme</h4>` +
    THEMES.map(t => `
      <button class="theme-opt" type="button" role="radio" data-pal="${t.id}" aria-checked="false">
        <span class="sw" aria-hidden="true">${t.sw.map(c => `<i style="background:${c}"></i>`).join("")}</span>
        <span class="tx"><b>${t.name}</b><small>${t.note}</small></span>
        <span class="tick" aria-hidden="true">&#10003;</span>
      </button>`).join("");

  const picker = el("picker"), palBtn = el("paletteBtn");
  const openPicker = (open) => {
    picker.hidden = !open;
    palBtn.setAttribute("aria-expanded", String(open));
  };
  palBtn.addEventListener("click", (e) => { e.stopPropagation(); openPicker(picker.hidden); });
  picker.addEventListener("click", (e) => {
    const b = e.target.closest(".theme-opt");
    if (!b) return;
    applyPalette(b.dataset.pal);
  });
  document.addEventListener("click", (e) => {
    if (!picker.hidden && !picker.contains(e.target) && e.target !== palBtn) openPicker(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") openPicker(false); });
  applyPalette(root.getAttribute("data-palette"));   // sync aria-checked

  /* light / dark */
  el("themeBtn").addEventListener("click", () =>
    applyMode(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));

  /* print */
  const doPrint = () => {
    const more = el("moreBtn");
    if (more && more.getAttribute("aria-expanded") === "false") more.click();
    window.print();
  };
  el("printBtn").addEventListener("click", doPrint);
  document.querySelectorAll("[data-print]").forEach(b => b.addEventListener("click", doPrint));

  /* sticky shadow */
  const hd = el("siteHead");
  const onScroll = () => hd.classList.toggle("stuck", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* reveal */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...document.querySelectorAll(".reveal")];
  if (reduce) { nodes.forEach(n => n.classList.add("in")); }
  else {
    const ro = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold:0.08, rootMargin:"0px 0px -40px 0px" });
    nodes.forEach(n => ro.observe(n));
  }

  /* scrollspy (home only) */
  const spyLinks = [...document.querySelectorAll(".nav a[data-sec]")];
  if (spyLinks.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        spyLinks.forEach(a => a.classList.toggle("active", a.dataset.sec === e.target.id));
      });
    }, { rootMargin:"-45% 0px -50% 0px" });
    spyLinks.forEach(a => { const s = el(a.dataset.sec); if (s) spy.observe(s); });
  }

  /* footer year */
  const y = el("year"); if (y) y.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------------------------
   Shared fragments
--------------------------------------------------------------------------- */
function avatarInto(hostId){
  const host = el(hostId); if (!host) return;
  host.innerHTML =
    `<div class="avatar-fallback" role="img" aria-label="${PROFILE.name}">${PROFILE.initials}</div>`;
  if (!PROFILE.photo) return;
  const img = new Image();
  img.className = "avatar"; img.alt = PROFILE.name;
  img.width = 196; img.height = 196;
  img.onload = () => { host.innerHTML = ""; host.appendChild(img); };
  img.src = PROFILE.photo;
}

function cardHTML(c){
  return `<article class="card">
    <span class="kicker">${c.kicker}</span>
    <h3>${c.title}</h3>
    <div class="sub">${c.sub}</div>
    <p>${c.body}</p>
    ${(c.link || c.link2) ? `<div class="foot">${[c.link, c.link2].filter(Boolean)
      .map(l => `<a class="link-out" href="${l.href}" target="_blank" rel="noopener">${l.label}${ICON.ext}</a>`)
      .join("")}</div>` : ""}
  </article>`;
}

function projectCardHTML(p, base){
  return `<a class="card" href="${base}projects/${p.slug}.html" data-cat="${p.category}">
    <span class="thumb" aria-hidden="true">${p.thumb}</span>
    <span class="kicker">${p.category} · ${p.year}</span>
    <h3>${p.title}</h3>
    <p>${p.lede}</p>
    <div class="foot">
      <div class="stack">${p.stack.slice(0,4).map(s => `<span>${s}</span>`).join("")}</div>
    </div>
    <div class="foot">
      <span class="link-out">Read the case study${ICON.ext}</span>
      ${(p.repos && p.repos.length)
        ? `<span class="repo-count" title="Public source code available">${ICON.gh}${p.repos.length} repo${p.repos.length > 1 ? "s" : ""}</span>`
        : ""}
    </div>
  </a>`;
}

function socialHTML(){
  const P = PROFILE;
  return [
    `<a href="mailto:${P.email}">${ICON.mail}Email</a>`,
    `<a href="${P.links.linkedin}" target="_blank" rel="noopener">${ICON.li}LinkedIn</a>`,
    `<a href="${P.links.github}" target="_blank" rel="noopener">${ICON.gh}GitHub</a>`,
    `<a href="${P.links.medium}" target="_blank" rel="noopener">${ICON.md}Medium</a>`,
    `<a href="${P.links.zenodo}" target="_blank" rel="noopener">${ICON.doc}Publication</a>`
  ].join("");
}

/* ---------------------------------------------------------------------------
   Home page
--------------------------------------------------------------------------- */
function renderHome(){
  const P = PROFILE;

  el("pName").textContent      = P.name;
  el("pRole").innerHTML        = tpl(P.role);
  el("pTagline").textContent   = tpl(P.tagline);
  el("availability").innerHTML = tpl(P.availability);
  el("pBadge").textContent     = P.badge;
  el("contactBlurb").textContent = tpl(P.contactBlurb);

  el("pMeta").innerHTML = [
    `<span>${ICON.pin}${P.location}</span>`,
    `<span>${ICON.mail}<a href="mailto:${P.email}">${P.email}</a></span>`,
    `<span>${ICON.globe}Thai C2 · English C1 · German B1</span>`
  ].join("");

  el("pCta").innerHTML = [
    `<a class="btn btn-primary" href="#projects">View projects</a>`,
    `<a class="btn" href="mailto:${P.email}">${ICON.mail}Get in touch</a>`,
    `<a class="btn" href="${P.links.github}" target="_blank" rel="noopener">${ICON.gh}GitHub</a>`,
    `<button class="btn" type="button" data-print>${ICON.doc}Download CV</button>`
  ].join("");

  avatarInto("avatarHost");

  setHTML("hlGrid", P.highlights
    .map(([b,s]) => `<div class="hl"><strong>${b}</strong><span>${s}</span></div>`).join(""));

  setHTML("aboutBody", P.about.map(t => `<p>${t}</p>`).join(""));
  setHTML("factList",  P.facts.map(([k,v]) => `<li><b>${k}</b><span>${v}</span></li>`).join(""));

  el("skillGrid").innerHTML = P.skills.map(([g, items]) => `
    <div class="skill-card">
      <h3>${g}</h3>
      <div class="chips">${items.map(i => `<span class="chip">${i}</span>`).join("")}</div>
    </div>`).join("");

  /* featured projects on the home page */
  const featured = PROJECTS.filter(p => p.featured);
  el("projGrid").innerHTML = featured.map(p => projectCardHTML(p, "")).join("");

  /* experience timeline */
  const jobHTML = (j) => `
    <article class="job${j.current ? " now" : ""}${j.early ? " early" : ""}"${j.early ? " hidden" : ""}>
      <div class="job-head">
        <h3>${j.role}</h3>
        <span class="org">${j.org}</span>
        <span class="when">${j.when}</span>
      </div>
      <div class="where">${j.where}</div>
      ${j.blurb ? `<p class="blurb">${j.blurb}</p>` : ""}
      <ul class="points">${j.points.map(p => `<li>${p}</li>`).join("")}</ul>
      <div class="stack">${(j.stack || []).map(s => `<span>${s}</span>`).join("")}</div>
      ${j.project ? `<div class="job-links"><a class="link-out" href="projects/${j.project}.html">Read the case study${ICON.ext}</a></div>` : ""}
    </article>`;

  /* All roles go into ONE timeline. Earlier roles are hidden <article>s inside
     it rather than a separate list, so the 36px rhythm between every role and
     the vertical rail stay continuous when the section is expanded. */
  setHTML("timeline", PROFILE.experience.map(jobHTML).join(""));

  const moreBtn = el("moreBtn");
  const earlyJobs = [...el("timeline").querySelectorAll(".job.early")];
  let open = false;
  const setMore = (next) => {
    open = next;
    earlyJobs.forEach(n => { n.hidden = !open; });
    moreBtn.setAttribute("aria-expanded", String(open));
    moreBtn.textContent = open ? "Hide earlier experience"
                               : `Show ${earlyJobs.length} earlier roles (2014 – 2024)`;
  };
  setMore(false);
  moreBtn.addEventListener("click", () => setMore(!open));

  el("eduGrid").innerHTML     = P.education.map(cardHTML).join("");
  el("writingGrid").innerHTML = P.writing.map(cardHTML).join("");
  el("socialRow").innerHTML   = socialHTML();
}

/* ---------------------------------------------------------------------------
   Projects index
--------------------------------------------------------------------------- */
function renderProjectIndex(){
  const grid = el("allProjects");
  grid.innerHTML = PROJECTS.map(p => projectCardHTML(p, "../")).join("");

  const cats = ["All", ...[...new Set(PROJECTS.map(p => p.category))]];
  el("filters").innerHTML = cats.map((c,i) =>
    `<button class="filter" type="button" data-cat="${c}" aria-pressed="${i===0}">${c}</button>`).join("");

  el("filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter"); if (!b) return;
    const cat = b.dataset.cat;
    el("filters").querySelectorAll(".filter")
      .forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    grid.querySelectorAll(".card")
      .forEach(c => { c.hidden = !(cat === "All" || c.dataset.cat === cat); });
  });

  el("socialRow").innerHTML = socialHTML();
}

/* ---------------------------------------------------------------------------
   Project detail page
--------------------------------------------------------------------------- */
function renderProject(slug){
  const i = PROJECTS.findIndex(p => p.slug === slug);
  if (i < 0) { document.body.innerHTML = "<p style='padding:40px'>Project not found.</p>"; return; }
  const p = PROJECTS[i];

  document.title = `${p.title} — Natnicha Rodtong`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", p.lede);

  el("crumbTitle").textContent = p.tag;
  el("pKicker").textContent    = `${p.category} · ${p.year}`;
  el("pTitle").textContent     = p.title;
  el("pLede").textContent      = p.lede;

  el("pSpec").innerHTML = p.spec
    .map(([k,v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  el("pStack").innerHTML = p.stack.map(s => `<span class="chip">${s}</span>`).join("");

  /* primary links + one button straight to the first repo */
  el("pLinks").innerHTML = []
    .concat((p.links || []).map(l =>
      `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${ICON.ext}${l.label}</a>`))
    .concat((p.repos && p.repos.length)
      ? [`<a class="btn btn-primary" href="${p.repos[0].url}" target="_blank" rel="noopener">${ICON.gh}${p.repos.length > 1 ? "Source code" : "View on GitHub"}</a>`]
      : [])
    .join("");

  el("pBody").innerHTML = p.body.map(sec => {
    let h = `<h2>${sec.h}</h2>`;
    if (sec.p)       h += `<p>${sec.p}</p>`;
    if (sec.points)  h += `<ul class="points">${sec.points.map(x => `<li>${x}</li>`).join("")}</ul>`;
    if (sec.arch)    h += `<div class="arch" role="img" aria-label="Architecture diagram">${sec.arch}</div>`;
    if (sec.results) h += `<div class="result-grid">${sec.results
                            .map(([b,s]) => `<div class="result"><b>${b}</b><span>${s}</span></div>`).join("")}</div>`;
    if (sec.callout) h += `<div class="callout"><p>${sec.callout}</p></div>`;
    return h;
  }).join("");

  /* Source code section, appended after the written body */
  if (p.repos && p.repos.length) {
    el("pBody").insertAdjacentHTML("beforeend",
      `<h2>Source code</h2>
       <p>${p.repos.length > 1
            ? `Public on GitHub across ${p.repos.length} repositories.`
            : "Public on GitHub."}</p>
       <div class="card-grid repo-grid">${p.repos.map(r => `
         <a class="card repo" href="${r.url}" target="_blank" rel="noopener">
           <span class="kicker">${ICON.gh}${r.lang || "Repository"}</span>
           <h3>${r.name}</h3>
           <p>${r.desc}</p>
           <div class="foot"><span class="link-out">View on GitHub${ICON.ext}</span></div>
         </a>`).join("")}</div>`);
  }

  const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];
  el("pPager").innerHTML = [
    prev ? `<a class="prev" href="${prev.slug}.html"><small>&larr; Previous</small><b>${prev.title}</b></a>` : `<span style="flex:1"></span>`,
    next ? `<a class="next" href="${next.slug}.html"><small>Next &rarr;</small><b>${next.title}</b></a>` : `<span style="flex:1"></span>`
  ].join("");
}

/* export */
window.initChrome         = initChrome;
window.renderHome         = renderHome;
window.renderProjectIndex = renderProjectIndex;
window.renderProject      = renderProject;
window.SITE_ICON          = ICON;
})();
