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
    this.calculateMidPoint();
    this.placeObjects();
    }

  weightingElement () {
    let avgOffsetWidth = 0;

    for (let j = 0; j < this.textElements.length; j++) {
      avgOffsetWidth += this.textElements[j].offsetWidth/this.textElements.length;
    }

    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      tag.offsetWidth = this.textElements[i].offsetWidth;
      tag.offsetHeight = this.textElements[i].offsetHeight;
      tag.weighting = this.textElements[i].offsetWidth/avgOffsetWidth;
      let boundingClientRec = this.textElements[i].getBoundingClientRect();
      tag.x = boundingClientRec.left;
      tag.y = boundingClientRec.top;
      this.tagList.push(tag);
    }
  }

  calculateMidPoint () {
    this.centerX = this.container.offsetWidth/2;
    this.centerY = this.container.offsetHeight/2;
  }

  calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  placeObjects () {
    this.coordinates = [];
    let randomX = 0;
    let randomY = 0;

    while (this.coordinates.length < this.tagList.length) {
      randomX = Math.random() * this.container.offsetWidth;
      randomY = Math.random() * this.container.offsetHeight;
      if (this.calculateDistance(this.centerX, this.centerY, randomX, randomY) < this.radius) {
        this.coordinates.push({x: randomX, y: this.ellipticValue * randomY});
      }

    }

    this.checkDistance();
  }

    doPosition () {
      for (let i = 0; i < this.tagList.length; i++) {
        this.textElements[i].style.left = this.coordinates[i].x + 'px';
        this.textElements[i].style.top = this.coordinates[i].y + 'px';
      }

    }

    checkDistance () {
      let randomX = 0;
      let randomY = 0;
      for (let i = 0; i < this.coordinates.length; i++) {
        for (let j = 0; j < this.coordinates.length; j++) {
          if (i !== j) {
            if (this.calculateDistance(this.coordinates[i].x, this.coordinates[i].y, this.coordinates[j].x, this.coordinates[j].y) < this.distance) {
              randomX = Math.random() * this.container.offsetWidth;
              randomY = Math.random() * this.container.offsetHeight;
              if (this.calculateDistance(this.centerX, this.centerY, randomX, randomY) < this.radius) {
              this.coordinates[i].x = randomX;
              this.coordinates[i].y = randomY;
              }
              this.checkDistance();
            } else {
              this.doPosition();
            }
          }
        }
      }
    }

}


export default TagCloud;
