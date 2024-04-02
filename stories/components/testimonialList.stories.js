import { createComponent } from '../../.storybook/templates';
import { includestestimoniallisthtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Testimonial List',
};

const Template = (args) => createComponent(args, component);

export const testimonialList = Template.bind({});

testimonialList.args = {
  bgColor: 'var(--color-blue-dark)',
  bgColorHover: 'var(--color-black)',
  contents: [
    {
      url: 'javascript:void(0)',
      name: '1Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '2Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '3Matti Puolitaival',
      title: 'Senior Consultant Azure',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '4Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '5Matti Puolitaival',
      title: 'Senior Consultant Azure',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '6Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '6Matti Puolitaival',
      title: 'Senior Consultant Azure',
      bgColor: 'var(--color-blue-dark)',
      bgColorHover: 'var(--color-black)',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
  ],
};
