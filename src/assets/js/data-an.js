// File name was changed because of u-block thinking this is a bad file
import Tools from './tools.js';
import Form from './components/form.js';

class Analytics {
  static rootSelector = '[data-analytics]';
  static instances = [];

  constructor(root) {
    this.root = root;
    this.code = this.root.dataset.analytics;
    this.parent = Tools.getParent(this.root, Form.rootSelector);
    this.formInstance = Form.initElement(this.parent, { noEvents: true });
    this.form = this.formInstance?.form;

    this.bindEvents();
  }

  isInForm() {
    return this.form ? true : false;
  }

  bindEvents() {
    if (this.isInForm()) {
      this.form?.addEventListener('submit', this.handleSubmit.bind(this));
    } else {
      this.root.addEventListener('click', this.handleClick.bind(this));
    }
  }

  handleClick() {
    this.track(undefined, () => {});
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
    return this.formInstance?.validate(e) && this.formInstance.triggerExternalValidation();
  }

  track(url, callback) {
    Analytics.track(this.code, callback, url);
  }

  static isGALoaded() {
    return dataLayer.filter(item => item.event === 'gtm.dom').length > 0;
  }

  static track(code, callback, url) {
    if (window.gtag && code && Analytics.isGALoaded()) {
      window.gtag('event', 'conversion', {
        send_to: code,
        event_callback: callback,
      });

    } else {
      console.error('GTag not found or Collect not loaded');
      callback();
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
