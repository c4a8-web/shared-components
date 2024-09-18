import JobListComponent from "../../components/job-list";

// TODO fix hrefTo

export default {
  title: "Components/Job/List",
  component: JobListComponent,
  args: {
    clientName: "c4a8",
    headlineText: "Offene Stellen",
    headlineLevel: "h2",
    sublineText:
      "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in",
    detailUrl: {
      default: hrefTo("Components/Job/Detail", "De"),
      en: hrefTo("Components/Job/Detail", "En"),
    },
    lang: "de",
  },
};

export const List = {};

export const ListLimit = {
  args: {
    maxItems: 4,
    expandText: "Weitere Stellenanzeigen",
    sublineText: null,
  },
};

export const ListFilteredById = {
  args: {
    headlineText: "Einzelne Stellenausschreibung mit Id",
    jobId: "1327578",
    apiUrl: "mock/jobList.xml",
  },
};

export const ListFilteredByTags = {
  args: {
    headlineText: "Offene Microsoft Azure + Trainee Stellen",
    tags: "MicroSoft Azure,trainee",
    apiUrl: "mock/jobList.xml",
  },
};

export const ListFilteredByTeam = {
  args: {
    headlineText: "Offene Stellen in Team 1",
    team: "Projects & Account Management",
    apiUrl: "mock/jobList.xml",
  },
};

export const ListFilteredByLang = {
  args: {
    headlineText: "English Jobs",
    lang: "en",
  },
};
