import { createComponent, getTitle } from '../../.storybook/templates';
import { includesshapehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Shape',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const SBlock = Template.bind({});

SBlock.args = {
  shapes: [
    {},
    {},
    {},
    {
      backgroundColor: '#673ab7', // TODO this will be the default in the pyramid shape
    },
  ],
};

export const SBlockTheme = Template.bind({});

SBlockTheme.args = {
  shapes: [
    {
      backgroundColor: 'var(--color-primary)',
      foregroundColor: 'var(--color-white)',
      thirdColor: '#ff0000',
    },
    {
      backgroundColor: 'var(--color-primary)',
      foregroundColor: 'var(--color-white)',
      thirdColor: '#ff0000',
    },
    {
      backgroundColor: 'var(--color-secondary)',
      foregroundColor: 'var(--color-white)',
      thirdColor: 'var(--color-primary-accent)',
    },
    {
      backgroundColor: 'var(--color-primary)',
      foregroundColor: 'var(--color-white)',
      thirdColor: '#ff0000',
    },
  ],
};
