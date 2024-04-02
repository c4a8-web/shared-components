import { createComponent } from '../../.storybook/templates';
import { includessocialshtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Socials',
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
