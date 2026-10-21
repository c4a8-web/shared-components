import{_ as w}from"./Dbjosn9x.js";import{_ as v}from"./BeM_ocaS.js";import{_ as C}from"./BOV3asV6.js";import{_ as z}from"./DBSWsWx6.js";import{_ as k,c as l,b as n,n as a,d as s,a as M,f as S,w as A,T,o as c}from"./hHSgbJcN.js";import"./mbBm67Yn.js";import"./BzRxihbK.js";const f={tagName:"screenshot",computed:{style(){return{"background-color":this.bgColor}},leftValue(){return T.isTrue(this.left)}},props:{spacing:String,level:String,headline:String,copy:String,left:Boolean,bgColor:String,source:String,sourceCaption:String,image:Object,cloudinary:Boolean,alt:String,classes:String,list:Object}},B={class:"screenshot full-width-container vue-component"},R=["innerHTML"],F={key:0,class:"screenshot__list pt-4"};function V(j,o,e,N,E,t){const _=w,y=v,b=C,x=z;return c(),l("div",B,[n("div",{class:a(["screenshot__container container",e.spacing?e.spacing:null])},[n("div",{class:a(["row d-flex align-items-center",t.leftValue?"flex-row-reverse":null])},[n("div",{class:a(["col-lg-4 my-4 my-lg-0 py-4",t.leftValue?"offset-lg-1":null])},[s(_,{level:e.level,text:e.headline},null,8,["level","text"]),n("div",{class:"screenshot__copy",innerHTML:e.copy},null,8,R),e.list?(c(),l("div",F,[s(y,{text:e.list.ctaText,href:e.list.ctaHref,skin:e.list.skin,type:e.list.ctaType,target:e.list.target,external:e.list.external},null,8,["text","href","skin","type","target","external"])])):M("",!0)],2),n("div",{class:a(["screenshot__img d-flex align-items-center col-lg-7",t.leftValue?null:"offset-lg-1"]),style:S(t.style)},[s(x,{classes:"screenshot__img-frame media-viewer py-4",source:e.source,"source-caption":e.sourceCaption,alt:e.alt,cloudinary:e.cloudinary},{default:A(()=>[s(b,{img:e.image,alt:e.alt,cloudinary:e.cloudinary,class:"position-relative z-index-2"},null,8,["img","alt","cloudinary"]),o[0]||(o[0]=n("span",{class:"media-viewer-container"},[n("span",{class:"media-viewer-icon"},[n("i",{class:"fas fa-plus"})])],-1))]),_:1},8,["source","source-caption","alt","cloudinary"])],6)],2)],2)])}const P=k(f,[["render",V]]);f.__docgenInfo={exportName:"default",displayName:"screenshot",description:"",tags:{},props:[{name:"spacing",type:{name:"string"}},{name:"level",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"copy",type:{name:"string"}},{name:"left",type:{name:"boolean"}},{name:"bgColor",type:{name:"string"}},{name:"source",type:{name:"string"}},{name:"sourceCaption",type:{name:"string"}},{name:"image",type:{name:"object"}},{name:"cloudinary",type:{name:"boolean"}},{name:"alt",type:{name:"string"}},{name:"classes",type:{name:"string"}},{name:"list",type:{name:"object"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/screenshot.vue"]};const K={component:P,title:"Components/Screenshot"},i={args:{spacing:"space-top-3 space-bottom-2",image:"azure/cloud-trafo-assessment.png",source:"azure/cloud-trafo-assessment.png",sourceCaption:"Cloud Readiness Assessment",cloudinary:!0,alt:"Alt text 3",level:"h2",bgColor:"#fcd116",headline:"Cloud Readiness Assessment",copy:"Die Cloud Assessment-Funktion sammelt Daten über Anwendungen und ihren Tech-Stack, um die technische Bereitschaft, den Cloud Business Value und das Migrationsrisiko zu berechnen. Mit einem umfassenden Bewertungsprozess können Sie weitreichende Migrationsentscheidungen treffen, die das Migrationsrisiko deutlich reduzieren und gleichzeitig die Geschwindigkeit erhöhen."}},r={args:{image:"azure/reports-migration-waves.png",source:"azure/reports-migration-waves.png",sourceCaption:"Migration Roadmap Planning",left:!0,cloudinary:!0,alt:"Alt text 3",bgColor:"#5cbbff",level:"h2",headline:"Migration Roadmap Planning",copy:"Txture erfasst alle Anwendungen, die für einen Umzug in die Cloud in Frage kommen, und hilft Ihnen, deren Migration in Wellen zu planen. Es ist wichtig, Migrationen auf der Grundlage von Kriterien und Beziehungen zu planen. Txture macht es einfach herauszufinden, welche Anwendungen in denselben Rechenzentren betrieben werden und welche Anwendungen dieselben Cloud-Service-Provider haben, und empfiehlt dann ähnliche Migrationsstrategien und -wellen.",list:{ctaText:"Jump on the Phone",ctaHref:"javascript:void(0);",skin:"primary",ctaType:"button",target:"_blank",external:!0}}};var u,d,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    spacing: 'space-top-3 space-bottom-2',
    image: 'azure/cloud-trafo-assessment.png',
    source: 'azure/cloud-trafo-assessment.png',
    sourceCaption: 'Cloud Readiness Assessment',
    cloudinary: true,
    alt: 'Alt text 3',
    level: 'h2',
    bgColor: '#fcd116',
    headline: 'Cloud Readiness Assessment',
    copy: 'Die Cloud Assessment-Funktion sammelt Daten über Anwendungen und ihren Tech-Stack, um die technische Bereitschaft, den Cloud Business Value und das Migrationsrisiko zu berechnen. Mit einem umfassenden Bewertungsprozess können Sie weitreichende Migrationsentscheidungen treffen, die das Migrationsrisiko deutlich reduzieren und gleichzeitig die Geschwindigkeit erhöhen.'
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,h,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    image: 'azure/reports-migration-waves.png',
    source: 'azure/reports-migration-waves.png',
    sourceCaption: 'Migration Roadmap Planning',
    left: true,
    cloudinary: true,
    alt: 'Alt text 3',
    bgColor: '#5cbbff',
    level: 'h2',
    headline: 'Migration Roadmap Planning',
    copy: 'Txture erfasst alle Anwendungen, die für einen Umzug in die Cloud in Frage kommen, und hilft Ihnen, deren Migration in Wellen zu planen. Es ist wichtig, Migrationen auf der Grundlage von Kriterien und Beziehungen zu planen. Txture macht es einfach herauszufinden, welche Anwendungen in denselben Rechenzentren betrieben werden und welche Anwendungen dieselben Cloud-Service-Provider haben, und empfiehlt dann ähnliche Migrationsstrategien und -wellen.',
    list: {
      ctaText: 'Jump on the Phone',
      ctaHref: 'javascript:void(0);',
      skin: 'primary',
      ctaType: 'button',
      target: '_blank',
      external: true
    }
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const U=["Right","Left"];export{r as Left,i as Right,U as __namedExportsOrder,K as default};
