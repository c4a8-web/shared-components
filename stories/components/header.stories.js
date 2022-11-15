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
  product: true,
  button: {},
  home: {
    name: 'home',
    imgLight: '/logos/gkgab-Logo-white-vektor.svg',
    img: '/logos/gkgab-Logo-vektor.svg',
    languages: {
      de: {
        title: 'Home DE',
        url: '',
        alias: '/',
        alt: 'alt text DE',
      },
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
  meta: [],
};
