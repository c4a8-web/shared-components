import ToggleSwitchComponent from '../components/toggle-switch.vue';

export default {
  component: ToggleSwitchComponent,
  argTypes: {},
  title: 'Components/Toggle Switch',
};

export const ToggleSwitch = {
  args: {},
};

export const WithHint = {
  args: {
    toggleSwitch: {
      textLeft: 'Monthly',
      textRight: 'Annual',
      hint: {
        text: 'Save up to 10%',
        color: 'var(--color-white)',
        bgColor: 'var(--color-secondary)',
      },
      id: 'pricingToggleSwitch',
      targetSelector: '.pricingSwitch',
    },
    products: {
      pricing: {
        defaultPlan: 'annual',
      },
    },
  },
};
