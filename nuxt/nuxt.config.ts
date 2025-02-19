// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxt/content', '@nuxtjs/i18n'], // , '@nuxt/image'
  storybook: {
    port: 6006,
  },
  i18n: {
    detectBrowserLanguage: false,
    locale: 'de',
    legacy: false,
    fallbackLocale: 'en',
    defaultLocale: 'de',
    strategy: 'prefix',
    locales: ['de', 'en', 'es'],
    vueI18n: './i18n.config.js',
  },
  // content: {
  //   markdown: {
  //     anchorLinks: false,
  //   },
  //   locales: ['de', 'en'],
  //   defaultLocale: 'de',
  // },
});

// TODO try to fix nuxt content inside storybook. right now query is not working and returns a 404
