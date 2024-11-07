import PricingDetailsComponent from '../components/pricing-details';
import Products from '../.storybook/data/products.js';

export default {
  title: 'Components/Pricing Details',
  component: PricingDetailsComponent,
};

export const PricingDetails = {
  args: {
    headline: 'Pricing Details',
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
    products: Products,
  },
};

export const PricingConditions = {
  args: {
    headline: 'Pricing Details',
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
    products: Products,
  },
};

export const Buttos = {
  args: {
    headline: 'Pricing Details',
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
    visibleTabs: 'quote',
    products: Products,
  },
};
