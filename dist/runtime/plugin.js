import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((_nuxtApp) => {
  // TODO add gdpr

  addRouteMiddleware(
    'global-collection-layouts',
    async () => {
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
      })
      .catch((error) => {
        console.error('Failed to load a library:', error);
      });
  }
});
