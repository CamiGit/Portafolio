/* ═══════════════════════════════════════
  PORTFOLIO - FULL STACK DEVELOPER
  main.js
═══════════════════════════════════════ */

/* ══════════════ TEMA CLARO / OSCURO ══════════════ */
// El atributo data-theme ya viene puesto por el script inline del <head>
// (preferencia guardada o, si no hay, la del sistema operativo).
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  // Solo al elegir manualmente se guarda la preferencia.
  localStorage.setItem('theme', next);
});

// Si el usuario no ha forzado un tema, seguir los cambios del sistema en vivo.
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'light' : 'dark');
  }
});

/* ══════════════ TRADUCCIÓN ES / EN ══════════════ */
const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.experience': 'Experiencia',
    'nav.about': 'Sobre mí',
    'nav.cv': 'Descargar CV',
    'nav.contact': 'Contáctame',

    'hero.badge': 'Disponible',
    'hero.title': 'Hola, soy <span class="accent">Camilo Orjuela</span> <span class="line2">Full Stack Developer</span>',
    'hero.desc': 'Desarrollador apasionado por construir soluciones web completas, desde interfaces modernas hasta APIs robustas. Enfocado en código limpio, buenas prácticas y aprendizaje continuo.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.aboutBtn': 'Sobre mí',
    'hero.statTech': 'Tecnologías',
    'hero.statProjects': 'Proyectos',
    'hero.statYears': 'Años en formación',

    'proj.tag': 'Mi trabajo',
    'proj.title': '<span>Proyectos</span> Destacados',
    'proj.n2': 'Quiz Interactivo',
    'proj.n3': 'API REST — Clínica Médica',
    'proj.d1': 'Plataforma full stack para gestión de reservas y clientes, con frontend en JavaScript vanilla y API REST desarrollada en Spring Boot.',
    'proj.d2': 'Aplicación de trivia con consumo de API externa, sistema de puntuación en tiempo real y modo claro/oscuro, construida con React.',
    'proj.d3': 'Backend para gestión de citas médicas con Java y Spring Boot: CRUD completo, validaciones de negocio y arquitectura RESTful bien estructurada.',
    'proj.d4': 'Sitio web corporativo para empresa de muebles artesanales, con catálogo de productos interactivo y diseño responsive desarrollado en React.',
    'proj.repoFront': 'Repositorio Front',
    'proj.repoBack': 'Repositorio Back',
    'proj.repo': 'Repositorio',
    'proj.demo': 'Demo',

    'edu.tag': 'Formación académica',
    'edu.title': 'Mi <span>Educación</span>',
    'edu.y1': 'Enero 2027',
    'edu.y2': 'Junio 2026',
    'edu.y3': 'Enero 2026',
    'edu.d1': 'Especialista en Seguridad de la información con énfasis en Desarrollo Seguro de Software',
    'edu.d2': 'Desarrollador Junior Full Stack',
    'edu.d3': 'Ingeniero de Software',

    'skills.title': 'Tecnologías que manejo',
    'skills.sql': 'SQL / Bases de datos',
    'skills.agile': 'Metodologías Ágiles',

    'exp.tag': 'Trayectoria profesional',
    'exp.title': 'Mi <span>Experiencia</span>',
    'exp.r1': 'Desarrollador Web Freelance',
    'exp.p1': '2025 - Presente',
    'exp.c1': 'Proyectos independientes',
    'exp.d1': '● Desarrollo de sitio web corporativo para empresa de muebles en React con catálogo de productos y diseño responsive. Plataforma e-commerce Full Stack con autenticación de usuarios, carrito de compras e integración de base de datos relacional (Java + Spring Boot). Dashboards interactivos con Chart.js y Power BI para análisis estratégico de datos de negocio.',
    'exp.r2': 'Desarrollador de Automatización de Procesos',
    'exp.d2': '● Diseñé e implementé un sistema de control de inventarios a medida con Python, reduciendo las pérdidas en un 97% mediante automatizaciones de seguimiento y reportes analíticos integrados. <br> ● Desarrollé e implementé aplicaciones web personalizadas para la gestión de puntos de venta, optimizando procesos operativos mediante soluciones de software escalables y de alto impacto.',
    'exp.r3': 'Analista de Datos & Administrador',
    'exp.d3': '● Desarrollé e integré aplicaciones de control basadas en el sistema POS, automatizando el seguimiento de costos e inventarios mediante soluciones de software a medida. <br> ● Construí dashboards interactivos en Power BI para el análisis estratégico de datos, impulsando la transformación digital del negocio mediante visualización y toma de decisiones basada en datos.',
    'exp.tRedes': 'Redes',

    'about.tag': 'Conóceme',
    'about.title': 'Sobre <span>Mí</span>',
    'about.bio': 'Desarrollador Full Stack con formación en Ingeniería de Software y especialización en seguridad de la información. Con sólido enfoque en backend usando Java (Spring Boot) y Python (Django), y experiencia en frontend con React. He construido aplicaciones web completas como e-commerce, gestores de reservas e interfaces responsive, aplicando buenas prácticas de desarrollo, REST APIs y computación en la nube con AWS. Destaco por mi capacidad analítica, rápido aprendizaje y visión orientada al desarrollo de software seguro y escalable.',
    'about.lName': 'Nombre',
    'about.lLocation': 'Ubicación',
    'about.lRole': 'Perfil',
    'about.lStatus': 'Estado',
    'about.lEmail': 'Correo',
    'about.lPhone': 'Teléfono',
    'about.vStatus': '✓ Disponible',

    'contact.title': '¿Tienes un proyecto en mente?',
    'contact.desc': 'Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones.',
    'contact.send': 'Enviar mensaje',

    'footer.text': '2026 Camilo Orjuela © · Hecho con 💚 en Colombia',

    'js.connecting': 'Conectando...',
    'js.connError': '\n❌ Error de conexión',
    'js.closed': '\n[Sesión cerrada]',
    'js.placeholder': 'escribe una opción y presiona Enter...'
  },

  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.about': 'About me',
    'nav.cv': 'Download CV',
    'nav.contact': 'Contact me',

    'hero.badge': 'Open to work',
    'hero.title': 'Hi, I\'m <span class="accent">Camilo Orjuela</span> <span class="line2">Full Stack Developer</span>',
    'hero.desc': 'Developer passionate about building complete web solutions, from modern interfaces to robust APIs. Focused on clean code, best practices and continuous learning.',
    'hero.viewProjects': 'View projects',
    'hero.aboutBtn': 'About me',
    'hero.statTech': 'Technologies',
    'hero.statProjects': 'Projects',
    'hero.statYears': 'Years of training',

    'proj.tag': 'My work',
    'proj.title': 'Featured <span>Projects</span>',
    'proj.n2': 'Interactive Quiz',
    'proj.n3': 'REST API — Medical Clinic',
    'proj.d1': 'Full stack platform for booking and client management, with a vanilla JavaScript frontend and a REST API built with Spring Boot.',
    'proj.d2': 'Trivia app consuming an external API, with real-time scoring and light/dark mode, built with React.',
    'proj.d3': 'Backend for medical appointment management with Java and Spring Boot: full CRUD, business validations and a well-structured RESTful architecture.',
    'proj.d4': 'Corporate website for a handcrafted furniture company, with an interactive product catalog and responsive design built with React.',
    'proj.repoFront': 'Front-end repo',
    'proj.repoBack': 'Back-end repo',
    'proj.repo': 'Repository',
    'proj.demo': 'Live demo',

    'edu.tag': 'Academic background',
    'edu.title': 'My <span>Education</span>',
    'edu.y1': 'January 2027',
    'edu.y2': 'June 2026',
    'edu.y3': 'January 2026',
    'edu.d1': 'Specialist in Information Security with emphasis on Secure Software Development',
    'edu.d2': 'Junior Full Stack Developer',
    'edu.d3': 'Software Engineer',

    'skills.title': 'Technologies I work with',
    'skills.sql': 'SQL / Databases',
    'skills.agile': 'Agile Methodologies',

    'exp.tag': 'Professional background',
    'exp.title': 'My <span>Experience</span>',
    'exp.r1': 'Freelance Web Developer',
    'exp.p1': '2025 - Present',
    'exp.c1': 'Independent projects',
    'exp.d1': '● Development of a corporate website for a furniture company in React, with a product catalog and responsive design. Full Stack e-commerce platform with user authentication, shopping cart and relational database integration (Java + Spring Boot). Interactive dashboards with Chart.js and Power BI for strategic business data analysis.',
    'exp.r2': 'Process Automation Developer',
    'exp.d2': '● Designed and implemented a custom inventory control system with Python, reducing losses by 97% through automated tracking and integrated analytical reports. <br> ● Developed and deployed custom web applications for point-of-sale management, streamlining operations through scalable, high-impact software solutions.',
    'exp.r3': 'Data Analyst & Administrator',
    'exp.d3': '● Developed and integrated control applications based on the POS system, automating cost and inventory tracking through custom software solutions. <br> ● Built interactive Power BI dashboards for strategic data analysis, driving the business\'s digital transformation through visualization and data-driven decision making.',
    'exp.tRedes': 'Networking',

    'about.tag': 'Get to know me',
    'about.title': 'About <span>Me</span>',
    'about.bio': 'Full Stack Developer with a background in Software Engineering and a specialization in information security. Strong backend focus with Java (Spring Boot) and Python (Django), plus frontend experience with React. I have built complete web applications such as e-commerce platforms, booking managers and responsive interfaces, applying development best practices, REST APIs and cloud computing with AWS. I stand out for my analytical skills, fast learning and a vision oriented toward secure, scalable software.',
    'about.lName': 'Name',
    'about.lLocation': 'Location',
    'about.lRole': 'Role',
    'about.lStatus': 'Status',
    'about.lEmail': 'Email',
    'about.lPhone': 'Phone',
    'about.vStatus': '✓ Available',

    'contact.title': 'Have a project in mind?',
    'contact.desc': "I'm open to job opportunities, freelance projects and collaborations.",
    'contact.send': 'Send message',

    'footer.text': '2026 Camilo Orjuela © · Made with 💚 in Colombia',

    'js.connecting': 'Connecting...',
    'js.connError': '\n❌ Connection error',
    'js.closed': '\n[Session closed]',
    'js.placeholder': 'type an option and press Enter...'
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

