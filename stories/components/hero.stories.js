import { createComponent, getTitle } from '../../.storybook/templates';
import { includesherotextimagehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Hero',
});

export default {
  ...options,
};

const baseArgs = {
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
      img: '../svg/shapes/shape-career.svg',
      alt: 'Shape',
      spacing: 'space-top-lg-4',
    },
    bgColor: '#ffffff',
  },
};

const Template = (args) => createComponent(args, component);

export const HeroCareer = Template.bind({});

HeroCareer.args = {
  ...baseArgs,
  variant: 'hero--career',
};

export const HeroTextImage = Template.bind({});

HeroTextImage.args = {
  ...baseArgs,
};
