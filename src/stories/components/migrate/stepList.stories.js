import StepList from '../../../components/step-list';
import { getAssetPath } from '../../../../.storybook/templates';

export default {
  title: 'Components/Step List',
  component: StepList,
};

export const Default = {
  args: {
    headline: {
      text: 'Unser Bewerbungsprozess',
      level: 'h3',
    },
    subline:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
    list: [
      {
        title: 'Lorem ipsum dolor',
        content:
          'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie',
      },
      {
        title: 'Sit amet, consectet',
        content:
          'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
      },
      {
        title: 'Lorem ipsum dolor sit',
        content:
          'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie',
      },
    ],
  },
};

export const Small = {
  args: {
    variant: 'small',
    headline: {
      text: 'Experiencing & Pilot Package',
      level: 'h2',
    },
    list: [
      {
        title: 'Envisioning & Experience Workshop',
        content:
          '<ul class="dashed"> <li>AVD Architektur</li> <li>Roadmap Implementierung</li> <li>Lizenzierung</li> <li>Bewertung Benutzer & Apps (limitiert auf 3-5 Apps)</li> <li>Prod. Anforderungen & Governance</li> <li>Überprüfung des aktuellen Azure Footprint</li> <li><strong><span class="highlight-yellow">Konzept Po</span>werPoint</strong></li> </ul>',
      },
      {
        title: 'Pilot Implementaion',
        content:
          '<ul class="dashed"> <li>Pilot AVD Implementierung</li> <li>Manuelle Einrichtung eines Multisession Images mit 3 Geschäftsanwendungen</li> <li>Setup auf Basis von Best Practices für AVD Security & Networking</li> <li>Standard AVD Policies (GPOs)</li> <li>Automatische AVD Herunterskalierung</li> <li><strong>Ideal zum Te<span class="highlight-yellow">sten von Erfahrun</span>gen und Leistungen</strong></li> </ul>',
      },
      {
        step: 99,
        title: 'Roadmap to Production',
        content:
          '<ul class="dashed"> <li><strong>Ro<span class="highlight-yellow">admap zum produktiven</span> Einsatz</strong></li> <li>Präsentation der Pilot- und Testergebnisse</li> <li>Überprüfung zusätzlicher Geschäftsanwendungen</li> <li>Prozess Diskussion zu:</li> <ul class="dashed"> <li>Updates (OS & Apps)</li> <li>Monitoring</li> <li>Printing</li> </ul> </ul>',
      },
    ],
  },
};

export const SmallWithIcons = {
  args: {
    variant: 'small',
    list: [
      {
        img: getAssetPath('svg/icons/icon-hand.svg'),
        tint: true,
        alt: 'lorem ipsum dolor sit amet, consectetur adipis',
        title: 'Anmelden',
        content: '10. - 12.11.2021',
        ctaText: 'Jetzt registrieren',
        ctaHref: 'https://www.eventbrite.de/e/138562252427',
        link: true,
      },
      {
        img: getAssetPath('svg/icons/icon-consulting-services.svg'),
        alt: 'lorem ipsum dolor sit amet, consectetur adipis',
        title: 'Wo',
        content: 'Remote per Teams Meeting',
      },
      {
        img: getAssetPath('svg/icons/phone-mail.svg'),
        tint: true,
        alt: 'lorem ipsum dolor sit amet, consectetur adipis',
        title: 'Gebühr',
        content:
          '1300,00 € pro Teilnehmer<br/>(200,00 € Discount bei laufenden Projekten oder ab zwei Teilnehmern eines Unternehmens)',
      },
      {
        img: getAssetPath('svg/icons/icon-checklist-write.svg'),
        overlapping: true,
        alt: 'lorem ipsum dolor sit amet, consectetur adipis',
        title: 'Zielgruppe',
        content: 'Windows Client Architekten, Cloud Architekten, SCCM Spezialisten',
      },
    ],
  },
};
