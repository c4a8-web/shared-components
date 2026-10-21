import{_ as I}from"./mbBm67Yn.js";import{_ as T}from"./BeM_ocaS.js";import{_ as z}from"./Dbjosn9x.js";import{_ as E}from"./D5dKPKeF.js";import{_ as D,c as d,b as e,d as l,F as b,r as F,w as h,f as p,n as O,S as R,o as n,t as s,e as B,a as _,m as N,g as k}from"./hHSgbJcN.js";import{u as P}from"./CQOsp4Lc.js";const A={tagName:"sidebar",props:{sections:{type:Array},headlineText:{type:String},color:{type:String},date:{type:String},location:{type:String},hint:{type:String}},computed:{mainStyle(){return{"--color-headlines":this.color}}},data(){return{isReady:!1,State:R,modalStore:null}},mounted(){this.isReady=!0,this.modalStore=P(),this.$nextTick(()=>{this.registerDialogs()}),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){this.modalStore&&this.sections&&this.sections.forEach(o=>{this.modalStore.unregisterModal(o.title)}),window.removeEventListener("scroll",this.handleScroll)},methods:{registerDialogs(){!this.sections||!this.modalStore||this.sections.forEach((o,t)=>{this.modalStore.registerModal(o.title,{open:()=>this.openDialog(t),close:()=>this.closeDialog(t)})})},handleScroll(){this.sections.forEach((o,t)=>{const r=this.getDialogByIndex(t);r&&r.open&&r.close()})},getDialogByIndex(o){const t=this.$refs[`dialog${o}`];if(t)return t[0]},openDialog(o){const t=this.getDialogByIndex(o);!t||!t.showModal||t.showModal()},closeDialog(o){const t=this.getDialogByIndex(o);!t||!t.close||t.close()}}},H={class:"sidebar__nav"},V={class:"sidebar__controls"},W=["onClick"],G={class:"sidebar__section-content"},J={class:"sidebar__section-name"},U={class:"sidebar__section-overline"},Y={class:"sidebar__section-title"},K={class:"sidebar__dialog-content"},Q={class:"sidebar__dialog-wrapper"},X={class:"sidebar__dialog-section"},Z={class:"sidebar__dialog-section-overline"},$={class:"sidebar__dialog-section-title"},ee={class:"sidebar__dialog-infos"},te=["innerHTML"],oe={class:"sidebar__row row"},ae={class:"col"},re=["innerHTML"],se={class:"sidebar__row sidebar__row--left row"},ie={class:"col"},ne={class:"sidebar__date"},de={class:"sidebar__location"},le={key:0,class:"sidebar__hint"};function me(o,t,r,ce,g,c){const v=I,j=T,M=z,C=E;return n(),d("div",{class:O(["sidebar",{[g.State.READY]:g.isReady}])},[e("nav",H,[e("div",V,[(n(!0),d(b,null,F(r.sections,(a,i)=>(n(),d(b,{key:i},[e("button",{class:"sidebar__button","aria-haspopup":"dialog",style:p({"--sidebar-section-color":a.color,"--sidebar-section-width":a.width,"--sidebar-section-index":i}),onClick:q=>c.openDialog(i)},[t[0]||(t[0]=e("div",{class:"sidebar__section-bar"},null,-1)),e("div",G,[e("div",J,[e("div",U,s(a.overline),1),e("div",Y,s(a.title),1)])])],12,W),e("dialog",{class:"sidebar__dialog",ref_for:!0,ref:`dialog${i}`,style:p({"--sidebar-dialog-background-color":a.color,"--sidebar-dialog-text-color":a.textColor})},[l(v,{class:"sidebar__dialog-close",icon:"close",onClick:q=>c.closeDialog(i),hover:!0,circle:!0},null,8,["onClick"]),e("div",K,[e("div",Q,[e("div",X,[e("div",Z,s(a.overline),1),e("div",$,s(a.title),1)]),e("div",ee,[e("div",{class:"sidebar__dialog-text",innerHTML:a.text},null,8,te),a.cta?(n(),B(j,N({key:0,class:"sidebar__dialog-cta"},{ref_for:!0},a.cta),null,16)):_("",!0)])])])],4)],64))),128))])]),l(C,{class:"sidebar__main",style:p(c.mainStyle)},{default:h(()=>[e("div",oe,[e("div",ae,[l(M,{level:"h1",class:"sidebar__headline font-size-6"},{default:h(()=>[e("span",{innerHTML:r.headlineText},null,8,re)]),_:1})])]),e("div",se,[e("div",ie,[e("div",ne,s(r.date),1),e("span",de,[k(s(r.location)+" ",1),r.hint?(n(),d("div",le,[k(s(r.hint)+" ",1),l(v,{icon:"arrow-curl",size:"medium",direction:"left"})])):_("",!0)])])])]),_:1},8,["style"])],2)}const ue=D(A,[["render",me]]);A.__docgenInfo={exportName:"default",displayName:"sidebar",description:"",tags:{},props:[{name:"sections",type:{name:"array"}},{name:"headlineText",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"date",type:{name:"string"}},{name:"location",type:{name:"string"}},{name:"hint",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/sidebar.vue"]};const ke={title:"Components/Sidebar",component:ue,parameters:{layout:"fullscreen"},decorators:[(o,t)=>({components:{story:o},setup(){return{args:t.args}},template:`
        <story />
        <div style="height: 200vh;" class="dummy-content is--dark"></div>
      `})]},m={args:{headlineText:"Visit us at<br />it-sa 2025<br/> in Nürnberg!",color:"var(--color-gk-orange)",date:"October 7-9",location:"Exhibition Center | Hall 6, Booth 232",hint:"Follow the Footsteps!",sections:[{color:"var(--color-celery)",overline:"Managed",title:"Intune",width:97,text:"Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-scepman-mid-yellow)",overline:"Managed",title:"Entra",width:39,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{color:"var(--color-gk-red)",overline:"Managed",title:"Red Tenant",width:74,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",textColor:"var(--color-gk-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-gk-violet)",overline:"Managed",title:"Soc",width:37,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",textColor:"var(--color-gk-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-denim)",overline:"Managed",title:"Azure",width:69,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",textColor:"var(--color-gk-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}}]}},u={args:{headlineText:"Visit us at<br />it-sa 2025<br/> in Nürnberg!",color:"var(--color-gk-orange)",date:"October 7-9",location:"Messezentrum Nürnberg | Halle 6, Stand 232",hint:"Folgt den Fußstapfen!",sections:[{color:"var(--color-celery)",overline:"Managed",title:"Intune",width:97,text:"Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-scepman-mid-yellow)",overline:"Managed",title:"Entra",width:39,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{color:"var(--color-gk-red)",overline:"Managed",title:"Red Tenant",width:74,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",textColor:"var(--color-gk-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-gk-violet)",overline:"Managed",title:"Soc",width:37,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",textColor:"var(--color-gk-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-denim)",overline:"Managed",title:"Azure",width:69,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",textColor:"var(--color-gk-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}}]}};var y,L,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headlineText: 'Visit us at<br />it-sa 2025<br/> in Nürnberg!',
    color: 'var(--color-gk-orange)',
    date: 'October 7-9',
    location: 'Exhibition Center | Hall 6, Booth 232',
    hint: 'Follow the Footsteps!',
    sections: [{
      color: 'var(--color-celery)',
      overline: 'Managed',
      title: 'Intune',
      width: 97,
      text: \`Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.\`,
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-scepman-mid-yellow)',
      overline: 'Managed',
      title: 'Entra',
      width: 39,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`
    }, {
      color: 'var(--color-gk-red)',
      overline: 'Managed',
      title: 'Red Tenant',
      width: 74,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\`,
      textColor: 'var(--color-gk-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-gk-violet)',
      overline: 'Managed',
      title: 'Soc',
      width: 37,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`,
      textColor: 'var(--color-gk-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-denim)',
      overline: 'Managed',
      title: 'Azure',
      width: 69,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`,
      textColor: 'var(--color-gk-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }]
  }
}`,...(x=(L=m.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var S,f,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    headlineText: 'Visit us at<br />it-sa 2025<br/> in Nürnberg!',
    color: 'var(--color-gk-orange)',
    date: 'October 7-9',
    location: 'Messezentrum Nürnberg | Halle 6, Stand 232',
    hint: 'Folgt den Fußstapfen!',
    sections: [{
      color: 'var(--color-celery)',
      overline: 'Managed',
      title: 'Intune',
      width: 97,
      text: \`Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.\`,
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-scepman-mid-yellow)',
      overline: 'Managed',
      title: 'Entra',
      width: 39,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`
    }, {
      color: 'var(--color-gk-red)',
      overline: 'Managed',
      title: 'Red Tenant',
      width: 74,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\`,
      textColor: 'var(--color-gk-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-gk-violet)',
      overline: 'Managed',
      title: 'Soc',
      width: 37,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`,
      textColor: 'var(--color-gk-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-denim)',
      overline: 'Managed',
      title: 'Azure',
      width: 69,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`,
      textColor: 'var(--color-gk-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }]
  }
}`,...(w=(f=u.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const ye=["Default","LongerText"];export{m as Default,u as LongerText,ye as __namedExportsOrder,ke as default};
