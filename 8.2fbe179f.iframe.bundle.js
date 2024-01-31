(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./assets/js/animate.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var Animate=function(){function Animate(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Animate)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Animate,[{key:"start",value:function start(_ref){var duration=_ref.duration,timing=_ref.timing,draw=_ref.draw,begin=performance.now();this.requestId;var scope=this;this.requestId=requestAnimationFrame((function animate(time){var timeFraction=(time-begin)/duration;timeFraction>1&&(timeFraction=1);var progress=timing(timeFraction);draw(progress),timeFraction<1&&(scope.requestId=requestAnimationFrame(animate))}))}},{key:"pause",value:function pause(){cancelAnimationFrame(this.requestId)}}]),Animate}();Animate.easing={linear:function linear(timeFraction){return timeFraction},easeInOutCubic:function easeInOutCubic(timeFraction){return timeFraction<.5?4*timeFraction*timeFraction*timeFraction:1-Math.pow(-2*timeFraction+2,3)/2}},__webpack_exports__.a=Animate},"./assets/js/components/tag-cloud.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var _base_component_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./assets/js/components/base-component.js"),_animate_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./assets/js/animate.js"),_tools_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./assets/js/tools.js"),_events_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./assets/js/events.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var TagCloud=function(_BaseComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(TagCloud,_BaseComponent);var _super=_createSuper(TagCloud);function TagCloud(root,options){var _this$itemsContainer,_this$itemsContainer2,_this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TagCloud),(_this=_super.call(this,root,options)).root=root,_this.container=root.querySelector(".tag-cloud__container"),_this.itemsContainer=root.querySelector(".tag-cloud__items"),_this.itemLinkClass="tag-cloud__item-link",_this.slider=root.querySelector(".tag-cloud__slider"),_this.items=null!==(_this$itemsContainer=_this.itemsContainer)&&void 0!==_this$itemsContainer&&_this$itemsContainer.dataset.items?JSON.parse(null===(_this$itemsContainer2=_this.itemsContainer)||void 0===_this$itemsContainer2?void 0:_this$itemsContainer2.dataset.items):[],_this.maxCoordinate=40,_this.itemsPerOuterRow=3,_this.minCoordinate=10,_this.minBlur=2,_this.maxBlur=10,_this.maxDelay=70,_this.minDelay=550,_this.maxWeight=3,_this.isMouseOut=!0,_this.animate=new _animate_js__WEBPACK_IMPORTED_MODULE_20__.a,_this.delay=1e3,_this.velocity=30,_this.startPosition=0,_this.endPosition=0,_this.gotDragged=!1,_this.firstTouch=!0,_this.temporaryTouchPosition=0,_this.temporaryDiff=0,_this.percentageInViewport=30,_this.init(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TagCloud,[{key:"init",value:function init(){this.weightingElements(),this.addCorners(),this.appendItems(),this.hasScrollAnimation()&&(this.setDuration(),this.addScrollAnimation()),document.dispatchEvent(new CustomEvent(_events_js__WEBPACK_IMPORTED_MODULE_22__.a.DIMENSIONS_CHANGED,{detail:this.root})),this.bindEvents()}},{key:"hasScrollAnimation",value:function hasScrollAnimation(){return _tools_js__WEBPACK_IMPORTED_MODULE_21__.a.isBelowBreakpoint("md")&&_tools_js__WEBPACK_IMPORTED_MODULE_21__.a.isInViewportPercent(this.root,this.percentageInViewport)}},{key:"bindEvents",value:function bindEvents(){var _this2=this;this.itemsContainer.querySelectorAll("."+this.itemLinkClass).forEach((function(item){item.addEventListener("mouseover",(function(e){_this2.handleMouseOver(null==e?void 0:e.currentTarget)}))})),this.itemsContainer.querySelectorAll("."+this.itemLinkClass).forEach((function(item){item.addEventListener("mouseout",(function(e){_this2.handleMouseOut(null==e?void 0:e.currentTarget)}))})),window.addEventListener("resize",(function(){_this2.handleScroll(),_this2.endPosition=_this2.slider.scrollWidth-_this2.slider.clientWidth,_this2.setDuration()})),document.addEventListener("scroll",(function(){_this2.handleScroll()})),this.slider.addEventListener("touchstart",(function(){_this2.hasScrollAnimation()&&(clearTimeout(_this2.timeout),_this2.handleTouchStart())})),this.slider.addEventListener("touchend",(function(){_this2.hasScrollAnimation()&&(_this2.timeout=setTimeout((function(){_this2.addScrollAnimation()}),_this2.delay))}))}},{key:"stopScrollAnimation",value:function stopScrollAnimation(){this.animate.pause(),this.isInScrollAnimation=!1}},{key:"handleTouchStart",value:function handleTouchStart(){this.stopScrollAnimation(),this.gotDragged=!0}},{key:"handleTouchEnd",value:function handleTouchEnd(){var currentPosition=this.slider.scrollLeft,distanceToUpperLimit=Math.abs(this.endPosition-currentPosition),distanceToLowerLimit=Math.abs(this.startPosition-currentPosition),timing=_animate_js__WEBPACK_IMPORTED_MODULE_20__.a.easing.linear,distance=distanceToUpperLimit<distanceToLowerLimit,startPosition=currentPosition,endPosition=distance?this.startPosition:this.endPosition,reverse=!!distance,scaleDiff=Math.abs(startPosition-endPosition)/Math.abs(this.startPosition-this.endPosition),duration=this.duration*scaleDiff;this.moveTo(startPosition,endPosition,duration,timing,reverse)}},{key:"handleMouseOut",value:function handleMouseOut(element){window.cancelAnimationFrame(this.animate.requestId),element.style.setProperty("filter",null)}},{key:"handleMouseOver",value:function handleMouseOver(element){var style=window.getComputedStyle(element),blur=null==style?void 0:style.filter.replace("blur(","").replace("px)","");this.animate.start({duration:900,timing:_animate_js__WEBPACK_IMPORTED_MODULE_20__.a.easing.easeInOutCubic,draw:function draw(progress){var newBlur=blur-blur*progress;element.style.setProperty("filter","blur("+newBlur+"px)","important")}})}},{key:"handleScroll",value:function handleScroll(){if(this.hasScrollAnimation()){if(this.isInScrollAnimation)return;this.addScrollAnimation()}else this.stopScrollAnimation()}},{key:"addScrollAnimation",value:function addScrollAnimation(){this.isInScrollAnimation=!0,this.endPosition=this.slider.scrollWidth-this.slider.clientWidth,this.handleTouchEnd()}},{key:"setDuration",value:function setDuration(){var distance=this.slider.clientWidth;this.duration=this.velocity*distance}},{key:"moveTo",value:function moveTo(currentPosition,limit,duration,timing,reverse){var _this3=this,limitDiff=Math.abs(limit-currentPosition);this.animate.start({duration:duration,timing:timing,draw:function draw(progress){var stepAfterDrag=reverse?currentPosition-limitDiff*progress:currentPosition+limitDiff*progress,stepBeforeDrag=reverse?limitDiff*(1-progress):limitDiff*progress;_this3.slider.scrollLeft=_this3.gotDragged?stepAfterDrag:stepBeforeDrag,1===progress&&(_this3.gotDragged=!1,_this3.moveTo(_this3.startPosition,_this3.endPosition,duration,timing,!reverse))}})}},{key:"weightingElements",value:function weightingElements(){for(var i=0;i<this.items.length;i++){var item=this.items[i],weight=Math.ceil(item.title.length/8);this.items[i].weighting=weight>this.maxWeight?this.maxWeight:weight}}},{key:"getCornerPosition",value:function getCornerPosition(){for(var weight=0,secondIndex=0,lastElementsWeight=0,thirdIndex=0,i=0;i<this.items.length;i++){(weight+=this.items[i].weighting)>this.itemsPerOuterRow+1||(secondIndex=i+1)}for(var _i=this.items.length-1;_i>0;_i--){(lastElementsWeight+=this.items[_i].weighting)>3||(thirdIndex=_i+1)}return{secondIndex:secondIndex,thirdIndex:thirdIndex}}},{key:"addCorners",value:function addCorners(){var corner={weighting:0};this.items.unshift(corner),this.items.push(corner);var cornerPosition=this.getCornerPosition();this.items.splice(cornerPosition.secondIndex,0,corner),this.items.splice(cornerPosition.thirdIndex,0,corner)}},{key:"getRandomCoordinate",value:function getRandomCoordinate(){var value=this.getRandomNumberBetween(this.minCoordinate,this.maxCoordinate),tempValue=value,sign=Math.random()>.5?-1*value:value;return sign<0&&(value=sign+tempValue/1.1),value/2}},{key:"getRandomBlur",value:function getRandomBlur(){return this.getRandomNumberBetween(this.minBlur,this.maxBlur)}},{key:"getRandomStart",value:function getRandomStart(){return this.getRandomNumberBetween(this.minDelay,this.maxDelay)}},{key:"getRandomNumberBetween",value:function getRandomNumberBetween(start,end){return Math.floor(Math.random()*(end-start+1))+start}},{key:"appendItems",value:function appendItems(){for(var i=0;i<this.items.length;i++){var item=this.items[i],newElement=document.createElement("li");if(newElement.classList.add("tag-cloud__item"),newElement.setAttribute("data-weight",item.weighting),item.title){var link=document.createElement("a"),groupIdentifier=i%2==0?2:1;link.setAttribute("groupIdentifier",groupIdentifier),link.style.setProperty("--blurry-x1",this.getRandomCoordinate()+"px"),link.style.setProperty("--blurry-x2",this.getRandomCoordinate()+"px"),link.style.setProperty("--blurry-x3",this.getRandomCoordinate()+"px"),link.style.setProperty("--blurry-y1",this.getRandomCoordinate()+"px"),link.style.setProperty("--blurry-y2",this.getRandomCoordinate()+"px"),link.style.setProperty("--blurry-y3",this.getRandomCoordinate()+"px"),link.style.setProperty("--blurry-delay",this.getRandomStart()+"ms"),link.style.setProperty("--blurry-blur",this.getRandomBlur()+"px"),link.innerText=item.title,link.classList.add(this.itemLinkClass),newElement.appendChild(link)}this.itemsContainer.appendChild(newElement)}}}]),TagCloud}(_base_component_js__WEBPACK_IMPORTED_MODULE_19__.a);TagCloud.rootSelector=".tag-cloud",__webpack_exports__.default=TagCloud}}]);