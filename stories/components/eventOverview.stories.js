import { createComponent, getTitle, hrefTo } from '../../.storybook/templates';
import { includeseventoverviewhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event Overview',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ManualEvents = Template.bind({});

ManualEvents.args = {
  events: [
    {
      url: 'javascript:void(0);' /* url is not overwriteable in yaml */,
      youtubeUrl: 'https://www.youtube.com/watch?v=DnkRfpd6cBw',
      layout: 'event',
      title: 'EVENT Audiocodes Devices Review',
      moment: '2022-06-17',
      author: ['Jan Petersen', 'Thorsten Kunzi'],
      categories: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
      tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
      blogtitlepic: 'head-audiocodes-review',
      socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum',
      },
      excerpt:
        'Audiocodes hat mir mehrere Geräte für einen Test zur Verfügung gestellt. Ich habe sie alle eingerichtet und getestet. Hier ist eine kurze Zusammenfassung meiner Ergebnisse.',
    },
    {
      bgColor: 'var(--color-yellow)',
      color: 'var(--color-copy)',
      timeColor: 'var(--color-yellow-medium)',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab',
      blogtitlepic: 'head-azure-security-webcast',
      moment: '2022-06-17',
      layout: 'event',
      url: 'javascript:void(0)',
      title: 'Webcast with CTA Link',
      headline: 'Webcast with CTA Link',
      content:
        'Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was',
      moment: '2022-06-18',
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
      author: ['Nadine Kern', 'Jan Petersen'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum',
      },
      badge: {
        text: 'Neuer Webcast',
        icon: '',
      },
      cta: {
        text: 'Jetzt anmelden',
        href: 'https://www.google.com',
        skin: 'primary',
        button: true,
        external: true,
      },
    },
  ],
};

export const Ordered = Template.bind({});

Ordered.args = {
  headline: 'Termine',
  headlineLevel: 'h2',
  order: ['event-1', 'event-3', 'event-4'],
};

export const Overlap = Template.bind({});

Overlap.args = {
  headline: 'Termine',
  headlineLevel: 'h2',
  order: ['event-1', 'event-3', 'event-4'],
  overlap: true,
  moreUrl: hrefTo('Components/Event/Overview', 'Manual-Events'),
};

export const Limit = Template.bind({});

Limit.args = {
  headline: 'Termine',
  headlineLevel: 'h2',
  order: ['event-1', 'event-3', 'event-4'],
  limit: 4,
  maxLimit: 7,
};
