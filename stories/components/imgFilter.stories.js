import { getAssetPath, getDefaultSettings } from '../../.storybook/templates';
import { includesimgfilterhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Img Filter',
};

export const Default = {
  args: {
    img: getAssetPath('svg/icons/icon-hand.svg'),
    alt: 'lorem ipsum dolor sit amet, consectetur adipis',
  },
};
