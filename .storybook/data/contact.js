const Contact = {
  infos: {
    headline: 'Haben Sie Fragen?',
    level: 'h2',
    subline: 'Sprechen Sie uns an!',
    person: {
      image: 'people/people-sophie-luna.png',
      cloudinary: true,
      alt: 'Kontakt mit Sophie',
      name: 'Sophie Luna',
      number: '+49 69 4005520',
      mail: 'sales@glueckkanja.com',
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
          requiredMsg: 'Bitte geben Sie Ihren Namen an.',
        },
        {
          label: 'Unternehmen',
          type: 'text',
          id: 'company',
          required: true,
          requiredMsg: 'Bitte geben Sie Ihr Unternehmen an.',
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
          label:
            'Ich möchte per E-Mail über Neuigkeiten, Veranstaltungen und Angebote und Dienstleistungen von glueckkanja informiert werden.',
          type: 'checkbox',
          id: 'checkbox2',
        },
        {
          type: 'hidden',
          id: '_to',
          value: '6ad396fb.glueckkanja.com@de.teams.ms',
        },
        {
          type: 'hidden',
          id: '_gotcha',
        },
      ],
    },
  },
  infosEn: {
    headline: 'Do you have Questions?',
    level: 'h2',
    subline: 'Feel free to contact us!',
    person: {
      image: 'people/people-sophie-luna.png',
      cloudinary: true,
      alt: 'Kontakt mit Sophie',
      name: 'Sophie Luna',
      number: '+49 69 4005520',
      mail: 'sales@glueckkanja.com',
    },
    form: {
      ctaText: 'Submit',
      method: 'post',
      action: '/',
      fields: [
        {
          label: 'Last name',
          type: 'text',
          id: 'surname',
          required: true,
          requiredMsg: 'Please complete',
        },
        {
          label: 'First name',
          type: 'text',
          id: 'prename',
          required: true,
          requiredMsg: 'Please complete',
        },
        {
          label: 'Email address',
          type: 'email',
          id: 'email',
          required: true,
          requiredMsg: 'Please complete',
        },
        {
          label: 'Message',
          type: 'textarea',
          id: 'message',
          required: true,
          requiredMsg: 'Please complete',
        },
        {
          label:
            'I agree to the storage of my data and have read and accepted the privacy policy. My consent can be revoked at any time.',
          type: 'checkbox',
          id: 'checkbox1',
        },
        {
          label: 'I would like to be informed by email about news, events and offers and services of glueckkanja.',
          type: 'checkbox',
          id: 'checkbox2',
        },
        {
          type: 'hidden',
          id: '_to',
          value: '6ad396fb.glueckkanja.com@de.teams.ms',
        },
        {
          type: 'hidden',
          id: '_gotcha',
        },
      ],
    },
  },
};

export default Contact;
