// Persist packing checklist in localStorage
(function () {
  const KEY = 'jukhunant.packing.v1';
  const boxes = document.querySelectorAll('.checklist input[type="checkbox"]');

  // Build a stable id from the label text
  const idFor = (cb) => (cb.closest('label')?.innerText || '').trim();

  // Restore
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) {}
  boxes.forEach((cb) => {
    const id = idFor(cb);
    if (saved[id]) cb.checked = true;
    cb.addEventListener('change', () => {
      const state = {};
      boxes.forEach((b) => { if (b.checked) state[idFor(b)] = true; });
      localStorage.setItem(KEY, JSON.stringify(state));
    });
  });

  // Days countdown in the kicker
  const kicker = document.querySelector('.kicker');
  if (kicker) {
    const start = new Date('2026-07-17T00:00:00');
    const today = new Date();
    const days = Math.ceil((start - today) / (1000 * 60 * 60 * 24));
    if (days > 0) {
      kicker.textContent += ` · ${days} days to go`;
    } else if (days >= -4) {
      kicker.textContent += ' · en route 🍷';
    }
  }
})();
