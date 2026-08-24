const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Twin Forge inquiry — ${data.get('interest')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nInterest: ${data.get('interest')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:info@twinforgeholdings.com?subject=${subject}&body=${body}`;
  note.textContent = 'Your email app should open with the inquiry ready to send.';
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) header.style.background = 'rgba(9,10,10,.94)';
  else header.style.background = 'linear-gradient(#090a0a,transparent)';
});
