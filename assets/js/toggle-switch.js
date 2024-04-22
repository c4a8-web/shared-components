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

    this.bindEvents();
    this.initPrices();
  }

  getTargetSelectors(element) {
    const options = JSON.parse(element.dataset.toggleSwitchOptions);
    const selectorArray = options.targetSelector.split(',');
    const selectors = [];

    for (let i = 0; i < selectorArray.length; i++) {
      const targetSelector = selectorArray[i].replace(/\s/g, '');

      selectors.push(targetSelector);
    }

    return selectors;
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

    [].forEach.call(document.querySelectorAll('[data-alternative-href]'), (element) => {
      this.switchButtonHrefs(element, state);
    });
  }

  switchButtonHrefs(element, state) {
    if (!element.dataset.originalHref) {
      element.dataset.originalHref = element.href;
    }

    element.href = state ? element.dataset.originalHref : element.dataset.alternativeHref;
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
        const currentResult = progress * (end - start) + start;

        this.updatePrices(element, currentResult);
      },
    });
  }

  updatePrices(element, state) {
    const cleanedValue = state.replace ? parseFloat(state.replace(/,/, '.')) : state;
    const formatter = this.priceFormatter();
    const formattedResult = formatter.format(cleanedValue);

    element.innerHTML = formattedResult;
  }

  initPrices() {
    const selectors = this.getTargetSelectors(this.target);

    selectors.forEach((selector) => {
      const targetElements = document.querySelectorAll(selector);

      targetElements.forEach((element) => {
        if (element.dataset.currencyFormat === undefined) return;

        this.updatePrices(element, element.innerHTML);
      });
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

  bindEvents() {
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
