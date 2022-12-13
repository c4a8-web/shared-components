import { createComponent, getTitle } from '../../.storybook/templates';
import { includestestimonialsdetailhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonials Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  name: 'Matti Puolitaival',
  title: 'Senior Consultant Azure',
  location: 'Finnland',
};

export const TestimonialsDetail = Template.bind({});

TestimonialsDetail.args = {
  ...baseArgs,
  description:
    '<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</p> ',
  image: {
    img: 'people/testimonials/matti-puolitaival.png',
    alt: 'lorem ipsum',
  },
};

export const TestimonialsDetailColor = Template.bind({});

TestimonialsDetailColor.args = {
  ...baseArgs,
  description:
    '<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</p> ',
  detailColor: '--color-green',
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
  description:
    '<p>Wer auf der Autobahn in Richtung Allgäu fährt, entdeckt ihn sofort: den Grünten, Wächter des Allgäus und Kranzeggs markanter Hausberg mit dem knapp 100 m hohen Sendemast des Bayerischen Rundfunks. Zwei unterschiedliche Wanderrouten stehen Naturliebhabern, die sensationelle optische Eindrücke und die Stille der Natur suchen, hier zur Auswahl. </p> <h2>Wandern mit Allgäuer Dialekt.</h2> <p>Los geht’s am besten ganz klassisch noch vor dem Frühstück mit umgeschnallter Hierabiera (Allgäuer Dialekt für Stirnlampe) von der Alpe Kammeregg aus. Die erste Route führt über einen geteerten Weg bis hoch zur Grüntenhütte. Auf Route Nummer 2 wandert man querfeldein mitten durch Wald, über lauschige Wiesen und vorbei an romantischen Bächlein, bis man etwas oberhalb der Grüntenhütte herauskommt. Ein idealer Spot für einen kleinen Vesper (Allgäuer Dialekt für Brotzeit) mit tollem Blick ins Tal. Frisch gestärkt kann man von hier aus dann über einen Schotter-Pfad die Gipfelstation erreichen. Vor allem auf dem letzten Abschnitt ist aber Trittsicherheit gefragt: kurz vor dem Gipfel werden die Wege nämlich sehr schmal. Wer mag, kann hier auch ein wenig kraxeln (Allgäuer Dialekt für… na, das wissen Sie aber, oder!). Auf den Gipfel rauf geht’s über eine Steintreppe. Hier oben gibt’s als Belohnung dann nicht nur das imposante Jägerdenkmal, sondern auch einen einmaligen 360-Grad-Blick auf das gesamte Allgäu, glutroten Sonnenaufgang inklusive. </p> <h2>GUT ZU WISSEN!</h2> <h4>Lage: </h4> <ul class="richtext"> <li>Anfahrt zum Parkplatz Kammeregg, 87549 Rettenberg</li> <li>Startpunkt Alpe Kammeregg (1.079 m)</li> <li>Einkehr Grüntenhütte (1.477 m) </li> <li>Gipfel (Kriegerdenkmal, 1.738 m) </li> </ul> <h4>Streckenlänge: </h4> <ul class="richtext"> <li>Ca. 7,0 Kilometer</li> </ul> <h4>Höhenmeter: </h4> <ul class="richtext"> <li>659 hm</li> </ul> <h4>Schwierigkeitsgrad: </h4> <ul class="richtext"> <li>mittel</li> </ul> <h4>Unbedingt mitnehmen: </h4> <ul class="richtext"> <li>festes Schuhwerk </li> <li>Wanderstöcke </li> <li>Winddichte Kleidung </li> <li>Hierabiera (Stirnlampe) </li> </ul> <h4>Tipp: </h4> <ul class="richtext"> <li>Zum Sonnenaufgang am Gipfel sein</li> </ul> <div class="row mb-5"> <div class="col-md p-1"> </div> <div class="col-md p-1"> </div> </div> <h4>Linkliste</h4> <a href="https://www.alpsee-gruenten.de/urlaub-im-allgaeu/gruenten.html">Der Grünten: Wächter des Allgäus (alpsee-gruenten.de) </a>',
};
