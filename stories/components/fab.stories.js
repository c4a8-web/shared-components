import { createComponent, getTitle } from '../../.storybook/templates';
import { includesfabhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Fab',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Contact = Template.bind({});

Contact.args = {
  modal: {
    contact: {
      infos: {
        person: {
          image: 'people/people-sophie-luna.png',
          cloudinary: true,
          alt: 'Kontakt mit Sophie',
          name: 'Hast du Fragen? Sprich uns gerne an!',
          details: [
            {
              text: 'kontakt@glueckkanja-gab.com',
              href: 'mailto:kontakt@glueckkanja-gab.com',
              icon: 'site/mail',
            },
            {
              text: '+49 69 4005520',
              href: 'tel:+49 69 4005520',
              details: 'lorem ipsum dolor sit amet lore',
              icon: 'site/phone',
            },
          ],
        },
        form: {
          ctaText: 'Absenden',
          cta: {
            skin: 'primary is-light',
          },
          method: 'post',
          action: '/',
          fields: [
            {
              label: 'Vorname',
              type: 'text',
              id: 'prename',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihren Vornamen an.',
            },
            {
              label: 'Nachname',
              type: 'text',
              id: 'surname',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihren Nachnamen an.',
            },
            {
              label: 'Email-Adresse',
              type: 'email',
              id: 'email',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
            },
            {
              label: 'Nachricht',
              type: 'textarea',
              id: 'message',
              required: false,
              requiredMsg: 'Bitte ausfüllen',
            },
            {
              label:
                'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
              type: 'checkbox',
              id: 'checkbox1',
            },
            {
              type: 'hidden',
              id: '_to',
              value: 'loremipsum@glueckkanja-gab.com',
            },
            {
              type: 'hidden',
              id: '_gotcha',
            },
          ],
        },
      },
    },
  },
};
