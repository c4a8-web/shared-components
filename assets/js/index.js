import Form from "./components/form.js";

import Analytics from "./analytics.js";
import State from "./state.js";

const initSharedComponents = function () {
  Analytics.init();
  Form.init();
};

document.addEventListener("DOMContentLoaded", (e) => {
  initSharedComponents();
});

export { Form, initSharedComponents, State };
