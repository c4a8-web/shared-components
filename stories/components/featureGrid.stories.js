import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesfeaturegridhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Feature Grid',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  featureGrid: {
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

export const WithImage = Template.bind({});

WithImage.args = {
  featureGrid: {
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
