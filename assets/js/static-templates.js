// NOTICE do not edit in this file. always copy from the correct template file

const icon = `<!-- Shared Icon Section -->
{% assign iconIcon = include.icon | default: 'close' -%}
{%- assign iconColor = include.color | default: 'currentColor' -%}
{%- assign iconDirection = include.direction | default: 'right' -%}
{%- assign iconSize = include.size | default: 'large' -%}
{%- assign iconCircle = include.circle  -%}
{%- assign iconHover = include.hover -%}
{%- assign iconPadding = include.padding | default: 6 -%}
{%- assign iconAnimation = include.animation -%}

{%- capture rotation -%}
  {% if iconDirection == 'left' %}180deg{% else %}0deg{% endif %}
{%- endcapture -%}

{%- capture iconInnerSize -%}
  {% if iconSize == 'small' %}18px{% elsif iconSize == 'large' %}48px{% elsif iconSize == 'xl' %}120px{% elsif iconSize == 'xxl' %}200px{% else %}28px{% endif %}
{%- endcapture -%}

<span class="icon icon--{{ iconDirection }} icon--{{ iconIcon }}
            {% if iconAnimation %}js-text-animation__icon{% endif %}
            {% if iconCircle %}icon--circle{% endif %}
            {% if iconHover %}icon--hover{% endif %}" style="--color-icon: {{ iconColor }}; --icon-rotation: {{ rotation }}">
  {% if iconIcon == 'close' %}
    {%- assign iconCloseSize = 48 -%}
    {%- assign iconCloseOuterPos = iconCloseSize | minus: iconPadding -%}
    <svg style="stroke: {{ iconColor }}; transform: rotate(var(--icon-rotation));" width="{{ iconInnerSize }}" height="{{ iconInnerSize }}" viewBox="0 0 {{ iconCloseSize }} {{ iconCloseSize }}" style="enable-background:new 0 0 {{ iconCloseSize }} {{ iconCloseSize }};" xml:space="preserve"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" x1="{{ iconCloseOuterPos }}" y1="{{ iconPadding }}" x2="{{ iconPadding }}" y2="{{ iconCloseOuterPos }}"/>
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" x1="{{ iconCloseOuterPos }}" y1="{{ iconCloseOuterPos }}" x2="{{ iconPadding }}" y2="{{ iconPadding }}"/>
    </svg>
  {%- elsif iconIcon == 'rocket' -%}
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{{ iconInnerSize }}" height="{{ iconInnerSize }}"
      viewBox="0 0 210.22 222.22">
      <defs>
        <style>
          .rocket-cls-1,
          .rocket-cls-10,
          .rocket-cls-2,
          .rocket-cls-4,
          .rocket-cls-5,
          .rocket-cls-6,
          .rocket-cls-9 {
            fill: none;
          }

          .rocket-cls-2 {
            clip-rule: evenodd;
          }

          .rocket-cls-3 {
            clip-path: url(#clip-path);
          }

          .rocket-cls-4 {
            stroke: #000;
          }

          .rocket-cls-10,
          .rocket-cls-4,
          .rocket-cls-5,
          .rocket-cls-6,
          .rocket-cls-9 {
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 3px;
          }

          .rocket-cls-5 {
            stroke: #533e8e;
          }

          .rocket-cls-6 {
            stroke: #ef8331;
          }

          .rocket-cls-7 {
            clip-path: url(#clip-path-2);
          }

          .rocket-cls-8 {
            fill: #72b4df;
          }

          .rocket-cls-9 {
            stroke: #008186;
          }

          .rocket-cls-10 {
            stroke: #fdd117;
          }
        </style>
        <clipPath id="clip-path">
          <rect class="rocket-cls-1" x="-603.94" y="-277.25" width="1440" height="1430" />
        </clipPath>
        <clipPath id="clip-path-2">
          <path class="rocket-cls-2" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        </clipPath>
      </defs>
      <g class="rocket-cls-3">
        <line class="rocket-cls-4" x1="27.7" y1="17.97" x2="32" y2="34.02" />
        <line class="rocket-cls-4" x1="37.87" y1="23.85" x2="21.83" y2="28.15" />
        <line class="rocket-cls-5" x1="35.3" y1="110.51" x2="39.6" y2="126.55" />
        <line class="rocket-cls-5" x1="45.47" y1="116.38" x2="29.43" y2="120.68" />
        <line class="rocket-cls-6" x1="192" y1="85.71" x2="196.3" y2="101.76" />
        <line class="rocket-cls-6" x1="202.18" y1="91.59" x2="186.13" y2="95.88" />
        <line class="rocket-cls-4" x1="158.92" y1="154.76" x2="163.22" y2="170.8" />
        <line class="rocket-cls-4" x1="169.09" y1="160.63" x2="153.05" y2="164.93" />
        <path class="rocket-cls-4" d="M11.7,54.5A2.08,2.08,0,0,1,14.24,56" />
        <path class="rocket-cls-4" d="M10.23,57.05A2.08,2.08,0,0,1,11.7,54.5" />
        <path class="rocket-cls-4" d="M12.77,58.51a2.07,2.07,0,0,1-2.54-1.46" />
        <path class="rocket-cls-4" d="M14.24,56a2.07,2.07,0,0,1-1.47,2.54" />
        <path class="rocket-cls-6" d="M168.4,29.71a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="rocket-cls-6" d="M166.93,32.25a2.08,2.08,0,0,1,1.47-2.54" />
        <path class="rocket-cls-6" d="M169.48,33.72a2.08,2.08,0,0,1-2.55-1.47" />
        <path class="rocket-cls-6" d="M170.94,31.18a2.08,2.08,0,0,1-1.46,2.54" />
        <path class="rocket-cls-4" d="M114,147.46a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="rocket-cls-4" d="M112.51,150a2.07,2.07,0,0,1,1.47-2.54" />
        <path class="rocket-cls-4" d="M115.05,151.47a2.07,2.07,0,0,1-2.54-1.47" />
        <path class="rocket-cls-4" d="M116.52,148.93a2.07,2.07,0,0,1-1.47,2.54" />
        <line class="rocket-cls-4" x1="37.03" y1="213.21" x2="67.69" y2="160.1" />
      </g>
      <g class="rocket-cls-7">
        <g class="rocket-cls-3">
          <rect class="rocket-cls-8" x="51.62" y="72.01" width="77.81" height="97.08"
            transform="translate(-28.12 27.54) rotate(-15)" />
        </g>
      </g>
      <g class="rocket-cls-3">
        <path class="rocket-cls-4" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        <path class="rocket-cls-5" d="M37.37,54.07A53.64,53.64,0,0,1,83.93,67.39" />
        <path class="rocket-cls-9" d="M93.23,21.91A70.24,70.24,0,0,1,101.83,54" />
        <path class="rocket-cls-9" d="M124,56.64A87.79,87.79,0,0,1,158.48,8.72" />
        <path class="rocket-cls-5" d="M133.42,75.62s19-9.38,34.23-.58" />
        <path class="rocket-cls-10" d="M134.78,96.75a55.74,55.74,0,0,1,36.67,24.56" />
        <line class="rocket-cls-4" x1="131.06" y1="114.94" x2="136.43" y2="134.99" />
        <path class="rocket-cls-10" d="M62.3,99a50.37,50.37,0,0,1,19-9.39" />
      </g>
    </svg>
  {%- elsif iconIcon == 'smile' -%}
    {% assign iconSmileStep1Time = '200s' %}
    {% assign iconSmileStep2Time = '300s' %}
    {% assign iconSmileStep3Time = '400s' %}

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{{ iconInnerSize }}" height="{{ iconInnerSize }}"
      viewBox="0 0 371.78 342.67">
      <defs>
        <clipPath id="clip-path-smile">
          <rect x="-999.96" y="-267.47" width="1440" height="1315" fill="none" />
        </clipPath>
      </defs>
      <g style="clip-path: url(#clip-path-smile);">
        <g transform="translate(20,0)">
          <path id="smile-left-eye" class="left-eye" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M92.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59" />
          <path id="smile-left-eyebrow" class="left-eyebrow" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M131.55,81.59a53.31,53.31,0,0,0-58,27.83" />
          <path id="smile-right-eyebrow" class="right-eyebrow" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M212.55,102.49a53.23,53.23,0,0,1,53,26.93" />
          <path id="smile-right-eye" class="right-eye" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M250,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59" />
          <path id="smile-mouth" class="mouth" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M85,221.75a93.26,93.26,0,0,0,172.17,0" />
          <path id="mouth-upper" class="mouth-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M247,207A69,36,0,0,1,140,206" />
          <path id="smile-circle" class="circle" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M170.12,335.42a165,165,0,1,1,0.1,0" />
          <path id="hand" class="hand" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M72.55,308.07l44.86-15.78-5-35.5a14.32,14.32,0,1,1,28.36-4l5,35.5,96.32-29.75a14.32,14.32,0,0,1,17.76,9.75,13.42,13.42,0,0,1,.43,2l.13.94a14.35,14.35,0,0,1-8.78,15.31l-31.91,11.91L220,298.36a30.7,50.7,0,0,1-.42,33.06" />
        </g>
        <g style="transform: scale(0.9) translate(-5px,-25px);">
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M36.21,271.8,26,240.85a24.5,24.5,0,0,1,46.57-15.21L82.8,256.59" />
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M135.41,258.76l-.14-.44a18.21,18.21,0,0,0-23-11.61l-27.65,9.13-11.33,3.7L53.63,266a59.16,59.16,0,0,0-37.9,74.57l9,27.46a59.28,59.28,0,0,0,74.74,37.82l19.71-6.42,39.07-12.75a18.19,18.19,0,0,0,11.63-22.94l-.15-.42a18.18,18.18,0,0,0-22.95-11.63,18.18,18.18,0,0,0,11.62-22.93l-.14-.44a18.2,18.2,0,0,0-23-11.61A18.16,18.16,0,0,0,147,293.78l-.2-.48a18.23,18.23,0,0,0-23-11.62,18.16,18.16,0,0,0,11.63-22.92Z"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M84.8,256.79l27.86-9.08a18.34,18.34,0,0,1,23.11,11.65l.15.44a18.21,18.21,0,0,1-11.79,22.92L96.27,291.8"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M95.8,290.76l27.84-9.05a18.35,18.35,0,0,1,23.1,11.61l.14.44a18,18,0,0,1-1,13.91,18.24,18.24,0,0,1-10.66,9.07l-27.82,9.06"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M106.8,325.77l27.83-9.06a18.34,18.34,0,0,1,23.12,11.63l.14.43a18.17,18.17,0,0,1-11.7,23l-27.86,9.08"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M118.8,360.78l27.85-9.08a18.34,18.34,0,0,1,23.1,11.65l.14.42a18.2,18.2,0,0,1-11.7,23l-27.85,9.06"></path>
        </g>
        <animate class="js-text-animation__step-1" href="#smile-mouth" attributeName="d" values="
          M85,221.75a93.26,93.26,0,0,0,172.17,0;
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16
        "
          begin="{{ iconSmileStep1Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" href="#smile-left-eye" attributeName="d" values="
          M92.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="{{ iconSmileStep1Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" href="#smile-right-eye" attributeName="d" values="
          M250,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="{{ iconSmileStep1Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" href="#smile-circle" attributeName="d" values="
          M170.12,335.42a165,165,0,1,1,0.1,0;
          M44.12,277.42a165,165,0,1,1,254.87,0
        "
          begin="{{ iconSmileStep1Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" href="#smile-mouth" attributeName="d" values="
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16;
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0
        "
          begin="{{ iconSmileStep2Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" href="#smile-left-eye" attributeName="d" values="
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M127.13,129.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="{{ iconSmileStep2Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" href="#smile-right-eye" attributeName="d" values="
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M265,129.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="{{ iconSmileStep2Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" href="#smile-mouth" attributeName="d" values="
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0;
          M85,221.75a93.26,93.26,0,0,0,172.17,0
        "
          begin="{{ iconSmileStep3Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" href="#smile-left-eyebrow" attributeName="d" values="
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0;
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0
        "
          begin="{{ iconSmileStep3Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" href="#smile-right-eyebrow" attributeName="d" values="
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0;
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0
        "
          begin="{{ iconSmileStep3Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" href="#smile-circle" attributeName="d" values="
          M44.12,277.42a165,165,0,1,1,254.87,0;
          M170.12,335.42a165,165,0,1,1,0.1,0
        "
          begin="{{ iconSmileStep1Time }}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </g>
    </svg>
  {%- elsif iconIcon == 'arrow' -%}
    <svg style="stroke: {{ iconColor }}; transform: rotate(var(--icon-rotation));" width="{{ iconInnerSize }}" height="{{ iconInnerSize }}" viewbox="0 0 28 17" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0.75 0.75)">
        <path d="M0.5 0.5L26 0.5" transform="translate(0 7)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M0 15L7 7.5L0 0" transform="translate(19 0)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  {%- elsif iconIcon == 'phone-mail' -%}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.9 44.2" style="fill: {{ iconColor }}; transform: rotate(var(--icon-rotation));" width="{{ iconInnerSize }}"
    height="{{ iconInnerSize }}" >
      <path fill="none"
        d="M25.8,15.5H5.6c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h30c0.8,0,1.5-0.7,1.5-1.5L37,31v-0.7
                  L25.8,15.5z M13.2,30.2l-5.5,2.7C7.7,32.9,7.5,33,7.4,33c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.3-0.1-0.7,0.2-0.9c0,0,0.1,0,0.1-0.1
                  l5.5-2.7c0.4-0.2,0.8-0.1,1.1,0.2C13.7,29.6,13.6,30,13.2,30.2C13.3,30.2,13.3,30.2,13.2,30.2z M27.7,29.8c-0.1-0.2,0-0.4,0.1-0.5
                  c0.2-0.2,0.4-0.3,0.7-0.3c0.1,0,0.3,0,0.4,0.1l5.4,2.7c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.2,0,0.4-0.1,0.5c-0.2,0.2-0.4,0.3-0.7,0.3
                  c-0.1,0-0.3,0-0.4-0.1L28,30.2C27.8,30.1,27.7,30,27.7,29.8z M30.7,23l-9.2,5.9c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1
                  L8,21.2c-0.2-0.1-0.3-0.3-0.3-0.4c0-0.2,0-0.4,0.1-0.5C7.9,20.1,8.2,20,8.4,20c0.1,0,0.3,0,0.4,0.1l12.3,7.4l8.8-5.7L30.7,23z" />
      <path fill="none" d="M41.9,32.4c0.6,0.5,1.3,0.9,2.1,1c1.1,0.2,2.2-0.1,3.1-0.7l2.2-1.5c1.1-0.8,1.4-2.4,0.6-3.5c0,0,0,0,0,0l-2.8-4
                  c-0.4-0.5-1-0.9-1.6-1c-0.7-0.1-1.3,0-1.9,0.4l-1.3,0.9c-0.2,0.1-0.3,0.2-0.5,0.1c-0.2,0-0.3-0.1-0.4-0.2c-3.2-3.8-6.1-7.9-8.5-12.2
                  c-0.2-0.3-0.1-0.7,0.2-0.9l1.3-0.9c1.1-0.8,1.4-2.4,0.6-3.5c0,0,0,0,0,0l-2.8-3.9c-0.4-0.5-1-0.9-1.6-1c-0.7-0.1-1.3,0-1.9,0.4
                  l-2.2,1.5c-1.6,1.1-2.2,3.2-1.4,5C29,17.4,34.7,25.6,41.9,32.4z" />
      <path fill="none" d="M25.4,15.5h0.4L37,30.4v0.7l1.6,1.6v-0.6L25,13.9h-0.2c0,0.1,0,0.2,0,0.2L25.4,15.5z" />
      <path fill="none" d="M2.6,35v3h3C4,38,2.6,36.6,2.6,35L2.6,35z" />
      <path fill="none" d="M2.6,17c0-1.7,1.3-3,3-3l0,0l19.2-0.1H25l13.6,18.2V35c0,1.7-1.3,3-3,3h23V-1h-56L2.6,17z M25.7,2.2l2.2-1.5
                  c1.8-1.2,4.2-0.8,5.4,1l2.8,4c1.2,1.8,0.8,4.2-1,5.4l-0.8,0.6c2.2,3.9,4.8,7.6,7.7,11l0.8-0.6c0.8-0.6,1.9-0.9,3-0.8
                  c1,0.2,1.9,0.8,2.5,1.6l2.8,3.9c1.2,1.8,0.8,4.2-1,5.5c0,0,0,0,0,0l-2.1,1.5c-2.2,1.5-5.1,1.3-7-0.5C33.6,26.5,27.8,18.2,23.8,9
                  C22.7,6.5,23.5,3.7,25.7,2.2z" />
      <path fill="none" d="M-44.4-45V88h140V-45H-44.4z M78.6,60h-96v-79h96V60z" />
      <path fill="none" d="M-17.4,60h96v-79h-96L-17.4,60z M58.6-1v39h-56V-1H58.6z" />
      <path d="M24.6,13.9L5.6,14c-1.7,0-3,1.3-3,3v18c0,1.7,1.3,3,3,3h30c1.7,0,3-1.3,3-3v-2.3L37,31.1l0.1,3.9
                  c0,0.8-0.7,1.5-1.5,1.5h-30c-0.8,0-1.5-0.7-1.5-1.5V17c0-0.8,0.7-1.5,1.5-1.5h19.8" />
      <path d="M21.1,27.5L8.8,20.1C8.7,20,8.5,20,8.4,20c-0.2,0-0.5,0.1-0.6,0.3c-0.1,0.2-0.1,0.3-0.1,0.5
                  c0,0.2,0.2,0.3,0.3,0.4l12.8,7.6c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l9-5.8l-0.8-1.2L21.1,27.5z" />
      <path
        d="M13.5,29.3c-0.2-0.3-0.7-0.4-1.1-0.2L7,31.7c-0.3,0.1-0.5,0.5-0.3,0.8c0,0,0,0.1,0.1,0.1
                  C6.9,32.9,7.1,33,7.4,33c0.1,0,0.3,0,0.4-0.1l5.4-2.7c0.3-0.1,0.5-0.5,0.4-0.8C13.6,29.4,13.6,29.3,13.5,29.3z" />
      <path d="M28,30.2l5.5,2.7c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.1-0.3,0.1-0.5
                  c-0.1-0.2-0.2-0.3-0.4-0.4l-5.4-2.7C28.7,29,28.5,29,28.4,29c-0.3,0-0.5,0.1-0.7,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
                  C27.7,30,27.8,30.1,28,30.2z" />
      <path d="M40.9,33.4c1.9,1.8,4.8,2,7,0.5l2.1-1.5c1.8-1.2,2.2-3.7,1-5.4l-2.8-4c-0.6-0.9-1.5-1.4-2.5-1.6
                  c-1-0.2-2.1,0-2.9,0.6L42,22.6c-2.9-3.4-5.4-7.1-7.7-11l0.8-0.6c1.8-1.2,2.2-3.7,1-5.4l-2.8-3.9c-1.2-1.8-3.7-2.2-5.4-1l-2.2,1.6
                  c-2.1,1.5-2.9,4.3-1.9,6.7C27.8,18.2,33.6,26.5,40.9,33.4z M26.5,3.4l2.2-1.5c0.5-0.4,1.2-0.5,1.9-0.4c0.7,0.1,1.2,0.5,1.6,1
                  l2.8,3.9c0.8,1.1,0.5,2.7-0.6,3.5c0,0,0,0,0,0l-1.3,1c-0.3,0.2-0.4,0.6-0.2,0.9c2.4,4.3,5.3,8.4,8.5,12.2c0.1,0.1,0.3,0.2,0.4,0.2
                  c0.2,0,0.4,0,0.5-0.1l1.3-0.9c0.5-0.4,1.2-0.5,1.9-0.4c0.7,0.1,1.2,0.5,1.6,1l2.8,4c0.8,1.1,0.5,2.7-0.6,3.5c0,0,0,0,0,0l-2.2,1.5
                  c-0.9,0.6-2,0.9-3.1,0.7c-0.8-0.1-1.5-0.5-2.1-1c-7.1-6.8-12.9-15-16.8-24C24.3,6.6,24.9,4.5,26.5,3.4z" />
    </svg>
  {%- elsif iconIcon == 'arrow-narrow' -%}
    <svg style="stroke: {{ iconColor }}; transform: rotate(var(--icon-rotation));" width="{{ iconInnerSize }}"
      height="{{ iconInnerSize }}" viewBox="0 0 19.74 69.3" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg">
      <polyline class="cls-1ddd" fill="none" stroke-width="3px" stroke-linecap="round" stroke-miterlimit="10" points="1.62 1.62 17.91 34.62 1.62 67.62" />
    </svg>
  {%- elsif iconIcon == 'computer-shield' -%}
    <svg style="stroke: {{ iconColor }}" width="{{ iconInnerSize }}" height="{{ iconInnerSize }}" viewBox="0 0 28 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-286.000000, -596.000000)">
          <g transform="translate(120.000000, 564.000000)">
            <g transform="translate(166.995621, 33.000000)">
              <path
                d="M21.0044136,7.99696471 L21.0044136,2.47375743 C21.0072481,1.94643087 20.6570661,1.468542 20.1146962,1.25964335 C17.6802651,0.444696877 15.1042558,0.0183213697 12.5043788,0 C9.90429886,0.0192923452 7.32828319,0.446696323 4.89406129,1.26267864 C4.3516914,1.47157728 4.00150939,1.94946616 4.00439648,2.47679272 L4.00421285,7"
                id="Path" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M6.00437876,16 C7.99128312,18.5570825 11.1446288,20 12.5043788,20 C13.8641287,20 17.0174744,18.5570825 19.0043788,16"
                id="Path" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M4.00437876,12 C3.81134242,13.593127 2.18171535,15.5806978 1.17121992,15.9606135 C1.08113014,15.9953185 1.01663477,16.0874351 1.00593652,16.1966824 C0.995238278,16.3059297 -0.0767125292,15.942815 0.00437876214,16 L2.00437876,18 L1.00437876,20 C0.963356109,20.0945274 2.27873674,19.8017021 2.33315117,19.8866815 C2.3875656,19.9716609 0.914354759,20.0180016 1.00437876,20 C2.24694081,19.8329143 5.99508794,17.8557747 7.00437876,17 L4.00437876,12 Z"
                id="Path" fill="#FCD116"></path>
              <path
                d="M3.51718325,13 C3.32414691,14.593127 1.18171535,15.5806978 0.171219921,15.9606135 C0.0811301363,15.9953185 0.0166347678,16.0874351 0.00593652312,16.1966824 C-0.00476172158,16.3059297 0.0402835633,16.4124316 0.121374855,16.4696165 L2.07439516,17.8266081 L1.31131252,19.5939506 C1.27028987,19.688478 1.27873674,19.8017021 1.33315117,19.8866815 C1.3875656,19.9716609 1.47867031,20.0139072 1.56869431,19.9959055 C2.81125636,19.8288199 3.99508794,19.2910874 5.00437876,18.4353127"
                id="Path-Copy-3" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M22.0043788,12 C22.1974151,13.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 21.013589,17.8559443 20.0043788,17"
                id="Path-Copy-2" fill="#FCD116"></path>
              <path
                d="M22.4915743,13 C22.6846106,14.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 22.013589,19.291257 21.0043788,18.4353127"
                id="Path" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z"
                id="Path" fill="#FCD116"></path>
              <path
                d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z"
                id="Path-Copy" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>

  {%- elsif iconIcon == 'arrow-external' -%}
    <svg style="stroke: {{ iconColor }}; transform: rotate(var(--icon-rotation));" width="{{ iconInnerSize }}"
      height="{{ iconInnerSize }}" viewBox="0 0 34 34" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M33.23,2.39,1.79,33.79" transform="translate(-0.79 -0.79)"
        style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"></path>
      <path d="M33.79,33.79v-30a2,2,0,0,0-2-2h-30" transform="translate(-0.79 -0.79)"
        style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"></path>
    </svg>
  {%- endif %}
</span>
<!-- End Shared Icon Section -->
`;

