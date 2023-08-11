import { createComponent, getAssetPath, getTitle } from '../../.storybook/templates';
import { includespartnerquotehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Partner Quote',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const PartnerQuote = Template.bind({});

PartnerQuote.args = {
  partnerQuote: {
    logo: getAssetPath('svg/logos/logo-txture.svg'),
    alt: 'logo-txture',
    copy: 'Wir ermöglichen es Unternehmen, schnell und sicher in die Cloud zu wechseln, indem wir eine beispiellose Cloud-Transformations- und Optimierungstechnologie bereitstellen.',
    background: getAssetPath('svg/shapes/bg-abstract-shapes.svg'),
  },
  list: [
    {
      text: 'Erfahren Sie mehr zu Txture',
      href: 'javascript:void',
      link: false,
      target: '_blank',
    },
  ],
};

export const TextTeaser = Template.bind({});

TextTeaser.args = {
  bgColor: 'var(--color-black-4)',
  background: getAssetPath('svg/shapes/shape-5.svg'),
  copy: 'Als Advanced Specialization Partner können Sie über uns am Azure Migration Program teilnehmen und von attraktiven Rabatten und Azure Credits profitieren.',
  list: [
    {
      text: 'Sprechen Sie uns an',
      href: 'mailto:leads@glueckkanja-gab.com',
    },
  ],
};
