const isSameDomain = (styleSheet) => {
  if (!styleSheet.href) {
    return true;
  }

  return styleSheet.href.indexOf(window.location.origin) === 0;
};

const isStyleRule = (rule) => rule.type === 1;

const isCustomProperty = (name) => {
  return name.indexOf('--') === 0;
};

const getCSSCustomPropIndex = () =>
  [...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
      finalArr.concat(
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
          const props = [...rule.style]
            .map((propName) => [propName.trim(), rule.style.getPropertyValue(propName).trim()])
            .filter(([propName]) => isCustomProperty(propName));

          return [...propValArr, ...props];
        }, [])
      ),
    []
  );

const getCSSCustomPropValue = (array, value) => {
  const index = array.findIndex((item) => item[0] === value);

  let trueValue = array[index] && array[index][1];
  let cleanValue = trueValue.replace('var(', '').replace(')', '');

  if (isCustomProperty(cleanValue)) {
    trueValue = getCSSCustomPropValue(array, cleanValue);
  }

  return trueValue;
};

const replaceCssProperties = (html) => {
  const list = getCSSCustomPropIndex();

  list.forEach((property) => {
    const propertyName = property[0];
    const propertyTerm = `var(${propertyName})`;
    const propertyValue = getCSSCustomPropValue(list, propertyName);

    html = html.replaceAll(`${propertyTerm}`, `${propertyValue}`);
  });

  return html;
};

const createFile = (filename, content) => {
  const blob = new Blob([content], {
    type: 'text/plain',
  });

  const a = document.createElement('a');

  a.href = window.URL.createObjectURL(blob);
  a.download = filename;
  a.click();
};

const downloadHtml = (e) => {
  const root = document.querySelector('#root');

  if (root) {
    const fileType = e;
    const element = root.querySelector('svg');
    const html = replaceCssProperties(element.outerHTML);

    if (!element.dataset.name) return;

    const fileName = `${element.dataset.name}.${fileType}`;

    createFile(fileName, html);
  }
};

export { downloadHtml };
