import{_ as z}from"./Dbjosn9x.js";import{_ as A}from"./BOV3asV6.js";import{_ as M,c as n,b as s,a as t,n as d,d as c,t as g,F as h,r as f,o as a}from"./hHSgbJcN.js";import"./BzRxihbK.js";const x={tagName:"awards",props:{awards:{type:Object,required:!0},level:{type:String,default:"h3"},visualOnly:{type:Boolean,default:!1},cols:{type:Number,default:3},classes:{type:String,default:"mt-8 mt-lg-10 space-bottom-2"}},computed:{awardsColsValue(){return this.visualOnly?"col-lg-12 justify-content-center":"col-lg-6"},awardsCol(){return Math.floor(12/this.cols)},headlineClasses(){return`${this.awards.headlineClasses||"h2-font-size"} awards__headline`}}},k={class:"container"},E={class:"row"},F={class:"awards__header d-flex"},I={key:0,class:"my-2 font-size-2"},O={key:1,class:"mt-6 w-lg-75"},P={key:0,class:"col-lg-6 pt-8"},j={key:0,class:"row"},N={class:"mb-3 ml-1"};function V(C,T,e,B,H,o){const S=z,m=A;return a(),n("div",{class:d(["awards",e.classes])},[s("div",k,[s("div",E,[s("div",{class:d(o.awardsColsValue)},[s("div",F,[c(S,{level:e.level,text:e.awards.headline,classes:o.headlineClasses},null,8,["level","text","classes"])]),e.visualOnly?t("",!0):(a(),n("p",I,g(e.awards.subline),1)),e.visualOnly?t("",!0):(a(),n("p",O,g(e.awards.text),1))],2),e.visualOnly?t("",!0):(a(),n("div",P,[(a(!0),n(h,null,f(e.awards.images,(r,u)=>(a(),n("div",{class:"mb-3 ml-lg-4 w-md-75",key:u},[c(m,{img:r.image,alt:r.alt,cloudinary:!0},null,8,["img","alt"])]))),128))]))]),e.visualOnly?(a(),n("div",j,[(a(!0),n(h,null,f(e.awards.images,(r,u)=>(a(),n("div",{class:d(`col-lg-${o.awardsCol} pt-8`),key:u},[s("div",N,[c(m,{img:r.image,alt:r.alt,cloudinary:!0},null,8,["img","alt"])])],2))),128))])):t("",!0)])],2)}const D=M(x,[["render",V]]);x.__docgenInfo={exportName:"default",displayName:"awards",description:"",tags:{},props:[{name:"awards",type:{name:"object"},required:!0},{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'h3'"}},{name:"visualOnly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"cols",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"'mt-8 mt-lg-10 space-bottom-2'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/awards.vue"]};const W={component:D,argTypes:{awards:{description:"Award Object contains various Elements",type:"object"},level:{description:"Headline Level",type:"string"},visualOnly:{description:"Only Shows Visuals",type:"boolean"},cols:{description:"Amount of Columns",type:"number"}},title:"Components/Awards"},i={args:{visualOnly:!0,awards:{icon:"svg/award-star.svg",alt:"award alt",headline:"Auszeichnungen und Preise",subline:"Holen Sie den maximalen Nutzen aus der Cloud für Ihr Unternehmen und profitieren Sie von dem fundierten Wissen und der langjährigen Erfahrung unserer glueckkanja Experten.",text:"Mit unseren mehrfachen Microsoft Gold Kompetenzen, unserer Auszeichnung als Microsoft Security 20/20 Award Finalist für Security Advisory und mehrfachen Microsoft Partner of the Year Auszeichnungen können wir alle Microsoft Cloud Technologien mit weit überdurchschnittlicher Expertise und Erfahrung anbieten. Daher sind wir der ideale Partner für den Betrieb und die Überwachung Ihrer Microsoft 365 und Azure basierten Infrastruktur.",images:[{image:"logos/msft-misa-mxdr.png",alt:"Advanced Specialization Threat Protection"},{image:"logos/msft-advanced-specialization-security.png",alt:"MISA Member"},{image:"logos/div-cyberwehr.png",alt:"star"},{image:"logos/isg-2021CyberSecurityRisingStar.png",alt:"star"}]}}},l={args:{cols:4,visualOnly:!0,awards:{icon:"svg/award-star.svg",alt:"award alt",headline:"Auszeichnungen und Preise",headlineClasses:"h3-font-size",subline:"Holen Sie den maximalen Nutzen aus der Cloud für Ihr Unternehmen und profitieren Sie von dem fundierten Wissen und der langjährigen Erfahrung unserer glueckkanja Experten.",text:"Mit unseren mehrfachen Microsoft Gold Kompetenzen, unserer Auszeichnung als Microsoft Security 20/20 Award Finalist für Security Advisory und mehrfachen Microsoft Partner of the Year Auszeichnungen können wir alle Microsoft Cloud Technologien mit weit überdurchschnittlicher Expertise und Erfahrung anbieten. Daher sind wir der ideale Partner für den Betrieb und die Überwachung Ihrer Microsoft 365 und Azure basierten Infrastruktur.",images:[{image:"logos/msft-misa-mxdr.png",alt:"Advanced Specialization Threat Protection"},{image:"logos/msft-advanced-specialization-security.png",alt:"MISA Member"},{image:"logos/div-cyberwehr.png",alt:"star"},{image:"logos/isg-2021CyberSecurityRisingStar.png",alt:"star"}]}}};var p,y,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    visualOnly: true,
    awards: {
      icon: 'svg/award-star.svg',
      alt: 'award alt',
      headline: 'Auszeichnungen und Preise',
      subline: 'Holen Sie den maximalen Nutzen aus der Cloud für Ihr Unternehmen und profitieren Sie von dem fundierten Wissen und der langjährigen Erfahrung unserer glueckkanja Experten.',
      text: 'Mit unseren mehrfachen Microsoft Gold Kompetenzen, unserer Auszeichnung als Microsoft Security 20/20 Award Finalist für Security Advisory und mehrfachen Microsoft Partner of the Year Auszeichnungen können wir alle Microsoft Cloud Technologien mit weit überdurchschnittlicher Expertise und Erfahrung anbieten. Daher sind wir der ideale Partner für den Betrieb und die Überwachung Ihrer Microsoft 365 und Azure basierten Infrastruktur.',
      images: [{
        image: 'logos/msft-misa-mxdr.png',
        alt: 'Advanced Specialization Threat Protection'
      }, {
        image: 'logos/msft-advanced-specialization-security.png',
        alt: 'MISA Member'
      }, {
        image: 'logos/div-cyberwehr.png',
        alt: 'star'
      }, {
        image: 'logos/isg-2021CyberSecurityRisingStar.png',
        alt: 'star'
      }]
    }
  }
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,b,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    cols: 4,
    visualOnly: true,
    awards: {
      icon: 'svg/award-star.svg',
      alt: 'award alt',
      headline: 'Auszeichnungen und Preise',
      headlineClasses: 'h3-font-size',
      subline: 'Holen Sie den maximalen Nutzen aus der Cloud für Ihr Unternehmen und profitieren Sie von dem fundierten Wissen und der langjährigen Erfahrung unserer glueckkanja Experten.',
      text: 'Mit unseren mehrfachen Microsoft Gold Kompetenzen, unserer Auszeichnung als Microsoft Security 20/20 Award Finalist für Security Advisory und mehrfachen Microsoft Partner of the Year Auszeichnungen können wir alle Microsoft Cloud Technologien mit weit überdurchschnittlicher Expertise und Erfahrung anbieten. Daher sind wir der ideale Partner für den Betrieb und die Überwachung Ihrer Microsoft 365 und Azure basierten Infrastruktur.',
      images: [{
        image: 'logos/msft-misa-mxdr.png',
        alt: 'Advanced Specialization Threat Protection'
      }, {
        image: 'logos/msft-advanced-specialization-security.png',
        alt: 'MISA Member'
      }, {
        image: 'logos/div-cyberwehr.png',
        alt: 'star'
      }, {
        image: 'logos/isg-2021CyberSecurityRisingStar.png',
        alt: 'star'
      }]
    }
  }
}`,...(_=(b=l.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const Y=["Default","FourColumns"];export{i as Default,l as FourColumns,Y as __namedExportsOrder,W as default};
