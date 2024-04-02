import { createComponent } from '../../.storybook/templates';
import { includeslisthtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/List',
};

const Template = (args) => createComponent(args, component);

export const List = Template.bind({});

List.args = {
  items: [
    'Identifikation der IT Bedürfnisse aller Mitarbeiter',
    'Entiwcklung IT Strategie',
    'Homogenisierung standortübergreifender IT-Infrastruktur',
    'Transformation zu modernen Arbeitsplätzen',
    'Umstellung von 1.600 Windows Clients auf 600 Smartphones',
  ],
};
