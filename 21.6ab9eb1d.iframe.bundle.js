(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./assets/js/components/pricing-slider.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var PricingSlider=function(_BaseComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(PricingSlider,_BaseComponent);var _super=_createSuper(PricingSlider);function PricingSlider(root,options){var _document$querySelect,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PricingSlider),(_this=_super.call(this,root,options)).selectedValue=0,_this.products=null,_this.range=null;var parsePricingData=null===(_document$querySelect=document.querySelector("[data-pricing]"))||void 0===_document$querySelect?void 0:_document$querySelect.dataset.pricing,pricingData=parsePricingData?JSON.parse(parsePricingData):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};return _this.priceFormatter=new Intl.NumberFormat(pricingData.format,{style:"currency",currency:pricingData.currency,maximumFractionDigits:0}),_this.selectedPlan=["monthly","annual"].includes(pricingData.defaultPlan)?pricingData.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),_this.currentPrice=0,_this.init(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PricingSlider,[{key:"init",value:function init(){if(window.handleChange)return console.error("remove handleChange from app.js");window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}},{key:"handlePricingSlider",value:function handlePricingSlider(_ref){var from=_ref.from;this.selectedValue=parseInt(from);var product=this.getRecommendedProduct(this.selectedValue);if(product){var extraUsers=this.selectedValue-product.value,price=parseInt(product.price[this.selectedPlan])+extraUsers*parseFloat(product.additionalUsersFee[this.selectedPlan]);this.currentPrice=price,this.updateElements(this.priceFormatter.format(price),product.title,this.formatExtraUsers(extraUsers))}}},{key:"getRecommendedProduct",value:function getRecommendedProduct(selectedValue){var recommendedProduct=null,errorMessage="No products found for value "+selectedValue+" in site.data.products.list";if(this.products)return this.products.forEach((function(product){product.value<=selectedValue&&(recommendedProduct=product)})),recommendedProduct||console.error(errorMessage),recommendedProduct;console.error(errorMessage)}},{key:"formatExtraUsers",value:function formatExtraUsers(extraUsers){var unit=this.range.unit;return extraUsers>0?"+ "+extraUsers+" "+unit:""}},{key:"prepare",value:function prepare(slider){var _this2=this,dataElement=document.querySelector(".js-slider-data");this.products=JSON.parse(dataElement.dataset.products),this.range=JSON.parse(dataElement.dataset.range),this.selectedValue=slider.from,setTimeout((function(){_this2.fixText()}),5)}},{key:"fixText",value:function fixText(){var sliderTextElement=document.querySelector(".irs-single"),currentSliderContent=sliderTextElement.innerHTML;currentSliderContent.includes(this.range.unit)||(sliderTextElement.innerHTML=[currentSliderContent,this.range.unit].join(" "))}},{key:"updateElements",value:function updateElements(price,product,extra){var priceElement=document.querySelector(".js-result-price"),productElement=document.querySelector(".js-result-product"),extraElement=document.querySelector(".js-result-extra");priceElement.innerHTML=price,productElement.innerHTML=product,extraElement.innerHTML=extra,this.fixText()}}]),PricingSlider}(__webpack_require__("./assets/js/components/base-component.js").a);PricingSlider.rootSelector=".pricing-slider",__webpack_exports__.default=PricingSlider}}]);