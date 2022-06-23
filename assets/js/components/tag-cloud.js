import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.itemsContainer = root.querySelector('.tag-cloud__items');

    // for (let i = this.itemsContainer.children.length - 1; i >= 0; i--) {
    //   this.itemsContainer.appendChild(this.itemsContainer.children[Math.random() * i | 0]);
    // }

    this.itemsPerOuterRow = 3;
    // this.itemsPerInnerRow = 5;

    this.maxCoordinate = 40; // TODO maybe connect to the padding property to make sure it doesn't get out of bounce ?
    this.minCoordinate = 10;
    this.minBlur = 2;
    this.maxBlur = 10;
    this.maxDelay = 70;
    this.minDelay = 550;
    this.maxWeight = 3;

    this.items = this.itemsContainer?.dataset.items ? JSON.parse(this.itemsContainer?.dataset.items) : [];

    this.tagList = [];

    this.init();
  }

  init() {
    this.weightingElements();
    this.addCorners();
    this.appendItems();
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
    let index = 0;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      weight += item.weighting;

      if (weight > this.itemsPerOuterRow + 1) continue;

      index = i + 1;
    }

    return index;
  }

  addCorners() {
    const corner = { weighting: 0 };

    this.items.unshift(corner);
    this.items.push(corner);

    // TODO figure out how to get the position. maybe at the correct end or one before an item that overflows
    // const secondCornerPosition = 3;
    const secondCornerPosition = this.getCornerPosition();

    this.items.splice(secondCornerPosition, 0, corner);
  }

  getRandomCoordinate() {
    return this.getRandomNumberBetween(this.minCoordinate, this.maxCoordinate);
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
      const newElement = document.createElement('li');

      newElement.classList.add('tag-cloud__item');
      newElement.setAttribute('data-weight', item.weighting);

      if (item.title) {
        const link = document.createElement('a');

        link.setAttribute('href', item.link);

        link.style.setProperty('--blurry-delay', `${this.getRandomStart()}ms`);

        // TODO create random points more compact ?
        link.style.setProperty('--blurry-x1', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-y1', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-x2', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-y2', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-x3', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-y3', `${this.getRandomCoordinate()}px`);
        link.style.setProperty('--blurry-blur', `${this.getRandomBlur()}px`);
        link.innerText = item.title;
        link.classList.add('tag-cloud__item-link');

        newElement.appendChild(link);
      }

      this.itemsContainer.appendChild(newElement);
    }
  }
}

export default TagCloud;
