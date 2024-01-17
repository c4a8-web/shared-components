const path = require('path');

module.exports = {
  mode: 'production',
  entry: '../entry-bundle.js',

  output: {
    // path: path.resolve(__dirname, 'storybook-static/test'),
    path: path.resolve(__dirname, '../storybook-static/js/bundle'),
    filename: 'index.js',
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

  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   name: false,
    // },
    // runtimeChunk: false,
  },

  experiments: {
    outputModule: true,
  },

  plugins: [],
};
