// import { getParams } from '../.storybook/templates';
import HeaderComponent from '../components/v-header.vue';
import HeaderData from '../.storybook/data/header';

export default {
  title: 'Components/Header',
  // ...getParams({ page: true }), // TODO make sure padding is removed for that
  component: HeaderComponent,
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />
          <div style="margin-top: 50vh;height: 200vh;" class="dummy-content"></div>
        </div>
      `,
    }),
  ],
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
  showSecondaryNavigation: true,
  theme: 'radiusaas',
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