// Devuelve la traducción de una clave en el idioma actual.
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.es[key] || key;
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });

  // El botón muestra el idioma al que se puede cambiar.
  document.getElementById('lang-label').textContent = lang === 'es' ? 'EN' : 'ES';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  const next = currentLang === 'es' ? 'en' : 'es';
  applyLang(next);
  localStorage.setItem('lang', next);
});

// Aplicar idioma guardado al cargar (el HTML viene en español).
if (currentLang !== 'es') {
  applyLang(currentLang);
}

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


const projects = [
  {
    type: 'iframe',
    src:  'https://gestionar-reservas.vercel.app/'
  },
  {
    type: 'iframe',
    src:  'https://quiz-woad-seven-86.vercel.app/'
  },
  {
    type: 'terminal',
    src:  'wss://clinica-server-production.up.railway.app'
  },
  {
    type: 'iframe',
    src:  'https://mo-wood.vercel.app/'
  },

];


(function () {
  const items      = document.querySelectorAll('.project-item');
  const wrapper    = document.getElementById('preview-wrapper');
  const currentNum = document.getElementById('current-num');
  let activeWs     = null;

  function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'preview-overlay';
    return overlay;
  }

  function loadAnsiUp(callback) {
    if (window.AnsiUp) { callback(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/ansi_up@5.1.0/ansi_up.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  function loadPreview(index, animate) {
    const project = projects[index];

    if (activeWs) {
      activeWs.close();
      activeWs = null;
    }

    if (animate) {
      const existing = wrapper.querySelector('img, iframe, div');
      if (existing) existing.classList.add('changing');
    }

    // ── TERMINAL ──────────────────────────────────────────────
    if (project.type === 'terminal') {
      setTimeout(() => {
        wrapper.innerHTML = '';

        const term = document.createElement('div');
        term.style.cssText = `
          width:100%; height:100%; background:#0d1117;
          display:flex; flex-direction:column;
          font-family:monospace; font-size:13px; color:#00ff88;
          padding:1rem; box-sizing:border-box;
        `;

        const output = document.createElement('pre');
        output.style.cssText = `
          flex:1; overflow-y:auto; margin:0;
          white-space:pre-wrap; word-break:break-word;
        `;
        output.textContent = t('js.connecting') + '\n';

        const inputRow = document.createElement('div');
        inputRow.style.cssText = `
          display:flex; align-items:center;
          gap:6px; border-top:1px solid #1a2a1a;
          padding-top:8px; margin-top:8px;
        `;

        const prompt = document.createElement('span');
        prompt.textContent = '>';

        const input = document.createElement('input');
        input.type = 'text';
        input.style.cssText = `
          flex:1; background:transparent; border:none;
          outline:none; color:#00ff88;
          font-family:monospace; font-size:13px;
        `;
        input.placeholder = t('js.placeholder');

        inputRow.appendChild(prompt);
        inputRow.appendChild(input);
        term.appendChild(output);
        term.appendChild(inputRow);
        wrapper.appendChild(term);
        wrapper.appendChild(buildOverlay());

        currentNum.textContent = String(index + 1).padStart(2, '0');

        loadAnsiUp(() => {
          const ansi = new AnsiUp();
          ansi.use_classes = false;

          const ws = new WebSocket(project.src);
          activeWs = ws;

          ws.onopen = () => {
            output.innerHTML = '';
          };

          ws.onmessage = (e) => {
            output.innerHTML += ansi.ansi_to_html(e.data);
            output.scrollTop = output.scrollHeight;
          };

          ws.onerror = () => {
            output.innerHTML += t('js.connError');
          };

          ws.onclose = () => {
            output.innerHTML += t('js.closed');
            activeWs = null;
          };

          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && ws.readyState === WebSocket.OPEN) {
              ws.send(input.value);
              input.value = '';
            }
          });
        });

      }, animate ? 200 : 0);

      return;
    }

    // ── IFRAME / IMAGE ────────────────────────────────────────
    setTimeout(() => {
      wrapper.innerHTML = '';

      if (project.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src   = project.src;
        iframe.title = 'Preview proyecto ' + (index + 1);
        if (animate) iframe.classList.add('changing');
        wrapper.appendChild(iframe);
        wrapper.appendChild(buildOverlay());

        setTimeout(() => iframe.classList.remove('changing'), 50);

      } else {
        const img = document.createElement('img');
        img.src = project.src;
        img.alt = 'Preview proyecto ' + (index + 1);
        if (animate) img.classList.add('changing');
        wrapper.appendChild(img);
        wrapper.appendChild(buildOverlay());

        img.onload = () => img.classList.remove('changing');
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
