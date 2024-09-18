import PricingProduct from "../../components/pricing-product";

export default {
  title: "Components/Pricing Product",
  component: PricingProduct,
};

export const List = {
  args: {
    product: {
      title: "RADIUSaaS 50",
      description: "50 users included",
      value: 50,
      price: {
        annual: 75,
        monthly: 83,
        per: "month",
      },
      additionalUsersFee: {
        information: "Additional users fee:",
        annual: 1.5,
        monthly: 1.65,
      },
    },
  },
};

export const Tile = {
  args: {
    product: {
      title: "RADIUSaaS 50",
      description: "50 users included",
      value: 50,
      price: {
        annual: 75,
        monthly: 83,
        per: "month",
      },
      additionalUsersFee: {
        information: "Additional users fee:",
        annual: 1.5,
        monthly: 1.65,
      },
      buttons: [
        {
          ctaText: "Buy now",
          ctaHref: "https://www.cleverbridge.com/306/purl-RADIUSaaS-Buy-50-Y",
          alternativeHref:
            "https://www.cleverbridge.com/306/purl-RADIUSaaS-Buy-50-M",
          skin: "primary is-cutoff",
          grow: true,
          target: "_blank",
          pages: ["Start now", "Pricing"],
          visibleTabs: ["buy"],
        },
        {
          ctaText: "Get a quote",
          ctaHref: "https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-50-Y",
          alternativeHref:
            "https://www.cleverbridge.com/306/purl-RADIUSaaS-Quote-50-M",
          skin: "secondary is-cutoff",
          grow: true,
          target: "_blank",
          pages: ["Start now", "Pricing"],
          visibleTabs: ["quote"],
        },
      ],
    },
  },
};
