import { createComponent, getTitle } from '../../.storybook/templates';
import { includeslogolisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Logo List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  logoList: [
    {
      img: '/c_lpad,h_60,w_180/logos/cust-dbschenker.png',
      alt: 'DB Schenker',
      url: 'https://youtu.be/ABUieErMHLU',
      title: 'DB Schenker',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-dmgmori.png',
      alt: 'DMG MORI',
      url: 'https://de.dmgmori.com/',
      title: 'DMG MORI',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-ewe-netz.png',
      alt: 'EWE',
      url: 'https://www.ewe-netz.de/',
      title: 'EWE',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-enbw.png',
      alt: 'EnBW',
      url: 'https://www.enbw.com/',
      title: 'EnBW',
    },
    {
      img: '/c_lpad,h_120,w_180/logos/cust-fuchs.png',
      alt: 'Fuchs Schmierstoffe',
      url: 'https://youtu.be/U2ExmypuUvs',
      title: 'Fuchs Schmierstoffe',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-freudenberg.png',
      alt: 'Freudenberg',
      url: 'https://www.freudenberg.com/',
      title: 'Freudenberg',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-gft.png',
      alt: 'GFT',
      url: 'https://www.gft.com/de/de/',
      title: 'GFT',
    },
    {
      img: '/c_lpad,h_60,w_160/logos/cust-haniel.png',
      alt: 'Haniel',
      url: 'https://youtu.be/hV97zDTlDko',
      title: 'Haniel',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-microsoft.png',
      alt: 'Microsoft',
      url: 'https://www.microsoft.com/en-us/microsoft-365/business?rtc=1',
      title: 'Microsoft',
    },
    {
      img: '/c_lpad,h_60,w_100/logos/cust-swb.png',
      alt: 'SWB',
      title: 'SWB',
    },
    {
      img: '/c_lpad,h_60,w_180/logos/cust-tge-gas.png',
      alt: 'TGE',
      url: 'https://tge-gas.com/',
      title: 'TGE',
    },
    {
      img: '/c_lpad,h_100,w_180/logos/cust-uniper.png',
      alt: 'Uniper',
      url: 'https://youtu.be/ThxpyUOz2R8',
      title: 'Uniper',
    },
  ],
};

export const defaultColumns = Template.bind({});

defaultColumns.args = {
  ...baseArgs,
};

export const customColumns = Template.bind({});

customColumns.args = {
  ...baseArgs,
  columns: 6,
};

customColumns.args.logoList.push(
  {
    img: '/c_lpad,h_60,w_180/logos/cust-microsoft.png',
    alt: 'Microsoft',
    url: 'https://www.microsoft.com/en-us/microsoft-365/business?rtc=1',
    title: 'Microsoft',
  },
  {
    img: '/c_lpad,h_60,w_100/logos/cust-swb.png',
    alt: 'SWB',
    title: 'SWB',
  }
);
