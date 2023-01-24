import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includessliderhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Slider',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Slider = Template.bind({});

Slider.args = {
  content: `
              <img src="${getAssetPath('img/slider-placeholder-2.png')}" />
              <img src="${getAssetPath('img/slider-placeholder-1.png')}" />
  `,
  headline: 'Architecture Pro vs. Free',
  level: 'h2',
};
