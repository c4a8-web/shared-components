import { getDefaultSettings, getAssetPath } from '../../.storybook/templates';
import { includesimagelisthtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
  }),
  title: 'Helper/Image List',
};

export const ImageList = {
  args: {
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
  },
};
