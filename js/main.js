// ================= HAMBURGER MENU =================

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  // Toggle menu cuando se hace click en el hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Cerrar el menú cuando se hace click en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Cerrar el menú cuando se hace resize y vuelve a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});
