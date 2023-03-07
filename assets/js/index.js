import i18n from './i18n/index.js';
import VueSetup from './vue-setup.js';

import Events from './events.js';
import State from './state.js';
import Tools from './tools.js';

const handleLoadingError = function (error) {
  console.error('There was an issue loading a component. It might be blocked by an Adblock Script.', error);
};

const handleAdBlockerError = function (error) {
  console.error('This issue is propably caused by an AdBlocker', error);

  const customEvent = new CustomEvent(Events.AD_BLOCK_INFO, {});

  document.dispatchEvent(customEvent);
};

const Form = import('./components/form.js')
  .then((module) => {
    return module.default;
  })
  .catch(handleLoadingError);

let componentLoadingList;

const componentList = [
  import('./analytics.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleAdBlockerError),
  import('./anchor.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./data-an.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./sticky-scroller.js') // needs to load early
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./toggle-switch.js')
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
  import('./components/hero-text-image.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/pricing-slider.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/tab-list.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/tag-cloud.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/testimonial-list.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/text-animation.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./components/video-frame.js')
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

// TODO figure out why this does not work in storybook but works in jekyll
// const componentPathList = [
//   // './anchor.js',
//   // './data-an.js',
//   // './sticky-scroller.js',
//   // './toggle-switch.js',
//   // './components/back.js',
//   // './components/back-to-top.js',
//   // './components/contact.js',
//   // './components/fab-button.js',
//   // './components/form-attachments.js',
//   // './components/google-maps.js',
//   // './components/hero-text-image.js',
//   // './components/pricing-slider.js',
//   // './components/tab-list.js',
//   // './components/tag-cloud.js',
//   // './components/testimonial-list.js',
//   // './components/text-animation.js',
//   // './components/video-frame.js',
//   // './modal.js',
//   // './pages/detail.js',
// ];

// componentPathList.forEach((path) => {
//   componentList.push(
//     import(path)
//       .then((module) => {
//         return module.default;
//       })
//       .catch(handleLoadingError)
//   );
// });

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

const loadThemeComponents = function () {
  const customEvent = new CustomEvent('SHARED_COMPONENTS_READY', {});

  document.dispatchEvent(customEvent);
};

const initComponentList = function (element) {
  for (let i = 0; i < componentLoadingList.length; i++) {
    const component = componentLoadingList[i];

    if (component && component.init) {
      component.init(element);
    }
  }

  document.addEventListener(Events.REFRESH_ANIMATE_NUMBERS, captureRefreshAnimateNumber);

  refreshAnimateNumber(document);
  loadThemeComponents();
};

const loadComponents = function () {
  Promise.all(componentList).then((data) => {
    componentLoadingList = data;

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

window.addEventListener('scroll', () => {
  const customEvent = new CustomEvent(Events.SCROLL_UPDATE, {});

  document.dispatchEvent(customEvent);
});

window.addEventListener('resize', () => {
  const customEvent = new CustomEvent(Events.WINDOW_RESIZE, {});

  document.dispatchEvent(customEvent);
});

export { Form, initSharedComponents, initComponentList, State };
