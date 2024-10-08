import FormularComponent from '../../components/formular.vue';
import { analytics } from '../globalArgTypes';
import options from '../../../.storybook/data/options';

export default {
  component: FormularComponent,
  argTypes: {
    hasAnimation: {
      description: 'Toggles Animation for the Form',
      type: 'boolean',
    },
    analytics,
    form: {
      description: 'Form Content contains Headline/Subline/Cta/Fields etc.',
      type: 'object',
    },
    light: {
      description: 'Toggles Light Mode',
      type: 'boolean',
    },
    space: {
      description: 'Helper Class for the Form Spacing',
      type: {
        summary: 'Spacings',
        detail: 'space-top-1, space-top-2',
      },
    },
    container: {
      description: 'Toggles Container',
      type: 'boolean',
    },
    customValidation: {
      description: 'Toggles Custom Validation for the Form',
      type: 'boolean',
    },
    ajax: {
      description: 'Asynchronous Javascript and XML datatransfer',
      type: 'string',
    },
    additionalFields: {
      description: 'Adds additiona Fields',
      type: 'object',
    },
    uncentered: {
      description: 'Toggle to center/uncenter the Form',
      type: 'string',
    },
    replaceValue: {
      description: 'Replace Value for a Form Field',
      type: 'string',
    },
    options: {
      description: 'Field Options',
      type: 'object',
    },
    hasUuid: {
      description: 'Toggles unique id for fields',
      type: 'boolean',
    },
  },
  title: 'Components/Formular',
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
        label: 'Nachricht',
        type: 'textarea',
        id: 'message',
        required: true,
        requiredMsg: 'Bitte geben Sie eine Nachricht ein',
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

export const BaseValidation = {
  args: {
    ...baseArgs,
  },
};

export const BaseValidationWithUuid = {
  args: {
    ...baseArgs,
    hasUuid: true,
  },
};

export const WithCheckboxes = {
  args: {
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
          options: options.list,
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
          options: options.list,
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
            {
              id: 'other',
              placeholder: 'Other',
            },
          ],
        },
        {
          label: 'Lorem ipsum test',
          id: 'test_',
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
            {
              id: 'other',
              placeholder: 'Other',
            },
          ],
        },
        {
          label: 'Lorem Ipsum 2',
          id: 'test',
          required: true,
          requiredMsg: 'Please select at least one answer.',
          radios: [
            {
              id: 'not_1',
              label: 'change action',
              changeAction: 'www.google.com',
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
  },
};

export const WithAnimation = {
  args: {
    ...baseArgs,
    hasAnimation: true,
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
          options: options.list,
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
          options: options.list,
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
  },
};
