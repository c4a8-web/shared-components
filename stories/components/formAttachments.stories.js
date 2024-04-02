import { getDefaultSettings } from '../../.storybook/templates';
import { includesformattachmentshtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {
      description: {
        description: 'Description of the Form Attachment',
        type: 'string',
      },
      text: {
        description: 'Smaller underlined Subtext below the Description',
        type: 'string',
      },
      extensions: {
        description: 'Acceptable file types',
        control: {
          type: 'array',
        },
        type: {
          summary: 'Filetypes',
          detail: 'pdf, txt, doc, ...',
        },
      },
      maxSize: {
        description: 'Allowed max Filesize',
        type: 'number',
      },
      id: {
        description: 'Input Id for the Form Attachment',
        type: 'string',
      },
      required: {
        description: 'Toggle for required Form Attachment',
        type: 'boolean',
      },
      requiredMsg: {
        description: 'Message for the required Form Attachment',
        type: 'string',
      },
      hasError: {
        description: 'Toggle for Error in Form Attachment',
        type: 'boolean',
      },
    },
  }),
  title: 'Components/Form Attachments',
};

const baseArgs = {
  description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
  text: 'Oder Dateien auswählen',
  extensions: ['pdf', 'txt', 'doc'],
  maxSize: 20000000,
  id: 'file',
};

export const NotRequired = {
  args: {
    ...baseArgs,
  },
};

export const RequiredWithError = {
  args: {
    ...baseArgs,
    required: true,
    requiredMsg: 'Bitte einen Anhang hinzufügen',
    hasError: true,
  },
};

export const RequiredMaxTwoFiles = {
  args: {
    ...baseArgs,
    required: true,
    requiredMsg: 'Bitte einen Anhang hinzufügen',
    maxFiles: 2,
  },
};
