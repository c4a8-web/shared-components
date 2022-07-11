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

    this.maxCoordinate = 40; // TODO maybe connect to the padding property to make sure it doesn't get out of bounce ?
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
    this.duration = 20000;
    this.startPosition = 0;
    this.endPosition = 0;
    this.gotDragged = false;

    this.firstTouch = true;
    this.temporaryTouchPosition = 0;
    this.temporaryDiff = 0;

    this.init();
  }

  init() {
    this.weightingElements();
    this.addCorners();
    this.appendItems();
    if (this.isBelowBreakpoint('md') && !Tools.isInViewport(this.slider)) {
      this.endPosition = this.slider.scrollWidth - this.slider.clientWidth;
      this.addScrollAnimation();
    }
    this.bindEvents();
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


    if (this.isBelowBreakpoint('md') && !Tools.isInViewport(this.slider)) {
      this.slider.addEventListener('touchstart', () => {
        clearTimeout(this.timeout);
        this.handleTouchStart();
      });

      this.slider.addEventListener('touchmove', () => {
        this.handleTouchMove();
        });

      this.slider.addEventListener('touchend', () => {
        this.timeout = setTimeout(() => {this.handleTouchEnd();}, this.delay);
      });
    }
  }

  // handleEvents

  handleTouchStart() {
    this.animate.pause();
    this.gotDragged = true;
  }

  removeHorizontalScrollbar() {
    // remove scrollbar by limiting the height of what is visible
    const height = this.slider.scrollHeight;
    this.slider.style.height = `${height}px`;
  }

  handleTouchMove() {
    this.gotDragged = true;
    const windowWidth = window.innerWidth;
    let event = event || window.event;
    const currentTouchPosition = event.touches[0].clientX;
    const isWithinBounds = currentTouchPosition >= 0 && currentTouchPosition <= windowWidth ? true : false;


    if (this.firstTouch) {
      this.temporaryTouchPosition = currentTouchPosition;
      this.firstTouch = false;
    }

    const diff = currentTouchPosition - this.temporaryTouchPosition;
    /*const scaleDiff = this.endPosition/windowWidth;
    const step = Math.abs((diff * scaleDiff)/20);*/
    const step = 4;

    if (isWithinBounds) {
      if (diff > this.temporaryDiff) {
        this.slider.scrollLeft -= step;
      } else if (diff < this.temporaryDiff) {
        this.slider.scrollLeft += step;
      }
    }

    this.temporaryDiff = diff;
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
    const scaleDiff = Math.abs(startPosition - endPosition)/Math.abs(this.startPosition - this.endPosition)
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

  // Init Scroll Animation ++ Scroll Animation

  addScrollAnimation() {
    let reverse = false;
    this.moveTo(this.startPosition, this.endPosition, this.duration, Animate.easing.linear, reverse);
  }

  moveTo(currentPosition, limit, duration, timing, reverse) {
    const limitDiff = Math.abs(limit - currentPosition);

    this.animate.start({
      duration: duration,
      timing: timing,
      draw: (progress) => {

        const stepAfterDrag = !reverse ? currentPosition + limitDiff * progress : currentPosition - limitDiff * progress;

        const stepBeforeDrag = !reverse ? limitDiff * progress : limitDiff * (1 - progress);

        this.slider.scrollLeft = (this.gotDragged) ? stepAfterDrag : stepBeforeDrag;
        if (progress === 1) {
          this.gotDragged = false;
          this.moveTo(this.startPosition, this.endPosition, duration, timing, !reverse);
        }
      },
    });
  }

  isBelowBreakpoint(breakpoint) {
    let breakpointArray = ['xs', 'sm', 'md', 'lg', 'xl'];
    const getBreakpoint = Tools.getBreakpoint();
    let breakpointIndex = breakpointArray.indexOf(breakpoint);

    if (breakpointArray.slice(0, breakpointIndex+1).includes(getBreakpoint)) {
      return true;
    } else {
      return false;
    }
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

    // TODO figure out how to get the position. maybe at the correct end or one before an item that overflows
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

        link.setAttribute('href', item.link);
        let isEven = i % groupSize === 0 ? true : false;
        const groupIdentifier = isEven ? 2 : 1;
        link.setAttribute('groupIdentifier', groupIdentifier);

        // TODO create random points more compact ?

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
