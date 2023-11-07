import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includessliderhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Slider',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Slider = Template.bind({});

const sliderPlaceholders = `
  <div class="image-list vue-component">
    <div class="image-list__item is--desktop">
      <img src="${getAssetPath('img/unified-contacts-pro-desk.svg')}" />
    </div>
    <div class="image-list__item is--mobile">
      <img src="${getAssetPath('img/unified-contacts-pro-mob.svg')}" />
    </div>
  </div>
  <div class="image-list vue-component">
    <div class="image-list__item is--desktop">
      <img src="${getAssetPath('img/unified-contacts-free-desk.svg')}" />
    </div>
    <div class="image-list__item is--mobile">
      <img src="${getAssetPath('img/unified-contacts-free-mob.svg')}" />
    </div>
  </div>
`;

Slider.args = {
  content: sliderPlaceholders,
  headline: 'Architecture Pro vs. Free',
  headlineLevel: 'h3',
};

export const NoBackground = Template.bind({});

NoBackground.args = {
  content: sliderPlaceholders,
  headline: 'Architecture Pro vs. Free',
  headlineLevel: 'h3',
  hideBackground: true,
};
