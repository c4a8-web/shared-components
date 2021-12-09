import i18n from './i18n/index.js';

import FormAttachments from './components/form-attachments';
import Form from './components/form.js';
import JobList from './components/job-list.js';
import JobListDetail from './components/job-list-detail.js';

import Analytics from './analytics.js';
import Modal from './modal.js';
import State from './state.js';
import Templates from './templates.js';

const componentList = [Analytics, FormAttachments, Form, JobList, JobListDetail, Modal];

const initComponentList = function (element) {
  for (let i = 0; i < componentList.length; i++) {
    const component = componentList[i];

    component.init(element);
  }
};

const initSharedComponents = function () {
  window.Templates = new Templates();

  window.i18n = new i18n();

  initComponentList();
};

document.addEventListener('DOMContentLoaded', (e) => {
  initSharedComponents();
});

export { Form, initSharedComponents, initComponentList, State };
