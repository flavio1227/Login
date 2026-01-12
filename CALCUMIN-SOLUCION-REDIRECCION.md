# 🔧 Solución: CALCUMIN redirige a SIGEM1.1 cuando está autenticado

## 🔴 Problema

Cuando intentas acceder a CALCUMIN estando logueado, te redirige a SIGEM1.1 en lugar de permitirte usar la calculadora.

## 🔍 Causa Probable

CALCUMIN probablemente tiene código que detecta que estás autenticado y te redirige automáticamente a SIGEM1.1. Esto puede estar en:

1. El componente principal (`App.tsx` o `main.tsx`)
2. Un hook o contexto de autenticación
3. Un efecto que verifica el estado de autenticación

## ✅ Solución

### Paso 1: Buscar código que redirige en CALCUMIN

Busca en tu código de CALCUMIN cualquier lugar donde aparezca:

```typescript
// Busca estas líneas:
window.location.href = 'https://flavio1227.github.io/SIGEM1.1/'
window.location.href = SHELL_URL
window.location.replace(...)
// O cualquier redirección cuando detecta usuario autenticado
```

### Paso 2: Eliminar o comentar la redirección

Si encuentras código como este:

```typescript
// ❌ ELIMINAR ESTO:
useEffect(() => {
  if (user) {
    window.location.href = 'https://flavio1227.github.io/SIGEM1.1/';
  }
}, [user]);
```

**Reemplázalo con:**

```typescript
// ✅ O simplemente elimínalo completamente
// Si el usuario está autenticado, debe poder usar CALCUMIN sin redirección
```

### Paso 3: Usar AuthGuard correctamente

Asegúrate de que tu `App.tsx` en CALCUMIN se vea así:

```typescript
import { AuthGuard } from './components/AuthGuard';

function App() {
  return (
    <AuthGuard loginUrl="https://flavio1227.github.io/Login/">
      {/* Tu aplicación CALCUMIN aquí */}
      {/* NO debe haber ninguna redirección dentro de este contenido */}
      <div>
        {/* Contenido de CALCUMIN */}
      </div>
    </AuthGuard>
  );
}
```

### Paso 4: Verificar que no haya otros efectos

Busca en todo el código de CALCUMIN por:

- `useEffect` que verifique `user` o `auth`
- Cualquier lógica que redirija cuando detecta autenticación
- Contextos o hooks de autenticación que puedan estar redirigiendo

## 🔍 Cómo encontrar el problema

1. Abre la consola del navegador (F12)
2. Ve a CALCUMIN mientras estás logueado
3. Busca en la consola mensajes como:
   - "Redirigiendo..."
   - "Redirecting..."
   - Cualquier mensaje relacionado con redirección

4. Busca en el código fuente de CALCUMIN:
   ```bash
   # Busca en todos los archivos:
   grep -r "SIGEM1.1" .
   grep -r "window.location" .
   grep -r "useEffect.*user" .
   ```

## ✅ Comportamiento Correcto

**Cuando NO estás logueado:**
- CALCUMIN → Redirige a Login
- Login → Permite hacer login
- Después del login → Redirige de vuelta a CALCUMIN

**Cuando SÍ estás logueado:**
- CALCUMIN → Debe mostrar la calculadora SIN redirigir
- Login → Redirige a SIGEM1.1 (comportamiento normal)

## 📝 Ejemplo de código CORRECTO en CALCUMIN

```typescript
// App.tsx de CALCUMIN
import { AuthGuard } from './components/AuthGuard';

function App() {
  // NO debe haber ningún useEffect que redirija aquí
  // El AuthGuard se encarga de verificar autenticación
  
  return (
    <AuthGuard loginUrl="https://flavio1227.github.io/Login/">
      <div className="calcumin-app">
        {/* Tu calculadora aquí */}
        <h1>CALCUMIN</h1>
        {/* Resto de tu aplicación */}
      </div>
    </AuthGuard>
  );
}

export default App;
```

## 🆘 Si el problema persiste

1. Comparte el código de `App.tsx` o `main.tsx` de CALCUMIN
2. Comparte cualquier código relacionado con autenticación en CALCUMIN
3. Revisa la consola del navegador y comparte los errores o mensajes

El problema está en CALCUMIN, no en el Login. El Login funciona correctamente.
