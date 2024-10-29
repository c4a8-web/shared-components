import { promises as fs } from 'fs';
import { defineNuxtModule, addPlugin, addComponentsDir, createResolver, addTemplate, addLayout } from '@nuxt/kit';

import type { NuxtTemplate } from '@nuxt/schema';

export default defineNuxtModule({
  meta: {
    name: 'shared-components',
    configKey: 'sharedComponents',
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    console.log('Shared components module setup');

    const runtimeDir = resolve(__dirname, './runtime');

    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(runtimeDir, 'node-html-parser', 'jquery', 'slick-carousel');

    _nuxt.options.css.push(resolve('./styles/index.min.css'));

    if (_options) {
      const { theme } = _options;

      _nuxt.options.css.push(resolve(`./styles/${theme}.min.css`));
    }

    addComponentsDir({
      path: resolve('./runtime/components'),
    });

    const layoutsDir = resolve('./runtime/components/layouts');

    const layoutFiles = await fs.readdir(layoutsDir);

    layoutFiles.forEach((file) => {
      if (file.endsWith('.vue')) {
        const name = file.replace('.vue', '');
        const template = addTemplate<NuxtTemplate>({
          src: resolve(`${layoutsDir}/${file}`),
          write: true,
        });

        addLayout(template, name);
      }
    });

    addPlugin(resolve('./runtime/plugin'));

    // _nuxt.hook('autoImports:dirs', (dirs) => {
    //   dirs.push(resolve(runtimeDir, 'composables'))
    // })
  },
});
