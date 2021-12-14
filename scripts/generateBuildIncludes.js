const path = require('path');
const glob = require('glob');
const fs = require('fs');

const mockDir = 'mock';
const mockPath = `./${mockDir}`;
const includesDir = 'includes';
const includesPath = `./${includesDir}`;
const destinationDir = './storybook-static/';
const destinationPath = `${destinationDir}${includesDir}/`;
const destinationMockPath = `${destinationDir}${mockDir}/`;
const extensionName = '.html';
const fixedExtension = '.template';

function createDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function getAllMocks() {
  glob(`${mockPath}/**/*.json`, function (err, files) {
    if (err) throw err;

    files.forEach((filePath) => {
      const fileName = path.basename(filePath);

      fs.copyFile(filePath, `${destinationMockPath}${fileName}`, (err) => {
        if (err) throw err;
        console.log(`${fileName} was copied to ${destinationMockPath}`);
      });
    });
  });
}

function getAllIncludes() {
  glob(`${includesPath}/**/*${extensionName}`, function (err, files) {
    if (err) throw err;

    files.forEach((filePath) => {
      const fileName = path.basename(filePath);

      fs.copyFile(filePath, `${destinationPath}${fileName}`, (err) => {
        if (err) throw err;
        console.log(`${fileName} was copied to ${destinationPath}`);
      });

      const liquidFileName = fileName.replace(extensionName, fixedExtension);

      fs.copyFile(filePath, `${destinationPath}${liquidFileName}`, (err) => {
        if (err) throw err;
        console.log(`${liquidFileName} was copied to ${destinationPath}`);
      });
    });
  });
}

createDir(destinationPath);
getAllIncludes();
createDir(destinationMockPath);
getAllMocks();
