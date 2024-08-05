import { getDefaultSettings } from '../../.storybook/templates';
import { includeshighlightteaserhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Highlight Teaser',
};

export const HighlightTeaser = {
  args: {
    entries: [
      {
        title: 'Azure @ DEKRA',
        subline: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
        image: {
          img: '/casestudies/casestudy-dekra-v2.png',
          alt: 'Dekra Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_140/logos/cust-dekra.png',
          url: 'https://www.dekra.com/',
          alt: 'DEKRA',
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
      {
        title: 'BRZ',
        subline: 'lorem ipsum dolor sit',
        image: {
          img: '/casestudies/casestudy-brz.png',
          alt: 'BRZ Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_180/logos/cust-brz.png',
          alt: 'BRZ',
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
      {
        title: 'Azure @ DEKRA',
        subline: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
        image: {
          img: '/casestudies/casestudy-dekra-v2.png',
          alt: 'Dekra Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_140/logos/cust-dekra.png',
          url: 'https://www.dekra.com/',
          alt: 'DEKRA',
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
    ],
  },
};
