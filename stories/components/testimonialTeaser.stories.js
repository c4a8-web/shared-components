import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonial Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TwoLines = Template.bind({});

TwoLines.args = {
  href: 'javascript:void(0)',
  name: 'Matti Puolitaival',
  title: 'Senior Consultant Azure',
  img: {
    img: 'people/testimonials/matti-puolitaival.png',
    alt: 'lorem ipsum',
  },
};

export const OneLine = Template.bind({});

OneLine.args = {
  href: 'javascript:void(0)',
  name: 'Matti',
  title: 'Senior Consultant Azure',
  img: {
    img: 'people/testimonials/matti-puolitaival.png',
    alt: 'lorem ipsum',
  },
};
