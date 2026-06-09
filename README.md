# Clapton Barbershop 💈

Sitio web moderno, elegante y responsivo diseñado para **Clapton Barbershop**, una barbería profesional de primer nivel ubicada en **Villa María, Córdoba**. 

El proyecto cuenta con un diseño estético premium tipo *dark mode*, con acentos dorados y crema, efectos de *glassmorphism*, animaciones sutiles y un carrusel dinámico de trabajos con animaciones basadas en scroll.

---

## 🛠️ Tecnologías y Herramientas

El proyecto está construido utilizando tecnologías modernas de desarrollo frontend:

*   **[React 19](https://react.dev/)**: Biblioteca para la construcción de interfaces de usuario interactivas.
*   **[Vite 8](https://vite.dev/)**: Herramienta de construcción frontend ultra rápida para desarrollo y producción.
*   **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS estructurado de última generación, utilizando el nuevo compilador `@tailwindcss/vite` e integración de temas optimizada mediante variables CSS en `@theme`.
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático y robustez en todo el código.
*   **[Playwright](https://playwright.dev/)**: Infraestructura para realizar pruebas de integración y E2E.

---

## 📁 Estructura del Proyecto

A continuación se detalla la organización de los archivos principales del proyecto:

*   [index.html](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/index.html): Plantilla HTML principal del sitio que carga las tipografías de Google Fonts (`Bebas Neue` e `Inter`).
*   [vite.config.ts](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/vite.config.ts): Configuración de Vite con plugins para React y Tailwind CSS v4.
*   [src/main.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/main.tsx): Punto de entrada de la aplicación.
*   [src/App.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/App.tsx): Componente principal que orquesta el diseño de la landing page y las secciones separadas por divisores dorados.
*   [src/index.css](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/index.css): Estilos globales, definición de tokens del tema personalizado (colores, fuentes), barra de desplazamiento personalizada, efectos de brillo (*shimmer*), animaciones de entrada (*fade-in-up*), y animaciones de scroll del carrusel (`@supports (animation-timeline: view())`).
*   **`src/components/`**: Componentes visuales y funcionales reutilizables:
    *   [Navbar.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Navbar.tsx): Barra de navegación fija con efecto *glassmorphism* y menú móvil responsivo.
    *   [Hero.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Hero.tsx): Sección de bienvenida con fondo atmosférico de la barbería, overlay degradado oscuro, textura de grano, logotipos de la marca y botones para reservar turnos o ver trabajos.
    *   [Gallery.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Gallery.tsx): Carrusel horizontal interactivo de cortes realizados y ambiente del local. Incluye también una tarjeta con la **Tarifa de Servicios** actualizada.
    *   [Services.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Services.tsx): Grilla de servicios ofrecidos (corte de cabello, arreglo de barba, combos, degradés, cejas y tratamientos) representados con íconos descriptivos y efectos interactivos.
    *   [Barbers.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Barbers.tsx): Presentación del equipo de barberos profesionales con sus biografías, roles, fotos individuales, horarios de atención y enlace a WhatsApp para agendar turnos con cada barbero en particular.
    *   [Info.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Info.tsx): Información de horarios de atención general, dirección (Jujuy 1304), enlaces directos de contacto, enlace a la cuenta oficial de Instagram e integración de un mapa interactivo personalizado estilo nocturno.
    *   [Footer.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/Footer.tsx): Pie de página con créditos, enlaces de navegación y derechos reservados.
    *   [WhatsAppFab.tsx](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/src/components/WhatsAppFab.tsx): Botón flotante interactivo con efecto de pulso para iniciar chat directo con la barbería en cualquier momento.

---

## ⚡ Guía de Inicio Rápido

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y npm.

### 2. Instalación de Dependencias

Ejecuta el siguiente comando en la raíz del proyecto para descargar e instalar todas las dependencias:

```bash
npm install
```

### 3. Servidor de Desarrollo

Levanta el servidor local con recarga rápida (HMR) mediante:

```bash
npm run dev
```

El sitio estará disponible en tu navegador web en la dirección [http://localhost:5173](http://localhost:5173).

### 4. Compilación para Producción

Para compilar el proyecto optimizado y listo para subir a producción:

```bash
npm run build
```

Este comando generará los archivos estáticos listos dentro del directorio `dist/`.

### 5. Previsualización Local de la Build

Para previsualizar la compilación de producción de forma local:

```bash
npm run preview
```

### 6. Ejecución del Linter

Para validar el código utilizando las reglas de ESLint configuradas en [eslint.config.js](file:///Users/salvacastro/Desktop/proyects/clapton-barberia/eslint.config.js):

```bash
npm run lint
```

---

## 🎨 Características de Diseño & Animaciones

*   **Tema Oscuro Premium**: Configurado a través de variables CSS en Tailwind CSS v4 para mantener una paleta homogénea basada en tonos de negro (#0A0A0A) y crema (#F5F0E8).
*   **Tonos Dorados en Gradiente**: Uso constante de un gradiente dorado sofisticado (`#C9A84C` a `#E8C96A`) para botones, textos destacados y elementos interactivos.
*   **Glassmorphism**: Fondo translúcido con desenfoque (`backdrop-filter: blur(12px)`) y bordes dorados suaves, que se utiliza en la barra de navegación, las tarjetas de servicios y tarifas.
*   **Animación de Entrada Suave**: Animación CSS personalizada `fadeInUp` aplicada a los textos y botones del Hero.
*   **Scroll-driven Scale en Carrusel**: Utiliza la API moderna de animaciones basadas en scroll (`animation-timeline: view(inline)`) en navegadores compatibles para escalar dinámicamente las diapositivas de la galería al centrarse.
*   **Botón de WhatsApp Vibrante**: El botón flotante utiliza una animación de pulso infinito para captar la atención del usuario sin interrumpir su navegación.
