import FeatureListComponent from "../../components/feature-list";

export default {
  component: FeatureListComponent,
  argTypes: {
    items: {
      description: "A list of Features",
      type: "array",
    },
  },
  title: "Components/Feature List",
};

export const FeatureList = {
  args: {
    items: [
      {
        bullet:
          "Wie bewerte ich meine Workloads und setze die nächsten IT-Prioritäten fest?",
      },
      {
        bullet:
          "Wie stelle ich sicher, dass mein Business ohne Unterbrechungen weiterläuft?",
      },
      {
        bullet:
          "Sollte ich den Betrieb für ein eigenes Rechenzentrum angesichts Ressourcen- und finanzieller Beschränkungen noch einmal überdenken?",
      },
      {
        bullet:
          "Wie kann ich mein Netzwerk und meine Assets vor Angreifern schützen?",
      },
      {
        bullet:
          "Wie investiere ich richtig, damit ich für die Zukunft besser aufgestellt bin?",
      },
      {
        bullet:
          "Wie kann ich sicherstellen, dass meine Mitarbeiter sich der steilen Lernkurve bei neuen Technologien anpassen?",
      },
    ],
  },
};
