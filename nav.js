/* ── nav.js  — Artisan Restore global nav + footer + toggles ── */
(function () {
  /* ── helpers ── */
  const qs = (s, ctx = document) => ctx.querySelector(s);

  /* ── detect current page ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  const params = new URLSearchParams(location.search);
  const srvType = params.get('type') || '';
  const pageMap = {
    'index.html': 'home', 'home2.html': 'home', 'about.html': 'about',
    'services.html': 'services',
    'blog.html': 'blog', 'blog-detail.html': 'blog',
    'contact.html': 'contact', 'pricing.html': 'pricing',
    'login.html': 'auth', 'register.html': 'auth',
    'admin.html': 'admin', '404.html': '', 'coming-soon.html': ''
  };
  let activeKey = pageMap[page] || '';

  /* ── persisted prefs ── */
  const savedTheme = localStorage.getItem('ar-theme') || 'light';
  const savedDir   = localStorage.getItem('ar-dir')   || 'ltr';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('dir', savedDir);

  /* ── nav HTML ── */
  const navHTML = `
<nav class="navbar" id="mainNav">
  <a class="nav-logo" href="index.html" aria-label="Artisan Restore Home">
    <img src="images/logo.png" alt="Logo">
    <span class="nav-logo-text">Artisan Restore<small class="nav-logo-sub">Fine Furniture Repair</small></span>
  </a>

  <ul class="nav-menu" id="navMenu">
    <li class="nav-item" id="ni-home">
      <a class="nav-link${activeKey==='home'?' active':''}" href="#" id="homeDropTrigger">
        Home
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </a>
      <div class="dropdown" id="homeDropdown">
        <a href="index.html">Home 1</a>
        <a href="home2.html">Home 2</a>
      </div>
    </li>
    <li class="nav-item"><a class="nav-link${activeKey==='about'?' active':''}" href="about.html">About</a></li>
    <li class="nav-item"><a class="nav-link${activeKey==='services'?' active':''}" href="services.html">Furniture Types</a></li>

    <li class="nav-item"><a class="nav-link${activeKey==='blog'?' active':''}" href="blog.html">Blog</a></li>
    <li class="nav-item"><a class="nav-link${activeKey==='pricing'?' active':''}" href="pricing.html">Pricing</a></li>
    <li class="nav-item"><a class="nav-link${activeKey==='contact'?' active':''}" href="contact.html">Contact</a></li>

    <li class="nav-mobile-controls" style="display:none;">
      <button class="ctrl-btn" id="themeToggleMob" title="Toggle theme">
        <svg id="themeIconMob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </button>
      <button class="ctrl-btn" id="dirToggleMob" title="Toggle RTL/LTR">
        <span id="dirLabelMob">LTR</span>
      </button>
      <a href="login.html" class="btn btn-primary btn-sm" style="flex:1;">Book Now</a>
    </li>
  </ul>

  <div class="nav-controls" id="desktopControls">
    <button class="ctrl-btn" id="themeToggle" title="Toggle theme">
      <svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
    </button>
    <button class="ctrl-btn" id="dirToggle" title="Toggle RTL/LTR">
      <span id="dirLabel">LTR</span>
    </button>
    <a href="login.html" class="btn btn-primary btn-sm">Book Now</a>
  </div>

  <div class="hamburger" id="hamburger" aria-label="Toggle menu" role="button" tabindex="0">
    <span></span><span></span><span></span>
  </div>
</nav>`;

  /* ── footer HTML ── */
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo-wrap">
          <a href="index.html" style="display:flex; align-items:center; gap:.75rem; text-decoration:none;">
            <img src="images/logo.png" alt="Artisan Restore Logo">
            <span class="footer-brand" style="line-height:1.1;">Artisan Restore<small style="display:block; font-size:.65rem; color:rgba(240,233,216,.5); letter-spacing:.1em; text-transform:uppercase; font-family:var(--font-body, sans-serif); font-weight:normal; margin-top:.15rem;">Fine Furniture Repair</small></span>
          </a>
        </div>
        <p>Bringing heritage furniture back to life with master craftsmanship, time-honoured techniques, and genuine care for every piece.</p>
        <div class="footer-social">
          <a href="#" class="soc-btn" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="soc-btn" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" class="soc-btn" aria-label="Pinterest">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          </a>
          <a href="#" class="soc-btn" aria-label="YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Furniture Types</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Legal</h5>
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="admin.html">Admin</a></li>
          <li><a href="login.html">Book Repair</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact Us</h5>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>14 Craftsman Lane, Heritage Quarter, London EC1A 4AB</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.64 16.92z"/></svg>
          <span>+44 20 7946 0321</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>hello@artisanrestore.co.uk</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Fri: 8am–6pm &nbsp;|&nbsp; Sat: 9am–4pm</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bar">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;width:100%">
      <span>&copy; <span id="footerYear"></span> Artisan Restore Ltd. All rights reserved.</span>
      <span><a href="#">Privacy</a> &nbsp;&middot;&nbsp; <a href="#">Terms</a> &nbsp;&middot;&nbsp; <a href="#">Cookies</a></span>
    </div>
  </div>
</footer>`;

  /* ── inject nav ── */
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = navHTML;

  /* ── inject footer ── */
  const footPlaceholder = document.getElementById('footer-placeholder');
  if (footPlaceholder) footPlaceholder.outerHTML = footerHTML;

  /* ── skip nav/footer on certain pages ── */
  if (['login.html','register.html','coming-soon.html'].includes(page)) {
    const nav = document.getElementById('mainNav');
    if (nav) nav.remove();
    const ft = document.querySelector('.footer');
    if (ft) ft.remove();
  }

  /* ── footer year ── */
  const fy = document.getElementById('footerYear');
  if (fy) fy.textContent = new Date().getFullYear();

  /* ── hamburger ── */
  const burger = document.getElementById('hamburger');
  const menu   = document.getElementById('navMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }

  /* ── mobile dropdown toggles ── */
  ['homeDropTrigger'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', e => {
      if (window.innerWidth > 768) return;
      e.preventDefault();
      btn.closest('.nav-item').classList.toggle('open');
    });
  });

  /* ── theme toggle ── */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('ar-theme', t);
    const moonSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    const sunSVG  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    ['themeIcon','themeIconMob'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.outerHTML = (t === 'dark' ? sunSVG : moonSVG).replace('>', ` id="${id}">`);
    });
  }
  applyTheme(savedTheme);
  ['themeToggle','themeToggleMob'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

  /* ── RTL/LTR toggle ── */
  function applyDir(d) {
    document.documentElement.setAttribute('dir', d);
    localStorage.setItem('ar-dir', d);
    /* show ACTIVE mode label */
    ['dirLabel','dirLabelMob'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = d.toUpperCase();
    });
  }
  applyDir(savedDir);
  ['dirToggle','dirToggleMob'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
      applyDir(next);
    });
  });

  /* ── active nav highlight ── */
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === page) l.classList.add('active');
  });
})();
