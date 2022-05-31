import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);
    console.log(root)

    this.container = root.querySelector('.tag-cloud__container');
    this.textElements = this.container.querySelectorAll('a');
    this.radius = 150;
    this.centerX = 0;
    this.centerY = 0;
    this.tagList = [];
    this.distance = 100;

    this.coordinates = [];
    this.ellipticValue = 0.5;

    this.weightingElement();
    this.fontSizeWeighting();
    }

  weightingElement () {
    let avgOffsetWidth = 0;

    for (let j = 0; j < this.textElements.length; j++) {
      avgOffsetWidth += this.textElements[j].offsetWidth/this.textElements.length;
    }

    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      tag.weighting = this.textElements[i].offsetWidth/avgOffsetWidth;
      this.tagList.push(tag);
    }
  }

  fontSizeWeighting () {
    let avgFontSize = 8;
    for (let i = 0; i < this.tagList.length; i++) {
      this.textElements[i].style.fontSize = this.tagList[i].weighting * 12 + avgFontSize + 'px';
      console.log(this.textElements[i].style.fontSize);
    }
  }

}

export default TagCloud;
