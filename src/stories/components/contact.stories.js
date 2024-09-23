import ContactComponent from '../../components/contact';
import Contact from '../../../.storybook/data/contact.js';

export default {
  component: ContactComponent,
  title: 'Components/Contact',
  argTypes: {
    infos: {
      description: 'Contact Info contains all fields and Imagery',
      type: 'object',
      required: true,
    },
    collapsed: {
      description: 'Compiles the Contact Card into a small part',
      type: 'boolean',
    },
    ajax: {
      description: 'Asynchronous Data Transfer for the Contacts Form',
      type: 'object',
    },
    quote: {
      description: 'Adds Quote to the Contact Form if Quotes exists within Contact Infos',
      type: 'boolean',
    },
    spacing: {
      description: 'Adds helper classes for the spacing',
      control: {
        type: 'text',
      },
      type: {
        summary: 'Bootstrap Spacing',
        detail: 'space-bottom-1, space-bottom-2, space-top-1, space-top-2',
      },
    },
  },
};

export const Expanded = {
  args: {
    contact: Contact.infos,
    light: true,
  },
};

export const Collapsed = {
  args: {
    contact: {
      ...Contact.infos,
      ...{
        person: {
          image: 'people/people-sophie-luna.png',
          cloudinary: true,
          alt: 'Kontakt mit Sophie',
          name: 'Hast du Fragen? Sprich uns gerne an!',
          details: [
            {
              text: 'Lorem ipsum dolor & Sit amet lorem',
              href: 'mailto:kontakt@glueckkanja.com',
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
    collapsed: true,
  },
};

export const WithShape = {
  args: {
    contact: {
      ...Contact.infos,
      ...{
        headline: 'What do you want to do next?',
        level: 'h2',
        person: {
          image: '/people/people-sophie-luna.jpg',
          cloudinary: true,
          alt: 'Sophie Luna',
          name: 'Sophie Luna',
          mail: 'sales@RADIUSaaS.com',
        },
        hasGreyBackground: true,
        svgShape: {
          align: 'bottom',
          peak: 'left',
        },
        buttons: [
          {
            ctaText: 'Try RADIUSaas',
            ctaHref: 'start-now/#try',
            skin: 'primary is-cutoff',
          },
          {
            ctaText: 'Drop us a question',
            ctaHref: 'drop-a-question',
            skin: 'secondary is-cutoff',
          },
          {
            ctaText: 'Get a quote',
            ctaHref: 'start-now/#quote',
            skin: 'secondary is-cutoff',
          },
          {
            ctaText: 'Buy RADIUSaas',
            ctaHref: 'start-now',
            skin: 'secondary is-cutoff',
          },
        ],
        form: null,
        subline: null,
      },
    },
  },
};

export const WithQuote = {
  args: {
    quote: true,
    infos: {
      headline: 'Jetzt Gesprächstermin vereinbaren',
      level: 'h2',
      person: {
        image: '/people/people-jan-geisbauer-csoc.jpg',
        mail: 'sales@glueckkanja.com',
        number: '+49694005520',
        cloudinary: true,
        alt: 'Quotation Svg/Picture Platzhalter',
        name: 'Platzhalter',
        quotee: 'Jan Geisbauer',
        quoteeTitle: 'Cyber Security Lead',
        quote:
          'Bei den meisten unserer Emergency-Einsätze stellen wir immer wieder fest, dass die IT nicht gut genug auf Angriffe vorbereitet war. Ein pro-aktiver Security Check ist deshalb eine effiziente Investition in mehr Sicherheit zur Reduzierung der Ausfallzeiten.',
        detailsHeader: 'Wir freuen uns darauf, von Ihnen zu hören',
        details: [
          {
            text: '+49 69 4005520',
            href: 'tel:+49 69 4005520',
            details: 'lorem ipsum dolor sit amet lore',
            icon: 'site/phone',
          },
          {
            text: 'kontakt@glueckkanja.com',
            href: 'mailto:kontakt@glueckkanja.com',
            icon: 'site/mail',
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
            label: 'Name',
            type: 'text',
            id: 'name',
            required: true,
            requiredMsg: 'Bitte geben Sie ihren Namen an.',
          },
          {
            label: 'Unternehmen',
            type: 'text',
            id: 'company',
            required: true,
            requiredMsg: 'Bitte geben Sie ihr Unternehmen an',
          },
          {
            label: 'Email-Adresse',
            type: 'email',
            id: 'email',
            required: true,
            requiredMsg: 'Bitte geben Sie ihre E-Mail-Adresse ein',
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
            id: 'inbox_key',
            value: 'gkab-contact-form',
          },
          {
            type: 'hidden',
            id: '_gotcha',
          },
        ],
      },
    },
  },
};

export const WithQuoteBgColor = {
  args: {
    bgColor: 'var(--color-blue-jeans)',
    color: 'var(--color-copy)',
    boxBgColor: 'var(--color-gigas)',
    boxColor: 'var(--color-white)',
    quote: true,
    infos: {
      headline: 'Jetzt Gesprächstermin vereinbaren',
      level: 'h2',
      person: {
        image: '/people/people-jan-geisbauer-csoc.jpg',
        mail: 'sales@glueckkanja.com',
        number: '+49694005520',
        cloudinary: true,
        alt: 'Quotation Svg/Picture Platzhalter',
        name: 'Platzhalter',
        quotee: 'Jan Geisbauer',
        quoteeTitle: 'Cyber Security Lead',
        quote:
          'Bei den meisten unserer Emergency-Einsätze stellen wir immer wieder fest, dass die IT nicht gut genug auf Angriffe vorbereitet war. Ein pro-aktiver Security Check ist deshalb eine effiziente Investition in mehr Sicherheit zur Reduzierung der Ausfallzeiten.',
        detailsHeader: 'Wir freuen uns darauf, von Ihnen zu hören',
        details: [
          {
            text: '+49 69 4005520',
            href: 'tel:+49 69 4005520',
            details: 'lorem ipsum dolor sit amet lore',
            icon: 'site/phone',
          },
          {
            text: 'kontakt@glueckkanja.com',
            href: 'mailto:kontakt@glueckkanja.com',
            icon: 'site/mail',
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
            label: 'Name',
            type: 'text',
            id: 'name',
            required: true,
            requiredMsg: 'Bitte geben Sie ihren Namen an.',
          },
          {
            label: 'Unternehmen',
            type: 'text',
            id: 'company',
            required: true,
            requiredMsg: 'Bitte geben Sie ihr Unternehmen an',
          },
          {
            label: 'Email-Adresse',
            type: 'email',
            id: 'email',
            required: true,
            requiredMsg: 'Bitte geben Sie ihre E-Mail-Adresse ein',
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
            id: 'inbox_key',
            value: 'gkab-contact-form',
          },
          {
            type: 'hidden',
            id: '_gotcha',
          },
        ],
      },
    },
  },
};

// TODO add shape variant without form
