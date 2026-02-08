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

// ================= TEAMS DROPDOWN =================

document.addEventListener('DOMContentLoaded', () => {
  const teamToggles = document.querySelectorAll('.teams-toggle');

  teamToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const tournamentId = toggle.dataset.tournament;
      const teamsList = document.getElementById(tournamentId);

      // Toggle active state
      toggle.classList.toggle('active');
      teamsList.classList.toggle('active');

      // Cerrar otros desplegables cuando uno se abre
      teamToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          otherToggle.classList.remove('active');
          const otherId = otherToggle.dataset.tournament;
          document.getElementById(otherId).classList.remove('active');
        }
      });
    });
  });

  // Cerrar desplegable cuando se hace click afuera
  document.addEventListener('click', (e) => {
    const isToggle = e.target.closest('.teams-toggle');
    const isTeamsList = e.target.closest('.teams-list');

    if (!isToggle && !isTeamsList) {
      teamToggles.forEach(toggle => {
        toggle.classList.remove('active');
      });
      document.querySelectorAll('.teams-list').forEach(list => {
        list.classList.remove('active');
      });
    }
  });
});

