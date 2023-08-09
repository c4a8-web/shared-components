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
      icon: 'check',
      circle: true,
      color: 'var(--color-blue-jeans)',
      classes: 'icon--has-background',
      size: 'medium',
      bullet: 'Wie bewerte ich meine Workloads und setze die nächsten IT-Prioritäten fest?',
    },
    {
      icon: 'check',
      circle: true,
      color: 'var(--color-blue-jeans)',
      classes: 'icon--has-background',
      size: 'medium',
      bullet: 'Wie stelle ich sicher, dass mein Business ohne Unterbrechungen weiterläuft?',
    },
    {
      icon: 'check',
      circle: true,
      color: 'var(--color-blue-jeans)',
      classes: 'icon--has-background',
      size: 'medium',
      bullet:
        'Sollte ich den Betrieb für ein eigenes Rechenzentrum angesichts Ressourcen- und finanzieller Beschränkungen noch einmal überdenken?',
    },
    {
      icon: 'check',
      circle: true,
      color: 'var(--color-blue-jeans)',
      classes: 'icon--has-background',
      size: 'medium',
      bullet: 'Wie kann ich mein Netzwerk und meine Assets vor Angreifern schützen?',
    },
    {
      icon: 'check',
      circle: true,
      color: 'var(--color-blue-jeans)',
      classes: 'icon--has-background',
      size: 'medium',
      bullet: 'Wie investiere ich richtig, damit ich für die Zukunft besser aufgestellt bin?',
    },
    {
      icon: 'check',
      circle: true,
      color: 'var(--color-blue-jeans)',
      classes: 'icon--has-background',
      size: 'medium',
      bullet:
        'Wie kann ich sicherstellen, dass meine Mitarbeiter sich der steilen Lernkurve bei neuen Technologien anpassen?',
    },
  ],
};
