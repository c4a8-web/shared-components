import { defineNuxtPlugin } from '#app';
// import { ListSlickMethods, VueSlickCarousel } from 'vue-slick-ts'; //
// import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// import 'vue-slick-ts/dist/css/slick.css';

export default defineNuxtPlugin((_nuxtApp) => {
  // _nuxtApp.vueApp.component('VueSlickCarousel', VueSlickCarousel);

  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((error) => {
      console.error('Failed to load Bootstrap JS:', error);
    });
  }
});
