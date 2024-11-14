import { promises } from 'fs';
import { defineNuxtModule, createResolver, installModule, addComponentsDir, addTemplate, addLayout, addPlugin, extendPages, addImportsDir } from '@nuxt/kit';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const module = defineNuxtModule({
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
    name: "shared-components",
    configKey: "sharedComponents",
    compatibility: {
      nuxt: ">=3.0.0"
    }
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const { theme } = _options;
    console.log("\u2714 Shared components module setup");
    _nuxt.options.runtimeConfig.public.sharedComponents = _options || {};
    const defaultSitemapOptions = {
      discoverImages: false,
      discoverVideos: false,
      autoI18n: false,
      sitemapName: "sitemap.xml",
      credits: false,
      sitemaps: false,
      xslColumns: [
        { label: "URL", width: "75%" },
        { label: "Last Modified", select: "sitemap:lastmod", width: "25%" }
        // { label: 'Hreflangs', select: 'count(xhtml:link)', width: '25%' },
      ]
    };
    const sitemapOptions = {
      ...defaultSitemapOptions,
      ..._nuxt.options.sitemap
    };
    _nuxt.options.sitemap = sitemapOptions;
    await installModule("@nuxtjs/sitemap");
    const runtimeDir = resolve(__dirname, "./runtime");
    const optimizeDeps = [runtimeDir, "node-html-parser", "jquery", "slick-carousel"];
    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(...optimizeDeps);
    _nuxt.options.vite.optimizeDeps ||= {};
    _nuxt.options.vite.optimizeDeps.include ||= [];
    _nuxt.options.vite.optimizeDeps.include.push(...optimizeDeps);
    _nuxt.options.css.push(resolve("./styles/index.min.css"));
    if (theme) {
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
    extendPages((pages) => {
      pages.unshift({
        name: "slug-all",
        path: "/:slug(.*)*",
        file: resolve("./runtime/pages/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-events",
        path: "/events/:slug(.*)*",
        file: resolve("./runtime/pages/events/[...slug].vue")
      });
    });
    addImportsDir(resolve("./runtime/composables"));
  }
});

export { module as default };