const jobListDetail = `<!-- Shared Job List Detail Section -->
{%- assign jobListDetailColor = include.detailColor | default: '--color-job-list-detail' -%}
{%- assign jobListDetailClientName = include.clientName -%}
{%- assign jobListDetailJobId = include.jobId -%}
{%- assign jobListDetailApiUrl = include.apiUrl -%}
{%- assign jobListDetailBase = include.base -%}
{%- assign jobListDetailTitle = include.title -%}
{%- assign jobListDetailHeadlineLevel = include.headlineLevel -%}
{%- assign jobListDetailHeadlineClasses = include.headlineClasses -%}
{%- assign jobListDetailGender = include.gender -%}
{%- assign jobListDetailCtaText = include.ctaText -%}
{%- assign jobListDetailCtaButton = include.ctaButton -%}
{%- assign jobListDetailDescription = include.description -%}
{%- assign jobListDetailForm = include.form %}
{%- assign jobListDetailPersonQuote = include.personQuote %}
{%- assign jobListDetailGoogleMaps = include.googleMaps %}
{%- assign jobListDetailModalSuccess = include.modalSuccess %}

<div class="job-list__detail page-detail is-loading"
  style="--page-detail-color: var({{ jobListDetailColor }}); --color-icon-hover-color: var(--page-detail-color)"
  data-id="{{ jobListDetailClientName }}" {% if jobListDetailJobId %}data-job-id="{{ jobListDetailJobId }}" {% endif %}
  {% if jobListDetailApiUrl %}data-api-url="{{ jobListDetailApiUrl }}" {% endif %} {% if jobListDetailBase
  %}data-base='{{ jobListDetailBase | jsonify }}' {% endif %}>
  <div class="job-list__detail-container page-detail__container container">
    <div class="job-list__detail-start page-detail__start row">
      <div class="job-list__sticky-start page-detail__sticky-start col-md-11 col-lg-5">
        <div class="job-list__detail-intro page-detail__intro js-sticky-block"
          data-hs-sticky-block-options='{
            "parentSelector": ".job-list__sticky-start",
            "breakpoint": "lg",
            "startPoint": ".job-list__sticky-start",
            "endPoint": ".job-list__sticky-end",
            "stickyOffsetTop": 200,
            "stickyOffsetBottom": 20
          }'
        >
          <div class="job-list__detail-back page-detail__back page-detail__animation-3 back back--animated">
            {%
              include icon.html
              icon='arrow'
              direction="left"
              hover=true
              circle=true
            %}
          </div>
          {%- assign headlineLevel = jobListDetailHeadlineLevel | default: 'h1' -%}
          {%- capture headlineClasses -%}job-list__detail-headline page-detail__headline {{ jobListDetailHeadlineClasses }}{%- endcapture -%}
          {%
            include headline.html
            text=jobListDetailTitle
            level=headlineLevel
            classes=headlineClasses
          %}
          <span class="job-list__detail-gender">{{ jobListDetailGender }}</span>
          <div class="job-list__detail-share">
            {% comment %}TODO share bar{% endcomment %}
          </div>
          <div class="job-list__detail-cta">
            {%
              include cta.html
              text=jobListDetailCtaText
              button=jobListDetailCtaButton
            %}
          </div>
        </div>
      </div>
      <div class="job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
        {% comment %}job list detail can switch to profile based on url parameter{% endcomment %}
        <div class="job-list__detail-description page-detail__description richtext">
          {{ jobListDetailDescription }}
        </div>
        {% if jobListDetailPersonQuote %}
        <div class="job-list__detail-quote">
          {%
            include person-quote.html
            img=jobListDetailPersonQuote.img
            text=jobListDetailPersonQuote.text
            name=jobListDetailPersonQuote.name
          %}
        </div>
        <div class="job-list__detail-maps">
          {%
            include google-maps.html
            headline=jobListDetailGoogleMaps.headline
            address=jobListDetailGoogleMaps.address
            coords=jobListDetailGoogleMaps.coords
            marker=jobListDetailGoogleMaps.marker
          %}
        </div>
        {% endif %}
      </div>
    </div>
  </div>
  <div class="job-list__sticky-end"></div>

  {%
    include modal.html
    form=jobListDetailForm
    success=jobListDetailModalSuccess
    application=true
    clientName=jobListDetailClientName
    apiUrl=jobListDetailApiUrl
    jobId=jobListDetailJobId
  %}

</div>
<!-- End Shared Job List Detail Section -->
`;

