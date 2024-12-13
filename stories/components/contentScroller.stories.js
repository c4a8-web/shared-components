import { getDefaultSettings } from '../../.storybook/templates';
import component from '!!raw-loader!./contentScroller.html';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Content Scroller',
};

export const ContentScroller = {
  args: {
    headline: {
      text: 'Egal, welcher Weg Sie in die Cloud führt. Wir bringen Sie mit Azure ans Ziel.',
    },
    blocks: [
      {
        headline: {
          text: 'Ist Ihre Infrastruktur fit für die Cloud?',
        },
        content:
          'Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein.',
      },
      {
        headline: {
          text: 'Wir decken das komplette Azure Ökosystem ab',
        },
        content:
          'Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen',
      },
      {
        headline: {
          text: 'Von der Planung bis zum Betrieb',
        },
        content: '123',
        // content:
        // 'Wir beraten Sie nicht nur bei dem Aufbau Ihrer Cloud-Strategie oder der Auswahl der passenden Microsoft Technologien. Wir implementieren diese auch in Ihr Unternehmen und stellen als Managed Service eine optimale Nutzung sicher.',
      },
      {
        headline: {
          text: 'Der Partner an Ihrer Seite',
        },
        content:
          'Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren.',
      },
    ],
  },
};

export const QuestionAndAnswers = {
  args: {
    headline: {
      text: 'Antwort-Guide',
    },
    subline: 'Wie Sie bei nervigen Fragen ganz ruhig bleiben!',
    footerHeadline: 'Pro-Tipp',
    footerSubline:
      'Drucken Sie die Antworten auf kleine <strong>Kärtchen</strong>, die Sie bei Bedarf hochhalten können. So sparen Sie sich so zusätzlich die verbale Interaktion mit dem Fragesteller.',
    blocks: [
      {
        content: '...',
        isLeft: true,
      },
      {
        content: 'Jein!',
      },
      {
        content: 'Danke für den überaus wertvollen Hinweis!',
      },
      {
        content: 'Damit werden Sie leben müssen!',
      },
      {
        content: 'Das haben Sie gut beobachtet!',
      },
      {
        content: 'Sie sollten versuchen, sich daran zu gewöhnen!',
      },
      {
        content: 'Die Vielzahl Ihrer Interessensgebiete ist erstaunlich.',
      },
      {
        content: 'Es stört Sie doch nicht, wenn ich weiter ruhig bleibe?',
      },
      {
        content: 'Der Stecker steckt nicht drin!',
      },
    ],
    skin: 'questions-and-answers',
  },
};
