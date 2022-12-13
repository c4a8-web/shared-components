import { createComponent, getTitle } from '../../.storybook/templates';
import letterSwitchTemplate from '!!raw-loader!./letterSwitch.html';

const options = getTitle({
  title: 'Letter Switcher',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, letterSwitchTemplate);

export const LetterSwitcher = Template.bind({});

LetterSwitcher.args = {};