const cta = `{% comment %}
NOTICE ! There is a static version of this file in static-templates.js so if you update this file update the static version as well ! NOTICE
{% endcomment %}
<!-- Shared Cta Section -->
{% assign ctaText = include.text %}
{% assign ctaAnalytics = include.analytics | default: false %}
{% assign ctaLink = include.link %}
{% assign ctaSkin = include.skin %}
{% assign ctaWidth = include.width %}
{% assign ctaGrow = include.grow %}
{% assign ctaHref = include.href %}
{% assign ctaTarget = include.target %}
{% assign ctaButton = include.button %}
{% assign ctaAlternativeHref = include.alternativeHref %}
{% assign ctaType = include.type %}
{% assign ctaTrigger = include.trigger %}
{%- assign ctaExternal = include.external -%}

{%- if ctaAnalytics -%}
{%- capture analytics -%}data-analytics="{{ ctaAnalytics }}"{%- endcapture -%}
{%- else -%}
{%- assign analytics = '' -%}
{%- endif -%}

{% capture ctaIconBox %}
{% if ctaLink or ctaExternal %}
{% if ctaLink %}
{% assign ctaIcon = 'arrow' %}
{% else %}
{% assign ctaIcon = 'arrow-external' %}
{% endif %}
{%
include icon.html
icon=ctaIcon
%}
{% endif %}
{% endcapture %}

{% if ctaLink %}
{% capture innerSkin %}{% if ctaSkin %}{{ ctaSkin }}{% endif %}{% endcapture %}
{% assign baseClass = "link" %}
{% else %}
{% capture ctaInnerWidth %}{% if ctaWidth %}{{ ctaWidth }}{% else %}w-100{% unless ctaGrow == true %} w-lg-auto{% endunless %}{% endif %}{% endcapture %}
{% capture innerSkin %}{% if ctaSkin %}btn-{{ ctaSkin }}{% else %}btn-primary{% endif %}{% endcapture %}
{% capture baseClass %}btn {{ ctaInnerWidth }}{% endcapture %}
{% endif %}

{% if ctaExternal %}
{% capture baseClass %}{{ baseClass }} cta--external{% endcapture %}
{% endif %}

{% if ctaButton %}
<button class="cta {{ baseClass }} {{ innerSkin }}" role="button" type="{{ ctaType }}" data-text="{{ ctaText }}" {{ analytics }} {% if ctaTrigger %}data-trigger="{{ ctaTrigger }}"{% endif %}>
{{ ctaText }}
{{ ctaIconBox }}
</button>
{% else %}
<a class="cta {{ baseClass }} {{ innerSkin }}"
role="button"
href="{{ ctaHref }}"
data-text="{{ ctaText }}"
{{ analytics }}
{% if ctaTarget %}target="{{ ctaTarget }}"{% endif %}
{% if ctaAlternativeHref %}data-alternative-href="{{ ctaAlternativeHref }}"{% endif %}
>
{{ ctaText }}
{{ ctaIconBox }}
</a>
{% endif %}
<!-- End Shared Cta Section -->
`;

