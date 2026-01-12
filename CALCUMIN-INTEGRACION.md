# 🔐 Integración de Autenticación en CALCUMIN

Esta guía te muestra cómo proteger CALCUMIN con autenticación de Firebase, compartiendo la sesión con el Login de SIGEM.

## 📋 Requisitos

1. CALCUMIN debe usar el **mismo proyecto de Firebase** que el Login
2. Instalar Firebase en CALCUMIN: `npm install firebase`
3. Los archivos de configuración deben estar en CALCUMIN

## 🚀 Pasos de Integración

### Paso 1: Instalar Firebase en CALCUMIN

```bash
cd CALCUMIN  # Ve a la carpeta de CALCUMIN
npm install firebase
```

### Paso 2: Crear archivo de configuración de Firebase

Crea el archivo `src/config/firebase.ts` (o la ruta que uses) con el contenido de `CALCUMIN-FIREBASE-CONFIG.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_KRg3gquEfNTGVBpX5LXsy90kImNNYSc",
  authDomain: "sigem-8c63e.firebaseapp.com",
  projectId: "sigem-8c63e",
  storageBucket: "sigem-8c63e.firebasestorage.app",
  messagingSenderId: "17276488812",
  appId: "1:17276488812:web:d1c6a6573240b3b94bdc49",
  measurementId: "G-CDHXQFPS5F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### Paso 3: Crear componente AuthGuard

Crea el archivo `src/components/AuthGuard.tsx` (o la ruta que uses) con el contenido de `CALCUMIN-AUTH-GUARD.tsx`.

**Ajusta la ruta de importación** según tu estructura:
```typescript
import { auth } from '../config/firebase'; // Ajusta según tu estructura
```

### Paso 4: Proteger tu aplicación CALCUMIN

En tu componente principal de CALCUMIN (por ejemplo, `App.tsx` o `main.tsx`), envuelve todo con `AuthGuard`:

```typescript
import { AuthGuard } from './components/AuthGuard';

function App() {
  return (
    <AuthGuard loginUrl="https://flavio1227.github.io/Login/">
      {/* Todo tu contenido de CALCUMIN aquí */}
      <div>
        {/* Tu aplicación CALCUMIN */}
      </div>
    </AuthGuard>
  );
}

export default App;
```

### Paso 5: Agregar dominio autorizado en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto: **sigem-8c63e**
3. Ve a **Authentication** > **Settings** > **Authorized domains**
4. Agrega el dominio de CALCUMIN (ej: `flavio1227.github.io` si está en GitHub Pages)

## ✅ Resultado

- ✅ Si el usuario **NO está logueado**: Será redirigido automáticamente al Login
- ✅ Si el usuario **está logueado**: Podrá usar CALCUMIN normalmente
- ✅ La sesión se comparte entre Login y CALCUMIN (mismo proyecto Firebase)
- ✅ Si cierra sesión en Login, también se cerrará en CALCUMIN

## 🔄 Flujo de Autenticación

1. Usuario intenta acceder a CALCUMIN
2. `AuthGuard` verifica si hay sesión activa
3. Si NO hay sesión → Redirige a Login
4. Usuario hace login en Login
5. Usuario es redirigido de vuelta a CALCUMIN (si hay parámetro `redirect`)
6. `AuthGuard` detecta la sesión y permite el acceso

## 🛠️ Opciones Avanzadas

### Agregar botón de cerrar sesión en CALCUMIN

```typescript
import { signOut } from 'firebase/auth';
import { auth } from './config/firebase';

const handleLogout = async () => {
  await signOut(auth);
  window.location.href = 'https://flavio1227.github.io/Login/';
};
```

### Mostrar información del usuario

```typescript
import { useAuthState } from 'react-firebase-hooks'; // O usa onAuthStateChanged
import { auth } from './config/firebase';

const [user] = useAuthState(auth);
// user.email, user.displayName, etc.
```

## 📝 Notas Importantes

- **Mismo proyecto Firebase**: CALCUMIN y Login DEBEN usar el mismo proyecto Firebase para compartir la sesión
- **Dominios autorizados**: Asegúrate de agregar todos los dominios en Firebase Console
- **Rutas**: Ajusta las rutas de importación según la estructura de tu proyecto CALCUMIN

## 🆘 Solución de Problemas

### "No redirige al login"
- Verifica que `AuthGuard` esté envolviendo tu aplicación
- Verifica que la ruta de `firebase.ts` sea correcta
- Revisa la consola del navegador (F12) para errores

### "Sesión no se comparte"
- Verifica que ambos usen el mismo proyecto Firebase
- Verifica que ambos dominios estén autorizados en Firebase
- Limpia las cookies y prueba de nuevo

### "Error de importación"
- Verifica las rutas de importación en `AuthGuard.tsx`
- Asegúrate de que `firebase.ts` esté en la ruta correcta
