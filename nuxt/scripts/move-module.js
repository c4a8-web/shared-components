import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../dist');
const targetDir = path.join(__dirname, '../../dist');

const cleanDirectory = (directory) => {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const currentPath = path.join(directory, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        cleanDirectory(currentPath);
        fs.rmdirSync(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
  }
};

const copyDirectory = (source, destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  fs.readdirSync(source).forEach((file) => {
    const sourceFile = path.join(source, file);
    const destinationFile = path.join(destination, file);

    if (fs.lstatSync(sourceFile).isDirectory()) {
      copyDirectory(sourceFile, destinationFile);
    } else {
      fs.copyFileSync(sourceFile, destinationFile);
    }
  });
};

cleanDirectory(targetDir);

copyDirectory(sourceDir, targetDir);

console.log(`Cleaned ${targetDir} and copied contents from ${sourceDir}`);
