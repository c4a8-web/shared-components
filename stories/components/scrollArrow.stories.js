import { createComponent, getTitle } from '../../.storybook/templates';
import scrollArrowTemplate from '!!raw-loader!./scrollArrow.html';

const options = getTitle({
  title: 'Scroll Arrow',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, scrollArrowTemplate);

export const ScrollArrow = Template.bind({});

ScrollArrow.args = {
  target: '.contact',
};
