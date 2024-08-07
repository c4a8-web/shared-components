const path = require('path');
const includePath = path.resolve(__dirname, '../');

const config = {
  core: {
    // builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    postcss: false
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // './themes/src/preset.js',
    // './html-download/src/preset.js',
    // './json-to-yaml/src/preset.js',
  ],
  staticDirs: [
    '../static',
    {
      from: '../static',
      to: 'assets',
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              mode: 'icss',
            },
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
      include: includePath,
    });

    config.module.rules.push({
      test: /\.html$/,
      type: 'asset/source',
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    });

    return config;
  },
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
