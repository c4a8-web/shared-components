import { createComponent, getTitle } from '../../.storybook/templates';
import { includestoggleformhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Toggle Form',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});
Default.args = {
  toggleSwitch: {
    textLeft: 'Unified Contacts <br/> Free',
    textRight: 'Unified Contacts <br/> Pro',
    id: 'formToggleSwitch',
    targetSelector: '.toggle-form__switch',
    targetSelectorClass: 'toggle-form__switch',
    limit: true,
    hint: false,
  },
  forms: [
    {
      cta: {
        skin: 'primary',
        width: 'w-50',
      },
      ctaText: 'Bewerbung absenden',
      method: 'post',
      action: '',
      fields: [
        {
          label: 'Firma',
          type: 'text',
          col: 12,
          rowStart: true,
          required: true,
          id: 'Company',
        },
        {
          label: 'Vorname',
          type: 'text',
          col: 6,
          rowStart: true,
          required: true,
          id: 'firstname',
        },
        {
          label: 'Nachname',
          type: 'text',
          col: 6,
          rowEnd: true,
          required: true,
          id: 'lastname',
        },
        {
          label: 'Straße und Hausnr. (optional)',
          type: 'text',
          col: 12,
          rowStart: true,
          id: 'postal',
        },
        {
          label: 'Postleitzahl',
          type: 'text',
          col: 6,
          rowStart: true,
          required: true,
          id: 'postal',
        },
        {
          label: 'Stadt',
          type: 'text',
          col: 6,
          rowEnd: true,
          required: true,
          id: 'city',
        },
        {
          label: 'Land (optional)',
          type: 'select',
          id: 'lorem',
          col: 12,
          rowStart: true,
          rowClass: 'mb-4',
          options: 'options',
        },
        {
          label: 'E-Mail Adresse',
          type: 'text',
          col: 12,
          rowStart: true,
          id: 'country',
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
        {
          label: '<small>Newsletter</small>',
          type: 'checkbox',
          id: 'privacy',
          required: true,
        },
      ],
    },
    {
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
          label: 'Straße und Hausnr. (optional)',
          type: 'email',
          col: 12,
          rowStart: true,
          required: true,
          id: 'email',
        },
        {
          label: 'Postleitzahl',
          type: 'text',
          col: 6,
          rowStart: true,
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
  ],
};
