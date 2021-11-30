const fs = require('fs');
const glob = require('glob');

const includesDir = './includes';
const includesReplaceDir = '../includes';
const extensionName = '.html';
const fileName = 'generatedIncludes.js';

function writeFile(content) {
  fs.writeFile(`.storybook/${fileName}`, content, function (err) {
    if (err) {
      throw err;
    }

    console.log('export generated:', content);
  });
}

function getAllIncludes() {
  glob(`${includesDir}/**/*${extensionName}`, function (err, files) {
    if (err) throw err;

    let result = '';
    let allIncludesResult = 'export const AllIncludes = {';
    let exportResult = 'export {';

    files.forEach((filePath) => {
      const camelCaseName = filePath.replace(/\//g, '').replace(/\./g, '').replace(/-/g, '');
      const pathText = filePath.replace(includesDir, includesReplaceDir);
      const importText = `import ${camelCaseName} from '!!raw-loader!${pathText}';`;
      const exportText = `  ${camelCaseName},`;

      result = result + '\n' + importText;
      allIncludesResult = allIncludesResult + '\n' + exportText;
      exportResult = exportResult + '\n' + exportText;
    });

    result =
      result + '\n\n' + allIncludesResult + '\n};\n\n' + exportResult.substring(0, exportResult.length - 1) + '\n};\n';

    writeFile(result);
  });
}

getAllIncludes();
