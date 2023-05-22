import { createComponent, getTitle } from '../../.storybook/templates';
import { includesaccordionhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Accordion',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  accordion: {
    headline: 'Features of the Admin Portal',
    id: 'featureAccordion',
    tabs: [
      {
        headline: 'WIFI and LAN policy creation 1',
        content:
          '<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>',
        expanded: true,
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation 2',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation 3',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation 4',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation',
      },
    ],
  },
};

export const Image = Template.bind({});

Image.args = {
  shadowless: false,
  left: true,
  accordion: {
    subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'security/CSOC-Services-Default.png',
    alt: 'Products',
    cloudinary: true,
    id: 'featureAccordion',
    tabs: [
      {
        headline: 'WIFI and LAN policy creation',
        content:
          'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation',
      },
    ],
  },
};

export const ImageShadowless = Template.bind({});

ImageShadowless.args = {
  shadowless: true,
  left: true,
  accordion: {
    subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/products/radius/radius-wifi-lan-policy.gif',
    alt: 'Products',
    cloudinary: true,
    headline: 'Features of the Admin Portal',
    id: 'featureAccordion',
    tabs: [
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-logs.gif',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation',
      },
    ],
  },
};

export const Collapsed = Template.bind({});

Collapsed.args = {
  shadowless: false,
  left: true,
  accordion: {
    subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'security/CSOC-Services-Default.png',
    alt: 'Products',
    cloudinary: true,
    id: 'featureAccordion',
    tabs: [
      {
        headline: 'WIFI and LAN policy creation',
        content:
          'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation',
      },
    ],
  },
};
