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
  clientName: 'c4a8',
  jobId: '1327578',
  apiUrl: 'mock/jobList.xml',
  base: {
    ctaText: 'Jetzt bewerben',
    ctaButton: true,
  },
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
        label: 'Link zum Portfolio',
        type: 'text',
        col: 6,
        rowStart: true,
        id: 'portfolio',
        showIn: ['fk0stpa'],
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
        id: 'privacy',
        required: true,
      },
    ],
  },
  personQuote: {
    img: 'career/remote-working.png',
    text: 'Viel geiler geht’s nicht, aber wir arbeiten daran. Neun firmenübergreifende Teams arbeiten an Themen wie ganzheitlichen Angeboten für unsere Kunden und gemeinsamen Projektbörsen sowie Produktentwicklung. Endlich mit Profis!',
    name: 'Jochen, dein neuer Kollege',
  },
  googleMaps: {
    headline: {
      text: 'Hier sind wir',
      level: 'h3',
    },
    address: {
      name: 'glueckkanja AG',
      street: 'Kaiserstraße 39',
      postalCode: '63065',
      city: 'Offenbach am Main',
    },
  },
  modalSuccess: {
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
};
export const De = Template.bind({});

De.args = {
  ...baseArgs,
};

export const En = Template.bind({});

En.args = {
  ...baseArgs,
  jobId: 'fk034tm',
  apiUrl: 'mock/jobEn.json',
};

export const WithVideo = Template.bind({});

WithVideo.args = {
  ...baseArgs,
  jobId: 'videoInner',
};
