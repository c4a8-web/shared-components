class Animate {
  constructor() {}

  start({ duration, timing, draw }) {
    const begin = performance.now();

    this.requestId;

    const scope = this;

    this.requestId = requestAnimationFrame(function animate(time) {
      let timeFraction = (time - begin) / duration;

      if (timeFraction > 1) timeFraction = 1;

      const progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        scope.requestId = requestAnimationFrame(animate);
      }
    });
  }

  static easing = {
    linear(timeFraction) {
      return timeFraction;
    },
    easeInOutCubic(timeFraction) {
      return timeFraction < 0.5
        ? 4 * timeFraction * timeFraction * timeFraction
        : 1 - Math.pow(-2 * timeFraction + 2, 3) / 2;
    },
  };
}

export default Animate;
