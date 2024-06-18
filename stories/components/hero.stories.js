import { getDefaultSettings, getParams, getAssetPath } from '../../.storybook/templates';
import { includesherohtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getParams({ page: true }),
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Hero',
};

export const Career = {
  args: {
    hero: {
      v2: true,
      bgColor: 'var(--color-blue-dark)',
      light: true,
      lightOverline: false,
      sticky: true,
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
  },
};

export const CareerHand = {
  args: {
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
            text: 'Young Professionals',
            subline:
              'Willkommen in einem Arbeitsumfeld, das Vertrauen und Flexibilität großschreibt. Hier zählt dein Input genauso wie der unserer IT-Expertinnen und IT-Experten. Beginne deine IT-Reise mit uns!',
          },
        ],
      },
      background: {
        icon: 'hand',
      },
      cta: {
        text: 'Zu den Stellenanzeigen',
      },
    },
  },
};

export const TextImage = {
  args: {
    hero: {
      v2: true,
      bgColor: 'var(--color-blue-dark)',
      light: true,
      headline: 'Komm zu uns. Finde deinen Platz.',
      overline:
        'Karriere bei einem der führenden Microsoft Gold Partner. Lorem ipsum dolor sit two lines would need to fit.',
      subline: 'Entdecke all die guten Gründe, warum es sich lohnt, bei glueckkanja zu arbeiten',
      background: {
        img: 'b_rgb:000000,bo_0px_solid_rgb:000,c_crop,g_custom,o_60/people/hessisch-bayrische-hochzeit.jpg',
        cloudinary: true,
        alt: 'Shape',
      },
    },
  },
};
