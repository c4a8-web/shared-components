import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((_nuxtApp) => {
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((error) => {
      console.error('Failed to load Bootstrap JS:', error);
    });
  }
});
