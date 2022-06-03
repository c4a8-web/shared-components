import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.itemsContainer = root.querySelector('.tag-cloud__items');

    for (let i = this.itemsContainer.children.length - 1; i >= 0; i--) {
      this.itemsContainer.appendChild(this.itemsContainer.children[Math.random() * i | 0]);
    }

    this.items = this.container?.querySelectorAll('.tag-cloud__item');
    this.textElements = this.container?.querySelectorAll('a');
    this.tagList = [];


    this.init();
  }

  init () {
    this.weightingElement();
    this.positionElements();
    this.setVariables();

  }

  setVariables() {
    console.log(this.tagList);

    for (let i = 0; i < this.tagList.length; i++) {
      this.items[i].style.setProperty('--weight', this.tagList[i].weighting);
      this.items[i].style.setProperty('--item-animation-delay', Math.ceil(this.tagList[i].weighting * 1) + 's');
    }
  }

  positionElements () {
    let columnStart = 1;
    let columnEnd = 2;
    let rowStart = 1;
    let rowEnd = 2;
    let rowLength = Math.ceil(Math.sqrt(this.items.length + 4)) + 3;
    let lastRow = rowLength - 3 ;

    for (let i = 0; i < this.items.length; i++) {
      const current = this.tagList[i];
      const weight = Math.ceil(current.weighting);

      rowEnd = rowStart + 1;
      columnEnd = columnStart + weight;

      if (rowStart === 1 && columnStart === 1) {
        columnStart = 2;
        columnEnd = columnStart + weight;
      }

      if (rowStart === 1 && columnEnd >= rowLength) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }

      if (columnEnd > rowLength) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }

      if (rowStart >= lastRow && columnStart == 1 ) {
        columnStart += 1;
        columnEnd = columnStart + weight;
      }

      if (rowStart >= lastRow && columnStart >= (rowLength - 2)) {
        rowStart += 1;
        columnStart -= 1;
        columnEnd = columnStart + weight;
      }

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
}

export default TagCloud;
