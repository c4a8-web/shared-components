import { createComponent } from '../../.storybook/templates';
import { includespricingdetailshtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Pricing Details',
};

const Template = (args) => createComponent(args, component);

// TODO make this available at the main tag data-pricing="{{ site.data.products.pricing | jsonify | xml_escape }}"

export const PricingDetails = Template.bind({});

PricingDetails.args = {
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
  products: [
    {
      title: 'RADIUSaaS 50',
      description: '50 users included',
      value: 50,
      price: {
        annual: 75,
        monthly: 83,
        per: 'month',
      },
      additionalUsersFee: {
        information: 'Additional users fee:',
        annual: 1.5,
        monthly: 1.65,
      },
      buttons: [
        {
          ctaText: 'Get a quote',
          ctaHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-50-Y',
          alternativeHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-50-M',
          analytics: 'AW-1060776844/kh6ICKalyMADEIzX6PkD',
          skin: 'secondary is-cutoff',
          grow: true,
          target: '_blank',
          pages: ['Start now'],
          visibleTabs: ['quote'],
        },
      ],
    },
    {
      title: 'RADIUSaaS 250',
      description: '250 users included',
      value: 250,
      price: {
        annual: 375,
        monthly: 413,
        per: 'month',
      },
      additionalUsersFee: {
        information: 'Additional users fee:',
        annual: 0.45,
        monthly: 0.5,
      },
      buttons: [
        {
          ctaText: 'Get a quote',
          ctaHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-250-Y',
          alternativeHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-250-M',
          analytics: 'AW-1060776844/kh6ICKalyMADEIzX6PkD',
          skin: 'secondary is-cutoff',
          grow: true,
          target: '_blank',
          pages: ['Start now'],
          visibleTabs: ['quote'],
        },
      ],
    },
    {
      title: 'RADIUSaaS 1000',
      description: '1.000 users included',
      value: 1000,
      price: {
        annual: 713,
        monthly: 784,
        per: 'month',
      },
      additionalUsersFee: {
        information: 'Additional users fee:',
        annual: 0.3,
        monthly: 0.33,
      },
      buttons: [
        {
          ctaText: 'Get a quote',
          ctaHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-1000-Y',
          alternativeHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-1000-M',
          analytics: 'AW-1060776844/kh6ICKalyMADEIzX6PkD',
          skin: 'secondary is-cutoff',
          grow: true,
          target: '_blank',
          pages: ['Start now'],
          visibleTabs: ['quote'],
        },
      ],
    },
    {
      title: 'RADIUSaaS 5000',
      description: '5.000 users included',
      value: 5000,
      price: {
        annual: 1913,
        monthly: 2104,
        per: 'month',
      },
      additionalUsersFee: {
        information: 'Additional users fee:',
        annual: 0.2,
        monthly: 0.22,
      },
      buttons: [
        {
          ctaText: 'Get a quote',
          ctaHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-5000-Y',
          alternativeHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-5000-M',
          analytics: 'AW-1060776844/kh6ICKalyMADEIzX6PkD',
          skin: 'secondary is-cutoff',
          grow: true,
          target: '_blank',
          pages: ['Start now'],
          visibleTabs: ['quote'],
        },
      ],
    },
    {
      title: 'RADIUSaaS 10000',
      description: '10.000 users included',
      value: 10000,
      price: {
        annual: 2913,
        monthly: 3204,
        per: 'month',
      },
      additionalUsersFee: {
        information: 'Additional users fee:',
        annual: 0.15,
        monthly: 0.17,
      },
      buttons: [
        {
          ctaText: 'Get a quote',
          ctaHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-10000-Y',
          alternativeHref: 'https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-10000-M',
          analytics: 'AW-1060776844/kh6ICKalyMADEIzX6PkD',
          skin: 'secondary is-cutoff',
          grow: true,
          target: '_blank',
          pages: ['Start now'],
          visibleTabs: ['quote'],
        },
      ],
    },
  ],
};
