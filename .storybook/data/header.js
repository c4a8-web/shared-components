const getStoryLink = function (story) {
  switch (story) {
    case 'header--en':
      return 'iframe.html?id=components-header--header-en&args=&viewMode=story';
      break;
    default:
      return 'iframe.html?id=components-header--header&args=&viewMode=story';
      break;
  }
};

const Header = {
  home: {
    name: 'home',
    imgLight: '/logos/gkgab-Logo-white-vektor.svg',
    img: '/logos/gkgab-Logo-vektor.svg',
    languages: {
      de: {
        title: 'Home DE',
        url: getStoryLink(),
        alias: '/',
        alt: 'alt text DE',
      },
      en: {
        title: 'Home EN',
        url: getStoryLink('header--en'),
        alt: 'alt text EN',
      },
    },
  },
  navigation: [
    {
      name: 'portfolio',
      languages: {
        de: {
          title: 'Portfolio',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam DE',
        },
        en: {
          title: 'Portfolio',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam EN',
        },
      },
      children: [
        {
          name: 'managed-services',
          languages: {
            de: {
              title: 'Managed Services',
            },
            en: {
              title: 'Managed Services',
            },
          },
          children: [
            {
              name: 'managed-workplace',
              languages: {
                de: {
                  title: 'Managed Workplace',
                  url: getStoryLink(),
                },
                en: {
                  title: 'Managed Workplace',
                  url: getStoryLink('header--en'),
                },
              },
            },
            {
              name: 'managed-azure',
              languages: {
                de: {
                  title: 'Managed Azure',
                  url: getStoryLink(),
                },
                en: {
                  title: 'Managed Azure',
                  url: getStoryLink('header--en'),
                },
              },
            },
            {
              name: 'managed-security',
              languages: {
                de: {
                  title: 'Managed Security',
                  url: getStoryLink(),
                },
                en: {
                  title: 'Managed Security',
                  url: getStoryLink('header--en'),
                },
              },
            },
          ],
        },
        {
          name: 'modern-workplace',
          languages: {
            de: {
              title: 'Modern Workplace DE',
            },
            en: {
              title: 'Modern Workplace EN',
            },
          },
          children: [
            {
              name: 'clear-spend-go-card',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: getStoryLink(),
                },
                en: {
                  title: 'dolor sit',
                  url: getStoryLink('header--en'),
                },
              },
            },
            {
              name: 'consulting-services',
              languages: {
                de: {
                  title: 'Consulting Services DE',
                  url: '/de/modern-workplace/consulting-services/',
                },
                en: {
                  title: 'Consulting Services EN',
                  url: '/en/modern-workplace/consulting-services/',
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
        {
          name: 'azure',
          languages: {
            de: {
              title: 'Azure / Cloud DE',
            },
            en: {
              title: 'Azure / Cloud EN',
            },
          },
          children: [
            {
              name: 'clear-spend-go-card',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem1',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem4',
              languages: {
                de: {
                  title: 'lorem ipsum 4',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 4',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem5',
              languages: {
                de: {
                  title: 'lorem ipsum 5',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 5',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
        {
          name: 'lorem ipsum 1',
          languages: {
            de: {
              title: 'lorem ipsum 1 DE',
            },
            en: {
              title: 'lorem ipsum 1 EN',
            },
          },
          children: [
            {
              name: 'lorem11',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem12',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem13',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'services',
      languages: {
        de: {
          title: 'Services',
          active: true,
        },
        en: {
          title: 'Services',
          active: true,
        },
      },
      children: [
        {
          name: 'lorem ipsum services 1',
          children: [
            {
              name: 'lorem1',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                  active: true,
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                  active: true,
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
        {
          name: 'lorem ipsum services 2',
          children: [
            {
              name: 'lorem1',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'cases',
      languages: {
        de: {
          title: 'Cases',
          url: '/cases-de/',
        },
        en: {
          title: 'Cases',
          url: '/cases-en/',
        },
      },
    },
    {
      name: 'company',
      languages: {
        de: {
          title: 'Unternehmen',
        },
        en: {
          title: 'Company',
        },
      },
      children: [
        {
          name: 'lorem ipsum 1',
          languages: {
            de: {
              title: 'lorem ipsum 1 DE',
            },
            en: {
              title: 'lorem ipsum 1 EN',
            },
          },
          children: [
            {
              name: 'lorem1',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
        {
          name: 'lorem ipsum 2',
          languages: {
            de: {
              title: 'lorem ipsum 2 DE',
            },
            en: {
              title: 'lorem ipsum 2 EN',
            },
          },
          children: [
            {
              name: 'lorem1',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
        {
          name: 'lorem ipsum 3',
          languages: {
            de: {
              title: 'lorem ipsum 3 DE',
            },
            en: {
              title: 'lorem ipsum 3 EN',
            },
          },
          children: [
            {
              name: 'lorem1',
              languages: {
                de: {
                  title: 'lorem ipsum',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem2',
              languages: {
                de: {
                  title: 'lorem ipsum 2',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 2',
                  url: 'javascript:void(0);',
                },
              },
            },
            {
              name: 'lorem3',
              languages: {
                de: {
                  title: 'lorem ipsum 3',
                  url: 'javascript:void(0);',
                },
                en: {
                  title: 'dolor sit 3',
                  url: 'javascript:void(0);',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'products',
      languages: {
        de: {
          title: 'Produkte',
          url: '/products-de/',
        },
        en: {
          title: 'Products',
          url: '/products-en/',
        },
      },
    },
  ],
  meta: [
    {
      name: 'karriere',
      languages: {
        de: {
          title: 'Karriere',
          url: '/de/karriere',
        },
        en: {
          title: 'Career',
          url: '/en/career',
        },
      },
    },
    {
      name: 'lorem999',
      languages: {
        de: {
          title: 'lorem ipsum blog',
          url: '/blog/',
        },
        en: {
          title: 'lorem ipsum blog',
          url: '/blog/index-en/',
        },
      },
    },
  ],
  contact: {
    languages: {
      de: {
        title: 'Kontakt Lorem DE',
        url: getStoryLink(),
      },
      en: {
        title: 'Contact Lorem EN',
        url: getStoryLink('header--en'),
      },
    },
  },
};

export default Header;
