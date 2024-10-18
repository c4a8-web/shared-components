import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit';

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
    const { resolve } = createResolver(import.meta.url);
    _nuxt.options.css.push(resolve("./styles/index.min.css"));
    addComponentsDir({
      path: resolve("./runtime/components")
    });
  }
});

export { module as default };
