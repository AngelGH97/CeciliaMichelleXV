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

