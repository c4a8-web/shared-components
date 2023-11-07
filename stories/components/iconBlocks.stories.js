import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import iconBlocksTemplate from '!!raw-loader!./icon-blocks.html';

const options = getTitle({
  title: 'Icon Blocks',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, iconBlocksTemplate);

export const Default = Template.bind({});

Default.args = {
  iconBlocks: {
    items: [
      {
        image: getAssetPath('svg/logos/logo-windows10.svg'),
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-azure-ad.svg'),
        alt: 'Azure Active Directory',
        headline: 'Azure Active Directory',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-msft-defender-for-endpoint-org.svg'),
        alt: 'Microsoft Defender for Endpoint',
        headline: 'Microsoft Defender<br />for Endpoint',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-endpoint-manager.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-m365-apps.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-realmjoin.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: '',
      },
    ],
  },
};

export const CustomColumnCount = Template.bind({});

CustomColumnCount.args = {
  columns: 4,
  classes: 'h3-font-size',
  iconBlocks: {
    cta: {
      text: 'Button',
      href: 'javascript:void(0)',
      skin: 'primary',
      button: true,
    },
    items: [
      {
        image: getAssetPath('svg/logos/logo-windows10.svg'),
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-azure-ad.svg'),
        alt: 'Azure Active Directory',
        headline: 'Azure Active Directory',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-msft-defender-for-endpoint-org.svg'),
        alt: 'Microsoft Defender for Endpoint',
        headline: 'Microsoft Defender<br />for Endpoint',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-endpoint-manager.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-m365-apps.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-realmjoin.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: '',
      },
    ],
  },
};

export const HeadlineAndSticky = Template.bind({});

HeadlineAndSticky.args = {
  columns: 4,
  classes: 'font-size-1 bold',
  sticky: true,
  iconBlocks: {
    items: [
      {
        image: getAssetPath('svg/logos/logo-windows10.svg'),
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-azure-ad.svg'),
        alt: 'Azure Active Directory',
        headline: 'Azure Active Directory',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-msft-defender-for-endpoint-org.svg'),
        alt: 'Microsoft Defender for Endpoint',
        headline: 'Microsoft Defender<br />for Endpoint',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-endpoint-manager.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-m365-apps.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-realmjoin.svg'),
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: '',
      },
    ],
  },
};
