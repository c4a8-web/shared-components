import { createComponent } from '../../.storybook/templates';
import { includespostteaserhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Post Teaser',
};

const Template = (args) => createComponent(args, component);

export const German = Template.bind({});

// TODO Check date

German.args = {
  post: {
    url: 'javascript:void(0);',
    title: 'Audiocodes & Devices Review',
    date: '2021-06-17',
    moment: '2021-06-17',
    author: 'Jan Petersen',
    tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    blogtitlepic: 'head-audiocodes-review',
    socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
    excerpt:
      'Bei der diesjährigen Inspire 2023 in München war das Team von glueckkanja erneut vertreten. Geehrt mit dem &quot;Partner of the Year Accelerate Trust Award&quot; im Bereich Security und erstmalig als Product-Partner der Microsoft Partner Community vorgestellt, setzt unsere Zusammenarbeit mit Microsoft stetig neue Akzente.',
  },
  tag: 'Microsoft',
};

export const English = Template.bind({});

English.args = {
  post: {
    lang: 'en',
    url: 'javascript:void(0);',
    title: 'Audiocodes & Devices Review',
    date: '2021-06-17',
    moment: '2021-06-17',
    author: 'Jan Petersen',
    tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    blogtitlepic: 'head-audiocodes-review',
    socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
    excerpt:
      'Bei der diesjährigen Inspire 2023 in München war das Team von glueckkanja erneut vertreten. Geehrt mit dem &quot;Partner of the Year Accelerate Trust Award&quot; im Bereich Security und erstmalig als Product-Partner der Microsoft Partner Community vorgestellt, setzt unsere Zusammenarbeit mit Microsoft stetig neue Akzente.',
  },
  tag: 'Microsoft',
};
