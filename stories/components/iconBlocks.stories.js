import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesiconblockshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Icon Blocks',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

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
        alt: 'Endpoint gkgab-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: '',
      },
      {
        image: 'svg/icons-large/icon-m365-apps.svg',
        alt: 'Endpoint gkgab-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-realmjoin.svg'),
        alt: 'Endpoint gkgab-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: '',
      },
    ],
  },
};

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
        alt: 'Endpoint gkgab-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: '',
      },
      {
        image: 'svg/icons-large/icon-m365-apps.svg',
        alt: 'Endpoint gkgab-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: '',
      },
      {
        image: getAssetPath('svg/icons-large/icon-realmjoin.svg'),
        alt: 'Endpoint gkgab-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: '',
      },
    ],
  },
};
