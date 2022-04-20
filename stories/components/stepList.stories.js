import { createComponent, getTitle } from '../../.storybook/templates';
import { includessteplisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Step List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
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
};

export const Small = Template.bind({});

// TODO manual override step count

Small.args = {
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
};
