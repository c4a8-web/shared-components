(function(n,y){typeof exports=="object"&&typeof module<"u"?module.exports=y():typeof define=="function"&&define.amd?define(y):(n=typeof globalThis<"u"?globalThis:n||self,n.SharedComponents=y())})(this,function(){"use strict";var Ga=Object.defineProperty;var Ja=(n,y,l)=>y in n?Ga(n,y,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[y]=l;var p=(n,y,l)=>Ja(n,typeof y!="symbol"?y+"":y,l);var m;let n=(m=class{static isInViewportPercent(t,i){const s=t.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth,o={x:s.x,y:s.y,width:s.width,height:s.height},c={x:0,y:0,width:a,height:r},d=o.width*o.height,h=m.intersection(o,c);return i<=h/d*100}static getScrollTop(t){if(!t)return;const i=document.querySelector("header"),s=i?(i==null?void 0:i.offsetHeight)+40:0;return t.getBoundingClientRect().top-s+window.scrollY}static scrollIntoView(t,i){t&&window.scrollTo({top:m.getScrollTop(t),behavior:i?"smooth":"auto"})}static getLang(){return(document.querySelector("html").getAttribute("lang")||this.defaultLang).toLowerCase()}static isNotDefaultLang(){return this.getLang()!==this.defaultLang}static scrollToTop(){m.scrollIntoView(document.querySelector("body"),!0)}static getParentComponent(t){return m.getParent(t,".is-component")}static getParent(t,i){var r;const s=t.parentNode;return s===null||s.tagName==="body"?null:(r=s.parentNode)!=null&&r.querySelector(i)?s:m.getParent(s,i)}static append(t,i){if(t){const s=document.createElement("div");s.innerHTML=i!=null&&i.nodeType?i.outerHTML:i;const r=s==null?void 0:s.children[0];if(r)return t.appendChild(r)}return null}static replace(t,i){t&&i&&(t.innerHTML=i.innerHTML)}static generateUrl(t,i,s){let r;return t&&i&&(r=t.toLowerCase().replace(/\s/g,"-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,"").replace(/\u00dc/,"ue").replace(/\u00c4/,"ae").replace(/\u00d6/,"oe").replace(/\u00fc/,"ue").replace(/\u00e4/,"ae").replace(/\u00f6/,"oe").replace(/\u00df/,"ss"),r=i+m.urlSeperator+r.replace(/-+$/,"")+"-"+s),r}static toBase64(t){return new Promise((i,s)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{const a=r.result.split(",")[1];i(a)},r.onerror=a=>s(a)})}static toSize(t){const i=["Bytes","KB","MB","GB","TB"];if(t==0)return"0 Byte";const s=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return(t/Math.pow(1024,s)).toFixed(1)+" "+i[s]}static camalCaseToSnakeCase(t){return t.replace(/[A-Z]/g,i=>`_${i.toLowerCase()}`)}static animateValue(t,i,s,r,a=m.priceFormatter){let o=null;const c=d=>{o||(o=d);const h=Math.min((d-o)/r,1),u=h*(s-i)+i,S=a.format(u);t.innerHTML=S,h<1&&window.requestAnimationFrame(c)};window.requestAnimationFrame(c)}static isOutsideOf(t,i){const s=i.composedPath?i.composedPath():i.path;return s?!s.some(r=>r.className&&r.className.includes&&r.className.includes(t)):!1}static getExtension(t){return t.split(".").pop()}static validateVueProps(t){var a;const i=(a=t==null?void 0:t.$)==null?void 0:a.propsOptions[0],s=t==null?void 0:t.$props,r={props:{}};return Object.keys(s).map(o=>{let c=s[o];c===""&&(c=i[o].default),r.props[o]=c}),r}static isTrue(t){return t===!0||t==="true"}static capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}static sleep(t){return new Promise(i=>setTimeout(i,t))}static randomRange(t,i){return Math.floor(Math.random()*(i-t+1)+t)}static uuid(){const t=Date.now().toString(16)+Math.random().toString(4)+"0".repeat(16),i=m.randomRange(0,8),s=m.randomRange(0,16);return"u"+[t.substring(i,i+8),t.substring(s,s+4)].join("-").replaceAll(".","9")}static getBreakpoint(){return getComputedStyle(document.body).getPropertyValue("--breakpoint").trim()}static isBelowBreakpoint(t){let i=["xs","sm","md","lg","xl","xxl"];const s=m.getBreakpoint();return i.indexOf(t)>=i.indexOf(s)}static isUpperBreakpoint(){return!m.isBelowBreakpoint("md")}static getYoutubeThumbnail(t){let i;const s=t.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/),r=t.match(/youtu\.be\/(.{11})/);return s?i=s[2]:r&&(i=r[1]),`https://i1.ytimg.com/vi/${i}/maxresdefault.jpg`}static truncateWords(t,i){if(!t)return;const s=t.split(" "),r=s.slice(0,i).join(" ");return s.length>i?r+" ...":r}static stripHtml(t){if(t)return t.replace(new RegExp(/<.*?>/g),"")}static isGermanDate(t){return!!t.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/)}static isStorybook(){return window.STORYBOOK_ENV==="HTML"}static isTestingStorybook(){return document.location.pathname.indexOf(m.storybookPath)!==-1}static getSiteAssetPath(t){return m.isTestingStorybook()?`${m.storybookPath}${t}`:t}static getAssetPath(t){return m.isStorybook()?`../assets/${t}`:`/_includes/shared-components/assets/${t}`}static findRecursive(t,i,s){let r=!1,a,o,c;function d(h,u,S,E){if(!r){if(u(h,o)){r=!0,a=E(h,S);return}for(let F in h)typeof h[F]=="object"&&(h===c&&(o=F),d(h[F],u,h,E))}}return c=t,d(t,i,t,s),a}static storageSave(t,i,s=!0){localStorage.setItem(m.storagePrefix+t,s?JSON.stringify(i):i)}static storageGet(t){return localStorage.getItem(m.storagePrefix+t)}static getJSON(t){var i;if(t&&typeof t=="object"&&((i=Object.keys(t))==null?void 0:i.length)>0)return t;if(t&&typeof t=="string")try{return JSON.parse(t)}catch{console.error("Error parsing JSON:",t);return}}static getElementBgColor(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return;const i=window.getComputedStyle(t).backgroundColor;return i==="rgba(0, 0, 0, 0)"?null:i}static isValidTimeFormat(t){return/^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(t)}static standardizeTimeFormat(t){if(!this.isValidTimeFormat(t))return t;const i="Uhr";let s=t.split("-"),r=s[0].trim();r.includes(":")||(r+=":00"),r.length===4&&(r="0"+r);let a=s[1].trim().replace(` ${i}`,"");return a.includes(":")||(a+=":00"),a.length===4&&(a="0"+a),`${r} - ${a} ${i}`}static convertToDate(t){const i=t.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);if(i){const r=parseInt(i[1],10),a=parseInt(i[2],10)-1,o=parseInt(i[3],10);return new Date(o,a,r)}return null}static XMLtoJSON(t){let i={};if(t.nodeType===Node.ELEMENT_NODE){if(t.attributes.length>0){i["@attributes"]={};for(let s=0;s<t.attributes.length;s++){const r=t.attributes.item(s);i["@attributes"][r.nodeName]=r.nodeValue}}}else(t.nodeType===Node.TEXT_NODE||t.nodeType===Node.CDATA_SECTION_NODE)&&(i=t.nodeValue);if(t.hasChildNodes())for(let s=0;s<t.childNodes.length;s++){const r=t.childNodes.item(s),a=r.nodeName;if(typeof i[a]>"u")i[a]=this.XMLtoJSON(r);else{if(typeof i[a].push>"u"){const o=i[a];i[a]=[],i[a].push(o)}i[a].push(this.XMLtoJSON(r))}}return i}static hasFontSizeClass(t){return t.indexOf("-font-size")!==-1||t.indexOf("font-size-")!==-1}static red(t){return parseInt(t.substring(1,3),16)}static green(t){return parseInt(t.substring(3,5),16)}static blue(t){return parseInt(t.substring(5,7),16)}static hexToRgb(t){let i;if(t.startsWith("--")||t.startsWith("var(")){const c=t.replace(/--|var\(/,"").replace(/\)$/,"");i=getComputedStyle(document.documentElement).getPropertyValue(c).trim()}const s=i||t,r=m.red(s),a=m.green(s),o=m.blue(s);return`${r}, ${a}, ${o}`}static getHash(){return window.location.hash}},p(m,"defaultLang","de"),p(m,"urlSeperator","#"),p(m,"priceFormatter",new Intl.NumberFormat("de-DE",{style:"decimal",maximumFractionDigits:0})),p(m,"storagePrefix","@gab_"),p(m,"storybookPath","/shared-components"),p(m,"decodeHTML",t=>new DOMParser().parseFromString(t,"text/html").documentElement.textContent),p(m,"intersection",(t,i)=>{const s=Math.max(0,Math.min(t.x+t.width,i.x+i.width)-Math.max(t.x,i.x)),r=Math.max(0,Math.min(t.y+t.height,i.y+i.height)-Math.max(t.y,i.y));return s*r}),p(m,"debounce",function(t,i,s){let r;return function(){const a=this,o=arguments;var c=function(){r=null,s||t.apply(a,o)},d=s&&!r;clearTimeout(r),r=setTimeout(c,i),d&&t.apply(a,o)}}),m);const y=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),l={ACTIVE:"active",READY:"is-ready",ERROR:"is-invalid",VALID:"is-valid",SUCCESS:"is-successful",HAS_ERROR:"has-error",HOVERING:"is-hovering",DRAGGING:"is-dragging",HIDDEN:"d-none",INVISIBLE:"is-invisible",EXPANDED:"is-expanded",EXPANDABLE:"is-expandable",OFF_SCREEN:"is-off-screen",COLLAPSED:"is-collapsed",IS_COLLAPSING:"is-collapsing",SHOW:"show",FADE:"fade",INITIALIZED:"is-initialized",LOADING:"is-loading",HIDE_LOADING:"hide-loading",END:"is-end",IS_SCROLLED:"is-scrolled",MODAL_OPEN:"modal--open",HAS_BACKGROUND:"has-background",IS_FULL:"is-full",STICKY:"is-sticky",IN_TRANSITION:"in-transition",IS_STARTING:"is-starting"},ee=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"accordion",computed:{imageWrapperClasses(){return["accordion__floating-image-wrapper",n.isTrue(this.shadowless)===!0?null:"drop-shadow"]},containerClasses(){return["accordion__container utility-animation container vue-component",this.spacing,this.accordion.image?"accordion--has-image":null]},accordionClasses(){return["accordion utility-animation container mt-6 mb-4 my-lg-8 vue-component",this.accordion.image?"accordion--has-image":null]},fallbackImageClasses(){return["accordion__fallback-image-wrapper",n.isTrue(this.shadowless)===!0?null:"drop-shadow",this.showOutsideImage?l.SHOW:null]},columnClasses(){return["col",n.isTrue(this.left)?null:"text-center"]},headlineClasses(){var e;return`accordion__headline  ${(e=this.accordion)==null?void 0:e.headlineClasses}`}},mounted(){this.accordion.tabs&&(this.selectFallbackImage(),this.isUpperBreakpoint()?this.changeOutsideImage():this.outsideImage=this.fallbackImage,this.accordion.tabs.forEach(e=>{this.states.push(!!e.expanded)}))},methods:{isUpperBreakpoint(){return!n.isBelowBreakpoint("md")},selectFallbackImage(){if(!this.fallbackImage){const e=this.getActiveTab();this.fallbackImage=this.accordion.image||(e==null?void 0:e.image),this.fallbackAnimated=this.accordion.image?this.accordion.animated:e.animated}},getActiveTab(){var t;const e=(t=this.accordion)==null?void 0:t.tabs.filter(i=>i.expanded);return e?e[0]:null},handleClick(e){const t=this.states[e];this.states=this.states.map(i=>!1),this.states[e]=!t,this.isUpperBreakpoint()&&this.changeOutsideImage(e),this.allTabsClosed()&&this.changeToFallbackImage()},changeToFallbackImage(){this.showOutsideImage=!0,this.accordion.image=this.fallbackImage,this.outsideImage=this.fallbackImage,this.outsideAnimated=this.fallbackAnimated},changeOutsideImage(e){const t=this.getTabByIndex(e);this.showOutsideImage=!0,this.outsideImage=(t==null?void 0:t.image)||this.fallbackImage,this.outsideAnimated=t!=null&&t.image?t.animated:this.fallbackAnimated},getTabByIndex(e){var t;return typeof e>"u"?this.getActiveTab():(t=this.accordion)==null?void 0:t.tabs[e]},allTabsClosed(){return this.states.filter(e=>e===!0).length===0},getStateByIndex(e){return this.states[e]},getId(e,t,i){return`${i}${e.id}${t}`},isExpanded(e){return e.expanded?"true":"false"},buttonClasses(e){return["accordion__btn btn btn-link btn-block d-flex justify-content-between",e.expanded?null:"collapsed"]},contentClasses(e){return["accordion__content collapse position-static",e.expanded?"show":null]},cardClasses(e){return["accordion__card",this.getStateByIndex(e)?l.EXPANDED:null]},cardStyle(e){return`--utility-animation-index: ${e}`},accordionId(e){return`#${e.id}`},cloudinary(e){return e.cloudinary||!0},getImage(e){return e.image?e.image:this.accordion.image?this.accordion.image:null},getTab(e){return e.image?e:this.accordion}},data(){return{showOutsideImage:!1,outsideImage:!1,outsideAnimated:!1,states:[],fallbackImage:!1,fallbackAnimated:!1}},props:{accordion:Object,shadowless:{default:null},left:{default:null},spacing:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),g={REFRESH_ANIMATE_NUMBERS:"refresh-animate-numbers",FAB_BUTTON_CLOSE:"fab-button-close",FORM_AJAX_SUBMIT:"form-ajax-submit",FORM_RESET:"form-reset",FORM_ATTACHMENT_ERROR:"form-attachment-error",CHILD_HAS_UPDATE:"child-has-update",AD_BLOCK_INFO:"ad-block-info",DIMENSIONS_CHANGED:"dimensions-changed",SCROLL_UPDATE:"scroll-update",WINDOW_RESIZE:"window-resize",OPEN_MODAL:"open-modal",LOAD_MODAL:"load-modal",DROPDOWN_CHANGED:"dropdown-changed",DROPDOWN_OPENED:"dropdown-opened",CARD_TAG_CLICKED:"card-tag-clicked",ENDED:"ended"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),D=class D{constructor(t,i){var s;t&&(this.root=t,this.options=i,(s=this.options)!=null&&s.noInit||this.root.classList.add(l.INITIALIZED))}static getInstancesKey(){return this.rootSelector.substring(1)}static expose(t){window[D.namespacePrefix]||(window[D.namespacePrefix]={});const i=this.getInstancesKey();window[D.namespacePrefix][i]||(window[D.namespacePrefix][i]=[]),window[D.namespacePrefix][i].push(t)}static getInstance(t){const s=window[D.namespacePrefix][this.getInstancesKey()].filter(r=>(r==null?void 0:r.root)===t);return s?s[0]:null}static initElement(t,i){const s=new this(t,i);return this.instances.push(s),this.expose(s),s}static init(t){this.instances=[];const i=t||document,s=`${this.rootSelector}:not(.${l.INITIALIZED})`;[].forEach.call(i.querySelectorAll(s),r=>{this.initElement(r)})}};p(D,"rootSelector",""),p(D,"instances",[]),p(D,"namespacePrefix","baseComponents");let b=D;class J{}p(J,"rootSelector",".form-attachments"),p(J,"base64Selector",".form-attachments__base64");const T=class T extends b{constructor(t,i){var s;super(t,i),t&&(this.root=t,this.formSelector=".form__form",this.gotchaSelector=".form__super-field",this.attachmentSelector='input[type="file"][required]',this.subjectSelector='input[name="_subject"]',this.companySelector='input[id="company"]',this.form=t.querySelector(this.formSelector),this.subject=t.querySelector(this.subjectSelector),this.company=t.querySelector(this.companySelector),this.groups={},this.minLengthOther=1,this.options=i,this.addCustomValidationRules(),this.updateGotcha(),this.addValidation(),this.form&&this.subject&&this.hasUrlParameter()&&this.prefillFormValues(),(s=this.options)!=null&&s.noEvents?this.isCompanyForm()&&this.addSubjectListener():this.bindEvents())}addCustomValidationRules(){window.$&&$.validator&&($.validator.methods.email=function(t,i){return this.optional(i)||T.regularExpression.test(t)})}isCompanyForm(){return!!(this.form&&this.subject&&this.company)}hasUrlParameter(){if(window.location.search!=="")return!0}prefillFormValues(){const t=new URLSearchParams(window.location.search);for(const[i,s]of t.entries())this.prefillFormValue(i,s)}prefillFormValue(t,i){const s=this.form;if(!s)return;const r=s.querySelector(`input[name="${t}"],textarea[name="${t}"]`);r&&(r.value=i)}hasCustomValidation(){return this.root.classList.contains("form--custom-validation")}hasAjaxSubmit(){return this.root.classList.contains("form--ajax")}bindEvents(){(Object.keys(this.groups).length||this.hasCustomValidation()||this.hasAjaxSubmit()||this.isCompanyForm())&&(this.form.addEventListener("submit",this.handleSubmit.bind(this)),this.form.addEventListener("reset",this.handleReset.bind(this)))}addSubjectListener(){this.form.addEventListener("submit",this.handleSubmit.bind(this))}handleReset(){T.reset(this.form)}static reset(t){!t||!t.reset||(t.reset(),[].forEach.call(t.querySelectorAll(`.${l.VALID}`),i=>{i.classList.remove(l.VALID)}),[].forEach.call(t.querySelectorAll(`.${l.ERROR}`),i=>{i.classList.remove(l.ERROR)}))}handleSubmit(t){this.validate(t)&&this.submit(t)}updateSubject(){!this.subject||!this.company||(this.subject.value=this.subject.value+": "+this.company.value)}submit(t){t.stopImmediatePropagation(),t.preventDefault(),this.updateSubject(),this.customSubmit?this.customSubmit(t):this.hasAjaxSubmit()?this.ajaxSubmit():this.form.submit()}static getId(t){return n.uuid()+this.delimiter+t}static getName(t){if(t.includes(this.delimiter)){const i=t.indexOf(this.delimiter);return t.slice(i+this.delimiter.length)}return t}static getFormData(t){const i=new FormData(t),s=[];for(let r of i)s.push(encodeURIComponent(r[0])+"="+encodeURIComponent(r[1]));return s.join("&")}ajaxSubmit(){const t=T.getFormData(this.form);fetch(this.form.action,{method:this.form.method||"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",body:t}).then(i=>{(i.status===200||i.status===302)&&this.ajaxSubmitCompleted()})}ajaxSubmitCompleted(){document.dispatchEvent(new CustomEvent(g.FORM_AJAX_SUBMIT,{detail:{target:this.root}}))}triggerExternalValidation(){let t=!1;if(window.$){const i=$(this.form);if(typeof i.validate!="function")return console.error("form.validate is not a function"),!0;t=i.validate().form()}return t}validate(t){let i=this.triggerExternalValidation();return(!this.isValid(t)||i===!1)&&(t.stopImmediatePropagation(),t.preventDefault(),i=!1),i}isValid(t){t.stopImmediatePropagation();let i=!0,s=!0;this.hasAttachments()&&(i=this.validateAttachments());for(const[r,a]of Object.entries(this.groups))this.isValidGroup(a)||(i=!1,this.addGroupError(a,s),s=!1);return i}validateAttachments(){let t=!0;return[].forEach.call(this.form.querySelectorAll(J.base64Selector),i=>{i.value||(t=!1)}),t||(t=!0,[].forEach.call(this.form.querySelectorAll(this.attachmentSelector),i=>{i.files.length===0&&(t=!1,this.addAttachmentError(i))}),t)}addAttachmentError(t){const i=n.getParent(t,J.rootSelector);i!==null&&i.classList.add(l.HAS_ERROR)}hasAttachments(){return this.form.querySelector(this.attachmentSelector)}addGroupError(t,i){for(let s=0;s<t.length;s++){const r=this.getGroupParent(t[s]);t[s].classList.add(l.ERROR),r&&(i&&n.scrollIntoView(r),this.addErrorMessage(r))}}addErrorMessage(t){if(t&&!t.classList.contains(l.ERROR)){t.classList.add(l.ERROR);const i=document.createElement("div");i.innerHTML=t.dataset.msg,i.classList.add("invalid-feedback"),t.parentNode.insertBefore(i,t.nextSibling)}}delErrorMessage(t){t&&t.classList.contains(l.ERROR)&&(t.classList.remove(l.ERROR),t.nextSibling.remove())}delGroupError(t){for(let i=0;i<t.length;i++){const s=this.getGroupParent(t[i]);t[i].classList.remove(l.ERROR),s&&this.delErrorMessage(s)}}isValidGroup(t){const i=t.length;let s=!1;for(let r=0;r<i;r++){const a=t[r];if(a.type==="checkbox"&&a.checked)s=!0;else if(a.type==="radio"&&a.checked)s=!0;else{const o=a.closest('input[type="text"]');o&&!s&&o.value.length>=this.minLengthOther&&(s=!0)}}return s}getGroupByName(t){return this.groups[t]}addValidation(){this.form&&[].forEach.call(this.form.querySelectorAll("[data-form-group]"),t=>{t.dataset.formGroup&&(this.addGroupValidation(t),this.addLiveValidation(t))})}isRadio(t){return(t==null?void 0:t.getAttribute("type"))==="radio"}isCheckbox(t){return(t==null?void 0:t.getAttribute("type"))==="checkbox"}addLiveValidation(t){t&&(this.isCheckbox(t)||this.isRadio(t)?t.addEventListener("change",this.handleLiveValidation.bind(this)):t.addEventListener("keyup",this.handleLiveValidation.bind(this)))}groupFilter(t,i){return t?t.filter(s=>s.getAttribute("type")===i):null}handleGroupError(t,i){t.checked?this.delGroupError(i):this.isValidGroup(i)||this.addGroupError(i)}handleLiveValidation(t){const i=t.currentTarget;if(i){const s=this.getGroupByName(i.dataset.formGroup);if(!s)return;const r=this.groupFilter(s,"checkbox"),a=this.groupFilter(s,"radio");i.getAttribute("type")==="checkbox"?this.handleGroupError(i,r):i.getAttribute("type")==="radio"?this.handleGroupError(i,a):this.isValidGroup(s)?this.delGroupError(s):this.addGroupError(s)}}getGroupParent(t){var i;return(i=t.closest(".js-form-message"))==null?void 0:i.querySelector("[data-msg]")}addGroupValidation(t){if(this.getGroupParent(t)){const s=t.dataset.formGroup;this.groups[s]||(this.groups[s]=[]),this.groups[s].push(t)}}updateGotcha(){const t=this.root.querySelector(this.gotchaSelector);t==null||t.classList.add(l.HIDDEN)}canHaveCustomSubmit(){return!this.root.classList.contains(T.noCustomSubmitClass)}static isOptionalInputInvisible(t){var i;return((i=t==null?void 0:t.parentNode)==null?void 0:i.classList.contains("form-field--show-in"))&&t.offsetParent===null}static getFormData(t){if(t==null)return[];const i=t.querySelectorAll('input[type="text"], input[type="email"], textarea'),s=[];for(let r=0;r<i.length;r++){const a=i[r];if(this.isOptionalInputInvisible(a))continue;let o;(a.type==="text"||a.type==="email"||a.tagName==="TEXTAREA")&&(o=a.value),s.push({input:a,value:o})}return s}};p(T,"rootSelector",".form"),p(T,"instances",[]),p(T,"delimiter","-formHelper-"),p(T,"noCustomSubmitClass","form--no-custom-submit"),p(T,"regularExpression",/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);let _=T;const se=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));class ae{constructor(t){var s;this.position=t;const i=(s=window.i18n)==null?void 0:s.loader;i&&i.then(()=>{var r;this.translationData=(r=window.i18n)==null?void 0:r.getTranslationData(["positionTypePermanently","positionTypeInternship","positionTypeTraining","positionTypeStudent"])})}get description(){return this.position.jobDescriptions&&this.position.jobDescriptions.jobDescription&&this.position.jobDescriptions.jobDescription.map?this.position.jobDescriptions.jobDescription.map((t,i)=>this.getEnhanchedDescription(i,t.name,t.value["#cdata-section"])).join(`
`):null}hasStartingHtmlTag(t){return/^\s*<[^>]+>/.test(t)}getEnhanchedDescription(t,i,s){const r=t>0&&i&&i["#text"]?`<h4>${this.trimNewlines(i["#text"])}</h4>`:"";let a=s.replace(/<\/?span[^>]*>/g,""),o=0;const c=5,d=2;return t===0?a=a.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)","g"),(h,u)=>u.length>c&&/^\s*$/.test(u)?u:o<d&&u.length>c&&u[0]!==","?(o++,"<p>"+u.trim()+"</p>"):u).replace(/<\/p><br>/g,"<br></p>"):!this.hasStartingHtmlTag(a)&&a.length>c&&(a="<p>"+a+"</p>"),`${r}${a}`.replace(/<\/p><br><p>/g,"</p><p>")}get id(){return this.getValue("id").replace(/\s/g,"")}get title(){return this.removeGenderNotations(this.getValue("name"))}removeGenderNotations(t){const i=/\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;return t.replace(i,"").trim()}get tags(){const t=this.getValue("keywords");return t?t.split(","):[]}getTeamText(t){if(!t)return;let i=t;if(i.includes("/")){const s=i.split(" / "),r=s[0],a=s[1],o="CSOC",c="Managed Services",d="Products";if(r===c&&a!==o)i=c;else if(r===d)i=`${d} ${a}`;else switch(a){case"Azure Architecture":i="Azure";break;case"M365 Architecture":i="Workplace";break;case o:i="Security";break;default:i=a;break}}return i+" Team"}get team(){const t=this.getTeamText(this.getValue("department")),i=t?" / ":"";return`${t||""}${this.positionType?i+this.positionType:""}`}get data(){return{id:this.id,title:this.title,description:this.description,team:this.team,position_type:this.positionType,tags:this.tags,order:this.order}}get positionType(){var i,s,r,a;let t=this.getValue("employmentType");switch(t){case"permanent":t=(i=window.i18n)==null?void 0:i.translate("positionTypePermanently");break;case"intern":t=(s=window.i18n)==null?void 0:s.translate("positionTypeInternship");break;case"trainee":t=(r=window.i18n)==null?void 0:r.translate("positionTypeTraining");break;case"working_student":t=(a=window.i18n)==null?void 0:a.translate("positionTypeStudent");break;default:case"freelance":case"temporary":t=null;break}return t}get order(){const t=this.tags.find(r=>r.includes("ORDER_"));if(!t)return null;const i=t.split("_")[1];return parseInt(i,10)}trimNewlines(t){return t.replace(/\n|\t|    /g,"")}getValue(t,i="text"){return this.position&&this.position[t]?this.trimNewlines(this.position[t][`#${i}`]):null}}const R={VALID:200,CREATED:201,NO_CONTENT:204,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,PAYLOAD_TOO_LARGE:413,INTERNAL_SERVER_ERROR:500};class re{constructor(t){p(this,"defaultLang","de");p(this,"types",{OPENINGS:"openings",APPLICATIONS:"applications",DOCUMENTS:"documents"});p(this,"recruitingChannels",{CAREER_PAGE:1610421});p(this,"phaseIds",{NEW_APPLICATION:890494});p(this,"responseTypes",{XML:"xml",JSON:"json"});p(this,"defaultClientName","c4a8");p(this,"mockApplyUrl","mock/jobApply.json");p(this,"mockDocumentsUrl","mock/jobDocuments.json");this.options=t,(!this.options.client_name||this.options.client_name==="glueckkanja")&&(this.options.client_name=this.defaultClientName),this.lang=this.defaultLang,this.jobId=null,this.apiUrl="https://api.personio.de/v1",this.openingsUrl=`https://${this.options.client_name}.jobs.personio.de/xml`,this.applicationsUrl="https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications",this.documentsUrl="https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents"}getUrl(t){var r;let i;t!==this.types.OPENINGS&&((r=this.options.apiUrl)!=null&&r.match(/.xml$/))?t===this.types.APPLICATIONS?i=this.options.mockApplyUrl?this.options.mockApplyUrl:this.mockApplyUrl:i=this.options.mockDocumentsUrl?this.options.mockDocumentsUrl:this.mockDocumentsUrl:i=this.options.apiUrl?this.options.apiUrl:this[`${t}Url`];const s=this.lang!==this.defaultLang?this.options.apiUrl?"":`?language=${this.lang}`:"";return`${i}${s}`}setLang(t){this.lang=t}setFilter(t){this.filter=t}getAll(){const t=this.getUrl(this.types.OPENINGS);return this.fetch(t,null,this.responseTypes.XML)}getOpening(t){return this.options.jobId=t,this.getAll()}convertPosition(t){var a;const i=new ae(t),s=(a=this.options)==null?void 0:a.jobId;return i.description===null||s&&i.id!==s||!this.filterPosition(i)?null:{...i.data,lang:this.lang}}filterPosition(t){var i,s;return!((s=(i=this.filter)==null?void 0:i.tags)!=null&&s.length)||this.filter.tags.some(r=>t.tags.map(a=>a.toLowerCase()).includes(r.toLowerCase()))?t:null}convertData(t){var a,o;const i=t,s="workzag-jobs",r=(a=t[s])==null?void 0:a.position;return i.objects=r.length?(o=t[s])==null?void 0:o.position.map(c=>this.convertPosition(c)).filter(Boolean):[this.convertPosition(r)].filter(Boolean),i.meta={offset:0,limit:20,total:10},i}getConvertedJson(t){const s=new DOMParser().parseFromString(t,"application/xml"),r=n.XMLtoJSON(s);return this.convertData(r)}fetchXML(t){return new Promise((i,s)=>{t.then(r=>r.text()).then(r=>{i({json:()=>this.getConvertedJson(r)})}).catch(r=>{console.error("Personio fetchXML Error:",r),s("Personio fetchXML Error")})})}fetch(t,i,s){return new Promise((r,a)=>{var o;if((o=this.options)!=null&&o.client_name){const c=fetch(t,i),d=s===this.responseTypes.XML?this.fetchXML(c):c;r(d)}else a("no client_name specified")})}async uploadDocuments(t){const i=t.length>0?t:[t],s=[];return Array.from(i).forEach(r=>{s.push(this.uploadDocument(r))}),Promise.all(s)}async uploadDocument(t){const i=this.getUrl(this.types.DOCUMENTS),s=new FormData;return s.append("file",new File([t],t.name,{type:t.type})),this.fetch(i,{method:"POST",body:s,headers:{...this.getHeaders()}})}async applyFileData(t,i,s){return new Promise((r,a)=>{this.uploadDocuments(t).then(o=>{if(this.hasValidResponseCodes(o))return this.addFilesToFields(o,s,r,a);const c=o[0];c.json().then(d=>{if(d.errors)return a({statusCode:c.status,errors:d.errors})}).catch(d=>a(d))}).catch(o=>a(o))})}addFilesToFields(t,i,s,r){const a=i;a.files=[];const o=t.map(c=>c.json().then(d=>{a.files.push({uuid:d.uuid,original_filename:d.original_filename,category:"cv"})}));return Promise.all(o).then(()=>s(a)).catch(c=>r(c))}getMappedFieldName(t){let i;switch(t){case"salary":i="salary_expectations";break;case"cancellation":i="available_from";break;case"gender":case"birthday":case"location":case"phone":i=t;break;default:i="custom_attribute_"+t;break}return i}isValidResponseCode(t){return this.options.apiUrl?t.status===R.VALID:t.status===R.VALID||t.status===R.CREATED||t.status===R.NO_CONTENT}hasValidResponseCodes(t){return t.every(i=>this.isValidResponseCode(i))}handleApply(t){return new Promise((i,s)=>{this.apply({fields:t}).then(r=>{if(this.isValidResponseCode(r))return i();r.json().then(a=>{if(a.errors)return s({statusCode:r.status,errors:a.errors})}).catch(a=>s(a))}).catch(r=>s(r))})}getFormPayload(t,i){const s={job_position_id:parseInt(this.options.jobId),attributes:[],phase:{type:"custom",id:this.phaseIds.NEW_APPLICATION},recruiting_channel_id:this.recruitingChannels.CAREER_PAGE},r={first_name:!0,last_name:!0,email:!0,message:!0};for(let a=0;a<t.length;a++){const c=t[a].input,d=i.getName(c.name),h=n.camalCaseToSnakeCase(d);r.hasOwnProperty(h)?s[h]=c.value:h!=="_gotcha"&&s.attributes.push({id:this.getMappedFieldName(h),value:c.value})}return s}getHeaders(){return{"Ocp-Apim-Subscription-Key":this.options.apiKey}}async apply(t){const i=this.getUrl(this.types.APPLICATIONS);return this.fetch(i,{method:"POST",body:JSON.stringify(t.fields),headers:{...this.getHeaders(),"Content-Type":"application/json"}})}}class ot{constructor(t){p(this,"jobDataUrl","/assets/data/jobs/");this.options=t,this.api=new re(this.options),this.jobDataUrl=n.getSiteAssetPath(this.jobDataUrl)}setLang(t){this.api.setLang(t)}setFilter(t){this.api.setFilter(t)}getAll(){return this.api.getAll()}getOpening(t){return this.api.getOpening(t)}getUrl(t,i,s){return this.api.getUrl(t,i,s)}fetch(t,i){return this.api.fetch(t,i)}getLangFromEntry(t){return t.lang||null}getJobId(){let t="";const i=window.location.hash;if(i)if(i.indexOf("-")!==-1){const s=i.split("-");t=s[s.length-1]}else t=i.substring(1);else this.options.jobId&&(t=this.options.jobId);return t}getOrderedList(t){const i=t.filter(r=>r.order!==void 0).sort((r,a)=>a.order-r.order),s=t.filter(r=>r.order===void 0);return[...i,...s]}getFormData(t){const i=_.getFormData(t);return this.api.getFormPayload(i,_)}applyFileData(t,i,s){return this.api.applyFileData(t,i,s)}handleApply(t){return this.api.handleApply(t)}}const V=class V{constructor(t,i){this.root=t,this.options=i,this.closeSelector=".modal__close",this.successCloseSelector=".modal__success-close .cta",this.errorCloseSelector=".modal__error-close .cta",this.applicationSelector=".modal__application",this.modalSuccessHeadlineSelector=".modal__success-headline > *",this.buttonSelector='[data-trigger="modal"]',this.formSelector=".form",this.close=this.root.querySelector(this.closeSelector),this.successClose=this.root.querySelector(this.successCloseSelector),this.errorClose=this.root.querySelector(this.errorCloseSelector),this.application=this.root.querySelector(this.applicationSelector),this.form=this.root.querySelector(this.formSelector),this.modalId=this.root.dataset.modalId,this.root.classList.add(l.READY),this.application&&(this.clientName=this.root.dataset.clientName,this.apiUrl=this.root.dataset.apiUrl,this.jobId=this.root.dataset.jobId,this.apiKey=this.root.dataset.apiKey,this.mockApplyUrl=this.root.dataset.mockApplyUrl,this.mockDocumentsUrl=this.root.dataset.mockDocumentsUrl,this.api=new ot({...this.jobId&&{jobId:this.jobId},...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName,apiKey:this.apiKey,mockApplyUrl:this.mockApplyUrl,mockDocumentsUrl:this.mockDocumentsUrl})),this.bindEvents()}isNotVueApp(t){return t.getAttribute("data-v-app")===null}bindEvents(){var t,i,s;if((t=this.close)==null||t.addEventListener("click",this.handleClose.bind(this)),(i=this.successClose)==null||i.addEventListener("click",this.handleClose.bind(this)),(s=this.errorClose)==null||s.addEventListener("click",this.handleClose.bind(this)),this.application){const r=this.root.parentNode,a=_.getInstance(this.form);if(r&&this.isNotVueApp(r)){const o=r.querySelector(this.buttonSelector);o==null||o.addEventListener("click",this.handleOpen.bind(this))}else r&&this.addTriggerListeners();a&&a.canHaveCustomSubmit()&&(a.customSubmit=this.handleApplicationSubmit.bind(this))}else this.root.dataset.modalId&&this.addTriggerListeners();document.addEventListener(g.OPEN_MODAL,this.handleModalOpen.bind(this))}addTriggerListeners(){document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach(i=>i.addEventListener("click",this.handleOpen.bind(this)))}handleModalOpen(t){var s;t.stopImmediatePropagation();const i=(s=t==null?void 0:t.detail)==null?void 0:s.id;!i||i!==this.modalId||this.handleOpen(t)}handleApplicationSubmit(t){t.preventDefault(),t.stopImmediatePropagation(),this.setLoading(!0);const i=this.form.querySelector(J.base64Selector),s=i==null?void 0:i.value;let r=this.api.getFormData(this.form),a;if(s)a={name:i.dataset.fileName};else{const o=this.form.querySelector('input[type="file"]');a=o==null?void 0:o.files}a?this.handleApplicationRequest(r,a,s):this.handleError()}setLoading(t){document.dispatchEvent(new CustomEvent(g.LOAD_MODAL,{detail:t}))}handleApplicationRequest(t,i,s){this.api.applyFileData(i,s,t).then(r=>{this.api.handleApply(r).then(()=>{this.setLoading(!1),this.handleApplicationSuccess(r)}).catch(a=>{this.setLoading(!1),this.handleError(a)})}).catch(r=>{this.setLoading(!1),this.handleError(r)})}handleApplicationSuccess(t){this.root.classList.add(l.SUCCESS);const i=this.root.querySelector(this.modalSuccessHeadlineSelector);if(i){i.dataset.text||(i.dataset.text=i.innerText);const s=t.first_name;i.innerText=`${i.dataset.text} ${s}`}}handleError(t){if(!t)return console.error("handle generic error");const i=typeof t=="string"?t:t.message?t.message:t,s=typeof t=="object"&&t.statusCode?t.statusCode:R.INTERNAL_SERVER_ERROR;console.error("Modal Error",i),s===R.PAYLOAD_TOO_LARGE?this.handlePayloadTooLarge(t):this.root.classList.add(l.ERROR)}handlePayloadTooLarge(t){document.dispatchEvent(new CustomEvent(g.FORM_ATTACHMENT_ERROR,{detail:t}))}handleClose(t){t.preventDefault(),V.close(this.root)}handleOpen(t){t.preventDefault(),V.open(this.root)}static initElement(t,i){const s=new this(t,i);return this.instances.push(s),s}static open(t){t&&window.$&&$(t).modal("show")}static close(t){t&&window.$&&($(t).modal("hide"),V.resetModal(t))}static resetModal(t){setTimeout(function(){const i=t.querySelector("form");i==null||i.reset(),t.classList.remove(l.SUCCESS),t.classList.remove(l.ERROR)},200)}static init(t){this.instances=[];const i=t||document,s=`${this.rootSelector}:not(.${l.READY})`;[].forEach.call(i.querySelectorAll(s),r=>{this.initElement(r)})}};p(V,"rootSelector",".modal"),p(V,"instances",[]);let A=V;const oe=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),nt="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100' height='400' width='400'%3E%3Cpath fill='%23e5f8ff' stroke='%23DAEDF7' stroke-miterlimit='10' d='M50.28 90C72.3714 90 90.28 72.0914 90.28 50C90.28 27.9086 72.3714 10 50.28 10C28.1886 10 10.28 27.9086 10.28 50C10.28 72.0914 28.1886 90 50.28 90Z'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M66.226 41.1997H16.464C15.9336 41.1997 15.4248 41.4104 15.0498 41.7855C14.6747 42.1606 14.464 42.6693 14.464 43.1997V75.3337H68.226V43.1997C68.226 42.6693 68.0153 42.1606 67.6402 41.7855C67.2651 41.4104 66.7564 41.1997 66.226 41.1997Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23ff866e' d='M52.994 44.9966L20.42 75.3336H18.259L18.312 44.9966H52.994Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M41.345 84.2985C55.3178 84.2985 66.645 83.5598 66.645 82.6485C66.645 81.7373 55.3178 80.9985 41.345 80.9985C27.3722 80.9985 16.045 81.7373 16.045 82.6485C16.045 83.5598 27.3722 84.2985 41.345 84.2985Z' opacity='.15'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1286H9.72V76.3286C9.72 76.0634 9.82536 75.809 10.0129 75.6215C10.2004 75.434 10.4548 75.3286 10.72 75.3286H71.97C72.2352 75.3286 72.4896 75.434 72.6771 75.6215C72.8646 75.809 72.97 76.0634 72.97 76.3286V79.1286Z'%3E%3C/path%3E%3Cpath fill='%23adc4d9' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1289C67.0954 80.8072 61.0156 81.6587 54.906 81.6589H27.784C21.6744 81.6586 15.5946 80.8071 9.72 79.1289H72.97Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' stroke='%23e04122' stroke-linecap='round' stroke-linejoin='round' d='M46.145 67.3147C45.8364 67.3155 45.5307 67.2551 45.2456 67.137C44.9605 67.0189 44.7017 66.8454 44.484 66.6267L41.345 63.4887L38.207 66.6267C37.9885 66.8449 37.7292 67.0179 37.4439 67.1359C37.1586 67.2539 36.8528 67.3145 36.5441 67.3143C36.2353 67.3141 35.9296 67.2531 35.6444 67.1348C35.3593 67.0165 35.1002 66.8431 34.882 66.6247C34.6638 66.4062 34.4908 66.1469 34.3728 65.8616C34.2548 65.5763 34.1942 65.2705 34.1944 64.9618C34.1945 64.653 34.2555 64.3473 34.3739 64.0621C34.4922 63.777 34.6655 63.5179 34.884 63.2997L38.022 60.1607L34.884 57.0227C34.6602 56.8058 34.4818 56.5465 34.3592 56.2599C34.2365 55.9734 34.1721 55.6653 34.1697 55.3536C34.1673 55.042 34.2269 54.7329 34.345 54.4445C34.4632 54.1561 34.6376 53.894 34.8579 53.6737C35.0783 53.4533 35.3404 53.2789 35.6288 53.1608C35.9172 53.0426 36.2262 52.983 36.5379 52.9854C36.8496 52.9878 37.1577 53.0522 37.4442 53.1749C37.7308 53.2975 37.99 53.4759 38.207 53.6997L41.345 56.8387L44.484 53.6997C44.927 53.2703 45.521 53.0323 46.1379 53.0371C46.7548 53.0419 47.3451 53.2891 47.7813 53.7253C48.2176 54.1616 48.4648 54.7519 48.4696 55.3688C48.4744 55.9857 48.2364 56.5797 47.807 57.0227L44.668 60.1607L47.807 63.2997C48.1354 63.6284 48.359 64.0471 48.4496 64.5029C48.5401 64.9586 48.4935 65.431 48.3156 65.8603C48.1377 66.2895 47.8366 66.6565 47.4502 66.9146C47.0639 67.1728 46.6097 67.3106 46.145 67.3107V67.3147Z'%3E%3C/path%3E%3Cpath fill='%2300b8f0' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%2380ddff' d='M71.567 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V42.2998L71.567 15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M49.932 21.279C50.8549 21.279 51.603 20.5309 51.603 19.608C51.603 18.6851 50.8549 17.937 49.932 17.937C49.0091 17.937 48.261 18.6851 48.261 19.608C48.261 20.5309 49.0091 21.279 49.932 21.279Z'%3E%3C/path%3E%3Cpath fill='%23ffe500' d='M55.789 21.279C56.7119 21.279 57.46 20.5309 57.46 19.608C57.46 18.6851 56.7119 17.937 55.789 17.937C54.8661 17.937 54.118 18.6851 54.118 19.608C54.118 20.5309 54.8661 21.279 55.789 21.279Z'%3E%3C/path%3E%3Cpath fill='%2348cf3e' d='M61.646 21.279C62.5688 21.279 63.317 20.5309 63.317 19.608C63.317 18.6851 62.5688 17.937 61.646 17.937C60.7231 17.937 59.975 18.6851 59.975 19.608C59.975 20.5309 60.7231 21.279 61.646 21.279Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M55.999 34.052C56.9103 34.052 57.649 33.3132 57.649 32.402C57.649 31.4907 56.9103 30.752 55.999 30.752C55.0877 30.752 54.349 31.4907 54.349 32.402C54.349 33.3132 55.0877 34.052 55.999 34.052Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M76.899 34.052C77.8103 34.052 78.549 33.3132 78.549 32.402C78.549 31.4907 77.8103 30.752 76.899 30.752C75.9877 30.752 75.249 31.4907 75.249 32.402C75.249 33.3132 75.9877 34.052 76.899 34.052Z'%3E%3C/path%3E%3Cpath fill='%23c7f0ff' stroke='%233887B7' stroke-linecap='round' stroke-linejoin='round' d='M80.12 39.6307C80.1097 40.0406 79.9395 40.4302 79.646 40.7165C79.3524 41.0028 78.9585 41.163 78.5485 41.163C78.1384 41.163 77.7446 41.0028 77.451 40.7165C77.1574 40.4302 76.9873 40.0406 76.977 39.6307C76.977 38.7627 78.549 35.7017 78.549 35.7017C78.549 35.7017 80.12 38.7627 80.12 39.6307Z'%3E%3C/path%3E%3Cpath fill='%23ffb59e' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M61.727 44.2536C61.5404 44.2535 61.3563 44.2108 61.1886 44.1288C61.021 44.0468 60.8743 43.9277 60.7596 43.7804C60.645 43.6332 60.5654 43.4618 60.527 43.2791C60.4886 43.0965 60.4924 42.9076 60.538 42.7266C60.8732 41.4135 61.6361 40.2494 62.7064 39.418C63.7766 38.5866 65.0933 38.1353 66.4485 38.1353C67.8037 38.1353 69.1204 38.5866 70.1906 39.418C71.2609 40.2494 72.0238 41.4135 72.359 42.7266C72.406 42.9073 72.4106 43.0964 72.3722 43.2791C72.3339 43.4618 72.2537 43.6331 72.138 43.7796C72.0236 43.9274 71.8769 44.0469 71.7091 44.1291C71.5413 44.2113 71.3569 44.2539 71.17 44.2536C69.6156 43.9216 68.0367 43.7176 66.449 43.6436C64.861 43.7176 63.2817 43.9216 61.727 44.2536V44.2536Z'%3E%3C/path%3E%3C/svg%3E",lt={de:{tags:"Schlagwörter",tagsHeadline:"Posts nach Schlagwörtern",tagsClear:"Zurücksetzen",posts:"Einträge",follow:"Folgen",similarPosts:"Ähnliche Artikel",withAuthor:"Mit",adBlockInfo:`
        <div class="ad-block-info__content">
          <img src="${nt}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Hoppla, Adblocker erkannt!</h5>
            <div class="ad-block-info__text">Damit unsere Website reibungslos funktioniert, füge uns zur Whitelist hinzu. Wir nerven nicht mit Werbung. Versprochen!</div>
          </div>
        </div>`,vatInfo:"*Alle Preise sind exklusive Mehrwertsteuer. Unsere Angebote richten sich ausschließlich an gewerbliche Kunden."},en:{tags:"Tags",tagsHeadline:"Posts by Tags",tagsClear:"Clear all",posts:"Posts",follow:"Follow",similarPosts:"Similar Posts",withAuthor:"With",adBlockInfo:`
        <div class="ad-block-info__content">
          <img src="${nt}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detected!</h5>
            <div class="ad-block-info__text">To keep our website running smoothly, add us to the whitelist. We won't annoy you with ads. Promise!</div>
          </div>
        </div>`,vatInfo:"*All prices are excluding VAT. Our offers are addressing professional customers, only."},es:{tags:"Tags",tagsHeadline:"Entradas por Tags",tagsClear:"Borrar todo",posts:"Puestos",follow:"Siga",similarPosts:"Puestos similares",withAuthor:"Con",adBlockInfo:`
        <div class="ad-block-info__content">
          <img src="${nt}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detectado!</h5>
            <div class="ad-block-info__text">Para que nuestro sitio web funcione correctamente, añádenos a tu lista blanca. No te molestaremos con publicidad. Te lo prometemos.</div>
          </div>
        </div>`,vatInfo:"*Todos los precios son sin IVA. Nuestras ofertas se dirigen exclusivamente a clientes profesionales."}},ne=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"ad-block-info",props:{text:String,show:{default:null}},computed:{textValue(){return this.text.length>0?this.text:lt==null?void 0:lt.adBlockInfo}},data(){return{disableDelay:30*24*60*60*1e3,storageKey:"adBlockInfo"}},mounted(){this.bindEvents(),n.isTrue(this.show)&&this.openModal()},methods:{bindEvents(){this.isDisabled()||document.addEventListener(g.AD_BLOCK_INFO,()=>{this.openModal()})},openModal(){var e;A.open((e=this.$refs["modal-component"])==null?void 0:e.modal),this.disableInfoByTime()},disableInfoByTime(){const e=Date.now()+this.disableDelay;n.storageSave(this.storageKey,e)},isDisabled(){const e=n.storageGet(this.storageKey);return e&&e>0&&Date.now()<=e}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),le=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"aside-wrapper",methods:{},props:{},template:`
    <div class="aside-wrapper vue-component">
      <div class="aside-wrapper__content">
        <slot name='content'></slot>
      </div>
      <aside class="aside-wrapper__aside">
        <slot name='aside'></slot>
      </aside>
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),ce=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"author-avatar",data(){return{defaultImageOffsetLeft:"50%",defaultImageOffsetTop:"60%"}},computed:{classList(){return["author__avatar vue-component",this.classes?this.classes:""]},style(){const e=this.author.imageOffsetLeft||this.defaultImageOffsetLeft,t=this.author.imageOffsetTop||this.defaultImageOffsetTop;return`left:${e};top:${t}`}},methods:{},props:{author:{default:null},classes:String,imgUrl:String},template:`
    <div :class="classList">
      <div class="author__avatar-frame">
        <div :style="style">
          <v-img :img="imgUrl" :cloudinary=true preset="avatar" :alt="author.display_name" />
        </div>
      </div>
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),de=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"author-header",data(){return{translationData:{}}},computed:{classList(){return["author-header row mb-4 mb-lg-5 vue-component",this.classes?this.classes:""]}},beforeMount(){var t;const e=(t=window.i18n)==null?void 0:t.loader;e&&e.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["posts"])})},methods:{},props:{author:{default:null},classes:String,imgUrl:String,postCount:Number},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),he=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"authors",computed:{classList(){return["authors",`${n.isTrue(this.noLink)===!0?"authors authors--no-link":"authors"}`,"vue-component"]},seperator(){return this.noLink?" & ":", "},authorArray(){return typeof this.authorsList=="object"?this.authorsList:[this.authorsList]},hasDataAndAuthors(){return this.authorArray&&this.dataAuthors},langValue(){return this.lang?this.lang:n.getLang()}},methods:{authorsSeperator(e,t){return e[e.length-1]===t},authorStart(e,t){if(e[0]===t)return this.dataLang.withAuthor},authorLink(e){var i;const t=n.isNotDefaultLang()?"/"+this.langValue:"";return(i=this.dataAuthors)!=null&&i.hasOwnProperty(e)?`${t}${this.dataAuthors[e].permalink}`:null}},props:{authorsList:Array,noLink:{default:null},dataLang:{default:"de"},dataAuthors:{default:null},lang:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),pe=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"awards",migrate:!0,template:`
                awards
            `}},Symbol.toStringTag,{value:"Module"})),ue=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"back-to-top",migrate:!0,template:`
              back-to-top
          `}},Symbol.toStringTag,{value:"Module"})),me=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"badge",props:{text:String,overlapping:Boolean,icon:String,color:{type:String,default:"var(--color-badge-background)"},textColor:{type:String,default:"var(--color-badge-icon)"},uppercase:Boolean,classes:String},computed:{classList(){return["badge","badge--normal","font-size-1","normal",{"badge--overlapping":this.overlapping},{"badge--uppercase":this.uppercase},this.classes]},style(){return{backgroundColor:this.color,color:this.textColor}}},template:`
    <div :class="classList" :style="style">
      <div class="badge__text">{{ text }}</div>
      <div v-if="icon" class="badge__icon">
        <icon :icon="icon" color="var(--color-badge-icon)" size="medium" />
      </div>
    </div>
  `}},Symbol.toStringTag,{value:"Module"}));class U{constructor(t){this.root=t,this.setOffsets(),this.setMarginTop(),this.firstChild=document.querySelector("main > *:first-child"),this.isUpdating=!1,this.maxPercentage=100,this.lastPercentage=!1,this.header=document.querySelector("header"),this.headerSpacer=document.querySelector(".header__spacer"),this.main=document.querySelector("main"),this.setup(),this.bindEvents(),this.setStickyPosition()}bindEvents(){window.addEventListener("scroll",this.handleScroll.bind(this)),document.addEventListener(g.WINDOW_RESIZE,this.handleResize.bind(this)),document.addEventListener(g.DIMENSIONS_CHANGED,this.handleDimensionsChanged.bind(this))}addDebugPositions(){this.topPosition=document.createElement("div"),this.bottomPosition=document.createElement("div");const t=document.querySelector("main");t.appendChild(this.topPosition),t.appendChild(this.bottomPosition),this.bottomPosition.style.position=this.topPosition.style.position="absolute",this.bottomPosition.style.boxSizing="content-box",this.bottomPosition.style.left=this.topPosition.style.left=0,this.bottomPosition.style.width=this.topPosition.style.width="30px",this.bottomPosition.style.height=this.topPosition.style.height="2px",this.bottomPosition.style.backgroundColor="rgba(255, 255, 0, 1)",this.bottomPosition.style.border="1px solid rgb(0, 0, 0)",this.topPosition.style.backgroundColor="rgba(255, 0, 0, 1)",this.bottomPosition.style.zIndex=this.topPosition.style.zIndex=1e3,this.bottomPosition.style.pointerEvents=this.topPosition.style.pointerEvents="none",this.updateDebugPositions()}updateDebugPositions(){!this.topPosition||!this.bottomPosition||(this.topPosition.style.top=(this.calculatedOffsetTop||this.currentTopPosition)+"px",this.bottomPosition.style.top=(this.calculatedOffsetBottom||this.currentBottomPosition)+"px")}setMarginTop(){this.marginTop=parseInt(window.getComputedStyle(this.root).marginTop.replace("px",""),10)}handleDimensionsChanged(t){t.detail===this.root&&this.handleResize()}setOffsets(){this.offsetTop=this.root.offsetTop,this.offsetBottom=this.offsetTop+this.root.offsetHeight}handleResize(){this.resetElements(),this.setOffsets(),this.setDimensions(),this.setPositions(),this.setStickyPosition()}handleScroll(){this.isUpdating||(this.isUpdating=!0,window.requestAnimationFrame(this.setStickyPosition.bind(this)))}getHeaderHeight(){var t,i;return this.isHeaderSticky()?((i=this.headerSpacer)==null?void 0:i.offsetHeight)||0:((t=this.header)==null?void 0:t.offsetHeight)||0}isHeaderSticky(){if(!this.header)return!1;const t=window.getComputedStyle(this.header);return t.position==="fixed"||t.position==="absolute"||t.position==="sticky"}updateClipPath(t){const i="inset(0% 0% "+t+"%)";this.root.style.clipPath=i,this.isUpdating=!1}isFirstChild(t){return this.firstChild===t}isSticky(){return this.root.classList.contains(l.STICKY)}setPositions(){this.setTopPosition(),this.setBottomPosition()}setTopPosition(){this.currentTopPosition=this.root.offsetTop}setBottomPosition(){this.currentBottomPosition=this.root.offsetTop+this.root.offsetHeight}getMainOffsetTop(){var t;return((t=this.main)==null?void 0:t.offsetTop)||0}getPercentage(t,i){this.calculatedOffsetTop=this.currentTopPosition-i-this.marginTop+this.getMainOffsetTop(),this.calculatedOffsetBottom=this.currentBottomPosition-i+this.getMainOffsetTop(),this.marginTop<0&&(this.calculatedOffsetBottom-=this.marginTop);let s=t,r;if(this.calculatedOffsetBottom>=s){let a=this.root.offsetHeight/100;this.calculatedOffsetTop<0?r=s/a:r=(s-this.calculatedOffsetTop)/a}else r=this.maxPercentage;return parseFloat(r.toFixed(2))}isOutOfViewport(t){return t>=this.maxPercentage||t<0}setStickyPosition(){const t=this.getHeaderHeight(),i=window.scrollY,s=this.root.offsetHeight-window.innerHeight,r=s>0?this.offsetBottom:this.offsetBottom-t;let a=s>0?-s:0;a=a-this.marginTop;const o=this.getPercentage(i,a),c=this.isOutOfViewport(o),d=i>r-window.innerHeight;!c&&d?(this.spacer.style.height||(this.fixScrollPosition=!0,this.spacer.style.marginTop=this.marginTop+"px",this.spacer.style.height=this.height+"px",this.root.style.width=this.spacer.style.width=this.width+"px",this.root.style.height=this.height+"px",this.root.style.left="50%",this.root.style.transform="translateX(-50%)"),this.root.style.top=a+"px",this.root.classList.remove(l.OFF_SCREEN),this.root.classList.add(l.STICKY),this.updateClipPath(o)):o===0?(this.isUpdating=!1,this.root.classList.remove(l.OFF_SCREEN)):this.disableStickyness(),this.updateDebugPositions()}disableStickyness(){this.root.classList.remove(l.STICKY),this.root.classList.add(l.OFF_SCREEN),this.root.style.top="",this.root.style.clipPath="",this.root.style.width="",this.root.style.height="",this.spacer.style.height="",this.spacer.style.marginTop="",this.root.style.left="",this.root.style.transform="",this.isUpdating=!1}setup(){const t=this.root.parentNode;this.spacer=document.createElement("div"),t&&(this.spacer.classList.add("sticky-scroller__spacer"),this.setDimensions(),t.insertBefore(this.spacer,this.root.nextSibling),this.root.dataset.stickyScroller=!0,this.setPositions(),this.setNextElementColor())}hasBackground(){return this.root.classList.contains(l.HAS_BACKGROUND)||n.getElementBgColor(this.root)}setNextElementColor(){if(!this.hasBackground())return;const t=this.spacer.nextSibling,i="--color-sticky-scroller";if(!t)return;const s=n.getElementBgColor(t)||n.getElementBgColor(t.firstChild);this.spacer.style.setProperty(i,s),this.spacer.classList.add(l.HAS_BACKGROUND)}setDimensions(){const t=document.body.getBoundingClientRect().width;this.width=this.root.clientWidth>t?t:this.root.clientWidth,this.height=this.root.clientHeight,this.spacer.style.width=this.width+"px"}resetElements(){this.root.style.top="",this.spacer.style.marginTop="",this.root.style.height=this.root.style.width=this.spacer.style.width=this.spacer.style.height="",this.root.style.clipPath="",this.root.classList.remove(l.STICKY)}static init(){this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),t=>{this.instances.push(new this(t))})}static getRootClass(){return this.rootSelector.substring(1)}}p(U,"rootSelector",".is-sticky-scroller"),p(U,"instances",[]);const ge=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),fe=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"blog-recent",computed:{classList(){return["blog-recent utility-animation utility-animation--percentage-offset",`${this.hasBackground}`,`${this.skinClass}`,`${n.isTrue(this.hideContainer)===!0?"":this.getSpacing}`,`${n.isTrue(this.sticky)===!0?U.rootSelector.substring(1):""}`,"vue-component"]},getSpacing(){return this.spacing?this.spacing:""},hasBackground(){return this.bgColor?l.HAS_BACKGROUND:""},blogRecentContainerClass(){return["blog-recent__container fade-in-bottom",`${n.isTrue(this.slider)===!0?"js-slick-carousel":"row mb-3"}`,"vue-component"]},hiddenContainer(){return n.isTrue(this.slider)===!1?n.isTrue(this.hideContainer):!1},skinClass(){return`${n.isTrue(this.slider)===!0?"has-slider":""}`},itemClass(){return`${n.isTrue(this.slider)===!0?"mb-6 mb-lg-0 blog-recent__slide":"col-sm-6 col-lg-4 mb-3 mb-sm-8"}`},postsArray(){return this.posts?JSON.parse(this.posts):[]},ctaParse(){return this.cta?JSON.parse(this.cta):null},caseStudies(){return n.isTrue(this.caseStudies)===!0},carouselOptions(){const e={slidesToShow:3,slidesToScroll:3,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:this.postsArray.length>3,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{centerMode:!0,infinite:!0,centerPadding:"30px",slidesToShow:2,slidesToScroll:2,dots:this.postsArray.length>2}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.postsArray.length>1}}]};return JSON.stringify(e)},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){const e="h2-font-size";return this.headlineClasses?n.hasFontSizeClass(this.headlineClasses)?this.headlineClasses:`${e} ${this.headlineClasses}`:e},sublineClassesValue(){return`blog-recent__subline ${this.sublineClasses?this.sublineClasses:"font-size-2"}`}},methods:{event(e){return e.layout!=="post"},isTrue(e){return n.isTrue(e)},blogTitleUrl(e){return e.layout==="casestudies"?e.blogtitlepic:this.imgUrl+e.blogtitlepic},target(e){return e.external?"_blank":"_self"}},props:{bgColor:String,dataAuthors:Object,headline:String,headlineLevel:String,headlineClasses:String,subline:String,sublineClasses:String,spacing:String,posts:String,cta:{default:null},hideContainer:{default:!1},imgUrl:{default:null},limit:{default:null},slider:{default:null},sticky:{default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ve=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"blog",migrate:!0,template:`
            blog
        `}},Symbol.toStringTag,{value:"Module"})),be=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"card",components:{"card-footer":{tagName:"card-footer",data(){return{maxTags:3}},computed:{lang(){return n.getLang()},tagsList(){return(Array.isArray(this.tags)?this.tags:this.tags.split(",")).slice(0,this.maxTags)},dataAuthorsList(){return this.dataAuthors?this.dataAuthors.display_name?{[this.dataAuthors.display_name]:this.dataAuthors}:this.dataAuthors:null}},template:`
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
  `,props:{classes:String,date:String,author:String,authorsList:Array,hasNoLink:Boolean,dataAuthors:Object,isRow:Boolean,tags:Array}}},data(){return{wordsToTruncate:20,activeView:null}},computed:{blogView(){return this.activeView},combinedTitle(){return`${this.title} ${this.externalLanguage?"("+this.externalLanguage+")":""}`},noLink(){return this.url===void 0||this.url===""},indexValue(){return this.index!=""&&this.index>=0?this.index:null},style(){return this.index?`--utility-animation-index: ${this.index}`:null},hasAnimationValue(){return n.isTrue(this.hasAnimation)===!0},utilityAnimationStep(){return this.hasAnimationValue?"1":null},rowValue(){return n.isTrue(this.row)===!0},variant(){return n.isTrue(this.long)===!0?"card--long":this.productValue?"card--products":n.isTrue(this.event)===!0?"card--event":this.rowValue?"card--row":"card--default"},classList(){return["card",this.hasAnimationValue?"utility-animation fade-in-bottom":"",`${this.noLink?"card--no-link":""}`,`${n.isTrue(this.large)===!0?"card--large mb-11":"h-100"}`,this.variant,this.spacing,"vue-component"]},productValue(){return n.getJSON(this.product)},truncatedExcerpt(){const e=n.isTrue(this.long)===!0?this.strippedExcerpt:n.truncateWords(this.strippedExcerpt,this.wordsToTruncate);return n.decodeHTML(e)},strippedExcerpt(){return n.stripHtml(this.excerpt)},cardDate(){return this.formatDate(this.date)},hasExtension(){return this.youtubeUrl?n.getYoutubeThumbnail(this.youtubeUrl):/^.+\.(jpg|webp|png)/.test(this.blogTitlePic)?this.blogTitlePic:this.blogTitlePic+".jpg"},hasBlogTitlePic(){return!this.youtubeUrl},hasNoLink(){return!!n.isTrue(this.webCast)},ctaValue(){const e=n.getJSON(this.cta);return e&&e.link===void 0&&(e.link=!0),e},cardFooterData(){return{date:this.cardDate,author:this.author,authorsList:this.authorList(this.author),hasNoLink:this.hasNoLink,dataAuthors:this.dataAuthors,isRow:this.rowValue,tags:this.tags}}},created(){if(n.isTrue(this.store)!==!0)return;const e=this.$root.StoreData.blogView;if(!e)return null;this.activeView=e(),e.subscribe(t=>{this.activeView=t})},methods:{isTags(e){return!!(e.parentElement.classList.contains("tags__btn")||e.parentElement.classList.contains("card__tags"))},formatDate(e){if(!e)return;if(n.isGermanDate(e))return e;const i=e.split(" ")[0].split("-"),s=i[0],r=i[1];return`${i[2]}.${r}.${s}`},authorList(e){return e&&typeof e=="object"&&e.length>0?e:e&&typeof e=="string"?[e]:e},subPointsList(e){return n.getJSON(e)},headlineClassValue(e){return e!==0?"mt-5":""},handleClick(e){if(this.noLink)return;const t=this.$refs.title,i=e.target;if(i.classList.contains("card__title"))return;const s=this.isTags(i);if(!i.parentElement.classList.contains("authors__link")&&!s)e.stopImmediatePropagation(),t.click();else{if(!s)return;e.stopImmediatePropagation(),e.preventDefault(),this.$emit(g.CARD_TAG_CLICKED,i.dataset.tag)}},isIncluded(e){return n.isTrue(e)?"check-mark":"x-mark"}},props:{blogTitlePic:String,url:String,title:String,target:String,excerpt:String,author:Array,date:String,footer:String,tag:{default:null},large:{default:null},long:{default:null},product:{default:null},subPoints:{default:null},event:{default:null},webCast:{default:null},youtubeUrl:String,dataAuthors:Object,scope:String,cta:{default:null},hasAnimation:{default:null},index:Number,externalLanguage:String,spacing:String,store:{default:null},row:{default:null},tags:Array},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ye=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"carousel",components:{"carousel-item":{tagName:"carousel-item",template:`
    <a :href="item.url" :target="item.target" class="carousel__item">
      <v-img
        cloudinary=true
        v-bind="item"
        :class="item.classes"
      ></v-img>
    </a>
  `,props:{item:Object}}},data(){return{clientWidth:null,resizeObserver:null}},computed:{jsonItems(){return n.getJSON(this.items)},classList(){return["carousel vue-component",this.bgColor?l.HAS_BACKGROUND:""]},style(){return[this.bgColor?`--color-carousel-background: ${this.bgColor};`:"",this.clientWidth?`--animation-scroll-width: -${this.clientWidth}px;`:""]}},mounted(){const e=this.$refs["row-section"];this.resizeObserver=new ResizeObserver(t=>{for(let i of t)i.target===e&&(this.clientWidth=i.contentRect.width)}),e&&(this.resizeObserver.observe(e),window.addEventListener("resize",this.updateClientWidth))},beforeDestroy(){window.removeEventListener("resize",this.updateClientWidth)},methods:{updateClientWidth(){var e;this.clientWidth=(e=this.$refs["row-section"])==null?void 0:e.clientWidth}},props:{items:Array,bgColor:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),_e=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"check-card",computed:{classList(){return["check-card vue-component",this.hasProducts?"check-card--products":null,this.classes?this.classes:null]},checkCardsContainerClass(){return["check-card__container utility-animation fade-in-bottom js-slick-carousel slick--single-list"]},containerValue(){return`col-lg-12 col-md-10 ${this.spacing?this.spacing:""} mb-9`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){return`h2-font-size utility-animation fade-in-bottom ${this.headlineClasses?this.headlineClasses:""} ${this.subline?"mb-10":""}`},sublineClassesValue(){return`check-card__subline utility-animation fade-in-bottom e w-lg-65 ${this.sublineClasses?this.sublineClasses:"font-size-2"}`},itemClass(){return"check-card__slide"},hasProducts(){var e;return(e=this.checks[0])==null?void 0:e.product},carouselOptions(){const e=this.hasProducts?2:3,t={slidesToShow:e,slidesToScroll:e,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:this.checks.length>e,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,dots:this.checks.length>2}},{breakpoint:992,settings:{centerMode:!0,infinite:!0,centerPadding:this.hasProducts?"37px":"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}},{breakpoint:768,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}}]};return JSON.stringify(t)}},methods:{},props:{headline:String,headlineLevel:String,headlineClasses:String,subline:String,sublineClasses:String,spacing:String,checks:{default:null},products:{default:null},classes:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Se=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"contact",props:{contact:Object,collapsed:Boolean,ajax:Boolean,spacing:String,quote:{type:Boolean,default:!1},bgColor:String,color:String,boxBgColor:String,boxColor:String,level:String,headline:String,subline:String,form:Object,buttons:Array,svgShape:Object,person:Object,noTopSpacing:Boolean},computed:{classList(){var e;return["contact",this.contactVariantClass,"vue-component",this.collapsed?"":"space-bottom-2 utility-animation utility-animation--percentage-offset",{"bg-grey":this.contact.hasGreyBackground},this.noTopSpacing||(e=this.contact)!=null&&e.svgShape||this.collapsed?"":this.spacing]},contactVariantClass(){return[this.contact.svgShape&&!this.quote?"contact--has-shape":"",this.quote?"contact--quote":"",this.collapsed?l.COLLAPSED:""]},contactLight(){return this.contact.light?"contact__person--light":""},contactBoxClass(){return this.collapsed?"":"col-md-10 col-lg-5 offset-lg-1 order-2"},contactFormClass(){return this.collapsed?"":"col-md-10 col-lg-6 order-1"},contactContainerClass(){return this.collapsed?"":"container pt-8 pt-lg-10"},contactRowClass(){return this.collapsed?"":"row justify-content-center"},styleObject(){return{"--color-contact-background":this.bgColor||this.contact.bgColor,"--contact-copy-color":this.color||this.contact.color,"--color-contact-box-background":this.boxBgColor||this.contact.boxBgColor,"--contact-box-copy-color":this.boxColor||this.contact.boxColor}}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Ce=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"content-scroller",data(){return{blockScrollPercentage:[],scrollDistancePercentage:0,minHeight:0,blockCount:0,isScrolledUpOut:!1,isScrolledDownOut:!1}},computed:{blocksValue(){return n.getJSON(this.blocks)},headlineValue(){const e=n.getJSON(this.headline);return{...e,level:e.level||"h2",classes:`content-scroller__headline ${e.classes||"h3-font-size"}`}},overlappingSizeValue(){return this.overlappingSize||"mt-md-n10"},style(){return{"--content-scroller-min-height":`${this.minHeight}px`}}},props:{headline:{default:null},blocks:Array,overlappingSize:String},mounted(){this.calcBlockCount(),this.$nextTick(()=>{this.handleResize()}),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{handleScroll(){this.calcScrollDistancePercentage(),this.updateBlocks()},handleResize(){this.calcMinHeight(),this.handleScroll()},resetIsScrolledUpOut(){const e=this.$refs.block;e&&(e.forEach((t,i)=>{this.setBlockMinPercentage(i)}),this.isScrolledUpOut=!0)},resetIsScrolledDownOut(){const e=this.$refs.block;e&&(e.forEach((t,i)=>{this.setBlockMaxPercentage(i)}),this.isScrolledDownOut=!0)},setBlockMaxPercentage(e){this.blockScrollPercentage[e]=100},setBlockMinPercentage(e){this.blockScrollPercentage[e]=0},updateBlocks(){if(!this.isScrolledUpOut&&this.scrollDistancePercentage<=0)return this.resetIsScrolledUpOut();if(!this.isScrolledDownOut&&this.scrollDistancePercentage>=100)return this.resetIsScrolledDownOut();if(this.scrollDistancePercentage<=0||this.scrollDistancePercentage>=100)return;this.isScrolledUpOut=!1,this.isScrolledDownOut=!1;const i=100/this.blockCount,s=this.$refs.block;s&&s.forEach((r,a)=>{const o=a*i,c=(a+1)*i;if(this.scrollDistancePercentage>=o&&this.scrollDistancePercentage<=c){let d=(this.scrollDistancePercentage-o)/i*100;this.blockScrollPercentage[a]=d}else this.scrollDistancePercentage<o?this.setBlockMinPercentage(a):this.scrollDistancePercentage>c&&this.setBlockMaxPercentage(a)})},getViewportHeight(){return window.innerHeight},calcScrollDistancePercentage(){const e=this.$el,t=window.scrollY,i=e.getBoundingClientRect().top+window.scrollY,r=e.offsetHeight/2;let a=0;t>=i&&(a=(t-i)/r*100),this.scrollDistancePercentage=a},calcBlockCount(){const e=this.blocks.length;e&&(this.blockCount=e)},calcBlockStyle(e){return[{"--content-scroller-block-scroll-percentage":this.blockScrollPercentage[e]}]},calcMinHeight(){const e=this.$refs.placeholder;e&&(this.minHeight=e.offsetHeight)}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ke=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"cta-list",computed:{classList(){return["cta-list vue-component",this.classes?this.classes:""]},ctaList(){return n.getJSON(this.list)}},methods:{text(e){return e.text||e.ctaText},href(e){return e.href||e.ctaHref},type(e){return e.type||e.ctaType}},props:{list:Array,classes:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),we=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"cta",computed:{tag(){return this.href||this.alternativeHref||this.target?"a":"button"},hasIcon(){return this.link||this.externalValue||this.icon||this.downloadValue},externalValue(){return n.isTrue(this.external)},downloadValue(){return n.isTrue(this.download)},classList(){return[`${this.baseClass} ${this.innerSkin}`,this.classes?this.classes:"",this.download?"cta--download":"",this.external?"cta--external":"",this.icon?`cta--has-icon cta--icon-${this.icon}`:"",n.isTrue(this.reversed)===!0?"cta--reversed":"",n.isTrue(this.monochrome)===!0?"cta--monochrome":"",this.link&&n.isTrue(this.active)===!0?l.ACTIVE:"",n.isTrue(this.loading)?l.LOADING:"",n.isTrue(this.hasBackground)===!0?"cta--has-background":"","vue-component"]},innerSkin(){return this.link?this.skin?this.skin:"":this.skin?`btn-${this.skin}`:"btn-primary"},innerWidth(){return this.width?this.width:`w-100 ${this.grow?"":"w-lg-auto"}`},baseClass(){let e=this.$.type.tagName;return this.link?e+=" link":e+=" btn "+this.innerWidth,e},iconName(){let e;return this.icon?e=this.icon:this.externalValue||this.downloadValue?e="arrow-external":this.link&&(e="arrow"),e},targetValue(){return this.externalValue?"_blank":this.target},sizeValue(){return"medium"}},props:{href:{default:null},button:Boolean,text:String,analytics:{default:null},link:Boolean,external:{default:null},skin:String,width:String,grow:Boolean,type:String,target:String,alternativeHref:{default:null},trigger:String,icon:String,download:{default:null},reversed:{default:null},monochrome:{default:null},active:{default:null},classes:{default:"",type:String},loading:{default:null},hasBackground:{default:null}},template:`
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
    </component>`}},Symbol.toStringTag,{value:"Module"})),v=class v{constructor(t){this.root=t,this.count=1,this.selector=this.getCurrentSelector(),this.currentElements=this.root.querySelectorAll(this.selector),this.root.matches(this.selector)&&(this.currentElements=this.mergeNodes(this.root,this.currentElements)),this.resetAnimation(),this.initialize()}resetAnimation(){this.root.querySelectorAll(`.${l.IS_STARTING}`).forEach(t=>{t.classList.remove(l.IS_STARTING)})}mergeNodes(t,i){const s=Array.from(i);return s.unshift(t),s}getCurrentSelector(){return`[data-utility-animation-step="${this.count}"]`}updateCurrentElement(t){const i=[];this.currentElements.forEach(s=>{t.srcElement!==s&&i.push(s)}),this.currentElements=i}handleAnimationEnd(t){const i=v.getGroup(t.srcElement);if(i){const s=parseInt(i.style.getPropertyValue(v.groupItemsLoadedProperty),10)||0;v.setGroupItemsLoaded(i,s+1)}this.updateCurrentElement(t),!(this.currentElements.length>0)&&(this.count++,this.currentElements=this.root.querySelectorAll(this.getCurrentSelector()),this.currentElements!==null&&this.currentElements.length>0?this.startStepAnimation(this.currentElements):this.setEnd())}startStepAnimation(t){t.forEach(i=>{i.classList.add(l.IS_STARTING)})}setEnd(){this.root.setAttribute(v.endDataset,!0)}startAnimation(){this.startStepAnimation(this.currentElements)}static getGroup(t){return t.closest(".utility-animation__group")}initialize(){this.root.addEventListener("animationend",i=>{this.handleAnimationEnd(i)}),new MutationObserver(i=>{i.forEach(s=>{var r;s.type==="attributes"&&s.attributeName.startsWith(v.inViewportDataset)&&((r=s.target)==null?void 0:r.getAttribute(v.inViewportDataset))==="true"&&this.startAnimation()})}).observe(this.root,{attributes:!0})}static setGroupItemsLoaded(t,i){t.style.setProperty(this.groupItemsLoadedProperty,i)}static hasPercentageOffset(t){return t.root.classList.contains("utility-animation--percentage-offset")}static hasSmallOffset(t){return t.root.classList.contains("utility-animation--small-offset")}static addObserver(t){const r=h=>{h.forEach(u=>{u.isIntersecting?u.target.setAttribute(this.inViewportDataset,!0):u.target.classList.contains("utility-animation--enter-exit")&&u.target.removeAttribute(this.inViewportDataset)})},a=new IntersectionObserver(r,{rootMargin:"0px 0px -200px 0px",threshold:0}),o=new IntersectionObserver(r,{rootMargin:"0px 0px 0px 0px",threshold:.4}),c=new IntersectionObserver(r,{rootMargin:"0px 0px -100px 0px",threshold:0});(t?[t]:this.instances).forEach(h=>{v.hasSmallOffset(h)?c.observe(h.root):v.hasPercentageOffset(h)?o.observe(h.root):a.observe(h.root)})}static resetGroup(t){this.setGroupItemsLoaded(t,0),this.instances.forEach(i=>{if(this.getGroup(i.root)===t){const r=i.root;i.currentElements=[r],r.removeAttribute("data-utility-animation-end"),i.startAnimation()}})}static initElement(t){const i=t.$el?t.$el:t,s=new this(i);return this.instances.push(s),s}static init(t){this.instances=[],[].forEach.call(t||document.querySelectorAll(this.rootSelector),i=>{this.initElement(i)}),this.addObserver()}static isElementObserved(t){return this.instances.some(i=>i.root===t)}static observeElementIfNotAlready(t){let i;this.isElementObserved(t)||(i=this.initElement(t)),this.addObserver(i)}static getIndexStyle(t){return`--utility-animation-index: ${t}`}};p(v,"rootSelector",".utility-animation"),p(v,"inViewportDataset","data-utility-animation-in-viewport"),p(v,"endDataset","data-utility-animation-end"),p(v,"instances",[]),p(v,"groupItemsLoadedProperty","--utility-animation-items-loaded");let j=v;const xe=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),Le=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"dropdown",props:{label:String,items:String,filterable:{default:null},hasAnimation:{default:null},index:Number},computed:{teleportSelector(){return'[id="root"], [data-v-app]'},dropdownLabelClasses(){return["dropdown__label font-size-sm",this.hasAnimation?"utility-animation fade-in-bottom":""]},parsedItems(){return n.getJSON(this.items)},filteredItems(){return this.filterableValue&&this.filterText.length>=this.minCharsToFilter?this.parsedItems.filter(e=>e.text.toLowerCase().includes(this.filterText.toLowerCase())):this.parsedItems},filterableValue(){return n.isTrue(this.filterable)===!0},style(){return this.hasAnimation?`--utility-animation-index: ${this.index};`:""}},methods:{initActiveSelection(){this.activeSelection=this.filteredItems.filter(e=>e.checked)},updateUtilityAnimation(){this.hasAnimation&&j.observeElementIfNotAlready(this.$refs.label)},resetSelection(){this.activeSelection=[]},applySelection(){this.toggleDropdown()},handleSelection(e){if(!this.activeSelection.includes(e))this.activeSelection.push(e);else{const t=this.activeSelection.indexOf(e);this.activeSelection.splice(t,1)}this.$emit(g.DROPDOWN_CHANGED,this.activeSelection)},toggleDropdown(){this.isOpen=!this.isOpen,this.isOpen?(this.$emit(g.DROPDOWN_OPENED,this),this.modalOpened()):(this.resetFilterText(),this.modalClosed())},closeModal(){document.body.classList.remove("modal-open")},modalOpened(){n.isUpperBreakpoint()||document.body.classList.add("modal-open")},modalClosed(){n.isUpperBreakpoint()||this.closeModal()},toggleIconClasses(e){return["dropdown__toggle-icon",this.activeSelection.includes(e)?l.ACTIVE:""]},handleMouseEnter(e){if(!n.isUpperBreakpoint())return e.preventDefault();this.toggleDropdown()},handleMouseDown(e){if(!n.isUpperBreakpoint())return e.preventDefault();this.toggleDropdown()},handleClick(e){if(n.isUpperBreakpoint())return e.preventDefault();this.toggleDropdown()},getCheckboxId(e,t){return`dropdown-checkbox-${e.value}-${t}`},resetFilterText(){this.filterText=""},resetModal(){this.isOpen=!1,this.closeModal()},handleResize(){this.resetModal()}},beforeMount(){var t;const e=(t=window.i18n)==null?void 0:t.loader;e&&e.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["search","apply","reset"])}),this.initActiveSelection()},mounted(){this.updateUtilityAnimation(),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},data(){return{activeSelection:[],isOpen:!1,filterText:"",minCharsToFilter:1}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),De=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"event-overview",data(){return{translationData:null,defaultLimit:3,maxLimitDefault:6,showMore:!1}},computed:{classList(){return["event-overview has-no-row is-component utility-animation vue-component",n.isTrue(this.overlap)?"event-overview--overlap":null]},lastIndex(){return parseInt(this.limitValue,10)+1},limitValue(){return this.limit?this.limit:this.defaultLimit},maxLimitValue(){return this.maxLimit>0?this.maxLimit:this.maxLimitDefault},eventsValue(){return n.getJSON(this.events).slice(0,this.maxLimitValue)||[]},hasMore(){var e;return this.showMore?!1:((e=this.translationData)==null?void 0:e.moreEvents)&&this.eventsValue.length>this.limitValue}},beforeMount(){var t;const e=(t=window.i18n)==null?void 0:t.loader;e&&e.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["moreEvents"])})},methods:{isVisible(e){return this.showMore||e+1<=this.limitValue},handleShowMore(){this.moreUrl&&(document.location.href=this.moreUrl),this.showMore=!0}},props:{events:Array,headline:String,headlineLevel:String,overlap:Boolean,limit:Number,maxLimit:Number,url:String,moreUrl:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Te=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"event-teaser",migrate:!0,template:`
                        event-teaser
                    `}},Symbol.toStringTag,{value:"Module"})),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"event",data(){return{hasMultipleDays:!1}},computed:{style(){return`
                --color-event-background: ${this.bgColor?this.bgColor:"var(--color-green-blue)"};
                --color-event-copy: ${this.color?this.color:"var(--color-copy-light)"};
                --color-event-time: ${this.timeColor?this.timeColor:"var(--color-green-blue)"};
            `},textWithAmpersand(){return this.text.replace(/&amp;/g,"&")},validDate(){let e=new Date(this.date);return isNaN(e.getTime())&&(e=n.convertToDate(this.date),this.hasMultipleDays=!0,e&&isNaN(e.getTime()))?null:e},dateDay(){if(!this.validDate)return;const e=this.validDate.getDate();return e<10?`0${e}`:e},dateMonth(){return this.validDate?this.validDate.toLocaleDateString(void 0,{month:"short"}).slice(0,3):void 0},dateWeekDay(){return this.validDate?this.validDate.toLocaleDateString(void 0,{weekday:"short"}).slice(0,2):void 0},imageValue(){return n.getJSON(this.image)},cloudinary(){return this.imageValue&&this.imageValue.cloudinary?this.imageValue.cloudinary:!0},timeValue(){return this.hasMultipleDays?this.date:n.standardizeTimeFormat(this.time)}},methods:{handleClick(){if(this.external)return window.open(this.url,"_blank");document.location.href=this.url}},props:{title:String,date:String,category:String,text:String,image:Object,bgColor:String,color:String,time:String,timeColor:String,classes:String,url:String,external:Boolean},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Pe=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"fab-button",migrate:!0,template:`
                      fab-button
                  `}},Symbol.toStringTag,{value:"Module"})),je=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"fab-hint",data(){return{expaned:!1,translationData:{}}},computed:{classList(){return["fab-hint vue-component",this.expaned?l.EXPANDED:""]},options(){return`{
        "parentSelector": ".fab-hint",
        "breakpoint": "xs",
        "startPoint": ".fab-hint__start",
        "endPoint": "9999999",
        "stickyOffsetTop": "0",
        "stickyOffsetBottom": 20
      }`},containerStyle(){return{...this.bgColor?{"--fab-hint-bg-color":this.bgColor}:{},...this.iconColor?{"--fab-hint-icon-color":this.iconColor}:{}}},iconValue(){return this.icon||"image-credits"},titleValue(){var e;return this.title||((e=this.translationData)==null?void 0:e.imageCredits)},enhancedText(){if(!this.text)return"";const t=new DOMParser().parseFromString(this.text,"text/html");return t.querySelectorAll("a").forEach(i=>i.classList.add("is-basic-link")),t.body.innerHTML}},beforeMount(){var t;const e=(t=window.i18n)==null?void 0:t.loader;e&&e.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["imageCredits"])})},mounted(){this.addObserver()},methods:{addObserver(){new MutationObserver(t=>{t.forEach(i=>{var s,r;i.attributeName==="style"&&(this.isVisible((r=(s=i==null?void 0:i.target)==null?void 0:s.style)==null?void 0:r.cssText)||this.handleClose())})}).observe(this.$el,{attributes:!0,attributeFilter:["style"]})},isVisible(e){return e!==""},handleClick(){this.expaned=!this.expaned},handleClose(){this.expaned=!1}},props:{icon:String,iconColor:String,bgColor:String,text:String,title:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Me=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"faq",data(){return{entriesWithState:[]}},beforeMount(){var e;this.entriesWithState=(e=this.entries)==null?void 0:e.map((t,i)=>(t.isOpen=null,t.isDetailsOpen=null,t.height=null,t.index=i,t.id=`entry-${i}`,t))},computed:{style(){return this.index?`--utility-animation-index: ${this.index}`:null},classList(){return["faq","utility-animation","container space-top-2","vue-component"]},headlineClasses(){var e;return`faq__headline fade-in-bottom ${(e=this.headline)!=null&&e.classes?this.headline.classes:""}`},headlineLevel(){var e;return(e=this.headline)!=null&&e.level?this.headline.level:"h2"}},methods:{getDelay(e){const t=e.index>0?200:0;return`--utility-animation-delay: ${`${e.index*t}ms`};`},handleClick(e){e.isOpen=e.isOpen===null?!0:null,e.isOpen&&(e.isDetailsOpen=!0)},getElementByRef(e){const t=this.$refs[e==null?void 0:e.id];if(!(!t||t.length===0))return t[0]},afterLeave(e){const t=this.getElementByRef(e);t&&(e.isDetailsOpen=null,t.style.removeProperty("display"),t.style.removeProperty("height"),t.classList.remove(l.IS_COLLAPSING))},enter(e){const t=this.getElementByRef(e);if(!t)return;const i=t.offsetHeight;t.style.removeProperty("height"),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,setTimeout(()=>{t.style.height=`${i}px`,t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom")})},leave(e){const t=this.getElementByRef(e);if(!t)return;const i=t.offsetHeight;t.classList.add(l.IS_COLLAPSING),setTimeout(()=>{t.style.height=`${i}px`})}},props:{headline:Object,entries:Array,index:Number},template:`
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
    </div>`}},Symbol.toStringTag,{value:"Module"})),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"feature-grid-item",computed:{classList(){return["feature-grid__item mb-3 fade-in-bottom",this.classes!==""?this.classes:"",this.centered?"is-centered":"","vue-component"]},style(){return`--utility-animation-index: ${this.index};`},image(){var e;return(e=this.item)==null?void 0:e.image},title(){var e;return(e=this.item)==null?void 0:e.title},headlineLevel(){var e;return(e=this.item)!=null&&e.level?this.item.level:"h3"},headlineClasses(){var i;const e="mb-2",t=(i=this.item)!=null&&i.classes?this.item.classes:"font-size-2 bold";return`${e} ${t}`},description(){var e;return(e=this.item)==null?void 0:e.description},copy(){var e;return(e=this.item)==null?void 0:e.copy},secondCopy(){var e;return(e=this.item)==null?void 0:e.copy_1},list(){var e;return(e=this.item)==null?void 0:e.list},secondList(){var e;return(e=this.item)==null?void 0:e.list_1},ctaClasses(){var i;if(!this.item.cta)return;const e="mt-5",t=((i=this.item)==null?void 0:i.cta.align)==="right"?"d-flex justify-content-end":"";return`${e} ${t}`}},methods:{},props:{classes:String,item:Object,index:Number,centered:String},template:`
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
    </div>`}},Symbol.toStringTag,{value:"Module"})),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"feature-grid",migrate:!0,template:`
                  feature-grid
              `}},Symbol.toStringTag,{value:"Module"})),Ie=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"feature-list",data(){return{defaultIcon:"check"}},computed:{classList(){return["feature-list container space-2 vue-component"]},itemsWithFallback(){const e=[];return this.items.forEach(t=>{const i=t.icon?t.icon:this.defaultIcon,s=i===this.defaultIcon,r=s?"var(--color-blue-jeans)":t.color,a=s,o=s?!0:t.circle,c=s?"medium":t.size,d=t.bullet,h={icon:i,color:r,hasBackground:a,circle:o,size:c,bullet:d};e.push(h)}),e}},methods:{},props:{items:{default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Ae=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"filter-bar",computed:{flatSelections(){return this.selections.flat()},storedItems(){return this.$root.StoreData.blogItems?this.$root.StoreData.blogItems():[]},dataAuthorsValue(){return n.getJSON(this.dataAuthors)},normalizedItems(){return this.storedItems.slice(this.itemStartPoint).map(e=>({...e,blogtitlepic:`${e.blog_image_path}${e.blogtitlepic}`}))},filteredItems(){if(!this.selections.length)return this.maxBlogPosts?this.normalizedItems.slice(0,this.maxBlogPosts):this.normalizedItems;let e=[];return this.selections.forEach(t=>{t.forEach(i=>{this.filterDropdowns.forEach(s=>{const r=s.key,a=this.normalizedItems.filter(o=>Array.isArray(o[r])?o[r].includes(i.value):o[r]===i.value);e=[...e,...a]})})}),this.getMaxItems(e)},authors(){return this.extractPropertyCounts("author")},topics(){return this.extractPropertyCounts("categories")},tags(){return this.extractPropertyCounts("tags")},dropdownCollection(){return[this.authors,this.topics,this.tags]}},created(){this.$root.StoreData.blogItems=this.$root.Store(n.getJSON(this.items)),this.$root.StoreData.blogView=this.$root.Store(this.activeView)},beforeMount(){var t;const e=(t=window.i18n)==null?void 0:t.loader;e&&e.then(()=>{var i,s,r,a;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["onlyLanguage","filterAuthors","filterTopics","filterTags","clearAll"]),this.filterDropdowns=[{label:(s=this.translationData)==null?void 0:s.filterAuthors,items:this.authors,key:"author"},{label:(r=this.translationData)==null?void 0:r.filterTopics,items:this.topics,key:"categories"},{label:(a=this.translationData)==null?void 0:a.filterTags,items:this.getFilteredTags(),key:"tags",filterable:!0}]})},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{getFilteredTags(){const e=n.getHash();if(!e)return this.tags;const t=decodeURIComponent(e.substring(1)).toLowerCase();return this.tags.map(s=>s.text.toLowerCase()===t?(this.addTagToSelection(s),{...s,checked:!0}):s)},addTagToSelection(e,t){const i=t||this.dropdownCollection.length-1;this.selections[i]=[e]},getMaxItems(e){return e=[...new Set(e)],this.maxBlogPosts?e.slice(0,this.maxBlogPosts):e},handleResize(){this.itemStartPoint=n.isUpperBreakpoint()?1:0},extractPropertyCounts(e){return this.normalizedItems.reduce((i,s)=>(Array.isArray(s[e])?s[e].forEach(r=>{this.updatePropertyCount(i,r)}):this.updatePropertyCount(i,s[e]),i),[]).sort((i,s)=>i.text.localeCompare(s.text))},updatePropertyCount(e,t){const i=e.find(s=>s.text.toLowerCase()===t.toLowerCase());i?i.count+=1:e.push({text:t,value:t,count:1})},handleView(e){this.activeView=e,this.$root.StoreData.blogView(this.activeView)},toggleIconClasses(e){return["filter-bar__toggle-icon",e===this.activeView?l.ACTIVE:""]},isArrayEmpty(e){return!Object.keys(e).length},isArrayEmptyRecursive(e){for(let t=0;t<e.length;t++){const i=e[t];if(i&&!this.isArrayEmpty(i))return!1}return!0},handleCardTagClicked(e){this.clearAllSelections(),this.getTagByName(e.toLowerCase())},getTagByName(e){this.tags.map(t=>{if(t.text.toLowerCase()===e){const i=this.filterDropdowns.length-1;this.addTagToSelection(t,i),this.updateDropdownSelection([t],i),this.hasClickedOnTag=!0}})},handleDropdownChange(e,t){e.length===0?this.selections[t]&&delete this.selections[t]:(this.hasClickedOnTag&&(this.hasClickedOnTag=!1,this.selections[t]=[]),this.selections[t]=e),this.isArrayEmptyRecursive(this.selections)&&(this.selections=[])},handleDropdownOpened(e){this.$refs.dropdowns.forEach(t=>{t!==e&&(t.isOpen=!1)})},clearAllSelections(){this.selections=[],this.$refs.dropdowns.forEach(e=>{e.isOpen=!1,e.activeSelection=[]})},removeSelection(e,t){if(e.preventDefault(),this.selections=this.selections.map(s=>s.filter(r=>r.value!==t.value)),this.selections.forEach((s,r)=>{this.updateDropdownSelection(s||[],r)}),this.selections.filter(s=>s.length>0).length===0)return this.clearAllSelections()},updateDropdownSelection(e,t){const i=this.$refs.dropdowns[t];i&&(i.activeSelection=e)}},data(){return{activeView:"tile-view",views:["tile-view","list-view"],filterDropdowns:[],selections:[],itemStartPoint:0,hasClickedOnTag:!1}},props:{spacing:String,items:String,maxBlogPosts:Number,dataAuthors:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),qe=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-attachments",data(){return{isDragging:!1,hasError:!1,filesLength:0,files:new DataTransfer}},computed:{filesList(){if(!this.files.files)return null;const e=Array.from(this.files.files);return this.filesLength>this.maxFilesValue?e.slice(0,this.maxFilesValue):e},classList(){return["form-attachments",this.hasError===!0?"has-error":"",this.isDragging?l.DRAGGING:"","vue-component"]},interactableClassList(){return["form-attachments__interactable",this.hasErrors?l.HAS_ERROR:""]},requiredValue(){return this.required?"required":null},maxSizeMb(){return this.maxSize/1e6},maxFilesValue(){return this.maxFiles?this.maxFiles:5},extensionList(){const e=this.extensions.map(t=>n.capitalize(t));return e==null?void 0:e.join(", ")},extensionListText(){return`${this.extensionList} max. ${this.maxSizeMb} MB`},acceptList(){return this.extensions.map(e=>`.${e}`).join(",")}},props:{hasError:{default:null},maxSize:Number,description:String,text:String,requiredMsg:{default:null},required:{default:null},extensions:Array,id:String,maxFiles:Number},mounted(){var e,t;this.root=this.$refs.root,this.interactable=this.$refs.interactable,this.button=this.$refs.button,this.textElement=this.$refs.text,this.file=this.$refs.file,this.error=this.$refs.error,this.base64=this.$refs.base64,this.bindEvents(),(t=(e=window.i18n)==null?void 0:e.loader)==null||t.then(()=>{var i,s,r;this.wrongTypeText=(i=window.i18n)==null?void 0:i.translate("formAttachmentsWrongType"),this.maxFilesText=(s=window.i18n)==null?void 0:s.translate("formAttachmentsMaxFiles",this.maxFilesValue),this.maxSizeText=(r=window.i18n)==null?void 0:r.translate("formAttachmentsMaxSize")})},methods:{bindEvents(){this.interactable.addEventListener("drag",this.handleDragStart.bind(this)),this.interactable.addEventListener("dragstart",this.handleDragStart.bind(this)),this.interactable.addEventListener("dragover",this.handleDragOver.bind(this)),this.interactable.addEventListener("dragenter",this.handleDragOver.bind(this)),this.interactable.addEventListener("drop",this.handleDrop.bind(this)),this.interactable.addEventListener("dragleave",this.handleDrop.bind(this)),this.interactable.addEventListener("dragend",this.handleDrop.bind(this)),this.interactable.addEventListener("click",this.handleAddAttachment.bind(this)),document.addEventListener(g.FORM_ATTACHMENT_ERROR,this.handleFormAttachmentError.bind(this));const e=n.getParent(this.root,"form");e&&e.addEventListener("reset",this.reset.bind(this))},handleFormAttachmentError(e){this.showError(this.maxSizeText)},handleDragStart(e){e.preventDefault(),e.stopPropagation()},handleDragOver(e){e.preventDefault(),e.stopPropagation(),window.clearTimeout(this.dropTimeout),this.isDragging=!0},handleDrop(e){var i;e.preventDefault(),e.stopPropagation();const t=(i=e==null?void 0:e.dataTransfer)==null?void 0:i.files;this.dropTimeout=window.setTimeout(()=>{this.isDragging=!1,e.type==="drop"&&this.handleDroppedFiles(t)},50)},isAllowedFileExtension(e){var r;if(!e)return;const t=(r=this.file.getAttribute("accept"))==null?void 0:r.toLowerCase(),i=(t==null?void 0:t.split(","))||[],s=n.getExtension(e.name);return i.includes(`.${s}`)},isUnderMaxSize(e){if(!(!e||!e.size))return e.size<=this.maxSize},handleDroppedFiles(e){const t=this.getErrors(e);if(t)return this.showError(t);this.appendDroppedFiles(e)},handleAddAttachment(){this.file.click()},restoreDataTransfer(){this.file.files=this.files.files},showError(e){this.restoreDataTransfer(),this.setErrorText(e),this.hasError=!0},setErrorText(e){this.error&&(this.error.innerText=e)},reset(){this.file.files=null,this.files=new DataTransfer,this.resetError()},resetError(){this.setErrorText(this.requiredMsg),this.hasError=!1},appendDroppedFiles(e){this.base64&&(this.isRequired&&(this.file.required=!1),this.appendFiles(e))},areFilesAllowed(e){return Array.from(e).every(t=>this.isAllowedFileExtension(t))},getErrors(e){if(!this.areFilesAllowed(e))return this.wrongTypeText;if(this.files.files.length+e.length>this.maxFilesValue)return this.maxFilesText;if(!Array.from(e).every(t=>this.isUnderMaxSize(t)))return this.maxSizeText},appendFiles(e){if(this.files.files.length>=this.maxFilesValue)return this.showError(this.maxFilesText);Array.from(e).forEach(t=>{this.files.items.add(t)}),this.syncFiles()},syncFiles(){this.filesLength=this.files.items.length,this.file.files=this.files.files,this.resetError()},handleChange(e){var s;const t=(s=e==null?void 0:e.target)==null?void 0:s.files,i=this.getErrors(t);if(i)return this.showError(i);this.appendFiles(t)},handleClick(e){this.files.files[e]&&(this.files.items.remove(e),this.syncFiles())},toSize(e){return n.toSize(e)}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),$e=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-checkbox",computed:{otherId(){return`${this.idValue}_checkbox`},required(){var e;return(e=this.checkbox)!=null&&e.required?"required":null},idValue(){return this.id?this.id:this.checkbox.id}},props:{checkbox:Object,group:String,id:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ze=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-checkboxes",computed:{required(){var e;return(e=this.checkbox)!=null&&e.required?"required":null},message(){return this.field.required?this.field.requiredMsg:null},groupId(){return this.field.id}},props:{field:Object,id:{default:null}},template:`
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <template v-for="checkbox in field?.checkboxes">
      <form-checkbox :checkbox="checkbox" :group="groupId" :id="field.id + checkbox.id" />
    </template>
  `}},Symbol.toStringTag,{value:"Module"})),Be=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-fields",data(){return{edited:!1,userValue:null}},computed:{classList(){return["form-field js-form-message form-group",`${this.field.type==="hidden"?"d-none":""}`,this.groupClass,this.hasAnimation?"utility-animation utility-animation--small-offset fade-in-bottom":"",`${this.field.showIn?"d-none form-field--show-in "+this.showInClasses:""}`,"vue-component"]},showInClasses(){var e,t;return(t=(e=this.field)==null?void 0:e.showIn)==null?void 0:t.map(i=>"show-in-"+i).join(" ")},groupClass(){return this.field.type==="checkbox"?"mb-3":this.field.type==="file"?"mb-8":""},readonly(){return this.field.readonly?"readonly":null},required(){return this.field.required?"required":null},placeholder(){return this.field.placeholder?this.field.placeholder:null},value(){return this.edited?this.userValue:this.replaceValue&&this.field.value==="#form-field-replace-value#"?this.replaceValue:this.field.value?this.field.value:null}},mounted(){const e=this.$parent;if(!e)return;const t=e.$el;t&&t.addEventListener("reset",this.handleReset)},methods:{getRequiredMsg(e){return e.requiredMsg?e.requiredMsg:""},handleChange(e){const i=e.currentTarget.value;this.edited=!0,this.userValue=i},handleReset(){this.edited=!1,this.userValue=null}},props:{options:Array,field:Object,id:{default:null},replaceValue:{default:null},hasAnimation:{default:null}},template:`
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
    </template>`}},Symbol.toStringTag,{value:"Module"})),Ve=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-radio",computed:{otherId(){return`${this.radio.id}_radio`},required(){var e;return(e=this.radio)!=null&&e.required?"required":null},idValue(){return this.id?this.id:this.radio.id}},props:{radio:Object,group:String,id:String,name:String},methods:{changed(e){this.$emit("action-changed",e.changeAction||null)}},template:`
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
`}},Symbol.toStringTag,{value:"Module"})),Fe=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-radios",computed:{otherId(){return`${this.radio.id}_radio`},required(){var e;return(e=this.radio)!=null&&e.required?"required":null},message(){return this.field.required?this.field.requiredMsg:null}},props:{field:Object,id:{default:null}},template:`
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <div class="d-flex flex-wrap">
      <template v-for="radio in field?.radios">
        <form-radio class="pr-10" :radio="radio" :group="id" :name="id" :id="field.id + radio.id" @action-changed="$emit('action-changed', $event)" />
      </template>
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),Re=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"form-select",computed:{required(){var e;return(e=this.field)!=null&&e.required?"required":null}},props:{options:Array,field:Object,id:String},template:`
    <label class="input-label" :for="id">{{field.label}}</label>
    <select class="form-control custom-select text-muted" :name="id" :required="required">
      <option value>{{field.placeholder}}</option>
      <template v-for="option in options">
        <option :value="option.value">{{option.text}}</option>
      </template>
    </select>
  `}},Symbol.toStringTag,{value:"Module"})),Ue=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"formular",data(){return{originalAction:"",formAction:""}},computed:{classList(){var e;return["form",`${n.isTrue(this.light)===!0?"is-light":""}`,`${n.isTrue(this.ajax)===!0?"form--ajax":""}`,`${n.isTrue(this.container)===!0?"container":""}`,`${n.isTrue(this.customValidation)===!0?"form--custom-validation":""}`,((e=this.form)==null?void 0:e.noCustomSubmit)===!0?_.noCustomSubmitClass:"","vue-component"]},hasAnimationValue(){return n.isTrue(this.hasAnimation)},rowClassList(){return["form__row",`${this.container?"row":""}`]},wrapperClassList(){return[`${this.container?"col-md-11 col-lg-10":""}`]},headlineClassList(){return["container headline-row",`${this.space?this.space:"space-top-2"}`,this.hasAnimationValue?"utility-animation fade-in-bottom":""]},sublineClassList(){return["text-center",`${this.form.sublineClasses?this.form.sublineClasses:""}`]},formClassList(){return["form__submit mt-5",`${this.positionValue}`]},positionValue(){return this.form.ctaPosition?this.form.ctaPosition:n.isTrue(this.uncentered)?"":"justify-content-end"},method(){return this.form.method?this.form.method:"post"},preparedBlocks(){const e=[];let t=0,i=[];return this.form.fields.forEach(s=>{if(s.rowStart||s.rowEnd)s.rowStart?(e[t]=i,i.push(s),s.rowEnd&&(i=[],t++)):s.rowEnd&&(i.push(s),i=[],t++);else{if(i.push(s),e[t])return;e[t]=i,i=[],t++}}),e}},beforeMount(){this.originalAction=this.formAction=this.form.action},methods:{getOptions(e){return typeof e.options=="string"?this.options[e.options]:e.options},getBlockClassList(e){return["row mx-n3",`${e!=null&&e.rowClass?e.rowClass:""}`]},getFieldClassList(e){return["px-3",`${e.col?"col-md-"+e.col:"col-md-12"}`]},getId(e){const t=(e==null?void 0:e.radios)||(e==null?void 0:e.checkboxes),i=t?t[0].id:e==null?void 0:e.id;return n.isTrue(this.hasUuid)?_.getId(i):i},updateAction(e){e?this.formAction=e:this.formAction=this.originalAction}},props:{form:Object,light:{default:null},analytics:{default:null},space:String,container:{default:null},ajax:{default:null},uncentered:{default:null},replaceValue:{default:null},customValidation:{default:null},options:Object,hasUuid:{default:null},hasAnimation:{default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"}));let yt,Z,_t,ct,K=0;const f=function(e){console.error("There was an issue loading a component. It might be blocked by an Adblock Script.",e)},St=()=>{const e=new CustomEvent(Z.WINDOW_RESIZE,{});document.dispatchEvent(e)},He=()=>{const e=new CustomEvent("VUE_IS_MOUNTED",{});document.dispatchEvent(e)},We=e=>{let i=!1;e.forEach(s=>{if(!i&&(s.contentRect.height>K+3||s.contentRect.height<K-3)){K=s.contentRect.height,i=!0,St();return}})},Ge=()=>{new ResizeObserver(We).observe(document.body)},Je=function(e){e.detail!==null&&Ct(e.detail.target)},Ct=function(e){[].forEach.call(e==null?void 0:e.querySelectorAll("[data-animate-number]"),t=>{const i=JSON.parse(t.dataset.animateNumber);_t.animateValue(t,i.start,i.end,1500)})},Ze=function(){const e=new CustomEvent("SHARED_COMPONENTS_READY",{});document.dispatchEvent(e)},Ke=function(e){for(let t=0;t<ct.length;t++){const i=ct[t];i&&i.init&&i.init(e)}document.addEventListener(Z.REFRESH_ANIMATE_NUMBERS,Je),Ct(document),Ze()},Xe=function(){const e=Promise.resolve().then(()=>se).then(i=>i.default).catch(f),t=[Promise.resolve().then(()=>La).then(i=>i.default).catch(f),Promise.resolve().then(()=>Da).then(i=>i.default).catch(f),Promise.resolve().then(()=>ge).then(i=>i.default).catch(f),Promise.resolve().then(()=>Ta).then(i=>i.default).catch(f),Promise.resolve().then(()=>Oa).then(i=>i.default).catch(f),Promise.resolve().then(()=>Pa).then(i=>i.default).catch(f),Promise.resolve().then(()=>ja).then(i=>i.default).catch(f),Promise.resolve().then(()=>Ma).then(i=>i.default).catch(f),e,Promise.resolve().then(()=>Ea).then(i=>i.default).catch(f),Promise.resolve().then(()=>Na).then(i=>i.default).catch(f),Promise.resolve().then(()=>Ia).then(i=>i.default).catch(f),Promise.resolve().then(()=>Aa).then(i=>i.default).catch(f),Promise.resolve().then(()=>qa).then(i=>i.default).catch(f),Promise.resolve().then(()=>xe).then(i=>i.default).catch(f),Promise.resolve().then(()=>$a).then(i=>i.default).catch(f),Promise.resolve().then(()=>oe).then(i=>i.default).catch(f),Promise.resolve().then(()=>za).then(i=>i.default).catch(f)];Promise.all(t).then(i=>{ct=i,Ke()})},Ye=()=>(K=document.body.clientHeight,Promise.all([Promise.resolve().then(()=>Fa).then(e=>{yt=e.default,window.i18n=new yt}).catch(f),Promise.resolve().then(()=>ie).then(e=>{Z=e.default}).catch(f),Promise.resolve().then(()=>y).then(e=>{_t=e.default}).catch(f)])),Qe=()=>{document.addEventListener("VUE_IS_MOUNTED",e=>{Ye().then(()=>{Xe(),Ge()})}),window.addEventListener("scroll",()=>{const e=new CustomEvent(Z.SCROLL_UPDATE,{});document.dispatchEvent(e)}),window.addEventListener("resize",()=>{St()})},ti=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"globals",mounted(){Qe(),He()},template:`
        <slot></slot>
    `}},Symbol.toStringTag,{value:"Module"})),ei=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"google-map-entry",computed:{classList(){return["google-map-entry media vue-component",this.icon==="phone-charger"?"":"mb-5"]}},props:{icon:String,headline:String,subline:String},template:`
    <div :class="classList">
      <icon class="mr-3" :icon="icon" size="medium"/>
      <div class="media-body">
        <h5 class=" mb-1">{{ headline }}</h5>
        <span class="d-block text-body font-size-1" v-html="subline" />
      </div>
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),ii=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"google-map",computed:{classList(){return["google-map position-relative mx-3 mx-md-8 vue-component"]},leafletOptions(){var s;const e=this.location.coordinates,t=[50,45],i={map:{scrollWheelZoom:!1,coords:e},marker:[{coords:e,icon:{iconUrl:n.getAssetPath("svg/icons/map-pin.svg"),iconSize:t},popup:{text:this.location.street+", "+this.location.city,title:(s=window.i18n)==null?void 0:s.translate("address")}}]};return JSON.stringify(i)}},mounted(){this.loadMap()},methods:{loadMap(){var i,s;const e=this.$refs.map,t=(s=(i=$==null?void 0:$.HSCore)==null?void 0:i.components)==null?void 0:s.HSLeaflet;t===null||L===null||t.init(e)}},props:{location:{default:null},entries:{default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),si=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"grid-list",computed:{classList(){return["grid-list row mb-3 utility-animation__group vue-component"]},columnClassList(){return[this.view==="tile-view"?"col-sm-6 col-lg-4":"col-sm-6 col-lg-12","mb-3 mb-sm-8"]},isList(){return this.view==="list-view"},isRow(){return!!this.isList}},watch:{view(){this.resetUtilityAnimation()},items(){this.itemsChanged=!0}},created(){},updated(){this.itemsChanged&&(this.itemsChanged=!1,this.reinitUtilityAnimation())},methods:{resetUtilityAnimation(){setTimeout(()=>{j.resetGroup(this.$refs.group)},100)},reinitUtilityAnimation(){!this.$refs.items||!this.$refs.items.length===0||(j.instances=[],j.init(Array.from(this.$refs.items)),j.addObserver())},blogImgUrl(e){const t="blog/heads/";return e.includes(t)?e:`${t}${e}`},handleCardTagClicked(e){this.$emit(g.CARD_TAG_CLICKED,e)}},props:{items:String,view:String,dataAuthors:Array},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ai=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"grid",computed:{headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h2"},headlineClassesValue(){return`grid__headline ${this.headlineClasses?this.headlineClasses:"h3-font-size"}`},style(){const e=n.isTrue(this.light)?"var(--color-copy-light)":null;return{backgroundColor:this.bgColor,"--color-copy":e,"--color-headlines":e}},itemsValue(){return n.getJSON(this.items)}},methods:{getItemStyle(e){return j.getIndexStyle(e)}},props:{items:String,headline:String,headlineLevel:String,headlineClasses:String,light:{default:!1},bgColor:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ri=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"headline-row",migrate:!0,template:`
                    headline-row
                `}},Symbol.toStringTag,{value:"Module"})),oi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"headline",computed:{tag(){return this.level?this.level:"h2"},classList(){return`${this.classes&&n.hasFontSizeClass(this.classes)?this.classes:`${this.tag}-font-size ${this.classes?this.classes:""}`} headline vue-component`},dataUtilityAnimationStep(){return this.utilityAnimationStep?this.utilityAnimationStep:null}},props:{text:String,level:String,classes:String,utilityAnimationStep:Number},template:`
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
`}},Symbol.toStringTag,{value:"Module"})),ni=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"hero-text-image",migrate:!0,template:`
                  hero-text-image
              `}},Symbol.toStringTag,{value:"Module"})),li=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"hero",components:{"hero-pattern":{tagName:"hero-pattern",template:`
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
  `}},data(){return{introHeight:null}},mounted(){this.setIntroStyle()},methods:{setIntroStyle(){if(!this.isCentered)return;const e=this.$refs.intro;e&&(this.introHeight=e.offsetHeight,e.style.height="0")},handleLetterSwitcherEnded(){const e=this.$refs.intro;e&&(e.style.height=`${this.introHeight}px`,e.style.opacity=1)}},computed:{classList(){return["hero vue-component",this.variant,this.isLight?"is-light":"",this.isLightOverline?"is-light-overline":"",this.shapePosition,this.fullscreen?"hero--fullscreen":"",this.shapeFullscreen?"hero--shape-fullscreen":"",this.animation?"hero--animation":"",this.textShadow?"hero--text-shadow":"",this.bgWidth?"hero--bg-width":"",this.isCentered?"hero--centered":"",this.shapeInContent?"hero--shape-in-content":"",this.hasStickyScroller?U.getRootClass():""]},contentClassList(){return["hero__content",this.spacing?this.spacing:this.animation?"":"py-10 py-lg-11"]},style(){return[this.bgColor?`--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${n.hexToRgb(this.bgColor)}`:"",this.bgWidth?`--hero-background-width: ${this.bgWidth}%;`:"",this.overlineBgColor?`--hero-overline-background-color: ${this.overlineBgColor};`:""]},cta(){return this.heroJson?this.heroJson.cta:null},isLight(){return this.heroJson?this.heroJson.light:!1},isLightOverline(){return this.heroJson&&typeof this.heroJson.lightOverline<"u"?this.heroJson.lightOverline:this.isLight},background(){return this.heroJson&&this.heroJson.background?this.heroJson.background:null},bgColor(){return this.heroJson?this.heroJson.bgColor:null},bgWidth(){return this.heroJson?this.heroJson.bgWidth:null},overline(){return this.heroJson?this.heroJson.overline:null},overlineBgColor(){return this.heroJson?this.heroJson.overlineBgColor:null},subline(){return this.heroJson?this.heroJson.subline:null},headline(){return this.heroJson?this.heroJson.headline:null},headlineClasses(){return this.heroJson?this.heroJson.headlineClasses:null},headlineClassList(){return["hero__headline",this.headlineClasses]},textShadow(){return this.heroJson?this.heroJson.textShadow:null},level(){return this.heroJson&&this.heroJson.level?this.heroJson.level:"h1"},animation(){return this.heroJson?this.heroJson.animation:null},letterSwitcher(){return this.heroJson?this.heroJson.letterSwitcher:null},icon(){return this.heroJson&&this.background?this.background.icon:null},fullscreen(){return this.heroJson&&this.heroJson.fullscreen?this.heroJson.fullscreen:!1},spacing(){return this.heroJson&&this.background?this.background.spacing:null},img(){return this.heroJson&&this.background?this.background.img:null},hasStickyScroller(){return this.heroJson?this.heroJson.sticky:!1},lottieSettings(){if(!this.shape||!this.shape.lottie)return;const e=this.shapeFullscreen?"100%":"auto";return{...this.shape.lottieSettings,width:"auto",height:e}},lottieFileData(){return this.shape?this.shape.lottie?this.shape.lottie:this.lottieData?n.getJSON(this.lottieData):null:null},showShape(){return this.shape.img||this.shape.lottie||this.lottieFileData},shape(){return this.heroJson&&this.heroJson.shape?this.heroJson.shape:null},shapeFullscreen(){return this.shape&&this.shape.fullscreen?this.shape.fullscreen:!1},shapeBottom(){return this.shape&&this.shape.bottom||null},shapeTop(){return this.shape&&this.shape.top||null},shapePosition(){return this.shape?this.shapeFullscreen||this.shapeTop?"hero--shape-top":this.shapeBottom?"hero--shape-bottom":"hero--shape-center":null},shapeInContent(){return this.shape&&this.shape.inContent?this.shape.inContent:!1},variant(){return this.heroJson&&this.heroJson.variant?this.heroJson.variant:null},pattern(){return this.heroJson&&this.heroJson.pattern?this.heroJson.pattern:null},ctaList(){return!this.heroJson||this.animation||!this.heroJson.cta&&!this.heroJson.ctaList?null:this.heroJson.cta?[this.heroJson.cta]:this.heroJson.ctaList},showShapeContainer(){return this.bgWidth||this.isSmall||this.showShape&&this.shapeInContent},isCentered(){return!!this.letterSwitcher},isSmall(){return this.variant==="hero--small"},imgSrcSets(){return this.bgWidth?"heroStudy":null},badges(){return this.heroJson&&this.heroJson.badges?this.heroJson.badges:!1},hasBack(){return this.heroJson&&this.heroJson.back?this.heroJson.back:!1},heroJson(){return n.getJSON(this.hero)}},props:{hero:Object,lottieData:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ci=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"icon-blocks",migrate:!0,template:`
                  icon-blocks
              `}},Symbol.toStringTag,{value:"Module"})),di=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"icon",data(){return n.validateVueProps(this)},computed:{classList(){return["icon",`${this.classes?this.classes:""}`,`${this.props.hasBackground?"icon--has-background":""}`,`icon--${this.props.direction}`,`icon--${this.props.icon}`,`${this.props.animation?"js-text-animation__icon":""}`,`${this.props.circle?"icon--circle":""}`,`${this.props.hover?"icon--hover":""}`,"vue-component"]},innerSize(){var e;switch(this.props.size){case"xxl":e="200px";break;case"xl":e="120px";break;case"medium":e="28px";break;case"small":e="18px";break;case"xs":e="10px";break;default:case"large":e="48px";break}return e},parentStyle(){return`--color-icon: ${this.props.color}; --icon-rotation: ${this.rotation}`},rotation(){return this.props.direction==="left"?"180deg":this.props.direction==="clockwise"?"90deg":"0deg"},settings(){return{width:this.innerSize,height:this.innerSize,padding:this.props.padding,"xml:space":"preserve",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:link":"http://www.w3.org/1999/xlink"}}},props:{icon:{default:"close"},color:{default:"currentColor"},direction:{default:"right"},size:{default:"large"},circle:{default:null},hover:{default:null},padding:{default:6},animation:{default:null},classes:{default:""},closed:{default:null},hasBackground:{default:null},step:{default:null}},template:`
    <span :class="classList" :style="parentStyle">
      <component :is="icon" v-bind="settings" :color="props.color" :closed="closed" :step="step" />
    </span>
    `}},Symbol.toStringTag,{value:"Module"})),hi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"arrow-curl",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" viewBox="0 0 26 28">
      <path d="M24.9384 0.252534C25.3512 0.218513 25.7134 0.525585 25.7475 0.938399C25.7815 1.35121 25.4744 1.71344 25.0616 1.74747L24.9384 0.252534ZM12.8286 3.88889L13.2309 4.52181L13.2309 4.52181L12.8286 3.88889ZM7.47313 12.5556L6.74138 12.3911L6.74138 12.3911L7.47313 12.5556ZM6.54139 27.5213C6.25346 27.8191 5.77865 27.8271 5.48088 27.5392L0.628414 22.847C0.330642 22.5591 0.322666 22.0843 0.610598 21.7865C0.89853 21.4888 1.37334 21.4808 1.67111 21.7687L5.98441 25.9395L10.1552 21.6262C10.4431 21.3284 10.9179 21.3204 11.2157 21.6084C11.5135 21.8963 11.5215 22.3711 11.2335 22.6689L6.54139 27.5213ZM25 1C25.0616 1.74747 25.0616 1.74746 25.0617 1.74746C25.0616 1.74746 25.0616 1.74747 25.0615 1.74747C25.0614 1.74749 25.0611 1.74751 25.0606 1.74755C25.0598 1.74762 25.0584 1.74773 25.0565 1.74789C25.0527 1.74821 25.0468 1.74871 25.0389 1.74939C25.0231 1.75075 24.9992 1.75283 24.9676 1.75565C24.9044 1.76131 24.8106 1.76994 24.6895 1.78173C24.4472 1.80532 24.0962 1.84151 23.664 1.8917C22.7987 1.99215 21.611 2.1483 20.3198 2.37103C19.0268 2.59406 17.6404 2.88208 16.3745 3.24447C15.0976 3.61001 13.9923 4.03778 13.2309 4.52181L12.4262 3.25597C13.3688 2.65666 14.6369 2.18165 15.9617 1.8024C17.2975 1.42 18.7409 1.12122 20.0648 0.892859C21.3904 0.664204 22.6066 0.504381 23.491 0.401705C23.9335 0.35033 24.2938 0.31317 24.5441 0.288795C24.6693 0.276606 24.767 0.267609 24.8339 0.261625C24.8673 0.258634 24.893 0.256395 24.9106 0.254887C24.9194 0.254133 24.9261 0.253562 24.9308 0.253171C24.9331 0.252975 24.9349 0.252825 24.9362 0.252719C24.9368 0.252666 24.9373 0.252624 24.9377 0.252593C24.9379 0.252578 24.938 0.252563 24.9381 0.252555C24.9383 0.252543 24.9384 0.252534 25 1ZM13.2309 4.52181C12.58 4.93566 11.5526 5.93156 10.5608 7.3853C9.57807 8.82573 8.66724 10.6624 8.20489 12.72L6.74138 12.3911C7.25274 10.1154 8.25333 8.1059 9.32172 6.53992C10.381 4.98725 11.5445 3.81648 12.4262 3.25597L13.2309 4.52181ZM8.20489 12.72C7.41961 16.2147 7.05543 19.7828 6.88837 22.4848C6.80495 23.834 6.77093 24.9629 6.75775 25.7534C6.75116 26.1485 6.74978 26.4588 6.75004 26.6694C6.75017 26.7748 6.7507 26.8552 6.7512 26.9088C6.75145 26.9356 6.75169 26.9557 6.75186 26.9689C6.75194 26.9755 6.75201 26.9803 6.75206 26.9834C6.75208 26.985 6.7521 26.9861 6.75211 26.9867C6.75212 26.9871 6.75212 26.9873 6.75212 26.9874C6.75212 26.9875 6.75212 26.9875 6.75212 26.9875C6.75212 26.9875 6.75212 26.9874 6.00223 27C5.25233 27.0126 5.25233 27.0125 5.25233 27.0123C5.25233 27.0123 5.25233 27.0121 5.25232 27.0119C5.25232 27.0116 5.25231 27.0111 5.2523 27.0106C5.25228 27.0094 5.25226 27.0079 5.25223 27.0059C5.25217 27.0018 5.25209 26.9961 5.25199 26.9885C5.25179 26.9735 5.25153 26.9514 5.25126 26.9227C5.25073 26.8652 5.25017 26.7808 5.25004 26.6713C5.24977 26.4523 5.25121 26.133 5.25795 25.7283C5.27145 24.9191 5.30621 23.7673 5.39122 22.3923C5.56103 19.6459 5.9323 15.9918 6.74138 12.3911L8.20489 12.72Z" :fill="color"/>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),pi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"arrow-external",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 34 34">
      <path d="M33.23,2.39,1.79,33.79" transform="translate(-0.79 -0.79)" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:3"></path>
      <path d="M33.79,33.79v-30a2,2,0,0,0-2-2h-30" transform="translate(-0.79 -0.79)" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:3"></path>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),ui=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"arrow-narrow",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 19.74 69.3">
      <polyline fill="none" stroke-width="3px" stroke-linecap="round" stroke-miterlimit="10" points="1.62 1.62 17.91 34.62 1.62 67.62"></polyline>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),mi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"arrow",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 28 17">
      <g transform="translate(0.75 0.75)">
        <path d="M0.5 0.5L26 0.5" transform="translate(0 7)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M0 15L7 7.5L0 0" transform="translate(19 0)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),gi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"bin",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale)); stroke-linecap:round; stroke-linejoin:round;`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 24 24">
      <path d="M21,4.5,19.188,21.709A2,2,0,0,1,17.2,23.5H6.8a2,2,0,0,1-1.989-1.791L3,4.5" />
      <line x1="0.5" y1="4.5" x2="23.5" y2="4.5" />
      <path d="M7.5,4.5v-3a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v3" />
      <line  x1="12" y1="9" x2="12" y2="19.5" />
      <line x1="16.5" y1="9" x2="16" y2="19.5" />
      <line x1="7.5" y1="9" x2="8" y2="19.5" />
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),fi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"check-mark",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},foregroundStroke(){return this.color?this.color:"#001F35"}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),vi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"check",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 512 512">
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),dt=48,bi={tagName:"close",computed:{outerPosition(){return dt-this.padding},style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{padding:Number,viewBoxWidth:String,settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 ${dt} ${dt}">
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="outerPosition" :y1="padding" :x2="padding" :y2="outerPosition"/>
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="outerPosition" :y1="outerPosition" :x2="padding" :y2="padding"/>
    </svg>
  `},yi=Object.freeze(Object.defineProperty({__proto__:null,default:bi},Symbol.toStringTag,{value:"Module"})),_i=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"computer-shield",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Si=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"email-action-unread",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round`}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <rect x=".5" y="3.954" width="23" height="16" rx="2" ry="2"></rect>
      <path d="M22.911 4.536L12 13.454 1.089 4.536"></path>
    </g>
  </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Ci=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"emergency",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ki=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"expand",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 22 12" fill="none">
      <path
        d="M1 1L9.58671 10.2646C9.96284 10.6704 10.597 10.6937 11.0019 10.3164L21 1"
        stroke-width="1.5"
        :stroke="stroke"
        stroke-linecap="round"
      />
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),kt="0s",X="0.5s",N="0.3s",Y="2",ht="2s",wi={tagName:"hand",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},stroke(){return this.color}},props:{settings:Object,color:String},template:`
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
      begin="hand-rotation.end+0s" dur="${N}"
      additive="sum"
    />

    <animateTransform id="reset-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 0 0"
      begin="hand-movement.end+0s" dur="${N}"
      additive="sum"
    />

    <animateTransform id="pause-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192"
      begin="reset-hand-rotation.end+0s" dur="${ht}"
      additive="sum"
    />

    <animateTransform id="set-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="0 0; -5 -15"
      begin="pause-hand-rotation.end+0s" dur="${N}"
      additive="sum"
    />

    <animateTransform id="set-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192; -17 187.5 192"
      begin="pause-hand-rotation.end+0s" dur="${N}"
      additive="sum"
    />

    <animateTransform id="hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 2 2; -5 -15"
      begin="0s;set-hand-rotation.end+0s" dur="${X}"
      repeatCount="${Y}"
      additive="sum"
    />

    <animateTransform id="hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 22 187.5 192; -17 187.5 192"
      begin="0s;set-hand-rotation.end+0s" dur="${X}"
      repeatCount="${Y}" additive="sum" keySplines="0.4 0.17 1 1; 0.2 0.2 0.5 0.9" calcMode="spline"
    />

    <animate id="pause-inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1"
      begin="inner-lines-opacity.end+${N}" dur="${ht}"
    />

    <animate id="inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1; 0.8; 1"
      begin="${kt}; pause-inner-lines-opacity.end+${N}" dur="${X}" repeatCount="${Y}"
    />

    <animate id="pause-outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="1"
      begin="outter-lines-opacity.end+${N}" dur="${ht}"
    />

    <animate id="outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="0.8; 1; 0.8"
      begin="${kt}; pause-outter-lines-opacity.end+${N}" dur="${X}" repeatCount="${Y}"
    />
  </svg>
  `},xi=Object.freeze(Object.defineProperty({__proto__:null,default:wi},Symbol.toStringTag,{value:"Module"})),Li=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"image-credits",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style"viewBox="0 0 38 38" fill="none">
      <path d="M33 17V3.66666C33 0.999998 30.3333 1 30.3333 1H3.66666C0.999998 1 1 3.66666 1 3.66666V30.3333C1 33 3.66666 33 3.66666 33H17" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 10.6666C7 11.7275 7.42143 12.7449 8.17157 13.4951C8.92172 14.2452 9.93913 14.6666 11 14.6666C12.0609 14.6666 13.0783 14.2452 13.8284 13.4951C14.5786 12.7449 15 11.7275 15 10.6666C15 9.60576 14.5786 8.58834 13.8284 7.8382C13.0783 7.08805 12.0609 6.66663 11 6.66663C9.93913 6.66663 8.92172 7.08805 8.17157 7.8382C7.42143 8.58834 7 9.60576 7 10.6666Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 13.0189C27.7795 12.7091 27.4814 12.4544 27.1318 12.2769C26.7821 12.0994 26.3914 12.0044 25.9935 12.0002C25.5957 11.996 25.2027 12.0827 24.8488 12.2528C24.495 12.4229 24.1909 12.6712 23.9629 12.9762L17.4462 21.6644L14.8408 19.8438C14.576 19.6461 14.2701 19.5021 13.9427 19.4207C13.6152 19.3394 13.2732 19.3225 12.9385 19.3712C12.6037 19.4199 12.2833 19.5331 11.9978 19.7037C11.7122 19.8742 11.4676 20.0983 11.2794 20.3619L3 32" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 29C21 31.1217 21.8429 33.1566 23.3431 34.6569C24.8434 36.1571 26.8783 37 29 37C31.1217 37 33.1566 36.1571 34.6569 34.6569C36.1571 33.1566 37 31.1217 37 29C37 26.8783 36.1571 24.8434 34.6569 23.3431C33.1566 21.8429 31.1217 21 29 21C26.8783 21 24.8434 21.8429 23.3431 23.3431C21.8429 24.8434 21 26.8783 21 29Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31 31.1213C30.4507 31.6839 29.7057 32 28.9289 32C28.1521 32 27.4071 31.6839 26.8579 31.1213C26.3086 30.5587 26 29.7956 26 29C26 28.2044 26.3086 27.4413 26.8579 26.8787C27.4071 26.3161 28.1521 26 28.9289 26C29.7057 26 30.4507 26.3161 31 26.8787" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Di=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"info",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},fill(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" :stroke="fill" fill="none" stroke-width="1.5" />
      <g transform="translate(7, 3)">
        <path d="M2.352 3.03999C2.268 3.03999 2.198 3.01199 2.142 2.95599C2.086 2.89999 2.058 2.83 2.058 2.746V1.21999C2.058 1.13599 2.086 1.06599 2.142 1.00999C2.198 0.953995 2.268 0.925995 2.352 0.925995H3.304C3.388 0.925995 3.458 0.953995 3.514 1.00999C3.57 1.06599 3.598 1.13599 3.598 1.21999V2.746C3.598 2.83 3.57 2.89999 3.514 2.95599C3.458 3.01199 3.388 3.03999 3.304 3.03999H2.352ZM2.688 12C2.492 12 2.324 11.9347 2.184 11.804C2.05333 11.664 1.988 11.496 1.988 11.3V5.57399H0.853998C0.769998 5.57399 0.699998 5.546 0.643998 5.49C0.587998 5.434 0.559998 5.364 0.559998 5.27999V4.27199C0.559998 4.18799 0.587998 4.11799 0.643998 4.06199C0.699998 4.00599 0.769998 3.97799 0.853998 3.97799H2.968C3.164 3.97799 3.32733 4.048 3.458 4.18799C3.598 4.31866 3.668 4.48199 3.668 4.67799V10.404H4.802C4.886 10.404 4.956 10.432 5.012 10.488C5.068 10.544 5.096 10.614 5.096 10.698V11.706C5.096 11.79 5.068 11.86 5.012 11.916C4.956 11.972 4.886 12 4.802 12H2.688Z" fill="#011E33" />
      </g>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Ti=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"list-view",computed:{style(){const e=this.color?this.color:"#5CBBFF";return`fill: ${e}; stroke: ${e}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 18 16">
      <path d="M6.52277 2.84119H17.204C17.3993 2.84119 17.5867 2.76358 17.7248 2.62543C17.863 2.48729 17.9406 2.29992 17.9406 2.10455C17.9406 1.90919 17.863 1.72182 17.7248 1.58368C17.5867 1.44553 17.3993 1.36792 17.204 1.36792H6.52277C6.3274 1.36792 6.14003 1.44553 6.00189 1.58368C5.86374 1.72182 5.78613 1.90919 5.78613 2.10455C5.78613 2.29992 5.86374 2.48729 6.00189 2.62543C6.14003 2.76358 6.3274 2.84119 6.52277 2.84119Z" stroke-width="0" />
      <path d="M17.204 7.26123H6.52277C6.3274 7.26123 6.14003 7.33884 6.00189 7.47699C5.86374 7.61513 5.78613 7.8025 5.78613 7.99787C5.78613 8.19323 5.86374 8.3806 6.00189 8.51874C6.14003 8.65689 6.3274 8.7345 6.52277 8.7345H17.204C17.3993 8.7345 17.5867 8.65689 17.7248 8.51874C17.863 8.3806 17.9406 8.19323 17.9406 7.99787C17.9406 7.8025 17.863 7.61513 17.7248 7.47699C17.5867 7.33884 17.3993 7.26123 17.204 7.26123Z" stroke-width="0" />
      <path d="M17.204 13.1545H6.52277C6.3274 13.1545 6.14003 13.2321 6.00189 13.3703C5.86374 13.5084 5.78613 13.6958 5.78613 13.8912C5.78613 14.0865 5.86374 14.2739 6.00189 14.4121C6.14003 14.5502 6.3274 14.6278 6.52277 14.6278H17.204C17.3993 14.6278 17.5867 14.5502 17.7248 14.4121C17.863 14.2739 17.9406 14.0865 17.9406 13.8912C17.9406 13.6958 17.863 13.5084 17.7248 13.3703C17.5867 13.2321 17.3993 13.1545 17.204 13.1545Z" stroke-width="0" />
      <path d="M2.83963 1V0.75H1.36636C1.23054 0.75 1.11205 0.784675 1.01476 0.849537C0.919027 0.913356 0.858328 0.996658 0.82048 1.07236C0.783121 1.14707 0.765687 1.21877 0.757203 1.26967C0.752863 1.29571 0.750596 1.31796 0.749402 1.33468C0.748801 1.34308 0.748464 1.35021 0.748276 1.35585L0.748091 1.36323L0.748056 1.36607L0.748049 1.36727L0.748047 1.36781L0.748047 1.36807C0.748047 1.36819 0.748047 1.36832 0.998047 1.36832H0.748047V2.84159C0.748047 2.97741 0.782722 3.0959 0.847584 3.19319C0.911403 3.28892 0.994705 3.34962 1.0704 3.38747C1.14512 3.42483 1.21681 3.44226 1.26771 3.45075C1.29376 3.45509 1.31601 3.45736 1.33273 3.45855C1.34113 3.45915 1.34825 3.45949 1.3539 3.45968L1.36128 3.45986L1.36411 3.45989L1.36531 3.4599L1.36586 3.4599L1.36612 3.4599C1.36624 3.4599 1.36636 3.4599 1.36636 3.2099V3.4599H2.83963C2.97546 3.4599 3.09395 3.42523 3.19124 3.36037C3.28697 3.29655 3.34767 3.21325 3.38552 3.13755C3.42288 3.06283 3.44031 2.99114 3.44879 2.94024C3.45313 2.91419 3.4554 2.89194 3.4566 2.87522C3.4572 2.86682 3.45753 2.8597 3.45772 2.85405L3.45791 2.84667L3.45794 2.84384L3.45795 2.84264L3.45795 2.84209L3.45795 2.84184C3.45795 2.84171 3.45795 2.84159 3.20795 2.84159H3.45795V1.36832C3.45795 1.23249 3.42328 1.114 3.35841 1.01671C3.29459 0.92098 3.21129 0.860281 3.1356 0.822433C3.06088 0.785074 2.98919 0.76764 2.93828 0.759156C2.91224 0.754816 2.88999 0.752549 2.87327 0.751355C2.86487 0.750755 2.85774 0.750417 2.8521 0.750229L2.84472 0.750044L2.84188 0.750009L2.84068 0.750002L2.84014 0.750001L2.83988 0.75C2.83976 0.75 2.83963 0.75 2.83963 1Z" stroke-width="0.5"/>
      <path d="M2.83963 6.89331V6.64331H1.36636C1.23054 6.64331 1.11205 6.67799 1.01476 6.74285C0.919027 6.80667 0.858328 6.88997 0.82048 6.96567C0.783121 7.04038 0.765687 7.11208 0.757203 7.16298C0.752863 7.18902 0.750596 7.21127 0.749402 7.22799C0.748801 7.23639 0.748464 7.24352 0.748276 7.24916L0.748091 7.25654L0.748056 7.25938L0.748049 7.26058L0.748047 7.26112L0.748047 7.26138C0.748047 7.2615 0.748047 7.26163 0.998047 7.26163H0.748047V8.7349C0.748047 8.87072 0.782722 8.98921 0.847584 9.08651C0.911403 9.18223 0.994705 9.24293 1.0704 9.28078C1.14512 9.31814 1.21681 9.33557 1.26771 9.34406C1.29376 9.3484 1.31601 9.35067 1.33273 9.35186C1.34113 9.35246 1.34825 9.3528 1.3539 9.35299L1.36128 9.35317L1.36411 9.3532L1.36531 9.35321L1.36586 9.35321L1.36612 9.35321C1.36624 9.35321 1.36636 9.35321 1.36636 9.10321V9.35321H2.83963C2.97546 9.35321 3.09395 9.31854 3.19124 9.25368C3.28697 9.18986 3.34767 9.10656 3.38552 9.03086C3.42288 8.95614 3.44031 8.88445 3.44879 8.83355C3.45313 8.8075 3.4554 8.78525 3.4566 8.76853C3.4572 8.76013 3.45753 8.75301 3.45772 8.74736L3.45791 8.73999L3.45794 8.73715L3.45795 8.73595L3.45795 8.7354L3.45795 8.73515C3.45795 8.73502 3.45795 8.7349 3.20795 8.7349H3.45795V7.26163C3.45795 7.1258 3.42328 7.00731 3.35841 6.91002C3.29459 6.81429 3.21129 6.75359 3.1356 6.71574C3.06088 6.67838 2.98919 6.66095 2.93828 6.65247C2.91224 6.64813 2.88999 6.64586 2.87327 6.64467C2.86487 6.64407 2.85774 6.64373 2.8521 6.64354L2.84472 6.64335L2.84188 6.64332L2.84068 6.64331L2.84014 6.64331L2.83988 6.64331C2.83976 6.64331 2.83963 6.64331 2.83963 6.89331Z" stroke-width="0.5" stroke-linejoin="round"/>
      <path d="M2.84307 12.7861V12.5361H1.36705C1.23105 12.5361 1.11244 12.5709 1.01505 12.6358C0.919221 12.6997 0.858457 12.783 0.820566 12.8588C0.783164 12.9336 0.765709 13.0054 0.757214 13.0564C0.752868 13.0825 0.750598 13.1047 0.749403 13.1215C0.748802 13.1299 0.748464 13.137 0.748276 13.1427L0.748091 13.15L0.748056 13.1529L0.748049 13.1541L0.748047 13.1546L0.748047 13.1549C0.748047 13.155 0.748047 13.1551 0.998047 13.1551H0.748047V14.6312C0.748047 14.7672 0.782765 14.8858 0.847691 14.9832C0.911575 15.079 0.994963 15.1398 1.07075 15.1776C1.14555 15.215 1.21733 15.2325 1.2683 15.241C1.29437 15.2453 1.31665 15.2476 1.33338 15.2488C1.3418 15.2494 1.34893 15.2497 1.35458 15.2499L1.36196 15.2501L1.3648 15.2502L1.366 15.2502L1.36655 15.2502L1.3668 15.2502C1.36693 15.2502 1.36705 15.2502 1.36705 15.0002V15.2502H2.84307C2.97907 15.2502 3.09769 15.2154 3.19508 15.1505C3.29091 15.0866 3.35167 15.0033 3.38956 14.9275C3.42696 14.8527 3.44442 14.7809 3.45291 14.7299C3.45726 14.7038 3.45953 14.6816 3.46072 14.6648C3.46133 14.6564 3.46166 14.6493 3.46185 14.6436L3.46204 14.6363L3.46207 14.6334L3.46208 14.6322L3.46208 14.6317L3.46208 14.6314C3.46208 14.6313 3.46208 14.6312 3.21208 14.6312H3.46208V13.1551C3.46208 13.0191 3.42736 12.9005 3.36244 12.8031C3.29855 12.7073 3.21516 12.6465 3.13938 12.6087C3.06458 12.5712 2.9928 12.5538 2.94183 12.5453C2.91576 12.541 2.89348 12.5387 2.87674 12.5375C2.86833 12.5369 2.8612 12.5366 2.85555 12.5364L2.84817 12.5362L2.84533 12.5361L2.84413 12.5361L2.84358 12.5361L2.84332 12.5361C2.8432 12.5361 2.84307 12.5361 2.84307 12.7861Z" stroke-width="0.5"/>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Oi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"magnifier",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},fill(){return this.color}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 21 21" fill="none">
    <path d="M15.1186 13.027H14.2152L13.895 12.7182C15.0157 11.4146 15.6903 9.72223 15.6903 7.88118C15.6903 3.77598 12.3627 0.448364 8.25753 0.448364C4.15232 0.448364 0.824707 3.77598 0.824707 7.88118C0.824707 11.9864 4.15232 15.314 8.25753 15.314C10.0986 15.314 11.791 14.6393 13.0946 13.5187L13.4033 13.8389V14.7422L19.1209 20.4484L20.8247 18.7445L15.1186 13.027ZM8.25753 13.027C5.41018 13.027 3.11173 10.7285 3.11173 7.88118C3.11173 5.03384 5.41018 2.73539 8.25753 2.73539C11.1049 2.73539 13.4033 5.03384 13.4033 7.88118C13.4033 10.7285 11.1049 13.027 8.25753 13.027Z" :fill="fill"/>
  </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Pi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"mail",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(1.5);`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 42 28">
      <g>
        <path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path>
      </g>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),ji=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"meerkat",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Mi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"menu",computed:{strokeWidth(){return 2},effectiveKeySplines(){return"0.19 1 0.2 1"},style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},lineData(){return{line1:{from:{x1:"8.5",x2:"44.5",y1:"5.5",y2:"5.5"},to:{x1:"13",x2:"38.4558",y1:"31.8787",y2:"6.42284"}},line2:{from:{x1:"8.5",x2:"44.5",y1:"25.5",y2:"25.5"},to:{x1:"15.1213",x2:"40.5772",y1:"6",y2:"31.4558"}},line3:{from:{x1:"19.5",x2:"44.5",y1:"15.5",y2:"15.5"},to:{x1:"19.5",x2:"19.5",y1:"15.5",y2:"15.5"}}}}},updated(){this.animateLines(this.closed)},mounted(){this.animateLines(this.closed,!0)},methods:{animateLines(e,t){const i=[];this.$refs.svg.querySelectorAll("animate").forEach(r=>{(!e&&!r.classList.contains("closed")||e&&r.classList.contains("closed"))&&i.push(r)});const s=t?"beginElementAt":"beginElement";i.forEach(r=>{r[s](1e3)})}},props:{settings:Object,color:String,closed:Boolean},data(){return{duration:"0.55s",begin:"indefinite",keyTimes:"0;1"}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Ei=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"minus",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `}},Symbol.toStringTag,{value:"Module"})),Ni=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"phone-charger",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation));`}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <line class="a" x1="2.5" y1="0.5" x2="2.5" y2="3.5" />
    <line class="a" x1="10.5" y1="0.5" x2="10.5" y2="3.5" />
    <line class="a" x1="4.5" y1="6.5" x2="8.5" y2="6.5" />
    <path class="a" d="M6.5,16.5v3a4,4,0,0,0,8,0v-.75a5.251,5.251,0,0,1,5.25-5.25H23.5" />
    <path class="a" d="M4.5,13.158V15.5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V13.158" />
    <path class="a" d="M12.5,7.5a6,6,0,0,1-12,0v-3a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1Z" />
  </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Ii=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"phone-mail",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Ai=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"phone",computed:{style(){return`stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round; `}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path d="M9.086 7.4a2.315 2.315 0 0 0 0-3.271L6.632 1.678a2.313 2.313 0 0 0-3.271 0L2.016 3.024a3.463 3.463 0 0 0-.439 4.365 53.778 53.778 0 0 0 15.034 15.034 3.469 3.469 0 0 0 4.366-.437l1.345-1.346a2.312 2.312 0 0 0 0-3.271l-2.453-2.453a2.312 2.312 0 0 0-3.271 0l-.818.818A54.879 54.879 0 0 1 8.268 8.22z" ></path>
    </g>
  </svg>
  `}},Symbol.toStringTag,{value:"Module"})),qi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"pin",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round;`}},props:{settings:Object,color:String},template:`
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path d="M12 .71a7.5 7.5 0 0 1 7.5 7.5c0 3.547-5.5 12.381-7.079 14.85a.5.5 0 0 1-.842 0C10 20.592 4.5 11.757 4.5 8.21A7.5 7.5 0 0 1 12 .71z"></path>
      <circle cx="12" cy="8.21" r="3"></circle>
    </g>
  </svg>
  `}},Symbol.toStringTag,{value:"Module"})),$i=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"plus-minus",computed:{effectiveKeySplines(){return"0.19 1 0.2 1"},style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},updated(){this.animate(this.closed)},mounted(){this.animate(this.closed,!0)},methods:{animate(e,t){const i=[];this.$refs.svg.querySelectorAll("animate, animateTransform").forEach(r=>{(!e&&!r.classList.contains("closed")||e&&r.classList.contains("closed"))&&i.push(r)});const s=t?"beginElementAt":"beginElement";i.forEach(r=>{r[s](1e3)})}},props:{settings:Object,color:String,closed:Boolean},data(){return{duration:"0.35s",begin:"indefinite",keyTimes:"0;1"}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),zi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"plus",computed:{style(){return"transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
      <path d="M12 1V23" stroke="#000520" stroke-linecap="round"/>
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `}},Symbol.toStringTag,{value:"Module"})),Bi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"quotes",computed:{style(){return`fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3178 0C15.8159 2.397 16.9074 4.79401 17.5923 7.19101C18.32 9.58801 18.6838 11.985 18.6838 14.382C18.6838 18.6624 17.5923 22.7501 15.4093 26.6453C13.2691 30.5404 10.1659 34.1359 6.09952 37.4318L1.1557 34.4141C0.727662 34.1573 0.428037 33.8363 0.256822 33.451C0.0856075 33.1086 0 32.7662 0 32.4238C0 31.6105 0.278224 30.9256 0.834671 30.3692C1.39112 29.7271 1.96897 28.9995 2.56822 28.1862C3.21027 27.3729 3.78812 26.4527 4.30177 25.4254C4.81541 24.3981 5.22204 23.2852 5.52167 22.0867C5.8641 20.8882 6.03531 19.6041 6.03531 18.2344C6.03531 16.779 5.79989 15.2381 5.32905 13.6116C4.85821 11.9422 4.06635 10.1873 2.95345 8.34671C2.56822 7.79026 2.3756 7.21241 2.3756 6.61316C2.3756 5.24344 3.16747 4.28036 4.7512 3.72392L14.3178 0ZM35.634 0C37.1322 2.397 38.2236 4.79401 38.9085 7.19101C39.6362 9.58801 40 11.985 40 14.382C40 18.6624 38.9085 22.7501 36.7255 26.6453C34.5853 30.5404 31.4821 34.1359 27.4157 37.4318L22.4719 34.4141C22.0439 34.1573 21.7442 33.8363 21.573 33.451C21.4018 33.1086 21.3162 32.7662 21.3162 32.4238C21.3162 31.6105 21.5944 30.9256 22.1509 30.3692C22.7073 29.7271 23.2852 28.9995 23.8844 28.1862C24.5265 27.3729 25.1043 26.4527 25.618 25.4254C26.1316 24.3981 26.5383 23.2852 26.8379 22.0867C27.1803 20.8882 27.3515 19.6041 27.3515 18.2344C27.3515 16.779 27.1161 15.2381 26.6453 13.6116C26.1744 11.9422 25.3826 10.1873 24.2697 8.34671C23.8844 7.79026 23.6918 7.21241 23.6918 6.61316C23.6918 5.24344 24.4837 4.28036 26.0674 3.72392L35.634 0Z" fill="#FCD116"/>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Vi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"rocket",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),x="indefinite",Fi={tagName:"smile",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},data(){return{"step-1":[],"step-2":[],"step-3":[]}},props:{settings:Object,color:String,step:Number},watch:{step(){this.startStep()}},methods:{setElementRef(e,t){const i=this["step-"+t];!e||i.includes(e)||i.push(e)},startStep(){const e=this["step-"+this.step];[].forEach.call(e,t=>{t.setAttribute("begin","0s"),t.beginElement()})}},template:`
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
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-left-eye" attributeName="d" values="
          M92.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-right-eye" attributeName="d" values="
          M250,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-circle" attributeName="d" values="
          M170.12,335.42a165,165,0,1,1,0.1,0;
          M44.12,277.42a165,165,0,1,1,254.87,0
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-mouth" attributeName="d" values="
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16;
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-left-eye" attributeName="d" values="
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M127.13,129.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-right-eye" attributeName="d" values="
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M265,129.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-mouth" attributeName="d" values="
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0;
          M85,221.75a93.26,93.26,0,0,0,172.17,0
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-left-eyebrow" attributeName="d" values="
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0;
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-right-eyebrow" attributeName="d" values="
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0;
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-circle" attributeName="d" values="
          M44.12,277.42a165,165,0,1,1,254.87,0;
          M170.12,335.42a165,165,0,1,1,0.1,0
        "
          begin="${x}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </g>
    </svg>
  `},Ri=Object.freeze(Object.defineProperty({__proto__:null,default:Fi},Symbol.toStringTag,{value:"Module"})),Ui=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"strategy-split",computed:{style(){return`stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round;`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 46 46">
      <path d="M18.7994 11.1646C18.6252 11.1648 18.454 11.1188 18.3033 11.0314C18.1526 10.944 18.0277 10.8183 17.9414 10.667C17.855 10.5157 17.8102 10.3443 17.8116 10.17C17.8129 9.99584 17.8603 9.82509 17.9491 9.67516L22.1479 2.5466C22.2356 2.39865 22.3602 2.27608 22.5097 2.19094C22.6591 2.10581 22.8281 2.06104 23.0001 2.06104C23.172 2.06104 23.341 2.10581 23.4904 2.19094C23.6399 2.27608 23.7645 2.39865 23.8522 2.5466L28.051 9.67516C28.1398 9.82509 28.1872 9.99584 28.1886 10.17C28.1899 10.3443 28.1451 10.5157 28.0587 10.667C27.9724 10.8183 27.8475 10.944 27.6968 11.0314C27.5461 11.1188 27.3749 11.1648 27.2007 11.1646H18.7994Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.3592 18.7957C11.4204 18.6474 11.4414 18.4855 11.42 18.3265C11.3986 18.1675 11.3355 18.0169 11.2372 17.8902C11.1388 17.7634 11.0087 17.6648 10.86 17.6045C10.7114 17.5441 10.5494 17.5242 10.3905 17.5466L2.84313 18.6081C2.68509 18.6297 2.53549 18.6924 2.4093 18.7899C2.2831 18.8874 2.18475 19.0164 2.12409 19.1639C2.06342 19.3115 2.04258 19.4723 2.06363 19.6304C2.08469 19.7885 2.14692 19.9383 2.24408 20.0648L6.82894 26.1519C6.92537 26.2804 7.05411 26.3811 7.20208 26.4438C7.35005 26.5065 7.51196 26.5289 7.67139 26.5087C7.83081 26.4885 7.98206 26.4265 8.10976 26.329C8.23747 26.2315 8.33709 26.1019 8.39849 25.9534L9.87883 22.3791L11.3592 18.7957Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.96094 22.2935C13.8205 23.8921 17.1193 26.5993 19.4402 30.0728C21.7611 33.5462 22.9999 37.6299 22.9999 41.8074V43.9396" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34.6408 18.7957C34.5795 18.6474 34.5585 18.4855 34.5799 18.3265C34.6014 18.1675 34.6644 18.0169 34.7628 17.8902C34.8611 17.7634 34.9912 17.6648 35.1399 17.6045C35.2886 17.5441 35.4506 17.5242 35.6094 17.5466L43.1568 18.6081C43.3148 18.6297 43.4644 18.6924 43.5906 18.7899C43.7168 18.8874 43.8152 19.0164 43.8758 19.1639C43.9365 19.3115 43.9573 19.4723 43.9363 19.6304C43.9152 19.7885 43.853 19.9383 43.7558 20.0648L39.171 26.1519C39.0745 26.2804 38.9458 26.3811 38.7978 26.4438C38.6499 26.5065 38.488 26.5289 38.3285 26.5087C38.1691 26.4885 38.0179 26.4265 37.8902 26.329C37.7625 26.2315 37.6628 26.1019 37.6014 25.9534L36.1211 22.3791L34.6408 18.7957Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36.039 22.2935C32.1795 23.8921 28.8807 26.5993 26.5597 30.0728C24.2388 33.5462 23 37.6299 23 41.8074V43.9396" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 11.1646V43.0292" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Hi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"tile-view",computed:{style(){return`fill: ${this.color?this.color:"#5CBBFF"}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`}},props:{settings:Object,color:String},template:`
    <svg v-bind="settings" :style="style" viewBox="0 0 16 16">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.1234 0C0.825462 0 0.539715 0.118358 0.329038 0.329038C0.118358 0.539717 0 0.825457 0 1.1234V6.02553C0 6.32348 0.118358 6.60922 0.329038 6.81988C0.539715 7.0306 0.825462 7.14894 1.1234 7.14894H6.02553C6.32348 7.14894 6.60922 7.0306 6.81991 6.81988C7.03057 6.60922 7.14897 6.32348 7.14897 6.02553V1.1234C7.14897 0.825457 7.03057 0.539717 6.81991 0.329038C6.60922 0.118358 6.32348 0 6.02553 0H1.1234ZM9.97246 0C9.67452 0 9.38876 0.118358 9.17811 0.329038C8.96745 0.539717 8.84905 0.825457 8.84905 1.1234V6.02553C8.84905 6.32348 8.96745 6.60922 9.17811 6.81988C9.38876 7.0306 9.67452 7.14894 9.97246 7.14894H14.8746C15.1725 7.14894 15.4583 7.0306 15.6689 6.81988C15.8797 6.60922 15.998 6.32348 15.998 6.02553V1.1234C15.998 0.825457 15.8797 0.539717 15.6689 0.329038C15.4583 0.118358 15.1725 0 14.8746 0H9.97246ZM0.329038 9.18012C0.539715 8.9694 0.825462 8.85106 1.1234 8.85106H6.02553C6.32348 8.85106 6.60922 8.9694 6.81991 9.18012C7.03057 9.39077 7.14897 9.67653 7.14897 9.97447V14.8766C7.14897 15.1745 7.03057 15.4603 6.81991 15.6709C6.60922 15.8817 6.32348 16 6.02553 16H1.1234C0.825462 16 0.539715 15.8817 0.329038 15.6709C0.118358 15.4603 0 15.1745 0 14.8766V9.97447C0 9.67653 0.118358 9.39077 0.329038 9.18012ZM9.97246 8.85106C9.67452 8.85106 9.38876 8.9694 9.17811 9.18012C8.96745 9.39077 8.84905 9.67653 8.84905 9.97447V14.8766C8.84905 15.1745 8.96745 15.4603 9.17811 15.6709C9.38876 15.8817 9.67452 16 9.97246 16H14.8746C15.1725 16 15.4583 15.8817 15.6689 15.6709C15.8797 15.4603 15.998 15.1745 15.998 14.8766V9.97447C15.998 9.67653 15.8797 9.39077 15.6689 9.18012C15.4583 8.9694 15.1725 8.85106 14.8746 8.85106H9.97246Z" />
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),Wi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"world",computed:{style(){return"scale(var(--icon-scale));"},stroke(){return this.color}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Gi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"x-mark",computed:{style(){return`stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`},foregroundStroke(){return this.color?this.color:"#FF0000"}},props:{settings:Object,color:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Ji=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"image-block",computed:{classList(){return["image-block space-2"]},imageWithCloudinary(){return{img:this.imageBlock.image,cloudinary:!0,alt:this.imageBlock.alt}}},props:{imageBlock:{default:null}},template:`
    <wrapper :classes="classList">
      <div class="mx-auto">
        <v-img v-bind="imageWithCloudinary" />
      </div>
    </wrapper>
  `}},Symbol.toStringTag,{value:"Module"})),Zi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"image-list",computed:{imagesObject(){return this.images?JSON.parse(this.images):[]}},props:{images:Array},template:`
    <div class="image-list vue-component" v-for="(image, index) in imagesObject">
      <div class="image-list__item is--desktop">
        <v-img :img="image.src" :cloudinary="image.cloudinary" :alt="image.alt" />
      </div>
      <div class="image-list__item is--mobile">
        <v-img :img="image.mobile" :cloudinary="image.cloudinary" :alt="image.alt" />
      </div>
    </div>`}},Symbol.toStringTag,{value:"Module"})),Ki=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"img-filter",props:{img:String,alt:String,cloudinary:{default:null},lazy:Boolean,classes:String,color:String},computed:{cloudinaryValue(){return n.isTrue(this.cloudinary)},colorValue(){return this.color?this.color:"#000520"},svgFilter(){const e=parseFloat((n.red(this.colorValue)/255).toFixed(5)),t=parseFloat((n.green(this.colorValue)/255).toFixed(5)),i=parseFloat((n.blue(this.colorValue)/255).toFixed(5)),s=1,r=Math.max(e,t,i),a=Math.min(e,t,i),o=100*(r+a)/2+"%",c="img-to-color";return`
        filter: saturate(0%) brightness(0%) invert(${o}) opacity(${s});
        filter: url('data:image/svg+xml;utf8,        <svg xmlns="http://www.w3.org/2000/svg">          <filter id="${c}" color-interpolation-filters="sRGB">            <feColorMatrix type="matrix" values="              0 0 0 0 ${e}              0 0 0 0 ${t}              0 0 0 0 ${i}              0 0 0 ${s} 0            "/>          </filter>        </svg>        #${c}')
      `}},data(){return{}},mounted(){},methods:{},template:`
    <div class="img-filter vue-component" :style="svgFilter">
      <v-img
        :img="img"
        :alt="alt"
        :cloudinary="cloudinaryValue"
        :lazy="lazy"
      />
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),Xi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"img",migrate:!0,template:`
                  img -> vimg
              `}},Symbol.toStringTag,{value:"Module"})),Yi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"intro-text",computed:{classList(){return["intro-text","utility-animation","vue-component",this.variant,this.spacing]}},props:{copy:String,variant:String,headline:String,spacing:String,headlineClasses:{type:String,default:"text-center"},copyClasses:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"}));class wt{constructor(t,i){this.root=t,this.maxShapes=3,this.loadingClass="loading",this.shapeClass="loading__shape",this.bounceClasses={up:"loading--bounce-up",down:"loading--bounce-down"},this.types=["circle","square","triangle","triangle-2","rectangle"],this.colors=["--color-loading--1","--color-loading--2","--color-loading--3","--color-loading--4"],this.currentColors={},this.maxRuns=20,this.scaleMin=4,this.scaleMax=5,this.rotationMin=90,this.rotationMax=270,this.animationInterval=800,this.intervals=[],this.hasShapes=!1,this.init(i)}getRandomColor(t){let i=this.colors[Math.floor(Math.random()*this.colors.length)];return t<this.maxRuns&&this.currentColors[i]&&(t++,i=this.getRandomColor(t)),i}getRandomType(){return this.types[Math.floor(Math.random()*this.types.length)]}getRandomTypeClass(){return`loading__shape--${this.getRandomType()}`}getRandomScale(){return Math.floor(Math.random()*(this.scaleMax-this.scaleMin+1))+this.scaleMin}getRandomRotation(){return Math.floor(Math.random()*(this.rotationMin-this.rotationMax+1))+this.rotationMin}getRandomOffset(){let t=Math.random()*6-2;return`${t>=0?"+ ":"- "}${t}`}getRandomStyle(){const t=this.getRandomColor();return{style:`
      left: calc(50% ${this.getRandomOffset()}vw);
      --color-loading: var(${t});
      --loading-scale: ${this.getRandomScale()}vh;
      --loading-rotation: ${this.getRandomRotation()}deg
    `,color:t}}createShapes(){for(var t=0;t<this.maxShapes;t++){const i=document.createElement("shape"),s=n.append(this.root,i);this.startAnimation(s)}}startAnimation(t){this.intervals.push(setInterval(()=>{const i=this.getRandomStyle();this.currentColors[i.color]=!0,t.className="",t.classList.add(this.getRandomTypeClass()),t.classList.add(this.shapeClass),t.setAttribute("style",i.style),t.classList.contains(this.bounceClasses.up)?t.classList.replace(this.bounceClasses.down,this.bounceClasses.up):t.classList.add(this.bounceClasses.up),setTimeout(()=>{t.classList.replace(this.bounceClasses.up,this.bounceClasses.down),this.currentColors[i.color]=!1},this.animationInterval/2)},this.animationInterval))}init(t){if(t&&typeof t=="function")return t();this.root.classList.add(this.loadingClass)}on(t){this.hasShapes||(this.hasShapes=!0,this.createShapes()),t!==!0&&this.root.classList.add(l.LOADING)}clear(){this.intervals.forEach(t=>{clearInterval(t)})}off(t,i){t?this.clear():setTimeout(()=>{this.clear(),i!==!0&&this.root.classList.remove(l.LOADING)},100)}}const Qi=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"job-list-detail",computed:{classList(){return["job-list__detail page-detail",`${this.hasLoading?l.LOADING:""}`,`${this.hasLoader?"loading":""}`,`${this.hideLoading?l.HIDE_LOADING:""}`,`${this.hasBack?"page-detail--has-back":""}`,"vue-component"]},headlineClassList(){return`job-list__detail-headline page-detail__headline ${this.headlineClasses?this.headlineClasses:""}`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h1"},style(){return`--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`},color(){return this.detailColor?this.detailColor:"--color-job-list-detail"},baseData(){return this.base?JSON.parse(this.base):{}},getUuid(){return"job-list-detail-style"}},mounted(){this.loading=new wt(this.$refs["job-list-detail"],()=>{this.hasLoader=!0}),this.loading.on(!0),this.init()},data(){return{loadingDelay:300,sleepDelay:1300,loading:{},hasLoading:!0,hasLoader:!1,hideLoading:!1,api:{},hasBack:!1,entryData:{},personQuote:null,videoInner:null,jobIdValue:null}},methods:{init(){var r;const e=this.mockApplyUrl,t=this.mockDocumentsUrl;this.api=new ot({...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName,apiKey:this.apiKey,mockApplyUrl:e,mockDocumentsUrl:t}),this.api.setLang(n.getLang());const i=this.api.getJobId()||this.jobId;this.jobIdValue=i,this.showBackButton();const s=(r=window.i18n)==null?void 0:r.loader;s?s.then(()=>{this.loadJob()}):this.loadJob()},showBackButton(){document.referrer.indexOf(document.location.host)!==-1&&(this.hasBack=!0)},loadJob(){var e;this.loadLocalJobData(),(e=this.api)==null||e.getOpening(this.jobIdValue).then(t=>t.json()).then(t=>{this.handleJob(t)}).catch(t=>{console.error("Job-list Error:",t)})},handleCta(){var e;A.open((e=this.$refs["modal-component"])==null?void 0:e.modal)},handleJob(e){n.sleep(this.sleepDelay).then(()=>{var i;const t=e.objects?e.objects[0]:e;if(t){const s=(i=window.i18n)==null?void 0:i.translate("gender"),{title:r,description:a}=t,o={description:a,title:r,gender:s};this.hideLoading=!0,this.update(o)}else console.error("handleJob has no entry")})},stopLoading(){setTimeout(()=>{this.loading.off(!0,!0),this.hasLoading=!1},this.loadingDelay)},update(e){this.entryData=e,this.stopLoading()},loadLocalJobData(){const e=`${this.api.jobDataUrl}${this.jobIdValue}.json`;return this.addCustomStyle(),fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{if(t.videoInner)return this.videoInner=t.videoInner;this.personQuote=t.personQuote}).catch(t=>{console.error("Job-list-Detail Local Job Data Error:",t)})},addCustomStyle(){var t;const e=document.createElement("style");e.id=this.getUuid,(t=document.getElementById(this.getUuid))==null||t.remove(),e.innerHTML=`
        .show-in-${this.jobIdValue}.d-none {
          display: block !important;
        }
      `,document.head.appendChild(e)}},props:{detailColor:String,clientName:String,jobId:String,apiUrl:String,base:String,headlineLevel:String,headlineClasses:String,ctaText:String,ctaButton:Boolean,form:Object,googleMaps:Object,modalSuccess:Object,modalError:Object,apiKey:String,mockApplyUrl:String,mockDocumentsUrl:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ts=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"job-list-entry",computed:{classList(){return["job-list__entry",`${n.isTrue(this.isInvisible)===!0?l.HIDDEN:""}`,"vue-component"]}},props:{title:String,gender:String,city:String,team:String,positionType:String,isInvisible:{default:null},id:Number},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),es=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"job-list",computed:{classList(){return["job-list container",`${this.hasLoading?l.LOADING:""}`,`${this.hasLoader?"loading":""}`,`${n.isTrue(this.sticky)===!0?U.rootSelector.substring(1):""}`,"vue-component"]},expandClassList(){return["job-list__expand-button",`${this.hasExpand?"":l.HIDDEN}`,`${this.isExpandVisible?"":l.INVISIBLE}`]},headlineClassValue(){return`job-list__headline ${this.headlineClasses}`},headlineLevelValue(){return`${this.headlineLevel?this.headlineLevel:"h2"}`},tagList(){return this.tags?this.tags.split(","):void 0}},mounted(){this.api=new ot({...this.jobId&&{jobId:this.jobId},...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName}),this.lang&&this.api.setLang(this.lang),this.tagList&&this.api.setFilter({tags:this.tagList}),this.loading=new wt(this.$refs["job-list"],()=>{this.hasLoader=!0}),this.loading.on(!0),this.init()},methods:{init(){var i;const e=(i=window.i18n)==null?void 0:i.loader,t=this.jobId?this.loadJob:this.loadJobs;e?e.then(()=>{var s;this.translationData=(s=window.i18n)==null?void 0:s.getTranslationData(["jobListEmpty"]),t.bind(this)()}):t()},handleExpand(){this.isExpandVisible=!1,this.hasExpand=!1,this.showJobs()},showJobs(){this.entries.forEach(e=>{e.isInvisible=!1})},loadJobData(){const e=`${this.api.jobDataUrl}jobs.json`;return fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{this.jobData=t}).catch(t=>{console.error("Job-list Local Job Data Error:",t)})},loadJob(e){const t=e?"getAll":"getOpening";this.promises.push(this.loadJobData()),this.api[t]().then(i=>i.json()).then(i=>{this.handleJobs(i)}).catch(i=>{console.error("Job-list Error:",i)})},loadJobs(){this.loadJob(!0)},handleJobs(e){n.sleep(this.sleepDelay).then(()=>{let t=e;if(typeof t.objects!="object"&&(t={objects:[t],meta:t==null?void 0:t.meta}),this.data=t,!this.data.meta)return this.loading.off();Promise.all(this.promises).then(()=>{const i=this.api.getOrderedList(t.objects);this.filterJobs(e,i)}).catch(i=>{console.error("Job-List Promises.all ~ error",i)})})},filterJobs(e,t){var a,o,c;this.data.objects=t;const i=(a=window.i18n)==null?void 0:a.translate("gender"),s=[];let r=0;for(let d=0;d<(t==null?void 0:t.length);d++){const h=t[d],{city:u}=(h==null?void 0:h.location)||{};if(!h)continue;const{title:S,position_type:E,team:F}=h,Wa={city:u,title:S,gender:i,team:F,positionType:E!==""?(o=window.i18n)==null?void 0:o.translate(E):null,isInvisible:this.maxItems>0&&r>this.maxItems-1,id:d};this.isAvailableEntry(h)&&(s[d]=Wa,r++)}this.entries=s,this.entries.length===0&&(this.isEmpty=!0),this.maxItems>0&&((c=e.objects)==null?void 0:c.length)>this.maxItems&&this.showExpandButton(),this.stopLoading()},showExpandButton(){this.hasExpand=!0,setTimeout(()=>{this.isExpandVisible=!0},this.loadingDelay)},isAvailableEntry(e){var i;let t=!0;if(e.tags.includes(this.api.hiddenTag))return!1;if(this.team){const s=(i=e.team)==null?void 0:i.toLowerCase(),r=this.team.toLowerCase();(s===void 0||(s==null?void 0:s.indexOf(r))===-1)&&(t=!1)}return t},stopLoading(){setTimeout(()=>{this.loading.off(!0,!0),this.hasLoading=!1},this.loadingDelay)},handleEntryClick(e){const t=e.currentTarget;if(t&&this.detailUrl){const i=this.getData(t),s=this.getDetailUrl(i),r=n.generateUrl(i==null?void 0:i.title,s,i==null?void 0:i.id);document.location.href=r}},getData(e){var i;let t=null;return e&&e.dataset.id&&((i=this.data)!=null&&i.objects)&&(t=this.data.objects[e.dataset.id]),t},getDetailUrl(e){if(typeof this.detailUrl!="object")return this.detailUrl;const t=this.api.getLangFromEntry(e);return this.detailUrl[t]||this.detailUrl.default}},data(){return{loadingDelay:300,sleepDelay:1300,loading:{},hasLoading:!0,hasLoader:!1,api:{},hasExpand:!1,isExpandVisible:!1,entries:[],jobData:{},promises:[],isEmpty:!1}},props:{clientName:String,maxItems:String,detailUrl:Object,jobId:String,tags:String,lang:String,team:String,apiUrl:String,headlineClasses:String,headlineLevel:String,headlineText:String,expandText:String,sublineText:String,sticky:{default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),is=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"letter-switcher",data(){return{show:!1,end:!1,overline:"",endDelay:3400,startDelay:900,isLower:null}},computed:{classList(){return["letter-switch",`${this.show?l.SHOW:""}`,`${this.end?l.END:""}`,"vue-component"]},fontSize(){return this.isLower?"font-size-5":"font-size-6 bold"},letterSwitchEndClassList(){return["letter-switcher__end-animation",this.fontSize]},letterSwitchAnimationClassList(){return["letter-switcher__animation",this.fontSize,"justify-content-center",`${this.isLower?"flex-column":""}`]}},mounted(){this.overline=this.overlineStart,this.isLower=this.isLowerBreakpoint(),this.bindEvents(),setTimeout(()=>{this.setHeight(),this.startAnimation()},this.startDelay)},methods:{bindEvents(){window.addEventListener("resize",()=>{this.handleResize()})},handleResize(){this.isLower=this.isLowerBreakpoint(),this.setHeight()},isLowerBreakpoint(){return n.isBelowBreakpoint("sm")},setHeight(){this.show=!1;const e=this.$refs.animation;if(!e)return;const t=e.querySelector(".letter-switcher__letter"),i=this.isLower?t.offsetHeight*2:t.offsetHeight;e.style.height=i+"px",this.show=!0},startAnimation(){[].forEach.call(this.$refs.root.querySelectorAll(".letter-switcher__group"),(i,s)=>{const r=s*.3,a=.07*i.children.length;i.style.animation=`letter-switch ${a}s ${r}s ease-out forwards`}),setTimeout(()=>{this.end=!0,this.switchOverline(this.showEndAnimation)},this.endDelay)},showEndAnimation(){const e=this.$refs["end-text"],t=this.$refs.end;if(!e||!t)return this.emitEnded();e.style.width="0px",t.classList.remove(l.COLLAPSED),this.emitEnded()},switchOverline(e){const t=this.$refs.overline;t&&(t.addEventListener("transitionend",()=>{this.overline=this.overlineEnd,t.style.opacity=1,e()}),t.style.opacity=0)},emitEnded(){this.$emit(g.ENDED)}},props:{textStart:String,textEnd:String,overlineStart:String,overlineEnd:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ss=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"link-list",computed:{classList(){return["link-list",this.hasNoAnimation?"":"utility-animation",`${this.isExpanded?l.EXPANDED:""}`,`${this.isExpandable()?l.EXPANDABLE:""}`,`${this.hasActiveItem?l.ACTIVE:""}`,`${this.isHidden?"link-list--hidden":""}`,`${this.inTransition?"link-list--in-transition":""}`,this.classes,"vue-component"]},hasNoAnimation(){return n.isTrue(this.noAnimation)},classListTitle(){return["link-list__title font-size-8 bold",this.hasNoAnimation?"":"fade-in-bottom"]},classListList(){return["link-list__list header__list--expanded",this.hasNoAnimation?"":"fade-in-bottom"]},hasActiveItem(){const e=this.list.children;if(e)return e.filter(t=>{var i;return((i=t.languages[this.lang])==null?void 0:i.active)===!0}).length>0},isHidden(){return n.isTrue(this.hidden)===!0}},watch:{hidden(e,t){e||(this.inTransition=!0)}},updated(){this.updateHeight(),this.inTransition=!1},mounted(){this.bindEvents()},methods:{bindEvents(){this.parentOfParent=this.$refs.root.parentNode.parentNode,this.parentOfParent.addEventListener(g.CHILD_HAS_UPDATE,this.handleUpdate.bind(this))},handleUpdate(e){const t=e.detail.root;this.isExpanded&&this.$refs.root!==t&&this.handleClick()},isLowerBreakpoint(){return n.isBelowBreakpoint("md")},isExpandable(){var e;return!!(this.isLowerBreakpoint()&&this.list.languages&&((e=this.list.languages[this.lang])!=null&&e.title))},updateHeight(){const e=this.$refs.root;if(!e)return;const t=this.isHidden?"":e.scrollHeight+"px";e.style.height=t},handleClick(e){if(!this.isExpandable())return;this.isExpanded=!this.isExpanded;const t=this.$refs.root;if(e){const i=new CustomEvent(g.CHILD_HAS_UPDATE,{detail:{root:t}});this.parentOfParent.dispatchEvent(i)}!t||this.isExpanded||(t.style.height="")}},props:{list:Object,lang:String,classes:String,hidden:{default:null},noAnimation:{default:null}},data(){return{inTransition:!1,isExpanded:!1,parentOfParent:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),as=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"list-container",computed:{classValue(){return["list-container vue-component",`${this.spacing?this.spacing:""}`,`${this.classes?this.classes:""}`,n.isTrue(this.headlineSticky)?"list-container--headline-sticky has-headline-sticky":""]},colorStyling(){const e=this.bgColor?`--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);`:"",t=this.headlineColor?`--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`:"";return[e,t]}},props:{classes:String,headline:String,level:String,bgColor:String,headlineColor:String,headlineSticky:{default:!1},spacing:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),rs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"list",migrate:!0,template:`
          list
      `}},Symbol.toStringTag,{value:"Module"})),os=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"logo-list",components:{"logo-list-items":{tagName:"logo-list-items",computed:{},methods:{getItemComponent(e){return e!=null&&e.url?"a":"span"},getDelay(e){const t=this.getIndex(e),i=t>0?100:0;return`--utility-animation-delay: ${`${t*i}ms`};`},getIndex(e){return this.isClone?this.list.length+e:e}},template:`
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
  `,props:{list:Array,isOverlapping:Boolean,isClone:Boolean}}},computed:{defaultSpacing(){},classValue(){return["logo-list container utility-animation vue-component",this.aspectRatio?"logo-list--aspect-ratio":"",n.isTrue(this.sticky)?"is-sticky-scroller":"",this.spacing?this.spacing:"py-4",this.isOverlapping?"logo-list--is-overlapping":""]},isOverlapping(){return n.isTrue(this.overlapping)},columnsValue(){const t=parseInt(this.columns);return"--column-width: "+`calc(${100/(Number.isNaN(t)?4:t)}% - 3px)`},aspectRatioValue(){const e=this.aspectRatio.split("/");return e.length!=2?"":`--aspect-ratio-width: ${e[0]}; --aspect-ratio-height: ${e[1]}`},styles(){return[this.columnsValue,this.aspectRatioValue,this.bgColor?`--logo-list-background: ${this.bgColor}`:""].join("; ")}},props:{list:Array,sticky:{default:!1},spacing:String,columns:Number,aspectRatio:{default:!1},overlapping:{default:!1},bgColor:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ns=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"lottie",computed:{classList(){return["lottie","vue-component"]},widthValue(){return this.width&&this.width!==""?this.width:"100%"},heightValue(){return this.height&&this.height!==""?this.height:"100%"},backgroundValue(){return this.background&&this.background!==""?this.background:"transparent"},loopValue(){return this.loop&&this.loop!==""?this.loop:!0},autoplayValue(){return this.autoplay&&this.autoplay!==""?this.autoplay:!0},nameValue(){return this.name&&this.name!==""?this.name:"lottie-"+Math.random()},rendererValue(){return this.renderer&&this.renderer!==""?this.renderer:"svg"},options(){return{renderer:this.rendererValue,loop:this.loopValue,autoplay:this.autoplayValue,width:this.getSize(this.widthValue),height:this.getSize(this.heightValue),animationData:this.data}}},data(){return{style:{}}},mounted(){this.initStyle()},methods:{initStyle(){this.style={width:this.getSize(this.widthValue),height:this.getSize(this.heightValue),background:this.backgroundValue}},getSize(e){return!e.indexOf||e.indexOf("px")===-1&&e.indexOf("%")===-1?`${e}px`:e}},props:{data:Object,name:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},background:{type:String},loop:{type:[Boolean,Number]},autoplay:{type:Boolean},renderer:{type:String}},template:`
    <div :class="classList">
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),ls=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"modal-application",props:{form:Object,success:{type:Object,default:()=>({})}},template:`
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
    `}},Symbol.toStringTag,{value:"Module"})),cs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"modal",computed:{modalErrorValue(){return n.getJSON(this.modalError)},classList(){return["modal fade",this.slimValue?"modal--slim":"",this.notificationValue?"modal--notification":"",this.isCenterSlim?"modal--center-slim":"","vue-component"]},dialogClassList(){return["modal-dialog",`${this.slimValue?"modal-lg":"modal-xl"}`,`${this.centerValue?"modal-dialog-centered":""}`]},settings(){return{"data-client-name":this.clientName?this.clientName:null,"data-api-url":this.apiUrl?this.apiUrl:null,"data-job-id":this.jobId?this.jobId:null,"data-modal-id":this.modalId?this.modalId:null,"data-api-key":this.apiKey?this.apiKey:null,"data-mock-apply-url":this.mockApplyUrl?this.mockApplyUrl:null,"data-mock-documents-url":this.mockDocumentsUrl?this.mockDocumentsUrl:null}},isCenterSlim(){return this.slimValue&&this.centerValue},modal(){return this.$refs.modal},centerValue(){return n.isTrue(this.center)},slimValue(){return n.isTrue(this.slim)},loadingValue(){return this.loading?!0:null},notificationValue(){return n.isTrue(this.notification)},size(){return this.slimValue||this.notificationValue?"small":null},hasCircleAndHover(){return!(this.isCenterSlim||this.notificationValue)},circle(){return this.hasCircleAndHover},hover(){return this.hasCircleAndHover},bodyClasses(){return["modal__body",this.loading?l.LOADING:null]}},mounted(){this.bindEvents(),this.show===!0&&this.openModal()},unmounted(){this.observer.disconnect(),document.removeEventListener(g.LOAD_MODAL,this.handleLoading)},methods:{isModalOpen(){return!!document.body.classList.contains("modal-open")},setModalMode(e){const t=document.querySelector("html");e?t.classList.add(l.MODAL_OPEN):(t.classList.remove(l.MODAL_OPEN),this.handleClose())},handleClose(){const t=this.$refs.modal.querySelector(_.rootSelector);if(!t)return;const i=_.getInstance(t);i||_.reset(i.form)},bindEvents(){this.observer=new MutationObserver(this.handleMutation),setTimeout(()=>{this.observer.observe(document.body,{attributes:!0})},200),document.addEventListener(g.LOAD_MODAL,this.handleLoading)},handleMutation(){this.setModalMode(this.isModalOpen())},handleLoading(e){const t=e==null?void 0:e.detail;this.loading=t},openModal(){setTimeout(()=>{A.open(this.$refs.modal)},70)}},data(){return{observer:null,loading:!1,blabla:"text"}},props:{application:Boolean,form:Object,success:Object,clientName:String,apiUrl:String,jobId:String,modalId:String,slim:{default:null},show:{default:null},center:{default:null},notification:{default:null},apiKey:String,mockApplyUrl:String,mockDocumentsUrl:String,modalError:Object,content:String},template:`
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
    </div>`}},Symbol.toStringTag,{value:"Module"})),ds=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"people-square",migrate:!0,template:`
                        people-square
                    `}},Symbol.toStringTag,{value:"Module"})),hs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"person-quote",props:{img:String,text:String,name:String,srcSet:Object},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ps=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"post-teaser",data(){return{translationData:null,spacing:2}},computed:{formattedDate(){var t;const e=(t=this.postData)==null?void 0:t.date;if(e)return e.split("-").reverse().join(".")},classList(){return["post-teaser",this.classes!==""?this.classes:"","vue-component"]},title(){var e,t,i,s;return((e=this.postData)==null?void 0:e.lang)!==this.lang&&this.postData.lang!==""&&((t=this.translationData)!=null&&t.onlyLanguage)?`${this.postData.title} (${(i=this.translationData)==null?void 0:i.onlyLanguage})`:(s=this.postData)==null?void 0:s.title},excerpt(){var t;return n.decodeHTML(n.truncateWords((t=this.postData)==null?void 0:t.excerpt,30))},imgUrl(){var e;return`/blog/heads/${(e=this.postData)==null?void 0:e.blogtitlepic}.jpg`},postData(){return n.getJSON(this.post)},listClasses(){return`list-inline-item mx-sm-n${this.spacing}`},href(){var e;return(e=this.postData)==null?void 0:e.url}},beforeMount(){var t;const e=(t=window.i18n)==null?void 0:t.loader;e&&e.then(()=>{var i;this.translationData=(i=window.i18n)==null?void 0:i.getTranslationData(["onlyLanguage"])})},props:{classes:String,post:Object,tag:String,site:Object,lang:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),us=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"pricing-product",migrate:!0,template:`
                      pricing-product
                  `}},Symbol.toStringTag,{value:"Module"})),ms=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"product-blocks",migrate:!0,template:`
                      product-blocks
                  `}},Symbol.toStringTag,{value:"Module"})),gs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"product-stage",migrate:!0,template:`
                      product-stage
                  `}},Symbol.toStringTag,{value:"Module"})),fs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"quotes",migrate:!0,template:`
                      quotes
                  `}},Symbol.toStringTag,{value:"Module"})),vs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"screenshot",computed:{style(){return{"background-color":this.bgColor}},leftValue(){return n.isTrue(this.left)}},props:{spacing:String,level:String,headline:String,copy:String,left:Boolean,bgColor:String,source:String,sourceCaption:String,image:Object,cloudinary:Boolean,alt:String,classes:String,list:Object},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),bs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"scroll-arrow",computed:{classList(){return["scroll-arrow","container",this.spacingValue,"vue-component"]},spacingValue(){return this.spacing?`${this.spacing}`:""}},methods:{handleClick(){const e=document.querySelector(this.target);e&&n.scrollIntoView(e,!0)}},props:{target:String,spacing:{default:null}},template:`
    <div :class="classList">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center">
          <icon classes="scroll-arrow__button" size="xl" icon="arrow-narrow" :onclick="handleClick"  />
        </div>
      </div>
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),xt={},ys=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"search",computed:{classList(){return["search",`${this.searchExpanded?"search--expanded":""}`,"vue-component"]},limitedResults(){var e;return(e=this.results)==null?void 0:e.slice(0,this.maxResults)}},data(){return{search:null,store:null,results:null,maxResults:15,searchExpanded:!1}},methods:{handleEnter(){const e=`${this.endpoint}`;if(e)return this.store?this.handleSearch():fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{this.store=t,this.handleSearch()}).catch(t=>{console.log("handleEnter ~ error",t)})},handleSearch(){this.searchEngine||this.initSearchEngine();const e=`${this.$refs.search.value}`;e&&(this.results=this.searchEngine.search(e),console.log("handleSearch ~ this.results",this.results))},initSearchEngine(){const e=this.store,{results:t,weights:i}=e;if(!xt)return;const s={includeScore:!0,ignoreLocation:!0,findAllMatches:!0,includeMatches:!0,threshold:.2,keys:i};this.searchEngine=new xt(t,s)},handleSearchBar(){this.searchExpanded=!this.searchExpanded,window.addEventListener("click",this.handleOutsideClick.bind(this))},handleOutsideClick(e){this.searchExpanded=n.isOutsideOf("search",e)?!1:this.searchExpanded}},props:{placeholder:String,endpoint:String,language:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),_s=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"services",computed:{classValue(){return["services",this.author?`services--author ${this.authorHasSocials?"":"services--no-socials"}`:"","vue-component"]},authorHasSocials(){var e;return((e=this.author)==null?void 0:e.socials)!==void 0},itemsList(){return this.authorHasSocials?this.author.socials:this.items}},methods:{},props:{items:{default:null},title:{default:null},label:{default:null},value:{default:null},author:{default:null},shareUrl:{default:null}},template:`
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
`}},Symbol.toStringTag,{value:"Module"})),Ss=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"shape-animation",computed:{tag(){return this.isAnimate?"animate":this.isMotion?"animateMotion":"animateTransform"},isAnimate(){let e=!1;switch(this.attributeName){case"opacity":e=!0;break}return e},defaultCalcMode(){return this.isAnimate?null:"spline"},defaultKeyTimes(){return this.isAnimate?null:"0;1"},effectiveKeySplines(){return this.isAnimate?null:this.keySplines}},props:{id:String,href:String,begin:String,attributeName:String,by:String,from:String,to:String,dur:String,fill:String,calcMode:String,keyTimes:String,keySplines:String,keyPoints:String,type:String,additive:Boolean,isMotion:Boolean,isAnimate:Boolean,path:String,values:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"}));class O{constructor({tagName:t,elements:i,begin:s}){this.tagName=t,this.elements=i,this.begin=s,this.tagNameId=this.createTagNameId()}createStepNames(t){return this.elements.forEach(i=>{const s=i.name;t[s]=i,Object.keys(i).forEach(a=>{if(a==="name")return;const o=i[a];o&&(o.id=this.getStepId(`${s.toLowerCase()}-${a}`))})}),t}getSequence(){const t=this.createStepNames({});return this.elements.forEach(i=>{const s=i.name;t[s]=i,Object.keys(i).forEach(a=>{if(a==="name")return;const o=i[a];o&&(o.begin=this.getStepBegin(t,o),o.start&&(o.begin=`${this.begin};${o.begin}`))}),i.id=this.getStepId(`${s.toLowerCase()}-id`),i.href=`#${i.id}`}),t}getStepBegin(t,i){const a=`${(""+i.delay).indexOf("s")!==-1?i.delay:`${i.delay}s`}`;return i.waitFor?`${this.getWaitForName(t,i.waitFor)}+${a}`:a}getWaitForName(t,i){const s=".end",r=i.split("."),a=r[0],o=r[1];return`${t[a]&&t[a][o]?t[a][o].id:""}${s}`}getStepId(t){return`${this.tagNameId}__${t}`}createTagNameId(){return`${n.uuid()}-${this.tagName}`}}const Cs="0.1s",pt="7s",M="0.05s",Lt="shape-circle-within-square",ks=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Lt,computed:{begin(){return this.start?this.start:Cs},firstSquareStaticColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},firstCircleColor(){return this.secondColor?this.secondColor:"var(--color-white)"},secondSquareColor(){return this.secondColor?this.secondColor:"var(--color-white)"},secondCircleColor(){return this.thirdColor?this.thirdColor:"var(--color-gigas)"},thirdSquareColor(){return this.thirdColor?this.thirdColor:"var(--color-gigas)"},thirdCircleColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},firstCircle(){return this.sequence.firstCircle},secondSquare(){return this.sequence.secondSquare},secondCircle(){return this.sequence.secondCircle},thirdSquare(){return this.sequence.thirdSquare},thirdCircle(){return this.sequence.thirdCircle},fourthSquare(){return this.sequence.fourthSquare},overall(){return{keySplines:"0 0 1 1",dur:"1.8s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Lt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"transform2",from:"400 0",to:"0 0",dur:"0.3s",type:"translate"}]},{steps:[{name:"transform",dur:"",from:"0 0",to:"1 1",type:"scale"}]}],elements:[{name:"firstCircle",transform:{delay:M,values:"0 0;1 1;1 -1",keyTimes:"0;0.5;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1",start:!0,waitFor:"fourthSquare.transform2"},reset:{waitFor:"secondSquare.transform2",delay:M,dur:"0.01s"}},{name:"secondSquare",transform2:{delay:pt,waitFor:"firstCircle.transform"},reset:{waitFor:"thirdSquare.transform2",delay:M,dur:"0.01s"}},{name:"secondCircle",transform:{delay:M,values:"0 0;1 1;1 -1",keyTimes:"0;0.5;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1",waitFor:"secondSquare.transform2"},reset:{waitFor:"thirdSquare.transform2",delay:M,dur:"0.01s"}},{name:"thirdSquare",transform2:{delay:pt,waitFor:"secondCircle.transform"},reset:{waitFor:"fourthSquare.transform2",delay:M,dur:"0.01s"}},{name:"thirdCircle",transform:{delay:M,values:"0 0;1 1;1 -1",keyTimes:"0;0.5;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1",waitFor:"thirdSquare.transform2"},reset:{waitFor:"fourthSquare.transform2",delay:M,dur:"0.01s"}},{name:"fourthSquare",transform2:{delay:pt,waitFor:"thirdCircle.transform"},reset:{waitFor:"fourthSquare.transform2",delay:M,dur:"0.01s"}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
      </g>`}},Symbol.toStringTag,{value:"Module"})),ws="1s",C="7",k="0.05",Dt="shape-fast-forward",xs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Dt,computed:{classList(){return["shape-square-forward","vue-component"]},begin(){return this.start?this.start:ws},rectColor(){return this.backgroundColor?this.backgroundColor:"var(--color-primary-accent)"},pathColor(){return this.firstColor?this.firstColor:"var(--color-primary-accent-light)"},secondArrowColor(){return this.secondColor?this.secondColor:"var(--color-secondary)"},firstArrow(){return this.sequence.firstArrow},secondArrow(){return this.sequence.secondArrow},thirdArrow(){return this.sequence.thirdArrow},overall(){return{keySplines:"0.19 1 0.2 1",dur:"1.3s"}},internalWidth(){return this.width?this.width:400},internalHeight(){return this.internalWidth},halfWidth(){return this.internalWidth/2},halfHeight(){return this.internalHeight/2},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Dt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance},points(){const e=this.internalWidth,t=this.halfWidth,i=this.internalHeight,s=this.halfHeight;return{firstArrow:`0,0 0,${i} ${s},${t}`,secondArrow:`${t},0, ${t},${i}, ${e},${s}`,thirdArrow:`${-t},0, ${-t},${i}, 0,${t}`}}},data(){return{animations:[{steps:[{name:"moveTo1",from:"0",to:"-400",dur:"0.01s",type:"translate"}]},{steps:[{name:"show",from:"0.1",to:"1",dur:"0.01s",attributeName:"opacity",animate:!0}]},{steps:[{name:"moveTo2",to:"-200",from:"-400",type:"translate"}]},{steps:[{name:"moveTo3",by:"200",type:"translate"}]},{steps:[{name:"hide",from:"0.6",to:"0.1",dur:"0.01s",attributeName:"opacity",animate:!0}]},{steps:[{name:"moveTo4",type:"translate"},{name:"shrink",type:"scale",additive:!0,from:"1 1",to:"0.1 0.1"}]}],elements:[{name:"firstArrow",moveTo3:{start:!0,waitFor:"firstArrow.reset",delay:C},shrink:{waitFor:"firstArrow.moveTo3",delay:C},moveTo4:{waitFor:"firstArrow.moveTo3",from:"200",to:"400",delay:C},hide:{waitFor:"firstArrow.moveTo4",delay:k},moveTo1:{waitFor:"firstArrow.hide",delay:k,from:"-400",to:"-200"},show:{waitFor:"firstArrow.moveTo1",delay:k},reset:{waitFor:"firstArrow.show",delay:C-k*3.5}},{name:"secondArrow",moveTo4:{start:!0,waitFor:"secondArrow.reset",delay:C,from:"0",to:"200"},shrink:{start:!0,waitFor:"secondArrow.reset",delay:C},hide:{waitFor:"secondArrow.shrink",delay:k},moveTo1:{waitFor:"secondArrow.hide",delay:k,dur:"0.001s"},show:{waitFor:"secondArrow.moveTo1",delay:k},moveTo2:{waitFor:"secondArrow.show",delay:C-k*3.5},reset:{waitFor:"secondArrow.moveTo2",delay:C}},{name:"thirdArrow",moveTo2:{start:!0,waitFor:"thirdArrow.show",delay:C-k*3.5,from:"0",to:"200"},moveTo3:{waitFor:"thirdArrow.moveTo2",delay:C,from:"200",to:"400"},shrink:{waitFor:"thirdArrow.moveTo3",delay:C},moveTo4:{waitFor:"thirdArrow.moveTo3",from:"400",to:"600",delay:C},hide:{waitFor:"thirdArrow.moveTo4",delay:k},reset:{waitFor:"thirdArrow.hide",delay:k,dur:"0.01s"},show:{waitFor:"thirdArrow.reset",delay:k}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,secondColor:String,start:String,width:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.animate&&(a.animate=o.animate),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Ls="0s",Q="6s",w="0.3s",Tt="shape-four-squares",Ds=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Tt,computed:{begin(){return this.start?this.start:Ls},squareUpperLeftFirstColor(){return this.firstColor?this.firstColor:"var(--color-blue-light)"},squareUpperRightFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},squareBottomLeftFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},squareBottomRightFirstColor(){return this.firstColor?this.firstColor:"var(--color-blue-light)"},squareUpperLeftSecondColor(){return this.thirdColor?this.thirdColor:"var(--color-orange)"},squareUpperRightSecondColor(){return this.fourthColor?this.fourthColor:"var(--color-gigas)"},squareBottomLeftSecondColor(){return this.fourthColor?this.fourthColor:"var(--color-gigas)"},squareBottomRightSecondColor(){return this.thirdColor?this.thirdColor:"var(--color-orange)"},squareUpperLeftFirst(){return this.sequence.squareUpperLeftFirst},squareUpperRightFirst(){return this.sequence.squareUpperRightFirst},squareBottomLeftFirst(){return this.sequence.squareBottomLeftFirst},squareBottomRightFirst(){return this.sequence.squareBottomRightFirst},squareUpperLeftSecond(){return this.sequence.squareUpperLeftSecond},squareUpperRightSecond(){return this.sequence.squareUpperRightSecond},squareBottomLeftSecond(){return this.sequence.squareBottomLeftSecond},squareBottomRightSecond(){return this.sequence.squareBottomRightSecond},squareUpperLeftReset(){return this.sequence.squareUpperLeftReset},squareUpperRightReset(){return this.sequence.squareUpperRightReset},squareBottomLeftReset(){return this.sequence.squareBottomLeftReset},squareBottomRightReset(){return this.sequence.squareBottomRightReset},overall(){return{keySplines:"0 0 1 1",dur:"0.8s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Tt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"moveTo1",from:"0 -200",to:"0 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo2",from:"400 0",to:"200 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo3",from:"-200 200",to:"0 200",dur:"",type:"translate"}]},{steps:[{name:"moveTo4",from:"200 400",to:"200 200",dur:"",type:"translate"}]}],elements:[{name:"squareUpperLeftFirst",moveTo1:{start:!0,delay:w,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareUpperLeftSecond.moveTo1",delay:w,dur:"0.01s"}},{name:"squareUpperRightFirst",moveTo2:{start:!0,delay:w,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareUpperRightSecond.moveTo2",delay:w,dur:"0.01s"}},{name:"squareBottomLeftFirst",moveTo3:{start:!0,delay:w,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareBottomLeftSecond.moveTo3",delay:w,dur:"0.01s"}},{name:"squareBottomRightFirst",moveTo4:{start:!0,delay:w,waitFor:"squareUpperLeftSecond.reset"},reset:{waitFor:"squareBottomRightSecond.moveTo4",delay:w,dur:"0.01s"}},{name:"squareUpperLeftSecond",moveTo1:{delay:w,waitFor:"squareUpperLeftFirst.moveTo1"},reset:{waitFor:"squareUpperLeftSecond.moveTo1",delay:Q,dur:"1s"}},{name:"squareUpperRightSecond",moveTo2:{delay:w,waitFor:"squareUpperRightFirst.moveTo2"},reset:{waitFor:"squareUpperRightSecond.moveTo2",delay:Q,dur:"1s"}},{name:"squareBottomLeftSecond",moveTo3:{delay:w,waitFor:"squareBottomLeftFirst.moveTo3"},reset:{waitFor:"squareBottomLeftSecond.moveTo3",delay:Q,dur:"1s"}},{name:"squareBottomRightSecond",moveTo4:{delay:w,waitFor:"squareBottomRightFirst.moveTo4"},reset:{waitFor:"squareBottomRightSecond.moveTo4",delay:Q,dur:"1s"}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,fourthColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Ts="0s",P="1s",tt="0.01s",et="0.01s",Ot="shape-four-triangles",Os=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Ot,computed:{begin(){return this.start?this.start:Ts},triangleBottomLeftColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},triangleUpperLeftColor(){return this.secondColor?this.secondColor:"var(--color-secondary)"},triangleUpperRightColor(){return this.firstColor?this.firstColor:"var(--color-orange)"},triangleBottomRightColor(){return this.secondColor?this.secondColor:"var(--color-secondary)"},squareColor(){return this.thirdColor?this.thirdColor:"var(--color-white)"},triangleBottomLeft(){return this.sequence.triangleBottomLeft},triangleUpperLeft(){return this.sequence.triangleUpperLeft},triangleUpperRight(){return this.sequence.triangleUpperRight},triangleBottomRight(){return this.sequence.triangleBottomRight},square(){return this.sequence.square},overall(){return{keySplines:"0 0 1 1",dur:"4s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Ot,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"motion",attributeName:"motion",motion:!0,dur:""}]},{steps:[{name:"transformRotate",dur:"",type:"rotate"}]},{steps:[{name:"moveTo1",dur:"",type:"translate",additive:!0}]}],elements:[{name:"triangleBottomLeft",moveTo1:{start:!0,delay:P,from:"-200 0",to:"-200 0",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-200 0;-200 0",waitFor:"triangleBottomLeft.reset"},motion:{start:!0,delay:P,path:"M200 400 C200,400 200,200 200,200 C200,200 200,200 200,200",keyPoints:"0;1;1",keyTimes:"0;0.333333;1",keySplines:"0.333 0 0.667 1;0 0 0 0",waitFor:"triangleBottomLeft.reset"},transformRotate:{start:!0,delay:P,from:"90",to:"0",values:"90;90;0;0",keyTimes:"0;0.333333;0.666667;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",waitFor:"triangleBottomLeft.reset"},reset:{waitFor:"square.moveTo1",delay:tt,dur:et}},{name:"triangleUpperLeft",moveTo1:{start:!0,delay:P,from:"-200 0",to:"-200 0",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-200 0;-200 0",waitFor:"triangleUpperLeft.reset"},motion:{start:!0,delay:P,keyTimes:"0;0.666667;0.95;1",path:"M200 200 C200,200 200,200 200,200 C200,200 400,200 400,200 C400,200 400,200 400,200",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",keyPoints:"0;0;1;1",waitFor:"triangleUpperLeft.reset"},transformRotate:{start:!0,delay:P,from:"90",to:"0",values:"90;90;0;0",keyTimes:"0;0.333333;0.666667;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",waitFor:"triangleUpperLeft.reset"},reset:{waitFor:"square.moveTo1",delay:tt,dur:et}},{name:"triangleUpperRight",moveTo1:{start:!0,delay:P,from:"-100 -100",to:"-100 -100",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-100 -100;-100 -100",waitFor:"triangleUpperRight.reset"},motion:{start:!0,delay:P,keyTimes:"0;0.522222;0.855556;1",keySplines:"0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",path:"M300 100 C300,100 300,100 300,100 C300,100 100,100 100,100 C100,100 100,100 100,100",keyPoints:"0;0;1;1",waitFor:"triangleUpperRight.reset"},reset:{waitFor:"square.moveTo1",delay:tt,dur:et}},{name:"triangleBottomRight",moveTo1:{start:!0,delay:P,from:"-100 -100",to:"-100 -100",keyTimes:"0;1",keySplines:"0 0 1 1",values:"-100 -100;-100 -100",waitFor:"triangleBottomRight.reset"},motion:{start:!0,delay:P,keyTimes:"0;0.333333;1",keySplines:"0.167 0.167 0.833 0.833;0 0 0 0",path:"M300 300 C300,300 300,100 300,100 C300,100 300,100 300,100",keyPoints:"0;1;1",waitFor:"triangleBottomRight.reset"},reset:{waitFor:"square.moveTo1",delay:tt,dur:et}},{name:"square",moveTo1:{delay:"14s",dur:"0.5s",from:"0 0",to:"-400 0",waitFor:"triangleBottomRight.moveTo1"},reset:{waitFor:"square.moveTo1",delay:"1s",dur:"0.5s"}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Ps="0.3s",js="7",q="0.2",Pt="shape-half-square",Ms=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Pt,computed:{begin(){return this.start?this.start:Ps},backgroundSquareColor(){return this.backgroundColor?this.backgroundColor:"var(--color-blue-light)"},firstSquareColor(){return this.firstColor?this.firstColor:"var(--color-page-detail-shape)"},secondSquareColor(){return this.secondColor?this.secondColor:"var(--color-background)"},thirdSquareColor(){return this.thirdColor?this.thirdColor:"var(--color-primary-accent)"},squareGroup(){return this.sequence.squareGroup},firstSquare(){return this.sequence.firstSquare},secondSquare(){return this.sequence.secondSquare},thirdSquare(){return this.sequence.thirdSquare},fourthSquare(){return this.sequence.fourthSquare},overall(){return{keySplines:"0 0 1 1",dur:"0.8s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Pt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"transform1",from:"400",to:"200",dur:"",type:"translate"}]},{steps:[{name:"transform2",from:"200",to:"-80",dur:"",type:"translate"}]},{steps:[{name:"transform3",from:"-80",to:"-200",dur:"",type:"translate"}]},{steps:[{name:"transform4",from:"0",to:"-400",dur:"",type:"translate"}]},{steps:[{name:"animate",animate:!0,attributeName:"width",from:"300",to:"200",dur:"",type:"animate"}]}],elements:[{name:"squareGroup",transform1:{delay:q,start:!0,waitFor:"fourthSquare.reset",keySplines:"0.2, 0.8, 0.7, 1"},transform2:{delay:q,waitFor:"squareGroup.transform1",keySplines:"0.2, 0.7, 0.8, 1"},transform3:{delay:q,waitFor:"squareGroup.transform2",keySplines:"0.2, 0.7, 0.8, 1"},reset:{waitFor:"fourthSquare.transform4",delay:q,dur:"0.01s"}},{name:"secondSquare",animate:{delay:q,waitFor:"squareGroup.transform2",keySplines:"0.2, 0.8, 0.7, 1"},reset:{waitFor:"fourthSquare.transform4",delay:q,dur:"0.01s"}},{name:"fourthSquare",transform4:{delay:js,waitFor:"squareGroup.transform3",keySplines:"0.2, 0.8, 0.7, 1"},reset:{waitFor:"fourthSquare.transform4",delay:q,dur:"0.1s"}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.animate&&(a.animate=o.animate),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Es="0s",ut="0s",mt="0.01s",jt="shape-moving-eye",Ns=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:jt,computed:{begin(){return this.start?this.start:Es},squareColor(){return this.backgroundColor?this.backgroundColor:"var(--color-green-blue)"},circleColor(){return this.firstColor?this.firstColor:"var(--color-yellow)"},upperSquare(){return this.sequence.upperSquare},bottomSquare(){return this.sequence.bottomSquare},eyeCircle(){return this.sequence.eyeCircle},overall(){return{keySplines:"0 0 1 1",dur:"20s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:jt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"motion",attributeName:"motion",motion:!0}]},{steps:[{name:"transform",from:"1.3 1.01",to:"1.3 1.01",dur:"",type:"scale"}]}],elements:[{name:"upperSquare",transform:{start:!0,delay:0,values:"1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01",keyTimes:"0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",additive:!0,waitFor:"eyeCircle.reset"},reset:{waitFor:"eyeCircle.motion",delay:ut,dur:mt}},{name:"bottomSquare",transform:{start:!0,delay:0,values:"1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01",keyTimes:"0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",additive:!0,waitFor:"eyeCircle.reset"},reset:{waitFor:"eyeCircle.motion",delay:ut,dur:mt}},{name:"eyeCircle",motion:{start:!0,delay:0,keyTimes:"0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",keySplines:"0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0",path:"M 263 168 C 263 168 263 168 263 168 C 237 167 109 167 109 167 C 109 167 212 167 263 168 C 283 168 239 168 263 168 C 296 167 397 168 412 168 C 436 168 287 168 263 168 C 238 168 263 168 263 168 C 263 168 263 168 263 168",keyPoints:"0;0;0.23;0.47;0.51;0.73;0.97;1;1",waitFor:"eyeCircle.reset"},reset:{waitFor:"eyeCircle.motion",delay:ut,dur:mt}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Is="1s",Mt="shape-security-eye",As=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Mt,computed:{classList(){return["shape-square-forward","vue-component"]},begin(){return this.start?this.start:Is},overall(){return{dur:"10s",sonarDelay:"9"}},internalWidth(){return this.width?this.width:400},internalHeight(){return this.internalWidth},halfWidth(){return this.internalWidth/2},halfHeight(){return this.internalHeight/2},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Mt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{}},props:{backgroundColor:String,firstColor:String,secondColor:String,start:String,width:String},methods:{leftUpperSonarBegin(e){let t=8.44;return t=e?t+e/100:t,`${t}s;leftUpperSonarStep1.end+${this.overall.sonarDelay}s`},leftBottomSonarBegin(e){let t=5.5;return t=e?t+e/100:t,`${t}s;leftBottomSonarStep1.end+${this.overall.sonarDelay}s`},rightBottomSonarBegin(e){let t=2.5;return t=e?t+e/100:t,`${t}s;rightBottomSonarStep1.end+${this.overall.sonarDelay}s`},rightUpperSonarBegin(e){let t=.2;return t=e?t+e/100:t,`${t}s;rightUpperSonarStep1.end+${this.overall.sonarDelay}s`}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),qs="0s",$s="6s",H="0.05s",Et="shape-semi-circle",zs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:Et,computed:{begin(){return this.start?this.start:qs},squareColor(){return this.backgroundColor?this.backgroundColor:"var(--color-green-blue)"},circleColor(){return this.firstColor?this.firstColor:"var(--color-yellow)"},semiCircle(){return this.sequence.semiCircle},resetSquare(){return this.sequence.resetSquare},overall(){return{keySplines:"0 0 1 1",dur:"1s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Et,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"moveTo1",from:"700 -300",to:"350 50",dur:"",type:"translate"}]},{steps:[{name:"moveTo2",from:"350 50",to:"50 350",dur:"",type:"translate"}]},{steps:[{name:"moveTo3",from:"50 350",to:"-300 700",dur:"",type:"translate"}]},{steps:[{name:"moveTo4",from:"400 0",to:"0 0",dur:"",type:"translate"}]}],elements:[{name:"semiCircle",moveTo1:{start:!0,delay:$s,keySplines:"0.5, 0.6, 0.8, 1",waitFor:"resetSquare.reset"},moveTo2:{delay:H,keySplines:"0.5, 0.7, 0.8, 1",waitFor:"semiCircle.moveTo1"},moveTo3:{delay:H,waitFor:"semiCircle.moveTo2"},reset:{waitFor:"resetSquare.moveTo4",delay:H,dur:H}},{name:"resetSquare",moveTo4:{delay:H,waitFor:"semiCircle.moveTo3"},reset:{waitFor:"resetSquare.moveTo4",delay:"1s",dur:H}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Bs="1s",z=70,Vs="0.8s",B=155,Nt="shape-square-circle",Fs={tagName:Nt,computed:{classList(){return["shape-square-circle","vue-component"]},begin(){return this.start?this.start:Bs},rectColor(){return this.backgroundColor?this.backgroundColor:"var(--color-primary-accent)"},circleColor(){return this.firstColor?this.firstColor:"var(--color-secondary)"},bigCircle(){return this.sequence.bigCircle},smallCircle(){return this.sequence.smallCircle},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId})`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:Nt,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{elements:[{name:"smallCircle",grow:{start:!0,waitFor:"bigCircle.reset",delay:"20s"},shrink:{waitFor:"bigCircle.shrink",delay:"0.1s"},reset:{waitFor:"bigCircle.shrink",delay:"0.8s"}},{name:"bigCircle",shrink:{waitFor:"smallCircle.grow",delay:"0.01s"},reset:{waitFor:"smallCircle.shrink",delay:"0.01s"}}],shapeElementsInstance:null}},props:{backgroundColor:String,firstColor:String,start:String},template:`
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <circle :fill="circleColor" :id="bigCircle?.id" cx="200" cy="200" r="${B}">
          <animate
            :id="bigCircle?.shrink?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.shrink?.begin"
            attributeName="r"
            from="${B}"
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
            to="${B}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${B/1.1};${B/1.15};${B/1.1};${B}"
          />
        </circle>
        <circle :fill="rectColor" :id="smallCircle?.id" cx="200" cy="200" r="${z}">
          <animate
            :id="smallCircle?.grow?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.grow?.begin"
            attributeName="r"
            from="${z}"
            :to="width"
            dur="${Vs}"
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
            to="${z}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${z/1.1};${z/1.15};${z/1.1};${z}"
          />
        </circle>
      </g>
    </g>`},Rs=Object.freeze(Object.defineProperty({__proto__:null,default:Fs},Symbol.toStringTag,{value:"Module"})),Us="0s",it="6s",I="1s",It="shape-triangles-to-center",Hs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:It,computed:{begin(){return this.start?this.start:Us},triangleUpperStaticColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleBottomStaticColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleLeftStaticColor(){return this.thirdColor?this.thirdColor:"var(--color-yellow)"},triangleRightStaticColor(){return this.thirdColor?this.thirdColor:"var(--color-yellow)"},triangleUpperFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},triangleBottomFirstColor(){return this.secondColor?this.secondColor:"var(--color-white)"},triangleLeftFirstColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleRightFirstColor(){return this.firstColor?this.firstColor:"var(--color-green-blue)"},triangleUpperFirst(){return this.sequence.triangleUpperFirst},triangleBottomFirst(){return this.sequence.triangleBottomFirst},triangleLeftFirst(){return this.sequence.triangleLeftFirst},triangleRightFirst(){return this.sequence.triangleRightFirst},overall(){return{keySplines:"0 0 1 1",dur:"1s"}},width(){return 400},height(){return this.width},clipPathId(){var e;return`${(e=this.shapeElements)==null?void 0:e.getStepId("clip-path")}`},clipPathUrl(){return`clip-path: url(#${this.clipPathId});`},sequence(){var e;return(e=this.shapeElements)==null?void 0:e.getSequence()},shapeElements(){return this.shapeElementsInstance||(this.shapeElementsInstance=new O({tagName:It,elements:this.elements,begin:this.begin})),this.shapeElementsInstance}},data(){return{animations:[{steps:[{name:"moveTo1",from:"0 -200",to:"0 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo2",from:"0 400",to:"0 200",dur:"",type:"translate"}]},{steps:[{name:"moveTo3",from:"-200 0",to:"0 0",dur:"",type:"translate"}]},{steps:[{name:"moveTo4",from:"400 0",to:"200 0",dur:"",type:"translate"}]}],elements:[{name:"triangleUpperFirst",moveTo1:{delay:I,start:!0,waitFor:"triangleUpperFirst.reset"},reset:{waitFor:"triangleUpperFirst.moveTo1",delay:it,dur:I}},{name:"triangleBottomFirst",moveTo2:{delay:I,start:!0,waitFor:"triangleBottomFirst.reset"},reset:{waitFor:"triangleBottomFirst.moveTo2",delay:it,dur:I}},{name:"triangleLeftFirst",moveTo3:{delay:I,start:!0,waitFor:"triangleLeftFirst.reset"},reset:{waitFor:"triangleLeftFirst.moveTo3",delay:it,dur:I}},{name:"triangleRightFirst",moveTo4:{delay:I,start:!0,waitFor:"triangleRightFirst.reset"},reset:{waitFor:"triangleRightFirst.moveTo4",delay:it,dur:I}}],shapeElementsInstance:null}},props:{firstColor:String,secondColor:String,thirdColor:String,start:String},methods:{getStepData(e,t){const i=this.sequence[e];if(!i)return;const s=[];return t.forEach(r=>{const a={...r},o=i[a==null?void 0:a.name];if(!o)return;o.href=i.href,o.by&&(a.by=o.by),o.from&&(a.from=o.from),o.to&&(a.to=o.to),o.additive&&(a.additive=o.additive),o.dur&&(a.dur=o.dur),o.motion&&(a.motion=o.motion),o.keyTimes&&(a.keyTimes=o.keyTimes),a.dur||(a.dur=this.overall.dur),a.keySplines||(a.keySplines=o.keySplines?o.keySplines:this.overall.keySplines);const c={step:a,data:o};s.push(c)}),s}},template:`
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
    </g>`}},Symbol.toStringTag,{value:"Module"})),Ws=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"shape",computed:{classList(){return["shape","vue-component"]},shapeName(){return this.name?this.name:"s-block"}},methods:{},props:{name:String,shapes:Array},template:`
    <div :class="classList">
      <div class="shape__container">
        <component :is="shapeName" :shapes="shapes" ></component>
      </div>
    </div>`}},Symbol.toStringTag,{value:"Module"})),At="l-block",Gs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:At,computed:{name(){return At},secondShapeBackgroundColor(){return this.secondShape.backgroundColor?this.secondShape.backgroundColor:"var(--color-yellow)"},secondShapeFirstColor(){return this.secondShape.firstColor?this.secondShape.firstColor:"var(--color-orange)"},secondShapeSecondColor(){return this.secondShape.secondColor?this.secondShape.secondColor:"var(--color-white)"},firstShape(){return this.getShapeData(0)},secondShape(){return this.getShapeData(1)},thirdShape(){return this.getShapeData(2)},fourthShape(){return this.getShapeData(3)},classList(){return["l-block","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth}},methods:{allProps(e){const t={};for(const i of Object.keys(e))t[i]=e[i];return t},getShapeData(e){const t=(this.shapes&&this.shapes[e])??{};return this.allProps(t)},defaultComponent(e){switch(e){default:case 0:return"shape-moving-eye";case 1:return"rect";case 2:return"shape-semi-circle";case 3:return"shape-half-square"}}},props:{shapes:Array,backgroundColor:String,firstColor:String,secondColor:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),qt="s-block",Js=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:qt,computed:{name(){return qt},secondShapeBackgroundColor(){return this.secondShape.backgroundColor?this.secondShape.backgroundColor:"var(--color-primary-accent-light)"},fourthShapeBackgroundColor(){return this.fourthShape.backgroundColor?this.fourthShape.backgroundColor:"var(--color-primary-accent-light)"},fourthShapeFirstColor(){return this.fourthShape.firstColor?this.fourthShape.firstColor:"var(--color-primary-accent)"},fourthShapeSecondColor(){return this.fourthShape.secondColor?this.fourthShape.secondColor:"var(--color-secondary)"},firstShape(){return this.getShapeData(0)},secondShape(){return this.getShapeData(1)},thirdShape(){return this.getShapeData(2)},fourthShape(){return this.getShapeData(3)},classList(){return["s-block","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth}},methods:{allProps(e){const t={};for(const i of Object.keys(e))t[i]=e[i];return t},getShapeData(e){const t=(this.shapes&&this.shapes[e])??{};return this.allProps(t)},defaultComponent(e){switch(e){default:case 0:return"square-square-circle";case 1:return"rect";case 2:return"shape-fast-forward";case 3:return"shape-pyramid"}}},props:{shapes:Array,backgroundColor:String,firstColor:String,secondColor:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),$t="square",Zs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:$t,computed:{name(){return $t},allProps(){const e={};e.width=this.shapeWidth;for(const t of Object.keys(this.shape))e[t]=this.shape[t];return e},shape(){return this.shapes?this.shapes[0]:null},classList(){return["square","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth},viewBox(){return`0 0 ${this.shapeWidth} ${this.shapeHeight}`}},props:{shapes:Array},template:`
    <svg style="width: 200px" :class="classList" :data-name="name" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :width="shapeWidth" :height="shapeHeight" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <component :is="shape.name" v-if="shape" v-bind="allProps"></component>
    </svg>
  `}},Symbol.toStringTag,{value:"Module"})),zt="t-block",Ks=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:zt,computed:{name(){return zt},secondShapeBackgroundColor(){return this.secondShape.backgroundColor?this.secondShape.backgroundColor:"var(--color-page-detail-shape)"},secondShapeFirstColor(){return this.secondShape.firstColor?this.secondShape.firstColor:"var(--color-orange)"},secondShapeSecondColor(){return this.secondShape.secondColor?this.secondShape.secondColor:"var(--color-background)"},firstShape(){return this.getShapeData(0)},secondShape(){return this.getShapeData(1)},thirdShape(){return this.getShapeData(2)},fourthShape(){return this.getShapeData(3)},classList(){return["t-block","vue-component"]},shapeWidth(){return 400},shapeHeight(){return this.shapeWidth}},methods:{allProps(e){const t={};for(const i of Object.keys(e))t[i]=e[i];return t},getShapeData(e){const t=(this.shapes&&this.shapes[e])??{};return this.allProps(t)},defaultComponent(e){switch(e){default:case 0:return"shape-moving-eye";case 1:return"shape-half-square";case 2:return"shape-semi-circle";case 3:return"rect"}}},props:{shapes:Array,backgroundColor:String,firstColor:String,secondColor:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Xs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"site-icons",computed:{svgTemplate(){return templates[this.icon]||""},classList(){return"streamline-sm mr-4"}},props:{icon:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),Bt=({length:e,centerPadding:t})=>({slidesToShow:3,slidesToScroll:3,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:e>3,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{centerMode:!0,infinite:!1,centerPadding:t||"30px",slidesToShow:2,slidesToScroll:2,dots:e>2}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:t||"20px",slidesToShow:1,slidesToScroll:1,dots:e>1}}]}),Ys=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"slider",computed:{classList(){return["slider",`${n.isTrue(this.hideContainer)===!0?"":this.getSpacing}`,`${this.backgroundClass}`,"vue-component"]},jsonOptions(){return n.getJSON(this.options)},getSpacing(){return this.spacing?this.spacing:""},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){return`slider__headline ${this.headlineClasses?this.headlineClasses:"h3-font-size"}`},centerPaddingValue(){return this.centerPadding?this.centerPadding+"px":null},carouselOptions(){const e=this.childrenLength;if(e===0)return null;const t=this.jsonOptions?this.jsonOptions:Bt({length:e,centerPadding:this.centerPaddingValue});return this.jsonOptions||(t.slidesToShow=t.slidesToScroll=1,t.dots=!0,t.responsive.forEach(s=>{s.settings.dots=!0,s.settings.slidesToScroll=s.settings.slidesToShow=1})),JSON.stringify(t)},childrenLength(){var e;return((e=this.children)==null?void 0:e.length)||0},children(){return this.$slots.default()},hideBackgroundValue(){return n.isTrue(this.hideBackground)},hideContainerValue(){return n.isTrue(this.hideContainer)},backgroundClass(){return this.hideBackgroundValue===!1?l.HAS_BACKGROUND:""},backgroundColor(){return this.bgColor?this.bgColor:this.defaultBgColor},style(){if(!this.hideBackgroundValue)return{"background-color":this.backgroundColor}}},data(){return{defaultBgColor:"var(--color-bg-grey)"}},props:{headline:String,headlineLevel:String,headlineClasses:String,spacing:String,hideContainer:{default:!1},hideBackground:{default:!1},bgColor:String,centerPadding:Number,options:Object},template:`
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
    </div>`},defaultOptions:Bt},Symbol.toStringTag,{value:"Module"})),Qs=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"slot-items",props:{items:{default:[]}},render(){const e=this.items(),t=[];return e.forEach((i,s)=>{var r;(r=i==null?void 0:i.props)!=null&&r.style||(i.props.style=`--utility-animation-index: ${s+1}`),t.push(i)}),t}}},Symbol.toStringTag,{value:"Module"})),ta=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"socials",data(){return{follow:""}},computed:{classValue(){return["socials align-items-center",n.isTrue(this.expand)?this.showLabel?"socials--label-expand":"socials--expand":"",n.isTrue(this.vertical)?"is-vertical-xl mr-5 mr-xl-0 align-items-xl-start mb-xl-4":"","vue-component"]},iconClasses(){return[n.isTrue(this.vertical)?"mb-5 mr-xl-0":""]},showLabel(){return!n.isTrue(this.label)},socialItemClass(){return["socials__item",this.iconClasses]},getList(){var c,d;const e="https://www.twitter.com/",t="https://www.linkedin.com/in/",i=["mailto:?subject=","https://www.linkedin.com/shareArticle?mini=true&url=","https://twitter.com/intent/tweet?text=&url="],s={email:"fas fa-envelope",linkedin:"fab fa-linkedin",twitter:"fab fa-x-twitter"},a=[{link:(c=this.author)!=null&&c.twitter?e+this.author.twitter:"",icon:s.twitter},{link:(d=this.author)!=null&&d.linkedin?t+this.author.linkedin:"",icon:s.linkedin}].filter(h=>h.link!=="");if(a.length>0)return a;const o=i.map(h=>h+this.shareUrl);return o==null?void 0:o.map((h,u)=>{const S=Object.keys(s)[u];return{link:h,icon:s[S]}})}},mounted(){var e,t;(t=(e=window.i18n)==null?void 0:e.loader)==null||t.then(()=>{var i;this.follow=(i=window.i18n)==null?void 0:i.translate("follow")})},methods:{},props:{label:String,author:{default:null},vertical:{default:null},expand:{default:null},shareUrl:{default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ea=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"step-list",migrate:!0,template:`
                        step-list
                    `}},Symbol.toStringTag,{value:"Module"})),ia=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"success-story",migrate:!0,template:`
                        sucess-story
                    `}},Symbol.toStringTag,{value:"Module"})),sa=Object.freeze(Object.defineProperty({__proto__:null,default:{props:{tagName:"svg-shape",align:{type:String,default:"bottom"},peak:{type:String,default:"right"},color:{type:String,default:"var(--color-white)"},obliquity:{type:Number,default:10},classes:{type:String,default:""},height:{type:Number,default:100}},computed:{svgShapeAlign(){return this.align},svgShapePeak(){return this.peak},svgShapeColor(){return this.color},svgShapeObliquity(){return this.obliquity},svgShapeClasses(){return this.classes},svgShapeHeight(){return this.height},basePoints(){return this.svgShapeAlign==="top"?`0,0 ${this.svgShapeHeight},0`:`0,${this.svgShapeObliquity} ${this.svgShapeHeight},${this.svgShapeObliquity}`},peakPointY(){return this.svgShapeAlign==="top"?this.svgShapeObliquity:0},peakPointX(){return this.svgShapePeak==="left"?0:this.svgShapeHeight},points(){return`${this.basePoints} ${this.peakPointX},${this.peakPointY}`},translateStyle(){return this.svgShapeAlign!=="top"?"transform: translateY(2px);":""}},template:`
    <figure :class="'svgshape ' + svgShapeClasses" :style="'pointer-events: all;' + translateStyle">
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" :viewBox="'0 0 ' + svgShapeHeight + ' ' + svgShapeObliquity">
        <polygon :fill="svgShapeColor" :points="points"/>
      </svg>
    </figure>
  `}},Symbol.toStringTag,{value:"Module"})),aa=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"tab-list",data(){return{smallVariant:"tab-list--small",showLeftArrow:!1,showRightArrow:!1,currentIndex:0,currentTabId:""}},mounted(){this.handleScroll(),this.currentTabId=this.list[0].id},computed:{leftValue(){return n.isTrue(this.left)===!0},columnClassList(){const i="col-"+(this.tabs?"":"lg-")+12/this.list.length;return[this.tabs?"px-2 px-lg-3 nav-item":"mb-6 mb-md-8 mb-lg-0",this.isSmall?"":i]},variantClass(){return this.variant?this.variant:this.smallVariant},classList(){return["tab-list vue-component",this.tabs?"px-4 px-lg-0":"",this.leftValue?"tab-list--left":"",this.variantClass,this.showLeftArrow?"show-left-arrow":"",this.showRightArrow?"show-right-arrow":""]},listClassList(){return["tab-list__list row nav nav-pills"]},isSmall(){return this.variantClass===this.smallVariant},hideContainer(){return!this.leftValue}},methods:{canScrollLeft(){const e=this.$refs.tabList;if(e)return e.scrollLeft>0},canScrollRight(){const e=this.$refs.tabList;if(e)return e.scrollLeft+e.clientWidth<e.scrollWidth-2},tabClassList(e){return["tab-list__tab rounded",e===this.currentIndex?"active":""]},ariaSelected(e){return e===this.currentIndex},boxClassList(e){return["tab-list__box rounded",e.link?"":"bg-white shadow-lg"]},isLink(e){return e.link?e.link.href:null},linkAttributes(e,t){const i={};return e.link&&Object.assign(i,{href:e.link.href,target:e.link.target}),e.id&&Object.assign(i,{id:e.id+"-tab","data-toggle":"pill",role:"tab","aria-controls":e.id,"aria-selected":this.ariaSelected(t)}),i},handleContentSwitch(e){const t=document.getElementById(e);if(!t)return;const i=document.getElementById(this.currentTabId);i.classList.remove("active"),i.classList.remove("show"),t.classList.add("active"),setTimeout(()=>{t.classList.add("show")},50),this.currentTabId=e},handleClick(e){e.preventDefault(),e.stopImmediatePropagation();const t=e.currentTarget;if(!t.href)return;const i=t.href.split("#")[1],s=document.getElementById(i),r=Array.prototype.indexOf.call(this.$refs.tabLink,t);this.currentIndex=r,s!==null&&(document.dispatchEvent(new CustomEvent(g.REFRESH_ANIMATE_NUMBERS,{detail:{target:s}})),this.handleContentSwitch(i))},handleScroll(){this.showLeftArrow=this.canScrollLeft(),this.showRightArrow=this.canScrollRight()},getArrowOffset(){const e=this.$refs.left;return e?e.offsetWidth:0},scrollToTab(e){const t=this.$refs.tabList,i=this.$refs.tab[this.currentIndex];if(!t||!i)return;const s=this.$refs.tab[e];if(!s)return;const r=this.getArrowOffset(),a=s.offsetLeft-r;t.scrollLeft=e===0?0:a,s.querySelector("a").click()},scrollToNext(){this.scrollToTab(this.currentIndex+1)},scrollToPrevious(){this.scrollToTab(this.currentIndex-1)}},props:{list:Array,tabs:Boolean,left:{default:null},variant:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ra=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"tag-cloud",migrate:!0,template:`
                        tag-cloud
                    `}},Symbol.toStringTag,{value:"Module"})),oa=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"tag",data(){return n.validateVueProps(this)},computed:{lowerLang(){return this.lang.toLowerCase()},classList(){var e;return["tags__btn btn btn-xs btn-soft-secondary btn-pill mb-2 vue-component",this.variant?"tag--"+this.variant:`mx-sm-${(e=this.props)==null?void 0:e.spacing}`,this.classes?this.classes:null]},url(){return this.lowerLang==="de"?"":`index-${this.lowerLang}/`},href(){return"/blog/"+this.url+"#"+encodeURIComponent(this.tag)},hasIcon(){return this.variant==="icon"}},props:{tag:{type:String,required:!0},count:{type:Number,default:null},filter:{type:Boolean,default:!1},lang:{type:String,default:"de"},spacing:{type:Number,default:1},classes:{type:String,default:null},variant:{type:String,default:null}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),na=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"teaser",migrate:!0,template:`
                        teaser
                    `}},Symbol.toStringTag,{value:"Module"})),la=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"testimonial-list",template:`
    <div class="testimonial-list vue-component">
      <div class="testimonial-list__contents container-lg">
        <slot></slot>
      </div>
    </div>
  `}},Symbol.toStringTag,{value:"Module"})),ca=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"testimonial-teaser",migrate:!0,template:`
                        testimonial-teaser
                    `}},Symbol.toStringTag,{value:"Module"})),da=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"testimonials-detail",migrate:!0,template:`
                        testimonials-detail
                    `}},Symbol.toStringTag,{value:"Module"})),ha=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"testimonials-slider",migrate:!0,template:`
                        testimonials-slider
                    `}},Symbol.toStringTag,{value:"Module"})),pa=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"text-animation",props:{sequence:Object,fixed:Boolean,cta:Object},data(){return{defaultTextSize:"font-size-6",defaultSublineSize:"font-size-2",timeout:null,textTimeout:null,letterDelay:120,sizeBasedDelay:null,minDelay:800,currentDelay:0,lastDelay:0,delayOffset:1600,sublineDelay:1150,buttonDelay:800,step:0,textValue:"",currentSubline:"",currentSublineSize:null,currentTextSize:"",currentText:"",isEnded:!1,isSecondLast:!1,showSubline:!1,sublineValue:null,isCalculated:!1,calculationStep:0,calculatedMaxHeight:0}},computed:{classList(){return["text-animation vue-component",this.isCalculated?"":l.INVISIBLE,this.isEnded?l.END:"",this.isFixed?"text-animation--fixed":""]},isFixed(){return n.isTrue(this.fixed)},textClassList(){return["text-animation__text",this.currentTextSize]},sublineClassList(){return["text-animation__subline",this.currentSublineSize,this.showSubline?"":l.INVISIBLE]},placeholderSublineClassList(){return["text-animation__subline",this.currentSublineSize]},placeholderTextClassList(){return["text-animation__text",this.currentTextSize]},placeholderCtaClassList(){return["text-animation__cta",this.isSecondLast||this.isEnded?"":l.INVISIBLE]},ctaClassList(){return["text-animation__cta",this.isEnded?"":l.INVISIBLE]},sequenceData(){return n.getJSON(this.sequence)},ctaData(){return n.getJSON(this.cta)}},methods:{getDelayByValue(e){switch(e){case 6:this.sizeBasedDelay=this.letterDelay/1.8,this.sizeBasedOffset=this.delayOffset;break;case 7:default:this.sizeBasedDelay=this.letterDelay/10,this.sizeBasedOffset=this.minDelay;break}},calculateDelay(){var t;this.currentSequenceStep=this.sequenceData[this.step],this.currentText=this.currentSequenceStep.text,this.currentTextSize=this.currentSequenceStep.textSize||this.defaultTextSize;const e=parseInt(this.currentTextSize.match(/\d+/)[0]);this.getDelayByValue(e),this.currentSubline=((t=this.currentSequenceStep)==null?void 0:t.subline)||"",this.currentDelay=this.currentText.length*this.sizeBasedDelay+this.sizeBasedOffset+(this.currentSubline.length>0?this.sublineDelay:0),this.currentDelay<this.minDelay&&(this.currentDelay=this.minDelay),this.lastDelay=this.lastDelay+this.currentDelay},showButtonAtLastRun(e){this.step+1<this.sequenceData.length||setTimeout(()=>{this.end()},e+this.buttonDelay)},end(){this.isEnded=!0,this.$emit("text-animation-ended",this.isEnded),window.clearTimeout(this.timeout)},next(){this.step>=this.sequenceData.length-1||(this.step++,this.animate())},animateText(){this.currentSublineSize=this.currentSequenceStep.sublineSize||this.defaultSublineSize,this.sublineValue=this.currentSubline,this.step+1!==this.sequenceData.length&&(this.isEnded=!1),this.step===this.sequenceData.length-1&&(this.isSecondLast=!0),this.$emit("text-animation-state",{step:this.step,isSecondLast:this.isSecondLast});for(let e=0;e<this.currentText.length;e++)this.textTimeout=e*this.sizeBasedDelay+this.sizeBasedDelay,setTimeout(()=>{this.typeLetter(this.currentText[e])},this.textTimeout);this.currentSubline.length&&(this.textTimeout=this.textTimeout+this.sublineDelay,setTimeout(()=>{this.sublineValue=this.currentSubline,this.showSubline=!0},this.textTimeout)),this.showButtonAtLastRun(this.textTimeout)},resetText(){this.textValue="",this.sublineValue="",this.showSubline=!1,this.oldStep=this.sequenceData[this.step-1],this.nextStep=this.sequenceData[this.step+1]||this.sequenceData[0],this.currentTextSize=this.nextStep.textSize||this.defaultTextSize,this.currentSublineSize=this.nextStep.sublineSize||this.defaultSublineSize},animate(){this.calculateDelay(),this.animateText(),this.timeout=setTimeout(()=>{this.resetText(),this.next()},this.currentDelay)},typeLetter(e){if(!e)return;(()=>{this.textValue=this.textValue+e})()},calculateNextMaxHeight(){const e=this.sequenceData[this.calculationStep];if(!e)return this.isCalculated=!0;this.currentText=null,this.sublineValue=null,this.ctaData=null,this.currentTextSize=e.textSize||this.defaultTextSize,this.currentText=e.text,e.subline&&(this.currentSublineSize=e.sublineSize||this.defaultSublineSize,this.sublineValue=e.subline),this.calculationStep++},handleResize(){this.calculatedMaxHeight=null;const e=this.$refs.placeholder;this.calculatedMaxHeight=e.offsetHeight}},updated(){if(!this.isCalculated){const e=this.$refs.placeholder;this.$refs.placeholderCta.style.display="none",this.calculatedMaxHeight=e.offsetHeight>this.calculatedMaxHeight?e.offsetHeight:this.calculatedMaxHeight,this.calculateNextMaxHeight(),this.$refs.placeholderCta.style.display=""}},created(){this.text=this.$refs.text,this.sizeBasedDelay=this.letterDelay},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},mounted(){window.addEventListener("resize",this.handleResize),this.calculateNextMaxHeight()},watch:{isCalculated(e){e&&(this.$refs.placeholder.style.minHeight=this.calculatedMaxHeight+"px",this.animate())}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ua=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"text-icon-animation",props:{animation:Object,icon:String,fixed:Boolean,cta:Object,classes:String},data(){return{textAnimationStep:0,isEnded:!1,isSecondLast:!1}},computed:{animationData(){return n.getJSON(this.animation)},sequence(){return this.animationData.sequence},classList(){return["text-icon-animation row vue-component",this.classes,this.isFixed?"text-icon-animation--fixed":"",this.isEnded?"text-icon-animation--ended":"",this.isSecondLast?"text-icon-animation--is-second-last":""]},isFixed(){return n.isTrue(this.fixed)},iconClassList(){return`text-icon-animation__icon icon--step-${this.textAnimationStep}`}},methods:{handleTextAnimationState(e){this.textAnimationStep=e==null?void 0:e.step,this.isSecondLast=e==null?void 0:e.isSecondLast},handleTextAnimationEnded(e){this.isEnded=e}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),ma=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"text-image-list",migrate:!0,template:`
                        text-image-list
                    `}},Symbol.toStringTag,{value:"Module"})),ga=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"text-image",props:{spacing:{type:String,default:"space-top-2"},image:String,imageClasses:String,imagePreset:String,lottie:Object,float:Boolean,overline:String,headline:String,subline:String,left:Boolean,alt:String,cloudinary:Boolean,offset:Boolean,white:Boolean,copy:String,list:Array,bgColor:String,copyClasses:String,copyLight:String,background:String,firstColWidth:Number,secondColWidth:Number,reduceSpacing:{type:Boolean,default:!1},cta:Object,modal:Object,href:String,badge:Object,sticky:Boolean,noAnimation:Boolean,index:Number,noGutters:{type:Boolean,default:!1},level:{type:String,default:"h3"},headlineClasses:String},computed:{textImageLightText(){return this.copyLight?"text-light":""},textImageFirstColWidthXl(){return this.firstColWidth||4},textImageFirstColWidthComputed(){return this.firstColWidth||6},textImageSecondColWidthXl(){return this.secondColWidth||8},textImageSecondColWidthComputed(){return this.secondColWidth||6},textImageHeadlineClassesComputed(){let e=`${this.headlineClasses||""} ${this.textImageLightText} mb-2 mb-lg-4`;return this.headlineClasses||(e+=this.float?" h3-font-size":" h4-font-size font-weight-normal"),e.trim()},textImageImgSrcSets(){return this.float?this.imagePreset?this.imagePreset:"textImageFloatingSmall":this.imagePreset?this.imagePreset:null},textImagePreset(){return this.float?this.imagePreset||"textImageFloatingSmall":this.imagePreset||null},textImageClass(){return["text-image","is-component",this.spacing,{"text-image--bg-color":this.bgColor},{"is-sticky-scroller":this.sticky},{"utility-animation utility-animation--enter-exit":!this.noAnimation},{"text-image--float":this.float},"vue-component"]},textImageStyle(){return{"background-color":this.bgColor,"--utility-animation-index":this.index,"background-image":this.background?`url('${this.background}')`:void 0}},textImageFirstColClasses(){const e=["text-image__first-col","d-flex","text-image__img","justify-content-center",this.imageClasses,`col-lg-${this.float?this.textImageFirstColWidthComputed:this.offset?this.textImageFirstColWidthComputed-1:this.textImageFirstColWidthComputed}`];return this.float?e.push(`col-xl-${this.textImageFirstColWidthXl}`,"text-image__img--floating"):this.offset&&!this.left&&e.push("offset-lg-1"),e},textImageSecondColClasses(){const e=["text-image__second-col",{"no-gutters":this.noGutters},{"pt-2 pt-lg-4":!this.noGutters},`col-lg-${this.textImageSecondColWidthComputed}`,{"fade-in-bottom":!this.noAnimation},{"text-white":this.white},{[this.reduceSpacing]:this.reduceSpacing}];return this.reduceSpacing||e.push(`${this.left?"pr-lg-":"pl-lg-"}${this.textImageSecondColWidthComputed}`),this.float?e.push(`col-xl-${this.textImageSecondColWidthXl}`):this.left&&this.offset&&e.push("offset-lg-1"),e},textImageLightTextClass(){return[this.copyClasses||"",this.textImageLightText]}},methods:{handleClick(){this.href&&(document.location.href=this.href)}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),fa=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"text-teaser",computed:{classList(){return["text-teaser utility-animation",this.spacing?this.spacing:"","vue-component"]},style(){return[this.background?`background-image: url('${this.background}');`:"",this.bgColor?`background-color: ${this.bgColor};`:""]},rowBackgroundClass(){return["row",this.background?"justify-content-center":""]},colBackgroundClass(){return[this.background?"col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light":"col-lg-7 offset-lg-1 pt-8"]},ctaListClass(){return["pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom"]},logoClass(){return["text-teaser__logo-container",this.background?"mx-auto":""]},ctaListNormalize(){return this.ctaList.map(t=>{const i={};for(const s in t)s==="ctaText"?i.text=t[s]:s==="ctaHref"?i.href=t[s]:i[s]=t[s];return i})}},props:{ctaList:Object,spacing:String,background:String,bgColor:String,logo:Object,copy:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),va=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"timeline",components:{"timeline-entry-inner-text":{tagName:"timeline-entry-inner-text",computed:{},template:`
    <div :class="['timeline__entry-inner-text', { 'timeline__entry-inner-text--simple': simple }]">
      <template v-if="entry.title">
        <div class="timeline__entry-title">{{ entry.title }}</div>
        <p class="timeline__entry-text">{{ entry.text }}</p>
      </template>
      <template v-else><span v-html="entry"></span></template>
    </div>
  `,props:{entry:Object,simple:Boolean}}},computed:{classList(){return["timeline","has-background","timeline--headline-sticky has-headline-sticky",this.isReady?l.READY:"",this.expanded?l.EXPANDED:"",this.spacing,this.simpleValue?"timeline--simple":"","vue-component"]},copyColor(){return this.color?this.color:"var(--color-copy-light)"},backgroundColor(){return this.bgColor?this.bgColor:"var(--color-blue-dark)"},style(){return`--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`},headlineClasses(){var e;return`timeline__headline headline-sticky__target h2-font-size light ${(e=this.headline)!=null&&e.classes?this.headline.classes:""}`},lineEndStyle(){var e;return`--timeline-line-position: ${(e=this.entries)==null?void 0:e.length}`},simpleValue(){return n.isTrue(this.simple)},iconName(){return"strategy-split"}},mounted(){this.bindEvents(),this.handleScroll()},data(){return{lastIndex:null,isReady:!1,startDelay:500,isVisible:!1,percentageInViewport:40,minPercentage:-10,maxPercentage:100,entryContainerStates:[],entryContainerStyles:[]}},methods:{bindEvents(){document.addEventListener("scroll",this.handleScroll)},startAnimation(){setTimeout(()=>{this.isReady=!0},this.startDelay)},getEntryLineStyle(e){return`--timeline-line-position: ${e}`},handleScroll(){this.expanded?this.isInViewport():this.updateAnimation()},updateAnimation(){const e=this.getScrollPercentage();if(e<=this.minPercentage)return this.setAnimationStart();if(e>=this.maxPercentage)return this.setAnimationEnd();this.isReady||this.startAnimation(),this.showEntryByPercent(e)},setAnimationStart(){this.isReady=!1},setAnimationEnd(){for(let t=0;t<this.entries.length;t++)this.entryContainerStyles[t]="0",this.entryContainerStates[t]=[l.SHOW,l.IS_FULL]},showEntryByPercent(e){const t=this.maxPercentage/this.entries.length;for(let i=0;i<this.entries.length;i++)this.updateNextStep(i,e,t)},updateNextStep(e,t,i){this.entryContainerStates[e]=l.SHOW;const s=0,r=i*e,a=i*(e+1);let o=0;if(t>=r&&t<=a){const c=i,d=t-r,h=60;o=this.maxPercentage-Math.ceil(d*100/c),o<h&&(this.entryContainerStates[e]=[l.SHOW,"timeline__entry-container--visible"])}else t>a?(o=s,this.entryContainerStates[e]=[l.SHOW,l.IS_FULL]):o=this.maxPercentage;this.simpleValue&&(o<this.maxPercentage&&o>s?o=1:o=0),this.entryContainerStyles[e]=`${o}`},getEntryContainerClasses(e){return["timeline__entry-container",this.entryContainerStates[e]]},getEntryContainerStyle(e){return`--timeline-entry-container-percentage: ${this.entryContainerStyles[e]?this.entryContainerStyles[e]:this.simpleValue?0:this.maxPercentage}`},getScrollPercentage(){const e=this.$refs.root,t=e.getBoundingClientRect().height,i=window.innerHeight/3;let s=n.getScrollTop(e)-i;s<0&&(s=0);const r=window.scrollY-s,a=t-i;return r*100/a},isInViewport(){if(this.isVisible)return;const e=this.$refs.root;n.isInViewportPercent(e,this.percentageInViewport)&&this.startAnimation()}},props:{headline:Object,bgColor:{default:null},color:{default:null},entries:Array,expanded:{default:null},spacing:String,simple:{default:null},subline:String},template:`
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
    </div>`}},Symbol.toStringTag,{value:"Module"})),ba=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"toggle-form",migrate:!0,template:`
                       toggle-form
                    `}},Symbol.toStringTag,{value:"Module"})),Vt={bgColor:"var(--color-midnight)",mail:"info@glueckkanja.com",offices:["Germany","Austria","Spain","Australia"],copyright:"2024 glueckkanja AG. All rights reserved.",logos:[{img:"/logos/gk-Logo-sw.svg",alt:"glueckkanja Logo",url:"index.html",class:"max-w-23rem"}],partners:[{img:"/logos/partner-seal-mpoy.svg",alt:"Partner of the Year Award"},{img:"/logos/partner-seal-mssp.svg",alt:"Security MSSP of the Year"}],brandLogos:[{title:"a brand of:",img:"/logos/gk-Logo-sw.svg",alt:"glueckkanja AG",url:"https://www.glueckkanja.com/de",classes:"w-30 w-sm-40 w-lg-60 w-xl-50",target:"_blank"}],highlights:[{img:"/logos/partner-misa-mxdr.svg",alt:"Microsoft Intelligent Security Association"},{img:"/logos/seal-mssp-infrastructure.svg",alt:"MSP Infrastructure Azure"},{img:"/logos/seal-mssp-data-ai.svg",alt:"MSP Data & AI Azure"},{img:"/logos/seal-msp-digital-app-innovation.svg",alt:"MSP Digital & App Innovation Azure"},{img:"/logos/seal-mssp-modern-work.svg",alt:"MSP Modern Work"},{img:"/logos/seal-mssp-security.svg",alt:"MSP Security"},{img:"/logos/isg-2024-m365-services-large-enterprises.svg",alt:"ISG Microsoft 365 Services Large Enterprises"},{img:"/logos/isg-2024-m365-services-midmarket.svg",alt:"ISG Microsoft 365 Services Midmarket"},{img:"/logos/isg-2024-azure-large-enterprises.svg",alt:"ISG Microsoft Azure Large Enterprises"},{img:"/logos/isg-2024-azure-midmarket.svg",alt:"ISG Microsoft Azure Midmarket"},{img:"/logos/iso27001.svg",alt:"ISO 27001",url:"https://www.glueckkanja.com/documents/general/gkgab-ISO27001Certificate-de.pdf",target:"_blank",classes:"max-rem-10 max-lg-rem-11"},{img:"/logos/kununu-compact.svg",alt:"Kununu Logo",url:"https://www.kununu.com/de/glueck-kanja-consulting",target:"_blank"}],socials:[{icon:"fa-x-twitter",url:"https://twitter.com/glueckkanja_",title:"Twitter"},{icon:"fa-youtube",url:"https://www.youtube.com/user/glueckkanja",title:"Youtube"},{icon:"fa-linkedin",url:"https://www.linkedin.com/company/glueckkanja",title:"LinkedIn"},{icon:"fa-github",url:"https://github.com/glueckkanja",title:"Github"}],links:[{title:"Datenschutz",url:"https://www.glueckkanja.com/de/datenschutz",target:"_blank"},{title:"Impressum",url:"https://www.glueckkanja.com/de/impressum",target:"_blank"}],linksEn:[{title:"Privacy",url:"https://www.glueckkanja.com/en/privacy",target:"_blank"},{title:"Imprint",url:"https://www.glueckkanja.com/en/imprint",target:"_blank"}]},ya=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"v-footer",components:{"footer-slider":{tagName:"v-footer-slider",template:`
    <div class="footer__slider-container">
      <carousel
        :items="items"
        :bg-color="bgColor"
      >
      </carousel>
    </div>
  `,props:{items:Array,bgColor:String}}},data(){return{bgColorRgbaValue:null}},computed:{classList(){return["footer text-white",n.isTrue(this.noMargin)?"":"mt-8 mt-lg-11",this.isCorporate?"footer--corporate":"","vue-component"]},isCorporate(){var e;return!((e=this.dataValue)!=null&&e.brandLogos)},style(){var e;return[(e=this.dataValue)!=null&&e.bgColor?`background-color: ${this.dataValue.bgColor};`:""]},dataValue(){return this.data?{...Vt,...n.getJSON(this.data)}:{...Vt}},links(){const e=this.lang.toLowerCase();if(e==="de"||e==="")return this.dataValue.links;{const t=n.capitalize(this.lang),i=this.dataValue[`links${t}`];return i||this.dataValue.links}},locations(){const e=[];return e.push({name:this.dataValue.name,street:this.dataValue.street,postalCode:this.dataValue.postalCode,city:this.dataValue.city,country:this.dataValue.country,mail:this.dataValue.mail}),this.dataValue.additionalLocations&&this.dataValue.additionalLocations.length&&e.push(...this.dataValue.additionalLocations),e}},mounted(){this.bgColorRgbaValue=this.bgColorRgba()},methods:{bgColorRgba(){if(!this.$refs.root)return null;const i=window.getComputedStyle(this.$refs.root).getPropertyValue("background-color").replace(/[^\d,]/g,"").split(",");return`rgba(${i[0]}, ${i[1]}, ${i[2]}, 1)`}},props:{data:Object,noMargin:{default:null},lang:String},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),_a=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"v-header",computed:{classList(){return["header",this.isScrolled?l.IS_SCROLLED:"",this.isLight?"header--light":"",n.isTrue(this.hover)?l.HOVERING:"",n.isTrue(this.product)?"header--product":"",n.isTrue(this.closed)?"":l.EXPANDED,n.isTrue(this.blendMode)?"header--blending":"","vue-component"]},headerContainerClassList(){return["header__container",this.containerClass]},containerClass(){return n.isTrue(this.product)?"container":"container-xxl"},homeObj(){var e;return(e=this.home)==null?void 0:e.languages[this.lowerLang]},lowerLang(){return this.lang?this.lang.toLowerCase():this.defaultLang},searchValue(){return n.isTrue(this.search)},metaList(){return{...this.meta,children:this.meta}},spacerBgColor(){return`--color-header-spacer-background: ${this.bgColor?this.bgColor:"var(--color-header-background)"}; background-color: var(--color-header-spacer-background);`},activeNavigation(){return this.setActiveLinks(),this.navigation},isLight(){return n.isTrue(this.light)===!0},hasLangSwitch(){var e;return Object.keys((e=this.home)==null?void 0:e.languages).length>1},hasContact(){return this.contact},hasMeta(){return this.meta&&this.meta.length>0}},mounted(){this.bindEvents(),this.setCtaClasses(),this.setLinkWidth()},updated(){this.inUpdate&&(this.updateProductListHeight(),this.inUpdate=!1,this.inTransition=!1)},methods:{setLinkWidth(){var t;const e=this.$refs.link;if(e)for(let i=0;i<e.length;i++){const s=e[i],r=(t=s.querySelector(".header__link-text-spacer"))==null?void 0:t.clientWidth;s.style.setProperty("--header-link-text-width",r+"px")}},showFlyoutBlock(e){return!(e.length>this.maxLinkListsInFlyout)},isLowerBreakpoint(){return n.isBelowBreakpoint("md")},bindEvents(){window.addEventListener("scroll",this.handleScroll.bind(this)),document.addEventListener(g.WINDOW_RESIZE,this.handleResize.bind(this))},handleResize(){this.reset(),this.setLinkWidth()},handleScroll(){this.isScrolled=window.scrollY>this.scrollThreshold,this.setCtaClasses()},reset(){this.resetFlyouts(),this.updateProductListHeight(),this.closed=!0},handleCloseClick(){this.closed=!this.closed,this.closed&&this.reset()},resetFlyouts(){Object.keys(this.linkLists).forEach(e=>{this.linkLists[e]=!1})},handleClick(e,t){if(!this.isLowerBreakpoint())return;const i=this.getId(e,t);this.linkLists[i]=!this.linkLists[i],this.linkLists[i]&&(this.inTransition=!0),this.inUpdate=!0,this.closeAllSiblings(i),this.closeAllChildren()},closeAllSiblings(e){Object.keys(this.linkLists).forEach(i=>{i!==e&&(this.linkLists[i]=!1)})},closeAllChildren(){const e=new CustomEvent(g.CHILD_HAS_UPDATE,{detail:{}});this.$refs.list.dispatchEvent(e)},getId(e,t){return`${e.name}_${t}`},handleHeaderMouseOver(){this.hoverHeader=!0,this.setCtaClasses()},handleHeaderMouseOut(){this.hoverHeader=!1,this.setCtaClasses()},setCtaClasses(){this.isLight&&(this.hoverHeader||this.isScrolled?this.ctaClassList=!1:this.ctaClassList="is-light-lg")},handleMouseOver(e,t){if(!e.children)return;this.resetAllFlyouts(),this.hover=!0;const i=this.getLinkRef(t);if(!i)return;i.classList.add(l.EXPANDED);const s=this.getFlyoutRef(t);s&&(this.flyoutIndex=t,s.classList.add(l.EXPANDED))},handleMouseOut(e){var s;if((s=e.relatedTarget)!=null&&s.closest(".header__flyout"))return;this.hover=!1;const t=this.getLinkRef(this.flyoutIndex);if(!t)return;t.classList.remove(l.EXPANDED);const i=this.getFlyoutRef(this.flyoutIndex);i&&i.classList.remove(l.EXPANDED)},handleLanguageOver(){this.resetAllFlyouts(),this.hover=!0;const e=this.$refs.languageSwitch;e&&e.classList.add(l.EXPANDED)},handleLanguageOut(e){var i;if((i=e.relatedTarget)!=null&&i.closest(".header__flyout"))return;this.hover=!1;const t=this.$refs.languageSwitch;t&&t.classList.remove(l.EXPANDED)},resetAllFlyouts(){var e,t;(e=this.$refs.link)==null||e.forEach(i=>{i.classList.remove(l.EXPANDED)}),(t=this.$refs.flyout)==null||t.forEach(i=>{i.classList.remove(l.EXPANDED)})},getFlyoutRef(e){return this.getRef("flyout",e)},getLinkRef(e){return this.getRef("link",e)},getRef(e,t){const i=this.$refs[e][t];if(i)return i},getHref(e){var t;return e.children?"javascript:void(0);":(t=e.languages[this.lowerLang])==null?void 0:t.url},getTarget(e){var i;const t=(i=e.languages[this.lowerLang])==null?void 0:i.target;return t||null},getNextLanguage(){const e=this.home.languages;if(!e)return;const t=Object.keys(e);if(!t.length)return;const i=t.filter(s=>s!==this.lowerLang);if(i.length)return i[0]},handleLanguageSwitch(e){var s;const t=this.getActiveUrlByLang(e),i=t||((s=this.home.languages[e])==null?void 0:s.url);n.storageSave("preferedLanguage",e,!1),document.location.href=i},getCurrentPath(){return document.location.pathname},getActiveUrlByLang(e,t){var c;const i=this.getCurrentPath(),s="/",r=(d,h)=>{if(!(d!=null&&d.title))return;let u=d==null?void 0:d.url;i[(i==null?void 0:i.length)-1]===s&&u&&u[(u==null?void 0:u.length)-1]!==s&&(u=u+s);const S=u===i;if(t&&S){d.active=!0;const E=this.getParentLink(h);E&&(E.active=!0)}return S},a=(d,h)=>h;let o=n.findRecursive(this.navigation,r,a);if(o||(o=n.findRecursive(this.meta,r,a)),o||(o=n.findRecursive(this.contact,r,a)),!o){const d=this.getHrefLang(e);return d||this.getTranslatedUrl(i,e)}return(c=o[e])==null?void 0:c.url},getTranslatedUrl(e,t){if(this.isBlogTagsUrl(e))return this.getBlogTagsUrl(t,e);const i=this.getFolderSwitchSegment(e);return i?this.getFolderSwitchUrl(t,e,i):null},getFolderSwitchSegment(e){const t=this.home.folderSwitch;return t&&t.find(s=>e.includes(s))||null},getFolderSwitchUrl(e,t,i){if(!i)return t;let s;if(e===this.defaultLang){const r=new RegExp(`/${this.lowerLang}/`);s=t.replace(r,"/")}else s=t.replace(i,`${e}/${i}`);return s},isBlogTagsUrl(e){return/\/blog\/tags/.test(e)},getBlogTagsUrl(e,t){let i;const s="tags";switch(e){case"en":i=t.replace(s,`${s}-${e}`);break;default:case this.defaultLang:const r=new RegExp(`${s}-..`);i=t.replace(r,s);break}return i+document.location.search},getHrefLang(e){const t=document.querySelector(`link[hreflang=${e}]`);if(t)return t.getAttribute("href")},getParentLink(e){return this.navigation[e].languages[this.lowerLang]},setActiveLinks(){this.getActiveUrlByLang(this.lowerLang,!0)},headerItemClasses(e){var t;return["header__item",(t=e.languages[this.lowerLang])!=null&&t.active?l.ACTIVE:""]},isLinkListHidden(e,t){const i=this.getId(e,t);return!this.linkLists[i]},headerLinkClasses(e,t){return this.getListClasses(e,t,["header__link custom"])},headerProductListClasses(e,t){return this.getListClasses(e,t,["header__product-list",this.inTransition?l.IN_TRANSITION:""])},getListClasses(e,t,i){const s=this.isLinkListHidden(e,t);return[...i,s?"":l.EXPANDED]},updateProductListHeight(){const e=this.$refs["product-list"];if(e)for(let t=0;t<e.length;t++){const i=e[t],r=!i.classList.contains(l.EXPANDED)||i.style.height!==""?"":i.scrollHeight+"px";i.style.height=r}},navHighlightClasses(e,t){return["header__nav-highlight custom",this.isLinkListHidden(e,t)?"is-hidden":""]},hasContactLink(e){var t,i;return((t=this.contact)==null?void 0:t.languages)&&!((i=e.languages[this.lowerLang])!=null&&i.emergency)}},props:{home:Object,navigation:Object,meta:Object,light:{default:null},search:{default:null},lang:String,contact:Object,bgColor:String,product:{default:null},button:{default:null},blendMode:{default:null}},data(){return{inUpdate:!1,inTransition:!1,defaultLang:"de",closed:!0,hover:!1,headerHover:!1,flyoutIndex:null,linkLists:{},scrollThreshold:10,isScrolled:!1,ctaClassList:!1,maxLinkListsInFlyout:3}},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),st={min_width:320,max_width:1200,fallback_max_width:1200,steps:5,sizes:"100vw",figure:"auto",attributes:{},width_height:!0,height:!1,crop:"limit",aspect_ratio:!1,gravity:!1,zoom:!1,x:!1,y:!1,format:!1,fetch_format:"auto",quality:"auto",radius:!1,angle:!1,effect:!1,opacity:!1,border:!1,background:!1,overlay:!1,underlay:!1,default_image:!1,delay:!1,color:!1,color_space:!1,dpr:!1,page:!1,density:!1,flags:!1,transformation:!1},Sa={height:"h",crop:"c",aspect_ratio:"ar",gravity:"g",zoom:"z",x:"x",y:"y",fetch_format:"f",quality:"q",radius:"r",angle:"a",effect:"e",opacity:"o",border:"bo",background:"b",overlay:"l",underlay:"u",default_image:"d",delay:"dl",color:"co",color_space:"cs",dpr:"dpr",page:"pg",density:"dn",flags:"fl",transformation:"t"},at={cloud_name:"c4a8",developer_mode:!1,origin_url:"",verbose:!1,presets:{avatar:{fallback_max_width:300,min_width:100,max_width:300,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},textImageFloatingSmall:{"min-width":320,"max-width":1e3,steps:3,sizes:"(min-width: 766px) 766px, 991px",figure:"never",loading:"auto"},textImageFloating:{"min-width":460,"max-width":1e3,steps:2,sizes:"(min-width: 1200px) 1200px, 1300px",figure:"never",loading:"auto"},person:{"min-width":50,"max-width":200,steps:3,sizes:"(min-width: 8rem) 8rem, 90vw",figure:"never",loading:"auto"},default:{min_width:320,max_width:1600,fallback_max_width:800,steps:5,sizes:"(min-width: 50rem) 50rem, 90vw",figure:"never",loading:"auto"},fullscreen4k:{min_width:480,max_width:3840,fallback_max_width:3840,steps:6,sizes:"(max-width: 30rem) 40rem, (max-width: 40rem) 50rem, (max-width: 50rem) 60rem, (max-width: 70rem) 80rem, (max-width: 90rem) 100rem, 200vw",figure:"never",loading:"auto"},thumb:{min_width:320,max_width:1600,fallback_max_width:800,steps:5,sizes:"(min-width: 50rem) 50rem, 90vw",figure:"never",loading:"auto"},cardSmall:{min_width:600,max_width:800,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},postTeaser:{min_width:400,max_width:800,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},author:{min_width:100,max_width:300,steps:2,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"},logoList:{min_width:200,max_width:500,fallback_max_width:500,steps:4,sizes:"(min-width: 50rem) 50rem, 90vw",figure:"never",loading:"auto"},eventThumb:{min_width:300,max_width:800,steps:3,sizes:"(min-width: 50rem)",figure:"never",loading:"auto"}}},Ca={heroStudy:{srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_800,w_800,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_1000,x_0,y_0/",media:"(max-width: 1200px)"},{params:"c_fill,g_face,h_600,w_1350,x_0,y_0/"}]},testimonialTeaser16x9:{srcSets:[{params:"c_fill,g_face,h_281,w_500,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_225,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_388,w_600,x_0,y_0/",media:"(max-width: 1200px)"},{params:"c_fill,g_face,h_450,w_800,x_0,y_0/"}]},testimonialTeaser4xx3:{srcSets:[{params:"c_fill,g_face,h_281,w_500,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_225,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_800,x_0,y_0/",media:"(max-width: 1200px)"},{params:"c_fill,g_face,h_600,w_800,x_0,y_0/"}]},square:{ratioClasses:"ratio-1x1",srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_400,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_600,x_0,y_0/"}]},testimonial:{srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_400,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:""}]},event:{srcSets:[{params:"c_fill,g_face,h_400,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_300,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:""}]},eventTeaser:{srcSets:[{params:"c_fill,g_face,h_450,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_450,w_600,x_0,y_0/",media:"(max-width: 765px)"},{params:""}]},cardSmall:{srcSets:[{params:"c_fill,g_face,h_450,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_300,w_400,x_0,y_0/",media:"(max-width: 765px)"},{params:"c_fill,g_face,h_600,w_800,x_0,y_0/"}]},textImageFloating:{srcSets:[{params:"c_fill,g_xy_center,h_1000,w_490,x_870,y_0/",media:"(max-width: 1199px)"},{params:"c_fill,g_face,h_1200,w_800,x_0,y_0/"}]},textImageFloatingSmallSquare:{ratioClasses:"ratio-1x1",srcSets:[{params:"c_fill,g_face,h_500,w_500,x_0,y_0/"}]},textImageFloatingSmall:{ratioClasses:"ratio-2x1",srcSets:[{params:"c_fill,g_face,h_500,w_1000,x_0,y_0/"}]},postTeaser:{ratioClasses:"ratio-1x1",srcSets:[{params:"c_fill,g_face,h_600,w_600,x_0,y_0/",media:"(max-width: 576px)"},{params:"c_fill,g_face,h_500,w_500,x_0,y_0/"}]}},gt="https://res.cloudinary.com/c4a8/image/upload/",ka=Object.freeze(Object.defineProperty({__proto__:null,default:{name:"VImg",tagName:"v-img",data(){return{dimensions:{naturalHeight:null,naturalWidth:null},dimStack:{},previousImg:null,srcset:"",noCloudinary:null,sizes:null}},computed:{classList(){return["v-img","vue-component",this.classListComponent]},classListComponent(){return[this.isSvg()?"is-svg":"",this.class?this.class:"",this.canGenerateSrcSet()?"no-small img-responsive":""]},isLottie(){return typeof this.jsonLottieData=="object"},jsonLottieData(){if(this.lottie)return typeof this.lottie!="object"?n.getJSON(this.lottie):this.lottie},jsonLottieSettingsData(){if(!(!this.lottie||!this.lottieSettings))return typeof this.lottieSettings!="object"?n.getJSON(this.lottieSettings):this.lottieSettings},isCloudinary(){return n.isTrue(this.cloudinary)},source(){return this.isCloudinary?this.noCloudinary||this.getCloudinaryLink():this.noCloudinary},loading(){return this.lazy?"lazy":null},crossOriginValue(){return this.isCloudinary?this.crossorigin?this.crossorigin:"anonymous":null},hasPictureTag(){return this.isCloudinary&&this.imgSrcSets},pictureWrapperClassList(){var e;return["img__picture-wrapper",(e=this.imgSrcSetValue)==null?void 0:e.ratioClasses]},imgSrcSetValue(){return Ca[this.imgSrcSets]},imgSrcSetSources(){var e,t;return(t=(e=this.imgSrcSetValue)==null?void 0:e.srcSets)==null?void 0:t.filter(i=>i.media)},imgSrcSetImg(){var t;const e=(t=this.imgSrcSetValue)==null?void 0:t.srcSets;return e?this.getCloudinaryBasePathLink(e[e.length-1]):null}},watch:{animated(e,t){this.srcset=""}},created(){this.canGenerateSrcSet()||this.isCloudinary||(this.noCloudinary=this.getBaseAssetPath(),this.sizes=st.sizes)},methods:{canGenerateSrcSet(){return this.isCloudinary&&!this.isGif()&&!this.animated},getSetup(){const e=this.getPreset(),t=this.getTransformationString(e);return{preset:e,transformationsString:t}},getPreset(){try{return this.preset?at.presets&&at.presets[this.preset]?Object.assign(st,at.presets[this.preset]):st:{...st,...at.presets.default}}catch(e){console.error(e)}},hasProtocol(){return/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img)},getBaseAssetPath(){var e;return n.isTestingStorybook()?this.img:((e=this.img)==null?void 0:e.indexOf("/assets/"))!==-1?this.img:this.hasProtocol()?this.img:`/assets/${this.img}`},getCloudinaryBasePathLink(e){return`${gt}${e?e.params:""}${this.img}`},getCloudinaryLink(){return this.isGif()||this.isSvg()||this.animated?this.getCloudinaryBasePathLink():this.getCloudinaryLinkWithTransformation()},getCloudinaryLinkWithTransformation(){const{preset:e,transformationsString:t}=this.getSetup(),i=/w_\d+/.test(this.img),s=gt+t,r=`/${this.img}`;return i?`${s}${r}`:`${s},w_${e.fallback_max_width}${r}`},loadImage(e){if(!this.canGenerateSrcSet())return;const t=document.createElement("img");t.onload=()=>{const i=t==null?void 0:t.naturalHeight,s=t==null?void 0:t.naturalWidth;let r;if(this.isSvg())r={naturalHeight:i,naturalWidth:s};else{const{preset:a,transformationsString:o}=this.getSetup();this.sizes=a==null?void 0:a.sizes,r={naturalHeight:i||(a==null?void 0:a.fallback_max_width),naturalWidth:s||(a==null?void 0:a.fallback_max_width)},i&&s&&!this.isSvg()&&this.buildSrcSet(a,o)}this.dimensions=r},t.src=e||this.getCloudinaryLinkWithTransformation()},getTransformationString(e){const t=[];for(const[s,r]of Object.entries(Sa))e[s]&&t.push(`${r}_${e[s]}`);return t.length>0?t.join(","):""},buildSrcSet(e,t){const i=[],s=e.steps,r=e.min_width,o=(e.max_width-r)/(s-1),{naturalWidth:c}=this.dimensions;for(let d=1;d<=s;d++){const h=r+(d-1)*o,u=h<=c,S=u?h:c,F=`${this.hasPictureTag?this.imgSrcSetImg:`${gt}${t},w_${S}/${this.img}`} ${S}w`;if(i.push(F),!u)break}this.srcset=c<r?"":i.join(`, 
`)},isGif(){return this.img?this.img.split(".")[1].toLowerCase()==="gif":void 0},isSvg(){var t;return n.getExtension(this.getCloudinaryBasePathLink()).toLowerCase()==="svg"||((t=this.img)==null?void 0:t.indexOf(".svg"))!==-1}},props:{imgSrcSets:{type:String,default:null},img:String,alt:String,cloudinary:Boolean,crossorigin:String,lazy:Boolean,class:String,preset:String,lottie:Object,lottieSettings:Object,animated:Boolean},template:`
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
  `}},Symbol.toStringTag,{value:"Module"})),wa=Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"video-frame",migrate:!0,template:`
                        video-frame
                    `}},Symbol.toStringTag,{value:"Module"}));class Ft{static getEmbedSrc(t,i){const s=encodeURIComponent(document.location.origin),r=encodeURIComponent(document.location.href);return`https://www.youtube-nocookie.com/embed/${t}?origin=${s}&autoplay=${i}&widget_referrer=${r}&enablejsapi=1&widgetid=1`}}const Rt=Object.assign({"./components/accordion.js":ee,"./components/ad-block-info.js":ne,"./components/aside-wrapper.js":le,"./components/author-avatar.js":ce,"./components/author-header.js":de,"./components/authors.js":he,"./components/awards.js":pe,"./components/back-to-top.js":ue,"./components/badge.js":me,"./components/blog-recent.js":fe,"./components/blog.js":ve,"./components/card.js":be,"./components/carousel.js":ye,"./components/check-card.js":_e,"./components/contact.js":Se,"./components/content-scroller.js":Ce,"./components/cta-list.js":ke,"./components/cta.js":we,"./components/dropdown.js":Le,"./components/event-overview.js":De,"./components/event-teaser.js":Te,"./components/event.js":Oe,"./components/fab-button.js":Pe,"./components/fab-hint.js":je,"./components/faq.js":Me,"./components/feature-grid-item.js":Ee,"./components/feature-grid.js":Ne,"./components/feature-list.js":Ie,"./components/filter-bar.js":Ae,"./components/form-attachments.js":qe,"./components/form-checkbox.js":$e,"./components/form-checkboxes.js":ze,"./components/form-fields.js":Be,"./components/form-radio.js":Ve,"./components/form-radios.js":Fe,"./components/form-select.js":Re,"./components/formular.js":Ue,"./components/globals.js":ti,"./components/google-map-entry.js":ei,"./components/google-map.js":ii,"./components/grid-list.js":si,"./components/grid.js":ai,"./components/headline-row.js":ri,"./components/headline.js":oi,"./components/hero-text-image.js":ni,"./components/hero.js":li,"./components/icon-blocks.js":ci,"./components/icon.js":di,"./components/icons/arrow-curl.js":hi,"./components/icons/arrow-external.js":pi,"./components/icons/arrow-narrow.js":ui,"./components/icons/arrow.js":mi,"./components/icons/bin.js":gi,"./components/icons/check-mark.js":fi,"./components/icons/check.js":vi,"./components/icons/close.js":yi,"./components/icons/computer-shield.js":_i,"./components/icons/email-action-unread.js":Si,"./components/icons/emergency.js":Ci,"./components/icons/expand.js":ki,"./components/icons/hand.js":xi,"./components/icons/image-credits.js":Li,"./components/icons/info.js":Di,"./components/icons/list-view.js":Ti,"./components/icons/magnifier.js":Oi,"./components/icons/mail.js":Pi,"./components/icons/meerkat.js":ji,"./components/icons/menu.js":Mi,"./components/icons/minus.js":Ei,"./components/icons/phone-charger.js":Ni,"./components/icons/phone-mail.js":Ii,"./components/icons/phone.js":Ai,"./components/icons/pin.js":qi,"./components/icons/plus-minus.js":$i,"./components/icons/plus.js":zi,"./components/icons/quotes.js":Bi,"./components/icons/rocket.js":Vi,"./components/icons/smile.js":Ri,"./components/icons/strategy-split.js":Ui,"./components/icons/tile-view.js":Hi,"./components/icons/world.js":Wi,"./components/icons/x-mark.js":Gi,"./components/image-block.js":Ji,"./components/image-list.js":Zi,"./components/img-filter.js":Ki,"./components/img.js":Xi,"./components/intro-text.js":Yi,"./components/job-list-detail.js":Qi,"./components/job-list-entry.js":ts,"./components/job-list.js":es,"./components/letter-switcher.js":is,"./components/link-list.js":ss,"./components/list-container.js":as,"./components/list.js":rs,"./components/logo-list.js":os,"./components/lottie.js":ns,"./components/modal-application.js":ls,"./components/modal.js":cs,"./components/people-square.js":ds,"./components/person-quote.js":hs,"./components/post-teaser.js":ps,"./components/pricing-product.js":us,"./components/product-blocks.js":ms,"./components/product-stage.js":gs,"./components/quotes.js":fs,"./components/screenshot.js":vs,"./components/scroll-arrow.js":bs,"./components/search.js":ys,"./components/services.js":_s,"./components/shape-animation.js":Ss,"./components/shape-circle-within-square.js":ks,"./components/shape-fast-forward.js":xs,"./components/shape-four-squares.js":Ds,"./components/shape-four-triangles.js":Os,"./components/shape-half-square.js":Ms,"./components/shape-moving-eye.js":Ns,"./components/shape-security-eye.js":As,"./components/shape-semi-circle.js":zs,"./components/shape-square-circle.js":Rs,"./components/shape-triangles-to-center.js":Hs,"./components/shape.js":Ws,"./components/shapes/l-block.js":Gs,"./components/shapes/s-block.js":Js,"./components/shapes/square.js":Zs,"./components/shapes/t-block.js":Ks,"./components/site-icons.js":Xs,"./components/slider.js":Ys,"./components/slot-items.js":Qs,"./components/socials.js":ta,"./components/step-list.js":ea,"./components/success-story.js":ia,"./components/svg-shape.js":sa,"./components/tab-list.js":aa,"./components/tag-cloud.js":ra,"./components/tag.js":oa,"./components/teaser.js":na,"./components/testimonial-list.js":la,"./components/testimonial-teaser.js":ca,"./components/testimonials-detail.js":da,"./components/testimonials-slider.js":ha,"./components/text-animation.js":pa,"./components/text-icon-animation.js":ua,"./components/text-image-list.js":ma,"./components/text-image.js":ga,"./components/text-teaser.js":fa,"./components/timeline.js":va,"./components/toggle-form.js":ba,"./components/v-footer.js":ya,"./components/v-header.js":_a,"./components/v-img.js":ka,"./components/video-frame.js":wa,"./components/video-inner.js":Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"video-inner",computed:{videoClass(){return["video utility-animation",`${this.videoParsed.id?"video--has-video":"hover__parent"}`,`${this.isVariantRow?"container":"d-flex flex-column"}`,`${n.isTrue(this.overlapping)?"video--is-overlapping":""}`,`${this.spacing?this.spacing:"space-bottom-1 space-bottom-lg-0"}`,`${this.isReversed()?"":"h-100"}`,`${this.variant?"video--"+this.variant:""}`,"vue-component"]},videoPlayerClass(){return["video__player fade-in-bottom",`${this.variantClasses}`,`${this.isPlayed?"video-player-played is-starting":""}`,`${this.videoParsed.ctaText?"video__player--has-link":""}`,"vue-component"]},videoContentClass(){const e=this.isReversed()?"pb-4":"py-4 px-3 p-lg-5";return["video__content fade-in-bottom",`${this.videoParsed.ctaText?"hover__parent":""}`,`${this.isVariantRow?"col-md-6 ":"flex-grow-1 "+e}`]},variantClasses(){return this.variant?this.isVariantRow?"col-md-6 order-md-2":"":"bg-dark"},isVariantRow(){return this.variant==="row"},videoParsed(){return typeof this.video!="object"?JSON.parse(this.video):this.video},onClickVideoContent(){return this.videoParsed.ctaText?"this.querySelector('a').click()":null},onClick(){return this.videoParsed.ctaText&&this.videoParsed.id?"this.querySelector('a').click()":null},videoId(){return"video-id__"+this.videoParsed.id},videoFrameId(){return this.videoId+"-frame"},headlineClasses(){return`h4-font-size ${this.isVariantRow?"mb-0":""}`},dataOptionsLightBox(){const e={selector:`#${this.videoId} .js-video-button`,speed:700,buttons:["fullScreen","close"],media:{youtube:{url:"https://www.youtube-nocookie.com/embed/$4",params:{autoplay:1}}}};return JSON.stringify(e)},options(){return{videoId:this.videoParsed.id,parentSelector:"#"+this.videoId,targetSelector:"#"+this.videoFrameId,isAutoplay:!0}},dataOptionsRegular(){return JSON.stringify(this.options)},dataSrc(){return"https://www.youtube-nocookie.com/"+this.videoParsed.id},embedSrc(){return Ft.getEmbedSrc(this.videoParsed.id,this.options.isAutoplay)},dataCaption(){return this.videoParsed.headline}},mounted(){var e,t,i;(i=(t=(e=$==null?void 0:$.HSCore)==null?void 0:e.components)==null?void 0:t.HSFancyBox)==null||i.init($(this.$refs.lightbox))},methods:{isReversed(){return this.variant==="reversed"},handleButtonClick(){this.isPlayed=!0},handleClose(){this.isPlayed=!1}},data(){return{isPlayed:!1}},props:{video:Object,variant:String,spacing:String,overlapping:String,level:{default:"h4"}},template:`
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
    `}},Symbol.toStringTag,{value:"Module"})),"./components/wrapper-slot-items.js":Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"wrapper-slot-items",props:{items:{default:[]}},render(){const e=window.vueH,t=this.items(),i=typeof t[0].type=="symbol"?t[0].children:t,s=[];return i.length===0?null:(i.forEach(r=>{const a=e("div",{class:"wrapper-slot-items__item"},r);s.push(a)}),s)}}},Symbol.toStringTag,{value:"Module"})),"./components/wrapper.js":Object.freeze(Object.defineProperty({__proto__:null,default:{tagName:"wrapper",computed:{classList(){return["wrapper vue-component",this.classes?this.classes:null,this.hideContainerClass?"":"container"]}},props:{hideContainer:{default:!1},hideContainerClass:{default:!1},classes:{default:""}},template:`
    <template v-if="!hideContainer">
      <div :class="classList">
        <slot></slot>
      </div>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  `}},Symbol.toStringTag,{value:"Module"}))}),xa={install(e){for(const t in Rt){const i=t.split("/").pop().replace(/\.\w+$/,"");e.component(i,Rt[t].default)}}};class ft{constructor(){const t=this.getHash();this.idSelector=`[id="${t.substring(1)}"]:not([role="tabpanel"])`,this.idTarget=document.querySelector(this.idSelector),this.idTarget&&n.scrollIntoView(this.idTarget,!0),this.targetSelector=`a[href^="${t}"]`,this.productStageSelector=".product-stage",this.target=document.querySelector(this.targetSelector),this.links=document.querySelectorAll('a[href^="#"]:not([data-toggle])'),this.handleTargetClick(),this.bindEvents()}hasProductStage(){return!!document.querySelector(this.productStageSelector)}bindEvents(){var t;(t=this.links)==null||t.forEach(i=>{i.addEventListener("click",this.handleClick.bind(this))})}handleTargetClick(){!this.idTarget&&this.target&&this.hasProductStage()&&this.handleAfterClick(this.target,!0)}handleClick(t){const i=t.currentTarget,s=i==null?void 0:i.getAttribute("href"),r=document.querySelector(`a[href="${s}"][data-toggle]`);this.handleAfterClick(r)}handleAfterClick(t,i){t&&(n.scrollIntoView(t,i),t.click())}getHash(){return window.location.hash}static init(){this.instances=[],this.instances.push(new this)}}p(ft,"rootSelector",""),p(ft,"instances",[]);const La=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),G=class G{constructor(t){var i;this.root=t,this.code=this.root.dataset.analytics,this.parent=n.getParent(this.root,_.rootSelector),this.formInstance=_.initElement(this.parent,{noEvents:!0}),this.form=(i=this.formInstance)==null?void 0:i.form,this.bindEvents()}isInForm(){return!!this.form}bindEvents(){var t;this.isInForm()?(t=this.form)==null||t.addEventListener("submit",this.handleSubmit.bind(this)):this.root.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.track(void 0,()=>{})}handleSubmit(t){t.stopImmediatePropagation(),t.preventDefault(),this.isFormValidated(t)&&this.track(void 0,()=>{this.form.submit()})}isFormValidated(t){var i;return((i=this.formInstance)==null?void 0:i.validate(t))&&this.formInstance.triggerExternalValidation()}track(t,i){G.track(this.code,i,t)}static isGALoaded(){return dataLayer.filter(t=>t.event==="gtm.dom").length>0}static track(t,i,s){window.gtag&&t&&G.isGALoaded()?window.gtag("event","conversion",{send_to:t,event_callback:i}):(console.error("GTag not found or Collect not loaded"),i())}static init(){this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),t=>{this.instances.push(new this(t))})}};p(G,"rootSelector","[data-analytics]"),p(G,"instances",[]);let vt=G;const Da=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"}));class W{constructor(){}start({duration:t,timing:i,draw:s}){const r=performance.now();this.requestId;const a=this;this.requestId=requestAnimationFrame(function o(c){let d=(c-r)/t;d>1&&(d=1);const h=i(d);s(h),d<1&&(a.requestId=requestAnimationFrame(o))})}pause(){cancelAnimationFrame(this.requestId)}}p(W,"easing",{linear(t){return t},easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}});class Ut{constructor(t){var i;this.root=t,this.targetSelector=".js-toggle-switch",this.target=this.root.querySelector(this.targetSelector),this.duration=400,this.parsePricingData=(i=this.root.querySelector("[data-pricing]"))==null?void 0:i.dataset.pricing,this.bindEvents(),this.initPrices()}getTargetSelectors(t){const s=JSON.parse(t.dataset.toggleSwitchOptions).targetSelector.split(","),r=[];for(let a=0;a<s.length;a++){const o=s[a].replace(/\s/g,"");r.push(o)}return r}handleChange(t){const i=t.currentTarget,s=i.checked,a=JSON.parse(i.dataset.toggleSwitchOptions).targetSelector.split(","),o=a.some(c=>c.includes("pricing"));for(let c=0;c<a.length;c++){const d=a[c].replace(/\s/g,"");this.switchData(d,s,o)}[].forEach.call(document.querySelectorAll("[data-alternative-href]"),c=>{this.switchButtonHrefs(c,s)})}switchButtonHrefs(t,i){t.dataset.originalHref||(t.dataset.originalHref=t.href),t.href=i?t.dataset.originalHref:t.dataset.alternativeHref}pricingData(){return this.parsePricingData?JSON.parse(this.parsePricingData):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"}}priceFormatter(){const t=this.pricingData();return new Intl.NumberFormat(t.format,{style:"currency",currency:t.currency,maximumFractionDigits:2})}switchAnimation(t,i,s){new W().start({duration:this.duration,timing:W.easing.easeInOutCubic,draw:a=>{const o=a*(s-i)+i;this.updatePrices(t,o)}})}updatePrices(t,i){const s=i.replace?parseFloat(i.replace(/,/,".")):i,a=this.priceFormatter().format(s);t.innerHTML=a}initPrices(){this.getTargetSelectors(this.target).forEach(i=>{document.querySelectorAll(i).forEach(r=>{r.dataset.currencyFormat!==void 0&&this.updatePrices(r,r.innerHTML)})})}switchData(t,i,s){const r=document.querySelectorAll(t);for(let a=0;a<r.length;a++){const o=r[a];s?this.handlePriceSwitch(o,i):this.handleForms(o,t)}}handlePriceSwitch(t,i){const s=JSON.parse(t.dataset.toggleSwitchItemOptions),r=i?s.monthly:s.annual,a=i?s.annual:s.monthly;this.switchAnimation(t,r,a)}handleForms(t,i){const s=t.className.includes(l.HIDDEN),r=i.startsWith(".")?i.substring(1):i;t.className=r+" "+(s?"":l.HIDDEN)}bindEvents(){this.target.addEventListener("change",this.handleChange.bind(this))}static init(){this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),t=>{this.instances.push(new this(t))})}}p(Ut,"rootSelector",".toggle-switch");const Ta=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"}));class Ht extends b{constructor(t,i){super(t,i),this.init()}init(){this.canGoBack()&&(this.root.classList.add(l.SHOW),this.bindEvents())}bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}canGoBack(){return document.referrer.indexOf(document.location.host)!==-1}handleClick(t){t.stopImmediatePropagation(),window.history.back()}}p(Ht,"rootSelector",".back");const Oa=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"}));class Wt extends b{constructor(t,i){super(t,i),this.init()}init(){this.bindEvents()}bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}handleClick(){n.scrollToTop()}}p(Wt,"rootSelector",".back-to-top");const Pa=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"}));class Gt extends b{constructor(t,i){super(t,i),this.mailSelector='a[href^="mailto:"]',this.formSelector=".contact__form",this.boxSelector=".contact__box",this.mail=this.root.querySelector(this.mailSelector),this.form=this.root.querySelector(this.formSelector),this.box=this.root.querySelector(this.boxSelector),this.init()}init(){this.bindEvents()}bindEvents(){!this.mail||!this.form||!this.box||(this.mail.addEventListener("click",this.handleClick.bind(this)),document.addEventListener(g.FAB_BUTTON_CLOSE,this.reset.bind(this)))}handleClick(t){t.preventDefault();const i=this.root.offsetHeight,s=i+"px";this.root.classList.add(l.SHOW),this.root.style.height=s,this.form.style.height=s;const r=this.form.scrollHeight;if(r<i)return;const o=r+40+"px";this.root.style.height=o,this.form.style.height=o}reset(){var t;this.root.classList.remove(l.SHOW),this.form.style.height="",this.root.style.height="",(t=this.form.querySelector("form"))==null||t.reset()}}p(Gt,"rootSelector",".contact.is-collapsed");const ja=Object.freeze(Object.defineProperty({__proto__:null,default:Gt},Symbol.toStringTag,{value:"Module"})),rt=class rt extends b{constructor(t,i){super(t,i),this.iconSelector=".fab-button__icon",this.linkSelector=".fab-trigger",this.modalSelector=".fab-button__modal",this.closeSelector=".fab-button__close",this.icon=this.root.querySelector(this.iconSelector),this.link=document.querySelectorAll(this.linkSelector),this.modal=this.root.querySelector(this.modalSelector),this.close=this.root.querySelector(this.closeSelector),this.resetDelay=300,this.init()}init(){this.bindEvents()}hasTrigger(){return this.root.classList.contains("fab-button--has-trigger")}bindEvents(){var t;if(!this.icon||!this.modal||this.hasTrigger())return this.bindTriggerEvent();this.link.forEach(i=>{i.addEventListener("click",this.handleClick.bind(this))}),this.icon.addEventListener("click",this.handleClick.bind(this)),(t=this.close)==null||t.addEventListener("click",this.handleClose.bind(this)),document.addEventListener(g.FORM_AJAX_SUBMIT,this.handleSubmit.bind(this)),window.addEventListener("click",this.handleOutsideClick.bind(this)),this.modal.style="opacity: 1",this.modal.style=""}bindTriggerEvent(){this.icon.addEventListener("click",this.handleTriggerClick.bind(this))}handleTriggerClick(t){const s=t.currentTarget.dataset.triggerId;document.dispatchEvent(new CustomEvent(g.OPEN_MODAL,{detail:{id:s}}))}handleOutsideClick(t){this.root.classList.contains(l.EXPANDED)&&n.isOutsideOf(rt.rootSelector.substring(1),t)&&n.isOutsideOf(this.linkSelector.substring(1),t)&&this.handleClose()}handleSubmit(){this.handleClose()}handleClose(){this.handleClick(),setTimeout(()=>{document.dispatchEvent(new CustomEvent(g.FAB_BUTTON_CLOSE,{detail:{target:this.root}}))},this.resetDelay)}handleClick(){this.root.classList.toggle(l.EXPANDED),this.modal.classList.toggle(l.OFF_SCREEN),this.modal.classList.contains(l.OFF_SCREEN)&&(this.modal.style="")}};p(rt,"rootSelector",".fab-button");let bt=rt;const Ma=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"}));class Jt extends b{constructor(t,i){super(t,i),this.mapsSelector=".google-maps__map",this.maps=this.root.querySelector(this.mapsSelector),this.init()}init(){var s,r;const t=(r=(s=$==null?void 0:$.HSCore)==null?void 0:s.components)==null?void 0:r.HSLeaflet;if(t===null||L===null)return;const i=t.init(this.maps);i.fire("movestart"),i._rawPanBy([i.getCenter().lng,i.getCenter().lat]),i.fire("move"),i.fire("moveend"),L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{id:"mapbox/streets-v11"}).addTo(i)}}p(Jt,"rootSelector",".google-maps");const Ea=Object.freeze(Object.defineProperty({__proto__:null,default:Jt},Symbol.toStringTag,{value:"Module"}));class Zt extends b{constructor(t,i){super(t,i),this.videoSelector=".hero-text-image__video video",this.videoAnimatinoSelector=".hero-video__animation",this.ctaSelector=".cta",this.videos=this.root.querySelectorAll(this.videoSelector),this.ctaList=this.root.querySelectorAll(this.ctaSelector),this.classList=this.root.classList,this.animationDelay=6400,this.init()}init(){this.playDelayed(),this.bindEvents()}isSecurity(){return this.classList.contains("hero--security")}isCareer(){return this.classList.contains("hero--career")}bindEvents(){const t=this.isSecurity()||this.isCareer();!this.ctaList||!t||this.ctaList.forEach(i=>{i.addEventListener("click",this.handleClick.bind(this))})}isValidSelector(t){return t.indexOf("#")!==-1}handleClick(t){const s=t.currentTarget.getAttribute("href");if(!this.isValidSelector(s))return;t.preventDefault(),t.stopImmediatePropagation();const r=document.querySelector(s);r&&n.scrollIntoView(r,!0)}playDelayed(){setTimeout(()=>{[].forEach.call(this.root.querySelectorAll(this.videoAnimatinoSelector),t=>{t.classList.add(l.SHOW),t.style.height=t.scrollHeight+"px"})},this.animationDelay)}}p(Zt,"rootSelector",".hero-text-image");const Na=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"}));class Kt extends b{constructor(t,i){var a;super(t,i),this.selectedValue=0,this.products=null,this.range=null;const s=(a=document.querySelector("[data-pricing]"))==null?void 0:a.dataset.pricing,r=s?JSON.parse(s):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};this.priceFormatter=new Intl.NumberFormat(r.format,{style:"currency",currency:r.currency,maximumFractionDigits:0}),this.selectedPlan=["monthly","annual"].includes(r.defaultPlan)?r.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),this.currentPrice=0,this.init()}init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}bindEvents(){const t=this.root.querySelector(".pricing-slider__info");t&&t.addEventListener("click",this.handleInfoClick.bind(this)),window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}handleInfoClick(){const t=this.root.querySelector(".pricing-slider__modal");A.open(t)}handlePricingSlider({from:t}){this.selectedValue=parseInt(t);const i=this.getRecommendedProduct(this.selectedValue);if(!i)return;const s=this.selectedValue-i.value;var r=parseInt(i.price[this.selectedPlan])+s*parseFloat(i.additionalUsersFee[this.selectedPlan]);this.currentPrice=r,this.updateElements(this.priceFormatter.format(r),i.title,this.formatExtraUsers(s))}getRecommendedProduct(t){let i=null;const s=`No products found for value ${t} in site.data.products.list`;if(this.products)return this.products.forEach(function(r){r.value<=t&&(i=r)}),i||console.error(s),i;console.error(s)}formatExtraUsers(t){const i=this.range.unit;return t>0?"+ "+t+" "+i:""}prepare(t){const i=document.querySelector(".js-slider-data"),s=5;this.products=JSON.parse(i.dataset.products),this.range=JSON.parse(i.dataset.range),this.selectedValue=t.from,setTimeout(()=>{this.fixText()},s)}fixText(){const t=document.querySelector(".irs-single"),i=t.innerHTML;i.includes(this.range.unit)||(t.innerHTML=[i,this.range.unit].join(" "))}updateElements(t,i,s){const r=document.querySelector(".js-result-price"),a=document.querySelector(".js-result-product"),o=document.querySelector(".js-result-extra");r.innerHTML=t,a.innerHTML=i,o.innerHTML=s,this.fixText()}}p(Kt,"rootSelector",".pricing-slider");const Ia=Object.freeze(Object.defineProperty({__proto__:null,default:Kt},Symbol.toStringTag,{value:"Module"}));class Xt extends b{constructor(t,i){var s,r;super(t,i),this.root=t,this.container=t.querySelector(".tag-cloud__container"),this.itemsContainer=t.querySelector(".tag-cloud__items"),this.itemLinkClass="tag-cloud__item-link",this.slider=t.querySelector(".tag-cloud__slider"),this.items=(s=this.itemsContainer)!=null&&s.dataset.items?JSON.parse((r=this.itemsContainer)==null?void 0:r.dataset.items):[],this.maxCoordinate=40,this.itemsPerOuterRow=3,this.minCoordinate=10,this.minBlur=2,this.maxBlur=10,this.maxDelay=70,this.minDelay=550,this.maxWeight=3,this.isMouseOut=!0,this.animate=new W,this.delay=1e3,this.velocity=30,this.startPosition=0,this.endPosition=0,this.gotDragged=!1,this.firstTouch=!0,this.temporaryTouchPosition=0,this.temporaryDiff=0,this.percentageInViewport=30,this.init()}init(){this.weightingElements(),this.addCorners(),this.appendItems(),this.hasScrollAnimation()&&(this.setDuration(),this.addScrollAnimation()),document.dispatchEvent(new CustomEvent(g.DIMENSIONS_CHANGED,{detail:this.root})),this.bindEvents()}hasScrollAnimation(){return n.isBelowBreakpoint("md")&&n.isInViewportPercent(this.root,this.percentageInViewport)}bindEvents(){this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach(t=>{t.addEventListener("mouseover",i=>{this.handleMouseOver(i==null?void 0:i.currentTarget)})}),this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach(t=>{t.addEventListener("mouseout",i=>{this.handleMouseOut(i==null?void 0:i.currentTarget)})}),window.addEventListener("resize",()=>{this.handleScroll(),this.endPosition=this.slider.scrollWidth-this.slider.clientWidth,this.setDuration()}),document.addEventListener("scroll",()=>{this.handleScroll()}),this.slider.addEventListener("touchstart",()=>{this.hasScrollAnimation()&&(clearTimeout(this.timeout),this.handleTouchStart())}),this.slider.addEventListener("touchend",()=>{this.hasScrollAnimation()&&(this.timeout=setTimeout(()=>{this.addScrollAnimation()},this.delay))})}stopScrollAnimation(){this.animate.pause(),this.isInScrollAnimation=!1}handleTouchStart(){this.stopScrollAnimation(),this.gotDragged=!0}handleTouchEnd(){const t=this.slider.scrollLeft,i=Math.abs(this.endPosition-t),s=Math.abs(this.startPosition-t),r=W.easing.linear,a=i<s,o=t,c=a?this.startPosition:this.endPosition,d=!!a,h=Math.abs(o-c)/Math.abs(this.startPosition-this.endPosition),u=this.duration*h;this.moveTo(o,c,u,r,d)}handleMouseOut(t){window.cancelAnimationFrame(this.animate.requestId),t.style.setProperty("filter",null)}handleMouseOver(t){const i=window.getComputedStyle(t),s=i==null?void 0:i.filter.replace("blur(","").replace("px)","");this.animate.start({duration:900,timing:W.easing.easeInOutCubic,draw:a=>{const o=s-s*a;t.style.setProperty("filter",`blur(${o}px)`,"important")}})}handleScroll(){if(this.hasScrollAnimation()){if(this.isInScrollAnimation)return;this.addScrollAnimation()}else this.stopScrollAnimation()}addScrollAnimation(){this.isInScrollAnimation=!0,this.endPosition=this.slider.scrollWidth-this.slider.clientWidth,this.handleTouchEnd()}setDuration(){const t=this.slider.clientWidth;this.duration=this.velocity*t}moveTo(t,i,s,r,a){const o=Math.abs(i-t);this.animate.start({duration:s,timing:r,draw:c=>{const d=a?t-o*c:t+o*c,h=a?o*(1-c):o*c;this.slider.scrollLeft=this.gotDragged?d:h,c===1&&(this.gotDragged=!1,this.moveTo(this.startPosition,this.endPosition,s,r,!a))}})}weightingElements(){for(let i=0;i<this.items.length;i++){const s=this.items[i],r=Math.ceil(s.title.length/8);this.items[i].weighting=r>this.maxWeight?this.maxWeight:r}}getCornerPosition(){let t=0,i=0,s=0,r=0;for(let a=0;a<this.items.length;a++){const o=this.items[a];t+=o.weighting,!(t>this.itemsPerOuterRow+1)&&(i=a+1)}for(let a=this.items.length-1;a>0;a--){const o=this.items[a];s+=o.weighting,!(s>3)&&(r=a+1)}return{secondIndex:i,thirdIndex:r}}addCorners(){const t={weighting:0};this.items.unshift(t),this.items.push(t);const i=this.getCornerPosition();this.items.splice(i.secondIndex,0,t),this.items.splice(i.thirdIndex,0,t)}getRandomCoordinate(){let s=this.getRandomNumberBetween(this.minCoordinate,this.maxCoordinate),r=s,a=Math.random()>.5?-1*s:s;return a<0&&(s=a+r/1.1),s/2}getRandomBlur(){return this.getRandomNumberBetween(this.minBlur,this.maxBlur)}getRandomStart(){return this.getRandomNumberBetween(this.minDelay,this.maxDelay)}getRandomNumberBetween(t,i){return Math.floor(Math.random()*(i-t+1))+t}appendItems(){for(let t=0;t<this.items.length;t++){const i=this.items[t],s=2,r=document.createElement("li");if(r.classList.add("tag-cloud__item"),r.setAttribute("data-weight",i.weighting),i.title){const a=document.createElement("a"),c=t%s===0?2:1;a.setAttribute("groupIdentifier",c),a.style.setProperty("--blurry-x1",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-x2",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-x3",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-y1",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-y2",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-y3",`${this.getRandomCoordinate()}px`),a.style.setProperty("--blurry-delay",`${this.getRandomStart()}ms`),a.style.setProperty("--blurry-blur",`${this.getRandomBlur()}px`),a.innerText=i.title,a.classList.add(this.itemLinkClass),r.appendChild(a)}this.itemsContainer.appendChild(r)}}}p(Xt,"rootSelector",".tag-cloud");const Aa=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"}));class Yt extends b{constructor(t,i){super(t,i),this.root=t,this.testimonialContainer=this.root.querySelector(".testimonial-list__contents"),this.testimonials=this.root.querySelectorAll(".testimonial-list__content"),this.viewPortPercentageAtScroll=30,this.viewPortPercentageAtLoad=5,this.start()}handleScrollEvent(){this.hiddenTestimonials=this.root.querySelectorAll(`.testimonial-list__content:not(.${l.SHOW})`),this.hiddenTestimonials.forEach(t=>{n.isInViewportPercent(t,this.viewPortPercentageAtScroll)&&t.classList.add(l.SHOW)})}currentlyInViewPort(){this.testimonials.forEach(t=>{n.isInViewportPercent(t,this.viewPortPercentageAtLoad)&&t.classList.add(l.SHOW)})}start(){this.currentlyInViewPort(),document.addEventListener("scroll",this.handleScrollEvent.bind(this))}}p(Yt,"rootSelector",".testimonial-list");const qa=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"}));class Qt extends b{constructor(t){super(t),this.root=t,this.options=t.dataset.hsVideoPlayerOptions,this.options&&(this.options=JSON.parse(this.options),this.videoFrameSelector=this.options.targetSelector,this.parentSelector=this.options.parentSelector,this.videoFrame=this.root.querySelector(this.videoFrameSelector),this.parent=document.querySelector(this.parentSelector),this.videoFrame&&this.init())}init(){this.bindEvents()}bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.setPlayed(),this.openIframe()}setPlayed(){var t;(t=this.parent)==null||t.classList.add("video-frame--played")}openIframe(){this.videoFrame.outerHTML=`
      <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" src="${this.embedSrc()}" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"></iframe>
    `}embedSrc(){return Ft.getEmbedSrc(this.options.videoId,this.options.isAutoplay)}}p(Qt,"rootSelector",".js-inline-video-player");const $a=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"}));class te extends b{constructor(t,i){super(t,i),this.root=t,this.containerSelector=".page-detail__container",this.headlineSelector=".page-detail__headline",this.ctaSelector=".page-detail__cta .cta",this.introSelector=".page-detail__intro",this.descriptionSelector=".page-detail__description",this.shapeSelector=".page-detail__shape",this.introContentSelector=".page-detail__intro-content",this.badgeSelector=".page-detail__badge",this.detailsSelector=".page-detail__details",this.hasBackClass="page-detail--has-back",this.shape=t.querySelector(this.shapeSelector),this.hasShape()&&(this.introContent=t.querySelector(this.introContentSelector),this.intro=t.querySelector(this.introSelector)),this.loadingDelay=300,this.percentageInViewport=1,this.init()}showBackButton(){if(document.referrer.indexOf(document.location.host)!==-1){if(this.isVueComponent())return;this.root.classList.add(this.hasBackClass)}}init(){this.showBackButton(),this.bindEvents(),this.stopLoading(),this.setStickyPosition(),this.setShapePosition()}hasShape(){return!!this.shape}setStickyPosition(){var a,o,c;if(!this.hasShape()||!this.isInViewport()||!n.isUpperBreakpoint())return;const t=n.isBelowBreakpoint("lg")?10:-40,i=((a=this.introContent.querySelector(this.badgeSelector))==null?void 0:a.offsetHeight)||0,s=((o=this.introContent.querySelector(this.detailsSelector))==null?void 0:o.offsetHeight)||0,r=((c=this.introContent.querySelector(this.headlineSelector))==null?void 0:c.offsetHeight)||0;this.stickyPosition=i+s+r-t}isVueComponent(){return this.root.classList.contains("vue-component")}stopLoading(){setTimeout(()=>{this.isVueComponent()||this.root.classList.remove(l.LOADING)},this.loadingDelay)}queryElements(){this.back=this.root.querySelector(this.backSelector),this.cta=this.root.querySelector(this.ctaSelector)}bindEvents(){this.queryElements(),document.addEventListener(g.SCROLL_UPDATE,this.handleScroll.bind(this)),document.addEventListener(g.WINDOW_RESIZE,this.handleResize.bind(this))}handleScroll(){this.setShapePosition()}setShapePosition(){if(!(!this.hasShape()||!this.isInViewport())){if(!n.isUpperBreakpoint())return this.resetShape();this.isStickyShapeEnd()?this.handleStickyShapeEnd():this.isSticky()?(this.shape.classList.add(l.STICKY),this.shape.style.top=-this.stickyPosition+"px"):this.resetShape()}}handleStickyShapeEnd(){this.isStickyEnd()&&(this.shape.classList.add(l.STICKY),this.shape.style.top=-this.stickyPosition-this.getRelativePosition()+"px")}getRelativePosition(){var i;const t=((i=this.intro)==null?void 0:i.style.top.replace("px",""))||0;return t>=0?this.getStickyOffsetTop()-Math.abs(t):this.getStickyOffsetTop()-parseFloat(t)}resetShape(){this.shape.classList.remove(l.STICKY),this.shape.style.top="",this.isStickyEndReached=!1}isSticky(){return window.scrollY>this.stickyPosition}isStickyShapeEnd(){return this.root.getBoundingClientRect().bottom<=window.innerHeight}getHsStickyBlockOptions(){var i;if(this.hsStickyBlockOptions)return this.hsStickyBlockOptions;let t=(i=this.intro)==null?void 0:i.dataset.hsStickyBlockOptions;return t&&(t=JSON.parse(t)),this.hsStickyBlockOptions=t,t}getStickyOffsetTop(){var t;return((t=this.getHsStickyBlockOptions())==null?void 0:t.stickyOffsetTop)||0}isStickyEnd(){var t;return((t=this.intro)==null?void 0:t.style.top)!==this.getStickyOffsetTop()+"px"}isInViewport(){return n.isInViewportPercent(this.root,this.percentageInViewport)}handleResize(){this.setStickyPosition(),this.setShapePosition()}}p(te,"rootSelector",".page-detail");const za=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),Ba=(e,t,i)=>{const s=e[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((r,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==i?". Note that variables only represent file names one level deep.":""))))})};class Va{constructor(){this.init()}init(){this.lang=n.getLang(),this.load()}load(){this.loader=Ba(Object.assign({"./de/index.js":()=>Promise.resolve().then(()=>Ra),"./en/index.js":()=>Promise.resolve().then(()=>Ua),"./es/index.js":()=>Promise.resolve().then(()=>Ha)}),`./${this.lang}/index.js`,3).then(t=>{this.translations=t.default})}translate(t,i){return this.translations&&this.translations[t]?i?this.translations[t].replace("%s",i):this.translations[t]:`Translation key ${t} not found in ${this.lang} lang File`}getTranslationData(t){return t.reduce((i,s)=>(i[s]=this.translate(s),i),{})}}const Fa=Object.freeze(Object.defineProperty({__proto__:null,default:Va},Symbol.toStringTag,{value:"Module"})),Ra=Object.freeze(Object.defineProperty({__proto__:null,default:{posts:"Einträge",address:"Adresse",follow:"Folgen",full_time:"Vollzeit",part_time:"Teilzeit",contract:"Leiharbeitszeit",gender:"(m/w/d)",formAttachmentsWrongType:"Bitte wähle ein gültiges Dateiformat und achte darauf, dass der Dateiname keine Sonderzeichen enthält.",formAttachmentsMaxFiles:"Max. %s Dateien",formAttachmentsMaxSize:"Eine oder mehrere Dateien sind zu groß.",onlyLanguage:"German only",moreEvents:"Weitere Termine",positionTypePermanently:"Festanstellung",positionTypeInternship:"Praktikum oder Werkstudententätigkeit",positionTypeTraining:"Ausbildung oder Traineeprogramm",positionTypeStudent:"Werkstudierende",filterAuthors:"Autoren",filterTopics:"Themen",filterTags:"Tags",clearAll:"Alles löschen",search:"Suche",apply:"Anwenden",reset:"Zurücksetzen",jobListEmpty:"Aktuell haben wir keine Stellenangebote in dieser Sprache.",imageCredits:"Bildnachweis"}},Symbol.toStringTag,{value:"Module"})),Ua=Object.freeze(Object.defineProperty({__proto__:null,default:{posts:"Posts",address:"Address",follow:"Follow",full_time:"Full-Time",part_time:"Part-Time",contract:"Contract work",gender:"(m/f/d)",formAttachmentsWrongType:"Please choose a valid file format and make sure that the file name does not contain any special characters.",formAttachmentsMaxFiles:"Max. %s Files",formAttachmentsMaxSize:"One or more files are too large.",onlyLanguage:"English only",moreEvents:"More events",positionTypePermanently:"Permanent",positionTypeInternship:"Internship",positionTypeTraining:"Trainee",positionTypeStudent:"Working Students",filterAuthors:"Authors",filterTopics:"Topics",filterTags:"Tags",clearAll:"Clear all",search:"Search",apply:"Apply",reset:"Reset",jobListEmpty:"We currently have no positions in this language.",imageCredits:"Picture Credits"}},Symbol.toStringTag,{value:"Module"})),Ha=Object.freeze(Object.defineProperty({__proto__:null,default:{posts:"Entradas",address:"Dirección",follow:"Seguir",full_time:"Tiempo completo",part_time:"Tiempo parcial",contract:"Contrato de trabajo",gender:"(h/m/d)",formAttachmentsWrongType:"Elija un formato de archivo válido y asegúrese de que el nombre del archivo no contiene caracteres especiales.",formAttachmentsMaxFiles:"Máx. %s archivos",formAttachmentsMaxSize:"Uno o más archivos son demasiado grandes.",onlyLanguage:"Sólo español",moreEvents:"Otras fechas",positionTypePermanently:"Puesto permanente",positionTypeInternship:"Prácticas",positionTypeTraining:"Educación",positionTypeStudent:"Estudiantes que trabajan",filterAuthors:"Autores",filterTopics:"Temas",filterTags:"Tags",clearAll:"Borrar todo",search:"Buscar en",apply:"Aplicar",reset:"Reiniciar",jobListEmpty:"Actualmente no tenemos posiciones en este idioma.",imageCredits:"Créditos de las fotos"}},Symbol.toStringTag,{value:"Module"}));return xa});
