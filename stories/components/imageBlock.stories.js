import { createComponent } from '../../.storybook/templates';
import { includesimageblockhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Image Block',
};

const Template = (args) => createComponent(args, component);

export const ImageBlock = Template.bind({});

ImageBlock.args = {
  imageBlock: {
    image: '/infographics/6r-flowchart.svg',
    alt: 'image-placeholder',
  },
};
