import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesproductblockshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Product Blocks',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ProductBlocks = Template.bind({});

ProductBlocks.args = {
  productBlocks: {
    items: [
      {
        image: getAssetPath('svg/logos/gkgab-SCEPman.svg'),
        headline: '',
        copy: 'Erklären wer von Kauf über Azur Marketplace profitiert.  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        list: [
          {
            ctaText: 'Buy Lorem',
            ctaHref: 'https://www.glueckkanja-gab.com/',
            target: '_blank',
          },
          {
            ctaText: 'Quote Lorem',
            ctaHref: 'https://www.glueckkanja-gab.com/',
            target: '_blank',
            skin: 'secondary',
          },
        ],
      },
      {
        image: getAssetPath('svg/logos/gkgab-RADIUSaaS.svg'),
        headline: '',
        copy: 'Erklären wer von Kauf über Azur Marketplace profitiert.  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. wer von Kauf über Azur Marketplace profitiert.  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        list: [
          {
            ctaText: 'Buy Lorem',
            ctaHref: 'https://www.glueckkanja-gab.com/',
            target: '_blank',
          },
        ],
      },
    ],
  },
  headline: 'Payment options',
  cloudinary: 'true',
};
