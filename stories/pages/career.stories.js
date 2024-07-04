import { createTemplate, hrefTo, getParams } from '../../.storybook/templates';
import careerTemplate from '!!raw-loader!./career.html';
import { List } from '../components/jobList.stories';
import { JobApplication } from '../components/textImage.stories';
import { Contact } from '../components/fabButton.stories';
import { MultipleEntries } from '../components/faq.stories';

export default {
  ...getParams({ page: true }),
  title: 'Pages/Career',
};

const Template = (args) => createTemplate(args, careerTemplate);

const baseArgs = {
  ...MultipleEntries?.args,
  ...List?.args,
  ...JobApplication?.args,
  hero: {
    v2: true,
    bgColor: 'var(--color-blue-dark)',
    light: true,
    lightOverline: false,
    overline: 'Karriere',
    fullscreen: true,
    animation: {
      sequence: [
        {
          text: 'HEY,',
          textSize: 'font-size-7',
        },
        {
          text: 'Wo bin ich denn hier gelandet?',
        },
        {
          text: 'Da, wo eine neue Welt entsteht',
        },
        {
          text: 'Gemeinsam',
          subline:
            'wollen wir nichts weniger als die Welt verändern: die Dinge neu denken, die Revolution des Digitalen, einen Entwicklungssprung für unsere Kunden. Dafür braucht es Menschen, die nicht nach einem bloßen Job, sondern nach einer echten Aufgabe suchen. Menschen, die eine Vision haben. Menschen, die Utopien Realität werden lassen wollen.',
        },
      ],
    },
    background: {
      icon: 'smile',
    },
    cta: {
      text: 'Zu den Stellenanzeigen',
    },
  },
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
    apiUrl: 'mock/jobList.xml',
    jobId: '1327578',
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
          col: 12,
          rowStart: true,
          rowEnd: true,
          formAttachments: {
            required: true,
            requiredMsg: 'Bitte einen Anhang hinzufügen',
            id: 'file',
            description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
            text: 'Oder Dateien auswählen',
            extensions: ['pdf'],
            maxSize: 20000000,
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
  faqApplicationProcess: {
    headline: {
      text: '<span class="h3-font-size">Bewerbungsprozess & Kontakt</span>',
    },
    entries: [
      {
        summary:
          'An wen kann ich mich wenden, wenn ich Fragen zur Bewerbung habe oder das Unternehmen näher kennenlernen möchte?',
        text: "<p>Steffi ist deine Ansprechpartnerin. <a class='fab-trigger'>Kontaktiere sie jederzeit</a> für hilfreiche Tipps und Infos.</p>",
      },
      {
        summary: 'Kann ich mich auf mehrere Stellen gleichzeitig bewerben?',
        text: '<p><a href="mailto:v-steffi.altendorf@glueckkanja.com">Wende dich an Steffi</a>, um gemeinsam herauszufinden, welche Stelle am besten zu dir passt. Du kannst dich auch auf eine Stelle bewerben und im Anschreiben weitere Interessen erwähnen.</p>',
      },
      {
        summary:
          'Wie lange vor dem Einstiegstermin sollte ich mich bewerben? Wie lange dauert es von der Bewerbung bis zum Einstieg?',
        text: '<p>Bewirb dich, wenn du bereit für ein neues Abenteuer bist – keine festen Starttermine. Wir sind bereit, wenn du es bist 😉</p>',
      },
      {
        summary: 'Ich finde keine offene Stelle, die zu mir passt. Was kann ich tun?',
        text: "<p>Wir sind offen für neue Ideen. Kontaktiere uns über den Button <a class='is-component' data-trigger-id='bewerbung' data-trigger='modal'>\"Initiativbewerbung\"</a>, auch wenn die passende Stelle nicht online ist.</p>",
      },
      {
        summary: 'Ich habe bisher wenig Berufserfahrung. Kann ich mich trotzdem bewerben?',
        text: '<p>Ja! Bewirb dich direkt nach Uni, FH oder Ausbildung. Wir bieten ein Up-Skilling Programm für Einsteiger/innen mit Microsoft-Trainings.</p>',
      },
    ],
  },
  faqApplicationDocuments: {
    headline: {
      text: '<span class="h3-font-size">Bewerbungsunterlagen & Interviews</span>',
    },
    entries: [
      {
        summary: 'Wann ist meine Bewerbung vollständig?',
        text: '<p>Deine Bewerbung sollte bestehen aus: Anschreiben, Lebenslauf, (Arbeits–)Zeugnisse und sonstige relevante Nachweise/Zertifikate.</p>',
      },
      {
        summary: 'Wie geht es nach dem Versand meiner Bewerbung weiter?',
        text: '<p>Nach gründlicher Prüfung melden wir uns bei dir. Bei erfolgreichen Gesprächen erhältst du ein Angebot und den Arbeitsvertrag. Anschließend beginnt das Onboarding.</p>',
      },
      {
        summary: 'Wen lerne ich in den Gesprächen kennen?',
        text: '<p>Du triffst Recruiterin Steffi, deinen zukünftigen Lead, Teammitglieder und jemanden aus dem Management Board.</p>',
      },
      {
        summary: 'Wie kann ich mich auf das Vorstellungsgespräch vorbereiten?',
        text: '<p>Sei du selbst! Authentizität, Leidenschaft, Eigeninitiative und Wissen über uns sind wichtige Faktoren.</p>',
      },
    ],
  },
  faqApplicationEvents: {
    headline: {
      text: '<span class="h3-font-size">Events & Kanäle</span>',
    },
    entries: [
      {
        summary: 'Auf welchen Events und Kanälen kann ich euch unverbindlich kennenlernen?',
        text: '<p>Wir lassen uns gerne kennenlernen! Folge uns auf <a href="https://twitter.com/glueckkanjagab" target="_blank">Twitter</a>, <a href="https://www.linkedin.com/company/glueckkanja-gab" target="_blank">LinkedIn</a> und <a href="https://www.youtube.com/user/glueckkanja" target="_blank">YouTube</a> und besuche unsere Website für wertvolle Informationen. Wenn du uns persönlich treffen möchtest, komm uns im Mai auf der <a href="https://www.uni-frankfurt.de/98499590/Jobmesse_IT" target="_blank">IT Jobmesse der Goethe-Universität Frankfurt</a> an unserem Stand besuchen und stell uns deine Fragen. Wir freuen uns darauf, dich kennenzulernen!</p>',
      },
    ],
  },
};

baseArgs.modal.apiUrl = baseArgs.faqModal.apiUrl;
baseArgs.modal.jobId = baseArgs.faqModal.jobId;

export const Career = Template.bind({});

Career.args = {
  ...baseArgs,
};
