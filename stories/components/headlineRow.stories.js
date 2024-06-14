import { createComponent } from '../../.storybook/templates';
import { includesheadlinerowhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Headline Row',
};

const Template = (args) => createComponent(args, component);

export const h1 = Template.bind({});

h1.args = {
  level: 'h1',
  text: 'Headline Level 1 default spacing',
};

export const h2 = Template.bind({});

h2.args = {
  level: 'h2',
  text: 'Headline Level 2 space-top-2',
  spacing: 'space-top-2',
};

export const Centered = Template.bind({});

Centered.args = {
  centered: true,
  level: 'h2',
  text: 'Headline Level 2 space-top-2',
  spacing: 'space-top-2',
};

export const LeftAlignment = Template.bind({});

LeftAlignment.args = {
  centered: true,
  level: 'h2',
  text: 'Headline Level 2 space-top-2',
  classes: 'text-left',
  spacing: 'space-top-2',
};
