import { createTemplate, getTitle, getAssetPath } from '../../.storybook/templates';
import emergencyTemplate from '!!raw-loader!./emergency.html';

const options = getTitle({
  title: 'Emergency',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createTemplate(args, emergencyTemplate);

export const Emergency = Template.bind({});

Emergency.args = {
  page: {
    light: true,
    hero: {
      light: true,
      overline: 'Unter Cyberangriff?',
      headline: 'Notfall-Service',
      subline: 'Verlieren Sie keine wertvolle Zeit - handeln Sie jetzt. Wir sind 24/7 sofort erreichbar.',
      level: 'h5',
      bgColor: 'var(--color-gigas)',
      overlineBgColor: 'var(--color-orange)',
      background: {
        img: getAssetPath('svg/shapes/shape-security-eye.svg'),
        alt: 'Cloud Security Day 2023',
        spacing: 'space-top-lg-2 mt-lg-10',
      },
      cta: {
        text: 'Direkter Kontakt ins APT Response Team',
        trigger: 'modal',
        skin: 'primary',
        icon: 'emergency',
        classes: 'has-emergency-colors',
      },
    },
    modalForm: {
      form: {
        headline: 'Schicken Sie uns Ihre Nachricht!',
        subline:
          'Befinden Sie sich inmitten eines Cyber-Angriffs und suchen dringend nach Unterstützung? Bitte verwenden Sie unser Notfall-Formular, um umgehend mit einem unserer ATP Response Experten in Kontakt zu treten.',
        cta: {
          skin: 'primary',
          width: 'w-100 w-lg-30',
        },
        ctaText: 'absenden',
        method: 'POST',
        action: 'http://localhost:6006/mock/emergency.json',
        fields: [
          {
            label: 'Name*',
            type: 'text',
            id: 'name',
            required: true,
            requiredMsg: 'Bitte geben Sie Ihren Namen an.',
          },
          {
            label: 'Unternehmen*',
            type: 'text',
            id: 'company',
            required: true,
            requiredMsg: 'Bitte geben Sie Ihr Unternehmen an.',
          },
          {
            label: 'Email-Adresse*',
            type: 'email',
            id: 'email',
            required: true,
            requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
          },
          {
            label: 'Telefon*',
            type: 'phone',
            id: 'phone',
            required: true,
            requiredMsg: 'Bitte geben Sie Ihre Telefonnnummer ein.',
          },
          {
            label: 'Beschreibung Ihres Vorfalls*',
            type: 'textarea',
            id: 'message',
            required: true,
            requiredMsg: 'Bitte geben Sie eine kurze Beschreibung Ihres Vorfalls ein.',
          },
          {
            label:
              'Ihre Daten werden zur Bearbeitung und Beantwortung Ihrer Anfrage bei uns gespeichert. Weitere Informationen zum Datenschutz finden Sie in unserer <a href="/de/datenschutz">Datenschutzerklärung</a>.',
            type: 'checkbox',
            id: 'dataprotection',
            required: true,
            requiredMsg: 'Bitte bestätigen',
          },
          {
            type: 'hidden',
            id: '_subject',
            value: 'ATP Response Anfrage',
          },
          {
            type: 'hidden',
            id: 'inbox_key',
            value: 'atp-response',
          },
          {
            type: 'hidden',
            id: '_gotcha',
          },
        ],
        noCustomSubmit: true,
      },
    },
  },
  introTextCopy:
    "Basierend auf unseren Erfahrungen mit <span class='highlight'>APT Response Einsätzen</span> bei internationalen Enterprise Kunden haben wir ein <span class='highlight'>Incident Response Framework</span> entwickelt. Es ermöglicht eine schnelle <span class='highlight'>Wiederherstellung der Produktivität</span> bei maximaler Sicherheit im Notfall. Dabei entfernen wir die <span class='highlight'>Artefakte des Angriffs</span> gründlich, führen Sicherheitsscans durch, um den Zustand der Infrastruktur zu überprüfen und nutzen ein spezielles Verfahren zur <span class='highlight'>Wiederherstellung des Active Directory</span>, um eine eine Re-Infizierung auszuschliessen. So bringen wir unsere Kunden schnell wieder in den Normalbetrieb zurück.",
};
