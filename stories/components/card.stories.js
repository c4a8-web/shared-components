import { site, getDefaultSettings } from '../../.storybook/templates';
import { includescardhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {
      excerpt: {
        description: 'A short summary of the Card Content',
        type: 'string',
      },
      blogtitlepic: {
        description: 'Image of the Card',
        type: 'string',
      },
      url: {
        description: 'Card Url',
        type: 'string',
      },
      title: {
        description: 'The title of the Card',
        type: 'string',
      },
      author: {
        description: 'A List of Authors contributing to the Card/Blog',
        type: 'array',
      },
      moment: {
        description: 'A specific Date if a Card Date is not given',
        type: 'string',
      },
      date: {
        description: 'A specific Date for the Card',
        type: 'string',
      },
      large: {
        description: 'Enables large Variant of the Card',
        type: 'boolean',
      },
      webcast: {
        description: 'Turns Card into Webcast Card',
        type: 'boolean',
      },
      event: {
        description: 'Enables Event Variant of the Card',
        type: 'boolean',
      },
      target: {
        description: 'Headline Target',
        type: 'target',
      },
      youtubeUrl: {
        description: 'Card links to a Youtube Video',
        type: 'string',
      },
      long: {
        description: 'Enables Long Variant of the Card',
        type: 'boolean',
      },
      subpoints: {
        description: 'A List of Subpoints within the Card Content',
        type: 'array',
      },
      scope: {
        description: 'Displays a Time Scope on the Card',
        type: 'string',
      },
      footer: {
        description: 'Creates a Footer on the Card',
        type: 'string',
      },
      product: {
        description: 'Product Variant of Cards, Includes Subpoints e.g. Tenant/Contacts/Other',
        type: 'array',
      },
      tag: {
        description: 'Adds Tags to the Card',
        type: 'array',
      },
      cta: {
        description: 'Adds Button to the Card',
        type: 'object',
      },
      hasAnimation: {
        description: 'Adds Animation to the Card',
        type: 'boolean',
      },
      index: {
        description: 'Cards Animation Step',
        type: 'number',
      },
      externalLanguage: {
        description: 'Adds External Language to the Title',
        type: 'string',
      },
    },
  }),
  title: 'Components/Card',
};

export const BlogPost = {
  args: {
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
  },
};

export const BlogPostLarge = {
  args: {
    large: true,
    url: 'javascript:void(0);',
    layout: 'post',
    title: 'Azure Virtual Desktop – Ja, aber automatisiert bitte! Lorem ipsum dolor sit',
    moment: '2021-05-11',
    author: ['Christian Kordel', 'Next Author'],
    categories: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
    tags: ['Microsoft', 'Teams', 'Voice', 'SBC', 'Routing'],
    blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
    socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
    excerpt:
      '<strong>Test123</strong> & &quot;In allen Teams Voice Projekten&quot; "Wir&#8209;Gefühl" kommt man mit dem Kunden an den Punkt, dass man über ein Konzept für Notrufe sprechen muss. Unsere generelle Empfehlung ist, die Mitarbeiter anzuweisen, Notrufe von ihrem Handy aus zu tätigen. Dies ist jedoch nicht bei allen Kunden möglich. Daher muss auch dieses Szenario mit den Möglichkeiten der Teams Voice Plattform abgedeckt werden.',
    externalLanguage: 'English only',
  },
};

export const WithAnimation = {
  args: {
    hasAnimation: true,
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
  },
};

export const CardLong = {
  args: {
    long: true,
    scope: 'Umfang: 1-2 Tage',
    layout: 'post',
    title: 'glueckkanja Quick-Check',
    footer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ame',
    blogtitlepic: `${site.blog_image_path}head-emergency-calls`,
    socialimg: 'https://res.cloudinary.com/glueckkanja/image/upload/v1620393502/blog/heads/head-emergency-calls.jpg',
    excerpt:
      'Bei glueckkanja sitzt du nicht nur direkt an der Mirosoft-Quelle- du profitierst auch von einer Microsoft-Expertise lorem ipsum dolor sit amet erat non proident',
    subpoints: [
      'Bei glueckkanja sitzt du nicht nur direkt an der Mirosoft-Quelle- du profitierst auch von einer Microsoft-Expertise, die so kaum ein anderes IT-Beratungsunternehmen in Deutschland hat',
      'Dir stehen bei glueckkanja viele Türen offen und',
      'Auch wenn du heute nicht so weit bist',
    ],
    cta: {
      text: 'Lorem ipsum',
      href: 'https://www.youtube.com/watch?v=m2pa27Hv8K0',
    },
  },
};

export const Webcast = {
  args: {
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
  },
};

export const Product = {
  args: {
    title: 'Unified Contact',
    blogtitlepic: 'products/unified-contacts/unified-contacts-products-header.png',
    tag: {
      text: 'Free',
      color: 'white',
      bgColor: 'var(--color-cream-can)',
    },
    product: [
      {
        title: 'Tenant',
        subpoints: [
          {
            hideIcon: true,
            subpoint: 'Lorem Ipsum 1',
          },
          {
            included: true,
            subpoint: 'Lorem Ipsum 2',
          },
        ],
      },
      {
        title: 'Contact',
        subpoints: [
          {
            included: true,
            subpoint: 'Lorem Ipsum 1',
          },
          {
            included: true,
            subpoint: 'Lorem Ipsu 2m',
          },
          {
            subpoint: 'Lorem Ipsum 3',
          },
        ],
      },
      {
        title: 'Other',
        subpoints: [
          {
            subpoint: 'Lorem Ipsum 1',
          },
          {
            subpoint: 'Lorem Ipsum 2',
          },
        ],
      },
    ],
  },
};

export const Row = {
  args: {
    row: true,
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
  },
};
