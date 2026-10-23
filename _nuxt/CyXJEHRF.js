import{_ as S}from"./D8DpVsr-.js";import{_ as w}from"./Bo3mZvBG.js";import{_ as j}from"./CU4Hs53D.js";import{_ as H}from"./BUWw9eUD.js";import{_ as E}from"./CMtOK7Wv.js";import{_ as M,c as o,e as d,a as g,b as t,w as z,m as h,d as i,g as T,k as B,l as P,F as p,r as u,f as V,n as L,o as n}from"./CxlEFrmm.js";import"./BdDtwVcA.js";import"./Dq3WPmkH.js";import"./-_gES4nC.js";const x={tagName:"location-section",props:{classes:String,overline:String,headline:String,locationHeadline:String,contactHeadline:String,locationEntries:Object,locationCta:Object,contactEntries:Array,landingpageCta:Object,images:Array,backgroundColor:{type:String,default:"transparent"}},computed:{imgSrcSets(){return{srcSets:[{params:"c_fill,ar_16:10"}]}},classList(){return this.classes?this.classes:"mb-5 pb-11"},sliderImages(){if(!this.images||this.images.length===0)return[];const m=8;if(this.images.length>=m)return this.images;const c=[];for(;c.length<m;)c.push(...this.images);return c},sliderConfig(){return{hideContainer:!0,hideBackground:!0,options:{navigation:!0,controlsClass:"slider__controls--full-width",loop:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:10},576:{slidesPerView:1.5,spaceBetween:10},992:{slidesPerView:2.5,spaceBetween:10},1200:{slidesPerView:4,spaceBetween:20}}}}}}},N={class:"location-section__slider-image-wrapper"},A={class:"location-section__content container pt-lg-8 pt-5"},F={class:"col-12 pb-5 d-flex justify-content-between"},K={key:0,class:"d-flex align-items-center"},D={class:"col-12 d-flex pt-2 flex-wrap row-cols-lg-3 row-cols-1"},R={class:"d-flex flex-column"},I={class:"font-size-1 py-1"},G={class:"d-flex align-items-start"},J=["innerHTML"],q={class:"d-flex flex-column"},Q={class:"font-size-1"},U={class:"d-flex align-items-start my-n1"},W=["innerHTML"];function X(m,c,e,Z,$,s){const k=S,C=w,r=j,f=H,_=E;return n(),o("div",{class:L([s.classList,"location-section"]),style:V({backgroundColor:e.backgroundColor})},[e.images&&e.images.length>0?(n(),d(C,h({key:0},s.sliderConfig,{v2:!0}),{default:z(()=>[(n(!0),o(p,null,u(s.sliderImages,(a,O)=>(n(),o("div",N,[(n(),d(k,{key:O,cloudinary:a.cloudinary,img:a.img,imgSrcSets:a.srcSets||s.imgSrcSets,class:"location-section__slider-image"},null,8,["cloudinary","img","imgSrcSets"]))]))),256))]),_:1},16)):g("",!0),t("div",A,[t("div",F,[t("div",null,[i(r,{level:"h5",text:e.overline},null,8,["text"]),c[0]||(c[0]=T()),i(r,{level:"h3",text:e.headline},null,8,["text"])]),e.landingpageCta?(n(),o("div",K,[i(f,B(P(e.landingpageCta)),null,16)])):g("",!0)]),t("div",D,[t("div",R,[i(r,{level:"h5",class:"pv-2",text:e.locationHeadline},null,8,["text"]),(n(!0),o(p,null,u(e.locationEntries,a=>(n(),o("div",I,[t("div",G,[i(_,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),t("p",{innerHTML:a.content},null,8,J)])]))),256))]),t("div",q,[i(r,{level:"h5",class:"pb-2",text:e.contactHeadline},null,8,["text"]),(n(!0),o(p,null,u(e.contactEntries,a=>(n(),o("div",Q,[t("div",U,[i(_,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),t("p",{innerHTML:a.content},null,8,W)])]))),256))])]),e.locationCta?(n(),d(f,h({key:0},e.locationCta,{class:"col-12 pt-3 pt-lg-0"}),null,16)):g("",!0)])],6)}const Y=M(x,[["render",X]]);x.__docgenInfo={exportName:"default",displayName:"location-section",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"overline",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"locationHeadline",type:{name:"string"}},{name:"contactHeadline",type:{name:"string"}},{name:"locationEntries",type:{name:"object"}},{name:"locationCta",type:{name:"object"}},{name:"contactEntries",type:{name:"array"}},{name:"landingpageCta",type:{name:"object"}},{name:"images",type:{name:"array"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'transparent'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/location-section.vue"]};const le={component:Y,title:"Components/LocationSection"},l={args:{overline:"Hauptsitz",headline:"Offenbach am Main",location:{street:"Kaiserstraße 39",city:"Offenbach am Main",office:"Hauptsitz"},contactHeadline:"Kontakt",contactEntries:[{icon:"phone",content:"+49 69 4005520"},{icon:"email-action-unread",content:"info@glueckkanja.com"}],locationHeadline:"Adresse",locationEntries:[{icon:"pin",content:"Kaiserstraße 39 <br /> 63065 Offenbach am Main"},{icon:"charging-station",content:"E-Tankstellen in der <br /> Tiefgarage verfügbar"}],locationCta:{text:"Anfahrt und Parken",href:"/",link:!0,reversed:!0},landingpageCta:{text:"Mehr erfahren",href:"/"},images:[{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg"}]}};var y,v,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    overline: 'Hauptsitz',
    headline: 'Offenbach am Main',
    location: {
      street: 'Kaiserstraße 39',
      city: 'Offenbach am Main',
      office: 'Hauptsitz'
    },
    contactHeadline: 'Kontakt',
    contactEntries: [{
      icon: 'phone',
      content: '+49 69 4005520'
    }, {
      icon: 'email-action-unread',
      content: 'info@glueckkanja.com'
    }],
    locationHeadline: 'Adresse',
    locationEntries: [{
      icon: 'pin',
      content: 'Kaiserstraße 39 <br /> 63065 Offenbach am Main'
    }, {
      icon: 'charging-station',
      content: 'E-Tankstellen in der <br /> Tiefgarage verfügbar'
    }],
    locationCta: {
      text: 'Anfahrt und Parken',
      href: "/",
      link: true,
      reversed: true
    },
    landingpageCta: {
      text: 'Mehr erfahren',
      href: '/'
    },
    images: [{
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg'
    }]
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const me=["Default"];export{l as Default,me as __namedExportsOrder,le as default};
