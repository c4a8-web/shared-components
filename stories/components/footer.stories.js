import { createComponent, getTitle } from '../../.storybook/templates';
import { includesfooterhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Footer',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Corporate = Template.bind({});

Corporate.args = {};

export const Product = Template.bind({});

Product.args = {
  noMargin: true,
  data: {
    locations: [
      {
        name: 'glueckkanja-gab AG',
        street: 'Kaiserstraße 39',
        postalCode: 63065,
        city: 'Offenbach',
        country: 'Germany',
        mail: 'info@glueckkanja-gab.com',
      },
      {
        name: 'glueckkanja Pacific Pty Ltd <br /> c/o WOTSO',
        street: 'Level 1 9-13 Bronte Road',
        postal: 'Bondi Junction NSW 2022',
        country: 'Australia',
        mail: 'info@glueckkanja-gab.com',
      },
    ],
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
        icon: 'fa-twitter',
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
};
