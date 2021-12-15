import { createComponent, getTitle } from '../../.storybook/templates';
import { includesiconhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Icon',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Arrow = Template.bind({});

Arrow.args = {
  icon: 'arrow',
};

export const ArrowLeft = Template.bind({});

ArrowLeft.args = {
  icon: 'arrow',
  direction: 'left',
};

export const Close = Template.bind({});

Close.args = {
  icon: 'close',
};

export const CloseCircle = Template.bind({});

CloseCircle.args = {
  icon: 'close',
  circle: true,
};

export const CloseCircleHover = Template.bind({});

CloseCircleHover.args = {
  icon: 'close',
  circle: true,
  hover: true,
};

export const Rocket = Template.bind({});

Rocket.args = {
  icon: 'rocket',
  size: 'xl',
};

export const Smile = Template.bind({});

Smile.args = {
  icon: 'smile',
  size: 'large',
};
