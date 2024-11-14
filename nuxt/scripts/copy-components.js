import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  {
    source: path.join(__dirname, '../components'),
    destination: path.join(__dirname, '../src/runtime/components'),
    extensions: ['.vue'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../server'),
    destination: path.join(__dirname, '../src/runtime/server'),
    extensions: ['.ts', '.js'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../composables'),
    destination: path.join(__dirname, '../src/runtime/composables'),
    extensions: ['.js'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../pages'),
    destination: path.join(__dirname, '../src/runtime/pages'),
    extensions: ['.vue'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../utils'),
    destination: path.join(__dirname, '../src/runtime/utils'),
    extensions: ['.js'],
    recursive: true,
  },
];

const copyFiles = (source, destination, extensions, recursive) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  } else {
    const files = fs.readdirSync(destination);
    files.forEach((file) => {
      const destinationFile = path.join(destination, file);
      fs.rmSync(destinationFile, { recursive: true, force: true });
    });
  }

  const files = fs.readdirSync(source, { withFileTypes: true });
  files.forEach((file) => {
    const sourceFile = path.join(source, file.name);
    const destinationFile = path.join(destination, file.name);

    if (file.isDirectory() && recursive) {
      copyFiles(sourceFile, destinationFile, extensions, recursive);
    } else if (file.isFile() && extensions.some((ext) => file.name.endsWith(ext))) {
      try {
        fs.copyFileSync(sourceFile, destinationFile);
      } catch (err) {
        console.error(`Error copying file ${file.name} from ${source} to ${destination}:`, err);
      }
    }
  });
};

directories.forEach(({ source, destination, extensions, recursive }) => {
  copyFiles(source, destination, extensions, recursive);
});
