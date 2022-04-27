// comment out dev version for debugging
// import './lib/vue/vue.global.js';
import './lib/vue/vue.global.prod.js';

import Cta from './vue/cta.js';
import Headline from './vue/headline.js';
import Icon from './vue/icon.js';
import ArrowExternal from './vue/icons/arrow-external.js';
import ArrowNarrow from './vue/icons/arrow-narrow.js';
import Arrow from './vue/icons/arrow.js';
import Close from './vue/icons/close.js';
import ComputerShield from './vue/icons/computer-shield';
import PhoneMail from './vue/icons/phone-mail';
import Rocket from './vue/icons/rocket.js';
import Smile from './vue/icons/smile.js';

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
    Headline,
    Icon,
    ArrowExternal,
    ArrowNarrow,
    Arrow,
    Close,
    ComputerShield,
    PhoneMail,
    Rocket,
    Smile,
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
