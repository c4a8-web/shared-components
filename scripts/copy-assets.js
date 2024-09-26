import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = path.resolve(__dirname, '../src/layouts');
const destDir = path.resolve(__dirname, '../dist/layouts');

fs.mkdirSync(destDir, { recursive: true });

fs.readdirSync(srcDir).forEach((file) => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
});

console.log('Layouts copied to dist directory.');

const srcThemesDir = path.resolve(__dirname, '../src/assets/css/themes');
const destThemesDir = path.resolve(__dirname, '../dist/themes');

fs.mkdirSync(destThemesDir, { recursive: true });

fs.readdirSync(srcThemesDir).forEach((file) => {
  const srcFile = path.join(srcThemesDir, file);
  const destFile = path.join(destThemesDir, file);
  fs.copyFileSync(srcFile, destFile);
});

console.log('Themes copied to dist directory.');
