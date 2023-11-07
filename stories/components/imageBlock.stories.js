import { createComponent, getTitle } from '../../.storybook/templates';
import { includesimageblockhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Image Block',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ImageBlock = Template.bind({});

ImageBlock.args = {
  imageBlock: {
    image: '/infographics/6r-flowchart.svg',
    alt: 'image-placeholder',
  },
};
