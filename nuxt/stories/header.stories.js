import HeaderComponent from '../components/v-header.vue';
import HeaderData from '../.storybook/data/header';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
};

export const Header = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    // lang: 'de', // should be default
  },
};

export const HeaderLight = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    light: true,
    blendMode: true,
    bgColor: 'var(--color-blue-dark)',
  },
};

export const HeaderEN = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
  },
};

export const HeaderES = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'es',
  },
};

const productArgs = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
  lang: 'en',
  product: true,
  button: {
    text: 'Start now',
    href: '/start-now/',
    skin: 'primary is-cutoff',
  },
  home: {
    name: 'home',
    imgLight: '/logos/radius-logo-white.svg',
    img: '/logos/radius-logo-green.svg',
    languages: {
      en: {
        title: 'Home EN',
        url: '',
        alt: 'alt text EN',
      },
    },
  },
  navigation: [
    {
      name: 'home',
      languages: {
        de: {
          title: 'Home',
          url: '',
        },
        en: {
          title: 'Home EN',
          url: '',
        },
      },
    },
    {
      name: 'pricing',
      languages: {
        en: {
          title: 'Pricing EN',
          url: '',
          active: true,
        },
      },
    },
    {
      name: 'partner',
      languages: {
        en: {
          title: 'Partner EN',
          url: '',
        },
      },
    },
    {
      name: 'docs',
      languages: {
        en: {
          title: 'Docs',
          url: 'https://docs.radiusaas.com/',
          target: '_blank',
        },
      },
    },
  ],
  meta: ' ',
  contact: ' ',
  secondaryNavigation: {
    text: 'Discover our products',
    children: [
      {
        name: 'lorem ipsum 1',
        products: true,
        children: [
          {
            name: 'realmjoin',
            img: 'products/realmjoin/realmjoin-nav-logo.svg',
            target: '_blank',
            languages: {
              de: {
                title: 'RealmJoin',
                subtitle: 'Cloudbasierte Softwareverteilung',
                url: 'https://www.realmjoin.com/',
              },
              en: {
                title: 'RealmJoin',
                subtitle: 'Cloudbased Software distribution',
                url: 'https://www.realmjoin.com/',
              },
              es: {
                title: 'RealmJoin',
                subtitle: 'Cloudbased Software distribution',
                url: 'https://www.realmjoin.com/',
              },
            },
          },
          {
            name: 'scepman',
            img: 'products/scepman/scepman-nav-logo.svg',
            target: '_blank',
            languages: {
              de: {
                title: 'SCEPman',
                subtitle: 'Zertifikatsverteilung aus der Cloud',
                url: 'https://www.scepman.com/',
              },
              en: {
                title: 'SCEPman',
                subtitle: 'Certificate distribution from the cloud',
                url: 'https://www.scepman.com/',
              },
              es: {
                title: 'SCEPman',
                subtitle: 'Certificate distribution from the cloud',
                url: 'https://www.scepman.com/',
              },
            },
          },
          {
            name: 'konnekt',
            img: 'products/konnekt/konnekt-nav-logo.svg',
            target: '_blank',
            languages: {
              de: {
                title: 'KONNEKT',
                subtitle: 'Arbeiten Sie lokal mit Ihren Office 365-Daten',
                url: 'https://www.konnekt.io/',
              },
              en: {
                title: 'KONNEKT',
                subtitle: 'Work with your local office 365 data',
                url: 'https://www.konnekt.io/',
              },
              es: {
                title: 'KONNEKT',
                subtitle: 'Work with your local office 365 data',
                url: 'https://www.konnekt.io/',
              },
            },
          },
        ],
      },
      {
        name: 'lorem ipsum 2',
        products: true,
        children: [
          {
            name: 'realmigrator',
            img: 'products/realmigrator/realmigrator-nav-logo.svg',
            target: '_blank',
            languages: {
              de: {
                title: 'RealMigrator',
                subtitle: 'Migrieren Sie alle Ihre Datenressourcen',
                url: 'https://www.realmigrator.com/',
              },
              en: {
                title: 'RealMigrator',
                subtitle: 'Migrate your data from one server to another',
                url: 'https://www.realmigrator.com/',
              },
              es: {
                title: 'RealMigrator',
                subtitle: 'Migrate your data from one server to another',
                url: 'https://www.realmigrator.com/',
              },
            },
          },
          {
            name: 'radiusaas',
            img: 'products/radius/radius-nav-logo.svg',
            target: '_blank',
            languages: {
              de: {
                title: 'RADIUSaaS',
                subtitle: 'Authentifizierung für Ihr Netzwerk',
                url: 'https://www.radius-as-a-service.com/',
              },
              en: {
                title: 'RADIUSaaS',
                subtitle: 'Authentication for your network',
                url: 'https://www.radius-as-a-service.com/',
              },
              es: {
                title: 'RADIUSaaS',
                subtitle: 'Authentication for your network',
                url: 'https://www.radius-as-a-service.com/',
              },
            },
          },
          {
            name: 'unifiedcontacts',
            img: 'products/unified-contacts/unifiedcontact-nav-logo.svg',
            target: '_blank',
            languages: {
              de: {
                title: 'Unified Contacts',
                subtitle: 'Finden Sie alle Ihre Kontakte in Microsoft Teams',
                url: 'https://www.unified-contacts.com/',
              },
              en: {
                title: 'Unified Contacts',
                subtitle: 'Find contacts in Microsoft Teams',
                url: 'https://www.unified-contacts.com/',
              },
              es: {
                title: 'Unified Contacts',
                subtitle: 'Find contacts in Microsoft Teams',
                url: 'https://www.unified-contacts.com/',
              },
            },
          },
        ],
      },
    ],
  },
};

export const HeaderProduct = {
  args: { ...productArgs },
};

export const HeaderProductLight = {
  args: {
    light: true,
    blendMode: true,
    ...productArgs,
  },
};

export const HeaderSearch = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    search: true,
  },
};
