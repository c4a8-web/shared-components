import { createComponent } from '../../.storybook/templates';
import colorsHtml from '!!raw-loader!./colors.html';

export default {
  title: 'Docs/Colors',
};

const Template = (args) => createComponent(args, colorsHtml);

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
