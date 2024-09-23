import EventListComponent from '../../../components/event-list';

export default {
  component: EventListComponent,
  argTypes: {
    list: {
      description: 'List of Events',
      type: 'array',
    },
    settings: {
      description: 'Event Teaser Variant/Size',
      type: 'array',
    },
  },
  title: 'Components/Event List',
};

export const EventList = {
  args: {
    list: [
      {
        url: 'javascript:void(0)',
        headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
        content:
          'Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was',
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
          href: 'javascript:void(0)',
          skin: 'primary',
          button: true,
          external: true,
        },
      },
      {
        url: 'javascript:void(0)',
        headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
        content:
          '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
        moment: '16.02.2022',
        time: '14-15 Uhr',
        shapes: [
          {
            color: 'var(--color-green)',
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
          button: true,
          external: true,
        },
      },
      {
        url: 'javascript:void(0)',
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
      },
      {
        url: 'javascript:void(0)',
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
      },
      {
        url: 'javascript:void(0)',
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
      },
      {
        url: 'javascript:void(0)',
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
      },
    ],
    settings: [
      { variant: 6 },
      { variant: 6 },
      {
        variant: 8,
        teaser: {
          url: 'javascript:void(0)',
          teaser: true,
          headline: 'Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          content:
            '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
          cta: {
            text: 'Schulungen anfragen',
            skin: 'secondary is-light',
            button: true,
          },
        },
      },
      { variant: 4 },
    ],
  },
};
