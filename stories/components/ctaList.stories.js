import { getDefaultSettings } from '../../.storybook/templates';
import { includesctalisthtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    getArgTypes: {
      list: {
        description: 'A List of Cta',
        type: 'array',
      },
      classes: {
        description: 'Adds Css Helper Classes',
        type: 'string',
      },
    },
  }),
  title: 'Components/Cta List',
};

export const Buttons = {
  args: {
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
  },
};

export const LinkList = {
  args: {
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
  },
};
