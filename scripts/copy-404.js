import { copyFileSync, readFileSync, writeFileSync } from 'fs';

try {
  // Copiar index.html como 404.html
  copyFileSync('dist/index.html', 'dist/404.html');
  
  // Verificar y corregir rutas en index.html si es necesario
  let indexContent = readFileSync('dist/index.html', 'utf-8');
  
  // Si el HTML todavía tiene /src/main.tsx sin el base path, corregirlo
  if (indexContent.includes('src="/src/main.tsx"')) {
    console.log('⚠️  Advertencia: El HTML generado tiene rutas sin transformar');
    console.log('   Vite debería transformar esto automáticamente durante el build');
  }
  
  // Verificar que las rutas incluyan /Login/
  if (!indexContent.includes('/Login/') && indexContent.includes('src="/src/')) {
    console.log('⚠️  Advertencia: Las rutas no incluyen el base path /Login/');
  }
  
  console.log('✅ 404.html copiado correctamente desde index.html');
} catch (error) {
  console.error('❌ Error al copiar 404.html:', error);
  process.exit(1);
}
