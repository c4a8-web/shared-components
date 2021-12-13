import { createComponent, getTitle } from '../../.storybook/templates';
import { includesformhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Form',
});

export default {
  ...options,
};

const baseArgs = {
  container: true,
  form: {
    headline: 'Headline Form',
    subline: 'Subline lorem ipsum dolor sit',
    cta: {
      skin: 'primary',
      width: 'w-50',
    },
    ctaText: 'Bewerbung absenden',
    method: 'post',
    action: '',
    fields: [
      {
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true,
      },
      {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
      },
      {
        label: 'E-Mail Adresse',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true,
      },
      {
        label: 'Telefon',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
      },
      {
        label: 'Kündigungsfrist (optional)',
        type: 'text',
        col: 6,
        rowStart: true,
      },
      {
        label: 'Gehaltsvorstellung (optional)',
        type: 'text',
        col: 6,
        rowEnd: true,
      },
      {
        label: 'Nachricht (optional)',
        type: 'textarea',
      },
      {
        label:
          "<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",
        type: 'checkbox',
        id: 'privacy',
        required: true,
      },
    ],
  },
  light: false,
};

const Template = (args) => createComponent(args, component);

export const BaseValidation = Template.bind({});

BaseValidation.args = {
  ...baseArgs,
};

export const WithCheckboxes = Template.bind({});

WithCheckboxes.args = {
  ...baseArgs,
  form: {
    headline: 'Headline with Checkboxes',
    subline: 'Subline lorem ipsum dolor sit',
    cta: {
      skin: 'primary',
      width: 'w-50',
    },
    ctaText: 'Bewerbung absenden',
    method: 'post',
    action: '',
    fields: [
      {
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true,
      },
      {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
      },
      {
        label: 'Lorem ipsum',
        type: 'text',
        required: true,
      },
      {
        label: 'How are your client devices managed?',
        id: 'managed_',
        required: true,
        requiredMsg: 'Please select at least one answer.',
        checkboxes: [
          {
            id: 'not 1',
            label: 'Not managed 1',
          },
          {
            id: 'not 2',
            label: 'Not managed 2',
          },
          {
            id: 'not 3',
            label: 'Not managed 3 ',
          },
          {
            id: 'not 4',
            label: 'Not managed 4',
          },
        ],
      },
    ],
  },
};
