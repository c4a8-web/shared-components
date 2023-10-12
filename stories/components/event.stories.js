import { createComponent, getTitle } from '../../.storybook/templates';
import { includeseventhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Event = Template.bind({});

Event.args = {
  title: 'Event Title',
  date: '2020-01-01',
  category: 'Event Category',
  text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
  image: {
    img: 'https://picsum.photos/200',
    alt: 'Event Image',
  },
};
