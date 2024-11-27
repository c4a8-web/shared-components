import BaseComponent from './base-component.js';
import Modal from '../modal.js';

class PricingSlider extends BaseComponent {
  static rootSelector = '.pricing-slider';

  constructor(root, options, pricing) {
    super(root, options);

    this.selectedValue = 0;
    this.products = null;
    this.range = null;
    this.pricing = pricing;

    // TODO move to a product related component
    const pricingData = this.pricing
      ? this.pricing
      : {
          format: 'de-DE',
          currency: 'EUR',
          defaultPlan: 'monthly',
        };

    this.priceFormatter = new Intl.NumberFormat(pricingData.format, {
      style: 'currency',
      currency: pricingData.currency,
      maximumFractionDigits: 0,
    });

    this.selectedPlan = ['monthly', 'annual'].includes(pricingData.defaultPlan)
      ? pricingData.defaultPlan
      : console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!');
    this.currentPrice = 0;

    this.init();
  }

  init() {
    if (window.handleChange) return console.error('remove handleChange from app.js');

    this.bindEvents();
  }

  bindEvents() {
    const info = this.root.querySelector('.pricing-slider__info');

    if (info) {
      info.addEventListener('click', this.handleInfoClick.bind(this));
    }

    // TODO rename after global migration
    window.handleChange = this.handlePricingSlider.bind(this);
    window.fixSliderText = this.fixText.bind(this);
    window.prepareSlider = this.prepare.bind(this);
  }

  handleInfoClick() {
    const modal = this.root.querySelector('.pricing-slider__modal');

    Modal.open(modal);
  }

  /**
   *
   * @param {object} slider contains from value
   * @param {boolean} updateElements standard is true, maybe overidden for return value
   * @returns price if updateElements is false
   */
  handlePricingSlider({ from }) {
    this.selectedValue = parseInt(from);

    const product = this.getRecommendedProduct(this.selectedValue);

    if (!product) return;

    const extraUsers = this.selectedValue - product.value;

    var price =
      parseInt(product.price[this.selectedPlan]) +
      extraUsers * parseFloat(product.additionalUsersFee[this.selectedPlan]);

    this.currentPrice = price;

    this.updateElements(this.priceFormatter.format(price), product.title, this.formatExtraUsers(extraUsers));
  }

  getRecommendedProduct(selectedValue) {
    let recommendedProduct = null;

    const errorMessage = `No products found for value ${selectedValue} in site.data.products.list`;

    if (this.products) {
      this.products.forEach(function (product) {
        if (product.value <= selectedValue) {
          recommendedProduct = product;
        }
      });

      if (!recommendedProduct) console.error(errorMessage);

      return recommendedProduct;
    } else {
      console.error(errorMessage);
    }
  }

  formatExtraUsers(extraUsers) {
    const unit = this.range.unit;

    if (extraUsers > 0) {
      return '+ ' + extraUsers + ' ' + unit;
    } else {
      return '';
    }
  }

  prepare(slider) {
    const dataElement = document.querySelector('.js-slider-data');
    const timeout = 5;

    this.products = JSON.parse(dataElement.dataset.products);
    this.range = JSON.parse(dataElement.dataset.range);

    this.selectedValue = slider.from;

    setTimeout(() => {
      this.fixText();
    }, timeout);
  }

  fixText() {
    const sliderTextElement = document.querySelector('.irs-single');
    const currentSliderContent = sliderTextElement.innerHTML;

    if (!currentSliderContent.includes(this.range.unit)) {
      sliderTextElement.innerHTML = [currentSliderContent, this.range.unit].join(' ');
    }
  }

  updateElements(price, product, extra) {
    const priceElement = document.querySelector('.js-result-price');
    const productElement = document.querySelector('.js-result-product');
    const extraElement = document.querySelector('.js-result-extra');

    priceElement.innerHTML = price;
    productElement.innerHTML = product;
    extraElement.innerHTML = extra;

    this.fixText();
  }
}

export default PricingSlider;
