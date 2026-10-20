import { promises } from 'fs';
import { pathToFileURL } from 'url';
import { join } from 'path';
import { defineNuxtModule, createResolver, installModule, addComponentsDir, addTemplate, addLayout, addPlugin, extendPages, addImportsDir } from '@nuxt/kit';



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
    configKey: "sharedComponents",
    compatibility: {
      nuxt: ">=3.16.1"
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
    const headerLayoutScript = "(function(){try{var raw=window.sessionStorage.getItem('vHeaderLayout');if(!raw)return;var cache=JSON.parse(raw);if(!cache||cache.viewport!==window.innerWidth)return;var apply=function(header,logo){if(cache.condensed)header.classList.add('is-condensed');if(cache.collapsed)header.classList.add('is-logo-collapsed');header.classList.remove('is-measuring');if(cache.naturalWidth)logo.style.setProperty('--header-logo-natural-width',cache.naturalWidth+'px');if(cache.logoOffset)logo.style.paddingLeft=cache.logoOffset+'px';};var find=function(){var header=document.querySelector('.header.vue-component');var logo=header&&header.querySelector('.header__logo');if(logo)apply(header,logo);return !!logo;};if(find())return;var observer=new MutationObserver(function(){if(find())observer.disconnect();});observer.observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('DOMContentLoaded',function(){observer.disconnect();});}catch(e){}})();";
    _nuxt.options.app.head.script = _nuxt.options.app.head.script || [];
    _nuxt.options.app.head.script.push({ innerHTML: headerLayoutScript, tagPosition: "head" });
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
      ]
    };
    const sitemapOptions = {
      ...defaultSitemapOptions,
      ..._nuxt.options.sitemap,
      exclude: ["/__nuxt_content/**", ..._nuxt.options.sitemap?.exclude || []]
    };
    _nuxt.options.sitemap = sitemapOptions;
    await installModule("@nuxtjs/sitemap");
    await installModule("nuxt-schema-org");
    _nuxt.options.vue ||= {};
    _nuxt.options.vue.compilerOptions ||= {};
    const prevIsCustomElement = _nuxt.options.vue.compilerOptions.isCustomElement;
    _nuxt.options.vue.compilerOptions.isCustomElement = (tag) => tag.startsWith("swiper-") || prevIsCustomElement?.(tag) || false;
    const runtimeDir = resolve(__dirname, "./runtime");
    const optimizeDeps = [runtimeDir, "jquery", "slick-carousel"];
    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(...optimizeDeps);
    _nuxt.options.vite.optimizeDeps ||= {};
    _nuxt.options.vite.optimizeDeps.include ||= [];
    _nuxt.options.vite.optimizeDeps.include.push(...optimizeDeps);
    _nuxt.options.css.push(resolve("./styles/index.min.css"));
    if (theme) {
      _nuxt.options.css.push(resolve(`./styles/${theme}.min.css`));
    }
    const sfcToolsPath = resolve("./styles/sfc-tools").replace(/\\/g, "/");
    _nuxt.options.vite = _nuxt.options.vite || {};
    _nuxt.options.vite.css = _nuxt.options.vite.css || {};
    _nuxt.options.vite.css.preprocessorOptions = _nuxt.options.vite.css.preprocessorOptions || {};
    _nuxt.options.vite.css.preprocessorOptions.scss = _nuxt.options.vite.css.preprocessorOptions.scss || {};
    const existing = _nuxt.options.vite.css.preprocessorOptions.scss.additionalData;
    _nuxt.options.vite.css.preprocessorOptions.scss.additionalData = (source, filename) => {
      if (filename.endsWith(".vue")) {
        const prepend = `@import "${sfcToolsPath}";
`;
        if (typeof existing === "function") {
          return existing(prepend + source, filename);
        }
        if (typeof existing === "string") {
          return existing + prepend + source;
        }
        return prepend + source;
      }
      if (typeof existing === "function") {
        return existing(source, filename);
      }
      if (typeof existing === "string") {
        return existing + source;
      }
      return source;
    };
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
        name: "slug-posts",
        path: "/posts/:slug(.*)*",
        file: resolve("./runtime/pages/posts/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-events",
        path: "/events/:slug(.*)*",
        file: resolve("./runtime/pages/events/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-authors",
        path: "/authors/:slug(.*)*",
        file: resolve("./runtime/pages/authors/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-casestudies",
        path: "/casestudies/:slug(.*)*",
        file: resolve("./runtime/pages/casestudies/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-testimonials",
        path: "/testimonials/:slug(.*)*",
        file: resolve("./runtime/pages/testimonials/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-all",
        path: "/:slug(.*)*",
        file: resolve("./runtime/pages/[...slug].vue")
      });
    });
    addImportsDir(resolve("./runtime/composables"));
    try {
      await registerSharedI18n(_nuxt, resolve);
      console.log("\u2714 [sc-i18n] shared translations layer registered");
    } catch (e) {
      console.error("\u2716 [sc-i18n] FAILED:", e && e.stack || e);
    }
    _nuxt.hook("nitro:build:public-assets", (nitro) => writeSecurityTxt(_nuxt, nitro.options.output.publicDir));
  }
});
async function registerSharedI18n(_nuxt, resolve) {
  const globalUrl = pathToFileURL(resolve("./runtime/locales/global.js")).href;
  const { default: translations } = await import(globalUrl);
  const translationDirName = _nuxt.options.i18n?.translationDir || "locales";
  const layerDir = resolve("./sc-i18n-layer");
  const localesDir = join(layerDir, translationDirName);
  await promises.mkdir(localesDir, { recursive: true });
  for (const [code, messages] of Object.entries(translations)) {
    await promises.writeFile(join(localesDir, `${code}.json`), JSON.stringify(messages));
  }
  const base = _nuxt.options._layers[0];
  _nuxt.options._layers.push({
    ...base,
    cwd: layerDir,
    config: { ...base.config, rootDir: layerDir, srcDir: layerDir }
  });
}
async function writeSecurityTxt(_nuxt, publicDir) {
  const siteUrl = _nuxt.options.site?.url;
  if (!siteUrl)
    return;
  const origin = /^https?:\/\//.test(siteUrl) ? siteUrl : `https://${siteUrl}`;
  const now = /* @__PURE__ */ new Date();
  const expires = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 7, 1));
  const wellKnownDir = join(publicDir, ".well-known");
  await promises.mkdir(wellKnownDir, { recursive: true });
  await promises.writeFile(
    join(wellKnownDir, "security.txt"),
    [
      "# glueckkanja AG security contact",
      "# Report security vulnerabilities responsibly. Thank you.",
      "",
      "Contact: mailto:c4a8-support@glueckkanja.com",
      `Expires: ${expires.toISOString()}`,
      "Preferred-Languages: en, de",
      `Canonical: ${origin.replace(/\/$/, "")}/.well-known/security.txt`,
      ""
    ].join("\n")
  );
}

export { module as default };
