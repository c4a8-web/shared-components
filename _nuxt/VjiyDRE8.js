import{_ as Q}from"./Cel4Twc-.js";import{_ as H}from"./BOV3asV6.js";import{_ as X}from"./Dbjosn9x.js";import{_ as Y}from"./BeM_ocaS.js";import{_ as R,c as n,o as a,b as C,a as i,e as v,d as S,F as k,r as y,k as Z,l as $,f as B,n as F,t as ee,m as te}from"./hHSgbJcN.js";import{U as se}from"./DXsy6Cm4.js";import{l as ae}from"./_1vLXP-S.js";import"./BzRxihbK.js";import"./mbBm67Yn.js";const V={tagName:"feature-grid-item",computed:{classList(){return["feature-grid__item mb-3 fade-in-bottom",this.classes!==""?this.classes:"",this.centered?"is-centered":"","vue-component"]},style(){return`--utility-animation-index: ${this.index};`},image(){var e;return(e=this.item)==null?void 0:e.image},title(){var e;return(e=this.item)==null?void 0:e.title},headlineLevel(){var e;return(e=this.item)!=null&&e.level?this.item.level:"h3"},headlineClasses(){var s;const e="mb-2",c=(s=this.item)!=null&&s.classes?this.item.classes:"font-size-2 bold";return`${e} ${c}`},description(){var e;return(e=this.item)==null?void 0:e.description},copy(){var e;return(e=this.item)==null?void 0:e.copy},secondCopy(){var e;return(e=this.item)==null?void 0:e.copy_1},list(){var e;return(e=this.item)==null?void 0:e.list},secondList(){var e;return(e=this.item)==null?void 0:e.list_1},ctaClasses(){var s;if(!this.item.cta)return;const e="mt-5",c=((s=this.item)==null?void 0:s.cta.align)==="right"?"d-flex justify-content-end":"";return`${e} ${c}`}},methods:{},props:{classes:String,item:Object,index:Number,centered:Boolean}},ne={class:"bg-white d-flex flex-column h-100 py-5 px-3"},ie={key:0,class:"w-100 max-w-10rem mb-5 mx-auto"},re=["innerHTML"],ce=["innerHTML"],oe={key:4,class:"dashed m-0 flex-grow-1",style:{"margin-bottom":"10px !important"}},le=["innerHTML"],de=["innerHTML"],me={key:6,class:"dashed m-0 flex-grow-1"},ue=["innerHTML"],ge={key:7,class:"ctaClasses"};function fe(e,c,s,J,K,t){const p=H,_=X,h=Y;return a(),n("div",{class:F(t.classList),"data-utility-animation-step":"1",style:B(t.style)},[C("div",ne,[t.image?(a(),n("figure",ie,[S(p,{img:t.image.src,alt:t.image.alt,cloudinary:t.image.cloudinary},null,8,["img","alt","cloudinary"])])):i("",!0),t.title?(a(),v(_,{key:1,text:t.title,level:t.headlineLevel,classes:t.headlineClasses},null,8,["text","level","classes"])):i("",!0),t.description?(a(),n("p",{key:2,class:"mb-0",innerHTML:t.description},null,8,re)):i("",!0),t.copy?(a(),n("p",{key:3,class:"mb-0 font-size-sm d-flex",style:{"padding-bottom":"5px"},innerHTML:t.copy},null,8,ce)):i("",!0),t.list?(a(),n("ul",oe,[(a(!0),n(k,null,y(t.list,(o,r)=>(a(),n("li",{class:"feature-grid-item__text font-size-sm",innerHTML:o,key:r},null,8,le))),128))])):i("",!0),t.secondCopy?(a(),n("p",{key:5,class:"mb-0 font-size-sm d-flex",style:{"padding-bottom":"5px"},innerHTML:t.secondCopy},null,8,de)):i("",!0),t.secondList?(a(),n("ul",me,[(a(!0),n(k,null,y(t.secondList,(o,r)=>(a(),n("li",{class:"feature-grid-item__text font-size-sm",innerHTML:o,key:r},null,8,ue))),128))])):i("",!0),s.item.cta?(a(),n("div",ge,[S(h,Z($(s.item.cta)),null,16)])):i("",!0)])],6)}const pe=R(V,[["render",fe]]);V.__docgenInfo={exportName:"default",displayName:"feature-grid-item",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"item",type:{name:"object"}},{name:"index",type:{name:"number"}},{name:"centered",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-grid-item.vue"]};const q={tagName:"feature-grid",props:{backgroundColor:{type:String,default:"var(--color-bg-grey)"},description:String,headline:String,gridSize:{type:Number,default:4},image:Object,features:Array,footer:String,centered:Boolean,headlineClasses:String,headlineLevel:String,headlineRowClasses:String,spacing:{type:String,default:"space-top-2"}},mounted(){this.$refs.root&&se.init([this.$refs.root])},computed:{columnClass(){return"col-lg-"+12/this.gridSize},headlineRowClassesValue(){return["fade-in-bottom",this.headlineRowClasses?this.headlineRowClasses:null].join(" ")},containerClasses(){return["container",this.spacing]},styleObject(){return{backgroundColor:this.backgroundColor}}}},_e={key:1,class:"feature-grid__description w-lg-50 text-center mt-3 mx-auto"},he={key:2,class:"feature-grid__figure d-flex mt-8 justify-content-center fade-in-bottom","data-utility-animation-step":"1"},Ce={key:3,class:"my-8"},ve={class:"d-flex flex-wrap"},Se=["innerHTML"];function ke(e,c,s,J,K,t){const p=Q,_=H,h=pe;return a(),n("div",{class:"feature-grid utility-animation py-7",style:B(t.styleObject),ref:"root"},[C("div",{class:F(t.containerClasses)},[s.headline?(a(),v(p,{key:0,text:s.headline,centered:!0,headlineClasses:s.headlineClasses,classes:t.headlineRowClassesValue,utilityAnimationStep:"1",noContainer:!0,level:s.headlineLevel,spacing:""},null,8,["text","headlineClasses","classes","level"])):i("",!0),s.description?(a(),n("p",_e,ee(s.description),1)):i("",!0),s.image?(a(),n("figure",he,[S(_,te(s.image,{img:s.image.src,class:"feature-grid__image"}),null,16,["img"])])):i("",!0),s.features?(a(),n("div",Ce,[C("div",ve,[(a(!0),n(k,null,y(s.features,(o,r)=>(a(),v(h,{key:r,classes:t.columnClass,index:r+1,item:o,centered:s.centered},null,8,["classes","index","item","centered"]))),128))])])):i("",!0),s.footer?(a(),n("div",{key:4,class:"container pb-6",innerHTML:s.footer},null,8,Se)):i("",!0)],2)],4)}const ye=R(q,[["render",ke]]);q.__docgenInfo={exportName:"default",displayName:"feature-grid",description:"",tags:{},props:[{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-bg-grey)'"}},{name:"description",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"gridSize",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"image",type:{name:"object"}},{name:"features",type:{name:"array"}},{name:"footer",type:{name:"string"}},{name:"centered",type:{name:"boolean"}},{name:"headlineClasses",type:{name:"string"}},{name:"headlineLevel",type:{name:"string"}},{name:"headlineRowClasses",type:{name:"string"}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"'space-top-2'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-grid.vue"]};const De={component:ye,argTypes:{centered:{description:"Toggle to center feature Grid",type:"boolean"},spacing:{description:"Adds helper classes for the spacing",control:{type:"text"},type:{summary:"Bootstrap Spacing",detail:"space-bottom-1, space-bottom-2, space-top-1, space-top-2"}}},title:"Components/Feature Grid"},l={args:{headline:"Specifications",features:[{title:"Contact Sources",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"/assets/svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"/assets/svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},d={args:{image:{src:"assets/img/image-placeholder-1.jpg",alt:"lorem ipsum dolor sit amet"},headline:"Specifications",headlineClasses:"h4-font-size",features:[{title:"Contact Sources",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"/assets/svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"/assets/svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},copy:"lorem ipsum dolor sit amet",list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>'],copy_1:"Provide an easy to use web interface for your help desk staff",list_1:["Leverage the power of Intune in your help desk",'Execute important tasks with "just a click"',"Integration of remote support tools and help desk tickets"]}]}},m={args:{centered:!0,headline:"Specifications",features:[{title:"Contact Sources",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"],cta:{text:"With Button",skin:"primary is-cutoff",href:"javascript:void(0)"}},{title:"Contact Card",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"/assets/svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"/assets/svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},u={args:{image:{alt:"lorem ipsum dolor sit amet",lottie:ae},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"/assets/svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"/assets/svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},g={args:{image:{imgSrcSets:{srcSets:[{src:"/assets/svg/products/desktop.svg",media:"(min-width: 765px) and (orientation:landscape)"},{src:"/assets/svg/products/mobile.svg"}]}},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"/assets/svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"/assets/svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},f={args:{image:{src:"/assets/svg/products/desktop.svg"},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"/assets/svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"/assets/svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"/assets/svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}};var T,x,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    headline: 'Specifications',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var O,P,b;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    image: {
      src: 'assets/img/image-placeholder-1.jpg',
      alt: 'lorem ipsum dolor sit amet'
    },
    headline: 'Specifications',
    headlineClasses: 'h4-font-size',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      copy: 'lorem ipsum dolor sit amet',
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>'],
      copy_1: 'Provide an easy to use web interface for your help desk staff',
      list_1: ['Leverage the power of Intune in your help desk', 'Execute important tasks with "just a click"', 'Integration of remote support tools and help desk tickets']
    }]
  }
}`,...(b=(P=d.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var w,z,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    centered: true,
    headline: 'Specifications',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
      cta: {
        text: 'With Button',
        skin: 'primary is-cutoff',
        href: 'javascript:void(0)'
      }
    }, {
      title: 'Contact Card',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var D,W,j;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    image: {
      alt: 'lorem ipsum dolor sit amet',
      lottie: lottie1
    },
    headline: 'Specifications',
    headlineRowClasses: 'text-left',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var U,L,N;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    image: {
      imgSrcSets: {
        srcSets: [{
          src: '/assets/svg/products/desktop.svg',
          media: '(min-width: 765px) and (orientation:landscape)'
        }, {
          src: '/assets/svg/products/mobile.svg'
        }]
      }
    },
    headline: 'Specifications',
    headlineRowClasses: 'text-left',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,E,G;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    image: {
      src: '/assets/svg/products/desktop.svg'
    },
    headline: 'Specifications',
    headlineRowClasses: 'text-left',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '/assets/svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(G=(E=f.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const We=["Default","WithImageAndH4FontSize","Centered","WithAnimation","WithImgSrcSet","WithNoHeight"];export{m as Centered,l as Default,u as WithAnimation,d as WithImageAndH4FontSize,g as WithImgSrcSet,f as WithNoHeight,We as __namedExportsOrder,De as default};
