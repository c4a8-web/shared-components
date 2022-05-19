import BaseComponent from './base-component.js';
import Events from '../events.js';

class TabList extends BaseComponent {
  static rootSelector = '.tab-list';

  constructor(root, options) {
    super(root, options);

    this.tabSelector = '.tab-list__tab';

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
    [].forEach.call(this.root.querySelectorAll(this.tabSelector), (tab) => {
      tab.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick(e) {
    const current = e.currentTarget;
    const tabContent = document.getElementById(current.href.split('#')[1]);

    if (tabContent === null) return;

    document.dispatchEvent(new CustomEvent(Events.REFRESH_ANIMATE_NUMBERS, { detail: { target: tabContent } }));
  }
}

export default TabList;
