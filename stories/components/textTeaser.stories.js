import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includestextteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Text Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TextTeaser = Template.bind({});

TextTeaser.args = {
  bgColor: 'var(--color-black-4)',
  background: getAssetPath('svg/shapes/shape-5.svg'),
  copy: 'Als Advanced Specialization Partner können Sie über uns am Azure Migration Program teilnehmen und von attraktiven Rabatten und Azure Credits profitieren.',
  list: [
    {
      ctaText: 'Sprechen Sie uns an',
      ctaHref: 'mailto:leads@glueckkanja-gab.com',
    },
  ],
};

export const TextTeaserNoBackground = Template.bind({});

TextTeaserNoBackground.args = {
  copy: 'Als Advanced Specialization Partner können Sie über uns am Azure Migration Program teilnehmen und von attraktiven Rabatten und Azure Credits profitieren.',
  list: [
    {
      ctaText: 'Sprechen Sie uns an',
      ctaHref: 'mailto:leads@glueckkanja-gab.com',
    },
  ],
};

export const PartnerQuote = Template.bind({});

PartnerQuote.args = {
  copy: 'Wir ermöglichen es Unternehmen, schnell und sicher in die Cloud zu wechseln, indem wir eine beispiellose Cloud-Transformations- und Optimierungstechnologie bereitstellen.',
  list: [
    {
      ctaText: 'Erfahren Sie mehr zu RadiusSaaS',
      ctaHref: 'javascript:void',
      link: false,
      target: '_blank',
    },
  ],
  logo: {
    alt: 'gkgab-RADIUSaaS',
    background: getAssetPath('svg/shapes/shape-career-2.svg'),
    img: getAssetPath('svg/logos/gkgab-RADIUSaaS.svg'),
    cloudinary: false,
    alt: 'Lorem Ipsum',
  },
};

export const PartnerQuoteNoBackground = Template.bind({});

PartnerQuoteNoBackground.args = {
  copy: 'Wir ermöglichen es Unternehmen, schnell und sicher in die Cloud zu wechseln, indem wir eine beispiellose Cloud-Transformations- und Optimierungstechnologie bereitstellen.',
  list: [
    {
      ctaText: 'Erfahren Sie mehr zu RadiusSaaS',
      ctaHref: 'javascript:void',
      link: false,
      target: '_blank',
    },
  ],
  logo: {
    alt: 'gkgab-RADIUSaaS',
    img: getAssetPath('svg/logos/gkgab-RADIUSaaS.svg'),
    cloudinary: false,
    alt: 'Lorem Ipsum',
  },
};
