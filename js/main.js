/* ==========================================================================
   Shared behaviour: theme, navbar, clock, list rendering.
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* ---- theme (initial value is set by the inline script in <head>) ---- */
  var toggle = $('.theme');
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    if (toggle) toggle.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  if (toggle) {
    setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    toggle.addEventListener('click', function () {
      setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---- navbar: transparent at the top, frosted once you scroll -------- */
  var nav = $('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- contact links read from data.js -------------------------------- */
  if (window.SITE) {
    document.querySelectorAll('[data-email]').forEach(function (a) { a.href = 'mailto:' + SITE.email; });
    document.querySelectorAll('[data-github]').forEach(function (a) { a.href = SITE.github; });
    document.querySelectorAll('[data-linkedin]').forEach(function (a) { a.href = SITE.linkedin; });
    document.querySelectorAll('[data-resume]').forEach(function (a) {
      a.href = (a.getAttribute('data-resume') || '') + SITE.resume;
      a.setAttribute('download', '');
    });
  }

  /* ---- Lagos clock in the footer ------------------------------------- */
  var clock = $('[data-clock]');
  if (clock) {
    var tick = function () {
      try {
        clock.textContent = 'WAT ' + new Date().toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      } catch (e) { clock.textContent = ''; }
    };
    tick(); setInterval(tick, 1000);
  }

  /* ---- icons -------------------------------------------------------- */
  var ICON = {
    up: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10l6-6M5 4h5v5" stroke="currentColor" stroke-width="1.5"></path></svg>',
    upBold: '<svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10l6-6M5 4h5v5" stroke="currentColor" stroke-width="1.7"></path></svg>'
  };

  /* ---- covers for the homepage's selected work ----------------------- */
  function orbitSVG() {
    var rays = '';
    for (var k = 0; k < 24; k++) {
      var a = (k / 24) * Math.PI * 2, r1 = 36, r2 = k % 2 ? 70 : 100;
      rays += 'M' + (256 + Math.cos(a) * r1).toFixed(1) + ' ' + (256 + Math.sin(a) * r1).toFixed(1) +
              'L' + (256 + Math.cos(a) * r2).toFixed(1) + ' ' + (256 + Math.sin(a) * r2).toFixed(1);
    }
    var c = '#5B2A9A';
    return '<svg class="orbit" viewBox="0 0 512 512" aria-hidden="true">' +
      '<g fill="none" stroke="' + c + '"><circle cx="256" cy="256" r="190" stroke-width="2"></circle>' +
      '<circle cx="256" cy="256" r="156" stroke-width="3" stroke-dasharray="0.5 8" stroke-linecap="round"></circle>' +
      '<circle cx="256" cy="256" r="122" stroke-width="2"></circle></g>' +
      '<path class="rays" d="' + rays + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round" fill="none"></path>' +
      '<circle class="sun" cx="256" cy="256" r="26" fill="' + c + '"></circle>' +
      '<g class="o1" fill="' + c + '"><circle cx="390" cy="122" r="14"></circle><circle cx="66" cy="256" r="7.5"></circle><circle cx="446" cy="258" r="7.5"></circle></g>' +
      '<g class="o2" fill="' + c + '"><circle cx="157" cy="134" r="5.5"></circle><circle cx="256" cy="412" r="5.5"></circle></g>' +
      '<g class="o3" fill="' + c + '"><circle cx="350" cy="178" r="5.5"></circle><circle cx="169" cy="342" r="12"></circle></g></svg>';
  }
  var tapeText = 'SHOP · KULT · INFO · SHIPPED WORLDWIDE · SHOP · KULT · INFO · SHIPPED WORLDWIDE · ';
  var COVERS = {
    kwuo: function () {
      return '<span class="cover cover--kwuo"><span class="word"><img src="assets/img/kwuo-owl.png" alt="">' +
        '<span style="display:inline-flex"><span class="kl" style="--k:0">K</span><span class="kl" style="--k:1">W</span><span class="kl" style="--k:2">U</span><span class="kl" style="--k:3">O</span></span></span></span>';
    },
    oddman: function () {
      return '<span class="cover cover--oddman"><img class="ball" src="assets/img/oddman-ball.png" alt="">' +
        '<span class="rule-h" style="top:24%"></span><span class="rule-h" style="top:58%"></span><span class="rule-v"></span>' +
        '<span class="od-k">AGAINST ALL ODDS</span><span class="wordmark">Oddman</span>' +
        '<span class="tape"><span class="tape-t"><span>' + tapeText + '</span><span>' + tapeText + '</span></span></span></span>';
    },
    '180': function () {
      return '<span class="cover cover--180"><span class="word"><b>180</b> Autos</span>' +
        '<span class="puff" style="--p:0s"></span><span class="puff" style="--p:.4s"></span><span class="puff" style="--p:.8s"></span>' +
        '<img class="car" src="assets/img/car-180.png" alt="">' +
        '<span class="road"><span class="road-e"></span><span class="road-c"></span></span></span>';
    },
    izu: function () { return '<span class="cover cover--izu">' + orbitSVG() + '</span>'; },
    oms: function () { return '<span class="cover cover--oms"><span>OMS Labs</span></span>'; }
  };

  /* ---- homepage ------------------------------------------------------ */
  var shots = $('[data-selected-work]');
  if (shots && window.PROJECTS) {
    shots.innerHTML = PROJECTS.filter(function (p) { return p.featured && !p.hidden; }).map(function (p) {
      var cover = COVERS[p.cover] ? COVERS[p.cover]() : '<img src="' + esc(p.img) + '" alt="">';
      return '<a class="sh" href="work/' + esc(p.slug) + '.html" aria-label="' + esc(p.name + ', ' + p.year + ' — read the case study') + '">' +
        '<span class="shf"><span class="sh-img">' + cover + '</span></span>' +
        '<span class="cap" aria-hidden="true"><span>' + esc(p.name) + (p.year ? ' - ' + esc(p.year) : '') + '</span>' + ICON.up + '</span></a>';
    }).join('');
  }

  var jobs = $('[data-jobs]');
  if (jobs && window.JOBS) {
    jobs.innerHTML = JOBS.map(function (j) {
      return '<div><span class="role">' + esc(j.role) + ' <span>· ' + esc(j.org) + '</span></span>' +
        '<span class="mono" style="color:var(--muted);white-space:nowrap">' + esc(j.loc) + ' · ' + esc(j.when) + '</span>' +
        '<span class="note">' + esc(j.note) + '</span></div>';
    }).join('');
  }

  var stack = $('[data-stack]');
  if (stack && window.STACK) {
    stack.innerHTML = STACK.map(function (r) {
      return '<div class="srow"><span class="k">' + esc(r[0]) + '</span><span class="v">' + esc(r[1]) + '</span></div>';
    }).join('');
  }

  var arts = $('[data-articles]');
  if (arts && window.ARTICLES) {
    arts.innerHTML = ARTICLES.map(function (a) {
      return '<a class="art" href="' + esc(a.url) + '" target="_blank" rel="noopener"><span>' + esc(a.title) + '</span><span class="go" aria-hidden="true">↗</span></a>';
    }).join('');
    var all = $('[data-all-articles]');
    if (all && window.ALL_ARTICLES_URL) { all.href = ALL_ARTICLES_URL; all.target = '_blank'; all.rel = 'noopener'; }
  }

  /* ---- work page ----------------------------------------------------- */
  var items = $('[data-work-items]');
  if (items && window.PROJECTS) {
    items.innerHTML = PROJECTS.filter(function (p) { return !p.hidden; }).map(function (p) {
      var shot = p.img
        ? '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy">'
        : '<span class="mock" aria-hidden="true"><span class="mono" style="color:var(--muted)">draft ready</span><i style="width:90%"></i><i style="width:80%"></i><i style="width:60%"></i><b></b></span>';
      var tools = '<span class="tools">' + p.stack.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</span>';
      var links = '<span class="links"><a class="tlink" href="work/' + esc(p.slug) + '.html">Read the case study' + ICON.upBold + '</a>' +
        (p.live ? '<a class="tlink" href="' + esc(p.live) + '" target="_blank" rel="noopener">Visit the website' + ICON.upBold + '</a>' : '') + '</span>';
      return '<article class="item"><a class="shot" href="work/' + esc(p.slug) + '.html" aria-label="' + esc(p.name) + '">' + shot + '</a>' +
        '<div class="body"><div class="top"><h2>' + esc(p.name) + '</h2><span class="mono" style="color:var(--muted)">' + esc(p.kind) + '</span></div>' +
        '<p>' + esc(p.desc) + '</p>' + tools + links + '</div></article>';
    }).join('');

    var buttons = document.querySelectorAll('[data-view]');
    var setView = function (v) {
      items.classList.toggle('is-grid', v === 'grid');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-view') === v)); });
      try { localStorage.setItem('workView', v); } catch (e) {}
    };
    buttons.forEach(function (b) { b.addEventListener('click', function () { setView(b.getAttribute('data-view')); }); });
    var saved = 'list';
    try { saved = localStorage.getItem('workView') || 'list'; } catch (e) {}
    setView(saved);
  }
})();
