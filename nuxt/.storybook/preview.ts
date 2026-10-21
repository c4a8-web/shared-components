import '../src/assets/scss/index.scss';

import gkTheme from '../src/assets/scss/themes/_gk.scss?inline';
import konnektTheme from '../src/assets/scss/themes/_konnekt.scss?inline';
import radiusaasTheme from '../src/assets/scss/themes/_radiusaas.scss?inline';
import realmigratorTheme from '../src/assets/scss/themes/_realmigrator.scss?inline';
import realmjoinTheme from '../src/assets/scss/themes/_realmjoin.scss?inline';
import scepmanTheme from '../src/assets/scss/themes/_scepman.scss?inline';
import sendmanTheme from '../src/assets/scss/themes/_sendman.scss?inline';
import terraproviderTheme from '../src/assets/scss/themes/_terraprovider.scss?inline';
import unifiedcontactsTheme from '../src/assets/scss/themes/_unified-contacts.scss?inline';

import { h } from 'vue';
import { useNuxtApp } from '#imports';
import globalTranslations from '../locales/global.js';
// import { createPinia } from 'pinia';
// import { setup } from '@storybook/vue3';
// import { createI18n } from 'vue-i18n';

import type { Preview } from '@nuxtjs/storybook';

declare global {
  interface Window {
    jQuery: any;
    $: any;
    sharedComponents: {
      clientOnlyLibLoaded: boolean;
    };
  }
}

import GlobalApp from '../components/global-app.vue';

// Create i18n instance
// const i18n = createI18n({
//   legacy: false,
//   defaultLocale: 'de',
//   fallbackLocale: 'en',
//   messages: {
//     de: {},
//     en: {},
//     es: {},
//   },
// });

// Setup Vue plugins
// setup((app) => {
//   app.use(createPinia());
//   app.use(i18n);
// });

const THEMES: Record<string, { label: string; css: string }> = {
  gk: { label: 'glueckkanja', css: gkTheme },
  konnekt: { label: 'Konnekt', css: konnektTheme },
  radiusaas: { label: 'RADIUSaaS', css: radiusaasTheme },
  realmigrator: { label: 'RealMigrator', css: realmigratorTheme },
  realmjoin: { label: 'RealmJoin', css: realmjoinTheme },
  scepman: { label: 'SCEPman', css: scepmanTheme },
  sendman: { label: 'Sendman', css: sendmanTheme },
  terraprovider: { label: 'TerraProvider', css: terraproviderTheme },
  unifiedcontacts: { label: 'Unified Contacts', css: unifiedcontactsTheme },
};

const DEFAULT_THEME = 'gk';
const THEME_STYLE_ID = 'sb-active-theme';

const applyTheme = (slug: string) => {
  const theme = THEMES[slug] ?? THEMES[DEFAULT_THEME];

  let styleEl = document.getElementById(THEME_STYLE_ID) as HTMLStyleElement | null;

  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = THEME_STYLE_ID;
  }

  styleEl.textContent = theme.css;

  document.head.appendChild(styleEl);
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Active product theme (src/assets/scss/themes)',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: Object.entries(THEMES).map(([value, { label }]) => ({ value, title: label })),
    },
  },
};

const loadPlugins = () => {
  import('jquery')
    .then((module) => {
      if (!window) return;

      window.jQuery = window.$ = module.default;

      return Promise.all([
        import('bootstrap/dist/js/bootstrap.bundle.min.js'),
        import('slick-carousel'),
        import('ion-rangeslider'),
      ]);
    })
    .then(() => {
      console.debug('All libraries loaded successfully.');

      // document.dispatchEvent(new CustomEvent(Events.CLIENT_ONLY_LIB_LOADED));

      window.sharedComponents = {
        clientOnlyLibLoaded: true,
      };
    })
    .catch((error) => {
      console.error('Failed to load a library:', error);
    });
};

loadPlugins();

export const decorators = [
  (storyFn, params) => {
    const theme: string = params.globals?.theme ?? DEFAULT_THEME;

    applyTheme(theme);

    const rootElement = document.getElementById('storybook-root');

    if (rootElement) {
      rootElement.classList.add('shared-components');

      Object.keys(THEMES).forEach((slug) => rootElement.classList.remove(slug));

      rootElement.classList.add(theme);
    }

    return {
      components: { GlobalApp },

      setup() {
        // nuxt-i18n-micro lazy-loads translations from Nitro `_locales` routes,
        // which don't exist in the storybook preview — so $t returns raw keys
        // (e.g. "loadMorePosts"). Inject the shared UI strings directly into
        // micro's store for the active locale so $t resolves in stories.
        try {
          const nuxtApp = useNuxtApp();
          const locale = nuxtApp.$getLocale?.() ?? 'de';
          const messages =
            (globalTranslations as Record<string, any>)[locale] ??
            (globalTranslations as Record<string, any>).de ??
            {};
          nuxtApp.$mergeTranslations?.(messages);
        } catch {
          // Nuxt runtime not ready in this context — skip.
        }

        if (params.parameters?.isPage) {
          return () => h(storyFn(), params.args);
        }

        return () => h(GlobalApp, {}, () => h(storyFn(), params.args));
      },
    };
  },
];

// TODO rewrite decorators but also make sure the root element has the right classes
// export const decorators = [
//   (story, context) => ({
//     components: { story, GlobalApp },
//     setup() {
//       return { args: context.args };
//     },
//     template: `
//       <global-app>
//         <story />
//       </global-app>
//     `,
//   }),
// ];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
