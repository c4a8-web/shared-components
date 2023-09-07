import { createComponent, getTitle } from '../../.storybook/templates';
import { includesstagehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Stage',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Stage = Template.bind({});

Stage.args = {};
