import { createComponent } from '../../.storybook/templates';
import { includesiconhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Icon',
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

export const ArrowCurl = Template.bind({});

ArrowCurl.args = {
  icon: 'arrow-curl',
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

export const Hand = Template.bind({});

Hand.args = {
  icon: 'hand',
  size: 'xxl',
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

export const CheckMark = Template.bind({});

CheckMark.args = {
  icon: 'check-mark',
  size: 'large',
};

export const XMark = Template.bind({});

XMark.args = {
  icon: 'x-mark',
  size: 'large',
};

export const PlusMinus = Template.bind({});

PlusMinus.args = {
  icon: 'plus-minus',
  size: 'large',
};

export const Phone = Template.bind({});

Phone.args = {
  icon: 'phone',
  size: 'large',
};

export const EmailActionUnread = Template.bind({});

EmailActionUnread.args = {
  icon: 'email-action-unread',
  size: 'large',
};

export const Pin = Template.bind({});

Pin.args = {
  icon: 'pin',
  size: 'large',
};

export const PhoneCharger = Template.bind({});

PhoneCharger.args = {
  icon: 'phone-charger',
  size: 'large',
};

export const Mail = Template.bind({});

Mail.args = {
  icon: 'mail',
  size: 'large',
};

export const Emergency = Template.bind({});

Emergency.args = {
  icon: 'emergency',
  size: 'large',
};

export const Check = Template.bind({});

Check.args = {
  icon: 'check',
  color: 'var(--color-blue-jeans)',
  circle: true,
  size: 'large',
  hasBackground: true,
};

export const Bin = Template.bind({});

Bin.args = {
  icon: 'bin',
  size: 'large',
};

export const Meerkat = Template.bind({});

Meerkat.args = {
  icon: 'meerkat',
  size: 'xxl',
};

export const TileView = Template.bind({});

TileView.args = {
  icon: 'tile-view',
  size: 'xxl',
};

export const ListView = Template.bind({});

ListView.args = {
  icon: 'list-view',
  size: 'xxl',
};

export const Info = Template.bind({});

Info.args = {
  icon: 'info',
  size: 'xxl',
};

export const World = Template.bind({});

World.args = {
  icon: 'world',
  size: 'xxl',
};

export const StrategySplit = Template.bind({});

StrategySplit.args = {
  icon: 'strategy-split',
  size: 'xxl',
};

export const ImageCredits = Template.bind({});

ImageCredits.args = {
  icon: 'image-credits',
  size: 'xxl',
};

export const Reload = Template.bind({});

Reload.args = {
  icon: 'reload',
  size: 'xxl',
};
