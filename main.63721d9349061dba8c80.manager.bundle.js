(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{476:function(module,exports,__webpack_require__){__webpack_require__(477),__webpack_require__(630),__webpack_require__(863),__webpack_require__(872),__webpack_require__(873),__webpack_require__(864),__webpack_require__(868),__webpack_require__(866),__webpack_require__(869),__webpack_require__(865),__webpack_require__(870),__webpack_require__(871),module.exports=__webpack_require__(867)},543:function(module,exports){},630:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__(113).a.setConfig({isFullscreen:!1,showNav:!0,showPanel:!1,panelPosition:"bottom",enableShortcuts:!0,isToolshown:!0,theme:void 0,selectedPanel:void 0,initialActive:"sidebar",sidebar:{showRoots:!0,collapsedRoots:["context","docs"]}})},867:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(113),types=__webpack_require__(449),ADDON_ID="storybook/gk-storybook-themes",TOOL_ID="".concat(ADDON_ID,"/tool"),EVENTS=("".concat(ADDON_ID,"/panel"),"".concat(ADDON_ID,"/tab"),{CHANGE:"".concat(ADDON_ID,"/change")}),react=(__webpack_require__(175),__webpack_require__(4),__webpack_require__(11),__webpack_require__(5),__webpack_require__(13),__webpack_require__(10),__webpack_require__(9),__webpack_require__(12),__webpack_require__(17),__webpack_require__(16),__webpack_require__(24),__webpack_require__(862),__webpack_require__(14),__webpack_require__(19),__webpack_require__(23),__webpack_require__(39),__webpack_require__(15),__webpack_require__(33),__webpack_require__(59),__webpack_require__(0)),react_default=__webpack_require__.n(react),lazy_WithTooltip=__webpack_require__(425),TooltipLinkList=__webpack_require__(881),bar_button=__webpack_require__(225),icon=__webpack_require__(64),dist_esm=__webpack_require__(8),_excluded=["name"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Tool_getThemeName=function getThemeName(type){var _THEME_LIST$type;return(null===(_THEME_LIST$type=THEME_LIST[type])||void 0===_THEME_LIST$type?void 0:_THEME_LIST$type.name)||"Theme by type ".concat(type," not found")},defaultTheme={id:"reset",title:"Reset Theme",type:"gkgab"},baseThemes=[defaultTheme],Tool_toLinks=function toLinks(list,active,set,state,api,close){return list.map((function(i){return i.id===defaultTheme.id&&active.id===i.id?null:Object.assign({},i,{onClick:function onClick(){api.getChannel().emit(EVENTS.CHANGE,i.type),set(Object.assign({},state,{selected:i.id})),close()}})})).filter(Boolean)},Tool_IconButtonLabel=function IconButtonLabel(props){return react_default.a.createElement("div",{style:{marginLeft:10}},props.children)},Tool_Tool=function Tool(){var _useParameter=Object(dist_esm.n)("gk-storybook-themes-param",{}),_useParameter$themes=_useParameter.themes,themes=void 0===_useParameter$themes?THEME_LIST:_useParameter$themes,_useParameter$default=_useParameter.defaultThemeId,defaultThemeId=void 0===_useParameter$default?defaultTheme.id:_useParameter$default,list=function toList(items){return[].concat(baseThemes,_toConsumableArray(Object.entries(items).map((function(_ref2){var _ref3=_slicedToArray(_ref2,2),id=_ref3[0],_ref=_ref3[1],name=_ref.name,rest=_objectWithoutProperties(_ref,_excluded);return Object.assign({},rest,{id:id,title:name})}))))}(themes),api=Object(dist_esm.o)(),_useAddonState2=_slicedToArray(Object(dist_esm.i)(ADDON_ID,{selected:defaultThemeId,api:api}),2),state=_useAddonState2[0],setState=_useAddonState2[1],selected=state.selected,item=list.find((function(i){return i.id===selected}))||list.find((function(i){return i.id===defaultThemeId}))||list.find((function(i){return i.default}))||defaultTheme,label=Tool_getThemeName("reset"===selected?defaultTheme.type:selected);return react_default.a.createElement(react.Fragment,null,react_default.a.createElement(lazy_WithTooltip.a,{placement:"top",trigger:"click",closeOnClick:!0,tooltip:function tooltip(_ref4){var onHide=_ref4.onHide;return react_default.a.createElement(TooltipLinkList.a,{links:Tool_toLinks(list,item,setState,state,api,onHide)})}},react_default.a.createElement(bar_button.a,{key:TOOL_ID,active:!1,title:"Pick a Theme"},react_default.a.createElement(icon.a,{icon:"switchalt"}),react_default.a.createElement(Tool_IconButtonLabel,null,label))))},THEME_LIST={gkgab:{name:"Glueckkanja-gab",type:"gkgab"},radius:{name:"RADIUSaaS",type:"radiusaas"},konnekt:{name:"Konnekt",type:"konnekt"},scepman:{name:"SCEPman",type:"scepman"},realmjoin:{name:"RealmJoin",type:"realmjoin"},realmigrator:{name:"RealMigrator",type:"realmigrator"},unifiedcontacts:{name:"UnifiedContacts",type:"unifiedcontacts"}};__webpack_require__(75),__webpack_require__(29);esm.a.register(ADDON_ID,(function(api){esm.a.add(TOOL_ID,{type:types.a.TOOL,title:"GK Storybook Themes",match:function match(_ref){return"story"===_ref.viewMode},render:Tool_Tool})}))}},[[476,2,3]]]);