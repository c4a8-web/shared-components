import { createComponent } from '../../.storybook/templates';
import { includespersonquotehtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Person Quote',
};

const baseArgs = {
  img: 'career/remote-working.png',
  text: 'Viel geiler geht’s nicht, aber wir arbeiten daran. Neun firmenübergreifende Teams arbeiten an Themen wie ganzheitlichen Angeboten für unsere Kunden und gemeinsamen Projektbörsen sowie Produktentwicklung. Endlich mit Profis!',
  name: 'Jochen, dein neuer Kollege',
};

const Template = (args) => createComponent(args, component);

export const PersonQuote = Template.bind({});

PersonQuote.args = {
  ...baseArgs,
};
