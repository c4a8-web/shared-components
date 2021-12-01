export const hrefTo = (path, variant) => {
  const basePath = '/iframe.html?id=';
  const baseArgs = '&viewMode=story&args=';

  let url = `${path.replace(/\//g, '-').toLowerCase()}--${variant.toLowerCase()}`;

  return `${basePath}${url}${baseArgs}`;
};
