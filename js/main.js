/* ─── Config ────────────────────────────────────────────────── */
// 🔧 EDIT THIS: Data início do namoro (ano, mês-1, dia)
const START_DATE = new Date(2024, 0, 1); // ex: 1 de Janeiro de 2024

// 🔧 EDIT THIS: Data do próximo encontro (ano, mês-1, dia, hora, minuto)
const NEXT_MEETING = new Date(2025, 6, 20, 18, 0); // ex: 20 de Julho de 2025

/* ─── Days together counter ─────────────────────────────────── */
function updateDaysTogether() {
  const now = new Date();
  const diff = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('days-together');
  if (el) el.textContent = diff.toLocaleString('pt-BR');
}

/* ─── Countdown ──────────────────────────────────────────────── */
function updateCountdown() {
  const now  = new Date();
  const diff = NEXT_MEETING - now;

  if (diff <= 0) {
    document.querySelectorAll('.cd-value').forEach(el => el.textContent = '0');
    const msg = document.querySelector('.encontro-msg');
    if (msg) msg.textContent = 'Hoje é o dia! 🎉 Corre que eu já tô te esperando 💚';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = n => String(n).padStart(2, '0');

  const setEl = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = pad(val); };
  setEl('cd-days', days);
  setEl('cd-hours', hours);
  setEl('cd-minutes', minutes);
  setEl('cd-seconds', seconds);
}

/* ─── Modal ──────────────────────────────────────────────────── */
function openModal(id) {
  const overlay = document.getElementById('modal-' + id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(el) {
  const overlay = el.closest('.modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// close on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.querySelector('.modal-close'));
});

// close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => {
      o.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

/* ─── Lightbox ───────────────────────────────────────────────── */
function openLightbox(src) {
  if (!src) return;
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  if (lb) lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
});

/* ─── Scroll reveal ──────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 100;
    observer.observe(el);
  });

  updateDaysTogether();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

/* ─── Floating hearts on click ───────────────────────────────── */
document.addEventListener('click', e => {
  if (e.target.closest('a, button, .card, .photo-item')) return;
  spawnHeart(e.clientX, e.clientY);
});

function spawnHeart(x, y) {
  const hearts = ['💚', '🩷', '💗', '🩵', '✨'];
  const el = document.createElement('span');
  el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  el.style.cssText = `
    position: fixed;
    left: ${x - 12}px;
    top: ${y - 12}px;
    font-size: 1.3rem;
    pointer-events: none;
    z-index: 9999;
    animation: floatHeart 1.2s ease-out forwards;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

// inject keyframe
const style = document.createElement('style');
style.textContent = `
  @keyframes floatHeart {
    0%   { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-70px) scale(1.4); }
  }
`;
document.head.appendChild(style);
