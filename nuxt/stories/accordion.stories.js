import AccordionComponent from '../components/accordion.vue';

export default {
  component: AccordionComponent,
  argTypes: {
    accordion: {
      description: 'Object of the Accordion',
      control: 'object',
      required: true,
    },
    'accordion.headline': {
      description: 'The Headline of the Accordion',
      type: 'string',
    },
  },
  title: 'Components/Accordion',
};

export const Default = {
  args: {
    accordion: {
      headline: 'Features of the Admin Portal',
      id: 'featureAccordion',
      tabs: [
        {
          headline: 'WIFI and LAN policy creation 1',
          content:
            '<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>',
          expanded: true,
          image: 'security/CSOC-Services-Incident-Response.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation 2',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Threat-Intelligence.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation 3',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-SOAR.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation 4',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Analysis-Reporting.png',
          alt: 'WIFI and LAN policy creation',
        },
      ],
    },
  },
};

export const Image = {
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'security/CSOC-Services-Default.png',
      alt: 'Products',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [
        {
          headline: 'WIFI and LAN policy creation',
          content:
            'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
          expanded: true,
          image: 'security/CSOC-Services-Incident-Response.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Threat-Intelligence.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation (default image)',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-SOAR.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Analysis-Reporting.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'Active Threat Hunting',
          content:
            '<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>',
          image: 'security/CSOC-Services-Active-Threat-Hunting.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'Continuous Improvement & Reporting',
          content:
            '<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>',
          image: 'security/CSOC-Services-Continous-Improvement.png',
          alt: 'WIFI and LAN policy creation',
        },
      ],
    },
  },
};

export const ImageShadowless = {
  args: {
    shadowless: true,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/products/radius/radius-wifi-lan-policy.gif',
      alt: 'Products',
      cloudinary: true,
      headline: 'Features of the Admin Portal',
      headlineClasses: 'h3-font-size',
      id: 'featureAccordion',
      tabs: [
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          expanded: true,
          image: '/products/radius/radius-wifi-lan-policy.gif',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: '/products/radius/radius-logs.gif',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: '/products/radius/radius-wifi-lan-policy.gif',
          alt: 'WIFI and LAN policy creation',
        },
      ],
    },
  },
};

export const Collapsed = {
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'security/CSOC-Services-Default.png',
      alt: 'Products',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [
        {
          headline: 'WIFI and LAN policy creation',
          content:
            'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Incident-Response.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Threat-Intelligence.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation (default image)',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-SOAR.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI und LAN policies',
          image: 'security/CSOC-Services-Analysis-Reporting.png',
          alt: 'WIFI and LAN policy creation',
        },
      ],
    },
  },
};

export const AnimatedImage = {
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'products/konnekt/konnekt-drive-letter.webp',
      animated: true,
      alt: 'Products',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [
        {
          headline: 'Animated Webp',
          content:
            'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
          expanded: true,
          image: 'products/konnekt/konnekt-drive-letter.webp',
          cloudinary: true,
          alt: 'WIFI and LAN policy creation',
          animated: true,
        },
        {
          headline: 'Normal Webp',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: '/products/konnekt/konnekt-hero-image.webp',
          cloudinary: true,
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation (default image)',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-SOAR.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'WIFI and LAN policy creation',
          content: 'Easy download of XML files to generate WIFI and LAN policies',
          image: 'security/CSOC-Services-Analysis-Reporting.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'Active Threat Hunting',
          content:
            '<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>',
          image: 'security/CSOC-Services-Active-Threat-Hunting.png',
          alt: 'WIFI and LAN policy creation',
        },
        {
          headline: 'Continuous Improvement & Reporting',
          content:
            '<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>',
          image: 'security/CSOC-Services-Continous-Improvement.png',
          alt: 'WIFI and LAN policy creation',
        },
      ],
    },
  },
};

export const SvgToPixel = {
  args: {
    accordion: {
      headline: 'Vorteile von AzERE',
      subline:
        'Mit AzERE bauen wir eine Disaster Recovery Infrastruktur für geschäftskritische Tools und Services auf, um diese im Falle einer erfolgreichen Cyberattacke schnell und automatisiert wiederherstellen zu können. Damit ist euer Unternehmen für das Worst-Case-Szenario abgesichert. Euer Vorteil: Ihr schont eure Nerven und könnt wieder ruhig schlafen.',
      id: 'featureAccordion',
      image: '/azure/icon-azere-dark-tenant.png',
      tabs: [
        {
          headline: 'Unabhängige, entkoppelte Umgebung',
          content:
            'Keine Chance für Lateral Movement: Eine isolierte Backup-Umgebung bewahrt kritische Anwendungen und Daten vor der Ausbreitung einer potenziellen Attacke.',
          expanded: true,
          image: '/azure/icon-azere-dark-tenant.svg',
          alt: 'Eine isolierte Backup-Umgebung',
        },
        {
          headline: 'Kommunikationsplattform für Notfälle',
          content:
            'Schneller Informationsaustausch ist das A und O in Krisensituationen: Die sofortige Bereitstellung wichtiger Kommunikationstools wie Teams und Exchange für bestimmte Benutzergruppen gewährleistet die Geschäftskontinuität.',
          expanded: false,
          image: '/azure/icon-azere-war-room-communication.svg',
          alt: 'Schneller Informationsaustausch in Krisensituationen',
        },
        {
          headline: 'Geschützter Datenspeicher',
          content:
            'Die Integrität und Verfügbarkeit von wichtigen Dokumenten und Daten ist essenziell für die Wiederherstellung im Katastrophenfall. Ein unveränderlicher, versionierter Speicher stellt genau das sicher.',
          expanded: false,
          image: '/azure/icon-azere-protected-data-storage.svg',
          alt: 'Ein unveränderlicher, versionierter Speicher',
        },
        {
          headline: 'Autonome Wiederherstellung',
          content:
            'Abhängigkeiten führen zu Fehlerpotential. AzERE verfügt deshalb über eine saubere und sichere Infrastruktur zur Wiederherstellung wichtiger Anwendungen und Daten, ohne dafür andere Systeme, Tools oder Prozesse zu benötigen.',
          expanded: false,
          image: '/azure/icon-azere-ground-zero-environment.svg',
          alt: 'Autonome Wiederherstellung',
        },
        {
          headline: 'Monatliche Fire Tests',
          content:
            'Das beste System ist wirkungslos, wenn es nicht funktioniert. Aus diesem Grund testen wir regelmäßig die Konsistenz der Sicherungsdaten und trainieren die Wachsamkeit aller Beteiligten im Sicherungs- und Wiederherstellungsprozess.',
          expanded: false,
          image: '/azure/icon-azere-monthly-fire-tests.svg',
          alt: 'Monatliche Fire Tests',
        },
      ],
    },
  },
};
