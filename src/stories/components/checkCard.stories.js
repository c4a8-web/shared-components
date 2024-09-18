import CheckCardComponent from "../../components/check-card";

export default {
  component: CheckCardComponent,
  argTypes: {
    headline: {
      description: "Headline of Check Cards",
      type: "string",
    },
    level: {
      description: "Headline Level of Check Cards",
      control: {
        type: "text",
      },
      type: {
        summary: "Headline Levels",
        detail: "h1, h2, h3, h4",
      },
    },
    headlineClasses: {
      description: "Headline Classes of Check Cards",
      type: "string",
    },
    subline: {
      description: "Subline of Check Cards",
      type: "string",
    },
    sublineClasses: {
      description: "Subline Classes of Check Cards",
      type: "string",
    },
    spacing: {
      description: "Adds helper classes for the spacing",
      control: {
        type: "text",
      },
      type: {
        summary: "Bootstrap Spacing",
        detail: "space-bottom-1, space-bottom-2, space-top-1, space-top-2",
      },
    },
    checks: {
      description: "Checks Content",
      control: {
        type: "array",
      },
      required: true,
    },
  },
  title: "Components/Check Card",
};

export const CheckCard = {
  args: {
    headline:
      "Wir checken jetzt ihre IT-Sicherheit on Premises und in der Cloud",
    level: "h2",
    headlineClasses: "text-black",
    subline:
      "<strong>In Zusammenarbeit mit Microsoft sind verschiedene </strong>Video Casestudies im Rahmen useres '100% Cloud' Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung",
  },
};

export const Products = {
  args: {
    headline: "Plan comparison",
    level: "h2",
    headlineClasses: "bold text-black text-center",
    checks: [
      {
        title: "Unified Contact",
        picture:
          "products/unified-contacts/unified-contacts-products-header.png",
        product: [
          {
            title: "Tenant",
            subpoints: [
              {
                subpoint: "Runs in your tenant (SaaS)",
              },
            ],
          },
          {
            title: "Contact Sources",
            subpoints: [
              {
                subpoint: "Azure AD users & contacts",
              },
              {
                included: true,
                subpoint: "Personal Exchange Online contacts",
              },
              {
                subpoint: "SharePoint Online list",
              },
            ],
          },
          {
            title: "Other",
            subpoints: [
              {
                included: true,
                subpoint: "Support service",
              },
              {
                subpoint: "Favorite contacts list",
              },
            ],
          },
        ],
      },
      {
        title: "Unified Contact",
        tag: {
          text: "Free",
          color: "var(--color-black)",
          bgColor: "var(--color-cream-can)",
        },
        picture:
          "products/unified-contacts/unified-contacts-products-header.png",
        product: [
          {
            title: "Tenant",
            subpoints: [
              {
                included: true,
                subpoint: "Runs in your tenant (SaaS)",
              },
            ],
          },
          {
            title: "Contact Sources",
            subpoints: [
              {
                subpoint: "Azure AD users & contacts",
              },
              {
                included: true,
                subpoint: "Personal Exchange Online contacts",
              },
              {
                subpoint: "SharePoint Online list",
              },
            ],
          },
          {
            title: "Other",
            subpoints: [
              {
                included: true,
                subpoint: "Support service",
              },
              {
                subpoint: "Favorite contacts list",
              },
            ],
          },
        ],
      },
    ],
  },
};
