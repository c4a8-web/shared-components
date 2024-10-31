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
    recursive: true,
  },
  {
    source: path.join(__dirname, '../composables'),
    destination: path.join(__dirname, '../src/runtime/composables'),
    extension: '.js',
    recursive: true,
  },
  {
    source: path.join(__dirname, '../pages'),
    destination: path.join(__dirname, '../src/runtime/pages'),
    extension: '.vue',
    recursive: true,
  },
  {
    source: path.join(__dirname, '../utils'),
    destination: path.join(__dirname, '../src/runtime/utils'),
    extension: '.js',
    recursive: true,
  },
];

const copyFiles = (source, destination, extension, recursive) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  fs.readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading source directory ${source}:`, err);
      return;
    }

    files.forEach((file) => {
      const sourceFile = path.join(source, file.name);
      const destinationFile = path.join(destination, file.name);

      if (file.isDirectory() && recursive) {
        copyFiles(sourceFile, destinationFile, extension, recursive);
      } else if (file.isFile() && file.name.endsWith(extension)) {
        fs.copyFile(sourceFile, destinationFile, (err) => {
          if (err) {
            console.error(`Error copying file ${file.name} from ${source} to ${destination}:`, err);
          } else {
            // console.log(`Copied ${file.name} from ${source} to ${destination}`);
          }
        });
      }
    });
  });
};

directories.forEach(({ source, destination, extension, recursive }) => {
  copyFiles(source, destination, extension, recursive);
});
