import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includesctalisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Cta List',
});

export default getArgTypes({
  ...options,
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
});

export const Buttons = createStory(component, {
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
});

export const LinkList = createStory(component, {
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
});
