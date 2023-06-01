import { createComponent, getTitle } from '../../.storybook/templates';
import { includesquoteshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Quotes',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Long = Template.bind({});

Long.args = {
  quotes: {
    headline: 'Das sagen unsere Kunden',
    level: 'h3',
    items: [
      {
        // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        text: 'Die Entscheidung für einen Wechsel in die Azure Cloud wurde maßgeblich durch den Dialog mit glueckkanja-gab vorangetrieben. Neben einer insgesamt kosteneffizienten Cloud-Infrastruktur haben wir zusammen mit unserem 100 % Cloud Modern Desktop einen Arbeitsplatz geschaffen, mit dem wir unsere Geschäftsanwender schnell, sicher und flexibel unterstützen können.',
        name: 'Patrick Lange',
        company: 'Franz Haniel & Cie. GmbH',
        img: '/testimonals/patrick-lange.jpg',
        alt: 'Patrick Lange',
      },
      {
        // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet',
        text: 'Für eine sich so schnell verändernde Branche und insbesondere für unser Uniper Business ist Microsoft 365 die richtige Wahl, da es einzigartige Möglichkeiten in Bezug auf Skalierbarkeit, Performance und Sicherheit der Plattform bietet und mit glueckkanja-gab haben wir den Partner gefunden, um das Beste aus dieser Technologie herauszuholen.',
        name: 'Hans Pezold',
        company: 'Uniper SE',
        img: '/testimonals/hans-pezold.jpg',
        alt: 'Hans Pezold',
      },
      {
        // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        text: 'Der sichere, moderne digitale Arbeitsplatz für Kommunikation & Zusammenarbeit kann von überall und von jedem Gerät aus genutzt werden, das in der Cloud läuft. Seit wir diesen Client betreiben, hatten wir im Vergleich zu unserer bestehenden Plattform keinen einzigen Sicherheitsvorfall auf all diesen neuen Geräten.',
        name: 'Stefan Haas',
        company: 'Schenker AG',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Stefan Haas',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        name: 'Lorem ipsum dolor sit',
        company: 'Lorem ipsum dolor sit',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Lorem ipsum dolor sit',
      },
    ],
  },
};

export const Short = Template.bind({});

Short.args = {
  quotes: {
    headline: 'Das sagen unsere Kunden',
    level: 'h3',
    items: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        name: 'Patrick Lange',
        company: 'Franz Haniel & Cie. GmbH',
        img: '/testimonals/patrick-lange.jpg',
        alt: 'Patrick Lange',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        name: 'Lorem ipsum dolor sit',
        company: 'Lorem ipsum dolor sit',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Lorem ipsum dolor sit',
      },
    ],
  },
};

export const NoImage = Template.bind({});

NoImage.args = {
  quotes: {
    items: [
      {
        text: 'Mit ‚My Workplace‘ und den darin enthaltenen Microsoft Technologien haben alle unsere Standorte heute die gleichen State-of-the-Art Modern-Workplace Lösungen im Einsatz.',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG',
      },
      {
        text: 'Mit ‚My Workplace‘ und den darin enthaltenen Microsoft Technologien haben alle unsere Standorte heute die gleichen State-of-the-Art Modern-Workplace Lösungen im Einsatz.',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG',
      },
    ],
  },
};

export const FooterImage = Template.bind({});

FooterImage.args = {
  quotes: {
    footerImage: [
      {
        image: 'logos/msft-misa-mxdr.png',
        alt: 'msft-misa-mxdr',
      },
      {
        image: 'logos/msft-misa-mxdr.png',
        alt: 'msft-misa-mxdr',
      },
      {
        image: 'logos/div-cyberwehr.png',
        alt: 'star',
      },
    ],
    items: [
      {
        text: 'Mit ‚My Workplace‘ und den darin enthaltenen Microsoft Technologien haben alle unsere Standorte heute die gleichen State-of-the-Art Modern-Workplace Lösungen im Einsatz.',
      },
      {
        text: 'Mit ‚My Workplace‘ und den darin enthaltenen Microsoft Technologien haben alle unsere Standorte heute die gleichen State-of-the-Art Modern-Workplace Lösungen im Einsatz.',
      },
    ],
  },
};
