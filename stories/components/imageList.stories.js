import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesimagelisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Image List',
  helper: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ImageList = Template.bind({});

ImageList.args = {
  images: [
    {
      src: getAssetPath('img/unified-contacts-pro-desk.svg'),
      mobile: getAssetPath('img/unified-contacts-pro-mob.svg'),
      alt: 'lorem ipsum',
    },
    {
      src: getAssetPath('img/unified-contacts-free-desk.svg'),
      mobile: getAssetPath('img/unified-contacts-free-mob.svg'),
      alt: 'lorem ipsum',
    },
  ],
};
