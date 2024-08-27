import { getDefaultSettings, getAssetPath } from '../../.storybook/templates';
import fabButtonTemplate from '!!raw-loader!./fabButton.html';

export default {
  ...getDefaultSettings({
    component: fabButtonTemplate,
    argTypes: {
      icon: {
        description: 'Fab Button Icon',
        type: 'object',
      },
      modal: {
        description: 'The Modal that gets called after fab Button is pressed',
        type: 'object',
      },
      noSticky: {
        description: 'Disables Sticky for the fab Button',
        type: 'boolean',
      },
      bgColor: {
        description: 'Sets the Background Color of the fab Button',
        type: 'string',
      },
      iconColor: {
        description: 'Sets the color of the Icon',
        type: 'string',
      },
      trigger: {
        description: 'Trigger for the Modal',
        type: 'string',
      },
    },
  }),
  title: 'Components/Fab Button',
};

export const Contact = {
  args: {
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
                text: 'kontakt@glueckkanja.com',
                href: 'mailto:kontakt@glueckkanja.com',
                icon: 'site/mail',
              },
              {
                text: '+49 69 4005520',
                href: 'tel:+49 69 4005520',
                notes: '( Mo-Do 09-17 Uhr )',
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
            action: getAssetPath('/mock/fabButton.json'),
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
                required: true,
              },
              {
                type: 'hidden',
                id: '_to',
                value: 'loremipsum@glueckkanja.com',
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
  },
};

export const Emergency = {
  args: {
    bgColor: 'var(--color-orange)',
    iconColor: 'var(--color-white)',
    icon: 'emergency',
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
                text: 'kontakt@glueckkanja.com',
                href: 'mailto:kontakt@glueckkanja.com',
                icon: 'site/mail',
              },
              {
                text: '+49 69 4005520',
                href: 'tel:+49 69 4005520',
                notes: '( Mo-Do 09-17 Uhr )',
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
            action: getAssetPath('/mock/fabButton.json'),
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
                required: true,
              },
              {
                type: 'hidden',
                id: '_to',
                value: 'loremipsum@glueckkanja.com',
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
  },
};
