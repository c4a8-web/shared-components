/** @type { import('storybook-vue').StorybookConfig } */

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
};

export default config;
