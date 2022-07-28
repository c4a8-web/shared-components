import BaseComponent from './base-component.js';
import Animate from '../animate.js';
import Tools from '../tools.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.itemsContainer = root.querySelector('.tag-cloud__items');
    this.itemLinkClass = 'tag-cloud__item-link';
    this.slider = root.querySelector('.tag-cloud__slider');

    this.items = this.itemsContainer?.dataset.items ? JSON.parse(this.itemsContainer?.dataset.items) : [];

    this.maxCoordinate = 40;
    this.itemsPerOuterRow = 3;
    this.minCoordinate = 10;
    this.minBlur = 2;
    this.maxBlur = 10;
    this.maxDelay = 70;
    this.minDelay = 550;
    this.maxWeight = 3;
    this.isMouseOut = true;

    this.animate = new Animate();
    this.delay = 1000;
    this.velocity = 30;
    this.startPosition = 0;
    this.endPosition = 0;
    this.gotDragged = false;

    this.firstTouch = true;
    this.temporaryTouchPosition = 0;
    this.temporaryDiff = 0;
    this.percentageInViewport = 30;

    this.init();
  }

  init() {
    this.weightingElements();
    this.addCorners();
    this.appendItems();
    if (this.hasScrollAnimation()) {
      this.setDuration();
      this.addScrollAnimation();
    }
    this.bindEvents();
  }

  hasScrollAnimation() {
    return Tools.isBelowBreakpoint('md') && Tools.isInViewportPercent(this.root, this.percentageInViewport);
  }

  bindEvents() {
    this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        this.handleMouseOver(e?.currentTarget);
      });
    });

    this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach((item) => {
      item.addEventListener('mouseout', (e) => {
        this.handleMouseOut(e?.currentTarget);
      });
    });

    window.addEventListener('resize', () => {
      this.handleScroll();
      this.endPosition = this.slider.scrollWidth - this.slider.clientWidth;
      this.setDuration();
    });

    document.addEventListener('scroll', () => {
      this.handleScroll();
    });

    this.slider.addEventListener('touchstart', () => {
      if (this.hasScrollAnimation()) {
        clearTimeout(this.timeout);
        this.handleTouchStart();
      }
    });

    this.slider.addEventListener('touchend', () => {
      if (this.hasScrollAnimation()) {
        this.timeout = setTimeout(() => {
          this.addScrollAnimation();
        }, this.delay);
      }
    });
  }

  stopScrollAnimation() {
    this.animate.pause();
    this.isInScrollAnimation = false;
  }

  handleTouchStart() {
    this.stopScrollAnimation();
    this.gotDragged = true;
  }

  handleTouchEnd() {
    const currentPosition = this.slider.scrollLeft;
    const distanceToUpperLimit = Math.abs(this.endPosition - currentPosition);
    const distanceToLowerLimit = Math.abs(this.startPosition - currentPosition);
    const timing = Animate.easing.linear;
    const distance = distanceToUpperLimit < distanceToLowerLimit ? true : false;
    const startPosition = currentPosition;
    const endPosition = distance ? this.startPosition : this.endPosition;
    const reverse = distance ? true : false;
    const scaleDiff = Math.abs(startPosition - endPosition) / Math.abs(this.startPosition - this.endPosition);
    const duration = this.duration * scaleDiff;
    this.moveTo(startPosition, endPosition, duration, timing, reverse);
  }

  handleMouseOut(element) {
    window.cancelAnimationFrame(this.animate.requestId);
    element.style.setProperty('filter', null);
  }

  handleMouseOver(element) {
    const style = window.getComputedStyle(element);
    const blur = style?.filter.replace('blur(', '').replace('px)', '');
    const duration = 900;

    this.animate.start({
      duration,
      timing: Animate.easing.easeInOutCubic,
      draw: (progress) => {
        const newBlur = blur - blur * progress;

        element.style.setProperty('filter', `blur(${newBlur}px)`, 'important');
      },
    });
  }

  handleScroll() {
    if (this.hasScrollAnimation()) {
      if (this.isInScrollAnimation) return;

      this.addScrollAnimation();
    } else {
      this.stopScrollAnimation();
    }
  }

  addScrollAnimation() {
    this.isInScrollAnimation = true;
    this.endPosition = this.slider.scrollWidth - this.slider.clientWidth;

    this.handleTouchEnd();
  }

  setDuration() {
    const distance = this.slider.clientWidth;
    this.duration = this.velocity * distance;
  }

  moveTo(currentPosition, limit, duration, timing, reverse) {
    const limitDiff = Math.abs(limit - currentPosition);

    this.animate.start({
      duration: duration,
      timing: timing,
      draw: (progress) => {
        const stepAfterDrag = reverse ? currentPosition - limitDiff * progress : currentPosition + limitDiff * progress;
        const stepBeforeDrag = reverse ? limitDiff * (1 - progress) : limitDiff * progress;
        this.slider.scrollLeft = this.gotDragged ? stepAfterDrag : stepBeforeDrag;


        if (progress === 1) {
          this.gotDragged = false;
          this.moveTo(this.startPosition, this.endPosition, duration, timing, !reverse);
        }
      },
    });
  }

  weightingElements() {
    const weightThreshold = 8;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      const weight = Math.ceil(item.title.length / weightThreshold);
      this.items[i].weighting = weight > this.maxWeight ? this.maxWeight : weight;
    }
  }

  getCornerPosition() {
    let weight = 0;
    let secondIndex = 0;

    let lastElementsWeight = 0;
    let thirdIndex = 0;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      weight += item.weighting;

      if (weight > this.itemsPerOuterRow + 1) continue;

      secondIndex = i + 1;
    }

    for (let i = this.items.length - 1; i > 0; i--) {
      const item = this.items[i];

      lastElementsWeight += item.weighting;

      if (lastElementsWeight > 3) continue;
      thirdIndex = i + 1;
    }

    return { secondIndex, thirdIndex };
  }

  addCorners() {
    const corner = { weighting: 0 };

    this.items.unshift(corner);
    this.items.push(corner);

    const cornerPosition = this.getCornerPosition();

    this.items.splice(cornerPosition.secondIndex, 0, corner);
    this.items.splice(cornerPosition.thirdIndex, 0, corner);
  }

  getRandomCoordinate() {
    const slowThreshold = 1.1;
    const speedLimit = 2;
    let value = this.getRandomNumberBetween(this.minCoordinate, this.maxCoordinate);
    let tempValue = value;
    let sign = Math.random() > 0.5 ? -1 * value : value;
    if (sign < 0) {
      value = sign + tempValue / slowThreshold;
    }

    return value / speedLimit;
  }

  getRandomBlur() {
    return this.getRandomNumberBetween(this.minBlur, this.maxBlur);
  }

  getRandomStart() {
    return this.getRandomNumberBetween(this.minDelay, this.maxDelay);
  }

  getRandomNumberBetween(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  appendItems() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const groupSize = 2;
      const newElement = document.createElement('li');

      newElement.classList.add('tag-cloud__item');
      newElement.setAttribute('data-weight', item.weighting);

      if (item.title) {
        const link = document.createElement('a');

        //link.setAttribute('href', item.link);
        let isEven = i % groupSize === 0 ? true : false;
        const groupIdentifier = isEven ? 2 : 1;
        link.setAttribute('groupIdentifier', groupIdentifier);

        //x-Values
        link.style.setProperty('--blurry-x1', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-x2', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-x3', `${this.getRandomCoordinate()}px`);

        //y-Values
        link.style.setProperty('--blurry-y1', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-y2', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-y3', `${this.getRandomCoordinate()}px`);

        //Blur-Values
        link.style.setProperty('--blurry-delay', `${this.getRandomStart()}ms`);
        link.style.setProperty('--blurry-blur', `${this.getRandomBlur()}px`);

        link.innerText = item.title;
        link.classList.add(this.itemLinkClass);

        newElement.appendChild(link);
      }

      this.itemsContainer.appendChild(newElement);
    }
  }
}

export default TagCloud;
