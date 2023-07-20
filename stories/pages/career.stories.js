import { createTemplate, hrefTo, getTitle } from '../../.storybook/templates';
import careerTemplate from '!!raw-loader!./career.html';
import { List } from '../components/jobList.stories';
import { JobApplication } from '../components/textImage.stories';
import { Contact } from '../components/fabButton.stories';

const options = getTitle({
  title: 'Career',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createTemplate(args, careerTemplate);

const baseArgs = {
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
        text: '<p><a href="mailto:v-steffi.altendorf@glueckkanja-gab.com">Wende dich an Steffi</a>, um gemeinsam herauszufinden, welche Stelle am besten zu dir passt. Du kannst dich auch auf eine Stelle bewerben und im Anschreiben weitere Interessen erwähnen.</p>',
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

export const Career = Template.bind({});

Career.args = {
  ...baseArgs,
};
