const iconHandStepTime = '0s';
const iconHandDuration = '0.5s';
const iconResetAndSetDuration = '0.2s';
const iconHandRepetition = '2';
const iconHandPause = '2s';

export default {
  tagName: 'hand',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    stroke() {
      return this.color;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 308 304" fill="none">
    <g class="hand-outline" id="hand-outline">
      <path id="hand-outline-outter" d="M50.5707 135.135C42.6425 127.207 29.4289 127.207 20.1793 135.135C12.2511 143.063 12.2511 156.277 20.1793 165.527L133.816 279.164C147.03 292.378 165.529 300.306 185.35 300.306C205.17 300.306 223.669 292.378 236.883 279.164L265.953 250.094C285.774 230.274 295.023 201.204 289.738 173.455L271.239 82.281C269.917 73.0314 263.31 66.4246 254.061 65.1032C242.168 62.4605 228.955 71.7101 227.633 83.6024L222.348 127.207L124.567 29.4264C116.639 21.4982 103.425 21.4982 94.1758 29.4264C86.2476 37.3546 86.2476 50.5682 94.1758 59.8178L80.9621 45.2828C73.0339 37.3546 59.8203 37.3546 50.5707 45.2828C42.6425 53.211 42.6425 66.4246 50.5707 75.6742L65.1057 90.2092C57.1775 82.281 43.9639 82.281 34.7143 90.2092C26.7861 98.1374 26.7861 111.351 34.7143 120.601L50.5707 135.135Z" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path id="hand-outline-inner-finger" d="M94.1547 59.7668L153.616 119.228" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="hand-outline-inner-finger" d="M65.1072 90.2095L125.891 149.671" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="hand-outline-inner-finger" d="M95.4982 180.062L50.5718 135.135" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g id="inner-lines">
      <path id="inner-line-top" d="M205.17 36.0347C210.456 36.0347 214.42 37.356 218.384 39.9988" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="inner-line-bottom" d="M36.0364 240.846C36.0364 255.381 47.9287 267.273 62.4637 267.273" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g id="outter-lines">
      <path id="outter-line-top" d="M211.778 3C226.313 3 239.527 8.28546 248.776 18.8564" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="outter-line-bottom" d="M3 247.452C3 276.522 26.7846 300.307 55.8546 300.307" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <animateTransform id="reset-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 15 187.5 192"
      begin="hand-rotation.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="reset-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 0 0"
      begin="hand-movement.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="pause-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192"
      begin="reset-hand-rotation.end+0s" dur="${iconHandPause}"
      additive="sum"
    />

    <animateTransform id="set-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="0 0; -5 -15"
      begin="pause-hand-rotation.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="set-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192; -17 187.5 192"
      begin="pause-hand-rotation.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 2 2; -5 -15"
      begin="0s;set-hand-rotation.end+0s" dur="${iconHandDuration}"
      repeatCount="${iconHandRepetition}"
      additive="sum"
    />

    <animateTransform id="hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 22 187.5 192; -17 187.5 192"
      begin="0s;set-hand-rotation.end+0s" dur="${iconHandDuration}"
      repeatCount="${iconHandRepetition}" additive="sum" keySplines="0.67 0.17 0.5 0.17; 0.67 0.83 0.67 0.5" calcMode="spline"
    />

    <animate id="pause-inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1"
      begin="inner-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandPause}"
    />

    <animate id="inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1; 0.8; 1"
      begin="${iconHandStepTime}; pause-inner-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandDuration}" repeatCount="${iconHandRepetition}"
    />

    <animate id="pause-outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="1"
      begin="outter-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandPause}"
    />

    <animate id="outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="0.8; 1; 0.8"
      begin="${iconHandStepTime}; pause-outter-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandDuration}" repeatCount="${iconHandRepetition}"
    />
  </svg>
  `,
};
