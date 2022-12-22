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
  // size: 4444,
};

export const ArrowLeft = Template.bind({});

ArrowLeft.args = {
  icon: 'arrow',
  direction: 'left',
};

export const ArrowNarrow = Template.bind({});

ArrowNarrow.args = {
  icon: 'arrow-narrow',
};

export const ArrowExternal = Template.bind({});

ArrowExternal.args = {
  icon: 'arrow-external',
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

export const PhoneMail = Template.bind({});

PhoneMail.args = {
  icon: 'phone-mail',
  size: 'large',
};

export const ComputerShield = Template.bind({});

ComputerShield.args = {
  icon: 'computer-shield',
  size: 'large',
};

export const Quotes = Template.bind({});

Quotes.args = {
  icon: 'quotes',
  size: 'large',
};

export const Menu = Template.bind({});

Menu.args = {
  icon: 'menu',
  size: 'large',
};

export const Expand = Template.bind({});

Expand.args = {
  icon: 'expand',
  size: 'large',
};

export const Plus = Template.bind({});

Plus.args = {
  icon: 'plus',
  size: 'large',
};

export const Minus = Template.bind({});

Minus.args = {
  icon: 'minus',
  size: 'large',
};
