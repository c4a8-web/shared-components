const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const vendorPath = '../assets/front/dist/assets/';

module.exports = {
  mode: 'production',
  entry: {
    index: '../entry-bundle.js',
    // vendor: [
    //   '../assets/front/dist/assets/vendor/jquery/dist.jquery.min.js',
    //   '../assets/front/dist/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js',
    // ],
  },

  output: {
    path: path.resolve(__dirname, '../storybook-static/js/bundle'),
    filename: '[name].js',
    libraryTarget: 'module',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  experiments: {
    outputModule: true,
  },

  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        'vendor.js': [
          `${vendorPath}vendor/jquery/dist/jquery.min.js`,
          `${vendorPath}vendor/jquery-migrate/dist/jquery-migrate.min.js`,
          `${vendorPath}vendor/bootstrap/dist/js/bootstrap.bundle.min.js`,
          `${vendorPath}vendor/slick-carousel/slick/slick.min.js`,
        ],
      },
    }),
  ],
};
