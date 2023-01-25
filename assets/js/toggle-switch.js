import Animate from './animate.js';
import State from './state.js';

class ToggleSwitch {
  static rootSelector = '.toggle-switch';
  constructor(root) {
    this.root = root;
    this.targetSelector = '.js-toggle-switch';
    this.target = this.root.querySelector(this.targetSelector);
    this.duration = 400;
    this.parsePricingData = this.root.querySelector('[data-pricing]')?.dataset.pricing;

    this.start();
  }

  handleChange(e) {
    const switchElement = e.currentTarget;
    const state = switchElement.checked;
    const options = JSON.parse(switchElement.dataset.toggleSwitchOptions);
    const selectorArray = options.targetSelector.split(',');
    const pricingSwitch = selectorArray.some((x) => x.includes('pricing'));

    for (let i = 0; i < selectorArray.length; i++) {
      const targetSelector = selectorArray[i].replace(/\s/g, '');
      this.switchData(targetSelector, state, pricingSwitch);
    }
  }

  pricingData() {
    return this.parsePricingData
      ? JSON.parse(this.parsePricingData)
      : {
          format: 'de-DE',
          currency: 'EUR',
          defaultPlan: 'monthly',
        };
  }

  priceFormatter() {
    const pricingData = this.pricingData();
    return new Intl.NumberFormat(pricingData.format, {
      style: 'currency',
      currency: pricingData.currency,
      maximumFractionDigits: 2,
    });
  }

  switchAnimation(element, start, end) {
    const animate = new Animate();
    animate.start({
      duration: this.duration,
      timing: Animate.easing.easeInOutCubic,
      draw: (progress) => {
        let currentResult = progress * (end - start) + start;
        let formatter = this.priceFormatter();
        let formattedResult = formatter.format(currentResult);
        element.innerHTML = formattedResult;
      },
    });
  }

  switchData(element, state, pricingSwitch) {
    const targetElements = document.querySelectorAll(element);

    for (let i = 0; i < targetElements.length; i++) {
      const currentTarget = targetElements[i];
      pricingSwitch ? this.handlePriceSwitch(currentTarget, state) : this.handleForms(currentTarget, element);
    }
  }

  handlePriceSwitch(currentTarget, state) {
    const options = JSON.parse(currentTarget.dataset.toggleSwitchItemOptions);
    const start = state ? options.monthly : options.annual;
    const end = state ? options.annual : options.monthly;
    this.switchAnimation(currentTarget, start, end);
  }

  handleForms(currentTarget, element) {
    const visible = currentTarget.className.includes(State.HIDDEN);
    const elementWithoutPoint = element.startsWith('.') ? element.substring(1) : element;
    currentTarget.className = elementWithoutPoint + ' ' + (visible ? '' : State.HIDDEN);
  }

  start() {
    this.target.addEventListener('change', this.handleChange.bind(this));
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default ToggleSwitch;
