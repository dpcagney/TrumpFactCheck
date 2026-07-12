/* ============================================================
   Same As It Ever Was — app.js
   Renders the fact-check feed, timeline, and interactions.
   Pure vanilla JS, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  const VERDICT_LABEL = {
    false: "False",
    misleading: "Misleading",
    context: "Needs Context",
  };

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ---------- state ---------- */
  let activeVerdict = "all";
  let query = "";

  /* ---------- render fact-check cards ---------- */
  function cardHTML(fc) {
    const sources = fc.sources
      .map(
        (s) =>
          `<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(
            s.name
          )}</a>`
      )
      .join("");

    const r = fc.rhyme;
    return `
      <article class="card" data-verdict="${esc(fc.verdict)}"
        data-search="${esc(
          (fc.claim + " " + fc.topic + " " + fc.summary + " " + r.president + " " + r.title).toLowerCase()
        )}">
        <div class="card-top">
          <span class="badge ${esc(fc.verdict)}">${esc(VERDICT_LABEL[fc.verdict] || fc.verdict)}</span>
          <span class="topic">${esc(fc.topic)}</span>
        </div>
        <p class="claim">${esc(fc.claim)}</p>
        <p class="card-summary">${esc(fc.summary)}</p>
        <div class="sources">
          <span class="sources-label">Sources</span>
          ${sources}
        </div>
        <button class="rhyme-toggle" aria-expanded="false">
          <span>📜 History rhymes: ${esc(r.president)}</span>
          <span class="arrow">▶</span>
        </button>
        <div class="rhyme">
          <div>
            <span class="rhyme-who">${esc(r.president)}</span>
            <span class="rhyme-when"> · ${esc(r.year)}</span>
          </div>
          <p class="rhyme-title">${esc(r.title)}</p>
          <p class="rhyme-text">${esc(r.text)}</p>
          <a class="source-link" href="${esc(r.source.url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(
      r.source.name
    )}</a>
        </div>
      </article>`;
  }

  function renderCards() {
    const wrap = $("#cards");
    wrap.innerHTML = FACT_CHECKS.map(cardHTML).join("");
    wireRhymeToggles();
    applyFilters();
  }

  function wireRhymeToggles() {
    $$(".rhyme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        const panel = btn.nextElementSibling;
        panel.classList.toggle("open", !expanded);
      });
    });
  }

  /* ---------- filter + search ---------- */
  function applyFilters() {
    let visible = 0;
    $$(".card").forEach((card) => {
      const matchVerdict =
        activeVerdict === "all" || card.dataset.verdict === activeVerdict;
      const matchQuery = !query || card.dataset.search.includes(query);
      const show = matchVerdict && matchQuery;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    $("#noResults").hidden = visible !== 0;
  }

  function wireControls() {
    $$("#filters .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        $$("#filters .chip").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        activeVerdict = chip.dataset.verdict;
        applyFilters();
      });
    });

    $("#search").addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  /* ---------- timeline ---------- */
  function renderTimeline() {
    const wrap = $("#timelineTrack");
    wrap.innerHTML = TIMELINE.map((t) => {
      const now = t.year === "Today";
      return `
        <div class="tl-item ${now ? "now" : ""}">
          <div class="tl-year">${esc(t.year)}</div>
          ${t.president !== "—" ? `<div class="tl-pres">${esc(t.president)}</div>` : ""}
          <p class="tl-event">${esc(t.event)}</p>
        </div>`;
    }).join("");
  }

  /* ---------- panic-o-meter ---------- */
  function initPanic() {
    // A gentle, deliberately reassuring reading. The knob settles low.
    const knob = $("#panicKnob");
    const label = $("#panicLabel");
    const note = $("#panicNote");
    const target = 22; // percent — "this too shall pass" end
    note.textContent =
      "Reading based on 240 years of precedent: civil war, two term-altering assassinations, a depression, and a resignation — all survived.";
    // animate after a beat
    setTimeout(() => {
      knob.style.left = target + "%";
      label.textContent = "This too shall pass";
    }, 500);
  }

  /* ---------- perspective generator ---------- */
  function initBreathe() {
    const el = $("#perspective");
    const btn = $("#breatheBtn");
    let last = -1;
    function pick() {
      let i;
      do {
        i = Math.floor(Math.random() * PERSPECTIVES.length);
      } while (i === last && PERSPECTIVES.length > 1);
      last = i;
      el.style.opacity = "0";
      setTimeout(() => {
        el.textContent = PERSPECTIVES[i];
        el.style.opacity = "1";
      }, 200);
    }
    btn.addEventListener("click", pick);
    // seed one on load without the fade
    el.textContent = PERSPECTIVES[0];
    last = 0;
  }

  /* ---------- theme ---------- */
  function initTheme() {
    const root = document.documentElement;
    const btn = $("#themeToggle");
    const saved = localStorage.getItem("saiew-theme");
    if (saved) root.setAttribute("data-theme", saved);
    syncIcon();
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("saiew-theme", next);
      syncIcon();
    });
    function syncIcon() {
      btn.textContent = root.getAttribute("data-theme") === "light" ? "☀️" : "🌙";
    }
  }

  /* ---------- matrix ---------- */
  const TAG_CLASS = (t) => t.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
  const mx = { q: "", role: "all", admin: "all", tag: "all", sort: "date-desc" };

  function uniqSorted(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
  }
  function fillSelect(sel, values, allLabel) {
    sel.innerHTML =
      `<option value="all">${esc(allLabel)}</option>` +
      values.map((v) => `<option value="${esc(v)}">${esc(v)}</option>`).join("");
  }

  function renderMatrix() {
    const rows = ENTRIES.filter((e) => {
      if (mx.role !== "all" && e.roleCat !== mx.role) return false;
      if (mx.admin !== "all" && e.admin !== mx.admin) return false;
      if (mx.tag !== "all" && e.tag !== mx.tag) return false;
      if (mx.q) {
        const hay = (e.person + " " + e.role + " " + e.admin + " " + e.topic + " " + e.summary + " " + e.tag).toLowerCase();
        if (!hay.includes(mx.q)) return false;
      }
      return true;
    });

    const [key, dir] = mx.sort.split("-");
    const field = { date: "date", person: "person", admin: "admin" }[key] || "date";
    rows.sort((a, b) => {
      const av = a[field], bv = b[field];
      const cmp = field === "date" ? av.localeCompare(bv) : av.localeCompare(bv);
      return dir === "asc" ? cmp : -cmp;
    });

    $("#mxBody").innerHTML = rows
      .map(
        (e) => `
      <tr>
        <td class="mx-date">${esc(e.dateText)}</td>
        <td class="mx-person">${esc(e.person)}</td>
        <td class="mx-role">${esc(e.role)}</td>
        <td class="mx-admin">${esc(e.admin)}</td>
        <td class="mx-what">${esc(e.summary)}<span class="mx-src"><a href="${esc(e.source.url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(e.source.name)}</a></span></td>
        <td><span class="badge ${TAG_CLASS(e.tag)}">${esc(e.tag)}</span></td>
      </tr>`
      )
      .join("");

    $("#mxCount").textContent = `Showing ${rows.length} of ${ENTRIES.length} entries`;
    $("#mxNone").hidden = rows.length !== 0;
    updateSortIndicators();
  }

  function updateSortIndicators() {
    const [key, dir] = mx.sort.split("-");
    $$(".mx-table th.sortable").forEach((th) => {
      const ar = th.querySelector(".th-ar");
      if (th.dataset.sort === key) {
        th.setAttribute("aria-sort", dir === "asc" ? "ascending" : "descending");
        ar.textContent = dir === "asc" ? "↑" : "↓";
      } else {
        th.removeAttribute("aria-sort");
        ar.textContent = "";
      }
    });
  }

  function initMatrix() {
    if (typeof ENTRIES === "undefined" || !$("#mxBody")) return;
    // administrations ordered chronologically by their earliest entry
    const adminFirst = {};
    ENTRIES.forEach((e) => { if (!(e.admin in adminFirst) || e.date < adminFirst[e.admin]) adminFirst[e.admin] = e.date; });
    const admins = [...new Set(ENTRIES.map((e) => e.admin))].sort((a, b) => adminFirst[a].localeCompare(adminFirst[b]));
    fillSelect($("#mxRole"), uniqSorted(ENTRIES.map((e) => e.roleCat)), "All roles");
    fillSelect($("#mxAdmin"), admins, "All administrations");
    fillSelect($("#mxTag"), uniqSorted(ENTRIES.map((e) => e.tag)), "All verdicts");

    $("#mxSearch").addEventListener("input", (e) => { mx.q = e.target.value.trim().toLowerCase(); renderMatrix(); });
    $("#mxRole").addEventListener("change", (e) => { mx.role = e.target.value; renderMatrix(); });
    $("#mxAdmin").addEventListener("change", (e) => { mx.admin = e.target.value; renderMatrix(); });
    $("#mxTag").addEventListener("change", (e) => { mx.tag = e.target.value; renderMatrix(); });
    $("#mxSort").addEventListener("change", (e) => { mx.sort = e.target.value; renderMatrix(); });

    $$(".mx-table th.sortable").forEach((th) => {
      th.addEventListener("click", () => {
        const k = th.dataset.sort;
        const [curKey, curDir] = mx.sort.split("-");
        mx.sort = curKey === k ? `${k}-${curDir === "asc" ? "desc" : "asc"}` : (k === "date" ? "date-desc" : `${k}-asc`);
        $("#mxSort").value = mx.sort;
        renderMatrix();
      });
    });

    renderMatrix();
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    wireControls();
    initMatrix();
    renderTimeline();
    initPanic();
    initBreathe();
    initTheme();
  });
})();
