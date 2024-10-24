import { defineNuxtModule, addPlugin, addComponentsDir, createResolver, addTemplate, addLayout } from '@nuxt/kit';

import type { NuxtTemplate } from '@nuxt/schema';

export default defineNuxtModule({
  meta: {
    name: 'shared-components-nuxt',
    configKey: 'sharedComponentsNuxt',
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addPlugin(resolve('./runtime/plugin'));

    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(resolve('runtime'), 'node-html-parser', 'jquery', 'slick-carousel');

    _nuxt.options.css.push(resolve('./styles/index.min.css'));

    if (_options) {
      const { theme } = _options;

      _nuxt.options.css.push(resolve(`./styles/${theme}.min.css`));
    }

    addComponentsDir({
      path: resolve('./runtime/components'),
    });

    const template = addTemplate<NuxtTemplate>({
      src: resolve('./runtime/components/layouts/default.vue'),
      write: true,
    });

    addLayout(template, 'default');
  },
});
