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
  bgColor: 'var(--color-blue-dark)',
};

export const HeaderEN = Template.bind({});

HeaderEN.args = {
  lang: 'en',
};

export const HeaderProduct = Template.bind({});

HeaderProduct.args = {
  lang: 'en',
  product: true,
  button: {
    text: 'Start now',
    href: '/start-now/',
    skin: 'primary is-cutoff',
  },
  home: {
    name: 'home',
    imgLight: '/logos/radius-logo-green.svg',
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
        de: {
          title: 'Pricing',
          url: '',
          active: true,
        },
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
        de: {
          title: 'Partner',
          url: '',
        },
        en: {
          title: 'Partner EN',
          url: '',
        },
      },
    },
  ],
  meta: ' ',
  contact: ' ',
};
