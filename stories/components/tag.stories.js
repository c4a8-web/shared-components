import { createComponent, getTitle } from '../../.storybook/templates';
import { includestaghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Tag',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const WithCount = Template.bind({});

WithCount.args = {
  tag: 'Microsoft',
  count: 10,
};

export const WithoutCount = Template.bind({});

WithoutCount.args = {
  tag: 'Modern Workplace',
  filter: 'Modern Workplace',
};

export const WithSpacing = Template.bind({});

WithSpacing.args = {
  tag: 'Modern Workplace',
  spacing: 3,
};
