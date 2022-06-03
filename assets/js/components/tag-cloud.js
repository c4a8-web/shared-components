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

  positionElements () {
    //this.shuffle(this.tagList);
    this.fontSizeWeighting();

    let columnStart = 1;
    let columnEnd = 2;
    let rowStart = 1;
    let rowEnd = 2;
    let rowLength = Math.ceil(Math.sqrt(this.items.length + 4)) + 2;
    let lastRow = rowLength - 2 ;

    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      const current = this.tagList[i];
      const weight = Math.ceil(current.weighting);

      rowEnd = rowStart + 1;
      columnEnd = columnStart + weight;

      if (rowStart === 1 && columnStart === 1) {
        columnStart = 2;
        columnEnd = columnStart + weight;
      }

      if (rowStart === 1 && columnEnd === rowLength) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }

      if (columnEnd > rowLength) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }

      if (rowStart >= lastRow && columnStart === 1 ) {
        console.log(columnStart);
        columnStart += 1;
        columnEnd = columnStart + weight;
      }

      if (rowStart >= lastRow && columnStart >= rowLength) {
        rowStart += 1;
        columnStart -= 1;
        columnEnd = columnStart + weight;
      }

      this.items[i].style = `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd};`;

      columnStart += weight;

    }
  }

  repairGrid () {
    // if grid overlaps move to the next position

    while (true) {
      let overlaps = false;
      for (let i = 0; i < this.items.length; i++) {
        const current = this.items[i];
        const currentGridArea = current.style.gridArea;
        const currentGridAreaArray = currentGridArea.split('/');
        const currentRowStart = parseInt(currentGridAreaArray[1]);
        const currentColumnStart = parseInt(currentGridAreaArray[0]);
        const currentRowEnd = parseInt(currentGridAreaArray[3]);
        const currentColumnEnd = parseInt(currentGridAreaArray[2]);

        for (let j = i + 1; j < this.items.length; j++) {
          const other = this.items[j];
          const otherGridArea = other.style.gridArea;
          const otherGridAreaArray = otherGridArea.split('/');
          const otherRowStart = parseInt(otherGridAreaArray[1]);
          const otherColumnStart = parseInt(otherGridAreaArray[0]);
          const otherRowEnd = parseInt(otherGridAreaArray[3]);
          const otherColumnEnd = parseInt(otherGridAreaArray[2]);

          console.log(otherRowStart);

          if (currentRowStart === otherRowStart && currentColumnStart === otherColumnStart) {
            overlaps = true;
            current.style.gridArea = `${currentRowStart} / ${currentColumnStart + 1} / ${currentRowEnd} / ${currentColumnEnd + 1}`;
          } else if (currentRowStart === otherRowStart && currentColumnEnd === otherColumnEnd) {
            overlaps = true;
            current.style.gridArea = `${currentRowStart} / ${currentColumnStart - 1} / ${currentRowEnd} / ${currentColumnEnd - 1}`;
          } else if (currentRowEnd === otherRowEnd && currentColumnStart === otherColumnStart) {
            overlaps = true;
            current.style.gridArea = `${currentRowStart + 1} / ${currentColumnStart} / ${currentRowEnd + 1} / ${currentColumnEnd}`;
          } else if (currentRowEnd === otherRowEnd && currentColumnEnd === otherColumnEnd) {
            overlaps = true;
            current.style.gridArea = `${currentRowStart + 1} / ${currentColumnStart - 1} / ${currentRowEnd + 1} / ${currentColumnEnd - 1}`;
          }

          if (i == 1 && j == 2) {
            break
          }
        }
      }
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
}

export default TagCloud;
