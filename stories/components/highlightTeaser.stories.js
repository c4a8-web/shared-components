import { getParams, getDefaultSettings } from '../../.storybook/templates';
import { includeshighlightteaserhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getParams({ page: true }),
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Highlight Teaser',
};

export const HighlightTeaser = {
  args: {
    // animationColor: 'var(--color-secondary)',
    entries: [
      {
        title: 'Azure @ DEKRA',
        subline: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
        image: {
          img: 'casestudies/casestudy-fuchs.png',
          alt: 'Dekra Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_140/logos/cust-dekra.png',
          url: 'javascript:void(0);',
          alt: 'DEKRA',
          cloudinary: true,
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
          img: 'casestudies/casestudy-brz.png',
          alt: 'BRZ Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_180/logos/cust-brz.png',
          alt: 'BRZ',
          cloudinary: true,
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy 2',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
      {
        title: 'Enercron',
        subline:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: {
          img: 'casestudies/casestudy-enercon.jpg',
          alt: 'Enercron Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_180/logos/cust-enercon.png',
          url: 'javascript:void(0);',
          alt: 'Enercron',
          cloudinary: true,
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy 3',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
    ],
  },
};

export const OneEntry = {
  args: {
    spacing: 'space-top-3',
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
          cloudinary: true,
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

export const ReduceAnimation = {
  args: {
    reduceAnimation: true,
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
          url: 'javascript:void(0);',
          alt: 'DEKRA',
          cloudinary: true,
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
          cloudinary: true,
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy 2',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
      {
        title: 'Enercron',
        subline:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: {
          img: '/casestudies/casestudy-enercon.jpg',
          alt: 'Enercron Casestudy',
          cloudinary: true,
        },
        logo: {
          img: '/w_180/logos/cust-enercon.png',
          url: 'javascript:void(0);',
          alt: 'Enercron',
          cloudinary: true,
        },
        ctaList: [
          {
            ctaText: 'Zur Casestudy 3',
            ctaHref: 'javascript:void(0);',
            skin: 'primary',
            link: true,
          },
        ],
      },
    ],
  },
};
