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
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
  headline: 'Azure @ DEKRA',
  overline: 'Zufriedene Kunden',
  logo: 'h_40,w_140/shared-components/teaser-dekra-logo.png',
  logoAlt: 'alt logo',
  text: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
};

// TODO add hover
// TODO add click on left full element
// TODO create video variant
