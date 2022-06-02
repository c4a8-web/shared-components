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

SBlock.args = {};
