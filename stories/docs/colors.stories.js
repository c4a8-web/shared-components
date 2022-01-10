import { createComponent, getTitle } from '../../.storybook/templates';

import colors from '!!raw-loader!./colors.html';

const options = getTitle({
  title: 'Colors',
  docs: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, colors);

const baseArgs = {};

export const Colors = Template.bind({});

Colors.args = {
  ...baseArgs,
  colors: [
    {
      color: 'var(--color-primary)',
    },
    {
      color: 'var(--color-primary-accent)',
    },
    {
      color: 'var(--color-primary-accent-light)',
    },
    {
      color: 'var(--color-secondary)',
    },
    {
      color: 'var(--color-secondary-accent)',
    },
    {
      color: 'var(--color-copy-highlight)',
    },
  ],
};
