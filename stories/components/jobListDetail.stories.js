import { createComponent, getTitle } from '../../.storybook/templates';
import { includesjoblistdetailhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Job/Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  clientName: 'glueckkanja',
  jobId: 'fk034tm',
  apiUrl: 'mock/job.json',
  base: {
    ctaText: 'Jetzt bewerben',
    ctaButton: true,
  },
  form: {
    headline: 'Bewerbungsformular (m/w/d)',
    cta: {
      skin: 'primary',
      width: 'w-30',
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
        id: 'name',
      },
      {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
        id: 'surname',
      },
      {
        label: 'E-Mail Adresse',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true,
        id: 'mail',
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
        id: 'time',
      },
      {
        label: 'Gehaltsvorstellung (optional)',
        type: 'text',
        col: 6,
        rowEnd: true,
        id: 'money',
      },
      {
        label: 'Nachricht (optional)',
        type: 'textarea',
        id: 'msg',
      },
      {
        type: 'file',
        col: 6,
        rowStart: true,
        rowEnd: true,
        formAttachments: {
          description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
          text: 'Oder Datei auswählen',
          extensions: ['pdf', 'txt'],
          maxSize: 10000000,
        },
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

export const Detail = Template.bind({});

Detail.args = {
  ...baseArgs,
};
