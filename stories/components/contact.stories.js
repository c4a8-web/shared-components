import { createComponent, getTitle } from '../../.storybook/templates';
import { includescontacthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Contact',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Contact = Template.bind({});

Contact.args = {};
