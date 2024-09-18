import ServiceOverviewComponent from "../../components/service-overview";

export default {
  title: "Components/Service Overview",
  component: ServiceOverviewComponent,
};

export const ServiceOverview = {
  args: {
    title: "Aufgabe",
    logo: {
      img: "/c_lpad,h_60,w_180/logos/cust-freudenberg.png",
      alt: "lorem ipsum",
      url: "https://www.google.com",
    },
    list: {
      items: [
        "Identifikation der IT Bedürfnisse aller Mitarbeiter",
        "Entiwcklung IT Strategie",
        "Homogenisierung standortübergreifender IT-Infrastruktur",
        "Transformation zu modernen Arbeitsplätzen",
        "Umstellung von 1.600 Windows Clients auf 600 Smartphones",
      ],
    },
    services: {
      title: "Products and Services",
      label: "Industry",
      value: "Manufacturing",
      items: [
        {
          text: "Azure Active Directory",
          href: "javascript:void(0)",
        },
        {
          text: "Azure Virtual Desktop",
          href: "javascript:void(0)",
        },
        {
          text: "Exchange Online",
          href: "javascript:void(0)",
        },
        {
          text: "Microsoft 365",
          href: "javascript:void(0)",
        },
        {
          text: "Microsoft Intune",
          href: "javascript:void(0)",
        },
      ],
    },
  },
};
