import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import heroTemplate from '!!raw-loader!./hero.html';

const options = getTitle({
  title: 'Hero',
});

export default {
  ...options,
};

const baseArgs = {
  cta: {
    text: 'Zu den Stellenanzeigen',
  },
  variant: 'hero--career',
  light: true,
  overline: 'Deine Karriere',
  headlineClass: '',
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
    spacing: 'space-top-lg-5',
  },
  bgColor: 'var(--color-blue-dark)',
  fab: {
    modal: {
      contact: {
        infos: {
          person: {
            image: 'people/people-sophie-luna.png',
            cloudinary: true,
            alt: 'Kontakt mit Sophie',
            name: 'Hast du Fragen? Sprich uns gerne an!',
            details: [
              {
                text: 'kontakt@glueckkanja.com',
                href: 'mailto:kontakt@glueckkanja.com',
                icon: 'site/mail',
              },
              {
                text: '+49 69 4005520',
                href: 'tel:+49 69 4005520',
                details: 'lorem ipsum dolor sit amet lore',
                icon: 'site/phone',
              },
            ],
          },
          form: {
            ctaText: 'Absenden',
            cta: {
              skin: 'primary is-light',
            },
            method: 'post',
            action: '/',
            fields: [
              {
                label: 'Vorname',
                type: 'text',
                id: 'prename',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihren Vornamen an.',
              },
              {
                label: 'Nachname',
                type: 'text',
                id: 'surname',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihren Nachnamen an.',
              },
              {
                label: 'Email-Adresse',
                type: 'email',
                id: 'email',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
              },
              {
                label: 'Nachricht',
                type: 'textarea',
                id: 'message',
                required: false,
                requiredMsg: 'Bitte ausfüllen',
              },
              {
                label:
                  'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
                type: 'checkbox',
                id: 'checkbox1',
              },
              {
                type: 'hidden',
                id: '_to',
                value: 'loremipsum@glueckkanja.com',
              },
              {
                type: 'hidden',
                id: '_gotcha',
              },
            ],
          },
        },
      },
    },
  },
};

const Template = (args) => createComponent(args, heroTemplate);

export const HeroCareer = Template.bind({});

HeroCareer.args = {
  hero: {
    ...baseArgs,
  },
};

export const HeroCareerHand = Template.bind({});

HeroCareerHand.args = {
  hero: {
    ...baseArgs,
    background: {
      icon: 'hand',
      spacing: 'space-top-lg-5',
    },
  },
};

export const HeroTextImage = Template.bind({});

HeroTextImage.args = {
  hero: {
    light: true,
    overline:
      'Karriere bei einem der führenden Microsoft Gold Partner. Lorem ipsum dolor sit two lines would need to fit.',
    headline: 'Komm zu uns. Finde deinen Platz.',
    subline: 'Entdecke all die guten Gründe, warum es sich lohnt, bei glueckkanja zu arbeiten',
    fullscreen: {
      img: 'b_rgb:000000,bo_0px_solid_rgb:000,c_crop,g_custom,o_60/people/hessisch-bayrische-hochzeit.jpg',
      alt: 'alt for fullscreen',
      cloudinary: true,
    },
    background: {
      img: getAssetPath('svg/shapes/shape-career.svg'),
      alt: 'Shape',
      spacing: 'space-top-lg-4',
    },
    bgColor: '#ffffff',
  },
};

export const HeroTextImagePattern = Template.bind({});

HeroTextImagePattern.args = {
  hero: {
    pattern: true,
    headline: 'RADIUSaaS',
    subline: 'Authentication service for your network',
    background: {
      img: '/products/radius/radius-hero-screen.png',
      alt: 'Home',
      cloudinary: true,
      spacing: 'space-top-lg-4',
    },
    cta: {
      text: 'Try RADIUSaas now',
      href: 'start-now/#try',
      skin: 'primary is-cutoff',
    },
    sublineClass: 'is-light',
  },
};

export const HeroTextImageStudy = Template.bind({});

HeroTextImageStudy.args = {
  hero: {
    variant: 'hero--study', // TODO refactor to a more generic name
    back: true,
    headline: 'Pöppelmann Case',
    subline:
      '<span class="highlight">Lorem ipsum dolor</span> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    background: {
      img: '/casestudies/casestudy-demo.png',
      alt: 'Img',
      spacing: 'space-top-lg-4',
    },
    bgColor: 'var(--color-hero-study-background)',
  },
};

export const HeroTextShapeSticky = Template.bind({});

HeroTextShapeSticky.args = {
  hero: {
    sticky: true,
    overline: 'Lorem ipsum',
    overlineBgColor: 'var(--color-gigas)',
    overlineColor: 'var(--color-white)',
    headline: 'Consulting Services',
    subline:
      'Microsoft hat in den letzten Jahren stark in die Skalierbarkeit und Sicherheit seiner Microsoft 365-Plattform investiert. Wir nutzen dies, um die Konfiguration und Bereitstellung von Arbeitsplätzen und Anwendungen zu optimieren und zu vereinfachen.',
    background: {
      img: getAssetPath('svg/shapes/s-block.svg'),
      alt: 'Shape',
    },
  },
};

export const HeroTextVideo = Template.bind({});

HeroTextVideo.args = {
  hero: {
    variant: 'hero--security', // TODO refactor to hero--video
    light: true,
    video: true,
    videoLocationDesktop: 'assets/video/hero-security-desktop.webm',
    videoLocationMobile: 'assets/video/hero-security-mobile.webm',
    subline: 'Schützen Sie Ihre IT jetzt gegen Angriffe von außen: mit unserem professionellen Security Check!',
    sublineClass: 'hero-video__animation text-center',
    cta: {
      text: 'Jetzt anmelden',
      href: '/#checks',
      skin: 'primary',
    },
    bgColor: 'var(--color-gigas)',
  },
};

export const HeroSmall = Template.bind({});

HeroSmall.args = {
  hero: {
    variant: 'hero--small',
    bgColor: 'var(--color-gigas)',
    headline: 'Danke!',
    light: true,
    background: {
      img: getAssetPath('svg/shapes/event-confirmation-message.svg'),
      alt: 'Success Message',
    },
  },
};

export const HeroTextImageSafety = Template.bind({});

HeroTextImageSafety.args = {
  hero: {
    variant: 'hero--safety', // TODO refactor to a more generic name
    headline: 'Safety',
    level: 'h5',
    light: true,
    underline: 'under & in the cloud(s)',
    subline:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    background: {
      img: getAssetPath('img/xmas-website-hero.png'),
      alt: 'Img',
      cloudinary: false,
    },
    bgColor: 'var(--color-blue-dark)',
  },
};

export const HeroText = Template.bind({});

HeroText.args = {
  hero: {
    variant: 'hero--text',
    headline: 'Wenn Sie wissen, worauf Angreifer aus sind, wissen Sie auch, was Sie am besten schützen müssen',
    level: 'h5',
    light: true,
    overline: 'Preventive Service',
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
};
