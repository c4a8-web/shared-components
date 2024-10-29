import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((_nuxtApp) => {
  if (process.client) {
    import('jquery')
      .then((module) => {
        if (!window) return;

        window.$ = module.default;

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
