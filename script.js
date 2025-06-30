const countdownContainer = document.querySelector(
    ".countdown-container"
);
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("message");
const birthday = "2025-07-13T18:00:00.000Z";

let countdownInterval;

startCountdown(birthday);

function startCountdown(birthday) {
    countdownInterval = setInterval(() => {
        const today = new Date();
        const currentYear = today.getFullYear();

        // Set the next birthday date
        let nextBirthday = new Date(birthday);
        nextBirthday.setFullYear(currentYear);

        // If the birthday has already passed this year, set it to next year
        if (nextBirthday < today) {
            nextBirthday.setFullYear(currentYear);
        }

        const timeDifference = nextBirthday - today;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            messageElement.textContent = "HOY ES";
            return;
        }

        const days = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24 * 30)) /
                (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (timeDifference % (1000 * 60)) / 1000
        );

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(
            2,
            "0"
        );
        secondsElement.textContent = String(seconds).padStart(
            2,
            "0"
        );
    }, 1000);
}

 window.addEventListener('load', () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });


  let lastScrollTop = 0;
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      if (currentScroll < lastScrollTop) {
        // Scroll hacia arriba: ocultar
        section.classList.add('oculta');
      } else {
        // Scroll hacia abajo: mostrar (con AOS reiniciado)
        section.classList.remove('oculta');
        AOS.refresh(); // vuelve a aplicar las animaciones
      }
    });

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  
function appear(index) {
  anime({
    targets: `.section:nth-child(${index}) h1`,
    opacity: [0, 1],
    duration: anime.random(300, 600),
    easing: 'easeInOutQuad'
  })
}

function disappear() {
  anime({
    targets: `h1`,
    opacity: [1, 0],
    duration: anime.random(200, 400),
    easing: 'easeInOutQuad'
  })
}
  
  let loading = false;
  let page = 1;

  window.addEventListener('scroll', () => {
    if (loading) return;
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    if (nearBottom) {
      loadMoreSections();
    }
  });

  function loadMoreSections() {
    loading = true;
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Simula carga remota con timeout
    setTimeout(() => {
      const container = document.getElementById('page-content');

      // Puedes cambiar o añadir las secciones que quieras repetir o nuevas secciones aquí
      const newSection = document.createElement('section');
      newSection.className = 'section bg-light';
      newSection.setAttribute('data-aos', 'fade-up');
      newSection.innerHTML = `
        <h2>Sección Extra #${++page}</h2>
        <p>Contenido cargado dinámicamente al hacer scroll infinito.</p>
      `;

      container.appendChild(newSection);

      loader.style.display = 'none';
      loading = false;
    }, 1500);
  }

  const masonry_container = document.querySelector('#masonry-gallery-demo');
window.lightGallery(masonry_container, {
    selector: '.lg-item',
    zoomFromOrigin: true,
    download: true,
    plugins: [
        lgZoom,
        lgAutoplay,
        lgFullscreen,
        lgRotate,
        lgShare,
        lgThumbnail
    ],
});

  lightGallery(document.getElementById('lightgallery'), {
    selector: 'a',
    plugins: [lgThumbnail, lgZoom],
    thumbnail: true,
    zoom: true,
    download: false,
    speed: 500
  });