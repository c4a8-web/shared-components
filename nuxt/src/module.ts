import { defineNuxtModule, addPlugin, addComponentsDir, createResolver, addComponent } from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'shared-components-nuxt',
    configKey: 'sharedComponentsNuxt',
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // addPlugin(resolve('./runtime/plugin'));

    _nuxt.options.css.push(resolve('./styles/index.min.css'));

    addComponentsDir({
      path: resolve('./runtime/components'),
    });
  },
});
