import Tools from "./tools.js";
import Form from "./components/form.js";

class Analytics {
  static rootSelector = "[data-analytics]";
  static instances = [];

  constructor(root) {
    this.root = root;
    this.code = this.root.dataset.analytics;
    this.parent = Tools.getParent(this.root, Form.rootSelector);
    this.form = Form.initElement(this.parent, { noEvents: true });

    this.bindEvents();
  }

  bindEvents() {
    this.parent?.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    if (this.isFormValidated(e)) {
      this.track(undefined, () => {
        this.form.submit();
      });
    }
  }

  isFormValidated(e) {
    return this.form?.validate(e) && this.form.triggerExternalValidation();
  }

  track(url, callback) {
    Analytics.track(this.code, callback, url);
  }

  static track(code, callback, url) {
    if (window.gtag && code) {
      window.gtag("event", "conversion", {
        send_to: code,
        event_callback: callback,
      });
    } else {
      console.error("GTag not found");
    }
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default Analytics;
