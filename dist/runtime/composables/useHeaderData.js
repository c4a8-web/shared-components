import { useAsyncData, useI18n, useRoute } from '#imports';

const legacyHeaderModule = import.meta.glob('~/content/header.json', { eager: true, import: 'default' });
const headerConfigModule = import.meta.glob('~/content/header.config.{js,mjs,ts}', {
  eager: true,
  import: 'headerConfig',
});
const localesConfigModule = import.meta.glob('~/locales.config.{js,mjs,ts}', { eager: true });

function resolveLocalized(field, locale) {
  if (typeof field === 'string') return field;

  return field?.[locale] ?? field?.en ?? field?.de;
}

function resolveOptionalLocalized(field, locale) {
  if (field === undefined) return undefined;
  if (typeof field === 'string') return field;

  return field[locale];
}

function buildLanguageEntry(node, locale) {
  const entry = { title: resolveLocalized(node.title, locale) };

  if (node.path !== undefined) entry.url = `/${locale}${node.path}`;
  else if (node.href !== undefined) entry.url = node.href;

  for (const field of ['description', 'subtitle', 'alt', 'alias']) {
    const value = resolveOptionalLocalized(node[field], locale);

    if (value !== undefined) entry[field] = value;
  }

  if (node.emergency) {
    const emergency = node.emergency;
    const emergencyText = resolveOptionalLocalized(emergency.text, locale);

    entry.emergency = {
      ...(emergencyText !== undefined && { text: emergencyText }),
      href: `/${locale}${emergency.href}`,
      ...(emergency.skin !== undefined && { skin: emergency.skin }),
      ...(emergency.icon !== undefined && { icon: emergency.icon }),
    };
  }

  return entry;
}

function buildNavigationNode(node, locales) {
  const built = { name: node.id };

  for (const configKey of ['folderSwitch', 'imgLight', 'img', 'cloudinary', 'target', 'products']) {
    if (node[configKey] !== undefined) built[configKey] = node[configKey];
  }

  const isLinkNode = node.title !== undefined || node.path !== undefined || node.href !== undefined;

  if (isLinkNode) {
    const availableLocales = node.locales ?? locales;
    const languages = {};

    for (const locale of locales) {
      if (availableLocales.includes(locale)) languages[locale] = buildLanguageEntry(node, locale);
    }

    built.languages = languages;
  }

  if (node.children) built.children = node.children.map((child) => buildNavigationNode(child, locales));

  return built;
}

function buildHeader(config, locales, sourceLocale) {
  const header = { lang: sourceLocale };

  header.home = buildNavigationNode(config.home, locales);
  header.navigation = config.navigation.map((node) => buildNavigationNode(node, locales));

  if (config.meta) header.meta = config.meta.map((node) => buildNavigationNode(node, locales));
  if (config.contact) header.contact = buildNavigationNode(config.contact, locales);

  return header;
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

export function useHeaderData(options = {}) {
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

  // Keyed per locale: the prerenderer shares one useAsyncData cache across routes.
  return useAsyncData(
    `sc:header-data-${currentLocale()}`,
    () => {
      const legacyHeader = Object.values(legacyHeaderModule)[0];

      if (legacyHeader) return Promise.resolve(legacyHeader);

      const headerConfig = Object.values(headerConfigModule)[0];

      if (!headerConfig) return Promise.resolve(null);

      return Promise.resolve(buildHeader(headerConfig, [currentLocale()], sourceLocale));
    },
    { watch: localeRef ? [localeRef] : [] }
  );
}
