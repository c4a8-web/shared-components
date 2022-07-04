export default {
  tagName: 'rocket',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 210.22 222.22">
      <defs>
        <clipPath id="icon--rocket-clip-path">
          <rect class="icon--rocket-cls-1" x="-603.94" y="-277.25" width="1440" height="1430" />
        </clipPath>
        <clipPath id="icon--rocket-clip-path-2">
          <path class="icon--rocket-cls-2" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        </clipPath>
      </defs>
      <g class="icon--rocket-cls-3">
        <line class="icon--rocket-cls-4" x1="27.7" y1="17.97" x2="32" y2="34.02" />
        <line class="icon--rocket-cls-4" x1="37.87" y1="23.85" x2="21.83" y2="28.15" />
        <line class="icon--rocket-cls-5" x1="35.3" y1="110.51" x2="39.6" y2="126.55" />
        <line class="icon--rocket-cls-5" x1="45.47" y1="116.38" x2="29.43" y2="120.68" />
        <line class="icon--rocket-cls-6" x1="192" y1="85.71" x2="196.3" y2="101.76" />
        <line class="icon--rocket-cls-6" x1="202.18" y1="91.59" x2="186.13" y2="95.88" />
        <line class="icon--rocket-cls-4" x1="158.92" y1="154.76" x2="163.22" y2="170.8" />
        <line class="icon--rocket-cls-4" x1="169.09" y1="160.63" x2="153.05" y2="164.93" />
        <path class="icon--rocket-cls-4" d="M11.7,54.5A2.08,2.08,0,0,1,14.24,56" />
        <path class="icon--rocket-cls-4" d="M10.23,57.05A2.08,2.08,0,0,1,11.7,54.5" />
        <path class="icon--rocket-cls-4" d="M12.77,58.51a2.07,2.07,0,0,1-2.54-1.46" />
        <path class="icon--rocket-cls-4" d="M14.24,56a2.07,2.07,0,0,1-1.47,2.54" />
        <path class="icon--rocket-cls-6" d="M168.4,29.71a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="icon--rocket-cls-6" d="M166.93,32.25a2.08,2.08,0,0,1,1.47-2.54" />
        <path class="icon--rocket-cls-6" d="M169.48,33.72a2.08,2.08,0,0,1-2.55-1.47" />
        <path class="icon--rocket-cls-6" d="M170.94,31.18a2.08,2.08,0,0,1-1.46,2.54" />
        <path class="icon--rocket-cls-4" d="M114,147.46a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="icon--rocket-cls-4" d="M112.51,150a2.07,2.07,0,0,1,1.47-2.54" />
        <path class="icon--rocket-cls-4" d="M115.05,151.47a2.07,2.07,0,0,1-2.54-1.47" />
        <path class="icon--rocket-cls-4" d="M116.52,148.93a2.07,2.07,0,0,1-1.47,2.54" />
        <line class="icon--rocket-cls-4" x1="37.03" y1="213.21" x2="67.69" y2="160.1" />
      </g>
      <g class="icon--rocket-cls-7">
        <g class="icon--rocket-cls-3">
          <rect class="icon--rocket-cls-8" x="51.62" y="72.01" width="77.81" height="97.08"
            transform="translate(-28.12 27.54) rotate(-15)" />
        </g>
      </g>
      <g class="icon--rocket-cls-3">
        <path class="icon--rocket-cls-4" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        <path class="icon--rocket-cls-5" d="M37.37,54.07A53.64,53.64,0,0,1,83.93,67.39" />
        <path class="icon--rocket-cls-9" d="M93.23,21.91A70.24,70.24,0,0,1,101.83,54" />
        <path class="icon--rocket-cls-9" d="M124,56.64A87.79,87.79,0,0,1,158.48,8.72" />
        <path class="icon--rocket-cls-5" d="M133.42,75.62s19-9.38,34.23-.58" />
        <path class="icon--rocket-cls-10" d="M134.78,96.75a55.74,55.74,0,0,1,36.67,24.56" />
        <line class="icon--rocket-cls-4" x1="131.06" y1="114.94" x2="136.43" y2="134.99" />
        <path class="icon--rocket-cls-10" d="M62.3,99a50.37,50.37,0,0,1,19-9.39" />
      </g>
    </svg>
  `,
};
