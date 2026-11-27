document.documentElement.classList.add('js');

// Mobile nav
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  const mq = window.matchMedia('(max-width: 900px)');
  const sync = () => {
    if (mq.matches) {
      nav.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
    } else {
      nav.hidden = false;
    }
  };
  sync();
  mq.addEventListener('change', sync);
  menuBtn.addEventListener('click', () => {
    const open = nav.hidden;
    nav.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
  });
}

// Reveal on scroll — elements start visible without JS and for reduced motion
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 4, 3) * 60 + 'ms';
    io.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// Contact form — static site, so confirm in place rather than pretend to send
const form = document.querySelector('form[data-static]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-status');
    note.textContent = 'This rebuild has no mail server attached yet. Copy your message and email it to info@aperturagtx.com.';
    note.hidden = false;
  });
}

// Copy email
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    const label = btn.querySelector('.copy-label') || btn;
    const original = label.textContent;
    try {
      await navigator.clipboard.writeText(text);
      label.textContent = 'Copied';
    } catch {
      label.textContent = 'Press ⌘C';
      const r = document.createRange();
      r.selectNodeContents(document.querySelector('[data-copy-source]') || btn);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
    }
    setTimeout(() => { label.textContent = original; }, 2200);
  });
});
