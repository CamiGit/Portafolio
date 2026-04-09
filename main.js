/* ═══════════════════════════════════════
  PORTFOLIO - FULL STACK DEVELOPER
  main.js
═══════════════════════════════════════ */

/* ── Navbar: sombra al hacer scroll ── */
// Obtener referencia al elemento <nav> con id "navbar".
const navbar = document.getElementById('navbar');

// Escuchar el evento scroll de la ventana para aplicar o quitar la sombra.
window.addEventListener('scroll', () => {
  // Si el desplazamiento vertical es mayor a 20px, agrega la clase "scrolled".
  // Si no, la elimina.
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Resaltar enlace activo al hacer scroll ── */
// Seleccionar todas las secciones que tienen un atributo id.
const sections = document.querySelectorAll('section[id]');
// Seleccionar todos los enlaces de la navegación principal.
const navLinks = document.querySelectorAll('.nav-links a');

// Crear un observador para detectar qué sección está visible en pantalla.
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Solo actúa cuando la sección entra en el viewport.
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        // Comparar el href de cada enlace con el id de la sección visible.
        // Si coinciden, agregar la clase "active" al enlace; si no, quitarla.
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

// Observar cada sección para detectar cuándo está en pantalla.
sections.forEach(s => sectionObserver.observe(s));

/* ── Animación reveal al hacer scroll ── */
// Seleccionar todos los elementos que deben aparecer con efecto reveal.
const reveals = document.querySelectorAll('.reveal');

// Crear un observador para animar los elementos cuando se muestran en pantalla.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Agrega la clase "visible" al elemento para iniciar la animación.
      entry.target.classList.add('visible');
      // Deja de observar el elemento una vez que ya se hizo visible.
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Observar cada elemento reveal.
reveals.forEach(el => revealObserver.observe(el));

/* ── Menú hamburguesa (móvil) ── */
// Obtener referencia al botón de hamburguesa móvil.
const hamburger = document.getElementById('hamburger');

// Cambiar el estado del menú cuando se hace click en la hamburguesa.
hamburger.addEventListener('click', () => {
  // Alternar la clase "open" para animar el icono.
  hamburger.classList.toggle('open');
  // Alternar la clase "menu-open" en el navbar para mostrar/ocultar el menú.
  navbar.classList.toggle('menu-open');
});

/* Cerrar menú al hacer clic en un enlace */
// Añadir listener a cada enlace de navegación para cerrar el menú móvil.
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    // Quitar las clases de estado del menú para volver al modo cerrado.
    hamburger.classList.remove('open');
    navbar.classList.remove('menu-open');
  });
});

