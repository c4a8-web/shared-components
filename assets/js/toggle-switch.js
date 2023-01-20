import Animate from './animate';
import BaseComponent from './components/base-component';

class ToggleSwitch extends BaseComponent {
  static rootSelector = '.js-toggle-switch';
  constructor(root, options) {
    super(root, options);

    this.targetSelector = '.js-toggle-switch';
    this.target = document.querySelector(this.targetSelector);
    this.duration = 400;
    this.parsePricingData = document.querySelector('[data-pricing]')?.dataset.pricing;

    this.init();
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

      if (pricingSwitch) {
        const options = JSON.parse(currentTarget.dataset.toggleSwitchItemOptions);
        const start = state ? options.monthly : options.annual;
        const end = state ? options.annual : options.monthly;
        this.switchAnimation(currentTarget, start, end);
      } else {
        const visible = currentTarget.className.includes('toggle-switch__on');
        const elementWithoutPoint = element.startsWith('.') ? element.substring(1) : element;
        console.log(currentTarget.classList);
        currentTarget.className = elementWithoutPoint + ' ' + (visible ? 'toggle-switch__off' : 'toggle-switch__on');
      }
    }
  }

  init() {
    this.target.addEventListener('change', this.handleChange.bind(this));
  }
}

export default ToggleSwitch;
