import { createComponent, getTitle } from '../../.storybook/templates';
import { includescheckcardhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Check Card',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const CheckCard = Template.bind({});

CheckCard.args = {
  headline: 'Wir checken jetzt ihre IT-Sicherheit on Premises und in der Cloud',
  level: 'h2',
  headlineClasses: 'text-black',
  subline:
    "<strong>In Zusammenarbeit mit Microsoft sind verschiedene </strong>Video Casestudies im Rahmen useres '100% Cloud' Blueprints entstanden. Erfahren Sie mehr über die glueckkanja-gab Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung",
};

export const Products = Template.bind({});

Products.args = {
  comparison: true,
  headline: 'Plan comparison',
  level: 'h2',
  headlineClasses: 'bold text-black',
};
