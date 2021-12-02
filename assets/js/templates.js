let Liquid;

const LoadLiquid = import('./lib/liquid.browser.min.js').then((module) => {
  if (module.Liquid) {
    Liquid = module.Liquid;
  } else if (window.liquidjs?.Liquid) {
    Liquid = window.liquidjs.Liquid;
  } else {
    console.error('LiquidJS was not loaded');
  }
});

// TODO generate this one
const StaticExpands = {
  'job-list-detail': ['cta'],
};

class Templates {
  constructor() {
    this.cache = {};
  }

  async loadTemplateEngine() {
    if (!this.engine) {
      await LoadLiquid;

      const globals = {
        sharedComponents: true,
      };

      this.partialsPath = window.partialsPath || 'includes/';

      this.engine = new Liquid({
        partials: [this.partialsPath],
        dynamicPartials: false,
        extname: 'html',
        globals,
      });

      // add map of jekyll filter
      this.engine.filters.impls.jsonify = this.engine.filters?.impls?.json;
      console.log('Templates ~ loadTemplateEngine ~ this.engine', this.engine);
    }
  }

  async load(template, data) {
    await this.loadTemplateEngine();

    if (this.cache[template]) {
      return this.cache[template].then((component) => {
        return this.getHtml(component, data);
      });
    } else {
      const templateUrl = `${this.partialsPath}${template}.html`;

      this.cache[template] = this.createCache();

      return fetch(templateUrl)
        .then((response) => response.text())
        .then((component) => {
          this.cache[template].resolve(component);

          return this.getHtml(component, data, template);
        })
        .catch((error) => {
          console.error('Templates ~ fetch ~ error', error);
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

  getHtml(component, data, template) {
    const promise = new Promise((resolve) => {
      const tpl = this.engine.parse(component);

      if (StaticExpands[template]) {
        for (let i = 0; i < StaticExpands[template].length; i++) {
          const expand = StaticExpands[template][i];

          let newInclude = {};
          const filteredKeys = Object.keys(data).filter((key) => key.indexOf(expand) !== -1);

          if (filteredKeys.length) {
            filteredKeys.forEach((key) => {
              const cleanedKey = key.replace(expand, '').toLocaleLowerCase();

              newInclude[cleanedKey] = data[key];
            });

            data[expand] = newInclude;
          }
        }
      }

      const html = this.engine.renderSync(tpl, {
        include: data,
      });

      resolve(html);
    });

    return promise;
  }
}

export default Templates;
