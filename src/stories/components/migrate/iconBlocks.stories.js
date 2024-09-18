import IconBlocksTemplate from "../../components/icon-blocks";

export default {
  title: "Components/Icon Blocks",
  component: IconBlocksTemplate,
};

export const IconBlocks = {
  args: {
    iconBlocks: {
      items: [
        {
          image: "svg/logos/logo-windows10.svg",
          alt: "Windows 10",
          headline: "Windows 10",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-azure-ad.svg",
          alt: "Azure Active Directory",
          headline: "Azure Active Directory",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-msft-defender-for-endpoint-org.svg",
          alt: "Microsoft Defender for Endpoint",
          headline: "Microsoft Defender<br />for Endpoint",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-endpoint-manager.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "Endpoint Manager",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-m365-apps.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "Microsoft 365 Apps<br />for Enterprise",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-realmjoin.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "RealmJoin",
          copy: "",
        },
      ],
    },
  },
};

export const CustomColumnCount = {
  args: {
    columns: 4,
    classes: "h3-font-size",
    iconBlocks: {
      cta: {
        text: "Button",
        href: "javascript:void(0)",
        skin: "primary",
        button: true,
      },
      items: [
        {
          image: "svg/logos/logo-windows10.svg",
          alt: "Windows 10",
          headline: "Windows 10",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-azure-ad.svg",
          alt: "Azure Active Directory",
          headline: "Azure Active Directory",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-msft-defender-for-endpoint-org.svg",
          alt: "Microsoft Defender for Endpoint",
          headline: "Microsoft Defender<br />for Endpoint",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-endpoint-manager.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "Endpoint Manager",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-m365-apps.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "Microsoft 365 Apps<br />for Enterprise",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-realmjoin.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "RealmJoin",
          copy: "",
        },
      ],
    },
  },
};

export const HeadlineAndSticky = {
  args: {
    columns: 4,
    classes: "font-size-1 bold",
    sticky: true,
    iconBlocks: {
      items: [
        {
          image: "svg/logos/logo-windows10.svg",
          alt: "Windows 10",
          headline: "Windows 10",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-azure-ad.svg",
          alt: "Azure Active Directory",
          headline: "Azure Active Directory",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-msft-defender-for-endpoint-org.svg",
          alt: "Microsoft Defender for Endpoint",
          headline: "Microsoft Defender<br />for Endpoint",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-endpoint-manager.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "Endpoint Manager",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-m365-apps.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "Microsoft 365 Apps<br />for Enterprise",
          copy: "",
        },
        {
          image: "svg/icons-large/icon-realmjoin.svg",
          alt: "Endpoint gk-SecOfferingMDATPOnePager",
          headline: "RealmJoin",
          copy: "",
        },
      ],
    },
  },
};

export const List = {
  args: {
    iconBlocks: {
      items: [
        {
          image: "svg/logos/logo-windows10.svg",
          alt: "Windows 10",
          headline: "Windows 10",
          copy: `
            <ul class="dashed">
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          `,
        },
        {
          image: "svg/logos/logo-windows10.svg",
          alt: "Windows 11",
          headline: "Windows 11",
          copy: `
            <ul class="dashed">
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          `,
        },
      ],
    },
  },
};
