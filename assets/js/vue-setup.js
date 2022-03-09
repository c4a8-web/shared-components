// comment out dev version for debugging
// import './lib/vue/vue.global.js';
import './lib/vue/vue.global.prod.js';

import Cta from './vue/cta.js';
import Headline from './vue/headline.js';

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

  const components = [Cta, Headline];

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
