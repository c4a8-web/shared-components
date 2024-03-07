import { createComponent, getTitle } from '../../.storybook/templates';
import { includessocialshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Socials',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const VerticalNoLabel = Template.bind({});

VerticalNoLabel.args = {
  vertical: true,
  hideLabel: true,
};

export const Label = Template.bind({});

Label.args = {};

export const Expand = Template.bind({});

Expand.args = {
  expand: true,
  hideLabel: true,
};

export const ExpandLabel = Template.bind({});

ExpandLabel.args = {
  expand: true,
  hideLabel: false,
};
