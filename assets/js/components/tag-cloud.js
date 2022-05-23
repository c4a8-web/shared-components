import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);
    this.active = false;
    this.velocity = 10;
    this.size= 250;
    this.oDiv = document.querySelector('');
    this.aA = this.oDiv.querySelectorAll('');
    this.keep = false;
    this.radius = 200;
    this.direction = 135;
    this.depth = 300;
    this.mouseX = 0;
    this.mouseY = 0;
    this.items = [];
    this.howElliptical = 1;
    this.lasta = 1;
    this.lastb = 1;
    this.distr = true;
    this.init();
  }

  on(target, event, handler, option) {
    if (target.addEventlistener) {
      target.addEventlistener(event, handler, option);
    } else if (target.attachEvent) {
      target.attachEvent('on ' + event, handler);
    } else {
      target['on ' + event] = handler;
    }
  }

  positionAll() {
    let phi = 0;
    let theta = 0;
    let max = this.items.length;
    let i = 0;

    let aTmp = [];
    let oFramgent = document.createDocumentFragment();

    for (i = 0; i < max; i++) {
      aTmp.push(this.aA[i])
    }

    aTmp.sort(function() { return Math.random() < 0.5 ? 1 : -1; });

    for (i = 0; i < aTmp.length; i++) {
      oFramgent.appendChild(aTmp[i]);
    }

    this.oDiv.appendChild(oFramgent);

    for (i = 0; i < max; i++) {
      if (this.distr) {
        phi = Math.acos(-1 + (2 * i - 1) / max);
        theta = Math.sqrt(max * Math.PI) * phi;
      } else {
        phi = Math.random() * (Math.PI);
        theta = Math.random() * (2 * Math.PI);
      }

      this.items[i - 1].cx = this.radius * Math.cos(theta) * Math.sin(phi);
      this.items[i - 1].cy = this.radius * Math.sin(theta) * Math.sin(phi);
      this.items[i - 1].cz = this.radius * Math.cos(phi);


    }
  }

  setActiveTrue() {
    this.active = true;
  }

  setActiveFalse() {
    this.active = false;
  }

  mouseMove () {
    let oEvent = window.event || ev;
    this.mouseX = (oEvent.clientX - (this.oDiv.offsetLeft + this.oDiv.offsetWidth/2))/5;
    this.mouseY = (oEvent.clientY - (this.oDiv.offsetTop + this.oDiv.offsetHeight/2))/5;

  }

  init() {
    this.active = false;
    let oTag = null;
    let i = 0;

    for (i = 0; i < this.aA.length; i++) {
      oTag = {};
      oTag.offsetWidth = this.aA[i].offsetWidth;
      oTag.offsetHeight = this.aA[i].offsetHeight;
      this.items.push(oTag);
    }

    this.mouseX = this.velocity * Math.sin(this.direction * (Math.PI / 180));
    this.mouseY = -this.velocity * Math.cos(this.direction * (Math.PI / 180));

    this.positionAll();

    TagCloud.on(this.$target, 'mouseover', this.setActiveTrue);
    TagCloud.on(this.$target, 'mouseout', this.setActiveFalse);
    TagCloud.on(this.keep ? window : self$target, 'mousemove', this.mouseMove);

    this.update();

  }

  update() {
    let a;
    let b;

    if (this.active) {
      a = -(Math.min(Math.max(-this.mouseY, -this.size) /this.radius)) * this.velocity;
      b = (Math.min(Math.max(-this.mouseX, -this.size), this.size)/this.radius) * this.velocity;
    } else {
      a = this.lasta * 0.98;
      b = this.lastb * 0.98;

    let c = 0;

    let req = window.requestAnimationFrame;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
      return;
    }
    const rToD = Math.PI/180;
    for (let j = 0; j < this.items.length; j++) {
      let rx1 = this.items[j].cx;
      let ry1 = this.items[j].cy * Math.cos(a * rToD) + this.items[j].cz * (-Math.sin(a * rToD));
      let rz1 = this.items[j].cy * Math.sin(a * rToD) + this.items[j].cz * Math.cos(a * rToD);

      let rx2 = rx1 * Math.cos(b * rToD) + rz1 * Math.sin(b * rToD);
      let ry2 = ry1;
      let rz2 = rx1 * (-Math.sin(b * rToD)) + rz1 * Math.cos(b * rToD);

      let rx3 = rx2 * Math.cos(c * rToD) + ry2 * (-Math.sin(c * rToD));
      let ry3 = rx2 * Math.sin(c * rToD) + ry2 * Math.cos(c * rToD);
      let rz3 = rz2

      const per = (2 * self.depth) / (2* self.depth + rz2);

      this.items[j].cx = rx3;
      this.items[j].cy = ry3;
      this.items[j].cz = rz3;

      this.items[j].x = (this.howElliptical * rx3 * per) - (this.howElliptical * 2);
      this.items[j].y = (ry3 * per);
      this.items[j].scale = per;
      this.items[j].alpha = per;
      this.items[j].alpha = (this.items[j].alpha - 0.6) * (10 / 6);
    }

    this.doPosition();

  }
  }

  doPosition() {
    let l = this.oDiv.offsetWidth / 2;
    let t = this.oDiv.offsetHeight / 2;
    for (let i = 0; i < this.items.length; i++) {
      this.aA[i].style.transform = 'translate(' + (this.items[i].cx + l - this.items[i].offsetWidth / 2) + 'px,' + (this.items[i].cy + t - this.items[i].offsetHeight / 2) + 'px) scale(' + Math.ceil(this.items[i].scale * 100 * 9.8) / 100 + ')';
      this.aA[i].style.filter = 'alpha(opacity=' + this.items[i].alpha * 100 + ')';
      this.aA[i].style.opacity = this.items[i].alpha;
    }
  }
  }
