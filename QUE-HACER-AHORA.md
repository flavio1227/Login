# 🚀 ¿Qué Hacer Ahora? - Guía Rápida

## 🔴 PROBLEMA 1: No Puedo Ver el Login

### Solución: Probar Localmente Primero

1. **Abre tu navegador** y ve a: `http://localhost:5173`
   - Si el servidor está corriendo, deberías ver el login
   - Si no ves nada, revisa la consola del navegador (presiona F12)

2. **Si ves errores en la consola**, probablemente falta configurar Firebase

---

## 🔴 PROBLEMA 2: No Sé Qué Hacer en Firebase

### Sigue estos 3 pasos en Firebase Console:

#### 📍 Paso 1: Habilitar Email/Password (OBLIGATORIO)

1. Ve a: https://console.firebase.google.com/
2. Selecciona tu proyecto: **sigem-8c63e**
3. Menú izquierdo → **Authentication**
4. Pestaña **Sign-in method**
5. Busca **Email/Password** → Haz clic
6. Activa el interruptor **Enable**
7. Haz clic en **Save**

✅ **Resultado esperado:** Email/Password aparece como "Enabled"

---

#### 📍 Paso 2: Agregar Dominio de GitHub Pages (OBLIGATORIO)

1. En Firebase Console → **Authentication**
2. Pestaña **Settings**
3. Sección **Authorized domains**
4. Haz clic en **Add domain**
5. Ingresa: `flavio1227.github.io`
6. Haz clic en **Add**

✅ **Resultado esperado:** Verás `flavio1227.github.io` en la lista de dominios

---

#### 📍 Paso 3: Crear Usuario de Prueba (OBLIGATORIO)

1. En Firebase Console → **Authentication**
2. Pestaña **Users**
3. Haz clic en **Add user**
4. Email: `admin@sigem.test` (o el que quieras)
5. Contraseña: `123456` (o la que quieras, mínimo 6 caracteres)
6. Haz clic en **Add user**

✅ **Resultado esperado:** Verás el usuario en la lista

**Guarda estas credenciales:**
- Email: `admin@sigem.test`
- Contraseña: `123456` (o la que hayas puesto)

---

## ✅ Verificar que Todo Funciona

### 1. Probar Localmente

1. Abre: `http://localhost:5173`
2. Deberías ver el formulario de login
3. Ingresa el email y contraseña que creaste
4. Haz clic en "Iniciar sesión"

**Si funciona:** ✅ Firebase está configurado correctamente
**Si no funciona:** Revisa los 3 pasos de Firebase arriba

### 2. Probar en GitHub Pages

1. Ve a: `https://flavio1227.github.io/Login/`
2. Si no aparece, espera 2-3 minutos después de hacer push
3. Verifica en GitHub → Pestaña **Actions** que el despliegue haya terminado

---

## 🆘 Si Aún No Funciona

### Revisa estos puntos:

1. **¿Ves el login pero no funciona?**
   - Verifica que Email/Password esté habilitado
   - Verifica que el dominio esté autorizado
   - Verifica que el usuario exista

2. **¿No ves el login en absoluto?**
   - Abre la consola del navegador (F12)
   - Busca errores en rojo
   - Comparte el error que ves

3. **¿Error de redirección?**
   - Abre `src/config/constants.ts`
   - Cambia `SHELL_URL` a una URL temporal si no tienes Shell aún
   - Ejemplo: `export const SHELL_URL = 'https://google.com';`

---

## 📝 Checklist Rápido

- [ ] Email/Password habilitado en Firebase
- [ ] Dominio `flavio1227.github.io` agregado en Firebase
- [ ] Usuario de prueba creado en Firebase
- [ ] Puedo ver el login en `http://localhost:5173`
- [ ] Puedo hacer login con el usuario creado
- [ ] El login funciona en GitHub Pages

---

## 📞 URLs Importantes

- **Firebase Console:** https://console.firebase.google.com/
- **Tu Login Local:** http://localhost:5173
- **Tu Login en GitHub:** https://flavio1227.github.io/Login/
- **Repositorio:** https://github.com/flavio1227/Login
