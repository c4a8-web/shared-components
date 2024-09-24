(function(G,Z){typeof exports=="object"&&typeof module<"u"?Z(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],Z):(G=typeof globalThis<"u"?globalThis:G||self,Z(G.SharedComponents={},G.Vue))})(this,function(exports,vue){"use strict";var kt=Object.defineProperty;var xt=(G,Z,K)=>Z in G?kt(G,Z,{enumerable:!0,configurable:!0,writable:!0,value:K}):G[Z]=K;var z=(G,Z,K)=>xt(G,typeof Z!="symbol"?Z+"":Z,K);var K;const G=class G{static isInViewportPercent(e,i){const s=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth,n={x:s.x,y:s.y,width:s.width,height:s.height},l={x:0,y:0,width:a,height:r},o=n.width*n.height,h=G.intersection(n,l);return i<=h/o*100}static getScrollTop(e){if(!e)return;const i=document.querySelector("header"),s=i?(i==null?void 0:i.offsetHeight)+40:0;return e.getBoundingClientRect().top-s+window.scrollY}static scrollIntoView(e,i){e&&window.scrollTo({top:G.getScrollTop(e),behavior:i?"smooth":"auto"})}static getLang(){return(document.querySelector("html").getAttribute("lang")||defaultLang).toLowerCase()}static isNotDefaultLang(){return this.getLang()!==this.defaultLang}static scrollToTop(){G.scrollIntoView(document.querySelector("body"),!0)}static getParentComponent(e){return G.getParent(e,".is-component")}static getParent(e,i){var r;const s=e.parentNode;return s===null||s.tagName==="body"?null:(r=s.parentNode)!=null&&r.querySelector(i)?s:G.getParent(s,i)}static append(e,i){if(e){const s=document.createElement("div");s.innerHTML=i!=null&&i.nodeType?i.outerHTML:i;const r=s==null?void 0:s.children[0];if(r)return e.appendChild(r)}return null}static replace(e,i){e&&i&&(e.innerHTML=i.innerHTML)}static generateUrl(e,i,s){let r;return e&&i&&(r=e.toLowerCase().replace(/\s/g,"-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,"").replace(/\u00dc/,"ue").replace(/\u00c4/,"ae").replace(/\u00d6/,"oe").replace(/\u00fc/,"ue").replace(/\u00e4/,"ae").replace(/\u00f6/,"oe").replace(/\u00df/,"ss"),r=i+G.urlSeperator+r.replace(/-+$/,"")+"-"+s),r}static toBase64(e){return new Promise((i,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>{const a=r.result.split(",")[1];i(a)},r.onerror=a=>s(a)})}static toSize(e){const i=["Bytes","KB","MB","GB","TB"];if(e==0)return"0 Byte";const s=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return(e/Math.pow(1024,s)).toFixed(1)+" "+i[s]}static camalCaseToSnakeCase(e){return e.replace(/[A-Z]/g,i=>`_${i.toLowerCase()}`)}static animateValue(e,i,s,r,a=G.priceFormatter){let n=null;const l=o=>{n||(n=o);const h=Math.min((o-n)/r,1),u=h*(s-i)+i,S=a.format(u);e.innerHTML=S,h<1&&window.requestAnimationFrame(l)};window.requestAnimationFrame(l)}static isOutsideOf(e,i){const s=i.composedPath?i.composedPath():i.path;return s?!s.some(r=>r.className&&r.className.includes&&r.className.includes(e)):!1}static getExtension(e){return e.split(".").pop()}static validateVueProps(e){var a;const i=(a=e==null?void 0:e.$)==null?void 0:a.propsOptions[0],s=e==null?void 0:e.$props,r={props:{}};return Object.keys(s).map(n=>{let l=s[n];l===""&&(l=i[n].default),r.props[n]=l}),r}static isTrue(e){return e===!0||e==="true"}static capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}static sleep(e){return new Promise(i=>setTimeout(i,e))}static randomRange(e,i){return Math.floor(Math.random()*(i-e+1)+e)}static uuid(){const e=Date.now().toString(16)+Math.random().toString(4)+"0".repeat(16),i=G.randomRange(0,8),s=G.randomRange(0,16);return"u"+[e.substring(i,i+8),e.substring(s,s+4)].join("-").replaceAll(".","9")}static getBreakpoint(){return getComputedStyle(document.body).getPropertyValue("--breakpoint").trim()}static isBelowBreakpoint(e){let i=["xs","sm","md","lg","xl","xxl"];const s=G.getBreakpoint();return i.indexOf(e)>=i.indexOf(s)}static isUpperBreakpoint(){return!G.isBelowBreakpoint("md")}static getYoutubeThumbnail(e){let i;const s=e.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/),r=e.match(/youtu\.be\/(.{11})/);return s?i=s[2]:r&&(i=r[1]),`https://i1.ytimg.com/vi/${i}/maxresdefault.jpg`}static truncateWords(e,i){if(!e)return;const s=e.split(" "),r=s.slice(0,i).join(" ");return s.length>i?r+" ...":r}static stripHtml(e){if(e)return e.replace(new RegExp(/<.*?>/g),"")}static isGermanDate(e){return!!e.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/)}static isStorybook(){return window.STORYBOOK_ENV==="HTML"}static isTestingStorybook(){return document.location.pathname.indexOf(G.storybookPath)!==-1}static getSiteAssetPath(e){return G.isTestingStorybook()?`${G.storybookPath}${e}`:e}static getAssetPath(e){return G.isStorybook()?`../assets/${e}`:`/_includes/shared-components/assets/${e}`}static findRecursive(e,i,s){let r=!1,a,n,l;function o(h,u,S,d){if(!r){if(u(h,n)){r=!0,a=d(h,S);return}for(let _ in h)typeof h[_]=="object"&&(h===l&&(n=_),o(h[_],u,h,d))}}return l=e,o(e,i,e,s),a}static storageSave(e,i,s=!0){localStorage.setItem(G.storagePrefix+e,s?JSON.stringify(i):i)}static storageGet(e){return localStorage.getItem(G.storagePrefix+e)}static getJSON(e){var i;if(e&&typeof e=="object"&&((i=Object.keys(e))==null?void 0:i.length)>0)return e;if(e&&typeof e=="string")try{return JSON.parse(e)}catch{console.error("Error parsing JSON:",e);return}}static getElementBgColor(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return;const i=window.getComputedStyle(e).backgroundColor;return i==="rgba(0, 0, 0, 0)"?null:i}static isValidTimeFormat(e){return/^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(e)}static standardizeTimeFormat(e){if(!this.isValidTimeFormat(e))return e;const i="Uhr";let s=e.split("-"),r=s[0].trim();r.includes(":")||(r+=":00"),r.length===4&&(r="0"+r);let a=s[1].trim().replace(` ${i}`,"");return a.includes(":")||(a+=":00"),a.length===4&&(a="0"+a),`${r} - ${a} ${i}`}static convertToDate(e){const i=e.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);if(i){const r=parseInt(i[1],10),a=parseInt(i[2],10)-1,n=parseInt(i[3],10);return new Date(n,a,r)}return null}static XMLtoJSON(e){let i={};if(e.nodeType===Node.ELEMENT_NODE){if(e.attributes.length>0){i["@attributes"]={};for(let s=0;s<e.attributes.length;s++){const r=e.attributes.item(s);i["@attributes"][r.nodeName]=r.nodeValue}}}else(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.CDATA_SECTION_NODE)&&(i=e.nodeValue);if(e.hasChildNodes())for(let s=0;s<e.childNodes.length;s++){const r=e.childNodes.item(s),a=r.nodeName;if(typeof i[a]>"u")i[a]=this.XMLtoJSON(r);else{if(typeof i[a].push>"u"){const n=i[a];i[a]=[],i[a].push(n)}i[a].push(this.XMLtoJSON(r))}}return i}static hasFontSizeClass(e){return e.indexOf("-font-size")!==-1||e.indexOf("font-size-")!==-1}static red(e){return parseInt(e.substring(1,3),16)}static green(e){return parseInt(e.substring(3,5),16)}static blue(e){return parseInt(e.substring(5,7),16)}static hexToRgb(e){let i;if(e.startsWith("--")||e.startsWith("var(")){const l=e.replace(/--|var\(/,"").replace(/\)$/,"");i=getComputedStyle(document.documentElement).getPropertyValue(l).trim()}const s=i||e,r=G.red(s),a=G.green(s),n=G.blue(s);return`${r}, ${a}, ${n}`}static getHash(){return window.location.hash}};z(G,"defaultLang","de"),z(G,"urlSeperator","#"),z(G,"priceFormatter",new Intl.NumberFormat("de-DE",{style:"decimal",maximumFractionDigits:0})),z(G,"storagePrefix","@gab_"),z(G,"storybookPath","/shared-components"),z(G,"decodeHTML",e=>new DOMParser().parseFromString(e,"text/html").documentElement.textContent),z(G,"intersection",(e,i)=>{const s=Math.max(0,Math.min(e.x+e.width,i.x+i.width)-Math.max(e.x,i.x)),r=Math.max(0,Math.min(e.y+e.height,i.y+i.height)-Math.max(e.y,i.y));return s*r}),z(G,"debounce",function(e,i,s){let r;return function(){const a=this,n=arguments;var l=function(){r=null,s||e.apply(a,n)},o=s&&!r;clearTimeout(r),r=setTimeout(l,i),o&&e.apply(a,n)}});let Tools=G;const State={ACTIVE:"active",READY:"is-ready",ERROR:"is-invalid",VALID:"is-valid",SUCCESS:"is-successful",HAS_ERROR:"has-error",HOVERING:"is-hovering",DRAGGING:"is-dragging",HIDDEN:"d-none",INVISIBLE:"is-invisible",EXPANDED:"is-expanded",EXPANDABLE:"is-expandable",OFF_SCREEN:"is-off-screen",COLLAPSED:"is-collapsed",IS_COLLAPSING:"is-collapsing",SHOW:"show",FADE:"fade",INITIALIZED:"is-initialized",LOADING:"is-loading",HIDE_LOADING:"hide-loading",END:"is-end",IS_SCROLLED:"is-scrolled",MODAL_OPEN:"modal--open",HAS_BACKGROUND:"has-background",IS_FULL:"is-full",STICKY:"is-sticky",IN_TRANSITION:"in-transition",IS_STARTING:"is-starting"},accordion={tagName:"accordion",computed:{imageWrapperClasses(){return["accordion__floating-image-wrapper",Tools.isTrue(this.shadowless)===!0?null:"drop-shadow"]},containerClasses(){return["accordion__container utility-animation container vue-component",this.spacing,this.accordion.image?"accordion--has-image":null]},accordionClasses(){return["accordion utility-animation container mt-6 mb-4 my-lg-8 vue-component",this.accordion.image?"accordion--has-image":null]},fallbackImageClasses(){return["accordion__fallback-image-wrapper",Tools.isTrue(this.shadowless)===!0?null:"drop-shadow",this.showOutsideImage?State.SHOW:null]},columnClasses(){return["col",Tools.isTrue(this.left)?null:"text-center"]},headlineClasses(){var t;return`accordion__headline  ${(t=this.accordion)==null?void 0:t.headlineClasses}`}},mounted(){this.accordion.tabs&&(this.selectFallbackImage(),this.isUpperBreakpoint()?this.changeOutsideImage():this.outsideImage=this.fallbackImage,this.accordion.tabs.forEach(t=>{this.states.push(!!t.expanded)}))},methods:{isUpperBreakpoint(){return!Tools.isBelowBreakpoint("md")},selectFallbackImage(){if(!this.fallbackImage){const t=this.getActiveTab();this.fallbackImage=this.accordion.image||(t==null?void 0:t.image),this.fallbackAnimated=this.accordion.image?this.accordion.animated:t.animated}},getActiveTab(){var e;const t=(e=this.accordion)==null?void 0:e.tabs.filter(i=>i.expanded);return t?t[0]:null},handleClick(t){const e=this.states[t];this.states=this.states.map(i=>!1),this.states[t]=!e,this.isUpperBreakpoint()&&this.changeOutsideImage(t),this.allTabsClosed()&&this.changeToFallbackImage()},changeToFallbackImage(){this.showOutsideImage=!0,this.accordion.image=this.fallbackImage,this.outsideImage=this.fallbackImage,this.outsideAnimated=this.fallbackAnimated},changeOutsideImage(t){const e=this.getTabByIndex(t);this.showOutsideImage=!0,this.outsideImage=(e==null?void 0:e.image)||this.fallbackImage,this.outsideAnimated=e!=null&&e.image?e.animated:this.fallbackAnimated},getTabByIndex(t){var e;return typeof t>"u"?this.getActiveTab():(e=this.accordion)==null?void 0:e.tabs[t]},allTabsClosed(){return this.states.filter(t=>t===!0).length===0},getStateByIndex(t){return this.states[t]},getId(t,e,i){return`${i}${t.id}${e}`},isExpanded(t){return t.expanded?"true":"false"},buttonClasses(t){return["accordion__btn btn btn-link btn-block d-flex justify-content-between",t.expanded?null:"collapsed"]},contentClasses(t){return["accordion__content collapse position-static",t.expanded?"show":null]},cardClasses(t){return["accordion__card",this.getStateByIndex(t)?State.EXPANDED:null]},cardStyle(t){return`--utility-animation-index: ${t}`},accordionId(t){return`#${t.id}`},cloudinary(t){return t.cloudinary||!0},getImage(t){return t.image?t.image:this.accordion.image?this.accordion.image:null},getTab(t){return t.image?t:this.accordion}},data(){return{showOutsideImage:!1,outsideImage:!1,outsideAnimated:!1,states:[],fallbackImage:!1,fallbackAnimated:!1}},props:{accordion:Object,shadowless:{default:null},left:{default:null},spacing:String},template:`
    <div :class="containerClasses" v-if="accordion.headline">
      <div class="row">
        <div :class="columnClasses">
          <headline
            :text="accordion.headline"
            :classes="headlineClasses"
          />
          <div class="accordion__subline font-size-2" v-if="accordion.subline">{{ accordion.subline }}</div>
        </div>
        <div class="row accordion__image" v-if="accordion.image">
          <v-img :img="accordion.image" :cloudinary="cloudinary(accordion)" :alt="accordion.alt" :animated="accordion.animated" />
        </div>
      </div>
    </div>
    <section :class="accordionClasses">
      <div class="row position-relative">
        <div class="accordion__image-spacer col-lg-6">
          <v-img :img="outsideImage" :cloudinary="cloudinary(accordion)" :lazy="true" :alt="accordion.alt" :animated="outsideAnimated" v-if="outsideImage" />
        </div>
        <div class="col-lg-6 position-static" :id="accordion.id">
          <div class="accordion__fallback-container mb-4 col-lg-6" v-if="outsideImage">
            <div :class="fallbackImageClasses">
              <v-img :img="outsideImage" :cloudinary="cloudinary(accordion)" :lazy="true" :alt="accordion.alt" :animated="outsideAnimated" />
            </div>
          </div>
          <div :class="cardClasses(index)" v-for="(tab, index) in accordion.tabs" :style="cardStyle(index)">
            <div class="accordion__card-header card-collapse" :id="getId(accordion, index, 'Heading')">
              <button type="button" :class="buttonClasses(tab)"
                  data-toggle="collapse"
                  :data-target="getId(accordion, index, '#Content')"
                  :aria-expanded="isExpanded(tab)"
                  :aria-controls="getId(accordion, index, 'Content')"
                  @click="handleClick(index)"
              >
                {{ tab.headline }}

                <span class="card-btn-toggle">
                  <icon icon="plus-minus" class="accordion__icon-toggle" :closed="!states[index]" />
                </span>
              </button>
            </div>
            <div :id="getId(accordion, index, 'Content')" :class="contentClasses(tab)" :aria-labelledby="getId(accordion, index, 'Heading')" :data-parent="accordionId(accordion)">
              <div class="accordion__richtext richtext richtext__small card-body">
                <div class="mb-4 col-lg-6 accordion__floating-container">
                  <div :class="imageWrapperClasses" v-if="getImage(tab)">
                    <v-img :img="getImage(tab)" :cloudinary="cloudinary(tab)" :lazy="true" :alt="tab.alt" :animated="getTab(tab).animated" />
                  </div>
                </div>
                <div class="accordion__text" v-html="tab.content"></div>
                <cta
                  v-if="tab.cta"
                  :text="tab.cta.text"
                  :link="tab.cta.link"
                  :href="tab.cta.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `},__vite_glob_0_0=Object.freeze(Object.defineProperty({__proto__:null,default:accordion},Symbol.toStringTag,{value:"Module"})),Events={REFRESH_ANIMATE_NUMBERS:"refresh-animate-numbers",FAB_BUTTON_CLOSE:"fab-button-close",FORM_AJAX_SUBMIT:"form-ajax-submit",FORM_RESET:"form-reset",FORM_ATTACHMENT_ERROR:"form-attachment-error",CHILD_HAS_UPDATE:"child-has-update",AD_BLOCK_INFO:"ad-block-info",DIMENSIONS_CHANGED:"dimensions-changed",SCROLL_UPDATE:"scroll-update",WINDOW_RESIZE:"window-resize",OPEN_MODAL:"open-modal",LOAD_MODAL:"load-modal",DROPDOWN_CHANGED:"dropdown-changed",DROPDOWN_OPENED:"dropdown-opened",CARD_TAG_CLICKED:"card-tag-clicked",ENDED:"ended"},Z=class Z{constructor(e,i){var s;e&&(this.root=e,this.options=i,(s=this.options)!=null&&s.noInit||this.root.classList.add(State.INITIALIZED))}static getInstancesKey(){return this.rootSelector.substring(1)}static expose(e){window[Z.namespacePrefix]||(window[Z.namespacePrefix]={});const i=this.getInstancesKey();window[Z.namespacePrefix][i]||(window[Z.namespacePrefix][i]=[]),window[Z.namespacePrefix][i].push(e)}static getInstance(e){const s=window[Z.namespacePrefix][this.getInstancesKey()].filter(r=>(r==null?void 0:r.root)===e);return s?s[0]:null}static initElement(e,i){const s=new this(e,i);return this.instances.push(s),this.expose(s),s}static init(e){this.instances=[];const i=e||document,s=`${this.rootSelector}:not(.${State.INITIALIZED})`;[].forEach.call(i.querySelectorAll(s),r=>{this.initElement(r)})}};z(Z,"rootSelector",""),z(Z,"instances",[]),z(Z,"namespacePrefix","baseComponents");let BaseComponent=Z;class FormAttachments{}z(FormAttachments,"rootSelector",".form-attachments"),z(FormAttachments,"base64Selector",".form-attachments__base64");let Form$1=(K=class extends BaseComponent{constructor(e,i){var s;super(e,i),e&&(this.root=e,this.formSelector=".form__form",this.gotchaSelector=".form__super-field",this.attachmentSelector='input[type="file"][required]',this.subjectSelector='input[name="_subject"]',this.companySelector='input[id="company"]',this.form=e.querySelector(this.formSelector),this.subject=e.querySelector(this.subjectSelector),this.company=e.querySelector(this.companySelector),this.groups={},this.minLengthOther=1,this.options=i,this.addCustomValidationRules(),this.updateGotcha(),this.addValidation(),this.form&&this.subject&&this.hasUrlParameter()&&this.prefillFormValues(),(s=this.options)!=null&&s.noEvents?this.isCompanyForm()&&this.addSubjectListener():this.bindEvents())}addCustomValidationRules(){window.$&&$.validator&&($.validator.methods.email=function(e,i){return this.optional(i)||K.regularExpression.test(e)})}isCompanyForm(){return!!(this.form&&this.subject&&this.company)}hasUrlParameter(){if(window.location.search!=="")return!0}prefillFormValues(){const e=new URLSearchParams(window.location.search);for(const[i,s]of e.entries())this.prefillFormValue(i,s)}prefillFormValue(e,i){const s=this.form;if(!s)return;const r=s.querySelector(`input[name="${e}"],textarea[name="${e}"]`);r&&(r.value=i)}hasCustomValidation(){return this.root.classList.contains("form--custom-validation")}hasAjaxSubmit(){return this.root.classList.contains("form--ajax")}bindEvents(){(Object.keys(this.groups).length||this.hasCustomValidation()||this.hasAjaxSubmit()||this.isCompanyForm())&&(this.form.addEventListener("submit",this.handleSubmit.bind(this)),this.form.addEventListener("reset",this.handleReset.bind(this)))}addSubjectListener(){this.form.addEventListener("submit",this.handleSubmit.bind(this))}handleReset(){K.reset(this.form)}static reset(e){!e||!e.reset||(e.reset(),[].forEach.call(e.querySelectorAll(`.${State.VALID}`),i=>{i.classList.remove(State.VALID)}),[].forEach.call(e.querySelectorAll(`.${State.ERROR}`),i=>{i.classList.remove(State.ERROR)}))}handleSubmit(e){this.validate(e)&&this.submit(e)}updateSubject(){!this.subject||!this.company||(this.subject.value=this.subject.value+": "+this.company.value)}submit(e){e.stopImmediatePropagation(),e.preventDefault(),this.updateSubject(),this.customSubmit?this.customSubmit(e):this.hasAjaxSubmit()?this.ajaxSubmit():this.form.submit()}static getId(e){return Tools.uuid()+this.delimiter+e}static getName(e){if(e.includes(this.delimiter)){const i=e.indexOf(this.delimiter);return e.slice(i+this.delimiter.length)}return e}static getFormData(e){const i=new FormData(e),s=[];for(let r of i)s.push(encodeURIComponent(r[0])+"="+encodeURIComponent(r[1]));return s.join("&")}ajaxSubmit(){const e=K.getFormData(this.form);fetch(this.form.action,{method:this.form.method||"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",body:e}).then(i=>{(i.status===200||i.status===302)&&this.ajaxSubmitCompleted()})}ajaxSubmitCompleted(){document.dispatchEvent(new CustomEvent(Events.FORM_AJAX_SUBMIT,{detail:{target:this.root}}))}triggerExternalValidation(){let e=!1;if(window.$){const i=$(this.form);if(typeof i.validate!="function")return console.error("form.validate is not a function"),!0;e=i.validate().form()}return e}validate(e){let i=this.triggerExternalValidation();return(!this.isValid(e)||i===!1)&&(e.stopImmediatePropagation(),e.preventDefault(),i=!1),i}isValid(e){e.stopImmediatePropagation();let i=!0,s=!0;this.hasAttachments()&&(i=this.validateAttachments());for(const[r,a]of Object.entries(this.groups))this.isValidGroup(a)||(i=!1,this.addGroupError(a,s),s=!1);return i}validateAttachments(){let e=!0;return[].forEach.call(this.form.querySelectorAll(FormAttachments.base64Selector),i=>{i.value||(e=!1)}),e||(e=!0,[].forEach.call(this.form.querySelectorAll(this.attachmentSelector),i=>{i.files.length===0&&(e=!1,this.addAttachmentError(i))}),e)}addAttachmentError(e){const i=Tools.getParent(e,FormAttachments.rootSelector);i!==null&&i.classList.add(State.HAS_ERROR)}hasAttachments(){return this.form.querySelector(this.attachmentSelector)}addGroupError(e,i){for(let s=0;s<e.length;s++){const r=this.getGroupParent(e[s]);e[s].classList.add(State.ERROR),r&&(i&&Tools.scrollIntoView(r),this.addErrorMessage(r))}}addErrorMessage(e){if(e&&!e.classList.contains(State.ERROR)){e.classList.add(State.ERROR);const i=document.createElement("div");i.innerHTML=e.dataset.msg,i.classList.add("invalid-feedback"),e.parentNode.insertBefore(i,e.nextSibling)}}delErrorMessage(e){e&&e.classList.contains(State.ERROR)&&(e.classList.remove(State.ERROR),e.nextSibling.remove())}delGroupError(e){for(let i=0;i<e.length;i++){const s=this.getGroupParent(e[i]);e[i].classList.remove(State.ERROR),s&&this.delErrorMessage(s)}}isValidGroup(e){const i=e.length;let s=!1;for(let r=0;r<i;r++){const a=e[r];if(a.type==="checkbox"&&a.checked)s=!0;else if(a.type==="radio"&&a.checked)s=!0;else{const n=a.closest('input[type="text"]');n&&!s&&n.value.length>=this.minLengthOther&&(s=!0)}}return s}getGroupByName(e){return this.groups[e]}addValidation(){this.form&&[].forEach.call(this.form.querySelectorAll("[data-form-group]"),e=>{e.dataset.formGroup&&(this.addGroupValidation(e),this.addLiveValidation(e))})}isRadio(e){return(e==null?void 0:e.getAttribute("type"))==="radio"}isCheckbox(e){return(e==null?void 0:e.getAttribute("type"))==="checkbox"}addLiveValidation(e){e&&(this.isCheckbox(e)||this.isRadio(e)?e.addEventListener("change",this.handleLiveValidation.bind(this)):e.addEventListener("keyup",this.handleLiveValidation.bind(this)))}groupFilter(e,i){return e?e.filter(s=>s.getAttribute("type")===i):null}handleGroupError(e,i){e.checked?this.delGroupError(i):this.isValidGroup(i)||this.addGroupError(i)}handleLiveValidation(e){const i=e.currentTarget;if(i){const s=this.getGroupByName(i.dataset.formGroup);if(!s)return;const r=this.groupFilter(s,"checkbox"),a=this.groupFilter(s,"radio");i.getAttribute("type")==="checkbox"?this.handleGroupError(i,r):i.getAttribute("type")==="radio"?this.handleGroupError(i,a):this.isValidGroup(s)?this.delGroupError(s):this.addGroupError(s)}}getGroupParent(e){var i;return(i=e.closest(".js-form-message"))==null?void 0:i.querySelector("[data-msg]")}addGroupValidation(e){if(this.getGroupParent(e)){const s=e.dataset.formGroup;this.groups[s]||(this.groups[s]=[]),this.groups[s].push(e)}}updateGotcha(){const e=this.root.querySelector(this.gotchaSelector);e==null||e.classList.add(State.HIDDEN)}canHaveCustomSubmit(){return!this.root.classList.contains(K.noCustomSubmitClass)}static isOptionalInputInvisible(e){var i;return((i=e==null?void 0:e.parentNode)==null?void 0:i.classList.contains("form-field--show-in"))&&e.offsetParent===null}static getFormData(e){if(e==null)return[];const i=e.querySelectorAll('input[type="text"], input[type="email"], textarea'),s=[];for(let r=0;r<i.length;r++){const a=i[r];if(this.isOptionalInputInvisible(a))continue;let n;(a.type==="text"||a.type==="email"||a.tagName==="TEXTAREA")&&(n=a.value),s.push({input:a,value:n})}return s}},z(K,"rootSelector",".form"),z(K,"instances",[]),z(K,"delimiter","-formHelper-"),z(K,"noCustomSubmitClass","form--no-custom-submit"),z(K,"regularExpression",/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/),K);const form=Object.freeze(Object.defineProperty({__proto__:null,default:Form$1},Symbol.toStringTag,{value:"Module"}));class PersonioPosition{constructor(e){var s;this.position=e;const i=(s=window.i18n)==null?void 0:s.loader;i&&i.then(()=>{var r;this.translationData=(r=window.i18n)==null?void 0:r.getTranslationData(["positionTypePermanently","positionTypeInternship","positionTypeTraining","positionTypeStudent"])})}get description(){return this.position.jobDescriptions&&this.position.jobDescriptions.jobDescription&&this.position.jobDescriptions.jobDescription.map?this.position.jobDescriptions.jobDescription.map((e,i)=>this.getEnhanchedDescription(i,e.name,e.value["#cdata-section"])).join(`
`):null}hasStartingHtmlTag(e){return/^\s*<[^>]+>/.test(e)}getEnhanchedDescription(e,i,s){const r=e>0&&i&&i["#text"]?`<h4>${this.trimNewlines(i["#text"])}</h4>`:"";let a=s.replace(/<\/?span[^>]*>/g,""),n=0;const l=5,o=2;return e===0?a=a.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)","g"),(h,u)=>u.length>l&&/^\s*$/.test(u)?u:n<o&&u.length>l&&u[0]!==","?(n++,"<p>"+u.trim()+"</p>"):u).replace(/<\/p><br>/g,"<br></p>"):!this.hasStartingHtmlTag(a)&&a.length>l&&(a="<p>"+a+"</p>"),`${r}${a}`.replace(/<\/p><br><p>/g,"</p><p>")}get id(){return this.getValue("id").replace(/\s/g,"")}get title(){return this.removeGenderNotations(this.getValue("name"))}removeGenderNotations(e){const i=/\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;return e.replace(i,"").trim()}get tags(){const e=this.getValue("keywords");return e?e.split(","):[]}getTeamText(e){if(!e)return;let i=e;if(i.includes("/")){const s=i.split(" / "),r=s[0],a=s[1],n="CSOC",l="Managed Services",o="Products";if(r===l&&a!==n)i=l;else if(r===o)i=`${o} ${a}`;else switch(a){case"Azure Architecture":i="Azure";break;case"M365 Architecture":i="Workplace";break;case n:i="Security";break;default:i=a;break}}return i+" Team"}get team(){const e=this.getTeamText(this.getValue("department")),i=e?" / ":"";return`${e||""}${this.positionType?i+this.positionType:""}`}get data(){return{id:this.id,title:this.title,description:this.description,team:this.team,position_type:this.positionType,tags:this.tags,order:this.order}}get positionType(){var i,s,r,a;let e=this.getValue("employmentType");switch(e){case"permanent":e=(i=window.i18n)==null?void 0:i.translate("positionTypePermanently");break;case"intern":e=(s=window.i18n)==null?void 0:s.translate("positionTypeInternship");break;case"trainee":e=(r=window.i18n)==null?void 0:r.translate("positionTypeTraining");break;case"working_student":e=(a=window.i18n)==null?void 0:a.translate("positionTypeStudent");break;default:case"freelance":case"temporary":e=null;break}return e}get order(){const e=this.tags.find(r=>r.includes("ORDER_"));if(!e)return null;const i=e.split("_")[1];return parseInt(i,10)}trimNewlines(e){return e.replace(/\n|\t|    /g,"")}getValue(e,i="text"){return this.position&&this.position[e]?this.trimNewlines(this.position[e][`#${i}`]):null}}const StatusCodes={VALID:200,CREATED:201,NO_CONTENT:204,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,PAYLOAD_TOO_LARGE:413,INTERNAL_SERVER_ERROR:500};class Personio{constructor(e){z(this,"defaultLang","de");z(this,"types",{OPENINGS:"openings",APPLICATIONS:"applications",DOCUMENTS:"documents"});z(this,"recruitingChannels",{CAREER_PAGE:1610421});z(this,"phaseIds",{NEW_APPLICATION:890494});z(this,"responseTypes",{XML:"xml",JSON:"json"});z(this,"defaultClientName","c4a8");z(this,"mockApplyUrl","mock/jobApply.json");z(this,"mockDocumentsUrl","mock/jobDocuments.json");this.options=e,(!this.options.client_name||this.options.client_name==="glueckkanja")&&(this.options.client_name=this.defaultClientName),this.lang=this.defaultLang,this.jobId=null,this.apiUrl="https://api.personio.de/v1",this.openingsUrl=`https://${this.options.client_name}.jobs.personio.de/xml`,this.applicationsUrl="https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications",this.documentsUrl="https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents"}getUrl(e){var r;let i;e!==this.types.OPENINGS&&((r=this.options.apiUrl)!=null&&r.match(/.xml$/))?e===this.types.APPLICATIONS?i=this.options.mockApplyUrl?this.options.mockApplyUrl:this.mockApplyUrl:i=this.options.mockDocumentsUrl?this.options.mockDocumentsUrl:this.mockDocumentsUrl:i=this.options.apiUrl?this.options.apiUrl:this[`${e}Url`];const s=this.lang!==this.defaultLang?this.options.apiUrl?"":`?language=${this.lang}`:"";return`${i}${s}`}setLang(e){this.lang=e}setFilter(e){this.filter=e}getAll(){const e=this.getUrl(this.types.OPENINGS);return this.fetch(e,null,this.responseTypes.XML)}getOpening(e){return this.options.jobId=e,this.getAll()}convertPosition(e){var a;const i=new PersonioPosition(e),s=(a=this.options)==null?void 0:a.jobId;return i.description===null||s&&i.id!==s||!this.filterPosition(i)?null:{...i.data,lang:this.lang}}filterPosition(e){var i,s;return!((s=(i=this.filter)==null?void 0:i.tags)!=null&&s.length)||this.filter.tags.some(r=>e.tags.map(a=>a.toLowerCase()).includes(r.toLowerCase()))?e:null}convertData(e){var a,n;const i=e,s="workzag-jobs",r=(a=e[s])==null?void 0:a.position;return i.objects=r.length?(n=e[s])==null?void 0:n.position.map(l=>this.convertPosition(l)).filter(Boolean):[this.convertPosition(r)].filter(Boolean),i.meta={offset:0,limit:20,total:10},i}getConvertedJson(e){const s=new DOMParser().parseFromString(e,"application/xml"),r=Tools.XMLtoJSON(s);return this.convertData(r)}fetchXML(e){return new Promise((i,s)=>{e.then(r=>r.text()).then(r=>{i({json:()=>this.getConvertedJson(r)})}).catch(r=>{console.error("Personio fetchXML Error:",r),s("Personio fetchXML Error")})})}fetch(e,i,s){return new Promise((r,a)=>{var n;if((n=this.options)!=null&&n.client_name){const l=fetch(e,i),o=s===this.responseTypes.XML?this.fetchXML(l):l;r(o)}else a("no client_name specified")})}async uploadDocuments(e){const i=e.length>0?e:[e],s=[];return Array.from(i).forEach(r=>{s.push(this.uploadDocument(r))}),Promise.all(s)}async uploadDocument(e){const i=this.getUrl(this.types.DOCUMENTS),s=new FormData;return s.append("file",new File([e],e.name,{type:e.type})),this.fetch(i,{method:"POST",body:s,headers:{...this.getHeaders()}})}async applyFileData(e,i,s){return new Promise((r,a)=>{this.uploadDocuments(e).then(n=>{if(this.hasValidResponseCodes(n))return this.addFilesToFields(n,s,r,a);const l=n[0];l.json().then(o=>{if(o.errors)return a({statusCode:l.status,errors:o.errors})}).catch(o=>a(o))}).catch(n=>a(n))})}addFilesToFields(e,i,s,r){const a=i;a.files=[];const n=e.map(l=>l.json().then(o=>{a.files.push({uuid:o.uuid,original_filename:o.original_filename,category:"cv"})}));return Promise.all(n).then(()=>s(a)).catch(l=>r(l))}getMappedFieldName(e){let i;switch(e){case"salary":i="salary_expectations";break;case"cancellation":i="available_from";break;case"gender":case"birthday":case"location":case"phone":i=e;break;default:i="custom_attribute_"+e;break}return i}isValidResponseCode(e){return this.options.apiUrl?e.status===StatusCodes.VALID:e.status===StatusCodes.VALID||e.status===StatusCodes.CREATED||e.status===StatusCodes.NO_CONTENT}hasValidResponseCodes(e){return e.every(i=>this.isValidResponseCode(i))}handleApply(e){return new Promise((i,s)=>{this.apply({fields:e}).then(r=>{if(this.isValidResponseCode(r))return i();r.json().then(a=>{if(a.errors)return s({statusCode:r.status,errors:a.errors})}).catch(a=>s(a))}).catch(r=>s(r))})}getFormPayload(e,i){const s={job_position_id:parseInt(this.options.jobId),attributes:[],phase:{type:"custom",id:this.phaseIds.NEW_APPLICATION},recruiting_channel_id:this.recruitingChannels.CAREER_PAGE},r={first_name:!0,last_name:!0,email:!0,message:!0};for(let a=0;a<e.length;a++){const l=e[a].input,o=i.getName(l.name),h=Tools.camalCaseToSnakeCase(o);r.hasOwnProperty(h)?s[h]=l.value:h!=="_gotcha"&&s.attributes.push({id:this.getMappedFieldName(h),value:l.value})}return s}getHeaders(){return{"Ocp-Apim-Subscription-Key":this.options.apiKey}}async apply(e){const i=this.getUrl(this.types.APPLICATIONS);return this.fetch(i,{method:"POST",body:JSON.stringify(e.fields),headers:{...this.getHeaders(),"Content-Type":"application/json"}})}}class JobListings{constructor(e){z(this,"jobDataUrl","/assets/data/jobs/");this.options=e,this.api=new Personio(this.options),this.jobDataUrl=Tools.getSiteAssetPath(this.jobDataUrl)}setLang(e){this.api.setLang(e)}setFilter(e){this.api.setFilter(e)}getAll(){return this.api.getAll()}getOpening(e){return this.api.getOpening(e)}getUrl(e,i,s){return this.api.getUrl(e,i,s)}fetch(e,i){return this.api.fetch(e,i)}getLangFromEntry(e){return e.lang||null}getJobId(){let e="";const i=window.location.hash;if(i)if(i.indexOf("-")!==-1){const s=i.split("-");e=s[s.length-1]}else e=i.substring(1);else this.options.jobId&&(e=this.options.jobId);return e}getOrderedList(e){const i=e.filter(r=>r.order!==void 0).sort((r,a)=>a.order-r.order),s=e.filter(r=>r.order===void 0);return[...i,...s]}getFormData(e){const i=Form$1.getFormData(e);return this.api.getFormPayload(i,Form$1)}applyFileData(e,i,s){return this.api.applyFileData(e,i,s)}handleApply(e){return this.api.handleApply(e)}}const gt=class gt{constructor(e,i){this.root=e,this.options=i,this.closeSelector=".modal__close",this.successCloseSelector=".modal__success-close .cta",this.errorCloseSelector=".modal__error-close .cta",this.applicationSelector=".modal__application",this.modalSuccessHeadlineSelector=".modal__success-headline > *",this.buttonSelector='[data-trigger="modal"]',this.formSelector=".form",this.close=this.root.querySelector(this.closeSelector),this.successClose=this.root.querySelector(this.successCloseSelector),this.errorClose=this.root.querySelector(this.errorCloseSelector),this.application=this.root.querySelector(this.applicationSelector),this.form=this.root.querySelector(this.formSelector),this.modalId=this.root.dataset.modalId,this.root.classList.add(State.READY),this.application&&(this.clientName=this.root.dataset.clientName,this.apiUrl=this.root.dataset.apiUrl,this.jobId=this.root.dataset.jobId,this.apiKey=this.root.dataset.apiKey,this.mockApplyUrl=this.root.dataset.mockApplyUrl,this.mockDocumentsUrl=this.root.dataset.mockDocumentsUrl,this.api=new JobListings({...this.jobId&&{jobId:this.jobId},...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName,apiKey:this.apiKey,mockApplyUrl:this.mockApplyUrl,mockDocumentsUrl:this.mockDocumentsUrl})),this.bindEvents()}isNotVueApp(e){return e.getAttribute("data-v-app")===null}bindEvents(){var e,i,s;if((e=this.close)==null||e.addEventListener("click",this.handleClose.bind(this)),(i=this.successClose)==null||i.addEventListener("click",this.handleClose.bind(this)),(s=this.errorClose)==null||s.addEventListener("click",this.handleClose.bind(this)),this.application){const r=this.root.parentNode,a=Form$1.getInstance(this.form);if(r&&this.isNotVueApp(r)){const n=r.querySelector(this.buttonSelector);n==null||n.addEventListener("click",this.handleOpen.bind(this))}else r&&this.addTriggerListeners();a&&a.canHaveCustomSubmit()&&(a.customSubmit=this.handleApplicationSubmit.bind(this))}else this.root.dataset.modalId&&this.addTriggerListeners();document.addEventListener(Events.OPEN_MODAL,this.handleModalOpen.bind(this))}addTriggerListeners(){document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach(i=>i.addEventListener("click",this.handleOpen.bind(this)))}handleModalOpen(e){var s;e.stopImmediatePropagation();const i=(s=e==null?void 0:e.detail)==null?void 0:s.id;!i||i!==this.modalId||this.handleOpen(e)}handleApplicationSubmit(e){e.preventDefault(),e.stopImmediatePropagation(),this.setLoading(!0);const i=this.form.querySelector(FormAttachments.base64Selector),s=i==null?void 0:i.value;let r=this.api.getFormData(this.form),a;if(s)a={name:i.dataset.fileName};else{const n=this.form.querySelector('input[type="file"]');a=n==null?void 0:n.files}a?this.handleApplicationRequest(r,a,s):this.handleError()}setLoading(e){document.dispatchEvent(new CustomEvent(Events.LOAD_MODAL,{detail:e}))}handleApplicationRequest(e,i,s){this.api.applyFileData(i,s,e).then(r=>{this.api.handleApply(r).then(()=>{this.setLoading(!1),this.handleApplicationSuccess(r)}).catch(a=>{this.setLoading(!1),this.handleError(a)})}).catch(r=>{this.setLoading(!1),this.handleError(r)})}handleApplicationSuccess(e){this.root.classList.add(State.SUCCESS);const i=this.root.querySelector(this.modalSuccessHeadlineSelector);if(i){i.dataset.text||(i.dataset.text=i.innerText);const s=e.first_name;i.innerText=`${i.dataset.text} ${s}`}}handleError(e){if(!e)return console.error("handle generic error");const i=typeof e=="string"?e:e.message?e.message:e,s=typeof e=="object"&&e.statusCode?e.statusCode:StatusCodes.INTERNAL_SERVER_ERROR;console.error("Modal Error",i),s===StatusCodes.PAYLOAD_TOO_LARGE?this.handlePayloadTooLarge(e):this.root.classList.add(State.ERROR)}handlePayloadTooLarge(e){document.dispatchEvent(new CustomEvent(Events.FORM_ATTACHMENT_ERROR,{detail:e}))}handleClose(e){e.preventDefault(),gt.close(this.root)}handleOpen(e){e.preventDefault(),gt.open(this.root)}static initElement(e,i){const s=new this(e,i);return this.instances.push(s),s}static open(e){e&&window.$&&$(e).modal("show")}static close(e){e&&window.$&&($(e).modal("hide"),gt.resetModal(e))}static resetModal(e){setTimeout(function(){const i=e.querySelector("form");i==null||i.reset(),e.classList.remove(State.SUCCESS),e.classList.remove(State.ERROR)},200)}static init(e){this.instances=[];const i=e||document,s=`${this.rootSelector}:not(.${State.READY})`;[].forEach.call(i.querySelectorAll(s),r=>{this.initElement(r)})}};z(gt,"rootSelector",".modal"),z(gt,"instances",[]);let Modal=gt;const modal$1=Object.freeze(Object.defineProperty({__proto__:null,default:Modal},Symbol.toStringTag,{value:"Module"})),adBlockImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100' height='400' width='400'%3E%3Cpath fill='%23e5f8ff' stroke='%23DAEDF7' stroke-miterlimit='10' d='M50.28 90C72.3714 90 90.28 72.0914 90.28 50C90.28 27.9086 72.3714 10 50.28 10C28.1886 10 10.28 27.9086 10.28 50C10.28 72.0914 28.1886 90 50.28 90Z'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M66.226 41.1997H16.464C15.9336 41.1997 15.4248 41.4104 15.0498 41.7855C14.6747 42.1606 14.464 42.6693 14.464 43.1997V75.3337H68.226V43.1997C68.226 42.6693 68.0153 42.1606 67.6402 41.7855C67.2651 41.4104 66.7564 41.1997 66.226 41.1997Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23ff866e' d='M52.994 44.9966L20.42 75.3336H18.259L18.312 44.9966H52.994Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M41.345 84.2985C55.3178 84.2985 66.645 83.5598 66.645 82.6485C66.645 81.7373 55.3178 80.9985 41.345 80.9985C27.3722 80.9985 16.045 81.7373 16.045 82.6485C16.045 83.5598 27.3722 84.2985 41.345 84.2985Z' opacity='.15'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1286H9.72V76.3286C9.72 76.0634 9.82536 75.809 10.0129 75.6215C10.2004 75.434 10.4548 75.3286 10.72 75.3286H71.97C72.2352 75.3286 72.4896 75.434 72.6771 75.6215C72.8646 75.809 72.97 76.0634 72.97 76.3286V79.1286Z'%3E%3C/path%3E%3Cpath fill='%23adc4d9' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1289C67.0954 80.8072 61.0156 81.6587 54.906 81.6589H27.784C21.6744 81.6586 15.5946 80.8071 9.72 79.1289H72.97Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' stroke='%23e04122' stroke-linecap='round' stroke-linejoin='round' d='M46.145 67.3147C45.8364 67.3155 45.5307 67.2551 45.2456 67.137C44.9605 67.0189 44.7017 66.8454 44.484 66.6267L41.345 63.4887L38.207 66.6267C37.9885 66.8449 37.7292 67.0179 37.4439 67.1359C37.1586 67.2539 36.8528 67.3145 36.5441 67.3143C36.2353 67.3141 35.9296 67.2531 35.6444 67.1348C35.3593 67.0165 35.1002 66.8431 34.882 66.6247C34.6638 66.4062 34.4908 66.1469 34.3728 65.8616C34.2548 65.5763 34.1942 65.2705 34.1944 64.9618C34.1945 64.653 34.2555 64.3473 34.3739 64.0621C34.4922 63.777 34.6655 63.5179 34.884 63.2997L38.022 60.1607L34.884 57.0227C34.6602 56.8058 34.4818 56.5465 34.3592 56.2599C34.2365 55.9734 34.1721 55.6653 34.1697 55.3536C34.1673 55.042 34.2269 54.7329 34.345 54.4445C34.4632 54.1561 34.6376 53.894 34.8579 53.6737C35.0783 53.4533 35.3404 53.2789 35.6288 53.1608C35.9172 53.0426 36.2262 52.983 36.5379 52.9854C36.8496 52.9878 37.1577 53.0522 37.4442 53.1749C37.7308 53.2975 37.99 53.4759 38.207 53.6997L41.345 56.8387L44.484 53.6997C44.927 53.2703 45.521 53.0323 46.1379 53.0371C46.7548 53.0419 47.3451 53.2891 47.7813 53.7253C48.2176 54.1616 48.4648 54.7519 48.4696 55.3688C48.4744 55.9857 48.2364 56.5797 47.807 57.0227L44.668 60.1607L47.807 63.2997C48.1354 63.6284 48.359 64.0471 48.4496 64.5029C48.5401 64.9586 48.4935 65.431 48.3156 65.8603C48.1377 66.2895 47.8366 66.6565 47.4502 66.9146C47.0639 67.1728 46.6097 67.3106 46.145 67.3107V67.3147Z'%3E%3C/path%3E%3Cpath fill='%2300b8f0' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%2380ddff' d='M71.567 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V42.2998L71.567 15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M49.932 21.279C50.8549 21.279 51.603 20.5309 51.603 19.608C51.603 18.6851 50.8549 17.937 49.932 17.937C49.0091 17.937 48.261 18.6851 48.261 19.608C48.261 20.5309 49.0091 21.279 49.932 21.279Z'%3E%3C/path%3E%3Cpath fill='%23ffe500' d='M55.789 21.279C56.7119 21.279 57.46 20.5309 57.46 19.608C57.46 18.6851 56.7119 17.937 55.789 17.937C54.8661 17.937 54.118 18.6851 54.118 19.608C54.118 20.5309 54.8661 21.279 55.789 21.279Z'%3E%3C/path%3E%3Cpath fill='%2348cf3e' d='M61.646 21.279C62.5688 21.279 63.317 20.5309 63.317 19.608C63.317 18.6851 62.5688 17.937 61.646 17.937C60.7231 17.937 59.975 18.6851 59.975 19.608C59.975 20.5309 60.7231 21.279 61.646 21.279Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M55.999 34.052C56.9103 34.052 57.649 33.3132 57.649 32.402C57.649 31.4907 56.9103 30.752 55.999 30.752C55.0877 30.752 54.349 31.4907 54.349 32.402C54.349 33.3132 55.0877 34.052 55.999 34.052Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M76.899 34.052C77.8103 34.052 78.549 33.3132 78.549 32.402C78.549 31.4907 77.8103 30.752 76.899 30.752C75.9877 30.752 75.249 31.4907 75.249 32.402C75.249 33.3132 75.9877 34.052 76.899 34.052Z'%3E%3C/path%3E%3Cpath fill='%23c7f0ff' stroke='%233887B7' stroke-linecap='round' stroke-linejoin='round' d='M80.12 39.6307C80.1097 40.0406 79.9395 40.4302 79.646 40.7165C79.3524 41.0028 78.9585 41.163 78.5485 41.163C78.1384 41.163 77.7446 41.0028 77.451 40.7165C77.1574 40.4302 76.9873 40.0406 76.977 39.6307C76.977 38.7627 78.549 35.7017 78.549 35.7017C78.549 35.7017 80.12 38.7627 80.12 39.6307Z'%3E%3C/path%3E%3Cpath fill='%23ffb59e' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M61.727 44.2536C61.5404 44.2535 61.3563 44.2108 61.1886 44.1288C61.021 44.0468 60.8743 43.9277 60.7596 43.7804C60.645 43.6332 60.5654 43.4618 60.527 43.2791C60.4886 43.0965 60.4924 42.9076 60.538 42.7266C60.8732 41.4135 61.6361 40.2494 62.7064 39.418C63.7766 38.5866 65.0933 38.1353 66.4485 38.1353C67.8037 38.1353 69.1204 38.5866 70.1906 39.418C71.2609 40.2494 72.0238 41.4135 72.359 42.7266C72.406 42.9073 72.4106 43.0964 72.3722 43.2791C72.3339 43.4618 72.2537 43.6331 72.138 43.7796C72.0236 43.9274 71.8769 44.0469 71.7091 44.1291C71.5413 44.2113 71.3569 44.2539 71.17 44.2536C69.6156 43.9216 68.0367 43.7176 66.449 43.6436C64.861 43.7176 63.2817 43.9216 61.727 44.2536V44.2536Z'%3E%3C/path%3E%3C/svg%3E",LangData={de:{tags:"Schlagwörter",tagsHeadline:"Posts nach Schlagwörtern",tagsClear:"Zurücksetzen",posts:"Einträge",follow:"Folgen",similarPosts:"Ähnliche Artikel",withAuthor:"Mit",adBlockInfo:`
        <div class="ad-block-info__content">
          <img src="${adBlockImage}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Hoppla, Adblocker erkannt!</h5>
            <div class="ad-block-info__text">Damit unsere Website reibungslos funktioniert, füge uns zur Whitelist hinzu. Wir nerven nicht mit Werbung. Versprochen!</div>
          </div>
        </div>`,vatInfo:"*Alle Preise sind exklusive Mehrwertsteuer. Unsere Angebote richten sich ausschließlich an gewerbliche Kunden."},en:{tags:"Tags",tagsHeadline:"Posts by Tags",tagsClear:"Clear all",posts:"Posts",follow:"Follow",similarPosts:"Similar Posts",withAuthor:"With",adBlockInfo:`
        <div class="ad-block-info__content">
          <img src="${adBlockImage}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detected!</h5>
            <div class="ad-block-info__text">To keep our website running smoothly, add us to the whitelist. We won't annoy you with ads. Promise!</div>
          </div>
        </div>`,vatInfo:"*All prices are excluding VAT. Our offers are addressing professional customers, only."},es:{tags:"Tags",tagsHeadline:"Entradas por Tags",tagsClear:"Borrar todo",posts:"Puestos",follow:"Siga",similarPosts:"Puestos similares",withAuthor:"Con",adBlockInfo:`
        <div class="ad-block-info__content">
          <img src="${adBlockImage}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detectado!</h5>
            <div class="ad-block-info__text">Para que nuestro sitio web funcione correctamente, añádenos a tu lista blanca. No te molestaremos con publicidad. Te lo prometemos.</div>
          </div>
        </div>`,vatInfo:"*Todos los precios son sin IVA. Nuestras ofertas se dirigen exclusivamente a clientes profesionales."}},Lang=LangData[Tools.getLang()],adBlockInfo={tagName:"ad-block-info",props:{text:String,show:{default:null}},computed:{textValue(){return this.text.length>0?this.text:Lang==null?void 0:Lang.adBlockInfo}},data(){return{disableDelay:30*24*60*60*1e3,storageKey:"adBlockInfo"}},mounted(){this.bindEvents(),Tools.isTrue(this.show)&&this.openModal()},methods:{bindEvents(){this.isDisabled()||document.addEventListener(Events.AD_BLOCK_INFO,()=>{this.openModal()})},openModal(){var t;Modal.open((t=this.$refs["modal-component"])==null?void 0:t.modal),this.disableInfoByTime()},disableInfoByTime(){const t=Date.now()+this.disableDelay;Tools.storageSave(this.storageKey,t)},isDisabled(){const t=Tools.storageGet(this.storageKey);return t&&t>0&&Date.now()<=t}},template:`
    <div class="ad-block-info vue-component" v-if="textValue">
      <modal
        ref="modal-component"
        notification=true
      >
        <div class="container">
          <div class="row">
            <div class="col" v-html="textValue"></div>
          </div>
        </div>
      </modal>
    </div>
  `},__vite_glob_0_1=Object.freeze(Object.defineProperty({__proto__:null,default:adBlockInfo},Symbol.toStringTag,{value:"Module"})),asideWrapper={tagName:"aside-wrapper",methods:{},props:{},template:`
    <div class="aside-wrapper vue-component">
      <div class="aside-wrapper__content">
        <slot name='content'></slot>
      </div>
      <aside class="aside-wrapper__aside">
        <slot name='aside'></slot>
      </aside>
    </div>
  `},__vite_glob_0_2=Object.freeze(Object.defineProperty({__proto__:null,default:asideWrapper},Symbol.toStringTag,{value:"Module"})),authorAvatar={tagName:"author-avatar",data(){return{defaultImageOffsetLeft:"50%",defaultImageOffsetTop:"60%"}},computed:{classList(){return["author__avatar vue-component",this.classes?this.classes:""]},style(){const t=this.author.imageOffsetLeft||this.defaultImageOffsetLeft,e=this.author.imageOffsetTop||this.defaultImageOffsetTop;return`left:${t};top:${e}`}},methods:{},props:{author:{default:null},classes:String,imgUrl:String},template:`
    <div :class="classList">
      <div class="author__avatar-frame">
        <div :style="style">
          <v-img :img="imgUrl" :cloudinary=true preset="avatar" :alt="author.display_name" />
        </div>
      </div>
    </div>
  `},__vite_glob_0_3=Object.freeze(Object.defineProperty({__proto__:null,default:authorAvatar},Symbol.toStringTag,{value:"Module"})),authorHeader={tagName:"author-header",data(){return{translationData:{}}},computed:{classList(){return["author-header row mb-4 mb-lg-5 vue-component",this.classes?this.classes:""]}},beforeMount(){var e;const t=(e=window.i18n)==null?void 0:e.loader;t&&t.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["posts"])})},methods:{},props:{author:{default:null},classes:String,imgUrl:String,postCount:Number},template:`
    <div :class="classList">
      <div class="author-header__back back">
        <icon icon='arrow' direction='left' hover=true circle=true />
      </div>
      <author-avatar :author="author" :imgUrl="imgUrl" classes="col-6 col-sm-4 col-lg-2 pl-lg-0 mb-5 mb-lg-0"></author-avatar>
      <div class="author-header__meta col-lg-8 mt-lg-5 mb-2 mb-lg-0">
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <h1 class="author-header__name h2" itemprop="name">{{ author.display_name }}</h1>
        </span>
        <span class="author-header__post-count">{{ postCount }}</span> <span class="ml-1">{{ translationData?.posts }}</span>
      </div>
    </div>
  `},__vite_glob_0_4=Object.freeze(Object.defineProperty({__proto__:null,default:authorHeader},Symbol.toStringTag,{value:"Module"})),authors={tagName:"authors",computed:{classList(){return["authors",`${Tools.isTrue(this.noLink)===!0?"authors authors--no-link":"authors"}`,"vue-component"]},seperator(){return this.noLink?" & ":", "},authorArray(){return typeof this.authorsList=="object"?this.authorsList:[this.authorsList]},hasDataAndAuthors(){return this.authorArray&&this.dataAuthors},langValue(){return this.lang?this.lang:Tools.getLang()}},methods:{authorsSeperator(t,e){return t[t.length-1]===e},authorStart(t,e){if(t[0]===e)return this.dataLang.withAuthor},authorLink(t){var i;const e=Tools.isNotDefaultLang()?"/"+this.langValue:"";return(i=this.dataAuthors)!=null&&i.hasOwnProperty(t)?`${e}${this.dataAuthors[t].permalink}`:null}},props:{authorsList:Array,noLink:{default:null},dataLang:{default:"de"},dataAuthors:{default:null},lang:String},template:`
    <template v-if="hasDataAndAuthors">
      <span :class="classList" v-for="author in authorArray">
        <template v-if="!noLink">
          <a :href="authorLink(author)" class="authors__link post-teaser__auto" itemprop="author" itemscope itemtype="https://schema.org/Person">
            <span class="authors__name" itemprop="name">{{ author }}</span>
          </a>
        </template>
        <template v-else>
          <span class="authors__name" itemprop="name">{{ authorStart(authorArray, author) }} {{ author }}</span>
        </template>
        <template v-if="!authorsSeperator(authorArray, author)">
          {{ seperator }}&nbsp;
        </template>
      </span>
    </template>
  `},__vite_glob_0_5=Object.freeze(Object.defineProperty({__proto__:null,default:authors},Symbol.toStringTag,{value:"Module"})),awards={tagName:"awards",migrate:!0,template:`
                awards
            `},__vite_glob_0_6=Object.freeze(Object.defineProperty({__proto__:null,default:awards},Symbol.toStringTag,{value:"Module"})),backToTop$1={tagName:"back-to-top",migrate:!0,template:`
              back-to-top
          `},__vite_glob_0_7=Object.freeze(Object.defineProperty({__proto__:null,default:backToTop$1},Symbol.toStringTag,{value:"Module"})),badge={tagName:"badge",props:{text:String,overlapping:Boolean,icon:String,color:{type:String,default:"var(--color-badge-background)"},textColor:{type:String,default:"var(--color-badge-icon)"},uppercase:Boolean,classes:String},computed:{classList(){return["badge","badge--normal","font-size-1","normal",{"badge--overlapping":this.overlapping},{"badge--uppercase":this.uppercase},this.classes]},style(){return{backgroundColor:this.color,color:this.textColor}}},template:`
    <div :class="classList" :style="style">
      <div class="badge__text">{{ text }}</div>
      <div v-if="icon" class="badge__icon">
        <icon :icon="icon" color="var(--color-badge-icon)" size="medium" />
      </div>
    </div>
  `},__vite_glob_0_8=Object.freeze(Object.defineProperty({__proto__:null,default:badge},Symbol.toStringTag,{value:"Module"}));class StickyScroller{constructor(e){this.root=e,this.setOffsets(),this.setMarginTop(),this.firstChild=document.querySelector("main > *:first-child"),this.isUpdating=!1,this.maxPercentage=100,this.lastPercentage=!1,this.header=document.querySelector("header"),this.headerSpacer=document.querySelector(".header__spacer"),this.main=document.querySelector("main"),this.setup(),this.bindEvents(),this.setStickyPosition()}bindEvents(){window.addEventListener("scroll",this.handleScroll.bind(this)),document.addEventListener(Events.WINDOW_RESIZE,this.handleResize.bind(this)),document.addEventListener(Events.DIMENSIONS_CHANGED,this.handleDimensionsChanged.bind(this))}addDebugPositions(){this.topPosition=document.createElement("div"),this.bottomPosition=document.createElement("div");const e=document.querySelector("main");e.appendChild(this.topPosition),e.appendChild(this.bottomPosition),this.bottomPosition.style.position=this.topPosition.style.position="absolute",this.bottomPosition.style.boxSizing="content-box",this.bottomPosition.style.left=this.topPosition.style.left=0,this.bottomPosition.style.width=this.topPosition.style.width="30px",this.bottomPosition.style.height=this.topPosition.style.height="2px",this.bottomPosition.style.backgroundColor="rgba(255, 255, 0, 1)",this.bottomPosition.style.border="1px solid rgb(0, 0, 0)",this.topPosition.style.backgroundColor="rgba(255, 0, 0, 1)",this.bottomPosition.style.zIndex=this.topPosition.style.zIndex=1e3,this.bottomPosition.style.pointerEvents=this.topPosition.style.pointerEvents="none",this.updateDebugPositions()}updateDebugPositions(){!this.topPosition||!this.bottomPosition||(this.topPosition.style.top=(this.calculatedOffsetTop||this.currentTopPosition)+"px",this.bottomPosition.style.top=(this.calculatedOffsetBottom||this.currentBottomPosition)+"px")}setMarginTop(){this.marginTop=parseInt(window.getComputedStyle(this.root).marginTop.replace("px",""),10)}handleDimensionsChanged(e){e.detail===this.root&&this.handleResize()}setOffsets(){this.offsetTop=this.root.offsetTop,this.offsetBottom=this.offsetTop+this.root.offsetHeight}handleResize(){this.resetElements(),this.setOffsets(),this.setDimensions(),this.setPositions(),this.setStickyPosition()}handleScroll(){this.isUpdating||(this.isUpdating=!0,window.requestAnimationFrame(this.setStickyPosition.bind(this)))}getHeaderHeight(){var e,i;return this.isHeaderSticky()?((i=this.headerSpacer)==null?void 0:i.offsetHeight)||0:((e=this.header)==null?void 0:e.offsetHeight)||0}isHeaderSticky(){if(!this.header)return!1;const e=window.getComputedStyle(this.header);return e.position==="fixed"||e.position==="absolute"||e.position==="sticky"}updateClipPath(e){const i="inset(0% 0% "+e+"%)";this.root.style.clipPath=i,this.isUpdating=!1}isFirstChild(e){return this.firstChild===e}isSticky(){return this.root.classList.contains(State.STICKY)}setPositions(){this.setTopPosition(),this.setBottomPosition()}setTopPosition(){this.currentTopPosition=this.root.offsetTop}setBottomPosition(){this.currentBottomPosition=this.root.offsetTop+this.root.offsetHeight}getMainOffsetTop(){var e;return((e=this.main)==null?void 0:e.offsetTop)||0}getPercentage(e,i){this.calculatedOffsetTop=this.currentTopPosition-i-this.marginTop+this.getMainOffsetTop(),this.calculatedOffsetBottom=this.currentBottomPosition-i+this.getMainOffsetTop(),this.marginTop<0&&(this.calculatedOffsetBottom-=this.marginTop);let s=e,r;if(this.calculatedOffsetBottom>=s){let a=this.root.offsetHeight/100;this.calculatedOffsetTop<0?r=s/a:r=(s-this.calculatedOffsetTop)/a}else r=this.maxPercentage;return parseFloat(r.toFixed(2))}isOutOfViewport(e){return e>=this.maxPercentage||e<0}setStickyPosition(){const e=this.getHeaderHeight(),i=window.scrollY,s=this.root.offsetHeight-window.innerHeight,r=s>0?this.offsetBottom:this.offsetBottom-e;let a=s>0?-s:0;a=a-this.marginTop;const n=this.getPercentage(i,a),l=this.isOutOfViewport(n),o=i>r-window.innerHeight;!l&&o?(this.spacer.style.height||(this.fixScrollPosition=!0,this.spacer.style.marginTop=this.marginTop+"px",this.spacer.style.height=this.height+"px",this.root.style.width=this.spacer.style.width=this.width+"px",this.root.style.height=this.height+"px",this.root.style.left="50%",this.root.style.transform="translateX(-50%)"),this.root.style.top=a+"px",this.root.classList.remove(State.OFF_SCREEN),this.root.classList.add(State.STICKY),this.updateClipPath(n)):n===0?(this.isUpdating=!1,this.root.classList.remove(State.OFF_SCREEN)):this.disableStickyness(),this.updateDebugPositions()}disableStickyness(){this.root.classList.remove(State.STICKY),this.root.classList.add(State.OFF_SCREEN),this.root.style.top="",this.root.style.clipPath="",this.root.style.width="",this.root.style.height="",this.spacer.style.height="",this.spacer.style.marginTop="",this.root.style.left="",this.root.style.transform="",this.isUpdating=!1}setup(){const e=this.root.parentNode;this.spacer=document.createElement("div"),e&&(this.spacer.classList.add("sticky-scroller__spacer"),this.setDimensions(),e.insertBefore(this.spacer,this.root.nextSibling),this.root.dataset.stickyScroller=!0,this.setPositions(),this.setNextElementColor())}hasBackground(){return this.root.classList.contains(State.HAS_BACKGROUND)||Tools.getElementBgColor(this.root)}setNextElementColor(){if(!this.hasBackground())return;const e=this.spacer.nextSibling,i="--color-sticky-scroller";if(!e)return;const s=Tools.getElementBgColor(e)||Tools.getElementBgColor(e.firstChild);this.spacer.style.setProperty(i,s),this.spacer.classList.add(State.HAS_BACKGROUND)}setDimensions(){const e=document.body.getBoundingClientRect().width;this.width=this.root.clientWidth>e?e:this.root.clientWidth,this.height=this.root.clientHeight,this.spacer.style.width=this.width+"px"}resetElements(){this.root.style.top="",this.spacer.style.marginTop="",this.root.style.height=this.root.style.width=this.spacer.style.width=this.spacer.style.height="",this.root.style.clipPath="",this.root.classList.remove(State.STICKY)}static init(){this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),e=>{this.instances.push(new this(e))})}static getRootClass(){return this.rootSelector.substring(1)}}z(StickyScroller,"rootSelector",".is-sticky-scroller"),z(StickyScroller,"instances",[]);const stickyScroller=Object.freeze(Object.defineProperty({__proto__:null,default:StickyScroller},Symbol.toStringTag,{value:"Module"})),blogRecent={tagName:"blog-recent",computed:{classList(){return["blog-recent utility-animation utility-animation--percentage-offset",`${this.hasBackground}`,`${this.skinClass}`,`${Tools.isTrue(this.hideContainer)===!0?"":this.getSpacing}`,`${Tools.isTrue(this.sticky)===!0?StickyScroller.rootSelector.substring(1):""}`,"vue-component"]},getSpacing(){return this.spacing?this.spacing:""},hasBackground(){return this.bgColor?State.HAS_BACKGROUND:""},blogRecentContainerClass(){return["blog-recent__container fade-in-bottom",`${Tools.isTrue(this.slider)===!0?"js-slick-carousel":"row mb-3"}`,"vue-component"]},hiddenContainer(){return Tools.isTrue(this.slider)===!1?Tools.isTrue(this.hideContainer):!1},skinClass(){return`${Tools.isTrue(this.slider)===!0?"has-slider":""}`},itemClass(){return`${Tools.isTrue(this.slider)===!0?"mb-6 mb-lg-0 blog-recent__slide":"col-sm-6 col-lg-4 mb-3 mb-sm-8"}`},postsArray(){return this.posts?JSON.parse(this.posts):[]},ctaParse(){return this.cta?JSON.parse(this.cta):null},caseStudies(){return Tools.isTrue(this.caseStudies)===!0},carouselOptions(){const t={slidesToShow:3,slidesToScroll:3,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:this.postsArray.length>3,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{centerMode:!0,infinite:!0,centerPadding:"30px",slidesToShow:2,slidesToScroll:2,dots:this.postsArray.length>2}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.postsArray.length>1}}]};return JSON.stringify(t)},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){const t="h2-font-size";return this.headlineClasses?Tools.hasFontSizeClass(this.headlineClasses)?this.headlineClasses:`${t} ${this.headlineClasses}`:t},sublineClassesValue(){return`blog-recent__subline ${this.sublineClasses?this.sublineClasses:"font-size-2"}`}},methods:{event(t){return t.layout!=="post"},isTrue(t){return Tools.isTrue(t)},blogTitleUrl(t){return t.layout==="casestudies"?t.blogtitlepic:this.imgUrl+t.blogtitlepic},target(t){return t.external?"_blank":"_self"}},props:{bgColor:String,dataAuthors:Object,headline:String,headlineLevel:String,headlineClasses:String,subline:String,sublineClasses:String,spacing:String,posts:String,cta:{default:null},hideContainer:{default:!1},imgUrl:{default:null},limit:{default:null},slider:{default:null},sticky:{default:null}},template:`
    <template v-if="postsArray.length > 0">
      <div :class="classList">
        <div class="blog-recent__bg" :style="{ 'background-color' : bgColor  }" v-if="skinClass !== ''"></div>
        <wrapper :hideContainer="hiddenContainer">
          <div class="row" v-if="headline">
            <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom" data-utility-animation-step="1">
              <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
              <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
            </div>
          </div>
          <div :class="blogRecentContainerClass" :data-hs-slick-carousel-options="carouselOptions" data-utility-animation-step="1">
            <template v-for="(post, index) in postsArray">
              <div :class="itemClass" v-if="index <= limit">
                <card :url="post.url" :title="post.title" :blog-title-pic="blogTitleUrl(post)" :youtube-url="post.youtubeUrl" :excerpt="post.excerpt" :date="post.date" :author="post.author" :target="target(post)" :event="event(post)" :dataAuthors="dataAuthors" :external-language="post.externalLanguage">
              </div>
            </template>
          </div>
          <div class="blog-recent__cta-row row col-lg-12" v-if="ctaParse">
            <cta :text="ctaParse?.text" :button="ctaParse?.button" :target="ctaParse?.target" :width="ctaParse?.width" :href="ctaParse?.href" :external="ctaParse?.external" />
          </div>
        </wrapper>
      </div>
    </template>
  `},__vite_glob_0_9=Object.freeze(Object.defineProperty({__proto__:null,default:blogRecent},Symbol.toStringTag,{value:"Module"})),blog={tagName:"blog",migrate:!0,template:`
            blog
        `},__vite_glob_0_10=Object.freeze(Object.defineProperty({__proto__:null,default:blog},Symbol.toStringTag,{value:"Module"})),cardFooter={tagName:"card-footer",data(){return{maxTags:3}},computed:{lang(){return Tools.getLang()},tagsList(){return(Array.isArray(this.tags)?this.tags:this.tags.split(",")).slice(0,this.maxTags)},dataAuthorsList(){return this.dataAuthors?this.dataAuthors.display_name?{[this.dataAuthors.display_name]:this.dataAuthors}:this.dataAuthors:null}},template:`
    <div class="card__footer">
      <div class="card__tags" v-if="tags">
        <tag v-for="tag in tagsList" :key="tag" :tag="tag" variant="small" :lang="lang"></tag>
      </div>
      <div class="card__footer-infos d-flex align-items-end mt-auto" >
        <div :class="['card__date d-flex font-size-1 mr-3', isRow ? '' : 'media-body']">
          {{ date }}
        </div>
        <div class="card__authors" v-if="author">
          <authors :authorsList="authorsList" :noLink="hasNoLink" :dataAuthors="dataAuthorsList"></authors>
        </div>
      </div>
    </div>
  `,props:{classes:String,date:String,author:String,authorsList:Array,hasNoLink:Boolean,dataAuthors:Object,isRow:Boolean,tags:Array}},card={tagName:"card",components:{"card-footer":cardFooter},data(){return{wordsToTruncate:20,activeView:null}},computed:{blogView(){return this.activeView},combinedTitle(){return`${this.title} ${this.externalLanguage?"("+this.externalLanguage+")":""}`},noLink(){return this.url===void 0||this.url===""},indexValue(){return this.index!=""&&this.index>=0?this.index:null},style(){return this.index?`--utility-animation-index: ${this.index}`:null},hasAnimationValue(){return Tools.isTrue(this.hasAnimation)===!0},utilityAnimationStep(){return this.hasAnimationValue?"1":null},rowValue(){return Tools.isTrue(this.row)===!0},variant(){return Tools.isTrue(this.long)===!0?"card--long":this.productValue?"card--products":Tools.isTrue(this.event)===!0?"card--event":this.rowValue?"card--row":"card--default"},classList(){return["card",this.hasAnimationValue?"utility-animation fade-in-bottom":"",`${this.noLink?"card--no-link":""}`,`${Tools.isTrue(this.large)===!0?"card--large mb-11":"h-100"}`,this.variant,this.spacing,"vue-component"]},productValue(){return Tools.getJSON(this.product)},truncatedExcerpt(){const t=Tools.isTrue(this.long)===!0?this.strippedExcerpt:Tools.truncateWords(this.strippedExcerpt,this.wordsToTruncate);return Tools.decodeHTML(t)},strippedExcerpt(){return Tools.stripHtml(this.excerpt)},cardDate(){return this.formatDate(this.date)},hasExtension(){return this.youtubeUrl?Tools.getYoutubeThumbnail(this.youtubeUrl):/^.+\.(jpg|webp|png)/.test(this.blogTitlePic)?this.blogTitlePic:this.blogTitlePic+".jpg"},hasBlogTitlePic(){return!this.youtubeUrl},hasNoLink(){return!!Tools.isTrue(this.webCast)},ctaValue(){const t=Tools.getJSON(this.cta);return t&&t.link===void 0&&(t.link=!0),t},cardFooterData(){return{date:this.cardDate,author:this.author,authorsList:this.authorList(this.author),hasNoLink:this.hasNoLink,dataAuthors:this.dataAuthors,isRow:this.rowValue,tags:this.tags}}},created(){if(Tools.isTrue(this.store)!==!0)return;const t=this.$root.StoreData.blogView;if(!t)return null;this.activeView=t(),t.subscribe(e=>{this.activeView=e})},methods:{isTags(t){return!!(t.parentElement.classList.contains("tags__btn")||t.parentElement.classList.contains("card__tags"))},formatDate(t){if(!t)return;if(Tools.isGermanDate(t))return t;const i=t.split(" ")[0].split("-"),s=i[0],r=i[1];return`${i[2]}.${r}.${s}`},authorList(t){return t&&typeof t=="object"&&t.length>0?t:t&&typeof t=="string"?[t]:t},subPointsList(t){return Tools.getJSON(t)},headlineClassValue(t){return t!==0?"mt-5":""},handleClick(t){if(this.noLink)return;const e=this.$refs.title,i=t.target;if(i.classList.contains("card__title"))return;const s=this.isTags(i);if(!i.parentElement.classList.contains("authors__link")&&!s)t.stopImmediatePropagation(),e.click();else{if(!s)return;t.stopImmediatePropagation(),t.preventDefault(),this.$emit(Events.CARD_TAG_CLICKED,i.dataset.tag)}},isIncluded(t){return Tools.isTrue(t)?"check-mark":"x-mark"}},props:{blogTitlePic:String,url:String,title:String,target:String,excerpt:String,author:Array,date:String,footer:String,tag:{default:null},large:{default:null},long:{default:null},product:{default:null},subPoints:{default:null},event:{default:null},webCast:{default:null},youtubeUrl:String,dataAuthors:Object,scope:String,cta:{default:null},hasAnimation:{default:null},index:Number,externalLanguage:String,spacing:String,store:{default:null},row:{default:null},tags:Array},template:`
    <article :class="classList" itemscope itemtype="http://schema.org/BlogPosting"
      :onclick="handleClick"
      :data-utility-animation-step="utilityAnimationStep"
      :style="style"
    >
      <template v-if="large">
        <div class="row no-gutters">
          <div class="col-lg-8" v-if="blogTitlePic">
            <div class="card__img-top position-relative overflow-hidden is-foreground">
              <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
              <figure class="d-none d-lg-block">
                <svg class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%">
                  <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
                </svg>
              </figure>
              <figure class="d-lg-none mb-n1">
                <svg class="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card__body card-body d-flex flex-column h-100 p-4 p-lg-5">
              <headline level="h3"><a class="card__title text-inherit" ref="title" :href="url" :target="target">{{ combinedTitle }}</a></headline>
              <p v-html="truncatedExcerpt"></p>
              <card-footer v-bind="cardFooterData" />
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="productValue">
        <div class="card__img-top card-img--products position-relative no-gutters is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
          <div class="card__img-headline-container">
            <template v-if="tag">
              <span class="card__img-tag"
              :style="{'background-color': tag.bgColor, 'color': tag.color }">
                {{ tag.text }}
              </span>
            </template>
            <headline level="h4" classes="card__img-headline text-light text-center">
              <p class="w-100 pt-5 mb-0 no-gutters">
                {{ title }}
              </p>
            </headline>
            <div class="card-img-cutoff" />
          </div>
        </div>

        <div class="card__body card-body mt-0 pt-0 z-index-2">
          <template v-for="(info, index) in subPointsList(productValue)">
            <headline :class="headlineClassValue(index)" level="h6" :text="info.title"/>
            <template v-for="points in info.subpoints">
              <div class="card__check-mark-row">
                <span class="card__check-placeholder" v-if="points.hideIcon"></span>
                <icon class="card__check-mark-icon" v-else :icon="isIncluded(points.included)" size="medium" />
                <span class="card__check-mark-point">{{ points.subpoint }}</span>
              </div>
            </template>
          </template>
        </div>
     </template>

      <template v-else-if="long">
        <div class="card__img-top position-relative no-gutters is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
        </div>

        <div class="card__body card-body richtext">
          <div class="card__scope" v-if="scope">{{ scope }}</div>
          <headline level="h4"><a ref="title" class="card__title text-inherit text-decoration-none text-reset mt-4 mb-4" :href="url" :target="target">{{ combinedTitle }}</a></headline>
          <p class="mb-4 mt-4" v-html="truncatedExcerpt"></p>

          <ul class="card__points text-black">
            <template v-for="points in subPointsList(subPoints)">
              <li class="mb-4"><span>{{ points }}</span></li>
            </template>
          </ul>
          <p class="card-warning" v-if="footer">{{ footer }}</p>

          <div class="card__link" v-if="cta">
            <cta v-bind="ctaValue" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="card__img-top position-relative is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
          <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
              <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
            </svg>
          </figure>
        </div>

        <div class="card__content">
          <div class="card__body card-body">
            <headline level="h4"><a ref="title" class="card__title text-inherit" :href="url" :target="target">{{ combinedTitle }}</a></headline>
            <p v-html="truncatedExcerpt"></p>
          </div>

          <div class="card-footer border-0 pt-0">
            <card-footer v-bind="cardFooterData" />
          </div>
        </div>
      </template>
    </article>
  `},__vite_glob_0_11=Object.freeze(Object.defineProperty({__proto__:null,default:card},Symbol.toStringTag,{value:"Module"})),carouselItem={tagName:"carousel-item",template:`
    <a :href="item.url" :target="item.target" class="carousel__item">
      <v-img
        cloudinary=true
        v-bind="item"
        :class="item.classes"
      ></v-img>
    </a>
  `,props:{item:Object}},carousel={tagName:"carousel",components:{"carousel-item":carouselItem},data(){return{clientWidth:null,resizeObserver:null}},computed:{jsonItems(){return Tools.getJSON(this.items)},classList(){return["carousel vue-component",this.bgColor?State.HAS_BACKGROUND:""]},style(){return[this.bgColor?`--color-carousel-background: ${this.bgColor};`:"",this.clientWidth?`--animation-scroll-width: -${this.clientWidth}px;`:""]}},mounted(){const t=this.$refs["row-section"];this.resizeObserver=new ResizeObserver(e=>{for(let i of e)i.target===t&&(this.clientWidth=i.contentRect.width)}),t&&(this.resizeObserver.observe(t),window.addEventListener("resize",this.updateClientWidth))},beforeDestroy(){window.removeEventListener("resize",this.updateClientWidth)},methods:{updateClientWidth(){var t;this.clientWidth=(t=this.$refs["row-section"])==null?void 0:t.clientWidth}},props:{items:Array,bgColor:String},template:`
    <div :class="classList" ref="carousel" :style="style">
      <div class="carousel__container">
        <div class="carousel__row">
          <section class="carousel__row-section" ref="row-section">
            <carousel-item :item="item" v-for="(item, index) in jsonItems" :key="index" />
          </section>
          <section class="carousel__row-section">
            <carousel-item :item="item" v-for="(item, index) in jsonItems" :key="index" />
          </section>
        </div>
      </div>
    </div>
  `},__vite_glob_0_12=Object.freeze(Object.defineProperty({__proto__:null,default:carousel},Symbol.toStringTag,{value:"Module"})),checkCard={tagName:"check-card",computed:{classList(){return["check-card vue-component",this.hasProducts?"check-card--products":null,this.classes?this.classes:null]},checkCardsContainerClass(){return["check-card__container utility-animation fade-in-bottom js-slick-carousel slick--single-list"]},containerValue(){return`col-lg-12 col-md-10 ${this.spacing?this.spacing:""} mb-9`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){return`h2-font-size utility-animation fade-in-bottom ${this.headlineClasses?this.headlineClasses:""} ${this.subline?"mb-10":""}`},sublineClassesValue(){return`check-card__subline utility-animation fade-in-bottom e w-lg-65 ${this.sublineClasses?this.sublineClasses:"font-size-2"}`},itemClass(){return"check-card__slide"},hasProducts(){var t;return(t=this.checks[0])==null?void 0:t.product},carouselOptions(){const t=this.hasProducts?2:3,e={slidesToShow:t,slidesToScroll:t,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:this.checks.length>t,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,dots:this.checks.length>2}},{breakpoint:992,settings:{centerMode:!0,infinite:!0,centerPadding:this.hasProducts?"37px":"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}},{breakpoint:768,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}}]};return JSON.stringify(e)}},methods:{},props:{headline:String,headlineLevel:String,headlineClasses:String,subline:String,sublineClasses:String,spacing:String,checks:{default:null},products:{default:null},classes:String},template:`
    <div :class="classList">
      <div class="container">
        <div class="row" v-if="headline">
          <div :class="containerValue">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" data-utility-animation-step="1" />
            <div v-if="subline" :class="sublineClassesValue" v-html="subline" data-utility-animation-step="1"></div>
          </div>
        </div>
        <div :class="checkCardsContainerClass" :data-hs-slick-carousel-options="carouselOptions" data-utility-animation-step="1">
          <template v-for="(check, index) in checks">
            <div :class="itemClass">
              <template v-if="hasProducts">
                <card :product="check.product" :title="check.title" :tag="check.tag" :blog-title-pic="check.picture" />
              </template>
              <template v-else>
                <card :url="check.url" :title="check.title" :blog-title-pic="check.picture" :excerpt="check.subline" :sub-points="check.subpoints" :scope="check.scope" :footer="check.footer" :cta="check.cta" long=true />
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  `},__vite_glob_0_13=Object.freeze(Object.defineProperty({__proto__:null,default:checkCard},Symbol.toStringTag,{value:"Module"})),contact$1={tagName:"contact",props:{contact:Object,collapsed:Boolean,ajax:Boolean,spacing:String,quote:{type:Boolean,default:!1},bgColor:String,color:String,boxBgColor:String,boxColor:String,level:String,headline:String,subline:String,form:Object,buttons:Array,svgShape:Object,person:Object,noTopSpacing:Boolean},computed:{classList(){var t;return["contact",this.contactVariantClass,"vue-component",this.collapsed?"":"space-bottom-2 utility-animation utility-animation--percentage-offset",{"bg-grey":this.contact.hasGreyBackground},this.noTopSpacing||(t=this.contact)!=null&&t.svgShape||this.collapsed?"":this.spacing]},contactVariantClass(){return[this.contact.svgShape&&!this.quote?"contact--has-shape":"",this.quote?"contact--quote":"",this.collapsed?State.COLLAPSED:""]},contactLight(){return this.contact.light?"contact__person--light":""},contactBoxClass(){return this.collapsed?"":"col-md-10 col-lg-5 offset-lg-1 order-2"},contactFormClass(){return this.collapsed?"":"col-md-10 col-lg-6 order-1"},contactContainerClass(){return this.collapsed?"":"container pt-8 pt-lg-10"},contactRowClass(){return this.collapsed?"":"row justify-content-center"},styleObject(){return{"--color-contact-background":this.bgColor||this.contact.bgColor,"--contact-copy-color":this.color||this.contact.color,"--color-contact-box-background":this.boxBgColor||this.contact.boxBgColor,"--contact-box-copy-color":this.boxColor||this.contact.boxColor}}},template:`
    <svg-shape v-if="contact.svgShape" :align="contact.svgShape.align" :peak="contact.svgShape.peak" spacing="mt-8 mt-lg-10" color="var(--color-bg-grey)" />
    <div :class="classList" :style="styleObject">
      <div :class="contactContainerClass">
        <div :class="contactRowClass">
          <div :class="['contact__form', contactFormClass]" v-if="!collapsed" data-utility-animation-step="1">
            <headline :text="contact.headline" :classes="contact.headlineClasses" :level="level" />
            <span class="contact__subline font-weight-bold font-size-2">{{ contact.subline }}</span>
            <formular v-if="contact.form" :form="contact.form" :ajax="ajax" uncentered="false" />
            <div v-if="contact.buttons" class="pt-4 pt-lg-6 pb-6">
              <cta-list :list="contact.buttons" />
            </div>
          </div>

          <div :class="['contact__box', contactBoxClass]" data-utility-animation-step="1">
            <div :class="['contact__person', contactLight]">
              <template v-if="quote">
                <div class="contact__person-quote">
                  <div class="contact__icon">
                    <icon icon="quotes" />
                  </div>
                  <div class="contact__image-quote">
                    <div class="contact__image-spacer">
                      <v-img :img="contact.person.image" :cloudinary="contact.person.cloudinary" :alt="contact.person.alt" preset="cardSmall" lazy />
                    </div>
                  </div>
                  <div class="contact__quote font-size-3 middle font-weight-light">{{ contact.person.quote }}</div>
                  <div class="d-flex flex-column">
                    <span>{{ contact.person.quotee }}</span>
                    <span class="font-weight-light">{{ contact.person.quoteeTitle }}</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="contact__image">
                  <v-img :img="contact.person.image" :cloudinary="contact.person.cloudinary" :alt="contact.person.alt" preset="cardSmall" lazy />
                </div>
                <div class="contact__name font-size-4 my-6 mx-5">{{ contact.person.name }}</div>
                <div class="contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap">
                  <div v-for="(detail, index) in contact.person.details" :key="index" class="contact__detail w-100 px-5 d-flex align-items-center" :class="{'mb-3 mb-lg-4': !index === contact.person.details.length - 1}">
                    <a :href="detail.href" class="d-flex custom">
                      <span class="streamline-sm mr-4">
                        <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                        <site-icons v-else icon="site/phone" />
                      </span>
                      <span class="contact__detail-text">{{ detail.text }}</span>
                    </a>
                    <div v-if="detail.notes" class="contact__notes">
                      <span class="contact__notes-spacing streamline-sm mr-4">
                        <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                        <site-icons v-else icon="site/phone" />
                      </span>
                      {{ detail.notes }}
                    </div>
                  </div>
                  <div v-if="contact.person.number" class="contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4">
                    <a :href="'tel:' + contact.person.number" class="custom">
                      <site-icons icon="site/phone" />
                      {{ contact.person.number }}
                    </a>
                  </div>
                  <div v-if="contact.person.mail" class="contact__mail w-100 px-5 d-flex align-items-center">
                    <a :href="'mailto:' + contact.person.mail" class="custom">
                      <site-icons icon="site/mail" />
                      {{ contact.person.mail }}
                    </a>
                  </div>
                </div>
              </template>
            </div>

            <div v-if="quote" class="contact__detail-quote">
              <headline :text="contact.person.detailsHeader" level="h4" classes="contact__detail-headline" />
              <div v-for="(detail, index) in contact.person.details" :key="index" class="contact__detail font-size-2 w-100 d-flex align-items-center" :class="{'mb-3 mb-lg-4': !index === contact.person.details.length - 1}">
                <a :href="detail.href" class="custom">
                  <span class="streamline-sm mr-4">
                    <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                    <site-icons v-else icon="site/phone" />
                  </span>
                  {{ detail.text }}
                </a>
                <div v-if="detail.notes" class="contact__notes">
                  <span class="contact__notes-spacing streamline-sm mr-4">
                    <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                    <site-icons v-else icon="site/phone" />
                  </span>
                  {{ detail.notes }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_14=Object.freeze(Object.defineProperty({__proto__:null,default:contact$1},Symbol.toStringTag,{value:"Module"})),contentScroller={tagName:"content-scroller",data(){return{blockScrollPercentage:[],scrollDistancePercentage:0,minHeight:0,blockCount:0,isScrolledUpOut:!1,isScrolledDownOut:!1}},computed:{blocksValue(){return Tools.getJSON(this.blocks)},headlineValue(){const t=Tools.getJSON(this.headline);return{...t,level:t.level||"h2",classes:`content-scroller__headline ${t.classes||"h3-font-size"}`}},overlappingSizeValue(){return this.overlappingSize||"mt-md-n10"},style(){return{"--content-scroller-min-height":`${this.minHeight}px`}}},props:{headline:{default:null},blocks:Array,overlappingSize:String},mounted(){this.calcBlockCount(),this.$nextTick(()=>{this.handleResize()}),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{handleScroll(){this.calcScrollDistancePercentage(),this.updateBlocks()},handleResize(){this.calcMinHeight(),this.handleScroll()},resetIsScrolledUpOut(){const t=this.$refs.block;t&&(t.forEach((e,i)=>{this.setBlockMinPercentage(i)}),this.isScrolledUpOut=!0)},resetIsScrolledDownOut(){const t=this.$refs.block;t&&(t.forEach((e,i)=>{this.setBlockMaxPercentage(i)}),this.isScrolledDownOut=!0)},setBlockMaxPercentage(t){this.blockScrollPercentage[t]=100},setBlockMinPercentage(t){this.blockScrollPercentage[t]=0},updateBlocks(){if(!this.isScrolledUpOut&&this.scrollDistancePercentage<=0)return this.resetIsScrolledUpOut();if(!this.isScrolledDownOut&&this.scrollDistancePercentage>=100)return this.resetIsScrolledDownOut();if(this.scrollDistancePercentage<=0||this.scrollDistancePercentage>=100)return;this.isScrolledUpOut=!1,this.isScrolledDownOut=!1;const i=100/this.blockCount,s=this.$refs.block;s&&s.forEach((r,a)=>{const n=a*i,l=(a+1)*i;if(this.scrollDistancePercentage>=n&&this.scrollDistancePercentage<=l){let o=(this.scrollDistancePercentage-n)/i*100;this.blockScrollPercentage[a]=o}else this.scrollDistancePercentage<n?this.setBlockMinPercentage(a):this.scrollDistancePercentage>l&&this.setBlockMaxPercentage(a)})},getViewportHeight(){return window.innerHeight},calcScrollDistancePercentage(){const t=this.$el,e=window.scrollY,i=t.getBoundingClientRect().top+window.scrollY,r=t.offsetHeight/2;let a=0;e>=i&&(a=(e-i)/r*100),this.scrollDistancePercentage=a},calcBlockCount(){const t=this.blocks.length;t&&(this.blockCount=t)},calcBlockStyle(t){return[{"--content-scroller-block-scroll-percentage":this.blockScrollPercentage[t]}]},calcMinHeight(){const t=this.$refs.placeholder;t&&(this.minHeight=t.offsetHeight)}},template:`
    <div :class="['content-scroller vue-component', overlappingSizeValue]" :style="style">
      <wrapper class="content-scroller__wrapper">
        <div class="content-scroller__row">
          <div class="content-scroller__grid col">
            <div class="content-scroller__content-wrapper">
              <div class="content-scroller__content">
                <headline
                  v-bind="headlineValue"
                />
              </div>
            </div>
            <div class="content-scroller__blocks">
              <div class="content-scroller__blocks-placeholder" ref="placeholder">
                <div class="content-scroller__blocks-frame">
                  <section class="content-scroller__block" v-for="(block, index) in blocksValue" :key="index" ref="block" :style="calcBlockStyle(index)">
                    <main>
                      <div class="content-scroller__block-space">
                        <headline
                          v-if="block.headline"
                          v-bind="block.headline"
                          :level="block.headline.level || 'h3'"
                          classes="content-scroller__block-headline"
                        />
                        <p class="content-scroller__block-content">{{ block.content }}</p>
                      </div>
                    </main>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </wrapper>
      <div class="content-scroller__background"></div>
    </div>
  `},__vite_glob_0_15=Object.freeze(Object.defineProperty({__proto__:null,default:contentScroller},Symbol.toStringTag,{value:"Module"})),ctaList={tagName:"cta-list",computed:{classList(){return["cta-list vue-component",this.classes?this.classes:""]},ctaList(){return Tools.getJSON(this.list)}},methods:{text(t){return t.text||t.ctaText},href(t){return t.href||t.ctaHref},type(t){return t.type||t.ctaType}},props:{list:Array,classes:String},template:`
    <div :class="classList">
      <div v-for="cta in ctaList" class="cta-list__item d-inline-block mr-3 mb-2">
        <cta
          v-bind="cta"
          :text="text(cta)"
          :href="href(cta)"
          :type="type(cta)"
        ></cta>
      </div>
    </div>
  `},__vite_glob_0_16=Object.freeze(Object.defineProperty({__proto__:null,default:ctaList},Symbol.toStringTag,{value:"Module"})),cta={tagName:"cta",computed:{tag(){return this.href||this.alternativeHref||this.target?"a":"button"},hasIcon(){return this.link||this.externalValue||this.icon||this.downloadValue},externalValue(){return Tools.isTrue(this.external)},downloadValue(){return Tools.isTrue(this.download)},classList(){return[`${this.baseClass} ${this.innerSkin}`,this.classes?this.classes:"",this.download?"cta--download":"",this.external?"cta--external":"",this.icon?`cta--has-icon cta--icon-${this.icon}`:"",Tools.isTrue(this.reversed)===!0?"cta--reversed":"",Tools.isTrue(this.monochrome)===!0?"cta--monochrome":"",this.link&&Tools.isTrue(this.active)===!0?State.ACTIVE:"",Tools.isTrue(this.loading)?State.LOADING:"",Tools.isTrue(this.hasBackground)===!0?"cta--has-background":"","vue-component"]},innerSkin(){return this.link?this.skin?this.skin:"":this.skin?`btn-${this.skin}`:"btn-primary"},innerWidth(){return this.width?this.width:`w-100 ${this.grow?"":"w-lg-auto"}`},baseClass(){let t=this.$.type.tagName;return this.link?t+=" link":t+=" btn "+this.innerWidth,t},iconName(){let t;return this.icon?t=this.icon:this.externalValue||this.downloadValue?t="arrow-external":this.link&&(t="arrow"),t},targetValue(){return this.externalValue?"_blank":this.target},sizeValue(){return"medium"}},props:{href:{default:null},button:Boolean,text:String,analytics:{default:null},link:Boolean,external:{default:null},skin:String,width:String,grow:Boolean,type:String,target:String,alternativeHref:{default:null},trigger:String,icon:String,download:{default:null},reversed:{default:null},monochrome:{default:null},active:{default:null},classes:{default:"",type:String},loading:{default:null},hasBackground:{default:null}},template:`
    <component :is='tag' role="button"
               :class="classList"
               :data-text="text"
               :href="href ? href : null"
               :data-analytics="analytics ? analytics : null"
               :type="type ? type : null"
               :target="targetValue ? targetValue : null"
               :data-alternative-href="alternativeHref ? alternativeHref : null"
               :data-trigger="trigger ? trigger : null"
    >
      <span class="cta__text">{{ text }}</span>
      <icon :icon="iconName" v-if="hasIcon" :size="sizeValue" />
    </component>`},__vite_glob_0_17=Object.freeze(Object.defineProperty({__proto__:null,default:cta},Symbol.toStringTag,{value:"Module"})),Q=class Q{constructor(e){this.root=e,this.count=1,this.selector=this.getCurrentSelector(),this.currentElements=this.root.querySelectorAll(this.selector),this.root.matches(this.selector)&&(this.currentElements=this.mergeNodes(this.root,this.currentElements)),this.resetAnimation(),this.initialize()}resetAnimation(){this.root.querySelectorAll(`.${State.IS_STARTING}`).forEach(e=>{e.classList.remove(State.IS_STARTING)})}mergeNodes(e,i){const s=Array.from(i);return s.unshift(e),s}getCurrentSelector(){return`[data-utility-animation-step="${this.count}"]`}updateCurrentElement(e){const i=[];this.currentElements.forEach(s=>{e.srcElement!==s&&i.push(s)}),this.currentElements=i}handleAnimationEnd(e){const i=Q.getGroup(e.srcElement);if(i){const s=parseInt(i.style.getPropertyValue(Q.groupItemsLoadedProperty),10)||0;Q.setGroupItemsLoaded(i,s+1)}this.updateCurrentElement(e),!(this.currentElements.length>0)&&(this.count++,this.currentElements=this.root.querySelectorAll(this.getCurrentSelector()),this.currentElements!==null&&this.currentElements.length>0?this.startStepAnimation(this.currentElements):this.setEnd())}startStepAnimation(e){e.forEach(i=>{i.classList.add(State.IS_STARTING)})}setEnd(){this.root.setAttribute(Q.endDataset,!0)}startAnimation(){this.startStepAnimation(this.currentElements)}static getGroup(e){return e.closest(".utility-animation__group")}initialize(){this.root.addEventListener("animationend",i=>{this.handleAnimationEnd(i)}),new MutationObserver(i=>{i.forEach(s=>{var r;s.type==="attributes"&&s.attributeName.startsWith(Q.inViewportDataset)&&((r=s.target)==null?void 0:r.getAttribute(Q.inViewportDataset))==="true"&&this.startAnimation()})}).observe(this.root,{attributes:!0})}static setGroupItemsLoaded(e,i){e.style.setProperty(this.groupItemsLoadedProperty,i)}static hasPercentageOffset(e){return e.root.classList.contains("utility-animation--percentage-offset")}static hasSmallOffset(e){return e.root.classList.contains("utility-animation--small-offset")}static addObserver(e){const r=h=>{h.forEach(u=>{u.isIntersecting?u.target.setAttribute(this.inViewportDataset,!0):u.target.classList.contains("utility-animation--enter-exit")&&u.target.removeAttribute(this.inViewportDataset)})},a=new IntersectionObserver(r,{rootMargin:"0px 0px -200px 0px",threshold:0}),n=new IntersectionObserver(r,{rootMargin:"0px 0px 0px 0px",threshold:.4}),l=new IntersectionObserver(r,{rootMargin:"0px 0px -100px 0px",threshold:0});(e?[e]:this.instances).forEach(h=>{Q.hasSmallOffset(h)?l.observe(h.root):Q.hasPercentageOffset(h)?n.observe(h.root):a.observe(h.root)})}static resetGroup(e){this.setGroupItemsLoaded(e,0),this.instances.forEach(i=>{if(this.getGroup(i.root)===e){const r=i.root;i.currentElements=[r],r.removeAttribute("data-utility-animation-end"),i.startAnimation()}})}static initElement(e){const i=e.$el?e.$el:e,s=new this(i);return this.instances.push(s),s}static init(e){this.instances=[],[].forEach.call(e||document.querySelectorAll(this.rootSelector),i=>{this.initElement(i)}),this.addObserver()}static isElementObserved(e){return this.instances.some(i=>i.root===e)}static observeElementIfNotAlready(e){let i;this.isElementObserved(e)||(i=this.initElement(e)),this.addObserver(i)}static getIndexStyle(e){return`--utility-animation-index: ${e}`}};z(Q,"rootSelector",".utility-animation"),z(Q,"inViewportDataset","data-utility-animation-in-viewport"),z(Q,"endDataset","data-utility-animation-end"),z(Q,"instances",[]),z(Q,"groupItemsLoadedProperty","--utility-animation-items-loaded");let UtilityAnimation=Q;const utilityAnimation=Object.freeze(Object.defineProperty({__proto__:null,default:UtilityAnimation},Symbol.toStringTag,{value:"Module"})),dropdown={tagName:"dropdown",props:{label:String,items:String,filterable:{default:null},hasAnimation:{default:null},index:Number},computed:{teleportSelector(){return'[id="root"], [data-v-app]'},dropdownLabelClasses(){return["dropdown__label font-size-sm",this.hasAnimation?"utility-animation fade-in-bottom":""]},parsedItems(){return Tools.getJSON(this.items)},filteredItems(){return this.filterableValue&&this.filterText.length>=this.minCharsToFilter?this.parsedItems.filter(t=>t.text.toLowerCase().includes(this.filterText.toLowerCase())):this.parsedItems},filterableValue(){return Tools.isTrue(this.filterable)===!0},style(){return this.hasAnimation?`--utility-animation-index: ${this.index};`:""}},methods:{initActiveSelection(){this.activeSelection=this.filteredItems.filter(t=>t.checked)},updateUtilityAnimation(){this.hasAnimation&&UtilityAnimation.observeElementIfNotAlready(this.$refs.label)},resetSelection(){this.activeSelection=[]},applySelection(){this.toggleDropdown()},handleSelection(t){if(!this.activeSelection.includes(t))this.activeSelection.push(t);else{const e=this.activeSelection.indexOf(t);this.activeSelection.splice(e,1)}this.$emit(Events.DROPDOWN_CHANGED,this.activeSelection)},toggleDropdown(){this.isOpen=!this.isOpen,this.isOpen?(this.$emit(Events.DROPDOWN_OPENED,this),this.modalOpened()):(this.resetFilterText(),this.modalClosed())},closeModal(){document.body.classList.remove("modal-open")},modalOpened(){Tools.isUpperBreakpoint()||document.body.classList.add("modal-open")},modalClosed(){Tools.isUpperBreakpoint()||this.closeModal()},toggleIconClasses(t){return["dropdown__toggle-icon",this.activeSelection.includes(t)?State.ACTIVE:""]},handleMouseEnter(t){if(!Tools.isUpperBreakpoint())return t.preventDefault();this.toggleDropdown()},handleMouseDown(t){if(!Tools.isUpperBreakpoint())return t.preventDefault();this.toggleDropdown()},handleClick(t){if(Tools.isUpperBreakpoint())return t.preventDefault();this.toggleDropdown()},getCheckboxId(t,e){return`dropdown-checkbox-${t.value}-${e}`},resetFilterText(){this.filterText=""},resetModal(){this.isOpen=!1,this.closeModal()},handleResize(){this.resetModal()}},beforeMount(){var e;const t=(e=window.i18n)==null?void 0:e.loader;t&&t.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["search","apply","reset"])}),this.initActiveSelection()},mounted(){this.updateUtilityAnimation(),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},data(){return{activeSelection:[],isOpen:!1,filterText:"",minCharsToFilter:1}},template:`
    <div :class="{ 'dropdown--opened': isOpen, 'dropdown': true, 'dropdown--filtering': filterText.length > 0 }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseDown">
      <teleport :to="teleportSelector">
        <div :class="{'dropdown__background-shim': true, 'show': isOpen}" @click="toggleDropdown"></div>
      </teleport>
      <div :class="dropdownLabelClasses" @click="handleClick" :style="style" data-utility-animation-step="1" ref="label">
        <span class="dropdown__label-text">{{ label }}</span>
        <span class="dropdown__label-placeholder">{{ label }}</span>
        <span class="dropdown__label-icon">
          <icon icon="arrow-narrow" direction="clockwise" size="xs" />
        </span>
      </div>
      <div class="dropdown__items" v-show="isOpen">
        <div class="dropdown__items-content">
          <div class="dropdown__items-header">
            <span class="dropdown__items-header-text">{{ label }}</span>
            <icon
              @click="toggleDropdown"
              class="dropdown__items-close-icon"
              icon="close"
              size="medium"
            />
          </div>
          <div class="dropdown__search-container" v-if="filterableValue">
            <input type="text" class="dropdown__search" v-model="filterText" :placeholder="translationData?.search">
            <icon
              class="dropdown__search-icon"
              icon="magnifier"
              size="small"
            />
            <icon
              @click="resetFilterText"
              class="dropdown__close-icon"
              icon="close"
              size="small"
            />
          </div>
          <div class="dropdown__items-list">
            <div :class="toggleIconClasses(item)" @click="handleSelection(item)" v-for="(item, index) in filteredItems">
              <input class="dropdown__checkbox" type="checkbox" :value="item.value" :id="getCheckboxId(item, index)" :name="getCheckboxId(item, index)" :checked="activeSelection.includes(item)">
              <label class="dropdown__checkbox-label" :for="getCheckboxId(item, index)"></label>
              <span class="dropdown__item-text">{{ item.text }}</span>
              <span class="dropdown__item-count">{{ item.count }}</span>
            </div>
          </div>
          <div class="dropdown__buttons">
            <cta
              :text="translationData?.apply"
              class="dropdown__apply-button"
              href="#apply"
              @click="applySelection"
            />
            <cta
              :text="translationData?.reset"
              class="dropdown__reset-button"
              skin="secondary"
              :button="true"
              href="#reset"
              @click="resetSelection"
            />
          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_18=Object.freeze(Object.defineProperty({__proto__:null,default:dropdown},Symbol.toStringTag,{value:"Module"})),eventOverview={tagName:"event-overview",data(){return{translationData:null,defaultLimit:3,maxLimitDefault:6,showMore:!1}},computed:{classList(){return["event-overview has-no-row is-component utility-animation vue-component",Tools.isTrue(this.overlap)?"event-overview--overlap":null]},lastIndex(){return parseInt(this.limitValue,10)+1},limitValue(){return this.limit?this.limit:this.defaultLimit},maxLimitValue(){return this.maxLimit>0?this.maxLimit:this.maxLimitDefault},eventsValue(){return Tools.getJSON(this.events).slice(0,this.maxLimitValue)||[]},hasMore(){var t;return this.showMore?!1:((t=this.translationData)==null?void 0:t.moreEvents)&&this.eventsValue.length>this.limitValue}},beforeMount(){var e;const t=(e=window.i18n)==null?void 0:e.loader;t&&t.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["moreEvents"])})},methods:{isVisible(t){return this.showMore||t+1<=this.limitValue},handleShowMore(){this.moreUrl&&(document.location.href=this.moreUrl),this.showMore=!0}},props:{events:Array,headline:String,headlineLevel:String,overlap:Boolean,limit:Number,maxLimit:Number,url:String,moreUrl:String},template:`
    <wrapper :class="classList">
      <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
        <transition-group name="event-overview__item">
          <template v-for="(event, index) in eventsValue">
            <div :class="{'is-visible': isVisible(index), 'event-overview__item': true}">
              <div class="fade-in-bottom" data-utility-animation-step="1" :style="{'--utility-animation-index': index + 1}">
                <event :key="event.url" v-bind="event" />
              </div>
            </div>
          </template>
        </transition-group>

      <div class="event-overview__more font-size-1 bold fade-in-bottom" v-show="hasMore" @click="handleShowMore" data-utility-animation-step="1" :style="{'--utility-animation-index': lastIndex}">{{ translationData?.moreEvents }}</div>
    </wrapper>
  `},__vite_glob_0_19=Object.freeze(Object.defineProperty({__proto__:null,default:eventOverview},Symbol.toStringTag,{value:"Module"})),eventTeaser={tagName:"event-teaser",migrate:!0,template:`
                        event-teaser
                    `},__vite_glob_0_20=Object.freeze(Object.defineProperty({__proto__:null,default:eventTeaser},Symbol.toStringTag,{value:"Module"})),event={tagName:"event",data(){return{hasMultipleDays:!1}},computed:{style(){return`
                --color-event-background: ${this.bgColor?this.bgColor:"var(--color-green-blue)"};
                --color-event-copy: ${this.color?this.color:"var(--color-copy-light)"};
                --color-event-time: ${this.timeColor?this.timeColor:"var(--color-green-blue)"};
            `},textWithAmpersand(){return this.text.replace(/&amp;/g,"&")},validDate(){let t=new Date(this.date);return isNaN(t.getTime())&&(t=Tools.convertToDate(this.date),this.hasMultipleDays=!0,t&&isNaN(t.getTime()))?null:t},dateDay(){if(!this.validDate)return;const t=this.validDate.getDate();return t<10?`0${t}`:t},dateMonth(){return this.validDate?this.validDate.toLocaleDateString(void 0,{month:"short"}).slice(0,3):void 0},dateWeekDay(){return this.validDate?this.validDate.toLocaleDateString(void 0,{weekday:"short"}).slice(0,2):void 0},imageValue(){return Tools.getJSON(this.image)},cloudinary(){return this.imageValue&&this.imageValue.cloudinary?this.imageValue.cloudinary:!0},timeValue(){return this.hasMultipleDays?this.date:Tools.standardizeTimeFormat(this.time)}},methods:{handleClick(){if(this.external)return window.open(this.url,"_blank");document.location.href=this.url}},props:{title:String,date:String,category:String,text:String,image:Object,bgColor:String,color:String,time:String,timeColor:String,classes:String,url:String,external:Boolean},template:`
    <article :class="['event vue-component', classes ? classes : null]" :style="style" @click="handleClick">
      <div class="event__inner">
        <div class="event__date">
          <div class="event__date-week-day is-uppercase">{{ dateWeekDay }}</div>
          <div class="event__date-day">{{ dateDay }}</div>
          <div class="event__date-month is-uppercase">{{ dateMonth }}</div>
        </div>
        <div class="event__content">
          <div class="event__meta">
            <time class="event__time font-size-1 bold" v-if="timeValue">{{ timeValue }}</time>
            <span class="event__category font-size-1 bold is-uppercase" v-if="category">{{ category }}</span>
          </div>
          <headline class="event__headline" :text="title" level="h4" />
          <p class="event__text">{{ textWithAmpersand }}</p>
        </div>
        <div class="event__image-container is-background" v-if="imageValue">
          <v-img class="event__image" :cloudinary="cloudinary" v-bind="imageValue" :lazy="true" preset="eventThumb">
        </div>
      </div>
    </article>
  `},__vite_glob_0_21=Object.freeze(Object.defineProperty({__proto__:null,default:event},Symbol.toStringTag,{value:"Module"})),fabButton$1={tagName:"fab-button",migrate:!0,template:`
                      fab-button
                  `},__vite_glob_0_22=Object.freeze(Object.defineProperty({__proto__:null,default:fabButton$1},Symbol.toStringTag,{value:"Module"})),fabHint={tagName:"fab-hint",data(){return{expaned:!1,translationData:{}}},computed:{classList(){return["fab-hint vue-component",this.expaned?State.EXPANDED:""]},options(){return`{
        "parentSelector": ".fab-hint",
        "breakpoint": "xs",
        "startPoint": ".fab-hint__start",
        "endPoint": "9999999",
        "stickyOffsetTop": "0",
        "stickyOffsetBottom": 20
      }`},containerStyle(){return{...this.bgColor?{"--fab-hint-bg-color":this.bgColor}:{},...this.iconColor?{"--fab-hint-icon-color":this.iconColor}:{}}},iconValue(){return this.icon||"image-credits"},titleValue(){var t;return this.title||((t=this.translationData)==null?void 0:t.imageCredits)},enhancedText(){if(!this.text)return"";const e=new DOMParser().parseFromString(this.text,"text/html");return e.querySelectorAll("a").forEach(i=>i.classList.add("is-basic-link")),e.body.innerHTML}},beforeMount(){var e;const t=(e=window.i18n)==null?void 0:e.loader;t&&t.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["imageCredits"])})},mounted(){this.addObserver()},methods:{addObserver(){new MutationObserver(e=>{e.forEach(i=>{var s,r;i.attributeName==="style"&&(this.isVisible((r=(s=i==null?void 0:i.target)==null?void 0:s.style)==null?void 0:r.cssText)||this.handleClose())})}).observe(this.$el,{attributes:!0,attributeFilter:["style"]})},isVisible(t){return t!==""},handleClick(){this.expaned=!this.expaned},handleClose(){this.expaned=!1}},props:{icon:String,iconColor:String,bgColor:String,text:String,title:String},template:`
    <div :class="classList">
      <div class="fab-hint__container" :style="containerStyle">
        <div class="fab-hint__start"></div>
        <div class="fab-hint__wrapper js-sticky-block" :data-hs-sticky-block-options="options">
          <div class="fab-hint__icon" @click="handleClick">
            <icon :icon="iconValue" size="large" />
          </div>
        </div>
        <div class="fab-hint__content">
          <div class="fab-hint__title highlight-underline">{{ titleValue }}:</div>
          <icon class="fab-hint__close" icon="close" size="medium" :hover="true" :circle="true" @click="handleClose" />
          <div class="fab-hint__text" v-html="enhancedText"></div>
        </div>
        <div class="fab-hint__end"></div>
      </div>
    </div>
  `},__vite_glob_0_23=Object.freeze(Object.defineProperty({__proto__:null,default:fabHint},Symbol.toStringTag,{value:"Module"})),faq={tagName:"faq",data(){return{entriesWithState:[]}},beforeMount(){var t;this.entriesWithState=(t=this.entries)==null?void 0:t.map((e,i)=>(e.isOpen=null,e.isDetailsOpen=null,e.height=null,e.index=i,e.id=`entry-${i}`,e))},computed:{style(){return this.index?`--utility-animation-index: ${this.index}`:null},classList(){return["faq","utility-animation","container space-top-2","vue-component"]},headlineClasses(){var t;return`faq__headline fade-in-bottom ${(t=this.headline)!=null&&t.classes?this.headline.classes:""}`},headlineLevel(){var t;return(t=this.headline)!=null&&t.level?this.headline.level:"h2"}},methods:{getDelay(t){const e=t.index>0?200:0;return`--utility-animation-delay: ${`${t.index*e}ms`};`},handleClick(t){t.isOpen=t.isOpen===null?!0:null,t.isOpen&&(t.isDetailsOpen=!0)},getElementByRef(t){const e=this.$refs[t==null?void 0:t.id];if(!(!e||e.length===0))return e[0]},afterLeave(t){const e=this.getElementByRef(t);e&&(t.isDetailsOpen=null,e.style.removeProperty("display"),e.style.removeProperty("height"),e.classList.remove(State.IS_COLLAPSING))},enter(t){const e=this.getElementByRef(t);if(!e)return;const i=e.offsetHeight;e.style.removeProperty("height"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,setTimeout(()=>{e.style.height=`${i}px`,e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom")})},leave(t){const e=this.getElementByRef(t);if(!e)return;const i=e.offsetHeight;e.classList.add(State.IS_COLLAPSING),setTimeout(()=>{e.style.height=`${i}px`})}},props:{headline:Object,entries:Array,index:Number},template:`
    <div :class="classList" :style="style">
      <div class="row">
        <div class="col-lg-8">
          <headline :text="headline?.text" :level="headlineLevel" :classes="headlineClasses" data-utility-animation-step="1" />
          <details v-for="entry in entriesWithState" :open="entry.isDetailsOpen" class="fade-in-bottom" data-utility-animation-step="1" :style="getDelay(entry)">
            <summary @click.prevent="handleClick(entry)" :open="entry.isDetailsOpen">
              <div class="faq__summary">{{ entry.summary }}</div>
              <div class="faq__icon-frame">
                <div class="faq__icon">
                  <icon icon="arrow-narrow" direction="clockwise" size="small" />
                </div>
              </div>
            </summary>
            <Transition @after-leave="afterLeave(entry)" @enter="enter(entry)" @before-leave="leave(entry)">
              <div class="faq__content" v-show="entry.isOpen" :ref="entry.id">
                <div class="faq__text" v-html="entry.text" ></div>
              </div>
            </Transition>
          </details>
        </div>
      </div>
    </div>`},__vite_glob_0_24=Object.freeze(Object.defineProperty({__proto__:null,default:faq},Symbol.toStringTag,{value:"Module"})),featureGridItem={tagName:"feature-grid-item",computed:{classList(){return["feature-grid__item mb-3 fade-in-bottom",this.classes!==""?this.classes:"",this.centered?"is-centered":"","vue-component"]},style(){return`--utility-animation-index: ${this.index};`},image(){var t;return(t=this.item)==null?void 0:t.image},title(){var t;return(t=this.item)==null?void 0:t.title},headlineLevel(){var t;return(t=this.item)!=null&&t.level?this.item.level:"h3"},headlineClasses(){var i;const t="mb-2",e=(i=this.item)!=null&&i.classes?this.item.classes:"font-size-2 bold";return`${t} ${e}`},description(){var t;return(t=this.item)==null?void 0:t.description},copy(){var t;return(t=this.item)==null?void 0:t.copy},secondCopy(){var t;return(t=this.item)==null?void 0:t.copy_1},list(){var t;return(t=this.item)==null?void 0:t.list},secondList(){var t;return(t=this.item)==null?void 0:t.list_1},ctaClasses(){var i;if(!this.item.cta)return;const t="mt-5",e=((i=this.item)==null?void 0:i.cta.align)==="right"?"d-flex justify-content-end":"";return`${t} ${e}`}},methods:{},props:{classes:String,item:Object,index:Number,centered:String},template:`
    <div :class="classList" data-utility-animation-step="1" :style="style">
      <div class="bg-white d-flex flex-column h-100 py-5 px-3">
        <figure class="w-100 max-w-10rem mb-5 mx-auto" v-if="image" >
          <v-img :img="image.src" :alt="image.alt" :cloudinary="image.cloudinary" />
        </figure>

        <headline v-if="title" :text="title" :level="headlineLevel" :classes="headlineClasses" />

        <p v-if="description" class="mb-0" v-html="description"></p>
        <p v-if="copy" class="mb-0 font-size-sm d-flex" style="padding-bottom:5px;" v-html="copy"></p>

        <ul v-if="list" class="dashed m-0 flex-grow-1" style="margin-bottom:10px !important;">
          <li v-for="text in list" class="feature-grid-item__text font-size-sm" v-html="text"></li>
        </ul>

        <p v-if="secondCopy" class="mb-0 font-size-sm d-flex" style="padding-bottom:5px;" v-html="secondCopy"></p>

        <ul v-if="secondList" class="dashed m-0 p-0 flex-grow-1">
          <li v-for="text in secondList" class="feature-grid-item__text font-size-sm" v-html="text"></li>
        </ul>

        <div v-if="item.cta" class="ctaClasses">
          <cta
            v-bind="item.cta"
          />
        </div>
      </div>
    </div>`},__vite_glob_0_25=Object.freeze(Object.defineProperty({__proto__:null,default:featureGridItem},Symbol.toStringTag,{value:"Module"})),featureGrid={tagName:"feature-grid",migrate:!0,template:`
                  feature-grid
              `},__vite_glob_0_26=Object.freeze(Object.defineProperty({__proto__:null,default:featureGrid},Symbol.toStringTag,{value:"Module"})),featureList={tagName:"feature-list",data(){return{defaultIcon:"check"}},computed:{classList(){return["feature-list container space-2 vue-component"]},itemsWithFallback(){const t=[];return this.items.forEach(e=>{const i=e.icon?e.icon:this.defaultIcon,s=i===this.defaultIcon,r=s?"var(--color-blue-jeans)":e.color,a=s,n=s?!0:e.circle,l=s?"medium":e.size,o=e.bullet,h={icon:i,color:r,hasBackground:a,circle:n,size:l,bullet:o};t.push(h)}),t}},methods:{},props:{items:{default:null}},template:`
    <div :class="classList">
      <div class="row justify-content-lg-center align-items-md-center">
        <template v-for="item in itemsWithFallback">
          <div class="col-lg-10">
            <div class="media text-body mb-3">
              <icon class="mr-3" v-bind="item"></icon>
              <div class="media-body" v-html="item.bullet" />
            </div>
          </div>
        </template>
      </div>
    </div>
  `},__vite_glob_0_27=Object.freeze(Object.defineProperty({__proto__:null,default:featureList},Symbol.toStringTag,{value:"Module"})),filterBar={tagName:"filter-bar",computed:{flatSelections(){return this.selections.flat()},storedItems(){return this.$root.StoreData.blogItems?this.$root.StoreData.blogItems():[]},dataAuthorsValue(){return Tools.getJSON(this.dataAuthors)},normalizedItems(){return this.storedItems.slice(this.itemStartPoint).map(t=>({...t,blogtitlepic:`${t.blog_image_path}${t.blogtitlepic}`}))},filteredItems(){if(!this.selections.length)return this.maxBlogPosts?this.normalizedItems.slice(0,this.maxBlogPosts):this.normalizedItems;let t=[];return this.selections.forEach(e=>{e.forEach(i=>{this.filterDropdowns.forEach(s=>{const r=s.key,a=this.normalizedItems.filter(n=>Array.isArray(n[r])?n[r].includes(i.value):n[r]===i.value);t=[...t,...a]})})}),this.getMaxItems(t)},authors(){return this.extractPropertyCounts("author")},topics(){return this.extractPropertyCounts("categories")},tags(){return this.extractPropertyCounts("tags")},dropdownCollection(){return[this.authors,this.topics,this.tags]}},created(){this.$root.StoreData.blogItems=this.$root.Store(Tools.getJSON(this.items)),this.$root.StoreData.blogView=this.$root.Store(this.activeView)},beforeMount(){var e;const t=(e=window.i18n)==null?void 0:e.loader;t&&t.then(()=>{var i,s,r,a;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["onlyLanguage","filterAuthors","filterTopics","filterTags","clearAll"]),this.filterDropdowns=[{label:(s=this.translationData)==null?void 0:s.filterAuthors,items:this.authors,key:"author"},{label:(r=this.translationData)==null?void 0:r.filterTopics,items:this.topics,key:"categories"},{label:(a=this.translationData)==null?void 0:a.filterTags,items:this.getFilteredTags(),key:"tags",filterable:!0}]})},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{getFilteredTags(){const t=Tools.getHash();if(!t)return this.tags;const e=decodeURIComponent(t.substring(1)).toLowerCase();return this.tags.map(s=>s.text.toLowerCase()===e?(this.addTagToSelection(s),{...s,checked:!0}):s)},addTagToSelection(t,e){const i=e||this.dropdownCollection.length-1;this.selections[i]=[t]},getMaxItems(t){return t=[...new Set(t)],this.maxBlogPosts?t.slice(0,this.maxBlogPosts):t},handleResize(){this.itemStartPoint=Tools.isUpperBreakpoint()?1:0},extractPropertyCounts(t){return this.normalizedItems.reduce((i,s)=>(Array.isArray(s[t])?s[t].forEach(r=>{this.updatePropertyCount(i,r)}):this.updatePropertyCount(i,s[t]),i),[]).sort((i,s)=>i.text.localeCompare(s.text))},updatePropertyCount(t,e){const i=t.find(s=>s.text.toLowerCase()===e.toLowerCase());i?i.count+=1:t.push({text:e,value:e,count:1})},handleView(t){this.activeView=t,this.$root.StoreData.blogView(this.activeView)},toggleIconClasses(t){return["filter-bar__toggle-icon",t===this.activeView?State.ACTIVE:""]},isArrayEmpty(t){return!Object.keys(t).length},isArrayEmptyRecursive(t){for(let e=0;e<t.length;e++){const i=t[e];if(i&&!this.isArrayEmpty(i))return!1}return!0},handleCardTagClicked(t){this.clearAllSelections(),this.getTagByName(t.toLowerCase())},getTagByName(t){this.tags.map(e=>{if(e.text.toLowerCase()===t){const i=this.filterDropdowns.length-1;this.addTagToSelection(e,i),this.updateDropdownSelection([e],i),this.hasClickedOnTag=!0}})},handleDropdownChange(t,e){t.length===0?this.selections[e]&&delete this.selections[e]:(this.hasClickedOnTag&&(this.hasClickedOnTag=!1,this.selections[e]=[]),this.selections[e]=t),this.isArrayEmptyRecursive(this.selections)&&(this.selections=[])},handleDropdownOpened(t){this.$refs.dropdowns.forEach(e=>{e!==t&&(e.isOpen=!1)})},clearAllSelections(){this.selections=[],this.$refs.dropdowns.forEach(t=>{t.isOpen=!1,t.activeSelection=[]})},removeSelection(t,e){if(t.preventDefault(),this.selections=this.selections.map(s=>s.filter(r=>r.value!==e.value)),this.selections.forEach((s,r)=>{this.updateDropdownSelection(s||[],r)}),this.selections.filter(s=>s.length>0).length===0)return this.clearAllSelections()},updateDropdownSelection(t,e){const i=this.$refs.dropdowns[e];i&&(i.activeSelection=t)}},data(){return{activeView:"tile-view",views:["tile-view","list-view"],filterDropdowns:[],selections:[],itemStartPoint:0,hasClickedOnTag:!1}},props:{spacing:String,items:String,maxBlogPosts:Number,dataAuthors:String},template:`
    <div class="filter-bar" >
      <div class="filter-bar__controls">
        <div class="filter-bar__selection">
          <div class="filter-bar__dropdowns">
            <dropdown
              v-for="(dropdownItem, index) in filterDropdowns"
              v-bind="dropdownItem"
              @dropdown-changed="handleDropdownChange($event, index)"
              @dropdown-opened="handleDropdownOpened"
              ref="dropdowns"
              :has-animation="true"
              :key="index"
              :index="index"
            />
          </div>
          <div class="filter-bar__tags">
            <tag class="filter-bar__tag" :tag="selection.text" :key="index" v-for="(selection, index) in flatSelections" variant="icon" @click="removeSelection($event, selection)" />
            <a class="filter-bar__reset" v-if="flatSelections.length >= 2" @click="clearAllSelections">
              <icon icon="close" size="xs" /> {{ translationData?.clearAll }}
            </a>
          </div>
        </div>
        <div class="filter-bar__views">
          <div class="filter-bar__toggle">
            <div :class="toggleIconClasses(view)" @click="handleView(view)" v-for="view in views">
              <icon :icon="view" size="small" />
            </div>
          </div>
        </div>
      </div>
      <grid-list
        :items="filteredItems"
        :view="activeView"
        :data-authors="dataAuthorsValue"
        @card-tag-clicked="handleCardTagClicked"
      />
    </div>
  `},__vite_glob_0_28=Object.freeze(Object.defineProperty({__proto__:null,default:filterBar},Symbol.toStringTag,{value:"Module"})),FooterData={bgColor:"var(--color-midnight)",mail:"info@glueckkanja.com",offices:["Germany","Austria","Spain","Australia"],copyright:"2024 glueckkanja AG. All rights reserved.",logos:[{img:"/logos/gk-Logo-sw.svg",alt:"glueckkanja Logo",url:"index.html",class:"max-w-23rem"}],partners:[{img:"/logos/partner-seal-mpoy.svg",alt:"Partner of the Year Award"},{img:"/logos/partner-seal-mssp.svg",alt:"Security MSSP of the Year"}],brandLogos:[{title:"a brand of:",img:"/logos/gk-Logo-sw.svg",alt:"glueckkanja AG",url:"https://www.glueckkanja.com/de",classes:"w-30 w-sm-40 w-lg-60 w-xl-50",target:"_blank"}],highlights:[{img:"/logos/partner-misa-mxdr.svg",alt:"Microsoft Intelligent Security Association"},{img:"/logos/seal-mssp-infrastructure.svg",alt:"MSP Infrastructure Azure"},{img:"/logos/seal-mssp-data-ai.svg",alt:"MSP Data & AI Azure"},{img:"/logos/seal-msp-digital-app-innovation.svg",alt:"MSP Digital & App Innovation Azure"},{img:"/logos/seal-mssp-modern-work.svg",alt:"MSP Modern Work"},{img:"/logos/seal-mssp-security.svg",alt:"MSP Security"},{img:"/logos/isg-2024-m365-services-large-enterprises.svg",alt:"ISG Microsoft 365 Services Large Enterprises"},{img:"/logos/isg-2024-m365-services-midmarket.svg",alt:"ISG Microsoft 365 Services Midmarket"},{img:"/logos/isg-2024-azure-large-enterprises.svg",alt:"ISG Microsoft Azure Large Enterprises"},{img:"/logos/isg-2024-azure-midmarket.svg",alt:"ISG Microsoft Azure Midmarket"},{img:"/logos/iso27001.svg",alt:"ISO 27001",url:"https://www.glueckkanja.com/documents/general/gkgab-ISO27001Certificate-de.pdf",target:"_blank",classes:"max-rem-10 max-lg-rem-11"},{img:"/logos/kununu-compact.svg",alt:"Kununu Logo",url:"https://www.kununu.com/de/glueck-kanja-consulting",target:"_blank"}],socials:[{icon:"fa-x-twitter",url:"https://twitter.com/glueckkanja_",title:"Twitter"},{icon:"fa-youtube",url:"https://www.youtube.com/user/glueckkanja",title:"Youtube"},{icon:"fa-linkedin",url:"https://www.linkedin.com/company/glueckkanja",title:"LinkedIn"},{icon:"fa-github",url:"https://github.com/glueckkanja",title:"Github"}],links:[{title:"Datenschutz",url:"https://www.glueckkanja.com/de/datenschutz",target:"_blank"},{title:"Impressum",url:"https://www.glueckkanja.com/de/impressum",target:"_blank"}],linksEn:[{title:"Privacy",url:"https://www.glueckkanja.com/en/privacy",target:"_blank"},{title:"Imprint",url:"https://www.glueckkanja.com/en/imprint",target:"_blank"}]},footerSlider={tagName:"v-footer-slider",template:`
    <div class="footer__slider-container">
      <carousel
        :items="items"
        :bg-color="bgColor"
      >
      </carousel>
    </div>
  `,props:{items:Array,bgColor:String}},footer={tagName:"v-footer",components:{"footer-slider":footerSlider},data(){return{bgColorRgbaValue:null}},computed:{classList(){return["footer text-white",Tools.isTrue(this.noMargin)?"":"mt-8 mt-lg-11",this.isCorporate?"footer--corporate":"","vue-component"]},isCorporate(){var t;return!((t=this.dataValue)!=null&&t.brandLogos)},style(){var t;return[(t=this.dataValue)!=null&&t.bgColor?`background-color: ${this.dataValue.bgColor};`:""]},dataValue(){return this.data?{...FooterData,...Tools.getJSON(this.data)}:{...FooterData}},links(){const t=this.lang.toLowerCase();if(t==="de"||t==="")return this.dataValue.links;{const e=Tools.capitalize(this.lang),i=this.dataValue[`links${e}`];return i||this.dataValue.links}},locations(){const t=[];return t.push({name:this.dataValue.name,street:this.dataValue.street,postalCode:this.dataValue.postalCode,city:this.dataValue.city,country:this.dataValue.country,mail:this.dataValue.mail}),this.dataValue.additionalLocations&&this.dataValue.additionalLocations.length&&t.push(...this.dataValue.additionalLocations),t}},mounted(){this.bgColorRgbaValue=this.bgColorRgba()},methods:{bgColorRgba(){if(!this.$refs.root)return null;const i=window.getComputedStyle(this.$refs.root).getPropertyValue("background-color").replace(/[^\d,]/g,"").split(",");return`rgba(${i[0]}, ${i[1]}, ${i[2]}, 1)`}},props:{data:Object,noMargin:{default:null},lang:String},template:`
    <footer :class="classList" :style="style" ref="root">
      <div class="container">
        <div class="footer__content-row row">
          <div class="footer__content col-lg-12">
            <div class="footer__address">
              <div :class="['mb-3', logo?.classes]" v-for="logo in dataValue.logos">
                <a
                  :href="logo.url"
                  :target="logo.target"
                  aria-label="Front"
                  :class="['footer__logos-link d-block pr-6', logo.linkClasses ? logo.linkClasses : 'w-75 w-md-35 w-lg-100']"
                >
                  <v-img
                    cloudinary=true
                    v-bind="logo"
                  ></v-img>
                </a>
              </div>

              <ul class="footer__locations nav nav-x-0 nav-white flex-column" v-for="location in locations">
                <li class="nav-item" v-if="location.name">
                  {{ location.name }}
                </li>
                <li class="nav-item" v-if="location.over">{{ location.over }}</li>
                <li class="nav-item" v-if="location.street">
                  {{ location.street }}
                </li>
                <li v-if="location.city" :class="['nav-item footer__address-block', location.postalReversed ? 'is-reversed' : '']">
                  <span class="footer__postal-code">{{ location.postalCode }}</span>
                  <span class="footer__city">{{ location.city }}</span>
                  <span class="footer__country">{{ location.country }}</span>
                </li>
                <li class="nav-item" v-if="location.number">
                  <a class="nav-link media" :href="'tel:' + location.number">
                    <span class="media">
                      <span class="streamline-xs streamline-site-phone mr-3 d-flex"><slot name='icon-phone'></slot></span>
                      <span class="media-body">
                        {{ location.number }}
                      </span>
                    </span>
                  </a>
                </li>
                <li v-if="dataValue.offices" class="footer__nav-item nav-item">
                  <a class="footer__nav-link nav-link">
                    <icon icon="world" class="footer__nav-icon footer__office-icon" />
                    <div class="footer__offices">
                      <span class="footer__office" v-for="(office, index) in dataValue.offices">
                        {{ office }}<span v-if="index < dataValue.offices.length - 1">,&nbsp;</span>
                      </span>
                    </div>
                  </a>
                </li>
                <li :class="['nav-item', locations.length > 1 ? 'pt-4' : '']" v-if="location.mail">
                  <a class="footer__nav-link nav-link" :href="'mailto:' + location.mail">
                    <span class="d-flex">
                      <span class="streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex"><slot name='icon-mail'></slot></span>
                      <span class="footer__mail media-body">
                        {{ location.mail }}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <template v-if="!isCorporate" v-for="(brandLogo, index) in dataValue.brandLogos">
                <span v-if="brandLogo.title" class="footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6">{{ brandLogo.title }}</span>
                <a :href="brandLogo.url" :target="brandLogo.target" :class="['footer__brand-logo-link d-block space-top-1', index === 0 ? 'mt-3': '', brandLogo.classes ? brandLogo.classes : 'w-90']">
                  <v-img
                    cloudinary=true
                    v-bind="brandLogo"
                  ></v-img>
                </a>
              </template>
            </div>

            <div class="footer__highlights">
              <div class="footer__partners">
                <template v-for="(partner, index) in dataValue.partners">
                  <a :href="partner.url" :target="partner.target" class="footer__partner-images">
                    <v-img
                      cloudinary=true
                      v-bind="partner"
                      class="footer__partner-image"
                    ></v-img>
                  </a>
                  <div class="footer__vertical-line" v-if="index < dataValue.partners.length-1"></div>
                </template>
              </div>

              <footer-slider
                :items="dataValue.highlights"
                :bg-color="bgColorRgbaValue"
                v-if="!isCorporate"
              />
            </div>
          </div>
        </div>

        <div v-if="isCorporate" class="footer__content-row row">
          <div class="footer__content col-lg-12">
            <footer-slider
              :items="dataValue.highlights"
              :bg-color="bgColorRgbaValue"
            />
          </div>
        </div>

        <hr class="footer__divider mx-lg-3">

        <div class="mt-3">
          <div class="row align-items-md-center mb-3">
            <div class="col-md-8 mb-4 mb-md-0">
              <!-- Nav Link -->
              <ul class="nav nav-sm nav-white nav-x-0 align-items-center">
                <li class="nav-item mr-6 footer__links" v-for="link in links">
                  <a class="nav-link" :href="link.url" v-bind="link">{{ link.title }}</a>
                </li>
              </ul>
              <!-- End Nav Link -->
            </div>

            <div class="col-md-4 text-md-right">
              <ul class="list-inline mb-0 footer__socials">
                <!-- Social Networks -->
                <li class="list-inline-item" v-for="social in dataValue.socials">
                  <a class="btn btn-xs btn-icon btn-soft-light" :title="social.title" :href="social.url" target="_blank" rel="noopener">
                    <i :class="['fab', social.icon]"></i>
                  </a>
                </li>
                <!-- End Social Networks -->
              </ul>
            </div>
          </div>

          <!-- Copyright -->
          <div class="row pb-2">
            <div class="col">
              <p class="text-white small">Copyright © {{ dataValue.copyright }}</p>
            </div>
          </div>
          <!-- End Copyright -->
        </div>
      </div>
    </footer>
  `},__vite_glob_0_29=Object.freeze(Object.defineProperty({__proto__:null,default:footer},Symbol.toStringTag,{value:"Module"})),formAttachments={tagName:"form-attachments",data(){return{isDragging:!1,hasError:!1,filesLength:0,files:new DataTransfer}},computed:{filesList(){if(!this.files.files)return null;const t=Array.from(this.files.files);return this.filesLength>this.maxFilesValue?t.slice(0,this.maxFilesValue):t},classList(){return["form-attachments",this.hasError===!0?"has-error":"",this.isDragging?State.DRAGGING:"","vue-component"]},interactableClassList(){return["form-attachments__interactable",this.hasErrors?State.HAS_ERROR:""]},requiredValue(){return this.required?"required":null},maxSizeMb(){return this.maxSize/1e6},maxFilesValue(){return this.maxFiles?this.maxFiles:5},extensionList(){const t=this.extensions.map(e=>Tools.capitalize(e));return t==null?void 0:t.join(", ")},extensionListText(){return`${this.extensionList} max. ${this.maxSizeMb} MB`},acceptList(){return this.extensions.map(t=>`.${t}`).join(",")}},props:{hasError:{default:null},maxSize:Number,description:String,text:String,requiredMsg:{default:null},required:{default:null},extensions:Array,id:String,maxFiles:Number},mounted(){var t,e;this.root=this.$refs.root,this.interactable=this.$refs.interactable,this.button=this.$refs.button,this.textElement=this.$refs.text,this.file=this.$refs.file,this.error=this.$refs.error,this.base64=this.$refs.base64,this.bindEvents(),(e=(t=window.i18n)==null?void 0:t.loader)==null||e.then(()=>{var i,s,r;this.wrongTypeText=(i=window.i18n)==null?void 0:i.translate("formAttachmentsWrongType"),this.maxFilesText=(s=window.i18n)==null?void 0:s.translate("formAttachmentsMaxFiles",this.maxFilesValue),this.maxSizeText=(r=window.i18n)==null?void 0:r.translate("formAttachmentsMaxSize")})},methods:{bindEvents(){this.interactable.addEventListener("drag",this.handleDragStart.bind(this)),this.interactable.addEventListener("dragstart",this.handleDragStart.bind(this)),this.interactable.addEventListener("dragover",this.handleDragOver.bind(this)),this.interactable.addEventListener("dragenter",this.handleDragOver.bind(this)),this.interactable.addEventListener("drop",this.handleDrop.bind(this)),this.interactable.addEventListener("dragleave",this.handleDrop.bind(this)),this.interactable.addEventListener("dragend",this.handleDrop.bind(this)),this.interactable.addEventListener("click",this.handleAddAttachment.bind(this)),document.addEventListener(Events.FORM_ATTACHMENT_ERROR,this.handleFormAttachmentError.bind(this));const t=Tools.getParent(this.root,"form");t&&t.addEventListener("reset",this.reset.bind(this))},handleFormAttachmentError(t){this.showError(this.maxSizeText)},handleDragStart(t){t.preventDefault(),t.stopPropagation()},handleDragOver(t){t.preventDefault(),t.stopPropagation(),window.clearTimeout(this.dropTimeout),this.isDragging=!0},handleDrop(t){var i;t.preventDefault(),t.stopPropagation();const e=(i=t==null?void 0:t.dataTransfer)==null?void 0:i.files;this.dropTimeout=window.setTimeout(()=>{this.isDragging=!1,t.type==="drop"&&this.handleDroppedFiles(e)},50)},isAllowedFileExtension(t){var r;if(!t)return;const e=(r=this.file.getAttribute("accept"))==null?void 0:r.toLowerCase(),i=(e==null?void 0:e.split(","))||[],s=Tools.getExtension(t.name);return i.includes(`.${s}`)},isUnderMaxSize(t){if(!(!t||!t.size))return t.size<=this.maxSize},handleDroppedFiles(t){const e=this.getErrors(t);if(e)return this.showError(e);this.appendDroppedFiles(t)},handleAddAttachment(){this.file.click()},restoreDataTransfer(){this.file.files=this.files.files},showError(t){this.restoreDataTransfer(),this.setErrorText(t),this.hasError=!0},setErrorText(t){this.error&&(this.error.innerText=t)},reset(){this.file.files=null,this.files=new DataTransfer,this.resetError()},resetError(){this.setErrorText(this.requiredMsg),this.hasError=!1},appendDroppedFiles(t){this.base64&&(this.isRequired&&(this.file.required=!1),this.appendFiles(t))},areFilesAllowed(t){return Array.from(t).every(e=>this.isAllowedFileExtension(e))},getErrors(t){if(!this.areFilesAllowed(t))return this.wrongTypeText;if(this.files.files.length+t.length>this.maxFilesValue)return this.maxFilesText;if(!Array.from(t).every(e=>this.isUnderMaxSize(e)))return this.maxSizeText},appendFiles(t){if(this.files.files.length>=this.maxFilesValue)return this.showError(this.maxFilesText);Array.from(t).forEach(e=>{this.files.items.add(e)}),this.syncFiles()},syncFiles(){this.filesLength=this.files.items.length,this.file.files=this.files.files,this.resetError()},handleChange(t){var s;const e=(s=t==null?void 0:t.target)==null?void 0:s.files,i=this.getErrors(e);if(i)return this.showError(i);this.appendFiles(e)},handleClick(t){this.files.files[t]&&(this.files.items.remove(t),this.syncFiles())},toSize(t){return Tools.toSize(t)}},template:`
    <div :class="classList" :data-max-size="maxSize" :data-max-files="maxFilesValue" ref="root">
      <div :class="interactableClassList" ref="interactable">
        <div class="form-attachments__button" ref="button">
          <icon
            icon='close'
            circle=true
            hover=true
            :padding="10"
          />
        </div>
        <div class="form-attachments__content">
          <div class="form-attachments__description">
            {{ description }}
          </div>
          <div class="form-attachments__text" ref="text">
            {{ text }}
          </div>
          <div class="form-attachments__error is-error" ref="error">
            {{ requiredMsg }}
          </div>
          <div class="form-attachments__extensions">
            {{ extensionListText }}
          </div>
        </div>
      </div>
      <div class="form-attachments__files">
        <input type="file" class="form-attachments__file" ref="file"
          multiple
          :required="requiredValue"
          :id="id"
          :name="id"
          :accept="acceptList"
          @change="handleChange"
        >
        <input type="hidden" class="form-attachments__base64" ref="base64">
        <div class="form-attachments__files-list">
          <div class="form-attachments__files-list-item" v-for="(file, index) in filesList">
            <span class="form-attachments__file-details">{{ file.name }}</span>
            <span class="form-attachments__file-size">({{ toSize(file.size) }})</span>
            <icon class="form-attachments__delete" size="small" icon="bin" @click="handleClick(index)" />
          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_30=Object.freeze(Object.defineProperty({__proto__:null,default:formAttachments},Symbol.toStringTag,{value:"Module"})),formCheckbox={tagName:"form-checkbox",computed:{otherId(){return`${this.idValue}_checkbox`},required(){var t;return(t=this.checkbox)!=null&&t.required?"required":null},idValue(){return this.id?this.id:this.checkbox.id}},props:{checkbox:Object,group:String,id:String},template:`
    <div class="form__checkbox-control custom-control custom-checkbox mb-1 vue-component">
      <template v-if="checkbox?.placeholder">
        <input class="form__checkbox form-check-input custom-control-input" type="checkbox" :data-form-group="group" :required="required" :name="otherId" :id="otherId">
        <label class="form__checkbox-label custom-control-label" :for="otherId"></label>
        <input class="form__input form-control form-control-sm" type="text" :name="idValue" :id="idValue" :placeholder="checkbox?.placeholder" :data-form-group="group">
      </template>
      <template v-else>
        <input
          class="form__checkbox form-check-input custom-control-input"
          type="checkbox"
          :name="idValue"
          :id="idValue"
          :data-form-group="group"
          :required="required"
        >
        <label class="form__checkbox-label custom-control-label" :for="idValue" v-html="checkbox?.label"></label>
      </template>
    </div>
  `},__vite_glob_0_31=Object.freeze(Object.defineProperty({__proto__:null,default:formCheckbox},Symbol.toStringTag,{value:"Module"})),formCheckboxes={tagName:"form-checkboxes",computed:{required(){var t;return(t=this.checkbox)!=null&&t.required?"required":null},message(){return this.field.required?this.field.requiredMsg:null},groupId(){return this.field.id}},props:{field:Object,id:{default:null}},template:`
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <template v-for="checkbox in field?.checkboxes">
      <form-checkbox :checkbox="checkbox" :group="groupId" :id="field.id + checkbox.id" />
    </template>
  `},__vite_glob_0_32=Object.freeze(Object.defineProperty({__proto__:null,default:formCheckboxes},Symbol.toStringTag,{value:"Module"})),formFields={tagName:"form-fields",data(){return{edited:!1,userValue:null}},computed:{classList(){return["form-field js-form-message form-group",`${this.field.type==="hidden"?"d-none":""}`,this.groupClass,this.hasAnimation?"utility-animation utility-animation--small-offset fade-in-bottom":"",`${this.field.showIn?"d-none form-field--show-in "+this.showInClasses:""}`,"vue-component"]},showInClasses(){var t,e;return(e=(t=this.field)==null?void 0:t.showIn)==null?void 0:e.map(i=>"show-in-"+i).join(" ")},groupClass(){return this.field.type==="checkbox"?"mb-3":this.field.type==="file"?"mb-8":""},readonly(){return this.field.readonly?"readonly":null},required(){return this.field.required?"required":null},placeholder(){return this.field.placeholder?this.field.placeholder:null},value(){return this.edited?this.userValue:this.replaceValue&&this.field.value==="#form-field-replace-value#"?this.replaceValue:this.field.value?this.field.value:null}},mounted(){const t=this.$parent;if(!t)return;const e=t.$el;e&&e.addEventListener("reset",this.handleReset)},methods:{getRequiredMsg(t){return t.requiredMsg?t.requiredMsg:""},handleChange(t){const i=t.currentTarget.value;this.edited=!0,this.userValue=i},handleReset(){this.edited=!1,this.userValue=null}},props:{options:Array,field:Object,id:{default:null},replaceValue:{default:null},hasAnimation:{default:null}},template:`
    <template v-if="field.id !== '_gotcha'">
      <div :class="classList" data-utility-animation-step="1">
        <template v-if="field.type === 'textarea'">
          <label class="input-label" :for="id">{{ field.label }}</label>
          <textarea class="form-control form-textarea" :id="id" :name="id" rows="4" :placeholder="placeholder" :required="required" :readonly="readonly" :data-msg="getRequiredMsg(field)"></textarea>
        </template>
        <template v-else-if="field.type ==='checkbox'">
          <form-checkbox :checkbox="field" :id="id" />
        </template>
        <template v-else-if="field.type ==='hidden'">
          <input type="hidden" :name="id" :value="value">
        </template>
        <template v-else-if="field.checkboxes">
          <form-checkboxes :field="field" :id="id" />
        </template>
        <template v-else-if="field.type === 'radio' ">
          <form-radio :radio="field" :id="id" />
        </template>
        <template v-else-if="field.radios">
          <form-radios :field="field" :id="id" @action-changed="$emit('action-changed', $event)" />
        </template>
        <template v-else-if="field.type === 'file'">
          <form-attachments
            :description="field.formAttachments?.description"
            :text="field.formAttachments?.text"
            :extensions="field.formAttachments?.extensions"
            :maxSize="field.formAttachments?.maxSize"
            :id="field.formAttachments?.id"
            :required="field.formAttachments?.required"
            :required-msg="getRequiredMsg(field.formAttachments)"
          />
        </template>
        <template v-else-if="field.type === 'select'">
          <form-select :field="field" :options="options" :id="id" />
        </template>
        <template v-else-if="field.type">
          <label class="input-label" :for="id">{{ field.label }}</label>
          <input ref="input" @change="handleChange" @keyup="handleChange" :type="field.type" :id="id" :name="id" class="form-control" :data-msg="getRequiredMsg(field)" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly">
        </template>
      </div>
    </template>`},__vite_glob_0_33=Object.freeze(Object.defineProperty({__proto__:null,default:formFields},Symbol.toStringTag,{value:"Module"})),formRadio={tagName:"form-radio",computed:{otherId(){return`${this.radio.id}_radio`},required(){var t;return(t=this.radio)!=null&&t.required?"required":null},idValue(){return this.id?this.id:this.radio.id}},props:{radio:Object,group:String,id:String,name:String},methods:{changed(t){this.$emit("action-changed",t.changeAction||null)}},template:`
  <div class="form__radio-control mb-1 vue-component">
    <template v-if="radio?.placeholder">
      <input class="form__radio" type="radio" :data-form-group="group" :required="required" :name="otherId" :id="otherId">
      <label class="form__radio-label" :for="otherId"></label>
      <input class="form__input form-control form-control-sm" type="text" :name="name" :id="idValue" :placeholder="radio?.placeholder" :data-form-group="group">
    </template>
    <template v-else>
      <input
        class="form__radio"
        type="radio"
        :name="name"
        :id="idValue"
        :data-form-group="group"
        :required="required"
        @change="changed(radio)"
      >
      <label class="form__radio-label" :for="idValue" v-html="radio?.label">
      </label>
    </template>
  </div>
`},__vite_glob_0_34=Object.freeze(Object.defineProperty({__proto__:null,default:formRadio},Symbol.toStringTag,{value:"Module"})),formRadios={tagName:"form-radios",computed:{otherId(){return`${this.radio.id}_radio`},required(){var t;return(t=this.radio)!=null&&t.required?"required":null},message(){return this.field.required?this.field.requiredMsg:null}},props:{field:Object,id:{default:null}},template:`
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <div class="d-flex flex-wrap">
      <template v-for="radio in field?.radios">
        <form-radio class="pr-10" :radio="radio" :group="id" :name="id" :id="field.id + radio.id" @action-changed="$emit('action-changed', $event)" />
      </template>
    </div>
  `},__vite_glob_0_35=Object.freeze(Object.defineProperty({__proto__:null,default:formRadios},Symbol.toStringTag,{value:"Module"})),formSelect={tagName:"form-select",computed:{required(){var t;return(t=this.field)!=null&&t.required?"required":null}},props:{options:Array,field:Object,id:String},template:`
    <label class="input-label" :for="id">{{field.label}}</label>
    <select class="form-control custom-select text-muted" :name="id" :required="required">
      <option value>{{field.placeholder}}</option>
      <template v-for="option in options">
        <option :value="option.value">{{option.text}}</option>
      </template>
    </select>
  `},__vite_glob_0_36=Object.freeze(Object.defineProperty({__proto__:null,default:formSelect},Symbol.toStringTag,{value:"Module"})),formular={tagName:"formular",data(){return{originalAction:"",formAction:""}},computed:{classList(){var t;return["form",`${Tools.isTrue(this.light)===!0?"is-light":""}`,`${Tools.isTrue(this.ajax)===!0?"form--ajax":""}`,`${Tools.isTrue(this.container)===!0?"container":""}`,`${Tools.isTrue(this.customValidation)===!0?"form--custom-validation":""}`,((t=this.form)==null?void 0:t.noCustomSubmit)===!0?Form$1.noCustomSubmitClass:"","vue-component"]},hasAnimationValue(){return Tools.isTrue(this.hasAnimation)},rowClassList(){return["form__row",`${this.container?"row":""}`]},wrapperClassList(){return[`${this.container?"col-md-11 col-lg-10":""}`]},headlineClassList(){return["container headline-row",`${this.space?this.space:"space-top-2"}`,this.hasAnimationValue?"utility-animation fade-in-bottom":""]},sublineClassList(){return["text-center",`${this.form.sublineClasses?this.form.sublineClasses:""}`]},formClassList(){return["form__submit mt-5",`${this.positionValue}`]},positionValue(){return this.form.ctaPosition?this.form.ctaPosition:Tools.isTrue(this.uncentered)?"":"justify-content-end"},method(){return this.form.method?this.form.method:"post"},preparedBlocks(){const t=[];let e=0,i=[];return this.form.fields.forEach(s=>{if(s.rowStart||s.rowEnd)s.rowStart?(t[e]=i,i.push(s),s.rowEnd&&(i=[],e++)):s.rowEnd&&(i.push(s),i=[],e++);else{if(i.push(s),t[e])return;t[e]=i,i=[],e++}}),t}},beforeMount(){this.originalAction=this.formAction=this.form.action},methods:{getOptions(t){return typeof t.options=="string"?this.options[t.options]:t.options},getBlockClassList(t){return["row mx-n3",`${t!=null&&t.rowClass?t.rowClass:""}`]},getFieldClassList(t){return["px-3",`${t.col?"col-md-"+t.col:"col-md-12"}`]},getId(t){const e=(t==null?void 0:t.radios)||(t==null?void 0:t.checkboxes),i=e?e[0].id:t==null?void 0:t.id;return Tools.isTrue(this.hasUuid)?Form$1.getId(i):i},updateAction(t){t?this.formAction=t:this.formAction=this.originalAction}},props:{form:Object,light:{default:null},analytics:{default:null},space:String,container:{default:null},ajax:{default:null},uncentered:{default:null},replaceValue:{default:null},customValidation:{default:null},options:Object,hasUuid:{default:null},hasAnimation:{default:null}},template:`
    <div :class="classList">
      <div :class="rowClassList">
        <div :class="wrapperClassList">
          <div v-if="form.headline" :class="headlineClassList" data-utility-animation-step="1">
            <div class="row">
              <div class="col-sm-12">
                <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
                <p :class="sublineClassList" v-html="form.subline"></p>
              </div>
            </div>
          </div>
          <form class="form__form js-validate mt-6" :method="method" :action="formAction">
            <template v-for="block in preparedBlocks">
              <div :class="getBlockClassList(block[0])" v-if="block.length > 0">
                <div :class="getFieldClassList(field)" v-for="field in block">
                  <form-fields :field='field' :options="getOptions(field)" :replace-value="replaceValue" :id="getId(field)" :has-animation="hasAnimationValue" @action-changed="updateAction" />
                </div>
              </div>
            </template>
            <div :class="formClassList">
              <cta :text="form.ctaText" type="submit" :button="true" :skin="form.cta.skin" :width="form.cta.width" :analytics="analytics" />
            </div>
            <input type="text" class="form__super-field" name="_gotcha">
          </form>
        </div>
      </div>
    </div>
  `},__vite_glob_0_37=Object.freeze(Object.defineProperty({__proto__:null,default:formular},Symbol.toStringTag,{value:"Module"})),__variableDynamicImportRuntimeHelper=(t,e,i)=>{const s=t[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((r,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==i?". Note that variables only represent file names one level deep.":""))))})};class i18n{constructor(){this.init()}init(){this.lang=Tools.getLang(),this.load()}load(){this.loader=__variableDynamicImportRuntimeHelper(Object.assign({"./de/index.js":()=>Promise.resolve().then(()=>index$2),"./en/index.js":()=>Promise.resolve().then(()=>index$1),"./es/index.js":()=>Promise.resolve().then(()=>index)}),`./${this.lang}/index.js`,3).then(e=>{this.translations=e.default})}translate(e,i){return this.translations&&this.translations[e]?i?this.translations[e].replace("%s",i):this.translations[e]:`Translation key ${e} not found in ${this.lang} lang File`}getTranslationData(e){return e.reduce((i,s)=>(i[s]=this.translate(s),i),{})}}const handleLoadingError=function(t){console.error("There was an issue loading a component. It might be blocked by an Adblock Script.",t)},Form=Promise.resolve().then(()=>form).then(t=>t.default).catch(handleLoadingError);let componentLoadingList;const componentList=[Promise.resolve().then(()=>anchor).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>dataAn).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>stickyScroller).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>toggleSwitch).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>back).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>backToTop).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>contact).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>fabButton).then(t=>t.default).catch(handleLoadingError),Form,Promise.resolve().then(()=>googleMaps).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>heroTextImage).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>pricingSlider).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>tagCloud).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>testimonialList).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>utilityAnimation).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>videoFrame).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>modal$1).then(t=>t.default).catch(handleLoadingError),Promise.resolve().then(()=>detail).then(t=>t.default).catch(handleLoadingError)];let lastBodyHeight=document.body.clientHeight;const triggerResizeEvent=()=>{const t=new CustomEvent(Events.WINDOW_RESIZE,{});document.dispatchEvent(t)},triggerVueMounted=()=>{const t=new CustomEvent("VUE_IS_MOUNTED",{});document.dispatchEvent(t)},handleBodyMutation=t=>{let i=!1;t.forEach(s=>{if(!i&&(s.contentRect.height>lastBodyHeight+3||s.contentRect.height<lastBodyHeight-3)){lastBodyHeight=s.contentRect.height,i=!0,triggerResizeEvent();return}})},captureBodyMutation=()=>{new ResizeObserver(handleBodyMutation).observe(document.body)},captureRefreshAnimateNumber=function(t){t.detail!==null&&refreshAnimateNumber(t.detail.target)},refreshAnimateNumber=function(t){[].forEach.call(t==null?void 0:t.querySelectorAll("[data-animate-number]"),e=>{const i=JSON.parse(e.dataset.animateNumber);Tools.animateValue(e,i.start,i.end,1500)})},loadThemeComponents=function(){const t=new CustomEvent("SHARED_COMPONENTS_READY",{});document.dispatchEvent(t)},initComponentList=function(t){for(let e=0;e<componentLoadingList.length;e++){const i=componentLoadingList[e];i&&i.init&&i.init(t)}document.addEventListener(Events.REFRESH_ANIMATE_NUMBERS,captureRefreshAnimateNumber),refreshAnimateNumber(document),loadThemeComponents()},loadComponents=function(){Promise.all(componentList).then(t=>{componentLoadingList=t,initComponentList()})},initSharedComponents=function(){window.i18n=new i18n,VueSetup()};document.addEventListener("DOMContentLoaded",t=>{initSharedComponents()}),document.addEventListener("VUE_IS_MOUNTED",t=>{loadComponents(),captureBodyMutation()}),window.addEventListener("scroll",()=>{const t=new CustomEvent(Events.SCROLL_UPDATE,{});document.dispatchEvent(t)}),window.addEventListener("resize",()=>{triggerResizeEvent()});const globals={tagName:"globals",mounted(){triggerVueMounted()},template:`
        <slot></slot>
    `},__vite_glob_0_38=Object.freeze(Object.defineProperty({__proto__:null,default:globals},Symbol.toStringTag,{value:"Module"})),googleMapEntry={tagName:"google-map-entry",computed:{classList(){return["google-map-entry media vue-component",this.icon==="phone-charger"?"":"mb-5"]}},props:{icon:String,headline:String,subline:String},template:`
    <div :class="classList">
      <icon class="mr-3" :icon="icon" size="medium"/>
      <div class="media-body">
        <h5 class=" mb-1">{{ headline }}</h5>
        <span class="d-block text-body font-size-1" v-html="subline" />
      </div>
    </div>
  `},__vite_glob_0_39=Object.freeze(Object.defineProperty({__proto__:null,default:googleMapEntry},Symbol.toStringTag,{value:"Module"})),googleMap={tagName:"google-map",computed:{classList(){return["google-map position-relative mx-3 mx-md-8 vue-component"]},leafletOptions(){var s;const t=this.location.coordinates,e=[50,45],i={map:{scrollWheelZoom:!1,coords:t},marker:[{coords:t,icon:{iconUrl:Tools.getAssetPath("svg/icons/map-pin.svg"),iconSize:e},popup:{text:this.location.street+", "+this.location.city,title:(s=window.i18n)==null?void 0:s.translate("address")}}]};return JSON.stringify(i)}},mounted(){this.loadMap()},methods:{loadMap(){var i,s;const t=this.$refs.map,e=(s=(i=$==null?void 0:$.HSCore)==null?void 0:i.components)==null?void 0:s.HSLeaflet;e===null||L===null||e.init(t)}},props:{location:{default:null},entries:{default:null}},template:`
  <div :class="classList">
    <div class="container space-1 space-lg-3">
      <div class="row justify-content-md-end">
        <div class="col-md-6 col-lg-5">
          <div class="bg-white position-relative z-index-999 p-5 p-sm-7">
            <div class="mb-5">
              <span class="d-block font-size-2 text-dark text-lh-sm">{{ location.office }},</span>
              <span class="d-block font-size-4 text-dark font-weight-bold text-lh-sm">{{ location.city }}</span>
            </div>

            <template v-for="entry in entries">
              <google-map-entry v-bind="entry"/>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="position-md-absolute top-0 right-0 bottom-0 left-0">
      <div class="min-h-300rem h-100 rounded-lg" ref="map" :data-hs-leaflet-options='leafletOptions'></div>
    </div>
  </div>
  `},__vite_glob_0_40=Object.freeze(Object.defineProperty({__proto__:null,default:googleMap},Symbol.toStringTag,{value:"Module"})),gridList={tagName:"grid-list",computed:{classList(){return["grid-list row mb-3 utility-animation__group vue-component"]},columnClassList(){return[this.view==="tile-view"?"col-sm-6 col-lg-4":"col-sm-6 col-lg-12","mb-3 mb-sm-8"]},isList(){return this.view==="list-view"},isRow(){return!!this.isList}},watch:{view(){this.resetUtilityAnimation()},items(){this.itemsChanged=!0}},created(){},updated(){this.itemsChanged&&(this.itemsChanged=!1,this.reinitUtilityAnimation())},methods:{resetUtilityAnimation(){setTimeout(()=>{UtilityAnimation.resetGroup(this.$refs.group)},100)},reinitUtilityAnimation(){!this.$refs.items||!this.$refs.items.length===0||(UtilityAnimation.instances=[],UtilityAnimation.init(Array.from(this.$refs.items)),UtilityAnimation.addObserver())},blogImgUrl(t){const e="blog/heads/";return t.includes(e)?t:`${e}${t}`},handleCardTagClicked(t){this.$emit(Events.CARD_TAG_CLICKED,t)}},props:{items:String,view:String,dataAuthors:Array},template:`
    <div :class="classList" ref="group">
      <template v-for="(item, index) in items">
        <div :class="columnClassList">
          <card
            @card-tag-clicked="handleCardTagClicked"
            :title="item.title"
            :url="item.url"
            :blog-title-pic="blogImgUrl(item.blogtitlepic)"
            :excerpt="item.excerpt"
            :date="item.moment ? item.moment : item.date"
            :url="item.url"
            :author="item.author"
            :hasAnimation="true"
            :index="index"
            :data-authors="dataAuthors"
            :row="isRow"
            :tags="item.tags"
            ref="items"
          />
        </div>
      </template>
    </div>
  `},__vite_glob_0_41=Object.freeze(Object.defineProperty({__proto__:null,default:gridList},Symbol.toStringTag,{value:"Module"})),grid={tagName:"grid",computed:{headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h2"},headlineClassesValue(){return`grid__headline ${this.headlineClasses?this.headlineClasses:"h3-font-size"}`},style(){const t=Tools.isTrue(this.light)?"var(--color-copy-light)":null;return{backgroundColor:this.bgColor,"--color-copy":t,"--color-headlines":t}},itemsValue(){return Tools.getJSON(this.items)}},methods:{getItemStyle(t){return UtilityAnimation.getIndexStyle(t)}},props:{items:String,headline:String,headlineLevel:String,headlineClasses:String,light:{default:!1},bgColor:String},template:`
    <div class="grid has-background utility-animation vue-component" :style="style">
      <div class="grid__container container">
        <div class="grid__row row">
          <div class="grid__col col">
            <headline :text="headline" :level="headlineLevelValue" :classes="headlineClassesValue" />
            <div class="grid__items">
              <div class="grid__item fade-in-bottom" v-for="(item, index) in itemsValue" :key="index" :style="getItemStyle(index)" data-utility-animation-step="1">
                <span class="grid__item-title" v-if="item.title">{{ item.title }}</span>
                <v-img class="grid__item-img" :img="item.img" :alt="item.alt" v-if="item.img" :cloudinary="item.cloudinary" />
                <p class="grid__item-text">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_42=Object.freeze(Object.defineProperty({__proto__:null,default:grid},Symbol.toStringTag,{value:"Module"})),header={tagName:"v-header",computed:{classList(){return["header",this.isScrolled?State.IS_SCROLLED:"",this.isLight?"header--light":"",Tools.isTrue(this.hover)?State.HOVERING:"",Tools.isTrue(this.product)?"header--product":"",Tools.isTrue(this.closed)?"":State.EXPANDED,Tools.isTrue(this.blendMode)?"header--blending":"","vue-component"]},headerContainerClassList(){return["header__container",this.containerClass]},containerClass(){return Tools.isTrue(this.product)?"container":"container-xxl"},homeObj(){var t;return(t=this.home)==null?void 0:t.languages[this.lowerLang]},lowerLang(){return this.lang?this.lang.toLowerCase():this.defaultLang},searchValue(){return Tools.isTrue(this.search)},metaList(){return{...this.meta,children:this.meta}},spacerBgColor(){return`--color-header-spacer-background: ${this.bgColor?this.bgColor:"var(--color-header-background)"}; background-color: var(--color-header-spacer-background);`},activeNavigation(){return this.setActiveLinks(),this.navigation},isLight(){return Tools.isTrue(this.light)===!0},hasLangSwitch(){var t;return Object.keys((t=this.home)==null?void 0:t.languages).length>1},hasContact(){return this.contact},hasMeta(){return this.meta&&this.meta.length>0}},mounted(){this.bindEvents(),this.setCtaClasses(),this.setLinkWidth()},updated(){this.inUpdate&&(this.updateProductListHeight(),this.inUpdate=!1,this.inTransition=!1)},methods:{setLinkWidth(){var e;const t=this.$refs.link;if(t)for(let i=0;i<t.length;i++){const s=t[i],r=(e=s.querySelector(".header__link-text-spacer"))==null?void 0:e.clientWidth;s.style.setProperty("--header-link-text-width",r+"px")}},showFlyoutBlock(t){return!(t.length>this.maxLinkListsInFlyout)},isLowerBreakpoint(){return Tools.isBelowBreakpoint("md")},bindEvents(){window.addEventListener("scroll",this.handleScroll.bind(this)),document.addEventListener(Events.WINDOW_RESIZE,this.handleResize.bind(this))},handleResize(){this.reset(),this.setLinkWidth()},handleScroll(){this.isScrolled=window.scrollY>this.scrollThreshold,this.setCtaClasses()},reset(){this.resetFlyouts(),this.updateProductListHeight(),this.closed=!0},handleCloseClick(){this.closed=!this.closed,this.closed&&this.reset()},resetFlyouts(){Object.keys(this.linkLists).forEach(t=>{this.linkLists[t]=!1})},handleClick(t,e){if(!this.isLowerBreakpoint())return;const i=this.getId(t,e);this.linkLists[i]=!this.linkLists[i],this.linkLists[i]&&(this.inTransition=!0),this.inUpdate=!0,this.closeAllSiblings(i),this.closeAllChildren()},closeAllSiblings(t){Object.keys(this.linkLists).forEach(i=>{i!==t&&(this.linkLists[i]=!1)})},closeAllChildren(){const t=new CustomEvent(Events.CHILD_HAS_UPDATE,{detail:{}});this.$refs.list.dispatchEvent(t)},getId(t,e){return`${t.name}_${e}`},handleHeaderMouseOver(){this.hoverHeader=!0,this.setCtaClasses()},handleHeaderMouseOut(){this.hoverHeader=!1,this.setCtaClasses()},setCtaClasses(){this.isLight&&(this.hoverHeader||this.isScrolled?this.ctaClassList=!1:this.ctaClassList="is-light-lg")},handleMouseOver(t,e){if(!t.children)return;this.resetAllFlyouts(),this.hover=!0;const i=this.getLinkRef(e);if(!i)return;i.classList.add(State.EXPANDED);const s=this.getFlyoutRef(e);s&&(this.flyoutIndex=e,s.classList.add(State.EXPANDED))},handleMouseOut(t){var s;if((s=t.relatedTarget)!=null&&s.closest(".header__flyout"))return;this.hover=!1;const e=this.getLinkRef(this.flyoutIndex);if(!e)return;e.classList.remove(State.EXPANDED);const i=this.getFlyoutRef(this.flyoutIndex);i&&i.classList.remove(State.EXPANDED)},handleLanguageOver(){this.resetAllFlyouts(),this.hover=!0;const t=this.$refs.languageSwitch;t&&t.classList.add(State.EXPANDED)},handleLanguageOut(t){var i;if((i=t.relatedTarget)!=null&&i.closest(".header__flyout"))return;this.hover=!1;const e=this.$refs.languageSwitch;e&&e.classList.remove(State.EXPANDED)},resetAllFlyouts(){var t,e;(t=this.$refs.link)==null||t.forEach(i=>{i.classList.remove(State.EXPANDED)}),(e=this.$refs.flyout)==null||e.forEach(i=>{i.classList.remove(State.EXPANDED)})},getFlyoutRef(t){return this.getRef("flyout",t)},getLinkRef(t){return this.getRef("link",t)},getRef(t,e){const i=this.$refs[t][e];if(i)return i},getHref(t){var e;return t.children?"javascript:void(0);":(e=t.languages[this.lowerLang])==null?void 0:e.url},getTarget(t){var i;const e=(i=t.languages[this.lowerLang])==null?void 0:i.target;return e||null},getNextLanguage(){const t=this.home.languages;if(!t)return;const e=Object.keys(t);if(!e.length)return;const i=e.filter(s=>s!==this.lowerLang);if(i.length)return i[0]},handleLanguageSwitch(t){var s;const e=this.getActiveUrlByLang(t),i=e||((s=this.home.languages[t])==null?void 0:s.url);Tools.storageSave("preferedLanguage",t,!1),document.location.href=i},getCurrentPath(){return document.location.pathname},getActiveUrlByLang(t,e){var l;const i=this.getCurrentPath(),s="/",r=(o,h)=>{if(!(o!=null&&o.title))return;let u=o==null?void 0:o.url;i[(i==null?void 0:i.length)-1]===s&&u&&u[(u==null?void 0:u.length)-1]!==s&&(u=u+s);const S=u===i;if(e&&S){o.active=!0;const d=this.getParentLink(h);d&&(d.active=!0)}return S},a=(o,h)=>h;let n=Tools.findRecursive(this.navigation,r,a);if(n||(n=Tools.findRecursive(this.meta,r,a)),n||(n=Tools.findRecursive(this.contact,r,a)),!n){const o=this.getHrefLang(t);return o||this.getTranslatedUrl(i,t)}return(l=n[t])==null?void 0:l.url},getTranslatedUrl(t,e){if(this.isBlogTagsUrl(t))return this.getBlogTagsUrl(e,t);const i=this.getFolderSwitchSegment(t);return i?this.getFolderSwitchUrl(e,t,i):null},getFolderSwitchSegment(t){const e=this.home.folderSwitch;return e&&e.find(s=>t.includes(s))||null},getFolderSwitchUrl(t,e,i){if(!i)return e;let s;if(t===this.defaultLang){const r=new RegExp(`/${this.lowerLang}/`);s=e.replace(r,"/")}else s=e.replace(i,`${t}/${i}`);return s},isBlogTagsUrl(t){return/\/blog\/tags/.test(t)},getBlogTagsUrl(t,e){let i;const s="tags";switch(t){case"en":i=e.replace(s,`${s}-${t}`);break;default:case this.defaultLang:const r=new RegExp(`${s}-..`);i=e.replace(r,s);break}return i+document.location.search},getHrefLang(t){const e=document.querySelector(`link[hreflang=${t}]`);if(e)return e.getAttribute("href")},getParentLink(t){return this.navigation[t].languages[this.lowerLang]},setActiveLinks(){this.getActiveUrlByLang(this.lowerLang,!0)},headerItemClasses(t){var e;return["header__item",(e=t.languages[this.lowerLang])!=null&&e.active?State.ACTIVE:""]},isLinkListHidden(t,e){const i=this.getId(t,e);return!this.linkLists[i]},headerLinkClasses(t,e){return this.getListClasses(t,e,["header__link custom"])},headerProductListClasses(t,e){return this.getListClasses(t,e,["header__product-list",this.inTransition?State.IN_TRANSITION:""])},getListClasses(t,e,i){const s=this.isLinkListHidden(t,e);return[...i,s?"":State.EXPANDED]},updateProductListHeight(){const t=this.$refs["product-list"];if(t)for(let e=0;e<t.length;e++){const i=t[e],r=!i.classList.contains(State.EXPANDED)||i.style.height!==""?"":i.scrollHeight+"px";i.style.height=r}},navHighlightClasses(t,e){return["header__nav-highlight custom",this.isLinkListHidden(t,e)?"is-hidden":""]},hasContactLink(t){var e,i;return((e=this.contact)==null?void 0:e.languages)&&!((i=t.languages[this.lowerLang])!=null&&i.emergency)}},props:{home:Object,navigation:Object,meta:Object,light:{default:null},search:{default:null},lang:String,contact:Object,bgColor:String,product:{default:null},button:{default:null},blendMode:{default:null}},data(){return{inUpdate:!1,inTransition:!1,defaultLang:"de",closed:!0,hover:!1,headerHover:!1,flyoutIndex:null,linkLists:{},scrollThreshold:10,isScrolled:!1,ctaClassList:!1,maxLinkListsInFlyout:3}},template:`
    <div class="header__spacer" :style="spacerBgColor"></div>
    <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
      <div :class="headerContainerClassList">
        <div class="header__row row">
          <div class="header__col col">
            <div class="header__logo">
              <a :href="homeObj?.url">
                <v-img :img="home?.imgLight" class="header__logo-light" :cloudinary="true" />
                <v-img :img="home?.img" class="header__logo-default" :cloudinary="true" />
              </a>
            </div>
            <div class="header__menu" v-on:click="handleCloseClick">
              <icon icon="menu" class="header__menu-icon" :closed="closed" />
            </div>
            <nav class="header__nav" v-on:mouseout="handleMouseOut">
              <ul class="header__list" ref="list">
                <li :class="headerItemClasses(item)" v-for="(item, index) in activeNavigation">
                  <a :class="headerLinkClasses(item, index)" :href="getHref(item)" :target="getTarget(item)" v-on:click="handleClick(item, index)" v-if="item?.languages" ref="link">
                    <div class="header__link-content" v-on:mouseover="handleMouseOver(item, index, $event)">
                      <span class="header__link-text">{{ item.languages[lowerLang]?.title }}</span>
                      <span class="header__link-text-spacer">{{ item.languages[lowerLang]?.title }}</span>
                      <icon class="header__link-icon" icon="expand" size="small" v-if="item.children" />
                    </div>
                  </a>

                  <template v-for="list in item.children">
                    <link-list
                      :list="list"
                      :lang="lowerLang"
                      :hidden="isLinkListHidden(item, index)"
                      classes="header__link-list"
                      :no-animation="true"
                      v-if="item.children && !list.products"
                    />
                    <div :class="headerProductListClasses(item, index)" ref="product-list" v-else>
                      <a :href="subChild?.languages[lowerLang]?.url" :target="subChild.target" class="header__product-list-item custom" v-for="subChild in list.children">
                        <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                        <div class="header__product-list-data">
                          <div class="header__product-list-title font-size-8 bold">{{ subChild?.languages[lowerLang]?.title }}</div>
                          <div class="header__product-list-subtitle">{{ subChild?.languages[lowerLang]?.subtitle }}</div>
                        </div>
                      </a>
                    </div>
                  </template>

                  <a :href="item.languages[lowerLang]?.emergency.href" :class="navHighlightClasses(item, index)" v-if="item.languages[lowerLang]?.emergency">
                    <icon :icon="item.languages[lowerLang]?.emergency.icon" size="medium" />
                    {{ item.languages[lowerLang]?.emergency.text }}
                  </a>

                </li>
              </ul>
              <div class="header__footer">
                <link-list
                  :list="metaList"
                  :lang="lowerLang"
                  classes="header__meta-list"
                  :no-animation="true"
                  v-if="hasMeta"
                />

                <div class="header__contact header__contact--mobile" v-if="hasContact">
                  <a class="header__contact-link custom" :href="contact.languages[lowerLang]?.url" v-if="contact?.languages">
                    <div class="header__contact-text">
                      <icon
                        icon="phone-mail"
                        size="medium"
                      />
                      <span class="header__contact-title">
                        {{ contact.languages[lowerLang]?.title }}
                      </span>
                    </div>
                  </a>
                </div>
                <div class="header__button" v-if="button">
                  <cta
                    :text="button.text"
                    :href="button.href"
                    :target="button.target"
                    :skin="button.skin"
                    :classes="ctaClassList"
                  />
                </div>
                <div class="header__language-switch" v-if="hasLangSwitch">
                  <a v-for="(language, key) in home.languages" :class="{'header__language-link custom': true, 'active': key === lowerLang}" v-on:click="handleLanguageSwitch(key)">{{ key }}</a>
                </div>
              </div>
            </nav>
            <div class="header__button" v-if="button">
              <cta
                :text="button.text"
                :href="button.href"
                :target="button.target"
                :skin="button.skin"
                :classes="ctaClassList"
              />
            </div>
            <search v-if="searchValue" class="header__search" language="de" placeholder="search" />
            <div class="header__language-switch" v-on:mouseover="handleLanguageOver" v-on:mouseout="handleLanguageOut" v-if="hasLangSwitch" ref="languageSwitch">
              <span class="header__link-text">{{ lang }}</span>
              <span class="header__link-text-spacer">{{ lang }}</span>
              <icon class="header__link-icon" icon="expand" size="small" />
              <div class="header__language-switch-flyout" ref="languageSwitchFlyout">
                <a v-for="(language, key) in home.languages" :class="{'header__language-link custom': true, 'd-none': key === lowerLang}" v-on:click="handleLanguageSwitch(key)">{{ key }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header__flyout" v-on:mouseout="handleMouseOut">
        <div :class="containerClass">
          <div class="row">
            <div class="col">
              <div class="header__flyout-content" v-for="(item, index) in activeNavigation" ref="flyout">
                <div class="header__flyout-items" v-if="item.children">
                  <figure class="header__flyout-block" v-if="showFlyoutBlock(item.children)">
                    <figcaption class="header__flyout-caption">
                      {{ item.languages[lowerLang]?.title }}
                    </figcaption>
                    <div class="header__flyout-description font-size-1 thin" v-html="item.languages[lowerLang]?.description"></div>
                    <a class="header__link custom" :href="contact.languages[lowerLang]?.url" v-if="hasContactLink(item)">
                      <icon
                        icon="phone-mail"
                        size="medium"
                      />
                      <span class="header__contact-title">
                        {{ contact.languages[lowerLang]?.title }}
                      </span>
                    </a>
                    <div class="header__highlight-cta has-emergency-colors" v-if="item.languages[lowerLang]?.emergency">
                      <cta v-bind="item.languages[lowerLang].emergency" />
                    </div>
                  </figure>

                  <template v-for="list in item.children">
                    <link-list
                      :list="list"
                      :lang="lowerLang"
                      :no-animation="true"
                      v-if="item.children && !list.products"
                    />
                    <div class="header__product-list is-expanded" v-else>
                      <a :href="subChild.languages[lowerLang]?.url" :target="subChild.target" class="header__product-list-item custom" v-for="subChild in list.children">
                        <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                        <div class="header__product-list-data">
                          <div class="header__product-list-title font-size-8 bold">{{ subChild.languages[lowerLang]?.title }}</div>
                          <div class="header__product-list-subtitle">{{ subChild.languages[lowerLang]?.subtitle }}</div>
                        </div>
                      </a>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `},__vite_glob_0_43=Object.freeze(Object.defineProperty({__proto__:null,default:header},Symbol.toStringTag,{value:"Module"})),headlineRow={tagName:"headline-row",migrate:!0,template:`
                    headline-row
                `},__vite_glob_0_44=Object.freeze(Object.defineProperty({__proto__:null,default:headlineRow},Symbol.toStringTag,{value:"Module"})),headline={tagName:"headline",computed:{tag(){return this.level?this.level:"h2"},classList(){return`${this.classes&&Tools.hasFontSizeClass(this.classes)?this.classes:`${this.tag}-font-size ${this.classes?this.classes:""}`} headline vue-component`},dataUtilityAnimationStep(){return this.utilityAnimationStep?this.utilityAnimationStep:null}},props:{text:String,level:String,classes:String,utilityAnimationStep:Number},template:`
    <component
      :is="tag"
      :class="classList"
      v-html="text"
      v-if="text"
      :data-utility-animation-step="dataUtilityAnimationStep"
    >
    </component>
    <component :is="tag" :class="classList" v-else :data-utility-animation-step="dataUtilityAnimationStep">
      <slot></slot>
    </component>
`},__vite_glob_0_45=Object.freeze(Object.defineProperty({__proto__:null,default:headline},Symbol.toStringTag,{value:"Module"})),heroTextImage$1={tagName:"hero-text-image",migrate:!0,template:`
                  hero-text-image
              `},__vite_glob_0_46=Object.freeze(Object.defineProperty({__proto__:null,default:heroTextImage$1},Symbol.toStringTag,{value:"Module"})),heroPattern={tagName:"hero-pattern",template:`
    <svg width="1393" height="696" viewBox="0 0 1393 696" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M616 13L1194 103L1242 606L636 696L616 13Z" fill="#D1D9DD" />
      <g filter="url(#filter0_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7762 72.1904L42.6441 74.2293L56.4455 97.8893L18.8934 106.099L11.7762 72.1904Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter1_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M392.512 537.332L490.251 496.165L459 537L426.691 580.548L392.512 537.332Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter2_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1013.26 51.2925L989.911 103.324L987.275 75.8276L984.063 46.8784L1013.26 51.2925Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter3_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1264.1 60.4603L1342.54 9.19567L1393.77 77.3657L1332.46 100.181L1264.1 60.4603Z" fill="#D1D9DD"/>
      </g>
      <defs>
        <filter id="filter0_f" x="0.90324" y="61.3173" width="66.4156" height="55.6548" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="5.43656" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter1_f" x="389.793" y="493.447" width="103.176" height="89.8188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter2_f" x="975.909" y="38.7236" width="45.5049" height="72.7549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="4.07742" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter3_f" x="1261.38" y="6.47752" width="135.108" height="96.4219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  `},hero={tagName:"hero",components:{"hero-pattern":heroPattern},data(){return{introHeight:null}},mounted(){this.setIntroStyle()},methods:{setIntroStyle(){if(!this.isCentered)return;const t=this.$refs.intro;t&&(this.introHeight=t.offsetHeight,t.style.height="0")},handleLetterSwitcherEnded(){const t=this.$refs.intro;t&&(t.style.height=`${this.introHeight}px`,t.style.opacity=1)}},computed:{classList(){return["hero vue-component",this.variant,this.isLight?"is-light":"",this.isLightOverline?"is-light-overline":"",this.shapePosition,this.fullscreen?"hero--fullscreen":"",this.shapeFullscreen?"hero--shape-fullscreen":"",this.animation?"hero--animation":"",this.textShadow?"hero--text-shadow":"",this.bgWidth?"hero--bg-width":"",this.isCentered?"hero--centered":"",this.shapeInContent?"hero--shape-in-content":"",this.hasStickyScroller?StickyScroller.getRootClass():""]},contentClassList(){return["hero__content",this.spacing?this.spacing:this.animation?"":"py-10 py-lg-11"]},style(){return[this.bgColor?`--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${Tools.hexToRgb(this.bgColor)}`:"",this.bgWidth?`--hero-background-width: ${this.bgWidth}%;`:"",this.overlineBgColor?`--hero-overline-background-color: ${this.overlineBgColor};`:""]},cta(){return this.heroJson?this.heroJson.cta:null},isLight(){return this.heroJson?this.heroJson.light:!1},isLightOverline(){return this.heroJson&&typeof this.heroJson.lightOverline<"u"?this.heroJson.lightOverline:this.isLight},background(){return this.heroJson&&this.heroJson.background?this.heroJson.background:null},bgColor(){return this.heroJson?this.heroJson.bgColor:null},bgWidth(){return this.heroJson?this.heroJson.bgWidth:null},overline(){return this.heroJson?this.heroJson.overline:null},overlineBgColor(){return this.heroJson?this.heroJson.overlineBgColor:null},subline(){return this.heroJson?this.heroJson.subline:null},headline(){return this.heroJson?this.heroJson.headline:null},headlineClasses(){return this.heroJson?this.heroJson.headlineClasses:null},headlineClassList(){return["hero__headline",this.headlineClasses]},textShadow(){return this.heroJson?this.heroJson.textShadow:null},level(){return this.heroJson&&this.heroJson.level?this.heroJson.level:"h1"},animation(){return this.heroJson?this.heroJson.animation:null},letterSwitcher(){return this.heroJson?this.heroJson.letterSwitcher:null},icon(){return this.heroJson&&this.background?this.background.icon:null},fullscreen(){return this.heroJson&&this.heroJson.fullscreen?this.heroJson.fullscreen:!1},spacing(){return this.heroJson&&this.background?this.background.spacing:null},img(){return this.heroJson&&this.background?this.background.img:null},hasStickyScroller(){return this.heroJson?this.heroJson.sticky:!1},lottieSettings(){if(!this.shape||!this.shape.lottie)return;const t=this.shapeFullscreen?"100%":"auto";return{...this.shape.lottieSettings,width:"auto",height:t}},lottieFileData(){return this.shape?this.shape.lottie?this.shape.lottie:this.lottieData?Tools.getJSON(this.lottieData):null:null},showShape(){return this.shape.img||this.shape.lottie||this.lottieFileData},shape(){return this.heroJson&&this.heroJson.shape?this.heroJson.shape:null},shapeFullscreen(){return this.shape&&this.shape.fullscreen?this.shape.fullscreen:!1},shapeBottom(){return this.shape&&this.shape.bottom||null},shapeTop(){return this.shape&&this.shape.top||null},shapePosition(){return this.shape?this.shapeFullscreen||this.shapeTop?"hero--shape-top":this.shapeBottom?"hero--shape-bottom":"hero--shape-center":null},shapeInContent(){return this.shape&&this.shape.inContent?this.shape.inContent:!1},variant(){return this.heroJson&&this.heroJson.variant?this.heroJson.variant:null},pattern(){return this.heroJson&&this.heroJson.pattern?this.heroJson.pattern:null},ctaList(){return!this.heroJson||this.animation||!this.heroJson.cta&&!this.heroJson.ctaList?null:this.heroJson.cta?[this.heroJson.cta]:this.heroJson.ctaList},showShapeContainer(){return this.bgWidth||this.isSmall||this.showShape&&this.shapeInContent},isCentered(){return!!this.letterSwitcher},isSmall(){return this.variant==="hero--small"},imgSrcSets(){return this.bgWidth?"heroStudy":null},badges(){return this.heroJson&&this.heroJson.badges?this.heroJson.badges:!1},hasBack(){return this.heroJson&&this.heroJson.back?this.heroJson.back:!1},heroJson(){return Tools.getJSON(this.hero)}},props:{hero:Object,lottieData:String},template:`
    <div :class="classList" :style="style">
      <hero-pattern
        class="hero__pattern"
        v-if="pattern"
      />
      <v-img
        v-if="img"
        class="hero__background-img" :cloudinary="background.cloudinary" :img="img">
      >
      </v-img>
      <div class="hero__container container">
        <main :class="contentClassList">
          <div class="hero__back-row row" v-if="hasBack">
            <div class="hero__back-col col">
              <div class="hero__back back">
                <icon
                  icon="arrow"
                  classes="hero__back-icon"
                  direction="left"
                  :hover="true"
                  :circle="true">
                </icon>
              </div>
            </div>
          </div>
          <letter-switcher
            v-if="letterSwitcher"
            v-bind="letterSwitcher"
            class="hero__letter-switcher"
            @ended="handleLetterSwitcherEnded"
          >
          </letter-switcher>
          <div class="hero__intro row" v-if="overline || headline || subline" ref="intro">
            <div class="hero__intro-col col">
              <span class="hero__overline" v-if="overline">{{ overline }}</span>
              <headline :class="headlineClassList" v-if="headline" :level="level" v-html="headline"></headline>
              <div class="hero__content-shape" v-if="shapeInContent">
                <v-img
                  v-if="showShape"
                  :cloudinary="shape.cloudinary"
                  :img="shape.img"
                  :alt="shape.alt"
                  :lottie="lottieFileData"
                  :lottie-settings="lottieSettings"
                  :img-src-sets="imgSrcSets"
                >
                </v-img>
              </div>
              <p class="hero__subline lead" v-if="subline" v-html="subline"></p>
              <cta-list
                v-if="ctaList"
                classes="hero__cta-list"
                :list="ctaList"
              >
              </cta-list>
              <div class="hero__badges" v-if="badges">
                <div class="hero__badge-container" v-for="badge in badges">
                  <v-img
                    cloudinary=true
                    v-bind="badge"
                    class="hero__badge-image"
                  ></v-img>
                </div>
              </div>
            </div>
          </div>
          <text-icon-animation
            v-if="animation"
            :animation="animation"
            :cta="cta"
            :icon="icon"
            classes="hero__animation"
          >
          </text-icon-animation>
        </main>
      </div>
      <wrapper class="hero__background-shape-wrapper" v-if="shape" :hideContainer="!showShapeContainer">
        <wrapper class="hero__background-shape-content" :hideContainer="!showShapeContainer" :hideContainerClass="true">
          <div class="hero__background-shape">
            <v-img
              v-if="showShape"
              :cloudinary="shape.cloudinary"
              :img="shape.img"
              :alt="shape.alt"
              :lottie="lottieFileData"
              :lottie-settings="lottieSettings"
              :img-src-sets="imgSrcSets"
            >
            </v-img>
          </div>
        </wrapper>
      </wrapper>
    </div>
  `},__vite_glob_0_47=Object.freeze(Object.defineProperty({__proto__:null,default:hero},Symbol.toStringTag,{value:"Module"})),iconBlocks={tagName:"icon-blocks",migrate:!0,template:`
                  icon-blocks
              `},__vite_glob_0_48=Object.freeze(Object.defineProperty({__proto__:null,default:iconBlocks},Symbol.toStringTag,{value:"Module"})),icon={tagName:"icon",data(){return Tools.validateVueProps(this)},computed:{classList(){return["icon",`${this.classes?this.classes:""}`,`${this.props.hasBackground?"icon--has-background":""}`,`icon--${this.props.direction}`,`icon--${this.props.icon}`,`${this.props.animation?"js-text-animation__icon":""}`,`${this.props.circle?"icon--circle":""}`,`${this.props.hover?"icon--hover":""}`,"vue-component"]},innerSize(){var t;switch(this.props.size){case"xxl":t="200px";break;case"xl":t="120px";break;case"medium":t="28px";break;case"small":t="18px";break;case"xs":t="10px";break;default:case"large":t="48px";break}return t},parentStyle(){return`--color-icon: ${this.props.color}; --icon-rotation: ${this.rotation}`},rotation(){return this.props.direction==="left"?"180deg":this.props.direction==="clockwise"?"90deg":"0deg"},settings(){return{width:this.innerSize,height:this.innerSize,padding:this.props.padding,"xml:space":"preserve",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:link":"http://www.w3.org/1999/xlink"}}},props:{icon:{default:"close"},color:{default:"currentColor"},direction:{default:"right"},size:{default:"large"},circle:{default:null},hover:{default:null},padding:{default:6},animation:{default:null},classes:{default:""},closed:{default:null},hasBackground:{default:null},step:{default:null}},template:`
    <span :class="classList" :style="parentStyle">
      <component :is="icon" v-bind="settings" :color="props.color" :closed="closed" :step="step" />
    </span>
    `},__vite_glob_0_49=Object.freeze(Object.defineProperty({__proto__:null,default:icon},Symbol.toStringTag,{value:"Module"})),arrowCurl={tagName:"arrow-curl",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" viewBox="0 0 26 28">
      <path d="M24.9384 0.252534C25.3512 0.218513 25.7134 0.525585 25.7475 0.938399C25.7815 1.35121 25.4744 1.71344 25.0616 1.74747L24.9384 0.252534ZM12.8286 3.88889L13.2309 4.52181L13.2309 4.52181L12.8286 3.88889ZM7.47313 12.5556L6.74138 12.3911L6.74138 12.3911L7.47313 12.5556ZM6.54139 27.5213C6.25346 27.8191 5.77865 27.8271 5.48088 27.5392L0.628414 22.847C0.330642 22.5591 0.322666 22.0843 0.610598 21.7865C0.89853 21.4888 1.37334 21.4808 1.67111 21.7687L5.98441 25.9395L10.1552 21.6262C10.4431 21.3284 10.9179 21.3204 11.2157 21.6084C11.5135 21.8963 11.5215 22.3711 11.2335 22.6689L6.54139 27.5213ZM25 1C25.0616 1.74747 25.0616 1.74746 25.0617 1.74746C25.0616 1.74746 25.0616 1.74747 25.0615 1.74747C25.0614 1.74749 25.0611 1.74751 25.0606 1.74755C25.0598 1.74762 25.0584 1.74773 25.0565 1.74789C25.0527 1.74821 25.0468 1.74871 25.0389 1.74939C25.0231 1.75075 24.9992 1.75283 24.9676 1.75565C24.9044 1.76131 24.8106 1.76994 24.6895 1.78173C24.4472 1.80532 24.0962 1.84151 23.664 1.8917C22.7987 1.99215 21.611 2.1483 20.3198 2.37103C19.0268 2.59406 17.6404 2.88208 16.3745 3.24447C15.0976 3.61001 13.9923 4.03778 13.2309 4.52181L12.4262 3.25597C13.3688 2.65666 14.6369 2.18165 15.9617 1.8024C17.2975 1.42 18.7409 1.12122 20.0648 0.892859C21.3904 0.664204 22.6066 0.504381 23.491 0.401705C23.9335 0.35033 24.2938 0.31317 24.5441 0.288795C24.6693 0.276606 24.767 0.267609 24.8339 0.261625C24.8673 0.258634 24.893 0.256395 24.9106 0.254887C24.9194 0.254133 24.9261 0.253562 24.9308 0.253171C24.9331 0.252975 24.9349 0.252825 24.9362 0.252719C24.9368 0.252666 24.9373 0.252624 24.9377 0.252593C24.9379 0.252578 24.938 0.252563 24.9381 0.252555C24.9383 0.252543 24.9384 0.252534 25 1ZM13.2309 4.52181C12.58 4.93566 11.5526 5.93156 10.5608 7.3853C9.57807 8.82573 8.66724 10.6624 8.20489 12.72L6.74138 12.3911C7.25274 10.1154 8.25333 8.1059 9.32172 6.53992C10.381 4.98725 11.5445 3.81648 12.4262 3.25597L13.2309 4.52181ZM8.20489 12.72C7.41961 16.2147 7.05543 19.7828 6.88837 22.4848C6.80495 23.834 6.77093 24.9629 6.75775 25.7534C6.75116 26.1485 6.74978 26.4588 6.75004 26.6694C6.75017 26.7748 6.7507 26.8552 6.7512 26.9088C6.75145 26.9356 6.75169 26.9557 6.75186 26.9689C6.75194 26.9755 6.75201 26.9803 6.75206 26.9834C6.75208 26.985 6.7521 26.9861 6.75211 26.9867C6.75212 26.9871 6.75212 26.9873 6.75212 26.9874C6.75212 26.9875 6.75212 26.9875 6.75212 26.9875C6.75212 26.9875 6.75212 26.9874 6.00223 27C5.25233 27.0126 5.25233 27.0125 5.25233 27.0123C5.25233 27.0123 5.25233 27.0121 5.25232 27.0119C5.25232 27.0116 5.25231 27.0111 5.2523 27.0106C5.25228 27.0094 5.25226 27.0079 5.25223 27.0059C5.25217 27.0018 5.25209 26.9961 5.25199 26.9885C5.25179 26.9735 5.25153 26.9514 5.25126 26.9227C5.25073 26.8652 5.25017 26.7808 5.25004 26.6713C5.24977 26.4523 5.25121 26.133 5.25795 25.7283C5.27145 24.9191 5.30621 23.7673 5.39122 22.3923C5.56103 19.6459 5.9323 15.9918 6.74138 12.3911L8.20489 12.72Z" :fill="color"/>
    </svg>
  `},__vite_glob_0_50=Object.freeze(Object.defineProperty({__proto__:null,default:arrowCurl},Symbol.toStringTag,{value:"Module"})),arrowExternal={tagName:"arrow-external",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 34 34">
      <path d="M33.23,2.39,1.79,33.79" transform="translate(-0.79 -0.79)" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:3"></path>
      <path d="M33.79,33.79v-30a2,2,0,0,0-2-2h-30" transform="translate(-0.79 -0.79)" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:3"></path>
    </svg>
  `},__vite_glob_0_51=Object.freeze(Object.defineProperty({__proto__:null,default:arrowExternal},Symbol.toStringTag,{value:"Module"})),arrowNarrow={tagName:"arrow-narrow",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 19.74 69.3">
      <polyline fill="none" stroke-width="3px" stroke-linecap="round" stroke-miterlimit="10" points="1.62 1.62 17.91 34.62 1.62 67.62"></polyline>
    </svg>
  `},__vite_glob_0_52=Object.freeze(Object.defineProperty({__proto__:null,default:arrowNarrow},Symbol.toStringTag,{value:"Module"})),arrow={tagName:"arrow",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 28 17">
      <g transform="translate(0.75 0.75)">
        <path d="M0.5 0.5L26 0.5" transform="translate(0 7)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M0 15L7 7.5L0 0" transform="translate(19 0)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  `},__vite_glob_0_53=Object.freeze(Object.defineProperty({__proto__:null,default:arrow},Symbol.toStringTag,{value:"Module"})),bin={tagName:"bin",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale)); stroke-linecap:round; stroke-linejoin:round;`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 24 24">
      <path d="M21,4.5,19.188,21.709A2,2,0,0,1,17.2,23.5H6.8a2,2,0,0,1-1.989-1.791L3,4.5" />
      <line x1="0.5" y1="4.5" x2="23.5" y2="4.5" />
      <path d="M7.5,4.5v-3a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v3" />
      <line  x1="12" y1="9" x2="12" y2="19.5" />
      <line x1="16.5" y1="9" x2="16" y2="19.5" />
      <line x1="7.5" y1="9" x2="8" y2="19.5" />
    </svg>
  `},__vite_glob_0_54=Object.freeze(Object.defineProperty({__proto__:null,default:bin},Symbol.toStringTag,{value:"Module"})),checkMark={tagName:"check-mark",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},foregroundStroke(){return this.color?this.color:"#001F35"}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" fill="none" viewBox="0 0 28 28">
      <g clip-path="url(#clip0_434_904)">
        <path d="M24.86 3.19L11.91 24.13C11.47 24.56 10.88 24.81 10.27 24.81C9.65999 24.81 9.05999 24.57 8.62999 24.13L3.29999 18.8" stroke="#F5C663" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.97 1.42L10.03 22.36C9.58998 22.79 8.99998 23.04 8.38998 23.04C7.77998 23.04 7.17998 22.8 6.74998 22.36L1.41998 17.03" :stroke="foregroundStroke" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_434_904">
        <rect width="27.7" height="27.64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `},__vite_glob_0_55=Object.freeze(Object.defineProperty({__proto__:null,default:checkMark},Symbol.toStringTag,{value:"Module"})),check={tagName:"check",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 512 512">
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  `},__vite_glob_0_56=Object.freeze(Object.defineProperty({__proto__:null,default:check},Symbol.toStringTag,{value:"Module"})),viewBoxWidth=48,close={tagName:"close",computed:{outerPosition(){return viewBoxWidth-this.padding},style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{padding:Number,viewBoxWidth:String,settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 ${viewBoxWidth} ${viewBoxWidth}">
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="outerPosition" :y1="padding" :x2="padding" :y2="outerPosition"/>
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="outerPosition" :y1="outerPosition" :x2="padding" :y2="padding"/>
    </svg>
  `},__vite_glob_0_57=Object.freeze(Object.defineProperty({__proto__:null,default:close},Symbol.toStringTag,{value:"Module"})),computerShield={tagName:"computer-shield",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 28 22">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-286.000000, -596.000000)">
          <g transform="translate(120.000000, 564.000000)">
            <g transform="translate(166.995621, 33.000000)">
              <path d="M21.0044136,7.99696471 L21.0044136,2.47375743 C21.0072481,1.94643087 20.6570661,1.468542 20.1146962,1.25964335 C17.6802651,0.444696877 15.1042558,0.0183213697 12.5043788,0 C9.90429886,0.0192923452 7.32828319,0.446696323 4.89406129,1.26267864 C4.3516914,1.47157728 4.00150939,1.94946616 4.00439648,2.47679272 L4.00421285,7" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.00437876,16 C7.99128312,18.5570825 11.1446288,20 12.5043788,20 C13.8641287,20 17.0174744,18.5570825 19.0043788,16" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4.00437876,12 C3.81134242,13.593127 2.18171535,15.5806978 1.17121992,15.9606135 C1.08113014,15.9953185 1.01663477,16.0874351 1.00593652,16.1966824 C0.995238278,16.3059297 -0.0767125292,15.942815 0.00437876214,16 L2.00437876,18 L1.00437876,20 C0.963356109,20.0945274 2.27873674,19.8017021 2.33315117,19.8866815 C2.3875656,19.9716609 0.914354759,20.0180016 1.00437876,20 C2.24694081,19.8329143 5.99508794,17.8557747 7.00437876,17 L4.00437876,12 Z" id="Path" fill="#FCD116"></path>
              <path d="M3.51718325,13 C3.32414691,14.593127 1.18171535,15.5806978 0.171219921,15.9606135 C0.0811301363,15.9953185 0.0166347678,16.0874351 0.00593652312,16.1966824 C-0.00476172158,16.3059297 0.0402835633,16.4124316 0.121374855,16.4696165 L2.07439516,17.8266081 L1.31131252,19.5939506 C1.27028987,19.688478 1.27873674,19.8017021 1.33315117,19.8866815 C1.3875656,19.9716609 1.47867031,20.0139072 1.56869431,19.9959055 C2.81125636,19.8288199 3.99508794,19.2910874 5.00437876,18.4353127" id="Path-Copy-3" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M22.0043788,12 C22.1974151,13.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 21.013589,17.8559443 20.0043788,17" id="Path-Copy-2" fill="#FCD116"></path>
              <path d="M22.4915743,13 C22.6846106,14.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 22.013589,19.291257 21.0043788,18.4353127" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z" id="Path" fill="#FCD116"></path>
              <path d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z" id="Path-Copy" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `},__vite_glob_0_58=Object.freeze(Object.defineProperty({__proto__:null,default:computerShield},Symbol.toStringTag,{value:"Module"})),emailActionUnread={tagName:"email-action-unread",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round`}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <rect x=".5" y="3.954" width="23" height="16" rx="2" ry="2"></rect>
      <path d="M22.911 4.536L12 13.454 1.089 4.536"></path>
    </g>
  </svg>
  `},__vite_glob_0_59=Object.freeze(Object.defineProperty({__proto__:null,default:emailActionUnread},Symbol.toStringTag,{value:"Module"})),emergency={tagName:"emergency",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" viewBox="0 0 51.9 44.2" xml:space="preserve" :style="style">
      <g>
        <path d="M23.7,13.9L5.6,14c-1.7,0-3,1.3-3,3v18c0,1.7,1.3,3,3,3h30c1.7,0,3-1.3,3-3v-2.9H37l0.1,2.9
          c0,0.8-0.7,1.5-1.5,1.5h-30c-0.8,0-1.5-0.7-1.5-1.5V17c0-0.8,0.7-1.5,1.5-1.5h17.6"></path>
        <path d="M21.5,27.3c-0.2,0.1-0.5,0.1-0.8,0L8.8,20.1C8.7,20,8.5,20,8.4,20c-0.2,0-0.5,0.1-0.6,0.3
          c-0.1,0.2-0.1,0.3-0.1,0.5s0.2,0.3,0.3,0.4l12.8,7.6c0.1,0.1,0.3,0.1,0.4,0.1s0.3,0,0.4-0.1l6.4-3.9c0,0,0.3-0.4,0-0.8
          c-0.2-0.4-0.7-0.4-1-0.2L21.5,27.3z"></path>
        <path d="M13.5,29.3c-0.2-0.3-0.7-0.4-1.1-0.2L7,31.7c-0.3,0.1-0.5,0.5-0.3,0.8c0,0,0,0.1,0.1,0.1
          C6.9,32.9,7.1,33,7.4,33c0.1,0,0.3,0,0.4-0.1l5.4-2.7c0.3-0.1,0.5-0.5,0.4-0.8C13.6,29.4,13.6,29.3,13.5,29.3z"></path>
        <path d="M28,30.2l5.5,2.7c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.1-0.3,0.1-0.5
          c-0.1-0.2-0.2-0.3-0.4-0.4l-5.4-2.7C28.7,29,28.5,29,28.4,29c-0.3,0-0.5,0.1-0.7,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
          C27.7,30,27.8,30.1,28,30.2z"></path>
        <path d="M46,27.4H32.4c-0.9,0-1.7-0.8-1.7-1.7v-1c0-1.5,1.2-2.6,2.7-2.6H45c1.5,0,2.7,1.2,2.7,2.6v1C47.7,26.6,46.9,27.4,46,27.4z
          M33.4,23.5c-0.7,0-1.2,0.6-1.2,1.2v1c0,0.1,0.1,0.3,0.3,0.3H46c0.1,0,0.3-0.1,0.3-0.3v-1c0-0.7-0.6-1.2-1.2-1.2H33.4z"></path>
        <path d="M44.6,23.5c-0.4,0-0.7-0.3-0.7-0.6l-0.9-10c-0.1-0.6-0.6-1.1-1.2-1.1l0,0h-5.3c-0.6,0-1.2,0.5-1.2,1.1l-0.8,9.9
          c0,0.4-0.4,0.7-0.8,0.6c-0.4,0-0.7-0.4-0.6-0.8l0.8-9.9c0.2-1.4,1.3-2.4,2.7-2.4h5.3l0,0c1.3,0,2.5,1,2.6,2.3l0.9,10
          C45.4,23.1,45.1,23.5,44.6,23.5C44.7,23.5,44.6,23.5,44.6,23.5z"></path>
        <path d="M39.2,8c-0.4,0-0.7-0.3-0.7-0.7v-3c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v2.9C39.9,7.6,39.6,8,39.2,8z"></path>
        <path d="M45,10.4c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-1l2.1-2.1c0.3-0.3,0.7-0.3,1,0s0.3,0.7,0,1l-2.1,2.1
          C45.4,10.3,45.2,10.4,45,10.4z"></path>
        <path d="M50.4,15.7h-2.9c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.9c0.4,0,0.7,0.3,0.7,0.7S50.7,15.7,50.4,15.7z"></path>
        <path d="M33.4,10.4c-0.2,0-0.4-0.1-0.5-0.2l-2.1-2.1c-0.3-0.3-0.3-0.7,0-1s0.7-0.3,1,0l2.1,2.1c0.3,0.3,0.3,0.7,0,1
          C33.7,10.3,33.5,10.4,33.4,10.4z"></path>
        <path d="M30.9,15.7H28c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.9c0.4,0,0.7,0.3,0.7,0.7S31.3,15.7,30.9,15.7z"></path>
      </g>
    </svg>
  `},__vite_glob_0_60=Object.freeze(Object.defineProperty({__proto__:null,default:emergency},Symbol.toStringTag,{value:"Module"})),expand={tagName:"expand",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 22 12" fill="none">
      <path
        d="M1 1L9.58671 10.2646C9.96284 10.6704 10.597 10.6937 11.0019 10.3164L21 1"
        stroke-width="1.5"
        :stroke="stroke"
        stroke-linecap="round"
      />
    </svg>
  `},__vite_glob_0_61=Object.freeze(Object.defineProperty({__proto__:null,default:expand},Symbol.toStringTag,{value:"Module"})),iconHandStepTime="0s",iconHandDuration="0.5s",iconResetAndSetDuration="0.3s",iconHandRepetition="2",iconHandPause="2s",hand={tagName:"hand",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},stroke(){return this.color}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 308 304" fill="none">
    <g class="hand-outline" id="hand-outline">
      <path id="hand-outline-outter" d="M50.5707 135.135C42.6425 127.207 29.4289 127.207 20.1793 135.135C12.2511 143.063 12.2511 156.277 20.1793 165.527L133.816 279.164C147.03 292.378 165.529 300.306 185.35 300.306C205.17 300.306 223.669 292.378 236.883 279.164L265.953 250.094C285.774 230.274 295.023 201.204 289.738 173.455L271.239 82.281C269.917 73.0314 263.31 66.4246 254.061 65.1032C242.168 62.4605 228.955 71.7101 227.633 83.6024L222.348 127.207L124.567 29.4264C116.639 21.4982 103.425 21.4982 94.1758 29.4264C86.2476 37.3546 86.2476 50.5682 94.1758 59.8178L80.9621 45.2828C73.0339 37.3546 59.8203 37.3546 50.5707 45.2828C42.6425 53.211 42.6425 66.4246 50.5707 75.6742L65.1057 90.2092C57.1775 82.281 43.9639 82.281 34.7143 90.2092C26.7861 98.1374 26.7861 111.351 34.7143 120.601L50.5707 135.135Z" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path id="hand-outline-inner-finger" d="M94.1547 59.7668L153.616 119.228" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="hand-outline-inner-finger" d="M65.1072 90.2095L125.891 149.671" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="hand-outline-inner-finger" d="M95.4982 180.062L50.5718 135.135" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g id="inner-lines">
      <path id="inner-line-top" d="M205.17 36.0347C210.456 36.0347 214.42 37.356 218.384 39.9988" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="inner-line-bottom" d="M36.0364 240.846C36.0364 255.381 47.9287 267.273 62.4637 267.273" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g id="outter-lines">
      <path id="outter-line-top" d="M211.778 3C226.313 3 239.527 8.28546 248.776 18.8564" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="outter-line-bottom" d="M3 247.452C3 276.522 26.7846 300.307 55.8546 300.307" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <animateTransform id="reset-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 15 187.5 192"
      begin="hand-rotation.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="reset-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 0 0"
      begin="hand-movement.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="pause-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192"
      begin="reset-hand-rotation.end+0s" dur="${iconHandPause}"
      additive="sum"
    />

    <animateTransform id="set-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="0 0; -5 -15"
      begin="pause-hand-rotation.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="set-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192; -17 187.5 192"
      begin="pause-hand-rotation.end+0s" dur="${iconResetAndSetDuration}"
      additive="sum"
    />

    <animateTransform id="hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 2 2; -5 -15"
      begin="0s;set-hand-rotation.end+0s" dur="${iconHandDuration}"
      repeatCount="${iconHandRepetition}"
      additive="sum"
    />

    <animateTransform id="hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 22 187.5 192; -17 187.5 192"
      begin="0s;set-hand-rotation.end+0s" dur="${iconHandDuration}"
      repeatCount="${iconHandRepetition}" additive="sum" keySplines="0.4 0.17 1 1; 0.2 0.2 0.5 0.9" calcMode="spline"
    />

    <animate id="pause-inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1"
      begin="inner-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandPause}"
    />

    <animate id="inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1; 0.8; 1"
      begin="${iconHandStepTime}; pause-inner-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandDuration}" repeatCount="${iconHandRepetition}"
    />

    <animate id="pause-outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="1"
      begin="outter-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandPause}"
    />

    <animate id="outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="0.8; 1; 0.8"
      begin="${iconHandStepTime}; pause-outter-lines-opacity.end+${iconResetAndSetDuration}" dur="${iconHandDuration}" repeatCount="${iconHandRepetition}"
    />
  </svg>
  `},__vite_glob_0_62=Object.freeze(Object.defineProperty({__proto__:null,default:hand},Symbol.toStringTag,{value:"Module"})),imageCredits={tagName:"image-credits",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style"viewBox="0 0 38 38" fill="none">
      <path d="M33 17V3.66666C33 0.999998 30.3333 1 30.3333 1H3.66666C0.999998 1 1 3.66666 1 3.66666V30.3333C1 33 3.66666 33 3.66666 33H17" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 10.6666C7 11.7275 7.42143 12.7449 8.17157 13.4951C8.92172 14.2452 9.93913 14.6666 11 14.6666C12.0609 14.6666 13.0783 14.2452 13.8284 13.4951C14.5786 12.7449 15 11.7275 15 10.6666C15 9.60576 14.5786 8.58834 13.8284 7.8382C13.0783 7.08805 12.0609 6.66663 11 6.66663C9.93913 6.66663 8.92172 7.08805 8.17157 7.8382C7.42143 8.58834 7 9.60576 7 10.6666Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 13.0189C27.7795 12.7091 27.4814 12.4544 27.1318 12.2769C26.7821 12.0994 26.3914 12.0044 25.9935 12.0002C25.5957 11.996 25.2027 12.0827 24.8488 12.2528C24.495 12.4229 24.1909 12.6712 23.9629 12.9762L17.4462 21.6644L14.8408 19.8438C14.576 19.6461 14.2701 19.5021 13.9427 19.4207C13.6152 19.3394 13.2732 19.3225 12.9385 19.3712C12.6037 19.4199 12.2833 19.5331 11.9978 19.7037C11.7122 19.8742 11.4676 20.0983 11.2794 20.3619L3 32" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 29C21 31.1217 21.8429 33.1566 23.3431 34.6569C24.8434 36.1571 26.8783 37 29 37C31.1217 37 33.1566 36.1571 34.6569 34.6569C36.1571 33.1566 37 31.1217 37 29C37 26.8783 36.1571 24.8434 34.6569 23.3431C33.1566 21.8429 31.1217 21 29 21C26.8783 21 24.8434 21.8429 23.3431 23.3431C21.8429 24.8434 21 26.8783 21 29Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31 31.1213C30.4507 31.6839 29.7057 32 28.9289 32C28.1521 32 27.4071 31.6839 26.8579 31.1213C26.3086 30.5587 26 29.7956 26 29C26 28.2044 26.3086 27.4413 26.8579 26.8787C27.4071 26.3161 28.1521 26 28.9289 26C29.7057 26 30.4507 26.3161 31 26.8787" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `},__vite_glob_0_63=Object.freeze(Object.defineProperty({__proto__:null,default:imageCredits},Symbol.toStringTag,{value:"Module"})),info={tagName:"info",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},fill(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" :stroke="fill" fill="none" stroke-width="1.5" />
      <g transform="translate(7, 3)">
        <path d="M2.352 3.03999C2.268 3.03999 2.198 3.01199 2.142 2.95599C2.086 2.89999 2.058 2.83 2.058 2.746V1.21999C2.058 1.13599 2.086 1.06599 2.142 1.00999C2.198 0.953995 2.268 0.925995 2.352 0.925995H3.304C3.388 0.925995 3.458 0.953995 3.514 1.00999C3.57 1.06599 3.598 1.13599 3.598 1.21999V2.746C3.598 2.83 3.57 2.89999 3.514 2.95599C3.458 3.01199 3.388 3.03999 3.304 3.03999H2.352ZM2.688 12C2.492 12 2.324 11.9347 2.184 11.804C2.05333 11.664 1.988 11.496 1.988 11.3V5.57399H0.853998C0.769998 5.57399 0.699998 5.546 0.643998 5.49C0.587998 5.434 0.559998 5.364 0.559998 5.27999V4.27199C0.559998 4.18799 0.587998 4.11799 0.643998 4.06199C0.699998 4.00599 0.769998 3.97799 0.853998 3.97799H2.968C3.164 3.97799 3.32733 4.048 3.458 4.18799C3.598 4.31866 3.668 4.48199 3.668 4.67799V10.404H4.802C4.886 10.404 4.956 10.432 5.012 10.488C5.068 10.544 5.096 10.614 5.096 10.698V11.706C5.096 11.79 5.068 11.86 5.012 11.916C4.956 11.972 4.886 12 4.802 12H2.688Z" fill="#011E33" />
      </g>
    </svg>
  `},__vite_glob_0_64=Object.freeze(Object.defineProperty({__proto__:null,default:info},Symbol.toStringTag,{value:"Module"})),listView={tagName:"list-view",computed:{style(){const t=this.color?this.color:"#5CBBFF";return`fill: ${t}; stroke: ${t}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 18 16">
      <path d="M6.52277 2.84119H17.204C17.3993 2.84119 17.5867 2.76358 17.7248 2.62543C17.863 2.48729 17.9406 2.29992 17.9406 2.10455C17.9406 1.90919 17.863 1.72182 17.7248 1.58368C17.5867 1.44553 17.3993 1.36792 17.204 1.36792H6.52277C6.3274 1.36792 6.14003 1.44553 6.00189 1.58368C5.86374 1.72182 5.78613 1.90919 5.78613 2.10455C5.78613 2.29992 5.86374 2.48729 6.00189 2.62543C6.14003 2.76358 6.3274 2.84119 6.52277 2.84119Z" stroke-width="0" />
      <path d="M17.204 7.26123H6.52277C6.3274 7.26123 6.14003 7.33884 6.00189 7.47699C5.86374 7.61513 5.78613 7.8025 5.78613 7.99787C5.78613 8.19323 5.86374 8.3806 6.00189 8.51874C6.14003 8.65689 6.3274 8.7345 6.52277 8.7345H17.204C17.3993 8.7345 17.5867 8.65689 17.7248 8.51874C17.863 8.3806 17.9406 8.19323 17.9406 7.99787C17.9406 7.8025 17.863 7.61513 17.7248 7.47699C17.5867 7.33884 17.3993 7.26123 17.204 7.26123Z" stroke-width="0" />
      <path d="M17.204 13.1545H6.52277C6.3274 13.1545 6.14003 13.2321 6.00189 13.3703C5.86374 13.5084 5.78613 13.6958 5.78613 13.8912C5.78613 14.0865 5.86374 14.2739 6.00189 14.4121C6.14003 14.5502 6.3274 14.6278 6.52277 14.6278H17.204C17.3993 14.6278 17.5867 14.5502 17.7248 14.4121C17.863 14.2739 17.9406 14.0865 17.9406 13.8912C17.9406 13.6958 17.863 13.5084 17.7248 13.3703C17.5867 13.2321 17.3993 13.1545 17.204 13.1545Z" stroke-width="0" />
      <path d="M2.83963 1V0.75H1.36636C1.23054 0.75 1.11205 0.784675 1.01476 0.849537C0.919027 0.913356 0.858328 0.996658 0.82048 1.07236C0.783121 1.14707 0.765687 1.21877 0.757203 1.26967C0.752863 1.29571 0.750596 1.31796 0.749402 1.33468C0.748801 1.34308 0.748464 1.35021 0.748276 1.35585L0.748091 1.36323L0.748056 1.36607L0.748049 1.36727L0.748047 1.36781L0.748047 1.36807C0.748047 1.36819 0.748047 1.36832 0.998047 1.36832H0.748047V2.84159C0.748047 2.97741 0.782722 3.0959 0.847584 3.19319C0.911403 3.28892 0.994705 3.34962 1.0704 3.38747C1.14512 3.42483 1.21681 3.44226 1.26771 3.45075C1.29376 3.45509 1.31601 3.45736 1.33273 3.45855C1.34113 3.45915 1.34825 3.45949 1.3539 3.45968L1.36128 3.45986L1.36411 3.45989L1.36531 3.4599L1.36586 3.4599L1.36612 3.4599C1.36624 3.4599 1.36636 3.4599 1.36636 3.2099V3.4599H2.83963C2.97546 3.4599 3.09395 3.42523 3.19124 3.36037C3.28697 3.29655 3.34767 3.21325 3.38552 3.13755C3.42288 3.06283 3.44031 2.99114 3.44879 2.94024C3.45313 2.91419 3.4554 2.89194 3.4566 2.87522C3.4572 2.86682 3.45753 2.8597 3.45772 2.85405L3.45791 2.84667L3.45794 2.84384L3.45795 2.84264L3.45795 2.84209L3.45795 2.84184C3.45795 2.84171 3.45795 2.84159 3.20795 2.84159H3.45795V1.36832C3.45795 1.23249 3.42328 1.114 3.35841 1.01671C3.29459 0.92098 3.21129 0.860281 3.1356 0.822433C3.06088 0.785074 2.98919 0.76764 2.93828 0.759156C2.91224 0.754816 2.88999 0.752549 2.87327 0.751355C2.86487 0.750755 2.85774 0.750417 2.8521 0.750229L2.84472 0.750044L2.84188 0.750009L2.84068 0.750002L2.84014 0.750001L2.83988 0.75C2.83976 0.75 2.83963 0.75 2.83963 1Z" stroke-width="0.5"/>
      <path d="M2.83963 6.89331V6.64331H1.36636C1.23054 6.64331 1.11205 6.67799 1.01476 6.74285C0.919027 6.80667 0.858328 6.88997 0.82048 6.96567C0.783121 7.04038 0.765687 7.11208 0.757203 7.16298C0.752863 7.18902 0.750596 7.21127 0.749402 7.22799C0.748801 7.23639 0.748464 7.24352 0.748276 7.24916L0.748091 7.25654L0.748056 7.25938L0.748049 7.26058L0.748047 7.26112L0.748047 7.26138C0.748047 7.2615 0.748047 7.26163 0.998047 7.26163H0.748047V8.7349C0.748047 8.87072 0.782722 8.98921 0.847584 9.08651C0.911403 9.18223 0.994705 9.24293 1.0704 9.28078C1.14512 9.31814 1.21681 9.33557 1.26771 9.34406C1.29376 9.3484 1.31601 9.35067 1.33273 9.35186C1.34113 9.35246 1.34825 9.3528 1.3539 9.35299L1.36128 9.35317L1.36411 9.3532L1.36531 9.35321L1.36586 9.35321L1.36612 9.35321C1.36624 9.35321 1.36636 9.35321 1.36636 9.10321V9.35321H2.83963C2.97546 9.35321 3.09395 9.31854 3.19124 9.25368C3.28697 9.18986 3.34767 9.10656 3.38552 9.03086C3.42288 8.95614 3.44031 8.88445 3.44879 8.83355C3.45313 8.8075 3.4554 8.78525 3.4566 8.76853C3.4572 8.76013 3.45753 8.75301 3.45772 8.74736L3.45791 8.73999L3.45794 8.73715L3.45795 8.73595L3.45795 8.7354L3.45795 8.73515C3.45795 8.73502 3.45795 8.7349 3.20795 8.7349H3.45795V7.26163C3.45795 7.1258 3.42328 7.00731 3.35841 6.91002C3.29459 6.81429 3.21129 6.75359 3.1356 6.71574C3.06088 6.67838 2.98919 6.66095 2.93828 6.65247C2.91224 6.64813 2.88999 6.64586 2.87327 6.64467C2.86487 6.64407 2.85774 6.64373 2.8521 6.64354L2.84472 6.64335L2.84188 6.64332L2.84068 6.64331L2.84014 6.64331L2.83988 6.64331C2.83976 6.64331 2.83963 6.64331 2.83963 6.89331Z" stroke-width="0.5" stroke-linejoin="round"/>
      <path d="M2.84307 12.7861V12.5361H1.36705C1.23105 12.5361 1.11244 12.5709 1.01505 12.6358C0.919221 12.6997 0.858457 12.783 0.820566 12.8588C0.783164 12.9336 0.765709 13.0054 0.757214 13.0564C0.752868 13.0825 0.750598 13.1047 0.749403 13.1215C0.748802 13.1299 0.748464 13.137 0.748276 13.1427L0.748091 13.15L0.748056 13.1529L0.748049 13.1541L0.748047 13.1546L0.748047 13.1549C0.748047 13.155 0.748047 13.1551 0.998047 13.1551H0.748047V14.6312C0.748047 14.7672 0.782765 14.8858 0.847691 14.9832C0.911575 15.079 0.994963 15.1398 1.07075 15.1776C1.14555 15.215 1.21733 15.2325 1.2683 15.241C1.29437 15.2453 1.31665 15.2476 1.33338 15.2488C1.3418 15.2494 1.34893 15.2497 1.35458 15.2499L1.36196 15.2501L1.3648 15.2502L1.366 15.2502L1.36655 15.2502L1.3668 15.2502C1.36693 15.2502 1.36705 15.2502 1.36705 15.0002V15.2502H2.84307C2.97907 15.2502 3.09769 15.2154 3.19508 15.1505C3.29091 15.0866 3.35167 15.0033 3.38956 14.9275C3.42696 14.8527 3.44442 14.7809 3.45291 14.7299C3.45726 14.7038 3.45953 14.6816 3.46072 14.6648C3.46133 14.6564 3.46166 14.6493 3.46185 14.6436L3.46204 14.6363L3.46207 14.6334L3.46208 14.6322L3.46208 14.6317L3.46208 14.6314C3.46208 14.6313 3.46208 14.6312 3.21208 14.6312H3.46208V13.1551C3.46208 13.0191 3.42736 12.9005 3.36244 12.8031C3.29855 12.7073 3.21516 12.6465 3.13938 12.6087C3.06458 12.5712 2.9928 12.5538 2.94183 12.5453C2.91576 12.541 2.89348 12.5387 2.87674 12.5375C2.86833 12.5369 2.8612 12.5366 2.85555 12.5364L2.84817 12.5362L2.84533 12.5361L2.84413 12.5361L2.84358 12.5361L2.84332 12.5361C2.8432 12.5361 2.84307 12.5361 2.84307 12.7861Z" stroke-width="0.5"/>
    </svg>
  `},__vite_glob_0_65=Object.freeze(Object.defineProperty({__proto__:null,default:listView},Symbol.toStringTag,{value:"Module"})),magnifier={tagName:"magnifier",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},fill(){return this.color}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 21 21" fill="none">
    <path d="M15.1186 13.027H14.2152L13.895 12.7182C15.0157 11.4146 15.6903 9.72223 15.6903 7.88118C15.6903 3.77598 12.3627 0.448364 8.25753 0.448364C4.15232 0.448364 0.824707 3.77598 0.824707 7.88118C0.824707 11.9864 4.15232 15.314 8.25753 15.314C10.0986 15.314 11.791 14.6393 13.0946 13.5187L13.4033 13.8389V14.7422L19.1209 20.4484L20.8247 18.7445L15.1186 13.027ZM8.25753 13.027C5.41018 13.027 3.11173 10.7285 3.11173 7.88118C3.11173 5.03384 5.41018 2.73539 8.25753 2.73539C11.1049 2.73539 13.4033 5.03384 13.4033 7.88118C13.4033 10.7285 11.1049 13.027 8.25753 13.027Z" :fill="fill"/>
  </svg>
  `},__vite_glob_0_66=Object.freeze(Object.defineProperty({__proto__:null,default:magnifier},Symbol.toStringTag,{value:"Module"})),mail={tagName:"mail",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(1.5);`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 42 28">
      <g>
        <path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path>
      </g>
    </svg>
  `},__vite_glob_0_67=Object.freeze(Object.defineProperty({__proto__:null,default:mail},Symbol.toStringTag,{value:"Module"})),meerkat={tagName:"meerkat",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 203 363">
      <defs>
          <path d="M0.331,0.141 C2.649,3.188 6.517,9.438 6.686,9.665 L6.686,9.665 C13.064,18.257 18.496,26.341 24.899,34.915 L24.899,34.915 L7.379,104.733 C7.379,104.733 3.5,131.257 0.297,173.806 L0.297,173.806 C0.297,173.806 0,179.589 0,179.59 L0,179.59 C0,179.59 9.278,196.693 9.292,196.752 L9.292,196.752 C9.278,196.693 12.801,202.691 12.742,202.701 L12.742,202.701 C12.919,202.672 15.854,219.4 15.854,219.4 L15.854,219.4 C15.906,221.533 30.958,275.435 30.958,275.435 L30.958,275.435 L26.97,284.459 L52.286,284.459 C51.382,284.074 48.43,276.252 48.43,276.252 L48.43,276.252 C48.43,276.252 48.512,217.555 48.523,217.512 L48.523,217.512 L52.657,201.413 L62.231,188.494 L72.149,200.959 L75.465,220.343 L74.134,275.138 C74.4,276.18 70.57,284.754 71.197,284.754 L71.197,284.754 L92.746,284.754 C93.652,284.754 90.12,276.579 90.19,276.232 L90.19,276.232 C90.19,276.232 104.198,227.893 108.316,217.041 L108.316,217.041 C108.328,217.009 117.295,182.837 117.296,182.833 L117.296,182.833 C117.291,182.833 114.313,149.101 114.313,149.101 L114.313,149.101 L124.3,115.094 L111.307,63.933 L103.856,34.915 C103.856,34.916 109.431,27.147 115.007,19.378 L115.007,19.378 C120.588,11.604 126.169,3.829 126.16,3.842 L126.16,3.842 C126.141,3.866 128.954,0.142 129,0.004 L129,0.004 L129,0 L0.331,0.141 Z M52.286,284.459 C52.331,284.478 52.371,284.479 52.405,284.459 L52.405,284.459 L52.286,284.459 Z" id="path-1"/>
          <path d="M59.558,66.458 L55.5,93.394 C55.5,93.394 51.894,142.106 51.401,140.558 L51.401,140.558 C51.401,140.558 31.098,150.631 30.82,150.619 L30.82,150.619 L16.632,113.154 C16.632,113.154 2.214,95.987 0.222,86.114 L0.222,86.114 C1.297,95.059 5.907,134.677 5.907,134.677 L5.907,134.677 L26.414,176.665 C26.414,176.665 51.786,168.865 65.352,166.36 L65.352,166.36 C65.411,166.35 65.47,166.342 65.529,166.332 L65.529,166.332 C65.352,166.36 63.187,147.026 63.187,147.026 L63.187,147.026 C63.187,147.024 69.608,108.217 69.505,108.349 L69.505,108.349 C69.467,108.397 69.558,108.254 69.608,108.217 L69.608,108.217 L75.562,89.161 L108.798,118.094 L111,104.157 L84.597,30.589 L88.173,15.065 L76.35,-1.13686838e-13 L59.558,66.458 Z M0,84.339 C0.02,84.898 0.096,85.491 0.222,86.114 L0.222,86.114 C0.085,84.976 0.005,84.334 0,84.334 L0,84.334 L0,84.339 Z" id="path-3"/>
          <path d="M0,0.5 C0.444,0.5 0.889,0.5 1.333,0.5 L1.333,0.5 C1.556,0.5 1.778,0.5 2,0.5 L2,0.5 L0,0.5 Z" id="path-5"/>
          <path d="M0,0.7845 C0.666,0.5945 1.333,0.4055 2,0.2155 L2,0.2155 C1.333,0.4045 0.666,0.5945 0,0.7845 L0,0.7845 Z" id="path-7"/>
          <path d="M59.472,2.204 C47.677,5.185 27.287,24.626 27.287,24.626 L27.287,24.626 L1.13686838e-13,54.63 L15.432,78.013 C15.496,78.043 38.694,79.317 38.694,79.317 L38.694,79.317 L56.209,89.183 L67.199,94.626 C66.955,93.563 65.78,90.32 65.78,89.183 L65.78,89.183 C65.78,85.852 66.899,82.789 68.764,80.323 L68.764,80.323 C70.425,78.367 72.88,76.606 75.708,75.282 L75.708,75.282 C77.201,74.771 78.796,74.479 80.463,74.479 L80.463,74.479 C81.499,74.479 82.509,74.59 83.484,74.794 L83.484,74.794 C87.37,75.784 88.505,77.23 91.411,79.411 L91.411,79.411 C93.726,82.011 95.143,85.427 95.143,89.183 L95.143,89.183 C95.143,89.963 93.515,93.27 93.398,94.018 L93.398,94.018 L96.867,91.933 L119.359,79.407 L144.286,78.68 L144.238,78.672 L160.101,55.328 C150.439,44.793 130.813,23.78 130.813,23.78 L130.813,23.78 C130.813,23.78 110.146,5.043 101.506,2.204 L101.506,2.204 C96.81,0.661 89.49,2.27373675e-13 81.991,2.27373675e-13 L81.991,2.27373675e-13 C73.543,2.27373675e-13 64.87,0.84 59.472,2.204 L59.472,2.204 Z" id="path-9"/>
          <path d="M0,23.375 L5.522,24.121 C23.669,25.973 27.166,12.632 16.588,0 L16.588,0 L0,23.375 Z" id="path-11"/>
          <path d="M10.143,0.819 C7.291,1.797 4.833,3.605 3.049,5.963 L3.049,5.963 C1.143,8.477 0,11.601 0,15 L0,15 C0,16.161 0.143,17.285 0.394,18.37 L0.394,18.37 C1.925,25.029 7.876,30 15.001,30 L15.001,30 C22.489,30 28.679,24.505 29.8,17.332 L29.8,17.332 C29.92,16.571 30,15.796 30,15 L30,15 C30,11.167 28.552,7.682 26.187,5.031 L26.187,5.031 C24.093,2.683 21.283,0.99 18.088,0.32 L18.088,0.32 C17.091,0.113 16.059,0 15.001,0 L15.001,0 C13.297,0 11.667,0.297 10.143,0.819 L10.143,0.819 Z" id="path-13"/>
          <path d="M5.90199653,0.799 C-4.67700347,13.431 -1.08100347,26.474 17.0669965,24.622 L17.0669965,24.622 L21.3309965,24.186 L6.62399653,0 L5.90199653,0.799 Z" id="path-15"/>
          <path d="M15.553,1.257 C11.18,2.755 7.411,5.529 4.676,9.142 L4.676,9.142 C1.754,12.998 0,17.789 0,23 L0,23 C0,24.779 0.222,26.505 0.604,28.168 L0.604,28.168 C2.952,38.378 12.077,46 23.001,46 L23.001,46 C34.484,46 43.973,37.576 45.695,26.576 L45.695,26.576 C45.878,25.407 46,24.219 46,23 L46,23 C46,17.124 43.778,11.78 40.153,7.714 L40.153,7.714 C36.943,4.115 32.633,1.519 27.736,0.493 L27.736,0.493 C26.207,0.173 24.623,0 23.001,0 L23.001,0 C20.391,0 17.891,0.455 15.553,1.257 L15.553,1.257 Z" id="path-17"/>
          <path d="M15.216,1.23 C10.936,2.695 7.25,5.409 4.574,8.944 L4.574,8.944 C1.716,12.717 0,17.402 0,22.5 L0,22.5 C0,24.24 0.217,25.928 0.591,27.556 L0.591,27.556 C2.888,37.544 11.815,45 22.5,45 L22.5,45 C33.734,45 43.017,36.759 44.702,25.998 L44.702,25.998 C44.88,24.855 45,23.693 45,22.5 L45,22.5 C45,16.752 42.827,11.524 39.28,7.547 L39.28,7.547 C36.139,4.025 31.923,1.485 27.132,0.483 L27.132,0.483 C25.637,0.17 24.089,0 22.5,0 L22.5,0 C19.947,0 17.503,0.446 15.216,1.23 L15.216,1.23 Z" id="path-19"/>
          <path d="M7.438,0.601 C5.347,1.318 3.545,2.645 2.236,4.372 L2.236,4.372 C0.839,6.217 0,8.508 0,11 L0,11 C0,11.851 0.106,12.676 0.289,13.471 L0.289,13.471 C1.412,18.356 5.776,22 11.001,22 L11.001,22 C16.492,22 21.03,17.971 21.854,12.71 L21.854,12.71 C21.941,12.152 22,11.583 22,11 L22,11 C22,8.19 20.937,5.634 19.203,3.689 L19.203,3.689 C17.668,1.968 15.607,0.726 13.264,0.235 L13.264,0.235 C12.533,0.082 11.776,0 11.001,0 L11.001,0 C9.751,0 8.557,0.217 7.438,0.601 L7.438,0.601 Z" id="path-21"/>
          <path d="M7.439,0.6 C5.347,1.318 3.545,2.644 2.236,4.372 L2.236,4.372 C0.839,6.216 0,8.508 0,11 L0,11 C0,11.85 0.106,12.676 0.289,13.471 L0.289,13.471 C1.411,18.356 5.776,22 11.001,22 L11.001,22 C16.493,22 21.03,17.971 21.853,12.71 L21.853,12.71 C21.941,12.152 22,11.583 22,11 L22,11 C22,8.19 20.937,5.634 19.203,3.689 L19.203,3.689 C17.667,1.968 15.607,0.726 13.264,0.235 L13.264,0.235 C12.534,0.082 11.777,0 11.001,0 L11.001,0 C9.752,0 8.557,0.217 7.439,0.6 L7.439,0.6 Z" id="path-23"/>
          <path d="M2.367,0.191 C1.701,0.419 1.128,0.842 0.711,1.391 L0.711,1.391 C0.266,1.978 0,2.707 0,3.5 L0,3.5 C0,3.771 0.034,4.033 0.092,4.287 L0.092,4.287 C0.448,5.84 1.838,7 3.499,7 L3.499,7 C5.248,7 6.692,5.718 6.953,4.044 L6.953,4.044 C6.981,3.867 7,3.686 7,3.5 L7,3.5 C7,2.607 6.662,1.792 6.11,1.174 L6.11,1.174 C5.621,0.627 4.966,0.232 4.221,0.075 L4.221,0.075 C3.987,0.026 3.747,0 3.499,0 L3.499,0 C3.102,0 2.723,0.069 2.367,0.191 L2.367,0.191 Z" id="path-25"/>
          <path d="M0,16.719 L22.336,113 L60.3,89.34 L47.339,38.301 C47.339,38.301 38.434,69.79 36.357,72.885 L36.357,72.885 L10.881,0 L0,16.719 Z" id="path-27"/>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-606, -330)">
              <g transform="translate(606, 330)">
                  <g transform="translate(52, 77.872)">
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"/>
                      </mask>
                      <g id="Clip-2"/>
                      <polygon id="Fill-1" fill="#F98620" mask="url(#mask-2)" points="-1 285.754 130 285.754 130 -3.246 -1 -3.246"/>
                  </g>
                  <g id="Group-6" transform="translate(0, 114.961)">
                      <mask id="mask-4" fill="white">
                          <use xlink:href="#path-3"/>
                      </mask>
                      <g id="Clip-5"/>
                      <polygon id="Fill-4" fill="#FCD400" mask="url(#mask-4)" points="-1 177.665 112 177.665 112 -1.335 -1 -1.335"/>
                  </g>
                  <g id="Group-9" transform="translate(155, 78.626)">
                      <mask id="mask-6" fill="white">
                          <use xlink:href="#path-5"/>
                      </mask>
                      <g id="Clip-8"/>
                      <polygon id="Fill-7" fill="#DA740D" mask="url(#mask-6)" points="-1 1.5 3 1.5 3 -0.501 -1 -0.501"/>
                  </g>
                  <g id="Group-12" transform="translate(148, 79.6255)">
                      <mask id="mask-8" fill="white">
                          <use xlink:href="#path-7"/>
                      </mask>
                      <g id="Clip-11"/>
                      <polygon id="Fill-10" fill="#DA740D" mask="url(#mask-8)" points="-1 1.7845 3 1.7845 3 -0.7845 -1 -0.7845"/>
                  </g>
                  <g id="Group-15" transform="translate(36.899, 0)">
                      <mask id="mask-10" fill="white">
                          <use xlink:href="#path-9"/>
                      </mask>
                      <g id="Clip-14"/>
                      <polygon id="Fill-13" fill="#FCD400" mask="url(#mask-10)" points="-1.899 95.626 161.101 95.626 161.101 -1.374 -1.899 -1.374"/>
                  </g>
                  <g id="Group-18" transform="translate(180.412, 55.328)">
                      <mask id="mask-12" fill="white">
                          <use xlink:href="#path-11"/>
                      </mask>
                      <g id="Clip-17"/>
                      <polygon id="Fill-16" fill="#F98620" mask="url(#mask-12)" points="-0.412 26.974 23.588 26.974 23.588 -0.702 -0.412 -0.702"/>
                  </g>
                  <g id="Group-21" transform="translate(102, 73.626)">
                      <mask id="mask-14" fill="white">
                          <use xlink:href="#path-13"/>
                      </mask>
                      <g id="Clip-20"/>
                      <polygon id="Fill-19" fill="#000421" mask="url(#mask-14)" points="-1 31 31 31 31 -1 -1 -1"/>
                  </g>
                  <g id="Group-24" transform="translate(31, 53.827)">
                      <mask id="mask-16" fill="white">
                          <use xlink:href="#path-15"/>
                      </mask>
                      <g id="Clip-23"/>
                      <polygon id="Fill-22" fill="#F98620" mask="url(#mask-16)" points="-5.67700347 27.475 22.9999965 27.475 22.9999965 -0.201 -5.67700347 -0.201"/>
                  </g>
                  <g id="Group-27" transform="translate(67, 24.626)">
                      <mask id="mask-18" fill="white">
                          <use xlink:href="#path-17"/>
                      </mask>
                      <g id="Clip-26"/>
                      <polygon id="Fill-25" fill="#F98620" mask="url(#mask-18)" points="-1 47 47 47 47 -1 -1 -1"/>
                  </g>
                  <g id="Group-30" transform="translate(121, 24.626)">
                      <mask id="mask-20" fill="white">
                          <use xlink:href="#path-19"/>
                      </mask>
                      <g id="Clip-29"/>
                      <polygon id="Fill-28" fill="#F98620" mask="url(#mask-20)" points="-1 46 46 46 46 -1 -1 -1"/>
                  </g>
                  <g id="Group-33" transform="translate(125, 44.626)">
                      <mask id="mask-22" fill="white">
                          <use xlink:href="#path-21"/>
                      </mask>
                      <g id="Clip-32"/>
                      <polygon id="Fill-31" fill="#000421" mask="url(#mask-22)" points="-1 23 23 23 23 -1 -1 -1"/>
                  </g>
                  <g id="Group-36" transform="translate(87, 45.626)">
                      <mask id="mask-24" fill="white">
                          <use xlink:href="#path-23"/>
                      </mask>
                      <g id="Clip-35"/>
                      <polygon id="Fill-34" fill="#000421" mask="url(#mask-24)" points="-1 23 23 23 23 -1 -1 -1"/>
                  </g>
                  <g id="Group-39" transform="translate(115, 107.626)">
                      <mask id="mask-26" fill="white">
                          <use xlink:href="#path-25"/>
                      </mask>
                      <g id="Clip-38"/>
                      <polygon id="Fill-37" fill="#000421" mask="url(#mask-26)" points="-1 8 8 8 8 -1 -1 -1"/>
                  </g>
                  <g id="Group-42" transform="translate(116, 103.626)">
                      <mask id="mask-28" fill="white">
                          <use xlink:href="#path-27"/>
                      </mask>
                      <g id="Clip-41"/>
                      <polygon id="Fill-40" fill="#FCD400" mask="url(#mask-28)" points="-1 114 61 114 61 -1 -1 -1"/>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  `},__vite_glob_0_68=Object.freeze(Object.defineProperty({__proto__:null,default:meerkat},Symbol.toStringTag,{value:"Module"})),menu={tagName:"menu",computed:{strokeWidth(){return 2},effectiveKeySplines(){return"0.19 1 0.2 1"},style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},lineData(){return{line1:{from:{x1:"8.5",x2:"44.5",y1:"5.5",y2:"5.5"},to:{x1:"13",x2:"38.4558",y1:"31.8787",y2:"6.42284"}},line2:{from:{x1:"8.5",x2:"44.5",y1:"25.5",y2:"25.5"},to:{x1:"15.1213",x2:"40.5772",y1:"6",y2:"31.4558"}},line3:{from:{x1:"19.5",x2:"44.5",y1:"15.5",y2:"15.5"},to:{x1:"19.5",x2:"19.5",y1:"15.5",y2:"15.5"}}}}},updated(){this.animateLines(this.closed)},mounted(){this.animateLines(this.closed,!0)},methods:{animateLines(t,e){const i=[];this.$refs.svg.querySelectorAll("animate").forEach(r=>{(!t&&!r.classList.contains("closed")||t&&r.classList.contains("closed"))&&i.push(r)});const s=e?"beginElementAt":"beginElement";i.forEach(r=>{r[s](1e3)})}},props:{settings:Object,color:String,closed:Boolean},data(){return{duration:"0.55s",begin:"indefinite",keyTimes:"0;1"}},template:`
    <svg v-bind="settings" :style="style" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svg" >
      <line id="line1" :x1="lineData.line1.from.x1" :x2="lineData.line1.from.x2" :y1="lineData.line1.from.y1" :y2="lineData.line1.from.y2" :stroke-width="strokeWidth" stroke-linecap="round" ref="line1" >
        <animate attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line1.from.x1" :to="lineData.line1.to.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line1.from.x2" :to="lineData.line1.to.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line1.from.y1" :to="lineData.line1.to.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line1.from.y2" :to="lineData.line1.to.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line1.to.x1" :to="lineData.line1.from.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line1.to.x2" :to="lineData.line1.from.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line1.to.y1" :to="lineData.line1.from.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line1.to.y2" :to="lineData.line1.from.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
      <line style="transition: all linear 0.05s" id="line2" :x1="lineData.line2.from.x1" :x2="lineData.line2.from.x2" :y1="lineData.line2.from.y1" :y2="lineData.line2.from.y2" :stroke-width="strokeWidth" stroke-linecap="round" ref="line2" >
        <animate attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line2.from.x1" :to="lineData.line2.to.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line2.from.x2" :to="lineData.line2.to.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line2.from.y1" :to="lineData.line2.to.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line2.from.y2" :to="lineData.line2.to.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line2.to.x1" :to="lineData.line2.from.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line2.to.x2" :to="lineData.line2.from.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line2.to.y1" :to="lineData.line2.from.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line2.to.y2" :to="lineData.line2.from.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
      <line style="transition: all linear 0.05s" id="line3" :x1="lineData.line3.from.x1" :x2="lineData.line3.from.x2" :y1="lineData.line3.from.y1" :y2="lineData.line3.from.y2" :stroke-width="strokeWidth" stroke-linecap="round" ref="line3" >
        <animate attributeName="stroke-width" :begin="begin" dur="0.01s" :from="strokeWidth" to="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="stroke-width" :begin="begin" dur="0.01s" :to="strokeWidth" from="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
    </svg>
  `},__vite_glob_0_69=Object.freeze(Object.defineProperty({__proto__:null,default:menu},Symbol.toStringTag,{value:"Module"})),minus={tagName:"minus",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `},__vite_glob_0_70=Object.freeze(Object.defineProperty({__proto__:null,default:minus},Symbol.toStringTag,{value:"Module"})),phoneCharger={tagName:"phone-charger",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation));`}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <line class="a" x1="2.5" y1="0.5" x2="2.5" y2="3.5" />
    <line class="a" x1="10.5" y1="0.5" x2="10.5" y2="3.5" />
    <line class="a" x1="4.5" y1="6.5" x2="8.5" y2="6.5" />
    <path class="a" d="M6.5,16.5v3a4,4,0,0,0,8,0v-.75a5.251,5.251,0,0,1,5.25-5.25H23.5" />
    <path class="a" d="M4.5,13.158V15.5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V13.158" />
    <path class="a" d="M12.5,7.5a6,6,0,0,1-12,0v-3a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1Z" />
  </svg>
  `},__vite_glob_0_71=Object.freeze(Object.defineProperty({__proto__:null,default:phoneCharger},Symbol.toStringTag,{value:"Module"})),phoneMail={tagName:"phone-mail",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 51.9 44.2">
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
  `},__vite_glob_0_72=Object.freeze(Object.defineProperty({__proto__:null,default:phoneMail},Symbol.toStringTag,{value:"Module"})),phone={tagName:"phone",computed:{style(){return`stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round; `}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path d="M9.086 7.4a2.315 2.315 0 0 0 0-3.271L6.632 1.678a2.313 2.313 0 0 0-3.271 0L2.016 3.024a3.463 3.463 0 0 0-.439 4.365 53.778 53.778 0 0 0 15.034 15.034 3.469 3.469 0 0 0 4.366-.437l1.345-1.346a2.312 2.312 0 0 0 0-3.271l-2.453-2.453a2.312 2.312 0 0 0-3.271 0l-.818.818A54.879 54.879 0 0 1 8.268 8.22z" ></path>
    </g>
  </svg>
  `},__vite_glob_0_73=Object.freeze(Object.defineProperty({__proto__:null,default:phone},Symbol.toStringTag,{value:"Module"})),pin={tagName:"pin",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round;`}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path d="M12 .71a7.5 7.5 0 0 1 7.5 7.5c0 3.547-5.5 12.381-7.079 14.85a.5.5 0 0 1-.842 0C10 20.592 4.5 11.757 4.5 8.21A7.5 7.5 0 0 1 12 .71z"></path>
      <circle cx="12" cy="8.21" r="3"></circle>
    </g>
  </svg>
  `},__vite_glob_0_74=Object.freeze(Object.defineProperty({__proto__:null,default:pin},Symbol.toStringTag,{value:"Module"})),plusMinus={tagName:"plus-minus",computed:{effectiveKeySplines(){return"0.19 1 0.2 1"},style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},updated(){this.animate(this.closed)},mounted(){this.animate(this.closed,!0)},methods:{animate(t,e){const i=[];this.$refs.svg.querySelectorAll("animate, animateTransform").forEach(r=>{(!t&&!r.classList.contains("closed")||t&&r.classList.contains("closed"))&&i.push(r)});const s=e?"beginElementAt":"beginElement";i.forEach(r=>{r[s](1e3)})}},props:{settings:Object,color:String,closed:Boolean},data(){return{duration:"0.35s",begin:"indefinite",keyTimes:"0;1"}},template:`
    <svg v-bind="settings" :style="style" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svg" >
      <g id="plus-minus__group" style="transform-origin: 12px 12px">
        <animateTransform attributeName="transform" type="rotate" :begin="begin" :dur="duration" from="0" to="90" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animateTransform attributeName="transform" type="rotate" :begin="begin" :dur="duration" from="90" to="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" class="closed" />
        <path d="M12 1V23" stroke-linecap="round" />
        <path d="M23 12H1" stroke-linecap="round" style="transition-duration: 0s">
          <animate attributeName="stroke-width" :begin="begin" dur="0.01s" from="1" to="0" fill="freeze" />
          <animate attributeName="stroke-width" :begin="begin" dur="0.01s" to="1" from="0" fill="freeze" class="closed" />
        </path>
      </g>
    </svg>
  `},__vite_glob_0_75=Object.freeze(Object.defineProperty({__proto__:null,default:plusMinus},Symbol.toStringTag,{value:"Module"})),plus={tagName:"plus",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
      <path d="M12 1V23" stroke="#000520" stroke-linecap="round"/>
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `},__vite_glob_0_76=Object.freeze(Object.defineProperty({__proto__:null,default:plus},Symbol.toStringTag,{value:"Module"})),quotes$1={tagName:"quotes",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3178 0C15.8159 2.397 16.9074 4.79401 17.5923 7.19101C18.32 9.58801 18.6838 11.985 18.6838 14.382C18.6838 18.6624 17.5923 22.7501 15.4093 26.6453C13.2691 30.5404 10.1659 34.1359 6.09952 37.4318L1.1557 34.4141C0.727662 34.1573 0.428037 33.8363 0.256822 33.451C0.0856075 33.1086 0 32.7662 0 32.4238C0 31.6105 0.278224 30.9256 0.834671 30.3692C1.39112 29.7271 1.96897 28.9995 2.56822 28.1862C3.21027 27.3729 3.78812 26.4527 4.30177 25.4254C4.81541 24.3981 5.22204 23.2852 5.52167 22.0867C5.8641 20.8882 6.03531 19.6041 6.03531 18.2344C6.03531 16.779 5.79989 15.2381 5.32905 13.6116C4.85821 11.9422 4.06635 10.1873 2.95345 8.34671C2.56822 7.79026 2.3756 7.21241 2.3756 6.61316C2.3756 5.24344 3.16747 4.28036 4.7512 3.72392L14.3178 0ZM35.634 0C37.1322 2.397 38.2236 4.79401 38.9085 7.19101C39.6362 9.58801 40 11.985 40 14.382C40 18.6624 38.9085 22.7501 36.7255 26.6453C34.5853 30.5404 31.4821 34.1359 27.4157 37.4318L22.4719 34.4141C22.0439 34.1573 21.7442 33.8363 21.573 33.451C21.4018 33.1086 21.3162 32.7662 21.3162 32.4238C21.3162 31.6105 21.5944 30.9256 22.1509 30.3692C22.7073 29.7271 23.2852 28.9995 23.8844 28.1862C24.5265 27.3729 25.1043 26.4527 25.618 25.4254C26.1316 24.3981 26.5383 23.2852 26.8379 22.0867C27.1803 20.8882 27.3515 19.6041 27.3515 18.2344C27.3515 16.779 27.1161 15.2381 26.6453 13.6116C26.1744 11.9422 25.3826 10.1873 24.2697 8.34671C23.8844 7.79026 23.6918 7.21241 23.6918 6.61316C23.6918 5.24344 24.4837 4.28036 26.0674 3.72392L35.634 0Z" fill="#FCD116"/>
    </svg>
  `},__vite_glob_0_77=Object.freeze(Object.defineProperty({__proto__:null,default:quotes$1},Symbol.toStringTag,{value:"Module"})),rocket={tagName:"rocket",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 210.22 222.22">
      <defs>
        <clipPath id="icon--rocket-clip-path">
          <rect class="icon--rocket-cls-1" x="-603.94" y="-277.25" width="1440" height="1430" />
        </clipPath>
        <clipPath id="icon--rocket-clip-path-2">
          <path class="icon--rocket-cls-2" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        </clipPath>
      </defs>
      <g class="icon--rocket-cls-3">
        <line class="icon--rocket-cls-4" x1="27.7" y1="17.97" x2="32" y2="34.02" />
        <line class="icon--rocket-cls-4" x1="37.87" y1="23.85" x2="21.83" y2="28.15" />
        <line class="icon--rocket-cls-5" x1="35.3" y1="110.51" x2="39.6" y2="126.55" />
        <line class="icon--rocket-cls-5" x1="45.47" y1="116.38" x2="29.43" y2="120.68" />
        <line class="icon--rocket-cls-6" x1="192" y1="85.71" x2="196.3" y2="101.76" />
        <line class="icon--rocket-cls-6" x1="202.18" y1="91.59" x2="186.13" y2="95.88" />
        <line class="icon--rocket-cls-4" x1="158.92" y1="154.76" x2="163.22" y2="170.8" />
        <line class="icon--rocket-cls-4" x1="169.09" y1="160.63" x2="153.05" y2="164.93" />
        <path class="icon--rocket-cls-4" d="M11.7,54.5A2.08,2.08,0,0,1,14.24,56" />
        <path class="icon--rocket-cls-4" d="M10.23,57.05A2.08,2.08,0,0,1,11.7,54.5" />
        <path class="icon--rocket-cls-4" d="M12.77,58.51a2.07,2.07,0,0,1-2.54-1.46" />
        <path class="icon--rocket-cls-4" d="M14.24,56a2.07,2.07,0,0,1-1.47,2.54" />
        <path class="icon--rocket-cls-6" d="M168.4,29.71a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="icon--rocket-cls-6" d="M166.93,32.25a2.08,2.08,0,0,1,1.47-2.54" />
        <path class="icon--rocket-cls-6" d="M169.48,33.72a2.08,2.08,0,0,1-2.55-1.47" />
        <path class="icon--rocket-cls-6" d="M170.94,31.18a2.08,2.08,0,0,1-1.46,2.54" />
        <path class="icon--rocket-cls-4" d="M114,147.46a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="icon--rocket-cls-4" d="M112.51,150a2.07,2.07,0,0,1,1.47-2.54" />
        <path class="icon--rocket-cls-4" d="M115.05,151.47a2.07,2.07,0,0,1-2.54-1.47" />
        <path class="icon--rocket-cls-4" d="M116.52,148.93a2.07,2.07,0,0,1-1.47,2.54" />
        <line class="icon--rocket-cls-4" x1="37.03" y1="213.21" x2="67.69" y2="160.1" />
      </g>
      <g class="icon--rocket-cls-7">
        <g class="icon--rocket-cls-3">
          <rect class="icon--rocket-cls-8" x="51.62" y="72.01" width="77.81" height="97.08"
            transform="translate(-28.12 27.54) rotate(-15)" />
        </g>
      </g>
      <g class="icon--rocket-cls-3">
        <path class="icon--rocket-cls-4" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        <path class="icon--rocket-cls-5" d="M37.37,54.07A53.64,53.64,0,0,1,83.93,67.39" />
        <path class="icon--rocket-cls-9" d="M93.23,21.91A70.24,70.24,0,0,1,101.83,54" />
        <path class="icon--rocket-cls-9" d="M124,56.64A87.79,87.79,0,0,1,158.48,8.72" />
        <path class="icon--rocket-cls-5" d="M133.42,75.62s19-9.38,34.23-.58" />
        <path class="icon--rocket-cls-10" d="M134.78,96.75a55.74,55.74,0,0,1,36.67,24.56" />
        <line class="icon--rocket-cls-4" x1="131.06" y1="114.94" x2="136.43" y2="134.99" />
        <path class="icon--rocket-cls-10" d="M62.3,99a50.37,50.37,0,0,1,19-9.39" />
      </g>
    </svg>
  `},__vite_glob_0_78=Object.freeze(Object.defineProperty({__proto__:null,default:rocket},Symbol.toStringTag,{value:"Module"})),iconSmileStepTime="indefinite",smile={tagName:"smile",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},data(){return{"step-1":[],"step-2":[],"step-3":[]}},props:{settings:Object,color:String,step:Number},watch:{step(){this.startStep()}},methods:{setElementRef(t,e){const i=this["step-"+e];!t||i.includes(t)||i.push(t)},startStep(){const t=this["step-"+this.step];[].forEach.call(t,e=>{e.setAttribute("begin","0s"),e.beginElement()})}},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 371.78 342.67">
      <defs>
        <clipPath id="icon--smile-clip-path">
          <rect x="-999.96" y="-267.47" width="1440" height="1315" fill="none" />
        </clipPath>
      </defs>
      <g style="clip-path: url(#icon--smile-clip-path);">
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
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-mouth" attributeName="d" values="
          M85,221.75a93.26,93.26,0,0,0,172.17,0;
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-left-eye" attributeName="d" values="
          M92.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-right-eye" attributeName="d" values="
          M250,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-circle" attributeName="d" values="
          M170.12,335.42a165,165,0,1,1,0.1,0;
          M44.12,277.42a165,165,0,1,1,254.87,0
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-mouth" attributeName="d" values="
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16;
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-left-eye" attributeName="d" values="
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M127.13,129.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-right-eye" attributeName="d" values="
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M265,129.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-mouth" attributeName="d" values="
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0;
          M85,221.75a93.26,93.26,0,0,0,172.17,0
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-left-eyebrow" attributeName="d" values="
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0;
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-right-eyebrow" attributeName="d" values="
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0;
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-circle" attributeName="d" values="
          M44.12,277.42a165,165,0,1,1,254.87,0;
          M170.12,335.42a165,165,0,1,1,0.1,0
        "
          begin="${iconSmileStepTime}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </g>
    </svg>
  `},__vite_glob_0_79=Object.freeze(Object.defineProperty({__proto__:null,default:smile},Symbol.toStringTag,{value:"Module"})),strategySplit={tagName:"strategy-split",computed:{style(){return`stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round;`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 46 46">
      <path d="M18.7994 11.1646C18.6252 11.1648 18.454 11.1188 18.3033 11.0314C18.1526 10.944 18.0277 10.8183 17.9414 10.667C17.855 10.5157 17.8102 10.3443 17.8116 10.17C17.8129 9.99584 17.8603 9.82509 17.9491 9.67516L22.1479 2.5466C22.2356 2.39865 22.3602 2.27608 22.5097 2.19094C22.6591 2.10581 22.8281 2.06104 23.0001 2.06104C23.172 2.06104 23.341 2.10581 23.4904 2.19094C23.6399 2.27608 23.7645 2.39865 23.8522 2.5466L28.051 9.67516C28.1398 9.82509 28.1872 9.99584 28.1886 10.17C28.1899 10.3443 28.1451 10.5157 28.0587 10.667C27.9724 10.8183 27.8475 10.944 27.6968 11.0314C27.5461 11.1188 27.3749 11.1648 27.2007 11.1646H18.7994Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.3592 18.7957C11.4204 18.6474 11.4414 18.4855 11.42 18.3265C11.3986 18.1675 11.3355 18.0169 11.2372 17.8902C11.1388 17.7634 11.0087 17.6648 10.86 17.6045C10.7114 17.5441 10.5494 17.5242 10.3905 17.5466L2.84313 18.6081C2.68509 18.6297 2.53549 18.6924 2.4093 18.7899C2.2831 18.8874 2.18475 19.0164 2.12409 19.1639C2.06342 19.3115 2.04258 19.4723 2.06363 19.6304C2.08469 19.7885 2.14692 19.9383 2.24408 20.0648L6.82894 26.1519C6.92537 26.2804 7.05411 26.3811 7.20208 26.4438C7.35005 26.5065 7.51196 26.5289 7.67139 26.5087C7.83081 26.4885 7.98206 26.4265 8.10976 26.329C8.23747 26.2315 8.33709 26.1019 8.39849 25.9534L9.87883 22.3791L11.3592 18.7957Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.96094 22.2935C13.8205 23.8921 17.1193 26.5993 19.4402 30.0728C21.7611 33.5462 22.9999 37.6299 22.9999 41.8074V43.9396" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34.6408 18.7957C34.5795 18.6474 34.5585 18.4855 34.5799 18.3265C34.6014 18.1675 34.6644 18.0169 34.7628 17.8902C34.8611 17.7634 34.9912 17.6648 35.1399 17.6045C35.2886 17.5441 35.4506 17.5242 35.6094 17.5466L43.1568 18.6081C43.3148 18.6297 43.4644 18.6924 43.5906 18.7899C43.7168 18.8874 43.8152 19.0164 43.8758 19.1639C43.9365 19.3115 43.9573 19.4723 43.9363 19.6304C43.9152 19.7885 43.853 19.9383 43.7558 20.0648L39.171 26.1519C39.0745 26.2804 38.9458 26.3811 38.7978 26.4438C38.6499 26.5065 38.488 26.5289 38.3285 26.5087C38.1691 26.4885 38.0179 26.4265 37.8902 26.329C37.7625 26.2315 37.6628 26.1019 37.6014 25.9534L36.1211 22.3791L34.6408 18.7957Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36.039 22.2935C32.1795 23.8921 28.8807 26.5993 26.5597 30.0728C24.2388 33.5462 23 37.6299 23 41.8074V43.9396" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 11.1646V43.0292" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `},__vite_glob_0_80=Object.freeze(Object.defineProperty({__proto__:null,default:strategySplit},Symbol.toStringTag,{value:"Module"})),tileView={tagName:"tile-view",computed:{style(){return`fill: ${this.color?this.color:"#5CBBFF"}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 16 16">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.1234 0C0.825462 0 0.539715 0.118358 0.329038 0.329038C0.118358 0.539717 0 0.825457 0 1.1234V6.02553C0 6.32348 0.118358 6.60922 0.329038 6.81988C0.539715 7.0306 0.825462 7.14894 1.1234 7.14894H6.02553C6.32348 7.14894 6.60922 7.0306 6.81991 6.81988C7.03057 6.60922 7.14897 6.32348 7.14897 6.02553V1.1234C7.14897 0.825457 7.03057 0.539717 6.81991 0.329038C6.60922 0.118358 6.32348 0 6.02553 0H1.1234ZM9.97246 0C9.67452 0 9.38876 0.118358 9.17811 0.329038C8.96745 0.539717 8.84905 0.825457 8.84905 1.1234V6.02553C8.84905 6.32348 8.96745 6.60922 9.17811 6.81988C9.38876 7.0306 9.67452 7.14894 9.97246 7.14894H14.8746C15.1725 7.14894 15.4583 7.0306 15.6689 6.81988C15.8797 6.60922 15.998 6.32348 15.998 6.02553V1.1234C15.998 0.825457 15.8797 0.539717 15.6689 0.329038C15.4583 0.118358 15.1725 0 14.8746 0H9.97246ZM0.329038 9.18012C0.539715 8.9694 0.825462 8.85106 1.1234 8.85106H6.02553C6.32348 8.85106 6.60922 8.9694 6.81991 9.18012C7.03057 9.39077 7.14897 9.67653 7.14897 9.97447V14.8766C7.14897 15.1745 7.03057 15.4603 6.81991 15.6709C6.60922 15.8817 6.32348 16 6.02553 16H1.1234C0.825462 16 0.539715 15.8817 0.329038 15.6709C0.118358 15.4603 0 15.1745 0 14.8766V9.97447C0 9.67653 0.118358 9.39077 0.329038 9.18012ZM9.97246 8.85106C9.67452 8.85106 9.38876 8.9694 9.17811 9.18012C8.96745 9.39077 8.84905 9.67653 8.84905 9.97447V14.8766C8.84905 15.1745 8.96745 15.4603 9.17811 15.6709C9.38876 15.8817 9.67452 16 9.97246 16H14.8746C15.1725 16 15.4583 15.8817 15.6689 15.6709C15.8797 15.4603 15.998 15.1745 15.998 14.8766V9.97447C15.998 9.67653 15.8797 9.39077 15.6689 9.18012C15.4583 8.9694 15.1725 8.85106 14.8746 8.85106H9.97246Z" />
    </svg>
  `},__vite_glob_0_81=Object.freeze(Object.defineProperty({__proto__:null,default:tileView},Symbol.toStringTag,{value:"Module"})),world={tagName:"world",computed:{style(){return"scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 20 20">
      <g clip-path="url(#icon-world-mask)">
        <path d="M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.418945 9.57001H19.5831" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="icon-world-mask">
        <rect width="20" height="20" :fill="stroke" />
      </clipPath>
      </defs>
    </svg>
  `},__vite_glob_0_82=Object.freeze(Object.defineProperty({__proto__:null,default:world},Symbol.toStringTag,{value:"Module"})),xMark={tagName:"x-mark",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},foregroundStroke(){return this.color?this.color:"#FF0000"}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" fill="none" viewBox="0 0 28 28">
      <g clip-path="url(#clip0_434_958)">
        <path d="M2.72115 2.72115L22.2692 22.2692" stroke="#FF0000" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2692 2.72115L2.72115 22.2692" stroke="#FF0000" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.40385 2.72115L20.9519 22.2692" stroke="#001F35" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9519 2.72115L1.40385 22.2692" stroke="#001F35" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_434_958">
        <rect width="28" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `},__vite_glob_0_83=Object.freeze(Object.defineProperty({__proto__:null,default:xMark},Symbol.toStringTag,{value:"Module"})),imageBlock={tagName:"image-block",computed:{classList(){return["image-block space-2"]},imageWithCloudinary(){return{img:this.imageBlock.image,cloudinary:!0,alt:this.imageBlock.alt}}},props:{imageBlock:{default:null}},template:`
    <wrapper :classes="classList">
      <div class="mx-auto">
        <v-img v-bind="imageWithCloudinary" />
      </div>
    </wrapper>
  `},__vite_glob_0_84=Object.freeze(Object.defineProperty({__proto__:null,default:imageBlock},Symbol.toStringTag,{value:"Module"})),imageList={tagName:"image-list",computed:{imagesObject(){return this.images?JSON.parse(this.images):[]}},props:{images:Array},template:`
    <div class="image-list vue-component" v-for="(image, index) in imagesObject">
      <div class="image-list__item is--desktop">
        <v-img :img="image.src" :cloudinary="image.cloudinary" :alt="image.alt" />
      </div>
      <div class="image-list__item is--mobile">
        <v-img :img="image.mobile" :cloudinary="image.cloudinary" :alt="image.alt" />
      </div>
    </div>`},__vite_glob_0_85=Object.freeze(Object.defineProperty({__proto__:null,default:imageList},Symbol.toStringTag,{value:"Module"})),imgFilter={tagName:"img-filter",props:{img:String,alt:String,cloudinary:{default:null},lazy:Boolean,classes:String,color:String},computed:{cloudinaryValue(){return Tools.isTrue(this.cloudinary)},colorValue(){return this.color?this.color:"#000520"},svgFilter(){const t=parseFloat((Tools.red(this.colorValue)/255).toFixed(5)),e=parseFloat((Tools.green(this.colorValue)/255).toFixed(5)),i=parseFloat((Tools.blue(this.colorValue)/255).toFixed(5)),s=1,r=Math.max(t,e,i),a=Math.min(t,e,i),n=100*(r+a)/2+"%",l="img-to-color";return`
        filter: saturate(0%) brightness(0%) invert(${n}) opacity(${s});
        filter: url('data:image/svg+xml;utf8,        <svg xmlns="http://www.w3.org/2000/svg">          <filter id="${l}" color-interpolation-filters="sRGB">            <feColorMatrix type="matrix" values="              0 0 0 0 ${t}              0 0 0 0 ${e}              0 0 0 0 ${i}              0 0 0 ${s} 0            "/>          </filter>        </svg>        #${l}')
      `}},data(){return{}},mounted(){},methods:{},template:`
    <div class="img-filter vue-component" :style="svgFilter">
      <v-img
        :img="img"
        :alt="alt"
        :cloudinary="cloudinaryValue"
        :lazy="lazy"
      />
    </div>
  `},__vite_glob_0_86=Object.freeze(Object.defineProperty({__proto__:null,default:imgFilter},Symbol.toStringTag,{value:"Module"})),img={tagName:"img",migrate:!0,template:`
                  img -> vimg
              `},__vite_glob_0_87=Object.freeze(Object.defineProperty({__proto__:null,default:img},Symbol.toStringTag,{value:"Module"})),introText={tagName:"intro-text",computed:{classList(){return["intro-text","utility-animation","vue-component",this.variant,this.spacing]}},props:{copy:String,variant:String,headline:String,spacing:String,headlineClasses:{type:String,default:"text-center"},copyClasses:String},template:`
    <figure :class="classList">
      <div class="container space-lg-2">
        <div v-if="headline" class="row mb-9 mt-9">
          <div :class="['col', headlineClasses, 'fade-in-bottom']" data-utility-animation-step="1">
            <headline :text="headline" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p :class="['intro-text__copy fade-in-bottom', copyClasses]" data-utility-animation-step="1" v-html="copy"></p>
          </div>
        </div>
      </div>
    </figure>
  `},__vite_glob_0_88=Object.freeze(Object.defineProperty({__proto__:null,default:introText},Symbol.toStringTag,{value:"Module"}));class Loading{constructor(e,i){this.root=e,this.maxShapes=3,this.loadingClass="loading",this.shapeClass="loading__shape",this.bounceClasses={up:"loading--bounce-up",down:"loading--bounce-down"},this.types=["circle","square","triangle","triangle-2","rectangle"],this.colors=["--color-loading--1","--color-loading--2","--color-loading--3","--color-loading--4"],this.currentColors={},this.maxRuns=20,this.scaleMin=4,this.scaleMax=5,this.rotationMin=90,this.rotationMax=270,this.animationInterval=800,this.intervals=[],this.hasShapes=!1,this.init(i)}getRandomColor(e){let i=this.colors[Math.floor(Math.random()*this.colors.length)];return e<this.maxRuns&&this.currentColors[i]&&(e++,i=this.getRandomColor(e)),i}getRandomType(){return this.types[Math.floor(Math.random()*this.types.length)]}getRandomTypeClass(){return`loading__shape--${this.getRandomType()}`}getRandomScale(){return Math.floor(Math.random()*(this.scaleMax-this.scaleMin+1))+this.scaleMin}getRandomRotation(){return Math.floor(Math.random()*(this.rotationMin-this.rotationMax+1))+this.rotationMin}getRandomOffset(){let e=Math.random()*6-2;return`${e>=0?"+ ":"- "}${e}`}getRandomStyle(){const e=this.getRandomColor();return{style:`
      left: calc(50% ${this.getRandomOffset()}vw);
      --color-loading: var(${e});
      --loading-scale: ${this.getRandomScale()}vh;
      --loading-rotation: ${this.getRandomRotation()}deg
    `,color:e}}createShapes(){for(var e=0;e<this.maxShapes;e++){const i=document.createElement("shape"),s=Tools.append(this.root,i);this.startAnimation(s)}}startAnimation(e){this.intervals.push(setInterval(()=>{const i=this.getRandomStyle();this.currentColors[i.color]=!0,e.className="",e.classList.add(this.getRandomTypeClass()),e.classList.add(this.shapeClass),e.setAttribute("style",i.style),e.classList.contains(this.bounceClasses.up)?e.classList.replace(this.bounceClasses.down,this.bounceClasses.up):e.classList.add(this.bounceClasses.up),setTimeout(()=>{e.classList.replace(this.bounceClasses.up,this.bounceClasses.down),this.currentColors[i.color]=!1},this.animationInterval/2)},this.animationInterval))}init(e){if(e&&typeof e=="function")return e();this.root.classList.add(this.loadingClass)}on(e){this.hasShapes||(this.hasShapes=!0,this.createShapes()),e!==!0&&this.root.classList.add(State.LOADING)}clear(){this.intervals.forEach(e=>{clearInterval(e)})}off(e,i){e?this.clear():setTimeout(()=>{this.clear(),i!==!0&&this.root.classList.remove(State.LOADING)},100)}}const jobListDetail={tagName:"job-list-detail",computed:{classList(){return["job-list__detail page-detail",`${this.hasLoading?State.LOADING:""}`,`${this.hasLoader?"loading":""}`,`${this.hideLoading?State.HIDE_LOADING:""}`,`${this.hasBack?"page-detail--has-back":""}`,"vue-component"]},headlineClassList(){return`job-list__detail-headline page-detail__headline ${this.headlineClasses?this.headlineClasses:""}`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h1"},style(){return`--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`},color(){return this.detailColor?this.detailColor:"--color-job-list-detail"},baseData(){return this.base?JSON.parse(this.base):{}},getUuid(){return"job-list-detail-style"}},mounted(){this.loading=new Loading(this.$refs["job-list-detail"],()=>{this.hasLoader=!0}),this.loading.on(!0),this.init()},data(){return{loadingDelay:300,sleepDelay:1300,loading:{},hasLoading:!0,hasLoader:!1,hideLoading:!1,api:{},hasBack:!1,entryData:{},personQuote:null,videoInner:null,jobIdValue:null}},methods:{init(){var r;const t=this.mockApplyUrl,e=this.mockDocumentsUrl;this.api=new JobListings({...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName,apiKey:this.apiKey,mockApplyUrl:t,mockDocumentsUrl:e}),this.api.setLang(Tools.getLang());const i=this.api.getJobId()||this.jobId;this.jobIdValue=i,this.showBackButton();const s=(r=window.i18n)==null?void 0:r.loader;s?s.then(()=>{this.loadJob()}):this.loadJob()},showBackButton(){document.referrer.indexOf(document.location.host)!==-1&&(this.hasBack=!0)},loadJob(){var t;this.loadLocalJobData(),(t=this.api)==null||t.getOpening(this.jobIdValue).then(e=>e.json()).then(e=>{this.handleJob(e)}).catch(e=>{console.error("Job-list Error:",e)})},handleCta(){var t;Modal.open((t=this.$refs["modal-component"])==null?void 0:t.modal)},handleJob(t){Tools.sleep(this.sleepDelay).then(()=>{var i;const e=t.objects?t.objects[0]:t;if(e){const s=(i=window.i18n)==null?void 0:i.translate("gender"),{title:r,description:a}=e,n={description:a,title:r,gender:s};this.hideLoading=!0,this.update(n)}else console.error("handleJob has no entry")})},stopLoading(){setTimeout(()=>{this.loading.off(!0,!0),this.hasLoading=!1},this.loadingDelay)},update(t){this.entryData=t,this.stopLoading()},loadLocalJobData(){const t=`${this.api.jobDataUrl}${this.jobIdValue}.json`;return this.addCustomStyle(),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(e.videoInner)return this.videoInner=e.videoInner;this.personQuote=e.personQuote}).catch(e=>{console.error("Job-list-Detail Local Job Data Error:",e)})},addCustomStyle(){var e;const t=document.createElement("style");t.id=this.getUuid,(e=document.getElementById(this.getUuid))==null||e.remove(),t.innerHTML=`
        .show-in-${this.jobIdValue}.d-none {
          display: block !important;
        }
      `,document.head.appendChild(t)}},props:{detailColor:String,clientName:String,jobId:String,apiUrl:String,base:String,headlineLevel:String,headlineClasses:String,ctaText:String,ctaButton:Boolean,form:Object,googleMaps:Object,modalSuccess:Object,modalError:Object,apiKey:String,mockApplyUrl:String,mockDocumentsUrl:String},template:`
    <div :class="classList" :style="style" :data-id="clientName" :data-job-id="jobIdValue" :data-api-url="apiUrl" ref="job-list-detail">
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
                <icon icon='arrow' direction='left' hover=true circle=true />
              </div>
              <headline :text="entryData?.title" :level="headlineLevelValue" :classes="headlineClassList" />
              <span class="job-list__detail-gender">{{ entryData?.gender }}</span>
              <div class="job-list__detail-share">
                <!-- TODO share bar -->
              </div>
              <div class="job-list__detail-cta">
                <cta :text="baseData?.ctaText" :button="baseData?.ctaButton" @click="handleCta" />
              </div>
            </div>
          </div>
          <div class="job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
            <!-- job list detail can switch to profile based on url parameter -->
            <div class="job-list__detail-description page-detail__description has-no-border richtext" v-html="entryData?.description"></div>
            <video-inner variant="reversed" :video="videoInner.video" v-if="videoInner"></video-inner>

            <div v-if="personQuote" class="job-list__detail-quote">
              <person-quote :img="personQuote.img" :text="personQuote.text" :name="personQuote.name" />
            </div>

            <!-- <div class="job-list__detail-maps">
              <slot name="google-maps" />
            </div> -->

          </div>
        </div>
      </div>
      <div class="job-list__sticky-end"></div>
      <modal
        ref="modal-component"
        :client-name="clientName"
        :api-url="apiUrl"
        :job-id="jobIdValue"
        :api-key="apiKey"
        :mock-apply-url="mockApplyUrl"
        :mock-documents-url="mockDocumentsUrl"
        :modal-error="modalError"
      >
        <slot name="modal-application" />
      </modal>
    </div>
  `},__vite_glob_0_89=Object.freeze(Object.defineProperty({__proto__:null,default:jobListDetail},Symbol.toStringTag,{value:"Module"})),jobListEntry={tagName:"job-list-entry",computed:{classList(){return["job-list__entry",`${Tools.isTrue(this.isInvisible)===!0?State.HIDDEN:""}`,"vue-component"]}},props:{title:String,gender:String,city:String,team:String,positionType:String,isInvisible:{default:null},id:Number},template:`
    <div :class="classList" :data-id="id">
      <div class="job-list__entry-header">
        <template v-if="team && team !== ''"> {{team}} </template>
      </div>
      <div class="job-list__entry-content">
        <div class="job-list__entry-title">
          {{title}}
          <span class="job-list__entry-gender">{{gender}}</span>
        </div>
      </div>
    </div>
  `},__vite_glob_0_90=Object.freeze(Object.defineProperty({__proto__:null,default:jobListEntry},Symbol.toStringTag,{value:"Module"})),jobList={tagName:"job-list",computed:{classList(){return["job-list container",`${this.hasLoading?State.LOADING:""}`,`${this.hasLoader?"loading":""}`,`${Tools.isTrue(this.sticky)===!0?StickyScroller.rootSelector.substring(1):""}`,"vue-component"]},expandClassList(){return["job-list__expand-button",`${this.hasExpand?"":State.HIDDEN}`,`${this.isExpandVisible?"":State.INVISIBLE}`]},headlineClassValue(){return`job-list__headline ${this.headlineClasses}`},headlineLevelValue(){return`${this.headlineLevel?this.headlineLevel:"h2"}`},tagList(){return this.tags?this.tags.split(","):void 0}},mounted(){this.api=new JobListings({...this.jobId&&{jobId:this.jobId},...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName}),this.lang&&this.api.setLang(this.lang),this.tagList&&this.api.setFilter({tags:this.tagList}),this.loading=new Loading(this.$refs["job-list"],()=>{this.hasLoader=!0}),this.loading.on(!0),this.init()},methods:{init(){var i;const t=(i=window.i18n)==null?void 0:i.loader,e=this.jobId?this.loadJob:this.loadJobs;t?t.then(()=>{var s;this.translationData=(s=window.i18n)==null?void 0:s.getTranslationData(["jobListEmpty"]),e.bind(this)()}):e()},handleExpand(){this.isExpandVisible=!1,this.hasExpand=!1,this.showJobs()},showJobs(){this.entries.forEach(t=>{t.isInvisible=!1})},loadJobData(){const t=`${this.api.jobDataUrl}jobs.json`;return fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{this.jobData=e}).catch(e=>{console.error("Job-list Local Job Data Error:",e)})},loadJob(t){const e=t?"getAll":"getOpening";this.promises.push(this.loadJobData()),this.api[e]().then(i=>i.json()).then(i=>{this.handleJobs(i)}).catch(i=>{console.error("Job-list Error:",i)})},loadJobs(){this.loadJob(!0)},handleJobs(t){Tools.sleep(this.sleepDelay).then(()=>{let e=t;if(typeof e.objects!="object"&&(e={objects:[e],meta:e==null?void 0:e.meta}),this.data=e,!this.data.meta)return this.loading.off();Promise.all(this.promises).then(()=>{const i=this.api.getOrderedList(e.objects);this.filterJobs(t,i)}).catch(i=>{console.error("Job-List Promises.all ~ error",i)})})},filterJobs(t,e){var a,n,l;this.data.objects=e;const i=(a=window.i18n)==null?void 0:a.translate("gender"),s=[];let r=0;for(let o=0;o<(e==null?void 0:e.length);o++){const h=e[o],{city:u}=(h==null?void 0:h.location)||{};if(!h)continue;const{title:S,position_type:d,team:_}=h,y={city:u,title:S,gender:i,team:_,positionType:d!==""?(n=window.i18n)==null?void 0:n.translate(d):null,isInvisible:this.maxItems>0&&r>this.maxItems-1,id:o};this.isAvailableEntry(h)&&(s[o]=y,r++)}this.entries=s,this.entries.length===0&&(this.isEmpty=!0),this.maxItems>0&&((l=t.objects)==null?void 0:l.length)>this.maxItems&&this.showExpandButton(),this.stopLoading()},showExpandButton(){this.hasExpand=!0,setTimeout(()=>{this.isExpandVisible=!0},this.loadingDelay)},isAvailableEntry(t){var i;let e=!0;if(t.tags.includes(this.api.hiddenTag))return!1;if(this.team){const s=(i=t.team)==null?void 0:i.toLowerCase(),r=this.team.toLowerCase();(s===void 0||(s==null?void 0:s.indexOf(r))===-1)&&(e=!1)}return e},stopLoading(){setTimeout(()=>{this.loading.off(!0,!0),this.hasLoading=!1},this.loadingDelay)},handleEntryClick(t){const e=t.currentTarget;if(e&&this.detailUrl){const i=this.getData(e),s=this.getDetailUrl(i),r=Tools.generateUrl(i==null?void 0:i.title,s,i==null?void 0:i.id);document.location.href=r}},getData(t){var i;let e=null;return t&&t.dataset.id&&((i=this.data)!=null&&i.objects)&&(e=this.data.objects[t.dataset.id]),e},getDetailUrl(t){if(typeof this.detailUrl!="object")return this.detailUrl;const e=this.api.getLangFromEntry(t);return this.detailUrl[e]||this.detailUrl.default}},data(){return{loadingDelay:300,sleepDelay:1300,loading:{},hasLoading:!0,hasLoader:!1,api:{},hasExpand:!1,isExpandVisible:!1,entries:[],jobData:{},promises:[],isEmpty:!1}},props:{clientName:String,maxItems:String,detailUrl:Object,jobId:String,tags:String,lang:String,team:String,apiUrl:String,headlineClasses:String,headlineLevel:String,headlineText:String,expandText:String,sublineText:String,sticky:{default:null}},template:`
    <div
      :class="classList"
      :data-id="clientName"
      :data-max-items="maxItems"
      :data-detail-url="detailUrl"
      :data-job-id="jobId"
      :data-tags="tags"
      :data-lang="lang"
      :data-team="team"
      :data-api-url="apiUrl"
      ref="job-list"
    >
      <div class="row">
        <div class="job-list__header col-lg-12">
          <headline
            :text="headlineText"
            :level="headlineLevelValue"
            :classes="headlineClassValue"
          />
        </div>
        <div v-if="sublineText !== ''" class="job-list__meta col-lg-7">
          <div class="job-list__subline">{{sublineText}}</div>
        </div>
        <div class="col-lg-12">
          <div class="job-list__entries">
            <div class="job-list__message h3-font-size" v-if="isEmpty">
              {{ translationData?.jobListEmpty }}
            </div>
            <template v-for="entry in entries" :key="entry?.id">
              <job-list-entry
                v-if="entry"
                :title="entry?.title"
                :gender="entry?.gender"
                :city="entry?.city"
                :team="entry?.team"
                :position-type="entry?.positionType"
                :is-invisible="entry?.isInvisible"
                :id="entry?.id"
                @click="handleEntryClick"
              />
            </template>
          </div>
          <div :class="expandClassList" @click="handleExpand" >{{expandText}}</div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_91=Object.freeze(Object.defineProperty({__proto__:null,default:jobList},Symbol.toStringTag,{value:"Module"})),letterSwitcher={tagName:"letter-switcher",data(){return{show:!1,end:!1,overline:"",endDelay:3400,startDelay:900,isLower:null}},computed:{classList(){return["letter-switch",`${this.show?State.SHOW:""}`,`${this.end?State.END:""}`,"vue-component"]},fontSize(){return this.isLower?"font-size-5":"font-size-6 bold"},letterSwitchEndClassList(){return["letter-switcher__end-animation",this.fontSize]},letterSwitchAnimationClassList(){return["letter-switcher__animation",this.fontSize,"justify-content-center",`${this.isLower?"flex-column":""}`]}},mounted(){this.overline=this.overlineStart,this.isLower=this.isLowerBreakpoint(),this.bindEvents(),setTimeout(()=>{this.setHeight(),this.startAnimation()},this.startDelay)},methods:{bindEvents(){window.addEventListener("resize",()=>{this.handleResize()})},handleResize(){this.isLower=this.isLowerBreakpoint(),this.setHeight()},isLowerBreakpoint(){return Tools.isBelowBreakpoint("sm")},setHeight(){this.show=!1;const t=this.$refs.animation;if(!t)return;const e=t.querySelector(".letter-switcher__letter"),i=this.isLower?e.offsetHeight*2:e.offsetHeight;t.style.height=i+"px",this.show=!0},startAnimation(){[].forEach.call(this.$refs.root.querySelectorAll(".letter-switcher__group"),(i,s)=>{const r=s*.3,a=.07*i.children.length;i.style.animation=`letter-switch ${a}s ${r}s ease-out forwards`}),setTimeout(()=>{this.end=!0,this.switchOverline(this.showEndAnimation)},this.endDelay)},showEndAnimation(){const t=this.$refs["end-text"],e=this.$refs.end;if(!t||!e)return this.emitEnded();t.style.width="0px",e.classList.remove(State.COLLAPSED),this.emitEnded()},switchOverline(t){const e=this.$refs.overline;e&&(e.addEventListener("transitionend",()=>{this.overline=this.overlineEnd,e.style.opacity=1,t()}),e.style.opacity=0)},emitEnded(){this.$emit(Events.ENDED)}},props:{textStart:String,textEnd:String,overlineStart:String,overlineEnd:String},template:`
    <div :class="classList" ref="root">
      <div class="letter-switcher__overline font-size-5 light" ref="overline">{{ overline }}</div>
      <div class="letter-switcher__container">
        <div :class="letterSwitchAnimationClassList" ref="animation">
          <div class="letter-switcher__container-animation">
            <span>S</span><div class="letter-switcher__group" ref="group">
              <span class="letter-switcher__letter letter-switcher__letter-end">i</span>
              <span class="letter-switcher__letter letter-switcher__middle">h</span>
              <span class="letter-switcher__letter letter-switcher__middle">g</span>
              <span class="letter-switcher__letter letter-switcher__middle">f</span>
              <span class="letter-switcher__letter letter-switcher__middle">e</span>
              <span class="letter-switcher__letter letter-switcher__middle">d</span>
              <span class="letter-switcher__letter letter-switcher__middle">c</span>
              <span class="letter-switcher__letter letter-switcher__middle">b</span>
              <span class="letter-switcher__letter letter-switcher__middle">a</span>
              <span class="letter-switcher__letter letter-switcher__default">_</span>
            </div>cherhei<div class="letter-switcher__group" ref="group">
              <span class="letter-switcher__letter letter-switcher__letter-end">t</span>
              <span class="letter-switcher__letter letter-switcher__middle">s</span>
              <span class="letter-switcher__letter letter-switcher__middle">r</span>
              <span class="letter-switcher__letter letter-switcher__middle">q</span>
              <span class="letter-switcher__letter letter-switcher__middle">p</span>
              <span class="letter-switcher__letter letter-switcher__middle">o</span>
              <span class="letter-switcher__letter letter-switcher__middle">n</span>
              <span class="letter-switcher__letter letter-switcher__middle">m</span>
              <span class="letter-switcher__letter letter-switcher__middle">l</span>
              <span class="letter-switcher__letter letter-switcher__middle">k</span>
              <span class="letter-switcher__letter letter-switcher__middle">j</span>
              <span class="letter-switcher__letter letter-switcher__middle">i</span>
              <span class="letter-switcher__letter letter-switcher__middle">h</span>
              <span class="letter-switcher__letter letter-switcher__middle">g</span>
              <span class="letter-switcher__letter letter-switcher__middle">f</span>
              <span class="letter-switcher__letter letter-switcher__middle">e</span>
              <span class="letter-switcher__letter letter-switcher__middle">d</span>
              <span class="letter-switcher__letter letter-switcher__middle">c</span>
              <span class="letter-switcher__letter letter-switcher__middle">b</span>
              <span class="letter-switcher__letter letter-switcher__middle">a</span>
              <span class="letter-switcher__letter letter-switcher__default">_</span>
            </div>s<template v-if="isLower">-<br/></template>
          </div>
          <div class="letter-switcher__container-animation">
          lüc<div class="letter-switcher__group" ref="group">
              <span class="letter-switcher__letter letter-switcher__letter-end">k</span>
              <span class="letter-switcher__letter letter-switcher__middle">j</span>
              <span class="letter-switcher__letter letter-switcher__middle">i</span>
              <span class="letter-switcher__letter letter-switcher__middle">h</span>
              <span class="letter-switcher__letter letter-switcher__middle">g</span>
              <span class="letter-switcher__letter letter-switcher__middle">f</span>
              <span class="letter-switcher__letter letter-switcher__middle">e</span>
              <span class="letter-switcher__letter letter-switcher__middle">d</span>
              <span class="letter-switcher__letter letter-switcher__middle">c</span>
              <span class="letter-switcher__letter letter-switcher__middle">b</span>
              <span class="letter-switcher__letter letter-switcher__middle">a</span>
              <span class="letter-switcher__letter letter-switcher__default">_</span>
            </div>e!
          </div>
        </div>
        <div :class="letterSwitchEndClassList">
          <div class="letter-switcher__spacer">
            <div class="letter-switcher__end is-collapsed" ref="end" >{{ textEnd }}</div>
            <div class="letter-switcher__end-text" ref="end-text"></div>
          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_92=Object.freeze(Object.defineProperty({__proto__:null,default:letterSwitcher},Symbol.toStringTag,{value:"Module"})),linkList={tagName:"link-list",computed:{classList(){return["link-list",this.hasNoAnimation?"":"utility-animation",`${this.isExpanded?State.EXPANDED:""}`,`${this.isExpandable()?State.EXPANDABLE:""}`,`${this.hasActiveItem?State.ACTIVE:""}`,`${this.isHidden?"link-list--hidden":""}`,`${this.inTransition?"link-list--in-transition":""}`,this.classes,"vue-component"]},hasNoAnimation(){return Tools.isTrue(this.noAnimation)},classListTitle(){return["link-list__title font-size-8 bold",this.hasNoAnimation?"":"fade-in-bottom"]},classListList(){return["link-list__list header__list--expanded",this.hasNoAnimation?"":"fade-in-bottom"]},hasActiveItem(){const t=this.list.children;if(t)return t.filter(e=>{var i;return((i=e.languages[this.lang])==null?void 0:i.active)===!0}).length>0},isHidden(){return Tools.isTrue(this.hidden)===!0}},watch:{hidden(t,e){t||(this.inTransition=!0)}},updated(){this.updateHeight(),this.inTransition=!1},mounted(){this.bindEvents()},methods:{bindEvents(){this.parentOfParent=this.$refs.root.parentNode.parentNode,this.parentOfParent.addEventListener(Events.CHILD_HAS_UPDATE,this.handleUpdate.bind(this))},handleUpdate(t){const e=t.detail.root;this.isExpanded&&this.$refs.root!==e&&this.handleClick()},isLowerBreakpoint(){return Tools.isBelowBreakpoint("md")},isExpandable(){var t;return!!(this.isLowerBreakpoint()&&this.list.languages&&((t=this.list.languages[this.lang])!=null&&t.title))},updateHeight(){const t=this.$refs.root;if(!t)return;const e=this.isHidden?"":t.scrollHeight+"px";t.style.height=e},handleClick(t){if(!this.isExpandable())return;this.isExpanded=!this.isExpanded;const e=this.$refs.root;if(t){const i=new CustomEvent(Events.CHILD_HAS_UPDATE,{detail:{root:e}});this.parentOfParent.dispatchEvent(i)}!e||this.isExpanded||(e.style.height="")}},props:{list:Object,lang:String,classes:String,hidden:{default:null},noAnimation:{default:null}},data(){return{inTransition:!1,isExpanded:!1,parentOfParent:null}},template:`
    <figure :class="classList" v-if="list" ref="root">
      <figcaption :class="classListTitle" data-utility-animation-step="1" v-if="list?.languages" v-on:click="handleClick">
        {{ list.languages[lang]?.title }}
        <icon class="link-list__icon" icon="expand" size="small" />
      </figcaption>
      <ul :class="classListList" data-utility-animation-step="1">
        <template v-for="subChild in list.children">
          <li class="link-list__item" v-if="subChild.languages && subChild.languages[lang]">
            <cta
              :href="subChild.languages[lang].url"
              :text="subChild.languages[lang].title"
              :active="subChild.languages[lang].active"
              link=true
              reversed=true
              monochrome=true
            />
          </li>
        </template>
      </ul>
    </figure>
  `},__vite_glob_0_93=Object.freeze(Object.defineProperty({__proto__:null,default:linkList},Symbol.toStringTag,{value:"Module"})),listContainer={tagName:"list-container",computed:{classValue(){return["list-container vue-component",`${this.spacing?this.spacing:""}`,`${this.classes?this.classes:""}`,Tools.isTrue(this.headlineSticky)?"list-container--headline-sticky has-headline-sticky":""]},colorStyling(){const t=this.bgColor?`--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);`:"",e=this.headlineColor?`--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`:"";return[t,e]}},props:{classes:String,headline:String,level:String,bgColor:String,headlineColor:String,headlineSticky:{default:!1},spacing:String},template:`
    <div :class="classValue" :style="colorStyling">
      <div class="list-container__container utility-animation container headline-sticky__target fade-in-bottom" data-utility-animation-step="1">
        <div class="row">
          <div class="col-sm-12 ">
            <headline :text="headline" :level="level" classes="list-container__headline" />
          </div>
        </div>
      </div>
      <slot-items :items="$slots.default"></slot-items>
    </div>
  `},__vite_glob_0_94=Object.freeze(Object.defineProperty({__proto__:null,default:listContainer},Symbol.toStringTag,{value:"Module"})),list={tagName:"list",migrate:!0,template:`
          list
      `},__vite_glob_0_95=Object.freeze(Object.defineProperty({__proto__:null,default:list},Symbol.toStringTag,{value:"Module"})),logoListItems={tagName:"logo-list-items",computed:{},methods:{getItemComponent(t){return t!=null&&t.url?"a":"span"},getDelay(t){const e=this.getIndex(t),i=e>0?100:0;return`--utility-animation-delay: ${`${e*i}ms`};`},getIndex(t){return this.isClone?this.list.length+t:t}},template:`
    <component v-for="(item, index) in list" :is="getItemComponent(item)"
      :href="item.url"
      target="_blank"
      rel="noopener"
      :class="['logo-list__item justify-content-center align-items-center fade-in-bottom', { 'py-8 px-4 mb-3': !isOverlapping, 'logo-list--clone': isClone }]"
      :title="item.title"
      data-utility-animation-step="1"
      :style="getDelay(index)"
    >
      <v-img :img="item.img" :alt="item.alt" preset="logoList" cloudinary=true />
    </component>
  `,props:{list:Array,isOverlapping:Boolean,isClone:Boolean}},logoList={tagName:"logo-list",components:{"logo-list-items":logoListItems},computed:{defaultSpacing(){},classValue(){return["logo-list container utility-animation vue-component",this.aspectRatio?"logo-list--aspect-ratio":"",Tools.isTrue(this.sticky)?"is-sticky-scroller":"",this.spacing?this.spacing:"py-4",this.isOverlapping?"logo-list--is-overlapping":""]},isOverlapping(){return Tools.isTrue(this.overlapping)},columnsValue(){const e=parseInt(this.columns);return"--column-width: "+`calc(${100/(Number.isNaN(e)?4:e)}% - 3px)`},aspectRatioValue(){const t=this.aspectRatio.split("/");return t.length!=2?"":`--aspect-ratio-width: ${t[0]}; --aspect-ratio-height: ${t[1]}`},styles(){return[this.columnsValue,this.aspectRatioValue,this.bgColor?`--logo-list-background: ${this.bgColor}`:""].join("; ")}},props:{list:Array,sticky:{default:!1},spacing:String,columns:Number,aspectRatio:{default:!1},overlapping:{default:!1},bgColor:String},template:`
    <div :class="classValue" :style="styles">
      <div class="logo-list__row row">
        <wrapper classes="logo-list__scroller" :hide-container="!isOverlapping" :hide-container-class="true">
          <div :class="['logo-list__col col d-flex', { 'flex-wrap': !isOverlapping }]">
            <logo-list-items :list="list" :is-overlapping="isOverlapping" />
            <logo-list-items :list="list" is-clone="true" :is-overlapping="isOverlapping" v-if="isOverlapping" />
          </div>
        </wrapper>
      </div>
    </div>
  `},__vite_glob_0_96=Object.freeze(Object.defineProperty({__proto__:null,default:logoList},Symbol.toStringTag,{value:"Module"}));var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lottie$1={exports:{}};(function(module,exports){typeof navigator<"u"&&function(t,e){module.exports=e()}(commonjsGlobal,function(){var svgNS="http://www.w3.org/2000/svg",locationHref="",_useWebWorker=!1,initialDefaultFrame=-999999,setWebWorker=function(e){_useWebWorker=!!e},getWebWorker=function(){return _useWebWorker},setLocationHref=function(e){locationHref=e},getLocationHref=function(){return locationHref};function createTag(t){return document.createElement(t)}function extendPrototype(t,e){var i,s=t.length,r;for(i=0;i<s;i+=1){r=t[i].prototype;for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e.prototype[a]=r[a])}}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}var audioControllerFactory=function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(i){this.audios.push(i)},pause:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].pause()},resume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].resume()},setRate:function(i){var s,r=this.audios.length;for(s=0;s<r;s+=1)this.audios[s].setRate(i)},createAudio:function(i){return this.audioFactory?this.audioFactory(i):window.Howl?new window.Howl({src:[i]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(i){this.audioFactory=i},setVolume:function(i){this._volume=i,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),createTypedArray=function(){function t(i,s){var r=0,a=[],n;switch(i){case"int16":case"uint8c":n=1;break;default:n=1.1;break}for(r=0;r<s;r+=1)a.push(n);return a}function e(i,s){return i==="float32"?new Float32Array(s):i==="int16"?new Int16Array(s):i==="uint8c"?new Uint8ClampedArray(s):t(i,s)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t}();function createSizedArray(t){return Array.apply(null,{length:t})}function _typeof$6(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$6=function(i){return typeof i}:_typeof$6=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof$6(t)}var subframeEnabled=!0,expressionsPlugin=null,expressionsInterfaces=null,idPrefix$1="",isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,i=t.length;for(e=0;e<i;e+=1)BMMath[t[e]]=Math[t[e]]})(),BMMath.random=Math.random,BMMath.abs=function(t){var e=_typeof$6(t);if(e==="object"&&t.length){var i=createSizedArray(t.length),s,r=t.length;for(s=0;s<r;s+=1)i[s]=Math.abs(t[s]);return i}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,i,s){this.type=t,this.currentTime=e,this.totalTime=i,this.direction=s<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,i,s){this.type=t,this.currentLoop=i,this.totalLoops=e,this.direction=s<0?-1:1}function BMSegmentStartEvent(t,e,i){this.type=t,this.firstFrame=e,this.totalFrames=i}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}var createElementID=function(){var t=0;return function(){return t+=1,idPrefix$1+"__lottie_element_"+t}}();function HSVtoRGB(t,e,i){var s,r,a,n,l,o,h,u;switch(n=Math.floor(t*6),l=t*6-n,o=i*(1-e),h=i*(1-l*e),u=i*(1-(1-l)*e),n%6){case 0:s=i,r=u,a=o;break;case 1:s=h,r=i,a=o;break;case 2:s=o,r=i,a=u;break;case 3:s=o,r=h,a=i;break;case 4:s=u,r=o,a=i;break;case 5:s=i,r=o,a=h;break}return[s,r,a]}function RGBtoHSV(t,e,i){var s=Math.max(t,e,i),r=Math.min(t,e,i),a=s-r,n,l=s===0?0:a/s,o=s/255;switch(s){case r:n=0;break;case t:n=e-i+a*(e<i?6:0),n/=6*a;break;case e:n=i-t+a*2,n/=6*a;break;case i:n=t-e+a*4,n/=6*a;break}return[n,l,o]}function addSaturationToRGB(t,e){var i=RGBtoHSV(t[0]*255,t[1]*255,t[2]*255);return i[1]+=e,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),HSVtoRGB(i[0],i[1],i[2])}function addBrightnessToRGB(t,e){var i=RGBtoHSV(t[0]*255,t[1]*255,t[2]*255);return i[2]+=e,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),HSVtoRGB(i[0],i[1],i[2])}function addHueToRGB(t,e){var i=RGBtoHSV(t[0]*255,t[1]*255,t[2]*255);return i[0]+=e/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),HSVtoRGB(i[0],i[1],i[2])}var rgbToHex=function(){var t=[],e,i;for(e=0;e<256;e+=1)i=e.toString(16),t[e]=i.length===1?"0"+i:i;return function(s,r,a){return s<0&&(s=0),r<0&&(r=0),a<0&&(a=0),"#"+t[s]+t[r]+t[a]}}(),setSubframeEnabled=function(e){subframeEnabled=!!e},getSubframeEnabled=function(){return subframeEnabled},setExpressionsPlugin=function(e){expressionsPlugin=e},getExpressionsPlugin=function(){return expressionsPlugin},setExpressionInterfaces=function(e){expressionsInterfaces=e},getExpressionInterfaces=function(){return expressionsInterfaces},setDefaultCurveSegments=function(e){defaultCurveSegments=e},getDefaultCurveSegments=function(){return defaultCurveSegments},setIdPrefix=function(e){idPrefix$1=e};function createNS(t){return document.createElementNS(svgNS,t)}function _typeof$5(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$5=function(i){return typeof i}:_typeof$5=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof$5(t)}var dataManager=function(){var t=1,e=[],i,s,r={onmessage:function(){},postMessage:function(_){i({data:_})}},a={postMessage:function(_){r.onmessage({data:_})}};function n(d){if(window.Worker&&window.Blob&&getWebWorker()){var _=new Blob(["var _workerSelf = self; self.onmessage = ",d.toString()],{type:"text/javascript"}),y=URL.createObjectURL(_);return new Worker(y)}return i=d,r}function l(){s||(s=n(function(_){function y(){function w(I,x){var P,v,b=I.length,M,D,j,q;for(v=0;v<b;v+=1)if(P=I[v],"ks"in P&&!P.completed){if(P.completed=!0,P.hasMask){var H=P.masksProperties;for(D=H.length,M=0;M<D;M+=1)if(H[M].pt.k.i)C(H[M].pt.k);else for(q=H[M].pt.k.length,j=0;j<q;j+=1)H[M].pt.k[j].s&&C(H[M].pt.k[j].s[0]),H[M].pt.k[j].e&&C(H[M].pt.k[j].e[0])}P.ty===0?(P.layers=c(P.refId,x),w(P.layers,x)):P.ty===4?g(P.shapes):P.ty===5&&V(P)}}function p(I,x){if(I){var P=0,v=I.length;for(P=0;P<v;P+=1)I[P].t===1&&(I[P].data.layers=c(I[P].data.refId,x),w(I[P].data.layers,x))}}function f(I,x){for(var P=0,v=x.length;P<v;){if(x[P].id===I)return x[P];P+=1}return null}function c(I,x){var P=f(I,x);return P?P.layers.__used?JSON.parse(JSON.stringify(P.layers)):(P.layers.__used=!0,P.layers):null}function g(I){var x,P=I.length,v,b;for(x=P-1;x>=0;x-=1)if(I[x].ty==="sh")if(I[x].ks.k.i)C(I[x].ks.k);else for(b=I[x].ks.k.length,v=0;v<b;v+=1)I[x].ks.k[v].s&&C(I[x].ks.k[v].s[0]),I[x].ks.k[v].e&&C(I[x].ks.k[v].e[0]);else I[x].ty==="gr"&&g(I[x].it)}function C(I){var x,P=I.i.length;for(x=0;x<P;x+=1)I.i[x][0]+=I.v[x][0],I.i[x][1]+=I.v[x][1],I.o[x][0]+=I.v[x][0],I.o[x][1]+=I.v[x][1]}function k(I,x){var P=x?x.split("."):[100,100,100];return I[0]>P[0]?!0:P[0]>I[0]?!1:I[1]>P[1]?!0:P[1]>I[1]?!1:I[2]>P[2]?!0:P[2]>I[2]?!1:null}var T=function(){var I=[4,4,14];function x(v){var b=v.t.d;v.t.d={k:[{s:b,t:0}]}}function P(v){var b,M=v.length;for(b=0;b<M;b+=1)v[b].ty===5&&x(v[b])}return function(v){if(k(I,v.v)&&(P(v.layers),v.assets)){var b,M=v.assets.length;for(b=0;b<M;b+=1)v.assets[b].layers&&P(v.assets[b].layers)}}}(),E=function(){var I=[4,7,99];return function(x){if(x.chars&&!k(I,x.v)){var P,v=x.chars.length;for(P=0;P<v;P+=1){var b=x.chars[P];b.data&&b.data.shapes&&(g(b.data.shapes),b.data.ip=0,b.data.op=99999,b.data.st=0,b.data.sr=1,b.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},x.chars[P].t||(b.data.shapes.push({ty:"no"}),b.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}}(),A=function(){var I=[5,7,15];function x(v){var b=v.t.p;typeof b.a=="number"&&(b.a={a:0,k:b.a}),typeof b.p=="number"&&(b.p={a:0,k:b.p}),typeof b.r=="number"&&(b.r={a:0,k:b.r})}function P(v){var b,M=v.length;for(b=0;b<M;b+=1)v[b].ty===5&&x(v[b])}return function(v){if(k(I,v.v)&&(P(v.layers),v.assets)){var b,M=v.assets.length;for(b=0;b<M;b+=1)v.assets[b].layers&&P(v.assets[b].layers)}}}(),R=function(){var I=[4,1,9];function x(v){var b,M=v.length,D,j;for(b=0;b<M;b+=1)if(v[b].ty==="gr")x(v[b].it);else if(v[b].ty==="fl"||v[b].ty==="st")if(v[b].c.k&&v[b].c.k[0].i)for(j=v[b].c.k.length,D=0;D<j;D+=1)v[b].c.k[D].s&&(v[b].c.k[D].s[0]/=255,v[b].c.k[D].s[1]/=255,v[b].c.k[D].s[2]/=255,v[b].c.k[D].s[3]/=255),v[b].c.k[D].e&&(v[b].c.k[D].e[0]/=255,v[b].c.k[D].e[1]/=255,v[b].c.k[D].e[2]/=255,v[b].c.k[D].e[3]/=255);else v[b].c.k[0]/=255,v[b].c.k[1]/=255,v[b].c.k[2]/=255,v[b].c.k[3]/=255}function P(v){var b,M=v.length;for(b=0;b<M;b+=1)v[b].ty===4&&x(v[b].shapes)}return function(v){if(k(I,v.v)&&(P(v.layers),v.assets)){var b,M=v.assets.length;for(b=0;b<M;b+=1)v.assets[b].layers&&P(v.assets[b].layers)}}}(),O=function(){var I=[4,4,18];function x(v){var b,M=v.length,D,j;for(b=M-1;b>=0;b-=1)if(v[b].ty==="sh")if(v[b].ks.k.i)v[b].ks.k.c=v[b].closed;else for(j=v[b].ks.k.length,D=0;D<j;D+=1)v[b].ks.k[D].s&&(v[b].ks.k[D].s[0].c=v[b].closed),v[b].ks.k[D].e&&(v[b].ks.k[D].e[0].c=v[b].closed);else v[b].ty==="gr"&&x(v[b].it)}function P(v){var b,M,D=v.length,j,q,H,U;for(M=0;M<D;M+=1){if(b=v[M],b.hasMask){var W=b.masksProperties;for(q=W.length,j=0;j<q;j+=1)if(W[j].pt.k.i)W[j].pt.k.c=W[j].cl;else for(U=W[j].pt.k.length,H=0;H<U;H+=1)W[j].pt.k[H].s&&(W[j].pt.k[H].s[0].c=W[j].cl),W[j].pt.k[H].e&&(W[j].pt.k[H].e[0].c=W[j].cl)}b.ty===4&&x(b.shapes)}}return function(v){if(k(I,v.v)&&(P(v.layers),v.assets)){var b,M=v.assets.length;for(b=0;b<M;b+=1)v.assets[b].layers&&P(v.assets[b].layers)}}}();function F(I){I.__complete||(R(I),T(I),E(I),A(I),O(I),w(I.layers,I.assets),p(I.chars,I.assets),I.__complete=!0)}function V(I){I.t.a.length===0&&"m"in I.t.p}var B={};return B.completeData=F,B.checkColors=R,B.checkChars=E,B.checkPathProperties=A,B.checkShapes=O,B.completeLayers=w,B}if(a.dataManager||(a.dataManager=y()),a.assetLoader||(a.assetLoader=function(){function w(f){var c=f.getResponseHeader("content-type");return c&&f.responseType==="json"&&c.indexOf("json")!==-1||f.response&&_typeof$5(f.response)==="object"?f.response:f.response&&typeof f.response=="string"?JSON.parse(f.response):f.responseText?JSON.parse(f.responseText):null}function p(f,c,g,C){var k,T=new XMLHttpRequest;try{T.responseType="json"}catch{}T.onreadystatechange=function(){if(T.readyState===4)if(T.status===200)k=w(T),g(k);else try{k=w(T),g(k)}catch(E){C&&C(E)}};try{T.open(["G","E","T"].join(""),f,!0)}catch{T.open(["G","E","T"].join(""),c+"/"+f,!0)}T.send()}return{load:p}}()),_.data.type==="loadAnimation")a.assetLoader.load(_.data.path,_.data.fullPath,function(w){a.dataManager.completeData(w),a.postMessage({id:_.data.id,payload:w,status:"success"})},function(){a.postMessage({id:_.data.id,status:"error"})});else if(_.data.type==="complete"){var m=_.data.animation;a.dataManager.completeData(m),a.postMessage({id:_.data.id,payload:m,status:"success"})}else _.data.type==="loadData"&&a.assetLoader.load(_.data.path,_.data.fullPath,function(w){a.postMessage({id:_.data.id,payload:w,status:"success"})},function(){a.postMessage({id:_.data.id,status:"error"})})}),s.onmessage=function(d){var _=d.data,y=_.id,m=e[y];e[y]=null,_.status==="success"?m.onComplete(_.payload):m.onError&&m.onError()})}function o(d,_){t+=1;var y="processId_"+t;return e[y]={onComplete:d,onError:_},y}function h(d,_,y){l();var m=o(_,y);s.postMessage({type:"loadAnimation",path:d,fullPath:window.location.origin+window.location.pathname,id:m})}function u(d,_,y){l();var m=o(_,y);s.postMessage({type:"loadData",path:d,fullPath:window.location.origin+window.location.pathname,id:m})}function S(d,_,y){l();var m=o(_,y);s.postMessage({type:"complete",animation:d,id:m})}return{loadAnimation:h,loadData:u,completeAnimation:S}}(),ImagePreloader=function(){var t=function(){var p=createTag("canvas");p.width=1,p.height=1;var f=p.getContext("2d");return f.fillStyle="rgba(0,0,0,0)",f.fillRect(0,0,1,1),p}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(p,f,c){var g="";if(p.e)g=p.p;else if(f){var C=p.p;C.indexOf("images/")!==-1&&(C=C.split("/")[1]),g=f+C}else g=c,g+=p.u?p.u:"",g+=p.p;return g}function r(p){var f=0,c=setInterval((function(){var g=p.getBBox();(g.width||f>500)&&(this._imageLoaded(),clearInterval(c)),f+=1}).bind(this),50)}function a(p){var f=s(p,this.assetsPath,this.path),c=createNS("image");isSafari?this.testImageLoaded(c):c.addEventListener("load",this._imageLoaded,!1),c.addEventListener("error",(function(){g.img=t,this._imageLoaded()}).bind(this),!1),c.setAttributeNS("http://www.w3.org/1999/xlink","href",f),this._elementHelper.append?this._elementHelper.append(c):this._elementHelper.appendChild(c);var g={img:c,assetData:p};return g}function n(p){var f=s(p,this.assetsPath,this.path),c=createTag("img");c.crossOrigin="anonymous",c.addEventListener("load",this._imageLoaded,!1),c.addEventListener("error",(function(){g.img=t,this._imageLoaded()}).bind(this),!1),c.src=f;var g={img:c,assetData:p};return g}function l(p){var f={assetData:p},c=s(p,this.assetsPath,this.path);return dataManager.loadData(c,(function(g){f.img=g,this._footageLoaded()}).bind(this),(function(){f.img={},this._footageLoaded()}).bind(this)),f}function o(p,f){this.imagesLoadedCb=f;var c,g=p.length;for(c=0;c<g;c+=1)p[c].layers||(!p[c].t||p[c].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(p[c]))):p[c].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(p[c]))))}function h(p){this.path=p||""}function u(p){this.assetsPath=p||""}function S(p){for(var f=0,c=this.images.length;f<c;){if(this.images[f].assetData===p)return this.images[f].img;f+=1}return null}function d(){this.imagesLoadedCb=null,this.images.length=0}function _(){return this.totalImages===this.loadedAssets}function y(){return this.totalFootages===this.loadedFootagesCount}function m(p,f){p==="svg"?(this._elementHelper=f,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function w(){this._imageLoaded=e.bind(this),this._footageLoaded=i.bind(this),this.testImageLoaded=r.bind(this),this.createFootageData=l.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return w.prototype={loadAssets:o,setAssetsPath:u,setPath:h,loadedImages:_,loadedFootages:y,destroy:d,getAsset:S,createImgData:n,createImageData:a,imageLoaded:e,footageLoaded:i,setCacheType:m},w}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(e,i){if(this._cbs[e])for(var s=this._cbs[e],r=0;r<s.length;r+=1)s[r](i)},addEventListener:function(e,i){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(i),(function(){this.removeEventListener(e,i)}).bind(this)},removeEventListener:function(e,i){if(!i)this._cbs[e]=null;else if(this._cbs[e]){for(var s=0,r=this._cbs[e].length;s<r;)this._cbs[e][s]===i&&(this._cbs[e].splice(s,1),s-=1,r-=1),s+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var markerParser=function(){function t(e){for(var i=e.split(`\r
`),s={},r,a=0,n=0;n<i.length;n+=1)r=i[n].split(":"),r.length===2&&(s[r[0]]=r[1].trim(),a+=1);if(a===0)throw new Error;return s}return function(e){for(var i=[],s=0;s<e.length;s+=1){var r=e[s],a={time:r.tm,duration:r.dr};try{a.payload=JSON.parse(e[s].cm)}catch{try{a.payload=t(e[s].cm)}catch{a.payload={name:e[s].cm}}}i.push(a)}return i}}(),ProjectInterface=function(){function t(e){this.compositions.push(e)}return function(){function e(i){for(var s=0,r=this.compositions.length;s<r;){if(this.compositions[s].data&&this.compositions[s].data.nm===i)return this.compositions[s].prepareFrame&&this.compositions[s].data.xt&&this.compositions[s].prepareFrame(this.currentFrame),this.compositions[s].compInterface;s+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),renderers={},registerRenderer=function(e,i){renderers[e]=i};function getRenderer(t){return renderers[t]}function getRegisteredRenderer(){if(renderers.canvas)return"canvas";for(var t in renderers)if(renderers[t])return t;return""}function _typeof$4(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$4=function(i){return typeof i}:_typeof$4=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof$4(t)}var AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=getSubframeEnabled(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new BMEnterFrameEvent("drawnFrame",0,0,0),this.expressionsPlugin=getExpressionsPlugin()};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var i=getRenderer(e);this.renderer=new i(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(t.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(t){dataManager.completeAnimation(t,this.configAnimation)},AnimationItem.prototype.setData=function(t,e){e&&_typeof$4(e)!=="object"&&(e=JSON.parse(e));var i={wrapper:t,animationData:e},s=t.attributes;i.path=s.getNamedItem("data-animation-path")?s.getNamedItem("data-animation-path").value:s.getNamedItem("data-bm-path")?s.getNamedItem("data-bm-path").value:s.getNamedItem("bm-path")?s.getNamedItem("bm-path").value:"",i.animType=s.getNamedItem("data-anim-type")?s.getNamedItem("data-anim-type").value:s.getNamedItem("data-bm-type")?s.getNamedItem("data-bm-type").value:s.getNamedItem("bm-type")?s.getNamedItem("bm-type").value:s.getNamedItem("data-bm-renderer")?s.getNamedItem("data-bm-renderer").value:s.getNamedItem("bm-renderer")?s.getNamedItem("bm-renderer").value:getRegisteredRenderer()||"canvas";var r=s.getNamedItem("data-anim-loop")?s.getNamedItem("data-anim-loop").value:s.getNamedItem("data-bm-loop")?s.getNamedItem("data-bm-loop").value:s.getNamedItem("bm-loop")?s.getNamedItem("bm-loop").value:"";r==="false"?i.loop=!1:r==="true"?i.loop=!0:r!==""&&(i.loop=parseInt(r,10));var a=s.getNamedItem("data-anim-autoplay")?s.getNamedItem("data-anim-autoplay").value:s.getNamedItem("data-bm-autoplay")?s.getNamedItem("data-bm-autoplay").value:s.getNamedItem("bm-autoplay")?s.getNamedItem("bm-autoplay").value:!0;i.autoplay=a!=="false",i.name=s.getNamedItem("data-name")?s.getNamedItem("data-name").value:s.getNamedItem("data-bm-name")?s.getNamedItem("data-bm-name").value:s.getNamedItem("bm-name")?s.getNamedItem("bm-name").value:"";var n=s.getNamedItem("data-anim-prerender")?s.getNamedItem("data-anim-prerender").value:s.getNamedItem("data-bm-prerender")?s.getNamedItem("data-bm-prerender").value:s.getNamedItem("bm-prerender")?s.getNamedItem("bm-prerender").value:"";n==="false"&&(i.prerender=!1),i.path?this.setParams(i):this.trigger("destroy")},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,i,s=e.length,r=t.layers,a,n=r.length;for(a=0;a<n;a+=1)for(i=0;i<s;){if(e[i].id===r[a].id){e[i]=r[a];break}i+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,i=0;i<s;i+=1)this.animationData.assets.push(t.assets[i]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(t){this.animationData=t;var e=getExpressionsPlugin();e&&e.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(i,this.includeLayers.bind(this),(function(){this.trigger("data_failed")}).bind(this))},AnimationItem.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=markerParser(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=getExpressionsPlugin();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout((function(){this.trigger("DOMLoaded")}).bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},AnimationItem.prototype.resize=function(t,e){var i=typeof t=="number"?t:void 0,s=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(i,s)},AnimationItem.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(t){for(var e,i=0;i<this.markers.length;i+=1)if(e=this.markers[i],e.payload&&e.payload.name===t)return e;return null},AnimationItem.prototype.goToAndStop=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var r=this.getMarkerData(t);r&&this.goToAndStop(r.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var r=this.getMarkerData(t);r&&(r.duration?this.playSegments([r.time,r.time+r.duration],!0):this.goToAndStop(r.time,!0))}else this.goToAndStop(s,e,i);this.play()}},AnimationItem.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,i=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(i=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(i=!0,e=0)):this.setCurrentRawFrameValue(e),i&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var i=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?i=t:this.currentRawFrame+this.firstFrame>e&&(i=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,i!==-1&&this.goToAndStop(i,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),_typeof$4(t[0])==="object"){var i,s=t.length;for(i=0;i<s;i+=1)this.segments.push(t[i])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},AnimationItem.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setLoop=function(t){this.loop=t},AnimationItem.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},AnimationItem.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var i=t.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),e=this.assetsPath+i}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,i=this.assets.length;e<i;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.updateDocumentData=function(t,e,i){try{var s=this.renderer.getElementByPath(t);s.updateDocumentData(e,i)}catch{}},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var animationManager=function(){var t={},e=[],i=0,s=0,r=0,a=!0,n=!1;function l(x){for(var P=0,v=x.target;P<s;)e[P].animation===v&&(e.splice(P,1),P-=1,s-=1,v.isPaused||S()),P+=1}function o(x,P){if(!x)return null;for(var v=0;v<s;){if(e[v].elem===x&&e[v].elem!==null)return e[v].animation;v+=1}var b=new AnimationItem;return d(b,x),b.setData(x,P),b}function h(){var x,P=e.length,v=[];for(x=0;x<P;x+=1)v.push(e[x].animation);return v}function u(){r+=1,R()}function S(){r-=1}function d(x,P){x.addEventListener("destroy",l),x.addEventListener("_active",u),x.addEventListener("_idle",S),e.push({elem:P,animation:x}),s+=1}function _(x){var P=new AnimationItem;return d(P,null),P.setParams(x),P}function y(x,P){var v;for(v=0;v<s;v+=1)e[v].animation.setSpeed(x,P)}function m(x,P){var v;for(v=0;v<s;v+=1)e[v].animation.setDirection(x,P)}function w(x){var P;for(P=0;P<s;P+=1)e[P].animation.play(x)}function p(x){var P=x-i,v;for(v=0;v<s;v+=1)e[v].animation.advanceTime(P);i=x,r&&!n?window.requestAnimationFrame(p):a=!0}function f(x){i=x,window.requestAnimationFrame(p)}function c(x){var P;for(P=0;P<s;P+=1)e[P].animation.pause(x)}function g(x,P,v){var b;for(b=0;b<s;b+=1)e[b].animation.goToAndStop(x,P,v)}function C(x){var P;for(P=0;P<s;P+=1)e[P].animation.stop(x)}function k(x){var P;for(P=0;P<s;P+=1)e[P].animation.togglePause(x)}function T(x){var P;for(P=s-1;P>=0;P-=1)e[P].animation.destroy(x)}function E(x,P,v){var b=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),M,D=b.length;for(M=0;M<D;M+=1)v&&b[M].setAttribute("data-bm-type",v),o(b[M],x);if(P&&D===0){v||(v="svg");var j=document.getElementsByTagName("body")[0];j.innerText="";var q=createTag("div");q.style.width="100%",q.style.height="100%",q.setAttribute("data-bm-type",v),j.appendChild(q),o(q,x)}}function A(){var x;for(x=0;x<s;x+=1)e[x].animation.resize()}function R(){!n&&r&&a&&(window.requestAnimationFrame(f),a=!1)}function O(){n=!0}function F(){n=!1,R()}function V(x,P){var v;for(v=0;v<s;v+=1)e[v].animation.setVolume(x,P)}function B(x){var P;for(P=0;P<s;P+=1)e[P].animation.mute(x)}function I(x){var P;for(P=0;P<s;P+=1)e[P].animation.unmute(x)}return t.registerAnimation=o,t.loadAnimation=_,t.setSpeed=y,t.setDirection=m,t.play=w,t.pause=c,t.stop=C,t.togglePause=k,t.searchAnimations=E,t.resize=A,t.goToAndStop=g,t.destroy=T,t.freeze=O,t.unfreeze=F,t.setVolume=V,t.mute=B,t.unmute=I,t.getRegisteredAnimations=h,t}(),BezierFactory=function(){var t={};t.getBezierEasing=i;var e={};function i(f,c,g,C,k){var T=k||("bez_"+f+"_"+c+"_"+g+"_"+C).replace(/\./g,"p");if(e[T])return e[T];var E=new p([f,c,g,C]);return e[T]=E,E}var s=4,r=.001,a=1e-7,n=10,l=11,o=1/(l-1),h=typeof Float32Array=="function";function u(f,c){return 1-3*c+3*f}function S(f,c){return 3*c-6*f}function d(f){return 3*f}function _(f,c,g){return((u(c,g)*f+S(c,g))*f+d(c))*f}function y(f,c,g){return 3*u(c,g)*f*f+2*S(c,g)*f+d(c)}function m(f,c,g,C,k){var T,E,A=0;do E=c+(g-c)/2,T=_(E,C,k)-f,T>0?g=E:c=E;while(Math.abs(T)>a&&++A<n);return E}function w(f,c,g,C){for(var k=0;k<s;++k){var T=y(c,g,C);if(T===0)return c;var E=_(c,g,C)-f;c-=E/T}return c}function p(f){this._p=f,this._mSampleValues=h?new Float32Array(l):new Array(l),this._precomputed=!1,this.get=this.get.bind(this)}return p.prototype={get:function(c){var g=this._p[0],C=this._p[1],k=this._p[2],T=this._p[3];return this._precomputed||this._precompute(),g===C&&k===T?c:c===0?0:c===1?1:_(this._getTForX(c),C,T)},_precompute:function(){var c=this._p[0],g=this._p[1],C=this._p[2],k=this._p[3];this._precomputed=!0,(c!==g||C!==k)&&this._calcSampleValues()},_calcSampleValues:function(){for(var c=this._p[0],g=this._p[2],C=0;C<l;++C)this._mSampleValues[C]=_(C*o,c,g)},_getTForX:function(c){for(var g=this._p[0],C=this._p[2],k=this._mSampleValues,T=0,E=1,A=l-1;E!==A&&k[E]<=c;++E)T+=o;--E;var R=(c-k[E])/(k[E+1]-k[E]),O=T+R*o,F=y(O,g,C);return F>=r?w(c,O,g,C):F===0?O:m(c,T,T+o,g,C)}},t}(),pooling=function(){function t(e){return e.concat(createSizedArray(e.length))}return{double:t}}(),poolFactory=function(){return function(t,e,i){var s=0,r=t,a=createSizedArray(r),n={newElement:l,release:o};function l(){var h;return s?(s-=1,h=a[s]):h=e(),h}function o(h){s===r&&(a=pooling.double(a),r*=2),i&&i(h),a[s]=h,s+=1}return n}}(),bezierLengthPool=function(){function t(){return{addedLength:0,percents:createTypedArray("float32",getDefaultCurveSegments()),lengths:createTypedArray("float32",getDefaultCurveSegments())}}return poolFactory(8,t)}(),segmentsLengthPool=function(){function t(){return{lengths:[],totalLength:0}}function e(i){var s,r=i.lengths.length;for(s=0;s<r;s+=1)bezierLengthPool.release(i.lengths[s]);i.lengths.length=0}return poolFactory(8,t,e)}();function bezFunction(){var t=Math;function e(d,_,y,m,w,p){var f=d*m+_*w+y*p-w*m-p*d-y*_;return f>-.001&&f<.001}function i(d,_,y,m,w,p,f,c,g){if(y===0&&p===0&&g===0)return e(d,_,m,w,f,c);var C=t.sqrt(t.pow(m-d,2)+t.pow(w-_,2)+t.pow(p-y,2)),k=t.sqrt(t.pow(f-d,2)+t.pow(c-_,2)+t.pow(g-y,2)),T=t.sqrt(t.pow(f-m,2)+t.pow(c-w,2)+t.pow(g-p,2)),E;return C>k?C>T?E=C-k-T:E=T-k-C:T>k?E=T-k-C:E=k-C-T,E>-1e-4&&E<1e-4}var s=function(){return function(d,_,y,m){var w=getDefaultCurveSegments(),p,f,c,g,C,k=0,T,E=[],A=[],R=bezierLengthPool.newElement();for(c=y.length,p=0;p<w;p+=1){for(C=p/(w-1),T=0,f=0;f<c;f+=1)g=bmPow(1-C,3)*d[f]+3*bmPow(1-C,2)*C*y[f]+3*(1-C)*bmPow(C,2)*m[f]+bmPow(C,3)*_[f],E[f]=g,A[f]!==null&&(T+=bmPow(E[f]-A[f],2)),A[f]=E[f];T&&(T=bmSqrt(T),k+=T),R.percents[p]=C,R.lengths[p]=k}return R.addedLength=k,R}}();function r(d){var _=segmentsLengthPool.newElement(),y=d.c,m=d.v,w=d.o,p=d.i,f,c=d._length,g=_.lengths,C=0;for(f=0;f<c-1;f+=1)g[f]=s(m[f],m[f+1],w[f],p[f+1]),C+=g[f].addedLength;return y&&c&&(g[f]=s(m[f],m[0],w[f],p[0]),C+=g[f].addedLength),_.totalLength=C,_}function a(d){this.segmentLength=0,this.points=new Array(d)}function n(d,_){this.partialLength=d,this.point=_}var l=function(){var d={};return function(_,y,m,w){var p=(_[0]+"_"+_[1]+"_"+y[0]+"_"+y[1]+"_"+m[0]+"_"+m[1]+"_"+w[0]+"_"+w[1]).replace(/\./g,"p");if(!d[p]){var f=getDefaultCurveSegments(),c,g,C,k,T,E=0,A,R,O=null;_.length===2&&(_[0]!==y[0]||_[1]!==y[1])&&e(_[0],_[1],y[0],y[1],_[0]+m[0],_[1]+m[1])&&e(_[0],_[1],y[0],y[1],y[0]+w[0],y[1]+w[1])&&(f=2);var F=new a(f);for(C=m.length,c=0;c<f;c+=1){for(R=createSizedArray(C),T=c/(f-1),A=0,g=0;g<C;g+=1)k=bmPow(1-T,3)*_[g]+3*bmPow(1-T,2)*T*(_[g]+m[g])+3*(1-T)*bmPow(T,2)*(y[g]+w[g])+bmPow(T,3)*y[g],R[g]=k,O!==null&&(A+=bmPow(R[g]-O[g],2));A=bmSqrt(A),E+=A,F.points[c]=new n(A,R),O=R}F.segmentLength=E,d[p]=F}return d[p]}}();function o(d,_){var y=_.percents,m=_.lengths,w=y.length,p=bmFloor((w-1)*d),f=d*_.addedLength,c=0;if(p===w-1||p===0||f===m[p])return y[p];for(var g=m[p]>f?-1:1,C=!0;C;)if(m[p]<=f&&m[p+1]>f?(c=(f-m[p])/(m[p+1]-m[p]),C=!1):p+=g,p<0||p>=w-1){if(p===w-1)return y[p];C=!1}return y[p]+(y[p+1]-y[p])*c}function h(d,_,y,m,w,p){var f=o(w,p),c=1-f,g=t.round((c*c*c*d[0]+(f*c*c+c*f*c+c*c*f)*y[0]+(f*f*c+c*f*f+f*c*f)*m[0]+f*f*f*_[0])*1e3)/1e3,C=t.round((c*c*c*d[1]+(f*c*c+c*f*c+c*c*f)*y[1]+(f*f*c+c*f*f+f*c*f)*m[1]+f*f*f*_[1])*1e3)/1e3;return[g,C]}var u=createTypedArray("float32",8);function S(d,_,y,m,w,p,f){w<0?w=0:w>1&&(w=1);var c=o(w,f);p=p>1?1:p;var g=o(p,f),C,k=d.length,T=1-c,E=1-g,A=T*T*T,R=c*T*T*3,O=c*c*T*3,F=c*c*c,V=T*T*E,B=c*T*E+T*c*E+T*T*g,I=c*c*E+T*c*g+c*T*g,x=c*c*g,P=T*E*E,v=c*E*E+T*g*E+T*E*g,b=c*g*E+T*g*g+c*E*g,M=c*g*g,D=E*E*E,j=g*E*E+E*g*E+E*E*g,q=g*g*E+E*g*g+g*E*g,H=g*g*g;for(C=0;C<k;C+=1)u[C*4]=t.round((A*d[C]+R*y[C]+O*m[C]+F*_[C])*1e3)/1e3,u[C*4+1]=t.round((V*d[C]+B*y[C]+I*m[C]+x*_[C])*1e3)/1e3,u[C*4+2]=t.round((P*d[C]+v*y[C]+b*m[C]+M*_[C])*1e3)/1e3,u[C*4+3]=t.round((D*d[C]+j*y[C]+q*m[C]+H*_[C])*1e3)/1e3;return u}return{getSegmentsLength:r,getNewSegment:S,getPointInSegment:h,buildBezierData:l,pointOnLine2D:e,pointOnLine3D:i}}var bez=bezFunction(),initFrame=initialDefaultFrame,mathAbs=Math.abs;function interpolateValue(t,e){var i=this.offsetTime,s;this.propType==="multidimensional"&&(s=createTypedArray("float32",this.pv.length));for(var r=e.lastIndex,a=r,n=this.keyframes.length-1,l=!0,o,h,u;l;){if(o=this.keyframes[a],h=this.keyframes[a+1],a===n-1&&t>=h.t-i){o.h&&(o=h),r=0;break}if(h.t-i>t){r=a;break}a<n-1?a+=1:(r=0,l=!1)}u=this.keyframesMetadata[a]||{};var S,d,_,y,m,w,p=h.t-i,f=o.t-i,c;if(o.to){u.bezierData||(u.bezierData=bez.buildBezierData(o.s,h.s||o.e,o.to,o.ti));var g=u.bezierData;if(t>=p||t<f){var C=t>=p?g.points.length-1:0;for(d=g.points[C].point.length,S=0;S<d;S+=1)s[S]=g.points[C].point[S]}else{u.__fnct?w=u.__fnct:(w=BezierFactory.getBezierEasing(o.o.x,o.o.y,o.i.x,o.i.y,o.n).get,u.__fnct=w),_=w((t-f)/(p-f));var k=g.segmentLength*_,T,E=e.lastFrame<t&&e._lastKeyframeIndex===a?e._lastAddedLength:0;for(m=e.lastFrame<t&&e._lastKeyframeIndex===a?e._lastPoint:0,l=!0,y=g.points.length;l;){if(E+=g.points[m].partialLength,k===0||_===0||m===g.points.length-1){for(d=g.points[m].point.length,S=0;S<d;S+=1)s[S]=g.points[m].point[S];break}else if(k>=E&&k<E+g.points[m+1].partialLength){for(T=(k-E)/g.points[m+1].partialLength,d=g.points[m].point.length,S=0;S<d;S+=1)s[S]=g.points[m].point[S]+(g.points[m+1].point[S]-g.points[m].point[S])*T;break}m<y-1?m+=1:l=!1}e._lastPoint=m,e._lastAddedLength=E-g.points[m].partialLength,e._lastKeyframeIndex=a}}else{var A,R,O,F,V;if(n=o.s.length,c=h.s||o.e,this.sh&&o.h!==1)if(t>=p)s[0]=c[0],s[1]=c[1],s[2]=c[2];else if(t<=f)s[0]=o.s[0],s[1]=o.s[1],s[2]=o.s[2];else{var B=createQuaternion(o.s),I=createQuaternion(c),x=(t-f)/(p-f);quaternionToEuler(s,slerp(B,I,x))}else for(a=0;a<n;a+=1)o.h!==1&&(t>=p?_=1:t<f?_=0:(o.o.x.constructor===Array?(u.__fnct||(u.__fnct=[]),u.__fnct[a]?w=u.__fnct[a]:(A=o.o.x[a]===void 0?o.o.x[0]:o.o.x[a],R=o.o.y[a]===void 0?o.o.y[0]:o.o.y[a],O=o.i.x[a]===void 0?o.i.x[0]:o.i.x[a],F=o.i.y[a]===void 0?o.i.y[0]:o.i.y[a],w=BezierFactory.getBezierEasing(A,R,O,F).get,u.__fnct[a]=w)):u.__fnct?w=u.__fnct:(A=o.o.x,R=o.o.y,O=o.i.x,F=o.i.y,w=BezierFactory.getBezierEasing(A,R,O,F).get,o.keyframeMetadata=w),_=w((t-f)/(p-f)))),c=h.s||o.e,V=o.h===1?o.s[a]:o.s[a]+(c[a]-o.s[a])*_,this.propType==="multidimensional"?s[a]=V:s=V}return e.lastIndex=r,s}function slerp(t,e,i){var s=[],r=t[0],a=t[1],n=t[2],l=t[3],o=e[0],h=e[1],u=e[2],S=e[3],d,_,y,m,w;return _=r*o+a*h+n*u+l*S,_<0&&(_=-_,o=-o,h=-h,u=-u,S=-S),1-_>1e-6?(d=Math.acos(_),y=Math.sin(d),m=Math.sin((1-i)*d)/y,w=Math.sin(i*d)/y):(m=1-i,w=i),s[0]=m*r+w*o,s[1]=m*a+w*h,s[2]=m*n+w*u,s[3]=m*l+w*S,s}function quaternionToEuler(t,e){var i=e[0],s=e[1],r=e[2],a=e[3],n=Math.atan2(2*s*a-2*i*r,1-2*s*s-2*r*r),l=Math.asin(2*i*s+2*r*a),o=Math.atan2(2*i*a-2*s*r,1-2*i*i-2*r*r);t[0]=n/degToRads,t[1]=l/degToRads,t[2]=o/degToRads}function createQuaternion(t){var e=t[0]*degToRads,i=t[1]*degToRads,s=t[2]*degToRads,r=Math.cos(e/2),a=Math.cos(i/2),n=Math.cos(s/2),l=Math.sin(e/2),o=Math.sin(i/2),h=Math.sin(s/2),u=r*a*n-l*o*h,S=l*o*n+r*a*h,d=l*a*n+r*o*h,_=r*o*n-l*a*h;return[S,d,_,u]}function getValueAtCurrentTime(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==initFrame&&(this._caching.lastFrame>=i&&t>=i||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(t,this._caching);this.pv=s}return this._caching.lastFrame=t,this.pv}function setVValue(t){var e;if(this.propType==="unidimensional")e=t*this.mult,mathAbs(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)e=t[i]*this.mult,mathAbs(this.v[i]-e)>1e-5&&(this.v[i]=e,this._mdf=!0),i+=1}function processEffectsSequence(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)i=this.effectsSequence[t](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function addEffect(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function ValueProperty(t,e,i,s){this.propType="unidimensional",this.mult=i||1,this.data=e,this.v=i?e.k*i:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function MultiDimensionalProperty(t,e,i,s){this.propType="multidimensional",this.mult=i||1,this.data=e,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var r,a=e.k.length;for(this.v=createTypedArray("float32",a),this.pv=createTypedArray("float32",a),this.vel=createTypedArray("float32",a),r=0;r<a;r+=1)this.v[r]=e.k[r]*this.mult,this.pv[r]=e.k[r];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function KeyframedValueProperty(t,e,i,s){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:initFrame,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.v=initFrame,this.pv=initFrame,this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.addEffect=addEffect}function KeyframedMultidimensionalProperty(t,e,i,s){this.propType="multidimensional";var r,a=e.k.length,n,l,o,h;for(r=0;r<a-1;r+=1)e.k[r].to&&e.k[r].s&&e.k[r+1]&&e.k[r+1].s&&(n=e.k[r].s,l=e.k[r+1].s,o=e.k[r].to,h=e.k[r].ti,(n.length===2&&!(n[0]===l[0]&&n[1]===l[1])&&bez.pointOnLine2D(n[0],n[1],l[0],l[1],n[0]+o[0],n[1]+o[1])&&bez.pointOnLine2D(n[0],n[1],l[0],l[1],l[0]+h[0],l[1]+h[1])||n.length===3&&!(n[0]===l[0]&&n[1]===l[1]&&n[2]===l[2])&&bez.pointOnLine3D(n[0],n[1],n[2],l[0],l[1],l[2],n[0]+o[0],n[1]+o[1],n[2]+o[2])&&bez.pointOnLine3D(n[0],n[1],n[2],l[0],l[1],l[2],l[0]+h[0],l[1]+h[1],l[2]+h[2]))&&(e.k[r].to=null,e.k[r].ti=null),n[0]===l[0]&&n[1]===l[1]&&o[0]===0&&o[1]===0&&h[0]===0&&h[1]===0&&(n.length===2||n[2]===l[2]&&o[2]===0&&h[2]===0)&&(e.k[r].to=null,e.k[r].ti=null));this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.frameId=-1;var u=e.k[0].s.length;for(this.v=createTypedArray("float32",u),this.pv=createTypedArray("float32",u),r=0;r<u;r+=1)this.v[r]=initFrame,this.pv[r]=initFrame;this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray("float32",u)},this.addEffect=addEffect}var PropertyFactory=function(){function t(i,s,r,a,n){s.sid&&(s=i.globalData.slotManager.getProp(s));var l;if(!s.k.length)l=new ValueProperty(i,s,a,n);else if(typeof s.k[0]=="number")l=new MultiDimensionalProperty(i,s,a,n);else switch(r){case 0:l=new KeyframedValueProperty(i,s,a,n);break;case 1:l=new KeyframedMultidimensionalProperty(i,s,a,n);break}return l.effectsSequence.length&&n.addDynamicProperty(l),l}var e={getProp:t};return e}();function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,i=this.dynamicProperties.length;for(e=0;e<i;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var pointPool=function(){function t(){return createTypedArray("float32",2)}return poolFactory(8,t)}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var i=0;i<e;)this.v[i]=pointPool.newElement(),this.o[i]=pointPool.newElement(),this.i[i]=pointPool.newElement(),i+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,i,s,r){var a;switch(this._length=Math.max(this._length,s+1),this._length>=this._maxLength&&this.doubleArrayLength(),i){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[];break}(!a[s]||a[s]&&!r)&&(a[s]=pointPool.newElement()),a[s][0]=t,a[s][1]=e},ShapePath.prototype.setTripleAt=function(t,e,i,s,r,a,n,l){this.setXYAt(t,e,"v",n,l),this.setXYAt(i,s,"o",n,l),this.setXYAt(r,a,"i",n,l)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,i=this.o,s=this.i,r=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],s[0][0],s[0][1],i[0][0],i[0][1],0,!1),r=1);var a=this._length-1,n=this._length,l;for(l=r;l<n;l+=1)t.setTripleAt(e[a][0],e[a][1],s[a][0],s[a][1],i[a][0],i[a][1],l,!1),a-=1;return t},ShapePath.prototype.length=function(){return this._length};var shapePool=function(){function t(){return new ShapePath}function e(r){var a=r._length,n;for(n=0;n<a;n+=1)pointPool.release(r.v[n]),pointPool.release(r.i[n]),pointPool.release(r.o[n]),r.v[n]=null,r.i[n]=null,r.o[n]=null;r._length=0,r.c=!1}function i(r){var a=s.newElement(),n,l=r._length===void 0?r.v.length:r._length;for(a.setLength(l),a.c=r.c,n=0;n<l;n+=1)a.setTripleAt(r.v[n][0],r.v[n][1],r.o[n][0],r.o[n][1],r.i[n][0],r.i[n][1],n);return a}var s=poolFactory(4,t,e);return s.clone=i,s}();function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shapePool.release(this.shapes[t]);this._length=0};var shapeCollectionPool=function(){var t={newShapeCollection:r,release:a},e=0,i=4,s=createSizedArray(i);function r(){var n;return e?(e-=1,n=s[e]):n=new ShapeCollection,n}function a(n){var l,o=n._length;for(l=0;l<o;l+=1)shapePool.release(n.shapes[l]);n._length=0,e===i&&(s=pooling.double(s),i*=2),s[e]=n,e+=1}return t}(),ShapePropertyFactory=function(){var t=-999999;function e(p,f,c){var g=c.lastIndex,C,k,T,E,A,R,O,F,V,B=this.keyframes;if(p<B[0].t-this.offsetTime)C=B[0].s[0],T=!0,g=0;else if(p>=B[B.length-1].t-this.offsetTime)C=B[B.length-1].s?B[B.length-1].s[0]:B[B.length-2].e[0],T=!0;else{for(var I=g,x=B.length-1,P=!0,v,b,M;P&&(v=B[I],b=B[I+1],!(b.t-this.offsetTime>p));)I<x-1?I+=1:P=!1;if(M=this.keyframesMetadata[I]||{},T=v.h===1,g=I,!T){if(p>=b.t-this.offsetTime)F=1;else if(p<v.t-this.offsetTime)F=0;else{var D;M.__fnct?D=M.__fnct:(D=BezierFactory.getBezierEasing(v.o.x,v.o.y,v.i.x,v.i.y).get,M.__fnct=D),F=D((p-(v.t-this.offsetTime))/(b.t-this.offsetTime-(v.t-this.offsetTime)))}k=b.s?b.s[0]:v.e[0]}C=v.s[0]}for(R=f._length,O=C.i[0].length,c.lastIndex=g,E=0;E<R;E+=1)for(A=0;A<O;A+=1)V=T?C.i[E][A]:C.i[E][A]+(k.i[E][A]-C.i[E][A])*F,f.i[E][A]=V,V=T?C.o[E][A]:C.o[E][A]+(k.o[E][A]-C.o[E][A])*F,f.o[E][A]=V,V=T?C.v[E][A]:C.v[E][A]+(k.v[E][A]-C.v[E][A])*F,f.v[E][A]=V}function i(){var p=this.comp.renderedFrame-this.offsetTime,f=this.keyframes[0].t-this.offsetTime,c=this.keyframes[this.keyframes.length-1].t-this.offsetTime,g=this._caching.lastFrame;return g!==t&&(g<f&&p<f||g>c&&p>c)||(this._caching.lastIndex=g<p?this._caching.lastIndex:0,this.interpolateShape(p,this.pv,this._caching)),this._caching.lastFrame=p,this.pv}function s(){this.paths=this.localShapeCollection}function r(p,f){if(p._length!==f._length||p.c!==f.c)return!1;var c,g=p._length;for(c=0;c<g;c+=1)if(p.v[c][0]!==f.v[c][0]||p.v[c][1]!==f.v[c][1]||p.o[c][0]!==f.o[c][0]||p.o[c][1]!==f.o[c][1]||p.i[c][0]!==f.i[c][0]||p.i[c][1]!==f.i[c][1])return!1;return!0}function a(p){r(this.v,p)||(this.v=shapePool.clone(p),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function n(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var p;this.kf?p=this.pv:this.data.ks?p=this.data.ks.k:p=this.data.pt.k;var f,c=this.effectsSequence.length;for(f=0;f<c;f+=1)p=this.effectsSequence[f](p);this.setVValue(p),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function l(p,f,c){this.propType="shape",this.comp=p.comp,this.container=p,this.elem=p,this.data=f,this.k=!1,this.kf=!1,this._mdf=!1;var g=c===3?f.pt.k:f.ks.k;this.v=shapePool.clone(g),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s,this.effectsSequence=[]}function o(p){this.effectsSequence.push(p),this.container.addDynamicProperty(this)}l.prototype.interpolateShape=e,l.prototype.getValue=n,l.prototype.setVValue=a,l.prototype.addEffect=o;function h(p,f,c){this.propType="shape",this.comp=p.comp,this.elem=p,this.container=p,this.offsetTime=p.data.st,this.keyframes=c===3?f.pt.k:f.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var g=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,g),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=s,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[i.bind(this)]}h.prototype.getValue=n,h.prototype.interpolateShape=e,h.prototype.setVValue=a,h.prototype.addEffect=o;var u=function(){var p=roundCorner;function f(c,g){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=g.d,this.elem=c,this.comp=c.comp,this.frameId=-1,this.initDynamicPropertyContainer(c),this.p=PropertyFactory.getProp(c,g.p,1,0,this),this.s=PropertyFactory.getProp(c,g.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return f.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var g=this.p.v[0],C=this.p.v[1],k=this.s.v[0]/2,T=this.s.v[1]/2,E=this.d!==3,A=this.v;A.v[0][0]=g,A.v[0][1]=C-T,A.v[1][0]=E?g+k:g-k,A.v[1][1]=C,A.v[2][0]=g,A.v[2][1]=C+T,A.v[3][0]=E?g-k:g+k,A.v[3][1]=C,A.i[0][0]=E?g-k*p:g+k*p,A.i[0][1]=C-T,A.i[1][0]=E?g+k:g-k,A.i[1][1]=C-T*p,A.i[2][0]=E?g+k*p:g-k*p,A.i[2][1]=C+T,A.i[3][0]=E?g-k:g+k,A.i[3][1]=C+T*p,A.o[0][0]=E?g+k*p:g-k*p,A.o[0][1]=C-T,A.o[1][0]=E?g+k:g-k,A.o[1][1]=C+T*p,A.o[2][0]=E?g-k*p:g+k*p,A.o[2][1]=C+T,A.o[3][0]=E?g-k:g+k,A.o[3][1]=C-T*p}},extendPrototype([DynamicPropertyContainer],f),f}(),S=function(){function p(f,c){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=f,this.comp=f.comp,this.data=c,this.frameId=-1,this.d=c.d,this.initDynamicPropertyContainer(f),c.sy===1?(this.ir=PropertyFactory.getProp(f,c.ir,0,0,this),this.is=PropertyFactory.getProp(f,c.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(f,c.pt,0,0,this),this.p=PropertyFactory.getProp(f,c.p,1,0,this),this.r=PropertyFactory.getProp(f,c.r,0,degToRads,this),this.or=PropertyFactory.getProp(f,c.or,0,0,this),this.os=PropertyFactory.getProp(f,c.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return p.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var c=Math.floor(this.pt.v)*2,g=Math.PI*2/c,C=!0,k=this.or.v,T=this.ir.v,E=this.os.v,A=this.is.v,R=2*Math.PI*k/(c*2),O=2*Math.PI*T/(c*2),F,V,B,I,x=-Math.PI/2;x+=this.r.v;var P=this.data.d===3?-1:1;for(this.v._length=0,F=0;F<c;F+=1){V=C?k:T,B=C?E:A,I=C?R:O;var v=V*Math.cos(x),b=V*Math.sin(x),M=v===0&&b===0?0:b/Math.sqrt(v*v+b*b),D=v===0&&b===0?0:-v/Math.sqrt(v*v+b*b);v+=+this.p.v[0],b+=+this.p.v[1],this.v.setTripleAt(v,b,v-M*I*B*P,b-D*I*B*P,v+M*I*B*P,b+D*I*B*P,F,!0),C=!C,x+=g*P}},convertPolygonToPath:function(){var c=Math.floor(this.pt.v),g=Math.PI*2/c,C=this.or.v,k=this.os.v,T=2*Math.PI*C/(c*4),E,A=-Math.PI*.5,R=this.data.d===3?-1:1;for(A+=this.r.v,this.v._length=0,E=0;E<c;E+=1){var O=C*Math.cos(A),F=C*Math.sin(A),V=O===0&&F===0?0:F/Math.sqrt(O*O+F*F),B=O===0&&F===0?0:-O/Math.sqrt(O*O+F*F);O+=+this.p.v[0],F+=+this.p.v[1],this.v.setTripleAt(O,F,O-V*T*k*R,F-B*T*k*R,O+V*T*k*R,F+B*T*k*R,E,!0),A+=g*R}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],p),p}(),d=function(){function p(f,c){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=f,this.comp=f.comp,this.frameId=-1,this.d=c.d,this.initDynamicPropertyContainer(f),this.p=PropertyFactory.getProp(f,c.p,1,0,this),this.s=PropertyFactory.getProp(f,c.s,1,0,this),this.r=PropertyFactory.getProp(f,c.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return p.prototype={convertRectToPath:function(){var c=this.p.v[0],g=this.p.v[1],C=this.s.v[0]/2,k=this.s.v[1]/2,T=bmMin(C,k,this.r.v),E=T*(1-roundCorner);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(c+C,g-k+T,c+C,g-k+T,c+C,g-k+E,0,!0),this.v.setTripleAt(c+C,g+k-T,c+C,g+k-E,c+C,g+k-T,1,!0),T!==0?(this.v.setTripleAt(c+C-T,g+k,c+C-T,g+k,c+C-E,g+k,2,!0),this.v.setTripleAt(c-C+T,g+k,c-C+E,g+k,c-C+T,g+k,3,!0),this.v.setTripleAt(c-C,g+k-T,c-C,g+k-T,c-C,g+k-E,4,!0),this.v.setTripleAt(c-C,g-k+T,c-C,g-k+E,c-C,g-k+T,5,!0),this.v.setTripleAt(c-C+T,g-k,c-C+T,g-k,c-C+E,g-k,6,!0),this.v.setTripleAt(c+C-T,g-k,c+C-E,g-k,c+C-T,g-k,7,!0)):(this.v.setTripleAt(c-C,g+k,c-C+E,g+k,c-C,g+k,2),this.v.setTripleAt(c-C,g-k,c-C,g-k+E,c-C,g-k,3))):(this.v.setTripleAt(c+C,g-k+T,c+C,g-k+E,c+C,g-k+T,0,!0),T!==0?(this.v.setTripleAt(c+C-T,g-k,c+C-T,g-k,c+C-E,g-k,1,!0),this.v.setTripleAt(c-C+T,g-k,c-C+E,g-k,c-C+T,g-k,2,!0),this.v.setTripleAt(c-C,g-k+T,c-C,g-k+T,c-C,g-k+E,3,!0),this.v.setTripleAt(c-C,g+k-T,c-C,g+k-E,c-C,g+k-T,4,!0),this.v.setTripleAt(c-C+T,g+k,c-C+T,g+k,c-C+E,g+k,5,!0),this.v.setTripleAt(c+C-T,g+k,c+C-E,g+k,c+C-T,g+k,6,!0),this.v.setTripleAt(c+C,g+k-T,c+C,g+k-T,c+C,g+k-E,7,!0)):(this.v.setTripleAt(c-C,g-k,c-C+E,g-k,c-C,g-k,1,!0),this.v.setTripleAt(c-C,g+k,c-C,g+k-E,c-C,g+k,2,!0),this.v.setTripleAt(c+C,g+k,c+C-E,g+k,c+C,g+k,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:s},extendPrototype([DynamicPropertyContainer],p),p}();function _(p,f,c){var g;if(c===3||c===4){var C=c===3?f.pt:f.ks,k=C.k;k.length?g=new h(p,f,c):g=new l(p,f,c)}else c===5?g=new d(p,f):c===6?g=new u(p,f):c===7&&(g=new S(p,f));return g.k&&p.addDynamicProperty(g),g}function y(){return l}function m(){return h}var w={};return w.getShapeProp=_,w.getConstructorFunction=y,w.getKeyframedConstructorFunction=m,w}();/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */var Matrix=function(){var t=Math.cos,e=Math.sin,i=Math.tan,s=Math.round;function r(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(v){if(v===0)return this;var b=t(v),M=e(v);return this._t(b,-M,0,0,M,b,0,0,0,0,1,0,0,0,0,1)}function n(v){if(v===0)return this;var b=t(v),M=e(v);return this._t(1,0,0,0,0,b,-M,0,0,M,b,0,0,0,0,1)}function l(v){if(v===0)return this;var b=t(v),M=e(v);return this._t(b,0,M,0,0,1,0,0,-M,0,b,0,0,0,0,1)}function o(v){if(v===0)return this;var b=t(v),M=e(v);return this._t(b,-M,0,0,M,b,0,0,0,0,1,0,0,0,0,1)}function h(v,b){return this._t(1,b,v,1,0,0)}function u(v,b){return this.shear(i(v),i(b))}function S(v,b){var M=t(b),D=e(b);return this._t(M,D,0,0,-D,M,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,i(v),1,0,0,0,0,1,0,0,0,0,1)._t(M,-D,0,0,D,M,0,0,0,0,1,0,0,0,0,1)}function d(v,b,M){return!M&&M!==0&&(M=1),v===1&&b===1&&M===1?this:this._t(v,0,0,0,0,b,0,0,0,0,M,0,0,0,0,1)}function _(v,b,M,D,j,q,H,U,W,X,tt,nt,et,Y,st,J){return this.props[0]=v,this.props[1]=b,this.props[2]=M,this.props[3]=D,this.props[4]=j,this.props[5]=q,this.props[6]=H,this.props[7]=U,this.props[8]=W,this.props[9]=X,this.props[10]=tt,this.props[11]=nt,this.props[12]=et,this.props[13]=Y,this.props[14]=st,this.props[15]=J,this}function y(v,b,M){return M=M||0,v!==0||b!==0||M!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,v,b,M,1):this}function m(v,b,M,D,j,q,H,U,W,X,tt,nt,et,Y,st,J){var N=this.props;if(v===1&&b===0&&M===0&&D===0&&j===0&&q===1&&H===0&&U===0&&W===0&&X===0&&tt===1&&nt===0)return N[12]=N[12]*v+N[15]*et,N[13]=N[13]*q+N[15]*Y,N[14]=N[14]*tt+N[15]*st,N[15]*=J,this._identityCalculated=!1,this;var lt=N[0],pt=N[1],ht=N[2],ot=N[3],ct=N[4],dt=N[5],it=N[6],ut=N[7],ft=N[8],rt=N[9],mt=N[10],at=N[11],vt=N[12],bt=N[13],St=N[14],Ct=N[15];return N[0]=lt*v+pt*j+ht*W+ot*et,N[1]=lt*b+pt*q+ht*X+ot*Y,N[2]=lt*M+pt*H+ht*tt+ot*st,N[3]=lt*D+pt*U+ht*nt+ot*J,N[4]=ct*v+dt*j+it*W+ut*et,N[5]=ct*b+dt*q+it*X+ut*Y,N[6]=ct*M+dt*H+it*tt+ut*st,N[7]=ct*D+dt*U+it*nt+ut*J,N[8]=ft*v+rt*j+mt*W+at*et,N[9]=ft*b+rt*q+mt*X+at*Y,N[10]=ft*M+rt*H+mt*tt+at*st,N[11]=ft*D+rt*U+mt*nt+at*J,N[12]=vt*v+bt*j+St*W+Ct*et,N[13]=vt*b+bt*q+St*X+Ct*Y,N[14]=vt*M+bt*H+St*tt+Ct*st,N[15]=vt*D+bt*U+St*nt+Ct*J,this._identityCalculated=!1,this}function w(v){var b=v.props;return this.transform(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14],b[15])}function p(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function f(v){for(var b=0;b<16;){if(v.props[b]!==this.props[b])return!1;b+=1}return!0}function c(v){var b;for(b=0;b<16;b+=1)v.props[b]=this.props[b];return v}function g(v){var b;for(b=0;b<16;b+=1)this.props[b]=v[b]}function C(v,b,M){return{x:v*this.props[0]+b*this.props[4]+M*this.props[8]+this.props[12],y:v*this.props[1]+b*this.props[5]+M*this.props[9]+this.props[13],z:v*this.props[2]+b*this.props[6]+M*this.props[10]+this.props[14]}}function k(v,b,M){return v*this.props[0]+b*this.props[4]+M*this.props[8]+this.props[12]}function T(v,b,M){return v*this.props[1]+b*this.props[5]+M*this.props[9]+this.props[13]}function E(v,b,M){return v*this.props[2]+b*this.props[6]+M*this.props[10]+this.props[14]}function A(){var v=this.props[0]*this.props[5]-this.props[1]*this.props[4],b=this.props[5]/v,M=-this.props[1]/v,D=-this.props[4]/v,j=this.props[0]/v,q=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/v,H=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/v,U=new Matrix;return U.props[0]=b,U.props[1]=M,U.props[4]=D,U.props[5]=j,U.props[12]=q,U.props[13]=H,U}function R(v){var b=this.getInverseMatrix();return b.applyToPointArray(v[0],v[1],v[2]||0)}function O(v){var b,M=v.length,D=[];for(b=0;b<M;b+=1)D[b]=R(v[b]);return D}function F(v,b,M){var D=createTypedArray("float32",6);if(this.isIdentity())D[0]=v[0],D[1]=v[1],D[2]=b[0],D[3]=b[1],D[4]=M[0],D[5]=M[1];else{var j=this.props[0],q=this.props[1],H=this.props[4],U=this.props[5],W=this.props[12],X=this.props[13];D[0]=v[0]*j+v[1]*H+W,D[1]=v[0]*q+v[1]*U+X,D[2]=b[0]*j+b[1]*H+W,D[3]=b[0]*q+b[1]*U+X,D[4]=M[0]*j+M[1]*H+W,D[5]=M[0]*q+M[1]*U+X}return D}function V(v,b,M){var D;return this.isIdentity()?D=[v,b,M]:D=[v*this.props[0]+b*this.props[4]+M*this.props[8]+this.props[12],v*this.props[1]+b*this.props[5]+M*this.props[9]+this.props[13],v*this.props[2]+b*this.props[6]+M*this.props[10]+this.props[14]],D}function B(v,b){if(this.isIdentity())return v+","+b;var M=this.props;return Math.round((v*M[0]+b*M[4]+M[12])*100)/100+","+Math.round((v*M[1]+b*M[5]+M[13])*100)/100}function I(){for(var v=0,b=this.props,M="matrix3d(",D=1e4;v<16;)M+=s(b[v]*D)/D,M+=v===15?")":",",v+=1;return M}function x(v){var b=1e4;return v<1e-6&&v>0||v>-1e-6&&v<0?s(v*b)/b:v}function P(){var v=this.props,b=x(v[0]),M=x(v[1]),D=x(v[4]),j=x(v[5]),q=x(v[12]),H=x(v[13]);return"matrix("+b+","+M+","+D+","+j+","+q+","+H+")"}return function(){this.reset=r,this.rotate=a,this.rotateX=n,this.rotateY=l,this.rotateZ=o,this.skew=u,this.skewFromAxis=S,this.shear=h,this.scale=d,this.setTransform=_,this.translate=y,this.transform=m,this.multiply=w,this.applyToPoint=C,this.applyToX=k,this.applyToY=T,this.applyToZ=E,this.applyToPointArray=V,this.applyToTriplePoints=F,this.applyToPointStringified=B,this.toCSS=I,this.to2dCSS=P,this.clone=c,this.cloneFromProps=g,this.equals=f,this.inversePoints=O,this.inversePoint=R,this.getInverseMatrix=A,this._t=this.transform,this.isIdentity=p,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();function _typeof$3(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$3=function(i){return typeof i}:_typeof$3=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof$3(t)}var lottie={};function setLocation(t){setLocationHref(t)}function searchAnimations(){animationManager.searchAnimations()}function setSubframeRendering(t){setSubframeEnabled(t)}function setPrefix(t){setIdPrefix(t)}function loadAnimation(t){return animationManager.loadAnimation(t)}function setQuality(t){if(typeof t=="string")switch(t){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10);break}else!isNaN(t)&&t>1&&setDefaultCurveSegments(t)}function inBrowser(){return typeof navigator<"u"}function installPlugin(t,e){t==="expressions"&&setExpressionsPlugin(e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocation,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=setWebWorker,lottie.setIDPrefix=setPrefix,lottie.__getFactory=getFactory,lottie.version="5.12.2";function checkReady(){document.readyState==="complete"&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),i=0;i<e.length;i+=1){var s=e[i].split("=");if(decodeURIComponent(s[0])==t)return decodeURIComponent(s[1])}return null}var queryString="";{var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src?myScript.src.replace(/^[^\?]+\??/,""):"",getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);try{_typeof$3(exports)!=="object"&&(window.bodymovin=lottie)}catch(t){}var ShapeModifiers=function(){var t={},e={};t.registerModifier=i,t.getModifier=s;function i(r,a){e[r]||(e[r]=a)}function s(r,a,n){return new e[r](a,n)}return t}();function ShapeModifier(){}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier);function TrimModifier(){}extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,i,s,r){var a=[];e<=1?a.push({s:t,e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n=[],l,o=a.length,h;for(l=0;l<o;l+=1)if(h=a[l],!(h.e*r<s||h.s*r>s+i)){var u,S;h.s*r<=s?u=0:u=(h.s*r-s)/i,h.e*r>=s+i?S=1:S=(h.e*r-s)/i,n.push([u,S])}return n.length||n.push([0,0]),n},TrimModifier.prototype.releasePathsData=function(t){var e,i=t.length;for(e=0;e<i;e+=1)segmentsLengthPool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),this.s.v>1?e=1+s:this.s.v<0?e=0+s:e=this.s.v+s,this.e.v>1?i=1+s:this.e.v<0?i=0+s:i=this.e.v+s,e>i){var r=e;e=i,i=r}e=Math.round(e*1e4)*1e-4,i=Math.round(i*1e4)*1e-4,this.sValue=e,this.eValue=i}else e=this.sValue,i=this.eValue;var a,n,l=this.shapes.length,o,h,u,S,d,_=0;if(i===e)for(n=0;n<l;n+=1)this.shapes[n].localShapeCollection.releaseShapes(),this.shapes[n].shape._mdf=!0,this.shapes[n].shape.paths=this.shapes[n].localShapeCollection,this._mdf&&(this.shapes[n].pathsData.length=0);else if(i===1&&e===0||i===0&&e===1){if(this._mdf)for(n=0;n<l;n+=1)this.shapes[n].pathsData.length=0,this.shapes[n].shape._mdf=!0}else{var y=[],m,w;for(n=0;n<l;n+=1)if(m=this.shapes[n],!m.shape._mdf&&!this._mdf&&!t&&this.m!==2)m.shape.paths=m.localShapeCollection;else{if(a=m.shape.paths,h=a._length,d=0,!m.shape._mdf&&m.pathsData.length)d=m.totalShapeLength;else{for(u=this.releasePathsData(m.pathsData),o=0;o<h;o+=1)S=bez.getSegmentsLength(a.shapes[o]),u.push(S),d+=S.totalLength;m.totalShapeLength=d,m.pathsData=u}_+=d,m.shape._mdf=!0}var p=e,f=i,c=0,g;for(n=l-1;n>=0;n-=1)if(m=this.shapes[n],m.shape._mdf){for(w=m.localShapeCollection,w.releaseShapes(),this.m===2&&l>1?(g=this.calculateShapeEdges(e,i,m.totalShapeLength,c,_),c+=m.totalShapeLength):g=[[p,f]],h=g.length,o=0;o<h;o+=1){p=g[o][0],f=g[o][1],y.length=0,f<=1?y.push({s:m.totalShapeLength*p,e:m.totalShapeLength*f}):p>=1?y.push({s:m.totalShapeLength*(p-1),e:m.totalShapeLength*(f-1)}):(y.push({s:m.totalShapeLength*p,e:m.totalShapeLength}),y.push({s:0,e:m.totalShapeLength*(f-1)}));var C=this.addShapes(m,y[0]);if(y[0].s!==y[0].e){if(y.length>1){var k=m.shape.paths.shapes[m.shape.paths._length-1];if(k.c){var T=C.pop();this.addPaths(C,w),C=this.addShapes(m,y[1],T)}else this.addPaths(C,w),C=this.addShapes(m,y[1])}this.addPaths(C,w)}}m.shape.paths=w}}},TrimModifier.prototype.addPaths=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)e.addShape(t[i])},TrimModifier.prototype.addSegment=function(t,e,i,s,r,a,n){r.setXYAt(e[0],e[1],"o",a),r.setXYAt(i[0],i[1],"i",a+1),n&&r.setXYAt(t[0],t[1],"v",a),r.setXYAt(s[0],s[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,i,s){e.setXYAt(t[1],t[5],"o",i),e.setXYAt(t[2],t[6],"i",i+1),s&&e.setXYAt(t[0],t[4],"v",i),e.setXYAt(t[3],t[7],"v",i+1)},TrimModifier.prototype.addShapes=function(t,e,i){var s=t.pathsData,r=t.shape.paths.shapes,a,n=t.shape.paths._length,l,o,h=0,u,S,d,_,y=[],m,w=!0;for(i?(S=i._length,m=i._length):(i=shapePool.newElement(),S=0,m=0),y.push(i),a=0;a<n;a+=1){for(d=s[a].lengths,i.c=r[a].c,o=r[a].c?d.length:d.length+1,l=1;l<o;l+=1)if(u=d[l-1],h+u.addedLength<e.s)h+=u.addedLength,i.c=!1;else if(h>e.e){i.c=!1;break}else e.s<=h&&e.e>=h+u.addedLength?(this.addSegment(r[a].v[l-1],r[a].o[l-1],r[a].i[l],r[a].v[l],i,S,w),w=!1):(_=bez.getNewSegment(r[a].v[l-1],r[a].v[l],r[a].o[l-1],r[a].i[l],(e.s-h)/u.addedLength,(e.e-h)/u.addedLength,d[l-1]),this.addSegmentFromArray(_,i,S,w),w=!1,i.c=!1),h+=u.addedLength,S+=1;if(r[a].c&&d.length){if(u=d[l-1],h<=e.e){var p=d[l-1].addedLength;e.s<=h&&e.e>=h+p?(this.addSegment(r[a].v[l-1],r[a].o[l-1],r[a].i[0],r[a].v[0],i,S,w),w=!1):(_=bez.getNewSegment(r[a].v[l-1],r[a].v[0],r[a].o[l-1],r[a].i[0],(e.s-h)/p,(e.e-h)/p,d[l-1]),this.addSegmentFromArray(_,i,S,w),w=!1,i.c=!1)}else i.c=!1;h+=u.addedLength,S+=1}if(i._length&&(i.setXYAt(i.v[m][0],i.v[m][1],"i",m),i.setXYAt(i.v[i._length-1][0],i.v[i._length-1][1],"o",i._length-1)),h>e.e)break;a<n-1&&(i=shapePool.newElement(),w=!0,y.push(i),S=0)}return y};function PuckerAndBloatModifier(){}extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(t,e){var i=e/100,s=[0,0],r=t._length,a=0;for(a=0;a<r;a+=1)s[0]+=t.v[a][0],s[1]+=t.v[a][1];s[0]/=r,s[1]/=r;var n=shapePool.newElement();n.c=t.c;var l,o,h,u,S,d;for(a=0;a<r;a+=1)l=t.v[a][0]+(s[0]-t.v[a][0])*i,o=t.v[a][1]+(s[1]-t.v[a][1])*i,h=t.o[a][0]+(s[0]-t.o[a][0])*-i,u=t.o[a][1]+(s[1]-t.o[a][1])*-i,S=t.i[a][0]+(s[0]-t.i[a][0])*-i,d=t.i[a][1]+(s[1]-t.i[a][1])*-i,n.setTripleAt(l,o,h,u,S,d,a);return n},PuckerAndBloatModifier.prototype.processShapes=function(t){var e,i,s=this.shapes.length,r,a,n=this.amount.v;if(n!==0){var l,o;for(i=0;i<s;i+=1){if(l=this.shapes[i],o=l.localShapeCollection,!(!l.shape._mdf&&!this._mdf&&!t))for(o.releaseShapes(),l.shape._mdf=!0,e=l.shape.paths.shapes,a=l.shape.paths._length,r=0;r<a;r+=1)o.addShape(this.processPath(e[r],n));l.shape.paths=l.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var TransformPropertyFactory=function(){var t=[0,0];function e(o){var h=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||h,this.a&&o.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&o.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&o.skewFromAxis(-this.sk.v,this.sa.v),this.r?o.rotate(-this.r.v):o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?o.translate(this.px.v,this.py.v,-this.pz.v):o.translate(this.px.v,this.py.v,0):o.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function i(o){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||o){var h;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var u,S;if(h=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(u=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/h,0),S=this.p.getValueAtTime(this.p.keyframes[0].t/h,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(u=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/h,0),S=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/h,0)):(u=this.p.pv,S=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/h,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){u=[],S=[];var d=this.px,_=this.py;d._caching.lastFrame+d.offsetTime<=d.keyframes[0].t?(u[0]=d.getValueAtTime((d.keyframes[0].t+.01)/h,0),u[1]=_.getValueAtTime((_.keyframes[0].t+.01)/h,0),S[0]=d.getValueAtTime(d.keyframes[0].t/h,0),S[1]=_.getValueAtTime(_.keyframes[0].t/h,0)):d._caching.lastFrame+d.offsetTime>=d.keyframes[d.keyframes.length-1].t?(u[0]=d.getValueAtTime(d.keyframes[d.keyframes.length-1].t/h,0),u[1]=_.getValueAtTime(_.keyframes[_.keyframes.length-1].t/h,0),S[0]=d.getValueAtTime((d.keyframes[d.keyframes.length-1].t-.01)/h,0),S[1]=_.getValueAtTime((_.keyframes[_.keyframes.length-1].t-.01)/h,0)):(u=[d.pv,_.pv],S[0]=d.getValueAtTime((d._caching.lastFrame+d.offsetTime-.01)/h,d.offsetTime),S[1]=_.getValueAtTime((_._caching.lastFrame+_.offsetTime-.01)/h,_.offsetTime))}else S=t,u=S;this.v.rotate(-Math.atan2(u[1]-S[1],u[0]-S[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function s(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function r(){}function a(o){this._addDynamicProperty(o),this.elem.addDynamicProperty(o),this._isDirty=!0}function n(o,h,u){if(this.elem=o,this.frameId=-1,this.propType="transform",this.data=h,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(u||o),h.p&&h.p.s?(this.px=PropertyFactory.getProp(o,h.p.x,0,0,this),this.py=PropertyFactory.getProp(o,h.p.y,0,0,this),h.p.z&&(this.pz=PropertyFactory.getProp(o,h.p.z,0,0,this))):this.p=PropertyFactory.getProp(o,h.p||{k:[0,0,0]},1,0,this),h.rx){if(this.rx=PropertyFactory.getProp(o,h.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(o,h.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(o,h.rz,0,degToRads,this),h.or.k[0].ti){var S,d=h.or.k.length;for(S=0;S<d;S+=1)h.or.k[S].to=null,h.or.k[S].ti=null}this.or=PropertyFactory.getProp(o,h.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(o,h.r||{k:0},0,degToRads,this);h.sk&&(this.sk=PropertyFactory.getProp(o,h.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(o,h.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(o,h.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(o,h.s||{k:[100,100,100]},1,.01,this),h.o?this.o=PropertyFactory.getProp(o,h.o,0,.01,o):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}n.prototype={applyToMatrix:e,getValue:i,precalculateMatrix:s,autoOrient:r},extendPrototype([DynamicPropertyContainer],n),n.prototype.addDynamicProperty=a,n.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty;function l(o,h,u){return new n(o,h,u)}return{getTransformProperty:l}}();function RepeaterModifier(){}extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,i,s,r,a){var n=a?-1:1,l=s.s.v[0]+(1-s.s.v[0])*(1-r),o=s.s.v[1]+(1-s.s.v[1])*(1-r);t.translate(s.p.v[0]*n*r,s.p.v[1]*n*r,s.p.v[2]),e.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),e.rotate(-s.r.v*n*r),e.translate(s.a.v[0],s.a.v[1],s.a.v[2]),i.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),i.scale(a?1/l:l,a?1/o:o),i.translate(s.a.v[0],s.a.v[1],s.a.v[2])},RepeaterModifier.prototype.init=function(t,e,i,s){for(this.elem=t,this.arr=e,this.pos=i,this.elemsData=s,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[i]);i>0;)i-=1,this._elements.unshift(e[i]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)t[i]._render=e,t[i].ty==="gr"&&this.changeGroupRender(t[i].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,i,s,r,a,n=!1;if(this._mdf||t){var l=Math.ceil(this.c.v);if(this._groups.length<l){for(;this._groups.length<l;){var o={it:this.cloneElements(this._elements),ty:"gr"};o.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,o),this._groups.splice(0,0,o),this._currentCopies+=1}this.elem.reloadShapes(),n=!0}a=0;var h;for(s=0;s<=this._groups.length-1;s+=1){if(h=a<l,this._groups[s]._render=h,this.changeGroupRender(this._groups[s].it,h),!h){var u=this.elemsData[s].it,S=u[u.length-1];S.transform.op.v!==0?(S.transform.op._mdf=!0,S.transform.op.v=0):S.transform.op._mdf=!1}a+=1}this._currentCopies=l;var d=this.o.v,_=d%1,y=d>0?Math.floor(d):Math.ceil(d),m=this.pMatrix.props,w=this.rMatrix.props,p=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var f=0;if(d>0){for(;f<y;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),f+=1;_&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,_,!1),f+=_)}else if(d<0){for(;f>y;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),f-=1;_&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-_,!0),f-=_)}s=this.data.m===1?0:this._currentCopies-1,r=this.data.m===1?1:-1,a=this._currentCopies;for(var c,g;a;){if(e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,g=i.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(s/(this._currentCopies-1)),f!==0){for((s!==0&&r===1||s!==this._currentCopies-1&&r===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(w[0],w[1],w[2],w[3],w[4],w[5],w[6],w[7],w[8],w[9],w[10],w[11],w[12],w[13],w[14],w[15]),this.matrix.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15]),this.matrix.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),c=0;c<g;c+=1)i[c]=this.matrix.props[c];this.matrix.reset()}else for(this.matrix.reset(),c=0;c<g;c+=1)i[c]=this.matrix.props[c];f+=1,a-=1,s+=r}}else for(a=this._currentCopies,s=0,r=1;a;)e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,s+=r;return n},RepeaterModifier.prototype.addShape=function(){};function RoundCornersModifier(){}extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var i=shapePool.newElement();i.c=t.c;var s,r=t._length,a,n,l,o,h,u,S=0,d,_,y,m,w,p;for(s=0;s<r;s+=1)a=t.v[s],l=t.o[s],n=t.i[s],a[0]===l[0]&&a[1]===l[1]&&a[0]===n[0]&&a[1]===n[1]?(s===0||s===r-1)&&!t.c?(i.setTripleAt(a[0],a[1],l[0],l[1],n[0],n[1],S),S+=1):(s===0?o=t.v[r-1]:o=t.v[s-1],h=Math.sqrt(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)),u=h?Math.min(h/2,e)/h:0,w=a[0]+(o[0]-a[0])*u,d=w,p=a[1]-(a[1]-o[1])*u,_=p,y=d-(d-a[0])*roundCorner,m=_-(_-a[1])*roundCorner,i.setTripleAt(d,_,y,m,w,p,S),S+=1,s===r-1?o=t.v[0]:o=t.v[s+1],h=Math.sqrt(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)),u=h?Math.min(h/2,e)/h:0,y=a[0]+(o[0]-a[0])*u,d=y,m=a[1]+(o[1]-a[1])*u,_=m,w=d-(d-a[0])*roundCorner,p=_-(_-a[1])*roundCorner,i.setTripleAt(d,_,y,m,w,p,S),S+=1):(i.setTripleAt(t.v[s][0],t.v[s][1],t.o[s][0],t.o[s][1],t.i[s][0],t.i[s][1],S),S+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,i,s=this.shapes.length,r,a,n=this.rd.v;if(n!==0){var l,o;for(i=0;i<s;i+=1){if(l=this.shapes[i],o=l.localShapeCollection,!(!l.shape._mdf&&!this._mdf&&!t))for(o.releaseShapes(),l.shape._mdf=!0,e=l.shape.paths.shapes,a=l.shape.paths._length,r=0;r<a;r+=1)o.addShape(this.processPath(e[r],n));l.shape.paths=l.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function floatEqual(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function floatZero(t){return Math.abs(t)<=1e-5}function lerp(t,e,i){return t*(1-i)+e*i}function lerpPoint(t,e,i){return[lerp(t[0],e[0],i),lerp(t[1],e[1],i)]}function quadRoots(t,e,i){if(t===0)return[];var s=e*e-4*t*i;if(s<0)return[];var r=-e/(2*t);if(s===0)return[r];var a=Math.sqrt(s)/(2*t);return[r-a,r+a]}function polynomialCoefficients(t,e,i,s){return[-t+3*e-3*i+s,3*t-6*e+3*i,-3*t+3*e,t]}function singlePoint(t){return new PolynomialBezier(t,t,t,t,!1)}function PolynomialBezier(t,e,i,s,r){r&&pointEqual(t,e)&&(e=lerpPoint(t,s,1/3)),r&&pointEqual(i,s)&&(i=lerpPoint(t,s,2/3));var a=polynomialCoefficients(t[0],e[0],i[0],s[0]),n=polynomialCoefficients(t[1],e[1],i[1],s[1]);this.a=[a[0],n[0]],this.b=[a[1],n[1]],this.c=[a[2],n[2]],this.d=[a[3],n[3]],this.points=[t,e,i,s]}PolynomialBezier.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},PolynomialBezier.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},PolynomialBezier.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},PolynomialBezier.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},PolynomialBezier.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(floatZero(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,i=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(i<0)return[];var s=Math.sqrt(i);return floatZero(s)?s>0&&s<1?[e]:[]:[e-s,e+s].filter(function(r){return r>0&&r<1})},PolynomialBezier.prototype.split=function(t){if(t<=0)return[singlePoint(this.points[0]),this];if(t>=1)return[this,singlePoint(this.points[this.points.length-1])];var e=lerpPoint(this.points[0],this.points[1],t),i=lerpPoint(this.points[1],this.points[2],t),s=lerpPoint(this.points[2],this.points[3],t),r=lerpPoint(e,i,t),a=lerpPoint(i,s,t),n=lerpPoint(r,a,t);return[new PolynomialBezier(this.points[0],e,r,n,!0),new PolynomialBezier(n,a,s,this.points[3],!0)]};function extrema(t,e){var i=t.points[0][e],s=t.points[t.points.length-1][e];if(i>s){var r=s;s=i,i=r}for(var a=quadRoots(3*t.a[e],2*t.b[e],t.c[e]),n=0;n<a.length;n+=1)if(a[n]>0&&a[n]<1){var l=t.point(a[n])[e];l<i?i=l:l>s&&(s=l)}return{min:i,max:s}}PolynomialBezier.prototype.bounds=function(){return{x:extrema(this,0),y:extrema(this,1)}},PolynomialBezier.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function intersectData(t,e,i){var s=t.boundingBox();return{cx:s.cx,cy:s.cy,width:s.width,height:s.height,bez:t,t:(e+i)/2,t1:e,t2:i}}function splitData(t){var e=t.bez.split(.5);return[intersectData(e[0],t.t1,t.t),intersectData(e[1],t.t,t.t2)]}function boxIntersect(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function intersectsImpl(t,e,i,s,r,a){if(boxIntersect(t,e)){if(i>=a||t.width<=s&&t.height<=s&&e.width<=s&&e.height<=s){r.push([t.t,e.t]);return}var n=splitData(t),l=splitData(e);intersectsImpl(n[0],l[0],i+1,s,r,a),intersectsImpl(n[0],l[1],i+1,s,r,a),intersectsImpl(n[1],l[0],i+1,s,r,a),intersectsImpl(n[1],l[1],i+1,s,r,a)}}PolynomialBezier.prototype.intersections=function(t,e,i){e===void 0&&(e=2),i===void 0&&(i=7);var s=[];return intersectsImpl(intersectData(this,0,1),intersectData(t,0,1),0,e,s,i),s},PolynomialBezier.shapeSegment=function(t,e){var i=(e+1)%t.length();return new PolynomialBezier(t.v[e],t.o[e],t.i[i],t.v[i],!0)},PolynomialBezier.shapeSegmentInverted=function(t,e){var i=(e+1)%t.length();return new PolynomialBezier(t.v[i],t.i[i],t.o[e],t.v[e],!0)};function crossProduct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function lineIntersection(t,e,i,s){var r=[t[0],t[1],1],a=[e[0],e[1],1],n=[i[0],i[1],1],l=[s[0],s[1],1],o=crossProduct(crossProduct(r,a),crossProduct(n,l));return floatZero(o[2])?null:[o[0]/o[2],o[1]/o[2]]}function polarOffset(t,e,i){return[t[0]+Math.cos(e)*i,t[1]-Math.sin(e)*i]}function pointDistance(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function pointEqual(t,e){return floatEqual(t[0],e[0])&&floatEqual(t[1],e[1])}function ZigZagModifier(){}extendPrototype([ShapeModifier],ZigZagModifier),ZigZagModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=PropertyFactory.getProp(t,e.s,0,null,this),this.frequency=PropertyFactory.getProp(t,e.r,0,null,this),this.pointsType=PropertyFactory.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function setPoint(t,e,i,s,r,a,n){var l=i-Math.PI/2,o=i+Math.PI/2,h=e[0]+Math.cos(i)*s*r,u=e[1]-Math.sin(i)*s*r;t.setTripleAt(h,u,h+Math.cos(l)*a,u-Math.sin(l)*a,h+Math.cos(o)*n,u-Math.sin(o)*n,t.length())}function getPerpendicularVector(t,e){var i=[e[0]-t[0],e[1]-t[1]],s=-Math.PI*.5,r=[Math.cos(s)*i[0]-Math.sin(s)*i[1],Math.sin(s)*i[0]+Math.cos(s)*i[1]];return r}function getProjectingAngle(t,e){var i=e===0?t.length()-1:e-1,s=(e+1)%t.length(),r=t.v[i],a=t.v[s],n=getPerpendicularVector(r,a);return Math.atan2(0,1)-Math.atan2(n[1],n[0])}function zigZagCorner(t,e,i,s,r,a,n){var l=getProjectingAngle(e,i),o=e.v[i%e._length],h=e.v[i===0?e._length-1:i-1],u=e.v[(i+1)%e._length],S=a===2?Math.sqrt(Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)):0,d=a===2?Math.sqrt(Math.pow(o[0]-u[0],2)+Math.pow(o[1]-u[1],2)):0;setPoint(t,e.v[i%e._length],l,n,s,d/((r+1)*2),S/((r+1)*2))}function zigZagSegment(t,e,i,s,r,a){for(var n=0;n<s;n+=1){var l=(n+1)/(s+1),o=r===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,h=e.normalAngle(l),u=e.point(l);setPoint(t,u,h,a,i,o/((s+1)*2),o/((s+1)*2)),a=-a}return a}ZigZagModifier.prototype.processPath=function(t,e,i,s){var r=t._length,a=shapePool.newElement();if(a.c=t.c,t.c||(r-=1),r===0)return a;var n=-1,l=PolynomialBezier.shapeSegment(t,0);zigZagCorner(a,t,0,e,i,s,n);for(var o=0;o<r;o+=1)n=zigZagSegment(a,l,e,i,s,-n),o===r-1&&!t.c?l=null:l=PolynomialBezier.shapeSegment(t,(o+1)%r),zigZagCorner(a,t,o+1,e,i,s,n);return a},ZigZagModifier.prototype.processShapes=function(t){var e,i,s=this.shapes.length,r,a,n=this.amplitude.v,l=Math.max(0,Math.round(this.frequency.v)),o=this.pointsType.v;if(n!==0){var h,u;for(i=0;i<s;i+=1){if(h=this.shapes[i],u=h.localShapeCollection,!(!h.shape._mdf&&!this._mdf&&!t))for(u.releaseShapes(),h.shape._mdf=!0,e=h.shape.paths.shapes,a=h.shape.paths._length,r=0;r<a;r+=1)u.addShape(this.processPath(e[r],n,l,o));h.shape.paths=h.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function linearOffset(t,e,i){var s=Math.atan2(e[0]-t[0],e[1]-t[1]);return[polarOffset(t,s,i),polarOffset(e,s,i)]}function offsetSegment(t,e){var i,s,r,a,n,l,o;o=linearOffset(t.points[0],t.points[1],e),i=o[0],s=o[1],o=linearOffset(t.points[1],t.points[2],e),r=o[0],a=o[1],o=linearOffset(t.points[2],t.points[3],e),n=o[0],l=o[1];var h=lineIntersection(i,s,r,a);h===null&&(h=s);var u=lineIntersection(n,l,r,a);return u===null&&(u=n),new PolynomialBezier(i,h,u,l)}function joinLines(t,e,i,s,r){var a=e.points[3],n=i.points[0];if(s===3||pointEqual(a,n))return a;if(s===2){var l=-e.tangentAngle(1),o=-i.tangentAngle(0)+Math.PI,h=lineIntersection(a,polarOffset(a,l+Math.PI/2,100),n,polarOffset(n,l+Math.PI/2,100)),u=h?pointDistance(h,a):pointDistance(a,n)/2,S=polarOffset(a,l,2*u*roundCorner);return t.setXYAt(S[0],S[1],"o",t.length()-1),S=polarOffset(n,o,2*u*roundCorner),t.setTripleAt(n[0],n[1],n[0],n[1],S[0],S[1],t.length()),n}var d=pointEqual(a,e.points[2])?e.points[0]:e.points[2],_=pointEqual(n,i.points[1])?i.points[3]:i.points[1],y=lineIntersection(d,a,n,_);return y&&pointDistance(y,a)<r?(t.setTripleAt(y[0],y[1],y[0],y[1],y[0],y[1],t.length()),y):a}function getIntersection(t,e){var i=t.intersections(e);return i.length&&floatEqual(i[0][0],1)&&i.shift(),i.length?i[0]:null}function pruneSegmentIntersection(t,e){var i=t.slice(),s=e.slice(),r=getIntersection(t[t.length-1],e[0]);return r&&(i[t.length-1]=t[t.length-1].split(r[0])[0],s[0]=e[0].split(r[1])[1]),t.length>1&&e.length>1&&(r=getIntersection(t[0],e[e.length-1]),r)?[[t[0].split(r[0])[0]],[e[e.length-1].split(r[1])[1]]]:[i,s]}function pruneIntersections(t){for(var e,i=1;i<t.length;i+=1)e=pruneSegmentIntersection(t[i-1],t[i]),t[i-1]=e[0],t[i]=e[1];return t.length>1&&(e=pruneSegmentIntersection(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function offsetSegmentSplit(t,e){var i=t.inflectionPoints(),s,r,a,n;if(i.length===0)return[offsetSegment(t,e)];if(i.length===1||floatEqual(i[1],1))return a=t.split(i[0]),s=a[0],r=a[1],[offsetSegment(s,e),offsetSegment(r,e)];a=t.split(i[0]),s=a[0];var l=(i[1]-i[0])/(1-i[0]);return a=a[1].split(l),n=a[0],r=a[1],[offsetSegment(s,e),offsetSegment(n,e),offsetSegment(r,e)]}function OffsetPathModifier(){}extendPrototype([ShapeModifier],OffsetPathModifier),OffsetPathModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this.miterLimit=PropertyFactory.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},OffsetPathModifier.prototype.processPath=function(t,e,i,s){var r=shapePool.newElement();r.c=t.c;var a=t.length();t.c||(a-=1);var n,l,o,h=[];for(n=0;n<a;n+=1)o=PolynomialBezier.shapeSegment(t,n),h.push(offsetSegmentSplit(o,e));if(!t.c)for(n=a-1;n>=0;n-=1)o=PolynomialBezier.shapeSegmentInverted(t,n),h.push(offsetSegmentSplit(o,e));h=pruneIntersections(h);var u=null,S=null;for(n=0;n<h.length;n+=1){var d=h[n];for(S&&(u=joinLines(r,S,d[0],i,s)),S=d[d.length-1],l=0;l<d.length;l+=1)o=d[l],u&&pointEqual(o.points[0],u)?r.setXYAt(o.points[1][0],o.points[1][1],"o",r.length()-1):r.setTripleAt(o.points[0][0],o.points[0][1],o.points[1][0],o.points[1][1],o.points[0][0],o.points[0][1],r.length()),r.setTripleAt(o.points[3][0],o.points[3][1],o.points[3][0],o.points[3][1],o.points[2][0],o.points[2][1],r.length()),u=o.points[3]}return h.length&&joinLines(r,S,h[0][0],i,s),r},OffsetPathModifier.prototype.processShapes=function(t){var e,i,s=this.shapes.length,r,a,n=this.amount.v,l=this.miterLimit.v,o=this.lineJoin;if(n!==0){var h,u;for(i=0;i<s;i+=1){if(h=this.shapes[i],u=h.localShapeCollection,!(!h.shape._mdf&&!this._mdf&&!t))for(u.releaseShapes(),h.shape._mdf=!0,e=h.shape.paths.shapes,a=h.shape.paths._length,r=0;r<a;r+=1)u.addShape(this.processPath(e[r],n,o,l));h.shape.paths=h.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],i="normal",s="normal",r=e.length,a,n=0;n<r;n+=1)switch(a=e[n].toLowerCase(),a){case"italic":s="italic";break;case"bold":i="700";break;case"black":i="900";break;case"medium":i="500";break;case"regular":case"normal":i="400";break;case"light":case"thin":i="200";break}return{style:s,weight:t.fWeight||i}}var FontManager=function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},i=[];i=i.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var s=127988,r=917631,a=917601,n=917626,l=65039,o=8205,h=127462,u=127487,S=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function d(x){var P=x.split(","),v,b=P.length,M=[];for(v=0;v<b;v+=1)P[v]!=="sans-serif"&&P[v]!=="monospace"&&M.push(P[v]);return M.join(",")}function _(x,P){var v=createTag("span");v.setAttribute("aria-hidden",!0),v.style.fontFamily=P;var b=createTag("span");b.innerText="giItT1WQy@!-/#",v.style.position="absolute",v.style.left="-10000px",v.style.top="-10000px",v.style.fontSize="300px",v.style.fontVariant="normal",v.style.fontStyle="normal",v.style.fontWeight="normal",v.style.letterSpacing="0",v.appendChild(b),document.body.appendChild(v);var M=b.offsetWidth;return b.style.fontFamily=d(x)+", "+P,{node:b,w:M,parent:v}}function y(){var x,P=this.fonts.length,v,b,M=P;for(x=0;x<P;x+=1)this.fonts[x].loaded?M-=1:this.fonts[x].fOrigin==="n"||this.fonts[x].origin===0?this.fonts[x].loaded=!0:(v=this.fonts[x].monoCase.node,b=this.fonts[x].monoCase.w,v.offsetWidth!==b?(M-=1,this.fonts[x].loaded=!0):(v=this.fonts[x].sansCase.node,b=this.fonts[x].sansCase.w,v.offsetWidth!==b&&(M-=1,this.fonts[x].loaded=!0)),this.fonts[x].loaded&&(this.fonts[x].sansCase.parent.parentNode.removeChild(this.fonts[x].sansCase.parent),this.fonts[x].monoCase.parent.parentNode.removeChild(this.fonts[x].monoCase.parent)));M!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function m(x,P){var v=document.body&&P?"svg":"canvas",b,M=getFontProperties(x);if(v==="svg"){var D=createNS("text");D.style.fontSize="100px",D.setAttribute("font-family",x.fFamily),D.setAttribute("font-style",M.style),D.setAttribute("font-weight",M.weight),D.textContent="1",x.fClass?(D.style.fontFamily="inherit",D.setAttribute("class",x.fClass)):D.style.fontFamily=x.fFamily,P.appendChild(D),b=D}else{var j=new OffscreenCanvas(500,500).getContext("2d");j.font=M.style+" "+M.weight+" 100px "+x.fFamily,b=j}function q(H){return v==="svg"?(b.textContent=H,b.getComputedTextLength()):b.measureText(H).width}return{measureText:q}}function w(x,P){if(!x){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=x.list;return}if(!document.body){this.isLoaded=!0,x.list.forEach(function(tt){tt.helper=m(tt),tt.cache={}}),this.fonts=x.list;return}var v=x.list,b,M=v.length,D=M;for(b=0;b<M;b+=1){var j=!0,q,H;if(v[b].loaded=!1,v[b].monoCase=_(v[b].fFamily,"monospace"),v[b].sansCase=_(v[b].fFamily,"sans-serif"),!v[b].fPath)v[b].loaded=!0,D-=1;else if(v[b].fOrigin==="p"||v[b].origin===3){if(q=document.querySelectorAll('style[f-forigin="p"][f-family="'+v[b].fFamily+'"], style[f-origin="3"][f-family="'+v[b].fFamily+'"]'),q.length>0&&(j=!1),j){var U=createTag("style");U.setAttribute("f-forigin",v[b].fOrigin),U.setAttribute("f-origin",v[b].origin),U.setAttribute("f-family",v[b].fFamily),U.type="text/css",U.innerText="@font-face {font-family: "+v[b].fFamily+"; font-style: normal; src: url('"+v[b].fPath+"');}",P.appendChild(U)}}else if(v[b].fOrigin==="g"||v[b].origin===1){for(q=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),H=0;H<q.length;H+=1)q[H].href.indexOf(v[b].fPath)!==-1&&(j=!1);if(j){var W=createTag("link");W.setAttribute("f-forigin",v[b].fOrigin),W.setAttribute("f-origin",v[b].origin),W.type="text/css",W.rel="stylesheet",W.href=v[b].fPath,document.body.appendChild(W)}}else if(v[b].fOrigin==="t"||v[b].origin===2){for(q=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),H=0;H<q.length;H+=1)v[b].fPath===q[H].src&&(j=!1);if(j){var X=createTag("link");X.setAttribute("f-forigin",v[b].fOrigin),X.setAttribute("f-origin",v[b].origin),X.setAttribute("rel","stylesheet"),X.setAttribute("href",v[b].fPath),P.appendChild(X)}}v[b].helper=m(v[b],P),v[b].cache={},this.fonts.push(v[b])}D===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function p(x){if(x){this.chars||(this.chars=[]);var P,v=x.length,b,M=this.chars.length,D;for(P=0;P<v;P+=1){for(b=0,D=!1;b<M;)this.chars[b].style===x[P].style&&this.chars[b].fFamily===x[P].fFamily&&this.chars[b].ch===x[P].ch&&(D=!0),b+=1;D||(this.chars.push(x[P]),M+=1)}}}function f(x,P,v){for(var b=0,M=this.chars.length;b<M;){if(this.chars[b].ch===x&&this.chars[b].style===P&&this.chars[b].fFamily===v)return this.chars[b];b+=1}return(typeof x=="string"&&x.charCodeAt(0)!==13||!x)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",x,P,v)),e}function c(x,P,v){var b=this.getFontByName(P),M=x;if(!b.cache[M]){var D=b.helper;if(x===" "){var j=D.measureText("|"+x+"|"),q=D.measureText("||");b.cache[M]=(j-q)/100}else b.cache[M]=D.measureText(x)/100}return b.cache[M]*v}function g(x){for(var P=0,v=this.fonts.length;P<v;){if(this.fonts[P].fName===x)return this.fonts[P];P+=1}return this.fonts[0]}function C(x){var P=0,v=x.charCodeAt(0);if(v>=55296&&v<=56319){var b=x.charCodeAt(1);b>=56320&&b<=57343&&(P=(v-55296)*1024+b-56320+65536)}return P}function k(x,P){var v=x.toString(16)+P.toString(16);return S.indexOf(v)!==-1}function T(x){return x===o}function E(x){return x===l}function A(x){var P=C(x);return P>=h&&P<=u}function R(x){return A(x.substr(0,2))&&A(x.substr(2,2))}function O(x){return i.indexOf(x)!==-1}function F(x,P){var v=C(x.substr(P,2));if(v!==s)return!1;var b=0;for(P+=2;b<5;){if(v=C(x.substr(P,2)),v<a||v>n)return!1;b+=1,P+=2}return C(x.substr(P,2))===r}function V(){this.isLoaded=!0}var B=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};B.isModifier=k,B.isZeroWidthJoiner=T,B.isFlagEmoji=R,B.isRegionalCode=A,B.isCombinedCharacter=O,B.isRegionalFlag=F,B.isVariationSelector=E,B.BLACK_FLAG_CODE_POINT=s;var I={addChars:p,addFonts:w,getCharData:f,getFontByName:g,measureText:c,checkLoadedFonts:y,setIsLoaded:V};return B.prototype=I,B}();function SlotManager(t){this.animationData=t}SlotManager.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function slotFactory(t){return new SlotManager(t)}function RenderableElement(){}RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,i=this.renderableComponents.length;for(e=0;e<i;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var getBlendMode=function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}}();function SliderEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function AngleEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function ColorEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,1,0,i)}function PointEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,1,0,i)}function LayerIndexEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function MaskIndexEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function CheckboxEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var i=t.ef||[];this.effectElements=[];var s,r=i.length,a;for(s=0;s<r;s+=1)a=new GroupEffect(i[s],e),this.effectElements.push(a)}function GroupEffect(t,e){this.init(t,e)}extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,r,a=this.data.ef;for(i=0;i<s;i+=1){switch(r=null,a[i].ty){case 0:r=new SliderEffect(a[i],e,this);break;case 1:r=new AngleEffect(a[i],e,this);break;case 2:r=new ColorEffect(a[i],e,this);break;case 3:r=new PointEffect(a[i],e,this);break;case 4:case 7:r=new CheckboxEffect(a[i],e,this);break;case 10:r=new LayerIndexEffect(a[i],e,this);break;case 11:r=new MaskIndexEffect(a[i],e,this);break;case 5:r=new EffectsManager(a[i],e);break;default:r=new NoValueEffect(a[i]);break}r&&this.effectElements.push(r)}};function BaseElement(){}BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,i=this.data.masksProperties.length;e<i;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=getExpressionInterfaces();if(e){var i=e("layer"),s=e("effects"),r=e("shape"),a=e("text"),n=e("comp");this.layerInterface=i(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var l=s.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(l),this.data.ty===0||this.data.xt?this.compInterface=n(this):this.data.ty===4?(this.layerInterface.shapeInterface=r(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=a(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=getBlendMode(this.data.bm),i=this.baseElement||this.layerElement;i.style["mix-blend-mode"]=e},initBaseData:function(e,i,s){this.globalData=i,this.comp=s,this.data=e,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function FrameElement(){}FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,i){var s,r=this.dynamicProperties.length;for(s=0;s<r;s+=1)(i||this._isParent&&this.dynamicProperties[s].propType==="transform")&&(this.dynamicProperties[s].getValue(),this.dynamicProperties[s]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function FootageElement(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,i)}FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){var t=getExpressionInterfaces();if(t){var e=t("footage");this.layerInterface=e(this)}},FootageElement.prototype.getFootageData=function(){return this.footageData};function AudioElement(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,i),this._isPlaying=!1,this._canPlay=!1;var s=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(s),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=PropertyFactory.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}AudioElement.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var i=this._volume*this._volumeMultiplier;this._previousVolume!==i&&(this._previousVolume=i,this.audio.volume(i))},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(t){this.audio.rate(t)},AudioElement.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){};function BaseRenderer(){}BaseRenderer.prototype.checkLayers=function(t){var e,i=this.layers.length,s;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(t){return new AudioElement(t,this.globalData,this)},BaseRenderer.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,i=t.length,s,r=this.layers.length;for(e=0;e<i;e+=1)for(s=0;s<r;){if(this.layers[s].id===t[e].id){this.layers[s]=t[e];break}s+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,i){for(var s=this.elements,r=this.layers,a=0,n=r.length;a<n;)r[a].ind==e&&(!s[a]||s[a]===!0?(this.buildItem(a),this.addPendingElement(t)):(i.push(s[a]),s[a].setAsParent(),r[a].parent!==void 0?this.buildElementParenting(t,r[a].parent,i):t.setHierarchy(i))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,i=t.length;for(e=0;e<i;e+=1)if(t[e].xt){var s=this.createComp(t[e]);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},BaseRenderer.prototype.getElementById=function(t){var e,i=this.elements.length;for(e=0;e<i;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},BaseRenderer.prototype.getElementByPath=function(t){var e=t.shift(),i;if(typeof e=="number")i=this.elements[e];else{var s,r=this.elements.length;for(s=0;s<r;s+=1)if(this.elements[s].data.nm===e){i=this.elements[s];break}}return t.length===0?i:i.getElementByPath(t)},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.slotManager=slotFactory(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var effectTypes={TRANSFORM_EFFECT:"transformEFfect"};function TransformElement(){}TransformElement.prototype={initTransform:function(){var e=new Matrix;this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,i=this.finalTransform.mat,s=0,r=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;s<r;){if(this.hierarchy[s].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}s+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,i.cloneFromProps(e),s=0;s<r;s+=1)i.multiply(this.hierarchy[s].finalTransform.mProp.v)}this.finalTransform._matMdf&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,i=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<i;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var s=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(s),e=1;e<i;e+=1){var r=this.localTransforms[e].matrix;s.multiply(r)}s.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var a=this.finalTransform.localOpacity;for(e=0;e<i;e+=1)a*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=a}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new Matrix;var i=0,s=e.length;for(i=0;i<s;i+=1)this.localTransforms.push(e[i])}}},globalToLocal:function(e){var i=[];i.push(this.finalTransform);for(var s=!0,r=this.comp;s;)r.finalTransform?(r.data.hasMask&&i.splice(0,0,r.finalTransform),r=r.comp):s=!1;var a,n=i.length,l;for(a=0;a<n;a+=1)l=i[a].mat.applyToPointArray(0,0,0),e=[e[0]-l[0],e[1]-l[1],0];return e},mHelper:new Matrix};function MaskElement(t,e,i){this.data=t,this.element=e,this.globalData=i,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var s=this.globalData.defs,r,a=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(a),this.solidPath="";var n,l=this.masksProperties,o=0,h=[],u,S,d=createElementID(),_,y,m,w,p="clipPath",f="clip-path";for(r=0;r<a;r+=1)if((l[r].mode!=="a"&&l[r].mode!=="n"||l[r].inv||l[r].o.k!==100||l[r].o.x)&&(p="mask",f="mask"),(l[r].mode==="s"||l[r].mode==="i")&&o===0?(_=createNS("rect"),_.setAttribute("fill","#ffffff"),_.setAttribute("width",this.element.comp.data.w||0),_.setAttribute("height",this.element.comp.data.h||0),h.push(_)):_=null,n=createNS("path"),l[r].mode==="n")this.viewData[r]={op:PropertyFactory.getProp(this.element,l[r].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,l[r],3),elem:n,lastPath:""},s.appendChild(n);else{o+=1,n.setAttribute("fill",l[r].mode==="s"?"#000000":"#ffffff"),n.setAttribute("clip-rule","nonzero");var c;if(l[r].x.k!==0?(p="mask",f="mask",w=PropertyFactory.getProp(this.element,l[r].x,0,null,this.element),c=createElementID(),y=createNS("filter"),y.setAttribute("id",c),m=createNS("feMorphology"),m.setAttribute("operator","erode"),m.setAttribute("in","SourceGraphic"),m.setAttribute("radius","0"),y.appendChild(m),s.appendChild(y),n.setAttribute("stroke",l[r].mode==="s"?"#000000":"#ffffff")):(m=null,w=null),this.storedData[r]={elem:n,x:w,expan:m,lastPath:"",lastOperator:"",filterId:c,lastRadius:0},l[r].mode==="i"){S=h.length;var g=createNS("g");for(u=0;u<S;u+=1)g.appendChild(h[u]);var C=createNS("mask");C.setAttribute("mask-type","alpha"),C.setAttribute("id",d+"_"+o),C.appendChild(n),s.appendChild(C),g.setAttribute("mask","url("+getLocationHref()+"#"+d+"_"+o+")"),h.length=0,h.push(g)}else h.push(n);l[r].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[r]={elem:n,lastPath:"",op:PropertyFactory.getProp(this.element,l[r].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,l[r],3),invRect:_},this.viewData[r].prop.k||this.drawPath(l[r],this.viewData[r].prop.v,this.viewData[r])}for(this.maskElement=createNS(p),a=h.length,r=0;r<a;r+=1)this.maskElement.appendChild(h[r]);o>0&&(this.maskElement.setAttribute("id",d),this.element.maskedElement.setAttribute(f,"url("+getLocationHref()+"#"+d+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,i,s=this.masksProperties.length;for(i=0;i<s;i+=1)if((this.viewData[i].prop._mdf||t)&&this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]),(this.viewData[i].op._mdf||t)&&this.viewData[i].elem.setAttribute("fill-opacity",this.viewData[i].op.v),this.masksProperties[i].mode!=="n"&&(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[i].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[i].x&&(this.storedData[i].x._mdf||t))){var r=this.storedData[i].expan;this.storedData[i].x.v<0?(this.storedData[i].lastOperator!=="erode"&&(this.storedData[i].lastOperator="erode",this.storedData[i].elem.setAttribute("filter","url("+getLocationHref()+"#"+this.storedData[i].filterId+")")),r.setAttribute("radius",-this.storedData[i].x.v)):(this.storedData[i].lastOperator!=="dilate"&&(this.storedData[i].lastOperator="dilate",this.storedData[i].elem.setAttribute("filter",null)),this.storedData[i].elem.setAttribute("stroke-width",this.storedData[i].x.v*2))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},MaskElement.prototype.drawPath=function(t,e,i){var s=" M"+e.v[0][0]+","+e.v[0][1],r,a;for(a=e._length,r=1;r<a;r+=1)s+=" C"+e.o[r-1][0]+","+e.o[r-1][1]+" "+e.i[r][0]+","+e.i[r][1]+" "+e.v[r][0]+","+e.v[r][1];if(e.c&&a>1&&(s+=" C"+e.o[r-1][0]+","+e.o[r-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),i.lastPath!==s){var n="";i.elem&&(e.c&&(n=t.inv?this.solidPath+s:s),i.elem.setAttribute("d",n)),i.lastPath=s}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var filtersFactory=function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=i;function e(s,r){var a=createNS("filter");return a.setAttribute("id",s),r!==!0&&(a.setAttribute("filterUnits","objectBoundingBox"),a.setAttribute("x","0%"),a.setAttribute("y","0%"),a.setAttribute("width","100%"),a.setAttribute("height","100%")),a}function i(){var s=createNS("feColorMatrix");return s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),s}return t}(),featureSupport=function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t}(),registeredEffects$1={},idPrefix="filter_result_";function SVGEffects(t){var e,i="SourceGraphic",s=t.data.ef?t.data.ef.length:0,r=createElementID(),a=filtersFactory.createFilter(r,!0),n=0;this.filters=[];var l;for(e=0;e<s;e+=1){l=null;var o=t.data.ef[e].ty;if(registeredEffects$1[o]){var h=registeredEffects$1[o].effect;l=new h(a,t.effectsManager.effectElements[e],t,idPrefix+n,i),i=idPrefix+n,registeredEffects$1[o].countsAsEffect&&(n+=1)}l&&this.filters.push(l)}n&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+getLocationHref()+"#"+r+")")),this.filters.length&&t.addRenderableComponent(this)}SVGEffects.prototype.renderFrame=function(t){var e,i=this.filters.length;for(e=0;e<i;e+=1)this.filters[e].renderFrame(t)},SVGEffects.prototype.getEffects=function(t){var e,i=this.filters.length,s=[];for(e=0;e<i;e+=1)this.filters[e].type===t&&s.push(this.filters[e]);return s};function registerEffect$1(t,e,i){registeredEffects$1[t]={effect:e,countsAsEffect:i}}function SVGBaseElement(){}SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var i=createNS("g");i.setAttribute("id",this.layerId),i.appendChild(this.layerElement),e=i,this.globalData.defs.appendChild(i)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var s=createNS("clipPath"),r=createNS("path");r.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var a=createElementID();if(s.setAttribute("id",a),s.appendChild(r),this.globalData.defs.appendChild(s),this.checkMasks()){var n=createNS("g");n.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")"),n.appendChild(this.layerElement),this.transformedElement=n,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var i=this.layerId+"_"+e,s,r,a,n;if(e===1||e===3){var l=createNS("mask");l.setAttribute("id",i),l.setAttribute("mask-type",e===3?"luminance":"alpha"),a=createNS("use"),a.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),l.appendChild(a),this.globalData.defs.appendChild(l),!featureSupport.maskType&&e===1&&(l.setAttribute("mask-type","luminance"),s=createElementID(),r=filtersFactory.createFilter(s),this.globalData.defs.appendChild(r),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),n=createNS("g"),n.appendChild(a),l.appendChild(n),n.setAttribute("filter","url("+getLocationHref()+"#"+s+")"))}else if(e===2){var o=createNS("mask");o.setAttribute("id",i),o.setAttribute("mask-type","alpha");var h=createNS("g");o.appendChild(h),s=createElementID(),r=filtersFactory.createFilter(s);var u=createNS("feComponentTransfer");u.setAttribute("in","SourceGraphic"),r.appendChild(u);var S=createNS("feFuncA");S.setAttribute("type","table"),S.setAttribute("tableValues","1.0 0.0"),u.appendChild(S),this.globalData.defs.appendChild(r);var d=createNS("rect");d.setAttribute("width",this.comp.data.w),d.setAttribute("height",this.comp.data.h),d.setAttribute("x","0"),d.setAttribute("y","0"),d.setAttribute("fill","#ffffff"),d.setAttribute("opacity","0"),h.setAttribute("filter","url("+getLocationHref()+"#"+s+")"),h.appendChild(d),a=createNS("use"),a.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),h.appendChild(a),featureSupport.maskType||(o.setAttribute("mask-type","luminance"),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),n=createNS("g"),h.appendChild(d),n.appendChild(this.layerElement),h.appendChild(n)),this.globalData.defs.appendChild(o)}this.matteMasks[e]=i}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+getLocationHref()+"#"+e+")")}};function HierarchyElement(){}HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function RenderableDOMElement(){}(function(){var t={initElement:function(i,s,r){this.initFrame(),this.initBaseData(i,s,r),this.initTransform(i,s,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var i=this.baseElement||this.layerElement;i.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var i=this.baseElement||this.layerElement;i.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(i){this._mdf=!1,this.prepareRenderableFrame(i),this.prepareProperties(i,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};extendPrototype([RenderableElement,createProxyFunction(t)],RenderableDOMElement)})();function IImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,i),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect};function ProcessedElement(t,e){this.elem=t,this.pos=e}function IShapeElement(){}IShapeElement.prototype={addShapeToModifiers:function(e){var i,s=this.shapeModifiers.length;for(i=0;i<s;i+=1)this.shapeModifiers[i].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var i=0,s=this.shapeModifiers.length;i<s;)if(this.shapeModifiers[i].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,i=this.shapes.length;for(e=0;e<i;e+=1)this.shapes[e].sh.reset();i=this.shapeModifiers.length;var s;for(e=i-1;e>=0&&(s=this.shapeModifiers[e].processShapes(this._isFirstFrame),!s);e-=1);}},searchProcessedElement:function(e){for(var i=this.processedElements,s=0,r=i.length;s<r;){if(i[s].elem===e)return i[s].pos;s+=1}return 0},addProcessedElement:function(e,i){for(var s=this.processedElements,r=s.length;r;)if(r-=1,s[r].elem===e){s[r].pos=i;return}s.push(new ProcessedElement(e,i))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"};function SVGShapeData(t,e,i){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=i,this.lvl=e,this._isAnimated=!!i.k;for(var s=0,r=t.length;s<r;){if(t[s].mProps.dynamicProperties.length){this._isAnimated=!0;break}s+=1}}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0};function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=createNS("path"),this.msElem=null}SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1};function DashProperty(t,e,i,s){this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=i,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(s);var r,a=e.length||0,n;for(r=0;r<a;r+=1)n=PropertyFactory.getProp(t,e[r].v,0,0,this),this.k=n.k||this.k,this.dataProps[r]={n:e[r].n,p:n};this.k||this.getValue(!0),this._isAnimated=this.k}DashProperty.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,i=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<i;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty);function SVGStrokeStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=i,this._isAnimated=!!this._isAnimated}extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData);function SVGFillStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=i}extendPrototype([DynamicPropertyContainer],SVGFillStyleData);function SVGNoStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=i}extendPrototype([DynamicPropertyContainer],SVGNoStyleData);function GradientProperty(t,e,i){this.data=e,this.c=createTypedArray("uint8c",e.p*4);var s=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=createTypedArray("float32",s),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=s,this.initDynamicPropertyContainer(i),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}GradientProperty.prototype.comparePoints=function(t,e){for(var i=0,s=this.o.length/2,r;i<s;){if(r=Math.abs(t[i*4]-t[e*4+i*2]),r>.01)return!1;i+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,i=this.data.p*4,s,r;for(e=0;e<i;e+=1)s=e%4===0?100:255,r=Math.round(this.prop.v[e]*s),this.c[e]!==r&&(this.c[e]=r,this._cmdf=!t);if(this.o.length)for(i=this.prop.v.length,e=this.data.p*4;e<i;e+=1)s=e%2===0?100:1,r=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==r&&(this.o[e-this.data.p*4]=r,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty);function SVGGradientFillStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,i)}SVGGradientFillStyleData.prototype.initGradientData=function(t,e,i){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=i,this.stops=[],this.setGradientData(i.pElem,e),this.setGradientOpacity(e,i),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var i=createElementID(),s=createNS(e.t===1?"linearGradient":"radialGradient");s.setAttribute("id",i),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse");var r=[],a,n,l;for(l=e.g.p*4,n=0;n<l;n+=4)a=createNS("stop"),s.appendChild(a),r.push(a);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+getLocationHref()+"#"+i+")"),this.gf=s,this.cst=r},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var i,s,r,a=createNS("mask"),n=createNS("path");a.appendChild(n);var l=createElementID(),o=createElementID();a.setAttribute("id",o);var h=createNS(t.t===1?"linearGradient":"radialGradient");h.setAttribute("id",l),h.setAttribute("spreadMethod","pad"),h.setAttribute("gradientUnits","userSpaceOnUse"),r=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var u=this.stops;for(s=t.g.p*4;s<r;s+=2)i=createNS("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),h.appendChild(i),u.push(i);n.setAttribute(t.ty==="gf"?"fill":"stroke","url("+getLocationHref()+"#"+l+")"),t.ty==="gs"&&(n.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),n.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),t.lj===1&&n.setAttribute("stroke-miterlimit",t.ml)),this.of=h,this.ms=a,this.ost=u,this.maskId=o,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData);function SVGGradientStrokeStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,i),this._isAnimated=!!this._isAnimated}extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function SVGTransformData(t,e,i){this.transform={mProps:t,op:e,container:i},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var buildShapeString=function(e,i,s,r){if(i===0)return"";var a=e.o,n=e.i,l=e.v,o,h=" M"+r.applyToPointStringified(l[0][0],l[0][1]);for(o=1;o<i;o+=1)h+=" C"+r.applyToPointStringified(a[o-1][0],a[o-1][1])+" "+r.applyToPointStringified(n[o][0],n[o][1])+" "+r.applyToPointStringified(l[o][0],l[o][1]);return s&&i&&(h+=" C"+r.applyToPointStringified(a[o-1][0],a[o-1][1])+" "+r.applyToPointStringified(n[0][0],n[0][1])+" "+r.applyToPointStringified(l[0][0],l[0][1]),h+="z"),h},SVGElementsRenderer=function(){var t=new Matrix,e=new Matrix,i={createRenderFunction:s};function s(S){switch(S.ty){case"fl":return l;case"gf":return h;case"gs":return o;case"st":return u;case"sh":case"el":case"rc":case"sr":return n;case"tr":return r;case"no":return a;default:return null}}function r(S,d,_){(_||d.transform.op._mdf)&&d.transform.container.setAttribute("opacity",d.transform.op.v),(_||d.transform.mProps._mdf)&&d.transform.container.setAttribute("transform",d.transform.mProps.v.to2dCSS())}function a(){}function n(S,d,_){var y,m,w,p,f,c,g=d.styles.length,C=d.lvl,k,T,E,A;for(c=0;c<g;c+=1){if(p=d.sh._mdf||_,d.styles[c].lvl<C){for(T=e.reset(),E=C-d.styles[c].lvl,A=d.transformers.length-1;!p&&E>0;)p=d.transformers[A].mProps._mdf||p,E-=1,A-=1;if(p)for(E=C-d.styles[c].lvl,A=d.transformers.length-1;E>0;)T.multiply(d.transformers[A].mProps.v),E-=1,A-=1}else T=t;if(k=d.sh.paths,m=k._length,p){for(w="",y=0;y<m;y+=1)f=k.shapes[y],f&&f._length&&(w+=buildShapeString(f,f._length,f.c,T));d.caches[c]=w}else w=d.caches[c];d.styles[c].d+=S.hd===!0?"":w,d.styles[c]._mdf=p||d.styles[c]._mdf}}function l(S,d,_){var y=d.style;(d.c._mdf||_)&&y.pElem.setAttribute("fill","rgb("+bmFloor(d.c.v[0])+","+bmFloor(d.c.v[1])+","+bmFloor(d.c.v[2])+")"),(d.o._mdf||_)&&y.pElem.setAttribute("fill-opacity",d.o.v)}function o(S,d,_){h(S,d,_),u(S,d,_)}function h(S,d,_){var y=d.gf,m=d.g._hasOpacity,w=d.s.v,p=d.e.v;if(d.o._mdf||_){var f=S.ty==="gf"?"fill-opacity":"stroke-opacity";d.style.pElem.setAttribute(f,d.o.v)}if(d.s._mdf||_){var c=S.t===1?"x1":"cx",g=c==="x1"?"y1":"cy";y.setAttribute(c,w[0]),y.setAttribute(g,w[1]),m&&!d.g._collapsable&&(d.of.setAttribute(c,w[0]),d.of.setAttribute(g,w[1]))}var C,k,T,E;if(d.g._cmdf||_){C=d.cst;var A=d.g.c;for(T=C.length,k=0;k<T;k+=1)E=C[k],E.setAttribute("offset",A[k*4]+"%"),E.setAttribute("stop-color","rgb("+A[k*4+1]+","+A[k*4+2]+","+A[k*4+3]+")")}if(m&&(d.g._omdf||_)){var R=d.g.o;for(d.g._collapsable?C=d.cst:C=d.ost,T=C.length,k=0;k<T;k+=1)E=C[k],d.g._collapsable||E.setAttribute("offset",R[k*2]+"%"),E.setAttribute("stop-opacity",R[k*2+1])}if(S.t===1)(d.e._mdf||_)&&(y.setAttribute("x2",p[0]),y.setAttribute("y2",p[1]),m&&!d.g._collapsable&&(d.of.setAttribute("x2",p[0]),d.of.setAttribute("y2",p[1])));else{var O;if((d.s._mdf||d.e._mdf||_)&&(O=Math.sqrt(Math.pow(w[0]-p[0],2)+Math.pow(w[1]-p[1],2)),y.setAttribute("r",O),m&&!d.g._collapsable&&d.of.setAttribute("r",O)),d.e._mdf||d.h._mdf||d.a._mdf||_){O||(O=Math.sqrt(Math.pow(w[0]-p[0],2)+Math.pow(w[1]-p[1],2)));var F=Math.atan2(p[1]-w[1],p[0]-w[0]),V=d.h.v;V>=1?V=.99:V<=-1&&(V=-.99);var B=O*V,I=Math.cos(F+d.a.v)*B+w[0],x=Math.sin(F+d.a.v)*B+w[1];y.setAttribute("fx",I),y.setAttribute("fy",x),m&&!d.g._collapsable&&(d.of.setAttribute("fx",I),d.of.setAttribute("fy",x))}}}function u(S,d,_){var y=d.style,m=d.d;m&&(m._mdf||_)&&m.dashStr&&(y.pElem.setAttribute("stroke-dasharray",m.dashStr),y.pElem.setAttribute("stroke-dashoffset",m.dashoffset[0])),d.c&&(d.c._mdf||_)&&y.pElem.setAttribute("stroke","rgb("+bmFloor(d.c.v[0])+","+bmFloor(d.c.v[1])+","+bmFloor(d.c.v[2])+")"),(d.o._mdf||_)&&y.pElem.setAttribute("stroke-opacity",d.o.v),(d.w._mdf||_)&&(y.pElem.setAttribute("stroke-width",d.w.v),y.msElem&&y.msElem.setAttribute("stroke-width",d.w.v))}return i}();function SVGShapeElement(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,i),this.prevViewData=[]}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,i,s,r=this.stylesList.length,a,n=[],l=!1;for(s=0;s<r;s+=1){for(a=this.stylesList[s],l=!1,n.length=0,t=0;t<e;t+=1)i=this.shapes[t],i.styles.indexOf(a)!==-1&&(n.push(i),l=i._isAnimated||l);n.length>1&&l&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var i,s=new SVGStyleData(t,e),r=s.pElem;if(t.ty==="st")i=new SVGStrokeStyleData(this,t,s);else if(t.ty==="fl")i=new SVGFillStyleData(this,t,s);else if(t.ty==="gf"||t.ty==="gs"){var a=t.ty==="gf"?SVGGradientFillStyleData:SVGGradientStrokeStyleData;i=new a(this,t,s),this.globalData.defs.appendChild(i.gf),i.maskId&&(this.globalData.defs.appendChild(i.ms),this.globalData.defs.appendChild(i.of),r.setAttribute("mask","url("+getLocationHref()+"#"+i.maskId+")"))}else t.ty==="no"&&(i=new SVGNoStyleData(this,t,s));return(t.ty==="st"||t.ty==="gs")&&(r.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),r.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),r.setAttribute("fill-opacity","0"),t.lj===1&&r.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&r.setAttribute("fill-rule","evenodd"),t.ln&&r.setAttribute("id",t.ln),t.cl&&r.setAttribute("class",t.cl),t.bm&&(r.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(s),this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var i=TransformPropertyFactory.getTransformProperty(this,t,this),s=new SVGTransformData(i,i.o,e);return this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.createShapeElement=function(t,e,i){var s=4;t.ty==="rc"?s=5:t.ty==="el"?s=6:t.ty==="sr"&&(s=7);var r=ShapePropertyFactory.getShapeProp(this,t,s,this),a=new SVGShapeData(e,i,r);return this.shapes.push(a),this.addShapeToModifiers(a),this.addToAnimatedContents(t,a),a},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var i=0,s=this.animatedContents.length;i<s;){if(this.animatedContents[i].element===e)return;i+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e=t.styles,i,s=this.stylesList.length;for(i=0;i<s;i+=1)this.stylesList[i].closed||e.push(this.stylesList[i])},SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,i,s,r,a,n){var l=[].concat(a),o,h=t.length-1,u,S,d=[],_=[],y,m,w;for(o=h;o>=0;o-=1){if(w=this.searchProcessedElement(t[o]),w?e[o]=i[w-1]:t[o]._render=n,t[o].ty==="fl"||t[o].ty==="st"||t[o].ty==="gf"||t[o].ty==="gs"||t[o].ty==="no")w?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],r),t[o]._render&&e[o].style.pElem.parentNode!==s&&s.appendChild(e[o].style.pElem),d.push(e[o].style);else if(t[o].ty==="gr"){if(!w)e[o]=this.createGroupElement(t[o]);else for(S=e[o].it.length,u=0;u<S;u+=1)e[o].prevViewData[u]=e[o].it[u];this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,r+1,l,n),t[o]._render&&e[o].gr.parentNode!==s&&s.appendChild(e[o].gr)}else t[o].ty==="tr"?(w||(e[o]=this.createTransformElement(t[o],s)),y=e[o].transform,l.push(y)):t[o].ty==="sh"||t[o].ty==="rc"||t[o].ty==="el"||t[o].ty==="sr"?(w||(e[o]=this.createShapeElement(t[o],l,r)),this.setElementStyles(e[o])):t[o].ty==="tm"||t[o].ty==="rd"||t[o].ty==="ms"||t[o].ty==="pb"||t[o].ty==="zz"||t[o].ty==="op"?(w?(m=e[o],m.closed=!1):(m=ShapeModifiers.getModifier(t[o].ty),m.init(this,t[o]),e[o]=m,this.shapeModifiers.push(m)),_.push(m)):t[o].ty==="rp"&&(w?(m=e[o],m.closed=!0):(m=ShapeModifiers.getModifier(t[o].ty),e[o]=m,m.init(this,t,o,e),this.shapeModifiers.push(m),n=!1),_.push(m));this.addProcessedElement(t[o],o+1)}for(h=d.length,o=0;o<h;o+=1)d[o].closed=!0;for(h=_.length,o=0;o<h;o+=1)_[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e=this.animatedContents.length,i;for(t=0;t<e;t+=1)i=this.animatedContents[t],(this._isFirstFrame||i.element._isAnimated)&&i.data!==!0&&i.fn(i.data,i.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function LetterProps(t,e,i,s,r,a){this.o=t,this.sw=e,this.sc=i,this.fc=s,this.m=r,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!i,fc:!!s,m:!0,p:!0}}LetterProps.prototype.update=function(t,e,i,s,r,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==i&&(this.sc=i,this._mdf.sc=!0,n=!0),this.fc!==s&&(this.fc=s,this._mdf.fc=!0,n=!0),this.m!==r&&(this.m=r,this._mdf.m=!0,n=!0),a.length&&(this.p[0]!==a[0]||this.p[1]!==a[1]||this.p[4]!==a[4]||this.p[5]!==a[5]||this.p[12]!==a[12]||this.p[13]!==a[13])&&(this.p=a,this._mdf.p=!0,n=!0),n};function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,i=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var s,r=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(s=0;s<r;s+=1)i!==this.keysIndex?a=this.effectsSequence[s](a,a.t):a=this.effectsSequence[s](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,i=0,s=t.length;i<=s-1&&!(i===s-1||t[i+1].t>e);)i+=1;return this.keysIndex!==i&&(this.keysIndex=i),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e=[],i=0,s=t.length,r,a,n=!1,l=!1,o="";i<s;)n=l,l=!1,r=t.charCodeAt(i),o=t.charAt(i),FontManager.isCombinedCharacter(r)?n=!0:r>=55296&&r<=56319?FontManager.isRegionalFlag(t,i)?o=t.substr(i,14):(a=t.charCodeAt(i+1),a>=56320&&a<=57343&&(FontManager.isModifier(r,a)?(o=t.substr(i,2),n=!0):FontManager.isFlagEmoji(t.substr(i,4))?o=t.substr(i,4):o=t.substr(i,2))):r>56319?(a=t.charCodeAt(i+1),FontManager.isVariationSelector(r)&&(n=!0)):FontManager.isZeroWidthJoiner(r)&&(n=!0,l=!0),n?(e[e.length-1]+=o,n=!1):e.push(o),i+=o.length;return e},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,i=this.data,s=[],r,a,n,l=0,o,h=i.m.g,u=0,S=0,d=0,_=[],y=0,m=0,w,p,f=e.getFontByName(t.f),c,g=0,C=getFontProperties(f);t.fWeight=C.weight,t.fStyle=C.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),a=t.finalText.length,t.finalLineHeight=t.lh;var k=t.tr/1e3*t.finalSize,T;if(t.sz)for(var E=!0,A=t.sz[0],R=t.sz[1],O,F;E;){F=this.buildFinalText(t.t),O=0,y=0,a=F.length,k=t.tr/1e3*t.finalSize;var V=-1;for(r=0;r<a;r+=1)T=F[r].charCodeAt(0),n=!1,F[r]===" "?V=r:(T===13||T===3)&&(y=0,n=!0,O+=t.finalLineHeight||t.finalSize*1.2),e.chars?(c=e.getCharData(F[r],f.fStyle,f.fFamily),g=n?0:c.w*t.finalSize/100):g=e.measureText(F[r],t.f,t.finalSize),y+g>A&&F[r]!==" "?(V===-1?a+=1:r=V,O+=t.finalLineHeight||t.finalSize*1.2,F.splice(r,V===r?1:0,"\r"),V=-1,y=0):(y+=g,y+=k);O+=f.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&R<O?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=F,a=t.finalText.length,E=!1)}y=-k,g=0;var B=0,I;for(r=0;r<a;r+=1)if(n=!1,I=t.finalText[r],T=I.charCodeAt(0),T===13||T===3?(B=0,_.push(y),m=y>m?y:m,y=-2*k,o="",n=!0,d+=1):o=I,e.chars?(c=e.getCharData(I,f.fStyle,e.getFontByName(t.f).fFamily),g=n?0:c.w*t.finalSize/100):g=e.measureText(o,t.f,t.finalSize),I===" "?B+=g+k:(y+=g+k+B,B=0),s.push({l:g,an:g,add:u,n,anIndexes:[],val:o,line:d,animatorJustifyOffset:0}),h==2){if(u+=g,o===""||o===" "||r===a-1){for((o===""||o===" ")&&(u-=g);S<=r;)s[S].an=u,s[S].ind=l,s[S].extra=g,S+=1;l+=1,u=0}}else if(h==3){if(u+=g,o===""||r===a-1){for(o===""&&(u-=g);S<=r;)s[S].an=u,s[S].ind=l,s[S].extra=g,S+=1;u=0,l+=1}}else s[l].ind=l,s[l].extra=0,l+=1;if(t.l=s,m=y>m?y:m,_.push(y),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=m,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=_;var x=i.a,P,v;p=x.length;var b,M,D=[];for(w=0;w<p;w+=1){for(P=x[w],P.a.sc&&(t.strokeColorAnim=!0),P.a.sw&&(t.strokeWidthAnim=!0),(P.a.fc||P.a.fh||P.a.fs||P.a.fb)&&(t.fillColorAnim=!0),M=0,b=P.s.b,r=0;r<a;r+=1)v=s[r],v.anIndexes[w]=M,(b==1&&v.val!==""||b==2&&v.val!==""&&v.val!==" "||b==3&&(v.n||v.val==" "||r==a-1)||b==4&&(v.n||r==a-1))&&(P.s.rn===1&&D.push(M),M+=1);i.a[w].s.totalChars=M;var j=-1,q;if(P.s.rn===1)for(r=0;r<a;r+=1)v=s[r],j!=v.anIndexes[w]&&(j=v.anIndexes[w],q=D.splice(Math.floor(Math.random()*D.length),1)[0]),v.anIndexes[w]=q}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=f.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var i=this.copyData({},this.data.d.k[e].s);i=this.copyData(i,t),this.data.d.k[e].s=i,this.recalculate(e),this.setCurrentData(i),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var t=Math.max,e=Math.min,i=Math.floor;function s(a,n){this._currentTextLength=-1,this.k=!1,this.data=n,this.elem=a,this.comp=a.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(a),this.s=PropertyFactory.getProp(a,n.s||{k:0},0,0,this),"e"in n?this.e=PropertyFactory.getProp(a,n.e,0,0,this):this.e={v:100},this.o=PropertyFactory.getProp(a,n.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(a,n.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(a,n.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(a,n.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(a,n.a,0,.01,this),this.dynamicProperties.length||this.getValue()}s.prototype={getMult:function(n){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var l=0,o=0,h=1,u=1;this.ne.v>0?l=this.ne.v/100:o=-this.ne.v/100,this.xe.v>0?h=1-this.xe.v/100:u=1+this.xe.v/100;var S=BezierFactory.getBezierEasing(l,o,h,u).get,d=0,_=this.finalS,y=this.finalE,m=this.data.sh;if(m===2)y===_?d=n>=y?1:0:d=t(0,e(.5/(y-_)+(n-_)/(y-_),1)),d=S(d);else if(m===3)y===_?d=n>=y?0:1:d=1-t(0,e(.5/(y-_)+(n-_)/(y-_),1)),d=S(d);else if(m===4)y===_?d=0:(d=t(0,e(.5/(y-_)+(n-_)/(y-_),1)),d<.5?d*=2:d=1-2*(d-.5)),d=S(d);else if(m===5){if(y===_)d=0;else{var w=y-_;n=e(t(0,n+.5-_),y-_);var p=-w/2+n,f=w/2;d=Math.sqrt(1-p*p/(f*f))}d=S(d)}else m===6?(y===_?d=0:(n=e(t(0,n+.5-_),y-_),d=(1+Math.cos(Math.PI+Math.PI*2*n/(y-_)))/2),d=S(d)):(n>=i(_)&&(n-_<0?d=t(0,e(e(y,1)-(_-n),1)):d=t(0,e(y-n,1))),d=S(d));if(this.sm.v!==100){var c=this.sm.v*.01;c===0&&(c=1e-8);var g=.5-c*.5;d<g?d=0:(d=(d-g)/c,d>1&&(d=1))}return d*this.a.v},getValue:function(n){this.iterateDynamicProperties(),this._mdf=n||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,n&&this.data.r===2&&(this.e.v=this._currentTextLength);var l=this.data.r===2?1:100/this.data.totalChars,o=this.o.v/l,h=this.s.v/l+o,u=this.e.v/l+o;if(h>u){var S=h;h=u,u=S}this.finalS=h,this.finalE=u}},extendPrototype([DynamicPropertyContainer],s);function r(a,n,l){return new s(a,n)}return{getTextSelectorProp:r}}();function TextAnimatorDataProperty(t,e,i){var s={propType:!1},r=PropertyFactory.getProp,a=e.a;this.a={r:a.r?r(t,a.r,0,degToRads,i):s,rx:a.rx?r(t,a.rx,0,degToRads,i):s,ry:a.ry?r(t,a.ry,0,degToRads,i):s,sk:a.sk?r(t,a.sk,0,degToRads,i):s,sa:a.sa?r(t,a.sa,0,degToRads,i):s,s:a.s?r(t,a.s,1,.01,i):s,a:a.a?r(t,a.a,1,0,i):s,o:a.o?r(t,a.o,0,.01,i):s,p:a.p?r(t,a.p,1,0,i):s,sw:a.sw?r(t,a.sw,0,0,i):s,sc:a.sc?r(t,a.sc,1,0,i):s,fc:a.fc?r(t,a.fc,1,0,i):s,fh:a.fh?r(t,a.fh,0,0,i):s,fs:a.fs?r(t,a.fs,0,.01,i):s,fb:a.fb?r(t,a.fb,0,.01,i):s,t:a.t?r(t,a.t,0,0,i):s},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,i),this.s.t=e.s.t}function TextAnimatorProperty(t,e,i){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=i,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(i)}TextAnimatorProperty.prototype.searchProperties=function(){var t,e=this._textData.a.length,i,s=PropertyFactory.getProp;for(t=0;t<e;t+=1)i=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,i,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:s(this._elem,this._textData.p.a,0,0,this),f:s(this._elem,this._textData.p.f,0,0,this),l:s(this._elem,this._textData.p.l,0,0,this),r:s(this._elem,this._textData.p.r,0,0,this),p:s(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=s(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var i=this._moreOptions.alignment.v,s=this._animatorsData,r=this._textData,a=this.mHelper,n=this._renderType,l=this.renderedLetters.length,o,h,u,S,d=t.l,_,y,m,w,p,f,c,g,C,k,T,E,A,R,O;if(this._hasMaskedPath){if(O=this._pathData.m,!this._pathData.n||this._pathData._mdf){var F=O.v;this._pathData.r.v&&(F=F.reverse()),_={tLength:0,segments:[]},S=F._length-1;var V;for(E=0,u=0;u<S;u+=1)V=bez.buildBezierData(F.v[u],F.v[u+1],[F.o[u][0]-F.v[u][0],F.o[u][1]-F.v[u][1]],[F.i[u+1][0]-F.v[u+1][0],F.i[u+1][1]-F.v[u+1][1]]),_.tLength+=V.segmentLength,_.segments.push(V),E+=V.segmentLength;u=S,O.v.c&&(V=bez.buildBezierData(F.v[u],F.v[0],[F.o[u][0]-F.v[u][0],F.o[u][1]-F.v[u][1]],[F.i[0][0]-F.v[0][0],F.i[0][1]-F.v[0][1]]),_.tLength+=V.segmentLength,_.segments.push(V),E+=V.segmentLength),this._pathData.pi=_}if(_=this._pathData.pi,y=this._pathData.f.v,c=0,f=1,w=0,p=!0,k=_.segments,y<0&&O.v.c)for(_.tLength<Math.abs(y)&&(y=-Math.abs(y)%_.tLength),c=k.length-1,C=k[c].points,f=C.length-1;y<0;)y+=C[f].partialLength,f-=1,f<0&&(c-=1,C=k[c].points,f=C.length-1);C=k[c].points,g=C[f-1],m=C[f],T=m.partialLength}S=d.length,o=0,h=0;var B=t.finalSize*1.2*.714,I=!0,x,P,v,b,M;b=s.length;var D,j=-1,q,H,U,W=y,X=c,tt=f,nt=-1,et,Y,st,J,N,lt,pt,ht,ot="",ct=this.defaultPropsArray,dt;if(t.j===2||t.j===1){var it=0,ut=0,ft=t.j===2?-.5:-1,rt=0,mt=!0;for(u=0;u<S;u+=1)if(d[u].n){for(it&&(it+=ut);rt<u;)d[rt].animatorJustifyOffset=it,rt+=1;it=0,mt=!0}else{for(v=0;v<b;v+=1)x=s[v].a,x.t.propType&&(mt&&t.j===2&&(ut+=x.t.v*ft),P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),D.length?it+=x.t.v*D[0]*ft:it+=x.t.v*D*ft);mt=!1}for(it&&(it+=ut);rt<u;)d[rt].animatorJustifyOffset=it,rt+=1}for(u=0;u<S;u+=1){if(a.reset(),et=1,d[u].n)o=0,h+=t.yOffset,h+=I?1:0,y=W,I=!1,this._hasMaskedPath&&(c=X,f=tt,C=k[c].points,g=C[f-1],m=C[f],T=m.partialLength,w=0),ot="",ht="",lt="",dt="",ct=this.defaultPropsArray;else{if(this._hasMaskedPath){if(nt!==d[u].line){switch(t.j){case 1:y+=E-t.lineWidths[d[u].line];break;case 2:y+=(E-t.lineWidths[d[u].line])/2;break}nt=d[u].line}j!==d[u].ind&&(d[j]&&(y+=d[j].extra),y+=d[u].an/2,j=d[u].ind),y+=i[0]*d[u].an*.005;var at=0;for(v=0;v<b;v+=1)x=s[v].a,x.p.propType&&(P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),D.length?at+=x.p.v[0]*D[0]:at+=x.p.v[0]*D),x.a.propType&&(P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),D.length?at+=x.a.v[0]*D[0]:at+=x.a.v[0]*D);for(p=!0,this._pathData.a.v&&(y=d[0].an*.5+(E-this._pathData.f.v-d[0].an*.5-d[d.length-1].an*.5)*j/(S-1),y+=this._pathData.f.v);p;)w+T>=y+at||!C?(A=(y+at-w)/m.partialLength,H=g.point[0]+(m.point[0]-g.point[0])*A,U=g.point[1]+(m.point[1]-g.point[1])*A,a.translate(-i[0]*d[u].an*.005,-(i[1]*B)*.01),p=!1):C&&(w+=m.partialLength,f+=1,f>=C.length&&(f=0,c+=1,k[c]?C=k[c].points:O.v.c?(f=0,c=0,C=k[c].points):(w-=m.partialLength,C=null)),C&&(g=m,m=C[f],T=m.partialLength));q=d[u].an/2-d[u].add,a.translate(-q,0,0)}else q=d[u].an/2-d[u].add,a.translate(-q,0,0),a.translate(-i[0]*d[u].an*.005,-i[1]*B*.01,0);for(v=0;v<b;v+=1)x=s[v].a,x.t.propType&&(P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),(o!==0||t.j!==0)&&(this._hasMaskedPath?D.length?y+=x.t.v*D[0]:y+=x.t.v*D:D.length?o+=x.t.v*D[0]:o+=x.t.v*D));for(t.strokeWidthAnim&&(st=t.sw||0),t.strokeColorAnim&&(t.sc?Y=[t.sc[0],t.sc[1],t.sc[2]]:Y=[0,0,0]),t.fillColorAnim&&t.fc&&(J=[t.fc[0],t.fc[1],t.fc[2]]),v=0;v<b;v+=1)x=s[v].a,x.a.propType&&(P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),D.length?a.translate(-x.a.v[0]*D[0],-x.a.v[1]*D[1],x.a.v[2]*D[2]):a.translate(-x.a.v[0]*D,-x.a.v[1]*D,x.a.v[2]*D));for(v=0;v<b;v+=1)x=s[v].a,x.s.propType&&(P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),D.length?a.scale(1+(x.s.v[0]-1)*D[0],1+(x.s.v[1]-1)*D[1],1):a.scale(1+(x.s.v[0]-1)*D,1+(x.s.v[1]-1)*D,1));for(v=0;v<b;v+=1){if(x=s[v].a,P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),x.sk.propType&&(D.length?a.skewFromAxis(-x.sk.v*D[0],x.sa.v*D[1]):a.skewFromAxis(-x.sk.v*D,x.sa.v*D)),x.r.propType&&(D.length?a.rotateZ(-x.r.v*D[2]):a.rotateZ(-x.r.v*D)),x.ry.propType&&(D.length?a.rotateY(x.ry.v*D[1]):a.rotateY(x.ry.v*D)),x.rx.propType&&(D.length?a.rotateX(x.rx.v*D[0]):a.rotateX(x.rx.v*D)),x.o.propType&&(D.length?et+=(x.o.v*D[0]-et)*D[0]:et+=(x.o.v*D-et)*D),t.strokeWidthAnim&&x.sw.propType&&(D.length?st+=x.sw.v*D[0]:st+=x.sw.v*D),t.strokeColorAnim&&x.sc.propType)for(N=0;N<3;N+=1)D.length?Y[N]+=(x.sc.v[N]-Y[N])*D[0]:Y[N]+=(x.sc.v[N]-Y[N])*D;if(t.fillColorAnim&&t.fc){if(x.fc.propType)for(N=0;N<3;N+=1)D.length?J[N]+=(x.fc.v[N]-J[N])*D[0]:J[N]+=(x.fc.v[N]-J[N])*D;x.fh.propType&&(D.length?J=addHueToRGB(J,x.fh.v*D[0]):J=addHueToRGB(J,x.fh.v*D)),x.fs.propType&&(D.length?J=addSaturationToRGB(J,x.fs.v*D[0]):J=addSaturationToRGB(J,x.fs.v*D)),x.fb.propType&&(D.length?J=addBrightnessToRGB(J,x.fb.v*D[0]):J=addBrightnessToRGB(J,x.fb.v*D))}}for(v=0;v<b;v+=1)x=s[v].a,x.p.propType&&(P=s[v].s,D=P.getMult(d[u].anIndexes[v],r.a[v].s.totalChars),this._hasMaskedPath?D.length?a.translate(0,x.p.v[1]*D[0],-x.p.v[2]*D[1]):a.translate(0,x.p.v[1]*D,-x.p.v[2]*D):D.length?a.translate(x.p.v[0]*D[0],x.p.v[1]*D[1],-x.p.v[2]*D[2]):a.translate(x.p.v[0]*D,x.p.v[1]*D,-x.p.v[2]*D));if(t.strokeWidthAnim&&(lt=st<0?0:st),t.strokeColorAnim&&(pt="rgb("+Math.round(Y[0]*255)+","+Math.round(Y[1]*255)+","+Math.round(Y[2]*255)+")"),t.fillColorAnim&&t.fc&&(ht="rgb("+Math.round(J[0]*255)+","+Math.round(J[1]*255)+","+Math.round(J[2]*255)+")"),this._hasMaskedPath){if(a.translate(0,-t.ls),a.translate(0,i[1]*B*.01+h,0),this._pathData.p.v){R=(m.point[1]-g.point[1])/(m.point[0]-g.point[0]);var vt=Math.atan(R)*180/Math.PI;m.point[0]<g.point[0]&&(vt+=180),a.rotate(-vt*Math.PI/180)}a.translate(H,U,0),y-=i[0]*d[u].an*.005,d[u+1]&&j!==d[u+1].ind&&(y+=d[u].an/2,y+=t.tr*.001*t.finalSize)}else{switch(a.translate(o,h,0),t.ps&&a.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:a.translate(d[u].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[d[u].line]),0,0);break;case 2:a.translate(d[u].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[d[u].line])/2,0,0);break}a.translate(0,-t.ls),a.translate(q,0,0),a.translate(i[0]*d[u].an*.005,i[1]*B*.01,0),o+=d[u].l+t.tr*.001*t.finalSize}n==="html"?ot=a.toCSS():n==="svg"?ot=a.to2dCSS():ct=[a.props[0],a.props[1],a.props[2],a.props[3],a.props[4],a.props[5],a.props[6],a.props[7],a.props[8],a.props[9],a.props[10],a.props[11],a.props[12],a.props[13],a.props[14],a.props[15]],dt=et}l<=u?(M=new LetterProps(dt,lt,pt,ht,ot,ct),this.renderedLetters.push(M),l+=1,this.lettersChangedFlag=!0):(M=this.renderedLetters[u],this.lettersChangedFlag=M.update(dt,lt,pt,ht,ot,ct)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty);function ITextElement(){}ITextElement.prototype.initElement=function(t,e,i){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,i),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},ITextElement.prototype.createPathShape=function(t,e){var i,s=e.length,r,a="";for(i=0;i<s;i+=1)e[i].ty==="sh"&&(r=e[i].ks.k,a+=buildShapeString(r,r.i.length,!0,t));return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,i,s,r){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i])/2,0,0);break}e.translate(s,r,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},ITextElement.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var emptyShapeData={shapes:[]};function SVGTextLottieElement(t,e,i){this.textSpans=[],this.renderType="svg",this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(t){for(var e=0,i=t.length,s=[],r="";e<i;)t[e]==="\r"||t[e]===""?(s.push(r),r=""):r+=t[e],e+=1;return s.push(r),s},SVGTextLottieElement.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var i=t.shapes[0];if(i.it){var s=i.it[i.it.length-1];s.s&&(s.s.k[0]=e,s.s.k[1]=e)}}return t},SVGTextLottieElement.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,i=this.textProperty.currentData;this.renderedLetters=createSizedArray(i?i.l.length:0),i.fc?this.layerElement.setAttribute("fill",this.buildColor(i.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),i.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(i.sc)),this.layerElement.setAttribute("stroke-width",i.sw)),this.layerElement.setAttribute("font-size",i.finalSize);var s=this.globalData.fontManager.getFontByName(i.f);if(s.fClass)this.layerElement.setAttribute("class",s.fClass);else{this.layerElement.setAttribute("font-family",s.fFamily);var r=i.fWeight,a=i.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",r)}this.layerElement.setAttribute("aria-label",i.t);var n=i.l||[],l=!!this.globalData.fontManager.chars;e=n.length;var o,h=this.mHelper,u="",S=this.data.singleShape,d=0,_=0,y=!0,m=i.tr*.001*i.finalSize;if(S&&!l&&!i.sz){var w=this.textContainer,p="start";switch(i.j){case 1:p="end";break;case 2:p="middle";break;default:p="start";break}w.setAttribute("text-anchor",p),w.setAttribute("letter-spacing",m);var f=this.buildTextContents(i.finalText);for(e=f.length,_=i.ps?i.ps[1]+i.ascent:0,t=0;t<e;t+=1)o=this.textSpans[t].span||createNS("tspan"),o.textContent=f[t],o.setAttribute("x",0),o.setAttribute("y",_),o.style.display="inherit",w.appendChild(o),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=o,_+=i.finalLineHeight;this.layerElement.appendChild(w)}else{var c=this.textSpans.length,g;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!l||!S||t===0){if(o=c>t?this.textSpans[t].span:createNS(l?"g":"text"),c<=t){if(o.setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=o,l){var C=createNS("g");o.appendChild(C),this.textSpans[t].childSpan=C}this.textSpans[t].span=o,this.layerElement.appendChild(o)}o.style.display="inherit"}if(h.reset(),S&&(n[t].n&&(d=-m,_+=i.yOffset,_+=y?1:0,y=!1),this.applyTextPropertiesToMatrix(i,h,n[t].line,d,_),d+=n[t].l||0,d+=m),l){g=this.globalData.fontManager.getCharData(i.finalText[t],s.fStyle,this.globalData.fontManager.getFontByName(i.f).fFamily);var k;if(g.t===1)k=new SVGCompElement(g.data,this.globalData,this);else{var T=emptyShapeData;g.data&&g.data.shapes&&(T=this.buildShapeData(g.data,i.finalSize)),k=new SVGShapeElement(T,this.globalData,this)}if(this.textSpans[t].glyph){var E=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(E.layerElement),E.destroy()}this.textSpans[t].glyph=k,k._debug=!0,k.prepareFrame(0),k.renderFrame(),this.textSpans[t].childSpan.appendChild(k.layerElement),g.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+i.finalSize/100+","+i.finalSize/100+")")}else S&&o.setAttribute("transform","translate("+h.props[12]+","+h.props[13]+")"),o.textContent=n[t].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}S&&o&&o.setAttribute("d",u)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},SVGTextLottieElement.prototype.getValue=function(){var t,e=this.textSpans.length,i;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)i=this.textSpans[t].glyph,i&&(i.prepareFrame(this.comp.renderedFrame-this.data.st),i._mdf&&(this._mdf=!0))},SVGTextLottieElement.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,i=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;e=s.length;var r,a,n;for(t=0;t<e;t+=1)s[t].n||(r=i[t],a=this.textSpans[t].span,n=this.textSpans[t].glyph,n&&n.renderFrame(),r._mdf.m&&a.setAttribute("transform",r.m),r._mdf.o&&a.setAttribute("opacity",r.o),r._mdf.sw&&a.setAttribute("stroke-width",r.sw),r._mdf.sc&&a.setAttribute("stroke",r.sc),r._mdf.fc&&a.setAttribute("fill",r.fc))}};function ISolidElement(t,e,i){this.initElement(t,e,i)}extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function NullElement(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initFrame(),this.initTransform(t,e,i),this.initHierarchy()}NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement);function SVGRendererBase(){}extendPrototype([BaseRenderer],SVGRendererBase),SVGRendererBase.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRendererBase.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRendererBase.prototype.createText=function(t){return new SVGTextLottieElement(t,this.globalData,this)},SVGRendererBase.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRendererBase.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRendererBase.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var i=createNS("clipPath"),s=createNS("rect");s.setAttribute("width",t.w),s.setAttribute("height",t.h),s.setAttribute("x",0),s.setAttribute("y",0);var r=createElementID();i.setAttribute("id",r),i.appendChild(s),this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+r+")"),e.appendChild(i),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRendererBase.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendererBase.prototype.updateContainerSize=function(){},SVGRendererBase.prototype.findIndexByInd=function(t){var e=0,i=this.layers.length;for(e=0;e<i;e+=1)if(this.layers[e].ind===t)return e;return-1},SVGRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var i=this.createItem(this.layers[t]);if(e[t]=i,getExpressionsPlugin()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(i),i.initExpressions()),this.appendElementInPos(i,t),this.layers[t].tt){var s="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(s===-1)return;if(!this.elements[s]||this.elements[s]===!0)this.buildItem(s),this.addPendingElement(i);else{var r=e[s],a=r.getMatte(this.layers[t].tt);i.setMatte(a)}}}},SVGRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,i=this.elements.length;e<i;){if(this.elements[e]===t){var s="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,r=this.elements[s],a=r.getMatte(this.layers[e].tt);t.setMatte(a);break}e+=1}}},SVGRendererBase.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=i-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<i;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRendererBase.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){for(var s=0,r;s<e;)this.elements[s]&&this.elements[s]!==!0&&this.elements[s].getBaseElement()&&(r=this.elements[s].getBaseElement()),s+=1;r?this.layerElement.insertBefore(i,r):this.layerElement.appendChild(i)}},SVGRendererBase.prototype.hide=function(){this.layerElement.style.display="none"},SVGRendererBase.prototype.show=function(){this.layerElement.style.display="block"};function ICompElement(){}extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initTransform(t,e,i),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var i,s=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&(this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st),this.elements[i]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function SVGCompElement(t,e,i){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}extendPrototype([SVGRendererBase,ICompElement,SVGBaseElement],SVGCompElement),SVGCompElement.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)};function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var i="";if(e&&e.title){var s=createNS("title"),r=createElementID();s.setAttribute("id",r),s.textContent=e.title,this.svgElement.appendChild(s),i+=r}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),i+=" "+n}i&&this.svgElement.setAttribute("aria-labelledby",i);var l=createNS("defs");this.svgElement.appendChild(l);var o=createNS("g");this.svgElement.appendChild(o),this.layerElement=o,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:l,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}extendPrototype([SVGRendererBase],SVGRenderer),SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)};function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}ShapeTransformManager.prototype={addTransformSequence:function(e){var i,s=e.length,r="_";for(i=0;i<s;i+=1)r+=e[i].transform.key+"_";var a=this.sequences[r];return a||(a={transforms:[].concat(e),finalTransform:new Matrix,_mdf:!1},this.sequences[r]=a,this.sequenceList.push(a)),a},processSequence:function(e,i){for(var s=0,r=e.transforms.length,a=i;s<r&&!i;){if(e.transforms[s].transform.mProps._mdf){a=!0;break}s+=1}if(a)for(e.finalTransform.reset(),s=r-1;s>=0;s-=1)e.finalTransform.multiply(e.transforms[s].transform.mProps.v);e._mdf=a},processSequences:function(e){var i,s=this.sequenceList.length;for(i=0;i<s;i+=1)this.processSequence(this.sequenceList[i],e)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}};var lumaLoader=function(){var e="__lottie_element_luma_buffer",i=null,s=null,r=null;function a(){var o=createNS("svg"),h=createNS("filter"),u=createNS("feColorMatrix");return h.setAttribute("id",e),u.setAttribute("type","matrix"),u.setAttribute("color-interpolation-filters","sRGB"),u.setAttribute("values","0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),h.appendChild(u),o.appendChild(h),o.setAttribute("id",e+"_svg"),featureSupport.svgLumaHidden&&(o.style.display="none"),o}function n(){i||(r=a(),document.body.appendChild(r),i=createTag("canvas"),s=i.getContext("2d"),s.filter="url(#"+e+")",s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,1,1))}function l(o){return i||n(),i.width=o.width,i.height=o.height,s.filter="url(#"+e+")",i}return{load:n,get:l}};function createCanvas(t,e){if(featureSupport.offscreenCanvas)return new OffscreenCanvas(t,e);var i=createTag("canvas");return i.width=t,i.height=e,i}var assetLoader=function(){return{loadLumaCanvas:lumaLoader.load,getLumaCanvas:lumaLoader.get,createCanvas}}(),registeredEffects={};function CVEffects(t){var e,i=t.data.ef?t.data.ef.length:0;this.filters=[];var s;for(e=0;e<i;e+=1){s=null;var r=t.data.ef[e].ty;if(registeredEffects[r]){var a=registeredEffects[r].effect;s=new a(t.effectsManager.effectElements[e],t)}s&&this.filters.push(s)}this.filters.length&&t.addRenderableComponent(this)}CVEffects.prototype.renderFrame=function(t){var e,i=this.filters.length;for(e=0;e<i;e+=1)this.filters[e].renderFrame(t)},CVEffects.prototype.getEffects=function(t){var e,i=this.filters.length,s=[];for(e=0;e<i;e+=1)this.filters[e].type===t&&s.push(this.filters[e]);return s};function registerEffect(t,e){registeredEffects[t]={effect:e}}function CVMaskElement(t,e){this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i,s=this.masksProperties.length,r=!1;for(i=0;i<s;i+=1)this.masksProperties[i].mode!=="n"&&(r=!0),this.viewData[i]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3);this.hasMasks=r,r&&this.element.addRenderableComponent(this)}CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t=this.element.finalTransform.mat,e=this.element.canvasContext,i,s=this.masksProperties.length,r,a,n;for(e.beginPath(),i=0;i<s;i+=1)if(this.masksProperties[i].mode!=="n"){this.masksProperties[i].inv&&(e.moveTo(0,0),e.lineTo(this.element.globalData.compSize.w,0),e.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),e.lineTo(0,this.element.globalData.compSize.h),e.lineTo(0,0)),n=this.viewData[i].v,r=t.applyToPointArray(n.v[0][0],n.v[0][1],0),e.moveTo(r[0],r[1]);var l,o=n._length;for(l=1;l<o;l+=1)a=t.applyToTriplePoints(n.o[l-1],n.i[l],n.v[l]),e.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5]);a=t.applyToTriplePoints(n.o[l-1],n.i[0],n.v[0]),e.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5])}this.element.globalData.renderer.save(!0),e.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null};function CVBaseElement(){}var operationsMap={1:"source-in",2:"source-out",3:"source-in",4:"source-out"};CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){if(this.data.tt>=1){this.buffers=[];var e=this.globalData.canvasContext,i=assetLoader.createCanvas(e.canvas.width,e.canvas.height);this.buffers.push(i);var s=assetLoader.createCanvas(e.canvas.width,e.canvas.height);this.buffers.push(s),this.data.tt>=3&&!document._isProxy&&assetLoader.loadLumaCanvas()}this.canvasContext=this.globalData.canvasContext,this.transformCanvas=this.globalData.transformCanvas,this.renderableEffectsManager=new CVEffects(this),this.searchEffectTransforms()},createContent:function(){},setBlendMode:function(){var e=this.globalData;if(e.blendMode!==this.data.bm){e.blendMode=this.data.bm;var i=getBlendMode(this.data.bm);e.canvasContext.globalCompositeOperation=i}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this),this.transformEffects=this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)},hideElement:function(){!this.hidden&&(!this.isInRange||this.isTransparent)&&(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},clearCanvas:function(e){e.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)},prepareLayer:function(){if(this.data.tt>=1){var e=this.buffers[0],i=e.getContext("2d");this.clearCanvas(i),i.drawImage(this.canvasContext.canvas,0,0),this.currentTransform=this.canvasContext.getTransform(),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform)}},exitLayer:function(){if(this.data.tt>=1){var e=this.buffers[1],i=e.getContext("2d");this.clearCanvas(i),i.drawImage(this.canvasContext.canvas,0,0),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform);var s=this.comp.getElementById("tp"in this.data?this.data.tp:this.data.ind-1);if(s.renderFrame(!0),this.canvasContext.setTransform(1,0,0,1,0,0),this.data.tt>=3&&!document._isProxy){var r=assetLoader.getLumaCanvas(this.canvasContext.canvas),a=r.getContext("2d");a.drawImage(this.canvasContext.canvas,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.drawImage(r,0,0)}this.canvasContext.globalCompositeOperation=operationsMap[this.data.tt],this.canvasContext.drawImage(e,0,0),this.canvasContext.globalCompositeOperation="destination-over",this.canvasContext.drawImage(this.buffers[0],0,0),this.canvasContext.setTransform(this.currentTransform),this.canvasContext.globalCompositeOperation="source-over"}},renderFrame:function(e){if(!(this.hidden||this.data.hd)&&!(this.data.td===1&&!e)){this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.setBlendMode();var i=this.data.ty===0;this.prepareLayer(),this.globalData.renderer.save(i),this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),this.renderInnerContent(),this.globalData.renderer.restore(i),this.exitLayer(),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement;function CVShapeData(t,e,i,s){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var r=4;e.ty==="rc"?r=5:e.ty==="el"?r=6:e.ty==="sr"&&(r=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,r,t);var a,n=i.length,l;for(a=0;a<n;a+=1)i[a].closed||(l={transforms:s.addTransformSequence(i[a].transforms),trNodes:[]},this.styledShapes.push(l),i[a].elements.push(l))}CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated;function CVShapeElement(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var i={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:t.hd===!0},s={};if(t.ty==="fl"||t.ty==="st"?(s.c=PropertyFactory.getProp(this,t.c,1,255,this),s.c.k||(i.co="rgb("+bmFloor(s.c.v[0])+","+bmFloor(s.c.v[1])+","+bmFloor(s.c.v[2])+")")):(t.ty==="gf"||t.ty==="gs")&&(s.s=PropertyFactory.getProp(this,t.s,1,null,this),s.e=PropertyFactory.getProp(this,t.e,1,null,this),s.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),s.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),s.g=new GradientProperty(this,t.g,this)),s.o=PropertyFactory.getProp(this,t.o,0,.01,this),t.ty==="st"||t.ty==="gs"){if(i.lc=lineCapEnum[t.lc||2],i.lj=lineJoinEnum[t.lj||2],t.lj==1&&(i.ml=t.ml),s.w=PropertyFactory.getProp(this,t.w,0,null,this),s.w.k||(i.wi=s.w.v),t.d){var r=new DashProperty(this,t.d,"canvas",this);s.d=r,s.d.k||(i.da=s.d.dashArray,i.do=s.d.dashoffset[0])}}else i.r=t.r===2?"evenodd":"nonzero";return this.stylesList.push(i),s.style=i,s},CVShapeElement.prototype.createGroupElement=function(){var t={it:[],prevViewData:[]};return t},CVShapeElement.prototype.createTransformElement=function(t){var e={transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}};return e},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,i,s,r){var a,n=t.length-1,l,o,h=[],u=[],S,d,_,y=[].concat(r);for(a=n;a>=0;a-=1){if(S=this.searchProcessedElement(t[a]),S?e[a]=i[S-1]:t[a]._shouldRender=s,t[a].ty==="fl"||t[a].ty==="st"||t[a].ty==="gf"||t[a].ty==="gs")S?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],y),h.push(e[a].style);else if(t[a].ty==="gr"){if(!S)e[a]=this.createGroupElement(t[a]);else for(o=e[a].it.length,l=0;l<o;l+=1)e[a].prevViewData[l]=e[a].it[l];this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,s,y)}else t[a].ty==="tr"?(S||(_=this.createTransformElement(t[a]),e[a]=_),y.push(e[a]),this.addTransformToStyleList(e[a])):t[a].ty==="sh"||t[a].ty==="rc"||t[a].ty==="el"||t[a].ty==="sr"?S||(e[a]=this.createShapeElement(t[a])):t[a].ty==="tm"||t[a].ty==="rd"||t[a].ty==="pb"||t[a].ty==="zz"||t[a].ty==="op"?(S?(d=e[a],d.closed=!1):(d=ShapeModifiers.getModifier(t[a].ty),d.init(this,t[a]),e[a]=d,this.shapeModifiers.push(d)),u.push(d)):t[a].ty==="rp"&&(S?(d=e[a],d.closed=!0):(d=ShapeModifiers.getModifier(t[a].ty),e[a]=d,d.init(this,t,a,e),this.shapeModifiers.push(d),s=!1),u.push(d));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(h),n=u.length,a=0;a<n;a+=1)u[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e=this.stylesList.length,i,s,r,a,n,l,o=this.globalData.renderer,h=this.globalData.canvasContext,u,S;for(t=0;t<e;t+=1)if(S=this.stylesList[t],u=S.type,!((u==="st"||u==="gs")&&S.wi===0||!S.data._shouldRender||S.coOp===0||this.globalData.currentGlobalAlpha===0)){for(o.save(),n=S.elements,u==="st"||u==="gs"?(o.ctxStrokeStyle(u==="st"?S.co:S.grd),o.ctxLineWidth(S.wi),o.ctxLineCap(S.lc),o.ctxLineJoin(S.lj),o.ctxMiterLimit(S.ml||0)):o.ctxFillStyle(u==="fl"?S.co:S.grd),o.ctxOpacity(S.coOp),u!=="st"&&u!=="gs"&&h.beginPath(),o.ctxTransform(S.preTransforms.finalTransform.props),s=n.length,i=0;i<s;i+=1){for((u==="st"||u==="gs")&&(h.beginPath(),S.da&&(h.setLineDash(S.da),h.lineDashOffset=S.do)),l=n[i].trNodes,a=l.length,r=0;r<a;r+=1)l[r].t==="m"?h.moveTo(l[r].p[0],l[r].p[1]):l[r].t==="c"?h.bezierCurveTo(l[r].pts[0],l[r].pts[1],l[r].pts[2],l[r].pts[3],l[r].pts[4],l[r].pts[5]):h.closePath();(u==="st"||u==="gs")&&(o.ctxStroke(),S.da&&h.setLineDash(this.dashResetter))}u!=="st"&&u!=="gs"&&this.globalData.renderer.ctxFill(S.r),o.restore()}},CVShapeElement.prototype.renderShape=function(t,e,i,s){var r,a=e.length-1,n;for(n=t,r=a;r>=0;r-=1)e[r].ty==="tr"?(n=i[r].transform,this.renderShapeTransform(t,n)):e[r].ty==="sh"||e[r].ty==="el"||e[r].ty==="rc"||e[r].ty==="sr"?this.renderPath(e[r],i[r]):e[r].ty==="fl"?this.renderFill(e[r],i[r],n):e[r].ty==="st"?this.renderStroke(e[r],i[r],n):e[r].ty==="gf"||e[r].ty==="gs"?this.renderGradientFill(e[r],i[r],n):e[r].ty==="gr"?this.renderShape(n,e[r].it,i[r].it):e[r].ty;s&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var i=t.trNodes,s=e.paths,r,a,n,l=s._length;i.length=0;var o=t.transforms.finalTransform;for(n=0;n<l;n+=1){var h=s.shapes[n];if(h&&h.v){for(a=h._length,r=1;r<a;r+=1)r===1&&i.push({t:"m",p:o.applyToPointArray(h.v[0][0],h.v[0][1],0)}),i.push({t:"c",pts:o.applyToTriplePoints(h.o[r-1],h.i[r],h.v[r])});a===1&&i.push({t:"m",p:o.applyToPointArray(h.v[0][0],h.v[0][1],0)}),h.c&&a&&(i.push({t:"c",pts:o.applyToTriplePoints(h.o[r-1],h.i[0],h.v[0])}),i.push({t:"z"}))}}t.trNodes=i}},CVShapeElement.prototype.renderPath=function(t,e){if(t.hd!==!0&&t._shouldRender){var i,s=e.styledShapes.length;for(i=0;i<s;i+=1)this.renderStyledShape(e.styledShapes[i],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,i){var s=e.style;(e.c._mdf||this._isFirstFrame)&&(s.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||i._opMdf||this._isFirstFrame)&&(s.coOp=e.o.v*i.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,i){var s=e.style,r;if(!s.grd||e.g._mdf||e.s._mdf||e.e._mdf||t.t!==1&&(e.h._mdf||e.a._mdf)){var a=this.globalData.canvasContext,n=e.s.v,l=e.e.v;if(t.t===1)r=a.createLinearGradient(n[0],n[1],l[0],l[1]);else{var o=Math.sqrt(Math.pow(n[0]-l[0],2)+Math.pow(n[1]-l[1],2)),h=Math.atan2(l[1]-n[1],l[0]-n[0]),u=e.h.v;u>=1?u=.99:u<=-1&&(u=-.99);var S=o*u,d=Math.cos(h+e.a.v)*S+n[0],_=Math.sin(h+e.a.v)*S+n[1];r=a.createRadialGradient(d,_,0,n[0],n[1],o)}var y,m=t.g.p,w=e.g.c,p=1;for(y=0;y<m;y+=1)e.g._hasOpacity&&e.g._collapsable&&(p=e.g.o[y*2+1]),r.addColorStop(w[y*4]/100,"rgba("+w[y*4+1]+","+w[y*4+2]+","+w[y*4+3]+","+p+")");s.grd=r}s.coOp=e.o.v*i.opacity},CVShapeElement.prototype.renderStroke=function(t,e,i){var s=e.style,r=e.d;r&&(r._mdf||this._isFirstFrame)&&(s.da=r.dashArray,s.do=r.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(s.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||i._opMdf||this._isFirstFrame)&&(s.coOp=e.o.v*i.opacity),(e.w._mdf||this._isFirstFrame)&&(s.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0};function CVTextElement(t,e,i){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var i=!1;t.sc&&(i=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var s=this.globalData.fontManager.getFontByName(t.f),r,a,n=t.l,l=this.mHelper;this.stroke=i,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,a=t.finalText.length;var o,h,u,S,d,_,y,m,w,p,f=this.data.singleShape,c=t.tr*.001*t.finalSize,g=0,C=0,k=!0,T=0;for(r=0;r<a;r+=1){o=this.globalData.fontManager.getCharData(t.finalText[r],s.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily),h=o&&o.data||{},l.reset(),f&&n[r].n&&(g=-c,C+=t.yOffset,C+=k?1:0,k=!1),d=h.shapes?h.shapes[0].it:[],y=d.length,l.scale(t.finalSize/100,t.finalSize/100),f&&this.applyTextPropertiesToMatrix(t,l,n[r].line,g,C),w=createSizedArray(y-1);var E=0;for(_=0;_<y;_+=1)if(d[_].ty==="sh"){for(S=d[_].ks.k.i.length,m=d[_].ks.k,p=[],u=1;u<S;u+=1)u===1&&p.push(l.applyToX(m.v[0][0],m.v[0][1],0),l.applyToY(m.v[0][0],m.v[0][1],0)),p.push(l.applyToX(m.o[u-1][0],m.o[u-1][1],0),l.applyToY(m.o[u-1][0],m.o[u-1][1],0),l.applyToX(m.i[u][0],m.i[u][1],0),l.applyToY(m.i[u][0],m.i[u][1],0),l.applyToX(m.v[u][0],m.v[u][1],0),l.applyToY(m.v[u][0],m.v[u][1],0));p.push(l.applyToX(m.o[u-1][0],m.o[u-1][1],0),l.applyToY(m.o[u-1][0],m.o[u-1][1],0),l.applyToX(m.i[0][0],m.i[0][1],0),l.applyToY(m.i[0][0],m.i[0][1],0),l.applyToX(m.v[0][0],m.v[0][1],0),l.applyToY(m.v[0][0],m.v[0][1],0)),w[E]=p,E+=1}f&&(g+=n[r].l,g+=c),this.textSpans[T]?this.textSpans[T].elem=w:this.textSpans[T]={elem:w},T+=1}},CVTextElement.prototype.renderInnerContent=function(){this.validateText();var t=this.canvasContext;t.font=this.values.fValue,this.globalData.renderer.ctxLineCap("butt"),this.globalData.renderer.ctxLineJoin("miter"),this.globalData.renderer.ctxMiterLimit(4),this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var e,i,s,r,a,n,l=this.textAnimator.renderedLetters,o=this.textProperty.currentData.l;i=o.length;var h,u=null,S=null,d=null,_,y,m=this.globalData.renderer;for(e=0;e<i;e+=1)if(!o[e].n){if(h=l[e],h&&(m.save(),m.ctxTransform(h.p),m.ctxOpacity(h.o)),this.fill){for(h&&h.fc?u!==h.fc&&(m.ctxFillStyle(h.fc),u=h.fc):u!==this.values.fill&&(u=this.values.fill,m.ctxFillStyle(this.values.fill)),_=this.textSpans[e].elem,r=_.length,this.globalData.canvasContext.beginPath(),s=0;s<r;s+=1)for(y=_[s],n=y.length,this.globalData.canvasContext.moveTo(y[0],y[1]),a=2;a<n;a+=6)this.globalData.canvasContext.bezierCurveTo(y[a],y[a+1],y[a+2],y[a+3],y[a+4],y[a+5]);this.globalData.canvasContext.closePath(),m.ctxFill()}if(this.stroke){for(h&&h.sw?d!==h.sw&&(d=h.sw,m.ctxLineWidth(h.sw)):d!==this.values.sWidth&&(d=this.values.sWidth,m.ctxLineWidth(this.values.sWidth)),h&&h.sc?S!==h.sc&&(S=h.sc,m.ctxStrokeStyle(h.sc)):S!==this.values.stroke&&(S=this.values.stroke,m.ctxStrokeStyle(this.values.stroke)),_=this.textSpans[e].elem,r=_.length,this.globalData.canvasContext.beginPath(),s=0;s<r;s+=1)for(y=_[s],n=y.length,this.globalData.canvasContext.moveTo(y[0],y[1]),a=2;a<n;a+=6)this.globalData.canvasContext.bezierCurveTo(y[a],y[a+1],y[a+2],y[a+3],y[a+4],y[a+5]);this.globalData.canvasContext.closePath(),m.ctxStroke()}h&&this.globalData.renderer.restore()}};function CVImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e=t.getContext("2d"),i=this.img.width,s=this.img.height,r=i/s,a=this.assetData.w/this.assetData.h,n,l,o=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;r>a&&o==="xMidYMid slice"||r<a&&o!=="xMidYMid slice"?(l=s,n=l*a):(n=i,l=n/a),e.drawImage(this.img,(i-n)/2,(s-l)/2,n,l,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null};function CVSolidElement(t,e,i){this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){this.globalData.renderer.ctxFillStyle(this.data.sc),this.globalData.renderer.ctxFillRect(0,0,this.data.sw,this.data.sh)};function CanvasRendererBase(){}extendPrototype([BaseRenderer],CanvasRendererBase),CanvasRendererBase.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRendererBase.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRendererBase.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRendererBase.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRendererBase.prototype.ctxTransform=function(t){t[0]===1&&t[1]===0&&t[4]===0&&t[5]===1&&t[12]===0&&t[13]===0||this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRendererBase.prototype.ctxOpacity=function(t){this.canvasContext.globalAlpha*=t<0?0:t},CanvasRendererBase.prototype.ctxFillStyle=function(t){this.canvasContext.fillStyle=t},CanvasRendererBase.prototype.ctxStrokeStyle=function(t){this.canvasContext.strokeStyle=t},CanvasRendererBase.prototype.ctxLineWidth=function(t){this.canvasContext.lineWidth=t},CanvasRendererBase.prototype.ctxLineCap=function(t){this.canvasContext.lineCap=t},CanvasRendererBase.prototype.ctxLineJoin=function(t){this.canvasContext.lineJoin=t},CanvasRendererBase.prototype.ctxMiterLimit=function(t){this.canvasContext.miterLimit=t},CanvasRendererBase.prototype.ctxFill=function(t){this.canvasContext.fill(t)},CanvasRendererBase.prototype.ctxFillRect=function(t,e,i,s){this.canvasContext.fillRect(t,e,i,s)},CanvasRendererBase.prototype.ctxStroke=function(){this.canvasContext.stroke()},CanvasRendererBase.prototype.reset=function(){if(!this.renderConfig.clearCanvas){this.canvasContext.restore();return}this.contextData.reset()},CanvasRendererBase.prototype.save=function(){this.canvasContext.save()},CanvasRendererBase.prototype.restore=function(t){if(!this.renderConfig.clearCanvas){this.canvasContext.restore();return}t&&(this.globalData.blendMode="source-over"),this.contextData.restore(t)},CanvasRendererBase.prototype.configAnimation=function(t){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var e=this.animationItem.container.style;e.width="100%",e.height="100%";var i="0px 0px 0px";e.transformOrigin=i,e.mozTransformOrigin=i,e.webkitTransformOrigin=i,e["-webkit-transform"]=i,e.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.contextData.setContext(this.canvasContext),this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRendererBase.prototype.updateContainerSize=function(t,e){this.reset();var i,s;t?(i=t,s=e,this.canvasContext.canvas.width=i,this.canvasContext.canvas.height=s):(this.animationItem.wrapper&&this.animationItem.container?(i=this.animationItem.wrapper.offsetWidth,s=this.animationItem.wrapper.offsetHeight):(i=this.canvasContext.canvas.width,s=this.canvasContext.canvas.height),this.canvasContext.canvas.width=i*this.renderConfig.dpr,this.canvasContext.canvas.height=s*this.renderConfig.dpr);var r,a;if(this.renderConfig.preserveAspectRatio.indexOf("meet")!==-1||this.renderConfig.preserveAspectRatio.indexOf("slice")!==-1){var n=this.renderConfig.preserveAspectRatio.split(" "),l=n[1]||"meet",o=n[0]||"xMidYMid",h=o.substr(0,4),u=o.substr(4);r=i/s,a=this.transformCanvas.w/this.transformCanvas.h,a>r&&l==="meet"||a<r&&l==="slice"?(this.transformCanvas.sx=i/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=s/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=s/(this.transformCanvas.h/this.renderConfig.dpr)),h==="xMid"&&(a<r&&l==="meet"||a>r&&l==="slice")?this.transformCanvas.tx=(i-this.transformCanvas.w*(s/this.transformCanvas.h))/2*this.renderConfig.dpr:h==="xMax"&&(a<r&&l==="meet"||a>r&&l==="slice")?this.transformCanvas.tx=(i-this.transformCanvas.w*(s/this.transformCanvas.h))*this.renderConfig.dpr:this.transformCanvas.tx=0,u==="YMid"&&(a>r&&l==="meet"||a<r&&l==="slice")?this.transformCanvas.ty=(s-this.transformCanvas.h*(i/this.transformCanvas.w))/2*this.renderConfig.dpr:u==="YMax"&&(a>r&&l==="meet"||a<r&&l==="slice")?this.transformCanvas.ty=(s-this.transformCanvas.h*(i/this.transformCanvas.w))*this.renderConfig.dpr:this.transformCanvas.ty=0}else this.renderConfig.preserveAspectRatio==="none"?(this.transformCanvas.sx=i/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=s/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRendererBase.prototype.destroy=function(){this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText="");var t,e=this.layers?this.layers.length:0;for(t=e-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRendererBase.prototype.renderFrame=function(t,e){if(!(this.renderedFrame===t&&this.renderConfig.clearCanvas===!0&&!e||this.destroyed||t===-1)){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var i,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&this.elements[i].prepareFrame(t-this.layers[i].st);if(this.globalData._mdf){for(this.renderConfig.clearCanvas===!0?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&this.elements[i].renderFrame();this.renderConfig.clearCanvas!==!0&&this.restore()}}},CanvasRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){var i=this.createItem(this.layers[t],this,this.globalData);e[t]=i,i.initExpressions()}},CanvasRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},CanvasRendererBase.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRendererBase.prototype.show=function(){this.animationItem.container.style.display="block"};function CanvasContext(){this.opacity=-1,this.transform=createTypedArray("float32",16),this.fillStyle="",this.strokeStyle="",this.lineWidth="",this.lineCap="",this.lineJoin="",this.miterLimit="",this.id=Math.random()}function CVContextData(){this.stack=[],this.cArrPos=0,this.cTr=new Matrix;var t,e=15;for(t=0;t<e;t+=1){var i=new CanvasContext;this.stack[t]=i}this._length=e,this.nativeContext=null,this.transformMat=new Matrix,this.currentOpacity=1,this.currentFillStyle="",this.appliedFillStyle="",this.currentStrokeStyle="",this.appliedStrokeStyle="",this.currentLineWidth="",this.appliedLineWidth="",this.currentLineCap="",this.appliedLineCap="",this.currentLineJoin="",this.appliedLineJoin="",this.appliedMiterLimit="",this.currentMiterLimit=""}CVContextData.prototype.duplicate=function(){var t=this._length*2,e=0;for(e=this._length;e<t;e+=1)this.stack[e]=new CanvasContext;this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.stack[this.cArrPos].opacity=1},CVContextData.prototype.restore=function(t){this.cArrPos-=1;var e=this.stack[this.cArrPos],i=e.transform,s,r=this.cTr.props;for(s=0;s<16;s+=1)r[s]=i[s];if(t){this.nativeContext.restore();var a=this.stack[this.cArrPos+1];this.appliedFillStyle=a.fillStyle,this.appliedStrokeStyle=a.strokeStyle,this.appliedLineWidth=a.lineWidth,this.appliedLineCap=a.lineCap,this.appliedLineJoin=a.lineJoin,this.appliedMiterLimit=a.miterLimit}this.nativeContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13]),(t||e.opacity!==-1&&this.currentOpacity!==e.opacity)&&(this.nativeContext.globalAlpha=e.opacity,this.currentOpacity=e.opacity),this.currentFillStyle=e.fillStyle,this.currentStrokeStyle=e.strokeStyle,this.currentLineWidth=e.lineWidth,this.currentLineCap=e.lineCap,this.currentLineJoin=e.lineJoin,this.currentMiterLimit=e.miterLimit},CVContextData.prototype.save=function(t){t&&this.nativeContext.save();var e=this.cTr.props;this._length<=this.cArrPos&&this.duplicate();var i=this.stack[this.cArrPos],s;for(s=0;s<16;s+=1)i.transform[s]=e[s];this.cArrPos+=1;var r=this.stack[this.cArrPos];r.opacity=i.opacity,r.fillStyle=i.fillStyle,r.strokeStyle=i.strokeStyle,r.lineWidth=i.lineWidth,r.lineCap=i.lineCap,r.lineJoin=i.lineJoin,r.miterLimit=i.miterLimit},CVContextData.prototype.setOpacity=function(t){this.stack[this.cArrPos].opacity=t},CVContextData.prototype.setContext=function(t){this.nativeContext=t},CVContextData.prototype.fillStyle=function(t){this.stack[this.cArrPos].fillStyle!==t&&(this.currentFillStyle=t,this.stack[this.cArrPos].fillStyle=t)},CVContextData.prototype.strokeStyle=function(t){this.stack[this.cArrPos].strokeStyle!==t&&(this.currentStrokeStyle=t,this.stack[this.cArrPos].strokeStyle=t)},CVContextData.prototype.lineWidth=function(t){this.stack[this.cArrPos].lineWidth!==t&&(this.currentLineWidth=t,this.stack[this.cArrPos].lineWidth=t)},CVContextData.prototype.lineCap=function(t){this.stack[this.cArrPos].lineCap!==t&&(this.currentLineCap=t,this.stack[this.cArrPos].lineCap=t)},CVContextData.prototype.lineJoin=function(t){this.stack[this.cArrPos].lineJoin!==t&&(this.currentLineJoin=t,this.stack[this.cArrPos].lineJoin=t)},CVContextData.prototype.miterLimit=function(t){this.stack[this.cArrPos].miterLimit!==t&&(this.currentMiterLimit=t,this.stack[this.cArrPos].miterLimit=t)},CVContextData.prototype.transform=function(t){this.transformMat.cloneFromProps(t);var e=this.cTr;this.transformMat.multiply(e),e.cloneFromProps(this.transformMat.props);var i=e.props;this.nativeContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13])},CVContextData.prototype.opacity=function(t){var e=this.stack[this.cArrPos].opacity;e*=t<0?0:t,this.stack[this.cArrPos].opacity!==e&&(this.currentOpacity!==t&&(this.nativeContext.globalAlpha=t,this.currentOpacity=t),this.stack[this.cArrPos].opacity=e)},CVContextData.prototype.fill=function(t){this.appliedFillStyle!==this.currentFillStyle&&(this.appliedFillStyle=this.currentFillStyle,this.nativeContext.fillStyle=this.appliedFillStyle),this.nativeContext.fill(t)},CVContextData.prototype.fillRect=function(t,e,i,s){this.appliedFillStyle!==this.currentFillStyle&&(this.appliedFillStyle=this.currentFillStyle,this.nativeContext.fillStyle=this.appliedFillStyle),this.nativeContext.fillRect(t,e,i,s)},CVContextData.prototype.stroke=function(){this.appliedStrokeStyle!==this.currentStrokeStyle&&(this.appliedStrokeStyle=this.currentStrokeStyle,this.nativeContext.strokeStyle=this.appliedStrokeStyle),this.appliedLineWidth!==this.currentLineWidth&&(this.appliedLineWidth=this.currentLineWidth,this.nativeContext.lineWidth=this.appliedLineWidth),this.appliedLineCap!==this.currentLineCap&&(this.appliedLineCap=this.currentLineCap,this.nativeContext.lineCap=this.appliedLineCap),this.appliedLineJoin!==this.currentLineJoin&&(this.appliedLineJoin=this.currentLineJoin,this.nativeContext.lineJoin=this.appliedLineJoin),this.appliedMiterLimit!==this.currentMiterLimit&&(this.appliedMiterLimit=this.currentMiterLimit,this.nativeContext.miterLimit=this.appliedMiterLimit),this.nativeContext.stroke()};function CVCompElement(t,e,i){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}extendPrototype([CanvasRendererBase,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.beginPath(),t.moveTo(0,0),t.lineTo(this.data.w,0),t.lineTo(this.data.w,this.data.h),t.lineTo(0,this.data.h),t.lineTo(0,0),t.clip();var e,i=this.layers.length;for(e=i-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},CVCompElement.prototype.destroy=function(){var t,e=this.layers.length;for(t=e-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVCompElement.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)};function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:e&&e.clearCanvas!==void 0?e.clearCanvas:!0,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||"",runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas",this.renderConfig.clearCanvas&&(this.ctxTransform=this.contextData.transform.bind(this.contextData),this.ctxOpacity=this.contextData.opacity.bind(this.contextData),this.ctxFillStyle=this.contextData.fillStyle.bind(this.contextData),this.ctxStrokeStyle=this.contextData.strokeStyle.bind(this.contextData),this.ctxLineWidth=this.contextData.lineWidth.bind(this.contextData),this.ctxLineCap=this.contextData.lineCap.bind(this.contextData),this.ctxLineJoin=this.contextData.lineJoin.bind(this.contextData),this.ctxMiterLimit=this.contextData.miterLimit.bind(this.contextData),this.ctxFill=this.contextData.fill.bind(this.contextData),this.ctxFillRect=this.contextData.fillRect.bind(this.contextData),this.ctxStroke=this.contextData.stroke.bind(this.contextData),this.save=this.contextData.save.bind(this.contextData))}extendPrototype([CanvasRendererBase],CanvasRenderer),CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)};function HBaseElement(){}HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.bm!==0&&this.setBlendMode()},renderElement:function(){var e=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var i=this.finalTransform.mat.toCSS();e.transform=i,e.webkitTransform=i}this.finalTransform._opMdf&&(e.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=BaseRenderer.prototype.buildElementParenting;function HSolidElement(t,e,i){this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?(t=createNS("rect"),t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):(t=createTag("div"),t.style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)};function HShapeElement(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,i),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)e=t[i].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var i=t.sh.v,s=t.transformers,r,a=i._length,n,l,o,h;if(!(a<=1)){for(r=0;r<a-1;r+=1)n=this.getTransformedPoint(s,i.v[r]),l=this.getTransformedPoint(s,i.o[r]),o=this.getTransformedPoint(s,i.i[r+1]),h=this.getTransformedPoint(s,i.v[r+1]),this.checkBounds(n,l,o,h,e);i.c&&(n=this.getTransformedPoint(s,i.v[r]),l=this.getTransformedPoint(s,i.o[r]),o=this.getTransformedPoint(s,i.i[0]),h=this.getTransformedPoint(s,i.v[0]),this.checkBounds(n,l,o,h,e))}},HShapeElement.prototype.checkBounds=function(t,e,i,s,r){this.getBoundsOfCurve(t,e,i,s);var a=this.shapeBoundingBox;r.x=bmMin(a.left,r.x),r.xMax=bmMax(a.right,r.xMax),r.y=bmMin(a.top,r.y),r.yMax=bmMax(a.bottom,r.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,i,s){for(var r=[[t[0],s[0]],[t[1],s[1]]],a,n,l,o,h,u,S,d=0;d<2;++d)n=6*t[d]-12*e[d]+6*i[d],a=-3*t[d]+9*e[d]-9*i[d]+3*s[d],l=3*e[d]-3*t[d],n|=0,a|=0,l|=0,a===0&&n===0||(a===0?(o=-l/n,o>0&&o<1&&r[d].push(this.calculateF(o,t,e,i,s,d))):(h=n*n-4*l*a,h>=0&&(u=(-n+bmSqrt(h))/(2*a),u>0&&u<1&&r[d].push(this.calculateF(u,t,e,i,s,d)),S=(-n-bmSqrt(h))/(2*a),S>0&&S<1&&r[d].push(this.calculateF(S,t,e,i,s,d)))));this.shapeBoundingBox.left=bmMin.apply(null,r[0]),this.shapeBoundingBox.top=bmMin.apply(null,r[1]),this.shapeBoundingBox.right=bmMax.apply(null,r[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,r[1])},HShapeElement.prototype.calculateF=function(t,e,i,s,r,a){return bmPow(1-t,3)*e[a]+3*bmPow(1-t,2)*t*i[a]+3*(1-t)*bmPow(t,2)*s[a]+bmPow(t,3)*r[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)t[i]&&t[i].sh?this.calculateShapeBoundingBox(t[i],e):t[i]&&t[i].it?this.calculateBoundingBox(t[i].it,e):t[i]&&t[i].style&&t[i].w&&this.expandStrokeBoundingBox(t[i].w,e)},HShapeElement.prototype.expandStrokeBoundingBox=function(t,e){var i=0;if(t.keyframes){for(var s=0;s<t.keyframes.length;s+=1){var r=t.keyframes[s].s;r>i&&(i=r)}i*=t.mult}else i=t.v*t.mult;e.x-=i,e.xMax+=i,e.y-=i,e.yMax+=i},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var i=!1;if(this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),i=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),i=!0),i||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y){this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var s=this.shapeCont.style,r="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";s.transform=r,s.webkitTransform=r}}};function HTextElement(t,e,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style,i=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)";e.fill=i,e.color=i,t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var s=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",s.fClass)this.innerElem.className=s.fClass;else{e.fontFamily=s.fFamily;var r=t.fWeight,a=t.fStyle;e.fontStyle=a,e.fontWeight=r}var n,l,o=t.l;l=o.length;var h,u,S,d=this.mHelper,_,y="",m=0;for(n=0;n<l;n+=1){if(this.globalData.fontManager.chars?(this.textPaths[m]?h=this.textPaths[m]:(h=createNS("path"),h.setAttribute("stroke-linecap",lineCapEnum[1]),h.setAttribute("stroke-linejoin",lineJoinEnum[2]),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[m]?(u=this.textSpans[m],S=u.children[0]):(u=createTag("div"),u.style.lineHeight=0,S=createNS("svg"),S.appendChild(h),styleDiv(u)))):this.isMasked?h=this.textPaths[m]?this.textPaths[m]:createNS("text"):this.textSpans[m]?(u=this.textSpans[m],h=this.textPaths[m]):(u=createTag("span"),styleDiv(u),h=createTag("span"),styleDiv(h),u.appendChild(h)),this.globalData.fontManager.chars){var w=this.globalData.fontManager.getCharData(t.finalText[n],s.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily),p;if(w?p=w.data:p=null,d.reset(),p&&p.shapes&&p.shapes.length&&(_=p.shapes[0].it,d.scale(t.finalSize/100,t.finalSize/100),y=this.createPathShape(d,_),h.setAttribute("d",y)),this.isMasked)this.innerElem.appendChild(h);else{if(this.innerElem.appendChild(u),p&&p.shapes){document.body.appendChild(S);var f=S.getBBox();S.setAttribute("width",f.width+2),S.setAttribute("height",f.height+2),S.setAttribute("viewBox",f.x-1+" "+(f.y-1)+" "+(f.width+2)+" "+(f.height+2));var c=S.style,g="translate("+(f.x-1)+"px,"+(f.y-1)+"px)";c.transform=g,c.webkitTransform=g,o[n].yOffset=f.y-1}else S.setAttribute("width",1),S.setAttribute("height",1);u.appendChild(S)}}else if(h.textContent=o[n].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(h);else{this.innerElem.appendChild(u);var C=h.style,k="translate3d(0,"+-t.finalSize/1.2+"px,0)";C.transform=k,C.webkitTransform=k}this.isMasked?this.textSpans[m]=h:this.textSpans[m]=u,this.textSpans[m].style.display="block",this.textPaths[m]=h,m+=1}for(;m<this.textSpans.length;)this.textSpans[m].style.display="none",m+=1},HTextElement.prototype.renderInnerContent=function(){this.validateText();var t;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),t=this.svgElement.style;var e="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";t.transform=e,t.webkitTransform=e}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),!(!this.lettersChangedFlag&&!this.textAnimator.lettersChangedFlag)){var i,s,r=0,a=this.textAnimator.renderedLetters,n=this.textProperty.currentData.l;s=n.length;var l,o,h;for(i=0;i<s;i+=1)n[i].n?r+=1:(o=this.textSpans[i],h=this.textPaths[i],l=a[r],r+=1,l._mdf.m&&(this.isMasked?o.setAttribute("transform",l.m):(o.style.webkitTransform=l.m,o.style.transform=l.m)),o.style.opacity=l.o,l.sw&&l._mdf.sw&&h.setAttribute("stroke-width",l.sw),l.sc&&l._mdf.sc&&h.setAttribute("stroke",l.sc),l.fc&&l._mdf.fc&&(h.setAttribute("fill",l.fc),h.style.color=l.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var u=this.innerElem.getBBox();this.currentBBox.w!==u.width&&(this.currentBBox.w=u.width,this.svgElement.setAttribute("width",u.width)),this.currentBBox.h!==u.height&&(this.currentBBox.h=u.height,this.svgElement.setAttribute("height",u.height));var S=1;if(this.currentBBox.w!==u.width+S*2||this.currentBBox.h!==u.height+S*2||this.currentBBox.x!==u.x-S||this.currentBBox.y!==u.y-S){this.currentBBox.w=u.width+S*2,this.currentBBox.h=u.height+S*2,this.currentBBox.x=u.x-S,this.currentBBox.y=u.y-S,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),t=this.svgElement.style;var d="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";t.transform=d,t.webkitTransform=d}}}};function HCameraElement(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initHierarchy();var s=PropertyFactory.getProp;if(this.pe=s(this,t.pe,0,0,this),t.ks.p.s?(this.px=s(this,t.ks.p.x,1,0,this),this.py=s(this,t.ks.p.y,1,0,this),this.pz=s(this,t.ks.p.z,1,0,this)):this.p=s(this,t.ks.p,1,0,this),t.ks.a&&(this.a=s(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var r,a=t.ks.or.k.length;for(r=0;r<a;r+=1)t.ks.or.k[r].to=null,t.ks.or.k[r].ti=null}this.or=s(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=s(this,t.ks.rx,0,degToRads,this),this.ry=s(this,t.ks.ry,0,degToRads,this),this.rz=s(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e=this.comp.threeDElements.length,i,s,r;for(t=0;t<e;t+=1)if(i=this.comp.threeDElements[t],i.type==="3d"){s=i.perspectiveElem.style,r=i.container.style;var a=this.pe.v+"px",n="0px 0px 0px",l="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";s.perspective=a,s.webkitPerspective=a,r.transformOrigin=n,r.mozTransformOrigin=n,r.webkitTransformOrigin=n,s.transform=l,s.webkitTransform=l}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t=this._isFirstFrame,e,i;if(this.hierarchy)for(i=this.hierarchy.length,e=0;e<i;e+=1)t=this.hierarchy[e].finalTransform.mProp._mdf||t;if(t||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(i=this.hierarchy.length-1,e=i;e>=0;e-=1){var s=this.hierarchy[e].finalTransform.mProp;this.mat.translate(-s.p.v[0],-s.p.v[1],s.p.v[2]),this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]),this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v),this.mat.scale(1/s.s.v[0],1/s.s.v[1],1/s.s.v[2]),this.mat.translate(s.a.v[0],s.a.v[1],s.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var r;this.p?r=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:r=[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)),n=[r[0]/a,r[1]/a,r[2]/a],l=Math.sqrt(n[2]*n[2]+n[0]*n[0]),o=Math.atan2(n[1],l),h=Math.atan2(n[0],-n[2]);this.mat.rotateY(h).rotateX(-o)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var u=!this._prevMat.equals(this.mat);if((u||this.pe._mdf)&&this.comp.threeDElements){i=this.comp.threeDElements.length;var S,d,_;for(e=0;e<i;e+=1)if(S=this.comp.threeDElements[e],S.type==="3d"){if(u){var y=this.mat.toCSS();_=S.container.style,_.transform=y,_.webkitTransform=y}this.pe._mdf&&(d=S.perspectiveElem.style,d.perspective=this.pe.v+"px",d.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null};function HImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,i)}extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.crossOrigin="anonymous",e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)};function HybridRendererBase(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&e.hideOnTransparent===!1),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}extendPrototype([BaseRenderer],HybridRendererBase),HybridRendererBase.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},HybridRendererBase.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){var s=this.layers[e];if(!s.ddd||!this.supports3d)if(this.threeDElements)this.addTo3dContainer(i,e);else{for(var r=0,a,n,l;r<e;)this.elements[r]&&this.elements[r]!==!0&&this.elements[r].getBaseElement&&(n=this.elements[r],l=this.layers[r].ddd?this.getThreeDContainerByPos(r):n.getBaseElement(),a=l||a),r+=1;a?(!s.ddd||!this.supports3d)&&this.layerElement.insertBefore(i,a):(!s.ddd||!this.supports3d)&&this.layerElement.appendChild(i)}else this.addTo3dContainer(i,e)}},HybridRendererBase.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRendererBase.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextLottieElement(t,this.globalData,this)},HybridRendererBase.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRendererBase.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRendererBase.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos=function(t){for(var e=0,i=this.threeDElements.length;e<i;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}return null},HybridRendererBase.prototype.createThreeDContainer=function(t,e){var i=createTag("div"),s,r;styleDiv(i);var a=createTag("div");if(styleDiv(a),e==="3d"){s=i.style,s.width=this.globalData.compSize.w+"px",s.height=this.globalData.compSize.h+"px";var n="50% 50%";s.webkitTransformOrigin=n,s.mozTransformOrigin=n,s.transformOrigin=n,r=a.style;var l="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.transform=l,r.webkitTransform=l}i.appendChild(a);var o={container:a,perspectiveElem:i,startPos:t,endPos:t,type:e};return this.threeDElements.push(o),o},HybridRendererBase.prototype.build3dContainers=function(){var t,e=this.layers.length,i,s="";for(t=0;t<e;t+=1)this.layers[t].ddd&&this.layers[t].ty!==3?(s!=="3d"&&(s="3d",i=this.createThreeDContainer(t,"3d")),i.endPos=Math.max(i.endPos,t)):(s!=="2d"&&(s="2d",i=this.createThreeDContainer(t,"2d")),i.endPos=Math.max(i.endPos,t));for(e=this.threeDElements.length,t=e-1;t>=0;t-=1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRendererBase.prototype.addTo3dContainer=function(t,e){for(var i=0,s=this.threeDElements.length;i<s;){if(e<=this.threeDElements[i].endPos){for(var r=this.threeDElements[i].startPos,a;r<e;)this.elements[r]&&this.elements[r].getBaseElement&&(a=this.elements[r].getBaseElement()),r+=1;a?this.threeDElements[i].container.insertBefore(t,a):this.threeDElements[i].container.appendChild(t);break}i+=1}},HybridRendererBase.prototype.configAnimation=function(t){var e=createTag("div"),i=this.animationItem.wrapper,s=e.style;s.width=t.w+"px",s.height=t.h+"px",this.resizerElem=e,styleDiv(e),s.transformStyle="flat",s.mozTransformStyle="flat",s.webkitTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),i.appendChild(e),s.overflow="hidden";var r=createNS("svg");r.setAttribute("width","1"),r.setAttribute("height","1"),styleDiv(r),this.resizerElem.appendChild(r);var a=createNS("defs");r.appendChild(a),this.data=t,this.setupGlobalData(t,r),this.globalData.defs=a,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRendererBase.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRendererBase.prototype.updateContainerSize=function(){var t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,i=t/e,s=this.globalData.compSize.w/this.globalData.compSize.h,r,a,n,l;s>i?(r=t/this.globalData.compSize.w,a=t/this.globalData.compSize.w,n=0,l=(e-this.globalData.compSize.h*(t/this.globalData.compSize.w))/2):(r=e/this.globalData.compSize.h,a=e/this.globalData.compSize.h,n=(t-this.globalData.compSize.w*(e/this.globalData.compSize.h))/2,l=0);var o=this.resizerElem.style;o.webkitTransform="matrix3d("+r+",0,0,0,0,"+a+",0,0,0,0,1,0,"+n+","+l+",0,1)",o.transform=o.webkitTransform},HybridRendererBase.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRendererBase.prototype.show=function(){this.resizerElem.style.display="block"},HybridRendererBase.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t=this.globalData.compSize.w,e=this.globalData.compSize.h,i,s=this.threeDElements.length;for(i=0;i<s;i+=1){var r=this.threeDElements[i].perspectiveElem.style;r.webkitPerspective=Math.sqrt(Math.pow(t,2)+Math.pow(e,2))+"px",r.perspective=r.webkitPerspective}}},HybridRendererBase.prototype.searchExtraCompositions=function(t){var e,i=t.length,s=createTag("div");for(e=0;e<i;e+=1)if(t[e].xt){var r=this.createComp(t[e],s,this.globalData.comp,null);r.initExpressions(),this.globalData.projectInterface.registerComposition(r)}};function HCompElement(t,e,i){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}extendPrototype([HybridRendererBase,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var i=0,s;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(t,s):this.layerElement.appendChild(t)},HCompElement.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)};function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&e.hideOnTransparent===!1),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"},runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}extendPrototype([HybridRendererBase],HybridRenderer),HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)};var CompExpressionInterface=function(){return function(t){function e(i){for(var s=0,r=t.layers.length;s<r;){if(t.layers[s].nm===i||t.layers[s].ind===i)return t.elements[s].layerInterface;s+=1}return null}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.data.h||t.globalData.compSize.h,e.width=t.data.w||t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e.displayStartTime=0,e.numLayers=t.layers.length,e}}();function _typeof$2(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$2=function(i){return typeof i}:_typeof$2=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof$2(t)}function seedRandom(t,e){var i=this,s=256,r=6,a=52,n="random",l=e.pow(s,r),o=e.pow(2,a),h=o*2,u=s-1,S;function d(c,g,C){var k=[];g=g===!0?{entropy:!0}:g||{};var T=w(m(g.entropy?[c,f(t)]:c===null?p():c,3),k),E=new _(k),A=function(){for(var O=E.g(r),F=l,V=0;O<o;)O=(O+V)*s,F*=s,V=E.g(1);for(;O>=h;)O/=2,F/=2,V>>>=1;return(O+V)/F};return A.int32=function(){return E.g(4)|0},A.quick=function(){return E.g(4)/4294967296},A.double=A,w(f(E.S),t),(g.pass||C||function(R,O,F,V){return V&&(V.S&&y(V,E),R.state=function(){return y(E,{})}),F?(e[n]=R,O):R})(A,T,"global"in g?g.global:this==e,g.state)}e["seed"+n]=d;function _(c){var g,C=c.length,k=this,T=0,E=k.i=k.j=0,A=k.S=[];for(C||(c=[C++]);T<s;)A[T]=T++;for(T=0;T<s;T++)A[T]=A[E=u&E+c[T%C]+(g=A[T])],A[E]=g;k.g=function(R){for(var O,F=0,V=k.i,B=k.j,I=k.S;R--;)O=I[V=u&V+1],F=F*s+I[u&(I[V]=I[B=u&B+O])+(I[B]=O)];return k.i=V,k.j=B,F}}function y(c,g){return g.i=c.i,g.j=c.j,g.S=c.S.slice(),g}function m(c,g){var C=[],k=_typeof$2(c),T;if(g&&k=="object")for(T in c)try{C.push(m(c[T],g-1))}catch{}return C.length?C:k=="string"?c:c+"\0"}function w(c,g){for(var C=c+"",k,T=0;T<C.length;)g[u&T]=u&(k^=g[u&T]*19)+C.charCodeAt(T++);return f(g)}function p(){try{var c=new Uint8Array(s);return(i.crypto||i.msCrypto).getRandomValues(c),f(c)}catch{var g=i.navigator,C=g&&g.plugins;return[+new Date,i,C,i.screen,f(t)]}}function f(c){return String.fromCharCode.apply(0,c)}w(e.random(),t)}function initialize$2(t){seedRandom([],t)}var propTypes={SHAPE:"shape"};function _typeof$1(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$1=function(i){return typeof i}:_typeof$1=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof$1(t)}var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null,_lottieGlobal={};initialize$2(BMMath);function resetFrame(){_lottieGlobal={}}function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return t==="number"||e instanceof Number||t==="boolean"||t==="string"}function $bm_neg(t){var e=_typeof$1(t);if(e==="number"||t instanceof Number||e==="boolean")return-t;if($bm_isInstanceOfArray(t)){var i,s=t.length,r=[];for(i=0;i<s;i+=1)r[i]=-t[i];return r}return t.propType?t.v:-t}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var i=_typeof$1(t),s=_typeof$1(e);if(isNumerable(i,t)&&isNumerable(s,e)||i==="string"||s==="string")return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(s,e))return t=t.slice(0),t[0]+=e,t;if(isNumerable(i,t)&&$bm_isInstanceOfArray(e))return e=e.slice(0),e[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var r=0,a=t.length,n=e.length,l=[];r<a||r<n;)(typeof t[r]=="number"||t[r]instanceof Number)&&(typeof e[r]=="number"||e[r]instanceof Number)?l[r]=t[r]+e[r]:l[r]=e[r]===void 0?t[r]:t[r]||e[r],r+=1;return l}return 0}var add=sum;function sub(t,e){var i=_typeof$1(t),s=_typeof$1(e);if(isNumerable(i,t)&&isNumerable(s,e))return i==="string"&&(t=parseInt(t,10)),s==="string"&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(s,e))return t=t.slice(0),t[0]-=e,t;if(isNumerable(i,t)&&$bm_isInstanceOfArray(e))return e=e.slice(0),e[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var r=0,a=t.length,n=e.length,l=[];r<a||r<n;)(typeof t[r]=="number"||t[r]instanceof Number)&&(typeof e[r]=="number"||e[r]instanceof Number)?l[r]=t[r]-e[r]:l[r]=e[r]===void 0?t[r]:t[r]||e[r],r+=1;return l}return 0}function mul(t,e){var i=_typeof$1(t),s=_typeof$1(e),r;if(isNumerable(i,t)&&isNumerable(s,e))return t*e;var a,n;if($bm_isInstanceOfArray(t)&&isNumerable(s,e)){for(n=t.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t[a]*e;return r}if(isNumerable(i,t)&&$bm_isInstanceOfArray(e)){for(n=e.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t*e[a];return r}return 0}function div(t,e){var i=_typeof$1(t),s=_typeof$1(e),r;if(isNumerable(i,t)&&isNumerable(s,e))return t/e;var a,n;if($bm_isInstanceOfArray(t)&&isNumerable(s,e)){for(n=t.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t[a]/e;return r}if(isNumerable(i,t)&&$bm_isInstanceOfArray(e)){for(n=e.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t/e[a];return r}return 0}function mod(t,e){return typeof t=="string"&&(t=parseInt(t,10)),typeof e=="string"&&(e=parseInt(e,10)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,i){if(e>i){var s=i;i=e,e=s}return Math.min(Math.max(t,e),i)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if(typeof t=="number"||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var i,s=Math.min(t.length,e.length),r=0;for(i=0;i<s;i+=1)r+=Math.pow(e[i]-t[i],2);return Math.sqrt(r)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e=t[0],i=t[1],s=t[2],r=Math.max(e,i,s),a=Math.min(e,i,s),n,l,o=(r+a)/2;if(r===a)n=0,l=0;else{var h=r-a;switch(l=o>.5?h/(2-r-a):h/(r+a),r){case e:n=(i-s)/h+(i<s?6:0);break;case i:n=(s-e)/h+2;break;case s:n=(e-i)/h+4;break}n/=6}return[n,l,o,t[3]]}function hue2rgb(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function hslToRgb(t){var e=t[0],i=t[1],s=t[2],r,a,n;if(i===0)r=s,n=s,a=s;else{var l=s<.5?s*(1+i):s+i-s*i,o=2*s-l;r=hue2rgb(o,l,e+1/3),a=hue2rgb(o,l,e),n=hue2rgb(o,l,e-1/3)}return[r,a,n,t[3]]}function linear(t,e,i,s,r){if((s===void 0||r===void 0)&&(s=e,r=i,e=0,i=1),i<e){var a=i;i=e,e=a}if(t<=e)return s;if(t>=i)return r;var n=i===e?0:(t-e)/(i-e);if(!s.length)return s+(r-s)*n;var l,o=s.length,h=createTypedArray("float32",o);for(l=0;l<o;l+=1)h[l]=s[l]+(r[l]-s[l])*n;return h}function random(t,e){if(e===void 0&&(t===void 0?(t=0,e=1):(e=t,t=void 0)),e.length){var i,s=e.length;t||(t=createTypedArray("float32",s));var r=createTypedArray("float32",s),a=BMMath.random();for(i=0;i<s;i+=1)r[i]=t[i]+a*(e[i]-t[i]);return r}t===void 0&&(t=0);var n=BMMath.random();return t+n*(e-t)}function createPath(t,e,i,s){var r,a=t.length,n=shapePool.newElement();n.setPathData(!!s,a);var l=[0,0],o,h;for(r=0;r<a;r+=1)o=e&&e[r]?e[r]:l,h=i&&i[r]?i[r]:l,n.setTripleAt(t[r][0],t[r][1],h[0]+t[r][0],h[1]+t[r][1],o[0]+t[r][0],o[1]+t[r][1],r,!0);return n}function initiateExpression(elem,data,property){function noOp(t){return t}if(!elem.globalData.renderConfig.runExpressions)return noOp;var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=val.indexOf("random")!==-1,elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||this.data.hd!==!0,wiggle=(function t(e,i){var s,r,a=this.pv.length?this.pv.length:1,n=createTypedArray("float32",a);e=5;var l=Math.floor(time*e);for(s=0,r=0;s<l;){for(r=0;r<a;r+=1)n[r]+=-i+i*2*BMMath.random();s+=1}var o=time*e,h=o-Math.floor(o),u=createTypedArray("float32",a);if(a>1){for(r=0;r<a;r+=1)u[r]=this.pv[r]+n[r]+(-i+i*2*BMMath.random())*h;return u}return this.pv+n[0]+(-i+i*2*BMMath.random())*h}).bind(this);thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty));function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);function lookAt(t,e){var i=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],s=Math.atan2(i[0],Math.sqrt(i[1]*i[1]+i[2]*i[2]))/degToRads,r=-Math.atan2(i[1],i[2])/degToRads;return[r,s,0]}function easeOut(t,e,i,s,r){return applyEase(easeOutBez,t,e,i,s,r)}function easeIn(t,e,i,s,r){return applyEase(easeInBez,t,e,i,s,r)}function ease(t,e,i,s,r){return applyEase(easeInOutBez,t,e,i,s,r)}function applyEase(t,e,i,s,r,a){r===void 0?(r=i,a=s):e=(e-i)/(s-i),e>1?e=1:e<0&&(e=0);var n=t(e);if($bm_isInstanceOfArray(r)){var l,o=r.length,h=createTypedArray("float32",o);for(l=0;l<o;l+=1)h[l]=(a[l]-r[l])*n+r[l];return h}return(a-r)*n+r}function nearestKey(t){var e,i=data.k.length,s,r;if(!data.k.length||typeof data.k[0]=="number")s=0,r=0;else if(s=-1,t*=elem.comp.globalData.frameRate,t<data.k[0].t)s=1,r=data.k[0].t;else{for(e=0;e<i-1;e+=1)if(t===data.k[e].t){s=e+1,r=data.k[e].t;break}else if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(s=e+2,r=data.k[e+1].t):(s=e+1,r=data.k[e].t);break}s===-1&&(s=e+1,r=data.k[e].t)}var a={};return a.index=s,a.time=r/elem.comp.globalData.frameRate,a}function key(t){var e,i,s;if(!data.k.length||typeof data.k[0]=="number")throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var r=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(s=r.length,i=0;i<s;i+=1)e[i]=r[i],e.value[i]=r[i];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return!t&&t!==0&&(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return typeof value=="string"?e===void 0?value.substring(t):value.substring(t,e):""}function substr(t,e){return typeof value=="string"?e===void 0?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=t===0?0:Math.floor(time*t)/t,value=valueAtTime(time)}var time,velocity,value,text,textIndex,textTotal,selectorValue,index=elem.data.ind,hasParent=!!(elem.hierarchy&&elem.hierarchy.length),parent,randSeed=Math.floor(Math.random()*1e6),globalData=elem.globalData;function executeExpression(t){return value=t,this.frameExpressionId===elem.globalData.frameId&&this.propType!=="textSelector"?value:(this.propType==="textSelector"&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),elemType===4&&!content&&(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),hasParent=!!(elem.hierarchy&&elem.hierarchy.length),hasParent&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt=scoped_bm_rt.propType===propTypes.SHAPE?scoped_bm_rt.v:scoped_bm_rt,scoped_bm_rt)}return executeExpression.__preventDeadCodeRemoval=[$bm_transform,anchorPoint,time,velocity,inPoint,outPoint,width,height,name,loop_in,loop_out,smooth,toComp,fromCompToSurface,toWorld,fromWorld,mask,position,rotation,scale,thisComp,numKeys,active,wiggle,loopInDuration,loopOutDuration,comp,lookAt,easeOut,easeIn,ease,nearestKey,key,text,textIndex,textTotal,selectorValue,framesToTime,timeToFrames,sourceRectAtTime,substring,substr,posterizeTime,index,globalData],executeExpression}return ob.initiateExpression=initiateExpression,ob.__preventDeadCodeRemoval=[window,document,XMLHttpRequest,fetch,frames,$bm_neg,add,$bm_sum,$bm_sub,$bm_mul,$bm_div,$bm_mod,clamp,radians_to_degrees,degreesToRadians,degrees_to_radians,normalize,rgbToHsl,hslToRgb,linear,random,createPath,_lottieGlobal],ob.resetFrame=resetFrame,ob}(),Expressions=function(){var t={};t.initExpressions=e,t.resetFrame=ExpressionManager.resetFrame;function e(i){var s=0,r=[];function a(){s+=1}function n(){s-=1,s===0&&o()}function l(h){r.indexOf(h)===-1&&r.push(h)}function o(){var h,u=r.length;for(h=0;h<u;h+=1)r[h].release();r.length=0}i.renderer.compInterface=CompExpressionInterface(i.renderer),i.renderer.globalData.projectInterface.registerComposition(i.renderer),i.renderer.globalData.pushExpression=a,i.renderer.globalData.popExpression=n,i.renderer.globalData.registerExpressionProperty=l}return t}(),MaskManagerInterface=function(){function t(i,s){this._mask=i,this._data=s}Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(t.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),this._mask.op.v*100}});var e=function(s){var r=createSizedArray(s.viewData.length),a,n=s.viewData.length;for(a=0;a<n;a+=1)r[a]=new t(s.viewData[a],s.masksProperties[a]);var l=function(h){for(a=0;a<n;){if(s.masksProperties[a].nm===h)return r[a];a+=1}return null};return l};return e}(),ExpressionPropertyInterface=function(){var t={pv:0,v:0,mult:1},e={pv:[0,0,0],v:[0,0,0],mult:1};function i(n,l,o){Object.defineProperty(n,"velocity",{get:function(){return l.getVelocityAtTime(l.comp.currentFrame)}}),n.numKeys=l.keyframes?l.keyframes.length:0,n.key=function(h){if(!n.numKeys)return 0;var u="";"s"in l.keyframes[h-1]?u=l.keyframes[h-1].s:"e"in l.keyframes[h-2]?u=l.keyframes[h-2].e:u=l.keyframes[h-2].s;var S=o==="unidimensional"?new Number(u):Object.assign({},u);return S.time=l.keyframes[h-1].t/l.elem.comp.globalData.frameRate,S.value=o==="unidimensional"?u[0]:u,S},n.valueAtTime=l.getValueAtTime,n.speedAtTime=l.getSpeedAtTime,n.velocityAtTime=l.getVelocityAtTime,n.propertyGroup=l.propertyGroup}function s(n){(!n||!("pv"in n))&&(n=t);var l=1/n.mult,o=n.pv*l,h=new Number(o);return h.value=o,i(h,n,"unidimensional"),function(){return n.k&&n.getValue(),o=n.v*l,h.value!==o&&(h=new Number(o),h.value=o,i(h,n,"unidimensional")),h}}function r(n){(!n||!("pv"in n))&&(n=e);var l=1/n.mult,o=n.data&&n.data.l||n.pv.length,h=createTypedArray("float32",o),u=createTypedArray("float32",o);return h.value=u,i(h,n,"multidimensional"),function(){n.k&&n.getValue();for(var S=0;S<o;S+=1)u[S]=n.v[S]*l,h[S]=u[S];return h}}function a(){return t}return function(n){return n?n.propType==="unidimensional"?s(n):r(n):a}}(),TransformExpressionInterface=function(){return function(t){function e(n){switch(n){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity;default:return null}}Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)});var i,s,r,a;return t.p?a=ExpressionPropertyInterface(t.p):(i=ExpressionPropertyInterface(t.px),s=ExpressionPropertyInterface(t.py),t.pz&&(r=ExpressionPropertyInterface(t.pz))),Object.defineProperty(e,"position",{get:function(){return t.p?a():[i(),s(),r?r():0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e}}(),LayerExpressionInterface=function(){function t(h){var u=new Matrix;if(h!==void 0){var S=this._elem.finalTransform.mProp.getValueAtTime(h);S.clone(u)}else{var d=this._elem.finalTransform.mProp;d.applyToMatrix(u)}return u}function e(h,u){var S=this.getMatrix(u);return S.props[12]=0,S.props[13]=0,S.props[14]=0,this.applyPoint(S,h)}function i(h,u){var S=this.getMatrix(u);return this.applyPoint(S,h)}function s(h,u){var S=this.getMatrix(u);return S.props[12]=0,S.props[13]=0,S.props[14]=0,this.invertPoint(S,h)}function r(h,u){var S=this.getMatrix(u);return this.invertPoint(S,h)}function a(h,u){if(this._elem.hierarchy&&this._elem.hierarchy.length){var S,d=this._elem.hierarchy.length;for(S=0;S<d;S+=1)this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(h)}return h.applyToPointArray(u[0],u[1],u[2]||0)}function n(h,u){if(this._elem.hierarchy&&this._elem.hierarchy.length){var S,d=this._elem.hierarchy.length;for(S=0;S<d;S+=1)this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(h)}return h.inversePoint(u)}function l(h){var u=new Matrix;if(u.reset(),this._elem.finalTransform.mProp.applyToMatrix(u),this._elem.hierarchy&&this._elem.hierarchy.length){var S,d=this._elem.hierarchy.length;for(S=0;S<d;S+=1)this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(u);return u.inversePoint(h)}return u.inversePoint(h)}function o(){return[1,1,1,1]}return function(h){var u;function S(m){_.mask=new MaskManagerInterface(m,h)}function d(m){_.effect=m}function _(m){switch(m){case"ADBE Root Vectors Group":case"Contents":case 2:return _.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return u;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return _.effect;case"ADBE Text Properties":return _.textInterface;default:return null}}_.getMatrix=t,_.invertPoint=n,_.applyPoint=a,_.toWorld=i,_.toWorldVec=e,_.fromWorld=r,_.fromWorldVec=s,_.toComp=i,_.fromComp=l,_.sampleImage=o,_.sourceRectAtTime=h.sourceRectAtTime.bind(h),_._elem=h,u=TransformExpressionInterface(h.finalTransform.mProp);var y=getDescriptor(u,"anchorPoint");return Object.defineProperties(_,{hasParent:{get:function(){return h.hierarchy.length}},parent:{get:function(){return h.hierarchy[0].layerInterface}},rotation:getDescriptor(u,"rotation"),scale:getDescriptor(u,"scale"),position:getDescriptor(u,"position"),opacity:getDescriptor(u,"opacity"),anchorPoint:y,anchor_point:y,transform:{get:function(){return u}},active:{get:function(){return h.isInRange}}}),_.startTime=h.data.st,_.index=h.data.ind,_.source=h.data.refId,_.height=h.data.ty===0?h.data.h:100,_.width=h.data.ty===0?h.data.w:100,_.inPoint=h.data.ip/h.comp.globalData.frameRate,_.outPoint=h.data.op/h.comp.globalData.frameRate,_._name=h.data.nm,_.registerMaskInterface=S,_.registerEffectsInterface=d,_}}(),propertyGroupFactory=function(){return function(t,e){return function(i){return i=i===void 0?1:i,i<=0?t:e(i-1)}}}(),PropertyInterface=function(){return function(t,e){var i={_name:t};function s(r){return r=r===void 0?1:r,r<=0?i:e(r-1)}return s}}(),EffectsExpressionInterface=function(){var t={createEffectsInterface:e};function e(r,a){if(r.effectsManager){var n=[],l=r.data.ef,o,h=r.effectsManager.effectElements.length;for(o=0;o<h;o+=1)n.push(i(l[o],r.effectsManager.effectElements[o],a,r));var u=r.data.ef||[],S=function(_){for(o=0,h=u.length;o<h;){if(_===u[o].nm||_===u[o].mn||_===u[o].ix)return n[o];o+=1}return null};return Object.defineProperty(S,"numProperties",{get:function(){return u.length}}),S}return null}function i(r,a,n,l){function o(_){for(var y=r.ef,m=0,w=y.length;m<w;){if(_===y[m].nm||_===y[m].mn||_===y[m].ix)return y[m].ty===5?u[m]:u[m]();m+=1}throw new Error}var h=propertyGroupFactory(o,n),u=[],S,d=r.ef.length;for(S=0;S<d;S+=1)r.ef[S].ty===5?u.push(i(r.ef[S],a.effectElements[S],a.effectElements[S].propertyGroup,l)):u.push(s(a.effectElements[S],r.ef[S].ty,l,h));return r.mn==="ADBE Color Control"&&Object.defineProperty(o,"color",{get:function(){return u[0]()}}),Object.defineProperties(o,{numProperties:{get:function(){return r.np}},_name:{value:r.nm},propertyGroup:{value:h}}),o.enabled=r.en!==0,o.active=o.enabled,o}function s(r,a,n,l){var o=ExpressionPropertyInterface(r.p);function h(){return a===10?n.comp.compInterface(r.p.v):o()}return r.p.setGroupProperty&&r.p.setGroupProperty(PropertyInterface("",l)),h}return t}(),ShapePathInterface=function(){return function(e,i,s){var r=i.sh;function a(l){return l==="Shape"||l==="shape"||l==="Path"||l==="path"||l==="ADBE Vector Shape"||l===2?a.path:null}var n=propertyGroupFactory(a,s);return r.setGroupProperty(PropertyInterface("Path",n)),Object.defineProperties(a,{path:{get:function(){return r.k&&r.getValue(),r}},shape:{get:function(){return r.k&&r.getValue(),r}},_name:{value:e.nm},ix:{value:e.ix},propertyIndex:{value:e.ix},mn:{value:e.mn},propertyGroup:{value:s}}),a}}(),ShapeExpressionInterface=function(){function t(y,m,w){var p=[],f,c=y?y.length:0;for(f=0;f<c;f+=1)y[f].ty==="gr"?p.push(i(y[f],m[f],w)):y[f].ty==="fl"?p.push(s(y[f],m[f],w)):y[f].ty==="st"?p.push(n(y[f],m[f],w)):y[f].ty==="tm"?p.push(l(y[f],m[f],w)):y[f].ty==="tr"||(y[f].ty==="el"?p.push(h(y[f],m[f],w)):y[f].ty==="sr"?p.push(u(y[f],m[f],w)):y[f].ty==="sh"?p.push(ShapePathInterface(y[f],m[f],w)):y[f].ty==="rc"?p.push(S(y[f],m[f],w)):y[f].ty==="rd"?p.push(d(y[f],m[f],w)):y[f].ty==="rp"?p.push(_(y[f],m[f],w)):y[f].ty==="gf"?p.push(r(y[f],m[f],w)):p.push(a(y[f],m[f])));return p}function e(y,m,w){var p,f=function(C){for(var k=0,T=p.length;k<T;){if(p[k]._name===C||p[k].mn===C||p[k].propertyIndex===C||p[k].ix===C||p[k].ind===C)return p[k];k+=1}return typeof C=="number"?p[C-1]:null};f.propertyGroup=propertyGroupFactory(f,w),p=t(y.it,m.it,f.propertyGroup),f.numProperties=p.length;var c=o(y.it[y.it.length-1],m.it[m.it.length-1],f.propertyGroup);return f.transform=c,f.propertyIndex=y.cix,f._name=y.nm,f}function i(y,m,w){var p=function(C){switch(C){case"ADBE Vectors Group":case"Contents":case 2:return p.content;default:return p.transform}};p.propertyGroup=propertyGroupFactory(p,w);var f=e(y,m,p.propertyGroup),c=o(y.it[y.it.length-1],m.it[m.it.length-1],p.propertyGroup);return p.content=f,p.transform=c,Object.defineProperty(p,"_name",{get:function(){return y.nm}}),p.numProperties=y.np,p.propertyIndex=y.ix,p.nm=y.nm,p.mn=y.mn,p}function s(y,m,w){function p(f){return f==="Color"||f==="color"?p.color:f==="Opacity"||f==="opacity"?p.opacity:null}return Object.defineProperties(p,{color:{get:ExpressionPropertyInterface(m.c)},opacity:{get:ExpressionPropertyInterface(m.o)},_name:{value:y.nm},mn:{value:y.mn}}),m.c.setGroupProperty(PropertyInterface("Color",w)),m.o.setGroupProperty(PropertyInterface("Opacity",w)),p}function r(y,m,w){function p(f){return f==="Start Point"||f==="start point"?p.startPoint:f==="End Point"||f==="end point"?p.endPoint:f==="Opacity"||f==="opacity"?p.opacity:null}return Object.defineProperties(p,{startPoint:{get:ExpressionPropertyInterface(m.s)},endPoint:{get:ExpressionPropertyInterface(m.e)},opacity:{get:ExpressionPropertyInterface(m.o)},type:{get:function(){return"a"}},_name:{value:y.nm},mn:{value:y.mn}}),m.s.setGroupProperty(PropertyInterface("Start Point",w)),m.e.setGroupProperty(PropertyInterface("End Point",w)),m.o.setGroupProperty(PropertyInterface("Opacity",w)),p}function a(){function y(){return null}return y}function n(y,m,w){var p=propertyGroupFactory(T,w),f=propertyGroupFactory(k,p);function c(E){Object.defineProperty(k,y.d[E].nm,{get:ExpressionPropertyInterface(m.d.dataProps[E].p)})}var g,C=y.d?y.d.length:0,k={};for(g=0;g<C;g+=1)c(g),m.d.dataProps[g].p.setGroupProperty(f);function T(E){return E==="Color"||E==="color"?T.color:E==="Opacity"||E==="opacity"?T.opacity:E==="Stroke Width"||E==="stroke width"?T.strokeWidth:null}return Object.defineProperties(T,{color:{get:ExpressionPropertyInterface(m.c)},opacity:{get:ExpressionPropertyInterface(m.o)},strokeWidth:{get:ExpressionPropertyInterface(m.w)},dash:{get:function(){return k}},_name:{value:y.nm},mn:{value:y.mn}}),m.c.setGroupProperty(PropertyInterface("Color",p)),m.o.setGroupProperty(PropertyInterface("Opacity",p)),m.w.setGroupProperty(PropertyInterface("Stroke Width",p)),T}function l(y,m,w){function p(c){return c===y.e.ix||c==="End"||c==="end"?p.end:c===y.s.ix?p.start:c===y.o.ix?p.offset:null}var f=propertyGroupFactory(p,w);return p.propertyIndex=y.ix,m.s.setGroupProperty(PropertyInterface("Start",f)),m.e.setGroupProperty(PropertyInterface("End",f)),m.o.setGroupProperty(PropertyInterface("Offset",f)),p.propertyIndex=y.ix,p.propertyGroup=w,Object.defineProperties(p,{start:{get:ExpressionPropertyInterface(m.s)},end:{get:ExpressionPropertyInterface(m.e)},offset:{get:ExpressionPropertyInterface(m.o)},_name:{value:y.nm}}),p.mn=y.mn,p}function o(y,m,w){function p(c){return y.a.ix===c||c==="Anchor Point"?p.anchorPoint:y.o.ix===c||c==="Opacity"?p.opacity:y.p.ix===c||c==="Position"?p.position:y.r.ix===c||c==="Rotation"||c==="ADBE Vector Rotation"?p.rotation:y.s.ix===c||c==="Scale"?p.scale:y.sk&&y.sk.ix===c||c==="Skew"?p.skew:y.sa&&y.sa.ix===c||c==="Skew Axis"?p.skewAxis:null}var f=propertyGroupFactory(p,w);return m.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",f)),m.transform.mProps.p.setGroupProperty(PropertyInterface("Position",f)),m.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",f)),m.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",f)),m.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",f)),m.transform.mProps.sk&&(m.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",f)),m.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",f))),m.transform.op.setGroupProperty(PropertyInterface("Opacity",f)),Object.defineProperties(p,{opacity:{get:ExpressionPropertyInterface(m.transform.mProps.o)},position:{get:ExpressionPropertyInterface(m.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(m.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(m.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(m.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(m.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(m.transform.mProps.sa)},_name:{value:y.nm}}),p.ty="tr",p.mn=y.mn,p.propertyGroup=w,p}function h(y,m,w){function p(g){return y.p.ix===g?p.position:y.s.ix===g?p.size:null}var f=propertyGroupFactory(p,w);p.propertyIndex=y.ix;var c=m.sh.ty==="tm"?m.sh.prop:m.sh;return c.s.setGroupProperty(PropertyInterface("Size",f)),c.p.setGroupProperty(PropertyInterface("Position",f)),Object.defineProperties(p,{size:{get:ExpressionPropertyInterface(c.s)},position:{get:ExpressionPropertyInterface(c.p)},_name:{value:y.nm}}),p.mn=y.mn,p}function u(y,m,w){function p(g){return y.p.ix===g?p.position:y.r.ix===g?p.rotation:y.pt.ix===g?p.points:y.or.ix===g||g==="ADBE Vector Star Outer Radius"?p.outerRadius:y.os.ix===g?p.outerRoundness:y.ir&&(y.ir.ix===g||g==="ADBE Vector Star Inner Radius")?p.innerRadius:y.is&&y.is.ix===g?p.innerRoundness:null}var f=propertyGroupFactory(p,w),c=m.sh.ty==="tm"?m.sh.prop:m.sh;return p.propertyIndex=y.ix,c.or.setGroupProperty(PropertyInterface("Outer Radius",f)),c.os.setGroupProperty(PropertyInterface("Outer Roundness",f)),c.pt.setGroupProperty(PropertyInterface("Points",f)),c.p.setGroupProperty(PropertyInterface("Position",f)),c.r.setGroupProperty(PropertyInterface("Rotation",f)),y.ir&&(c.ir.setGroupProperty(PropertyInterface("Inner Radius",f)),c.is.setGroupProperty(PropertyInterface("Inner Roundness",f))),Object.defineProperties(p,{position:{get:ExpressionPropertyInterface(c.p)},rotation:{get:ExpressionPropertyInterface(c.r)},points:{get:ExpressionPropertyInterface(c.pt)},outerRadius:{get:ExpressionPropertyInterface(c.or)},outerRoundness:{get:ExpressionPropertyInterface(c.os)},innerRadius:{get:ExpressionPropertyInterface(c.ir)},innerRoundness:{get:ExpressionPropertyInterface(c.is)},_name:{value:y.nm}}),p.mn=y.mn,p}function S(y,m,w){function p(g){return y.p.ix===g?p.position:y.r.ix===g?p.roundness:y.s.ix===g||g==="Size"||g==="ADBE Vector Rect Size"?p.size:null}var f=propertyGroupFactory(p,w),c=m.sh.ty==="tm"?m.sh.prop:m.sh;return p.propertyIndex=y.ix,c.p.setGroupProperty(PropertyInterface("Position",f)),c.s.setGroupProperty(PropertyInterface("Size",f)),c.r.setGroupProperty(PropertyInterface("Rotation",f)),Object.defineProperties(p,{position:{get:ExpressionPropertyInterface(c.p)},roundness:{get:ExpressionPropertyInterface(c.r)},size:{get:ExpressionPropertyInterface(c.s)},_name:{value:y.nm}}),p.mn=y.mn,p}function d(y,m,w){function p(g){return y.r.ix===g||g==="Round Corners 1"?p.radius:null}var f=propertyGroupFactory(p,w),c=m;return p.propertyIndex=y.ix,c.rd.setGroupProperty(PropertyInterface("Radius",f)),Object.defineProperties(p,{radius:{get:ExpressionPropertyInterface(c.rd)},_name:{value:y.nm}}),p.mn=y.mn,p}function _(y,m,w){function p(g){return y.c.ix===g||g==="Copies"?p.copies:y.o.ix===g||g==="Offset"?p.offset:null}var f=propertyGroupFactory(p,w),c=m;return p.propertyIndex=y.ix,c.c.setGroupProperty(PropertyInterface("Copies",f)),c.o.setGroupProperty(PropertyInterface("Offset",f)),Object.defineProperties(p,{copies:{get:ExpressionPropertyInterface(c.c)},offset:{get:ExpressionPropertyInterface(c.o)},_name:{value:y.nm}}),p.mn=y.mn,p}return function(y,m,w){var p;function f(g){if(typeof g=="number")return g=g===void 0?1:g,g===0?w:p[g-1];for(var C=0,k=p.length;C<k;){if(p[C]._name===g)return p[C];C+=1}return null}function c(){return w}return f.propertyGroup=propertyGroupFactory(f,c),p=t(y,m,f.propertyGroup),f.numProperties=p.length,f._name="Contents",f}}(),TextExpressionInterface=function(){return function(t){var e;function i(s){switch(s){case"ADBE Text Document":return i.sourceText;default:return null}}return Object.defineProperty(i,"sourceText",{get:function(){t.textProperty.getValue();var r=t.textProperty.currentData.t;return(!e||r!==e.value)&&(e=new String(r),e.value=r||new String(r),Object.defineProperty(e,"style",{get:function(){return{fillColor:t.textProperty.currentData.fc}}})),e}}),i}}();function _typeof(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(i){return typeof i}:_typeof=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof(t)}var FootageInterface=function(){var t=function(s){var r="",a=s.getFootageData();function n(){return r="",a=s.getFootageData(),l}function l(o){if(a[o])return r=o,a=a[o],_typeof(a)==="object"?l:a;var h=o.indexOf(r);if(h!==-1){var u=parseInt(o.substr(h+r.length),10);return a=a[u],_typeof(a)==="object"?l:a}return""}return n},e=function(s){function r(a){return a==="Outline"?r.outlineInterface():null}return r._name="Outline",r.outlineInterface=t(s),r};return function(i){function s(r){return r==="Data"?s.dataInterface:null}return s._name="Data",s.dataInterface=e(i),s}}(),interfaces={layer:LayerExpressionInterface,effects:EffectsExpressionInterface,comp:CompExpressionInterface,shape:ShapeExpressionInterface,text:TextExpressionInterface,footage:FootageInterface};function getInterface(t){return interfaces[t]||null}var expressionHelpers=function(){function t(n,l,o){l.x&&(o.k=!0,o.x=!0,o.initiateExpression=ExpressionManager.initiateExpression,o.effectsSequence.push(o.initiateExpression(n,l,o).bind(o)))}function e(n){return n*=this.elem.globalData.frameRate,n-=this.offsetTime,n!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<n?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(n,this._cachingAtTime),this._cachingAtTime.lastFrame=n),this._cachingAtTime.value}function i(n){var l=-.01,o=this.getValueAtTime(n),h=this.getValueAtTime(n+l),u=0;if(o.length){var S;for(S=0;S<o.length;S+=1)u+=Math.pow(h[S]-o[S],2);u=Math.sqrt(u)*100}else u=0;return u}function s(n){if(this.vel!==void 0)return this.vel;var l=-.001,o=this.getValueAtTime(n),h=this.getValueAtTime(n+l),u;if(o.length){u=createTypedArray("float32",o.length);var S;for(S=0;S<o.length;S+=1)u[S]=(h[S]-o[S])/l}else u=(h-o)/l;return u}function r(){return this.pv}function a(n){this.propertyGroup=n}return{searchExpressions:t,getSpeedAtTime:i,getVelocityAtTime:s,getValueAtTime:e,getStaticValueAtTime:r,setGroupProperty:a}}();function addPropertyDecorator(){function t(d,_,y){if(!this.k||!this.keyframes)return this.pv;d=d?d.toLowerCase():"";var m=this.comp.renderedFrame,w=this.keyframes,p=w[w.length-1].t;if(m<=p)return this.pv;var f,c;y?(_?f=Math.abs(p-this.elem.comp.globalData.frameRate*_):f=Math.max(0,p-this.elem.data.ip),c=p-f):((!_||_>w.length-1)&&(_=w.length-1),c=w[w.length-1-_].t,f=p-c);var g,C,k;if(d==="pingpong"){var T=Math.floor((m-c)/f);if(T%2!==0)return this.getValueAtTime((f-(m-c)%f+c)/this.comp.globalData.frameRate,0)}else if(d==="offset"){var E=this.getValueAtTime(c/this.comp.globalData.frameRate,0),A=this.getValueAtTime(p/this.comp.globalData.frameRate,0),R=this.getValueAtTime(((m-c)%f+c)/this.comp.globalData.frameRate,0),O=Math.floor((m-c)/f);if(this.pv.length){for(k=new Array(E.length),C=k.length,g=0;g<C;g+=1)k[g]=(A[g]-E[g])*O+R[g];return k}return(A-E)*O+R}else if(d==="continue"){var F=this.getValueAtTime(p/this.comp.globalData.frameRate,0),V=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(k=new Array(F.length),C=k.length,g=0;g<C;g+=1)k[g]=F[g]+(F[g]-V[g])*((m-p)/this.comp.globalData.frameRate)/5e-4;return k}return F+(F-V)*((m-p)/.001)}return this.getValueAtTime(((m-c)%f+c)/this.comp.globalData.frameRate,0)}function e(d,_,y){if(!this.k)return this.pv;d=d?d.toLowerCase():"";var m=this.comp.renderedFrame,w=this.keyframes,p=w[0].t;if(m>=p)return this.pv;var f,c;y?(_?f=Math.abs(this.elem.comp.globalData.frameRate*_):f=Math.max(0,this.elem.data.op-p),c=p+f):((!_||_>w.length-1)&&(_=w.length-1),c=w[_].t,f=c-p);var g,C,k;if(d==="pingpong"){var T=Math.floor((p-m)/f);if(T%2===0)return this.getValueAtTime(((p-m)%f+p)/this.comp.globalData.frameRate,0)}else if(d==="offset"){var E=this.getValueAtTime(p/this.comp.globalData.frameRate,0),A=this.getValueAtTime(c/this.comp.globalData.frameRate,0),R=this.getValueAtTime((f-(p-m)%f+p)/this.comp.globalData.frameRate,0),O=Math.floor((p-m)/f)+1;if(this.pv.length){for(k=new Array(E.length),C=k.length,g=0;g<C;g+=1)k[g]=R[g]-(A[g]-E[g])*O;return k}return R-(A-E)*O}else if(d==="continue"){var F=this.getValueAtTime(p/this.comp.globalData.frameRate,0),V=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(k=new Array(F.length),C=k.length,g=0;g<C;g+=1)k[g]=F[g]+(F[g]-V[g])*(p-m)/.001;return k}return F+(F-V)*(p-m)/.001}return this.getValueAtTime((f-((p-m)%f+p))/this.comp.globalData.frameRate,0)}function i(d,_){if(!this.k)return this.pv;if(d=(d||.4)*.5,_=Math.floor(_||5),_<=1)return this.pv;var y=this.comp.renderedFrame/this.comp.globalData.frameRate,m=y-d,w=y+d,p=_>1?(w-m)/(_-1):1,f=0,c=0,g;this.pv.length?g=createTypedArray("float32",this.pv.length):g=0;for(var C;f<_;){if(C=this.getValueAtTime(m+f*p),this.pv.length)for(c=0;c<this.pv.length;c+=1)g[c]+=C[c];else g+=C;f+=1}if(this.pv.length)for(c=0;c<this.pv.length;c+=1)g[c]/=_;else g/=_;return g}function s(d){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var _=this._transformCachingAtTime.v;if(_.cloneFromProps(this.pre.props),this.appliedTransformations<1){var y=this.a.getValueAtTime(d);_.translate(-y[0]*this.a.mult,-y[1]*this.a.mult,y[2]*this.a.mult)}if(this.appliedTransformations<2){var m=this.s.getValueAtTime(d);_.scale(m[0]*this.s.mult,m[1]*this.s.mult,m[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var w=this.sk.getValueAtTime(d),p=this.sa.getValueAtTime(d);_.skewFromAxis(-w*this.sk.mult,p*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var f=this.r.getValueAtTime(d);_.rotate(-f*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var c=this.rz.getValueAtTime(d),g=this.ry.getValueAtTime(d),C=this.rx.getValueAtTime(d),k=this.or.getValueAtTime(d);_.rotateZ(-c*this.rz.mult).rotateY(g*this.ry.mult).rotateX(C*this.rx.mult).rotateZ(-k[2]*this.or.mult).rotateY(k[1]*this.or.mult).rotateX(k[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var T=this.px.getValueAtTime(d),E=this.py.getValueAtTime(d);if(this.data.p.z){var A=this.pz.getValueAtTime(d);_.translate(T*this.px.mult,E*this.py.mult,-A*this.pz.mult)}else _.translate(T*this.px.mult,E*this.py.mult,0)}else{var R=this.p.getValueAtTime(d);_.translate(R[0]*this.p.mult,R[1]*this.p.mult,-R[2]*this.p.mult)}return _}function r(){return this.v.clone(new Matrix)}var a=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(d,_,y){var m=a(d,_,y);return m.dynamicProperties.length?m.getValueAtTime=s.bind(m):m.getValueAtTime=r.bind(m),m.setGroupProperty=expressionHelpers.setGroupProperty,m};var n=PropertyFactory.getProp;PropertyFactory.getProp=function(d,_,y,m,w){var p=n(d,_,y,m,w);p.kf?p.getValueAtTime=expressionHelpers.getValueAtTime.bind(p):p.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(p),p.setGroupProperty=expressionHelpers.setGroupProperty,p.loopOut=t,p.loopIn=e,p.smooth=i,p.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(p),p.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(p),p.numKeys=_.a===1?_.k.length:0,p.propertyIndex=_.ix;var f=0;return y!==0&&(f=createTypedArray("float32",_.a===1?_.k[0].s.length:_.k.length)),p._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:f},expressionHelpers.searchExpressions(d,_,p),p.k&&w.addDynamicProperty(p),p};function l(d){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),d*=this.elem.globalData.frameRate,d-=this.offsetTime,d!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<d?this._caching.lastIndex:0,this._cachingAtTime.lastTime=d,this.interpolateShape(d,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue}var o=ShapePropertyFactory.getConstructorFunction(),h=ShapePropertyFactory.getKeyframedConstructorFunction();function u(){}u.prototype={vertices:function(_,y){this.k&&this.getValue();var m=this.v;y!==void 0&&(m=this.getValueAtTime(y,0));var w,p=m._length,f=m[_],c=m.v,g=createSizedArray(p);for(w=0;w<p;w+=1)_==="i"||_==="o"?g[w]=[f[w][0]-c[w][0],f[w][1]-c[w][1]]:g[w]=[f[w][0],f[w][1]];return g},points:function(_){return this.vertices("v",_)},inTangents:function(_){return this.vertices("i",_)},outTangents:function(_){return this.vertices("o",_)},isClosed:function(){return this.v.c},pointOnPath:function(_,y){var m=this.v;y!==void 0&&(m=this.getValueAtTime(y,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(m));for(var w=this._segmentsLength,p=w.lengths,f=w.totalLength*_,c=0,g=p.length,C=0,k;c<g;){if(C+p[c].addedLength>f){var T=c,E=m.c&&c===g-1?0:c+1,A=(f-C)/p[c].addedLength;k=bez.getPointInSegment(m.v[T],m.v[E],m.o[T],m.i[E],A,p[c]);break}else C+=p[c].addedLength;c+=1}return k||(k=m.c?[m.v[0][0],m.v[0][1]]:[m.v[m._length-1][0],m.v[m._length-1][1]]),k},vectorOnPath:function(_,y,m){_==1?_=this.v.c:_==0&&(_=.999);var w=this.pointOnPath(_,y),p=this.pointOnPath(_+.001,y),f=p[0]-w[0],c=p[1]-w[1],g=Math.sqrt(Math.pow(f,2)+Math.pow(c,2));if(g===0)return[0,0];var C=m==="tangent"?[f/g,c/g]:[-c/g,f/g];return C},tangentOnPath:function(_,y){return this.vectorOnPath(_,y,"tangent")},normalOnPath:function(_,y){return this.vectorOnPath(_,y,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([u],o),extendPrototype([u],h),h.prototype.getValueAtTime=l,h.prototype.initiateExpression=ExpressionManager.initiateExpression;var S=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(d,_,y,m,w){var p=S(d,_,y,m,w);return p.propertyIndex=_.ix,p.lock=!1,y===3?expressionHelpers.searchExpressions(d,_.pt,p):y===4&&expressionHelpers.searchExpressions(d,_.ks,p),p.k&&d.addDynamicProperty(p),p}}function initialize$1(){addPropertyDecorator()}function addDecorator(){function t(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null}TextProperty.prototype.getExpressionValue=function(e,i){var s=this.calculateExpression(i);if(e.t!==s){var r={};return this.copyData(r,e),r.t=s.toString(),r.__complete=!1,r}return e},TextProperty.prototype.searchProperty=function(){var e=this.searchKeyframes(),i=this.searchExpressions();return this.kf=e||i,this.kf},TextProperty.prototype.searchExpressions=t}function initialize(){addDecorator()}function SVGComposableEffect(){}SVGComposableEffect.prototype={createMergeNode:function t(e,i){var s=createNS("feMerge");s.setAttribute("result",e);var r,a;for(a=0;a<i.length;a+=1)r=createNS("feMergeNode"),r.setAttribute("in",i[a]),s.appendChild(r),s.appendChild(r);return s}};var linearFilterValue="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";function SVGTintFilter(t,e,i,s,r){this.filterManager=e;var a=createNS("feColorMatrix");a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","linearRGB"),a.setAttribute("values",linearFilterValue+" 1 0"),this.linearFilter=a,a.setAttribute("result",s+"_tint_1"),t.appendChild(a),a=createNS("feColorMatrix"),a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),a.setAttribute("result",s+"_tint_2"),t.appendChild(a),this.matrixFilter=a;var n=this.createMergeNode(s,[r,s+"_tint_1",s+"_tint_2"]);t.appendChild(n)}extendPrototype([SVGComposableEffect],SVGTintFilter),SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,i=this.filterManager.effectElements[1].p.v,s=this.filterManager.effectElements[2].p.v/100;this.linearFilter.setAttribute("values",linearFilterValue+" "+s+" 0"),this.matrixFilter.setAttribute("values",i[0]-e[0]+" 0 0 0 "+e[0]+" "+(i[1]-e[1])+" 0 0 0 "+e[1]+" "+(i[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 1 0")}};function SVGFillFilter(t,e,i,s){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result",s),t.appendChild(r),this.matrixFilter=r}SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,i=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}};function SVGStrokeEffect(t,e,i){this.initialized=!1,this.filterManager=e,this.elem=i,this.paths=[]}SVGStrokeEffect.prototype.initialize=function(){var t=this.elem.layerElement.children||this.elem.layerElement.childNodes,e,i,s,r;for(this.filterManager.effectElements[1].p.v===1?(r=this.elem.maskManager.masksProperties.length,s=0):(s=this.filterManager.effectElements[0].p.v-1,r=s+1),i=createNS("g"),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),i.setAttribute("stroke-dashoffset",1),s;s<r;s+=1)e=createNS("path"),i.appendChild(e),this.paths.push({p:e,m:s});if(this.filterManager.effectElements[10].p.v===3){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(i),this.elem.globalData.defs.appendChild(a);var l=createNS("g");for(l.setAttribute("mask","url("+getLocationHref()+"#"+n+")");t[0];)l.appendChild(t[0]);this.elem.layerElement.appendChild(l),this.masker=a,i.setAttribute("stroke","#fff")}else if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(this.filterManager.effectElements[10].p.v===2)for(t=this.elem.layerElement.children||this.elem.layerElement.childNodes;t.length;)this.elem.layerElement.removeChild(t[0]);this.elem.layerElement.appendChild(i),this.elem.layerElement.removeAttribute("mask"),i.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=i},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,i=this.paths.length,s,r;for(e=0;e<i;e+=1)if(this.paths[e].m!==-1&&(s=this.elem.maskManager.viewData[this.paths[e].m],r=this.paths[e].p,(t||this.filterManager._mdf||s.prop._mdf)&&r.setAttribute("d",s.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||s.prop._mdf)){var a;if(this.filterManager.effectElements[7].p.v!==0||this.filterManager.effectElements[8].p.v!==100){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,l=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,o=r.getTotalLength();a="0 0 0 "+o*n+" ";var h=o*(l-n),u=1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01,S=Math.floor(h/u),d;for(d=0;d<S;d+=1)a+="1 "+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01+" ";a+="0 "+o*10+" 0 0"}else a="1 "+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01;r.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",this.filterManager.effectElements[4].p.v*2),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2)&&(t||this.filterManager.effectElements[3].p._mdf)){var _=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(_[0]*255)+","+bmFloor(_[1]*255)+","+bmFloor(_[2]*255)+")")}};function SVGTritoneFilter(t,e,i,s){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),t.appendChild(r);var a=createNS("feComponentTransfer");a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("result",s),this.matrixFilter=a;var n=createNS("feFuncR");n.setAttribute("type","table"),a.appendChild(n),this.feFuncR=n;var l=createNS("feFuncG");l.setAttribute("type","table"),a.appendChild(l),this.feFuncG=l;var o=createNS("feFuncB");o.setAttribute("type","table"),a.appendChild(o),this.feFuncB=o,t.appendChild(a)}SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,i=this.filterManager.effectElements[1].p.v,s=this.filterManager.effectElements[2].p.v,r=s[0]+" "+i[0]+" "+e[0],a=s[1]+" "+i[1]+" "+e[1],n=s[2]+" "+i[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",r),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}};function SVGProLevelsFilter(t,e,i,s){this.filterManager=e;var r=this.filterManager.effectElements,a=createNS("feComponentTransfer");(r[10].p.k||r[10].p.v!==0||r[11].p.k||r[11].p.v!==1||r[12].p.k||r[12].p.v!==1||r[13].p.k||r[13].p.v!==0||r[14].p.k||r[14].p.v!==1)&&(this.feFuncR=this.createFeFunc("feFuncR",a)),(r[17].p.k||r[17].p.v!==0||r[18].p.k||r[18].p.v!==1||r[19].p.k||r[19].p.v!==1||r[20].p.k||r[20].p.v!==0||r[21].p.k||r[21].p.v!==1)&&(this.feFuncG=this.createFeFunc("feFuncG",a)),(r[24].p.k||r[24].p.v!==0||r[25].p.k||r[25].p.v!==1||r[26].p.k||r[26].p.v!==1||r[27].p.k||r[27].p.v!==0||r[28].p.k||r[28].p.v!==1)&&(this.feFuncB=this.createFeFunc("feFuncB",a)),(r[31].p.k||r[31].p.v!==0||r[32].p.k||r[32].p.v!==1||r[33].p.k||r[33].p.v!==1||r[34].p.k||r[34].p.v!==0||r[35].p.k||r[35].p.v!==1)&&(this.feFuncA=this.createFeFunc("feFuncA",a)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(a.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(a)),(r[3].p.k||r[3].p.v!==0||r[4].p.k||r[4].p.v!==1||r[5].p.k||r[5].p.v!==1||r[6].p.k||r[6].p.v!==0||r[7].p.k||r[7].p.v!==1)&&(a=createNS("feComponentTransfer"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("result",s),t.appendChild(a),this.feFuncRComposed=this.createFeFunc("feFuncR",a),this.feFuncGComposed=this.createFeFunc("feFuncG",a),this.feFuncBComposed=this.createFeFunc("feFuncB",a))}SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var i=createNS(t);return i.setAttribute("type","table"),e.appendChild(i),i},SVGProLevelsFilter.prototype.getTableValue=function(t,e,i,s,r){for(var a=0,n=256,l,o=Math.min(t,e),h=Math.max(t,e),u=Array.call(null,{length:n}),S,d=0,_=r-s,y=e-t;a<=256;)l=a/256,l<=o?S=y<0?r:s:l>=h?S=y<0?s:r:S=s+_*Math.pow((l-t)/y,1/i),u[d]=S,d+=1,a+=256/(n-1);return u.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,i=this.filterManager.effectElements;this.feFuncRComposed&&(t||i[3].p._mdf||i[4].p._mdf||i[5].p._mdf||i[6].p._mdf||i[7].p._mdf)&&(e=this.getTableValue(i[3].p.v,i[4].p.v,i[5].p.v,i[6].p.v,i[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||i[10].p._mdf||i[11].p._mdf||i[12].p._mdf||i[13].p._mdf||i[14].p._mdf)&&(e=this.getTableValue(i[10].p.v,i[11].p.v,i[12].p.v,i[13].p.v,i[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||i[17].p._mdf||i[18].p._mdf||i[19].p._mdf||i[20].p._mdf||i[21].p._mdf)&&(e=this.getTableValue(i[17].p.v,i[18].p.v,i[19].p.v,i[20].p.v,i[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||i[24].p._mdf||i[25].p._mdf||i[26].p._mdf||i[27].p._mdf||i[28].p._mdf)&&(e=this.getTableValue(i[24].p.v,i[25].p.v,i[26].p.v,i[27].p.v,i[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||i[31].p._mdf||i[32].p._mdf||i[33].p._mdf||i[34].p._mdf||i[35].p._mdf)&&(e=this.getTableValue(i[31].p.v,i[32].p.v,i[33].p.v,i[34].p.v,i[35].p.v),this.feFuncA.setAttribute("tableValues",e))}};function SVGDropShadowEffect(t,e,i,s,r){var a=e.container.globalData.renderConfig.filterSize,n=e.data.fs||a;t.setAttribute("x",n.x||a.x),t.setAttribute("y",n.y||a.y),t.setAttribute("width",n.width||a.width),t.setAttribute("height",n.height||a.height),this.filterManager=e;var l=createNS("feGaussianBlur");l.setAttribute("in","SourceAlpha"),l.setAttribute("result",s+"_drop_shadow_1"),l.setAttribute("stdDeviation","0"),this.feGaussianBlur=l,t.appendChild(l);var o=createNS("feOffset");o.setAttribute("dx","25"),o.setAttribute("dy","0"),o.setAttribute("in",s+"_drop_shadow_1"),o.setAttribute("result",s+"_drop_shadow_2"),this.feOffset=o,t.appendChild(o);var h=createNS("feFlood");h.setAttribute("flood-color","#00ff00"),h.setAttribute("flood-opacity","1"),h.setAttribute("result",s+"_drop_shadow_3"),this.feFlood=h,t.appendChild(h);var u=createNS("feComposite");u.setAttribute("in",s+"_drop_shadow_3"),u.setAttribute("in2",s+"_drop_shadow_2"),u.setAttribute("operator","in"),u.setAttribute("result",s+"_drop_shadow_4"),t.appendChild(u);var S=this.createMergeNode(s,[s+"_drop_shadow_4",r]);t.appendChild(S)}extendPrototype([SVGComposableEffect],SVGDropShadowEffect),SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var i=this.filterManager.effectElements[3].p.v,s=(this.filterManager.effectElements[2].p.v-90)*degToRads,r=i*Math.cos(s),a=i*Math.sin(s);this.feOffset.setAttribute("dx",r),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,i){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=i,i.matteElement=createNS("g"),i.matteElement.appendChild(i.layerElement),i.matteElement.appendChild(i.transformedElement),i.baseElement=i.matteElement}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,i=_svgMatteSymbols.length;e<i;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var i=t.layerElement.parentNode;if(i){for(var s=i.children,r=0,a=s.length;r<a&&s[r]!==t.layerElement;)r+=1;var n;r<=a-2&&(n=s[r+1]);var l=createNS("use");l.setAttribute("href","#"+e),n?i.insertBefore(l,n):i.appendChild(l)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var i=createElementID(),s=createNS("mask");s.setAttribute("id",e.layerId),s.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var r=t.globalData.defs;r.appendChild(s);var a=createNS("symbol");a.setAttribute("id",i),this.replaceInParent(e,i),a.appendChild(e.layerElement),r.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+i),s.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,i=0,s=e.length;i<s;)e[i]&&e[i].data.ind===t&&this.setElementAsMask(this.elem,e[i]),i+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()};function SVGGaussianBlurEffect(t,e,i,s){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");r.setAttribute("result",s),t.appendChild(r),this.feGaussianBlur=r}SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3,i=this.filterManager.effectElements[0].p.v*e,s=this.filterManager.effectElements[1].p.v,r=s==3?0:i,a=s==2?0:i;this.feGaussianBlur.setAttribute("stdDeviation",r+" "+a);var n=this.filterManager.effectElements[2].p.v==1?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",n)}};function TransformEffect(){}TransformEffect.prototype.init=function(t){this.effectsManager=t,this.type=effectTypes.TRANSFORM_EFFECT,this.matrix=new Matrix,this.opacity=-1,this._mdf=!1,this._opMdf=!1},TransformEffect.prototype.renderFrame=function(t){if(this._opMdf=!1,this._mdf=!1,t||this.effectsManager._mdf){var e=this.effectsManager.effectElements,i=e[0].p.v,s=e[1].p.v,r=e[2].p.v===1,a=e[3].p.v,n=r?a:e[4].p.v,l=e[5].p.v,o=e[6].p.v,h=e[7].p.v;this.matrix.reset(),this.matrix.translate(-i[0],-i[1],i[2]),this.matrix.scale(n*.01,a*.01,1),this.matrix.rotate(-h*degToRads),this.matrix.skewFromAxis(-l*degToRads,(o+90)*degToRads),this.matrix.translate(s[0],s[1],0),this._mdf=!0,this.opacity!==e[8].p.v&&(this.opacity=e[8].p.v,this._opMdf=!0)}};function SVGTransformEffect(t,e){this.init(e)}extendPrototype([TransformEffect],SVGTransformEffect);function CVTransformEffect(t){this.init(t)}return extendPrototype([TransformEffect],CVTransformEffect),registerRenderer("canvas",CanvasRenderer),registerRenderer("html",HybridRenderer),registerRenderer("svg",SVGRenderer),ShapeModifiers.registerModifier("tm",TrimModifier),ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeModifiers.registerModifier("rd",RoundCornersModifier),ShapeModifiers.registerModifier("zz",ZigZagModifier),ShapeModifiers.registerModifier("op",OffsetPathModifier),setExpressionsPlugin(Expressions),setExpressionInterfaces(getInterface),initialize$1(),initialize(),registerEffect$1(20,SVGTintFilter,!0),registerEffect$1(21,SVGFillFilter,!0),registerEffect$1(22,SVGStrokeEffect,!1),registerEffect$1(23,SVGTritoneFilter,!0),registerEffect$1(24,SVGProLevelsFilter,!0),registerEffect$1(25,SVGDropShadowEffect,!0),registerEffect$1(28,SVGMatte3Effect,!1),registerEffect$1(29,SVGGaussianBlurEffect,!0),registerEffect$1(35,SVGTransformEffect,!1),registerEffect(35,CVTransformEffect),lottie})})(lottie$1,lottie$1.exports);var lottieExports=lottie$1.exports;const Lottie=getDefaultExportFromCjs(lottieExports);(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".lottie-animation-container{width:var(--lottie-animation-container-width);height:var(--lottie-animation-container-height);background-color:var(--lottie-animation-container-background-color);overflow:hidden;margin:var(--lottie-animation-margin)}.lottie-animation-container svg{transform:scale(var(--lottie-animation-scale))}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,__spreadValues=(t,e)=>{for(var i in e||(e={}))__hasOwnProp.call(e,i)&&__defNormalProp(t,i,e[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(e))__propIsEnum.call(e,i)&&__defNormalProp(t,i,e[i]);return t},__spreadProps=(t,e)=>__defProps(t,__getOwnPropDescs(e)),es6=function t(e,i){if(e===i)return!0;if(e&&i&&typeof e=="object"&&typeof i=="object"){if(e.constructor!==i.constructor)return!1;var s,r,a;if(Array.isArray(e)){if(s=e.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!t(e[r],i[r]))return!1;return!0}if(e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(r of e.entries())if(!i.has(r[0]))return!1;for(r of e.entries())if(!t(r[1],i.get(r[0])))return!1;return!0}if(e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(r of e.entries())if(!i.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if(s=e.length,s!=i.length)return!1;for(r=s;r--!==0;)if(e[r]!==i[r])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if(a=Object.keys(e),s=a.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,a[r]))return!1;for(r=s;r--!==0;){var n=a[r];if(!t(e[n],i[n]))return!1}return!0}return e!==e&&i!==i};function klona(t){var e,i,s;if(Array.isArray(t)){for(i=Array(e=t.length);e--;)i[e]=(s=t[e])&&typeof s=="object"?klona(s):s;return i}if(Object.prototype.toString.call(t)==="[object Object]"){i={};for(e in t)e==="__proto__"?Object.defineProperty(i,e,{value:klona(t[e]),configurable:!0,enumerable:!0,writable:!0}):i[e]=(s=t[e])&&typeof s=="object"?klona(s):s;return i}return t}var _export_sfc=(t,e)=>{const i=t.__vccOpts||t;for(const[s,r]of e)i[s]=r;return i};const _sfc_main=vue.defineComponent({props:{animationData:{type:Object,default:()=>({})},animationLink:{type:String,default:""},loop:{type:[Boolean,Number],default:!0},autoPlay:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},speed:{type:Number,default:1},delay:{type:Number,default:0},direction:{type:String,default:"forward"},pauseOnHover:{type:Boolean,default:!1},playOnHover:{type:Boolean,default:!1},backgroundColor:{type:String,default:"transparent"},pauseAnimation:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},scale:{type:Number,default:1},renderer:{type:String,default:"svg"},rendererSettings:{type:Object,default:()=>({})},assetsPath:{type:String,default:""}},emits:{onComplete:null,onLoopComplete:null,onEnterFrame:null,onSegmentStart:null,onAnimationLoaded:null},setup(t,{emit:e}){const i=vue.ref();let s,r=null,a=1;vue.watchEffect(async()=>{if(i.value){if(t.animationLink!="")try{s=await(await fetch(t.animationLink)).json()}catch(k){console.error(k);return}else if(es6(t.animationData,{})===!1)s=klona(t.animationData);else throw new Error("You must provide either animationLink or animationData");n()}});const n=()=>{if(!i.value||!s)return;r==null||r.destroy(),r=null;let k=t.autoPlay,T=t.loop;t.playOnHover&&(k=!1),typeof T=="number"&&T>0&&(T=T-1),t.delay>0&&(k=!1);const E={container:i.value,renderer:t.renderer,loop:T,autoplay:k,animationData:s,assetsPath:t.assetsPath};es6(t.rendererSettings,{})===!1&&(E.rendererSettings=t.rendererSettings),t.scale!==1&&(E.rendererSettings=__spreadProps(__spreadValues({},E.rendererSettings),{viewBoxOnly:!0})),r=Lottie.loadAnimation(E),setTimeout(()=>{k=t.autoPlay,t.playOnHover?r==null||r.pause():k?r==null||r.play():r==null||r.pause(),e("onAnimationLoaded")},t.delay),r.setSpeed(t.speed),t.direction==="reverse"&&r.setDirection(-1),t.direction==="normal"&&r.setDirection(1),(t.pauseAnimation||t.playOnHover)&&r.pause(),r.addEventListener("loopComplete",()=>{t.direction==="alternate"&&(r==null||r.stop(),a=a===-1?1:-1,r==null||r.setDirection(a),r==null||r.play()),e("onLoopComplete")}),r.addEventListener("complete",()=>{e("onComplete")}),r.addEventListener("enterFrame",()=>{e("onEnterFrame")}),r.addEventListener("segmentStart",()=>{e("onSegmentStart")})},l=vue.computed(()=>{let k=t.width,T=t.height;return typeof t.width=="number"&&(k=`${t.width}px`),typeof t.height=="number"&&(T=`${t.height}px`),{"--lottie-animation-container-width":k,"--lottie-animation-container-height":T,"--lottie-animation-container-background-color":t.backgroundColor,"--lottie-animation-margin":t.noMargin?"0":"0 auto","--lottie-animation-scale":t.scale!=1?t.scale:""}}),o=()=>{r&&t.pauseOnHover&&r.pause(),r&&t.playOnHover&&r.play()},h=()=>{r&&t.pauseOnHover&&r.play(),r&&t.playOnHover&&r.pause()};return vue.watch(()=>t.pauseAnimation,()=>{if((t.pauseOnHover||t.playOnHover)&&t.pauseAnimation){console.error("If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover");return}r&&(t.pauseAnimation?r.pause():r.play())}),{lottieAnimationContainer:i,hoverEnded:h,hoverStarted:o,getCurrentStyle:l,play:()=>{r&&r.play()},pause:()=>{r&&r.pause()},stop:()=>{r&&r.stop()},destroy:()=>{r&&r.destroy()},setSpeed:(k=1)=>{if(k<=0)throw new Error("Speed must be greater than 0");r&&r.setSpeed(k)},setDirection:k=>{r&&(k==="forward"?r.setDirection(1):k==="reverse"&&r.setDirection(-1))},goToAndStop:(k,T=!0)=>{r&&r.goToAndStop(k,T)},goToAndPlay:(k,T=!0)=>{r&&r.goToAndPlay(k,T)},playSegments:(k,T=!1)=>{r&&r.playSegments(k,T)},setSubFrame:(k=!0)=>{r&&r.setSubframe(k)},getDuration:(k=!0)=>{if(r)return r.getDuration(k)},updateDocumentData:(k,T=0)=>{r&&r.renderer.elements[T].updateDocumentData(k)}}}});function _sfc_render(t,e,i,s,r,a){return vue.openBlock(),vue.createElementBlock("div",{ref:"lottieAnimationContainer",class:"lottie-animation-container",style:vue.normalizeStyle(t.getCurrentStyle),onMouseenter:e[0]||(e[0]=(...n)=>t.hoverStarted&&t.hoverStarted(...n)),onMouseleave:e[1]||(e[1]=(...n)=>t.hoverEnded&&t.hoverEnded(...n))},null,36)}var Vue3Lottie=_export_sfc(_sfc_main,[["render",_sfc_render]]);const lottie={tagName:"lottie",components:{Vue3Lottie},computed:{classList(){return["lottie","vue-component"]},widthValue(){return this.width&&this.width!==""?this.width:"100%"},heightValue(){return this.height&&this.height!==""?this.height:"100%"},backgroundValue(){return this.background&&this.background!==""?this.background:"transparent"},loopValue(){return this.loop&&this.loop!==""?this.loop:!0},autoplayValue(){return this.autoplay&&this.autoplay!==""?this.autoplay:!0},nameValue(){return this.name&&this.name!==""?this.name:"lottie-"+Math.random()},rendererValue(){return this.renderer&&this.renderer!==""?this.renderer:"svg"},options(){return{renderer:this.rendererValue,loop:this.loopValue,autoplay:this.autoplayValue,width:this.getSize(this.widthValue),height:this.getSize(this.heightValue),animationData:this.data}}},data(){return{style:{}}},mounted(){this.initStyle()},methods:{initStyle(){this.style={width:this.getSize(this.widthValue),height:this.getSize(this.heightValue),background:this.backgroundValue}},getSize(t){return!t.indexOf||t.indexOf("px")===-1&&t.indexOf("%")===-1?`${t}px`:t}},props:{data:Object,name:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},background:{type:String},loop:{type:[Boolean,Number]},autoplay:{type:Boolean},renderer:{type:String}},template:`
    <div :class="classList">
      <Vue3Lottie class="lottie__container" v-bind="options" :style="style" />
    </div>
  `},__vite_glob_0_97=Object.freeze(Object.defineProperty({__proto__:null,default:lottie},Symbol.toStringTag,{value:"Module"})),modalApplication={tagName:"modal-application",props:{form:Object,success:{type:Object,default:()=>({})}},template:`
      <div class="modal__application">
        <div class="modal__body-default">
          <formular
            :form="form"
            :space="' '"
            :container="true"
            :customValidation="true"
            :hasUuid="true"
          />
        </div>
        <div class="modal__success container">
          <div class="modal__success-row row">
            <div class="modal__success-content col-lg-8">
              <div class="modal__success-headline">
                <headline
                  :text="success.headline.text"
                  :level="'h2'"
                  :classes="success.headline.classes"
                />
              </div>
              <div class="modal__success-icon">
                <icon icon="rocket" />
              </div>
              <div class="modal__success-subline">
                {{ success.subline }}
              </div>
              <div class="modal__success-subheadline">
                <headline
                  :text="success.subheadline.text"
                  :level="'h4'"
                  :classes="success.subheadline.classes"
                />
              </div>
              <div class="modal__success-text">
                {{ success.text }}
              </div>
              <div class="modal__success-close">
                <cta :text="success.cta.text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `},__vite_glob_0_98=Object.freeze(Object.defineProperty({__proto__:null,default:modalApplication},Symbol.toStringTag,{value:"Module"})),modal={tagName:"modal",computed:{modalErrorValue(){return Tools.getJSON(this.modalError)},classList(){return["modal fade",this.slimValue?"modal--slim":"",this.notificationValue?"modal--notification":"",this.isCenterSlim?"modal--center-slim":"","vue-component"]},dialogClassList(){return["modal-dialog",`${this.slimValue?"modal-lg":"modal-xl"}`,`${this.centerValue?"modal-dialog-centered":""}`]},settings(){return{"data-client-name":this.clientName?this.clientName:null,"data-api-url":this.apiUrl?this.apiUrl:null,"data-job-id":this.jobId?this.jobId:null,"data-modal-id":this.modalId?this.modalId:null,"data-api-key":this.apiKey?this.apiKey:null,"data-mock-apply-url":this.mockApplyUrl?this.mockApplyUrl:null,"data-mock-documents-url":this.mockDocumentsUrl?this.mockDocumentsUrl:null}},isCenterSlim(){return this.slimValue&&this.centerValue},modal(){return this.$refs.modal},centerValue(){return Tools.isTrue(this.center)},slimValue(){return Tools.isTrue(this.slim)},loadingValue(){return this.loading?!0:null},notificationValue(){return Tools.isTrue(this.notification)},size(){return this.slimValue||this.notificationValue?"small":null},hasCircleAndHover(){return!(this.isCenterSlim||this.notificationValue)},circle(){return this.hasCircleAndHover},hover(){return this.hasCircleAndHover},bodyClasses(){return["modal__body",this.loading?State.LOADING:null]}},mounted(){this.bindEvents(),this.show===!0&&this.openModal()},unmounted(){this.observer.disconnect(),document.removeEventListener(Events.LOAD_MODAL,this.handleLoading)},methods:{isModalOpen(){return!!document.body.classList.contains("modal-open")},setModalMode(t){const e=document.querySelector("html");t?e.classList.add(State.MODAL_OPEN):(e.classList.remove(State.MODAL_OPEN),this.handleClose())},handleClose(){const e=this.$refs.modal.querySelector(Form$1.rootSelector);if(!e)return;const i=Form$1.getInstance(e);i||Form$1.reset(i.form)},bindEvents(){this.observer=new MutationObserver(this.handleMutation),setTimeout(()=>{this.observer.observe(document.body,{attributes:!0})},200),document.addEventListener(Events.LOAD_MODAL,this.handleLoading)},handleMutation(){this.setModalMode(this.isModalOpen())},handleLoading(t){const e=t==null?void 0:t.detail;this.loading=e},openModal(){setTimeout(()=>{Modal.open(this.$refs.modal)},70)}},data(){return{observer:null,loading:!1,blabla:"text"}},props:{application:Boolean,form:Object,success:Object,clientName:String,apiUrl:String,jobId:String,modalId:String,slim:{default:null},show:{default:null},center:{default:null},notification:{default:null},apiKey:String,mockApplyUrl:String,mockDocumentsUrl:String,modalError:Object,content:String},template:`
    <div :class="classList" tabindex="-1" aria-hidden="true" :data-loading="loadingValue" style="--color-icon-hover-color: var(--color-white)" ref="modal"
          v-bind="settings">
      <div :class="dialogClassList">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close">
              <icon icon="close" :hover="hover" :circle="circle" :size="size" />
            </div>
          </div>
          <div :class="bodyClasses">
            <modal-application v-if="application" :form="form" :success="success" />
            <div class="container" v-else-if="content">
              <div class="row">
                <div class="col" v-html="content"></div>
              </div>
            </div>
            <slot></slot>
            <div class="modal__error container" v-if="modalErrorValue">
              <div class="modal__error-row row">
                <div class="modal__error-content col-lg-8">
                  <div class="modal__error-headline">
                    <headline
                      :text="modalErrorValue.headline.text"
                      level='h2'
                      :classes="modalErrorValue.headline.classes"
                    />
                  </div>
                  <div class="modal__error-icon">
                    <icon
                      icon='meerkat'
                      size='xxl'
                    />
                  </div>
                  <div class="modal__error-subline">
                    {{ modalErrorValue.subline }}
                  </div>
                  <div class="modal__error-text">
                    {{ modalErrorValue.text }}
                  </div>
                  <div class="modal__error-mail">
                    <icon icon='mail' size="small" /> <a class="custom" :href="'mailto:' + modalErrorValue.mail">{{ modalErrorValue.mail }} </a>
                  </div>
                  <div class="modal__error-phone">
                    <icon icon='phone' size="small" /> <a class="custom" :href="'tel:' + modalErrorValue.phone" > {{ modalErrorValue.phone }} </a>
                  </div>
                  <div class="modal__error-close" v-if="modalErrorValue.cta">
                    <cta
                      :text="modalErrorValue.cta.text"
                      :skin="modalErrorValue.cta.skin"
                      :width="modalErrorValue.cta.width"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},__vite_glob_0_99=Object.freeze(Object.defineProperty({__proto__:null,default:modal},Symbol.toStringTag,{value:"Module"})),peopleSquare={tagName:"people-square",migrate:!0,template:`
                        people-square
                    `},__vite_glob_0_100=Object.freeze(Object.defineProperty({__proto__:null,default:peopleSquare},Symbol.toStringTag,{value:"Module"})),personQuote={tagName:"person-quote",props:{img:String,text:String,name:String,srcSet:Object},template:`
    <div class="person-quote">
      <div class="person-quote__img">
        <!-- TODO find a solution for site.data.imgSrcSets.square -->
        <v-img :img="img" cloudinary=true :imgSrcSets="imgSrcSets" />
      </div>
      <div class="person-quote__content">
        <div class="person-quote__text">{{text}}</div>
        <div class="person-quote__name">{{name}}</div>
      </div>
    </div>
  `},__vite_glob_0_101=Object.freeze(Object.defineProperty({__proto__:null,default:personQuote},Symbol.toStringTag,{value:"Module"})),postTeaser={tagName:"post-teaser",data(){return{translationData:null,spacing:2}},computed:{formattedDate(){var e;const t=(e=this.postData)==null?void 0:e.date;if(t)return t.split("-").reverse().join(".")},classList(){return["post-teaser",this.classes!==""?this.classes:"","vue-component"]},title(){var t,e,i,s;return((t=this.postData)==null?void 0:t.lang)!==this.lang&&this.postData.lang!==""&&((e=this.translationData)!=null&&e.onlyLanguage)?`${this.postData.title} (${(i=this.translationData)==null?void 0:i.onlyLanguage})`:(s=this.postData)==null?void 0:s.title},excerpt(){var e;return Tools.decodeHTML(Tools.truncateWords((e=this.postData)==null?void 0:e.excerpt,30))},imgUrl(){var t;return`/blog/heads/${(t=this.postData)==null?void 0:t.blogtitlepic}.jpg`},postData(){return Tools.getJSON(this.post)},listClasses(){return`list-inline-item mx-sm-n${this.spacing}`},href(){var t;return(t=this.postData)==null?void 0:t.url}},beforeMount(){var e;const t=(e=window.i18n)==null?void 0:e.loader;t&&t.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["onlyLanguage"])})},props:{classes:String,post:Object,tag:String,site:Object,lang:String},template:`
    <div class="post-teaser mb-8 row vue-component" :data-tags="tag">
      <div class="post-teaser__img-container col-sm-4 mb-4 mb-sm-0">
        <a :href="href" class="post-teaser__link is-foreground">
          <v-img :img="imgUrl" :alt="title" class="img-responsive shadow" :cloudinary="true" preset="postTeaser" img-src-sets="postTeaser" />
        </a>
      </div>
      <div class="col-sm-8">
        <div class="post-teaser__date mb-2">
          {{ formattedDate }}
        </div>
        <h3 class="post-teaser__title mb-3">
          <a :href="href" class="post-teaser__link" v-html="title"></a>
        </h3>
        <p class="post-teaser__abstract mb-5" v-html="excerpt"></p>
        <ul class="list-inline">
          <li :class="listClasses">
            <tag v-for="tag in postData?.tags" :key="tag" :tag="tag" :spacing="spacing" ></tag>
          </li>
        </ul>
      </div>
    </div>
  `},__vite_glob_0_102=Object.freeze(Object.defineProperty({__proto__:null,default:postTeaser},Symbol.toStringTag,{value:"Module"})),pricingProduct={tagName:"pricing-product",migrate:!0,template:`
                      pricing-product
                  `},__vite_glob_0_103=Object.freeze(Object.defineProperty({__proto__:null,default:pricingProduct},Symbol.toStringTag,{value:"Module"})),productBlocks={tagName:"product-blocks",migrate:!0,template:`
                      product-blocks
                  `},__vite_glob_0_104=Object.freeze(Object.defineProperty({__proto__:null,default:productBlocks},Symbol.toStringTag,{value:"Module"})),productStage={tagName:"product-stage",migrate:!0,template:`
                      product-stage
                  `},__vite_glob_0_105=Object.freeze(Object.defineProperty({__proto__:null,default:productStage},Symbol.toStringTag,{value:"Module"})),quotes={tagName:"quotes",migrate:!0,template:`
                      quotes
                  `},__vite_glob_0_106=Object.freeze(Object.defineProperty({__proto__:null,default:quotes},Symbol.toStringTag,{value:"Module"})),screenshot={tagName:"screenshot",computed:{style(){return{"background-color":this.bgColor}},leftValue(){return Tools.isTrue(this.left)}},props:{spacing:String,level:String,headline:String,copy:String,left:Boolean,bgColor:String,source:String,sourceCaption:String,image:Object,cloudinary:Boolean,alt:String,classes:String,list:Object},template:`
    <div class="screenshot full-width-container vue-component">
      <div :class="['screenshot__container container', spacing ? spacing : null]" >
        <div :class="['row d-flex align-items-center', leftValue ? 'flex-row-reverse' : null]">
          <div :class="['col-lg-4 my-4 my-lg-0 py-4', leftValue ? 'offset-lg-1' : null]">
            <headline
              :level=level
              :text=headline
            />
            <div class="screenshot__copy" v-html="copy"></div>
            <div class="screenshot__list pt-4" v-if="list">
              <cta
                :text=list.ctaText
                :href=list.ctaHref
                :skin=list.skin
                :type=list.ctaType
                :target=list.target
                :external=list.external
              />
            </div>
          </div>
          <div :class="['screenshot__img d-flex align-items-center col-lg-7', leftValue ? null : 'offset-lg-1']" :style="style">
            <a class="js-fancybox media-viewer" href="javascript:;"
              data-hs-fancybox-options='{"speed": 700}'
              :data-src="source"
              :data-caption="sourceCaption"
            >
              <v-img :img="image" :alt="alt" :cloudinary="cloudinary" class="py-4 position-relative z-index-2" />
              <span class="media-viewer-container">
                <span class="media-viewer-icon">
                  <i class="fas fa-plus"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_107=Object.freeze(Object.defineProperty({__proto__:null,default:screenshot},Symbol.toStringTag,{value:"Module"})),scrollArrow={tagName:"scroll-arrow",computed:{classList(){return["scroll-arrow","container",this.spacingValue,"vue-component"]},spacingValue(){return this.spacing?`${this.spacing}`:""}},methods:{handleClick(){const t=document.querySelector(this.target);t&&Tools.scrollIntoView(t,!0)}},props:{target:String,spacing:{default:null}},template:`
    <div :class="classList">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center">
          <icon classes="scroll-arrow__button" size="xl" icon="arrow-narrow" :onclick="handleClick"  />
        </div>
      </div>
    </div>
  `},__vite_glob_0_108=Object.freeze(Object.defineProperty({__proto__:null,default:scrollArrow},Symbol.toStringTag,{value:"Module"})),Fuse={},search={tagName:"search",computed:{classList(){return["search",`${this.searchExpanded?"search--expanded":""}`,"vue-component"]},limitedResults(){var t;return(t=this.results)==null?void 0:t.slice(0,this.maxResults)}},data(){return{search:null,store:null,results:null,maxResults:15,searchExpanded:!1}},methods:{handleEnter(){const t=`${this.endpoint}`;if(t)return this.store?this.handleSearch():fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{this.store=e,this.handleSearch()}).catch(e=>{console.log("handleEnter ~ error",e)})},handleSearch(){this.searchEngine||this.initSearchEngine();const t=`${this.$refs.search.value}`;t&&(this.results=this.searchEngine.search(t),console.log("handleSearch ~ this.results",this.results))},initSearchEngine(){const t=this.store,{results:e,weights:i}=t;if(!Fuse)return;const s={includeScore:!0,ignoreLocation:!0,findAllMatches:!0,includeMatches:!0,threshold:.2,keys:i};this.searchEngine=new Fuse(e,s)},handleSearchBar(){this.searchExpanded=!this.searchExpanded,window.addEventListener("click",this.handleOutsideClick.bind(this))},handleOutsideClick(t){this.searchExpanded=Tools.isOutsideOf("search",t)?!1:this.searchExpanded}},props:{placeholder:String,endpoint:String,language:String},template:`
    <div :class="classList">
      <icon
        v-on:click="handleSearchBar"
        class="search__icon"
        icon="magnifier"
        size="medium"
      />
      <input class="search__bar" ref="search" type="search" @keypress.enter="handleEnter" />
      <div v-for="result in limitedResults">
        <div class="">
          <div>title: {{ result.item.title }}</div>
          <div>excerpt: {{ result.item.excerpt }}</div>
          <div>score: {{ result.score }}</div>
        </div>
        <br/><br/>
      </div>
    </div>
  `},__vite_glob_0_109=Object.freeze(Object.defineProperty({__proto__:null,default:search},Symbol.toStringTag,{value:"Module"})),services={tagName:"services",computed:{classValue(){return["services",this.author?`services--author ${this.authorHasSocials?"":"services--no-socials"}`:"","vue-component"]},authorHasSocials(){var t;return((t=this.author)==null?void 0:t.socials)!==void 0},itemsList(){return this.authorHasSocials?this.author.socials:this.items}},methods:{},props:{items:{default:null},title:{default:null},label:{default:null},value:{default:null},author:{default:null},shareUrl:{default:null}},template:`
  <div :class="classValue">
    <template v-if="itemsList">
      <div class="services__title font-size-xs bold">
        {{ title }}
      </div>
      <div class="services__items font-size-1" >
        <template v-for="item in itemsList">
          <div class="services__item">
            <cta v-bind="item" link="true" :external="authorHasSocials"/>
          </div>
        </template>
      </div>
    </template>
    <div class="services__footer">
      <template v-if="author">
        <socials :author="author" :message="followMessage" expand="true" :share-url="shareUrl"/>
      </template>
      <template v-else>
        <div class="services__label font-size-xs bold">{{ label }}</div>
        <div class="services__value">{{ value }}</div>
      </template>
    </div>
  </div>
`},__vite_glob_0_110=Object.freeze(Object.defineProperty({__proto__:null,default:services},Symbol.toStringTag,{value:"Module"})),shapeAnimation={tagName:"shape-animation",computed:{tag(){return this.isAnimate?"animate":this.isMotion?"animateMotion":"animateTransform"},isAnimate(){let t=!1;switch(this.attributeName){case"opacity":t=!0;break}return t},defaultCalcMode(){return this.isAnimate?null:"spline"},defaultKeyTimes(){return this.isAnimate?null:"0;1"},effectiveKeySplines(){return this.isAnimate?null:this.keySplines}},props:{id:String,href:String,begin:String,attributeName:String,by:String,from:String,to:String,dur:String,fill:String,calcMode:String,keyTimes:String,keySplines:String,keyPoints:String,type:String,additive:Boolean,isMotion:Boolean,isAnimate:Boolean,path:String,values:String},template:`
    <component :is="tag"
      :id="id"
      :href="href"
      :begin="begin"
      :attributeName="attributeName ? attributeName : 'transform'"
      :by="by"
      :from="from"
      :to="to"
      :dur="dur"
      :fill="fill ? fill : 'freeze'"
      :calcMode="calcMode ? calcMode : defaultCalcMode"
      :keyTimes="keyTimes ? keyTimes : defaultKeyTimes"
      :keySplines="effectiveKeySplines"
      :keyPoints="keyPoints"
      :path="path"
      :values="values"
      :type="type"
      :additive="additive ? 'sum': null"
    />
  `},__vite_glob_0_111=Object.freeze(Object.defineProperty({__proto__:null,default:shapeAnimation},Symbol.toStringTag,{value:"Module"}));class ShapeElements{constructor({tagName:e,elements:i,begin:s}){this.tagName=e,this.elements=i,this.begin=s,this.tagNameId=this.createTagNameId()}createStepNames(e){return this.elements.forEach(i=>{const s=i.name;e[s]=i,Object.keys(i).forEach(a=>{if(a==="name")return;const n=i[a];n&&(n.id=this.getStepId(`${s.toLowerCase()}-${a}`))})}),e}getSequence(){const e=this.createStepNames({});return this.elements.forEach(i=>{const s=i.name;e[s]=i,Object.keys(i).forEach(a=>{if(a==="name")return;const n=i[a];n&&(n.begin=this.getStepBegin(e,n),n.start&&(n.begin=`${this.begin};${n.begin}`))}),i.id=this.getStepId(`${s.toLowerCase()}-id`),i.href=`#${i.id}`}),e}getStepBegin(e,i){const a=`${(""+i.delay).indexOf("s")!==-1?i.delay:`${i.delay}s`}`;return i.waitFor?`${this.getWaitForName(e,i.waitFor)}+${a}`:a}getWaitForName(e,i){const s=".end",r=i.split("."),a=r[0],n=r[1];return`${e[a]&&e[a][n]?e[a][n].id:""}${s}`}getStepId(e){return`${this.tagNameId}__${e}`}createTagNameId(){return`${Tools.uuid()}-${this.tagName}`}}const defaultStart$9="0.1s",animationDelay$7="7s",animationStepDelay$6="0.05s",tagName$d="shape-circle-within-square",shapeCircleWithinSquare={tagName:tagName$d,computed:{begin(){return this.start?this.start:defaultStart$9},firstSquareStaticColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},firstCircleColor(){return this.secondColor?this.secondColor:"var(--color-white)"},secondSquareColor(){return this.secondColor?this.secondColor:"var(--color-white)"},secondCircleColor(){return this.thirdColor?this.thirdColor:"var(--color-gigas)"},thirdSquareColor(){return this.thirdColor?this.thirdColor:"var(--color-gigas)"},thirdCircleColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},firstCircle(){return this.sequence.firstCircle},secondSquare(){return this.sequence.secondSquare},secondCircle(){return this.sequence.secondCircle},thirdSquare(){return this.sequence.thirdSquare},thirdCircle(){return this.sequence.thirdCircle},fourthSquare(){return this.sequence.fourthSquare},overall(){return{keySplines:"0 0 1 1",dur:"1.8s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$d,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"transform2",from:"400 0",to:"0 0",dur:"0.3s",type:"translate"}]},{steps:[{name:"transform",dur:"",from:"0 0",to:"1 1",type:"scale"}]}],elements:[{name:"firstCircle",transform:{delay:animationStepDelay$6,values:"0 0;1 1;1 -1",keyTimes:"0;0.5;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1",start:!0,waitFor:"fourthSquare.transform2"},reset:{waitFor:"secondSquare.transform2",delay:animationStepDelay$6,dur:"0.01s"}},{name:"secondSquare",transform2:{delay:animationDelay$7,waitFor:"firstCircle.transform"},reset:{waitFor:"thirdSquare.transform2",delay:animationStepDelay$6,dur:"0.01s"}},{name:"secondCircle",transform:{delay:animationStepDelay$6,values:"0 0;1 1;1 -1",keyTimes:"0;0.5;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1",waitFor:"secondSquare.transform2"},reset:{waitFor:"thirdSquare.transform2",delay:animationStepDelay$6,dur:"0.01s"}},{name:"thirdSquare",transform2:{delay:animationDelay$7,waitFor:"secondCircle.transform"},reset:{waitFor:"fourthSquare.transform2",delay:animationStepDelay$6,dur:"0.01s"}},{name:"thirdCircle",transform:{delay:animationStepDelay$6,values:"0 0;1 1;1 -1",keyTimes:"0;0.5;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1",waitFor:"thirdSquare.transform2"},reset:{waitFor:"fourthSquare.transform2",delay:animationStepDelay$6,dur:"0.01s"}},{name:"fourthSquare",transform2:{delay:animationDelay$7,waitFor:"thirdCircle.transform"},reset:{waitFor:"fourthSquare.transform2",delay:animationStepDelay$6,dur:"0.01s"}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('firstCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('fourthSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="firstCircle?.reset?.id"
            :href="firstCircle?.href"
            :begin="firstCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="firstCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="secondSquare?.reset?.id"
            :href="secondSquare?.href"
            :begin="secondSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="secondSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="secondCircle?.reset?.id"
            :href="secondCircle?.href"
            :begin="secondCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="secondCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="thirdSquare?.reset?.id"
            :href="thirdSquare?.href"
            :begin="thirdSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="thirdSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="thirdCircle?.reset?.id"
            :href="thirdCircle?.href"
            :begin="thirdCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="thirdCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="fourthSquare?.reset?.id"
            :href="fourthSquare?.href"
            :begin="fourthSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="fourthSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g>
          <g dstyle="display:none">
            <rect :fill="firstSquareStaticColor"
              width="400" height="400" />
          </g>
          <g transform="translate(200, 200) rotate(990) ">
            <circle :id="firstCircle?.id" transform="scale(0, 0)" :fill="firstCircleColor"
              r="150" />
          </g>
         <g transform="translate(400, 0)" :id="secondSquare?.id">
            <rect :fill="secondSquareColor"
              width="400" height="400" />
          </g>
          <g transform="translate(200, 200) rotate(990) ">
            <circle :id="secondCircle?.id" transform="scale(0, 0)" :fill="secondCircleColor"
              r="150" />
          </g>
          <g transform="translate(400, 0)" :id="thirdSquare?.id">
            <rect :fill="thirdSquareColor"
              width="400" height="400" />
          </g>
            <g transform="translate(200, 200) rotate(990) ">
            <circle :id="thirdCircle?.id" transform="scale(0, 0)" :fill="thirdCircleColor"
              r="150" />
          </g>
          <g transform="translate(400, 0)" :id="fourthSquare?.id">
            <rect :fill="firstSquareStaticColor"
              width="400" height="400" />
          </g>
        </g>
      </g>`},__vite_glob_0_112=Object.freeze(Object.defineProperty({__proto__:null,default:shapeCircleWithinSquare},Symbol.toStringTag,{value:"Module"})),defaultStart$8="1s",animationDelay$6="7",animationStepDelay$5="0.05",tagName$c="shape-fast-forward",shapeFastForward={tagName:tagName$c,computed:{classList(){return["shape-square-forward","vue-component"]},begin(){return this.start?this.start:defaultStart$8},rectColor(){return this.backgroundColor?this.backgroundColor:"var(--color-primary-accent)"},pathColor(){return this.firstColor?this.firstColor:"var(--color-primary-accent-light)"},secondArrowColor(){return this.secondColor?this.secondColor:"var(--color-secondary)"},firstArrow(){return this.sequence.firstArrow},secondArrow(){return this.sequence.secondArrow},thirdArrow(){return this.sequence.thirdArrow},overall(){return{keySplines:"0.19 1 0.2 1",dur:"1.3s"}},internalWidth(){return this.width?this.width:400},internalHeight(){return this.internalWidth},halfWidth(){return this.internalWidth/2},halfHeight(){return this.internalHeight/2},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$c,elements:this.elements,begin:this.begin})),this.shapeElementsInstance},points(){const t=this.internalWidth,e=this.halfWidth,i=this.internalHeight,s=this.halfHeight;return{firstArrow:`0,0 0,${i} ${s},${e}`,secondArrow:`${e},0, ${e},${i}, ${t},${s}`,thirdArrow:`${-e},0, ${-e},${i}, 0,${e}`}}},data(){return{animations:[{steps:[{name:"moveTo1",from:"0",to:"-400",dur:"0.01s",type:"translate"}]},{steps:[{name:"show",from:"0.1",to:"1",dur:"0.01s",attributeName:"opacity",animate:!0}]},{steps:[{name:"moveTo2",to:"-200",from:"-400",type:"translate"}]},{steps:[{name:"moveTo3",by:"200",type:"translate"}]},{steps:[{name:"hide",from:"0.6",to:"0.1",dur:"0.01s",attributeName:"opacity",animate:!0}]},{steps:[{name:"moveTo4",type:"translate"},{name:"shrink",type:"scale",additive:!0,from:"1 1",to:"0.1 0.1"}]}],elements:[{name:"firstArrow",moveTo3:{start:!0,waitFor:"firstArrow.reset",delay:animationDelay$6},shrink:{waitFor:"firstArrow.moveTo3",delay:animationDelay$6},moveTo4:{waitFor:"firstArrow.moveTo3",from:"200",to:"400",delay:animationDelay$6},hide:{waitFor:"firstArrow.moveTo4",delay:animationStepDelay$5},moveTo1:{waitFor:"firstArrow.hide",delay:animationStepDelay$5,from:"-400",to:"-200"},show:{waitFor:"firstArrow.moveTo1",delay:animationStepDelay$5},reset:{waitFor:"firstArrow.show",delay:animationDelay$6-animationStepDelay$5*3.5}},{name:"secondArrow",moveTo4:{start:!0,waitFor:"secondArrow.reset",delay:animationDelay$6,from:"0",to:"200"},shrink:{start:!0,waitFor:"secondArrow.reset",delay:animationDelay$6},hide:{waitFor:"secondArrow.shrink",delay:animationStepDelay$5},moveTo1:{waitFor:"secondArrow.hide",delay:animationStepDelay$5,dur:"0.001s"},show:{waitFor:"secondArrow.moveTo1",delay:animationStepDelay$5},moveTo2:{waitFor:"secondArrow.show",delay:animationDelay$6-animationStepDelay$5*3.5},reset:{waitFor:"secondArrow.moveTo2",delay:animationDelay$6}},{name:"thirdArrow",moveTo2:{start:!0,waitFor:"thirdArrow.show",delay:animationDelay$6-animationStepDelay$5*3.5,from:"0",to:"200"},moveTo3:{waitFor:"thirdArrow.moveTo2",delay:animationDelay$6,from:"200",to:"400"},shrink:{waitFor:"thirdArrow.moveTo3",delay:animationDelay$6},moveTo4:{waitFor:"thirdArrow.moveTo3",from:"400",to:"600",delay:animationDelay$6},hide:{waitFor:"thirdArrow.moveTo4",delay:animationStepDelay$5},reset:{waitFor:"thirdArrow.hide",delay:animationStepDelay$5,dur:"0.01s"},show:{waitFor:"thirdArrow.reset",delay:animationStepDelay$5}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,secondColor:String,start:String,width:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.animate&&(a.animate=n.animate),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="internalWidth" :height="internalHeight" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="internalWidth" :height="internalHeight" x="0" y="0" />
        <polygon :fill="pathColor" :points="points?.firstArrow" :id="firstArrow?.id" style="transform-origin: 0px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('firstArrow', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :attributeName="stepData?.step?.attributeName"
                :isAnimate="stepData?.step?.animate"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="firstArrow?.reset?.id"
            :href="firstArrow?.href"
            :begin="firstArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
            type="translate"
          ></shape-animation>
        </polygon>
        <polygon :fill="secondArrowColor" :points="points?.secondArrow" :id="secondArrow?.id" style="transform-origin: 200px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('secondArrow', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :attributeName="stepData?.step?.attributeName"
                :isAnimate="stepData?.step?.animate"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="secondArrow?.reset?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            aafrom="200"
            aato="400"
            aaby="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
            type="translate"
          ></shape-animation>
        </polygon>
        <polygon :fill="pathColor" :points="points?.thirdArrow" :id="thirdArrow?.id" style="transform-origin: -200px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('thirdArrow', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :attributeName="stepData?.step?.attributeName"
                :isAnimate="stepData?.step?.animate"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="thirdArrow?.reset?.id"
            :href="thirdArrow?.href"
            :begin="thirdArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="thirdArrow?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
            type="translate"
          ></shape-animation>
        </polygon>
      </g>
    </g>`},__vite_glob_0_113=Object.freeze(Object.defineProperty({__proto__:null,default:shapeFastForward},Symbol.toStringTag,{value:"Module"})),defaultStart$7="0s",animationDelay$5="6s",animationStepDelay$4="0.3s",tagName$b="shape-four-squares",shapeFourSquares={tagName:tagName$b,computed:{begin(){return this.start?this.start:defaultStart$7},squareUpperLeftFirstColor(){return this.firstColor?this.firstColor:"var(--color-blue-light)"},squareUpperRightFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},squareBottomLeftFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},squareBottomRightFirstColor(){return this.firstColor?this.firstColor:"var(--color-blue-light)"},squareUpperLeftSecondColor(){return this.thirdColor?this.thirdColor:"var(--color-orange)"},squareUpperRightSecondColor(){return this.fourthColor?this.fourthColor:"var(--color-gigas)"},squareBottomLeftSecondColor(){return this.fourthColor?this.fourthColor:"var(--color-gigas)"},squareBottomRightSecondColor(){return this.thirdColor?this.thirdColor:"var(--color-orange)"},squareUpperLeftFirst(){return this.sequence.squareUpperLeftFirst},squareUpperRightFirst(){return this.sequence.squareUpperRightFirst},squareBottomLeftFirst(){return this.sequence.squareBottomLeftFirst},squareBottomRightFirst(){return this.sequence.squareBottomRightFirst},squareUpperLeftSecond(){return this.sequence.squareUpperLeftSecond},squareUpperRightSecond(){return this.sequence.squareUpperRightSecond},squareBottomLeftSecond(){return this.sequence.squareBottomLeftSecond},squareBottomRightSecond(){return this.sequence.squareBottomRightSecond},squareUpperLeftReset(){return this.sequence.squareUpperLeftReset},squareUpperRightReset(){return this.sequence.squareUpperRightReset},squareBottomLeftReset(){return this.sequence.squareBottomLeftReset},squareBottomRightReset(){return this.sequence.squareBottomRightReset},overall(){return{keySplines:"0 0 1 1",dur:"0.8s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$b,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"moveTo1",from:"0 -200",to:"0 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo2",from:"400 0",to:"200 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo3",from:"-200 200",to:"0 200",dur:"",type:"translate"}]},{steps:[{name:"moveTo4",from:"200 400",to:"200 200",dur:"",type:"translate"}]}],elements:[{name:"squareUpperLeftFirst",moveTo1:{start:!0,delay:animationStepDelay$4,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareUpperLeftSecond.moveTo1",delay:animationStepDelay$4,dur:"0.01s"}},{name:"squareUpperRightFirst",moveTo2:{start:!0,delay:animationStepDelay$4,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareUpperRightSecond.moveTo2",delay:animationStepDelay$4,dur:"0.01s"}},{name:"squareBottomLeftFirst",moveTo3:{start:!0,delay:animationStepDelay$4,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareBottomLeftSecond.moveTo3",delay:animationStepDelay$4,dur:"0.01s"}},{name:"squareBottomRightFirst",moveTo4:{start:!0,delay:animationStepDelay$4,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareBottomRightSecond.moveTo4",delay:animationStepDelay$4,dur:"0.01s"}},{name:"squareUpperLeftSecond",moveTo1:{delay:animationStepDelay$4,waitFor:"squareUpperLeftFirst.moveTo1"},reset:{waitFor:"squareUpperLeftSecond.moveTo1",delay:animationDelay$5,dur:"1s"}},{name:"squareUpperRightSecond",moveTo2:{delay:animationStepDelay$4,waitFor:"squareUpperRightFirst.moveTo2"},reset:{waitFor:"squareUpperRightSecond.moveTo2",delay:animationDelay$5,dur:"1s"}},{name:"squareBottomLeftSecond",moveTo3:{delay:animationStepDelay$4,waitFor:"squareBottomLeftFirst.moveTo3"},reset:{waitFor:"squareBottomLeftSecond.moveTo3",delay:animationDelay$5,dur:"1s"}},{name:"squareBottomRightSecond",moveTo4:{delay:animationStepDelay$4,waitFor:"squareBottomRightFirst.moveTo4"},reset:{waitFor:"squareBottomRightSecond.moveTo4",delay:animationDelay$5,dur:"1s"}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,fourthColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('squareUpperLeftFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperRightFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomLeftFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomRightFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperLeftSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperRightSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomLeftSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomRightSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperLeftReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperRightReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomLeftReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomRightReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="squareUpperLeftFirst?.reset?.id"
            :href="squareUpperLeftFirst?.href"
            :begin="squareUpperLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightFirst?.reset?.id"
            :href="squareUpperRightFirst?.href"
            :begin="squareUpperRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftFirst?.reset?.id"
            :href="squareBottomLeftFirst?.href"
            :begin="squareBottomLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightFirst?.reset?.id"
            :href="squareBottomRightFirst?.href"
            :begin="squareBottomRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperLeftSecond.reset?.id"
            :href="squareUpperLeftSecond?.href"
            :begin="squareUpperLeftSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightSecond?.reset?.id"
            :href="squareUpperRightSecond?.href"
            :begin="squareUpperRightSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftSecond?.reset?.id"
            :href="squareBottomLeftSecond?.href"
            :begin="squareBottomLeftSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightSecond?.reset?.id"
            :href="squareBottomRightSecond?.href"
            :begin="squareBottomRightSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperLeftReset?.reset?.id"
            :href="squareUpperLeftReset?.href"
            :begin="squareUpperLeftReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightReset?.reset?.id"
            :href="squareUpperRightReset?.href"
            :begin="squareUpperRightReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftReset?.reset?.id"
            :href="squareBottomLeftReset?.href"
            :begin="squareBottomLeftReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightReset?.reset?.id"
            :href="squareBottomRightReset?.href"
            :begin="squareBottomRightReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="squareUpperLeftFirst?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperLeftFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightFirst?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftFirst?.id" transform="translate(-200, 200)">
          <rect :fill="squareBottomLeftFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightFirst?.id" transform="translate(200, 400)">
          <rect :fill="squareBottomRightFirstColor"
            width="200" height="200" />
        </g>

        <g :id="squareUpperLeftSecond?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperLeftSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightSecond?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftSecond?.id" transform="translate(-200, 200)">
          <rect :fill="squareBottomLeftSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightSecond?.id" transform="translate(200, 400)">
          <rect :fill="squareBottomRightSecondColor"
            width="200" height="200" />
        </g>

        <g :id="squareUpperLeftReset?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightReset?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftReset?.id" transform="translate(-200, 200)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightReset?.id" transform="translate(200, 400)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>

      </g>
    </g>`},__vite_glob_0_114=Object.freeze(Object.defineProperty({__proto__:null,default:shapeFourSquares},Symbol.toStringTag,{value:"Module"})),defaultStart$6="0s",animationDelay$4="1s",animationResetDelay="0.01s",animationResetDuration="0.01s",tagName$a="shape-four-triangles",shapeFourTriangles={tagName:tagName$a,computed:{begin(){return this.start?this.start:defaultStart$6},triangleBottomLeftColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},triangleUpperLeftColor(){return this.secondColor?this.secondColor:"var(--color-secondary)"},triangleUpperRightColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},triangleBottomRightColor(){return this.secondColor?this.secondColor:"var(--color-secondary)"},squareColor(){return this.thirdColor?this.thirdColor:"var(--color-white)"},triangleBottomLeft(){return this.sequence.triangleBottomLeft},triangleUpperLeft(){return this.sequence.triangleUpperLeft},triangleUpperRight(){return this.sequence.triangleUpperRight},triangleBottomRight(){return this.sequence.triangleBottomRight},square(){return this.sequence.square},overall(){return{keySplines:"0 0 1 1",dur:"4s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$a,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"motion",attributeName:"motion",motion:!0,dur:""}]},{steps:[{name:"transformRotate",dur:"",type:"rotate"}]},{steps:[{name:"moveTo1",dur:"",type:"translate",additive:!0}]}],elements:[{name:"triangleBottomLeft",moveTo1:{start:!0,delay:animationDelay$4,from:"-200 0",to:"-200 0",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-200 0;-200 0",waitFor:"triangleBottomLeft.reset"},motion:{start:!0,delay:animationDelay$4,path:"M200 400 C200,400 200,200 200,200 C200,200 200,200 200,200",keyPoints:"0;1;1",keyTimes:"0;0.333333;1",keySplines:"0.333 0 0.667 1;0 0 0 0",waitFor:"triangleBottomLeft.reset"},transformRotate:{start:!0,delay:animationDelay$4,from:"90",to:"0",values:"90;90;0;0",keyTimes:"0;0.333333;0.666667;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",waitFor:"triangleBottomLeft.reset"},reset:{waitFor:"square.moveTo1",delay:animationResetDelay,dur:animationResetDuration}},{name:"triangleUpperLeft",moveTo1:{start:!0,delay:animationDelay$4,from:"-200 0",to:"-200 0",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-200 0;-200 0",waitFor:"triangleUpperLeft.reset"},motion:{start:!0,delay:animationDelay$4,keyTimes:"0;0.666667;0.95;1",path:"M200 200 C200,200 200,200 200,200 C200,200 400,200 400,200 C400,200 400,200 400,200",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",keyPoints:"0;0;1;1",waitFor:"triangleUpperLeft.reset"},transformRotate:{start:!0,delay:animationDelay$4,from:"90",to:"0",values:"90;90;0;0",keyTimes:"0;0.333333;0.666667;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",waitFor:"triangleUpperLeft.reset"},reset:{waitFor:"square.moveTo1",delay:animationResetDelay,dur:animationResetDuration}},{name:"triangleUpperRight",moveTo1:{start:!0,delay:animationDelay$4,from:"-100 -100",to:"-100 -100",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-100 -100;-100 -100",waitFor:"triangleUpperRight.reset"},motion:{start:!0,delay:animationDelay$4,keyTimes:"0;0.522222;0.855556;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",path:"M300 100 C300,100 300,100 300,100 C300,100 100,100 100,100 C100,100 100,100 100,100",keyPoints:"0;0;1;1",waitFor:"triangleUpperRight.reset"},reset:{waitFor:"square.moveTo1",delay:animationResetDelay,dur:animationResetDuration}},{name:"triangleBottomRight",moveTo1:{start:!0,delay:animationDelay$4,from:"-100 -100",to:"-100 -100",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-100 -100;-100 -100",waitFor:"triangleBottomRight.reset"},motion:{start:!0,delay:animationDelay$4,keyTimes:"0;0.333333;1",keySplines:"0.167 0.167 0.833 0.833;0 0 0 0",path:"M300 300 C300,300 300,100 300,100 C300,100 300,100 300,100",keyPoints:"0;1;1",waitFor:"triangleBottomRight.reset"},reset:{waitFor:"square.moveTo1",delay:animationResetDelay,dur:animationResetDuration}},{name:"square",moveTo1:{delay:"14s",dur:"0.5s",from:"0 0",to:"-400 0",waitFor:"triangleBottomRight.moveTo1"},reset:{waitFor:"square.moveTo1",delay:"1s",dur:"0.5s"}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('triangleBottomLeft', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleUpperLeft', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleUpperRight', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleBottomRight', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            <template v-for="stepData in getStepData('square', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="triangleBottomLeft?.reset?.id"
            :begin="triangleBottomLeft?.reset?.begin"
            :dur="triangleBottomLeft?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperLeft?.reset?.id"
            :begin="triangleUpperLeft?.reset?.begin"
            :dur="triangleUpperLeft?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperRight?.reset?.id"
            :begin="triangleUpperRight?.reset?.begin"
            :dur="triangleUpperRight?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleBottomRight?.reset?.id"
            :begin="triangleBottomRight?.reset?.begin"
            :dur="triangleBottomRight?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="square?.reset?.id"
            :href="square?.href"
            :begin="square?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="square?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="triangleBottomLeft?.id">
          <path :fill="triangleBottomLeftColor"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperLeft?.id">
          <path :fill="triangleUpperLeftColor"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperRight?.id">
          <path :fill="triangleUpperRightColor"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="triangleBottomRight?.id">
          <path :fill="triangleBottomRightColor"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="square?.id" transform="translate(400, 0)">
          <rect :fill="squareColor"
            width="400" height="400" />
        </g>
      </g>
    </g>`},__vite_glob_0_115=Object.freeze(Object.defineProperty({__proto__:null,default:shapeFourTriangles},Symbol.toStringTag,{value:"Module"})),defaultStart$5="0.3s",animationDelay$3="7",animationStepDelay$3="0.2",tagName$9="shape-half-square",shapeHalfSquare={tagName:tagName$9,computed:{begin(){return this.start?this.start:defaultStart$5},backgroundSquareColor(){return this.backgroundColor?this.backgroundColor:"var(--color-blue-light)"},firstSquareColor(){return this.firstColor?this.firstColor:"var(--color-page-detail-shape)"},secondSquareColor(){return this.secondColor?this.secondColor:"var(--color-background)"},thirdSquareColor(){return this.thirdColor?this.thirdColor:"var(--color-primary-accent)"},squareGroup(){return this.sequence.squareGroup},firstSquare(){return this.sequence.firstSquare},secondSquare(){return this.sequence.secondSquare},thirdSquare(){return this.sequence.thirdSquare},fourthSquare(){return this.sequence.fourthSquare},overall(){return{keySplines:"0 0 1 1",dur:"0.8s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$9,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"transform1",from:"400",to:"200",dur:"",type:"translate"}]},{steps:[{name:"transform2",from:"200",to:"-80",dur:"",type:"translate"}]},{steps:[{name:"transform3",from:"-80",to:"-200",dur:"",type:"translate"}]},{steps:[{name:"transform4",from:"0",to:"-400",dur:"",type:"translate"}]},{steps:[{name:"animate",animate:!0,attributeName:"width",from:"300",to:"200",dur:"",type:"animate"}]}],elements:[{name:"squareGroup",transform1:{delay:animationStepDelay$3,start:!0,waitFor:"fourthSquare.reset",keySplines:"0.2, 0.8, 0.7, 1"},transform2:{delay:animationStepDelay$3,waitFor:"squareGroup.transform1",keySplines:"0.2, 0.7, 0.8, 1"},transform3:{delay:animationStepDelay$3,waitFor:"squareGroup.transform2",keySplines:"0.2, 0.7, 0.8, 1"},reset:{waitFor:"fourthSquare.transform4",delay:animationStepDelay$3,dur:"0.01s"}},{name:"secondSquare",animate:{delay:animationStepDelay$3,waitFor:"squareGroup.transform2",keySplines:"0.2, 0.8, 0.7, 1"},reset:{waitFor:"fourthSquare.transform4",delay:animationStepDelay$3,dur:"0.01s"}},{name:"fourthSquare",transform4:{delay:animationDelay$3,waitFor:"squareGroup.transform3",keySplines:"0.2, 0.8, 0.7, 1"},reset:{waitFor:"fourthSquare.transform4",delay:animationStepDelay$3,dur:"0.1s"}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.animate&&(a.animate=n.animate),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('squareGroup', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('firstSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('fourthSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="squareGroup?.reset?.id"
            :href="squareGroup?.href"
            :begin="squareGroup?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-400"
            to="400"
            :dur="squareGroup?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="secondSquare?.reset?.id"
            :href="secondSquare?.href"
            :begin="secondSquare?.reset?.begin"
            attributeName="width"
            type="animate"
            calcMode="paced"
            from="200"
            to="300"
            :dur="secondSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            :isAnimate
          ></shape-animation>

          <shape-animation
            :id="fourthSquare?.reset?.id"
            :href="fourthSquare?.href"
            :begin="fourthSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-400"
            to="0"
            :dur="fourthSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>


        <g :id="staticSquare">
          <rect :fill="backgroundSquareColor" width="400" height="400" />
        </g>

        <g transform="translate(400, 0)" :id="squareGroup?.id" >
          <g ><rect :id="firstSquare?.id" :fill="firstSquareColor" width="200" height="400"  /></g>
          <g transform="translate(400, 0)" ><rect :fill="thirdSquareColor" width="200" height="400" /></g>
          <g transform="translate(200, 0)" ><rect :id="secondSquare?.id" :fill="secondSquareColor" width="300" height="400"/></g>

        </g>
          <g transform="translate(400, 0)" ><rect :id="fourthSquare?.id" :fill="backgroundSquareColor" width="400" height="400"/></g>


      </g>
    </g>`},__vite_glob_0_116=Object.freeze(Object.defineProperty({__proto__:null,default:shapeHalfSquare},Symbol.toStringTag,{value:"Module"})),defaultStart$4="0s",animationDelay$2="0s",animationStepDelay$2="0.01s",tagName$8="shape-moving-eye",shapeMovingEye={tagName:tagName$8,computed:{begin(){return this.start?this.start:defaultStart$4},squareColor(){return this.backgroundColor?this.backgroundColor:"var(--color-green-blue)"},circleColor(){return this.firstColor?this.firstColor:"var(--color-yellow)"},upperSquare(){return this.sequence.upperSquare},bottomSquare(){return this.sequence.bottomSquare},eyeCircle(){return this.sequence.eyeCircle},overall(){return{keySplines:"0 0 1 1",dur:"20s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$8,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"motion",attributeName:"motion",motion:!0}]},{steps:[{name:"transform",from:"1.3 1.01",to:"1.3 1.01",dur:"",type:"scale"}]}],elements:[{name:"upperSquare",transform:{start:!0,delay:0,values:"1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01",keyTimes:"0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",additive:!0,waitFor:"eyeCircle.reset"},reset:{waitFor:"eyeCircle.motion",delay:animationDelay$2,dur:animationStepDelay$2}},{name:"bottomSquare",transform:{start:!0,delay:0,values:"1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01",keyTimes:"0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",additive:!0,waitFor:"eyeCircle.reset"},reset:{waitFor:"eyeCircle.motion",delay:animationDelay$2,dur:animationStepDelay$2}},{name:"eyeCircle",motion:{start:!0,delay:0,keyTimes:"0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0",path:"M 263 168 C 263 168 263 168 263 168 C 237 167 109 167 109 167 C 109 167 212 167 263 168 C 283 168 239 168 263 168 C 296 167 397 168 412 168 C 436 168 287 168 263 168 C 238 168 263 168 263 168 C 263 168 263 168 263 168",keyPoints:"0;0;0.23;0.47;0.51;0.73;0.97;1;1",waitFor:"eyeCircle.reset"},reset:{waitFor:"eyeCircle.motion",delay:animationDelay$2,dur:animationStepDelay$2}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('upperSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('bottomSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('eyeCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>


          <shape-animation
            :id="upperSquare?.reset?.id"
            :href="upperSquare?.href"
            :begin="upperSquare?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="upperSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            additive="true"
            keyTimes="0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1"
            values="1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01"
          ></shape-animation>

          <shape-animation
            :id="bottomSquare?.reset?.id"
            :href="bottomSquare?.href"
            :begin="bottomSquare?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="bottomSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            additive="true"
            keyTimes="0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1"
            values="1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01"
          ></shape-animation>

          <shape-animation
            :id="eyeCircle?.reset?.id"
            :href="eyeCircle?.href"
            :begin="eyeCircle?.reset?.begin"
            attributeName="motion"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="eyeCircle?.reset?.dur"
            isMotion=true
            fill="freeze"
            calcMode="paced"
          ></shape-animation>
        </g>

        <g :id="eyeCircle?.id" transform="translate(-62, 32)">
          <circle :fill="circleColor" r="90" />
        </g>

        <g :id="upperSquare?.id" transform=" translate(200, 200)">
          <path :fill="squareColor"
            d=" M 150 -400 C 150 -400 -175 -400 -175 -400 C -175 -400 -200 0 -200 0 C -200 0 -175 -150 0 -150 C 175 -150 200 0 200 0 C 200 0 150 -400 150 -400 z " />
        </g>

        <g :id="bottomSquare?.id" transform=" translate(200, 200) rotate(180)">
          <path :fill="squareColor"
            d=" M 200 -200 C 200 -200 150 -450 150 -450 C 150 -450 -150 -450 -150 -450 C -150 -450 -200 -200 -200 -200 C -200 -200 -200 0 -200 0 C -200 0 -170 -150 0 -150 C 170 -150 200 0 200 0 C 200 0 200 -200 200 -200 z " />
        </g>
      </g>
    </g>`},__vite_glob_0_117=Object.freeze(Object.defineProperty({__proto__:null,default:shapeMovingEye},Symbol.toStringTag,{value:"Module"})),defaultStart$3="1s",tagName$7="shape-security-eye",shapeSecurityEye={tagName:tagName$7,computed:{classList(){return["shape-square-forward","vue-component"]},begin(){return this.start?this.start:defaultStart$3},overall(){return{dur:"10s",sonarDelay:"9"}},internalWidth(){return this.width?this.width:400},internalHeight(){return this.internalWidth},halfWidth(){return this.internalWidth/2},halfHeight(){return this.internalHeight/2},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$7,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{}},props:{backgroundColor:String,firstColor:String,secondColor:String,start:String,width:String},methods:{leftUpperSonarBegin(t){let e=8.44;return e=t?e+t/100:e,`${e}s;leftUpperSonarStep1.end+${this.overall.sonarDelay}s`},leftBottomSonarBegin(t){let e=5.5;return e=t?e+t/100:e,`${e}s;leftBottomSonarStep1.end+${this.overall.sonarDelay}s`},rightBottomSonarBegin(t){let e=2.5;return e=t?e+t/100:e,`${e}s;rightBottomSonarStep1.end+${this.overall.sonarDelay}s`},rightUpperSonarBegin(t){let e=.2;return e=t?e+t/100:e,`${e}s;rightUpperSonarStep1.end+${this.overall.sonarDelay}s`}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="internalWidth" :height="internalHeight" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="_R_G" style="transform:scale(0.46) translate(-106px, -90px)">
          <defs>
            <linearGradient id="sonar" >
              <stop offset="0" stop-color="#000"/>
              <stop offset="0" stop-color="#000"/>
              <stop offset="0.5" stop-color="#000"/>
              <stop offset="0.6" stop-color="#ddd"/>
              <stop offset="1" stop-color="#fff"/>
            </linearGradient>
            <mask id="sonarMask">
              <path d="M 128,128 L 48,0 L 188,0 z" stroke="none" fill="url(#sonar)"/>
            </mask>

          </defs>
          <g id="background">
            <rect fill="#543b9c" width="1080" height="1080" />
          </g>
          <g id="eyeForm">
            <path
              fill="#5cbbff"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M530.2 321.91 C343.96,321.91 118.52,537.66 118.52,537.66 C118.52,537.66 961.48,537.66 961.48,537.66 C888.78,468.09 716.43,321.91 530.2,321.91z "
            />
            <path
              fill="#ffffff"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M551.43 758.09 C705,758.09 961.48,537.66 961.48,537.66 C961.48,537.66 118.52,537.66 118.52,537.66 C205.92,621.29 397.87,758.09 551.43,758.09z "
            />
          </g>
          <g
            id="irisRing1"
            transform=" translate(540, 540.5) scale(0.47, 0.47) translate(0, 0)"
          >
            <path
              stroke="#543b9c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="332"
              stroke-opacity="1"
              d=" M0 -176.5 C97.41,-176.5 176.5,-97.41 176.5,0 C176.5,97.41 97.41,176.5 0,176.5 C-97.41,176.5 -176.5,97.41 -176.5,0 C-176.5,-97.41 -97.41,-176.5 0,-176.5z "
            />
          </g>
          <g
            id="irisLine4"
            transform=" translate(543, 540.5) scale(0.77, 0.77) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              fill="#ff0000"
              stroke-width="2"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine3"
            transform=" translate(543, 540.5) scale(1.55, 1.55) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine2"
            transform=" translate(543, 540.5) scale(2.2, 2.2) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine1"
            transform=" translate(543, 540.5) scale(2.72, 2.72) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="centerDot"
            transform=" translate(543, 540.5) scale(0.29, 0.29) translate(0, 0)"
          >
            <path
              fill="#f8842c"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>

          <g id="rightUpperSonar" opacity="0">
            <g transform="translate(570, 510)">
              <circle id="rightUpperSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="rightUpperSonarStep1"
              dur="1s"
              :begin="rightUpperSonarBegin()"
              href="#rightUpperSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="rightUpperSonarStep3"
              dur="1s"
              :begin="rightUpperSonarBegin(1)"
              href="#rightUpperSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="rightUpperSonarStep2"
              dur="1s"
              :begin="rightUpperSonarBegin(2)"
              href="#rightUpperSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>
          <g id="leftUpperSonar" opacity="0">
            <g transform="translate(434, 562)">
              <circle id="leftUpperSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="leftUpperSonarStep1"
              dur="1s"
              :begin="leftUpperSonarBegin()"
              href="#leftUpperSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="leftUpperSonarStep3"
              dur="1s"
              :begin="leftUpperSonarBegin(1)"
              href="#leftUpperSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="leftUpperSonarStep2"
              dur="1s"
              :begin="leftUpperSonarBegin(2)"
              href="#leftUpperSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>
          <g id="rightBottomSonar" opacity="0">
            <g transform="translate(590, 720)">
              <circle id="rightBottomSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="rightBottomSonarStep1"
              dur="1s"
              :begin="rightBottomSonarBegin()"
              href="#rightBottomSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="rightBottomSonarStep3"
              dur="1s"
              :begin="rightBottomSonarBegin(1)"
              href="#rightBottomSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="rightBottomSonarStep2"
              dur="1s"
              :begin="rightBottomSonarBegin(2)"
              href="#rightBottomSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>

          <g transform="translate(375, 375) scale(1.3, 1.3)">
            <path xmlns="http://www.w3.org/2000/svg" d="M 128,128 L 48,0 L 188,0 z" stroke="none" fill="#f8842c" mask="url(#sonarMask)" >
              <animateTransform attributeName="transform" type="rotate" dur="10.0" from="0,128,128" to="360,128,128" repeatCount="indefinite"/>
            </path>
          </g>

          <g id="yellowIris">
            <path
              fill="#fcd116"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M540 318.99 C418.03,318.99 319.17,417.95 319.17,540.02 C319.17,662.09 418.03,761.01 540,761.01 C661.97,761.01 760.83,662.05 760.83,539.98 C760.83,417.91 661.97,318.99 540,318.99z  M540.05 701.37 C447.56,701.45 373.17,623.67 378.9,529.91 C383.8,449.58 449.12,384.13 529.45,379.07 C623.2,373.15 701.13,447.4 701.21,539.9 C701.21,539.95 701.21,540 701.21,540.05 C701.23,629.08 629.08,701.27 540.05,701.32 C540.05,701.32 540.05,701.37 540.05,701.37z "
            />
          </g>

          <g id="leftBottomSonar" opacity="0">
            <g transform="translate(384, 708)">
              <circle id="leftBottomSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="leftBottomSonarStep1"
              dur="1s"
              :begin="leftBottomSonarBegin()"
              href="#leftBottomSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="leftBottomSonarStep3"
              dur="1s"
              :begin="leftBottomSonarBegin(1)"
              href="#leftBottomSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="leftBottomSonarStep2"
              dur="1s"
              :begin="leftBottomSonarBegin(2)"
              href="#leftBottomSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>
        </g>
      </g>
    </g>`},__vite_glob_0_118=Object.freeze(Object.defineProperty({__proto__:null,default:shapeSecurityEye},Symbol.toStringTag,{value:"Module"})),defaultStart$2="0s",animationDelay$1="6s",animationStepDelay$1="0.05s",tagName$6="shape-semi-circle",shapeSemiCircle={tagName:tagName$6,computed:{begin(){return this.start?this.start:defaultStart$2},squareColor(){return this.backgroundColor?this.backgroundColor:"var(--color-green-blue)"},circleColor(){return this.firstColor?this.firstColor:"var(--color-yellow)"},semiCircle(){return this.sequence.semiCircle},resetSquare(){return this.sequence.resetSquare},overall(){return{keySplines:"0 0 1 1",dur:"1s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$6,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"moveTo1",from:"700 -300",to:"350 50",dur:"",type:"translate"}]},{steps:[{name:"moveTo2",from:"350 50",to:"50 350",dur:"",type:"translate"}]},{steps:[{name:"moveTo3",from:"50 350",to:"-300 700",dur:"",type:"translate"}]},{steps:[{name:"moveTo4",from:"400 0",to:"0 0",dur:"",type:"translate"}]}],elements:[{name:"semiCircle",moveTo1:{start:!0,delay:animationDelay$1,keySplines:"0.5, 0.6, 0.8, 1",waitFor:"resetSquare.reset"},moveTo2:{delay:animationStepDelay$1,keySplines:"0.5, 0.7, 0.8, 1",waitFor:"semiCircle.moveTo1"},moveTo3:{delay:animationStepDelay$1,waitFor:"semiCircle.moveTo2"},reset:{waitFor:"resetSquare.moveTo4",delay:animationStepDelay$1,dur:animationStepDelay$1}},{name:"resetSquare",moveTo4:{delay:animationStepDelay$1,waitFor:"semiCircle.moveTo3"},reset:{waitFor:"resetSquare.moveTo4",delay:"1s",dur:animationStepDelay$1}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('semiCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('resetSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="semiCircle?.reset?.id"
            :href="semiCircle?.href"
            :begin="semiCircle?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-300 700"
            to="700 -300"
            :dur="semiCircle?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="resetSquare?.reset?.id"
            :href="resetSquare?.href"
            :begin="resetSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="resetSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>


      <g>
        <g id="staticSquare">
          <rect :fill="squareColor" width="400" height="400"/>
        </g>
        <g :id="semiCircle?.id" transform="translate(700, -300)">
          <circle :fill="circleColor" r="380" />
        </g>
        <g :id="resetSquare?.id" transform="translate(400, 0)">
          <rect :fill="squareColor" width="400" height="400"/>
        </g>
      </g>
    </g>`},__vite_glob_0_119=Object.freeze(Object.defineProperty({__proto__:null,default:shapeSemiCircle},Symbol.toStringTag,{value:"Module"})),defaultStart$1="1s",smallCircleRadius=70,smallCircleDuration="0.8s",bigCircleRadius=155,tagName$5="shape-square-circle",shapeSquareCircle={tagName:tagName$5,computed:{classList(){return["shape-square-circle","vue-component"]},begin(){return this.start?this.start:defaultStart$1},rectColor(){return this.backgroundColor?this.backgroundColor:"var(--color-primary-accent)"},circleColor(){return this.firstColor?this.firstColor:"var(--color-secondary)"},bigCircle(){return this.sequence.bigCircle},smallCircle(){return this.sequence.smallCircle},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId})`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$5,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{elements:[{name:"smallCircle",grow:{start:!0,waitFor:"bigCircle.reset",delay:"20s"},shrink:{waitFor:"bigCircle.shrink",delay:"0.1s"},reset:{waitFor:"bigCircle.shrink",delay:"0.8s"}},{name:"bigCircle",shrink:{waitFor:"smallCircle.grow",delay:"0.01s"},reset:{waitFor:"smallCircle.shrink",delay:"0.01s"}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,start:String},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <circle :fill="circleColor" :id="bigCircle?.id" cx="200" cy="200" r="${bigCircleRadius}">
          <animate
            :id="bigCircle?.shrink?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.shrink?.begin"
            attributeName="r"
            from="${bigCircleRadius}"
            to="0"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="bigCircle?.reset?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.reset?.begin"
            attributeName="r"
            from="0"
            to="${bigCircleRadius}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${bigCircleRadius/1.1};${bigCircleRadius/1.15};${bigCircleRadius/1.1};${bigCircleRadius}"
          />
        </circle>
        <circle :fill="rectColor" :id="smallCircle?.id" cx="200" cy="200" r="${smallCircleRadius}">
          <animate
            :id="smallCircle?.grow?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.grow?.begin"
            attributeName="r"
            from="${smallCircleRadius}"
            :to="width"
            dur="${smallCircleDuration}"
            fill="freeze"
          />
          <animate
            :id="smallCircle?.shrink?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.shrink?.begin"
            attributeName="r"
            :from="width"
            to="0"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="smallCircle?.reset?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.reset?.begin"
            attributeName="r"
            from="0"
            to="${smallCircleRadius}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${smallCircleRadius/1.1};${smallCircleRadius/1.15};${smallCircleRadius/1.1};${smallCircleRadius}"
          />
        </circle>
      </g>
    </g>`},__vite_glob_0_120=Object.freeze(Object.defineProperty({__proto__:null,default:shapeSquareCircle},Symbol.toStringTag,{value:"Module"})),defaultStart="0s",animationDelay="6s",animationStepDelay="1s",tagName$4="shape-triangles-to-center",shapeTrianglesToCenter={tagName:tagName$4,computed:{begin(){return this.start?this.start:defaultStart},triangleUpperStaticColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleBottomStaticColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleLeftStaticColor(){return this.thirdColor?this.thirdColor:"var(--color-yellow)"},triangleRightStaticColor(){return this.thirdColor?this.thirdColor:"var(--color-yellow)"},triangleUpperFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},triangleBottomFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},triangleLeftFirstColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleRightFirstColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleUpperFirst(){return this.sequence.triangleUpperFirst},triangleBottomFirst(){return this.sequence.triangleBottomFirst},triangleLeftFirst(){return this.sequence.triangleLeftFirst},triangleRightFirst(){return this.sequence.triangleRightFirst},overall(){return{keySplines:"0 0 1 1",dur:"1s"}},width(){return 400},height(){return this.width},clipPathId(){var t;return`${(t=this.shapeElements)==null?void 0:t.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var t;return(t=this.shapeElements)==null?void 0:t.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new ShapeElements({tagName:tagName$4,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"moveTo1",from:"0 -200",to:"0 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo2",from:"0 400",to:"0 200",dur:"",type:"translate"}]},{steps:[{name:"moveTo3",from:"-200 0",to:"0 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo4",from:"400 0",to:"200 0",dur:"",type:"translate"}]}],elements:[{name:"triangleUpperFirst",moveTo1:{delay:animationStepDelay,start:!0,waitFor:"triangleUpperFirst.reset"},reset:{waitFor:"triangleUpperFirst.moveTo1",delay:animationDelay,dur:animationStepDelay}},{name:"triangleBottomFirst",moveTo2:{delay:animationStepDelay,start:!0,waitFor:"triangleBottomFirst.reset"},reset:{waitFor:"triangleBottomFirst.moveTo2",delay:animationDelay,dur:animationStepDelay}},{name:"triangleLeftFirst",moveTo3:{delay:animationStepDelay,start:!0,waitFor:"triangleLeftFirst.reset"},reset:{waitFor:"triangleLeftFirst.moveTo3",delay:animationDelay,dur:animationStepDelay}},{name:"triangleRightFirst",moveTo4:{delay:animationStepDelay,start:!0,waitFor:"triangleRightFirst.reset"},reset:{waitFor:"triangleRightFirst.moveTo4",delay:animationDelay,dur:animationStepDelay}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(t,e){const i=this.sequence[t];if(!i)return;const s=[];return e.forEach(r=>{const a={...r},n=i[a==null?void 0:a.name];if(!n)return;n.href=i.href,n.by&&(a.by=n.by),n.from&&(a.from=n.from),n.to&&(a.to=n.to),n.additive&&(a.additive=n.additive),n.dur&&(a.dur=n.dur),n.motion&&(a.motion=n.motion),n.keyTimes&&(a.keyTimes=n.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=n.keySplines?n.keySplines:this.overall.keySplines);const l={step:a,data:n};s.push(l)}),s}},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('triangleUpperFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleBottomFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleLeftFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleRightFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="triangleUpperFirst?.reset?.id"
            :href="triangleUpperFirst?.href"
            :begin="triangleUpperFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="triangleUpperFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleBottomFirst?.reset?.id"
            :href="triangleBottomFirst?.href"
            :begin="triangleBottomFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="0 400"
            :dur="triangleBottomFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleLeftFirst?.reset?.id"
            :href="triangleLeftFirst?.href"
            :begin="triangleLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="-200 0"
            :dur="triangleLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleRightFirst?.reset?.id"
            :href="triangleRightFirst?.href"
            :begin="triangleRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="triangleRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>
        </g>


        <g :id="triangleUpperFirstStatic" transform=" translate(0, 0)">
          <polygon height="200" width="400" points="200,200 400,0 0,0" :fill="triangleUpperStaticColor" />
        </g>
        <g :id="triangleBottomStatic" transform=" translate(0, 200)">
          <polygon height="200" width="400" points="200,0 400,200 0,200" :fill="triangleBottomStaticColor" />
        </g>
        <g :id="triangleLeftStatic" transform=" translate(0, 0)">
          <polygon height="400" width="200" points="0,400 200,200 0,0" :fill="triangleLeftStaticColor" />
        </g>
        <g :id="triangleRightStatic" transform=" translate(200, 0)">
          <polygon height="400" width="200" points="200,400 0,200 200,0" :fill="triangleRightStaticColor" />
        </g>

        <g :id="triangleUpperFirst?.id" transform=" translate(0, -200)">
          <polygon height="200" width="400" points="200,200 400,0 0,0" :fill="triangleUpperFirstColor" />
        </g>
        <g :id="triangleBottomFirst?.id" transform=" translate(0, 400)">
          <polygon height="200" width="400" points="200,0 400,200 0,200" :fill="triangleBottomFirstColor" />
        </g>
        <g :id="triangleLeftFirst?.id" transform=" translate(-200, 0)">
          <polygon height="400" width="200" points="0,400 200,200 0,0" :fill="triangleLeftFirstColor" />
        </g>
        <g :id="triangleRightFirst?.id" transform=" translate(400, 0)">
          <polygon height="400" width="200" points="200,400 0,200 200,0" :fill="triangleRightFirstColor" />
        </g>

      </g>
    </g>`},__vite_glob_0_121=Object.freeze(Object.defineProperty({__proto__:null,default:shapeTrianglesToCenter},Symbol.toStringTag,{value:"Module"})),shape={tagName:"shape",computed:{classList(){return["shape","vue-component"]},shapeName(){return this.name?this.name:"s-block"}},methods:{},props:{name:String,shapes:Array},template:`
    <div :class="classList">
      <div class="shape__container">
        <component :is="shapeName" :shapes="shapes" ></component>
      </div>
    </div>`},__vite_glob_0_122=Object.freeze(Object.defineProperty({__proto__:null,default:shape},Symbol.toStringTag,{value:"Module"})),tagName$3="l-block",lBlock={tagName:tagName$3,computed:{name(){return tagName$3},secondShapeBackgroundColor(){return this.secondShape.backgroundColor?this.secondShape.backgroundColor:"var(--color-yellow)"},secondShapeFirstColor(){return this.secondShape.firstColor?this.secondShape.firstColor:"var(--color-orange)"},secondShapeSecondColor(){return this.secondShape.secondColor?this.secondShape.secondColor:"var(--color-white)"},firstShape(){return this.getShapeData(0)},secondShape(){return this.getShapeData(1)},thirdShape(){return this.getShapeData(2)},fourthShape(){return this.getShapeData(3)},classList(){return["l-block","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth}},methods:{allProps(t){const e={};for(const i of Object.keys(t))e[i]=t[i];return e},getShapeData(t){const e=(this.shapes&&this.shapes[t])??{};return this.allProps(e)},defaultComponent(t){switch(t){default:case 0:return"shape-moving-eye";case 1:return"rect";case 2:return"shape-semi-circle";case 3:return"shape-half-square"}}},props:{shapes:Array,backgroundColor:String,firstColor:String,secondColor:String},template:`
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">
      <component
        transform="translate(0 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(0 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <g v-else transform="translate (-400 0)" >
        <path :fill="secondShapeBackgroundColor" d="M 400 800 h 400 v -400 H 400 z"/>
        <path :fill="secondShapeFirstColor" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path :fill="secondShapeFirstColor" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

      <component
        transform="translate(0 800)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        transform="translate(400 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
    </svg>
  `},__vite_glob_0_123=Object.freeze(Object.defineProperty({__proto__:null,default:lBlock},Symbol.toStringTag,{value:"Module"})),tagName$2="s-block",sBlock={tagName:tagName$2,computed:{name(){return tagName$2},secondShapeBackgroundColor(){return this.secondShape.backgroundColor?this.secondShape.backgroundColor:"var(--color-primary-accent-light)"},fourthShapeBackgroundColor(){return this.fourthShape.backgroundColor?this.fourthShape.backgroundColor:"var(--color-primary-accent-light)"},fourthShapeFirstColor(){return this.fourthShape.firstColor?this.fourthShape.firstColor:"var(--color-primary-accent)"},fourthShapeSecondColor(){return this.fourthShape.secondColor?this.fourthShape.secondColor:"var(--color-secondary)"},firstShape(){return this.getShapeData(0)},secondShape(){return this.getShapeData(1)},thirdShape(){return this.getShapeData(2)},fourthShape(){return this.getShapeData(3)},classList(){return["s-block","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth}},methods:{allProps(t){const e={};for(const i of Object.keys(t))e[i]=t[i];return e},getShapeData(t){const e=(this.shapes&&this.shapes[t])??{};return this.allProps(e)},defaultComponent(t){switch(t){default:case 0:return"square-square-circle";case 1:return"rect";case 2:return"shape-fast-forward";case 3:return"shape-pyramid"}}},props:{shapes:Array,backgroundColor:String,firstColor:String,secondColor:String},template:`
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">

      <component
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(400 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>
      <rect v-else x="400" y="400" :width="shapeWidth" :height="shapeHeight" :fill="secondShapeBackgroundColor" />

      <component
        transform="translate(0 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        v-if="fourthShape.name"
        transform="translate(0 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
      <g v-else >
        <path :fill="fourthShapeBackgroundColor" d="M.18 800h400v400H.18z"/>
        <path :fill="fourthShapeFirstColor" d="M400 1200H.18L200 1000l200 200z"/>
        <path :fill="fourthShapeSecondColor" d="m200 1000 200 200H200V1000z"/>
      </g>
    </svg>
  `},__vite_glob_0_124=Object.freeze(Object.defineProperty({__proto__:null,default:sBlock},Symbol.toStringTag,{value:"Module"})),tagName$1="square",square={tagName:tagName$1,computed:{name(){return tagName$1},allProps(){const t={};t.width=this.shapeWidth;for(const e of Object.keys(this.shape))t[e]=this.shape[e];return t},shape(){return this.shapes?this.shapes[0]:null},classList(){return["square","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth},viewBox(){return`0 0 ${this.shapeWidth} ${this.shapeHeight}`}},props:{shapes:Array},template:`
    <svg style="width: 200px" :class="classList" :data-name="name" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :width="shapeWidth" :height="shapeHeight" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <component :is="shape.name" v-if="shape" v-bind="allProps"></component>
    </svg>
  `},__vite_glob_0_125=Object.freeze(Object.defineProperty({__proto__:null,default:square},Symbol.toStringTag,{value:"Module"})),tagName="t-block",tBlock={tagName,computed:{name(){return tagName},secondShapeBackgroundColor(){return this.secondShape.backgroundColor?this.secondShape.backgroundColor:"var(--color-page-detail-shape)"},secondShapeFirstColor(){return this.secondShape.firstColor?this.secondShape.firstColor:"var(--color-orange)"},secondShapeSecondColor(){return this.secondShape.secondColor?this.secondShape.secondColor:"var(--color-background)"},firstShape(){return this.getShapeData(0)},secondShape(){return this.getShapeData(1)},thirdShape(){return this.getShapeData(2)},fourthShape(){return this.getShapeData(3)},classList(){return["t-block","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth}},methods:{allProps(t){const e={};for(const i of Object.keys(t))e[i]=t[i];return e},getShapeData(t){const e=(this.shapes&&this.shapes[t])??{};return this.allProps(e)},defaultComponent(t){switch(t){default:case 0:return"shape-moving-eye";case 1:return"shape-half-square";case 2:return"shape-semi-circle";case 3:return"rect"}}},props:{shapes:Array,backgroundColor:String,firstColor:String,secondColor:String},template:`
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">
      <component
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(400 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <g v-else transform="translate(0 0)">
        <path :fill="secondShapeBackgroundColor" d="M 400 800 h 400 v -400 H 400 z"/>
        <path :fill="secondShapeFirstColor" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path :fill="secondShapeFirstColor" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

      <component
        transform="translate(0 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        transform="translate(400 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
    </svg>
  `},__vite_glob_0_126=Object.freeze(Object.defineProperty({__proto__:null,default:tBlock},Symbol.toStringTag,{value:"Module"})),siteIcons={tagName:"site-icons",computed:{svgTemplate(){return templates[this.icon]||""},classList(){return"streamline-sm mr-4"}},props:{icon:String},template:`
    <span v-if="icon == 'site/mail'" :class="classList">
      <svg class="streamline-icon" viewbox="0 0 42 28" xmlns="http://www.w3.org/2000/svg">
        <title>{{ icon }}</title>
        <g id="envelope">
          <path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a" />
          <path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a" />
          <path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a" />
          <path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a" />
        </g>
      </svg>
    </span>
    <span v-if="icon == 'site/phone'" :class="classList">
      <svg class="streamline-icon" viewbox="0 0 39 39" xmlns="http://www.w3.org/2000/svg">
        <title>{{ icon }}</title>
        <g id="phone" transform="matrix(0.9848077 0.17364818 -0.17364818 0.9848077 5.730377 0)">
          <path d="M25.076 32C23.9878 32 22.9343 31.6841 22.0326 31.0871C13.6133 25.4928 6.50909 18.3887 0.914793 9.97086C-0.531095 7.79022 -0.237464 4.86645 1.61478 3.0184L3.48511 1.14529C4.22405 0.406349 5.20653 0 6.25303 0C7.29952 0 8.282 0.406349 9.02095 1.14529L12.436 4.55612C13.9598 6.08271 13.9598 8.56534 12.4374 10.0919L11.7457 10.785C14.6097 14.2069 17.7937 17.3923 21.2157 20.2576L21.9059 19.5674C22.6532 18.8243 23.6329 18.4207 24.6738 18.4207C25.7203 18.4207 26.7028 18.8284 27.4418 19.5674L30.8568 22.9824C32.382 24.509 32.3806 26.9916 30.8554 28.5168L28.9837 30.3899C27.9441 31.428 26.5567 32 25.076 32ZM6.25303 1.39161C5.5781 1.39161 4.94491 1.65323 4.46898 2.12916L2.59865 4.00226C1.21399 5.38413 0.994115 7.57034 2.0754 9.19991C7.56532 17.4633 14.5387 24.4366 22.8021 29.9265C23.4757 30.3732 24.2619 30.6084 25.0774 30.6084C26.1851 30.6084 27.2247 30.1812 28.0026 29.4047L29.8743 27.5329C30.8582 26.5491 30.8582 24.9501 29.8757 23.9663C29.8757 23.9663 26.4607 20.5513 26.4607 20.5513C25.9847 20.0753 25.3516 19.8123 24.678 19.8123C24.0045 19.8123 23.3713 20.0739 22.8954 20.5499L21.7556 21.6896C21.6248 21.8204 21.4495 21.8928 21.263 21.8928C21.103 21.8928 20.9457 21.8371 20.8218 21.7341C16.981 18.5738 13.4324 15.0238 10.272 11.1816C10.0438 10.9032 10.0633 10.5025 10.3165 10.2478L11.4549 9.10668C12.4374 8.12281 12.4374 6.52107 11.4549 5.5372L8.03847 2.12916C7.56254 1.65323 6.92796 1.39161 6.25303 1.39161Z" transform="translate(0.17733586 0.59690577)" class="a" />
        </g>
      </svg>
    </span>
  `},__vite_glob_0_127=Object.freeze(Object.defineProperty({__proto__:null,default:siteIcons},Symbol.toStringTag,{value:"Module"})),defaultOptions=({length:t,centerPadding:e})=>({slidesToShow:3,slidesToScroll:3,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:t>3,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{centerMode:!0,infinite:!1,centerPadding:e||"30px",slidesToShow:2,slidesToScroll:2,dots:t>2}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:e||"20px",slidesToShow:1,slidesToScroll:1,dots:t>1}}]}),slider={tagName:"slider",computed:{classList(){return["slider",`${Tools.isTrue(this.hideContainer)===!0?"":this.getSpacing}`,`${this.backgroundClass}`,"vue-component"]},jsonOptions(){return Tools.getJSON(this.options)},getSpacing(){return this.spacing?this.spacing:""},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){return`slider__headline ${this.headlineClasses?this.headlineClasses:"h3-font-size"}`},centerPaddingValue(){return this.centerPadding?this.centerPadding+"px":null},carouselOptions(){const t=this.childrenLength;if(t===0)return null;const e=this.jsonOptions?this.jsonOptions:defaultOptions({length:t,centerPadding:this.centerPaddingValue});return this.jsonOptions||(e.slidesToShow=e.slidesToScroll=1,e.dots=!0,e.responsive.forEach(s=>{s.settings.dots=!0,s.settings.slidesToScroll=s.settings.slidesToShow=1})),JSON.stringify(e)},childrenLength(){var t;return((t=this.children)==null?void 0:t.length)||0},children(){return this.$slots.default()},hideBackgroundValue(){return Tools.isTrue(this.hideBackground)},hideContainerValue(){return Tools.isTrue(this.hideContainer)},backgroundClass(){return this.hideBackgroundValue===!1?State.HAS_BACKGROUND:""},backgroundColor(){return this.bgColor?this.bgColor:this.defaultBgColor},style(){if(!this.hideBackgroundValue)return{"background-color":this.backgroundColor}}},data(){return{defaultBgColor:"var(--color-bg-grey)"}},props:{headline:String,headlineLevel:String,headlineClasses:String,spacing:String,hideContainer:{default:!1},hideBackground:{default:!1},bgColor:String,centerPadding:Number,options:Object},template:`
    <div :class="classList">
      <div class="slider__bg" v-if="!hideBackgroundValue">
        <figure class="svgshape" style="pointer-events: all; transform: translateY(2px);">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 10">
            <polygon :fill="backgroundColor" points="-5,10 100,10 100,0" />
          </svg>
        </figure>
      </div>
      <wrapper :hideContainer="hideContainerValue" classes="slider__wrapper" :style="style">
        <div class="row" v-if="headline">
          <div class="slider__header col-lg-12 col-md-10 mt-6 mt-lg-8 mb-6 mb-lg-8 text-center">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
            <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
          </div>
        </div>
        <div class="slider__container js-slick-carousel" :data-hs-slick-carousel-options="carouselOptions">
          <wrapper-slot-items :items="$slots.default"></wrapper-slot-items>
        </div>
      </wrapper>
    </div>`},__vite_glob_0_128=Object.freeze(Object.defineProperty({__proto__:null,default:slider,defaultOptions},Symbol.toStringTag,{value:"Module"})),slotItems={tagName:"slot-items",props:{items:{default:[]}},render(){const t=this.items(),e=[];return t.forEach((i,s)=>{var r;(r=i==null?void 0:i.props)!=null&&r.style||(i.props.style=`--utility-animation-index: ${s+1}`),e.push(i)}),e}},__vite_glob_0_129=Object.freeze(Object.defineProperty({__proto__:null,default:slotItems},Symbol.toStringTag,{value:"Module"})),socials={tagName:"socials",data(){return{follow:""}},computed:{classValue(){return["socials align-items-center",Tools.isTrue(this.expand)?this.showLabel?"socials--label-expand":"socials--expand":"",Tools.isTrue(this.vertical)?"is-vertical-xl mr-5 mr-xl-0 align-items-xl-start mb-xl-4":"","vue-component"]},iconClasses(){return[Tools.isTrue(this.vertical)?"mb-5 mr-xl-0":""]},showLabel(){return!Tools.isTrue(this.label)},socialItemClass(){return["socials__item",this.iconClasses]},getList(){var l,o;const t="https://www.twitter.com/",e="https://www.linkedin.com/in/",i=["mailto:?subject=","https://www.linkedin.com/shareArticle?mini=true&url=","https://twitter.com/intent/tweet?text=&url="],s={email:"fas fa-envelope",linkedin:"fab fa-linkedin",twitter:"fab fa-x-twitter"},a=[{link:(l=this.author)!=null&&l.twitter?t+this.author.twitter:"",icon:s.twitter},{link:(o=this.author)!=null&&o.linkedin?e+this.author.linkedin:"",icon:s.linkedin}].filter(h=>h.link!=="");if(a.length>0)return a;const n=i.map(h=>h+this.shareUrl);return n==null?void 0:n.map((h,u)=>{const S=Object.keys(s)[u];return{link:h,icon:s[S]}})}},mounted(){var t,e;(e=(t=window.i18n)==null?void 0:t.loader)==null||e.then(()=>{var i;this.follow=(i=window.i18n)==null?void 0:i.translate("follow")})},methods:{},props:{label:String,author:{default:null},vertical:{default:null},expand:{default:null},shareUrl:{default:null}},template:`
  <div :class="classValue" v-if="getList">
    <template v-if="showLabel">
      <span class="socials__label mr-4">{{ follow }}</span>
    </template>

    <template v-for="(listEntry, index) in getList">
      <a :href="listEntry.link" target="_blank" rel="noopener"
        :class="socialItemClass" >
        <i :class="listEntry.icon"></i>
      </a>
    </template>
  </div>
  `},__vite_glob_0_130=Object.freeze(Object.defineProperty({__proto__:null,default:socials},Symbol.toStringTag,{value:"Module"})),stepList={tagName:"step-list",migrate:!0,template:`
                        step-list
                    `},__vite_glob_0_131=Object.freeze(Object.defineProperty({__proto__:null,default:stepList},Symbol.toStringTag,{value:"Module"})),successStory={tagName:"success-story",migrate:!0,template:`
                        sucess-story
                    `},__vite_glob_0_132=Object.freeze(Object.defineProperty({__proto__:null,default:successStory},Symbol.toStringTag,{value:"Module"})),svgShape={props:{tagName:"svg-shape",align:{type:String,default:"bottom"},peak:{type:String,default:"right"},color:{type:String,default:"var(--color-white)"},obliquity:{type:Number,default:10},classes:{type:String,default:""},height:{type:Number,default:100}},computed:{svgShapeAlign(){return this.align},svgShapePeak(){return this.peak},svgShapeColor(){return this.color},svgShapeObliquity(){return this.obliquity},svgShapeClasses(){return this.classes},svgShapeHeight(){return this.height},basePoints(){return this.svgShapeAlign==="top"?`0,0 ${this.svgShapeHeight},0`:`0,${this.svgShapeObliquity} ${this.svgShapeHeight},${this.svgShapeObliquity}`},peakPointY(){return this.svgShapeAlign==="top"?this.svgShapeObliquity:0},peakPointX(){return this.svgShapePeak==="left"?0:this.svgShapeHeight},points(){return`${this.basePoints} ${this.peakPointX},${this.peakPointY}`},translateStyle(){return this.svgShapeAlign!=="top"?"transform: translateY(2px);":""}},template:`
    <figure :class="'svgshape ' + svgShapeClasses" :style="'pointer-events: all;' + translateStyle">
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" :viewBox="'0 0 ' + svgShapeHeight + ' ' + svgShapeObliquity">
        <polygon :fill="svgShapeColor" :points="points"/>
      </svg>
    </figure>
  `},__vite_glob_0_133=Object.freeze(Object.defineProperty({__proto__:null,default:svgShape},Symbol.toStringTag,{value:"Module"})),tabList={tagName:"tab-list",data(){return{smallVariant:"tab-list--small",showLeftArrow:!1,showRightArrow:!1,currentIndex:0,currentTabId:""}},mounted(){this.handleScroll(),this.currentTabId=this.list[0].id},computed:{leftValue(){return Tools.isTrue(this.left)===!0},columnClassList(){const i="col-"+(this.tabs?"":"lg-")+12/this.list.length;return[this.tabs?"px-2 px-lg-3 nav-item":"mb-6 mb-md-8 mb-lg-0",this.isSmall?"":i]},variantClass(){return this.variant?this.variant:this.smallVariant},classList(){return["tab-list vue-component",this.tabs?"px-4 px-lg-0":"",this.leftValue?"tab-list--left":"",this.variantClass,this.showLeftArrow?"show-left-arrow":"",this.showRightArrow?"show-right-arrow":""]},listClassList(){return["tab-list__list row nav nav-pills"]},isSmall(){return this.variantClass===this.smallVariant},hideContainer(){return!this.leftValue}},methods:{canScrollLeft(){const t=this.$refs.tabList;if(t)return t.scrollLeft>0},canScrollRight(){const t=this.$refs.tabList;if(t)return t.scrollLeft+t.clientWidth<t.scrollWidth-2},tabClassList(t){return["tab-list__tab rounded",t===this.currentIndex?"active":""]},ariaSelected(t){return t===this.currentIndex},boxClassList(t){return["tab-list__box rounded",t.link?"":"bg-white shadow-lg"]},isLink(t){return t.link?t.link.href:null},linkAttributes(t,e){const i={};return t.link&&Object.assign(i,{href:t.link.href,target:t.link.target}),t.id&&Object.assign(i,{id:t.id+"-tab","data-toggle":"pill",role:"tab","aria-controls":t.id,"aria-selected":this.ariaSelected(e)}),i},handleContentSwitch(t){const e=document.getElementById(t);if(!e)return;const i=document.getElementById(this.currentTabId);i.classList.remove("active"),i.classList.remove("show"),e.classList.add("active"),setTimeout(()=>{e.classList.add("show")},50),this.currentTabId=t},handleClick(t){t.preventDefault(),t.stopImmediatePropagation();const e=t.currentTarget;if(!e.href)return;const i=e.href.split("#")[1],s=document.getElementById(i),r=Array.prototype.indexOf.call(this.$refs.tabLink,e);this.currentIndex=r,s!==null&&(document.dispatchEvent(new CustomEvent(Events.REFRESH_ANIMATE_NUMBERS,{detail:{target:s}})),this.handleContentSwitch(i))},handleScroll(){this.showLeftArrow=this.canScrollLeft(),this.showRightArrow=this.canScrollRight()},getArrowOffset(){const t=this.$refs.left;return t?t.offsetWidth:0},scrollToTab(t){const e=this.$refs.tabList,i=this.$refs.tab[this.currentIndex];if(!e||!i)return;const s=this.$refs.tab[t];if(!s)return;const r=this.getArrowOffset(),a=s.offsetLeft-r;e.scrollLeft=t===0?0:a,s.querySelector("a").click()},scrollToNext(){this.scrollToTab(this.currentIndex+1)},scrollToPrevious(){this.scrollToTab(this.currentIndex-1)}},props:{list:Array,tabs:Boolean,left:{default:null},variant:String},template:`
    <div :class="classList">
      <wrapper :hide-container="hideContainer">
        <div class="tab-list__controls">
          <div class="tab-list__left" @click="scrollToPrevious" ref="left">
            <div class="tab-list__arrow-icon"></div>
          </div>
          <div class="tab-list__right" @click="scrollToNext">
            <div class="tab-list__arrow-icon"></div>
          </div>
        </div>
        <ul :class="listClassList" role="tablist" ref="tabList" @scroll="handleScroll">
          <li v-for="(tab, index) in list" :class="columnClassList" ref="tab">
            <a v-bind="linkAttributes(tab, index)"
              :class="tabClassList(index)" @click="handleClick" ref="tabLink">
              <div class="tab-list__content">
                <div :class="boxClassList(tab)">
                  <div class="d-flex flex-column align-items-center position-relative z-index-2">
                    <h2 class="tab-list__text mb-4 mb-md-6 text-center" v-if="tab.title">
                      {{ tab.title }}
                    </h2>
                    <p class="mb-6 flex-grow-1" v-if="tab.description">{{ tab.description }}</p>
                      <cta
                        text=tab.cta.text
                        href=tab.cta.href
                        target=tab.cta.target
                        skin=tab.cta.skin
                        classes="align-self-center z-index-2"
                        v-if="tab.cta != tab.href"
                      ></cta>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </wrapper>
    </div>
  `},__vite_glob_0_134=Object.freeze(Object.defineProperty({__proto__:null,default:tabList},Symbol.toStringTag,{value:"Module"})),tagCloud$1={tagName:"tag-cloud",migrate:!0,template:`
                        tag-cloud
                    `},__vite_glob_0_135=Object.freeze(Object.defineProperty({__proto__:null,default:tagCloud$1},Symbol.toStringTag,{value:"Module"})),tag={tagName:"tag",data(){return Tools.validateVueProps(this)},computed:{lowerLang(){return this.lang.toLowerCase()},classList(){var t;return["tags__btn btn btn-xs btn-soft-secondary btn-pill mb-2 vue-component",this.variant?"tag--"+this.variant:`mx-sm-${(t=this.props)==null?void 0:t.spacing}`,this.classes?this.classes:null]},url(){return this.lowerLang==="de"?"":`index-${this.lowerLang}/`},href(){return"/blog/"+this.url+"#"+encodeURIComponent(this.tag)},hasIcon(){return this.variant==="icon"}},props:{tag:{type:String,required:!0},count:{type:Number,default:null},filter:{type:Boolean,default:!1},lang:{type:String,default:"de"},spacing:{type:Number,default:1},classes:{type:String,default:null},variant:{type:String,default:null}},template:`
    <a
      :class="classList"
      :data-text="filter ? tag : undefined"
      :data-tag="tag"
      :href="href"
      rel="tag"
      :title="'Posts tagged with ' + tag"
    >
      {{ tag }}<span v-if="count">({{ count }})</span><span class="tag__icon" v-if="hasIcon"><icon icon="close" size="xs" /></span>
    </a>
  `},__vite_glob_0_136=Object.freeze(Object.defineProperty({__proto__:null,default:tag},Symbol.toStringTag,{value:"Module"})),teaser={tagName:"teaser",migrate:!0,template:`
                        teaser
                    `},__vite_glob_0_137=Object.freeze(Object.defineProperty({__proto__:null,default:teaser},Symbol.toStringTag,{value:"Module"})),testimonialList$1={tagName:"testimonial-list",template:`
    <div class="testimonial-list vue-component">
      <div class="testimonial-list__contents container-lg">
        <slot></slot>
      </div>
    </div>
  `},__vite_glob_0_138=Object.freeze(Object.defineProperty({__proto__:null,default:testimonialList$1},Symbol.toStringTag,{value:"Module"})),testimonialTeaser={tagName:"testimonial-teaser",migrate:!0,template:`
                        testimonial-teaser
                    `},__vite_glob_0_139=Object.freeze(Object.defineProperty({__proto__:null,default:testimonialTeaser},Symbol.toStringTag,{value:"Module"})),testimonialsDetail={tagName:"testimonials-detail",migrate:!0,template:`
                        testimonials-detail
                    `},__vite_glob_0_140=Object.freeze(Object.defineProperty({__proto__:null,default:testimonialsDetail},Symbol.toStringTag,{value:"Module"})),testimonialsSlider={tagName:"testimonials-slider",migrate:!0,template:`
                        testimonials-slider
                    `},__vite_glob_0_141=Object.freeze(Object.defineProperty({__proto__:null,default:testimonialsSlider},Symbol.toStringTag,{value:"Module"})),textAnimation={tagName:"text-animation",props:{sequence:Object,fixed:Boolean,cta:Object},data(){return{defaultTextSize:"font-size-6",defaultSublineSize:"font-size-2",timeout:null,textTimeout:null,letterDelay:120,sizeBasedDelay:null,minDelay:800,currentDelay:0,lastDelay:0,delayOffset:1600,sublineDelay:1150,buttonDelay:800,step:0,textValue:"",currentSubline:"",currentSublineSize:null,currentTextSize:"",currentText:"",isEnded:!1,isSecondLast:!1,showSubline:!1,sublineValue:null,isCalculated:!1,calculationStep:0,calculatedMaxHeight:0}},computed:{classList(){return["text-animation vue-component",this.isCalculated?"":State.INVISIBLE,this.isEnded?State.END:"",this.isFixed?"text-animation--fixed":""]},isFixed(){return Tools.isTrue(this.fixed)},textClassList(){return["text-animation__text",this.currentTextSize]},sublineClassList(){return["text-animation__subline",this.currentSublineSize,this.showSubline?"":State.INVISIBLE]},placeholderSublineClassList(){return["text-animation__subline",this.currentSublineSize]},placeholderTextClassList(){return["text-animation__text",this.currentTextSize]},placeholderCtaClassList(){return["text-animation__cta",this.isSecondLast||this.isEnded?"":State.INVISIBLE]},ctaClassList(){return["text-animation__cta",this.isEnded?"":State.INVISIBLE]},sequenceData(){return Tools.getJSON(this.sequence)},ctaData(){return Tools.getJSON(this.cta)}},methods:{getDelayByValue(t){switch(t){case 6:this.sizeBasedDelay=this.letterDelay/1.8,this.sizeBasedOffset=this.delayOffset;break;case 7:default:this.sizeBasedDelay=this.letterDelay/10,this.sizeBasedOffset=this.minDelay;break}},calculateDelay(){var e;this.currentSequenceStep=this.sequenceData[this.step],this.currentText=this.currentSequenceStep.text,this.currentTextSize=this.currentSequenceStep.textSize||this.defaultTextSize;const t=parseInt(this.currentTextSize.match(/\d+/)[0]);this.getDelayByValue(t),this.currentSubline=((e=this.currentSequenceStep)==null?void 0:e.subline)||"",this.currentDelay=this.currentText.length*this.sizeBasedDelay+this.sizeBasedOffset+(this.currentSubline.length>0?this.sublineDelay:0),this.currentDelay<this.minDelay&&(this.currentDelay=this.minDelay),this.lastDelay=this.lastDelay+this.currentDelay},showButtonAtLastRun(t){this.step+1<this.sequenceData.length||setTimeout(()=>{this.end()},t+this.buttonDelay)},end(){this.isEnded=!0,this.$emit("text-animation-ended",this.isEnded),window.clearTimeout(this.timeout)},next(){this.step>=this.sequenceData.length-1||(this.step++,this.animate())},animateText(){this.currentSublineSize=this.currentSequenceStep.sublineSize||this.defaultSublineSize,this.sublineValue=this.currentSubline,this.step+1!==this.sequenceData.length&&(this.isEnded=!1),this.step===this.sequenceData.length-1&&(this.isSecondLast=!0),this.$emit("text-animation-state",{step:this.step,isSecondLast:this.isSecondLast});for(let t=0;t<this.currentText.length;t++)this.textTimeout=t*this.sizeBasedDelay+this.sizeBasedDelay,setTimeout(()=>{this.typeLetter(this.currentText[t])},this.textTimeout);this.currentSubline.length&&(this.textTimeout=this.textTimeout+this.sublineDelay,setTimeout(()=>{this.sublineValue=this.currentSubline,this.showSubline=!0},this.textTimeout)),this.showButtonAtLastRun(this.textTimeout)},resetText(){this.textValue="",this.sublineValue="",this.showSubline=!1,this.oldStep=this.sequenceData[this.step-1],this.nextStep=this.sequenceData[this.step+1]||this.sequenceData[0],this.currentTextSize=this.nextStep.textSize||this.defaultTextSize,this.currentSublineSize=this.nextStep.sublineSize||this.defaultSublineSize},animate(){this.calculateDelay(),this.animateText(),this.timeout=setTimeout(()=>{this.resetText(),this.next()},this.currentDelay)},typeLetter(t){if(!t)return;(()=>{this.textValue=this.textValue+t})()},calculateNextMaxHeight(){const t=this.sequenceData[this.calculationStep];if(!t)return this.isCalculated=!0;this.currentText=null,this.sublineValue=null,this.ctaData=null,this.currentTextSize=t.textSize||this.defaultTextSize,this.currentText=t.text,t.subline&&(this.currentSublineSize=t.sublineSize||this.defaultSublineSize,this.sublineValue=t.subline),this.calculationStep++},handleResize(){this.calculatedMaxHeight=null;const t=this.$refs.placeholder;this.calculatedMaxHeight=t.offsetHeight}},updated(){if(!this.isCalculated){const t=this.$refs.placeholder;this.$refs.placeholderCta.style.display="none",this.calculatedMaxHeight=t.offsetHeight>this.calculatedMaxHeight?t.offsetHeight:this.calculatedMaxHeight,this.calculateNextMaxHeight(),this.$refs.placeholderCta.style.display=""}},created(){this.text=this.$refs.text,this.sizeBasedDelay=this.letterDelay},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},mounted(){window.addEventListener("resize",this.handleResize),this.calculateNextMaxHeight()},watch:{isCalculated(t){t&&(this.$refs.placeholder.style.minHeight=this.calculatedMaxHeight+"px",this.animate())}},template:`
    <div :class="classList">
      <div class="text-animation__placeholder" ref="placeholder">
        <span :class="placeholderTextClassList" ref="placeholderText" v-html="currentText"></span>
        <div :class="placeholderSublineClassList" v-html="sublineValue"></div>
        <div :class="placeholderCtaClassList" ref="placeholderCta" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
      <div class="text-animation__visible">
        <span :class="textClassList" ref="text" v-html="textValue"></span>
        <div :class="sublineClassList" v-html="sublineValue"></div>
        <div :class="ctaClassList" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
    </div>
  `},__vite_glob_0_142=Object.freeze(Object.defineProperty({__proto__:null,default:textAnimation},Symbol.toStringTag,{value:"Module"})),textIconAnimation={tagName:"text-icon-animation",props:{animation:Object,icon:String,fixed:Boolean,cta:Object,classes:String},data(){return{textAnimationStep:0,isEnded:!1,isSecondLast:!1}},computed:{animationData(){return Tools.getJSON(this.animation)},sequence(){return this.animationData.sequence},classList(){return["text-icon-animation row vue-component",this.classes,this.isFixed?"text-icon-animation--fixed":"",this.isEnded?"text-icon-animation--ended":"",this.isSecondLast?"text-icon-animation--is-second-last":""]},isFixed(){return Tools.isTrue(this.fixed)},iconClassList(){return`text-icon-animation__icon icon--step-${this.textAnimationStep}`}},methods:{handleTextAnimationState(t){this.textAnimationStep=t==null?void 0:t.step,this.isSecondLast=t==null?void 0:t.isSecondLast},handleTextAnimationEnded(t){this.isEnded=t}},template:`
    <div :class="classList">
      <div class="text-icon-animation__animation col-lg-8">
        <text-animation
          :sequence="sequence"
          :fixed="fixed"
          :cta="cta"
          @text-animation-state="handleTextAnimationState"
          @text-animation-ended="handleTextAnimationEnded"
        >
        </text-animation>
      </div>
      <div class="text-icon-animation__icon-container col-lg-4">
        <icon :icon="icon" :classes="iconClassList" :animation="animationData" :step="textAnimationStep"></icon>
      </div>
    </div>
  `},__vite_glob_0_143=Object.freeze(Object.defineProperty({__proto__:null,default:textIconAnimation},Symbol.toStringTag,{value:"Module"})),textImageList={tagName:"text-image-list",migrate:!0,template:`
                        text-image-list
                    `},__vite_glob_0_144=Object.freeze(Object.defineProperty({__proto__:null,default:textImageList},Symbol.toStringTag,{value:"Module"})),textImage={tagName:"text-image",props:{spacing:{type:String,default:"space-top-2"},image:String,imageClasses:String,imagePreset:String,lottie:Object,float:Boolean,overline:String,headline:String,subline:String,left:Boolean,alt:String,cloudinary:Boolean,offset:Boolean,white:Boolean,copy:String,list:Array,bgColor:String,copyClasses:String,copyLight:String,background:String,firstColWidth:Number,secondColWidth:Number,reduceSpacing:{type:Boolean,default:!1},cta:Object,modal:Object,href:String,badge:Object,sticky:Boolean,noAnimation:Boolean,index:Number,noGutters:{type:Boolean,default:!1},level:{type:String,default:"h3"},headlineClasses:String},computed:{textImageLightText(){return this.copyLight?"text-light":""},textImageFirstColWidthXl(){return this.firstColWidth||4},textImageFirstColWidthComputed(){return this.firstColWidth||6},textImageSecondColWidthXl(){return this.secondColWidth||8},textImageSecondColWidthComputed(){return this.secondColWidth||6},textImageHeadlineClassesComputed(){let t=`${this.headlineClasses||""} ${this.textImageLightText} mb-2 mb-lg-4`;return this.headlineClasses||(t+=this.float?" h3-font-size":" h4-font-size font-weight-normal"),t.trim()},textImageImgSrcSets(){return this.float?this.imagePreset?this.imagePreset:"textImageFloatingSmall":this.imagePreset?this.imagePreset:null},textImagePreset(){return this.float?this.imagePreset||"textImageFloatingSmall":this.imagePreset||null},textImageClass(){return["text-image","is-component",this.spacing,{"text-image--bg-color":this.bgColor},{"is-sticky-scroller":this.sticky},{"utility-animation utility-animation--enter-exit":!this.noAnimation},{"text-image--float":this.float},"vue-component"]},textImageStyle(){return{"background-color":this.bgColor,"--utility-animation-index":this.index,"background-image":this.background?`url('${this.background}')`:void 0}},textImageFirstColClasses(){const t=["text-image__first-col","d-flex","text-image__img","justify-content-center",this.imageClasses,`col-lg-${this.float?this.textImageFirstColWidthComputed:this.offset?this.textImageFirstColWidthComputed-1:this.textImageFirstColWidthComputed}`];return this.float?t.push(`col-xl-${this.textImageFirstColWidthXl}`,"text-image__img--floating"):this.offset&&!this.left&&t.push("offset-lg-1"),t},textImageSecondColClasses(){const t=["text-image__second-col",{"no-gutters":this.noGutters},{"pt-2 pt-lg-4":!this.noGutters},`col-lg-${this.textImageSecondColWidthComputed}`,{"fade-in-bottom":!this.noAnimation},{"text-white":this.white},{[this.reduceSpacing]:this.reduceSpacing}];return this.reduceSpacing||t.push(`${this.left?"pr-lg-":"pl-lg-"}${this.textImageSecondColWidthComputed}`),this.float?t.push(`col-xl-${this.textImageSecondColWidthXl}`):this.left&&this.offset&&t.push("offset-lg-1"),t},textImageLightTextClass(){return[this.copyClasses||"",this.textImageLightText]}},methods:{handleClick(){this.href&&(document.location.href=this.href)}},template:`
    <div :class="textImageClass" :style="textImageStyle">
      <div class="container">
        <div class="row" :class="{ 'flex-row-reverse': left }">
          <div
            v-if="float"
            :class="['text-image__floating-col', 'justify-content-end', 'text-image__floating-img', 'position-absolute', 'top-0', 'right-0', 'col-lg-' + textImageFirstColWidthComputed, 'col-xl-' + textImageFirstColWidthXl]"
            @click="handleClick"
            :style="{ cursor: href ? 'pointer' : undefined }"
          >
            <v-img
              :img="image"
              :cloudinary="cloudinary"
              :alt="alt"
              imgSrcSets="textImageFloating"
              preset="textImageFloating"
              :lottie="lottie"
            />
          </div>
          <div
            :class="textImageFirstColClasses"
            @click="handleClick"
            :style="{ cursor: href ? 'pointer' : undefined }"
          >
            <div class="text-image__first-col-wrapper" :class="{ 'fade-in-bottom': !noAnimation }" data-utility-animation-step="1">

              <v-img
                :img="image"
                :cloudinary="cloudinary"
                :imgSrcSets="textImageImgSrcSets"
                :preset="textImagePreset"
                :alt="alt"
                :lottie="lottie"
              />
            </div>
          </div>
          <div :class="textImageSecondColClasses" data-utility-animation-step="1">
            <badge
              v-if="badge"
              :text="badge.text"
              :icon="badge.icon"
              :uppercase="!badge.noUppercase"
              classes="text-image__badge"
            />
            <span v-if="overline" class="text-image__overline d-inline-block mb-2 font-size-2">
              {{ overline }}
            </span>
            <headline
              v-if="headline"
              :level="level"
              :text="headline"
              :classes="textImageHeadlineClassesComputed"
            />
            <span v-if="subline" class="richtext">{{ subline }}</span>
            <div v-if="subline" class="text-image__img text-image__img--subline mb-5 mt-5">
              <v-img
                :img="image"
                :cloudinary="cloudinary"
                :imgSrcSets="textImageImgSrcSets"
                :preset="textImagePreset"
                :alt="alt"
                :lottie="lottie"
              />
            </div>
            <div :class="textImageLightTextClass" v-html="copy"></div>
            <div v-if="list" class="pt-4 pt-lg-6 pb-6">
              <cta-list :list="list" />
            </div>
          </div>
          <div v-if="cta" class="text-image__cta col-lg-12">
            <cta
              :text="cta.text"
              button
              :href="cta.href"
              :trigger="cta.trigger"
            />
          </div>
        </div>
      </div>
      <modal
        v-if="modal"
        :form="modal.form"
        :success="modal.success"
        :error="modal.error"
        :application="true"
        :clientName="modal.clientName"
        :jobId="modal.jobId"
        :apiUrl="modal.apiUrl"
        :apiKey="modal.apiKey"
      />
    </div>
  `},__vite_glob_0_145=Object.freeze(Object.defineProperty({__proto__:null,default:textImage},Symbol.toStringTag,{value:"Module"})),textTeaser={tagName:"text-teaser",computed:{classList(){return["text-teaser utility-animation",this.spacing?this.spacing:"","vue-component"]},style(){return[this.background?`background-image: url('${this.background}');`:"",this.bgColor?`background-color: ${this.bgColor};`:""]},rowBackgroundClass(){return["row",this.background?"justify-content-center":""]},colBackgroundClass(){return[this.background?"col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light":"col-lg-7 offset-lg-1 pt-8"]},ctaListClass(){return["pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom"]},logoClass(){return["text-teaser__logo-container",this.background?"mx-auto":""]},ctaListNormalize(){return this.ctaList.map(e=>{const i={};for(const s in e)s==="ctaText"?i.text=e[s]:s==="ctaHref"?i.href=e[s]:i[s]=e[s];return i})}},props:{ctaList:Object,spacing:String,background:String,bgColor:String,logo:Object,copy:String},template:`
    <div :class="classList" :style="style">
      <div class="container">
        <div :class="rowBackgroundClass">
          <div :class="colBackgroundClass">
            <div class="mb-4 w-100" v-if="logo">
              <figure :class="logoClass">
                <v-img v-bind="logo" />
              </figure>
            </div>

            <div class="text-teaser__copy fade-in-bottom" data-utility-animation-step="1">{{ copy }}</div>

            <div :class="ctaListClass" data-utility-animation-step="1" v-if="ctaList">
              <template v-for="entry in ctaListNormalize">
                <cta v-bind="entry" />
              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
  `},__vite_glob_0_146=Object.freeze(Object.defineProperty({__proto__:null,default:textTeaser},Symbol.toStringTag,{value:"Module"})),timelineEntryInnerText={tagName:"timeline-entry-inner-text",computed:{},template:`
    <div :class="['timeline__entry-inner-text', { 'timeline__entry-inner-text--simple': simple }]">
      <template v-if="entry.title">
        <div class="timeline__entry-title">{{ entry.title }}</div>
        <p class="timeline__entry-text">{{ entry.text }}</p>
      </template>
      <template v-else><span v-html="entry"></span></template>
    </div>
  `,props:{entry:Object,simple:Boolean}},timeline={tagName:"timeline",components:{"timeline-entry-inner-text":timelineEntryInnerText},computed:{classList(){return["timeline","has-background","timeline--headline-sticky has-headline-sticky",this.isReady?State.READY:"",this.expanded?State.EXPANDED:"",this.spacing,this.simpleValue?"timeline--simple":"","vue-component"]},copyColor(){return this.color?this.color:"var(--color-copy-light)"},backgroundColor(){return this.bgColor?this.bgColor:"var(--color-blue-dark)"},style(){return`--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`},headlineClasses(){var t;return`timeline__headline headline-sticky__target h2-font-size light ${(t=this.headline)!=null&&t.classes?this.headline.classes:""}`},lineEndStyle(){var t;return`--timeline-line-position: ${(t=this.entries)==null?void 0:t.length}`},simpleValue(){return Tools.isTrue(this.simple)},iconName(){return"strategy-split"}},mounted(){this.bindEvents(),this.handleScroll()},data(){return{lastIndex:null,isReady:!1,startDelay:500,isVisible:!1,percentageInViewport:40,minPercentage:-10,maxPercentage:100,entryContainerStates:[],entryContainerStyles:[]}},methods:{bindEvents(){document.addEventListener("scroll",this.handleScroll)},startAnimation(){setTimeout(()=>{this.isReady=!0},this.startDelay)},getEntryLineStyle(t){return`--timeline-line-position: ${t}`},handleScroll(){this.expanded?this.isInViewport():this.updateAnimation()},updateAnimation(){const t=this.getScrollPercentage();if(t<=this.minPercentage)return this.setAnimationStart();if(t>=this.maxPercentage)return this.setAnimationEnd();this.isReady||this.startAnimation(),this.showEntryByPercent(t)},setAnimationStart(){this.isReady=!1},setAnimationEnd(){for(let e=0;e<this.entries.length;e++)this.entryContainerStyles[e]="0",this.entryContainerStates[e]=[State.SHOW,State.IS_FULL]},showEntryByPercent(t){const e=this.maxPercentage/this.entries.length;for(let i=0;i<this.entries.length;i++)this.updateNextStep(i,t,e)},updateNextStep(t,e,i){this.entryContainerStates[t]=State.SHOW;const s=0,r=i*t,a=i*(t+1);let n=0;if(e>=r&&e<=a){const l=i,o=e-r,h=60;n=this.maxPercentage-Math.ceil(o*100/l),n<h&&(this.entryContainerStates[t]=[State.SHOW,"timeline__entry-container--visible"])}else e>a?(n=s,this.entryContainerStates[t]=[State.SHOW,State.IS_FULL]):n=this.maxPercentage;this.simpleValue&&(n<this.maxPercentage&&n>s?n=1:n=0),this.entryContainerStyles[t]=`${n}`},getEntryContainerClasses(t){return["timeline__entry-container",this.entryContainerStates[t]]},getEntryContainerStyle(t){return`--timeline-entry-container-percentage: ${this.entryContainerStyles[t]?this.entryContainerStyles[t]:this.simpleValue?0:this.maxPercentage}`},getScrollPercentage(){const t=this.$refs.root,e=t.getBoundingClientRect().height,i=window.innerHeight/3;let s=Tools.getScrollTop(t)-i;s<0&&(s=0);const r=window.scrollY-s,a=e-i;return r*100/a},isInViewport(){if(this.isVisible)return;const t=this.$refs.root;Tools.isInViewportPercent(t,this.percentageInViewport)&&this.startAnimation()}},props:{headline:Object,bgColor:{default:null},color:{default:null},entries:Array,expanded:{default:null},spacing:String,simple:{default:null},subline:String},template:`
    <div :class="classList" :style="style" ref="root">
      <div class="container">
        <div class="timeline__row row">
          <div class="timeline__col col">
            <template v-if="subline">
              <div class="timeline__header">
                <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
                <div class="timeline__subline" v-if="subline">{{ subline }}</div>
              </div>
            </template>
            <template v-else>
              <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
            </template>

            <div class="timeline__content">
              <div class="timeline__line">
                <div class="timeline__line-start">
                  <div class="timeline__line-corner">
                    <span></span>
                  </div>
                </div>
                <div :class="getEntryContainerClasses(index)" v-for="(entry, index) in entries" :style="getEntryContainerStyle(index)">
                  <div class="timeline__entry" :style="getEntryLineStyle(index)">
                    <div class="timeline__entry-inner">
                      <timeline-entry-inner-text :entry="entry" :simple="simpleValue" />
                      <div class="timeline__entry-inner-line">
                        <icon :icon="iconName" class="timeline__entry-inner-line-icon" v-if="simpleValue" />
                      </div>
                      <div class="timeline__entry-vertical-line" v-if="simpleValue"></div>
                    </div>
                  </div>
                  <div class="timeline__entry-line" :style="getEntryLineStyle(index)" ref="entry-line"></div>
                  <div class="timeline__entry-spacer" :style="getEntryLineStyle(index)">
                    <div class="timeline__entry-inner">
                      <timeline-entry-inner-text :entry="entry" :simple="simpleValue" />
                      <div class="timeline__entry-inner-line">
                        <icon :icon="iconName" class="timeline__entry-inner-line-icon" v-if="simpleValue" />
                      </div>
                      <div class="timeline__entry-vertical-line" v-if="simpleValue"></div>
                    </div>
                  </div>
                </div>
                <div class="timeline__line-end" :style="lineEndStyle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},__vite_glob_0_147=Object.freeze(Object.defineProperty({__proto__:null,default:timeline},Symbol.toStringTag,{value:"Module"})),toggleForm={tagName:"toggle-form",migrate:!0,template:`
                       toggle-form
                    `},__vite_glob_0_148=Object.freeze(Object.defineProperty({__proto__:null,default:toggleForm},Symbol.toStringTag,{value:"Module"})),DefaultPresets={min_width:320,max_width:1200,fallback_max_width:1200,steps:5,sizes:"100vw",figure:"auto",attributes:{},width_height:!0,height:!1,crop:"limit",aspect_ratio:!1,gravity:!1,zoom:!1,x:!1,y:!1,format:!1,fetch_format:"auto",quality:"auto",radius:!1,angle:!1,effect:!1,opacity:!1,border:!1,background:!1,overlay:!1,underlay:!1,default_image:!1,delay:!1,color:!1,color_space:!1,dpr:!1,page:!1,density:!1,flags:!1,transformation:!1},TransformationOptions={height:"h",crop:"c",aspect_ratio:"ar",gravity:"g",zoom:"z",x:"x",y:"y",fetch_format:"f",quality:"q",radius:"r",angle:"a",effect:"e",opacity:"o",border:"bo",background:"b",overlay:"l",underlay:"u",default_image:"d",delay:"dl",color:"co",color_space:"cs",dpr:"dpr",page:"pg",density:"dn",flags:"fl",transformation:"t"},Cloudinary={cloud_name:"c4a8",developer_mode:!1,origin_url:"",verbose:!1,presets:{avatar:{fallback_max_width:300,min_width:100,max_width:300,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},textImageFloatingSmall:{"min-width":320,"max-width":1e3,steps:3,sizes:"(min-width: 766px) 766px, 991px",figure:"never",loading:"auto"},textImageFloating:{"min-width":460,"max-width":1e3,steps:2,sizes:"(min-width: 1200px) 1200px, 1300px",figure:"never",loading:"auto"},person:{"min-width":50,"max-width":200,steps:3,sizes:"(min-width: 8rem) 8rem, 90vw",figure:"never",loading:"auto"},default:{min_width:320,max_width:1600,fallback_max_width:800,steps:5,sizes:"(min-width: 50rem) 50rem, 90vw",figure:"never",loading:"auto"},fullscreen4k:{min_width:480,max_width:3840,fallback_max_width:3840,steps:6,sizes:"(max-width: 30rem) 40rem, (max-width: 40rem) 50rem, (max-width: 50rem) 60rem, (max-width: 70rem) 80rem, (max-width: 90rem) 100rem, 200vw",figure:"never",loading:"auto"},thumb:{min_width:320,max_width:1600,fallback_max_width:800,steps:5,sizes:"(min-width: 50rem) 50rem, 90vw",figure:"never",loading:"auto"},cardSmall:{min_width:600,max_width:800,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},postTeaser:{min_width:400,max_width:800,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},author:{min_width:100,max_width:300,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},logoList:{min_width:200,max_width:500,fallback_max_width:500,steps:4,sizes:"(min-width: 50rem) 50rem, 90vw",figure:"never",loading:"auto"},eventThumb:{min_width:300,max_width:800,steps:3,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"}}},ImgSrcSets={heroStudy:{srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_800,w_800,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_1000,x_0,y_0/",media:"(max-width: 1200px)"},{params:"c_fill,g_face,h_600,w_1350,x_0,y_0/"}]},testimonialTeaser16x9:{srcSets:[{params:"c_fill,g_face,h_281,w_500,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_225,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_388,w_600,x_0,y_0/",media:"(max-width: 1200px)"},{params:"c_fill,g_face,h_450,w_800,x_0,y_0/"}]},testimonialTeaser4xx3:{srcSets:[{params:"c_fill,g_face,h_281,w_500,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_225,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_800,x_0,y_0/",media:"(max-width: 1200px)"},{params:"c_fill,g_face,h_600,w_800,x_0,y_0/"}]},square:{ratioClasses:"ratio-1x1",srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_400,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_600,x_0,y_0/"}]},testimonial:{srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_400,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:""}]},event:{srcSets:[{params:"c_fill,g_face,h_400,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_300,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:""}]},eventTeaser:{srcSets:[{params:"c_fill,g_face,h_450,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_450,w_600,x_0,y_0/",media:"(max-width: 765px)"},{params:""}]},cardSmall:{srcSets:[{params:"c_fill,g_face,h_450,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_300,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_800,x_0,y_0/"}]},textImageFloating:{srcSets:[{params:"c_fill,g_xy_center,h_1000,w_490,x_870,y_0/",media:"(max-width: 1199px)"},{params:"c_fill,g_face,h_1200,w_800,x_0,y_0/"}]},textImageFloatingSmallSquare:{ratioClasses:"ratio-1x1",srcSets:[{params:"c_fill,g_face,h_500,w_500,x_0,y_0/"}]},textImageFloatingSmall:{ratioClasses:"ratio-2x1",srcSets:[{params:"c_fill,g_face,h_500,w_1000,x_0,y_0/"}]},postTeaser:{ratioClasses:"ratio-1x1",srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_500,w_500,x_0,y_0/"}]}},basePath="https://res.cloudinary.com/c4a8/image/upload/",vImg={name:"VImg",tagName:"v-img",data(){return{dimensions:{naturalHeight:null,naturalWidth:null},dimStack:{},previousImg:null,srcset:"",noCloudinary:null,sizes:null}},computed:{classList(){return["v-img","vue-component",this.classListComponent]},classListComponent(){return[this.isSvg()?"is-svg":"",this.class?this.class:"",this.canGenerateSrcSet()?"no-small img-responsive":""]},isLottie(){return typeof this.jsonLottieData=="object"},jsonLottieData(){if(this.lottie)return typeof this.lottie!="object"?Tools.getJSON(this.lottie):this.lottie},jsonLottieSettingsData(){if(!(!this.lottie||!this.lottieSettings))return typeof this.lottieSettings!="object"?Tools.getJSON(this.lottieSettings):this.lottieSettings},isCloudinary(){return Tools.isTrue(this.cloudinary)},source(){return this.isCloudinary?this.noCloudinary||this.getCloudinaryLink():this.noCloudinary},loading(){return this.lazy?"lazy":null},crossOriginValue(){return this.isCloudinary?this.crossorigin?this.crossorigin:"anonymous":null},hasPictureTag(){return this.isCloudinary&&this.imgSrcSets},pictureWrapperClassList(){var t;return["img__picture-wrapper",(t=this.imgSrcSetValue)==null?void 0:t.ratioClasses]},imgSrcSetValue(){return ImgSrcSets[this.imgSrcSets]},imgSrcSetSources(){var t,e;return(e=(t=this.imgSrcSetValue)==null?void 0:t.srcSets)==null?void 0:e.filter(i=>i.media)},imgSrcSetImg(){var e;const t=(e=this.imgSrcSetValue)==null?void 0:e.srcSets;return t?this.getCloudinaryBasePathLink(t[t.length-1]):null}},watch:{animated(t,e){this.srcset=""}},created(){this.canGenerateSrcSet()||this.isCloudinary||(this.noCloudinary=this.getBaseAssetPath(),this.sizes=DefaultPresets.sizes)},methods:{canGenerateSrcSet(){return this.isCloudinary&&!this.isGif()&&!this.animated},getSetup(){const t=this.getPreset(),e=this.getTransformationString(t);return{preset:t,transformationsString:e}},getPreset(){try{return this.preset?Cloudinary.presets&&Cloudinary.presets[this.preset]?Object.assign(DefaultPresets,Cloudinary.presets[this.preset]):DefaultPresets:{...DefaultPresets,...Cloudinary.presets.default}}catch(t){console.error(t)}},hasProtocol(){return/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img)},getBaseAssetPath(){var t;return Tools.isTestingStorybook()?this.img:((t=this.img)==null?void 0:t.indexOf("/assets/"))!==-1?this.img:this.hasProtocol()?this.img:`/assets/${this.img}`},getCloudinaryBasePathLink(t){return`${basePath}${t?t.params:""}${this.img}`},getCloudinaryLink(){return this.isGif()||this.isSvg()||this.animated?this.getCloudinaryBasePathLink():this.getCloudinaryLinkWithTransformation()},getCloudinaryLinkWithTransformation(){const{preset:t,transformationsString:e}=this.getSetup(),i=/w_\d+/.test(this.img),s=basePath+e,r=`/${this.img}`;return i?`${s}${r}`:`${s},w_${t.fallback_max_width}${r}`},loadImage(t){if(!this.canGenerateSrcSet())return;const e=document.createElement("img");e.onload=()=>{const i=e==null?void 0:e.naturalHeight,s=e==null?void 0:e.naturalWidth;let r;if(this.isSvg())r={naturalHeight:i,naturalWidth:s};else{const{preset:a,transformationsString:n}=this.getSetup();this.sizes=a==null?void 0:a.sizes,r={naturalHeight:i||(a==null?void 0:a.fallback_max_width),naturalWidth:s||(a==null?void 0:a.fallback_max_width)},i&&s&&!this.isSvg()&&this.buildSrcSet(a,n)}this.dimensions=r},e.src=t||this.getCloudinaryLinkWithTransformation()},getTransformationString(t){const e=[];for(const[s,r]of Object.entries(TransformationOptions))t[s]&&e.push(`${r}_${t[s]}`);return e.length>0?e.join(","):""},buildSrcSet(t,e){const i=[],s=t.steps,r=t.min_width,n=(t.max_width-r)/(s-1),{naturalWidth:l}=this.dimensions;for(let o=1;o<=s;o++){const h=r+(o-1)*n,u=h<=l,S=u?h:l,_=`${this.hasPictureTag?this.imgSrcSetImg:`${basePath}${e},w_${S}/${this.img}`} ${S}w`;if(i.push(_),!u)break}this.srcset=l<r?"":i.join(`, 
`)},isGif(){return this.img?this.img.split(".")[1].toLowerCase()==="gif":void 0},isSvg(){var e;return Tools.getExtension(this.getCloudinaryBasePathLink()).toLowerCase()==="svg"||((e=this.img)==null?void 0:e.indexOf(".svg"))!==-1}},props:{imgSrcSets:{type:String,default:null},img:String,alt:String,cloudinary:Boolean,crossorigin:String,lazy:Boolean,class:String,preset:String,lottie:Object,lottieSettings:Object,animated:Boolean},template:`
    <template v-if="hasPictureTag">
      <div :class="pictureWrapperClassList">
        <picture>
          <source v-for="srcSet in imgSrcSetSources" :key="srcSet.params" :media="srcSet.media" :srcset="getCloudinaryBasePathLink(srcSet)" />
          <img @load="loadImage(imgSrcSetImg)" ref="image" :src="imgSrcSetImg" :loading="loading" :class="classList" :alt="alt" :width="dimensions.naturalWidth" :height="dimensions.naturalHeight" :srcset="srcset" :sizes="sizes" :crossorigin="crossOriginValue">
        </picture>
      </div>
    </template>
    <lottie v-else-if="isLottie" :data="jsonLottieData" :class="classListComponent" v-bind="jsonLottieSettingsData" />
    <img v-else @load="loadImage()" ref="image" :src="source" :loading="loading" :class="classList" :alt="alt" :width="dimensions.naturalWidth" :height="dimensions.naturalHeight" :srcset="srcset" :sizes="sizes" :crossorigin="crossOriginValue">
  `},__vite_glob_0_149=Object.freeze(Object.defineProperty({__proto__:null,default:vImg},Symbol.toStringTag,{value:"Module"})),videoFrame$1={tagName:"video-frame",migrate:!0,template:`
                        video-frame
                    `},__vite_glob_0_150=Object.freeze(Object.defineProperty({__proto__:null,default:videoFrame$1},Symbol.toStringTag,{value:"Module"}));class YoutubePlayer{static getEmbedSrc(e,i){const s=encodeURIComponent(document.location.origin),r=encodeURIComponent(document.location.href);return`https://www.youtube-nocookie.com/embed/${e}?origin=${s}&autoplay=${i}&widget_referrer=${r}&enablejsapi=1&widgetid=1`}}const YoutubePlayer$1=YoutubePlayer,videoInner={tagName:"video-inner",computed:{videoClass(){return["video utility-animation",`${this.videoParsed.id?"video--has-video":"hover__parent"}`,`${this.isVariantRow?"container":"d-flex flex-column"}`,`${Tools.isTrue(this.overlapping)?"video--is-overlapping":""}`,`${this.spacing?this.spacing:"space-bottom-1 space-bottom-lg-0"}`,`${this.isReversed()?"":"h-100"}`,`${this.variant?"video--"+this.variant:""}`,"vue-component"]},videoPlayerClass(){return["video__player fade-in-bottom",`${this.variantClasses}`,`${this.isPlayed?"video-player-played is-starting":""}`,`${this.videoParsed.ctaText?"video__player--has-link":""}`,"vue-component"]},videoContentClass(){const t=this.isReversed()?"pb-4":"py-4 px-3 p-lg-5";return["video__content fade-in-bottom",`${this.videoParsed.ctaText?"hover__parent":""}`,`${this.isVariantRow?"col-md-6 ":"flex-grow-1 "+t}`]},variantClasses(){return this.variant?this.isVariantRow?"col-md-6 order-md-2":"":"bg-dark"},isVariantRow(){return this.variant==="row"},videoParsed(){return typeof this.video!="object"?JSON.parse(this.video):this.video},onClickVideoContent(){return this.videoParsed.ctaText?"this.querySelector('a').click()":null},onClick(){return this.videoParsed.ctaText&&this.videoParsed.id?"this.querySelector('a').click()":null},videoId(){return"video-id__"+this.videoParsed.id},videoFrameId(){return this.videoId+"-frame"},headlineClasses(){return`h4-font-size ${this.isVariantRow?"mb-0":""}`},dataOptionsLightBox(){const t={selector:`#${this.videoId} .js-video-button`,speed:700,buttons:["fullScreen","close"],media:{youtube:{url:"https://www.youtube-nocookie.com/embed/$4",params:{autoplay:1}}}};return JSON.stringify(t)},options(){return{videoId:this.videoParsed.id,parentSelector:"#"+this.videoId,targetSelector:"#"+this.videoFrameId,isAutoplay:!0}},dataOptionsRegular(){return JSON.stringify(this.options)},dataSrc(){return"https://www.youtube-nocookie.com/"+this.videoParsed.id},embedSrc(){return YoutubePlayer$1.getEmbedSrc(this.videoParsed.id,this.options.isAutoplay)},dataCaption(){return this.videoParsed.headline}},mounted(){var t,e,i;(i=(e=(t=$==null?void 0:$.HSCore)==null?void 0:t.components)==null?void 0:e.HSFancyBox)==null||i.init($(this.$refs.lightbox))},methods:{isReversed(){return this.variant==="reversed"},handleButtonClick(){this.isPlayed=!0},handleClose(){this.isPlayed=!1}},data(){return{isPlayed:!1}},props:{video:Object,variant:String,spacing:String,overlapping:String,level:{default:"h4"}},template:`
    <div :class="videoClass" :onclick="onClick">
      <wrapper class="row align-items-end no-gutters" :hideContainer="!isVariantRow">
        <div :class="videoPlayerClass" :id="videoId" data-utility-animation-step="1">
          <template v-if="videoParsed.lightbox">
            <a class="js-video-button media-viewer video-player-btn" href="javascript:;" :data-src="dataSrc" :data-caption="dataCaption" :data-hs-fancybox-options="dataOptionsLightBox" ref="lightbox">
              <div class="img-fluid" >
                <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt">
              </div>
              <span class="media-viewer-container">
                <span class="video-player-icon">
                  <i class="fas fa-play"></i>
                </span>
              </span>
            </a>
          </template>
          <template v-else>
            <div class="img-fluid video-player-preview">
              <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt">
            </div>
            <template v-if="videoParsed.id" >
              <a class="js-inline-video-player video__player-btn video-player-btn video-player-centered" href="javascript:;" :data-hs-video-player-options="dataOptionsRegular" ref="video-player" :onclick="handleButtonClick">
                <span class="video-player-icon video__player-icon">
                  <i class="fas fa-play"></i>
                </span>
              </a>
            </template>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe v-if="isPlayed" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" :src="embedSrc" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"></iframe>
            </div>
          </template>
        </div>
        <template v-if="videoParsed.headline">
          <div :class="videoContentClass" :onclick="onClickVideoContent" data-utility-animation-step="1">
            <div class="row no-gutters d-flex flex-wrap">
              <template v-if="videoParsed.logo">
                <div class="video__logo col-lg-5 order-lg-2 pb-3 pb-lg-0">
                  <v-img :img="videoParsed.logo" :cloudinary="true" :alt="videoParsed.logoAlt">
                </div>
                <div class="col-lg-7 order-lg-1">
                  <headline :level="level" :text="videoParsed.headline" :classes="headlineClasses">
                </div>
              </template>
              <template v-else>
                <div class="col-lg-12 order-lg-1">
                  <headline :level="level" :text="videoParsed.headline" :classes="headlineClasses">
                </div>
              </template>
              <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3" v-if="videoParsed.text" v-html="videoParsed.text"></div>
              <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3" v-if="videoParsed.date">
                {{ videoParsed.date }}
              </div>
            </div>
            <div class="pt-4 pt-lg-6 pb-6" v-if="videoParsed.ctaText">
              <cta :text="videoParsed?.ctaText" :href="videoParsed?.ctaHref" :link="videoParsed?.link" :target="videoParsed?.target" :type="videoParsed?.type">
            </div>
          </div>
        </template>
      </wrapper>
    </div>
    `},__vite_glob_0_151=Object.freeze(Object.defineProperty({__proto__:null,default:videoInner},Symbol.toStringTag,{value:"Module"})),wrapperSlotItems={tagName:"wrapper-slot-items",props:{items:{default:[]}},render(){const t=window.vueH,e=this.items(),i=typeof e[0].type=="symbol"?e[0].children:e,s=[];return i.length===0?null:(i.forEach(r=>{const a=t("div",{class:"wrapper-slot-items__item"},r);s.push(a)}),s)}},__vite_glob_0_152=Object.freeze(Object.defineProperty({__proto__:null,default:wrapperSlotItems},Symbol.toStringTag,{value:"Module"})),wrapper={tagName:"wrapper",computed:{classList(){return["wrapper vue-component",this.classes?this.classes:null,this.hideContainerClass?"":"container"]}},props:{hideContainer:{default:!1},hideContainerClass:{default:!1},classes:{default:""}},template:`
    <template v-if="!hideContainer">
      <div :class="classList">
        <slot></slot>
      </div>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  `},__vite_glob_0_153=Object.freeze(Object.defineProperty({__proto__:null,default:wrapper},Symbol.toStringTag,{value:"Module"})),components=Object.assign({"./components/accordion.js":__vite_glob_0_0,"./components/ad-block-info.js":__vite_glob_0_1,"./components/aside-wrapper.js":__vite_glob_0_2,"./components/author-avatar.js":__vite_glob_0_3,"./components/author-header.js":__vite_glob_0_4,"./components/authors.js":__vite_glob_0_5,"./components/awards.js":__vite_glob_0_6,"./components/back-to-top.js":__vite_glob_0_7,"./components/badge.js":__vite_glob_0_8,"./components/blog-recent.js":__vite_glob_0_9,"./components/blog.js":__vite_glob_0_10,"./components/card.js":__vite_glob_0_11,"./components/carousel.js":__vite_glob_0_12,"./components/check-card.js":__vite_glob_0_13,"./components/contact.js":__vite_glob_0_14,"./components/content-scroller.js":__vite_glob_0_15,"./components/cta-list.js":__vite_glob_0_16,"./components/cta.js":__vite_glob_0_17,"./components/dropdown.js":__vite_glob_0_18,"./components/event-overview.js":__vite_glob_0_19,"./components/event-teaser.js":__vite_glob_0_20,"./components/event.js":__vite_glob_0_21,"./components/fab-button.js":__vite_glob_0_22,"./components/fab-hint.js":__vite_glob_0_23,"./components/faq.js":__vite_glob_0_24,"./components/feature-grid-item.js":__vite_glob_0_25,"./components/feature-grid.js":__vite_glob_0_26,"./components/feature-list.js":__vite_glob_0_27,"./components/filter-bar.js":__vite_glob_0_28,"./components/footer.js":__vite_glob_0_29,"./components/form-attachments.js":__vite_glob_0_30,"./components/form-checkbox.js":__vite_glob_0_31,"./components/form-checkboxes.js":__vite_glob_0_32,"./components/form-fields.js":__vite_glob_0_33,"./components/form-radio.js":__vite_glob_0_34,"./components/form-radios.js":__vite_glob_0_35,"./components/form-select.js":__vite_glob_0_36,"./components/formular.js":__vite_glob_0_37,"./components/globals.js":__vite_glob_0_38,"./components/google-map-entry.js":__vite_glob_0_39,"./components/google-map.js":__vite_glob_0_40,"./components/grid-list.js":__vite_glob_0_41,"./components/grid.js":__vite_glob_0_42,"./components/header.js":__vite_glob_0_43,"./components/headline-row.js":__vite_glob_0_44,"./components/headline.js":__vite_glob_0_45,"./components/hero-text-image.js":__vite_glob_0_46,"./components/hero.js":__vite_glob_0_47,"./components/icon-blocks.js":__vite_glob_0_48,"./components/icon.js":__vite_glob_0_49,"./components/icons/arrow-curl.js":__vite_glob_0_50,"./components/icons/arrow-external.js":__vite_glob_0_51,"./components/icons/arrow-narrow.js":__vite_glob_0_52,"./components/icons/arrow.js":__vite_glob_0_53,"./components/icons/bin.js":__vite_glob_0_54,"./components/icons/check-mark.js":__vite_glob_0_55,"./components/icons/check.js":__vite_glob_0_56,"./components/icons/close.js":__vite_glob_0_57,"./components/icons/computer-shield.js":__vite_glob_0_58,"./components/icons/email-action-unread.js":__vite_glob_0_59,"./components/icons/emergency.js":__vite_glob_0_60,"./components/icons/expand.js":__vite_glob_0_61,"./components/icons/hand.js":__vite_glob_0_62,"./components/icons/image-credits.js":__vite_glob_0_63,"./components/icons/info.js":__vite_glob_0_64,"./components/icons/list-view.js":__vite_glob_0_65,"./components/icons/magnifier.js":__vite_glob_0_66,"./components/icons/mail.js":__vite_glob_0_67,"./components/icons/meerkat.js":__vite_glob_0_68,"./components/icons/menu.js":__vite_glob_0_69,"./components/icons/minus.js":__vite_glob_0_70,"./components/icons/phone-charger.js":__vite_glob_0_71,"./components/icons/phone-mail.js":__vite_glob_0_72,"./components/icons/phone.js":__vite_glob_0_73,"./components/icons/pin.js":__vite_glob_0_74,"./components/icons/plus-minus.js":__vite_glob_0_75,"./components/icons/plus.js":__vite_glob_0_76,"./components/icons/quotes.js":__vite_glob_0_77,"./components/icons/rocket.js":__vite_glob_0_78,"./components/icons/smile.js":__vite_glob_0_79,"./components/icons/strategy-split.js":__vite_glob_0_80,"./components/icons/tile-view.js":__vite_glob_0_81,"./components/icons/world.js":__vite_glob_0_82,"./components/icons/x-mark.js":__vite_glob_0_83,"./components/image-block.js":__vite_glob_0_84,"./components/image-list.js":__vite_glob_0_85,"./components/img-filter.js":__vite_glob_0_86,"./components/img.js":__vite_glob_0_87,"./components/intro-text.js":__vite_glob_0_88,"./components/job-list-detail.js":__vite_glob_0_89,"./components/job-list-entry.js":__vite_glob_0_90,"./components/job-list.js":__vite_glob_0_91,"./components/letter-switcher.js":__vite_glob_0_92,"./components/link-list.js":__vite_glob_0_93,"./components/list-container.js":__vite_glob_0_94,"./components/list.js":__vite_glob_0_95,"./components/logo-list.js":__vite_glob_0_96,"./components/lottie.js":__vite_glob_0_97,"./components/modal-application.js":__vite_glob_0_98,"./components/modal.js":__vite_glob_0_99,"./components/people-square.js":__vite_glob_0_100,"./components/person-quote.js":__vite_glob_0_101,"./components/post-teaser.js":__vite_glob_0_102,"./components/pricing-product.js":__vite_glob_0_103,"./components/product-blocks.js":__vite_glob_0_104,"./components/product-stage.js":__vite_glob_0_105,"./components/quotes.js":__vite_glob_0_106,"./components/screenshot.js":__vite_glob_0_107,"./components/scroll-arrow.js":__vite_glob_0_108,"./components/search.js":__vite_glob_0_109,"./components/services.js":__vite_glob_0_110,"./components/shape-animation.js":__vite_glob_0_111,"./components/shape-circle-within-square.js":__vite_glob_0_112,"./components/shape-fast-forward.js":__vite_glob_0_113,"./components/shape-four-squares.js":__vite_glob_0_114,"./components/shape-four-triangles.js":__vite_glob_0_115,"./components/shape-half-square.js":__vite_glob_0_116,"./components/shape-moving-eye.js":__vite_glob_0_117,"./components/shape-security-eye.js":__vite_glob_0_118,"./components/shape-semi-circle.js":__vite_glob_0_119,"./components/shape-square-circle.js":__vite_glob_0_120,"./components/shape-triangles-to-center.js":__vite_glob_0_121,"./components/shape.js":__vite_glob_0_122,"./components/shapes/l-block.js":__vite_glob_0_123,"./components/shapes/s-block.js":__vite_glob_0_124,"./components/shapes/square.js":__vite_glob_0_125,"./components/shapes/t-block.js":__vite_glob_0_126,"./components/site-icons.js":__vite_glob_0_127,"./components/slider.js":__vite_glob_0_128,"./components/slot-items.js":__vite_glob_0_129,"./components/socials.js":__vite_glob_0_130,"./components/step-list.js":__vite_glob_0_131,"./components/success-story.js":__vite_glob_0_132,"./components/svg-shape.js":__vite_glob_0_133,"./components/tab-list.js":__vite_glob_0_134,"./components/tag-cloud.js":__vite_glob_0_135,"./components/tag.js":__vite_glob_0_136,"./components/teaser.js":__vite_glob_0_137,"./components/testimonial-list.js":__vite_glob_0_138,"./components/testimonial-teaser.js":__vite_glob_0_139,"./components/testimonials-detail.js":__vite_glob_0_140,"./components/testimonials-slider.js":__vite_glob_0_141,"./components/text-animation.js":__vite_glob_0_142,"./components/text-icon-animation.js":__vite_glob_0_143,"./components/text-image-list.js":__vite_glob_0_144,"./components/text-image.js":__vite_glob_0_145,"./components/text-teaser.js":__vite_glob_0_146,"./components/timeline.js":__vite_glob_0_147,"./components/toggle-form.js":__vite_glob_0_148,"./components/v-img.js":__vite_glob_0_149,"./components/video-frame.js":__vite_glob_0_150,"./components/video-inner.js":__vite_glob_0_151,"./components/wrapper-slot-items.js":__vite_glob_0_152,"./components/wrapper.js":__vite_glob_0_153}),componentRegistry={};for(const t in components){const e=t.split("/").pop().replace(/\.\w+$/,"");componentRegistry[e]=vue.defineAsyncComponent(()=>Promise.resolve(components[t]))}const component=componentRegistry,de={posts:"Einträge",address:"Adresse",follow:"Folgen",full_time:"Vollzeit",part_time:"Teilzeit",contract:"Leiharbeitszeit",gender:"(m/w/d)",formAttachmentsWrongType:"Bitte wähle ein gültiges Dateiformat und achte darauf, dass der Dateiname keine Sonderzeichen enthält.",formAttachmentsMaxFiles:"Max. %s Dateien",formAttachmentsMaxSize:"Eine oder mehrere Dateien sind zu groß.",onlyLanguage:"German only",moreEvents:"Weitere Termine",positionTypePermanently:"Festanstellung",positionTypeInternship:"Praktikum oder Werkstudententätigkeit",positionTypeTraining:"Ausbildung oder Traineeprogramm",positionTypeStudent:"Werkstudierende",filterAuthors:"Autoren",filterTopics:"Themen",filterTags:"Tags",clearAll:"Alles löschen",search:"Suche",apply:"Anwenden",reset:"Zurücksetzen",jobListEmpty:"Aktuell haben wir keine Stellenangebote in dieser Sprache.",imageCredits:"Bildnachweis"},index$2=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),en={posts:"Posts",address:"Address",follow:"Follow",full_time:"Full-Time",part_time:"Part-Time",contract:"Contract work",gender:"(m/f/d)",formAttachmentsWrongType:"Please choose a valid file format and make sure that the file name does not contain any special characters.",formAttachmentsMaxFiles:"Max. %s Files",formAttachmentsMaxSize:"One or more files are too large.",onlyLanguage:"English only",moreEvents:"More events",positionTypePermanently:"Permanent",positionTypeInternship:"Internship",positionTypeTraining:"Trainee",positionTypeStudent:"Working Students",filterAuthors:"Authors",filterTopics:"Topics",filterTags:"Tags",clearAll:"Clear all",search:"Search",apply:"Apply",reset:"Reset",jobListEmpty:"We currently have no positions in this language.",imageCredits:"Picture Credits"},index$1=Object.freeze(Object.defineProperty({__proto__:null,default:en},Symbol.toStringTag,{value:"Module"})),es={posts:"Entradas",address:"Dirección",follow:"Seguir",full_time:"Tiempo completo",part_time:"Tiempo parcial",contract:"Contrato de trabajo",gender:"(h/m/d)",formAttachmentsWrongType:"Elija un formato de archivo válido y asegúrese de que el nombre del archivo no contiene caracteres especiales.",formAttachmentsMaxFiles:"Máx. %s archivos",formAttachmentsMaxSize:"Uno o más archivos son demasiado grandes.",onlyLanguage:"Sólo español",moreEvents:"Otras fechas",positionTypePermanently:"Puesto permanente",positionTypeInternship:"Prácticas",positionTypeTraining:"Educación",positionTypeStudent:"Estudiantes que trabajan",filterAuthors:"Autores",filterTopics:"Temas",filterTags:"Tags",clearAll:"Borrar todo",search:"Buscar en",apply:"Aplicar",reset:"Reiniciar",jobListEmpty:"Actualmente no tenemos posiciones en este idioma.",imageCredits:"Créditos de las fotos"},index=Object.freeze(Object.defineProperty({__proto__:null,default:es},Symbol.toStringTag,{value:"Module"}));class Anchor{constructor(){const e=this.getHash();this.idSelector=`[id="${e.substring(1)}"]:not([role="tabpanel"])`,this.idTarget=document.querySelector(this.idSelector),this.idTarget&&Tools.scrollIntoView(this.idTarget,!0),this.targetSelector=`a[href^="${e}"]`,this.productStageSelector=".product-stage",this.target=document.querySelector(this.targetSelector),this.links=document.querySelectorAll('a[href^="#"]:not([data-toggle])'),this.handleTargetClick(),this.bindEvents()}hasProductStage(){return!!document.querySelector(this.productStageSelector)}bindEvents(){var e;(e=this.links)==null||e.forEach(i=>{i.addEventListener("click",this.handleClick.bind(this))})}handleTargetClick(){!this.idTarget&&this.target&&this.hasProductStage()&&this.handleAfterClick(this.target,!0)}handleClick(e){const i=e.currentTarget,s=i==null?void 0:i.getAttribute("href"),r=document.querySelector(`a[href="${s}"][data-toggle]`);this.handleAfterClick(r)}handleAfterClick(e,i){e&&(Tools.scrollIntoView(e,i),e.click())}getHash(){return window.location.hash}static init(){this.instances=[],this.instances.push(new this)}}z(Anchor,"rootSelector",""),z(Anchor,"instances",[]);const anchor=Object.freeze(Object.defineProperty({__proto__:null,default:Anchor},Symbol.toStringTag,{value:"Module"})),yt=class yt{constructor(e){var i;this.root=e,this.code=this.root.dataset.analytics,this.parent=Tools.getParent(this.root,Form$1.rootSelector),this.formInstance=Form$1.initElement(this.parent,{noEvents:!0}),this.form=(i=this.formInstance)==null?void 0:i.form,this.bindEvents()}isInForm(){return!!this.form}bindEvents(){var e;this.isInForm()?(e=this.form)==null||e.addEventListener("submit",this.handleSubmit.bind(this)):this.root.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.track(void 0,()=>{})}handleSubmit(e){e.stopImmediatePropagation(),e.preventDefault(),this.isFormValidated(e)&&this.track(void 0,()=>{this.form.submit()})}isFormValidated(e){var i;return((i=this.formInstance)==null?void 0:i.validate(e))&&this.formInstance.triggerExternalValidation()}track(e,i){yt.track(this.code,i,e)}static isGALoaded(){return dataLayer.filter(e=>e.event==="gtm.dom").length>0}static track(e,i,s){window.gtag&&e&&yt.isGALoaded()?window.gtag("event","conversion",{send_to:e,event_callback:i}):(console.error("GTag not found or Collect not loaded"),i())}static init(){this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),e=>{this.instances.push(new this(e))})}};z(yt,"rootSelector","[data-analytics]"),z(yt,"instances",[]);let Analytics=yt;const dataAn=Object.freeze(Object.defineProperty({__proto__:null,default:Analytics},Symbol.toStringTag,{value:"Module"}));class Animate{constructor(){}start({duration:e,timing:i,draw:s}){const r=performance.now();this.requestId;const a=this;this.requestId=requestAnimationFrame(function n(l){let o=(l-r)/e;o>1&&(o=1);const h=i(o);s(h),o<1&&(a.requestId=requestAnimationFrame(n))})}pause(){cancelAnimationFrame(this.requestId)}}z(Animate,"easing",{linear(e){return e},easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}});class ToggleSwitch{constructor(e){var i;this.root=e,this.targetSelector=".js-toggle-switch",this.target=this.root.querySelector(this.targetSelector),this.duration=400,this.parsePricingData=(i=this.root.querySelector("[data-pricing]"))==null?void 0:i.dataset.pricing,this.bindEvents(),this.initPrices()}getTargetSelectors(e){const s=JSON.parse(e.dataset.toggleSwitchOptions).targetSelector.split(","),r=[];for(let a=0;a<s.length;a++){const n=s[a].replace(/\s/g,"");r.push(n)}return r}handleChange(e){const i=e.currentTarget,s=i.checked,a=JSON.parse(i.dataset.toggleSwitchOptions).targetSelector.split(","),n=a.some(l=>l.includes("pricing"));for(let l=0;l<a.length;l++){const o=a[l].replace(/\s/g,"");this.switchData(o,s,n)}[].forEach.call(document.querySelectorAll("[data-alternative-href]"),l=>{this.switchButtonHrefs(l,s)})}switchButtonHrefs(e,i){e.dataset.originalHref||(e.dataset.originalHref=e.href),e.href=i?e.dataset.originalHref:e.dataset.alternativeHref}pricingData(){return this.parsePricingData?JSON.parse(this.parsePricingData):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"}}priceFormatter(){const e=this.pricingData();return new Intl.NumberFormat(e.format,{style:"currency",currency:e.currency,maximumFractionDigits:2})}switchAnimation(e,i,s){new Animate().start({duration:this.duration,timing:Animate.easing.easeInOutCubic,draw:a=>{const n=a*(s-i)+i;this.updatePrices(e,n)}})}updatePrices(e,i){const s=i.replace?parseFloat(i.replace(/,/,".")):i,a=this.priceFormatter().format(s);e.innerHTML=a}initPrices(){this.getTargetSelectors(this.target).forEach(i=>{document.querySelectorAll(i).forEach(r=>{r.dataset.currencyFormat!==void 0&&this.updatePrices(r,r.innerHTML)})})}switchData(e,i,s){const r=document.querySelectorAll(e);for(let a=0;a<r.length;a++){const n=r[a];s?this.handlePriceSwitch(n,i):this.handleForms(n,e)}}handlePriceSwitch(e,i){const s=JSON.parse(e.dataset.toggleSwitchItemOptions),r=i?s.monthly:s.annual,a=i?s.annual:s.monthly;this.switchAnimation(e,r,a)}handleForms(e,i){const s=e.className.includes(State.HIDDEN),r=i.startsWith(".")?i.substring(1):i;e.className=r+" "+(s?"":State.HIDDEN)}bindEvents(){this.target.addEventListener("change",this.handleChange.bind(this))}static init(){this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),e=>{this.instances.push(new this(e))})}}z(ToggleSwitch,"rootSelector",".toggle-switch");const toggleSwitch=Object.freeze(Object.defineProperty({__proto__:null,default:ToggleSwitch},Symbol.toStringTag,{value:"Module"}));class Back extends BaseComponent{constructor(e,i){super(e,i),this.init()}init(){this.canGoBack()&&(this.root.classList.add(State.SHOW),this.bindEvents())}bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}canGoBack(){return document.referrer.indexOf(document.location.host)!==-1}handleClick(e){e.stopImmediatePropagation(),window.history.back()}}z(Back,"rootSelector",".back");const back=Object.freeze(Object.defineProperty({__proto__:null,default:Back},Symbol.toStringTag,{value:"Module"}));class BackToTop extends BaseComponent{constructor(e,i){super(e,i),this.init()}init(){this.bindEvents()}bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}handleClick(){Tools.scrollToTop()}}z(BackToTop,"rootSelector",".back-to-top");const backToTop=Object.freeze(Object.defineProperty({__proto__:null,default:BackToTop},Symbol.toStringTag,{value:"Module"}));class Contact extends BaseComponent{constructor(e,i){super(e,i),this.mailSelector='a[href^="mailto:"]',this.formSelector=".contact__form",this.boxSelector=".contact__box",this.mail=this.root.querySelector(this.mailSelector),this.form=this.root.querySelector(this.formSelector),this.box=this.root.querySelector(this.boxSelector),this.init()}init(){this.bindEvents()}bindEvents(){!this.mail||!this.form||!this.box||(this.mail.addEventListener("click",this.handleClick.bind(this)),document.addEventListener(Events.FAB_BUTTON_CLOSE,this.reset.bind(this)))}handleClick(e){e.preventDefault();const i=this.root.offsetHeight,s=i+"px";this.root.classList.add(State.SHOW),this.root.style.height=s,this.form.style.height=s;const r=this.form.scrollHeight;if(r<i)return;const n=r+40+"px";this.root.style.height=n,this.form.style.height=n}reset(){var e;this.root.classList.remove(State.SHOW),this.form.style.height="",this.root.style.height="",(e=this.form.querySelector("form"))==null||e.reset()}}z(Contact,"rootSelector",".contact.is-collapsed");const contact=Object.freeze(Object.defineProperty({__proto__:null,default:Contact},Symbol.toStringTag,{value:"Module"})),_t=class _t extends BaseComponent{constructor(e,i){super(e,i),this.iconSelector=".fab-button__icon",this.linkSelector=".fab-trigger",this.modalSelector=".fab-button__modal",this.closeSelector=".fab-button__close",this.icon=this.root.querySelector(this.iconSelector),this.link=document.querySelectorAll(this.linkSelector),this.modal=this.root.querySelector(this.modalSelector),this.close=this.root.querySelector(this.closeSelector),this.resetDelay=300,this.init()}init(){this.bindEvents()}hasTrigger(){return this.root.classList.contains("fab-button--has-trigger")}bindEvents(){var e;if(!this.icon||!this.modal||this.hasTrigger())return this.bindTriggerEvent();this.link.forEach(i=>{i.addEventListener("click",this.handleClick.bind(this))}),this.icon.addEventListener("click",this.handleClick.bind(this)),(e=this.close)==null||e.addEventListener("click",this.handleClose.bind(this)),document.addEventListener(Events.FORM_AJAX_SUBMIT,this.handleSubmit.bind(this)),window.addEventListener("click",this.handleOutsideClick.bind(this)),this.modal.style="opacity: 1",this.modal.style=""}bindTriggerEvent(){this.icon.addEventListener("click",this.handleTriggerClick.bind(this))}handleTriggerClick(e){const s=e.currentTarget.dataset.triggerId;document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL,{detail:{id:s}}))}handleOutsideClick(e){this.root.classList.contains(State.EXPANDED)&&Tools.isOutsideOf(_t.rootSelector.substring(1),e)&&Tools.isOutsideOf(this.linkSelector.substring(1),e)&&this.handleClose()}handleSubmit(){this.handleClose()}handleClose(){this.handleClick(),setTimeout(()=>{document.dispatchEvent(new CustomEvent(Events.FAB_BUTTON_CLOSE,{detail:{target:this.root}}))},this.resetDelay)}handleClick(){this.root.classList.toggle(State.EXPANDED),this.modal.classList.toggle(State.OFF_SCREEN),this.modal.classList.contains(State.OFF_SCREEN)&&(this.modal.style="")}};z(_t,"rootSelector",".fab-button");let FabButton=_t;const fabButton=Object.freeze(Object.defineProperty({__proto__:null,default:FabButton},Symbol.toStringTag,{value:"Module"}));class GoogleMaps extends BaseComponent{constructor(e,i){super(e,i),this.mapsSelector=".google-maps__map",this.maps=this.root.querySelector(this.mapsSelector),this.init()}init(){var s,r;const e=(r=(s=$==null?void 0:$.HSCore)==null?void 0:s.components)==null?void 0:r.HSLeaflet;if(e===null||L===null)return;const i=e.init(this.maps);i.fire("movestart"),i._rawPanBy([i.getCenter().lng,i.getCenter().lat]),i.fire("move"),i.fire("moveend"),L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{id:"mapbox/streets-v11"}).addTo(i)}}z(GoogleMaps,"rootSelector",".google-maps");const googleMaps=Object.freeze(Object.defineProperty({__proto__:null,default:GoogleMaps},Symbol.toStringTag,{value:"Module"}));class HeroTextImage extends BaseComponent{constructor(e,i){super(e,i),this.videoSelector=".hero-text-image__video video",this.videoAnimatinoSelector=".hero-video__animation",this.ctaSelector=".cta",this.videos=this.root.querySelectorAll(this.videoSelector),this.ctaList=this.root.querySelectorAll(this.ctaSelector),this.classList=this.root.classList,this.animationDelay=6400,this.init()}init(){this.playDelayed(),this.bindEvents()}isSecurity(){return this.classList.contains("hero--security")}isCareer(){return this.classList.contains("hero--career")}bindEvents(){const e=this.isSecurity()||this.isCareer();!this.ctaList||!e||this.ctaList.forEach(i=>{i.addEventListener("click",this.handleClick.bind(this))})}isValidSelector(e){return e.indexOf("#")!==-1}handleClick(e){const s=e.currentTarget.getAttribute("href");if(!this.isValidSelector(s))return;e.preventDefault(),e.stopImmediatePropagation();const r=document.querySelector(s);r&&Tools.scrollIntoView(r,!0)}playDelayed(){setTimeout(()=>{[].forEach.call(this.root.querySelectorAll(this.videoAnimatinoSelector),e=>{e.classList.add(State.SHOW),e.style.height=e.scrollHeight+"px"})},this.animationDelay)}}z(HeroTextImage,"rootSelector",".hero-text-image");const heroTextImage=Object.freeze(Object.defineProperty({__proto__:null,default:HeroTextImage},Symbol.toStringTag,{value:"Module"}));class PricingSlider extends BaseComponent{constructor(e,i){var a;super(e,i),this.selectedValue=0,this.products=null,this.range=null;const s=(a=document.querySelector("[data-pricing]"))==null?void 0:a.dataset.pricing,r=s?JSON.parse(s):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};this.priceFormatter=new Intl.NumberFormat(r.format,{style:"currency",currency:r.currency,maximumFractionDigits:0}),this.selectedPlan=["monthly","annual"].includes(r.defaultPlan)?r.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),this.currentPrice=0,this.init()}init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}bindEvents(){const e=this.root.querySelector(".pricing-slider__info");e&&e.addEventListener("click",this.handleInfoClick.bind(this)),window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}handleInfoClick(){const e=this.root.querySelector(".pricing-slider__modal");Modal.open(e)}handlePricingSlider({from:e}){this.selectedValue=parseInt(e);const i=this.getRecommendedProduct(this.selectedValue);if(!i)return;const s=this.selectedValue-i.value;var r=parseInt(i.price[this.selectedPlan])+s*parseFloat(i.additionalUsersFee[this.selectedPlan]);this.currentPrice=r,this.updateElements(this.priceFormatter.format(r),i.title,this.formatExtraUsers(s))}getRecommendedProduct(e){let i=null;const s=`No products found for value ${e} in site.data.products.list`;if(this.products)return this.products.forEach(function(r){r.value<=e&&(i=r)}),i||console.error(s),i;console.error(s)}formatExtraUsers(e){const i=this.range.unit;return e>0?"+ "+e+" "+i:""}prepare(e){const i=document.querySelector(".js-slider-data"),s=5;this.products=JSON.parse(i.dataset.products),this.range=JSON.parse(i.dataset.range),this.selectedValue=e.from,setTimeout(()=>{this.fixText()},s)}fixText(){const e=document.querySelector(".irs-single"),i=e.innerHTML;i.includes(this.range.unit)||(e.innerHTML=[i,this.range.unit].join(" "))}updateElements(e,i,s){const r=document.querySelector(".js-result-price"),a=document.querySelector(".js-result-product"),n=document.querySelector(".js-result-extra");r.innerHTML=e,a.innerHTML=i,n.innerHTML=s,this.fixText()}}z(PricingSlider,"rootSelector",".pricing-slider");const pricingSlider=Object.freeze(Object.defineProperty({__proto__:null,default:PricingSlider},Symbol.toStringTag,{value:"Module"}));class TagCloud extends BaseComponent{constructor(e,i){var s,r;super(e,i),this.root=e,this.container=e.querySelector(".tag-cloud__container"),this.itemsContainer=e.querySelector(".tag-cloud__items"),this.itemLinkClass="tag-cloud__item-link",this.slider=e.querySelector(".tag-cloud__slider"),this.items=(s=this.itemsContainer)!=null&&s.dataset.items?JSON.parse((r=this.itemsContainer)==null?void 0:r.dataset.items):[],this.maxCoordinate=40,this.itemsPerOuterRow=3,this.minCoordinate=10,this.minBlur=2,this.maxBlur=10,this.maxDelay=70,this.minDelay=550,this.maxWeight=3,this.isMouseOut=!0,this.animate=new Animate,this.delay=1e3,this.velocity=30,this.startPosition=0,this.endPosition=0,this.gotDragged=!1,this.firstTouch=!0,this.temporaryTouchPosition=0,this.temporaryDiff=0,this.percentageInViewport=30,this.init()}init(){this.weightingElements(),this.addCorners(),this.appendItems(),this.hasScrollAnimation()&&(this.setDuration(),this.addScrollAnimation()),document.dispatchEvent(new CustomEvent(Events.DIMENSIONS_CHANGED,{detail:this.root})),this.bindEvents()}hasScrollAnimation(){return Tools.isBelowBreakpoint("md")&&Tools.isInViewportPercent(this.root,this.percentageInViewport)}bindEvents(){this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach(e=>{e.addEventListener("mouseover",i=>{this.handleMouseOver(i==null?void 0:i.currentTarget)})}),this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach(e=>{e.addEventListener("mouseout",i=>{this.handleMouseOut(i==null?void 0:i.currentTarget)})}),window.addEventListener("resize",()=>{this.handleScroll(),this.endPosition=this.slider.scrollWidth-this.slider.clientWidth,this.setDuration()}),document.addEventListener("scroll",()=>{this.handleScroll()}),this.slider.addEventListener("touchstart",()=>{this.hasScrollAnimation()&&(clearTimeout(this.timeout),this.handleTouchStart())}),this.slider.addEventListener("touchend",()=>{this.hasScrollAnimation()&&(this.timeout=setTimeout(()=>{this.addScrollAnimation()},this.delay))})}stopScrollAnimation(){this.animate.pause(),this.isInScrollAnimation=!1}handleTouchStart(){this.stopScrollAnimation(),this.gotDragged=!0}handleTouchEnd(){const e=this.slider.scrollLeft,i=Math.abs(this.endPosition-e),s=Math.abs(this.startPosition-e),r=Animate.easing.linear,a=i<s,n=e,l=a?this.startPosition:this.endPosition,o=!!a,h=Math.abs(n-l)/Math.abs(this.startPosition-this.endPosition),u=this.duration*h;this.moveTo(n,l,u,r,o)}handleMouseOut(e){window.cancelAnimationFrame(this.animate.requestId),e.style.setProperty("filter",null)}handleMouseOver(e){const i=window.getComputedStyle(e),s=i==null?void 0:i.filter.replace("blur(","").replace("px)","");this.animate.start({duration:900,timing:Animate.easing.easeInOutCubic,draw:a=>{const n=s-s*a;e.style.setProperty("filter",`blur(${n}px)`,"important")}})}handleScroll(){if(this.hasScrollAnimation()){if(this.isInScrollAnimation)return;this.addScrollAnimation()}else this.stopScrollAnimation()}addScrollAnimation(){this.isInScrollAnimation=!0,this.endPosition=this.slider.scrollWidth-this.slider.clientWidth,this.handleTouchEnd()}setDuration(){const e=this.slider.clientWidth;this.duration=this.velocity*e}moveTo(e,i,s,r,a){const n=Math.abs(i-e);this.animate.start({duration:s,timing:r,draw:l=>{const o=a?e-n*l:e+n*l,h=a?n*(1-l):n*l;this.slider.scrollLeft=this.gotDragged?o:h,l===1&&(this.gotDragged=!1,this.moveTo(this.startPosition,this.endPosition,s,r,!a))}})}weightingElements(){for(let i=0;i<this.items.length;i++){const s=this.items[i],r=Math.ceil(s.title.length/8);this.items[i].weighting=r>this.maxWeight?this.maxWeight:r}}getCornerPosition(){let e=0,i=0,s=0,r=0;for(let a=0;a<this.items.length;a++){const n=this.items[a];e+=n.weighting,!(e>this.itemsPerOuterRow+1)&&(i=a+1)}for(let a=this.items.length-1;a>0;a--){const n=this.items[a];s+=n.weighting,!(s>3)&&(r=a+1)}return{secondIndex:i,thirdIndex:r}}addCorners(){const e={weighting:0};this.items.unshift(e),this.items.push(e);const i=this.getCornerPosition();this.items.splice(i.secondIndex,0,e),this.items.splice(i.thirdIndex,0,e)}getRandomCoordinate(){let s=this.getRandomNumberBetween(this.minCoordinate,this.maxCoordinate),r=s,a=Math.random()>.5?-1*s:s;return a<0&&(s=a+r/1.1),s/2}getRandomBlur(){return this.getRandomNumberBetween(this.minBlur,this.maxBlur)}getRandomStart(){return this.getRandomNumberBetween(this.minDelay,this.maxDelay)}getRandomNumberBetween(e,i){return Math.floor(Math.random()*(i-e+1))+e}appendItems(){for(let e=0;e<this.items.length;e++){const i=this.items[e],s=2,r=document.createElement("li");if(r.classList.add("tag-cloud__item"),r.setAttribute("data-weight",i.weighting),i.title){const a=document.createElement("a"),l=e%s===0?2:1;a.setAttribute("groupIdentifier",l),a.style.setProperty("--blurry-x1",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-x2",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-x3",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-y1",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-y2",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-y3",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-delay",`${this.getRandomStart()}ms`),a.style.setProperty("--blurry-blur",`${this.getRandomBlur()}px`),a.innerText=i.title,a.classList.add(this.itemLinkClass),r.appendChild(a)}this.itemsContainer.appendChild(r)}}}z(TagCloud,"rootSelector",".tag-cloud");const tagCloud=Object.freeze(Object.defineProperty({__proto__:null,default:TagCloud},Symbol.toStringTag,{value:"Module"}));class TestimonialList extends BaseComponent{constructor(e,i){super(e,i),this.root=e,this.testimonialContainer=this.root.querySelector(".testimonial-list__contents"),this.testimonials=this.root.querySelectorAll(".testimonial-list__content"),this.viewPortPercentageAtScroll=30,this.viewPortPercentageAtLoad=5,this.start()}handleScrollEvent(){this.hiddenTestimonials=this.root.querySelectorAll(`.testimonial-list__content:not(.${State.SHOW})`),this.hiddenTestimonials.forEach(e=>{Tools.isInViewportPercent(e,this.viewPortPercentageAtScroll)&&e.classList.add(State.SHOW)})}currentlyInViewPort(){this.testimonials.forEach(e=>{Tools.isInViewportPercent(e,this.viewPortPercentageAtLoad)&&e.classList.add(State.SHOW)})}start(){this.currentlyInViewPort(),document.addEventListener("scroll",this.handleScrollEvent.bind(this))}}z(TestimonialList,"rootSelector",".testimonial-list");const testimonialList=Object.freeze(Object.defineProperty({__proto__:null,default:TestimonialList},Symbol.toStringTag,{value:"Module"}));class VideoFrame extends BaseComponent{constructor(e){super(e),this.root=e,this.options=e.dataset.hsVideoPlayerOptions,this.options&&(this.options=JSON.parse(this.options),this.videoFrameSelector=this.options.targetSelector,this.parentSelector=this.options.parentSelector,this.videoFrame=this.root.querySelector(this.videoFrameSelector),this.parent=document.querySelector(this.parentSelector),this.videoFrame&&this.init())}init(){this.bindEvents()}bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.setPlayed(),this.openIframe()}setPlayed(){var e;(e=this.parent)==null||e.classList.add("video-frame--played")}openIframe(){this.videoFrame.outerHTML=`
      <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" src="${this.embedSrc()}" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"></iframe>
    `}embedSrc(){return YoutubePlayer$1.getEmbedSrc(this.options.videoId,this.options.isAutoplay)}}z(VideoFrame,"rootSelector",".js-inline-video-player");const videoFrame=Object.freeze(Object.defineProperty({__proto__:null,default:VideoFrame},Symbol.toStringTag,{value:"Module"}));class PageDetail extends BaseComponent{constructor(e,i){super(e,i),this.root=e,this.containerSelector=".page-detail__container",this.headlineSelector=".page-detail__headline",this.ctaSelector=".page-detail__cta .cta",this.introSelector=".page-detail__intro",this.descriptionSelector=".page-detail__description",this.shapeSelector=".page-detail__shape",this.introContentSelector=".page-detail__intro-content",this.badgeSelector=".page-detail__badge",this.detailsSelector=".page-detail__details",this.hasBackClass="page-detail--has-back",this.shape=e.querySelector(this.shapeSelector),this.hasShape()&&(this.introContent=e.querySelector(this.introContentSelector),this.intro=e.querySelector(this.introSelector)),this.loadingDelay=300,this.percentageInViewport=1,this.init()}showBackButton(){if(document.referrer.indexOf(document.location.host)!==-1){if(this.isVueComponent())return;this.root.classList.add(this.hasBackClass)}}init(){this.showBackButton(),this.bindEvents(),this.stopLoading(),this.setStickyPosition(),this.setShapePosition()}hasShape(){return!!this.shape}setStickyPosition(){var a,n,l;if(!this.hasShape()||!this.isInViewport()||!Tools.isUpperBreakpoint())return;const e=Tools.isBelowBreakpoint("lg")?10:-40,i=((a=this.introContent.querySelector(this.badgeSelector))==null?void 0:a.offsetHeight)||0,s=((n=this.introContent.querySelector(this.detailsSelector))==null?void 0:n.offsetHeight)||0,r=((l=this.introContent.querySelector(this.headlineSelector))==null?void 0:l.offsetHeight)||0;this.stickyPosition=i+s+r-e}isVueComponent(){return this.root.classList.contains("vue-component")}stopLoading(){setTimeout(()=>{this.isVueComponent()||this.root.classList.remove(State.LOADING)},this.loadingDelay)}queryElements(){this.back=this.root.querySelector(this.backSelector),this.cta=this.root.querySelector(this.ctaSelector)}bindEvents(){this.queryElements(),document.addEventListener(Events.SCROLL_UPDATE,this.handleScroll.bind(this)),document.addEventListener(Events.WINDOW_RESIZE,this.handleResize.bind(this))}handleScroll(){this.setShapePosition()}setShapePosition(){if(!(!this.hasShape()||!this.isInViewport())){if(!Tools.isUpperBreakpoint())return this.resetShape();this.isStickyShapeEnd()?this.handleStickyShapeEnd():this.isSticky()?(this.shape.classList.add(State.STICKY),this.shape.style.top=-this.stickyPosition+"px"):this.resetShape()}}handleStickyShapeEnd(){this.isStickyEnd()&&(this.shape.classList.add(State.STICKY),this.shape.style.top=-this.stickyPosition-this.getRelativePosition()+"px")}getRelativePosition(){var i;const e=((i=this.intro)==null?void 0:i.style.top.replace("px",""))||0;return e>=0?this.getStickyOffsetTop()-Math.abs(e):this.getStickyOffsetTop()-parseFloat(e)}resetShape(){this.shape.classList.remove(State.STICKY),this.shape.style.top="",this.isStickyEndReached=!1}isSticky(){return window.scrollY>this.stickyPosition}isStickyShapeEnd(){return this.root.getBoundingClientRect().bottom<=window.innerHeight}getHsStickyBlockOptions(){var i;if(this.hsStickyBlockOptions)return this.hsStickyBlockOptions;let e=(i=this.intro)==null?void 0:i.dataset.hsStickyBlockOptions;return e&&(e=JSON.parse(e)),this.hsStickyBlockOptions=e,e}getStickyOffsetTop(){var e;return((e=this.getHsStickyBlockOptions())==null?void 0:e.stickyOffsetTop)||0}isStickyEnd(){var e;return((e=this.intro)==null?void 0:e.style.top)!==this.getStickyOffsetTop()+"px"}isInViewport(){return Tools.isInViewportPercent(this.root,this.percentageInViewport)}handleResize(){this.setStickyPosition(),this.setShapePosition()}}z(PageDetail,"rootSelector",".page-detail");const detail=Object.freeze(Object.defineProperty({__proto__:null,default:PageDetail},Symbol.toStringTag,{value:"Module"}));exports.component=component,exports.default=componentRegistry,Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
