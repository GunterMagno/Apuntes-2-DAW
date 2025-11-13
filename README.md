# Wiki Personal - Apuntes 2º DAW

Repositorio personal de conocimiento y apuntes para el curso de **Desarrollo de Aplicaciones Web (2º DAW)**. Una wiki moderna con tema oscuro diseñada para facilitar el estudio y consulta rápida de todas las tecnologías del curso.

## 🚀 Tecnologías Incluidas

Esta wiki contiene documentación completa, resúmenes de comandos y ejemplos prácticos de:

- **☕ Java** - Lenguaje de programación orientado a objetos
- **🍃 Spring Boot** - Framework empresarial de Java con Maven, JPA, Lombok
- **🅰️ Angular** - Framework completo para aplicaciones web SPA con TypeScript
- **📦 Node.js** - Entorno de ejecución JavaScript del lado del servidor
- **🍃 MongoDB** - Base de datos NoSQL orientada a documentos
- **⚡ Express.js** - Framework web minimalista para Node.js
- **⚛️ React** - Librería para construir interfaces de usuario interactivas
- **🐳 Docker** - Plataforma de contenedores para desarrollo y despliegue
- **🔄 GitHub Actions** - Automatización CI/CD integrada en GitHub

## ✨ Características

- 🎨 **Tema Oscuro Moderno** - Esquema de colores grises elegante y cómodo para la vista
- 📱 **Totalmente Responsive** - Adaptado para móviles, tablets y desktop
- 🎯 **Navegación Intuitiva** - Estructura organizada por tecnologías
- 📊 **Páginas de Resumen** - Tablas de comandos esenciales para cada tecnología
- 📖 **Páginas Detalladas** - Contenido explicativo con ejemplos y conceptos
- 🔍 **Sidebar de Navegación** - En cada tecnología para acceso rápido a temas
- 🌈 **Colores por Tecnología** - Cada tecnología tiene su color identificativo
- ⚡ **Animaciones Suaves** - Transiciones y efectos visuales agradables
- 📦 **Estructura Organizada** - Archivos agrupados por carpetas de tecnología

## 📚 Estructura del Proyecto

```
Apuntes-2-DAW/
├── index.html                      # Página principal con grid de tecnologías
├── css/
│   └── styles.css                  # Estilos globales (tema oscuro con grises)
├── js/
│   └── main.js                     # JavaScript para interactividad
├── pages/                          # Contenido organizado por tecnología
│   ├── java/
│   │   ├── index.html             # Temario principal de Java
│   │   ├── resumen.html           # Tabla de comandos y conceptos clave
│   │   ├── introduccion.html
│   │   ├── sintaxis-basica.html
│   │   ├── poo.html
│   │   ├── colecciones.html
│   │   ├── excepciones.html
│   │   └── streams.html
│   ├── spring/
│   │   ├── index.html
│   │   ├── resumen.html           # Comandos Maven, anotaciones, JPA
│   │   ├── introduccion.html
│   │   ├── inyeccion-dependencias.html
│   │   ├── jpa.html
│   │   ├── rest-controllers.html
│   │   ├── seguridad.html
│   │   └── validacion.html
│   ├── angular/
│   │   ├── index.html
│   │   ├── resumen.html           # Angular CLI, decoradores, directivas
│   │   ├── introduccion.html
│   │   ├── componentes.html
│   │   ├── directivas.html
│   │   ├── servicios.html
│   │   ├── routing.html
│   │   └── forms.html
│   ├── nodejs/
│   │   ├── index.html
│   │   ├── resumen.html           # NPM, módulos core, async/await
│   │   ├── introduccion.html
│   │   ├── modulos.html
│   │   ├── async.html
│   │   ├── filesystem.html
│   │   ├── http.html
│   │   └── eventos.html
│   ├── mongodb/
│   │   ├── index.html
│   │   ├── resumen.html           # CRUD, operadores, consultas
│   │   ├── introduccion.html
│   │   ├── crud.html
│   │   ├── consultas.html
│   │   ├── agregacion.html
│   │   ├── indices.html
│   │   └── mongoose.html
│   ├── express/
│   │   ├── index.html
│   │   ├── resumen.html           # HTTP methods, middleware, Router
│   │   ├── introduccion.html
│   │   ├── routing.html
│   │   ├── middleware.html
│   │   ├── rest-api.html
│   │   ├── autenticacion.html
│   │   └── validacion.html
│   ├── react/
│   │   ├── index.html
│   │   ├── resumen.html           # Hooks, JSX, React Router
│   │   ├── introduccion.html
│   │   ├── componentes.html
│   │   ├── estado.html
│   │   ├── hooks.html
│   │   ├── routing.html
│   │   └── apis.html
│   ├── docker/
│   │   ├── index.html
│   │   ├── resumen.html           # Comandos Docker, Compose, Dockerfile
│   │   ├── introduccion.html
│   │   ├── imagenes.html
│   │   ├── contenedores.html
│   │   ├── volumenes.html
│   │   ├── networking.html
│   │   └── compose.html
│   └── github-actions/
│       ├── resumen.html           # Workflows, eventos, sintaxis YAML
│       ├── introduccion.html
│       ├── workflows.html
│       ├── actions.html
│       ├── secrets.html
│       ├── ci-cd.html
│       └── deploy.html
├── DEPLOYMENT.md                   # Guía de despliegue en GitHub Pages
└── README.md                       # Este archivo
```

