const getStoryLink = function (story) {
  switch (story) {
    case 'header--en':
      return 'iframe.html?id=components-header--header-en&args=&viewMode=story';
      break;
    case 'header--es':
      return 'iframe.html?id=components-header--header-es&args=&viewMode=story';
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
      es: {
        title: 'Home ES',
        url: getStoryLink('header--es'),
        alt: 'alt text ES',
      },
    },
  },
  navigation: [
    {
      name: 'portfolio',
      languages: {
        de: {
          title: 'Portfolio',
        },
        en: {
          title: 'Portfolio',
        },
        es: {
          title: 'Portfolio',
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
            es: {
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
                es: {
                  title: 'Managed Workplace',
                  url: getStoryLink('header--es'),
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
                es: {
                  title: 'Managed Azure',
                  url: getStoryLink('header--es'),
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
                es: {
                  title: 'Managed Security',
                  url: getStoryLink('header--es'),
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
            es: {
              title: 'Modern Workplace ES',
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
                es: {
                  title: 'lorem ipsum',
                  url: getStoryLink('header--es'),
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
                es: {
                  title: 'Consulting Services ES',
                  url: '/es/modern-workplace/consulting-services/',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
            es: {
              title: 'Azure / Cloud ES',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
                es: {
                  title: 'lorem ipsum 4',
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
                es: {
                  title: 'lorem ipsum 5',
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
            es: {
              title: 'lorem ipsum 1 ES',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
        es: {
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
        es: {
          title: 'Cases',
          url: '/cases-es/',
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
        es: {
          title: 'Empresa',
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
            es: {
              title: 'lorem ipsum 1 ES',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
            es: {
              title: 'lorem ipsum 2 ES',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
            es: {
              title: 'lorem ipsum 3 ES',
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
                es: {
                  title: 'lorem ipsum',
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
                es: {
                  title: 'lorem ipsum 2',
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
                es: {
                  title: 'lorem ipsum 3',
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
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam DE',
        },
        en: {
          title: 'Products',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam EN',
        },
        es: {
          title: 'Productos',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ES',
        },
      },
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
        es: {
          title: 'Carrera',
          url: '/es/carrera',
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
        es: {
          title: 'lorem ipsum blog',
          url: '/blog/index-es/',
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
      es: {
        title: 'Contact Lorem ES',
        url: getStoryLink('header--es'),
      },
    },
  },
};

export default Header;