const modal = `<!-- Shared Modal Section -->
{%- assign modalForm = include.form -%}
{%- assign modalSuccess = include.success -%}
{%- assign modalApplication = include.application -%}
{%- assign modalClientName = include.clientName -%}
{%- assign modalApiUrl = include.apiUrl -%}
{%- assign modalJobId = include.jobId -%}

<div class="modal fade" tabindex="-1" aria-hidden="true" style="--color-icon-hover-color: var(--color-white)"
  {% if modalClientName %}data-client-name="{{ modalClientName }}" {% endif %}
  {% if modalApiUrl %}data-api-url="{{ modalApiUrl }}" {% endif %}
  {% if modalJobId %}data-job-id="{{ modalJobId }}" {% endif %}
>
  <div class="modal-dialog modal-xl">
    <div class="modal__content">
      <div class="modal__header">
        <div class="modal__close">
          {%
            include icon.html
            icon='close'
            hover=true
            circle=true
          %}
        </div>
      </div>
      <div class="modal__body">
        {% if modalApplication %}
          {%
            include modal-application.html
            form=modalForm
            success=modalSuccess
          %}
        {% endif %}
      </div>
    </div>
  </div>
</div>
<!-- End Shared Modal Section -->
`;

const headline = `<!-- Shared Headline Section -->
{%- assign headlineClasses = include.classes | default: classes -%}
{%- assign headlineLevel = include.level | default: level | default: 'h2' -%}
{%- assign headlineText = include.text | default: text -%}

{% comment %}
TODO check if we need this headlineLevel-font-size class still or not
{% endcomment %}
{%- capture classList %}{{ headlineClasses }} {{ headlineLevel }}-font-size{% endcapture -%}

<{{ headlineLevel }} {% if classList %}class="{{ classList }}"{% endif %}>
  {{ headlineText }}
</{{ headlineLevel }}>
<!-- Shared End Headline Section -->
`;

