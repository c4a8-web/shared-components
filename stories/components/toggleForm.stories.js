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
    textLeft: 'Free',
    textRight: 'Pro',
    id: 'formToggleSwitch',
    targetSelector: '.toggle-form__switch',
    targetSelectorClass: 'toggle-form__switch',
    hint: false,
  },
  forms: [
    {
      headline: 'Free Edition',
      subline:
        'Are you interested to try a "beta" version of the Enterprise Edition? Fill out the form and we will contact you We d love to hear from you!',
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
          label: 'E-Mail Adresse',
          type: 'email',
          col: 12,
          rowStart: true,
          required: true,
          id: 'email',
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
    {
      headline: 'Pro Form',
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
  ],
};
