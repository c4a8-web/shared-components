import { createComponent, getTitle } from '../../.storybook/templates';
import { includesformattachmentshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Form Attachments',
});

export default {
  ...options,
};

const baseArgs = {};

const Template = (args) => createComponent(args, component);

export const FormAttachments = Template.bind({});

FormAttachments.args = {
  ...baseArgs,
};
