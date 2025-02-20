import { defineNuxtPlugin, addRouteMiddleware, useAsyncData } from '#app';
import Events from './utils/events.js';
import translations from './locales/global.js';

export default defineNuxtPlugin((_nuxtApp) => {
  const i18n = _nuxtApp.$i18n;

  for (const [locale, messages] of Object.entries(translations)) {
    i18n.mergeLocaleMessage(locale, messages);
  }

  addRouteMiddleware(
    'global-collection-layouts',
    async () => {
      // TODO fix cleanPath issue here
      // const route = useRoute();
      // const cleanPath = route.path.substring(0, route.path.length - 1);

      // const cleanPath = '';

      // TODO adjust this so it works with the collections defined in your nuxt.config.js
      const { data } = await useAsyncData('events', () =>
        queryContent('events')
          .where({
            _path: cleanPath,
          })
          .findOne()
      );

      if (data && data.value && data.value.layout) {
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

        setPageLayout(data.value.layout);
      }
    },
    { global: true }
  );

  if (process.client) {
    // TODO read this from package.json . could be an issue because of the moving and the relative location of the file
    console.debug('Shared Components v.0.1.107');

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
