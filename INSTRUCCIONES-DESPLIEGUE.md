# 🚀 Instrucciones de Despliegue - Listo para GitHub

Tu aplicación está lista para subir a GitHub. Sigue estos pasos:

## 📋 Pre-requisitos

Antes de subir el código, asegúrate de completar:

### 1. Configurar Firebase
- [ ] Edita `src/config/firebase.ts` con tus credenciales de Firebase
- [ ] Habilita Email/Password en Firebase Console
- [ ] Crea al menos un usuario de prueba

### 2. Configurar URL de Redirección
- [ ] Edita `src/config/constants.ts` con la URL de tu Shell principal

### 3. Agregar tu Logo
- [ ] Reemplaza `public/logo.svg` con tu propio logo

## 🔧 Comandos para Subir a GitHub

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - Login SIGEM"

# Renombrar rama a main
git branch -M main

# Conectar con tu repositorio en GitHub
git remote add origin https://github.com/flavio1227/Login.git

# Subir el código
git push -u origin main
```

## ⚙️ Configurar GitHub Pages

1. Ve a tu repositorio: https://github.com/flavio1227/Login
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

El workflow se ejecutará automáticamente y desplegará tu aplicación.

## 🌐 URL de tu Aplicación

Una vez desplegada, tu aplicación estará disponible en:

```
https://flavio1227.github.io/Login/
```

## 🔥 Configurar Dominio en Firebase

Para que la autenticación funcione, agrega el dominio en Firebase:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Authentication > Settings > Authorized domains
4. Haz clic en **Add domain**
5. Agrega: `flavio1227.github.io`
6. Guarda

## ✅ Verificar el Despliegue

1. El workflow tardará 2-3 minutos en completarse
2. Ve a la pestaña **Actions** en tu repositorio para ver el progreso
3. Una vez completado (marca verde ✓), abre la URL de tu app
4. Verifica que:
   - Se cargue la pantalla de login
   - Se muestre tu logo
   - Puedas iniciar sesión con tus credenciales de prueba

## 🐛 Solución de Problemas

### El workflow falla en GitHub Actions
- Verifica que hayas seleccionado "GitHub Actions" en Settings > Pages
- Revisa los logs del workflow en la pestaña Actions

### La página muestra 404
- Espera unos minutos más (puede tardar hasta 5 minutos)
- Verifica que el workflow haya completado correctamente
- Asegúrate de que GitHub Pages esté habilitado

### "Firebase configuration not found"
- Verifica que hayas editado `src/config/firebase.ts` antes de hacer commit
- Reconstruye y vuelve a hacer push:
  ```bash
  npm run build
  git add .
  git commit -m "Fix: Firebase configuration"
  git push
  ```

### No puedo hacer login
- Verifica que el dominio `flavio1227.github.io` esté en Firebase > Authorized domains
- Verifica que el usuario exista en Firebase Console > Authentication > Users
- Abre la consola del navegador (F12) para ver errores específicos

## 📝 Siguientes Pasos

Después de desplegar exitosamente:

1. Actualiza `src/config/constants.ts` con la URL real de tu Shell
2. Crea más usuarios en Firebase Console según sea necesario
3. Comparte la URL con tu equipo
4. Documenta las credenciales de acceso de forma segura

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# Hacer cambios en el código...

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir cambios
git push
```

El workflow se ejecutará automáticamente y actualizará tu aplicación.

---

**¿Necesitas ayuda?** Revisa los archivos:
- `README.md` - Documentación completa
- `INICIO-RAPIDO.md` - Guía rápida
- `CONFIGURACION.md` - Checklist detallado
