import { createComponent, getTitle } from '../../.storybook/templates';
import { includesjoblistdetailhtml as jobListDetailTemplate } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Job/Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, jobListDetailTemplate);

const baseArgs = {
  clientName: 'glueckkanja',
  jobId: 'fk034tm',
  apiUrl: 'mock/job.json',
  base: {
    ctaText: 'Jetzt bewerben',
    ctaButton: true,
  },
  form: {
    headline: 'Headline Form',
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
      },
      {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
      },
      {
        label: 'E-Mail Adresse',
        type: 'text',
        col: 6,
        rowStart: true,
      },
      {
        label: 'Telefon',
        type: 'text',
        col: 6,
        rowEnd: true,
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
};

export const Detail = Template.bind({});

Detail.args = {
  ...baseArgs,
};
