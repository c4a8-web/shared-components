import { ADDON_ID } from './constants';

function removeComments(styles) {
  return styles ? styles.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') : styles;
}

function addStyles(styles) {
  const styleTag = document.getElementById(`${ADDON_ID}`);
  const cleanedStyles = removeComments(styles);

  if (styleTag) {
    if (styleTag.innerHTML !== styles) {
      styleTag.innerHTML = cleanedStyles;
    }
  } else {
    const newStyle = document.createElement('style');

    newStyle.setAttribute('id', ADDON_ID);
    newStyle.innerHTML = cleanedStyles;

    document.head.appendChild(newStyle);
  }
}

function addBaseClass({ theme, docs = false }) {
  const root = docs ? document.getElementById('docs-root') : document.getElementById('root');
  const baseSharedClass = 'shared-components';

  if (root) {
    const elements = docs ? root.querySelectorAll('.docs-story') : root.firstChild;

    if (!elements) return;
    if (elements.length === undefined) return elements.classList.add(...[baseSharedClass, theme]);
    if (elements.length === 0) return;

    elements.forEach((element) => {
      element.classList.add(...[baseSharedClass, theme]);
    });
  }
}

function addBaseClasses(theme) {
  addBaseClass({ theme });
  addBaseClass({ theme, docs: true });
}

export { addStyles, addBaseClass, addBaseClasses };
