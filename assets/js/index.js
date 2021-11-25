import Form from "./components/form.js";
import JobList from "./components/job-list.js";

import Analytics from "./analytics.js";
import State from "./state.js";
import Templates from "./templates.js";

const initSharedComponents = function () {
  window.Templates = new Templates();

  Analytics.init();
  Form.init();
  JobList.init();
};

document.addEventListener("DOMContentLoaded", (e) => {
  initSharedComponents();
});

export { Form, initSharedComponents, State };
