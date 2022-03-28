import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialsdetailhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonials Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {};

export const TestimonialsDetail = Template.bind({});

TestimonialsDetail.args = {
  name: 'Matti Puolitaival',
  title: 'Senior Consultant Azure',
  location: 'Finnland',
  description:
    '<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</p> ',
  ...baseArgs,
  image: {
    img: 'people/testimonials/matti-puolitaival.png',
    alt: 'lorem ipsum',
  },
};
