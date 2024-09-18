import ScreenshotComponent from "../../components/screenshot";

export default {
  title: "Components/Screenshot",
  component: ScreenshotComponent,
};

export const Right = {
  args: {
    spacing: "space-top-3 space-bottom-2",
    image: "azure/cloud-trafo-assessment.png",
    source:
      "https://res.cloudinary.com/c4a8/image/upload/v1624262444/azure/cloud-trafo-assessment.png",
    sourceCaption: "Cloud Readiness Assessment",
    cloudinary: true,
    alt: "Alt text 3",
    level: "h2",
    bgColor: "#fcd116",
    headline: "Cloud Readiness Assessment",
    copy: "Die Cloud Assessment-Funktion sammelt Daten über Anwendungen und ihren Tech-Stack, um die technische Bereitschaft, den Cloud Business Value und das Migrationsrisiko zu berechnen. Mit einem umfassenden Bewertungsprozess können Sie weitreichende Migrationsentscheidungen treffen, die das Migrationsrisiko deutlich reduzieren und gleichzeitig die Geschwindigkeit erhöhen.",
  },
};

export const Left = {
  args: {
    image: "azure/reports-migration-waves.png",
    source:
      "https://res.cloudinary.com/c4a8/image/upload/v1624262444/azure/reports-migration-waves.png",
    sourceCaption: "Migration Roadmap Planning",
    left: true,
    cloudinary: true,
    alt: "Alt text 3",
    bgColor: "#5cbbff",
    level: "h2",
    headline: "Migration Roadmap Planning",
    copy: "Txture erfasst alle Anwendungen, die für einen Umzug in die Cloud in Frage kommen, und hilft Ihnen, deren Migration in Wellen zu planen. Es ist wichtig, Migrationen auf der Grundlage von Kriterien und Beziehungen zu planen. Txture macht es einfach herauszufinden, welche Anwendungen in denselben Rechenzentren betrieben werden und welche Anwendungen dieselben Cloud-Service-Provider haben, und empfiehlt dann ähnliche Migrationsstrategien und -wellen.",
    list: {
      ctaText: "Jump on the Phone",
      ctaHref: "javascript:void(0);",
      skin: "primary",
      ctaType: "button",
      target: "_blank",
      external: true,
    },
  },
};
