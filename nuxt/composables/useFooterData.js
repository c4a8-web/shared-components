import { useAsyncData, useI18n, useRoute } from '#imports';

const legacyFooterModule = import.meta.glob('~/content/footer.json', { eager: true, import: 'default' });
const footerConfigModule = import.meta.glob('~/content/footer.config.{js,mjs,ts}', {
  eager: true,
  import: 'footerConfig',
});
const localesConfigModule = import.meta.glob('~/locales.config.{js,mjs,ts}', { eager: true });

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function resolveLocalized(field, locale) {
  if (typeof field === 'string') return field;

  return field?.[locale] ?? field?.en ?? field?.de;
}

function buildFooter(config, locales, sourceLocale) {
  const data = { ...config.data };

  for (const locale of locales) {
    const links = config.links
      .filter((link) => !link.locales || link.locales.includes(locale))
      .map((link) => ({
        title: resolveLocalized(link.title, locale),
        url: link.href !== undefined ? resolveLocalized(link.href, locale) : `/${locale}${link.path}`,
        ...(link.target !== undefined && { target: link.target }),
      }));

    const linksKey = locale === sourceLocale ? 'links' : 'links' + capitalize(locale);

    data[linksKey] = links;
  }

  return { data };
}

function resolveLocaleSettings(options) {
  if (options.locales) return { locales: options.locales, sourceLocale: options.sourceLocale };

  const localesConfig = Object.values(localesConfigModule)[0];

  if (localesConfig?.localeSettings) {
    return {
      locales: localesConfig.localeSettings.map((setting) => setting.code),
      sourceLocale: localesConfig.SOURCE_LOCALE,
    };
  }

  return { locales: ['en'], sourceLocale: 'en' };
}

export function useFooterData(options = {}) {
  const { sourceLocale } = resolveLocaleSettings(options);
  let localeRef;
  try {
    localeRef = useI18n().locale;
  } catch {
    localeRef = undefined;
  }
  const currentLocale = () => {
    if (localeRef?.value) return localeRef.value;
    const m = /^\/([a-z]{2})(?:\/|$)/.exec(useRoute()?.path || '');
    return m ? m[1] : sourceLocale;
  };

  return useAsyncData(
    `sc:footer-data-${currentLocale()}`,
    () => {
      const legacyFooter = Object.values(legacyFooterModule)[0];

      if (legacyFooter) return Promise.resolve(legacyFooter);

      const footerConfig = Object.values(footerConfigModule)[0];

      if (!footerConfig) return Promise.resolve(null);

      const current = currentLocale();
      const locales = current === sourceLocale ? [sourceLocale] : [sourceLocale, current];

      return Promise.resolve(buildFooter(footerConfig, locales, sourceLocale));
    },
    { watch: localeRef ? [localeRef] : [] }
  );
}
