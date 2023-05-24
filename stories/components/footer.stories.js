import { createComponent, getTitle } from '../../.storybook/templates';
import { includesfooterhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Footer',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Corporate = Template.bind({});

Corporate.args = {};

export const Product = Template.bind({});

Product.args = {
  noMargin: true,
  data: {
    bgColor: 'var(--color-midnight)',
  },
};
