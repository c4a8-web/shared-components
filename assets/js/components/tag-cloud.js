import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.items = this.container?.querySelectorAll('.tag-cloud__item');
    this.textElements = this.container?.querySelectorAll('a');
    this.radius = 150;
    this.centerX = 0;
    this.centerY = 0;
    this.tagList = [];
    this.distance = 100;

    this.coordinates = [];
    this.ellipticValue = 0.5;

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

    let maxCol = 0;
    let maxRow = 0;

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
      //track how many rows and columns we have
      if (rowStart > maxRow) {
        maxRow = rowStart;
      };

      if (columnStart > maxCol) {
        maxCol = columnStart;
      };
      //TODO: using maxRow and maxCol leave the edges empty

      if (rowStart === 1 && columnStart === 1) {
        rowStart = 2;
      } else if (rowStart === 1 && columnStart === maxCol) {
        rowStart = 2;
      } else if (rowStart === maxRow && columnStart === 1) {
        //columnStart -= 1;
      } else if (rowStart === maxRow && columnStart === maxCol) {
        //columnStart -= 1;
      }


      this.items[i].style = `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd};`;

      columnStart += weight;

    }
    console.log('Max Columns: ', maxCol);
    console.log('Max Rows: ', maxRow);

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
