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
    const resolver = createResolver(import.meta.url);

    // addPlugin(resolver.resolve('./runtime/plugin'));

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
    });
  },
});
