# 🚀 Inicio Rápido - SIGEM Login

Guía resumida para poner en marcha la aplicación en 5 minutos.

## 📦 1. Instalar Dependencias

```bash
npm install
```

## 🖼️ 2. Agregar tu Logo

Reemplaza el archivo placeholder en la carpeta `public/`:

```
public/
  └── logo.svg  ← Reemplaza con tu logo (PNG, JPG, SVG, etc.)
```

**Tamaño recomendado:** 256x256px o superior

Si tu logo tiene otro nombre, edita `src/components/LoginForm.tsx` línea 58 y cambia `/logo.svg` por tu archivo.

## ⚙️ 3. Configurar Firebase (2 archivos)

### Archivo: `src/config/firebase.ts`

Reemplaza TODOS los valores `TU_*` con tus credenciales de Firebase:

```typescript
const firebaseConfig = {
  apiKey: "TU_API_KEY",                    // 👈 Cambiar aquí
  authDomain: "TU_PROJECT_ID.firebaseapp.com", // 👈 Cambiar aquí
  projectId: "TU_PROJECT_ID",              // 👈 Cambiar aquí
  storageBucket: "TU_PROJECT_ID.appspot.com", // 👈 Cambiar aquí
  messagingSenderId: "TU_MESSAGING_SENDER_ID", // 👈 Cambiar aquí
  appId: "TU_APP_ID"                       // 👈 Cambiar aquí
};
```

**¿Dónde obtengo estas credenciales?**
1. Ve a https://console.firebase.google.com/
2. Selecciona tu proyecto (o créalo)
3. Configuración del proyecto > Tus apps > Web
4. Copia y pega las credenciales

### Archivo: `src/config/constants.ts`

Reemplaza la URL del Shell:

```typescript
export const SHELL_URL = 'https://TU-SHELL.github.io'; // 👈 Cambiar aquí
```

Ejemplo:
```typescript
export const SHELL_URL = 'https://sigem-shell.github.io';
```

## 🔥 4. Habilitar Email/Password en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Authentication > Sign-in method
3. Habilita **Email/Password**
4. Guarda

## 👤 5. Crear un Usuario de Prueba

1. Firebase Console > Authentication > Users
2. Add user
3. Email: `admin@sigem.test`
4. Password: `Admin123!` (o la que prefieras)
5. Guardar

## 🧪 6. Probar en Local

```bash
npm run dev
```

Abre http://localhost:5173 y prueba el login con las credenciales que creaste.

## 🏗️ 7. Construir para Producción

```bash
npm run build
```

Esto generará la carpeta `dist/` lista para desplegar.

## 🌐 8. Desplegar en GitHub Pages

### Opción A: Automático con GitHub Actions

1. Crea un repositorio en GitHub llamado `Login`
2. Sube tu código:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/flavio1227/Login.git
git push -u origin main
```

3. En GitHub: Settings > Pages > Source > **GitHub Actions**
4. El workflow en `.github/workflows/deploy.yml` se ejecutará automáticamente
5. Tu app estará en: `https://flavio1227.github.io/Login/`

### Opción B: Manual

1. Construye: `npm run build`
2. Sube el contenido de `dist/` a la rama `gh-pages`
3. Configura GitHub Pages para usar esa rama

## 🔒 9. Configurar Dominios Autorizados

Para que la sesión funcione en todos tus micro-apps:

1. Firebase Console > Authentication > Settings > Authorized domains
2. Agrega TODOS los dominios donde desplegarás micro-apps:
   - `flavio1227.github.io` (dominio principal)
   - Cualquier otro subdominio o micro-app que despliegues

## ✅ ¡Listo!

Tu app de login está funcionando. Ahora puedes:

- Acceder desde la URL de GitHub Pages
- Hacer login con los usuarios que creaste en Firebase
- Ser redirigido automáticamente al Shell después del login
- La sesión persistirá entre recargas de página

## 📚 Más Información

- **README.md**: Documentación completa
- **CONFIGURACION.md**: Checklist detallado paso a paso
- **Firebase Docs**: https://firebase.google.com/docs/auth

## 🆘 Ayuda Rápida

### No puedo hacer login
→ Verifica que el usuario exista en Firebase Console > Authentication > Users

### "Firebase configuration not found"
→ Verifica que hayas modificado `src/config/firebase.ts` con tus credenciales reales

### No redirige después del login
→ Verifica que `src/config/constants.ts` tenga la URL correcta del Shell

### "Unauthorized domain"
→ Agrega tu dominio en Firebase Console > Authentication > Settings > Authorized domains

## 💡 Consejo Pro

Para evitar reconfigurar cada vez que clonas el repositorio, puedes:

1. Crear un archivo `firebase-config.md` fuera del repositorio con tus credenciales
2. O usar variables de entorno en tu sistema
3. Nunca subas las credenciales reales al repositorio público

---

**¿Necesitas el checklist completo?** → Ver `CONFIGURACION.md`
