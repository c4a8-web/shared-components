import TextImageListComponent from '../../components/text-image-list.vue';

export default {
  title: 'Components/Text Image List',
  component: TextImageListComponent,
};

export const Default = {
  args: {
    headline: 'Lorem Ipsum',
    textImages: [
      {
        image: 'svg/icons/icon-consulting-services.svg',
        alt: 'Lorem Ipsum',
        headline: 'Expertise Lorem Ipsum',
        copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
        list: [
          {
            ctaText: 'Modern Workplace',
            ctaHref: '/de/modern-workplace/consulting-services',
          },
          {
            ctaText: 'Azure',
            ctaHref: '/de/azure/azure-consulting',
            link: true,
          },
          {
            ctaText: 'Security',
            ctaHref: '/de/security/security-consulting',
            link: true,
          },
        ],
      },
      {
        image: 'svg/icons/icon-products.svg',
        alt: 'Lorem Ipsum',
        headline: 'Expertise Lorem Ipsum 2',
        copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
      },
      {
        image: 'svg/icons/icon-consulting-services.svg',
        alt: 'Lorem Ipsum',
        headline: 'Expertise Lorem Ipsum 3',
        copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
        spacing: 'space-bottom-2',
      },
    ],
  },
};

export const StickyHeadline = {
  args: {
    level: 'h3',
    headline: 'Wo das Glück im Namen steckt.',
    headlineColor: 'var(--color-white)',
    headlineSticky: true,
    bgColor: 'var(--color-career-background)',
    textImages: [
      {
        image: 'svg/icons/flexibilitaet.svg',
        alt: 'hohe flexibilität',
        headline: 'Hohe Flexibilität',
        copy: 'dank frei planbarer Arbeitszeiten, garantiertem Homeoffice und technischem Equipment nach deinem Wunsch!',
      },
      {
        image: 'svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'nachhaltige mobilität',
        headline: 'Nachhaltige Mobilität',
        copy: 'mit E-Firmenwagen oder Poolfahrzeug und Bike-Leasing!',
      },
      {
        image: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'erfüllende aufgabe',
        headline: 'Erfüllende Aufgabe',
        copy: 'mit aufregenden Projekten!',
      },
      {
        image: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'top standorte',
        headline: 'Top Standorte',
        copy: 'mit hochmodernen Offices in Deutschland, Finnland & Australien!',
      },
      {
        image: 'svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'attraktive vergütung',
        headline: 'Attraktive Vergütung',
        copy: 'plus Boni, Prämien und vielen Sonderleistungen wie Kostenübernahme für die Kinderbetreuung oder deinen privaten Internetanschluss!',
      },
      {
        image: 'svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'wow events',
        headline: 'Wow-Events',
        copy: 'wie Mountainbike-Touren, jährliches Bootcamp, Grill&Chill und relaxtend Rooftop-Parties!',
      },
    ],
  },
};
