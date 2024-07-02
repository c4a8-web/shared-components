import { getDefaultSettings, getParams, getAssetPath } from '../../.storybook/templates';
import heroTemplate from '!!raw-loader!./hero.html';
import lottie1 from '../data/lottie1.json';

export default {
  ...getParams({ page: true }),
  ...getDefaultSettings({
    component: heroTemplate,
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
        alt: 'Lorem ipsum',
      },
      shape: {
        img: getAssetPath('svg/shapes/shape-career.svg'),
        alt: 'Shape',
        bottom: true,
      },
    },
  },
};

export const TextImagePattern = {
  args: {
    hero: {
      v2: true,
      pattern: true,
      headline: 'RADIUSaaS',
      subline: 'Authentication service for your network',
      textShadow: true,
      cta: {
        text: 'Try RADIUSaas now',
        href: 'start-now/#try',
        skin: 'primary is-cutoff',
      },
      shape: {
        img: '/products/radius/radius-hero-screen.png',
        alt: 'Home',
        cloudinary: true,
      },
    },
  },
};

export const Casestudy = {
  args: {
    hero: {
      v2: true,
      back: true,
      bgColor: 'var(--color-hero-study-background)',
      bgWidth: 60,
      headline: 'Pöppelmann Case',
      subline:
        '<span class="highlight">Lorem ipsum dolor</span> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      shape: {
        img: '/casestudies/casestudy-demo.png',
        alt: 'Casestudy',
        cloudinary: true,
        bottom: true,
      },
    },
  },
};

export const ShapeSticky = {
  args: {
    hero: {
      v2: true,
      sticky: true,
      headline: 'Consulting Services',
      overline: 'Lorem ipsum',
      overlineBgColor: 'var(--color-gigas)',
      lightOverline: true,
      subline:
        'Microsoft hat in den letzten Jahren stark in die Skalierbarkeit und Sicherheit seiner Microsoft 365-Plattform investiert. Wir nutzen dies, um die Konfiguration und Bereitstellung von Arbeitsplätzen und Anwendungen zu optimieren und zu vereinfachen.',
      shape: {
        alt: 'Shape',
        img: getAssetPath('svg/shapes/s-block.svg'),
        top: true,
      },
    },
  },
};

export const Lottie = {
  args: {
    hero: {
      v2: true,
      headline: 'Consulting Services',
      overline: 'Lorem ipsum',
      overlineBgColor: 'var(--color-gigas)',
      lightOverline: true,
      subline:
        'Microsoft hat in den letzten Jahren stark in die Skalierbarkeit und Sicherheit seiner Microsoft 365-Plattform investiert. Wir nutzen dies, um die Konfiguration und Bereitstellung von Arbeitsplätzen und Anwendungen zu optimieren und zu vereinfachen.',
      shape: {
        alt: 'Shape',
        lottie: lottie1,
      },
    },
  },
};
