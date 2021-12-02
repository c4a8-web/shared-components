var fs = require('fs');

const includesPath = '.';
const servicesPath = '.';

// If you add a new middleware, you need to make sure it works with the static build of storybook

module.exports = function expressMiddleware(app) {
  app.use(function (req, res, next) {
    if (/mock\/[a-zA-Z0-9-_]*.json/.test(req.url)) {
      res.setHeader('Content-Type', 'application/json');
      console.log('[POST => GET] : ' + req.url);

      try {
        const result = fs.readFileSync(`${servicesPath}${req.url}`, 'utf8');

        req.method = 'GET';

        res.send(JSON.parse(result));
      } catch (error) {
        console.log('error', error);
        res.send(`error ${req.url} could not be loaded`);
      }
    } else if (/\.html/.test(req.url) && /^\/includes\//.test(req.url)) {
      res.setHeader('Content-Type', 'text/plain');

      try {
        const result = fs.readFileSync(`${includesPath}${req.url}`, 'utf8');

        res.send(result);
      } catch (error) {
        console.log('error', error);
        res.send(`error ${req.url} could not be loaded`);
      }
    }

    next();
  });
};
