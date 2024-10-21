import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((_nuxtApp) => {
  console.log('Plugin injected by my-module!');

  if (process.client) {
    // Importing Bootstrap JS bundle
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch((error) => {
        console.error('Failed to load Bootstrap JS:', error);
      });
  }
});
