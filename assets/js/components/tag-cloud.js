import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.itemsContainer = root.querySelector('.tag-cloud__items');

    this.itemsPerOuterRow = 3;
    // this.itemsPerInnerRow = 5;

    this.items = this.itemsContainer?.dataset.items ? JSON.parse(this.itemsContainer?.dataset.items) : [];

    this.maxCoordinate = 40; // TODO maybe connect to the padding property to make sure it doesn't get out of bounce ?

    //this.maxCoordinate = [];
    this.minCoordinate = 10;
    this.minBlur = 2;
    this.maxBlur = 10;
    this.maxDelay = 70;
    this.minDelay = 550;
    this.maxWeight = 3;


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

      /*const paddingOfElement = window.getComputedStyle(element, null).getPropertyValue('padding-top') * 2;
      console.log(paddingOfElement);
      this.maxCoordinate.push(paddingOfElement);*/
    }
  }

  getCornerPosition() {
    //based on the fontsize the placement is accurrate that

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

    for (let i = this.items.length-1; i > 0; i--) {
      const item = this.items[i];

      lastElementsWeight += item.weighting;

      if (lastElementsWeight > 3) continue;
      thirdIndex = i+1;
    }

    return {secondIndex, thirdIndex};
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
    if (sign < 0 ) {
      value = sign + tempValue/slowThreshold;
    }

    return value/speedLimit;
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
        let isEven = (i % groupSize === 0) ? true : false;
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
        link.classList.add('tag-cloud__item-link');

        newElement.appendChild(link);
      }

      this.itemsContainer.appendChild(newElement);
    }
  }

}

export default TagCloud;
