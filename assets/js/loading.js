import Tools from "./tools.js";
import State from "./state.js";

class Loading {
  constructor(root) {
    this.root = root;
    this.maxShapes = 3;
    this.loadingClass = "loading";
    this.shapeClass = "loading__shape";
    this.bounceClasses = {
      up: "loading--bounce-up",
      down: "loading--bounce-down",
    };
    this.types = ["circle", "square", "triangle", "triangle-2", "rectangle"];

    this.colors = [
      "--color-loading--1",
      "--color-loading--2",
      "--color-loading--3",
      "--color-loading--4",
    ];

    this.scaleMin = 2;
    this.scaleMax = 4;

    this.rotationMin = 90;
    this.rotationMax = 180;

    this.animationInterval = 800;

    this.intervals = [];

    this.init();
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getRandomType() {
    return this.types[Math.floor(Math.random() * this.types.length)];
  }

  getRandomTypeClass() {
    return `loading__shape--${this.getRandomType()}`;
  }

  getRandomScale() {
    return (
      Math.floor(Math.random() * (this.scaleMax - this.scaleMin + 1)) +
      this.scaleMin
    );
  }

  getRandomRotation() {
    return (
      Math.floor(Math.random() * (this.rotationMin - this.rotationMax + 1)) +
      this.rotationMin
    );
  }

  getRandomOffset() {
    let offset = Math.random() * 6 - 2;
    let opp = offset >= 0 ? "+ " : "- ";

    return `${opp}${offset}`;
  }

  getRandomStyle() {
    return `
    left: calc(50% ${this.getRandomOffset()}vw);
    --color-loading: var(${this.getRandomColor()});
    --loading-scale: ${this.getRandomScale()}vh;
    --loading-rotation: ${this.getRandomRotation()}deg
  `;
  }

  createShapes() {
    for (var i = 0; i < this.maxShapes; i++) {
      const shape = document.createElement("shape");

      const newShape = Tools.append(this.root, shape);

      this.startAnimation(newShape);
    }
  }

  startAnimation(element) {
    this.intervals.push(
      setInterval(() => {
        element.className = "";
        element.classList.add(this.getRandomTypeClass());
        element.classList.add(this.shapeClass);
        element.setAttribute("style", this.getRandomStyle());

        if (!element.classList.contains(this.bounceClasses.up)) {
          element.classList.add(this.bounceClasses.up);
        } else {
          element.classList.replace(
            this.bounceClasses.down,
            this.bounceClasses.up
          );
        }

        setTimeout(() => {
          element.classList.replace(
            this.bounceClasses.up,
            this.bounceClasses.down
          );
        }, this.animationInterval / 2);
      }, this.animationInterval)
    );
  }

  init() {
    this.root.classList.add(this.loadingClass);

    this.createShapes();
  }

  on() {
    this.root.classList.add(State.LOADING);
  }

  off() {
    setTimeout(() => {
      this.intervals.forEach((interval) => {
        clearInterval(interval);
      });

      this.root.classList.remove(State.LOADING);
    }, 100);
  }
}

export default Loading;
