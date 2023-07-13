import { createComponent, getTitle } from '../../.storybook/templates';
import { includesctalisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Cta List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Buttons = Template.bind({});

Buttons.args = {
  list: [
    {
      ctaText: 'Jump on the Phone',
      ctaHref: 'javascript:void(0);',
      skin: 'primary',
      icon: 'phone',
    },
    {
      ctaText: 'Mail us',
      ctaHref: 'javascript:void(0);',
      skin: 'secondary',
      icon: 'mail',
    },
  ],
};

export const LinkList = Template.bind({});

LinkList.args = {
  list: [
    {
      ctaText: 'Modern Workplace',
      ctaHref: 'javascript:void(0);',
      link: true,
    },
    {
      ctaText: 'Azure',
      ctaHref: 'javascript:void(0);',
      link: true,
    },
    {
      ctaText: 'Security',
      ctaHref: 'javascript:void(0);',
      link: true,
    },
  ],
};
