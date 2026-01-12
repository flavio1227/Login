# ✅ Checklist Final - Antes de Subir a GitHub

## 📋 Verifica estos puntos ANTES de ejecutar `git push`

### Configuración de Firebase

- [ ] He editado `src/config/firebase.ts` con mis credenciales reales de Firebase
- [ ] He verificado que TODOS los valores `TU_*` fueron reemplazados
- [ ] He habilitado Email/Password en Firebase Console
- [ ] He creado al menos un usuario de prueba en Firebase

### Configuración de la Aplicación

- [ ] He editado `src/config/constants.ts` con la URL correcta de mi Shell
- [ ] He reemplazado `public/logo.svg` con mi propio logo (o lo haré después)

### Verificación de Build

- [ ] He ejecutado `npm run build` sin errores
- [ ] La carpeta `dist/` se creó correctamente

### Git y GitHub

- [ ] He creado el repositorio "Login" en GitHub: https://github.com/flavio1227/Login
- [ ] El repositorio está vacío (sin README inicial)

## 🚀 Comandos para Ejecutar

Si todos los puntos anteriores están marcados, ejecuta:

```bash
# 1. Inicializar Git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer commit
git commit -m "Initial commit - Login SIGEM"

# 4. Renombrar rama
git branch -M main

# 5. Conectar con GitHub
git remote add origin https://github.com/flavio1227/Login.git

# 6. Subir código
git push -u origin main
```

## ⚙️ Después de Subir

1. Ve a: https://github.com/flavio1227/Login/settings/pages
2. Selecciona **Source: GitHub Actions**
3. Espera a que se complete el despliegue (2-3 minutos)
4. Ve a Firebase Console > Authentication > Settings > Authorized domains
5. Agrega: `flavio1227.github.io`

## 🧪 Probar

1. Abre: https://flavio1227.github.io/Login/
2. Inicia sesión con tu usuario de prueba
3. Verifica la redirección al Shell

## ❌ Si algo falla

### Build falla
```bash
npm install
npm run build
```

### Git falla con "remote already exists"
```bash
git remote remove origin
git remote add origin https://github.com/flavio1227/Login.git
git push -u origin main
```

### No se muestra en GitHub Pages
- Espera 5 minutos adicionales
- Verifica que el workflow esté verde en la pestaña Actions
- Revisa los logs en caso de error

## 📁 Archivos que NO se subirán (están en .gitignore)

- `node_modules/` - Dependencias
- `dist/` - Build de producción
- `.env` - Variables de entorno locales
- Archivos de configuración del editor

## ✅ ¡Todo Listo!

Una vez que hagas push, tu aplicación se desplegará automáticamente en:

**https://flavio1227.github.io/Login/**

---

**¿Necesitas más ayuda?**
- LEEME-PRIMERO.md - Resumen rápido
- INSTRUCCIONES-DESPLIEGUE.md - Guía detallada
- INICIO-RAPIDO.md - Setup completo en 9 pasos
