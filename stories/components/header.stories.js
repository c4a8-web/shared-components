import { createComponent, getTitle } from '../../.storybook/templates';
import headerTemplate from '!!raw-loader!./header.html';

const options = getTitle({
  title: 'Header',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, headerTemplate);

export const Header = Template.bind({});

Header.args = {};

export const HeaderLight = Template.bind({});

HeaderLight.args = {
  light: true,
  blendMode: true,
  bgColor: 'var(--color-blue-dark)',
};

export const HeaderEN = Template.bind({});

HeaderEN.args = {
  lang: 'en',
};

export const HeaderES = Template.bind({});

HeaderES.args = {
  lang: 'es',
};

const productArgs = {
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
  lang: 'en',
  search: true,
};
