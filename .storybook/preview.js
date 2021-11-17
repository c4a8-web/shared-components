import "../assets/scss/index.scss";
import "../assets/js/index.js";

import { Styles } from "./themeImports";

import addons from "@storybook/addons";
import { EVENTS, DEFAULT_THEME, addStyles } from "./themes/src/themes";

let currentTheme = DEFAULT_THEME;

function loadTheme(theme) {
  addStyles(Styles[theme]);

  currentTheme = theme;
}

const channel = addons.getChannel();

channel.on(EVENTS.CHANGE, (theme) => {
  loadTheme(theme);
});

loadTheme(DEFAULT_THEME);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
