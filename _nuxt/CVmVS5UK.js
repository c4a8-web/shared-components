import{_}from"./mbBm67Yn.js";import{_ as k,c as a,b as l,F as x,r as v,n as z,o as u,d as F,m as W}from"./hHSgbJcN.js";const f={tagName:"feature-list",data(){return{defaultIcon:"check"}},computed:{classList(){return["feature-list container space-2 vue-component"]},itemsWithFallback(){const i=[];return this.items.forEach(e=>{const c=e.icon?e.icon:this.defaultIcon,n=c===this.defaultIcon,d=n?"var(--color-blue-jeans)":e.color,s=n,o=n?!0:e.circle,t=n?"medium":e.size,p=e.bullet,g={icon:c,color:d,hasBackground:s,circle:o,size:t,bullet:p};i.push(g)}),i}},props:{items:Array}},L={class:"row justify-content-lg-center align-items-md-center"},y={class:"col-lg-10"},B={class:"media text-body mb-3"},w=["innerHTML"];function C(i,e,c,n,d,s){const o=_;return u(),a("div",{class:z(s.classList)},[l("div",L,[(u(!0),a(x,null,v(s.itemsWithFallback,t=>(u(),a("div",y,[l("div",B,[F(o,W({class:"mr-3"},{ref_for:!0},t),null,16),l("div",{class:"media-body",innerHTML:t.bullet},null,8,w)])]))),256))])],2)}const E=k(f,[["render",C]]);f.__docgenInfo={exportName:"default",displayName:"feature-list",description:"",tags:{},props:[{name:"items",type:{name:"array"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-list.vue"]};const T={component:E,argTypes:{items:{description:"A list of Features",type:"array"}},title:"Components/Feature List"},r={args:{items:[{bullet:"Wie bewerte ich meine Workloads und setze die nächsten IT-Prioritäten fest?"},{bullet:"Wie stelle ich sicher, dass mein Business ohne Unterbrechungen weiterläuft?"},{bullet:"Sollte ich den Betrieb für ein eigenes Rechenzentrum angesichts Ressourcen- und finanzieller Beschränkungen noch einmal überdenken?"},{bullet:"Wie kann ich mein Netzwerk und meine Assets vor Angreifern schützen?"},{bullet:"Wie investiere ich richtig, damit ich für die Zukunft besser aufgestellt bin?"},{bullet:"Wie kann ich sicherstellen, dass meine Mitarbeiter sich der steilen Lernkurve bei neuen Technologien anpassen?"}]}};var h,m,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      bullet: 'Wie bewerte ich meine Workloads und setze die nächsten IT-Prioritäten fest?'
    }, {
      bullet: 'Wie stelle ich sicher, dass mein Business ohne Unterbrechungen weiterläuft?'
    }, {
      bullet: 'Sollte ich den Betrieb für ein eigenes Rechenzentrum angesichts Ressourcen- und finanzieller Beschränkungen noch einmal überdenken?'
    }, {
      bullet: 'Wie kann ich mein Netzwerk und meine Assets vor Angreifern schützen?'
    }, {
      bullet: 'Wie investiere ich richtig, damit ich für die Zukunft besser aufgestellt bin?'
    }, {
      bullet: 'Wie kann ich sicherstellen, dass meine Mitarbeiter sich der steilen Lernkurve bei neuen Technologien anpassen?'
    }]
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const A=["FeatureList"];export{r as FeatureList,A as __namedExportsOrder,T as default};
