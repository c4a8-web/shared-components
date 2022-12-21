import { createComponent, getTitle } from '../../.storybook/templates';
import { includesaccordionhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Accordion',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Accordion = Template.bind({});
Accordion.args = {
  accordion: {
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
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation',
      },
      {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-wifi-lan-policy.gif',
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
