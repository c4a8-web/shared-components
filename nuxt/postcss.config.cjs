module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-url')({
      url: 'inline', // Inline external fonts as data URIs
      basePath: '../../src/assets/fonts', // Specify the folder where the font assets are located
    }),
  ],
};
