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

class Templates {
  constructor() {
    this.cache = {};
    this.extensionName = 'liquid';
  }

  async loadTemplateEngine() {
    if (!this.engine) {
      await LoadLiquid;

      const globals = {};
      const scope = this;

      this.partialsPath = window.partialsPath || 'includes/';

      const liquidOptions = {
        partials: [this.partialsPath],
        dynamicPartials: false,
        extname: this.extensionName,
        globals,
        fs: {
          readFileSync(file) {
            const request = new XMLHttpRequest();
            if (
              (request.open('GET', `${scope.partialsPath}${file}`, !1),
              request.send(),
              request.status < 200 || 300 <= request.status)
            ) {
              throw new Error(request.statusText);
            }

            return scope.fixComponent(request.responseText);
          },
          existsSync() {
            return true;
          },
          exists() {
            return true;
          },
          resolve(_, file) {
            return file;
          },
          dirname() {
            return;
          },
          sep() {
            return;
          },
        },
      };

      this.engine = new Liquid(liquidOptions);

      // add map of jekyll filter
      this.engine.filters.impls.jsonify = this.engine.filters?.impls?.json;
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
    // console.log('Templates ~ fixComponent ~ matchAllIncludes', matchAllIncludes);

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
    // console.log('Templates ~ fixInclude ~ includeText', includeText);

    const lastIndex = include.lastIndexOf(',');

    include = include.substr(0, lastIndex) + include.substr(lastIndex + 1);
    include = include.replace('{%,', '{%');

    return include;
  }
}

export default Templates;
