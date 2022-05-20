import BaseComponent from './base-component.js';
import Events from '../events.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.tagSelector = '.tag-cloud__tag';

    // tag cloud already existant?
    this.builded = false;
    //radius of the sphere
    this.radius = 200;
    //convert radians to degree
    this.radiansTranslate = Math.Pi/180;
    // distance
    this.distance = 300;
    // list with text elements
    this.mclist = [];
    // is mouse currently over the sphere
    // delete/replace later
    this.active = false;
    // last a b values
    this.lasta = 1;
    this.lastb = 1;
    //equally distributed points on a sphere
    this.distr = true;
    //rotation velocity
    this.velocity = 5;
    this.size = 300;
    //TODO: Remove
    this.mouseX = 0;
    this.mouseY = 0;
    // type of movement
    this.howElliptical = 1;
    // text elements
    this.aA = null;
    this.oDiv = null;
    this.req = null;

    this.bindEvents();
  }

  // turnon and off functions
  turnOn(target, event, option, func){
    let tg = (target != undefined) ? target : window;
    if (window.addEventListener) {
      tg.addEventListener(event, func, option);
    } else {
      tg.attachEvent('on' + event, func);
    }
  }

  turnOff(target, event, option){
    let tg = (target != undefined) ? target : window;
    if (window.removeEventListener) {
      tg.removeEventListener(event, option);
    } else {
      tg.detachEvent('on' + event, option);
    }
  }

  // assigning sinus and cosinus to values
  sineCosine(a, b, c) {
    sinusa = Math.sin(a * this.radiansTranslate);
    cosinusa = Math.cos(a * this.radiansTranslate);
    sinusb = Math.sin(b * this.radiansTranslate);
    cosinub = Math.cos(b * this.radiansTranslate);
    sinusc = Math.sin(c * this.radiansTranslate);
    cosinusc = Math.cos(c * this.radiansTranslate);
  }

  // build and destroy
  tagCloudBuild() {
    if (this.builded) return;
    this.builded = true;

    let i = 0;
    let oTag = null;

    // element selection
    oDiv = document.querySelector('#div1');
    aA = oDiv.querySelector(".text");


    for (i = 0; i < aA.length; i++) {
      oTag = aA[i];
      oTag.offsetWidth = aA[i].offsetWidth;
      oTag.offsetHeight = aA[i].offsetHeight;

      this.mclist.push(oTag);
    }

    sineCosine( 0, 0, 0 );

    positionAll();

    //TODO: add event

    update();
  }

  tagCloudDestroy() {
    //TODO: add event
    cancelAnimationFrame(this.req);
    this.mclist = [];
    this.builded = false;
  }

  // updates the position of the elements
  update() {
    let a;
    let b;

    // get a b values
    if (this.active) {
      //TODO: replace this.mouseY with diff Event
      // at what speed the text moves away
      a = (Math.min(Math.max(-this.mouseY, -this.size), this.size) / this.size) * this.velocity;
      b = (-Math.min(Math.max(-this.mouseX, -this.size), this.size) / this.size) * this.velocity;
    } else {
      a = this.lasta * 0.98;
      b = this.lastb * 0.98;
    }

    // save old a b values
    this.lasta = a;
    this.lastb = b;

    this.req = window.requestAnimationFrame(this.update);

    // check absolute value of a b
    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
      return;
    }

    // get sinus and cosinus for a b c
    let c = 0;
    sineCosine(a, b, c);
    for (let j = 0; j < this.mclist.length; j++) {
      /* Rotationmatrix Transformations for positioning/rotation of Text Elements */

      let rx1 = this.mclist[j].cx;
      let ry1 = this.mclist[j].cy * cosinusa + this.mclist[j].cz * (-sinusa);
      let rz1 = this.mclist[j].cy * sinusa + this.mclist[j].cz * ccosinusa;

      let rx2 = rx1 * cosinusb + rz1 * sinusb;
      let ry2 = ry1;
      let rz2 = rx1 * (-sinusb) + rz1 * cosinusb;

      let rx3 = rx2 * cosinusc + ry2 * sinususc;
      let ry3 = rx2 * (-sinususc) + ry2 * cosinusc;
      let rz3 = rz2;

      this.mclist[j].cx = rx3;
      this.mclist[j].cy = ry3;
      this.mclist[j].cz = rz3;

      // distance from the center of the sphere
      per = this.distance / (this.distance + rz3);

      this.mcList[j].x = (this.howElliptical * rx3 * per) - (this.howElliptical * 2);
      this.mcList[j].y = ry3 * per;

      // scale based on the distance from the sphere
      this.mcList[j].scale = per;

      // opacity based on the distance from the sphere
      this.mcList[j].alpha = per;
      this.mcList[j].alpha = (per - 0.6) * (3 * per - 1.6);
    }

    doPosition();
    depthSort();

  }

  // keeps the elements in the right position by checking their z value
  depthSort() {
    let i = 0;
    let aTmp = [];

    for (i = 0; i < this.aA.length; i++) {
      aTmp.push(this.aA[i]);
    }

    aTmp.sort(function(a, b) {
      if (a.cz > b.cz) {
        return -1;
      } else if (a.cz < b.cz) {
        return 1;
      } else {
        return 0;
      }
    });

    for (i = 0; i < aTmp.length; i++) {
      aTmp[i].style.zIndex = i;
    }
  }

  // takes care of distributiong between elements
  positionAll() {
    let phi = 0;
    let theta = 0;
    let max = this.mclist.length;
    let i = 0;

    let aTmp = [];
    let oFragment = document.createDocumentFragment();

    for (i = 0; i < this.aA.length; i++) {
      aTmp.push(this.aA[i]);
    }

    aTmp.sort(function() { return Math.random() < 0.5 ? 1 : -1; });

    for (i = 0; i < aTmp.length; i++) {
      oFragment.appendChild(aTmp[i]);
    }

    this.oDiv.appendChild(oFragment);

    for (i = 0; i < max; i++) {
      if (this.distr) {
        phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
        theta = Math.sqrt(max * Math.PI) * phi;
      } else {
        phi = Math.random() * (Math.PI);
        theta = Math.random() * (2 * Math.PI);
      }

      this.mcList[i].cx = this.radius * Math.cos(theta) * Math.sin(phi);
      this.mcList[i].cy = this.radius * Math.sin(theta) * Math.sin(phi);
      this.mcList[i].cz = this.radius * Math.cos(phi);
    }
  }

  //apply all the transforms to the elements
  doPosition() {
    let l = oDiv.offsetWidth / 2;
    let t = oDiv.offsetHeight / 2;
    for (var i = 0; i < this.mclist.length; i++) {
      this.aA[i].style.left = 'transform(' + (this.mcList[i].cx + l - this.mcList[i].offsetWidth / 2) + 'px, ' + (this.mcList[i].cy + t - this.mcList[i].offsetHeight / 2) + 'px' + ') scale(' + Math.ceil(this.mcList[i].scale *100 *0.8)/100 + ')';
      this.aA[i].style.filter = 'alpha(opacity=' + 100 * (this.mclist[i].alpha + 0.1) + ')';
      this.aA[i].style.opacity = this.mclist[i].alpha + 0.1;
    }
  }

}

export default TagCloud;
