// import '../src/assets/front/dist/assets/vendor/jquery/dist/jquery.min.js';
// import '../src/assets/front/dist/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js';
// import '../src/assets/front/dist/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../src/assets/front/dist/assets/vendor/jquery-validation/dist/jquery.validate.min.js';
// import '../src/assets/front/dist/assets/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.js';
// import '../src/assets/front/dist/assets/js/theme.min.js';
// import '../src/assets/front/dist/assets/js/hs.validation.js';
// // TODO look for a leaflet dependency
// // import '../src/assets/front/dist/assets/vendor/leaflet/dist/leaflet.js';
// import '../src/assets/front/dist/assets/vendor/hs-sticky-block/dist/hs-sticky-block.min.js';
// import '../src/assets/front/dist/assets/vendor/slick-carousel/slick/slick.min.js';

import '../src/assets/front/dist/assets/vendor/leaflet/dist/leaflet.css';
import '../src/assets/front/dist/assets/css/theme.min.css';
import '../src/assets/front/dist/assets/vendor/slick-carousel/slick/slick.css';
import '../src/assets/front/dist/assets/vendor/fontawesome/css/all.min.css';
import '../src/assets/front/dist/assets/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import i18n from './assets/js/i18n/index.js';

import Events from './assets/js/events.js';
// import State from './assets/js/state.js';
import Tools from './assets/js/tools.js';

const handleLoadingError = function (error) {
  console.error('There was an issue loading a component. It might be blocked by an Adblock Script.', error);
};

const handleAdBlockerError = function (error) {
  console.error('This issue is propably caused by an AdBlocker', error);

  const customEvent = new CustomEvent(Events.AD_BLOCK_INFO, {});

  document.dispatchEvent(customEvent);
};

const Form = import('./assets/js/components/form.js')
  .then((module) => {
    return module.default;
  })
  .catch(handleLoadingError);

let componentLoadingList;

const componentList = [
  // This is disabled for now because we want to check if users will complain or not
  // import('./analytics.js')
  //   .then((module) => {
  //     return module.default;
  //   })
  //   .catch(handleAdBlockerError),
  import('./assets/js/anchor.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/data-an.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/sticky-scroller.js') // needs to load early
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/toggle-switch.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/back.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/back-to-top.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/contact.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/fab-button.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  Form,
  import('./assets/js/components/google-maps.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/hero-text-image.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/pricing-slider.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/tag-cloud.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/testimonial-list.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/utility-animation.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/components/video-frame.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/modal.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
  import('./assets/js/pages/detail.js')
    .then((module) => {
      return module.default;
    })
    .catch(handleLoadingError),
];

let lastBodyHeight = document.body.clientHeight;

const triggerResizeEvent = () => {
  const customEvent = new CustomEvent(Events.WINDOW_RESIZE, {});

  document.dispatchEvent(customEvent);
};

const triggerVueMounted = () => {
  const customEvent = new CustomEvent('VUE_IS_MOUNTED', {});

  document.dispatchEvent(customEvent);
};

const handleBodyMutation = (mutations) => {
  const heightTolleranceRange = 3;
  let once = false;

  mutations.forEach((mutation) => {
    if (once) return;

    if (
      mutation.contentRect.height > lastBodyHeight + heightTolleranceRange ||
      mutation.contentRect.height < lastBodyHeight - heightTolleranceRange
    ) {
      lastBodyHeight = mutation.contentRect.height;
      once = true;

      triggerResizeEvent();

      return;
    }
  });
};

const captureBodyMutation = () => {
  const observer = new ResizeObserver(handleBodyMutation);

  observer.observe(document.body);
};

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
  captureBodyMutation();
});

window.addEventListener('scroll', () => {
  const customEvent = new CustomEvent(Events.SCROLL_UPDATE, {});

  document.dispatchEvent(customEvent);
});

window.addEventListener('resize', () => {
  triggerResizeEvent();
});

// export { Form, initSharedComponents, initComponentList, State };

export { triggerVueMounted };
