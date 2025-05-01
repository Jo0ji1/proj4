// AOS init
AOS.init({ duration: 800, once: true });

// Back-to-Top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) backBtn.classList.add('visible');
  else backBtn.classList.remove('visible');
});
backBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// Accordion toggle
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    if (btn.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});
