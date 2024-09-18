import JobListDetail from "../../components/job-list-detail";

export default {
  title: "Components/Job/Detail",
  component: JobListDetail,
};

const baseArgs = {
  clientName: "c4a8",
  jobId: "1327578", // pick an active jobId for api testing like 1335399
  apiUrl: "mock/jobList.xml", // set to null for api testing
  // apiKey: process.env.STORYBOOK_PERSONIO_API_KEY, // comment out for api testing
  base: {
    ctaText: "Jetzt bewerben",
    ctaButton: true,
  },
  form: {
    headline: "Bewerbungsformular (m/w/d)",
    cta: {
      skin: "primary",
      width: "w-100 w-lg-30",
    },
    ctaText: "Bewerbung absenden",
    method: "post",
    action: "",
    fields: [
      {
        label: "Vorname",
        type: "text",
        col: 6,
        rowStart: true,
        required: true,
        id: "firstName",
      },
      {
        label: "Nachname",
        type: "text",
        col: 6,
        rowEnd: true,
        required: true,
        id: "lastName",
      },
      {
        label: "E-Mail Adresse",
        type: "email",
        col: 6,
        rowStart: true,
        required: true,
        id: "email",
      },
      {
        label: "Telefon",
        type: "text",
        col: 6,
        rowEnd: true,
        required: true,
        id: "phone",
      },
      {
        label: "Kündigungsfrist (optional)",
        type: "text",
        col: 6,
        rowStart: true,
        id: "cancellation",
      },
      {
        label: "Gehaltsvorstellung (optional)",
        type: "text",
        col: 6,
        rowEnd: true,
        id: "salary",
      },
      {
        label: "Link zum Portfolio",
        type: "text",
        col: 6,
        rowStart: true,
        id: "2516986", // id from the custom_attribute_2516986
        showIn: ["1335399"],
      },
      {
        label: "Nachricht (optional)",
        type: "textarea",
        id: "message",
      },
      {
        type: "file",
        col: 12,
        rowStart: true,
        rowEnd: true,
        formAttachments: {
          required: true,
          requiredMsg: "Bitte einen Anhang hinzufügen",
          id: "file",
          description: "Anhänge wie Lebenslauf und Anschreiben hinzufügen",
          text: "Oder Dateien auswählen",
          extensions: ["pdf"],
          maxSize: 20000000,
        },
      },
      {
        label:
          "<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",
        type: "checkbox",
        id: "privacy",
        required: true,
      },
    ],
  },
  personQuote: {
    img: "career/remote-working.png",
    text: "Viel geiler geht’s nicht, aber wir arbeiten daran. Neun firmenübergreifende Teams arbeiten an Themen wie ganzheitlichen Angeboten für unsere Kunden und gemeinsamen Projektbörsen sowie Produktentwicklung. Endlich mit Profis!",
    name: "Jochen, dein neuer Kollege",
  },
  googleMaps: {
    headline: {
      text: "Hier sind wir",
      level: "h3",
    },
    address: {
      name: "glueckkanja AG",
      street: "Kaiserstraße 39",
      postalCode: "63065",
      city: "Offenbach am Main",
    },
  },
  modalSuccess: {
    cta: {
      skin: "primary",
      width: "w-100 w-lg-30",
      text: "Schließen",
    },
    headline: {
      text: "Vielen Dank",
    },
    subline:
      "Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.",
    subheadline: {
      text: "So geht es nun weiter",
    },
    text: "Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann",
  },
  modalError: {
    cta: {
      skin: "primary",
      width: "w-100 w-lg-30",
      text: "Schließen",
    },
    headline: {
      text: "Ooops!",
    },
    subline: "Etwas ist schief gelaufen!",
    text: "Bitte versuche es später noch einmal oder kontaktiere uns unter:",
    mail: "info@glueckkanja.de",
    phone: "+49 69 4005520",
  },
};
export const De = {
  args: {
    ...baseArgs,
  },
};

export const En = {
  args: {
    ...baseArgs,
    jobId: "1327578",
    apiUrl: "mock/jobListEn.xml",
  },
};

// TODO figure out how to have an example that will work even though the job not be found
// export const Unsolicited = {
//   args: {
//     ...baseArgs,
//     // jobId: '1338121',
//     apiKey: process.env.STORYBOOK_PERSONIO_API_KEY,
//     apiUrl: null,
//   },
// };

export const WithVideo = {
  args: {
    ...baseArgs,
    jobId: "videoInner",
  },
};

export const ErrorGeneric = {
  args: {
    ...baseArgs,
    jobId: "1327578",
    apiUrl: "mock/jobListEn.xml",
    mockApplyUrl: "mock/jobApplyError.json",
    mockDocumentsUrl: "mock/jobDocumentsError500.json",
  },
};

export const ErrorFileSize = {
  args: {
    ...baseArgs,
    jobId: "1327578",
    apiUrl: "mock/jobListEn.xml",
    mockApplyUrl: "mock/jobApplyError.json",
    mockDocumentsUrl: "mock/jobDocumentsError413.json",
  },
};
