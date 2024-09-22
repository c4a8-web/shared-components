export default {
  tagName: 'text-image',
  migrate: true,
  template: `
        text-image
    `,
};

// export default {
//   tagName: 'text-image',
//   props: {
//     spacing: {
//       type: String,
//       default: 'space-top-2',
//     },
//     image: String,
//     imageClasses: String,
//     imagePreset: String,
//     lottie: String,
//     float: Boolean,
//     overline: String,
//     headline: String,
//     subline: String,
//     left: Boolean,
//     alt: String,
//     cloudinary: Boolean,
//     offset: Boolean,
//     white: Boolean,
//     copy: String,
//     list: Array,
//     bgColor: String,
//     copyClasses: {
//       type: String,
//       default: '',
//     },
//     copyLight: {
//       type: Boolean,
//       default: false,
//     },
//     background: String,
//     firstColWidth: Number,
//     secondColWidth: Number,
//     reduceSpacing: {
//       type: Boolean,
//       default: false,
//     },
//     cta: Object,
//     modal: Object,
//     href: String,
//     badge: Object,
//     sticky: Boolean,
//     noAnimation: {
//       type: Boolean,
//       default: false,
//     },
//     index: Number,
//     noGutters: {
//       type: Boolean,
//       default: false,
//     },
//     level: {
//       type: String,
//       default: 'h3',
//     },
//     headlineClasses: String,
//     siteData: Object, // Pass site data as a prop or import it if available
//   },
//   data() {
//     return {
//       textImageModalApiKey: this.modal?.apiKey || process.env.VUE_APP_PERSONIO_API_KEY,
//     };
//   },
//   computed: {
//     textImageLightText() {
//       return this.copyLight ? 'text-light' : '';
//     },
//     computedFirstColWidth() {
//       return this.firstColWidth || 6;
//     },
//     computedFirstColWidthXl() {
//       return this.firstColWidth || 4;
//     },
//     computedSecondColWidth() {
//       return this.secondColWidth || 6;
//     },
//     computedSecondColWidthXl() {
//       return this.secondColWidth || 8;
//     },
//     imageClassesComputed() {
//       let classes = this.imageClasses || '';
//       if (this.subline) {
//         classes += ' text-image__img--mobile';
//       }
//       return classes;
//     },
//     headlineClassesComputed() {
//       let classes = `${this.headlineClasses || ''} ${this.textImageLightText} mb-2 mb-lg-4`;
//       if (!this.headlineClasses) {
//         classes += this.float ? ' h3-font-size' : ' h4-font-size font-weight-normal';
//       }
//       return classes;
//     },
//     computedImgSrcSets() {
//       if (this.float) {
//         return (
//           (this.siteData?.imgSrcSets && this.siteData.imgSrcSets[this.imagePreset]) ||
//           (this.siteData?.imgSrcSets && this.siteData.imgSrcSets.textImageFloatingSmall) ||
//           null
//         );
//       } else {
//         return (this.siteData?.imgSrcSets && this.siteData.imgSrcSets[this.imagePreset]) || null;
//       }
//     },
//     computedPreset() {
//       if (this.float) {
//         return this.imagePreset || 'textImageFloatingSmall';
//       } else {
//         return this.imagePreset || null;
//       }
//     },
//     offsetValue() {
//       return this.left ? 0 : 1;
//     },
//     secondColClasses() {
//       let classes = [];
//       if (this.noGutters) {
//         classes.push('no-gutters');
//       } else {
//         classes.push('pt-2', 'pt-lg-4');
//       }
//       classes.push(`col-lg-${this.computedSecondColWidth}`);
//       if (!this.noAnimation) {
//         classes.push('fade-in-bottom');
//       }
//       if (this.white) {
//         classes.push('text-white');
//       }
//       if (this.reduceSpacing) {
//         classes.push(this.reduceSpacing);
//       } else {
//         classes.push(`${this.left ? 'pr-lg-' : 'pl-lg-'}${this.computedSecondColWidth}`);
//       }
//       if (this.float) {
//         classes.push(`col-xl-${this.computedSecondColWidthXl}`);
//       }
//       if (!this.float && this.left && this.offset) {
//         classes.push('offset-lg-1');
//       }
//       return classes.join(' ');
//     },
//   },
//   methods: {
//     navigateToHref() {
//       if (this.href) {
//         window.location.href = this.href;
//       }
//     },
//   },
//   template: `
//       <!-- Shared Text Image Section -->
//       <div
//         class="text-image is-component"
//         :class="[
//           spacing,
//           bgColor ? 'text-image--bg-color' : '',
//           sticky ? 'is-sticky-scroller' : '',
//           !noAnimation ? 'utility-animation utility-animation--enter-exit' : '',
//           float ? 'text-image--float' : '',
//         ]"
//         :style="{
//           backgroundColor: bgColor || null,
//           '--utility-animation-index': index || null,
//           backgroundImage: background ? \`url('\${background}')\` : null,
//         }"
//       >
//         <div class="container">
//           <div :class="['row', left ? 'flex-row-reverse' : '']">
//             <!-- Floating Image Column -->
//             <div
//               v-if="float"
//               class="text-image__floating-col justify-content-end text-image__floating-img position-absolute top-0 right-0"
//               :class="[
//                 \`col-lg-\${computedFirstColWidth}\`,
//                 float ? \`col-xl-\${computedFirstColWidthXl}\` : '',
//               ]"
//               @click="navigateToHref"
//               v-if="href"
//               style="cursor: pointer;"
//             >
//               <!-- Include your ImgComponent here -->
//             </div>
//             <!-- First Column -->
//             <div
//               class="text-image__first-col d-flex text-image__img justify-content-center"
//               :class="[
//                 imageClassesComputed,
//                 \`col-lg-\${computedFirstColWidth}\`,
//                 float ? \`col-xl-\${computedFirstColWidthXl} text-image__img--floating\` : '',
//                 offset && !float ? \`offset-lg-\${offsetValue}\` : '',
//               ]"
//               @click="navigateToHref"
//               v-if="href"
//               style="cursor: pointer;"
//             >
//               <div
//                 class="text-image__first-col-wrapper"
//                 :class="!noAnimation ? 'fade-in-bottom' : ''"
//                 data-utility-animation-step="1"
//               >
//                 <!-- Include your ImgComponent here -->
//               </div>
//             </div>
//             <!-- Second Column -->
//             <div
//               class="text-image__second-col"
//               :class="secondColClasses"
//               data-utility-animation-step="1"
//             >
//               <!-- Badge -->
//               <div v-if="badge">
//                 <!-- Include your BadgeComponent here -->
//               </div>
//               <!-- Overline -->
//               <span v-if="overline" class="text-image__overline d-inline-block mb-2 font-size-2">
//                 {{ overline }}
//               </span>
//               <!-- Headline -->
//               <div v-if="headline">
//                 <!-- Include your HeadlineComponent here -->
//               </div>
//               <!-- Subline and Image -->
//               <template v-if="subline">
//                 <span class="richtext">{{ subline }}</span>
//                 <div class="text-image__img text-image__img--subline mb-5 mt-5">
//                   <!-- Include your ImgComponent here -->
//                 </div>
//               </template>
//               <!-- Copy -->
//               <div :class="[copyClasses, textImageLightText]">
//                 <span v-html="copy"></span>
//               </div>
//               <!-- List -->
//               <div v-if="list" class="pt-4 pt-lg-6 pb-6">
//                 <!-- Include your CtaListComponent here -->
//               </div>
//             </div>
//             <!-- CTA -->
//             <div v-if="cta" class="text-image__cta col-lg-12">
//               <!-- Include your CtaComponent here -->
//             </div>
//           </div>
//         </div>
//         <!-- Modal -->
//         <div v-if="modal">
//           <!-- Include your ModalComponent here -->
//         </div>
//       </div>
//       <!-- End Shared Text Image Section -->
//     `,
// };
