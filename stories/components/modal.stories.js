import { createComponent } from '../../.storybook/templates';
import { includesmodalhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Modal',
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  show: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
};

export const Slim = Template.bind({});

Slim.args = {
  show: true,
  slim: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
};
