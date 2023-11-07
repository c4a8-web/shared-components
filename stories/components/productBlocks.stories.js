import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesproductblockshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Product Blocks',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TwoItems = Template.bind({});

TwoItems.args = {
  productBlocks: {
    items: [
      {
        image: getAssetPath('svg/logos/gk-SCEPman.svg'),
        headline: '',
        copy: 'Erklären wer von Kauf über Azur Marketplace profitiert.  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        list: [
          {
            ctaText: 'Buy Lorem',
            ctaHref: 'https://www.glueckkanja.com/',
            target: '_blank',
          },
          {
            ctaText: 'Quote Lorem',
            ctaHref: 'https://www.glueckkanja.com/',
            target: '_blank',
            skin: 'secondary',
          },
        ],
      },
      {
        image: getAssetPath('svg/logos/gk-RADIUSaaS.svg'),
        headline: '',
        copy: 'Erklären wer von Kauf über Azur Marketplace profitiert.  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. wer von Kauf über Azur Marketplace profitiert.  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        list: [
          {
            ctaText: 'Buy Lorem',
            ctaHref: 'https://www.glueckkanja.com/',
            target: '_blank',
          },
        ],
      },
    ],
  },
  headline: 'Payment options',
  cloudinary: 'true',
};

export const FiveItems = Template.bind({});

FiveItems.args = {
  productBlocks: {
    items: [
      {
        image: getAssetPath('svg/logos/gk-SCEPman.svg'),
        headline: '',
        copy: '<ul class="dashed"><li>Get rid of your legacy PKI!</li><li>Issue and validate certificates for Intune managed clients for authentication purposes</li></ul>',
        ctaText: 'Go to SCEPman',
        ctaHref: 'https://scepman.com/',
        link: true,
        target: '_blank',
      },
      {
        image: getAssetPath('svg/logos/gk-RADIUSaaS.svg'),
        headline: '',
        copy: '<ul class="dashed"><li>Get rid of your RADIUS server!</li><li>Enjoy certificate-based authentication using the RADIUS protocol</li></ul>',
        ctaText: 'Go to RADIUSaaS',
        ctaHref: 'https://radius-as-a-service.com/',
        link: true,
        target: '_blank',
      },
      {
        image: getAssetPath('svg/logos/gk-KONNEKT.svg'),
        headline: '',
        copy: '<ul class="dashed"><li>Get rid of your file server!</li><li>Enjoy certificate-based authentication using the RADIUS protocol</li></ul>',
        ctaText: 'Go to KONNEKT',
        ctaHref: 'https://konnekt.io/',
        link: true,
        target: '_blank',
      },
      {
        image: getAssetPath('svg/logos/gk-RealmJoin.svg'),
        headline: '',
        copy: '<ul class="dashed"><li>Get rid of your legacy client management solution!</li><li>Empower Intune with additional features and easy access for your helpdesk staff</li><li>Get Intune-packages for all your Win32 and MacOS apps</li></ul>',
        ctaText: 'Go to RealmJoin',
        ctaHref: 'https://realmjoin.com/',
        link: true,
        target: '_blank',
      },
      {
        image: getAssetPath('svg/logos/logo-unified-contacts.svg'),
        headline: '',
        copy: '<ul class="dashed"><li>Find all your contacts in Microsoft Teams</li><li>Initiate calls, chats, or emails directly from the contact card</li><li>Mark your contacts as favorites</li></ul>',
        ctaText: 'Go to Unified Contacts',
        ctaHref: 'https://unified-contacts.com/',
        link: true,
        target: '_blank',
      },
      {
        image: getAssetPath('svg/logos/logo-real-migrator.svg'),
        headline: '',
        copy: '<ul class="dashed"><li>Find all your contacts in Microsoft Teams</li><li>Initiate calls, chats, or emails directly from the contact card</li><li>Mark your contacts as favorites</li></ul>',
        ctaText: 'Go to RealMigrator',
        ctaHref: 'https://realmigrator.com/',
        link: true,
        target: '_blank',
      },
    ],
  },
  headline: 'Payment options',
  cloudinary: 'true',
};
