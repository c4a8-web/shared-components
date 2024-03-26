import { getTitle, getDefaultSettings } from '../../.storybook/templates';
import { includeseventteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event Teaser',
});

export default {
  ...getDefaultSettings({
    options,
    component,
    argTypes: {
      headline: {
        description: 'Event Teaser Headline',
        type: 'string',
      },
      content: {
        description: 'Event Teaser Content',
        type: 'string',
      },
      moment: {
        description: 'Specific Date',
        type: 'string',
      },
      time: {
        description: 'Time or time span of an Event',
        control: {
          type: 'text',
        },
      },
      shapes: {
        description: 'Event Teaser Shapes',
        type: 'object',
      },
      webcast: {
        description: 'Toggles Webcast Mode',
        type: 'boolean',
      },
      author: {
        description: 'Event Teaser Authors',
        type: 'array',
      },
      image: {
        description: 'Event Teaser Image',
        type: 'object',
      },
      badge: {
        description: 'Adds Badge to the Even Teaser',
        type: 'object',
      },
      cta: {
        description: 'Event Teaser CTA',
        type: 'object',
      },
      variant: {
        description: 'Changes Event Teaser Size',
        type: 'number',
      },
      url: {
        description: 'Event Teaser URL',
        type: 'string',
      },
      index: {
        description: 'Adds Index for the Animation Step',
        type: 'number',
      },
      teaser: {
        description: 'Toggles Event teaser',
        control: {
          type: 'boolean',
        },
      },
    },
  }),
};

export const EventTeaserWebcast = {
  args: {
    headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
    content:
      '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
    moment: '16.02.2022',
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
    author: ['Nadine Kern', 'Max Mustermann'],
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
      external: true,
    },
    variant: 6,
  },
};

export const EventTeaserBackground = {
  args: {
    headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
    content:
      '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
    moment: '16.02.2022',
    time: '14-15 Uhr',
    shapes: [
      {
        color: 'var(--color-green)',
        height: 1,
        width: 110,
      },
    ],
    webcast: true,
    author: ['Nadine Kern', 'Max Mustermann'],
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
      external: true,
    },
    variant: 6,
  },
};

// TODO fix this example so the image flows over the whole background
export const EventTeaserImage = {
  args: {
    headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
    content:
      '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
    moment: '16.02.2022',
    time: '14-15 Uhr',
    webcast: true,
    author: ['Nadine Kern', 'Max Mustermann'],
    image: {
      img: 'events/microsoft-cloud-device-security-event.jpg',
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
      external: true,
    },
    variant: 6,
  },
};

export const EventTeaserFullWidth = {
  args: {
    headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
    content:
      'Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was even in the midst of the all the negative influences from family TWhen',
    moment: '16.02.2022',
    time: '14-15 Uhr',
    shapes: [
      {
        color: 'var(--color-yellow)',
      },
    ],
    webcast: true,
    author: ['Nadine Kern', 'Max Mustermann'],
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
      href: 'javascript:void(0)',
      skin: 'primary',
    },
    variant: 12,
  },
};

export const EventTeaserCustomShapes = {
  args: {
    headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
    content:
      '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
    moment: '16.02.2022',
    time: '14-15 Uhr',
    shapes: [
      {
        color: 'var(--color-green)',
        peak: 'right',
        height: 26,
      },
      {
        color: 'var(--color-gigas)',
        height: 10,
        width: 45,
      },
    ],
    webcast: true,
    author: ['Nadine Kern', 'Max Mustermann'],
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
      href: 'javascript:void(0)',
      skin: 'primary',
    },
    variant: 6,
  },
};

export const EventTeaserTraining = {
  args: {
    headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
    time: '1-4 Tage',
    shapes: [
      {
        color: 'var(--color-yellow)',
      },
      {
        color: 'var(--color-blue-medium)',
      },
    ],
    author: ['Nadine Kern', 'Max Mustermann'],
    image: {
      img: '/demo/authors-demo.png',
      alt: 'lorem ipsum',
    },
    badge: {
      text: 'Training',
      textColor: 'var(--color-black)',
      color: 'var(--color-sunglow)',
    },
    price: 'Kostenlos',
    url: 'javascript:void(0)',
  },
};

export const EventTeaser = {
  args: {
    teaser: true,
    headline: 'Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content:
      '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
    cta: {
      text: 'Schulungen anfragen',
      href: 'javascript:void(0)',
      skin: 'secondary is-light',
    },
    variant: 8,
  },
};
