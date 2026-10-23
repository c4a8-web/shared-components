const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B9gKDEdT.js","./Cpj98o6Y.js","./BQXThELV.js"])))=>i.map(i=>d[i]);
import{_ as z,c,d as h,b as i,w as b,m as p,e as E,a as I,f as B,T as V,A,i as U,o as s,t as k,F as v,r as g,n as P}from"./CxlEFrmm.js";import{_ as O}from"./CU4Hs53D.js";import{_ as W}from"./CFW_hTri.js";import{r as q,_ as F}from"./Bo3mZvBG.js";import{_ as L}from"./BUWw9eUD.js";import"./D8DpVsr-.js";import"./BdDtwVcA.js";import"./D7BQVBcX.js";import"./CMtOK7Wv.js";import"./Dq3WPmkH.js";import"./UjBAOQs5.js";import"./Dj7y2ldm.js";import"./-_gES4nC.js";const x={tagName:"video-slider",data(){return{triggerButtonClick:!1,currentTabIndex:0,currentTab:null,slickElement:null,options:{centerMode:!0,infinite:!0,centerPadding:"20vw",slidesToShow:1,responsive:[{breakpoint:576,settings:{centerPadding:"10vw"}}],prevArrow:"",nextArrow:""}}},computed:{tabCount(){return this.tabs.length},copyColor(){return this.color?this.color:"var(--color-copy)"},backgroundColor(){return this.bgColor?this.bgColor:"var(--color-gk-light-grey)"},style(){return`--color-video-slider-background: ${this.backgroundColor}; --color-video-slider-color: ${this.copyColor};`}},mounted(){this.swiperObserver=q(this.$el);const t=this.$refs["max-width"],n=t==null?void 0:t.querySelector(".js-slick-carousel");n&&A(()=>import("./B9gKDEdT.js").then(e=>e.j),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>{this.slickElement=e.default(n),this.bindEvents()})},beforeUnmount(){var t;(t=this.swiperObserver)==null||t.disconnect()},methods:{bindEvents(){this.slickElement.on("afterChange",this.handlePositionChange.bind(this))},handlePositionChange(t,n,e){this.currentTabIndex=n.currentSlide,this.triggerButtonClick&&(this.triggerButtonClick=!1,this.currentTab=n==null?void 0:n.$slides[e],this.handleAfterChangeClick())},handleAfterChangeClick(){var n;const t=(n=this.currentTab)==null?void 0:n.querySelector(".js-video-button");t&&t.click()},handleCtaClick(t){var e;t.preventDefault();const n=(e=this.cta)==null?void 0:e.href;if(n){const l=document.querySelector(n);l&&V.scrollIntoView(l,!0)}},handleTabClick(t){this.slickElement.slick("slickGoTo",t),this.currentTabIndex=t},handleVideoInnerEvent(t){this.handleTabClick(t)},handleSliderClick(t){const e=t.target.closest(".slick-slide"),l=e==null?void 0:e.classList.contains("slick-cloned");if(!e||!l)return;const a=parseInt(e.dataset.slickIndex);this.handleTabClick(a),this.triggerButtonClick=!0}},props:{headline:{type:Object},subline:{type:String,required:!0},tabs:{type:Array,required:!0},cta:{type:Object}}},K={class:"video-slider__row row"},N={class:"video-slider__col col"},M={class:"video-slider__main"},R={class:"video-slider__header"},H={class:"video-slider__subline font-size-4 thin"},J={class:"video-slider__tabs-wrapper"},X={class:"video-slider__tabs d-flex"},Z=["onClick"],G={class:"video-slider__footer"};function Q(t,n,e,l,a,r){const y=O,S=U("swiper-container"),T=W,j=F,D=L;return s(),c("div",{class:"video-slider",style:B(r.style)},[h(S,p({class:"slider__swiper-containe"},a.options),{default:b(()=>{var o,d;return[i("div",K,[i("div",N,[i("div",M,[i("div",R,[h(y,{text:(o=e.headline)==null?void 0:o.text,level:(d=e.headline)==null?void 0:d.level,classes:"video-slider__headline h2-font-size"},null,8,["text","level"]),i("div",H,k(e.subline),1)]),i("div",J,[i("div",X,[(s(!0),c(v,null,g(e.tabs,(_,m)=>(s(),c("div",{key:m,onClick:$=>r.handleTabClick(m),class:P(["video-slider__tab",{active:m===a.currentTabIndex}])},k(_.label),11,Z))),128))])])])])])]}),_:1},16),i("div",{class:"video-slider__max-width slick--no-offset",ref:"max-width",onClick:n[0]||(n[0]=(...o)=>r.handleSliderClick&&r.handleSliderClick(...o))},[h(j,{options:a.options,"hide-background":!0,"hide-container":!0},{default:b(()=>[(s(!0),c(v,null,g(e.tabs,(o,d)=>(s(),c("div",{class:"video-slider__video-tab",key:d},[h(T,{video:{...o.video,lightbox:!0},variant:"compact","no-animation":!0,onLightboxClicked:_=>r.handleVideoInnerEvent(d)},null,8,["video","onLightboxClicked"])]))),128))]),_:1},8,["options"]),i("div",G,[e.cta?(s(),E(D,p({key:0},e.cta,{onClick:r.handleCtaClick}),null,16,["onClick"])):I("",!0)])],512)],4)}const Y=z(x,[["render",Q]]);x.__docgenInfo={exportName:"default",displayName:"video-slider",description:"",tags:{},props:[{name:"headline",type:{name:"object"}},{name:"subline",type:{name:"string"},required:!0},{name:"tabs",type:{name:"array"},required:!0},{name:"cta",type:{name:"object"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/video-slider.vue"]};const me={component:Y,argTypes:{},title:"Components/Video Slider"},u={args:{headline:{text:"Unsere Workaholics-Cases",level:"h2"},subline:"Erfahre jetzt, wem wir schon alles helfen konnten!",tabs:[{label:"Cloud",video:{thumb:"/it-workaholics/it-workaholics-cloud-thumb.jpg",alt:"Rene",id:"ADTnb8EUnz4",headline:'"Die ganze Last ist runter von meinen Schultern<br /> Jetzt ist wieder alles ganz federleicht!"'}},{label:"Managed Workplace",video:{thumb:"/it-workaholics/it-workaholics-managed-workplace-thumb.jpg",alt:"Diane",id:"0y1xbn9H4kU",headline:'"Die Kollegen lieben mich wieder!"'}},{label:"KI",video:{thumb:"/it-workaholics/it-workaholics-KI-thumb.jpg",alt:"Stefan",id:"fBT9uWXPpzM",headline:'"Der Workshop war für mich wie ein Sprung in die Zukunft!"'}},{label:"Ransomware",video:{thumb:"/it-workaholics/it-workaholics-ransomware-thumb.jpg",alt:"David",id:"vB90U93_xOU",headline:'"Dank glueckkanja fühle ich mich wie neugeboren und habe endlich wieder Freude an meiner Arbeit!"'}}],cta:{text:"Teste dein Stresslevel",href:"#anchor",link:!0}}};var w,f,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Unsere Workaholics-Cases',
      level: 'h2'
    },
    subline: 'Erfahre jetzt, wem wir schon alles helfen konnten!',
    tabs: [{
      label: 'Cloud',
      video: {
        thumb: '/it-workaholics/it-workaholics-cloud-thumb.jpg',
        alt: 'Rene',
        id: 'ADTnb8EUnz4',
        headline: '"Die ganze Last ist runter von meinen Schultern<br /> Jetzt ist wieder alles ganz federleicht!"'
      }
    }, {
      label: 'Managed Workplace',
      video: {
        thumb: '/it-workaholics/it-workaholics-managed-workplace-thumb.jpg',
        alt: 'Diane',
        id: '0y1xbn9H4kU',
        headline: '"Die Kollegen lieben mich wieder!"'
      }
    }, {
      label: 'KI',
      video: {
        thumb: '/it-workaholics/it-workaholics-KI-thumb.jpg',
        alt: 'Stefan',
        id: 'fBT9uWXPpzM',
        headline: '"Der Workshop war für mich wie ein Sprung in die Zukunft!"'
      }
    }, {
      label: 'Ransomware',
      video: {
        thumb: '/it-workaholics/it-workaholics-ransomware-thumb.jpg',
        alt: 'David',
        id: 'vB90U93_xOU',
        headline: '"Dank glueckkanja fühle ich mich wie neugeboren und habe endlich wieder Freude an meiner Arbeit!"'
      }
    }],
    cta: {
      text: 'Teste dein Stresslevel',
      href: '#anchor',
      link: true
    }
  }
}`,...(C=(f=u.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const _e=["VideoSlider"];export{u as VideoSlider,_e as __namedExportsOrder,me as default};
