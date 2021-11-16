import addons from "@storybook/addons";
import { EVENTS } from "./themes/src/constants";

const channel = addons.getChannel();

channel.on(EVENTS.CHANGE, (theme) => {
  console.log("channel.on ~ theme", theme);
});

import "../assets/scss/index.scss";
import "../assets/js/index.js";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
