import i18n from './i18n/index.js';

import Back from './components/back.js';
import Contact from './components/contact.js';
import FabButton from './components/fab-button.js';
import FormAttachments from './components/form-attachments.js';
import Form from './components/form.js';
import GoogleMaps from './components/google-maps.js';
import JobListDetail from './components/job-list-detail.js';
import JobList from './components/job-list.js';
import TabList from './components/tab-list.js';
import TextAnimation from './components/text-animation.js';

import PageDetail from './pages/detail.js';

import Analytics from './data-an.js';
import Events from './events.js';
import Modal from './modal.js';
import State from './state.js';
import Templates from './templates.js';
import Tools from './tools.js';

const componentList = [
  Analytics,
  Back,
  Contact,
  FabButton,
  FormAttachments,
  Form,
  GoogleMaps,
  JobListDetail,
  JobList,
  TabList,
  TextAnimation,
  Modal,
  PageDetail,
];

const captureRefreshAnimateNumber = function (event) {
  if (event.detail === null) return;

  refreshAnimateNumber(event.detail.target);
};

const refreshAnimateNumber = function (parent) {
  [].forEach.call(parent?.querySelectorAll('[data-animate-number]'), (element) => {
    const values = JSON.parse(element.dataset.animateNumber);
    const duration = 1500;

    Tools.animateValue(element, values.start, values.end, duration);
  });
};

const initComponentList = function (element) {
  for (let i = 0; i < componentList.length; i++) {
    const component = componentList[i];

    component.init(element);
  }

  document.addEventListener(Events.REFRESH_ANIMATE_NUMBERS, captureRefreshAnimateNumber);

  refreshAnimateNumber(document);
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
