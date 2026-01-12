# ✨ LEEME PRIMERO - Login SIGEM

## 🎯 Lo que tienes

Una aplicación de login completa lista para desplegar en GitHub Pages.

## 📝 Antes de Subir a GitHub

### ✅ Tareas Obligatorias (HAZ ESTO AHORA)

1. **Configurar Firebase** → Edita `src/config/firebase.ts`
   - Reemplaza TODOS los valores `TU_*` con tus credenciales reales
   - Obtén las credenciales en: https://console.firebase.google.com/

2. **Configurar URL de Redirección** → Edita `src/config/constants.ts`
   - Cambia `https://TU-SHELL.github.io` por tu URL real
   - Ejemplo: `https://flavio1227.github.io/shell-sigem`

3. **Agregar tu Logo** → Reemplaza `public/logo.svg`
   - Coloca tu imagen de logo con el nombre `logo.svg`
   - O cambia la referencia en `src/components/LoginForm.tsx` línea 58

4. **Habilitar Email/Password en Firebase**
   - Ve a Firebase Console > Authentication > Sign-in method
   - Activa "Email/Password"

5. **Crear Usuario de Prueba**
   - Firebase Console > Authentication > Users > Add user
   - Email: `admin@test.com` (o el que prefieras)
   - Password: `Admin123!` (o la que prefieras)

## 🚀 Subir a GitHub

Una vez completadas las tareas anteriores, ejecuta en tu terminal:

```bash
git init
git add .
git commit -m "Initial commit - Login SIGEM"
git branch -M main
git remote add origin https://github.com/flavio1227/Login.git
git push -u origin main
```

## ⚙️ Configurar GitHub Pages

1. Ve a: https://github.com/flavio1227/Login/settings/pages
2. En **Source**, selecciona: **GitHub Actions**
3. Espera 2-3 minutos a que se complete el despliegue
4. Tu app estará en: **https://flavio1227.github.io/Login/**

## 🔥 Agregar Dominio en Firebase

1. Ve a Firebase Console > Authentication > Settings > Authorized domains
2. Haz clic en "Add domain"
3. Agrega: `flavio1227.github.io`
4. Guarda

## 🧪 Probar la Aplicación

1. Abre: https://flavio1227.github.io/Login/
2. Ingresa las credenciales del usuario que creaste
3. Haz clic en "Iniciar sesión"
4. Deberías ser redirigido al Shell

## 📚 Documentación Completa

- **INSTRUCCIONES-DESPLIEGUE.md** - Guía paso a paso para el despliegue
- **INICIO-RAPIDO.md** - Configuración rápida en 9 pasos
- **CONFIGURACION.md** - Checklist completo con todos los detalles
- **README.md** - Documentación técnica completa

## ❓ ¿Problemas?

### No puedo hacer login después de desplegar
- Verifica que `flavio1227.github.io` esté en Firebase > Authorized domains
- Verifica que el usuario exista en Firebase Console

### La página muestra 404
- Espera 5 minutos adicionales
- Verifica que GitHub Pages esté configurado correctamente
- Revisa la pestaña Actions en GitHub para ver si hubo errores

### No se muestra mi logo
- Verifica que el archivo esté en `public/logo.svg`
- Verifica que el nombre coincida en `src/components/LoginForm.tsx`
- Reconstruye y vuelve a hacer push

## 🎉 ¡Listo!

Una vez completados estos pasos, tendrás tu aplicación de login funcionando en producción.

---

**Repositorio:** https://github.com/flavio1227/Login
**App en Vivo:** https://flavio1227.github.io/Login/
**Firebase Console:** https://console.firebase.google.com/
