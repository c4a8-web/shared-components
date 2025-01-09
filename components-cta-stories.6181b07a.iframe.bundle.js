"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[5970],{"./stories/components/cta.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PrimaryButton:()=>PrimaryButton,PrimaryButtonCutoff:()=>PrimaryButtonCutoff,PrimaryButtonDownload:()=>PrimaryButtonDownload,PrimaryButtonExternal:()=>PrimaryButtonExternal,PrimaryButtonLoading:()=>PrimaryButtonLoading,PrimaryLink:()=>PrimaryLink,PrimaryLinkActive:()=>PrimaryLinkActive,PrimaryLinkMonochrome:()=>PrimaryLinkMonochrome,PrimaryLinkReversed:()=>PrimaryLinkReversed,SecondaryButton:()=>SecondaryButton,SecondaryButtonCutoff:()=>SecondaryButtonCutoff,SecondaryButtonHasBackground:()=>SecondaryButtonHasBackground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js"),_globalArgTypes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/globalArgTypes.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__=_objectSpread(_objectSpread({},(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.lA)({component:_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.F3,argTypes:{text:{description:"The Text of the Cta",type:"string",required:!0},analytics:_globalArgTypes__WEBPACK_IMPORTED_MODULE_2__.z,link:{description:"Toggles Link Mode",type:"boolean"},skin:{description:"The skin of the Cta",control:{type:"select"},options:["","primary","secondary","primary is-cutoff","secondary is-cutoff","primary is-cutoff is-light","secondary is-cutoff is-light","primary is-light","secondary is-light"]},width:{description:"Adds helper classes for the width:",table:{disabled:!1},control:{type:"text"},type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."}},grow:{control:{type:"boolean"},description:"Will apply w-lg-auto when you don't specify a width.",type:{summary:null}},href:{description:"The link of the Cta",type:"string"},target:{description:"The link target",type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."},options:["","_self","_blank","_parent","_top"],control:{type:"select"}},button:{description:"Toggles Button Mode",type:"boolean"},alternativeHref:{description:"An alternative link for the pricing details toggle",type:"string"},type:{description:"The type attribute of the Cta",control:{type:"select"},options:["","submit","reset","button"],type:"string"},trigger:{description:"A trigger for modals or other components",control:{type:"select"},options:["","modal"],type:"string"},external:{description:"Adds an external icon to the Cta",type:"boolean"},icon:{description:"Adds an icon to the Cta",control:{type:"text"},type:{summary:"Icon name",detail:"arrow, mail, phone, ..."}},download:{description:"Adds an download icon to the Cta",type:"boolean"},reversed:{description:"Reverses the order of the icon and the text. Does not work with download.",type:"boolean"},active:{description:"Sets the active State of the Cta",type:"boolean"},hasBackground:{description:"Sets a semi transparent background for the secondary skin",type:"boolean"},classes:{description:"Adds classes:",table:{disabled:!1},control:{type:"text"},type:{summary:"Examples",detail:"space-4, parent-component-class, ..."}}}})),{},{title:"Components/Cta"});var PrimaryButtonCutoff={args:{text:"Primary Button Cutoff",skin:"primary is-cutoff",button:!0}},SecondaryButtonCutoff={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff"}},SecondaryButtonHasBackground={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff",hasBackground:!0}},PrimaryButton={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0}},PrimaryButtonDownload={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,download:!0}},PrimaryButtonExternal={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},SecondaryButton={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0}},PrimaryLink={args:{text:"Primary Link",href:"javascript:void(0)",link:!0}},PrimaryLinkActive={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,active:!0},argTypes:{width:{table:{disable:!0}},skin:{table:{disable:!0}}}},PrimaryLinkMonochrome={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,monochrome:!0}},PrimaryLinkReversed={args:{text:"Primary Link lorem ipsum dolor sit amet",href:"javascript:void(0)",link:!0,reversed:!0}},PrimaryButtonLoading={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,loading:!0}};const __namedExportsOrder=["PrimaryButtonCutoff","SecondaryButtonCutoff","SecondaryButtonHasBackground","PrimaryButton","PrimaryButtonDownload","PrimaryButtonExternal","SecondaryButton","PrimaryLink","PrimaryLinkActive","PrimaryLinkMonochrome","PrimaryLinkReversed","PrimaryButtonLoading"]},"./stories/globalArgTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>analytics});var analytics={control:{type:"text"},type:{summary:"The Analytics Code for tracking",detail:"For instance: AW-1234123312..."}}}}]);