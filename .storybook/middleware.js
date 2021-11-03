var fs = require("fs");

const includesPath = ".";

module.exports = function expressMiddleware(app) {
  app.use(function (req, res, next) {
    if (/\.html/.test(req.url) && /^\/includes\//.test(req.url)) {
      res.setHeader("Content-Type", "text/plain");

      try {
        const result = fs.readFileSync(`${includesPath}${req.url}`, "utf8");

        res.send(result);
      } catch (error) {
        console.log("error", error);
        res.send(`error ${req.url} could not be loaded`);
      }
    }

    next();
  });
};
