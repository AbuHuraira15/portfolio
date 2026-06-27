// Year
document.getElementById('year').textContent = new Date().getFullYear();
// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});
// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);
// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const linkMap = {};
navLinks.querySelectorAll('a').forEach(a => {
  linkMap[a.getAttribute('href').slice(1)] = a;
});
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      Object.values(linkMap).forEach(l => l.classList.remove('active'));
      const link = linkMap[e.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => obs.observe(s));
// Reveal-on-scroll
const toReveal = document.querySelectorAll(
  '.section-head, .about-text, .about-card, .skill, .project, .timeline-item, .contact-form, .contact-lead'
);
toReveal.forEach(el => el.classList.add('reveal'));
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
toReveal.forEach(el => revealObs.observe(el));
// Contact form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.classList.remove('error');
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.email || !data.message) {
    status.textContent = 'Please fill in name, email, and message.';
    status.classList.add('error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    status.textContent = 'Please enter a valid email address.';
    status.classList.add('error');
    return;
  }
  status.textContent = 'Thanks ' + data.name + '! Your message has been recorded.';
  form.reset();
});