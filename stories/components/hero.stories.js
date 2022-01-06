import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesherotextimagehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Hero',
});

export default {
  ...options,
};

const baseArgs = {};

const Template = (args) => createComponent(args, component);

export const HeroCareer = Template.bind({});

HeroCareer.args = {
  hero: {
    cta: {
      text: 'Zu den Stellenanzeigen',
    },
    variant: 'hero--career',
    light: true,
    overline: 'Deine Karriere',
    headline: 'Hey,',
    headlineClass: '',
    subline: 'Schön dich hier zu sehen! Lorem Ipsum dolor sit amet? Dann schau ...',
    background: {
      icon: 'smile',
      spacing: 'space-top-lg-5',
    },
    bgColor: 'var(--color-blue-dark)',
  },
};

export const HeroTextImage = Template.bind({});

HeroTextImage.args = {
  hero: {
    light: true,
    overline: 'Karriere bei einem der führenden Microsoft Gold Partner',
    headline: 'Komm zu uns. Finde deinen Platz.',
    subline: 'Entdecke all die guten Gründe, warum es sich lohnt, bei glueckkanja-gab zu arbeiten',
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
