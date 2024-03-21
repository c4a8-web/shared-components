import { createStory, getTitle, getAssetPath, site } from '../../.storybook/templates';
import { includesimghtml as component } from '../../.storybook/generatedIncludes';
import lottie1 from '../data/lottie1.json';

const options = getTitle({
  title: 'Img',
});

export default {
  ...options,
};

const baseArgs = {
  alt: 'Image Alt Text',
};

export const Img = createStory(component, {
  ...baseArgs,
  img: getAssetPath('img/image-placeholder-1.jpg'),
});

export const ImgCloudinary = createStory(component, {
  ...baseArgs,
  img: 'career/remote-working.jpg',
  cloudinary: true,
});

export const ImgSrcSet = createStory(component, {
  ...baseArgs,
  img: 'career/remote-working.jpg',
  cloudinary: true,
  preset: 'cardSmall',
  imgSrcSets: site.data.imgSrcSets.cardSmall,
});

export const Lottie = createStory(component, {
  ...baseArgs,
  lottie: lottie1,
});
