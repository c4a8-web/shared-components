import IconComponent from '../components/icon.vue';

export default {
  title: 'Components/Icon',
  component: IconComponent,
};

const Template = (args) => ({
  components: { IconComponent },
  setup() {
    return { args };
  },
  template: '<IconComponent v-bind="args" />',
});

export const Arrow = {
  args: {
    icon: 'arrow',
    // size: 4444,
  },
};

export const ArrowLeft = {
  args: {
    icon: 'arrow',
    direction: 'left',
  },
};

export const ArrowNarrow = {
  args: {
    icon: 'arrow-narrow',
  },
};

export const ArrowExternal = {
  args: {
    icon: 'arrow-external',
  },
};

export const ArrowCurl = {
  args: {
    icon: 'arrow-curl',
  },
};

export const Close = {
  args: {
    icon: 'close',
  },
};

export const CloseCircle = {
  args: {
    icon: 'close',
    circle: true,
  },
};

export const CloseCircleHover = {
  args: {
    icon: 'close',
    circle: true,
    hover: true,
  },
};

export const Hand = {
  args: {
    icon: 'hand',
    size: 'xxl',
  },
};

export const Rocket = {
  args: {
    icon: 'rocket',
    size: 'xl',
  },
};

export const Reload = {
  args: {
    icon: 'reload',
    size: 'xxl',
  },
};

export const Smile = {
  args: {
    icon: 'smile',
    size: 'large',
  },
};

export const PhoneMail = {
  args: {
    icon: 'phone-mail',
    size: 'large',
  },
};

export const ComputerShield = {
  args: {
    icon: 'computer-shield',
    size: 'large',
  },
};

export const Quote = {
  args: {
    icon: 'quote',
    size: 'large',
  },
};

export const VMenu = {
  args: {
    icon: 'v-menu',
    size: 'large',
  },
};

export const Expand = {
  args: {
    icon: 'expand',
    size: 'large',
  },
};

export const Plus = {
  args: {
    icon: 'plus',
    size: 'large',
  },
};

export const Minus = {
  args: {
    icon: 'minus',
    size: 'large',
  },
};

export const CheckMark = {
  args: {
    icon: 'check-mark',
    size: 'large',
  },
};

export const XMark = {
  args: {
    icon: 'x-mark',
    size: 'large',
  },
};

export const PlusMinus = {
  args: {
    icon: 'plus-minus',
    size: 'large',
  },
};

export const Phone = {
  args: {
    icon: 'phone',
    size: 'large',
  },
};

export const EmailActionUnread = {
  args: {
    icon: 'email-action-unread',
    size: 'large',
  },
};

export const Pin = {
  args: {
    icon: 'pin',
    size: 'large',
  },
};

export const PhoneCharger = {
  args: {
    icon: 'phone-charger',
    size: 'large',
  },
};

export const Mail = {
  args: {
    icon: 'mail',
    size: 'large',
  },
};

export const Emergency = {
  args: {
    icon: 'emergency',
    size: 'large',
  },
};

export const Check = {
  args: {
    icon: 'check',
    color: 'var(--color-blue-jeans)',
    circle: true,
    size: 'large',
    hasBackground: true,
  },
};

export const Bin = {
  args: {
    icon: 'bin',
    size: 'large',
  },
};

export const Meerkat = {
  args: {
    icon: 'meerkat',
    size: 'xxl',
  },
};

export const TileView = {
  args: {
    icon: 'tile-view',
    size: 'xxl',
  },
};

export const ListView = {
  args: {
    icon: 'list-view',
    size: 'xxl',
  },
};

export const Info = {
  args: {
    icon: 'info',
    size: 'xxl',
  },
};

export const World = {
  args: {
    icon: 'world',
    size: 'xxl',
  },
};

export const StrategySplit = {
  args: {
    icon: 'strategy-split',
    size: 'xxl',
  },
};

export const ImageCredits = {
  args: {
    icon: 'image-credits',
    size: 'xxl',
  },
};

export const Grid = {
  args: {
    icon: 'grid',
    size: 'xxl',
  },
};
