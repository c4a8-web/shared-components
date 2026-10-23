import{_ as D}from"./CU4Hs53D.js";import{_ as y}from"./Dq3WPmkH.js";import{_ as B,c as u,d as k,b as r,w as F,f as p,n as g,T as S,o,a as b,k as M,l as A,t as _,F as V,r as O,e as U,m as T}from"./CxlEFrmm.js";const I={tagName:"content-scroller",data(){return{blockScrollPercentage:[],scrollDistancePercentage:0,minHeight:0,blockCount:0,isScrolledUpOut:!1,isScrolledDownOut:!1}},computed:{classList(){return["content-scroller vue-component",this.overlappingSizeValue,this.skin?`content-scroller--${this.skin}`:""]},blocksValue(){return S.getJSON(this.blocks)},headlineValue(){const e=S.getJSON(this.headline);return{...e,level:e.level||"h2",classes:`content-scroller__headline ${e.classes||"h3-font-size"}`}},overlappingSizeValue(){return this.overlappingSize||this.skin||"mt-md-n10"},style(){return{"--content-scroller-min-height":`${this.minHeight}px`}}},props:{headline:{default:null},subline:{type:String,default:""},sublineClasses:{type:String,default:null},blocks:Array,overlappingSize:String,skin:{type:String,default:""}},mounted(){this.calcBlockCount(),this.$nextTick(()=>{this.handleResize()}),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{handleScroll(){this.calcScrollDistancePercentage(),this.updateBlocks()},handleResize(){this.calcMinHeight(),this.handleScroll()},resetIsScrolledUpOut(){const e=this.$refs.block;e&&(e.forEach((s,n)=>{this.setBlockMinPercentage(n)}),this.isScrolledUpOut=!0)},resetIsScrolledDownOut(){const e=this.$refs.block;e&&(e.forEach((s,n)=>{this.setBlockMaxPercentage(n)}),this.isScrolledDownOut=!0)},setBlockMaxPercentage(e){this.blockScrollPercentage[e]=100},setBlockMinPercentage(e){this.blockScrollPercentage[e]=0},updateBlocks(){if(!this.isScrolledUpOut&&this.scrollDistancePercentage<=0)return this.resetIsScrolledUpOut();if(!this.isScrolledDownOut&&this.scrollDistancePercentage>=100)return this.resetIsScrolledDownOut();if(this.scrollDistancePercentage<=0||this.scrollDistancePercentage>=100)return;this.isScrolledUpOut=!1,this.isScrolledDownOut=!1;const n=100/this.blockCount,a=this.$refs.block;a&&a.forEach((m,t)=>{const l=t*n,c=(t+1)*n;if(this.scrollDistancePercentage>=l&&this.scrollDistancePercentage<=c){let i=(this.scrollDistancePercentage-l)/n*100;this.blockScrollPercentage[t]=i}else this.scrollDistancePercentage<l?this.setBlockMinPercentage(t):this.scrollDistancePercentage>c&&this.setBlockMaxPercentage(t)})},getViewportHeight(){return window.innerHeight},calcScrollDistancePercentage(){const e=this.$el,s=window.scrollY,n=e.getBoundingClientRect().top+window.scrollY,m=e.offsetHeight/2;let t=0;s>=n&&(t=(s-n)/m*100),this.scrollDistancePercentage=t},calcBlockCount(){const e=this.blocks.length;e&&(this.blockCount=e)},calcBlockStyle(e){return[{"--content-scroller-block-scroll-percentage":this.blockScrollPercentage[e]}]},calcMinHeight(){const e=this.$refs.placeholder;e&&(this.minHeight=e.offsetHeight)}}},E={class:"content-scroller__row"},H={class:"content-scroller__grid col"},R={class:"content-scroller__content-wrapper"},W={class:"content-scroller__content"},N={class:"content-scroller__header"},j={class:"content-scroller__blocks"},L={class:"content-scroller__blocks-placeholder",ref:"placeholder"},Z={class:"content-scroller__blocks-frame"},$={class:"content-scroller__block-space"},K={class:"content-scroller__block-content"};function J(e,s,n,a,m,t){const l=D,c=y;return o(),u("div",{class:g(t.classList),style:p(t.style)},[k(c,{class:"content-scroller__wrapper"},{default:F(()=>[r("div",E,[r("div",H,[r("div",R,[r("div",W,[r("div",N,[k(l,M(A(t.headlineValue)),null,16),n.subline?(o(),u("p",{key:0,class:g(["content-scroller__subline",n.sublineClasses])},_(n.subline),3)):b("",!0)])])]),r("div",j,[r("div",L,[r("div",Z,[(o(!0),u(V,null,O(t.blocksValue,(i,f)=>(o(),u("section",{class:g(["content-scroller__block",{"is-left":i.isLeft}]),key:f,ref_for:!0,ref:"block",style:p(t.calcBlockStyle(f))},[r("main",null,[r("div",$,[i.headline?(o(),U(l,T({key:0,ref_for:!0},i.headline,{level:i.headline.level||"h3",classes:"content-scroller__block-headline"}),null,16,["level"])):b("",!0),r("p",K,_(i.content),1)])])],6))),128))])],512)])])])]),_:1}),s[0]||(s[0]=r("div",{class:"content-scroller__background"},null,-1))],6)}const Y=B(I,[["render",J]]);I.__docgenInfo={exportName:"default",displayName:"content-scroller",description:"",tags:{},props:[{name:"headline",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"subline",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sublineClasses",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"blocks",type:{name:"array"}},{name:"overlappingSize",type:{name:"string"}},{name:"skin",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/content-scroller.vue"]};const X={component:Y,argTypes:{},title:"Components/Content Scroller"},d={args:{headline:{text:"Egal, welcher Weg Sie in die Cloud führt. Wir bringen Sie mit Azure ans Ziel."},blocks:[{headline:{text:"Ist Ihre Infrastruktur fit für die Cloud?"},content:"Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein."},{headline:{text:"Wir decken das komplette Azure Ökosystem ab"},content:"Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen"},{headline:{text:"Von der Planung bis zum Betrieb"},content:"123"},{headline:{text:"Der Partner an Ihrer Seite"},content:"Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren."}]}},h={args:{headline:{text:"Ihr seid einer Ransomware-Attacke zum Opfer gefallen?"},subline:"Regel Nummer 1: keine Panik. Wir verraten euch, welche Fragen im Fall einer erfolgreichen Cyberattacke aufkommen und wie AzERE diese beantworten würde:",sublineClasses:"mt-lg-10 font-size-3 light wide",blocks:[{headline:{text:"Ist Ihre Infrastruktur fit für die Cloud?"},content:"Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein."},{headline:{text:"Wir decken das komplette Azure Ökosystem ab"},content:"Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen"},{headline:{text:"Von der Planung bis zum Betrieb"},content:"123"},{headline:{text:"Der Partner an Ihrer Seite"},content:"Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren."}]}};var P,v,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Egal, welcher Weg Sie in die Cloud führt. Wir bringen Sie mit Azure ans Ziel.'
    },
    blocks: [{
      headline: {
        text: 'Ist Ihre Infrastruktur fit für die Cloud?'
      },
      content: 'Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein.'
    }, {
      headline: {
        text: 'Wir decken das komplette Azure Ökosystem ab'
      },
      content: 'Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen'
    }, {
      headline: {
        text: 'Von der Planung bis zum Betrieb'
      },
      content: '123'
      // content:
      // 'Wir beraten Sie nicht nur bei dem Aufbau Ihrer Cloud-Strategie oder der Auswahl der passenden Microsoft Technologien. Wir implementieren diese auch in Ihr Unternehmen und stellen als Managed Service eine optimale Nutzung sicher.',
    }, {
      headline: {
        text: 'Der Partner an Ihrer Seite'
      },
      content: 'Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren.'
    }]
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,C,x;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Ihr seid einer Ransomware-Attacke zum Opfer gefallen?'
    },
    subline: 'Regel Nummer 1: keine Panik. Wir verraten euch, welche Fragen im Fall einer erfolgreichen Cyberattacke aufkommen und wie AzERE diese beantworten würde:',
    sublineClasses: 'mt-lg-10 font-size-3 light wide',
    blocks: [{
      headline: {
        text: 'Ist Ihre Infrastruktur fit für die Cloud?'
      },
      content: 'Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein.'
    }, {
      headline: {
        text: 'Wir decken das komplette Azure Ökosystem ab'
      },
      content: 'Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen'
    }, {
      headline: {
        text: 'Von der Planung bis zum Betrieb'
      },
      content: '123'
    }, {
      headline: {
        text: 'Der Partner an Ihrer Seite'
      },
      content: 'Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren.'
    }]
  }
}`,...(x=(C=h.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const ee=["ContentScroller","ContentScrollerSubline"];export{d as ContentScroller,h as ContentScrollerSubline,ee as __namedExportsOrder,X as default};
