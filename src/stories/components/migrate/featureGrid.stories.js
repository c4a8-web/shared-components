import FeatureGrid from '../../../components/feature-grid.vue';
import { getAssetPath } from '../../../../.storybook/templates';
import lottie1 from '../../data/lottie1.json';

export default {
  component: FeatureGrid,
  argTypes: {
    headline: {
      description: 'The Headline of the Feature Grid',
      type: 'string',
    },
    description: {
      description: 'The description of the Feature Grid',
      type: 'string',
    },
    features: {
      description: 'A List of Features with a corresponding Headline',
      type: 'array',
    },
    centered: {
      description: 'Toggle to center feature Grid',
      type: 'boolean',
    },
    spacing: {
      description: 'Adds helper classes for the spacing',
      control: {
        type: 'text',
      },
      type: {
        summary: 'Bootstrap Spacing',
        detail: 'space-bottom-1, space-bottom-2, space-top-1, space-top-2',
      },
    },
  },
  title: 'Components/Feature Grid',
};

export const Default = {
  args: {
    headline: 'Specifications',
    features: [
      {
        title: 'Contact Sources',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
          alt: 'Contact Sources',
        },
        list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
      },
      {
        title: 'Contact Card',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
          alt: 'Contact Card',
        },
        list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
      },
      {
        title: 'Platforms',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
          alt: 'Platforms',
        },
        list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
      },
      {
        title: 'ISO 27001',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
          alt: 'ISO 27001',
        },
        list: [
          'Our development and operations teams are certified',
          '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
        ],
      },
    ],
  },
};

export const WithImage = {
  args: {
    image: {
      src: getAssetPath('img/image-placeholder-1.jpg'),
      alt: 'lorem ipsum dolor sit amet',
    },
    headline: 'Specifications',
    features: [
      {
        title: 'Contact Sources',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
          alt: 'Contact Sources',
        },
        list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
      },
      {
        title: 'Contact Card',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
          alt: 'Contact Card',
        },
        list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
      },
      {
        title: 'Platforms',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
          alt: 'Platforms',
        },
        list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
      },
      {
        title: 'ISO 27001',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
          alt: 'ISO 27001',
        },
        list: [
          'Our development and operations teams are certified',
          '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
        ],
      },
    ],
  },
};

export const Centered = {
  args: {
    centered: true,
    headline: 'Specifications',
    features: [
      {
        title: 'Contact Sources',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
          alt: 'Contact Sources',
        },
        list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
        cta: {
          text: 'With Button',
          skin: 'primary is-cutoff',
          href: 'javascript:void(0)',
        },
      },
      {
        title: 'Contact Card',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
          alt: 'Contact Card',
        },
        list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
      },
      {
        title: 'Platforms',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
          alt: 'Platforms',
        },
        list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
      },
      {
        title: 'ISO 27001',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
          alt: 'ISO 27001',
        },
        list: [
          'Our development and operations teams are certified',
          '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
        ],
      },
    ],
  },
};

export const WithAnimation = {
  args: {
    image: {
      alt: 'lorem ipsum dolor sit amet',
      lottie: lottie1,
    },
    headline: 'Specifications',
    headlineClasses: 'text-left',
    features: [
      {
        title: 'Contact Sources',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
          alt: 'Contact Sources',
        },
        list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
      },
      {
        title: 'Contact Card',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
          alt: 'Contact Card',
        },
        list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
      },
      {
        title: 'Platforms',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
          alt: 'Platforms',
        },
        list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
      },
      {
        title: 'ISO 27001',
        image: {
          src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
          alt: 'ISO 27001',
        },
        list: [
          'Our development and operations teams are certified',
          '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
        ],
      },
    ],
  },
};

export const NoFeatures = {
  args: {
    headline: 'Architecture',
    alt: 'RADIUS Architecture',
    description: 'SCEPman is an Azure App deployed in your Azure tenant',
    backgroundColor: '',
    image: {
      preset: 'cardSmall',
      imgSrcSets: {
        srcSets: [
          {
            src: getAssetPath('img/image-placeholder-1.jpg'),
            media: '(min-width: 765px) and (orientation:landscape)',
          },
          {
            src: getAssetPath('img/image-placeholder-1.jpg'),
          },
        ],
      },
    },
  },
};
