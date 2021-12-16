const path = require('path');
const includePath = path.resolve(__dirname, '../');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', './themes/src/preset.js'],
  staticDirs: ['../static', { from: '../static', to: 'assets' }],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: includePath,
    });

    config.module.rules.push({
      test: /\.(html)$i/,
      use: [
        {
          loader: 'raw-loader',
          options: {
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
