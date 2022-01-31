import { createComponent, getTitle } from '../../.storybook/templates';
import { includesheadlinerowhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Headline Row',
});

export default {
  ...options,
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
