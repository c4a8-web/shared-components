import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includesimageblockhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Image Block',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ImageBlock = Template.bind({});

ImageBlock.args = {
  imageBlock: {
    img: getAssetPath('img/image-placeholder-1.jpg'),
    alt: 'image-placeholder',
  },
};
