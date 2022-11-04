import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialsdetailhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonials Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {};

export const TestimonialsDetail = Template.bind({});

TestimonialsDetail.args = {
  name: 'Matti Puolitaival',
  title: 'Senior Consultant Azure',
  location: 'Finnland',
  description:
    '<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</p> ',
  ...baseArgs,
  image: {
    img: 'people/testimonials/matti-puolitaival.png',
    alt: 'lorem ipsum',
  },
};

export const TestimonialsDetailSafety = Template.bind({});

TestimonialsDetailSafety.args = {
  name: 'Matti Puolitaival',
  title: 'Senior Consultant Azure',
  image: {
    img: 'people/testimonials/matti-puolitaival.png',
    alt: 'lorem ipsum',
  },
  safety: {
    headline: "Grünten - Wächter des Allgäus",
    headlineLevel: "h3",
    subline: "Grünten | Kranzegg | Allgäu",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata,",
    facts: [
      {
        contentTitle: "Lage",
        contentTitleLevel: "h4",
        content: ["Anfahrt zum Parkplatz Kammeregg (87549 Rettenberg)", "Startpunkt Alpe Kammeregg (1.079m)", "Einkehr Grüntenhütte (1.477m)", "Gipfel (Kriegerdenkmal, 1.738m)"],
      },
      {
        contentTitle: "Streckenlänge",
        contentTitleLevel: "h4",
        content: "Ca. 7,0 Kilometer",
      },
      {
        contentTitle: "Höhenmeter",
        contentTitleLevel: "h4",
        content: "659 hm",
      },
      {
        contentTitle: "Schwierigkeitsgrad",
        contentTitleLevel: "h4",
        content: "mittel",
      },
      {
        contentTitle: "Unbedingt mitnehmen",
        contentTitleLevel: "h4",
        content: ["festes Schuhwerk", "Wanderstöcke", "Winddichte Kleidung", '"Hierabiera" (Stirnlampe)'],
        img: '/people/testimonials/matti-puolitaival.png',
      },
      {
        contentTitle: "Tipp",
        contentTitleLevel: "h4",
        content: ["Zum Sonnenaufgang am Gipfel sein"]
      }
    ]
  }
}
