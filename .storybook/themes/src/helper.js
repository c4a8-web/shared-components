import { ADDON_ID } from "./constants";

function removeComments(styles) {
  return styles;
}

function addStyles(styles) {
  console.log("addStyles ~ styles", styles);
  const styleTag = document.getElementById(`#${ADDON_ID}`);
  const cleanedStyles = removeComments(styles);

  if (styleTag && styleTag.innerHTML !== styles) {
    styleTag.innerHTML = cleanedStyles;
  } else {
    const newStyle = document.createElement("style");

    newStyle.setAttribute("id", ADDON_ID);
    newStyle.innerHTML = cleanedStyles;

    document.head.appendChild(newStyle);
  }
}

export { addStyles };
