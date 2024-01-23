const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const vendorPath = '../assets/front/dist/assets/';

module.exports = {
  mode: 'production',
  entry: {
    index: '../entry-bundle.js',
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
          `${vendorPath}vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.js`,
          `${vendorPath}vendor/jquery-validation/dist/jquery.validate.min.js`,
          `${vendorPath}vendor/cubeportfolio/js/jquery.cubeportfolio.min.js`,
          `${vendorPath}vendor/hs-unfold/dist/hs-unfold.min.js`,
          `${vendorPath}vendor/leaflet/dist/leaflet.js`,
          `${vendorPath}vendor/ion-range-slider/ion-rangeslider.js`,
          `${vendorPath}js/theme.min.js`,
          `${vendorPath}js/hs.validation.js`,
          `${vendorPath}vendor/hs-sticky-block/dist/hs-sticky-block.min.js`,
        ],
      },
    }),
  ],
};
