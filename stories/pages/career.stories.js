import { createTemplate, hrefTo, getTitle } from '../../.storybook/templates';
import careerTemplate from '!!raw-loader!./career.html';
import { List } from '../components/jobList.stories';
import { JobApplication } from '../components/textImage.stories';
import { Contact } from '../components/fabButton.stories';
import { MultipleEntries } from '../components/faq.stories';

const options = getTitle({
  title: 'Career',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createTemplate(args, careerTemplate);

const baseArgs = {
  ...MultipleEntries?.args,
  ...List?.args,
  ...JobApplication?.args,
  detailUrl: {
    default: hrefTo('Pages/Jobs', ''),
    en: hrefTo('Pages/Jobs', ''),
  },
  maxItems: 4,
  expandText: 'Weitere Stellenanzeigen',
  fabModal: {
    ...Contact?.args,
  },
  faqModal: {
    id: 'bewerbung',
    apiUrl: 'mock/job.json',
    clientName: 'glueckkanja',
    jobId: 'fk0slx5',
    form: {
      headline: 'Bewerbungsformular (m/w/d)',
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
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
          label: 'Nachricht (optional)',
          type: 'textarea',
          id: 'message',
        },
        {
          type: 'file',
          col: 6,
          rowStart: true,
          rowEnd: true,
          formAttachments: {
            required: true,
            requiredMsg: 'Bitte einen Anhang hinzufügen',
            id: 'file',
            description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
            text: 'Oder Datei auswählen',
            extensions: ['pdf'],
            maxSize: 10000000,
          },
        },
        {
          label:
            "<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",
          type: 'checkbox',
          id: 'privacy3',
          required: true,
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
    success: {
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
        text: 'Schließen',
      },
      headline: {
        text: 'Vielen Dank',
      },
      subline:
        'Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.',
      subheadline: {
        text: 'So geht es nun weiter',
      },
      text: 'Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann',
    },
  },
};

export const Career = Template.bind({});

Career.args = {
  ...baseArgs,
};
