# 🔥 Guía Paso a Paso: Configurar Firebase

## ✅ Paso 1: Habilitar Email/Password Authentication

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto: **sigem-8c63e**
3. En el menú lateral izquierdo, haz clic en **Authentication**
4. Haz clic en la pestaña **Sign-in method** (Métodos de inicio de sesión)
5. Busca **Email/Password** en la lista
6. Haz clic en **Email/Password**
7. Activa el interruptor **Enable** (Habilitar)
8. Deja **Email link (passwordless sign-in)** desactivado (solo necesitas Email/Password)
9. Haz clic en **Save** (Guardar)

## ✅ Paso 2: Agregar Dominio Autorizado

Para que el login funcione en GitHub Pages:

1. En Firebase Console, sigue en **Authentication**
2. Haz clic en la pestaña **Settings** (Configuración)
3. Desplázate hasta la sección **Authorized domains** (Dominios autorizados)
4. Haz clic en **Add domain** (Agregar dominio)
5. Ingresa: `flavio1227.github.io`
6. Haz clic en **Add** (Agregar)

**Dominios que deberías tener:**
- `localhost` (ya está por defecto - para desarrollo local)
- `flavio1227.github.io` (para GitHub Pages)

## ✅ Paso 3: Crear Usuario de Prueba

1. En Firebase Console, en **Authentication**
2. Haz clic en la pestaña **Users** (Usuarios)
3. Haz clic en **Add user** (Agregar usuario)
4. Ingresa un email de prueba, por ejemplo: `admin@sigem.test`
5. Ingresa una contraseña (mínimo 6 caracteres)
6. Haz clic en **Add user** (Agregar usuario)

**Guarda estas credenciales para probar el login:**
- Email: `admin@sigem.test` (o el que hayas puesto)
- Contraseña: (la que hayas creado)

## ✅ Paso 4: Verificar que Todo Esté Listo

### En Firebase Console deberías ver:
- ✅ Email/Password habilitado en Sign-in method
- ✅ `flavio1227.github.io` en Authorized domains
- ✅ Al menos 1 usuario creado en Users

### En tu código:
- ✅ `src/config/firebase.ts` tiene tus credenciales (ya está configurado)
- ✅ `src/config/constants.ts` tiene la URL de redirección (necesitas configurarla)

## 🧪 Probar Localmente

1. Abre tu navegador en: `http://localhost:5173`
2. Deberías ver la pantalla de login
3. Ingresa el email y contraseña del usuario que creaste
4. Si funciona, el login está correcto

## 🌐 Probar en GitHub Pages

1. Ve a: `https://flavio1227.github.io/Login/`
2. Si no aparece, verifica:
   - Que el despliegue haya terminado (ve a la pestaña **Actions** en GitHub)
   - Que GitHub Pages esté activado (Settings > Pages > Source: GitHub Actions)

## ❓ Problemas Comunes

### "No puedo ver el login"
- Verifica que el servidor local esté corriendo (`npm run dev`)
- Abre la consola del navegador (F12) y revisa si hay errores
- Verifica que la URL sea correcta: `http://localhost:5173`

### "Error de autenticación"
- Verifica que Email/Password esté habilitado en Firebase
- Verifica que el dominio esté autorizado
- Verifica que el usuario exista en Firebase Console

### "No redirige después del login"
- Verifica que `src/config/constants.ts` tenga una URL válida
- Si no tienes Shell aún, pon una URL temporal como: `https://google.com`
