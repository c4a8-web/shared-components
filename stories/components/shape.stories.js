import { createComponent, getTitle } from '../../.storybook/templates';
import { includesshapehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Shape',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ShapeFastForward = Template.bind({});

ShapeFastForward.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-fast-forward',
      backgroundColor: 'var(--color-primary-accent)',
      foregroundColor: 'var(--color-primary-accent-light)',
      thirdColor: 'var(--color-secondary)',
    },
  ],
};

export const ShapeSquareCircle = Template.bind({});

ShapeSquareCircle.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-square-circle',
      backgroundColor: 'var(--color-primary-accent)',
      circleColor: 'var(--color-secondary)',
    },
  ],
};

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
      backgroundColor: 'var(--color-primary-accent)',
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
