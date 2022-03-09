// import './lib/vue/vue.global.js';
import { icon, cta, jobListDetail, modal, headline, modalApplication, form } from './static-templates.js';
// import Cta from './vue/cta.js';

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
    this.extensionName = 'template';
  }

  getStaticTemplate(file) {
    let template = null;

    // const vApp = window.vApp;

    switch (file) {
      case 'icon.template':
        template = icon;
        break;
      case 'job-list-detail':
      case 'job-list-detail.template':
        template = jobListDetail;
        break;
      case 'cta.template':
        // let vNode = Vue.createVNode(Cta, { text: 'hallo', button: true });

        // vNode.appContext = { ...vApp._context };

        // Vue.render(vNode, vApp._container);

        template = cta;
        break;
      case 'modal.template':
        template = modal;
        break;
      case 'headline.template':
        template = headline;
        break;
      case 'modal-application.template':
        template = modalApplication;
        break;
      case 'form.template':
        template = form;
        break;
      default:
    }

    return template;
  }

  async loadTemplateEngine() {
    if (!this.engine) {
      await LoadLiquid;

      const globals = {};
      const scope = this;

      this.fileCache = {};
      this.partialsPath = window.partialsPath || 'includes/';

      const liquidOptions = {
        partials: [this.partialsPath],
        dynamicPartials: false,
        extname: this.extensionName,
        globals,
        fs: {
          readFileSync(file) {
            const name = file.split('.')[0];

            if (scope.fileCache[name]) {
              return scope.fileCache[name];
            } else {
              const request = new XMLHttpRequest();
              const staticTemplate = scope.getStaticTemplate(file);
              // console.log('Templates ~ readFileSync ~ staticTemplate', staticTemplate);

              if (staticTemplate) {
                const fixedComponent = scope.fixComponent(staticTemplate);

                scope.fileCache[name] = fixedComponent;

                return fixedComponent;
              } else {
                if (
                  (request.open('GET', `${scope.partialsPath}${file}`, !1),
                  request.send(),
                  request.status < 200 || 300 <= request.status)
                ) {
                  throw new Error(request.statusText);
                }

                const fixedComponent = scope.fixComponent(request.responseText);

                scope.fileCache[name] = fixedComponent;

                return fixedComponent;
              }
            }
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

      this.engine = this.rewriteInclude(this.engine);

      // add map of jekyll filter
      this.engine.filters.impls.jsonify = this.engine.filters?.impls?.json;
    }
  }

  async load(template, data) {
    await this.loadTemplateEngine();

    const staticTemplate = this.getStaticTemplate(template);

    if (staticTemplate) {
      return this.getHtml(staticTemplate, data);
    }

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

  setPreRender(method) {
    if (typeof method !== 'function') return null;

    this.preRender = method;
  }

  getHtml(component, data) {
    const promise = new Promise((resolve) => {
      let wait = 0;

      if (this.preRender) {
        this.preRender();
        this.preRender = null;

        wait = 50;
      }

      setTimeout(() => {
        const tpl = this.engine.parse(this.fixComponent(component));
        const html = this.engine.renderSync(tpl, data);

        resolve(html);
      }, wait);
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

  rewriteInclude(engine) {
    const oldEval = engine._evalValue.bind(engine);

    engine._evalValue = function (str, ctx) {
      let newStr = str.replace('include.', '');

      return oldEval(newStr, ctx);
    };

    return engine;
  }
}

export default Templates;