## 💻 Desarrollo Local

### Opción 1: Servidor HTTP Simple

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server -p 8000

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: VS Code Live Server

1. Instala la extensión **Live Server** en VS Code
2. Click derecho en `index.html` → **"Open with Live Server"**
3. Se abrirá automáticamente en `http://127.0.0.1:5500`

### Opción 3: Abrir Directamente

Simplemente abre `index.html` en tu navegador favorito (funciona sin servidor).

## � Despliegue en GitHub Pages

Esta wiki puede desplegarse automáticamente en GitHub Pages. Consulta `DEPLOYMENT.md` para instrucciones completas.

**Resumen rápido:**
1. Habilita GitHub Pages en Settings → Pages
2. Selecciona "GitHub Actions" como source
3. Haz push a la rama `main`
4. Tu sitio estará en: `https://[usuario].github.io/Apuntes-2-DAW/`

## 🎨 Paleta de Colores (Tema Oscuro)

```css
/* Fondos - Grises Oscuros */
--bg-primary: #2a2d35      /* Fondo principal */
--bg-secondary: #1f2228    /* Fondo secundario */
--bg-card: #32353d         /* Tarjetas */
--bg-tertiary: #363940     /* Bordes y elementos terciarios */

/* Textos - Grises Claros */
--text-primary: #e8eaed    /* Texto principal */
--text-secondary: #b8bcc4  /* Texto secundario */
--text-tertiary: #8f94a0   /* Texto terciario */

/* Acentos - Púrpura/Índigo */
--accent-primary: #6366f1  /* Índigo principal */
--accent-secondary: #818cf8 /* Índigo claro */
```

## 📖 Contenido de las Páginas

### Páginas `index.html` (Temarios)
- Listado completo de temas de la tecnología
- Navegación con sidebar
- Enlaces a páginas detalladas

### Páginas `resumen.html` (Comandos)
- Tablas de comandos esenciales
- Parámetros y sintaxis
- Descripciones concisas
- Ideal para consulta rápida

### Páginas de Temas
- Contenido educativo detallado
- Ejemplos prácticos
- Explicaciones conceptuales
- Código comentado

## �️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica moderna
- **CSS3** - Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+** - Interactividad y funcionalidad
- **Font Awesome 6.4.0** - Iconografía
- **Google Fonts (Inter)** - Tipografía moderna

## 🎯 Cómo Añadir Contenido

### Añadir Nueva Tecnología

1. Crea carpeta en `pages/nombre-tecnologia/`
2. Crea `index.html` (temario) y `resumen.html` (comandos)
3. Añade tarjeta en `index.html` principal:
```html
<div class="tech-card" data-tech="nombre">
    <div class="tech-icon">
        <i class="fas fa-icono"></i>
    </div>
    <h3 class="tech-title">Nombre</h3>
    <p class="tech-description">Descripción...</p>
    <div class="tech-actions">
        <a href="pages/nombre/index.html" class="btn-primary">Ver Temario</a>
        <a href="pages/nombre/resumen.html" class="btn-secondary">Ver Resumen</a>
    </div>
</div>
```
4. Añade color en `styles.css`:
```css
--nombre-color: #hexcolor;
.tech-card[data-tech="nombre"] .tech-icon { color: var(--nombre-color); }
```

### Añadir Nuevo Tema

1. Crea archivo HTML en la carpeta de la tecnología
2. Usa plantilla de páginas existentes
3. Añade enlace en el sidebar del `index.html` de esa tecnología

## 🔄 Próximas Mejoras

- [ ] Sistema de búsqueda global
- [ ] Toggle tema claro/oscuro
- [ ] Cheatsheets descargables en PDF
- [ ] Ejercicios prácticos interactivos
- [ ] Sistema de favoritos/marcadores
- [ ] Modo offline (PWA)
- [ ] Integración con API de StackOverflow

## 📄 Licencia

Este proyecto es de uso personal y educativo. Libre para modificar y adaptar.

## 👨‍💻 Autor

**Desarrollado para:** 2º DAW - Desarrollo de Aplicaciones Web  
**Última actualización:** Noviembre 2025

---

💡 **Tip:** Usa `Ctrl + F` en cada página de resumen para buscar comandos específicos rápidamente.

🚀 **¡Feliz aprendizaje!**