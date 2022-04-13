import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonials',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Testimonials = Template.bind({});

Testimonials.args = {
  testimonials: {
    headline: 'Das sagen unsere Kunden',
    level: 'h3',
    items: [
      {
        text: 'Die Entscheidung für einen Wechsel in die Azure Cloud wurde maßgeblich durch den Dialog mit glueckkanja-gab vorangetrieben. Neben einer insgesamt kosteneffizienten Cloud-Infrastruktur haben wir zusammen mit unserem 100 % Cloud Modern Desktop einen Arbeitsplatz geschaffen, mit dem wir unsere Geschäftsanwender schnell, sicher und flexibel unterstützen können.',
        name: 'Patrick Lange',
        company: 'Franz Haniel & Cie. GmbH',
        img: '/testimonals/patrick-lange.jpg',
        alt: 'Patrick Lange',
      },
      {
        text: 'Für eine sich so schnell verändernde Branche und insbesondere für unser Uniper Business ist Microsoft 365 die richtige Wahl, da es einzigartige Möglichkeiten in Bezug auf Skalierbarkeit, Performance und Sicherheit der Plattform bietet und mit glueckkanja-gab haben wir den Partner gefunden, um das Beste aus dieser Technologie herauszuholen.',
        name: 'Hans Pezold',
        company: 'Uniper SE',
        img: '/testimonals/hans-pezold.jpg',
        alt: 'Hans Pezold',
      },
      {
        text: 'Der sichere, moderne digitale Arbeitsplatz für Kommunikation & Zusammenarbeit kann von überall und von jedem Gerät aus genutzt werden, das in der Cloud läuft. Seit wir diesen Client betreiben, hatten wir im Vergleich zu unserer bestehenden Plattform keinen einzigen Sicherheitsvorfall auf all diesen neuen Geräten.',
        name: 'Stefan Haas',
        company: 'Schenker AG',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Stefan Haas',
      },
    ],
  },
};

export const NoImage = Template.bind({});

NoImage.args = {
  testimonials: {
    items: [
      {
        text: 'Mit ‚My Workplace‘ und den darin enthaltenen Microsoft Technologien haben alle unsere Standorte heute die gleichen State-of-the-Art Modern-Workplace Lösungen im Einsatz.',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG',
      },
    ],
  },
};
