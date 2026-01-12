# 🔧 Solución: "Connection Failed"

## 🔴 ¿Qué significa "Connection Failed"?

Este error aparece cuando Firebase no puede conectarse. Las causas más comunes son:

1. **Email/Password NO está habilitado** en Firebase
2. **El dominio NO está autorizado** en Firebase
3. **Problemas de red** o firewall bloqueando Firebase
4. **Configuración incorrecta** de Firebase

---

## ✅ Solución Paso a Paso

### Paso 1: Verificar Email/Password en Firebase

1. Ve a: https://console.firebase.google.com/
2. Selecciona: **sigem-8c63e**
3. Menú izquierdo → **Authentication**
4. Pestaña **Sign-in method**
5. Busca **Email/Password**
6. **DEBE estar "Enabled"** (habilitado)
   - Si NO está habilitado:
     - Haz clic en **Email/Password**
     - Activa el interruptor **Enable**
     - Haz clic en **Save**

✅ **Verifica:** Email/Password debe aparecer como "Enabled"

---

### Paso 2: Verificar Dominio Autorizado

1. En Firebase Console → **Authentication**
2. Pestaña **Settings**
3. Sección **Authorized domains**
4. **DEBES tener estos dominios:**
   - ✅ `localhost` (ya está por defecto)
   - ✅ `flavio1227.github.io` (debes agregarlo)

**Si falta `flavio1227.github.io`:**
- Haz clic en **Add domain**
- Ingresa: `flavio1227.github.io`
- Haz clic en **Add**

✅ **Verifica:** Debes ver ambos dominios en la lista

---

### Paso 3: Verificar Configuración de Firebase

Abre el archivo: `src/config/firebase.ts`

**DEBE tener estas credenciales:**
```typescript
apiKey: "AIzaSyA_KRg3gquEfNTGVBpX5LXsy90kImNNYSc"
authDomain: "sigem-8c63e.firebaseapp.com"
projectId: "sigem-8c63e"
```

✅ **Verifica:** No debe tener "TU_API_KEY" o valores placeholder

---

### Paso 4: Probar la Conexión

1. Abre: `http://localhost:5173`
2. Abre la consola del navegador (F12)
3. Ve a la pestaña **Console**
4. Busca errores en rojo

**Errores comunes:**

#### Error: "auth/unauthorized-domain"
→ **Solución:** Agrega el dominio en Firebase (Paso 2)

#### Error: "auth/operation-not-allowed"
→ **Solución:** Habilita Email/Password (Paso 1)

#### Error: "auth/network-request-failed"
→ **Solución:** 
   - Verifica tu conexión a internet
   - Verifica que no haya firewall bloqueando Firebase
   - Intenta desde otro navegador

---

## 🧪 Prueba Rápida

### 1. Verificar que Firebase esté configurado:

Abre la consola del navegador (F12) y ejecuta:
```javascript
console.log('Firebase config:', {
  apiKey: "AIzaSyA_KRg3gquEfNTGVBpX5LXsy90kImNNYSc",
  authDomain: "sigem-8c63e.firebaseapp.com"
});
```

### 2. Verificar que puedas conectarte a Firebase:

En la consola del navegador, ejecuta:
```javascript
fetch('https://sigem-8c63e.firebaseapp.com')
  .then(() => console.log('✅ Conexión OK'))
  .catch(() => console.log('❌ Sin conexión'));
```

---

## 📋 Checklist de Verificación

Antes de probar el login, verifica:

- [ ] Email/Password está **Enabled** en Firebase
- [ ] `flavio1227.github.io` está en **Authorized domains**
- [ ] `localhost` está en **Authorized domains**
- [ ] Las credenciales en `firebase.ts` son correctas
- [ ] Tienes conexión a internet
- [ ] No hay firewall bloqueando Firebase
- [ ] Has creado al menos un usuario en Firebase

---

## 🆘 Si Aún No Funciona

### Opción 1: Verificar en la Consola del Navegador

1. Abre `http://localhost:5173`
2. Presiona **F12** para abrir las herramientas de desarrollador
3. Ve a la pestaña **Console**
4. Busca errores en rojo
5. **Copia el error completo** y compártelo

### Opción 2: Verificar en Firebase Console

1. Ve a Firebase Console → **Authentication** → **Users**
2. Si NO puedes ver esta página, hay un problema con tu cuenta de Firebase
3. Verifica que estés usando la cuenta correcta

### Opción 3: Probar desde Otro Navegador

A veces los navegadores tienen extensiones que bloquean Firebase:
- Prueba con Chrome en modo incógnito
- Prueba con Firefox
- Desactiva extensiones de bloqueo de anuncios

---

## 📞 Información Útil

- **Firebase Console:** https://console.firebase.google.com/
- **Tu proyecto:** sigem-8c63e
- **Dominio necesario:** flavio1227.github.io
- **Login local:** http://localhost:5173
