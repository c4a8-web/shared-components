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

function createDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function getAllMocks() {
  glob(`${mockPath}/**/*.json`, function (err, files) {
    if (err) throw err;

    files.forEach((filePath) => {
      let fileName = path.basename(filePath);

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
      let fileName = path.basename(filePath);

      // TODO fix this static build rewrite file extension and change .html to .liquid in static files

      fs.copyFile(filePath, `${destinationPath}${fileName}`, (err) => {
        if (err) throw err;
        console.log(`${fileName} was copied to ${destinationPath}`);
      });

      const liquidFileName = fileName.replace(extensionName, '.liquid');

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
