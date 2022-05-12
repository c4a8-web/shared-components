import i18n from './i18n/index.js';
import VueSetup from './vue-setup.js';

const handleLoadingError = function (error) {
  console.error('There was an issue loading a component. It might be blocked my an Adblock Script.', error);
};

const Form = import('./components/form.js')
  .then((module) => {
    return module.default;
  })
  .catch(handleLoadingError);

import Events from './events.js';
import State from './state.js';
import Tools from './tools.js';

let componentLoaadingList;

const componentList = [
  import('./data-an.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/back.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/back-to-top.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/contact.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/fab-button.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/form-attachments.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  Form,
  import('./components/google-maps.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/tab-list.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/text-animation.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./modal.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./pages/detail.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
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
  for (let i = 0; i < componentLoaadingList.length; i++) {
    const component = componentLoaadingList[i];

    if (component && component.init) {
      component.init(element);
    }
  }

  document.addEventListener(Events.REFRESH_ANIMATE_NUMBERS, captureRefreshAnimateNumber);

  refreshAnimateNumber(document);
};

const loadComponents = function () {
  Promise.all(componentList).then((data) => {
    componentLoaadingList = data;

    initComponentList();
  });
};

const initSharedComponents = function () {
  window.i18n = new i18n();

  VueSetup();
};

document.addEventListener('DOMContentLoaded', (e) => {
  initSharedComponents();
});

document.addEventListener('VUE_IS_MOUNTED', (e) => {
  loadComponents();
});

export { Form, initSharedComponents, initComponentList, State };
