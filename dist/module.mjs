import { promises } from 'fs';
import { defineNuxtModule, createResolver, addComponentsDir, addTemplate, addLayout, addPlugin } from '@nuxt/kit';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const module = defineNuxtModule({
  meta: {
    name: "shared-components",
    configKey: "sharedComponents"
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    console.log("Shared components module setup");
    const runtimeDir = resolve(__dirname, "./runtime");
    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(runtimeDir, "node-html-parser", "jquery", "slick-carousel");
    _nuxt.options.vite.optimizeDeps ||= {};
    _nuxt.options.vite.optimizeDeps.include ||= [];
    _nuxt.options.vite.optimizeDeps.include.push("node-html-parser", "jquery", "slick-carousel");
    _nuxt.options.css.push(resolve("./styles/index.min.css"));
    if (_options) {
      const { theme } = _options;
      _nuxt.options.css.push(resolve(`./styles/${theme}.min.css`));
    }
    addComponentsDir({
      path: resolve("./runtime/components")
    });
    const layoutsDir = resolve("./runtime/components/layouts");
    const layoutFiles = await promises.readdir(layoutsDir);
    layoutFiles.forEach((file) => {
      if (file.endsWith(".vue")) {
        const name = file.replace(".vue", "");
        const template = addTemplate({
          src: resolve(`${layoutsDir}/${file}`),
          write: true
        });
        addLayout(template, name);
      }
    });
    addPlugin(resolve("./runtime/plugin"));
  }
});

export { module as default };
