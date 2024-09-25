import { getParams } from '../../../.storybook/templates';
import FooterComponent from '../../components/v-footer';

export default {
  ...getParams({ page: true }),
  component: FooterComponent,
  argTypes: {
    data: {
      description: 'Contains Company Information for the Footer',
      type: 'object',
    },
    noMargin: {
      description: 'Toggles Margin on the footer Page',
      type: 'boolean',
    },
    lang: {
      description: 'The Language of the Page',
      control: {
        type: 'text',
      },
      type: {
        summary: 'Languages',
        detail: 'de, en, es',
      },
    },
  },
  title: 'Components/Footer',
};

export const Corporate = { args: { lang: 'de' } };

export const Product = {
  args: {
    noMargin: true,
    data: {
      mail: 'sales@radiusasaservice.com',
      logos: [
        {
          img: '/mandrill/radius-logo-footer.svg',
          alt: 'RADIUSaaS Logo',
          url: 'index.html',
          linkClasses: 'w-75 w-lg-100',
        },
      ],
      socials: [
        {
          icon: 'fa-x-twitter',
          url: 'https://twitter.com/RADIUSaaS',
          title: 'Twitter',
        },
        {
          icon: 'fa-youtube',
          url: 'https://www.youtube.com/channel/UCKnLYxlQFhzdXkDADV_Unrg',
          title: 'Youtube',
        },
        {
          icon: 'fa-linkedin',
          url: 'https://www.linkedin.com/showcase/radiusaas',
          title: 'LinkedIn',
        },
      ],
    },
    lang: 'en',
  },
};
