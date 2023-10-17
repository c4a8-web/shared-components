import { createComponent, getTitle } from '../../.storybook/templates';
import { includeseventhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  title: 'Event Title',
  date: '2020-01-01',
  category: 'Event Category',
  text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
};

export const YellowWithImage = Template.bind({});

YellowWithImage.args = {
  title: 'Event Title lorem ipsum dolor',
  date: '2023-12-17',
  category: 'Event Category',
  text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
  image: {
    img: '/shared-components/card-sec-motion-dus.png',
    alt: 'Event Image',
    cloudinary: true,
  },
  bgColor: 'var(--color-yellow)',
  color: 'var(--color-copy)',
  timeColor: 'var(--color-yellow-medium)',
  time: '15-16 Uhr',
};
