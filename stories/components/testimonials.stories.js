import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonials',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Testimonials = Template.bind({});

Testimonials.args = {};
