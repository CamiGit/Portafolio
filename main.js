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


// =============================================
//  PROYECTOS — preview híbrido (iframe + imagen)
//  Pega este script antes de </body>
// =============================================

// ↓↓↓ CONFIGURA TUS PROYECTOS AQUÍ ↓↓↓
const projects = [
  {
    type: 'iframe',
    src:  'https://mo-wood.vercel.app/'
  },
  {
    type: 'iframe',
    src:  'https://quiz-woad-seven-86.vercel.app/'
  },
  {
    type: 'iframe',
    src:  'https://e-commerce-volt.vercel.app/'
  },
  {
    type: 'image',
    src:  'assets/timelyApp/timelyApp.png'
  },
];


(function () {
  const items      = document.querySelectorAll('.project-item');
  const wrapper    = document.getElementById('preview-wrapper');
  const currentNum = document.getElementById('current-num');

  function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'preview-overlay';
    return overlay;
  }

  function loadPreview(index, animate) {
    const project = projects[index];

    if (animate) {
      const existing = wrapper.querySelector('img, iframe');
      if (existing) {
        existing.classList.add('changing');
      }
    }

    setTimeout(() => {
      wrapper.innerHTML = '';

      if (project.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src   = project.src;
        iframe.title = 'Preview proyecto ' + (index + 1);
        if (animate) iframe.classList.add('changing');
        wrapper.appendChild(iframe);
        wrapper.appendChild(buildOverlay());

        // pequeño delay para que el iframe empiece a cargar antes de mostrarlo
        setTimeout(() => iframe.classList.remove('changing'), 50);

      } else {
        const img = document.createElement('img');
        img.src = project.src;
        img.alt = 'Preview proyecto ' + (index + 1);
        if (animate) img.classList.add('changing');
        wrapper.appendChild(img);
        wrapper.appendChild(buildOverlay());

        img.onload = () => img.classList.remove('changing');
        // fallback por si onload no dispara
        setTimeout(() => img.classList.remove('changing'), 300);
      }

      currentNum.textContent = String(index + 1).padStart(2, '0');
    }, animate ? 200 : 0);
  }

  // Carga el primer proyecto sin animación
  loadPreview(0, false);

  // Click en cada item
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) return;
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      loadPreview(i, true);
    });
  });
})();