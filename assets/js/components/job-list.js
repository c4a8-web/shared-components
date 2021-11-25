import BaseComponent from "./base-component.js";
import RecruiterBox from "../recruiter-box.js";

class JobList extends BaseComponent {
  static rootSelector = ".job-list";

  constructor(root, options) {
    super(root, options);

    this.api = new RecruiterBox({
      ...this.options,
      client_name: this.root.dataset.id,
    });

    this.templates = window.Templates;

    this.init();
  }

  init() {
    if (!this.options) {
      this.api
        ?.getAll()
        .then((response) => response.json())
        .then((data) => {
          console.log("JobList ~ .then ~ data", data);
          const promiseList = [];

          for (let i = 0; i < data.objects?.length; i++) {
            const entry = data.objects[i];
            const { city } = entry?.location;
            const { title } = entry;

            const entryData = {
              city,
              title,
            };

            promiseList.push(
              this.templates?.load("job-list-entry", entryData).then((html) => {
                this.templates?.append(this.root, html);
              })
            );
          }
          Promise.all(promiseList).then(() => {
            console.log("alle jobs geladen");
          });
        })
        .catch((error) => {
          console.error("Job-list Error:", error);
        });
    }
  }
}

export default JobList;
