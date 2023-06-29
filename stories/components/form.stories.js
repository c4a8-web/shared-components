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
  analytics: 'AW-1060776844/Uj_0CL3wgMgDEIzX6PkD',
  uncentered: false,
  form: {
    headline: 'Headline Form',
    subline: 'Subline lorem ipsum dolor sit',
    cta: {
      skin: 'primary',
      width: 'w-50',
    },
    ctaText: 'Bewerbung absenden',
    ctaPosition: 'justify-content-center',
    method: 'post',
    action: '',
    fields: [
      {
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true,
        id: 'firstName',
      },
      {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
        id: 'lastName',
      },
      {
        label: 'E-Mail Adresse',
        type: 'email',
        col: 6,
        rowStart: true,
        required: true,
        id: 'email',
      },
      {
        label: 'Telefon',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
        id: 'phone',
      },
      {
        label: 'Kündigungsfrist (optional)',
        type: 'text',
        col: 6,
        rowStart: true,
        id: 'cancellation',
      },
      {
        label: 'Gehaltsvorstellung (optional)',
        type: 'text',
        col: 6,
        rowEnd: true,
        id: 'salary',
      },
      {
        label: 'Sitze',
        type: 'text',
        col: 5,
        rowStart: true,
        rowEnd: true,
        id: 'seats',
      },
      {
        label: 'Nachricht (optional)',
        type: 'textarea',
        id: 'message',
      },
      {
        type: 'hidden',
        id: '_gotcha',
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
};

const Template = (args) => createComponent(args, component);

export const BaseValidation = Template.bind({});

BaseValidation.args = {
  ...baseArgs,
};

export const BaseValidationWithUuid = Template.bind({});

BaseValidationWithUuid.args = {
  ...baseArgs,
  uuid: true,
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
        label: 'Country',
        type: 'select',
        id: 'country',
        required: true,
        requiredMsg: 'Please select country.',
        placeholder: 'Select country',
        col: 6,
        rowStart: true,
        options: 'options',
      },
      {
        label: 'Do you have a Microsoft Teams Phone System License?',
        type: 'select',
        id: 'TeamsPhoneSystemLicense',
        required: true,
        requiredMsg: 'Please select an answer.',
        placeholder: 'Select an answer',
        options: [
          {
            value: 'yes',
            text: 'Yes',
          },
          {
            value: 'no',
            text: 'No',
          },
        ],
        col: 6,
        rowEnd: true,
      },
      {
        label: 'lorem',
        type: 'select',
        id: 'lorem',
        placeholder: 'lorem ipsum',
        col: 6,
        rowStart: true,
        options: 'options',
      },
      {
        label: 'lorem ipsum',
        type: 'select',
        id: 'loremid',
        placeholder: 'lorem ipsum',
        options: [
          {
            value: '1',
            text: '1',
          },
          {
            value: '2',
            text: '2',
          },
          {
            value: '3',
            text: '3',
          },
        ],
        col: 6,
        rowEnd: true,
      },
      {
        label: 'How are your client devices managed?',
        id: 'managed_',
        required: true,
        requiredMsg: 'Please select at least one answer.',
        checkboxes: [
          {
            id: 'not_1',
            label: 'Not managed 1',
          },
          {
            id: 'not_2',
            label: 'Not managed 2',
          },
          {
            id: 'not_3',
            label: 'Not managed 3 ',
          },
          {
            id: 'not_4',
            label: 'Not managed 4',
          },
        ],
      },
      {
        label: 'Lorem Ipsum 2',
        id: 'test',
        required: true,
        radios: [
          {
            id: 'not_1',
            label: 'Not managed 1',
          },
          {
            id: 'not_2',
            label: 'Not managed 2',
          },
          {
            id: 'not_3',
            label: 'Not managed 3 ',
          },
          {
            id: 'not_4',
            label: 'Not managed 4',
          },
        ],
      },
      {
        type: 'hidden',
        id: '_gotcha',
      },
    ],
  },
};
