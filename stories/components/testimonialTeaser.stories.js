import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonial Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TestimonialTeaser = Template.bind({});

TestimonialTeaser.args = {
  href: 'javascript:void(0)',
  name: 'Matti Puolitaival',
  title: 'Senior Consultant Azure',
  img: {
    img: 'people/testimonials/matti-puolitaival_sample.png',
    alt: 'lorem ipsum',
  },
};
