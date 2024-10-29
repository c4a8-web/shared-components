import { promises } from 'fs';
import { defineNuxtModule, createResolver, addPlugin, addComponentsDir, addTemplate, addLayout } from '@nuxt/kit';

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
    addPlugin(resolve("./runtime/plugin"));
    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(resolve("runtime"), "node-html-parser", "jquery", "slick-carousel");
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
  }
});

export { module as default };
