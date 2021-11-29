let Liquid;

const LoadLiquid = import("./lib/liquid.browser.min.js").then((module) => {
  if (module.Liquid) {
    Liquid = module.Liquid;
  } else if (window.liquidjs?.Liquid) {
    Liquid = window.liquidjs.Liquid;
  } else {
    console.error("LiquidJS was not loaded");
  }
});

class Templates {
  constructor() {
    this.cache = {};
  }

  async loadTemplateEngine() {
    if (!this.engine) {
      await LoadLiquid;

      const partialsPath = window.partialsPath || "includes";

      this.engine = new Liquid({
        partials: [partialsPath],
        dynamicPartials: false,
        extname: "html",
      });
    }
  }

  async load(template, data) {
    await this.loadTemplateEngine();

    if (this.cache[template]) {
      return this.cache[template].then((component) => {
        return this.getHtml(component, data);
      });
    } else {
      const templateUrl = `includes/${template}.html`;

      this.cache[template] = this.createCache();

      return fetch(templateUrl)
        .then((response) => response.text())
        .then((component) => {
          this.cache[template].resolve(component);
          return this.getHtml(component, data);
        })
        .catch((error) => {
          console.error("Templates ~ fetch ~ error", error);
        });
    }
  }

  createCache() {
    let resolve,
      promise = new Promise((innerResolve) => {
        resolve = innerResolve;
      });

    promise.resolve = resolve;

    return promise;
  }

  getHtml(component, data) {
    const promise = new Promise((resolve) => {
      const tpl = this.engine.parse(component);
      const html = this.engine.renderSync(tpl, {
        include: data,
      });

      resolve(html);
    });

    return promise;
  }
}

export default Templates;
