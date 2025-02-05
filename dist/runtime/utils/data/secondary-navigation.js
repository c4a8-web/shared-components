const secondaryNavigation = {
  text: 'Discover our products',
  name: 'secondary-navigation',
  skin: 'header__item--is-slim',
  languages: {
    de: {
      title: 'Entdecke unsere Produkte',
    },
    en: {
      title: 'Discover our products',
    },
    es: {
      title: 'Descubra nuestros productos',
    },
  },
  children: [
    {
      name: 'secondary-products-1',
      products: true,
      children: [
        {
          name: 'konnekt',
          img: 'products/global/KONNEKT-ListView.svg',
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
        {
          name: 'radiusaas',
          img: 'products/global/RADIUSaaS-ListView.svg',
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
          name: 'scepman',
          img: 'products/global/SCEPman-ListView.svg',
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
      ],
    },
    {
      name: 'secondary-products-2',
      products: true,
      children: [
        {
          name: 'realmjoin',
          img: 'products/global/RealmJoin-ListView.svg',
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
          name: 'unifiedcontacts',
          img: 'products/global/UnifiedContacts-ListView.svg',
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
        {
          name: 'terraprovider',
          img: 'products/global/TerraProvider-ListView.svg',
          target: '_blank',
          languages: {
            de: {
              title: 'TerraProvider',
              subtitle: 'Terraform Provider für Microsoft 365',
              url: 'https://www.terraprovider.com/',
            },
            en: {
              title: 'TerraProvider',
              subtitle: 'Terraform Provider for Microsoft 365',
              url: 'https://www.terraprovider.com/',
            },
            es: {
              title: 'TerraProvider',
              subtitle: 'Terraform Provider para Microsoft 365',
              url: 'https://www.terraprovider.com/',
            },
          },
        },
      ],
    },
  ],
};

export default secondaryNavigation;
