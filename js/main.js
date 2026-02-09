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

// ================= AGENTS CAROUSEL =================

document.addEventListener('DOMContentLoaded', () => {
  const agentsTrack = document.querySelector('.agents-track');
  const prevBtn = document.querySelector('.carousel-btn--prev');
  const nextBtn = document.querySelector('.carousel-btn--next');
  const agentCards = document.querySelectorAll('.agent-card');

  if (!agentsTrack) return;

  let currentIndex = 0;

  const getCardWidth = () => {
    const card = agentCards[0];
    const style = window.getComputedStyle(card);
    const width = card.offsetWidth;
    const gap = parseFloat(style.marginRight) || 24; // 1.5rem = 24px
    return width + gap;
  };

  const scrollToCard = (index) => {
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth * index;
    agentsTrack.scrollLeft = scrollAmount;
  };

  const updateButtonStates = () => {
    const maxIndex = agentCards.length - 1;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
    
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCard(currentIndex);
      updateButtonStates();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < agentCards.length - 1) {
      currentIndex++;
      scrollToCard(currentIndex);
      updateButtonStates();
    }
  });

  // Inicializar estados
  updateButtonStates();
});


