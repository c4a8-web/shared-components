import BaseComponent from './base-component.js';
import Events from '../events.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.tagSelector = '.tag-cloud__tag';

    this.builded = false;
    //radius of the sphere
    this.radius = 200;
    //convert radians to degree
    this.radiansTranslate = Math.Pi/180;
    // distance
    this.distance = 300;
    // list
    this.mclist = [];
    // is mouse currently over the sphere
    // delete/replace later
    this.active = false;

    this.lasta = 1;
    this.lastb = 1;
    //equally distributed points on a sphere
    this.distr = true;
    //rotation velocity
    this.velocity = 5;
    this.size = 300;

    this.mouseX = 0;
    this.mouseY = 0;

    this.howElliptical = 1;

    this.aA = null;
    this.oDiv = null;
    this.req = null;

    this.bindEvents();
  }


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

  hasBeenBuilded() {
    if (this.builded) return;

    this.builded = true;
  }


  bindEvents() {
    this.root.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    Tools.scrollToTop();
  }
}

export default TagCloud;
