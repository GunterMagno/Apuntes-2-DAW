# Wiki Personal - 2º DAW

## 📚 Descripción

Wiki personal moderna con diseño oscuro (dark mode) para consultar y aprender todos los apuntes del curso de **Desarrollo de Aplicaciones Web de segundo curso**. Esta página está diseñada para organizar toda la documentación, código, ejemplos y comandos necesarios para el estudio.

## 🚀 Tecnologías incluidas

La wiki contiene documentación completa y detallada sobre las siguientes tecnologías:

- **Java** - Lenguaje de programación orientado a objetos
- **Spring Boot** - Framework para aplicaciones Java empresariales
- **Angular** - Framework completo para aplicaciones web SPA
- **Node.js** - Entorno de ejecución JavaScript del lado del servidor
- **MongoDB** - Base de datos NoSQL orientada a documentos
- **Express.js** - Framework web minimalista para Node.js
- **React** - Librería para construir interfaces de usuario
- **Docker** - Plataforma de contenedores

## ✨ Características

- ✅ **Diseño oscuro moderno** y responsive
- ✅ **Navegación intuitiva** con menú responsive
- ✅ **Tarjetas interactivas** para cada tecnología
- ✅ **Resumen de comandos** desplegable en cada tarjeta
- ✅ **Páginas detalladas** para cada tecnología con:
  - Definiciones y conceptos básicos
  - Funcionamiento interno
  - Arquitectura
  - Ejemplos prácticos completos
  - Comandos útiles explicados
  - Recursos y enlaces adicionales
- ✅ **Código bien comentado** y fácil de ampliar
- ✅ **Animaciones suaves** y efectos visuales
- ✅ **Optimizado para estudio** y consulta rápida

## 📁 Estructura del proyecto

```
Apuntes-2-DAW/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos globales (tema oscuro)
├── js/
│   └── main.js             # JavaScript funcionalidad
├── pages/                  # Páginas detalladas
│   ├── java.html
│   ├── spring-boot.html
│   ├── angular.html
│   ├── nodejs.html
│   ├── mongodb.html
│   ├── express.html
│   ├── react.html
│   └── docker.html
└── README.md               # Este archivo
```

## 🌐 Cómo usar la wiki

### Opción 1: Abrir directamente (recomendado para desarrollo)

1. Abre el archivo `index.html` directamente en tu navegador
2. Navega por las diferentes secciones

### Opción 2: Servidor local (recomendado)

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server -p 8000

# Acceder desde el navegador
http://localhost:8000
```

### Opción 3: Usando Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abrirá automáticamente en tu navegador

## 🎨 Personalización

### Cambiar colores del tema

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --bg-primary: #0d1117;        /* Fondo principal */
    --accent-primary: #58a6ff;    /* Color de acento */
    --text-primary: #e6edf3;      /* Color de texto */
    /* ... más variables */
}
```

### Añadir nueva tecnología

1. **Añadir tarjeta en index.html:**
```html
<div class="tech-card" data-tech="nombre">
    <div class="tech-icon">
        <i class="fas fa-icono"></i>
    </div>
    <h3 class="tech-title">Nombre</h3>
    <p class="tech-description">Descripción...</p>
    <!-- ... resto del código -->
</div>
```

2. **Crear página detallada** en `pages/nombre.html` usando las páginas existentes como plantilla

3. **Añadir color personalizado** en `styles.css` si lo deseas

## 📖 Contenido de cada página

Cada página de tecnología incluye:

1. **Introducción completa** - ¿Qué es y para qué sirve?
2. **Funcionamiento interno** - Cómo funciona por debajo
3. **Conceptos clave** - Términos y definiciones importantes
4. **Arquitectura** - Estructura y organización (cuando aplica)
5. **Ejemplos prácticos** - Código real, funcional y comentado
6. **Comandos esenciales** - Lista de comandos más utilizados con explicaciones
7. **Recursos adicionales** - Enlaces a documentación oficial y tutoriales

## 🔧 Tecnologías usadas en la wiki

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive y animaciones
- **JavaScript ES6** - Interactividad y funcionalidad
- **Font Awesome** - Iconos

## 📝 Notas importantes

- Esta wiki es una herramienta de **aprendizaje personal** diseñada para facilitar el estudio
- El contenido está pensado para ser **ampliado y modificado** según tus necesidades
- Puedes añadir tus propios apuntes, ejemplos, PDFs y recursos
- Todo el código está **bien comentado** para facilitar la comprensión

## 🎯 Próximas mejoras sugeridas

- [ ] Añadir búsqueda global por contenido
- [ ] Incluir sección de ejercicios prácticos
- [ ] Añadir modo claro/oscuro toggle
- [ ] Incluir enlaces a proyectos personales
- [ ] Añadir sección de cheatsheets descargables
- [ ] Integrar tabla de contenidos en páginas largas
- [ ] Añadir sistema de favoritos

## 📄 Licencia

Este proyecto es de uso personal educativo. Siéntete libre de modificarlo y adaptarlo a tus necesidades.

## 👨‍💻 Autor

Creado para el curso de 2º DAW - Desarrollo de Aplicaciones Web

---

**¡Feliz aprendizaje! 🚀**