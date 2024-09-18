import letterSwitchTemplate from "!!raw-loader!./letterSwitch.html";

export default {
  decorators: [(Story) => Story()],
  title: "Components/Letter Switcher",
  render: (args) => createComponent(args, letterSwitchTemplate),
};

export const LetterSwitcher = {
  args: {},
};