const modalApplication = `<!-- Shared Modal Application Section -->
{%- assign modalApplicationForm = include.form -%}
{%- assign modalApplicationSuccess = include.success -%}

<div class="modal__application">
  <div class="modal__body-default">
    {%
      include form.html
      form=modalApplicationForm
      space=' '
      container=true
      customValidation=true
      %}
  </div>
  <div class="modal__success container">
    <div class="modal__success-row row">
      <div class="modal__success-content col-lg-8">
        <div class="modal__success-headline">
          {%
            include headline.html
            text=modalApplicationSuccess.headline.text
            level='h2'
            classes=modalApplicationSuccess.headline.classes
          %}
        </div>
        <div class="modal__success-icon">
          {%
            include icon.html
            icon='rocket'
          %}
        </div>
        <div class="modal__success-subline">
          {{ modalApplicationSuccess.subline }}
        </div>
        <div class="modal__success-subheadline">
          {%
            include headline.html
            text=modalApplicationSuccess.subheadline.text
            level='h4'
            classes=modalApplicationSuccess.subheadline.classes
          %}
        </div>
        <div class="modal__success-text">
          {{ modalApplicationSuccess.text }}
        </div>
        <div class="modal__success-close">
          {%
            include cta.html
            text=modalApplicationSuccess.cta.text
          %}
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End Shared Modal Application Section -->
`;

