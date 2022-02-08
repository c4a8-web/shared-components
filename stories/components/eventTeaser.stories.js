import { createComponent, getTitle } from '../../.storybook/templates';
import { includeseventteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const EventTeaserWebcast = Template.bind({});

EventTeaserWebcast.args = {
  headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
  content:
    '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
  date: '16.02.2022',
  time: '14-15 Uhr',
  shapes: [
    {
      color: 'var(--color-green-blue)',
    },
    {
      color: 'var(--color-yellow)',
    },
  ],
  webcast: true,
  authors: 'Mit Nadine Kern & Max Mustermann',
  image: {
    img: '/events/authors/authors-demo.png',
    alt: 'lorem ipsum',
  },
  badge: {
    text: 'Neuer Webcast',
    icon: '',
  },
  cta: {
    text: 'Jetzt anmelden',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
  },
  variant: 6,
};

export const EventTeaserTraining = Template.bind({});

EventTeaserTraining.args = {
  headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
  time: '1-4 Tage',
  shapes: {},
  authors: 'Mit Nadine Kern & Max Mustermann',
  image: {
    img: '/events/authors/authors-demo.png',
    alt: 'lorem ipsum',
  },
  badge: {
    text: 'Training',
    color: 'var(--color-sunglow)',
  },
  price: 'Kostenlos',
  cta: {
    text: 'Jetzt anmelden',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
  },
};

export const EventTeaser = Template.bind({});

EventTeaser.args = {
  teaser: true,
  headline: 'Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  content:
    '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
  color: '#ff0000',
  cta: {
    text: 'Schulungen anfragen',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
  },
  url: 'javascript:void(0)',
};
