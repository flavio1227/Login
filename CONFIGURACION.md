# 📋 Lista de Verificación - Configuración SIGEM Login

Sigue estos pasos en orden antes de desplegar la aplicación:

## ✅ Paso 1: Configurar Firebase

### 1.1 Crear/Acceder al Proyecto Firebase

- [ ] Ir a [Firebase Console](https://console.firebase.google.com/)
- [ ] Crear un nuevo proyecto o seleccionar el proyecto SIGEM existente
- [ ] Nombre sugerido: `sigem-production`

### 1.2 Habilitar Authentication

- [ ] En el menú lateral, ir a **Authentication**
- [ ] Hacer clic en **Get Started** (si es la primera vez)
- [ ] Ir a la pestaña **Sign-in method**
- [ ] Hacer clic en **Email/Password**
- [ ] Activar el switch **Enable**
- [ ] Guardar cambios

### 1.3 Crear App Web en Firebase

- [ ] Ir a **Configuración del proyecto** (ícono de engranaje arriba a la izquierda)
- [ ] En la sección "Tus apps", hacer clic en el ícono **</>** (Web)
- [ ] Registrar la app con el nombre: `SIGEM Login`
- [ ] **NO** marcar "Firebase Hosting" (usaremos GitHub Pages)
- [ ] Hacer clic en **Registrar app**

### 1.4 Copiar Credenciales

Firebase te mostrará un código similar a este:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "sigem-production.firebaseapp.com",
  projectId: "sigem-production",
  storageBucket: "sigem-production.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

- [ ] Copiar TODAS las credenciales
- [ ] Abrir el archivo `src/config/firebase.ts` en tu proyecto
- [ ] Reemplazar los valores placeholder con tus credenciales reales
- [ ] Guardar el archivo

## ✅ Paso 2: Configurar Dominios Autorizados

Para que la sesión funcione en todos tus micro-apps:

- [ ] En Firebase Console, ir a **Authentication** > **Settings**
- [ ] En la pestaña **Authorized domains**, hacer clic en **Add domain**
- [ ] Agregar cada dominio donde desplegarás micro-apps:

Ejemplo:
```
sigem-login.github.io
sigem-shell.github.io
sigem-usuarios.github.io
sigem-reportes.github.io
```

- [ ] Guardar cada dominio

## ✅ Paso 3: Configurar URL de Redirección

- [ ] Determinar la URL donde estará desplegado tu Shell principal
- [ ] Ejemplo: `https://sigem-shell.github.io`
- [ ] Abrir el archivo `src/config/constants.ts`
- [ ] Reemplazar `'https://TU-SHELL.github.io'` con tu URL real
- [ ] Guardar el archivo

Ejemplo:
```typescript
export const SHELL_URL = 'https://sigem-shell.github.io';
```

## ✅ Paso 4: Crear Usuarios de Prueba

- [ ] En Firebase Console, ir a **Authentication** > **Users**
- [ ] Hacer clic en **Add user**
- [ ] Ingresar un email de prueba (ej: `admin@sigem.test`)
- [ ] Ingresar una contraseña segura
- [ ] Hacer clic en **Add user**
- [ ] Repetir para crear más usuarios si es necesario

## ✅ Paso 5: Construir la Aplicación

En tu terminal, ejecutar:

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Construir para producción
npm run build
```

- [ ] Verificar que el comando se ejecute sin errores
- [ ] Verificar que se creó la carpeta `dist/`

## ✅ Paso 6: Configurar GitHub Pages

### 6.1 Crear Repositorio

- [ ] Crear un nuevo repositorio en GitHub
- [ ] Nombre sugerido: `sigem-login`
- [ ] Hacer público o privado según tus necesidades

### 6.2 Subir Código

```bash
git init
git add .
git commit -m "Initial commit - SIGEM Login"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sigem-login.git
git push -u origin main
```

### 6.3 Activar GitHub Pages

- [ ] En GitHub, ir a tu repositorio
- [ ] Ir a **Settings** > **Pages**
- [ ] En **Source**, seleccionar **GitHub Actions**
- [ ] Crear el archivo `.github/workflows/deploy.yml` (ver README.md)
- [ ] Hacer commit y push del workflow
- [ ] Esperar a que se complete el despliegue

### 6.4 Verificar Despliegue

- [ ] La URL será: `https://TU-USUARIO.github.io/sigem-login/`
- [ ] Abrir la URL en el navegador
- [ ] Verificar que se muestre la pantalla de login

## ✅ Paso 7: Probar la Aplicación

### 7.1 Prueba de Login

- [ ] Abrir la URL de tu app
- [ ] Ingresar el email y contraseña de un usuario de prueba
- [ ] Hacer clic en "Iniciar sesión"
- [ ] Verificar que no haya errores en la consola del navegador
- [ ] Verificar que intente redirigir al Shell URL

### 7.2 Prueba de Sesión Persistente

- [ ] Después de hacer login, cerrar la pestaña
- [ ] Abrir nuevamente la URL del login
- [ ] Debería redirigir automáticamente sin pedir credenciales

### 7.3 Prueba de Errores

- [ ] Intentar login con email incorrecto
- [ ] Verificar que muestre: "No existe una cuenta con este correo electrónico"
- [ ] Intentar login con contraseña incorrecta
- [ ] Verificar que muestre: "Credenciales inválidas. Verifica tu correo y contraseña"

## 🎯 Verificación Final

Marca todos los items que apliquen:

- [ ] Firebase configurado correctamente
- [ ] Authentication habilitado (Email/Password)
- [ ] Credenciales copiadas en `firebase.ts`
- [ ] Dominios autorizados agregados en Firebase
- [ ] URL de redirección configurada en `constants.ts`
- [ ] Al menos un usuario de prueba creado
- [ ] Build ejecutado sin errores
- [ ] Código subido a GitHub
- [ ] GitHub Pages configurado y desplegado
- [ ] Login funciona correctamente
- [ ] Sesión persiste al recargar la página
- [ ] Mensajes de error se muestran correctamente en español

## 🚀 ¡Listo para Producción!

Una vez completados todos los pasos, tu aplicación de login está lista para ser usada como puerta de entrada para todos los micro-apps de SIGEM.

## 📝 Notas Importantes

1. **Seguridad**: Nunca compartas las credenciales de Firebase públicamente
2. **Backup**: Guarda las credenciales en un lugar seguro
3. **Consistencia**: Usa el MISMO proyecto Firebase en TODOS los micro-apps SIGEM
4. **Testing**: Prueba en diferentes navegadores (Chrome, Firefox, Safari, Edge)
5. **Mobile**: Verifica que funcione correctamente en dispositivos móviles

## 🆘 Problemas Comunes

### "Firebase configuration not found"
→ Verifica que hayas reemplazado TODOS los valores en `firebase.ts`

### "User not found" con credenciales correctas
→ Verifica que el usuario exista en Firebase Console > Authentication > Users

### No redirige después del login
→ Verifica la URL en `constants.ts` y que sea accesible

### "Unauthorized domain"
→ Agrega tu dominio en Firebase Console > Authentication > Settings > Authorized domains
