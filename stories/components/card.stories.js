import { createComponent, getTitle, site } from '../../.storybook/templates';
import { includescardhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Card',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const BlogPost = Template.bind({});

BlogPost.args = {
  url: 'javascript:void(0);',
  layout: 'post',
  title: 'Can Microsoft Teams call 911?',
  date: '2021-05-11',
  author: 'Christian Kordel',
  categories: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  tags: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
  socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
  excerpt:
    'In allen Teams Voice Projekten kommt man mit dem Kunden an den Punkt, dass man über ein Konzept für Notrufe sprechen muss. Unsere generelle Empfehlung ist, die Mitarbeiter anzuweisen, Notrufe von ihrem Handy aus zu tätigen. Dies ist jedoch nicht bei allen Kunden möglich. Daher muss auch dieses Szenario mit den Möglichkeiten der Teams Voice Plattform abgedeckt werden.',
};

export const Webcast = Template.bind({});

Webcast.args = {
  url: 'javascript:void(0);',
  layout: 'post',
  title: 'Can Microsoft Teams call 911?',
  date: '2021-05-11',
  author: 'Christian Kordel',
  categories: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  tags: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
  socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
  excerpt:
    'In allen Teams Voice Projekten kommt man mit dem Kunden an den Punkt, dass man über ein Konzept für Notrufe sprechen muss. Unsere generelle Empfehlung ist, die Mitarbeiter anzuweisen, Notrufe von ihrem Handy aus zu tätigen. Dies ist jedoch nicht bei allen Kunden möglich. Daher muss auch dieses Szenario mit den Möglichkeiten der Teams Voice Plattform abgedeckt werden.',
};
