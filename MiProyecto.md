# MiProyecto - StudyTube AI

## 📋 Índice
1. [Contexto del Proyecto](#contexto-del-proyecto)
2. [Descripción General](#descripción-general)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Archivos de Configuración](#archivos-de-configuración)
6. [Scripts y Comandos](#scripts-y-comandos)
7. [Componentes Principales](#componentes-principales)
8. [Stack Tecnológico Detallado](#stack-tecnológico-detallado)

---

## Contexto del Proyecto

### Nombre
**StudyTube AI** - Un asistente inteligente de aprendizaje basado en IA

### Propósito
StudyTube AI es una aplicación web moderna que revoluciona la forma en que los estudiantes aprenden nuevos temas. La aplicación utiliza inteligencia artificial para generar automáticamente playlists estructuradas de YouTube basadas en lo que el usuario quiere aprender.

### Objetivo Principal
Permitir que cualquier persona pueda escribir un tema de interés y recibir una ruta de aprendizaje completa y bien organizada con los mejores videos de YouTube, ordenados de forma lógica (introducción → fundamentos → práctica → avanzado).

### Usuario Objetivo
- Estudiantes que desean aprender nuevos temas
- Personas interesadas en educación autodidacta
- Profesionales que quieren expandir sus conocimientos
- Cualquier persona que desee acceder a contenido educativo de forma estructurada

---

## Descripción General

### ¿Cómo Funciona?

StudyTube AI simplifica el proceso de aprendizaje en tres pasos:

1. **Búsqueda Inteligente**: El usuario escribe de forma natural qué tema desea aprender (ej: "Aprender React desde cero")
2. **Generación de Playlists**: El sistema, potenciado por IA, analiza el tema y crea una playlist estructurada automáticamente
3. **Ruta de Aprendizaje**: Los videos se organizan en un orden lógico y progresivo para garantizar un aprendizaje efectivo

### Características Principales

#### 1. **Búsqueda Inteligente**
- El usuario puede escribir en lenguaje natural qué desea aprender
- La IA interpreta la intención del usuario y busca los mejores recursos
- Búsqueda rápida y eficiente

#### 2. **Playlists Estructuradas**
- Los videos se organizan automáticamente en secciones: introducción, fundamentos, práctica, proyectos, etc.
- Cada video tiene su lugar en la curva de aprendizaje
- Estructura coherente que facilita la comprensión progresiva

#### 3. **Rutas de Aprendizaje**
- Cada playlist sigue un orden lógico y pedagógico
- El usuario puede seguir la ruta desde el principio hasta el final
- Sistema progresivo que construye el conocimiento de manera efectiva

#### 4. **Interfaz Moderna y Responsiva**
- Diseño limpio y atractivo
- Funciona en dispositivos de escritorio, tablet y móvil
- Experiencia de usuario fluida con animaciones suaves

---

## Tecnologías Utilizadas

### Frontend Framework

#### **React 18.3.1**
- Biblioteca principal para construir la interfaz de usuario
- Basado en componentes reutilizables
- Virtual DOM para renderización eficiente
- Hooks para manejo de estado y efectos
- Declarativo y fácil de mantener

```
Versión: ^18.3.1
Ubicación en package.json: dependencies
```

#### **TypeScript 5.8**
- Lenguaje de programación tipado basado en JavaScript
- Proporciona seguridad de tipos en tiempo de desarrollo
- Compilación a JavaScript estándar
- Mejor autocompletado en editores de código
- Detecta errores antes de la ejecución

```
Versión: ^5.8.3
Ubicación en package.json: devDependencies
```

### Build Tool & Bundler

#### **Vite 5.4**
- Herramienta de construcción ultrarrápida
- Servidor de desarrollo con Hot Module Replacement (HMR)
- Bundling optimizado con Rollup
- Soporte nativo para ES modules
- Tiempo de compilación extremadamente rápido

```
Versión: ^5.4.19
Ubicación en package.json: devDependencies
Configuración: vite.config.ts
```

**Características principales de Vite en este proyecto:**
- Servidor de desarrollo en puerto 8080
- HMR habilitado sin overlay
- Alias de ruta `@` que apunta a `./src`
- Plugin de React SWC para compilación rápida
- Component Tagger en modo desarrollo

### Enrutamiento

#### **React Router DOM 6.30**
- Enrutador oficial de React
- Navegación del lado del cliente sin recargas de página
- Soporte para rutas anidadas y dinámicas
- Historial de navegación
- Parámetros y queries en URL

```
Versión: ^6.30.1
Ubicación en package.json: dependencies
```

**Rutas en la aplicación:**
- `/` - Página de inicio (Index)
- `/search` - Página de búsqueda
- `*` - Página no encontrada (NotFound)

### Styling & CSS

#### **Tailwind CSS 3.4**
- Framework de CSS utilities-first
- Clases predefinidas para estilos rápidos
- Temas oscuros y claros
- Sistema de colores personalizado
- Responsive design con breakpoints

```
Versión: ^3.4.17
Ubicación en package.json: devDependencies
Configuración: tailwind.config.ts
```

**Características personalizadas:**
- Tema oscuro habilitado con clase `dark`
- Colores CSS variables para temas dinámicos
- Animaciones personalizadas (accordion-up, accordion-down)
- Paleta de colores extendida con sidebar y otros estados
- Plugins: tailwindcss-animate

#### **PostCSS 8.5**
- Herramienta de procesamiento de CSS
- Autoprefixer para compatibilidad en navegadores
- Procesa variables CSS
- Plugins para transformar CSS

```
Versión: ^8.5.6
Ubicación en package.json: devDependencies
Configuración: postcss.config.js
```

### Componentes UI

#### **shadcn/ui**
- Librería de componentes React accesibles y personalizables
- Basada en Radix UI y Tailwind CSS
- Componentes copiados en el proyecto (no npm package)
- Altamente personalizables

**Componentes incluidos en el proyecto:**
- Accordion, Alert Dialog, Avatar, Badge
- Breadcrumb, Button, Calendar, Card
- Carousel, Chart, Checkbox, Collapsible
- Command, Context Menu, Dialog, Drawer
- Dropdown Menu, Form, Hover Card, Input
- Label, Menubar, Navigation Menu, Popover
- Progress, Radio Group, Scroll Area, Select
- Separator, Sheet, Sidebar, Skeleton
- Slider, Sonner (Toasts), Switch, Table
- Tabs, Textarea, Toast, Tooltip
- Toggle, Toggle Group, Resizable

#### **Radix UI**
- Librería de componentes sin estilos (unstyled) de bajo nivel
- Proporciona accesibilidad (WCAG) nativa
- Control total sobre estilos y comportamiento
- Base para shadcn/ui

**Componentes utilizado:**
- Más de 30 primitivos de UI accesibles

### Animaciones

#### **Framer Motion 12.34**
- Librería de animaciones para React
- Animaciones suaves y fluidas
- Transiciones declarativas
- Control de variantes y secuencias
- Performance optimizado

```
Versión: ^12.34.3
Ubicación en package.json: dependencies
```

**Uso en el proyecto:**
- Animaciones del hero section (fade-in, scale)
- Animaciones de características (stagger effect)
- Transiciones suaves entre elementos

### Iconografía

#### **Lucide React 0.462**
- Librería de iconos moderna y limpia
- Más de 460 iconos disponibles
- Iconos vectoriales escalables
- Integración perfecta con React
- Personalizables en color y tamaño

```
Versión: ^0.462.0
Ubicación en package.json: dependencies
```

**Iconos utilizados:**
- ArrowRight, BookOpen, Brain, ListVideo, Sparkles
- Search, Menu, X, y muchos más disponibles

### Gestión de Estado y Data Fetching

#### **TanStack Query (React Query) 5.83**
- Librería para fetching, caching y sincronización de datos
- Caché automático de requests
- Refreshing automático de datos
- Manejo de loading y error states
- Altamente eficiente y performante

```
Versión: ^5.83.0
Ubicación en package.json: dependencies
```

### Validación de Formularios

#### **React Hook Form 7.61**
- Librería ligera para manejo de formularios
- Validación en tiempo real
- Integración con librerías de validación
- Rendimiento optimizado
- API simple y declarativa

```
Versión: ^7.61.1
Ubicación en package.json: dependencies
```

#### **Zod 3.25**
- Librería de validación y esquemas de TypeScript
- Schema-first validation
- Tipado automático de datos
- Mensajes de error personalizables
- Integración con React Hook Form

```
Versión: ^3.25.76
Ubicación en package.json: dependencies
```

#### **@hookform/resolvers 3.10**
- Adaptadores para integrar librerías de validación con React Hook Form
- Soporte para Zod, Yup, Joi, etc.
- Validación asincrónica

```
Versión: ^3.10.0
Ubicación en package.json: dependencies
```

### Notificaciones

#### **Sonner 1.7**
- Librería de toast notifications moderna
- API simple y tipo-segura
- Animaciones suaves
- Temas claros y oscuros
- Posicionables y personalizables

```
Versión: ^1.7.4
Ubicación en package.json: dependencies
```

### Utilidades

#### **clsx 2.1** y **tailwind-merge 2.6**
- Fusión inteligente de clases de CSS
- Elimina conflictos entre clases
- Manejo de condicionales en clases
- Integración perfecta con Tailwind CSS

```
clsx: ^2.1.1
tailwind-merge: ^2.6.0
Ubicación: dependencies
```

#### **class-variance-authority 0.7**
- Librería para crear variantes de componentes
- Type-safe component variants
- Alternativa a librerías como styled-components
- Integración con Tailwind CSS

```
Versión: ^0.7.1
Ubicación: dependencies
```

#### **date-fns 3.6**
- Librería de utilidades para manejo de fechas
- Alternativa moderna a Moment.js
- Modular y lightweight
- Internacionalización incluida

```
Versión: ^3.6.0
Ubicación: dependencies
```

### Temas y Apariencia

#### **next-themes 0.3**
- Gestor de temas para aplicaciones React
- Soporte para tema oscuro/claro
- Persistencia en localStorage
- Sincronización con preferencias del sistema

```
Versión: ^0.3.0
Ubicación: dependencies
```

### Tabla de Datos

#### **Recharts 2.15**
- Librería de gráficos basada en componentes React
- Gráficos interactivos y responsivos
- Composición flexible
- Animaciones automáticas

```
Versión: ^2.15.4
Ubicación: dependencies
```

### Componentes Especializados

#### **cmdk 1.1**
- Componente de command menu (estilo Cmd/Ctrl+K)
- Búsqueda rápida
- Navegación por teclado
- Integración con React

```
Versión: ^1.1.1
Ubicación: dependencies
```

#### **embla-carousel-react 8.6**
- Librería de carruseles/sliders
- Sin dependencias de jQuery
- Responsive y accesible
- Plugins para funcionalidades avanzadas

```
Versión: ^8.6.0
Ubicación: dependencies
```

#### **react-resizable-panels 2.1**
- Componente para paneles redimensionables
- Drag-and-drop para cambiar tamaños
- Persistencia de tamaños
- Responsive

```
Versión: ^2.1.9
Ubicación: dependencies
```

#### **input-otp 1.4** y **react-day-picker 8.10**
- Input OTP: componente para códigos de una sola vez
- Day Picker: selector de fechas

```
Versión OTP: ^1.4.2
Versión Day Picker: ^8.10.1
Ubicación: dependencies
```

#### **vaul 0.9**
- Componente de drawer/sidebar deslizable
- Accesible y animado
- Soporte para swipe en mobile

```
Versión: ^0.9.9
Ubicación: dependencies
```

### Testing

#### **Vitest 3.2**
- Framework de testing unitario
- Alternativa rápida a Jest
- API compatible con Vitest
- Integrado con Vite

```
Versión: ^3.2.4
Ubicación: devDependencies
Configuración: vitest.config.ts
```

#### **@testing-library/react 16** y **@testing-library/jest-dom 6.6**
- Herramientas para testing de componentes React
- Enfoque en testing por comportamiento usuario
- Queries útiles para elementos del DOM

```
React: ^16.0.0
Jest DOM: ^6.6.0
Ubicación: devDependencies
```

#### **jsdom 20**
- Implementación de JavaScript de WHATWG DOM
- Entorno de testing simulado

```
Versión: ^20.0.3
Ubicación: devDependencies
```

### Linting y Análisis de Código

#### **ESLint 9.32**
- Herramienta de linting para JavaScript
- Detecta errores y patrones problemáticos
- Reglas configurables

```
Versión: ^9.32.0
Ubicación: devDependencies
Configuración: eslint.config.js
```

#### **typescript-eslint 8.38**
- Plugins de ESLint para TypeScript
- Reglas específicas de TypeScript

```
Versión: ^8.38.0
Ubicación: devDependencies
```

#### **eslint-plugin-react-hooks 5.2** y **eslint-plugin-react-refresh 0.4**
- Plugins para ESLint
- React Hooks: valida reglas de hooks
- React Refresh: valida componentes para hot reload

```
React Hooks: ^5.2.0
React Refresh: ^0.4.20
Ubicación: devDependencies
```

### Plugins de Compilación

#### **@vitejs/plugin-react-swc 3.11**
- Plugin de Vite para React usando SWC
- Compilación ultrarrápida de JSX
- Reemplazo de Babel con mejor performance

```
Versión: ^3.11.0
Ubicación: devDependencies
```

---

## Estructura del Proyecto

```
StudyTube AI/
├── public/                        # Archivos estáticos públicos
│   └── robots.txt                # SEO - indicaciones para bots
│
├── src/                          # Código fuente principal
│   ├── assets/                   # Imágenes y media
│   │   └── hero-illustration.png # Imagen del hero section
│   │
│   ├── components/               # Componentes React reutilizables
│   │   ├── Navbar.tsx           # Barra de navegación principal
│   │   ├── NavLink.tsx          # Link de navegación
│   │   └── ui/                  # Componentes shadcn/ui
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── button.tsx       # Botón personalizado
│   │       ├── card.tsx         # Tarjeta
│   │       ├── input.tsx        # Input de formulario
│   │       ├── toaster.tsx      # Sistema de notificaciones
│   │       └── [30+ componentes más]
│   │
│   ├── hooks/                    # Hooks personalizados
│   │   ├── use-mobile.tsx       # Detectar dispositivo móvil
│   │   └── use-toast.ts         # Hook para notificaciones
│   │
│   ├── lib/                      # Utilidades y funciones
│   │   └── utils.ts             # Funciones de utilidad (cn)
│   │
│   ├── pages/                    # Componentes de página (rutas)
│   │   ├── Index.tsx            # Página de inicio
│   │   ├── Search.tsx           # Página de búsqueda
│   │   └── NotFound.tsx         # Página 404
│   │
│   ├── test/                     # Tests y configuración
│   │   ├── setup.ts             # Configuración de Vitest
│   │   └── example.test.ts      # Ejemplo de test
│   │
│   ├── App.tsx                   # Componente raíz
│   ├── App.css                   # Estilos específicos de App
│   ├── main.tsx                  # Punto de entrada
│   ├── index.css                 # Estilos globales
│   └── vite-env.d.ts            # Tipos de Vite
│
├── index.html                    # HTML principal
├── package.json                  # Dependencias y scripts
├── package-lock.json            # Lock de dependencias (NPM)
├── bun.lockb                     # Lock de dependencias (Bun)
│
├── tsconfig.json                 # Configuración TypeScript general
├── tsconfig.app.json            # Configuración TypeScript app
├── tsconfig.node.json           # Configuración TypeScript Node
│
├── vite.config.ts               # Configuración de Vite
├── vitest.config.ts             # Configuración de Vitest
├── tailwind.config.ts           # Configuración de Tailwind CSS
├── postcss.config.js            # Configuración de PostCSS
│
├── eslint.config.js             # Configuración de ESLint
├── components.json              # Configuración de shadcn/ui
│
├── README.md                     # Documentación por defecto
├── MEMORIA.md                    # Documentación del TFG
└── MiProyecto.md               # Este archivo
```

---

## Archivos de Configuración

### 1. **vite.config.ts** - Configuración de Vite

```typescript
Ubicación: /vite.config.ts
```

**Propósito:** Configura el bundler y servidor de desarrollo Vite

**Contenido principal:**
- **Servidor de desarrollo:** Puerto 8080, host `::`
- **HMR (Hot Module Replacement):** Habilitado sin overlay
- **Plugins:** React SWC (compilación), Component Tagger (desarrollo)
- **Alias:** `@` apunta a `./src`

**Capacidades:**
- Compilación ultrarrápida
- Recarga en caliente sin recargar la página
- Optimización de bundle para producción

---

### 2. **tsconfig.json** - Configuración de TypeScript (General)

```typescript
Ubicación: /tsconfig.json
```

**Propósito:** Configuración central de TypeScript

**Configuraciones principales:**
- **baseUrl:** `.` - Ruta base para resolución de módulos
- **paths:** Alias `@/*` → `./src/*`
- **noImplicitAny:** `false` - Permite tipos implícitos any
- **skipLibCheck:** `true` - Omite verificación de tipos en librerías
- **strictNullChecks:** `false` - Menos restrictivo con null/undefined

---

### 3. **tsconfig.app.json** - Configuración TypeScript (App)

```typescript
Ubicación: /tsconfig.app.json
```

**Propósito:** Configuración específica para el código de la aplicación

**Configuraciones principales:**
- **target:** `ES2020` - Versión de JavaScript objetivo
- **lib:** `["ES2020", "DOM", "DOM.Iterable"]` - Librerías incluidas
- **jsx:** `"react-jsx"` - Soporte para JSX de React 17+
- **moduleResolution:** `"bundler"` - Resolución de módulos moderna
- **strict:** `false` - Menos restrictivo (permite desarrollo más rápido)
- **baseUrl y paths:** Define alias de rutas

---

### 4. **tsconfig.node.json** - Configuración TypeScript (Node)

```typescript
Ubicación: /tsconfig.node.json
```

**Propósito:** Configuración para archivos de Node (vite.config.ts, etc.)

**Incluye:** Solo `vite.config.ts`

---

### 5. **vite.config.ts** - Configuración Detallada

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",                  // Escucha en todas las interfaces
    port: 8080,                  // Puerto de desarrollo
    hmr: {
      overlay: false,            // Sin overlay de errores
    },
  },
  plugins: [
    react(),                      // Plugin React con SWC
    mode === "development" && componentTagger()  // Tagger solo en dev
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Alias para imports
    },
  },
}));
```

---

### 6. **vitest.config.ts** - Configuración de Vitest

```typescript
Ubicación: /vitest.config.ts
```

**Propósito:** Configuración del framework de testing

**Configuraciones principales:**
- **environment:** `"jsdom"` - Emula el navegador para tests
- **globals:** `true` - Funciones globales (describe, it, etc.)
- **setupFiles:** `["./src/test/setup.ts"]` - Archivo de setup previo
- **include:** `["src/**/*.{test,spec}.{ts,tsx}"]` - Archivos de test

---

### 7. **tailwind.config.ts** - Configuración de Tailwind CSS

```typescript
Ubicación: /tailwind.config.ts
```

**Propósito:** Personalización de Tailwind CSS

**Configuraciones principales:**

#### Dark Mode
```typescript
darkMode: ["class"]  // Tema oscuro basado en clase .dark
```

#### Content
```typescript
content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}"
]
```
Define dónde buscar clases Tailwind

#### Colores Personalizados
- **CSS Variables:** Todos los colores usan variables CSS
- **Palette extendida:** Primary, secondary, destructive, muted, accent, popover, card, sidebar
- **Estados:** DEFAULT y foreground para cada color

#### Extensiones
- **Animaciones:** accordion-down, accordion-up
- **Border radius:** lg, md, sm (basado en variable --radius)

#### Plugins
```typescript
plugins: [require("tailwindcss-animate")]
```
Proporciona animaciones Tailwind

---

### 8. **postcss.config.js** - Configuración de PostCSS

```javascript
Ubicación: /postcss.config.js
```

**Propósito:** Procesamiento de CSS

**Plugins típicos:**
- **Tailwind CSS:** Procesa clases Tailwind
- **Autoprefixer:** Añade prefijos de navegadores (-webkit-, etc.)

---

### 9. **eslint.config.js** - Configuración de ESLint

```javascript
Ubicación: /eslint.config.js
```

**Propósito:** Linting y análisis de código

**Configuraciones principales:**
- **Extends:** Recommended configs de JS y TypeScript
- **Files:** `["**/*.{ts,tsx}"]`
- **Plugins:** react-hooks, react-refresh
- **Rules personalizadas:**
  - React Hooks: Valida reglas de hooks
  - React Refresh: Valida componentes para hot reload
  - TypeScript: Básicas recomendadas

**Reglas clave:**
```javascript
"no-unused-vars": "off"              // Permite variables no usadas
"react-refresh/only-export-components": ["warn", {...}]
```

---

### 10. **components.json** - Configuración de shadcn/ui

```json
Ubicación: /components.json
```

**Propósito:** Configuración de la CLI de shadcn/ui

**Contenido:**
```json
{
  "style": "default",              // Estilo de componentes
  "rsc": false,                     // Sin React Server Components
  "tsx": true,                      // Usar TypeScript
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",           // Color base
    "cssVariables": true,           // Usar variables CSS
    "prefix": ""                    // Sin prefijo de clases
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

### 11. **package.json** - Definición del Proyecto

```json
Ubicación: /package.json
```

**Propósito:** Metadatos del proyecto y gestión de dependencias

**Información del proyecto:**
```json
{
  "name": "vite_react_shadcn_ts",
  "version": "0.0.0",
  "type": "module",                // ES modules
  "private": true
}
```

---

## Scripts y Comandos

Todos los comandos deben ejecutarse desde la raíz del proyecto.

### 1. **npm run dev** - Servidor de Desarrollo
```bash
npm run dev
```

**Propósito:** Inicia el servidor de desarrollo local

**Características:**
- Servidor en `http://localhost:8080`
- Hot Module Replacement (HMR) habilitado
- Recompilación automática al detectar cambios
- Acceso desde otros dispositivos en la red

**Cuando usarlo:**
- Durante el desarrollo
- Para pruebas locales
- Para depuración
- Para ver cambios en tiempo real

---

### 2. **npm run build** - Compilación para Producción
```bash
npm run build
```

**Propósito:** Compila la aplicación para despliegue en producción

**Lo que hace:**
- Transpila TypeScript a JavaScript
- Empaqu eta todos los módulos
- Minifica el contenido
- Optimiza el tamaño del bundle
- Genera en la carpeta `dist/`

**Salida:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [otros assets]
```

**Cuando usarlo:**
- Antes de despliegue
- Para crear versión producción
- Para medir tamaño final del bundle
- Para testear la versión compilada

---

### 3. **npm run build:dev** - Compilación en Modo Desarrollo
```bash
npm run build:dev
```

**Propósito:** Compila con variables de desarrollo

**Diferencias con build normal:**
- Mapeos de fuente (sourcemaps) incluidos
- Sin agresiva minificación
- Útil para debugging en producción

---

### 4. **npm run lint** - Análisis de Código
```bash
npm run lint
```

**Propósito:** Ejecuta ESLint en todo el código

**Analiza:**
- Archivos `.ts` y `.tsx`
- Errores de sintaxis
- Convenciones de código
- Reglas de React Hooks
- Problemas de TypeScript

**Salida:**
```
Muestra errores y warnings encontrados
```

**Cuando usarlo:**
- Antes de hacer commit
- Para asegurar calidad de código
- Para encontrar potenciales bugs
- Como parte del pipeline CI/CD

---

### 5. **npm run preview** - Vista Previa de Producción
```bash
npm run preview
```

**Propósito:** Simula localmente cómo se vería en producción

**Características:**
- Sirve la carpeta `dist/` compilada
- Sin HMR (igual que producción)
- Útil para verificar antes de desplegar

**Cuando usarlo:**
- Después de `npm run build`
- Para verificar la compilación
- Para testear en ambiente similar a producción

---

### 6. **npm test** - Ejecutar Tests Una Vez
```bash
npm test
```

**Propósito:** Ejecuta todos los tests y cierra

**Lo que hace:**
- Busca archivos `*.test.ts` y `*.test.tsx`
- Ejecuta Vitest con JSdom environment
- Genera reporte de cobertura
- Cierra después de terminar

---

### 7. **npm run test:watch** - Tests en Modo Watch
```bash
npm run test:watch
```

**Propósito:** Ejecuta tests en modo observación continua

**Características:**
- Reejecutar tests al detectar cambios
- Modo interactivo
- Útil durante desarrollo

**Cuando usarlo:**
- Desarrollo de features con tests
- TDD (Test Driven Development)
- Debugging de tests

---

### 8. **npm install** o **npm i** - Instalar Dependencias
```bash
npm install
```

**Propósito:** Instala todas las dependencias del proyecto

**Lo que hace:**
- Lee `package.json`
- Descarga dependencias
- Crea carpeta `node_modules/`
- Actualiza `package-lock.json`

**Cuando usarlo:**
- Primera vez que clonas el proyecto
- Cuando se añaden nuevas dependencias
- Si eliminas `node_modules/`

---

## Componentes Principales

### 1. **Página Index.tsx** - Inicio
```
Ubicación: src/pages/Index.tsx
Propósito: Landing page principal
```

**Estructura:**
- Header con Navbar
- Hero section con imagen y CTA
- Sección de features (3 características principales)
- Animaciones con Framer Motion
- Responsive design

**Características mostradas:**
1. Búsqueda inteligente (icono Brain)
2. Playlists estructuradas (icono ListVideo)
3. Rutas de aprendizaje (icono BookOpen)

**Elementos interactivos:**
- Botón "Empezar ahora" → redirige a `/search`
- Botón "Ver demo"
- Animaciones on-scroll

---

### 2. **Página Search.tsx** - Búsqueda
```
Ubicación: src/pages/Search.tsx
Propósito: Página principal de búsqueda
```

**Estructura:**
- Header con Navbar
- Título y descripción
- Input para búsqueda
- Botón para ejecutar búsqueda

**Funcionalidad:**
- El usuario escribe el tema a aprender
- Sistema generará playlists basadas en la búsqueda
- Placeholder: "Ej: Aprender React desde cero..."

---

### 3. **Navbar.tsx** - Barra de Navegación
```
Ubicación: src/components/Navbar.tsx
Propósito: Navegación principal de la aplicación
```

**Elementos:**
- Logo de StudyTube AI
- Links de navegación (Inicio, Buscar)
- Menú mobile responsivo (hamburger)
- Sticky al top con backdrop blur

**Características:**
- Indicador visual del link activo
- Responsive (desktop y mobile)
- Estilo moderno con gradientes

---

### 4. **App.tsx** - Componente Raíz
```
Ubicación: src/App.tsx
Propósito: Componente principal de la aplicación
```

**Responsabilidades:**
- Proveedor de TanStack Query (caching de datos)
- Proveedor de Tooltips
- Sistema de notificaciones (Toaster + Sonner)
- Enrutador de React Router
- Definición de rutas

**Rutas:**
- `/` → Index
- `/search` → Search
- `*` → NotFound

---

### 5. **Componentes UI (shadcn)**

La carpeta `src/components/ui/` contiene +30 componentes shadcn/ui:

**Componentes de formulario:**
- `input.tsx` - Campo de entrada de texto
- `form.tsx` - Sistema de formularios
- `checkbox.tsx`, `radio-group.tsx` - Selectores
- `select.tsx` - Dropdown selector
- `textarea.tsx` - Área de texto multilínea

**Componentes de layout:**
- `card.tsx` - Tarjeta/contenedor
- `sidebar.tsx` - Barra lateral
- `tabs.tsx` - Sistema de tabs
- `accordion.tsx` - Acordeón expandible
- `separator.tsx` - Divisor

**Componentes de navegación:**
- `button.tsx` - Botón
- `breadcrumb.tsx` - Migas de pan
- `navigation-menu.tsx` - Menú de navegación
- `menubar.tsx` - Barra de menú

**Componentes de retroalimentación:**
- `alert.tsx` - Alerta
- `alert-dialog.tsx` - Diálogo de alerta
- `toast.tsx` y `toaster.tsx` - Notificaciones
- `sonner.tsx` - Alternativa de notificaciones
- `progress.tsx` - Barra de progreso

**Componentes de visualización:**
- `table.tsx` - Tabla de datos
- `chart.tsx` - Gráficos (Recharts)
- `carousel.tsx` - Carrusel de imágenes
- `avatar.tsx` - Avatar de usuario

**Componentes especializados:**
- `command.tsx` - Command menu (Cmd+K)
- `popover.tsx` - Popover flotante
- `hover-card.tsx` - Tarjeta al pasar
- `dialog.tsx` y `drawer.tsx` - Modales
- `tooltip.tsx` - Tooltips
- `resizable.tsx` - Paneles redimensionables
- `slider.tsx` - Slider/rango
- `toggle.tsx` - Botón toggle
- `scroll-area.tsx` - Área scrolleable personalizada

---

## Stack Tecnológico Detallado

### Resumido
```
Frontend:      React 18 + TypeScript
Build:         Vite 5
Styling:       Tailwind CSS 3 + PostCSS
UI:            shadcn/ui + Radix UI
Routing:       React Router 6
State:         TanStack Query 5
Animaciones:   Framer Motion 12
Forms:         React Hook Form 7 + Zod 3
Testing:       Vitest 3 + Testing Library
Linting:       ESLint 9 + TypeScript ESLint 8
Temas:         next-themes 0.3
Icons:         Lucide React 0.462
```

### Por Categoría

#### **Core Framework**
- React 18.3.1 - Biblioteca UI
- React DOM 18.3.1 - Rendering del DOM
- React Router DOM 6.30.1 - Enrutamiento SPA

#### **Type Safety**
- TypeScript 5.8.3 - Lenguaje tipado
- @types/react 18.3.23 - Tipos de React
- @types/react-dom 18.3.7 - Tipos de React DOM
- @types/node 22.16.5 - Tipos de Node

#### **Build & Development**
- Vite 5.4.19 - Bundler
- @vitejs/plugin-react-swc 3.11.0 - Plugin React con SWC
- lovable-tagger 1.1.13 - Component tagger

#### **Styling & CSS**
- Tailwind CSS 3.4.17 - Framework CSS
- PostCSS 8.5.6 - Procesador CSS
- Autoprefixer 10.4.21 - Prefijos CSS
- tailwindcss-animate 1.0.7 - Animaciones Tailwind
- tailwind-merge 2.6.0 - Merge de clases
- @tailwindcss/typography 0.5.16 - Plugin tipografía
- clsx 2.1.1 - Merge de classnames
- class-variance-authority 0.7.1 - Variantes de componentes

#### **UI Components & Primitives**
- Radix UI (30+ componentes) - Componentes accesibles
- shadcn/ui - Componentes compilados

#### **Rendering**
- Framer Motion 12.34.3 - Animaciones
- Recharts 2.15.4 - Gráficos
- embla-carousel-react 8.6.0 - Carruseles
- react-resizable-panels 2.1.9 - Paneles redimensionables
- react-day-picker 8.10.1 - Selector de fechas
- vaul 0.9.9 - Drawer deslizable

#### **Forms & Validation**
- React Hook Form 7.61.1 - Gestión de formularios
- Zod 3.25.76 - Validación de esquemas
- @hookform/resolvers 3.10.0 - Resolvers para HF

#### **Data & State**
- TanStack React Query 5.83.0 - Caching y fetching
- next-themes 0.3.0 - Gestión de temas

#### **Notifications**
- Sonner 1.7.4 - Toast notifications

#### **Icons**
- Lucide React 0.462.0 - Librería de iconos

#### **Utilities**
- date-fns 3.6.0 - Utilidades de fechas
- input-otp 1.4.2 - Input OTP
- cmdk 1.1.1 - Command menu

#### **Testing**
- Vitest 3.2.4 - Framework testing
- @testing-library/react 16.0.0 - Testing utilities
- @testing-library/jest-dom 6.6.0 - Matchers Jest
- jsdom 20.0.3 - DOM para tests

#### **Linting**
- ESLint 9.32.0 - Linter
- typescript-eslint 8.38.0 - Soporte TypeScript
- eslint-plugin-react-hooks 5.2.0 - Rules de hooks
- eslint-plugin-react-refresh 0.4.20 - Rules de refresh
- @eslint/js 9.32.0 - Config base ESLint
- globals 15.15.0 - Globals para ESLint

---

## Conclusión

StudyTube AI es una aplicación moderna construida con las mejores prácticas y tecnologías del 2026. El stack tecnológico está cuidadosamente elegido para proporcionar:

✅ **Performance:** Vite + React + TailwindCSS garantizan velocidad
✅ **Developer Experience:** TypeScript + ESLint + Vitest
✅ **Accesibilidad:** Radix UI garantiza WCAG compliance
✅ **Escalabilidad:** Arquitectura modular y componentes reutilizables
✅ **Mantenibilidad:** Código bien organizado con clara separación de responsabilidades

---

**Última actualización:** 3 de Marzo de 2026
**ProjectName:** StudyTube AI
**Version:** 0.0.0
