(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./assets/js/anchor.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _tools_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./assets/js/tools.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Anchor=function(){function Anchor(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Anchor);var hash=this.getHash();this.targetSelector='a[href^="'+hash+'"]',this.productStageSelector=".product-stage",this.target=document.querySelector(this.targetSelector),this.links=document.querySelectorAll('a[href^="#"]:not([data-toggle])'),this.handleTargetClick(),this.bindEvents()}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Anchor,[{key:"hasProductStage",value:function hasProductStage(){return!!document.querySelector(this.productStageSelector)}},{key:"bindEvents",value:function bindEvents(){var _this$links,_this=this;null===(_this$links=this.links)||void 0===_this$links||_this$links.forEach((function(link){link.addEventListener("click",_this.handleClick.bind(_this))}))}},{key:"handleTargetClick",value:function handleTargetClick(){this.target&&this.hasProductStage()&&this.handleAfterClick(this.target,!0)}},{key:"handleClick",value:function handleClick(e){var currentLink=e.currentTarget,href=null==currentLink?void 0:currentLink.getAttribute("href"),target=document.querySelector('a[href="'+href+'"][data-toggle]');this.handleAfterClick(target)}},{key:"handleAfterClick",value:function handleAfterClick(target,smooth){target&&(_tools_js__WEBPACK_IMPORTED_MODULE_4__.a.scrollIntoView(target,smooth),target.click())}},{key:"getHash",value:function getHash(){return window.location.hash}}],[{key:"init",value:function init(){this.instances=[],this.instances.push(new this)}}]),Anchor}();Anchor.rootSelector="",Anchor.instances=[],__webpack_exports__.default=Anchor}}]);