import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  {
    source: path.join(__dirname, '../components'),
    destination: path.join(__dirname, '../src/runtime/components'),
    extension: '.vue',
  },
  {
    source: path.join(__dirname, '../composables'),
    destination: path.join(__dirname, '../src/runtime/composables'),
    extension: '.js',
  },
];

directories.forEach(({ source, destination, extension }) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  fs.readdir(source, (err, files) => {
    if (err) {
      console.error(`Error reading source directory ${source}:`, err);
      return;
    }

    files
      .filter((file) => file.endsWith(extension))
      .forEach((file) => {
        const sourceFile = path.join(source, file);
        const destinationFile = path.join(destination, file);

        fs.copyFile(sourceFile, destinationFile, (err) => {
          if (err) {
            console.error(`Error copying file ${file} from ${source} to ${destination}:`, err);
          } else {
            console.log(`Copied ${file} from ${source} to ${destination}`);
          }
        });
      });
  });
});
