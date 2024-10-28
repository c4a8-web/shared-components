import '../src/assets/scss/index.scss';
import '../src/assets/scss/themes/_gk.scss';

const loadPlugins = () => {
  import('jquery')
    .then((module) => {
      if (!window) return;

      window.$ = module.default;
    })
    .catch((error) => {
      console.error('Failed to load jQuery:', error);
    });

  import('ion-rangeslider').catch((error) => {
    console.error('Failed to load Ion Rangeslider:', error);
  });
};

loadPlugins();

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
