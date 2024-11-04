import { promises as fs } from 'fs';
import {
  defineNuxtModule,
  addPlugin,
  addImportsDir,
  addComponentsDir,
  createResolver,
  addTemplate,
  addLayout,
  extendPages,
} from '@nuxt/kit';

import type { NuxtTemplate } from '@nuxt/schema';

export default defineNuxtModule({
  // TODO prereder collections
  // https://nuxt.com/docs/getting-started/prerendering#prerenderroutes-nuxt-hook
  // hooks: {
  //   async "prerender:routes"(ctx) {
  //     const { pages } = await fetch("https://api.some-cms.com/pages").then(
  //       (res) => res.json(),
  //     );
  //     for (const page of pages) {
  //       ctx.routes.add(`/${page.name}`);
  //     }
  //   },
  // },
  meta: {
    name: 'shared-components',
    configKey: 'sharedComponents',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    console.log('✔ Shared components module setup');

    const runtimeDir = resolve(__dirname, './runtime');

    const optimizeDeps = [runtimeDir, 'node-html-parser', 'jquery', 'slick-carousel'];

    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(...optimizeDeps);

    _nuxt.options.vite.optimizeDeps ||= {};
    _nuxt.options.vite.optimizeDeps.include ||= [];
    _nuxt.options.vite.optimizeDeps.include.push(...optimizeDeps);

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

    extendPages((pages) => {
      pages.unshift({
        name: 'slug-all',
        path: '/:slug(.*)*',
        file: resolve('./runtime/pages/[...slug].vue'),
      });
    });

    extendPages((pages) => {
      pages.unshift({
        name: 'slug-events',
        path: '/events/:slug(.*)*',
        file: resolve('./runtime/pages/events/[...slug].vue'),
      });
    });

    addImportsDir(resolve('./runtime/composables'));
  },
});
