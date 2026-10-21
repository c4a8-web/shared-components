import{_ as H}from"./Dbjosn9x.js";import{_ as D}from"./BOV3asV6.js";import{_ as I,c as l,o as i,d as w,f as v,T as g,b as t,a as m,n as h,t as x,F as S,r as O,e as k}from"./hHSgbJcN.js";import{_ as j}from"./BeM_ocaS.js";import{_ as $}from"./mbBm67Yn.js";import{U as q}from"./DXsy6Cm4.js";import"./BzRxihbK.js";const M={tagName:"img-filter",props:{img:String,alt:String,cloudinary:{default:null},lazy:Boolean,classes:String,color:String},computed:{cloudinaryValue(){return g.isTrue(this.cloudinary)},colorValue(){return this.color?this.color:"#000520"},svgFilter(){const s=parseFloat((g.red(this.colorValue)/255).toFixed(5)),o=parseFloat((g.green(this.colorValue)/255).toFixed(5)),e=parseFloat((g.blue(this.colorValue)/255).toFixed(5)),c=1,y=Math.max(s,o,e),r=Math.min(s,o,e),a=100*(y+r)/2+"%",d="img-to-color";return`
        filter: saturate(0%) brightness(0%) invert(${a}) opacity(${c});
        filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg">          <filter id="${d}" color-interpolation-filters="sRGB">            <feColorMatrix type="matrix" values="              0 0 0 0 ${s}              0 0 0 0 ${o}              0 0 0 0 ${e}              0 0 0 ${c} 0            "/>          </filter>        </svg>
 #${d}')
      `}}};function J(s,o,e,c,y,r){const a=D;return i(),l("div",{class:"img-filter vue-component",style:v(r.svgFilter)},[w(a,{img:e.img,alt:e.alt,cloudinary:r.cloudinaryValue,lazy:e.lazy},null,8,["img","alt","cloudinary","lazy"])],4)}const Z=I(M,[["render",J],["__scopeId","data-v-e7d89a68"]]);M.__docgenInfo={exportName:"default",displayName:"img-filter",description:"",tags:{},props:[{name:"img",type:{name:"string"}},{name:"alt",type:{name:"string"}},{name:"cloudinary",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"lazy",type:{name:"boolean"}},{name:"classes",type:{name:"string"}},{name:"color",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/img-filter.vue"]};const G={tagName:"step-list",props:{background:{type:String,default:"var(--color-primary-accent)"},color:{type:String,default:"var(--color-copy-light)"},accentColor:String,accentLightText:{type:Boolean,default:!1},headline:{type:Object,default:null},subline:{type:String,default:""},list:{type:Array,required:!0},variant:{type:String,default:null},sticky:{type:Boolean,default:!1}},mounted(){this.$refs.root&&(q.init([this.$refs.root]),this.accentColor&&this.$refs.root.style.setProperty("--color-step-list-highlight",this.accentColor),this.$refs.root.style.setProperty("--color-step-list-highlight-copy",this.accentLightText?"var(--color-copy-light)":"var(--color-step-list-override-copy, var(--color-copy))"))},methods:{animationIndex(s,o=!1){return s*2+(o?2:1)}}},Q={class:"container"},X={key:0,class:"step-list__header row fade-in-bottom","data-utility-animation-step":"1"},Y={class:"step-list__subline font-size-2"},ee={class:"row"},ne={class:"col-lg-12"},te={class:"step-list__list"},ie=["data-content"],se={key:0,class:"step-list__counter-icon"},oe={class:"step-list__title step-list__title--no-small"},le={class:"step-list__title step-list__title--no-default"},re=["innerHTML"];function ae(s,o,e,c,y,r){const a=H,d=Z,N=D,U=j,R=$;return i(),l("div",{ref:"root",class:h(["step-list utility-animation",[e.sticky?"is-sticky-scroller":"",e.variant?"step-list--"+e.variant:""]]),style:v(e.variant?null:{"--step-list-background":e.background,"--step-list-color":e.color})},[t("div",Q,[e.headline?(i(),l("div",X,[t("div",{class:h(["col",e.variant?"":"col-lg-8"])},[w(a,{text:e.headline.text,level:e.headline.level,classes:e.headline.classes+" step-list__headline"},null,8,["text","level","classes"]),t("div",Y,x(e.subline),1)],2)])):m("",!0),t("div",ee,[t("div",ne,[t("ul",te,[(i(!0),l(S,null,O(e.list,(n,u)=>(i(),l(S,{key:u},[t("li",{class:"step-list__list-element font-size-2 fade-in-bottom","data-utility-animation-step":"1",style:v(`--utility-animation-index: ${u+1};
                color: ${e.accentColor}`)},[t("div",{class:h(["step-list__counter",[n.step||n.img?"step-list__counter--manual":"",n.overlapping?"step-list__counter--overlapping":""]]),"data-content":n.step||""},[n.img?(i(),l("div",se,[n.tint?(i(),k(d,{key:0,img:n.img,cloudinary:n.cloudinary,alt:n.alt},null,8,["img","cloudinary","alt"])):(i(),k(N,{key:1,src:n.img,alt:n.alt},null,8,["src","alt"]))])):m("",!0)],10,ie),t("div",oe,x(n.title),1),t("div",{class:h(["step-list__content font-size-1",e.variant?"":"light"])},[t("div",le,x(n.title),1),t("div",{innerHTML:n.content},null,8,re),n.ctaText?(i(),k(U,{key:0,text:n.ctaText,href:n.ctaHref,link:n.link,target:n.target,type:n.type},null,8,["text","href","link","target","type"])):m("",!0)],2)],4),u<e.list.length-1?(i(),l("li",{key:0,class:"step-list__icon fade-in-bottom","data-utility-animation-step":"1",style:v(`--utility-animation-index: ${u+2}`)},[w(R,{icon:"arrow-narrow",color:e.accentColor||"var(--color-step-list-highlight)"},null,8,["color"])],4)):m("",!0)],64))),128))])])])])],6)}const ce=I(G,[["render",ae]]);G.__docgenInfo={exportName:"default",displayName:"step-list",description:"",tags:{},props:[{name:"background",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-primary-accent)'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-copy-light)'"}},{name:"accentColor",type:{name:"string"}},{name:"accentLightText",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headline",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"subline",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"list",type:{name:"array"},required:!0},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/step-list.vue"]};const _e={title:"Components/Step List",component:ce},p={args:{headline:{text:"Unser Bewerbungsprozess",level:"h3"},subline:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",list:[{title:"Lorem ipsum dolor",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie"},{title:"Sit amet, consectet",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."},{title:"Lorem ipsum dolor sit",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie"}]}},f={args:{accentColor:"var(--color-gk-mid-blue)",accentLightText:!0,background:"var(--color-gk-white)",color:"var(--color-black)",headline:{text:"Unser Bewerbungsprozess",level:"h3"},subline:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",list:[{title:"Lorem ipsum dolor",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie"},{title:"Sit amet, consectet",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."},{title:"Lorem ipsum dolor sit",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie"}]}},_={args:{variant:"small",headline:{text:"Experiencing & Pilot Package",level:"h2"},list:[{title:"Envisioning & Experience Workshop",content:'<ul class="dashed"> <li>AVD Architektur</li> <li>Roadmap Implementierung</li> <li>Lizenzierung</li> <li>Bewertung Benutzer & Apps (limitiert auf 3-5 Apps)</li> <li>Prod. Anforderungen & Governance</li> <li>Überprüfung des aktuellen Azure Footprint</li> <li><strong><span class="highlight-yellow">Konzept Po</span>werPoint</strong></li> </ul>'},{title:"Pilot Implementaion",content:'<ul class="dashed"> <li>Pilot AVD Implementierung</li> <li>Manuelle Einrichtung eines Multisession Images mit 3 Geschäftsanwendungen</li> <li>Setup auf Basis von Best Practices für AVD Security & Networking</li> <li>Standard AVD Policies (GPOs)</li> <li>Automatische AVD Herunterskalierung</li> <li><strong>Ideal zum Te<span class="highlight-yellow">sten von Erfahrun</span>gen und Leistungen</strong></li> </ul>'},{step:99,title:"Roadmap to Production",content:'<ul class="dashed"> <li><strong>Ro<span class="highlight-yellow">admap zum produktiven</span> Einsatz</strong></li> <li>Präsentation der Pilot- und Testergebnisse</li> <li>Überprüfung zusätzlicher Geschäftsanwendungen</li> <li>Prozess Diskussion zu:</li> <ul class="dashed"> <li>Updates (OS & Apps)</li> <li>Monitoring</li> <li>Printing</li> </ul> </ul>'}]}},b={args:{variant:"small",list:[{img:"assets/svg/icons/icon-hand.svg",tint:!0,alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Anmelden",content:"10. - 12.11.2021",ctaText:"Jetzt registrieren",ctaHref:"https://www.eventbrite.de/e/138562252427",link:!0},{img:"assets/svg/icons/icon-consulting-services.svg",alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Wo",content:"Remote per Teams Meeting"},{img:"assets/svg/icons/phone-mail.svg",tint:!0,alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Gebühr",content:"1300,00 € pro Teilnehmer<br/>(200,00 € Discount bei laufenden Projekten oder ab zwei Teilnehmern eines Unternehmens)"},{img:"assets/svg/icons/icon-checklist-write.svg",overlapping:!0,alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Zielgruppe",content:"Windows Client Architekten, Cloud Architekten, SCCM Spezialisten"}]}};var z,A,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Unser Bewerbungsprozess',
      level: 'h3'
    },
    subline: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
    list: [{
      title: 'Lorem ipsum dolor',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie'
    }, {
      title: 'Sit amet, consectet',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.'
    }, {
      title: 'Lorem ipsum dolor sit',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie'
    }]
  }
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var V,W,L;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    accentColor: 'var(--color-gk-mid-blue)',
    accentLightText: true,
    background: 'var(--color-gk-white)',
    color: 'var(--color-black)',
    headline: {
      text: 'Unser Bewerbungsprozess',
      level: 'h3'
    },
    subline: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
    list: [{
      title: 'Lorem ipsum dolor',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie'
    }, {
      title: 'Sit amet, consectet',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.'
    }, {
      title: 'Lorem ipsum dolor sit',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie'
    }]
  }
}`,...(L=(W=f.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var C,P,F;_.parameters={..._.parameters,docs:{...(C=_.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    headline: {
      text: 'Experiencing & Pilot Package',
      level: 'h2'
    },
    list: [{
      title: 'Envisioning & Experience Workshop',
      content: '<ul class="dashed"> <li>AVD Architektur</li> <li>Roadmap Implementierung</li> <li>Lizenzierung</li> <li>Bewertung Benutzer & Apps (limitiert auf 3-5 Apps)</li> <li>Prod. Anforderungen & Governance</li> <li>Überprüfung des aktuellen Azure Footprint</li> <li><strong><span class="highlight-yellow">Konzept Po</span>werPoint</strong></li> </ul>'
    }, {
      title: 'Pilot Implementaion',
      content: '<ul class="dashed"> <li>Pilot AVD Implementierung</li> <li>Manuelle Einrichtung eines Multisession Images mit 3 Geschäftsanwendungen</li> <li>Setup auf Basis von Best Practices für AVD Security & Networking</li> <li>Standard AVD Policies (GPOs)</li> <li>Automatische AVD Herunterskalierung</li> <li><strong>Ideal zum Te<span class="highlight-yellow">sten von Erfahrun</span>gen und Leistungen</strong></li> </ul>'
    }, {
      step: 99,
      title: 'Roadmap to Production',
      content: '<ul class="dashed"> <li><strong>Ro<span class="highlight-yellow">admap zum produktiven</span> Einsatz</strong></li> <li>Präsentation der Pilot- und Testergebnisse</li> <li>Überprüfung zusätzlicher Geschäftsanwendungen</li> <li>Prozess Diskussion zu:</li> <ul class="dashed"> <li>Updates (OS & Apps)</li> <li>Monitoring</li> <li>Printing</li> </ul> </ul>'
    }]
  }
}`,...(F=(P=_.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var E,K,T;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    list: [{
      img: 'assets/svg/icons/icon-hand.svg',
      tint: true,
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Anmelden',
      content: '10. - 12.11.2021',
      ctaText: 'Jetzt registrieren',
      ctaHref: 'https://www.eventbrite.de/e/138562252427',
      link: true
    }, {
      img: 'assets/svg/icons/icon-consulting-services.svg',
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Wo',
      content: 'Remote per Teams Meeting'
    }, {
      img: 'assets/svg/icons/phone-mail.svg',
      tint: true,
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Gebühr',
      content: '1300,00 € pro Teilnehmer<br/>(200,00 € Discount bei laufenden Projekten oder ab zwei Teilnehmern eines Unternehmens)'
    }, {
      img: 'assets/svg/icons/icon-checklist-write.svg',
      overlapping: true,
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Zielgruppe',
      content: 'Windows Client Architekten, Cloud Architekten, SCCM Spezialisten'
    }]
  }
}`,...(T=(K=b.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};const be=["Default","CustomAccentColor","Small","SmallWithIcons"];export{f as CustomAccentColor,p as Default,_ as Small,b as SmallWithIcons,be as __namedExportsOrder,_e as default};
