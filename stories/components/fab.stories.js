import { createComponent, getTitle } from '../../.storybook/templates';
import { includesfabhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Fab',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Contact = Template.bind({});

Contact.args = {};
