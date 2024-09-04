"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[8701],{"./stories/components/blogRecent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlogRecent:()=>BlogRecent,BlogRecentHeadline:()=>BlogRecentHeadline,BlogRecentSubline:()=>BlogRecentSubline,CaseStudies:()=>CaseStudies,Combined:()=>Combined,Events:()=>Events,EventsReversed:()=>EventsReversed,HideContainer:()=>HideContainer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__=_objectSpread(_objectSpread({},(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.lA)({component:_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.I4,argTypes:{limit:{description:"Amount of visible Words in a Post Preview",type:"number"},headline:{description:"Headline of the Component",type:"string"},subline:{description:"Subline of the Component",type:"string"},level:{description:"Headline Level",type:"string"},headlineClasses:{description:"Headline Classes",type:"string"},sublineClasses:{description:"Subline Classes",type:"string"},spacing:{description:"Component Spacing",type:"string"},slider:{description:"Enables Slider",type:"boolean"},bgColor:{description:"Sets Background Color",type:"string"},cta:{description:"Cta Object",type:"object"},caseStudies:{description:"Filters for Casestudies",type:"boolean"},events:{description:"Filters for Events",type:"boolean"},combine:{description:"Combines different types of Blogs",type:"boolean"},limitCaseStudies:{description:"Limits the Amount of Casestudies in Blog Recent",type:"number"},limitEvents:{description:"Limits the Amount of Events in Blog Recent",type:"number"},hideContainer:{description:"Places Blogs in a grid form",type:"boolean"},sticky:{description:"Enables Sticky Feature for Component",type:"boolean"},tag:{description:"Filters for certain Tags",type:"string"}}})),{},{title:"Components/Blog Recent"});var BlogRecent={args:{limit:21,headline:"lorem ipsum headline",slider:!0}},BlogRecentSubline={args:{limit:21,headline:"lorem ipsum headline",subline:"lorem ipsum subline lorem ipsum lorem ipsum lorem ipsum",slider:!0}},BlogRecentHeadline={args:{limit:21,headline:"lorem ipsum headline",level:"h2",headlineClasses:"text-white",slider:!0,bgColor:"var(--color-gigas)"}},Events={args:{limit:21,headline:"lorem ipsum headline",slider:!0,events:!0,cta:{text:"Primary Button",href:"https://www.youtube.com/watch?v=m2pa27Hv8K0",skin:"primary",button:!0,external:!0}}},EventsReversed={args:{reversed:!0,limit:21,headline:"lorem ipsum headline",slider:!0,events:!0,cta:{text:"Primary Button Internal",href:"javascript:void(0)",skin:"primary",button:!0,external:!1}}},CaseStudies={args:{limit:21,limitCaseStudies:5,headline:"lorem ipsum headline",slider:!0,caseStudies:!0}},HideContainer={args:{limit:21,headline:"lorem ipsum headline",slider:!1,hideContainer:!0}},Combined={args:{limit:21,limitEvents:2,headline:"lorem ipsum headline",slider:!0,combine:!0}};const __namedExportsOrder=["BlogRecent","BlogRecentSubline","BlogRecentHeadline","Events","EventsReversed","CaseStudies","HideContainer","Combined"]}}]);