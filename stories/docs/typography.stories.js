import { createComponent, getTitle } from '../../.storybook/templates';

import typographyHtml from '!!raw-loader!./typography.html';

const options = getTitle({
  title: 'Typography',
  docs: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, typographyHtml);

const baseArgs = {};

export const Typography = Template.bind({});

Typography.args = {
  ...baseArgs,
  types: [
    {
      headline: 'Headline Sizes',
    },
    {
      class: 'h1-font-size',
      light: true,
    },
    {
      class: 'h1-font-size',
    },
    {
      class: 'h2-font-size',
    },
    {
      class: 'h2-font-size',
      bold: true,
    },
    {
      class: 'h3-font-size',
    },
    {
      class: 'h3-font-size',
      bold: true,
    },
    {
      class: 'h4-font-size',
    },
    {
      class: 'h4-font-size',
      light: true,
    },
    {
      class: 'h5-font-size',
    },
    {
      class: 'h6-font-size',
    },
    {
      headline: 'Copy Sizes',
    },
    {
      class: 'font-size-1',
    },
    {
      class: 'font-size-1',
      bold: true,
    },
    {
      class: 'font-size-2',
    },
    {
      class: 'font-size-2',
      bold: true,
    },
    {
      class: 'font-size-3',
    },
    {
      class: 'font-size-3',
      bold: true,
    },
    {
      class: 'font-size-4',
    },
    {
      class: 'font-size-4',
      light: true,
    },
    {
      headline: 'Extra Sizes',
    },
    {
      class: 'font-size-5',
    },
    {
      class: 'font-size-5',
      light: true,
    },
    {
      class: 'font-size-6',
    },
    {
      class: 'font-size-6',
      light: true,
    },
    {
      class: 'font-size-7',
    },
    {
      class: 'font-size-7',
      light: true,
    },
  ],
};
