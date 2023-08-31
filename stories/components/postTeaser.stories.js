import { createComponent, getTitle } from '../../.storybook/templates';
import { includespostteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Post Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const German = Template.bind({});

German.args = {
  post: {
    url: 'javascript:void(0);',
    layout: 'post',
    title: 'Audiocodes Devices Review',
    date: '2021-06-17',
    moment: '2021-06-17',
    author: 'Jan Petersen',
    categories: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    blogtitlepic: 'head-audiocodes-review',
    socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
    excerpt:
      'Audiocodes hat mir mehrere Geräte für einen Test zur Verfügung gestellt. Ich habe sie alle eingerichtet und getestet. Hier ist eine kurze Zusammenfassung meiner Ergebnisse.',
  },
  tag: 'Microsoft',
};

export const English = Template.bind({});

English.args = {
  post: {
    lang: 'en',
    url: 'javascript:void(0);',
    layout: 'post',
    title: 'Audiocodes Devices Review',
    date: '2021-06-17',
    moment: '2021-06-17',
    author: 'Jan Petersen',
    categories: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    blogtitlepic: 'head-audiocodes-review',
    socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
    excerpt:
      'Audiocodes hat mir mehrere Geräte für einen Test zur Verfügung gestellt. Ich habe sie alle eingerichtet und getestet. Hier ist eine kurze Zusammenfassung meiner Ergebnisse.',
  },
  tag: 'Microsoft',
};
