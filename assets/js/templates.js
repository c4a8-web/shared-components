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
    this.extensionName = 'liquid';
  }

  async loadTemplateEngine() {
    if (!this.engine) {
      await LoadLiquid;

      const globals = {};

      this.partialsPath = window.partialsPath || 'includes/';

      const liquidOptions = {
        partials: [this.partialsPath],
        dynamicPartials: false,
        extname: this.extensionName,
        globals,
      };

      /*
      const oldRenderSync = Liquid.prototype.renderSync;

      Liquid.prototype.renderSync = function (tpl, scope) {
        console.log('Templates ~ loadTemplateEngine ~ tpl', tpl);
        console.log(this);

        const fn = this;

        console.log('before rendersync');
        // oldRenderSync(tpl, scope).bind(this.prototype);

        return function (tpl, scope) {
          try {
            return fn.apply(this, arguments);
          } catch (ex) {
            ErrorHandler.Exception(ex);
          }
        };
      };

      */

      this.engine = new Liquid(liquidOptions);

      // add map of jekyll filter
      this.engine.filters.impls.jsonify = this.engine.filters?.impls?.json;

      /*

      const newEngine = new Liquid(liquidOptions);
      const newParse = newEngine.tags.impls.include.parse.bind(this.engine.tags.impls.include);

      const newParseFunction = function (token) {
        this.liquid = newEngine;
        console.log('Templates ~ newParseFunction ~ newEngine', newEngine);
        console.log('over');

        const fixedToken = token;

        // fixedToken.content = `include 'cta.liquid', nocheinneuer='ABC', text=include.ctaText, mirnichtegal='ABC'`;

        newParse(fixedToken);

        // fix hash

        // this.hash.hash = { nocheinneuer: 'moep', text: 'HAHAHA' };

        console.log('AFTER', this.hash);
      };
      */

      // this.engine.tags.impls.include.parse = newParseFunction.bind(this.engine.tags.impls.include);
    }
  }

  async load(template, data) {
    await this.loadTemplateEngine();

    if (this.cache[template]) {
      return this.cache[template].then((component) => {
        return this.getHtml(component, data);
      });
    } else {
      const templateUrl = `${this.partialsPath}${template}.${this.extensionName}`;

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
      const tpl = this.engine.parse(this.fixComponent(component));

      // if (StaticExpands[template]) {
      //   for (let i = 0; i < StaticExpands[template].length; i++) {
      //     const expand = StaticExpands[template][i];

      //     let newInclude = {};
      //     const filteredKeys = Object.keys(data).filter((key) => key.indexOf(expand) !== -1);

      //     if (filteredKeys.length) {
      //       filteredKeys.forEach((key) => {
      //         const cleanedKey = key.replace(expand, '').toLocaleLowerCase();

      //         newInclude[cleanedKey] = data[key];
      //       });

      //       data[expand] = newInclude;
      //     }
      //   }
      // }

      const html = this.engine.renderSync(tpl, {
        include: data,
      });

      resolve(html);
    });

    return promise;
  }

  fixComponent(text) {
    let fixedText = text.replace(/\.html/g, `.${this.extensionName}`);

    const includesRegex = new RegExp(/{%(\s)*include([\S\s]*?)%}/, 'g');
    const matchAllIncludes = fixedText.match(includesRegex);

    if (matchAllIncludes) {
      for (let i = 0; i < matchAllIncludes.length; i++) {
        const includeText = matchAllIncludes[i];

        fixedText = fixedText.replace(includeText, this.fixInclude(includeText));
      }
    }

    return fixedText;
  }

  fixInclude(includeText) {
    let include = includeText.replace(/\n/g, ',').replace(/=/g, ':');

    const lastIndex = include.lastIndexOf(',');

    include = include.substr(0, lastIndex) + include.substr(lastIndex + 1);
    include = include.replace('{%,', '{%');

    return include;
  }
}

export default Templates;
