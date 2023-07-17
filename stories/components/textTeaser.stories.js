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
