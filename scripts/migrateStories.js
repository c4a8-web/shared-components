const fs = require('fs');
const path = require('path');
const glob = require('glob');

const migratedFilesLogPath = path.join(__dirname, 'migratedStories.log');

let migratedFiles = new Set();

const loadMigratedFiles = () => {
  if (fs.existsSync(migratedFilesLogPath)) {
    const logContents = fs.readFileSync(migratedFilesLogPath, 'utf-8');

    logContents.split('\n').forEach((fileName) => {
      if (fileName) migratedFiles.add(fileName);
    });
  }
};

const logMigratedFile = (filePath) => {
  const fileName = path.basename(filePath);

  fs.appendFileSync(migratedFilesLogPath, fileName + '\n', 'utf-8');

  migratedFiles.add(fileName);
};

const convertFileStructure = (filePath) => {
  const fileName = path.basename(filePath);

  if (migratedFiles.has(fileName)) return;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // let result = data.replace(
    //   /import {[^}]*} from '\.\.\/\.\.\/\.storybook\/templates';/g,
    //   "import { getTitle, getDefaultSettings } from '../../.storybook/templates';"
    // );
    let result = data.replace(
      /import {([^}]*(?:createStory|getArgTypes)[^}]*)} from '([^']+)';/g,
      (_, imports, path) => {
        let newImports = imports.replace(/createStory,? ?|getArgTypes,? ?/g, '');

        if (!/getTitle/.test(newImports)) newImports += ', getTitle';
        if (!/getDefaultSettings/.test(newImports)) newImports += ', getDefaultSettings';

        newImports = newImports.replace(/, $/, '').replace(/^, /, '').replace(/  +/, ' ');

        return `import {${newImports}} from '${path}';`;
      }
    );

    result = result.replace(
      /export default getArgTypes\(([\s\S]*?)\);/g,
      'export default {\n  getDefaultSettings: getArgTypes($1),\n};'
    );
    result = result.replace(/getDefaultSettings: getArgTypes\(\{/g, '...getDefaultSettings({');
    result = result.replace(/\.\.\.options,/g, 'options,\ncomponent,');
    result = result.replace(/createStory\(component, (\{[\s\S]*?\})\)/g, '{ args: $1 }');

    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err);
      } else {
        console.log(`File converted: ${filePath}`);
      }
    });

    logMigratedFile(filePath);
  });
};

loadMigratedFiles();

const pattern = path.join(__dirname, '../stories/**/', '*.stories.js');
glob(pattern, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  files.forEach(convertFileStructure);
});
