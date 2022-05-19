// comment out dev version for debugging
// import './lib/vue/vue.global.js';
import './lib/vue/vue.global.prod.js';

import Cta from './vue/cta.js';
import Faq from './vue/faq.js';
import FormAttachments from './vue/form-attachments.js';
import FormCheckbox from './vue/form-checkbox.js';
import FormCheckboxes from './vue/form-checkboxes.js';
import FormFields from './vue/form-fields.js';
import FormSelect from './vue/form-select.js';
import Form from './vue/form.js';
import Headline from './vue/headline.js';
import Icon from './vue/icon.js';
import JobListDetail from './vue/job-list-detail.js';
import JobListEntry from './vue/job-list-entry.js';
import JobList from './vue/job-list.js';
import ArrowExternal from './vue/icons/arrow-external.js';
import ArrowNarrow from './vue/icons/arrow-narrow.js';
import Arrow from './vue/icons/arrow.js';
import Close from './vue/icons/close.js';
import ComputerShield from './vue/icons/computer-shield.js';
import PhoneMail from './vue/icons/phone-mail.js';
import Rocket from './vue/icons/rocket.js';
import Smile from './vue/icons/smile.js';
import Modal from './vue/modal.js';
// import PersonQuote from './vue/person-quote.js';

let root = document.querySelector('#app');
let app;

const addApp = () => {
  if (!root) return;

  app = Vue.createApp({
    mounted() {
      const customEvent = new CustomEvent('VUE_IS_MOUNTED', {});

      document.dispatchEvent(customEvent);
    },
  });

  const components = [
    Cta,
    Faq,
    FormAttachments,
    FormCheckbox,
    FormCheckboxes,
    FormFields,
    FormSelect,
    Form,
    Headline,
    Icon,
    JobListDetail,
    JobListEntry,
    JobList,
    ArrowExternal,
    ArrowNarrow,
    Arrow,
    Close,
    ComputerShield,
    PhoneMail,
    Rocket,
    Smile,
    Modal,
    // PersonQuote,
  ];

  components.forEach((component) => {
    app.component(component.tagName, component);
  });

  // TODO figure out how to get all of them
  const illegalTags = root.querySelectorAll('style');

  illegalTags.forEach((element) => {
    document.body.appendChild(element);
  });

  app.mount(root);

  window.vApp = app;
};

const VueSetup = () => {
  if (!root) root = document.querySelector('.shared-components');
  if (root?.dataset.vApp !== undefined) return;

  addApp();
};

document.addEventListener('VUE_FORCE_UPDATE', () => {
  root = document.querySelector('.shared-components');

  addApp();
});

export default VueSetup;
