import { createComponent, getTitle } from '../../.storybook/templates';
import { includesserviceshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Services',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Services = Template.bind({});

Services.args = {
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
};

export const ServicesSocials = Template.bind({});

ServicesSocials.args = {
  title: 'Lorem Ipsum',
  items: [
    {
      text: 'Azure Active Directory',
      href: 'javascript:void(0)',
      external: true,
      link: true,
    },
    {
      text: 'Azure Virtual Desktop',
      href: 'javascript:void(0)',
      external: true,
      link: true,
    },
    {
      text: 'Exchange Online',
      href: 'javascript:void(0)',
      external: true,
      link: true,
    },
    {
      text: 'Microsoft 365',
      href: 'javascript:void(0)',
      external: true,
      link: true,
    },
    {
      text: 'Microsoft Intune',
      href: 'javascript:void(0)',
      external: true,
      link: true,
    },
  ],
  author: 'adrian-ritter',
};
