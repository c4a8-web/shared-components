import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.itemsContainer = root.querySelector('.tag-cloud__items');
    this.items = this.container?.querySelectorAll('.tag-cloud__item');
    this.textElements = this.container?.querySelectorAll('a');
    this.tagList = [];

    this.init();
  }

  init () {
    this.weightingElement();
    this.positionElements();
  }


  shuffle (array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  positionElements() {
    this.shuffle(this.tagList);
    this.fontSizeWeighting();

    let columnStart = 2;
    let columnEnd = 3;
    let rowStart = 1;
    let rowEnd = 2;

    const rowLength = 6;

    for (let i = 0; i < this.items.length; i++) {
      const current = this.tagList[i];
      const weight = Math.ceil(current.weighting);
      //console.log('TagCloud ~ positionElements ~ weight', weight);

      rowEnd = rowStart + 1;
      columnEnd = columnStart + weight;

      if (columnEnd > rowLength) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }

      if (rowStart === 1 && columnEnd === rowLength) {
        rowStart = 2;
        columnStart = 1;
        columnEnd = columnStart + weight;
      } else if (rowStart === 1 && columnStart === 1) {
        rowStart = 2;
        columnStart = 2;
        columnEnd = columnStart + weight;
      } /*else if (rowStart === 4 && columnEnd === rowLength) {
        rowStart = 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }*/
      //same for bottom left and right cell



      this.items[i].style = `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd};`;

      columnStart += weight;

    }
  }
  weightingElement() {
    let avgOffsetWidth = 0;

    for (let j = 0; j < this.textElements.length; j++) {
      avgOffsetWidth += this.textElements[j].offsetWidth / this.textElements.length;
    }

    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      tag.weighting = this.textElements[i].offsetWidth / avgOffsetWidth;
      this.tagList.push(tag);
    }
  }


  fontSizeWeighting() {
    let avgFontSize = 8;
    for (let i = 0; i < this.tagList.length; i++) {
      this.textElements[i].style.fontSize = this.tagList[i].weighting * 12 + avgFontSize + 'px';
    }
  }

  update () {

  }
}

export default TagCloud;
