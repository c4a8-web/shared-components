// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook'],
  storybook: {
    host: 'http://localhost',
    port: 6006,
  },
});
