# Logo de la Aplicación

Reemplaza el archivo `logo.svg` placeholder con tu propia imagen de logo.

## Formatos soportados

- SVG (recomendado)
- PNG
- JPG/JPEG
- WebP
- GIF

## Tamaño recomendado

- **Ancho:** 256px o superior
- **Alto:** 256px o superior
- **Relación:** Preferiblemente cuadrado (1:1)

## Uso

```
public/
  └── logo.svg  ← Reemplaza este archivo con tu logo
```

La imagen se mostrará automáticamente en el centro de la pantalla de login con un tamaño de 128x128px (w-32 h-32 en Tailwind CSS).

## Usar archivo con otro nombre

Si prefieres usar otro nombre o formato, edita la línea 58 en `src/components/LoginForm.tsx`:

```tsx
<img
  src="/logo.svg"  // ← Cambia aquí
  alt="Logo"
  className="w-32 h-32 object-contain mb-4"
/>
```

Ejemplo con otro nombre:
```tsx
<img
  src="/mi-logo.png"  // ← Tu archivo
  alt="Logo"
  className="w-32 h-32 object-contain mb-4"
/>
```
