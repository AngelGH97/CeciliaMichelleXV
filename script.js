
    /*const countdown = () => {
      const fechaEvento = new Date("2025-07-13T18:00:00").getTime();
      const ahora = new Date().getTime();
      const distancia = fechaEvento - ahora;

      if (distancia < 0) {
        document.getElementById("countdown").innerText = "¡Ya comenzó el evento!";
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerText = `${dias} Días ${horas} Horas ${minutos} Minutos ${segundos} Segundos`;
    };

    setInterval(countdown, 1000);*/

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
