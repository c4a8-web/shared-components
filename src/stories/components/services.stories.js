import ServicesComponent from '../../components/services';

export default {
  title: 'Components/Services',
  component: ServicesComponent,
};

export const Services = {
  args: {
    title: 'Products and Services',
    label: 'Industry',
    value: 'Manufacturing',
    items: [
      {
        text: 'Azure Active Directory',
        href: 'javascript:void(0)',
      },
      {
        text: 'Azure Virtual Desktop',
        href: 'javascript:void(0)',
      },
      {
        text: 'Exchange Online',
        href: 'javascript:void(0)',
      },
      {
        text: 'Microsoft 365',
        href: 'javascript:void(0)',
      },
      {
        text: 'Microsoft Intune',
        href: 'javascript:void(0)',
      },
    ],
  },
};

export const ServicesSocials = {
  args: {
    title: 'Lorem Ipsum',
    author: {
      socials: [
        {
          text: 'Azure Active Directory',
          href: 'javascript:void(0)',
        },
        {
          text: 'Azure Virtual Desktop',
          href: 'javascript:void(0)',
        },
        {
          text: 'Exchange Online',
          href: 'javascript:void(0)',
        },
        {
          text: 'Microsoft 365',
          href: 'javascript:void(0)',
        },
        {
          text: 'Microsoft Intune',
          href: 'javascript:void(0)',
        },
      ],
    },
  },
};

export const ServicesNoSocials = {
  args: {
    title: 'Lorem Ipsum',
    author: {},
  },
};
