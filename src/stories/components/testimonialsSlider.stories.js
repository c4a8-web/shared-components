import TestimonialsSlider from '../../components/testimonials-slider';

export default {
  title: 'Components/Testimonials Slider',
  component: TestimonialsSlider,
};

export const ExternalSlides = {
  args: {
    headline: 'Lorem Ipsum dolor sit',
    headlineLevel: 'h2',
    subline:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata,',
    slides: [
      {
        url: 'javascript:void(0)',
        name: '1Nadine Kern',
        title: 'Consultant, Cloud Security Architect',
        sliderImg: {
          img: 'w_1000,ar_4:3,c_fill,g_auto/v1643880379/people/testimonials/matti-puolitaival.png',
          alt: 'lorem ipsum',
        },
      },
      {
        url: 'javascript:void(0)',
        name: '2Matti Puolitaival',
        title: 'Senior Consultant Azure',
        sliderImg: {
          img: 'w_1000,ar_1:1,c_fill,g_auto/v1643880379/people/testimonials/matti-puolitaival.png',
          alt: 'lorem ipsum',
        },
      },
      {
        url: 'javascript:void(0)',
        name: '3Nadine Kern',
        title: 'Consultant, Cloud Security Architect',
        sliderImg: {
          img: 'w_1000,ar_4:3,c_fill,g_auto/v1643880379/people/testimonials/matti-puolitaival.png',
          alt: 'lorem ipsum',
        },
      },
      {
        url: 'javascript:void(0)',
        name: '4Matti Puolitaival',
        title: 'Senior Consultant Azure',
        sliderImg: {
          img: 'w_1000,ar_1:1,c_fill,g_auto/v1643880379/people/testimonials/matti-puolitaival.png',
          alt: 'lorem ipsum',
        },
      },
      {
        url: 'javascript:void(0)',
        name: '5Nadine Kern',
        title: 'Consultant, Cloud Security Architect',
        sliderImg: {
          img: 'w_1000,ar_4:3,c_fill,g_auto/v1643880379/people/testimonials/matti-puolitaival.png',
          alt: 'lorem ipsum',
        },
      },
      {
        url: 'javascript:void(0)',
        name: '6Matti Puolitaival',
        title: 'Senior Consultant Azure',
        sliderImg: {
          img: 'w_1000,ar_1:1,c_fill,g_auto/v1643880379/people/testimonials/matti-puolitaival.png',
          alt: 'lorem ipsum',
        },
      },
    ],
  },
};

export const CollectionWithSpacing = {
  args: {
    headline: 'Lorem Ipsum dolor sit from collection',
    headlineLevel: 'h2',
    subline:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata,',
    slides: site.testimonials,
    spacing: 'space-top-3 space-bottom-3',
  },
};
