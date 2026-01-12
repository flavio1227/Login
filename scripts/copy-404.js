import { copyFileSync } from 'fs';

try {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('✅ 404.html copiado correctamente desde index.html');
} catch (error) {
  console.error('❌ Error al copiar 404.html:', error);
  process.exit(1);
}
