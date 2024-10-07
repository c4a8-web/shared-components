import HeaderComponent from '../../components/v-header.vue';
import HeaderData from '../../../.storybook/data/header';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
};

const Template = (args) => ({
  components: { HeaderComponent },
  setup() {
    return { args };
  },
  template: '<HeaderComponent v-bind="args" />',
});

export const Header = Template.bind({});

Header.args = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
};

export const HeaderLight = Template.bind({});

HeaderLight.args = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
  light: true,
  blendMode: true,
  bgColor: 'var(--color-blue-dark)',
};

export const HeaderEN = Template.bind({});

HeaderEN.args = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
  lang: 'en',
};

export const HeaderES = Template.bind({});

HeaderES.args = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
  lang: 'es',
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
};

export const HeaderProduct = Template.bind({});

HeaderProduct.args = {
  ...productArgs,
};

export const HeaderProductLight = Template.bind({});

HeaderProductLight.args = {
  light: true,
  blendMode: true,
  ...productArgs,
};

export const HeaderSearch = Template.bind({});

HeaderSearch.args = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
  lang: 'en',
  search: true,
};
