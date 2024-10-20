import { defineNuxtModule, createResolver, addComponentsDir, addTemplate, addLayout } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "shared-components-nuxt",
    configKey: "sharedComponentsNuxt"
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  setup(_options, _nuxt) {
    console.log("\u{1F680} ~ setup ~ _options:", _options);
    const { resolve } = createResolver(import.meta.url);
    _nuxt.options.css.push(resolve("./styles/index.min.css"));
    if (_options) {
      const { theme } = _options;
      _nuxt.options.css.push(resolve(`./styles/${theme}.min.css`));
    }
    addComponentsDir({
      path: resolve("./runtime/components")
    });
    const template = addTemplate({
      src: resolve("./runtime/components/layouts/default.vue"),
      write: true
    });
    addLayout(template, "default");
  }
});

export { module as default };
