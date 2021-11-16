const path = require("path");

const includePath = path.resolve(__dirname, "../");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "./themes/src/preset.js",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.html$i/,
      use: [
        {
          loader: "raw-loader",
          options: {
            esModule: false,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: includePath,
    });

    return config;
  },
};
