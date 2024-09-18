import { setup } from '@storybook/vue3';
import '../src/assets/scss/index.scss';
// TODO add theme support
import '../src/assets/scss/themes/_gk.scss';

// register all js components
const components = import.meta.glob('../src/components/**/*.js', {
  eager: true,
});

setup((app) => {
  Object.entries(components).forEach(([path, component]) => {
    const componentName =
      component.default.name ||
      path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '');

    app.component(componentName, component.default);
  });
});

export const decorators = [
  (story, params) => {
    const rootElement = document.getElementById('storybook-root');

    if (rootElement) {
      // TODO add theme
      const theme = 'gk';

      rootElement.classList.add('shared-components');
      rootElement.classList.add(theme);
    }

    return story();
  },
];

/** @type { import('@storybook/vue3').Preview } */
const preview = {
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
