// import { getParams } from '../.storybook/templates';
import HeaderComponent from '../components/v-header.vue';
import HeaderData from '../.storybook/data/header';

export default {
  title: 'Components/Header',
  // ...getParams({ page: true }), // TODO make sure padding is removed for that
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        return { args: context.args };
      },
      template: `
        <story />
        <div v-if="args.onSurface" style="height: 200vh;background-color: var(--color-gk-yellow);opacity: 1;" class="dummy-content is--dark"></div>
        <div v-else style="height: 200vh;" class="dummy-content is--dark"></div>
      `,
    }),
  ],
};

export const Header = {
  args: {
    home: HeaderData.home,
    navigation: [
      ...HeaderData.navigation,
      {
        name: 'lorem-ipsum-extra',
        languages: {
          de: {
            title: 'Lorem Ipsum',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'Lorem Ipsum',
            url: 'javascript:void(0);',
          },
          es: {
            title: 'Lorem Ipsum',
            url: 'javascript:void(0);',
          },
        },
      },
    ],
    // lang: 'de', // should be default
  },
};

export const HeaderLight = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    light: true,
    blendMode: true,
    bgColor: 'var(--color-gk-dark-blue)',
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
    imgLight: '/products/scepman/scepman-logo-all-white.svg',
    img: '/products/scepman/scepman-logo-rgb.svg',
    languages: {
      en: {
        title: 'Home EN',
        url: '',
        alt: 'alt text EN',
      },
      es: {
        title: 'Home ES',
        url: '',
        alt: 'alt text ES',
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
        es: {
          title: 'Inicio ES',
          url: '',
        },
      },
    },
    {
      name: 'pricing',
      languages: {
        en: {
          title: 'Pricing EN',
          url: '/iframe.html',
        },
        es: {
          title: 'Precios ES',
          url: '/iframe.html',
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
        es: {
          title: 'Socios ES',
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
        es: {
          title: 'Docs',
          url: 'https://docs.radiusaas.com/',
          target: '_blank',
        },
      },
    },
  ],
  showSecondaryNavigation: true,
  theme: 'radiusaas',
};

export const HeaderProductOnSurface = {
  args: { ...productArgs, onSurface: true },
};

export const HeaderProduct = {
  args: { ...productArgs },
};

export const HeaderProductEN = {
  args: { ...productArgs, lang: 'en' },
};

export const HeaderProductES = {
  args: { ...productArgs, lang: 'es' },
};

const terraProviderNav = ['Precios', 'Partners', 'Support Hub', 'Eventos', 'Acerca de nosotros'].map(
  (title, index) => {
    const isDropdown = title === 'Support Hub';

    return {
      name: `terraprovider-${index}`,
      languages: {
        es: {
          title,
          ...(isDropdown ? {} : { url: '' }),
        },
      },
      ...(isDropdown
        ? {
            children: ['Documentacion', 'Descargas', 'Contacto'].map((childTitle) => ({
              name: `terraprovider-${index}-${childTitle.toLowerCase()}`,
              languages: {
                es: {
                  title: childTitle,
                  url: '',
                },
              },
            })),
          }
        : {}),
    };
  }
);

export const HeaderProductTerraProviderES = {
  args: {
    lang: 'es',
    product: true,
    theme: 'terraprovider',
    collapse: 22,
    showSecondaryNavigation: true,
    button: {
      text: 'Prueba gratuita',
      href: '/trial/',
      skin: 'primary is-cutoff',
      external: true,
    },
    home: {
      name: 'home',
      imgLight: '/products/terraprovider/logo-terraprovider-white.svg',
      img: '/products/terraprovider/logo-terraprovider.svg',
      languages: {
        es: {
          title: 'Home',
          url: '',
          alt: 'TerraProvider Logo',
        },
      },
    },
    navigation: terraProviderNav,
  },
};

export const HeaderProduct2 = {
  args: {
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
      imgLight: '/products/scepman/scepman-logo-all-white.svg',
      img: '/products/terraprovider/logo-terraprovider.svg',
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
            url: '/iframe.html',
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
    showSecondaryNavigation: true,
    theme: 'radiusaas',
  },
};
export const HeaderProductLight = {
  args: {
    light: true,
    ...productArgs,
    onSurface: true,
  },
};

export const HeaderProductLightBlendMode = {
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
