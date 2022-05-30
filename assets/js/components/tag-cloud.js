import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.divObject = document.querySelector('.tag-cloud-container');
    this.textElements = this.divObject.querySelectorAll('a');

    this.tagList = [];
    this.depth = 500;
    this.radius = 400;

    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseIsInactive = false;
    this.velocity = 10;
    this.lastXPosition = 1;
    this.lastYPosition = 1;

    window.addEventListener('load', this.tagCloudInitiator())
  }

  tagCloudInitiator() {
    this.setTags();
    this.positionObjects();
    this.update(1, 1, 1);

    this.getMouseState();
  }

  getRandomValue() {
    let sign = Math.random() < 0.5 ? -1 : 1;
    this.mouseX = sign * Math.random() * 5;
    this.mouseY = sign * Math.random() * 5;
  }

  mouseOver() {
    this.mouseIsInactive = false;

  }

  mouseOut() {
    this.mouseIsInactive = true;

  }

  responsiveRadius() {
    let responsiveRadius = this.divObject.clientWidth;
    this.radius = Math.trunc(responsiveRadius/4);
  }

  getMouseState() {
    let size = 200;

    this.divObject.addEventListener('mouseover', this.mouseOver.bind(this));
    this.divObject.addEventListener('mouseout', this.mouseOut.bind(this));
    this.divObject.addEventListener('mousemove', this.getRandomValue.bind(this));
    window.addEventListener('resize', this.responsiveRadius.bind(this));

    let tempYPosition = 0;
    let tempXPosition = 0;

    if (this.mouseIsInactive) {
      tempYPosition = (-Math.min(Math.max(-this.mouseY, -size)/this.radius) * this.velocity);
      tempXPosition = (Math.min(Math.max(-this.mouseX, -size), size)/this.radius) * this.velocity;

    } else {
      tempYPosition = this.lastYPosition * 0.98;
      tempXPosition = this.lastXPosition * 0.98;
    }

    this.lastYPosition = tempYPosition;
    this.lastXPosition = tempXPosition;
    setTimeout(this.getMouseState.bind(this), 10);
    this.update(tempYPosition, tempXPosition, 0);
  }

  setTags() {
    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      tag.offsetWidth = this.textElements[i].offsetWidth;
      tag.offsetHeight = this.textElements[i].offsetHeight;
      this.tagList.push(tag);
    }
  }


  positionObjects() {
    let phi = 0;
    let theta = 0;
    let max = this.tagList.length + 1;
    for (let i = 1; i < max; i++) {
      phi = Math.acos(-1 + (2 * i + 1 )/max);
      theta = Math.sqrt(max * Math.PI) * phi;

      this.tagList[i -1].cx = this.radius * Math.cos(theta) * Math.sin(phi);
      this.tagList[i -1].cy = this.radius * Math.sin(theta) * Math.sin(phi);
      this.tagList[i -1].cz = this.radius * Math.cos(phi);
    }

  }

  sinCos(a, b, c) {
    const degreeToRadians = Math.PI / 180;
    let sinA =  Math.sin(a * degreeToRadians);
    let cosA =  Math.cos(a * degreeToRadians);
    let sinB =  Math.sin(b * degreeToRadians);
    let cosB =  Math.cos(b * degreeToRadians);
    let sinC =  Math.sin(c * degreeToRadians);
    let cosC =  Math.cos(c * degreeToRadians);
    return { sinA, cosA, sinB, cosB, sinC, cosC };
  }

  rotationMatrix(a, b, c, i) {
    let result = this.sinCos(a, b, c);
    let rx1 = this.tagList[i].cx;
    let ry1 = this.tagList[i].cy * result.cosA + this.tagList[i].cz * (-result.sinA);
    let rz1 = this.tagList[i].cy * result.sinA + this.tagList[i].cz * result.cosA;

    let rx2 = rx1 * result.cosB + rz1 * result.sinB;
    let ry2 = ry1;
    let rz2 = rx1 * (-result.sinB) + rz1 * result.cosB;

    let rx3 = rx2 * result.cosC + ry2 * (-result.sinC);
    let ry3 = rx2 * result.sinC + ry2 * result.cosC;
    let rz3 = rz2;

    let per = (this.depth) / (this.depth + rz3);
    return { rx3, ry3, rz3, per };
    }

  update(a, b, c) {
    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01 && Math.abs(c) <= 0.01) {return}

    for (let i = 0; i < this.tagList.length; i++) {
      let vector3 = this.rotationMatrix(a, b, c, i);

      this.tagList[i].cx = vector3.rx3;
      this.tagList[i].cy = vector3.ry3;
      this.tagList[i].cz = vector3.rz3;

      this.tagList[i].x = ((vector3.rx3 * vector3.per) - (2));
      this.tagList[i].y = vector3.ry3 * vector3.per;

      this.tagList[i].scale = vector3.per;
      this.tagList[i].alpha = vector3.per;
      this.tagList[i].alpha = (this.tagList[i].alpha - 0.6) * (10/6);

    }
    this.doPosition();
  }

  doPosition() {
    let l = this.divObject.offsetWidth / 2;
    let t = this.divObject.offsetHeight / 2;
    let xPlacement = 0;
    let yPlacement = 0;
    let newScale = 0;
    let newAlpha = 0;
    let newBlur = 0;

    for (let i = 0; i < this.tagList.length; i++) {
      let ellipticValue = 0.5;
      xPlacement = (this.tagList[i].cx + l - this.tagList[i].offsetWidth / 2);
      yPlacement = ellipticValue * (this.tagList[i].cy + t - this.tagList[i].offsetHeight / 2);
      newScale = Math.ceil(this.tagList[i].scale * 100 )/100;
      newAlpha = (this.tagList[i].alpha + 0.1) * 100;
      newBlur = (1/(this.tagList[i].scale)**2);
      this.textElements[i].style.transform = 'translate(' + xPlacement + 'px, ' + yPlacement + 'px ) scale(' + newScale + ')';

      this.textElements[i].style.filter = 'alpha(opacity=' + newAlpha + ')';
      this.textElements[i].style.filter =  'blur( ' + newBlur + 'px)';
      this.textElements[i].style.opacity = this.tagList[i].alpha + 0.1;
    }

  }
}


export default TagCloud;
