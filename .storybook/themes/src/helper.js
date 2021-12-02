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

function addBaseClass(theme) {
  const root = document.querySelector('#root');
  const baseSharedClass = 'shared-components';

  if (root) {
    const wrapper = root.firstChild;

    if (wrapper) {
      wrapper.classList = `${baseSharedClass} ${theme}`;
    }
  }
}

export { addStyles, addBaseClass };
