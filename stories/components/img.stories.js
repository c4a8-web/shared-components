import { createComponent, getTitle, getAssetPath, site } from '../../.storybook/templates';
import { includesimghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Img',
});

export default {
  ...options,
};

const baseArgs = {
  alt: 'Image Alt Text',
};

const Template = (args) => createComponent(args, component);

export const Img = Template.bind({});

Img.args = {
  ...baseArgs,
  img: getAssetPath('img/image-placeholder-1.jpg'),
};

export const ImgCloudinary = Template.bind({});

ImgCloudinary.args = {
  ...baseArgs,
  img: 'career/remote-working.jpg',
  cloudinary: true,
};

export const ImgSrcSet = Template.bind({});

ImgSrcSet.args = {
  ...baseArgs,
  img: 'career/remote-working.jpg',
  cloudinary: true,
  preset: 'cardSmall',
  imgSrcSets: site.data.imgSrcSets.cardSmall,
};
