import { getDefaultSettings } from '../../.storybook/templates';
import { includesproductstagehtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    argTypes: {},
    component,
  }),
  title: 'Components/Product Stage',
};

export const Default = {
  args: {
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      description:
        "Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",
      shape: {
        isActive: true,
        color: 'var(--color-white)',
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text',
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo',
        },
      },
      buttons: [
        {
          skin: 'primary is-cutoff',
          ctaText: 'Lorem ipsum dolor sit amet',
          ctaHref: 'javascript:void(0);',
        },
      ],
    },
  },
};

export const NoDescription = {
  args: {
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      shape: {
        isActive: true,
        color: 'var(--color-white)',
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text',
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo',
        },
      },
      additionalCopy:
        'Are you a non-profit organization? Please <a href="javascript:void(0);">contact us</a> for special pricing.',
    },
  },
};
