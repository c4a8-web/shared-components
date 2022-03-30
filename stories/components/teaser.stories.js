import { createComponent, getTitle } from '../../.storybook/templates';
import { includesteaserhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Teaser',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Teaser = Template.bind({});

Teaser.args = {
  ctaText: 'Case Study ansehen',
  ctaHref: '',
  type: 'button',
  target: '_blank',
  thumb: 'thumbs/video-thumb-uniper.jpg',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
  headline: 'Azure @ DEKRA',
  overline: 'Zufriedene Kunden',
  logo: 'c_lpad,h_100,w_180/logos/cust-uniper.png',
  logoAlt: 'alt logo',
  text: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
};
