import { createComponent, getTitle } from '../../.storybook/templates';
import { includesapplicationformhtml as applicationFormTemplate } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Application Form',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, applicationFormTemplate);

export const ApplicationForm = Template.bind({});

ApplicationForm.args = {
  headline: 'Bewerbung auf einen tollen Job (m/w/d)',
  form: {
    cta: {
      skin: 'primary',
      width: 'w-50',
    },
    ctaText: 'Bewerbung absenden',
    method: 'post',
    action: '',
    fields: [
      {
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
      },
      {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
      },
      {
        label: 'E-Mail Adresse',
        type: 'text',
        col: 6,
        rowStart: true,
      },
      {
        label: 'Telefon',
        type: 'text',
        col: 6,
        rowEnd: true,
      },
      {
        label: 'Kündigungsfrist (optional)',
        type: 'text',
        col: 6,
        rowStart: true,
      },
      {
        label: 'Gehaltsvorstellung (optional)',
        type: 'text',
        col: 6,
        rowEnd: true,
      },
      {
        label: 'Nachricht (optional)',
        type: 'textarea',
      },
    ],
  },
};

/*

 form:
    cta:
      skin: primary is-cutoff
      width: w-50
    ctaText: Submit
    method: post
    action: ../success
    fields:
    -
      label: Company
      type: text
      id: company
      required: true
      requiredMsg: Please enter your company name.
    -
      label: First name
      type: text
      id: firstName
      required: true
      requiredMsg: Please enter your first name.
      col: 6
      rowStart: true
    -
      label: Last name
      type: text
      id: lastName
      required: true
      requiredMsg: Please enter your last name.
      col: 6
      rowEnd: true
    -
      label: Email address
      type: text
      id: email
      required: true
      requiredMsg: Please enter a valid email address.
    -
      label: Your RADIUSaaS Portal-URL
      type: text
      id: radiusURL
      required: true
      requiredMsg: Please enter your RADIUSaaS Portal-URL.
    -
      label: Subject of your support request
      id: _subject
      value: "RADIUSaas support request"
      required: true
      requiredMsg: Please enter a subject.
    -
      label: Detailed description of your support request
      type: textarea
      id: supportRequest
      required: true
      requiredMsg: Please enter a detailed description of your support request.
    -
      label: "<small>I agree to the storage of my data and have read and accepted the <a href='/en/privacy.html'>privacy policy</a>. My consent can be revoked at any time.</small>"
      type: checkbox
      id: privacy
      required: true
    -
      label: "<small>I would like to be informed by email about news, events and offers and services of glueckkanja-gab.</small>"
      type: checkbox
      id: newsletter
    -
      type: hidden
      id: _to
      value: support@radiusaas.com
    -
      type: hidden
      id: _gotcha



      */
