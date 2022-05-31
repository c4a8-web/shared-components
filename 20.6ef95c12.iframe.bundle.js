(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./assets/js/pages/detail.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _components_base_component_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./assets/js/components/base-component.js"),_state_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./assets/js/state.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var PageDetail=function(_BaseComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(PageDetail,_BaseComponent);var _super=_createSuper(PageDetail);function PageDetail(root,options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PageDetail),(_this=_super.call(this,root,options)).containerSelector=".page-detail__container",_this.headlineSelector=".page-detail__headline",_this.ctaSelector=".page-detail__cta .cta",_this.introSelector=".page-detail__intro",_this.descriptionSelector=".page-detail__description",_this.hasBackClass="page-detail--has-back",_this.loadingDelay=300,_this.init(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PageDetail,[{key:"showBackButton",value:function showBackButton(){if(-1!==document.referrer.indexOf(document.location.host)){if(this.isVueComponent())return;this.root.classList.add(this.hasBackClass)}}},{key:"init",value:function init(){this.showBackButton(),this.bindEvents(),this.stopLoading()}},{key:"isVueComponent",value:function isVueComponent(){return this.root.classList.contains("vue-component")}},{key:"stopLoading",value:function stopLoading(){var _this2=this;setTimeout((function(){_this2.isVueComponent()||_this2.root.classList.remove(_state_js__WEBPACK_IMPORTED_MODULE_8__.a.LOADING)}),this.loadingDelay)}},{key:"queryElements",value:function queryElements(){this.back=this.root.querySelector(this.backSelector),this.cta=this.root.querySelector(this.ctaSelector)}},{key:"bindEvents",value:function bindEvents(){this.queryElements()}}]),PageDetail}(_components_base_component_js__WEBPACK_IMPORTED_MODULE_7__.a);PageDetail.rootSelector=".page-detail",__webpack_exports__.default=PageDetail}}]);