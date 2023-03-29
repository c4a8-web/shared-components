import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includestextimagelisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Text Image List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TextImageList = Template.bind({});

TextImageList.args = {
  headline: 'Lorem Ipsum',
  headlineColor: 'var(--color-white)',
  bgColor: 'var(--color-orange)',
  textImages: [
    {
      image: getAssetPath('svg/icons/icon-consulting-services.svg'),
      alt: 'Lorem Ipsum',
      headline: 'Expertise Lorem Ipsum',
      copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
    {
      image: getAssetPath('svg/icons/icon-consulting-services.svg'),
      alt: 'Lorem Ipsum',
      headline: 'Expertise Lorem Ipsum 2',
      copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
    {
      image: getAssetPath('svg/icons/icon-consulting-services.svg'),
      alt: 'Lorem Ipsum',
      headline: 'Expertise Lorem Ipsum 3',
      copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
  ],
};
