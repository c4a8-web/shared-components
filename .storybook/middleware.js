var fs = require('fs');

const includesPath = '.';
const servicesPath = '.';
const fixedExtension = '.template';
const extensionRegex = new RegExp(`${fixedExtension}`);

// If you add a new middleware, you need to make sure it works with the static build of storybook

module.exports = function expressMiddleware(app) {
  app.use(function (req, res, next) {
    if (/mock\/[a-zA-Z0-9-_]*.(json|xml)/.test(req.url)) {
      const isXml = /\.xml/.test(req.url);
      const contentType = isXml ? 'application/xml' : 'application/json';

      res.setHeader('Content-Type', contentType);
      console.log('[POST => GET] : ' + req.url);

      try {
        // try to fake the status code here
        const result = fs.readFileSync(`${servicesPath}${req.url}`, 'utf8');

        req.method = 'GET';

        res.send(!isXml ? JSON.parse(result) : result);
      } catch (error) {
        console.log('error', error);
        res.send(`error ${req.url} could not be loaded`);
      }
    } else if (
      (/\.html/.test(req.url) && /^\/includes\//.test(req.url)) ||
      (extensionRegex.test(req.url) && /^\/includes\//.test(req.url))
    ) {
      res.setHeader('Content-Type', 'text/plain');

      console.log('Get Template: ' + req.url);

      try {
        const result = fs.readFileSync(`${includesPath}${req.url.replace(fixedExtension, '.html')}`, 'utf8');

        res.send(result);
      } catch (error) {
        console.log('error', error);
        res.send(`error ${req.url} could not be loaded`);
      }
    }

    next();
  });
};
