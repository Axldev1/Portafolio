
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Función para resaltar el elemento del menu activo
function highlightNavLink(id) {
  navLinks.forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Función para manejar el desplazamiento
function handleScroll() {
  const scrollPosition = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // ajusta valor
    const sectionId = section.getAttribute('id');
    if (scrollPosition >= sectionTop) {
      highlightNavLink(sectionId);
    }
  });
}

//evento de desplazamiento
window.addEventListener('scroll', handleScroll);

//  evento de clic para resaltar cuando se hace clic en el enlace del menu
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    highlightNavLink(targetId);
    // Desplázate suavemente al destino
    document.querySelector(`#${targetId}`).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Funcion para resaltar el elemento del menu activo y borrar otros colores
function highlightNavLink(id) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // ...
  
  //  evento de desplazamiento
  window.addEventListener('scroll', handleScroll);
  // Script personalizado para el comportamiento de Scrollspy
$(document).ready(function () {
    // Inicializa Scrollspy
    $('body').scrollspy({ target: '#navbar-example2' });
  
    // Funciones para resaltar los elementos del menu al hacer clic
    function Navsection1() {
      $('a.nav-link').removeClass('active');
      $('#section1').addClass('active');
    }
  
    function NavSection2() {
      $('a.nav-link').removeClass('active');
      $('#section2').addClass('active');
    }
  
    function NavSection3() {
      $('a.nav-link').removeClass('active');
      $('#section3').addClass('active');
    }
  
    // Añade desplazamiento suave para los enlaces de anclaje
    $('a.nav-link[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  