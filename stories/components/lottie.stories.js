import { createStory, getTitle } from '../../.storybook/templates';
import { includeslottiehtml as component } from '../../.storybook/generatedIncludes';
import lottie1 from '../data/lottie1.json';

const options = getTitle({
  title: 'Lottie',
});

export default {
  ...options,
};

export const AnimationHero = createStory(component, {
  width: 600,
  height: 600,
  data: lottie1,
  background: '#ff0000',
});

export const NoDimensions = createStory(component, {
  data: lottie1,
});
