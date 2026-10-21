import{_ as S}from"./Dbjosn9x.js";import{V as z}from"./C42LJNCw.js";import{_ as E}from"./BOV3asV6.js";import{_ as D}from"./BeM_ocaS.js";import{U as T}from"./DXsy6Cm4.js";import{_ as K,c as U,b as t,d as a,t as d,n as R,o as w}from"./hHSgbJcN.js";import"./DBSWsWx6.js";import"./mbBm67Yn.js";import"./C3GnLu25.js";import"./BzRxihbK.js";const x={tagName:"teaser",props:{ctaText:String,ctaHref:String,type:String,link:String,target:String,ctaExternal:String,thumb:String,alt:String,id:String,headline:String,headlineClasses:String,overline:String,logo:String,logoAlt:String,text:String,textHtml:{type:Boolean,default:!1},preset:{type:String,default:"teaser"},spacing:String},computed:{classList(){return["teaser","utility-animation",this.logo?"":"teaser--no-img",this.spacing,this.id?"teaser--has-video":"hover__parent"]},computedText(){return!this.textHtml&&this.text?this.text.replace(/<[^>]*>/g,""):this.text},headlineClassesWithDefault(){return(this.headlineClasses||"")+" teaser__headline fade-in-bottom"}},mounted(){this.$refs.root&&T.init([this.$refs.root])},methods:{handleClick(){if(!this.id){const i=this.$el.querySelector(".teaser__cta a");i&&i.click()}}}},H={class:"container"},V={class:"row"},I={class:"teaser__row col"},O={class:"teaser__overline fade-in-bottom","data-utility-animation-step":"1"},F={class:"teaser__video-wrapper fade-in-bottom","data-utility-animation-step":"1"},N={class:"teaser__logo fade-in-bottom","data-utility-animation-step":"1"},J={class:"teaser__text font-size-2 fade-in-bottom","data-utility-animation-step":"1"},Z={class:"teaser__cta fade-in-bottom","data-utility-animation-step":"1"};function B(i,l,e,W,q,n){const C=S,b=z,v=E,k=D;return w(),U("div",{class:R(n.classList),onClick:l[0]||(l[0]=(...A)=>n.handleClick&&n.handleClick(...A)),ref:"root"},[t("div",H,[t("div",V,[t("div",I,[t("span",O,d(e.overline),1),a(C,{text:e.headline,level:"h2",classes:n.headlineClassesWithDefault,utilityAnimationStep:1},null,8,["text","classes"]),t("div",F,[a(b,{id:e.id,thumb:e.thumb,alt:e.alt,preset:e.preset},null,8,["id","thumb","alt","preset"])]),t("div",N,[a(v,{img:e.logo,cloudinary:!0,alt:e.logoAlt},null,8,["img","alt"])]),t("div",J,d(n.computedText),1),t("div",Z,[a(k,{text:e.ctaText,href:e.ctaHref,link:e.link,target:e.target,type:e.type,width:"w-100 w-md-auto",external:e.ctaExternal},null,8,["text","href","link","target","type","external"])])])])])],2)}const L=K(x,[["render",B]]);x.__docgenInfo={exportName:"default",displayName:"teaser",description:"",tags:{},props:[{name:"ctaText",type:{name:"string"}},{name:"ctaHref",type:{name:"string"}},{name:"type",type:{name:"string"}},{name:"link",type:{name:"string"}},{name:"target",type:{name:"string"}},{name:"ctaExternal",type:{name:"string"}},{name:"thumb",type:{name:"string"}},{name:"alt",type:{name:"string"}},{name:"id",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"headlineClasses",type:{name:"string"}},{name:"overline",type:{name:"string"}},{name:"logo",type:{name:"string"}},{name:"logoAlt",type:{name:"string"}},{name:"text",type:{name:"string"}},{name:"textHtml",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"preset",type:{name:"string"},defaultValue:{func:!1,value:"'teaser'"}},{name:"spacing",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/teaser.vue"]};const ne={title:"Components/Teaser",component:L},s={args:{ctaText:"Case Study ansehen",ctaHref:"",type:"button",target:"_blank",thumb:"shared-components/teaser-dekra.png",alt:"Video Casestudy Uniper",id:"ThxpyUOz2R8",headline:"Azure @ DEKRA",overline:"Zufriedene Kunden",logo:"h_40,w_140/shared-components/teaser-dekra-logo.png",logoAlt:"alt logo",text:"Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)"}},r={args:{ctaText:"Case Study ansehen",ctaHref:"",type:"button",target:"_blank",thumb:"shared-components/teaser-dekra.png",alt:"Video Casestudy Uniper",headline:"Azure @ DEKRA",overline:"Zufriedene Kunden",logo:"h_40,w_140/shared-components/teaser-dekra-logo.png",logoAlt:"alt logo",text:"Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)"}},o={args:{ctaText:"Case Study ansehen",ctaHref:"",type:"button",target:"_blank",thumb:"shared-components/teaser-dekra.png",alt:"Video Casestudy Uniper",id:"ThxpyUOz2R8",headline:"Azure @ DEKRA",headlineClasses:"h3-font-size",overline:"Zufriedene Kunden",logo:"h_40,w_140/shared-components/teaser-dekra-logo.png",logoAlt:"alt logo",text:"Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)"}};var m,u,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ctaText: 'Case Study ansehen',
    ctaHref: '',
    type: 'button',
    target: '_blank',
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
    headline: 'Azure @ DEKRA',
    overline: 'Zufriedene Kunden',
    logo: 'h_40,w_140/shared-components/teaser-dekra-logo.png',
    logoAlt: 'alt logo',
    text: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)'
  }
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,p,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ctaText: 'Case Study ansehen',
    ctaHref: '',
    type: 'button',
    target: '_blank',
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    headline: 'Azure @ DEKRA',
    overline: 'Zufriedene Kunden',
    logo: 'h_40,w_140/shared-components/teaser-dekra-logo.png',
    logoAlt: 'alt logo',
    text: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)'
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var _,f,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ctaText: 'Case Study ansehen',
    ctaHref: '',
    type: 'button',
    target: '_blank',
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
    headline: 'Azure @ DEKRA',
    headlineClasses: 'h3-font-size',
    overline: 'Zufriedene Kunden',
    logo: 'h_40,w_140/shared-components/teaser-dekra-logo.png',
    logoAlt: 'alt logo',
    text: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)'
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ae=["Teaser","TeaserNoVideo","Headline"];export{o as Headline,s as Teaser,r as TeaserNoVideo,ae as __namedExportsOrder,ne as default};
