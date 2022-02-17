import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includestextimagehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Text Image',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Right = Template.bind({});

Right.args = {
  image: getAssetPath('svg/icons/icon-consulting-services.svg'),
  alt: 'Consulting Services',
  headline: 'Consulting Services',
  offset: true,
  // list: [
  //   {
  //     ctaText: 'Modern Workplace',
  //     ctaHref: '/de/modern-workplace/consulting-services',
  //     link: true,
  //   },
  //   {
  //     ctaText: 'Azure',
  //     ctaHref: '/de/azure/azure-consulting',
  //     link: true,
  //   },
  //   {
  //     ctaText: 'Security',
  //     ctaHref: '/de/security/security-consulting',
  //     link: true,
  //   },
  // ], // TODO comment in after cta-list is migrated
  copy: 'Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist.',
};

export const JobApplication = Template.bind({});

JobApplication.args = {
  image: getAssetPath('svg/icons/icon-hand.svg'),
  left: true,
  bgColor: 'var(--color-text-image-background)',
  white: true,
  copy: 'Komm zu uns, anderes Wording natürlich. Abschließende prominente Aufforderung die Stellenseite zu besuchen',
  copyClasses: 'h2-font-size',
  firstColWidth: 5,
  secondColWidth: 7,
  reduceSpacing: true,
  cta: {
    text: 'Initiativbewerbung',
    trigger: 'modal',
  },
  modal: {
    apiUrl: 'mock/job.json',
    clientName: 'glueckkanja',
    jobId: 'fk0slx5',
    form: {
      headline: 'Bewerbungsformular (m/w/d)',
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
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
          required: true,
          id: 'firstName',
        },
        {
          label: 'Nachname',
          type: 'text',
          col: 6,
          rowEnd: true,
          required: true,
          id: 'lastName',
        },
        {
          label: 'E-Mail Adresse',
          type: 'email',
          col: 6,
          rowStart: true,
          required: true,
          id: 'email',
        },
        {
          label: 'Telefon',
          type: 'text',
          col: 6,
          rowEnd: true,
          required: true,
          id: 'phone',
        },
        {
          label: 'Kündigungsfrist (optional)',
          type: 'text',
          col: 6,
          rowStart: true,
          id: 'cancellation',
        },
        {
          label: 'Gehaltsvorstellung (optional)',
          type: 'text',
          col: 6,
          rowEnd: true,
          id: 'salary',
        },
        {
          label: 'Nachricht (optional)',
          type: 'textarea',
          id: 'message',
        },
        {
          type: 'file',
          col: 6,
          rowStart: true,
          rowEnd: true,
          formAttachments: {
            required: true,
            requiredMsg: 'Bitte einen Anhang hinzufügen',
            id: 'file',
            description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
            text: 'Oder Datei auswählen',
            extensions: ['pdf'],
            maxSize: 10000000,
          },
        },
        {
          label:
            "<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",
          type: 'checkbox',
          id: 'privacy',
          required: true,
        },
      ],
    },
    success: {
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
        text: 'Schließen',
      },
      headline: {
        text: 'Vielen Dank',
      },
      subline:
        'Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.',
      subheadline: {
        text: 'So geht es nun weiter',
      },
      text: 'Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann',
    },
  },
  // TODO add icon with animations
};

export const LeftFloating = Template.bind({});

LeftFloating.args = {
  image: getAssetPath('svg/products/protection-shield.svg'),
  imagePreset: 'textImageFloatingSmallSquare',
  imageClasses: 'center',
  headline: 'Why authenticate with certificates to access the network?',
  level: 'h2',
  spacing: 'space-bottom-2 space-bottom-lg-3',
  left: true,
  float: true,
  copy: 'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.',
};
