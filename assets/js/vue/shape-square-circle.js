const circlePathStart =
  'm 201.44 355.68 c 85.57 0 155 -69.44 155 -155.08 s -69.37 -155.08 -155 -155.08 s -155 69.43 -155 155.08 s 69.37 155.08 155 155.08 z m 0 -229.32 a 74.24 74.24 0 1 1 -74.17 74.24 a 74.21 74.21 0 0 1 74.17 -74.24 z';
const circlePathEnd =
  'm 201.44 355.68 c 85.57 0 155 -69.44 155 -155.08 s -69.37 -155.08 -155 -155.08 s -155 69.43 -155 155.08 s 69.37 155.08 155 155.08 z m 0 -310 a 155 155 0 1 1 -155 155 a 155 155 0 0 1 155 -155 z';
const circleSecondStepPathStart =
  'm 201.44 355.68 c 0 0 0 0 0 -155 s 0 0 0 0 s 0 0 0 0 s 0 0 0 0 z m 0 -310 a 155 155 0 1 1 -155 155 a 155 155 0 0 1 155 -155 z';
// const defaultCircleStart = '8s'
const defaultCircleStart = '1s';
const defaultStart = '1s';
const firstStepWait = '1s';
// const firstStepDuration = '0.3s';
const secondStepWait = '1s';
// const secondStepDuration = '10.1s';

const smallCircleRadius = 70;
const smallCircleDuration = '0.8s';
const smallCircleWait = '5s';

const bigCircleRadius = 155;
const bigCircleDuration = '0.8s';
const bigCircleWait = '0.1s';

const tagName = 'shape-square-circle';
// const keySplines = '0.19 1 0.2 1';

// TODO refactor for a single step sequence
// do this then wait then do this then do that

const smallCircleData = () => {
  const id = tagName + '__small-circle';
  const name = id + '-anim';

  return {
    id,
    name,
  };
};

const bigCircleData = () => {
  const id = tagName + '__big-circle';
  const name = id + '-anim';

  return {
    id,
    name,
  };
};

export default {
  tagName: tagName,
  computed: {
    classList() {
      return ['shape-square-circle', 'vue-component'];
    },
    begin() {
      return this.start ? this.start : defaultStart;
    },
    // circleStart() {
    //   return this.start ? this.start : defaultCircleStart;
    // },
    rectColor() {
      return this.backgroundColor ? this.backgroundColor : '#673ab7';
    },
    pathColor() {
      return this.circleColor ? this.circleColor : '#fcd116';
    },
    // animationFirstStepName() {
    //   return tagName + '__anim';
    // },
    // animationSecondStepName() {
    //   return this.animationFirstStepName + '--reverse';
    // },
    // id() {
    //   return tagName + '-id';
    // },
    bigCircleId() {
      return tagName + '__big-circle-id';
    },
    bigCircleReference() {
      return '#' + this.bigCircleId;
    },
    bigCircleBegin() {
      return `${this.smallCircleAnimationName}.end+${bigCircleWait}`;
    },
    bigCircleAnimationName() {
      return this.bigCircleId + '-anim';
    },
    smallCircleId() {
      return tagName + '__small-circle-id';
    },
    smallCircleReference() {
      return '#' + this.smallCircleId;
    },
    smallCircleBegin() {
      return `${this.begin};${this.bigCircleAnimationName}.end+${smallCircleWait}`;
    },
    smallCircleAnimationName() {
      return this.smallCircleId + '-anim';
    },
    bigCircle() {
      const { id, name } = bigCircleData();
      const smallCircle = smallCircleData();

      // TODO make just a big list of steps one by one

      return {
        id,
        ref: `#${id}`,
        step: [
          {
            begin: `${smallCircle.name}.end+0.01s`,
            name,
          },
          {
            begin: `${smallCircle.name}2.end+0.01s`,
            name: name + '2',
          },
        ],
      };
    },
    smallCircle() {
      // const id = tagName + '__small-circle';
      // const name = id + '-anim';

      const { id, name } = smallCircleData();
      const bigCircle = bigCircleData();

      return {
        id,
        ref: `#${id}`,
        step: [
          {
            begin: `${this.begin};${bigCircle.name}2.end+20s`,
            name,
          },
          {
            begin: `${bigCircle.name}.end+0.1s`,
            name: name + '2',
          },
          {
            begin: `${bigCircle.name}.end+0.8s`,
            name: name + '3',
          },
        ],
      };
    },
    // idReference() {
    //   return '#' + this.id;
    // },
    // firstStepBegin() {
    //   return `${this.circleStart};${this.animationSecondStepName}.end+${firstStepWait}`;
    // },
    // secondStepBegin() {
    //   return `${this.animationFirstStepName}.end+${secondStepWait}`;
    // },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
  },
  methods: {},
  props: {
    backgroundColor: String,
    circleColor: String,
    start: String,
  },
  template: `
    <g :class="classList">
      <clipPath id="${tagName}__clip-path">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g style="clip-path: url(#${tagName}__clip-path);">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <circle :fill="pathColor" :id="bigCircle.id" cx="200" cy="200" r="${bigCircleRadius}">
          <animate
            :id="bigCircle.step[0].name"
            :href="bigCircle.ref"
            attributeName="r"
            from="${bigCircleRadius}"
            :to="0"
            :begin="bigCircle.step[0].begin"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="bigCircle.step[1].name"
            :href="bigCircle.ref"
            attributeName="r"
            from="0"
            to="${bigCircleRadius}"
            :begin="bigCircle.step[1].begin"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${bigCircleRadius / 1.1};${bigCircleRadius / 1.15};${bigCircleRadius / 1.1};${bigCircleRadius}"
          />
        </circle>
        <circle :fill="rectColor" aafill="#ff0000" :id="smallCircle.id" cx="200" cy="200" r="${smallCircleRadius}">
          <animate
            :id="smallCircle.step[0].name"
            :href="smallCircle.ref"
            attributeName="r"
            from="${smallCircleRadius}"
            :to="width"

            to="200"
            :begin="smallCircle.step[0].begin"
            dur="${smallCircleDuration}"
            fill="freeze"
          />
          <animate
            :id="smallCircle.step[1].name"
            :href="smallCircle.ref"
            aaattributeName="fill"
            aafrom="#ff0000"
            aato="#00ff00"
            aadur="2s"
            attributeName="r"
            :from="width"
            to="0"
            :begin="smallCircle.step[1].begin"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="smallCircle.step[2].name"
            :href="smallCircle.ref"
            attributeName="r"
            from="0"
            to="${smallCircleRadius}"
            :begin="smallCircle.step[2].begin"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${smallCircleRadius / 1.1};${smallCircleRadius / 1.15};${
    smallCircleRadius / 1.1
  };${smallCircleRadius}"
            ddcalcMode="spline"
            aaakeySplines="0.68 1 0.68 1"
          />
        </circle>
      </g>
    </g>`,
};
