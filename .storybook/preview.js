import '../assets/scss/index.scss';
import '../assets/scss/storybook.scss';
import '../assets/js/index.js';

// TODO move bootstrap scss to this location
// TODO remove after migration is done
import Interim from './interim.js';

import { Styles } from './themeImports';

import { STORY_RENDERED } from '@storybook/core-events';
import addons from '@storybook/addons';
import { EVENTS, DEFAULT_THEME, addStyles, addBaseClass } from './themes/src/themes';
import { HTML_DOWNLOAD_EVENTS, downloadHtml } from './html-download/src/exports';

let currentTheme = DEFAULT_THEME;

function loadTheme(theme) {
  addBaseClass(theme);
  addStyles(Styles[theme]);

  currentTheme = theme;
}

const channel = addons.getChannel();

const removeModal = function () {
  const modal = document.querySelector('.modal-backdrop');

  if (modal) {
    modal.remove();

    document.body.classList.remove('modal-open');
  }
};

function vueForceUpdate() {
  const customEvent = new CustomEvent('VUE_FORCE_UPDATE', {});

  document.dispatchEvent(customEvent);
}

channel.on(EVENTS.CHANGE, (theme) => {
  loadTheme(theme);
  Interim();
  removeModal();
});

channel.on(STORY_RENDERED, () => {
  loadTheme(currentTheme);
  vueForceUpdate();
  Interim();
  removeModal();
});

channel.on(HTML_DOWNLOAD_EVENTS.CHANGE, (e) => {
  downloadHtml(e);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Components', 'Pages', 'Context', 'Docs'],
    },
  },
};

export const decorators = [
  (story, params) => {
    const body = document.querySelector('body');
    const base = document.querySelector('base');

    if (base) {
      if (base.getAttribute('target') !== '_parent' && !params?.parameters?.page) {
        base.setAttribute('target', '_parent');
      }
    }

    if (params.parameters?.root) {
      body.setAttribute('style', 'padding: 0 !important; margin: 0 !important');
    } else {
      body.setAttribute('style', '');
    }

    if (params?.parameters?.page) {
      if (base) {
        // This does not work with _self or _parent with native form submits and cypress testing. That's why it is _blank right now
        base.setAttribute('target', '_blank');

        console.error(
          "WARNING!!! When you make a submit or a switch in this story. You'll need to reload the whole storybook frame for it to work again."
        );
      }
    }

    document.querySelector('html')?.setAttribute('lang', 'de');

    return story();
  },
];
