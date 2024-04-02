import { createComponent } from '../../.storybook/templates';
import richtextTemplate from '!!raw-loader!./richtext.html';

export default {
  title: 'Components/Richtext',
};

const Template = (args) => createComponent(args, richtextTemplate);

export const Richtext = Template.bind({});

Richtext.args = {};
