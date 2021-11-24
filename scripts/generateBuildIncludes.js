const path = require("path");
const glob = require("glob");
const fs = require("fs");

const includesDir = "includes";
const includesPath = `./${includesDir}`;
const destinationDir = "./storybook-static/";
const destinationPath = `${destinationDir}${includesDir}/`;
const extensionName = ".html";

function createDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function getAllIncludes() {
  glob(`${includesPath}/**/*${extensionName}`, function (err, files) {
    if (err) throw err;

    files.forEach((filePath) => {
      let fileName = path.basename(filePath);

      fs.copyFile(filePath, `${destinationPath}${fileName}`, (err) => {
        if (err) throw err;
        console.log(`${fileName} was copied to ${destinationPath}`);
      });
    });
  });
}

createDir(destinationPath);
getAllIncludes();
