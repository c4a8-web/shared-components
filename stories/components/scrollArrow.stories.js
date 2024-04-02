import { createComponent } from '../../.storybook/templates';
import scrollArrowTemplate from '!!raw-loader!./scrollArrow.html';

export default {
  title: 'Components/Scroll Arrow',
};

const Template = (args) => createComponent(args, scrollArrowTemplate);

export const ScrollArrow = Template.bind({});

ScrollArrow.args = {
  target: '.contact',
};

export const ScrollArrowSpacing = Template.bind({});

ScrollArrowSpacing.args = {
  target: '.contact',
  spacing: 'mt-n10',
};
