import Accordion from "../../components/accordion.js";

export default {
  component: Accordion,
  argTypes: {
    accordion: {
      description: "Object of the Accordion",
      control: "object",
      required: true,
    },
    "accordion.headline": {
      description: "The Headline of the Accordion",
      type: "string",
    },
  },
  title: "Components/Accordion",
};

export const Default = {
  args: {
    accordion: {
      headline: "Features of the Admin Portal",
      id: "featureAccordion",
      tabs: [
        {
          headline: "WIFI and LAN policy creation 1",
          content:
            "<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>",
          expanded: true,
          image: "security/CSOC-Services-Incident-Response.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation 2",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Threat-Intelligence.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation 3",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-SOAR.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation 4",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Analysis-Reporting.png",
          alt: "WIFI and LAN policy creation",
        },
      ],
    },
  },
};

export const Image = {
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "security/CSOC-Services-Default.png",
      alt: "Products",
      cloudinary: true,
      id: "featureAccordion",
      tabs: [
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",
          expanded: true,
          image: "security/CSOC-Services-Incident-Response.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Threat-Intelligence.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation (default image)",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-SOAR.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Analysis-Reporting.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "Active Threat Hunting",
          content:
            "<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>",
          image: "security/CSOC-Services-Active-Threat-Hunting.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "Continuous Improvement & Reporting",
          content:
            "<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>",
          image: "security/CSOC-Services-Continous-Improvement.png",
          alt: "WIFI and LAN policy creation",
        },
      ],
    },
  },
};

export const ImageShadowless = {
  args: {
    shadowless: true,
    left: true,
    accordion: {
      subline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/products/radius/radius-wifi-lan-policy.gif",
      alt: "Products",
      cloudinary: true,
      headline: "Features of the Admin Portal",
      headlineClasses: "h3-font-size",
      id: "featureAccordion",
      tabs: [
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          expanded: true,
          image: "/products/radius/radius-wifi-lan-policy.gif",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "/products/radius/radius-logs.gif",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "/products/radius/radius-wifi-lan-policy.gif",
          alt: "WIFI and LAN policy creation",
        },
      ],
    },
  },
};

export const Collapsed = {
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "security/CSOC-Services-Default.png",
      alt: "Products",
      cloudinary: true,
      id: "featureAccordion",
      tabs: [
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Incident-Response.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Threat-Intelligence.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation (default image)",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-SOAR.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI und LAN policies",
          image: "security/CSOC-Services-Analysis-Reporting.png",
          alt: "WIFI and LAN policy creation",
        },
      ],
    },
  },
};

export const AnimatedImage = {
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "products/konnekt/konnekt-drive-letter.webp",
      animated: true,
      alt: "Products",
      cloudinary: true,
      id: "featureAccordion",
      tabs: [
        {
          headline: "Animated Webp",
          content:
            "Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",
          expanded: true,
          image: "products/konnekt/konnekt-drive-letter.webp",
          cloudinary: true,
          alt: "WIFI and LAN policy creation",
          animated: true,
        },
        {
          headline: "Normal Webp",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "/products/konnekt/konnekt-hero-image.webp",
          cloudinary: true,
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation (default image)",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-SOAR.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "WIFI and LAN policy creation",
          content:
            "Easy download of XML files to generate WIFI and LAN policies",
          image: "security/CSOC-Services-Analysis-Reporting.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "Active Threat Hunting",
          content:
            "<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>",
          image: "security/CSOC-Services-Active-Threat-Hunting.png",
          alt: "WIFI and LAN policy creation",
        },
        {
          headline: "Continuous Improvement & Reporting",
          content:
            "<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>",
          image: "security/CSOC-Services-Continous-Improvement.png",
          alt: "WIFI and LAN policy creation",
        },
      ],
    },
  },
};
