import { getDefaultSettings, getParams } from '../../.storybook/templates';
import { includesherohtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getParams({ page: true }),
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Hero',
};

export const Careers = {
  args: {
    hero: {
      v2: true,
      bgColor: 'var(--color-blue-dark)',
      light: true,
      overline: 'Deine Karriere',
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
  },
};

// TODO sticky prob
