import HeroTextImageComponent from '../../../components/hero-text-image';
import lottie1 from '../../data/lottie1.json';

export default {
  title: 'Components/Hero Text Image',
  component: HeroTextImageComponent,
};

export const HeroTextImage = {
  args: {
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
        img: 'svg/shapes/shape-career.svg',
        alt: 'Shape',
        spacing: 'space-top-lg-4',
      },
      bgColor: '#ffffff',
    },
  },
};

export const HeroTextImagePattern = {
  args: {
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
  },
};

export const HeroTextImageStudy = {
  args: {
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
  },
};

export const HeroTextShapeSticky = {
  args: {
    hero: {
      sticky: true,
      overline: 'Lorem ipsum',
      overlineBgColor: 'var(--color-gigas)',
      overlineColor: 'var(--color-white)',
      headline: 'Consulting Services',
      subline:
        'Microsoft hat in den letzten Jahren stark in die Skalierbarkeit und Sicherheit seiner Microsoft 365-Plattform investiert. Wir nutzen dies, um die Konfiguration und Bereitstellung von Arbeitsplätzen und Anwendungen zu optimieren und zu vereinfachen.',
      background: {
        img: 'svg/shapes/s-block.svg',
        alt: 'Shape',
      },
    },
  },
};

export const HeroTextImageTextVideo = {
  args: {
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
  },
};

export const HeroTextImageSmall = {
  args: {
    hero: {
      variant: 'hero--small',
      bgColor: 'var(--color-gigas)',
      headline: 'Danke!',
      light: true,
      background: {
        img: 'svg/shapes/event-confirmation-message.svg',
        alt: 'Success Message',
      },
    },
  },
};

export const HeroTextImageSafety = {
  args: {
    hero: {
      variant: 'hero--safety', // TODO refactor to a more generic name
      headline: 'Safety',
      level: 'h5',
      light: true,
      underline: 'under & in the cloud(s)',
      subline:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      background: {
        img: 'img/xmas-website-hero.png',
        alt: 'Img',
        cloudinary: false,
      },
      bgColor: 'var(--color-blue-dark)',
    },
  },
};

export const HeroTextImageText = {
  args: {
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
  },
};

export const HeroTextImageLottie = {
  args: {
    hero: {
      overline: 'Lorem ipsum',
      overlineBgColor: 'var(--color-gigas)',
      overlineColor: 'var(--color-white)',
      headline: 'Consulting Services',
      subline:
        'Microsoft hat in den letzten Jahren stark in die Skalierbarkeit und Sicherheit seiner Microsoft 365-Plattform investiert. Wir nutzen dies, um die Konfiguration und Bereitstellung von Arbeitsplätzen und Anwendungen zu optimieren und zu vereinfachen.',
      background: {
        lottie: lottie1,
      },
    },
  },
};
