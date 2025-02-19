// i18n.config.js
import { defineI18nConfig } from '#i18n';
import translations from './locales/global.js';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: translations,
}));
