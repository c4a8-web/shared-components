/** @type { import('storybook-vue').StorybookConfig } */

import { mergeConfig } from 'vite';

// const componentsDir = '../components/';

const config = {
  // stories: [`${componentsDir}**/*.mdx`, `${componentsDir}**/*.stories.@(js|jsx|ts|tsx|mdx)`],
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public', '../static'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler',
        },
      },
    });
  },
};

export default config;
