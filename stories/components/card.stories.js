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
  moment: '2021-05-11',
  author: ['Alexander Rudolph', 'Next Author'],
  categories: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  tags: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
  socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
  excerpt:
    'In allen Teams Voice Projekten kommt man mit dem Kunden an den Punkt, dass man über ein Konzept für Notrufe sprechen muss. Unsere generelle Empfehlung ist, die Mitarbeiter anzuweisen, Notrufe von ihrem Handy aus zu tätigen. Dies ist jedoch nicht bei allen Kunden möglich. Daher muss auch dieses Szenario mit den Möglichkeiten der Teams Voice Plattform abgedeckt werden.',
};

export const BlogPostLarge = Template.bind({});

BlogPostLarge.args = {
  large: true,
  url: 'javascript:void(0);',
  layout: 'post',
  title: 'Can Microsoft Teams call 911?',
  moment: '2021-05-11',
  author: ['Christian Kordel', 'Next Author'],
  categories: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  tags: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
  socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
  excerpt:
    '<strong>Test123</strong> In allen Teams Voice Projekten kommt man mit dem Kunden an den Punkt, dass man über ein Konzept für Notrufe sprechen muss. Unsere generelle Empfehlung ist, die Mitarbeiter anzuweisen, Notrufe von ihrem Handy aus zu tätigen. Dies ist jedoch nicht bei allen Kunden möglich. Daher muss auch dieses Szenario mit den Möglichkeiten der Teams Voice Plattform abgedeckt werden.',
};

export const CardLong = Template.bind({});

CardLong.args = {
  long: true,
  scope: 'Umfang: 1-2 Tage',
  layout: 'post',
  title: 'glueckkanja-gab Quick-Check',
  footer:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ame',
  blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
  socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
  excerpt:
    'Bei glueckkanja-gab sitzt du nicht nur direkt an der Mirosoft-Quelle- du profitierst auch von einer Microsoft-Expertise lorem ipsum dolor sit amet erat non proident',
  subpoints: [
    'Bei glueckkanja-gab sitzt du nicht nur direkt an der Mirosoft-Quelle- du profitierst auch von einer Microsoft-Expertise, die so kaum ein anderes IT-Beratungsunternehmen in Deutschland hat',
    'Dir stehen bei glueckkanja-gab viele Türen offen und',
    'Auch wenn du heute nicht so weit bist',
  ],
};

export const Webcast = Template.bind({});

Webcast.args = {
  youtubeUrl: 'https://www.youtube.com/watch?v=m2pa27Hv8K0',
  title: 'Neue Headline 2. Thema, maximal 2 Zeilig',
  moment: '2022-02-16',
  author: ['Nadine Kern', 'Next Author'],
  webcast: true,
  blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
  socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
  url: 'javascript:void(0);',
  tags: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
  excerpt:
    'In allen Teams Voice Projekten kommt man mit dem Kunden an den Punkt, dass man über ein Konzept für Notrufe sprechen muss. Unsere generelle Empfehlung ist, die Mitarbeiter anzuweisen, Notrufe von ihrem Handy aus zu tätigen. Dies ist jedoch nicht bei allen Kunden möglich. Daher muss auch dieses Szenario mit den Möglichkeiten der Teams Voice Plattform abgedeckt werden.',
};
