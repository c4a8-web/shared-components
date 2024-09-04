"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[438],{"./assets/js/pages/detail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_base_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./assets/js/components/base-component.js"),_state_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./assets/js/state.js"),_events_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./assets/js/events.js"),_tools_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./assets/js/tools.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _classCallCheck(instance,Constructor){if(!function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}(instance,Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var PageDetail=function(_BaseComponent){function PageDetail(root,options){var _this;return _classCallCheck(this,PageDetail),(_this=_callSuper(this,PageDetail,[root,options])).root=root,_this.containerSelector=".page-detail__container",_this.headlineSelector=".page-detail__headline",_this.ctaSelector=".page-detail__cta .cta",_this.introSelector=".page-detail__intro",_this.descriptionSelector=".page-detail__description",_this.shapeSelector=".page-detail__shape",_this.introContentSelector=".page-detail__intro-content",_this.badgeSelector=".page-detail__badge",_this.detailsSelector=".page-detail__details",_this.hasBackClass="page-detail--has-back",_this.shape=root.querySelector(_this.shapeSelector),_this.hasShape()&&(_this.introContent=root.querySelector(_this.introContentSelector),_this.intro=root.querySelector(_this.introSelector)),_this.loadingDelay=300,_this.percentageInViewport=1,_this.init(),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(PageDetail,_BaseComponent),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PageDetail,[{key:"showBackButton",value:function showBackButton(){if(-1!==document.referrer.indexOf(document.location.host)){if(this.isVueComponent())return;this.root.classList.add(this.hasBackClass)}}},{key:"init",value:function init(){this.showBackButton(),this.bindEvents(),this.stopLoading(),this.setStickyPosition(),this.setShapePosition()}},{key:"hasShape",value:function hasShape(){return!!this.shape}},{key:"setStickyPosition",value:function setStickyPosition(){var _this$introContent$qu,_this$introContent$qu2,_this$introContent$qu3;if(this.hasShape()&&this.isInViewport()&&_tools_js__WEBPACK_IMPORTED_MODULE_3__.A.isUpperBreakpoint()){var heightOffset=_tools_js__WEBPACK_IMPORTED_MODULE_3__.A.isBelowBreakpoint("lg")?10:-40,badgeHeight=(null===(_this$introContent$qu=this.introContent.querySelector(this.badgeSelector))||void 0===_this$introContent$qu?void 0:_this$introContent$qu.offsetHeight)||0,detailsHeight=(null===(_this$introContent$qu2=this.introContent.querySelector(this.detailsSelector))||void 0===_this$introContent$qu2?void 0:_this$introContent$qu2.offsetHeight)||0,headlineHeight=(null===(_this$introContent$qu3=this.introContent.querySelector(this.headlineSelector))||void 0===_this$introContent$qu3?void 0:_this$introContent$qu3.offsetHeight)||0;this.stickyPosition=badgeHeight+detailsHeight+headlineHeight-heightOffset}}},{key:"isVueComponent",value:function isVueComponent(){return this.root.classList.contains("vue-component")}},{key:"stopLoading",value:function stopLoading(){var _this2=this;setTimeout((function(){_this2.isVueComponent()||_this2.root.classList.remove(_state_js__WEBPACK_IMPORTED_MODULE_1__.A.LOADING)}),this.loadingDelay)}},{key:"queryElements",value:function queryElements(){this.back=this.root.querySelector(this.backSelector),this.cta=this.root.querySelector(this.ctaSelector)}},{key:"bindEvents",value:function bindEvents(){this.queryElements(),document.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_2__.A.SCROLL_UPDATE,this.handleScroll.bind(this)),document.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_2__.A.WINDOW_RESIZE,this.handleResize.bind(this))}},{key:"handleScroll",value:function handleScroll(){this.setShapePosition()}},{key:"setShapePosition",value:function setShapePosition(){if(this.hasShape()&&this.isInViewport())return _tools_js__WEBPACK_IMPORTED_MODULE_3__.A.isUpperBreakpoint()?void(this.isStickyShapeEnd()?this.handleStickyShapeEnd():this.isSticky()?(this.shape.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_1__.A.STICKY),this.shape.style.top=-this.stickyPosition+"px"):this.resetShape()):this.resetShape()}},{key:"handleStickyShapeEnd",value:function handleStickyShapeEnd(){this.isStickyEnd()&&(this.shape.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_1__.A.STICKY),this.shape.style.top=-this.stickyPosition-this.getRelativePosition()+"px")}},{key:"getRelativePosition",value:function getRelativePosition(){var _this$intro,introTop=(null===(_this$intro=this.intro)||void 0===_this$intro?void 0:_this$intro.style.top.replace("px",""))||0;return introTop>=0?this.getStickyOffsetTop()-Math.abs(introTop):this.getStickyOffsetTop()-parseFloat(introTop)}},{key:"resetShape",value:function resetShape(){this.shape.classList.remove(_state_js__WEBPACK_IMPORTED_MODULE_1__.A.STICKY),this.shape.style.top="",this.isStickyEndReached=!1}},{key:"isSticky",value:function isSticky(){return window.scrollY>this.stickyPosition}},{key:"isStickyShapeEnd",value:function isStickyShapeEnd(){return this.root.getBoundingClientRect().bottom<=window.innerHeight}},{key:"getHsStickyBlockOptions",value:function getHsStickyBlockOptions(){var _this$intro2;if(this.hsStickyBlockOptions)return this.hsStickyBlockOptions;var hsStickyBlockOptions=null===(_this$intro2=this.intro)||void 0===_this$intro2?void 0:_this$intro2.dataset.hsStickyBlockOptions;return hsStickyBlockOptions&&(hsStickyBlockOptions=JSON.parse(hsStickyBlockOptions)),this.hsStickyBlockOptions=hsStickyBlockOptions,hsStickyBlockOptions}},{key:"getStickyOffsetTop",value:function getStickyOffsetTop(){var _this$getHsStickyBloc;return(null===(_this$getHsStickyBloc=this.getHsStickyBlockOptions())||void 0===_this$getHsStickyBloc?void 0:_this$getHsStickyBloc.stickyOffsetTop)||0}},{key:"isStickyEnd",value:function isStickyEnd(){var _this$intro3;return(null===(_this$intro3=this.intro)||void 0===_this$intro3?void 0:_this$intro3.style.top)!==this.getStickyOffsetTop()+"px"}},{key:"isInViewport",value:function isInViewport(){return _tools_js__WEBPACK_IMPORTED_MODULE_3__.A.isInViewportPercent(this.root,this.percentageInViewport)}},{key:"handleResize",value:function handleResize(){this.setStickyPosition(),this.setShapePosition()}}])}(_components_base_component_js__WEBPACK_IMPORTED_MODULE_0__.A);!function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(PageDetail,"rootSelector",".page-detail");const __WEBPACK_DEFAULT_EXPORT__=PageDetail}}]);