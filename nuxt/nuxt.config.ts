// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import { writeFileSync, mkdirSync } from 'fs';
// Canonical shared-component UI strings. The build pipeline (`npm run update` →
// scripts/copy-components.js) copies this into src/runtime/locales/, which
// nuxt-module-build then ships to dist/runtime/locales/global.js. The dev app
// and storybook read the source directly so they preview exactly what ships.
import sharedTranslations from './locales/global.js';

const turnstileSiteKey = process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY ?? null;
const personioApiKey = process.env.NUXT_PUBLIC_PERSONIO_API_KEY ?? null;

// Regenerate per-locale JSON from the canonical global.js so nuxt-i18n-micro
// (translationDir: i18n/locales) always serves the current shared-component UI
// strings — no drift between global.js and the dev app.
mkdirSync('i18n/locales', { recursive: true });
for (const [code, messages] of Object.entries(sharedTranslations)) {
  writeFileSync(`i18n/locales/${code}.json`, JSON.stringify(messages));
}

declare module 'nuxt/config' {
  interface NuxtConfig {
    storybook?: {
      port?: number;
      [key: string]: any;
    };
    i18n?: {
      bundle?: {
        optimizeTranslationDirective?: boolean;
        [key: string]: any;
      };
      detectBrowserLanguage?: boolean;
      locale?: string;
      legacy?: boolean;
      fallbackLocale?: string;
      defaultLocale?: string;
      strategy?: string;
      locales?: string[];
      vueI18n?: string;
      [key: string]: any;
    };
    turnstile?: {
      siteKey?: string;
    };
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('swiper-'),
    },
  },
  modules: [
    '@nuxtjs/storybook',
    '@nuxt/content',
    'nuxt-i18n-micro',
    '@pinia/nuxt',
    '@nuxtjs/turnstile',
    '@nuxt/scripts',
    'nuxt-schema-org',
  ],
  // nuxt-i18n-micro: translations live in i18n/locales/<code>.json (generated
  // from locales/global.js — the shared-components UI strings). Single global
  // file per locale; the per-page tier is off.
  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', dir: 'ltr' },
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'es', iso: 'es-ES', dir: 'ltr' },
      { code: 'sv', iso: 'sv-SE', dir: 'ltr' },
      { code: 'no', iso: 'no-NO', dir: 'ltr' },
      { code: 'fi', iso: 'fi-FI', dir: 'ltr' },
      { code: 'da', iso: 'da-DK', dir: 'ltr' },
      { code: 'is', iso: 'is-IS', dir: 'ltr' },
      { code: 'it', iso: 'it-IT', dir: 'ltr' },
      { code: 'nl', iso: 'nl-NL', dir: 'ltr' },
      { code: 'ko', iso: 'ko-KR', dir: 'ltr' },
      { code: 'ja', iso: 'ja-JP', dir: 'ltr' },
    ],
    defaultLocale: 'de',
    fallbackLocale: 'en',
    translationDir: 'i18n/locales',
    strategy: 'prefix_except_default',
    meta: true,
    disablePageLocales: true,
    disableWatcher: true,
  },
  runtimeConfig: {
    public: {
      personioApiKey,
      googleTagManagerId: process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
      googleTagManagerDomain: process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_DOMAIN,
    },
  },
  turnstile: {
    siteKey: turnstileSiteKey ?? undefined,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (source: string, filename: string) => {
            if (filename.endsWith('.vue')) {
              return `@import "@/src/assets/scss/sfc-tools";\n` + source;
            }

            return source;
          },
        },
      },
    },
  },
});
