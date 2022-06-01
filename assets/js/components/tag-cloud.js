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
    // this.fontSizeWeighting();

    this.positionElements();
  }

  positionElements() {
    let columnStart = 2;
    let columnEnd = 3;
    let rowStart = 1;
    let rowEnd = 2;

    const rowLength = 5;

    for (let i = 0; i < this.items.length; i++) {
      const current = this.tagList[i];
      const weight = Math.ceil(current.weighting);
      console.log('TagCloud ~ positionElements ~ weight', weight);

      rowEnd = rowStart + 1;
      columnEnd = columnStart + weight;

      // TODO check if the element will fit in that row and if not go to the next row;
      // TODO check if row is full and switch to the next one permanently

      this.items[i].style = `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd};`;

      columnStart += weight;

      if (i === 1) return;
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
      console.log(this.textElements[i].style.fontSize);
    }
  }
}

export default TagCloud;
