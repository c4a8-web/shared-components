import { createComponent, getTitle } from '../../.storybook/templates';
import { includeseventdetailhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const EventDetail = Template.bind({});

EventDetail.args = {
  form: {
    uncentered: true,
    ctaText: 'Anfrage Absenden',
    cta: {
      skin: 'primary',
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
        label: 'Nachnamen',
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
        label: 'Telefon',
        type: 'phone',
        id: 'phone',
        required: true,
        requiredMsg: 'Bitte geben Sie Ihre Telefonnummer an.',
      },
      {
        label: 'Geplante Personenanzahl (ca.)',
        type: 'number',
        id: 'people',
        required: true,
        requiredMsg: 'Bitte geben Sie eine Personenanzahl an.',
        rowStart: true,
        rowEnd: true,
        col: 5,
      },
      {
        label: 'Nachricht (optional)',
        type: 'textarea',
        id: 'message',
        required: false,
        requiredMsg: 'Bitte ausfüllen',
      },
      {
        label:
          'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
        type: 'checkbox',
        id: 'dataprotection',
        required: false,
        requiredMsg: 'Bitte ausfüllen',
      },
      {
        type: 'hidden',
        id: '_to',
        value: 'michael.ehrich@krekeny.com',
      },
      {
        type: 'hidden',
        id: '_gotcha',
      },
    ],
  },
  formReplaceValue: 'neue event id',
  formAdditionalFields: [
    {
      type: 'hidden',
      id: 'eventid',
      value: '#form-field-replace-value#',
    },
  ],
  headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
  name: 'Mit Nadine Kern & Max Mustermann',
  time: '1-4 Tage',
  shapes: [
    {
      color: 'var(--color-yellow)',
    },
    {
      color: 'var(--color-blue-medium)',
    },
  ],
  image: {
    img: '/events/authors/authors-demo.png',
    alt: 'lorem ipsum',
  },
  badge: {
    text: 'Training',
    textColor: 'var(--color-black)',
    color: 'var(--color-sunglow)',
  },
  price: 'Kostenlos',
  content:
    '<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</p><h2>Your department, current job:</h2><p>I work as a senior consultant in the Azure department. I spend most of my days together with customers in varying projects and aside to that I lead the development of gk-gab Azure Foundation product, run trainings on anything related to Azure, DevOps or Infrastructure as a Code practice and participate in the internal process development.</p><h2>That is why I chose GK-GAB:</h2><p>I was recruited by gk-gab (GAB Exactly IT back then) shortly after our family had moved to Germany, leaving our home country Finland behind. Changing to a new employer at the time we were still settling down was definitely not an easy decision to make but having former colleagues in the company and the opportunity for being a part of building a practice around the Azure technology was too tempting to turn down. And looking back the 1,5 years I have been at gk-gab, I`m happy to have made the right decision.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>',
};
