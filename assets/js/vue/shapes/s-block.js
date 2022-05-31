const arrowPathStart = 'M0.6 796.88v-396l200.59 198-200.59 198zM0 796.88v-396l200.6 198L0 796.88z';
const arrowPathEnd = 'M200.6 796.88v-396l200.59 198-200.59 198zM0 796.88v-396l200.6 198L0 796.88z';

const circlePathStart =
  'M601.44 355.68c85.57 0 154.94-69.44 154.94-155.08S687.01 45.52 601.44 45.52 446.5 114.95 446.5 200.6s69.37 155.08 154.94 155.08zm0-229.32a74.24 74.24 0 1 1-74.17 74.24 74.21 74.21 0 0 1 74.17-74.24z';
const circlePathEnd =
  'M 601.44 355.68 c 85.57 0 154.94 -69.44 154.94 -155.08 S 687.01 45.52 601.44 45.52 S 446.5 114.95 446.5 200.6 s 69.37 155.08 154.94 155.08 z M 601.5 200 a 0 0 0 1 1 0 0 a 0 0 0 0 1 0 0 z';
const circleStart = '8s';

export default {
  tagName: 's-block',
  computed: {},
  props: {},
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.86 1197.37" width="801.86" height="1197.37" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <path fill="#f8842c" d="M0 400.88h401.19v396H0z"/>
      <path id="s-block-arrows" fill="#fcd116" d="${arrowPathStart}" >
        <animate id="s-block-arrows-anim" href="#s-block-arrows" attributeName="d" values="
          ${arrowPathStart};
          ${arrowPathEnd}
        "
          begin="4.5s;s-block-arrows-anim-reverse.end+20s"
          dur="1.7s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate id="s-block-arrows-anim-reverse" href="#s-block-arrows" attributeName="d" values="
          ${arrowPathEnd};
          ${arrowPathStart}
        "
          begin="s-block-arrows-anim.end +15s"
          dur="1.7s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </path>

      <path fill="#673ab7" d="M.18 796.88h400.84v400.49H.18z"/>
      <path fill="#f8842c" d="M401.02 1197.37H.18L200.6 997.12l200.42 200.25z"/>
      <path fill="#fcd116" d="m200.6 997.12 200.42 200.25H200.6V997.12z"/>
      <path fill="#acd653" d="M801.86 401.19v395.9H401.02v-395.9z"/>
      <path fill="#673ab7" d="M801.85 0v401.19H401.01V0z"/>
      <path id="s-block-circle" fill="#fcd116" d="${circlePathStart}" >
        <animate id="s-block-circle-anim" href="#s-block-circle" attributeName="d" values="
          ${circlePathStart};
          ${circlePathEnd}
        "
          begin="${circleStart};s-block-circle-anim-reverse.end+20s"
          dur="0.7s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate id="s-block-circle-anim-reverse" href="#s-block-circle" attributeName="d" values="
          ${circlePathEnd};
          ${circlePathStart}
        "
          begin="s-block-circle-anim.end +15s"
          dur="1.1s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </path>

    </svg>
  `,
};
