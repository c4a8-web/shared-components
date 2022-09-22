import { createComponent, getTitle, site } from '../../.storybook/templates';
import { includesmodalerrorhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Modal Error',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ModalError = Template.bind({});

ModalError.args = {
  title: 'Ooops!',
  subtitle: 'Irgendetwas ist schief gelaufen.',
  paragraph: 'Bitte versuche es später nocheinmal oder kontaktiere uns unter:',
  email: 'steffixyz@glueckkanja-gab.de',
  phonenumber: '+49 69 4005520',
};
