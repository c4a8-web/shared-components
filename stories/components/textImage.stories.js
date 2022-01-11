import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includestextimagehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Text Image',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Right = Template.bind({});

Right.args = {
  image: getAssetPath('svg/icons/icon-consulting-services.svg'),
  alt: 'Consulting Services',
  headline: 'Consulting Services',
  offset: true,
  // list: [
  //   {
  //     ctaText: 'Modern Workplace',
  //     ctaHref: '/de/modern-workplace/consulting-services',
  //     link: true,
  //   },
  //   {
  //     ctaText: 'Azure',
  //     ctaHref: '/de/azure/azure-consulting',
  //     link: true,
  //   },
  //   {
  //     ctaText: 'Security',
  //     ctaHref: '/de/security/security-consulting',
  //     link: true,
  //   },
  // ], // TODO comment in after cta-list is migrated
  copy: 'Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist.',
};

export const Left = Template.bind({});

Left.args = {
  image: getAssetPath('svg/icons/icon-hand.svg'),
  imageSize: 'medium',
  left: true,
  bgColor: 'var(--color-text-image-background)',
  white: true,
  copy: 'Komm zu uns, anderes Wording natürlich. Abschließende prominente Aufforderung die Stellenseite zu besuchen',
  copyClasses: 'h2-font-size',
  firstColWidth: 5,
  secondColWidth: 7,
  reduceSpacing: true,
  // TODO add cta
};
