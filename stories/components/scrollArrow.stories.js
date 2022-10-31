import { createComponent, getTitle } from '../../.storybook/templates';
import { includesscrollarrowhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Scroll Arrow',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ScrollArrow = Template.bind({});

ScrollArrow.args = {
  symbol: {
    icon: "arrow",
    size: "xl",
    alt: "downpointing-arrow",
    cloudinary: false,
    scrollValue: 1000,
  }
}
