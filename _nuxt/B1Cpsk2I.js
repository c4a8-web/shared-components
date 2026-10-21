import{_ as Q}from"./Dbjosn9x.js";import{_ as q}from"./BOV3asV6.js";import{_ as J}from"./mbBm67Yn.js";import{_ as Y}from"./BeM_ocaS.js";import{_ as $,c,a as u,b as o,n as d,d as g,w as ee,t as W,e as C,F as S,r as ne,S as w,T as p,o as l,f as ie,g as te}from"./hHSgbJcN.js";import{U as N}from"./DXsy6Cm4.js";import"./BzRxihbK.js";const G={tagName:"accordion",computed:{outsidePreset(){return this.isOutsideImageWebpOrGif?"animated":null},isOutsideImageWebpOrGif(){return this.outsideImage?this.outsideImage.endsWith(".webp")||this.outsideImage.endsWith(".gif"):!1},imageWrapperClasses(){return["accordion__floating-image-wrapper",p.isTrue(this.shadowless)===!0?null:"drop-shadow"]},containerClasses(){return["accordion__container utility-animation container vue-component",this.spacing,this.accordion.image?"accordion--has-image":null]},accordionClasses(){return["accordion utility-animation container mt-6 mb-4 my-lg-8 vue-component",this.accordion.image?"accordion--has-image":null]},fallbackImageClasses(){return["accordion__fallback-image-wrapper",p.isTrue(this.shadowless)===!0?null:"drop-shadow",this.showOutsideImage?w.SHOW:null]},columnClasses(){return["col",p.isTrue(this.left)?null:"text-center"]},headlineClasses(){var e;return`accordion__headline  ${(e=this.accordion)==null?void 0:e.headlineClasses}`}},created(){document&&(this.tabs=this.accordion.tabs,this.changeExpandedStateOnAnchor())},mounted(){this.accordion.tabs&&(this.selectFallbackImage(),this.isUpperBreakpoint()?this.changeOutsideImage():(this.outsideImage=this.fallbackImage,this.outsideAlt=this.fallbackAlt),this.accordion.tabs.forEach(e=>{this.states.push(!!e.expanded)}),this.$refs.container&&N.init([this.$refs.container]),this.$refs.accordion&&N.init([this.$refs.accordion]))},methods:{changeExpandedStateOnAnchor(){var h;const e=this.getHash(),t=e.substring(1).replace(/^(Heading|Content)/,"").slice(0,-1);if(((h=this.accordion)==null?void 0:h.id)!==t)return;const i=e.substring(e.length-1);for(let r=0;r<this.tabs.length;r++)this.tabs[r].expanded===!0&&(this.tabs[r].expanded=!1);this.tabs[i]&&(this.tabs[i].expanded=!0)},getHash(){return window.location.hash},isUpperBreakpoint(){return!p.isBelowBreakpoint("md")},selectFallbackImage(){if(!this.fallbackImage){const e=this.getActiveTab();this.fallbackImage=this.accordion.image||(e==null?void 0:e.image),this.fallbackAnimated=this.accordion.image?this.accordion.animated:e.animated,this.fallbackAlt=this.accordion.image?this.accordion.alt:e==null?void 0:e.alt}},getActiveTab(){const e=this.tabs.filter(t=>t.expanded);return e?e[0]:null},handleClick(e){const t=this.states[e];this.states=this.states.map(i=>!1),this.states[e]=!t,this.isUpperBreakpoint()&&this.changeOutsideImage(e),this.allTabsClosed()&&this.changeToFallbackImage()},changeToFallbackImage(){this.showOutsideImage=!0,this.accordion.image=this.fallbackImage,this.outsideImage=this.fallbackImage,this.outsideAnimated=this.fallbackAnimated,this.outsideAlt=this.fallbackAlt},changeOutsideImage(e){const t=this.getTabByIndex(e);this.showOutsideImage=!0,this.outsideImage=(t==null?void 0:t.image)||this.fallbackImage,this.outsideAnimated=t!=null&&t.image?t.animated:this.fallbackAnimated,this.outsideAlt=t!=null&&t.image?t.alt:this.fallbackAlt},getTabByIndex(e){var t;return typeof e>"u"?this.getActiveTab():(t=this.accordion)==null?void 0:t.tabs[e]},allTabsClosed(){return this.states.filter(e=>e===!0).length===0},getStateByIndex(e){return this.states[e]},getId(e,t,i,h=!1){return`${i}${e.id}${t}`},isExpanded(e){return e.expanded?"true":"false"},buttonClasses(e){return["accordion__btn btn btn-link btn-block d-flex justify-content-between",e.expanded?null:"collapsed"]},contentClasses(e){return["accordion__content collapse position-static",e.expanded?"show":null]},cardClasses(e){return["accordion__card",this.getStateByIndex(e)?w.EXPANDED:null]},cardStyle(e){return`--utility-animation-index: ${e}`},accordionId(e){return`#${e.id}`},cloudinary(e){return e.cloudinary||!0},getImage(e){return e.image?e.image:this.accordion.image?this.accordion.image:null},getTab(e){return e.image?e:this.accordion}},data(){return{showOutsideImage:!1,outsideImage:!1,outsideAnimated:!1,outsideAlt:"",states:[],fallbackImage:!1,fallbackAnimated:!1,fallbackAlt:"",tabs:[]}},props:{accordion:Object,shadowless:{default:null},left:{default:null},spacing:String}},ae={class:"row"},oe=["innerHTML"],re={key:0,class:"accordion__subline font-size-2"},se={key:0,class:"row accordion__image"},le={class:"row position-relative"},ce={class:"accordion__image-spacer col-lg-6"},de=["id"],ue={key:0,class:"accordion__fallback-container mb-4 col-lg-6"},ge=["id"],he=["data-target","aria-expanded","aria-controls","onClick"],me={class:"card-btn-toggle"},pe=["id","aria-labelledby","data-parent"],fe={class:"accordion__richtext richtext richtext__small card-body"},Ie={class:"mb-4 col-lg-6 accordion__floating-container"},ye=["innerHTML"];function Ae(e,t,i,h,r,n){const V=Q,m=q,Z=J,j=Y;return l(),c(S,null,[i.accordion.headline?(l(),c("div",{key:0,class:d(n.containerClasses),ref:"container"},[o("div",ae,[o("div",{class:d(n.columnClasses)},[g(V,{classes:n.headlineClasses},{default:ee(()=>[o("span",{innerHTML:i.accordion.headline},null,8,oe)]),_:1},8,["classes"]),i.accordion.subline?(l(),c("div",re,W(i.accordion.subline),1)):u("",!0)],2),i.accordion.image?(l(),c("div",se,[g(m,{img:i.accordion.image,cloudinary:n.cloudinary(i.accordion),alt:i.accordion.alt,animated:i.accordion.animated},null,8,["img","cloudinary","alt","animated"])])):u("",!0)])],2)):u("",!0),o("section",{class:d(n.accordionClasses),ref:"accordion"},[o("div",le,[o("div",ce,[r.outsideImage?(l(),C(m,{key:0,img:r.outsideImage,cloudinary:n.cloudinary(i.accordion),lazy:!0,alt:i.accordion.alt,animated:r.outsideAnimated,preset:n.outsidePreset},null,8,["img","cloudinary","alt","animated","preset"])):u("",!0)]),o("div",{class:"col-lg-6 position-static",id:i.accordion.id},[r.outsideImage?(l(),c("div",ue,[o("div",{class:d(n.fallbackImageClasses)},[g(m,{img:r.outsideImage,cloudinary:n.cloudinary(i.accordion),lazy:!0,alt:r.outsideAlt,animated:r.outsideAnimated,preset:n.outsidePreset},null,8,["img","cloudinary","alt","animated","preset"])],2)])):u("",!0),(l(!0),c(S,null,ne(r.tabs,(a,s)=>(l(),c("div",{class:d(n.cardClasses(s)),style:ie(n.cardStyle(s)),key:s},[o("div",{class:"accordion__card-header card-collapse",id:n.getId(i.accordion,s,"Heading")},[o("button",{type:"button",class:d(n.buttonClasses(a)),"data-toggle":"collapse","data-target":n.getId(i.accordion,s,"#Content"),"aria-expanded":n.isExpanded(a),"aria-controls":n.getId(i.accordion,s,"Content"),onClick:Fe=>n.handleClick(s)},[te(W(a==null?void 0:a.headline)+" ",1),o("span",me,[g(Z,{icon:"plus-minus",class:"accordion__icon-toggle",closed:!r.states[s]},null,8,["closed"])])],10,he)],8,ge),o("div",{id:n.getId(i.accordion,s,"Content"),class:d(n.contentClasses(a)),"aria-labelledby":n.getId(i.accordion,s,"Heading"),"data-parent":n.accordionId(i.accordion)},[o("div",fe,[o("div",Ie,[n.getImage(a)?(l(),c("div",{key:0,class:d(n.imageWrapperClasses)},[g(m,{img:n.getImage(a),cloudinary:n.cloudinary(a),lazy:!0,alt:a.alt,animated:n.getTab(a).animated},null,8,["img","cloudinary","alt","animated"])],2)):u("",!0)]),o("div",{class:"accordion__text",innerHTML:a.content},null,8,ye),a.cta?(l(),C(j,{key:0,text:a.cta.text,link:a.cta.link,href:a.cta.href},null,8,["text","link","href"])):u("",!0)])],10,pe)],6))),128))],8,de)])],2)],64)}const Le=$(G,[["render",Ae],["__scopeId","data-v-563cc1cf"]]);G.__docgenInfo={exportName:"default",displayName:"accordion",description:"",tags:{},props:[{name:"accordion",type:{name:"object"}},{name:"shadowless",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"left",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"spacing",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/accordion.vue"]};const ke={component:Le,argTypes:{accordion:{description:"Object of the Accordion",control:"object",required:!0},"accordion.headline":{description:"The Headline of the Accordion",type:"string"}},title:"Components/Accordion"},f={args:{accordion:{headline:"Features of the Admin Portal",id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation 1",content:"<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>",expanded:!0,image:"security/CSOC-Services-Incident-Response.png",alt:"Alt 1"},{headline:"WIFI and LAN policy creation 2",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Threat-Intelligence.png",alt:"Alt 2"},{headline:"WIFI and LAN policy creation 3",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"Alt 3"},{headline:"WIFI and LAN policy creation 4",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"Alt 4"}]}}},I={args:{shadowless:!1,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"security/CSOC-Services-Default.png",alt:"Products 0",cloudinary:!0,id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",expanded:!0,image:"security/CSOC-Services-Incident-Response.png",alt:"WIFI and LAN policy creation 1"},{headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Threat-Intelligence.png",alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation (default image)",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"WIFI and LAN policy creation 4"},{headline:"Active Threat Hunting",content:"<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>",image:"security/CSOC-Services-Active-Threat-Hunting.png",alt:"WIFI and LAN policy creation 5"},{headline:"Continuous Improvement & Reporting",content:"<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>",image:"security/CSOC-Services-Continous-Improvement.png",alt:"WIFI and LAN policy creation 6"}]}}},y={args:{shadowless:!0,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"/products/radius/radius-wifi-lan-policy.gif",alt:"Products 0",cloudinary:!0,headline:"Features of the Admin Portal",headlineClasses:"h3-font-size",id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",expanded:!0,image:"/products/radius/radius-wifi-lan-policy.gif",alt:"WIFI and LAN policy creation 1"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"/products/radius/radius-logs.gif",alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"/products/radius/radius-wifi-lan-policy.gif",alt:"WIFI and LAN policy creation 4"}]}}},A={args:{shadowless:!1,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"security/CSOC-Services-Default.png",alt:"Products 0",cloudinary:!0,id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Incident-Response.png",alt:"WIFI and LAN policy creation 1"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Threat-Intelligence.png",alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation (default image)",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI und LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"WIFI and LAN policy creation 4"}]}}},L={args:{shadowless:!1,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"products/konnekt/konnekt-drive-letter.webp",animated:!0,alt:"Products 0",cloudinary:!0,id:"featureAccordion",tabs:[{headline:"Animated Webp",content:"Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",expanded:!0,image:"products/konnekt/konnekt-drive-letter.webp",cloudinary:!0,alt:"WIFI and LAN policy creation 1",animated:!0},{headline:"Normal Webp",content:"Easy download of XML files to generate WIFI and LAN policies",image:"/products/konnekt/konnekt-hero-image.webp",cloudinary:!0,alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation (default image)",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"WIFI and LAN policy creation 4"},{headline:"Active Threat Hunting",content:"<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>",image:"security/CSOC-Services-Active-Threat-Hunting.png",alt:"WIFI and LAN policy creation 5"},{headline:"Continuous Improvement & Reporting",content:"<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>",image:"security/CSOC-Services-Continous-Improvement.png",alt:"WIFI and LAN policy creation 6"}]}}},F={args:{accordion:{headline:"Vorteile von AzERE",subline:"Mit AzERE bauen wir eine Disaster Recovery Infrastruktur für geschäftskritische Tools und Services auf, um diese im Falle einer erfolgreichen Cyberattacke schnell und automatisiert wiederherstellen zu können. Damit ist euer Unternehmen für das Worst-Case-Szenario abgesichert. Euer Vorteil: Ihr schont eure Nerven und könnt wieder ruhig schlafen.",id:"featureAccordion",image:"/azure/icon-azere-dark-tenant.png",tabs:[{headline:"Unabhängige, entkoppelte Umgebung",content:"Keine Chance für Lateral Movement: Eine isolierte Backup-Umgebung bewahrt kritische Anwendungen und Daten vor der Ausbreitung einer potenziellen Attacke.",expanded:!0,image:"/azure/icon-azere-dark-tenant.svg",alt:"Eine isolierte Backup-Umgebung"},{headline:"Kommunikationsplattform für Notfälle",content:"Schneller Informationsaustausch ist das A und O in Krisensituationen: Die sofortige Bereitstellung wichtiger Kommunikationstools wie Teams und Exchange für bestimmte Benutzergruppen gewährleistet die Geschäftskontinuität.",expanded:!1,image:"/azure/icon-azere-war-room-communication.svg",alt:"Schneller Informationsaustausch in Krisensituationen"},{headline:"Geschützter Datenspeicher",content:"Die Integrität und Verfügbarkeit von wichtigen Dokumenten und Daten ist essenziell für die Wiederherstellung im Katastrophenfall. Ein unveränderlicher, versionierter Speicher stellt genau das sicher.",expanded:!1,image:"/azure/icon-azere-protected-data-storage.svg",alt:"Ein unveränderlicher, versionierter Speicher"},{headline:"Autonome Wiederherstellung",content:"Abhängigkeiten führen zu Fehlerpotential. AzERE verfügt deshalb über eine saubere und sichere Infrastruktur zur Wiederherstellung wichtiger Anwendungen und Daten, ohne dafür andere Systeme, Tools oder Prozesse zu benötigen.",expanded:!1,image:"/azure/icon-azere-ground-zero-environment.svg",alt:"Autonome Wiederherstellung"},{headline:"Monatliche Fire Tests",content:"Das beste System ist wirkungslos, wenn es nicht funktioniert. Aus diesem Grund testen wir regelmäßig die Konsistenz der Sicherungsdaten und trainieren die Wachsamkeit aller Beteiligten im Sicherungs- und Wiederherstellungsprozess.",expanded:!1,image:"/azure/icon-azere-monthly-fire-tests.svg",alt:"Monatliche Fire Tests"}]}}};var b,v,k;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    accordion: {
      headline: 'Features of the Admin Portal',
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation 1',
        content: '<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>',
        expanded: true,
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'Alt 1'
      }, {
        headline: 'WIFI and LAN policy creation 2',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'Alt 2'
      }, {
        headline: 'WIFI and LAN policy creation 3',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'Alt 3'
      }, {
        headline: 'WIFI and LAN policy creation 4',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'Alt 4'
      }]
    }
  }
}`,...(k=(v=f.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var E,_,x;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'security/CSOC-Services-Default.png',
      alt: 'Products 0',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation 1'
      }, {
        headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation 4'
      }, {
        headline: 'Active Threat Hunting',
        content: '<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>',
        image: 'security/CSOC-Services-Active-Threat-Hunting.png',
        alt: 'WIFI and LAN policy creation 5'
      }, {
        headline: 'Continuous Improvement & Reporting',
        content: '<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>',
        image: 'security/CSOC-Services-Continous-Improvement.png',
        alt: 'WIFI and LAN policy creation 6'
      }]
    }
  }
}`,...(x=(_=I.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var O,z,M;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    shadowless: true,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/products/radius/radius-wifi-lan-policy.gif',
      alt: 'Products 0',
      cloudinary: true,
      headline: 'Features of the Admin Portal',
      headlineClasses: 'h3-font-size',
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation 1'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-logs.gif',
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation 4'
      }]
    }
  }
}`,...(M=(z=y.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var X,T,R;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'security/CSOC-Services-Default.png',
      alt: 'Products 0',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation 1'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI und LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation 4'
      }]
    }
  }
}`,...(R=(T=A.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var B,K,D;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'products/konnekt/konnekt-drive-letter.webp',
      animated: true,
      alt: 'Products 0',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [{
        headline: 'Animated Webp',
        content: 'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: 'products/konnekt/konnekt-drive-letter.webp',
        cloudinary: true,
        alt: 'WIFI and LAN policy creation 1',
        animated: true
      }, {
        headline: 'Normal Webp',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/konnekt/konnekt-hero-image.webp',
        cloudinary: true,
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation 4'
      }, {
        headline: 'Active Threat Hunting',
        content: '<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>',
        image: 'security/CSOC-Services-Active-Threat-Hunting.png',
        alt: 'WIFI and LAN policy creation 5'
      }, {
        headline: 'Continuous Improvement & Reporting',
        content: '<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>',
        image: 'security/CSOC-Services-Continous-Improvement.png',
        alt: 'WIFI and LAN policy creation 6'
      }]
    }
  }
}`,...(D=(K=L.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var P,H,U;F.parameters={...F.parameters,docs:{...(P=F.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    accordion: {
      headline: 'Vorteile von AzERE',
      subline: 'Mit AzERE bauen wir eine Disaster Recovery Infrastruktur für geschäftskritische Tools und Services auf, um diese im Falle einer erfolgreichen Cyberattacke schnell und automatisiert wiederherstellen zu können. Damit ist euer Unternehmen für das Worst-Case-Szenario abgesichert. Euer Vorteil: Ihr schont eure Nerven und könnt wieder ruhig schlafen.',
      id: 'featureAccordion',
      image: '/azure/icon-azere-dark-tenant.png',
      tabs: [{
        headline: 'Unabhängige, entkoppelte Umgebung',
        content: 'Keine Chance für Lateral Movement: Eine isolierte Backup-Umgebung bewahrt kritische Anwendungen und Daten vor der Ausbreitung einer potenziellen Attacke.',
        expanded: true,
        image: '/azure/icon-azere-dark-tenant.svg',
        alt: 'Eine isolierte Backup-Umgebung'
      }, {
        headline: 'Kommunikationsplattform für Notfälle',
        content: 'Schneller Informationsaustausch ist das A und O in Krisensituationen: Die sofortige Bereitstellung wichtiger Kommunikationstools wie Teams und Exchange für bestimmte Benutzergruppen gewährleistet die Geschäftskontinuität.',
        expanded: false,
        image: '/azure/icon-azere-war-room-communication.svg',
        alt: 'Schneller Informationsaustausch in Krisensituationen'
      }, {
        headline: 'Geschützter Datenspeicher',
        content: 'Die Integrität und Verfügbarkeit von wichtigen Dokumenten und Daten ist essenziell für die Wiederherstellung im Katastrophenfall. Ein unveränderlicher, versionierter Speicher stellt genau das sicher.',
        expanded: false,
        image: '/azure/icon-azere-protected-data-storage.svg',
        alt: 'Ein unveränderlicher, versionierter Speicher'
      }, {
        headline: 'Autonome Wiederherstellung',
        content: 'Abhängigkeiten führen zu Fehlerpotential. AzERE verfügt deshalb über eine saubere und sichere Infrastruktur zur Wiederherstellung wichtiger Anwendungen und Daten, ohne dafür andere Systeme, Tools oder Prozesse zu benötigen.',
        expanded: false,
        image: '/azure/icon-azere-ground-zero-environment.svg',
        alt: 'Autonome Wiederherstellung'
      }, {
        headline: 'Monatliche Fire Tests',
        content: 'Das beste System ist wirkungslos, wenn es nicht funktioniert. Aus diesem Grund testen wir regelmäßig die Konsistenz der Sicherungsdaten und trainieren die Wachsamkeit aller Beteiligten im Sicherungs- und Wiederherstellungsprozess.',
        expanded: false,
        image: '/azure/icon-azere-monthly-fire-tests.svg',
        alt: 'Monatliche Fire Tests'
      }]
    }
  }
}`,...(U=(H=F.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Ee=["Default","Image","ImageShadowless","Collapsed","AnimatedImage","MixedAssets"];export{L as AnimatedImage,A as Collapsed,f as Default,I as Image,y as ImageShadowless,F as MixedAssets,Ee as __namedExportsOrder,ke as default};
