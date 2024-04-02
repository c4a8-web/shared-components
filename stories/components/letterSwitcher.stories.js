import { createComponent, getDecorators } from '../../.storybook/templates';
import letterSwitchTemplate from '!!raw-loader!./letterSwitch.html';

export default {
  decorators: getDecorators(),
  title: 'Components/Letter Switcher',
};

const Template = (args) => createComponent(args, letterSwitchTemplate);

export const LetterSwitcher = Template.bind({});

LetterSwitcher.args = {};
