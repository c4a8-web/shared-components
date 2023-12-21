import { createComponent, getTitle } from '../../.storybook/templates';
import { includesformattachmentshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Form Attachments',
});

export default {
  ...options,
};

const baseArgs = {
  description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
  text: 'Oder Dateien auswählen',
  extensions: ['pdf', 'txt', 'doc'],
  maxSize: 20000000,
  id: 'file',
};

const Template = (args) => createComponent(args, component);

export const NotRequired = Template.bind({});

NotRequired.args = {
  ...baseArgs,
};

export const RequiredWithError = Template.bind({});

RequiredWithError.args = {
  ...baseArgs,
  required: true,
  requiredMsg: 'Bitte einen Anhang hinzufügen',
  hasError: true,
};

export const RequiredMaxTwoFiles = Template.bind({});

RequiredMaxTwoFiles.args = {
  ...baseArgs,
  required: true,
  requiredMsg: 'Bitte einen Anhang hinzufügen',
  maxFiles: 2,
};
