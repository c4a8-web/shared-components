const path = require('path');
const glob = require('glob');
const fs = require('fs');

const includesWrapperPath = '../../_includes/';
const layoutsDir = 'layouts';
const includesDir = 'includes';
const includesPath = `./${includesDir}`;
const extensionName = '.html';

function copyAllWrapperIncludes() {
  glob(`${includesPath}/**/*${extensionName}`, function (err, files) {
    if (err) throw err;

    files.forEach((filePath) => {
      const fileName = path.basename(filePath);

      let fileContent;
      let destinationPath;

      if (filePath.indexOf(layoutsDir) !== -1) {
        // fileContent = `{% include shared-components/includes/${layoutsDir}/${fileName} %}`;
        // destinationPath = `../../_${layoutsDir}/`;
        return;
      } else {
        fileContent = `{% include shared-components/includes/${fileName} %}`;
        destinationPath = includesWrapperPath;
      }

      fs.writeFile(`${destinationPath}${fileName}`, fileContent, (err) => {
        if (err) throw err;
        console.log(`${fileName} was generated in ${destinationPath}`);
      });
    });
  });
}

copyAllWrapperIncludes();
