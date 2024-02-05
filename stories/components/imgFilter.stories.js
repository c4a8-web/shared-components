import { getTitle, createStory, getArgTypes, getAssetPath } from '../../.storybook/templates';
import { includesimgfilterhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Img Filter',
});

export default getArgTypes({
  ...options,
  // argTypes: {
  //   accordion: {
  //     description: 'Object of the Accordion',
  //     control: 'object',
  //     required: true,
  //   },
  //   'accordion.headline': {
  //     description: 'The Headline of the Accordion',
  //     type: 'string',
  //   },
  // },
});

export const Default = createStory(component, {
  img: getAssetPath('svg/icons/icon-hand.svg'),
  alt: 'lorem ipsum dolor sit amet, consectetur adipis',
});
