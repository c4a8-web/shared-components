import { createComponent, getTitle } from '../../.storybook/templates';
import { includesserviceoverviewhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Service Overview',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ServiceOverview = Template.bind({});

ServiceOverview.args = {
  title: 'Aufgabe',
  logo: {
    img: '/c_lpad,h_60,w_180/logos/cust-freudenberg.png',
    alt: 'lorem ipsum',
    url: 'https://www.google.com',
  },
  list: {
    items: [
      'Identifikation der IT Bedürfnisse aller Mitarbeiter',
      'Entiwcklung IT Strategie',
      'Homogenisierung standortübergreifender IT-Infrastruktur',
      'Transformation zu modernen Arbeitsplätzen',
      'Umstellung von 1.600 Windows Clients auf 600 Smartphones',
    ],
  },
};
