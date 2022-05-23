import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);
    // get div and all the objects/links in that div
    this.divObject = document.querySelector('.tag-cloud-container');
    this.textElements = this.divObject.querySelectorAll('a');
    // a list with all our ObjectTags for each textElement
    this.tagList = []
    this.depth = 300;
    this.radius = 300;
    this.update(20, 20, 20);
  }



  setTags() {
    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      // offsetWidth, offsetHeight, cx, cy, x, y, scale, alpha
      tag.offsetWidth = this.textElements[i].offsetWidth;
      tag.offsetHeight = this.textElements[i].offsetHeight;
      this.tagList.push(tag);
    }
  }

  positionObjects() {
    let phi = 0;
    let theta = 0;
    let i = 0
    let max = this.tagList.length + 1;
    for (i = 1; i < max; i++) {
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
    let ry1 = this.tagList[i].cy * result.cosA - this.tagList[i].cy * (-result.sinA);
    let rz1 = this.tagList[i].cy * result.sinA + this.tagList[i].cy * result.cosA;

    let rx2 = rx1 * result.cosB + rz1 * (+result.sinB);
    let ry2 = ry1;
    let rz2 = rx1 * (-result.sinB) + rz1 * result.cosB;

    let rx3 = rx2 * result.cosC + ry2 * (+result.sinC);
    let ry3 = rx2 * result.sinC + ry2 * result.cosC;
    let rz3 = rz2;

    let per = this.depth / this.depth + rz3
    return { rx3, ry3, rz3, per };
    }

  update(a, b, c) {

    this.setTags();
    this.positionObjects();
    for (let i = 0; i < this.tagList.length; i++) {
      let vector3 = this.rotationMatrix(a, b, c, i);

      this.tagList[i].cx = vector3.rx3;
      this.tagList[i].cy = vector3.ry3;
      this.tagList[i].cz = vector3.rz3;

      this.tagList[i].x = (vector3.rx3 * vector3.per) - 2;
      this.tagList[i].y = vector3.ry3 * vector3.per;
      this.tagList[i].scale = vector3.per;
      this.tagList[i].alpha = vector3.per;
      this.tagList[i].alpha = (this.tagList[i].alpha - 0.6) * (10/6);
    }
  }

  //TODO: doPostion()




  positionElements () {

  }
}


export default TagCloud;




/*

 constructor(root, options) {
    super(root, options);
    this.active = false;
    this.velocity = 10;
    this.size= 250;
    this.oDiv = document.querySelector('.tag-cloud-items');
    this.aA = this.oDiv.querySelectorAll('.text');
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
    let tg = (target != undefined) ? target : window;
    if (tg.addEventListener) {
      tg.addEventListener(event, handler, option);
    } else if (tg.attachEvent) {
      tg.attachEvent('on ' + event, handler);
    } else {
      tg['on ' + event] = handler;
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

    for (i = 1; i < max; i++) {
      if (this.distr) {
        phi = Math.acos(-1 + (2 * i + 1) / max);
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

    this.on(this.oDiv, 'mouseover', () => { this.active = true; });
    this.on(this.oDiv, 'mouseout', () => { this.active = false; });
    this.on(this.oDiv, 'mousemove', () => {
      let oEvent = window.event || ev;
      this.mouseX = (oEvent.clientX - (this.oDiv.offsetLeft + this.oDiv.offsetWidth/2))/5;
      this.mouseY = (oEvent.clientY - (this.oDiv.offsetTop + this.oDiv.offsetHeight/2))/5;
    });

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
    }

    this.lasta = a;
    this.lastb = b;
    let c = 0;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
      return;
    }
    const radiansToDegree = Math.PI/180;
    for (let j = 0; j < this.items.length; j++) {
      let rx1 = this.items[j].cx;
      let ry1 = this.items[j].cy * Math.cos(a * radiansToDegree) + this.items[j].cz * (-Math.sin(a * radiansToDegree));
      let rz1 = this.items[j].cy * Math.sin(a * radiansToDegree) + this.items[j].cz * Math.cos(a * radiansToDegree);

      let rx2 = rx1 * Math.cos(b * radiansToDegree) + rz1 * Math.sin(b * radiansToDegree);
      let ry2 = ry1;
      let rz2 = rx1 * (-Math.sin(b * radiansToDegree)) + rz1 * Math.cos(b * radiansToDegree);

      let rx3 = rx2 * Math.cos(c * radiansToDegree) + ry2 * (-Math.sin(c * radiansToDegree));
      let ry3 = rx2 * Math.sin(c * radiansToDegree) + ry2 * Math.cos(c * radiansToDegree);
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


  doPosition() {
    let l = this.oDiv.offsetWidth / 2;
    let t = this.oDiv.offsetHeight / 2;

    // here
    for (let i = 0; i < this.items.length; i++) {
      this.aA[i].style.transform = 'translate(' + (this.items[i].cx + l - this.items[i].offsetWidth / 2) + 'px,' + (this.items[i].cy + t - this.items[i].offsetHeight / 2) + 'px) scale(' + Math.ceil(this.items[i].scale * 100 * 9.8) / 100 + ')';
      this.aA[i].style.filter = 'alpha(opacity=' + this.items[i].alpha * 100 + ')';
      this.aA[i].style.opacity = this.items[i].alpha;
    }
  }

*/
