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

window.onload = function () {
    window.scrollTo(0, 0);
  };
  
 window.addEventListener('load', () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  window.addEventListener("load", function () {
    // Oculta el loader
    document.getElementById("preloader").style.display = "none";
    // Muestra el contenido
    document.getElementById("contenido").style.display = "block";
    // Reinicia AOS si lo usas
    AOS.refresh(); 
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
  
document.addEventListener("DOMContentLoaded", function () {
  lightGallery(document.getElementById('lightgallery'), {
    selector: 'a',
    plugins: [lgThumbnail, lgZoom],
    thumbnail: true,
    zoom: false,
    download: false,
    speed: 500,
    showThumbByDefault: true,
    mobileSettings: {
      controls: true,
      showCloseIcon: true,
      download: false,
      rotate: false,
      thumbnail: true,
      showThumbByDefault: true
    }
  });
});

