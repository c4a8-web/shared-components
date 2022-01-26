import { createComponent, getTitle } from '../../.storybook/templates';
import { includescontacthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Contact',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Expanded = Template.bind({});

Expanded.args = {};

export const Collapsed = Template.bind({});

Collapsed.args = {
  collapsed: true,
};
