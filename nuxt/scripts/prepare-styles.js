import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scssInput = resolve(__dirname, '../src/assets/scss/index.scss');
const cssOutput = resolve(__dirname, '../dist/styles/index.css');
const optimizedCssOutput = resolve(__dirname, '../dist/styles/index.min.css');

console.log('Compiling SCSS to CSS...');
execSync(`sass ${scssInput} ${cssOutput}`, { stdio: 'inherit' });

console.log('Optimizing CSS with PostCSS...');
execSync(`postcss ${cssOutput} -o ${optimizedCssOutput}`, { stdio: 'inherit' });

console.log('CSS build completed successfully.');
