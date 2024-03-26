import { createComponent } from '../../.storybook/templates';
import { includessvgshapehtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Svg Shape',
};

const Template = (args) => createComponent(args, component);

export const Yellow = Template.bind({});

Yellow.args = {
  color: 'var(--color-yellow)',
};

export const Blue = Template.bind({});

Blue.args = {
  color: 'var(--color-blue-medium)',
};

export const PrimaryAccent = Template.bind({});

PrimaryAccent.args = {
  color: 'var(--color-primary-accent)',
  peak: 'left',
};
