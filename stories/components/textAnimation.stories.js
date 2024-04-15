import { getDefaultSettings } from '../../.storybook/templates';
import { includestextanimationhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Text Animation',
};

export const TextAnimation = {
  args: {
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
    cta: {
      text: 'Zu den Stellenanzeigen',
    },
  },
};
