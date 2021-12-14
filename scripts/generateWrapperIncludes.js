const path = require('path');
const glob = require('glob');
const fs = require('fs');

const includesWrapperPath = '../../_includes/';
const includesDir = 'includes';
const includesPath = `./${includesDir}`;
const extensionName = '.html';

function copyAllWrapperIncludes() {
  glob(`${includesPath}/**/*${extensionName}`, function (err, files) {
    if (err) throw err;

    files.forEach((filePath) => {
      const fileName = path.basename(filePath);
      const fileContent = `{% include shared-components/includes/${fileName} %}`;

      fs.writeFile(`${includesWrapperPath}${fileName}`, fileContent, (err) => {
        if (err) throw err;
        console.log(`${fileName} was generated in ${includesWrapperPath}`);
      });
    });
  });
}

copyAllWrapperIncludes();
