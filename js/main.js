// =========================================
// NAVEGACIÓN Y MENU MOBILE
// =========================================

// Elementos del DOM
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle del menú móvil
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// =========================================
// NAVEGACIÓN CON SCROLL SUAVE Y ACTIVE STATE
// =========================================

// Actualizar link activo según la sección visible
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// =========================================
// TOGGLE DE COMANDOS EN TARJETAS
// =========================================

function toggleCommands(techName) {
    const commandsDiv = document.getElementById(`commands-${techName}`);
    
    if (commandsDiv) {
        // Cerrar todos los demás comandos abiertos
        const allCommands = document.querySelectorAll('.commands-summary');
        allCommands.forEach(cmd => {
            if (cmd.id !== `commands-${techName}`) {
                cmd.classList.remove('active');
            }
        });
        
        // Toggle del actual
        commandsDiv.classList.toggle('active');
    }
}

// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas de tecnología
document.querySelectorAll('.tech-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Observar tarjetas de recursos
document.querySelectorAll('.resource-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// =========================================
// FUNCIONES DE UTILIDAD
// =========================================

// Copiar código al portapapeles
function copyCode(button) {
    const codeBlock = button.parentElement.querySelector('pre');
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = '¡Copiado!';
        button.style.backgroundColor = 'var(--spring-color)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    });
}

// Buscar en la página
function searchContent(query) {
    const searchTerm = query.toLowerCase();
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        const title = card.querySelector('.tech-title').textContent.toLowerCase();
        const description = card.querySelector('.tech-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// =========================================
// MODO CLARO/OSCURO (OPCIONAL)
// =========================================

// Guardar preferencia de tema
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Cargar preferencia de tema
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

// Cargar tema al iniciar
loadThemePreference();

// =========================================
// EFECTOS ADICIONALES
// =========================================

// Efecto parallax suave en el hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Efecto de typing en el título (opcional)
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// =========================================
// FUNCIONES PARA PÁGINAS DETALLADAS
// =========================================

// Tabla de contenidos dinámica
function generateTableOfContents() {
    const toc = document.getElementById('table-of-contents');
    if (!toc) return;
    
    const headings = document.querySelectorAll('.content-section h2, .content-section h3');
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    headings.forEach((heading, index) => {
        // Asignar ID si no tiene
        if (!heading.id) {
            heading.id = `section-${index}`;
        }
        
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.className = heading.tagName === 'H2' ? 'toc-h2' : 'toc-h3';
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        li.appendChild(link);
        tocList.appendChild(li);
    });
    
    toc.appendChild(tocList);
}

// Resaltar código (si se usa una librería como Prism o Highlight.js)
function highlightCode() {
    const codeBlocks = document.querySelectorAll('.code-block pre');
    codeBlocks.forEach(block => {
        // Aquí se puede integrar Prism.js o Highlight.js
        // Por ahora solo añadimos clases básicas
        block.classList.add('language-javascript');
    });
}

// =========================================
// INICIALIZACIÓN
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Wiki Personal 2º DAW - Cargada correctamente ✓');
    
    // Generar tabla de contenidos si existe
    generateTableOfContents();
    
    // Resaltar código
    highlightCode();
    
    // Actualizar año en el footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer p');
    if (footerYear) {
        footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
    }
});

// =========================================
// EXPORTAR FUNCIONES GLOBALES
// =========================================

// Hacer disponibles las funciones necesarias globalmente
window.toggleCommands = toggleCommands;
window.copyCode = copyCode;
window.searchContent = searchContent;
