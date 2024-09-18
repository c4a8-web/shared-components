export const hrefTo = (path, variant) => {
  const basePath = "iframe.html?id=";
  const baseArgs = "&viewMode=story&args=";
  const pathSplit = path.split("/");
  const baseVariant = variant ? variant : pathSplit[pathSplit.length - 1];

  let url = `${path.replace(/\//g, "-").toLowerCase()}--${baseVariant.toLowerCase()}`;

  return `${basePath}${url}${baseArgs}`;
};
