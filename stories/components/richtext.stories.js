import { createComponent, getTitle } from '../../.storybook/templates';
import richtextTemplate from '!!raw-loader!./richtext.html';

const options = getTitle({
  title: 'Richtext',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, richtextTemplate);

export const Richtext = Template.bind({});

Richtext.args = {};
