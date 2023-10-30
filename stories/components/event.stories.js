import { createComponent, getTitle } from '../../.storybook/templates';
import { includeseventhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event',
});

export default {
  ...options,
  argTypes: {
    title: {
      description: 'The Title',
      type: 'string',
    },
    date: {
      description: 'The date of the element in YYYY-MM-DD or in DD.-DD.MM.YYYY format',
      type: 'string',
    },
    category: {
      description: 'The category',
      type: 'string',
    },
    text: {
      description: 'The text of the element',
      type: 'string',
    },
    image: {
      description: 'The image data object',
      type: 'object',
    },
    bgColor: {
      description: 'The background color of the date block',
      options: ['', 'var(--color-yellow)', 'var(--color-primary)'],
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'The text color of the date block',
      options: ['', 'var(--color-copy)', 'var(--color-copy-light)', 'var(--color-yellow-medium)'],
      control: {
        type: 'select',
      },
    },
    timeColor: {
      description: 'The text color of the category and the time text',
      options: ['', 'var(--color-copy)', 'var(--color-copy-light)', 'var(--color-yellow-medium)'],
      control: {
        type: 'select',
      },
    },
    time: {
      description: 'The time of the element',
      type: 'string',
    },
    url: {
      description: 'The url of the element',
      type: 'string',
    },
    classes: {
      description: 'Additional Classes of the element',
      type: 'string',
    },
  },
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

export const MultipleDays = Template.bind({});

MultipleDays.args = {
  title: 'Event Title lorem ipsum dolor',
  date: '10.-12.10.2023',
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
};
