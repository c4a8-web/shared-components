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
              <div>
                <div class="slider__item--desktop">
                  <img src="${getAssetPath('img/slider-placeholder-2.svg')}" />
                </div>
                <div class="slider__item--mobile">
                  <img src="${getAssetPath('img/slider-placeholder-2-mobile.svg')}" />
                </div>
              </div>
              <div>
                <div class="slider__item--desktop">
                  <img src="${getAssetPath('img/slider-placeholder-1.svg')}" />
                </div>
                <div class="slider__item--mobile">
                  <img src="${getAssetPath('img/slider-placeholder-1-mobile.svg')}" />
                </div>
              </div>
  `,
  headline: 'Architecture Pro vs. Free',
  headlineLevel: 'h3',
};

export const NoBackground = Template.bind({});

NoBackground.args = {
  content: `
              <img src="${getAssetPath('img/slider-placeholder-2.png')}" />
              <img src="${getAssetPath('img/slider-placeholder-1.png')}" />
  `,
  headline: 'Architecture Pro vs. Free',
  headlineLevel: 'h3',
  hideBackground: true,
};
