# Clapton Barbershop 💈

Sitio web moderno, elegante y responsivo diseñado para **Clapton Barbershop**, una barbería profesional de primer nivel ubicada en **Villa María, Córdoba**. 

*   **Sitio Web Oficial:** [clapton.com.ar](https://clapton.com.ar/)
*   **Desarrollado por:** [salvaCastro](https://salvadorcastro.vercel.app/)

El proyecto cuenta con un diseño estético premium tipo *dark mode*, con acentos dorados y crema, efectos de *glassmorphism*, animaciones de entrada dinámicas y un carrusel interactivo de trabajos con animaciones basadas en scroll (`Scroll-driven animations`) de última generación.

---

## 🚀 Características Principales

*   **Tema Oscuro Premium (Dark Mode):** Paleta de colores minimalista y nocturna basada en tonos oscuros (`#0A0A0A`, `#111111`) combinados con textos en color crema (`#F5F0E8`).
*   **Acentos Dorados en Gradiente:** Botones, textos destacados y elementos interactivos que utilizan un degradado sofisticado (`#C9A84C` a `#E8C96A`).
*   **Efectos Premium (Glassmorphism & Shimmer):** Interfaces translúcidas con desenfoque de fondo (`backdrop-filter: blur(12px)`) y bordes dorados suaves. Las tarjetas de servicios cuentan con un efecto de brillo (*shimmer*) interactivo al pasar el cursor.
*   **Carrusel Basado en Scroll (Scroll-driven animations):** Galería interactiva y fluida que aprovecha las modernas APIs nativas de CSS (`@supports (animation-timeline: view())`) para escalar dinámicamente las imágenes de cortes a medida que entran y salen del foco del scroll horizontal.
*   **Lightbox Interactivo:** Visor de imágenes en pantalla completa para la galería, permitiendo navegar de forma cómoda mediante controles de flecha en el teclado, clicks o gestos, y cerrar con la tecla `Escape`.
*   **Integración de Reservas por WhatsApp:**
    *   Botón de llamada a la acción flotante (FAB) permanente con animación de pulso infinito.
    *   CTAs personalizados en cada perfil de barbero que abren un chat de WhatsApp con un texto preconfigurado solicitando un turno específico con ese profesional.
*   **Espacio Gentleman:** Integración de información sobre la tienda exclusiva de indumentaria masculina premium que opera físicamente dentro del local.
*   **Optimización SEO y Rendimiento:**
    *   Jerarquía semántica de títulos y estructuración HTML5.
    *   Metadatos SEO optimizados (descripción, palabras clave, canonical URLs).
    *   Open Graph y Twitter Cards completos para compartir el sitio de forma estética en redes sociales.
    *   Estructuración de datos con JSON-LD (Schema.org de tipo `BarberShop`) que incluye dirección, geolocalización precisa, número telefónico, horarios de atención detallados y enlaces a redes sociales para enriquecer la visualización en Google.
    *   Carga diferida (`lazyloading`) y priorización de imágenes críticas (`fetchPriority="high"` en la primera slide del carrusel) para un rendimiento web rápido.

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías de última generación para el desarrollo frontend:

*   **[React 19](https://react.dev/):** Biblioteca principal para la construcción de la interfaz de usuario modular e interactiva.
*   **[TypeScript](https://www.typescriptlang.org/):** Tipado estático estricto para mayor robustez, autocompletado y prevención de errores en desarrollo.
*   **[Vite 8](https://vite.dev/):** Herramienta de compilación ultrarrápida que optimiza los tiempos de inicio del servidor local y el empaquetado final.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** Framework de estilos optimizado que se integra mediante el plugin nativo `@tailwindcss/vite`. Todos los tokens del tema (colores personalizados, fuentes) se definen de manera moderna a través de la directiva `@theme` en el archivo CSS global.
*   **[Lucide React](https://lucide.dev/):** Set de iconos minimalistas vectoriales de carga ultra ligera.
*   **[Playwright](https://playwright.dev/):** Framework configurado como base de pruebas automatizadas E2E (de extremo a extremo).
*   **[ESLint 10](https://eslint.org/):** Herramienta de análisis estático configurada para mantener los estándares del código y buenas prácticas de React y TypeScript.

---

## 📁 Estructura del Proyecto

A continuación se detalla la organización de los archivos y componentes principales en el repositorio:

*   [index.html](./index.html): Plantilla HTML principal del sitio que carga las tipografías de Google Fonts (`Bebas Neue` e `Inter`), configura el favicon WebP, establece las etiquetas SEO básicas y el marcado JSON-LD estructurado de Google.
*   [vite.config.ts](./vite.config.ts): Configuración de Vite que integra los plugins oficiales de React y Tailwind CSS v4.
*   [eslint.config.js](./eslint.config.js): Archivo de configuración de reglas y directivas de calidad del código para JavaScript/TypeScript.
*   [package.json](./package.json): Script de control de dependencias del proyecto, scripts de desarrollo/compilación y metadatos básicos.
*   **`public/`**: Recursos estáticos servidos directamente por el servidor web:
    *   `logos/`: Variantes del logo de Clapton (`logoCircular.webp`, `logoHorizontal.webp`).
    *   `equipo/`: Fotos optimizadas de los miembros de la barbería.
    *   `cortes/`: Trabajos de barbería realizados para mostrar en el carrusel de la galería.
    *   `otros/`: Fotos de la ambientación del local.
    *   `flyer-de-servicios-con-precios.webp`: Lista de precios digital de respaldo.
    *   `robots.txt` y `sitemap.xml`: Archivos de configuración de indexación para buscadores.
*   **`src/`**: Carpeta raíz del código fuente:
    *   [main.tsx](./src/main.tsx): Punto de entrada que monta la aplicación en el DOM de la página.
    *   [App.tsx](./src/App.tsx): Componente principal que orquesta el layout general y las diferentes secciones separadas por divisores visuales dorados.
    *   [index.css](./src/index.css): Estilos globales, configuración de los tokens de diseño de Tailwind CSS v4, personalización de scrollbars, efectos shimmer, y definiciones clave de animaciones CSS (`fadeInUp`, `wa-pulse`, y animaciones controladas por scroll `@supports (animation-timeline: view())`).
*   **`src/components/`**: Módulos autocontenidos y componentes funcionales:
    *   [Navbar.tsx](./src/components/Navbar.tsx): Barra de navegación fija con efecto *glassmorphism* al hacer scroll superior a 60px, menús interactivos y adaptabilidad para dispositivos móviles con menú hamburguesa.
    *   [Hero.tsx](./src/components/Hero.tsx): Sección de bienvenida con fondo atmosférico, overlay degradado oscuro, textura de grano fino analógico, logo circular animado y botones de llamada a la acción primarios.
    *   [AboutUs.tsx](./src/components/AboutUs.tsx): Reseña histórica de la trayectoria de Clapton desde 2014, contador de estadísticas del local, presentación del espacio Gentleman de indumentaria y café de cortesía.
    *   [Gallery.tsx](./src/components/Gallery.tsx): Galería interactiva con carrusel horizontal con escalamiento dinámico de diapositivas y visor lightbox integrado para fotos en pantalla completa.
    *   [Services.tsx](./src/components/Services.tsx): Grilla descriptiva de servicios con iconos interactivos y la **Tarifa de Precios** digital actualizada.
    *   [Barbers.tsx](./src/components/Barbers.tsx): Presentación del equipo de barberos profesionales con sus descripciones de perfil, horarios individuales de atención y enlace directo a WhatsApp para agendar turnos con cada uno.
    *   [Info.tsx](./src/components/Info.tsx): Resumen de horarios de atención comercial general, dirección, enlaces directos de contacto rápido y un iframe interactivo de Google Maps estilizado en modo nocturno.
    *   [Footer.tsx](./src/components/Footer.tsx): Pie de página con créditos de la marca, derechos de autor con año dinámico y enlaces de redes sociales.
    *   [WhatsAppFab.tsx](./src/components/WhatsAppFab.tsx): Botón de WhatsApp flotante que aparece en scroll (cuando la página baja de los 300px) con una animación de pulso infinito.

---

## ⚡ Guía de Inicio Rápido

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local de desarrollo:

### 1. Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y el gestor de paquetes `npm` en tu sistema.

### 2. Instalación de Dependencias

Ejecuta el siguiente comando en la raíz del proyecto para descargar e instalar todas las dependencias requeridas:

```bash
npm install
```

### 3. Servidor de Desarrollo

Levanta el servidor local con recarga rápida (HMR - Hot Module Replacement) ejecutando:

```bash
npm run dev
```

El sitio estará disponible para visualizar en tu navegador web en la dirección local [http://localhost:5173](http://localhost:5173).

### 4. Compilación para Producción

Para compilar el proyecto optimizado, minificado y listo para ser desplegado en hosting de producción:

```bash
npm run build
```

Este comando validará los tipos de TypeScript (`tsc -b`) y generará los archivos estáticos finales listos dentro del directorio `/dist`.

### 5. Previsualización de la Build Local

Para levantar y previsualizar localmente el resultado exacto de la compilación de producción ejecutada por el paso anterior:

```bash
npm run preview
```

### 6. Ejecución del Linter

Para validar la sintaxis del código y asegurar que cumple con las reglas estandarizadas de ESLint:

```bash
npm run lint
```

---

## 📅 Tarifas de Servicios (Vigente a Junio 2026)

| Servicio | Precio | Descripción / Notas |
| :--- | :--- | :--- |
| **Corte de caballero & niño** | `$23.000` | Corte clásico o moderno con técnica y detalles profesionales. |
| **Corte & barba** | `$25.000` | Combo completo de diseño/perfilado de barba y corte de cabello. |
| **Corte cada 10 días o menos** | `$20.000` | Tarifa de fidelidad (Corte VIP) para mantenimiento continuo. |
| **Pelada y barba** | `$23.000` | Mantenimiento completo de afeitado de cabeza y barba diseñada. |
| **Solo barba o pelada** | `$15.000` | Perfilado detallado de barba o afeitado simple de cabeza. |
| **PRE-BODA** | *Consultar* | Servicio exclusivo de preparación y previa con amigos y bebidas. |

*Todos los servicios en el local incluyen café o gaseosa de cortesía.*

---

## 👥 Equipo y Personal

El equipo de Clapton está conformado por profesionales comprometidos con la identidad y el estilo de cada cliente:

### Barberos:
*   **Leo Merindol:** Fundador e impulsor de la barbería. Con más de 18 años de experiencia en el oficio, cuida cada detalle de la experiencia de cliente.
*   **Agus Sánchez:** Barbero con más de 6 años de trayectoria. Destaca por su precisión técnica y su capacidad para asesorar de forma personalizada.
*   **Juan Fernández:** Profesional con más de 4 años de experiencia en Clapton, caracterizado por su trato cercano y compromiso de calidad.
*   **Gena Rainero:** Con más de 3 años en el staff, destaca por su versatilidad, carisma y excelente disposición.
*   **Maxi Rubiolo:** El barbero más joven del equipo (2+ años en Clapton), especialista en cortes modernos, degradados rápidos y técnicas de *fades* a la vanguardia.

### Recepción:
*   **Mayra Burgos:** Primera línea de atención. Se encarga de la organización de turnos, bienvenida al cliente y soporte en la sección Gentleman de indumentaria.

---

## 📍 Contacto y Ubicación

*   **Ubicación:** Jujuy 1304, Villa María, Córdoba, Argentina.
*   **Horarios Comerciales:**
    *   **Lunes a Viernes:** 9:00 h a 20:00 h.
    *   **Sábados:** 10:00 h a 16:00 h.
*   **Instagram:** [@clapton.barbershop](https://instagram.com/clapton.barbershop)
*   **WhatsApp Comercial:** [+54 9 353 565-3313](https://wa.me/5493535653313)
