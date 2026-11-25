{
  const views = [...document.querySelectorAll('[data-view]')];
  const routes = views.map(v => v.dataset.view);
  const titles = { home: 'Paint It Forward', chapters: 'Chapters · Paint It Forward', 'get-involved': 'Get involved · Paint It Forward' };
  const toggle = document.querySelector('.menu');
  const nav = document.getElementById('navigation');
  const navLinks = [...nav.querySelectorAll('[data-nav]')];
  let current = null;

  const closeMenu = (returnFocus) => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  };

  const show = (name) => {
    views.forEach(v => { v.hidden = v.dataset.view !== name; });
    navLinks.forEach(a => {
      const on = a.dataset.nav === name;
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.title = titles[name] || titles.home;
    const changed = current !== name;
    current = name;
    return changed;
  };

  const route = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id || routes.includes(id)) {
      const changed = show(id || 'home');
      if (changed || !id || id === 'home') {
        window.scrollTo(0, 0);
        const h1 = document.querySelector(`[data-view="${current}"] h1`);
        if (h1 && id) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
      }
      return;
    }
    const el = document.getElementById(id);
    if (!el) { show(current || 'home'); return; }
    const owner = el.closest('[data-view]');
    if (owner) show(owner.dataset.view); else if (!current) show('home');
    requestAnimationFrame(() => {
      el.scrollIntoView({ block: 'start' });
      if (!el.matches('a, button, input, [tabindex]')) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    });
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu(true); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) closeMenu(false); });

  // Same-hash clicks (e.g. "Find your chapter" twice) still scroll.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  });

  window.addEventListener('hashchange', route);
  route();
}