const form = `<!-- Shared Form Section -->
{%- assign formForm = include.form -%}
{%- assign formLight = include.light -%}
{%- assign formAnalytics = include.analytics -%}
{%- assign formSpace = include.space | default: 'space-top-2' -%}
{%- assign formContainer = include.container | default: false -%}
{%- assign formCustomValidation = include.customValidation | default: false -%}
{%- assign formAjax = include.ajax | default: false -%}
{%- assign formAdditionalFields = include.additionalFields -%}
{%- assign formUncentered = formForm.uncentered -%}
{%- assign formReplaceValue = include.replaceValue -%}

{% if formLight %}
  {% assign formClasses = 'is-light' %}
{% else %}
  {% assign formClasses = '' %}
{% endif %}

<div class="form {{ formClasses }}
            {% if formContainer %}container{% endif %}
            {% if formCustomValidation %}form--custom-validation{% endif %}
            {% if formAjax %}form--ajax{% endif %}
">
  <div class="form__row {% if formContainer %}row{% endif %}">
    <div class="{% if formContainer %}col-md-11 col-lg-10{% endif %}">
      {% if formForm.headline %}
        <div class="container {{ formSpace }} headline-row">
          <div class="row">
            <div class="col-sm-12">
              {% capture sublineClasses %}text-center {{ formForm.sublineClasses }}{% endcapture %}
              {%
                include headline.html
                text=formForm.headline
                level=formForm.level
                classes="text-center"
                id=formForm.id
              %}
              {% if formForm.subline %}
                <p class="{{ sublineClasses }}">{{ formForm.subline }}</p>
              {% endif %}
            </div>
          </div>
        </div>
      {% endif %}
      <form class="form__form js-validate mt-6" method="{{ formForm.method }}" action="{{ formForm.action }}">
        {% for field in formForm.fields %}
          {%
            include form-fields.html
            field=field
          %}
        {% endfor %}
        {% for field in formAdditionalFields %}
          {%
            include form-fields.html
            field=field
            replaceValue=formReplaceValue
          %}
        {% endfor %}
        <div class="form__submit mt-5 {% unless formUncentered %}justify-content-center{% endunless %}">
          {%
            include cta.html
            text=formForm.ctaText
            type="submit"
            button=true
            skin=formForm.cta.skin
            width=formForm.cta.width
            analytics=formAnalytics
          %}
        </div>
      </form>
    </div>
  </div>
</div>
<!-- End Shared Form Section -->
`;

export { icon, jobListDetail, cta, modal, headline, modalApplication, form };
