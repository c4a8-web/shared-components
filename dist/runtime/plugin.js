import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((_nuxtApp) => {
  if (process.client) {
    import('jquery')
      .then((module) => {
        if (!window) return;

        window.$ = module.default;
      })
      .catch((error) => {
        console.error('Failed to load jQuery:', error);
      });

    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((error) => {
      console.error('Failed to load Bootstrap JS:', error);
    });

    import('slick-carousel').catch((error) => {
      console.error('Failed to load Slick Carousel:', error);
    });
  }
});
