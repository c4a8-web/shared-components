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

    this.init();
  }

  init() {
    if (!this.options) {
      this.api?.getAll();
    }
  }
}

export default JobList;
