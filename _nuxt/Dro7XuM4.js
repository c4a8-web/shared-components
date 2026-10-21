var re=Object.defineProperty;var ie=(r,t,e)=>t in r?re(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var j=(r,t,e)=>ie(r,typeof t!="symbol"?t+"":t,e);import{_ as le}from"./Dbjosn9x.js";import{_ as ce}from"./mbBm67Yn.js";import{_ as Y}from"./CdbNCvIj.js";import{aE as de,aa as ue,_ as T,c as i,o,a as c,b as a,d as h,t as m,w as f,n as d,T as ge,W as pe,h as E,y as me,e as g,F as P,r as he,f as L,m as M,g as I}from"./hHSgbJcN.js";import{_ as fe}from"./CggN1iVS.js";import{_ as _e}from"./BeM_ocaS.js";import{_ as be}from"./CtNyxCkC.js";import{_ as ye}from"./BOV3asV6.js";import{P as K}from"./FWnOHSgg.js";import"./D4CcY0Sj.js";import"./DH568vPI.js";import"./DXsy6Cm4.js";import"./-_gES4nC.js";import"./CX5q55Uu.js";import"./C-G-Qts9.js";import"./BzRxihbK.js";class X extends de{constructor(t,e,u){super(t,e),this.selectedValue=0,this.products=null,this.range=null,this.pricing=u;const l=this.pricing?this.pricing:{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};this.priceFormatter=new Intl.NumberFormat(l.format,{style:"currency",currency:l.currency,maximumFractionDigits:0}),this.selectedPlan=["monthly","annual"].includes(l.defaultPlan)?l.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),this.currentPrice=0,this.init()}init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}bindEvents(){const t=this.root.querySelector(".pricing-slider__info");t&&t.addEventListener("click",this.handleInfoClick.bind(this)),window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}handleInfoClick(){const t=this.root.querySelector(".pricing-slider__modal");ue.open(t)}handlePricingSlider({from:t}){this.selectedValue=parseInt(t);const e=this.getRecommendedProduct(this.selectedValue);if(!e)return;const u=this.selectedValue-e.value;var l=parseInt(e.price[this.selectedPlan])+u*parseFloat(e.additionalUsersFee[this.selectedPlan]);this.currentPrice=l,this.updateElements(this.priceFormatter.format(l),e.title,this.formatExtraUsers(u))}getRecommendedProduct(t){let e=null;const u=`No products found for value ${t} in site.data.products.list`;if(this.products)return this.products.forEach(function(l){l.value<=t&&(e=l)}),e||console.error(u),e;console.error(u)}formatExtraUsers(t){const e=this.range.unit;return t>0?"+ "+t+" "+e:""}prepare(t){const e=document.querySelector(".js-slider-data"),u=5;this.products=JSON.parse(e.dataset.products),this.range=JSON.parse(e.dataset.range),this.selectedValue=t.from,setTimeout(()=>{this.fixText()},u)}fixText(){const t=document.querySelector(".irs-single"),e=t.innerHTML;e.includes(this.range.unit)||(t.innerHTML=[e,this.range.unit].join(" "))}updateElements(t,e,u){const l=document.querySelector(".js-result-price"),n=document.querySelector(".js-result-product"),p=document.querySelector(".js-result-extra");l.innerHTML=t,n.innerHTML=e,p.innerHTML=u,this.fixText()}}j(X,"rootSelector",".pricing-slider");const $={tagName:"pricing-slider",props:{slider:Object,tooltip:String,modalId:String,products:Object,light:{type:Boolean,default:!1}},data(){return{loading:!0,options:{type:"single",hide_min_max:!0,foreground_target_el:null,secondary_target_el:null,secondary_val:{steps:null,values:null},result_max_target_el:null,hide_from_to:!1,result_min_target_el:".js-result-price",extra_classes:"range-slider-custom"}}},mounted(){this.pollForJQuery()},computed:{pricingSliderRange(){return this.slider&&this.slider.range?this.slider.range:{}},hsIonRangeSliderOptions(){return{extra_classes:"range-slider-custom",hide_from_to:!1,min:this.pricingSliderRange.min,max:this.pricingSliderRange.max,from:this.pricingSliderRange.from,step:this.pricingSliderRange.step,result_min_target_el:".js-result-price"}}},methods:{handleRangeSliderStart(r){!window.prepareSlider||!window.handleChange||(window.prepareSlider(r),window.handleChange(r))},handleRangeSliderChange(r){window.handleChange&&window.handleChange(r)},bindEvents(){document.addEventListener(pe.CLIENT_ONLY_LIB_LOADED,this.initRangeSlider)},initRangeSlider(){!this.$refs.slider||!window.$||(this.loading=!1,window.$(this.$refs.slider).ionRangeSlider(this.options))},init(){var n;const{min:r,max:t,from:e,step:u,unit:l}=this.pricingSliderRange;Object.assign(this.options,{min:r,max:t,from:e,step:u,postfix:` ${l}`}),this.options.onStart=this.handleRangeSliderStart,this.options.onChange=this.handleRangeSliderChange,this.$refs.root&&new X(this.$refs.root,null,(n=this.products)==null?void 0:n.pricing),ge.isClientOnlyLibLoaded()?this.initRangeSlider():this.bindEvents()},pollForJQuery(){let t=0;const e=()=>{if(window.$){this.init();return}t++,t<30&&setTimeout(e,100)};e()}}},ve=["data-range","data-products"],ke=["data-hs-ion-range-slider-options"],we={class:"product-stage__result-container"},xe={class:"text-center text-midnight"},Se={class:"pricing-slider__info font-size-5"},Ce={key:0},Pe={class:"container"},Le={class:"row"},Te=["innerHTML"];function Ae(r,t,e,u,l,n){var _;const p=ce,x=Y;return o(),i("div",{class:d(["pricing-slider",{"pricing-slider--loading":l.loading,"pricing-slider--light":e.light}]),ref:"root"},[n.pricingSliderRange?(o(),i("div",{key:0,class:"js-slider-data","data-range":JSON.stringify(n.pricingSliderRange),"data-products":JSON.stringify((_=e.products)==null?void 0:_.list)},[a("input",{class:"pricing-slider__slider js-ion-range-slider",type:"text","data-hs-ion-range-slider-options":JSON.stringify(n.hsIonRangeSliderOptions),ref:"slider"},null,8,ke)],8,ve)):c("",!0),a("div",we,[a("div",xe,[t[0]||(t[0]=a("span",{class:"font-size-5 js-result-price"},"0",-1)),a("span",Se,[h(p,{icon:"info",size:"small"})]),n.pricingSliderRange&&n.pricingSliderRange.resultPer?(o(),i("span",Ce,"| "+m(n.pricingSliderRange.resultPer),1)):c("",!0)]),t[1]||(t[1]=a("div",{class:"text-center text-midnight"},[a("strong",{class:"js-result-product"}),a("span",{class:"js-result-extra"})],-1)),h(x,{slim:!0,center:!0,class:"pricing-slider__modal","modal-id":e.modalId},{default:f(()=>[a("div",Pe,[a("div",Le,[a("div",{class:"col",innerHTML:e.tooltip},null,8,Te)])])]),_:1},8,["modal-id"])])],2)}const Re=T($,[["render",Ae]]);$.__docgenInfo={exportName:"default",displayName:"pricing-slider",description:"",tags:{},props:[{name:"slider",type:{name:"object"}},{name:"tooltip",type:{name:"string"}},{name:"modalId",type:{name:"string"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/pricing-slider.vue"]};const ee={props:{href:String}},je=["href"];function Ee(r,t,e,u,l,n){return e.href?(o(),i("a",{key:0,href:e.href},[E(r.$slots,"default")],8,je)):E(r.$slots,"default",{key:1})}const Me=T(ee,[["render",Ee]]);ee.__docgenInfo={exportName:"default",displayName:"conditional-link",description:"",tags:{},props:[{name:"href",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/conditional-link.vue"]};const te={tagName:"product-stage",props:{stage:Object,products:Object,light:{type:Boolean,default:!0}},computed:{shapeClasses(){return this.overlapping?"position-absolute bottom-0 left-0 z-index-1 w-100":"position-relative z-index-1"},cardWrapperClasses(){var t;return["product-stage__card-wrapper",`col-${(t=this.cards)!=null&&t.tabs?"":"lg-"}`+12/this.cards.list.length,{"px-1 px-lg-3 nav-item":this.cards.tabs,"mb-6 mb-md-8 mb-lg-0":!this.cards.tabs}]},bgColor(){return(this.stage.bgColor||"var(--color-primary)").replace(";","")},cutoffBgColor(){return(this.stage.cutoff.bgColor||"var(--color-gk-light-grey)").replace(";","")},shape(){return this.stage.shape||null},cards(){return this.stage.cards||null},overlapping(){return this.cards&&this.stage.headline||this.stage.description}},methods:{hasLink(r){return!!r.link}}},Ie={class:"svg-shape-animation"},Be=["innerHTML"],Ne={class:"container"},De={class:"row"},Oe=["innerHTML"],qe={key:2,class:"row justify-content-center py-6"},He=["innerHTML"],Ue={key:3,class:"row justify-content-center py-6"},ze={key:4,class:"space-bottom-2 space-bottom-lg-3"},We={class:"d-flex flex-column align-items-center position-relative z-index-2"},Fe={key:1,class:"mb-6 flex-grow-1"},Je={class:d(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2 text-center align-items-center d-flex flex-column"])},Ve={key:1,class:"col-lg-8 lead mt-5 px-0"},Ge=["innerHTML"],Qe={key:0,class:"product-stage__bottom-container container position-relative pt-8 pt-lg-0"};function Ze(r,t,e,u,l,n){const p=le,x=Re,_=Y,se=fe,S=_e,ne=Me,oe=be,ae=ye;return o(),i(P,null,[a("section",{class:d(["product-stage position-relative overflow-hidden",e.stage.cutoff?"product-stage--cutoff":""]),style:L({backgroundColor:n.bgColor})},[a("div",Ie,[(o(),i("svg",{class:d(["position-absolute",e.stage.cutoff?"w-md-60":""]),width:"100%",height:"100%",preserveAspectRatio:"none",viewBox:"0 0 1440 965",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[...t[0]||(t[0]=[me('<path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs>',4)])],2))]),a("div",{class:d(e.stage.cutoff?"container":"")},[a("div",{class:d(e.stage.cutoff?"row":"")},[a("div",{class:d(["product-stage__content position-relative",e.stage.cutoff?"col-md-7":"container"])},[a("div",{class:d(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2",{"text-white":e.light}])},[h(p,{classes:e.stage.headlineClasses,level:e.stage.headlineLevel||"h1"},{default:f(()=>[I(m(e.stage.headline),1)]),_:1},8,["classes","level"]),e.stage.description?(o(),i("p",{key:0,class:d(["lead mt-5 px-0",e.stage.cutoff?"col-lg-10":"col-lg-8"]),innerHTML:e.stage.description},null,10,Be)):c("",!0)],2),e.stage.slider&&e.products?(o(),g(x,{key:0,slider:e.stage.slider,tooltip:e.stage.tooltip,"modal-id":e.stage.modalId,products:e.products,light:e.light},null,8,["slider","tooltip","modal-id","products","light"])):e.stage.modalId&&e.stage.tooltip?(o(),g(_,{key:1,slim:!0,center:!0,light:e.light,class:"pricing-slider__modal","modal-id":e.stage.modalId},{default:f(()=>[a("div",Ne,[a("div",De,[a("div",{class:"col",innerHTML:e.stage.tooltip},null,8,Oe)])])]),_:1},8,["light","modal-id"])):c("",!0),e.stage.additionalCopy?(o(),i("div",qe,[a("div",{class:d(["text-center",{"text-white":e.light}]),innerHTML:e.stage.additionalCopy},null,10,He)])):c("",!0),e.stage.buttons?(o(),i("div",Ue,[h(se,{list:e.stage.buttons},null,8,["list"])])):(o(),i("div",ze)),n.cards?(o(),i("ul",{key:5,class:d(["row nav nav-pills",{"px-1 px-lg-0":n.cards.tabs}]),role:"tablist"},[(o(!0),i(P,null,he(n.cards.list,(s,C)=>{var A,R;return o(),i("li",{key:C,class:d(n.cardWrapperClasses)},[h(ne,{link:n.hasLink(s),href:(A=s==null?void 0:s.link)==null?void 0:A.href,target:(R=s==null?void 0:s.link)==null?void 0:R.target,class:d(["product-stage__tab h-100 rounded position-relative d-block",{active:n.cards.tabs&&C===0}]),id:s!=null&&s.id?(s==null?void 0:s.id)+"-tab":"","data-toggle":"pill",role:"tab","aria-controls":s==null?void 0:s.id,"aria-selected":n.cards.tabs&&C===0},{default:f(()=>[a("div",{class:d(["product-stage__tab-content position-relative h-100",{"product-stage__tab-content--alternative-border":n.cards.tabs}])},[a("div",{class:d(["rounded",{"p-2 p-lg-8":s.link,"p-8 bg-white shadow-lg":!s.link}])},[a("div",We,[s.title?(o(),i("h2",{key:0,class:d(["font-size-3 mb-2 mb-md-6 text-center",{"text-primary":s.link}])},m(s.title),3)):c("",!0),s.description?(o(),i("p",Fe,m(s.description),1)):c("",!0),s.cta!==s.href?(o(),g(S,{key:2,text:s.cta.text,href:s.cta.href,target:s.cta.target,skin:s.cta.skin,classes:"align-self-center z-index-2"},null,8,["text","href","target","skin"])):c("",!0)])],2)],2)]),_:2},1032,["link","href","target","class","id","aria-controls","aria-selected"])],2)}),128))],2)):c("",!0)],2),e.stage.cutoff?(o(),i("div",{key:0,class:d(["cutoff__content",e.stage.cutoff?"col-md-5":""]),style:L({backgroundColor:n.cutoffBgColor})},[a("div",Je,[e.stage.cutoff.headline?(o(),g(p,{key:0,classes:e.stage.cutoff.headlineClasses,level:e.stage.cutoff.headlineLevel||"h1"},{default:f(()=>[I(m(e.stage.cutoff.headline),1)]),_:1},8,["classes","level"])):c("",!0),e.stage.cutoff.subline?(o(),i("p",Ve,m(e.stage.cutoff.subline),1)):c("",!0),e.stage.cutoff.button?(o(),g(S,M({key:2},e.stage.cutoff.button,{class:"my-4",width:"w-80"}),null,16)):c("",!0),e.stage.cutoff.description?(o(),i("p",{key:3,class:"col-lg-8 mt-5 px-0",innerHTML:e.stage.cutoff.description},null,8,Ge)):c("",!0),e.stage.cutoff.cta?(o(),g(S,M({key:4},e.stage.cutoff.cta,{class:"mt-md-11 pt-11 bold z-index-2",style:{color:e.stage.cutoff.cta.color,textDecoration:"underline"}}),null,16,["style"])):c("",!0)])],6)):c("",!0)],2)],2),n.shape?(o(),i(P,{key:0},[n.shape.isActive!==!1?(o(),g(oe,{key:0,align:"bottom",peak:"left",obliquity:4,classes:n.shapeClasses,color:n.shape.color},null,8,["classes","color"])):c("",!0)],64)):c("",!0)],6),e.stage.image?(o(),i("div",Qe,[h(ae,{src:e.stage.image.src,alt:e.stage.image.alt,cloudinary:e.stage.image.cloudinary,class:"product-stage__bottom-image w-md-60",style:L(e.stage.image.style)},null,8,["src","alt","cloudinary","style"])])):c("",!0)],64)}const Ye=T(te,[["render",Ze]]);te.__docgenInfo={exportName:"default",displayName:"product-stage",description:"",tags:{},props:[{name:"stage",type:{name:"object"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/product-stage.vue"]};const mt={argTypes:{},component:Ye,title:"Components/Product Stage"},b={args:{light:!1,stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",description:"Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",shape:{isActive:!0,color:"var(--color-gk-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},buttons:[{skin:"primary is-cutoff",ctaText:"Lorem ipsum dolor sit amet",ctaHref:"javascript:void(0);",onSurface:!0}],tooltip:"lorem ipsum dolor sit amet"},products:K}},y={args:{stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",shape:{isActive:!0,color:"var(--color-gk-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},modalId:"product-stage-modal",tooltip:'<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',additionalCopy:'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.'},products:K}},v={args:{stage:{bgColor:"var(--color-primary)",headline:"Start now",description:"Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{tabs:!0,list:[{title:"Buy now",id:"buy",link:{href:"#buy"}},{title:"Try for free",id:"try",link:{href:"#try"}},{title:"Get quote",id:"quote",link:{href:"#quote"}}]},shape:{isActive:!0,color:"var(--color-gk-white)"}}}},k={args:{stage:{bgColor:"var(--color-gk-light-blue);",headline:"Become a Partner",description:"We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{list:[{title:"Register as a Partner",description:"Do you want to resell TerraProvider? Contact us!",cta:{text:"Apply now",href:"#partner",skin:"primary is-cutoff"}},{title:"Partner Portal",description:"Already a registered partner? Access the partner center.",cta:{text:"Sign in",href:"#signin",skin:"primary is-cutoff",target:"_blank"}}]},shape:{isActive:!0,color:"var(--color-gk-white)"}}}},w={args:{stage:{bgColor:"var(--color-gk-orange);",headline:"Start now",headlineLevel:"h3",headlineClasses:"bold",description:"When signing up you get access to the RJ Portal within your Microsoft 365 tenant to find out about all the awesome possibilities to manage Windows and Mac applications without leaving the platform. But also managing all devices, users and groups, get access to open source remediations scripts and automation and so much more...",cutoff:{headline:"Ready to Explore?",headlineLevel:"h3",headlineClasses:"bold",subline:"Welcome to our Portal!",description:"This sign in button redirects you to the basic Entra login within your tenant and asks you to consent only basic profile access to allow us to read your name and email address.",button:{text:"Sign in",skin:"primary is-cutoff"},cta:{text:"Book 30 Minutes with Ugur now",link:!0,icon:"booking",color:"var(--color-black)"}},image:{src:"https://res.cloudinary.com/c4a8/image/upload/v1758548434/products/realmjoin/realmjoin-laptop.svg",alt:"Illustration of the RJ Portal"}}}};var B,N,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    light: false,
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      description: "Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo'
        }
      },
      buttons: [{
        skin: 'primary is-cutoff',
        ctaText: 'Lorem ipsum dolor sit amet',
        ctaHref: 'javascript:void(0);',
        onSurface: true
      }],
      tooltip: 'lorem ipsum dolor sit amet'
    },
    products: Products
  }
}`,...(D=(N=b.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var O,q,H;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo'
        }
      },
      modalId: 'product-stage-modal',
      tooltip: '<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',
      additionalCopy: 'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.'
    },
    products: Products
  }
}`,...(H=(q=y.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var U,z,W;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-primary)',
      headline: 'Start now',
      description: 'Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.',
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      cards: {
        tabs: true,
        list: [{
          title: 'Buy now',
          id: 'buy',
          link: {
            href: '#buy'
          }
        }, {
          title: 'Try for free',
          id: 'try',
          link: {
            href: '#try'
          }
        }, {
          title: 'Get quote',
          id: 'quote',
          link: {
            href: '#quote'
          }
        }]
      },
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      }
    }
  }
}`,...(W=(z=v.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var F,J,V;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-gk-light-blue);',
      headline: 'Become a Partner',
      description: 'We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.',
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      cards: {
        list: [{
          title: 'Register as a Partner',
          description: 'Do you want to resell TerraProvider? Contact us!',
          cta: {
            text: 'Apply now',
            href: '#partner',
            skin: 'primary is-cutoff'
          }
        }, {
          title: 'Partner Portal',
          description: 'Already a registered partner? Access the partner center.',
          cta: {
            text: 'Sign in',
            href: '#signin',
            skin: 'primary is-cutoff',
            target: '_blank'
          }
        }]
      },
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      }
    }
  }
}`,...(V=(J=k.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var G,Q,Z;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-gk-orange);',
      headline: 'Start now',
      headlineLevel: 'h3',
      headlineClasses: 'bold',
      description: 'When signing up you get access to the RJ Portal within your Microsoft 365 tenant to find out about all the awesome possibilities to manage Windows and Mac applications without leaving the platform. But also managing all devices, users and groups, get access to open source remediations scripts and automation and so much more...',
      cutoff: {
        headline: 'Ready to Explore?',
        headlineLevel: 'h3',
        headlineClasses: 'bold',
        subline: 'Welcome to our Portal!',
        description: 'This sign in button redirects you to the basic Entra login within your tenant and asks you to consent only basic profile access to allow us to read your name and email address.',
        button: {
          text: 'Sign in',
          skin: 'primary is-cutoff'
        },
        cta: {
          text: 'Book 30 Minutes with Ugur now',
          link: true,
          icon: 'booking',
          color: 'var(--color-black)'
        }
      },
      image: {
        src: 'https://res.cloudinary.com/c4a8/image/upload/v1758548434/products/realmjoin/realmjoin-laptop.svg',
        alt: 'Illustration of the RJ Portal'
        // style: {
        //   marginLeft: '-6%',
        // },
      }
    }
  }
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const ht=["Default","NoDescription","Tabs","Cards","Cutoff"];export{k as Cards,w as Cutoff,b as Default,y as NoDescription,v as Tabs,ht as __namedExportsOrder,mt as default};
