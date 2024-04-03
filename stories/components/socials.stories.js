import { createComponent, site } from '../../.storybook/templates';
import { includessocialshtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Socials',
};

const Template = (args) => createComponent(args, component);

const author = site.data.authors['Carolin Kanja'];

export const VerticalNoLabel = Template.bind({});

VerticalNoLabel.args = {
  vertical: true,
  hideLabel: true,
  author,
};

export const Label = Template.bind({});

Label.args = {
  author: site.data.authors['Author Name 2'],
};

export const Expand = Template.bind({});

Expand.args = {
  expand: true,
  hideLabel: true,
  author,
};

export const ExpandLabel = Template.bind({});

ExpandLabel.args = {
  expand: true,
  hideLabel: false,
  author,
};
