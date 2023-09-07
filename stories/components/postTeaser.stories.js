import { createComponent, getTitle } from '../../.storybook/templates';
import { includespostteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Post Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const German = Template.bind({});

German.args = {
  post: {
    url: 'javascript:void(0);',
    title: 'Audiocodes Devices Review',
    date: '2021-06-17',
    moment: '2021-06-17',
    author: 'Jan Petersen',
    tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    blogtitlepic: 'head-audiocodes-review',
    socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
    excerpt:
      'Mit der Power Platform stellt Microsoft jedem Microsoft 365-Nutzer Dienste zur Verfügung, die es ermöglichen, persönliche und abteilungsspezifische Anforderungen an Prozessautomatisierung, App-Entwicklung und Business Intelligence in einer Low-Code-Umgebung umzusetzen. Zielgruppe für die Dienste sind somit die Nutzer:innen selbst, die ihre Anforderungen definieren und auch selbstständig umsetzen können. Die Standardkonfiguration der Power Platform in einem Microsoft 365-Tenant ist nach oben offen. Dadurch können die Nutzer:innen die Power Platform-Dienste ohne Einschränkungen nutzen, aber möglicherweise fehlen hilfreiche Leitplanken oder Einschränkungen, um Compliance-Anforderungen zu erfüllen. Es ist daher sinnvoll, sich vor der Einführung der Power Platform Gedanken über die Governance-Regeln und -Prozesse zu machen.',
  },
  tag: 'Microsoft',
};

export const English = Template.bind({});

English.args = {
  post: {
    lang: 'en',
    url: 'javascript:void(0);',
    title: 'Audiocodes Devices Review',
    date: '2021-06-17',
    moment: '2021-06-17',
    author: 'Jan Petersen',
    tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
    blogtitlepic: 'head-audiocodes-review',
    socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
    excerpt:
      'Audiocodes hat mir mehrere Geräte für einen Test zur Verfügung gestellt. Ich habe sie alle eingerichtet und getestet. Hier ist eine kurze Zusammenfassung meiner Ergebnisse.',
  },
  tag: 'Microsoft',
};
