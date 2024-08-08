import { getDefaultSettings, getParams, getAssetPath } from '../../.storybook/templates';
import heroTemplate from '!!raw-loader!./hero.html';
import lottie1 from '../data/lottie1.json';
import lottieAzure from '../data/lottie-azure.json';

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
        href: 'javascript:void(0);',
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
      bgWidth: 70,
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

export const LetterSwitcher = {
  args: {
    hero: {
      light: true,
      letterSwitcher: {
        textEnd: 'beste Testlücke!',
        overlineStart: 'Start Lorem ipsum',
        overlineEnd: 'End Lorem ipsum',
      },
      fullscreen: true,
      subline: 'Schützen Sie Ihre IT jetzt gegen Angriffe von außen: mit unserem professionellen Security Check!',
      sublineClass: 'hero-video__animation text-center',
      cta: {
        text: 'Jetzt anmelden',
        href: '/#checks',
        skin: 'primary',
      },
      bgColor: 'var(--color-gigas)',
    },
  },
};

export const Small = {
  args: {
    hero: {
      variant: 'hero--small',
      bgColor: 'var(--color-gigas)',
      headline: 'Danke!',
      light: true,
      shape: {
        img: getAssetPath('svg/shapes/event-confirmation-message.svg'),
        top: true,
        alt: 'Success Message',
      },
    },
  },
};

export const Text = {
  args: {
    hero: {
      variant: 'hero--text',
      headline: 'Wenn Sie wissen, worauf Angreifer aus sind, wissen Sie auch, was Sie am besten schützen müssen',
      light: true,
      overline: 'Preventive Service',
      overlineBgColor: 'var(--color-orange)',
      bgColor: 'var(--color-gigas)',
      ctaList: [
        {
          ctaText: 'Jump on the Phone',
          ctaHref: 'javascript:void(0);',
          skin: 'primary',
          icon: 'phone',
        },
        {
          ctaText: 'Mail us',
          ctaHref: 'javascript:void(0);',
          skin: 'secondary',
          icon: 'mail',
        },
      ],
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

export const LottieFullscreen = {
  args: {
    hero: {
      v2: true,
      light: true,
      bgColor: 'var(--color-blue-medium)',
      headline: '<span class="highlight">Ihre Cloud Strategie</span>',
      headlineClasses: 'h2-font-size bold',
      lightOverline: true,
      subline: 'Microsoft stellt die Technologie, wir die Expertise. Sie brauchen nur noch den Erfolg zu ernten.',
      shape: {
        alt: 'Shape',
        lottie: lottieAzure,
        fullscreen: true,
      },
      cta: {
        text: 'Kontakt aufnehmen',
        href: 'javascript:void(0);',
      },
    },
  },
};

export const ShapeInContent = {
  args: {
    hero: {
      v2: true,
      light: true,
      headline: 'Cloud Security Operations Center',
      bgColor: 'var(--color-gigas)',
      subline:
        'Unser zuverlässiges Managed Extended Detection and Response (MXDR) Serviceangebot mit 24/7/365 proaktiven Hunting-, Monitoring- und Response-Funktionen, die auf einer nahtlosen Integration mit der Microsoft Security Plattform basieren',
      shape: {
        alt: 'Shape',
        img: getAssetPath('svg/shapes/shape-security-eye.svg'),
        inContent: true,
      },
    },
  },
};

export const TextShadow = {
  args: {
    hero: {
      v2: true,
      light: true,
      bgColor: 'var(--color-blue-medium)',
      headline: 'Ihre Cloud Strategie',
      headlineClasses: 'h2-font-size bold',
      lightOverline: true,
      subline: 'Microsoft stellt die Technologie, wir die Expertise. Sie brauchen nur noch den Erfolg zu ernten.',
      textShadow: true,
      shape: {
        alt: 'Shape',
        lottie: lottieAzure,
        fullscreen: true,
      },
      cta: {
        text: 'Kontakt aufnehmen',
        href: 'javascript:void(0);',
      },
    },
  },
};
