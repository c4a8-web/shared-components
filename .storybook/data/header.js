const Header = {
  home: {
    name: 'home',
    imgLight: '/logos/gkgab-Logo-white-vektor.svg',
    img: '/logos/gkgab-Logo-vektor.svg',
    de: {
      title: 'Home DE',
      url: '/',
      alias: '/',
      alt: 'alt text DE',
    },
    en: {
      title: 'Home EN',
      url: '/en/',
      alt: 'alt text EN',
    },
  },
  navigation: [
    {
      name: 'competences',
      de: {
        title: 'Kompetenzen',
        // url: '/',
        // alias: '/',
      },
      en: {
        title: 'Competences',
        // url: '/en/',
      },
      children: [
        {
          name: 'modern-workplace',
          children: [
            {
              name: 'clear-spend-go-card',
              de: {
                title: 'ClearSpend Go Card DE',
                url: 'javascript:void(0);',
              },
              en: {
                title: 'ClearSpend Go Card EN',
                url: 'javascript:void(0);',
              },
            },
            {
              name: 'lorem1',
              de: {
                title: 'lorem ipsum',
                url: 'javascript:void(0);',
              },
              en: {
                title: 'dolor sit',
                url: 'javascript:void(0);',
              },
            },
            {
              name: 'lorem2',
              de: {
                title: 'lorem ipsum 2',
                url: 'javascript:void(0);',
              },
              en: {
                title: 'dolor sit 2',
                url: 'javascript:void(0);',
              },
            },
            {
              name: 'lorem3',
              de: {
                title: 'lorem ipsum 3',
                url: 'javascript:void(0);',
              },
              en: {
                title: 'dolor sit 3',
                url: 'javascript:void(0);',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Header;
