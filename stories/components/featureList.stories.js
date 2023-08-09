import { createComponent, getTitle } from '../../.storybook/templates';
import { includesfeaturelisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Feature List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const FeatureList = Template.bind({});

FeatureList.args = {
  items: [
    {
      icon: 'check-mark',
      iconSize: 'small',
      bullet: 'Wie bewerte ich meine Workloads und setze die nächsten IT-Prioritäten fest?',
    },
    {
      icon: 'check-mark',
      iconSize: 'small',
      bullet: 'Wie stelle ich sicher, dass mein Business ohne Unterbrechungen weiterläuft?',
    },
    {
      icon: 'check-mark',
      iconSize: 'small',
      bullet:
        'Sollte ich den Betrieb für ein eigenes Rechenzentrum angesichts Ressourcen- und finanzieller Beschränkungen noch einmal überdenken?',
    },
    {
      icon: 'check-mark',
      iconSize: 'small',
      bullet: 'Wie kann ich mein Netzwerk und meine Assets vor Angreifern schützen?',
    },
    {
      icon: 'check-mark',
      iconSize: 'small',
      bullet: 'Wie investiere ich richtig, damit ich für die Zukunft besser aufgestellt bin?',
    },
    {
      icon: 'check-mark',
      iconSize: 'small',
      bullet:
        'Wie kann ich sicherstellen, dass meine Mitarbeiter sich der steilen Lernkurve bei neuen Technologien anpassen?',
    },
  ],
};
