# SIGEM - Login Micro-App

Aplicación de autenticación standalone para el Sistema de Gestión Municipal (SIGEM).

## Descripción

Esta es la puerta de entrada obligatoria para todos los micro-apps de SIGEM. Utiliza Firebase Authentication para gestionar el acceso de usuarios mediante email y contraseña. Una vez autenticado, el usuario es redirigido automáticamente al Shell principal de SIGEM.

## Características

- 🔐 Autenticación con Firebase (Email/Password)
- 🌐 Sesión persistente entre diferentes repositorios de GitHub Pages
- 🇪🇸 Interfaz completamente en español
- 📱 Diseño responsive (mobile-first)
- 🎨 Diseño institucional minimalista
- ⚡ Redirección automática si el usuario ya está autenticado
- ✅ Mensajes de error claros en español

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Cuenta de Firebase (proyecto compartido entre todos los micro-apps SIGEM)

## Configuración

### 1. Configuración de Firebase

Antes de desplegar, debes configurar las credenciales de Firebase:

1. Ve al archivo `src/config/firebase.ts`
2. Reemplaza los valores placeholder con tus credenciales reales de Firebase:

```typescript
const firebaseConfig = {
  apiKey: "TU_API_KEY",                    // ← Reemplazar
  authDomain: "TU_PROJECT_ID.firebaseapp.com", // ← Reemplazar
  projectId: "TU_PROJECT_ID",              // ← Reemplazar
  storageBucket: "TU_PROJECT_ID.appspot.com", // ← Reemplazar
  messagingSenderId: "TU_MESSAGING_SENDER_ID", // ← Reemplazar
  appId: "TU_APP_ID"                       // ← Reemplazar
};
```

**¿Dónde obtener estas credenciales?**

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto (o crea uno nuevo)
3. Ve a "Configuración del proyecto" (ícono de engranaje)
4. En la sección "Tus apps", selecciona la app web o crea una nueva
5. Copia las credenciales y pégalas en el archivo

### 2. Configuración de la URL de Redirección

Configura la URL del Shell principal de SIGEM:

1. Ve al archivo `src/config/constants.ts`
2. Reemplaza la URL placeholder:

```typescript
export const SHELL_URL = 'https://TU-SHELL.github.io'; // ← Reemplazar con la URL real
```

Ejemplo:
```typescript
export const SHELL_URL = 'https://sigem-shell.github.io';
```

### 3. Habilitar Email/Password en Firebase

1. En Firebase Console, ve a "Authentication"
2. En la pestaña "Sign-in method"
3. Habilita "Email/Password"
4. Guarda los cambios

## Instalación

```bash
# Instalar dependencias
npm install
```

## Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Construcción para Producción

```bash
# Construir la aplicación
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## Despliegue en GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

Ya existe un archivo `.github/workflows/deploy.yml` configurado.

1. Sube tu código al repositorio:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/flavio1227/Login.git
git push -u origin main
```

2. En GitHub: Settings > Pages > Source > **GitHub Actions**
3. El workflow se ejecutará automáticamente
4. Tu app estará en: `https://flavio1227.github.io/Login/`

### Opción 2: Despliegue Manual

1. Construye la aplicación:
```bash
npm run build
```

2. Los archivos en la carpeta `dist/` son los que debes subir a tu repositorio en la rama `gh-pages` o configurar en GitHub Pages.

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) ya está incluido y configurado. Se ejecutará automáticamente al hacer push a la rama `main`.

## Estructura del Proyecto

```
src/
├── config/
│   ├── firebase.ts      # ⚙️ Configuración de Firebase (MODIFICAR AQUÍ)
│   └── constants.ts     # ⚙️ URL de redirección (MODIFICAR AQUÍ)
├── context/
│   └── AuthContext.tsx  # Contexto de autenticación
├── components/
│   └── LoginForm.tsx    # Formulario de login
├── App.tsx              # Componente principal con lógica de redirección
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Seguridad

### Firebase Security Rules

Asegúrate de configurar las reglas de seguridad en Firebase:

```javascript
{
  "rules": {
    ".read": false,
    ".write": false
  }
}
```

### Compartir Sesión entre Micro-Apps

Para que la sesión persista entre diferentes repositorios de GitHub Pages:

1. Todos los micro-apps deben usar el **mismo proyecto de Firebase**
2. En Firebase Console, ve a "Authentication" > "Settings" > "Authorized domains"
3. Agrega todos los dominios de tus micro-apps:
   - `tu-login.github.io`
   - `tu-shell.github.io`
   - `tu-microapp1.github.io`
   - etc.

## Usuarios de Prueba

Para crear usuarios de prueba:

1. Ve a Firebase Console > Authentication > Users
2. Haz clic en "Add user"
3. Ingresa email y contraseña
4. Guarda

O usa la Firebase Admin SDK para gestionar usuarios programáticamente.

## Personalización

### Agregar tu Logo

Reemplaza el archivo placeholder en la carpeta `public/` con tu propio logo:

```
public/
  └── logo.svg  ← Reemplaza con tu logo (PNG, JPG, SVG, etc.)
```

**Tamaño recomendado:** 256x256px o superior

La imagen se mostrará automáticamente en el centro de la pantalla de login. Si tu archivo tiene un nombre diferente, edita `src/components/LoginForm.tsx` línea 58:

```tsx
<img
  src="/logo.svg"  // ← Cambia a tu archivo (ej: /mi-logo.png)
  alt="Logo"
  className="w-32 h-32 object-contain mb-4"
/>
```

### Modificar Colores

Los colores principales están definidos con Tailwind CSS:
- Fondo: `slate-900`, `slate-800`
- Botones: `blue-600`, `blue-700`
- Textos: `slate-100`, `slate-300`, `slate-400`

## Solución de Problemas

### Error: "Firebase configuration not found"
- Verifica que hayas reemplazado los valores en `src/config/firebase.ts`

### Error: "Network request failed"
- Verifica tu conexión a internet
- Verifica que las credenciales de Firebase sean correctas

### La sesión no persiste entre micro-apps
- Verifica que todos los micro-apps usen el mismo proyecto de Firebase
- Verifica que todos los dominios estén autorizados en Firebase Console

### El usuario no es redirigido después del login
- Verifica la URL en `src/config/constants.ts`
- Abre la consola del navegador para ver posibles errores

## Tecnologías

- ⚡ Vite
- ⚛️ React 18
- 📘 TypeScript
- 🔥 Firebase Authentication
- 🎨 Tailwind CSS
- 🎭 Lucide React (iconos)

## Licencia

© 2026 SIGEM - Sistema de Gestión Municipal

## Soporte

Para reportar problemas o solicitar nuevas características, contacta al equipo de desarrollo de SIGEM.
