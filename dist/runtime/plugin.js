import { defineNuxtPlugin, addRouteMiddleware, useAsyncData, useHead, useRuntimeConfig } from '#app';
import Events from './utils/events.js';
import { version } from '../../package.json';

// Global UI translations (locales/global.js) are no longer merged here: the
// module contributes them to nuxt-i18n-micro as a layer at build time, so $t
// resolves them natively. See registerSharedI18n in the module.
export default defineNuxtPlugin((_nuxtApp) => {
  const sharedComponentsConfig = useRuntimeConfig().public.sharedComponents || {};

  const htmlAttrs = {
    'data-shared-components-version': version,
  };

  // Opt-out for the richtext conclusion box (see _richtext.scss).
  if (sharedComponentsConfig.richtextConclusionBox === false) {
    htmlAttrs['data-richtext-conclusion-box'] = 'false';
  }

  useHead({ htmlAttrs });

  addRouteMiddleware(
    'global-collection-layouts',
    async (to) => {
      const cleanPath = to.path;

      // TODO adjust this so it works with the collections defined in your nuxt.config.js
      // const { data } = await useAsyncData('events', () =>
      //   queryContent('events')
      //     .where({
      //       _path: cleanPath,
      //     })
      //     .findOne()
      // );

      // if (data && data.value && data.value.layout) {
      //   const middlewareState = useState("middlewareState", () => null);
      //   switch (data.value.layout) {
      //     case "event":
      //       middlewareState.value = {
      //         footer: {
      //           noMargin: true,
      //         },
      //       };
      //       break;
      //   }
      // setPageLayout(data.value.layout);
      // }
    },
    { global: true }
  );

  if (process.client) {
    console.debug(`Shared Components v${version}`);

    import('jquery')
      .then((module) => {
        if (!window) return;

        window.jQuery = window.$ = module.default;

        return Promise.all([
          import('bootstrap/dist/js/bootstrap.bundle.min.js'),
          import('slick-carousel'),
          import('ion-rangeslider'),
        ]);
      })
      .then(() => {
        console.debug('All libraries loaded successfully.');

        document.dispatchEvent(new CustomEvent(Events.CLIENT_ONLY_LIB_LOADED));
        // add a data attribute to the body tag to mark that the libraries are loaded
        window.sharedComponents = {
          clientOnlyLibLoaded: true,
        };
      })
      .catch((error) => {
        console.error('Failed to load a library:', error);
      });
  }
});
