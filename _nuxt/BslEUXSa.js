import{_ as X}from"./CU4Hs53D.js";import{_ as F,c as a,o as l,F as z,b as s,t as L,n as C,e as x,d as b,a as h,r as q,f as u,T as w,S as c}from"./CxlEFrmm.js";import{_ as G}from"./CMtOK7Wv.js";const U={tagName:"timeline-entry-inner-text",props:{entry:[Object,String],simple:Boolean}},J={class:"timeline__entry-title"},K={class:"timeline__entry-text"},Q=["innerHTML"];function Z(e,i,t,o,m,n){return l(),a("div",{class:C(["timeline__entry-inner-text",{"timeline__entry-inner-text--simple":t.simple}])},[t.entry&&t.entry.title?(l(),a(z,{key:0},[s("div",J,L(t.entry.title),1),s("p",K,L(t.entry.text),1)],64)):(l(),a("span",{key:1,innerHTML:t.entry},null,8,Q))],2)}const $=F(U,[["render",Z]]);U.__docgenInfo={exportName:"default",displayName:"timeline-entry-inner-text",description:"",tags:{},props:[{name:"entry",type:{name:"object|string"}},{name:"simple",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/timeline-entry-inner-text.vue"]};const Y={tagName:"timeline",computed:{classList(){return["timeline","has-background","timeline--headline-sticky has-headline-sticky",this.isReady?c.READY:"",this.expanded?c.EXPANDED:"",this.spacing,this.simpleValue?"timeline--simple":"","vue-component"]},copyColor(){return this.color?this.color:"var(--color-copy-light)"},backgroundColor(){return this.bgColor?this.bgColor:"var(--color-gk-dark-blue)"},style(){return`--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`},headlineClasses(){var e;return`timeline__headline headline-sticky__target h2-font-size light ${(e=this.headline)!=null&&e.classes?this.headline.classes:""}`},lineEndStyle(){var e;return`--timeline-line-position: ${(e=this.entries)==null?void 0:e.length}`},simpleValue(){return w.isTrue(this.simple)},iconName(){return"strategy-split"}},mounted(){this.bindEvents(),this.handleScroll()},data(){return{lastIndex:null,isReady:!1,startDelay:500,isVisible:!1,percentageInViewport:40,minPercentage:-10,maxPercentage:100,entryContainerStates:[],entryContainerStyles:[]}},methods:{bindEvents(){document.addEventListener("scroll",this.handleScroll)},startAnimation(){setTimeout(()=>{this.isReady=!0},this.startDelay)},getEntryLineStyle(e){return`--timeline-line-position: ${e}`},handleScroll(){this.expanded?this.isInViewport():this.updateAnimation()},updateAnimation(){const e=this.getScrollPercentage();if(e<=this.minPercentage)return this.setAnimationStart();if(e>=this.maxPercentage)return this.setAnimationEnd();this.isReady||this.startAnimation(),this.showEntryByPercent(e)},setAnimationStart(){this.isReady=!1},setAnimationEnd(){for(let i=0;i<this.entries.length;i++)this.entryContainerStyles[i]="0",this.entryContainerStates[i]=[c.SHOW,c.IS_FULL]},showEntryByPercent(e){const i=this.maxPercentage/this.entries.length;for(let t=0;t<this.entries.length;t++)this.updateNextStep(t,e,i)},updateNextStep(e,i,t){this.entryContainerStates[e]=c.SHOW;const o=0,m=t*e,n=t*(e+1);let r=0;if(i>=m&&i<=n){const _=t,p=i-m,y=60;r=this.maxPercentage-Math.ceil(p*100/_),r<y&&(this.entryContainerStates[e]=[c.SHOW,"timeline__entry-container--visible"])}else i>n?(r=o,this.entryContainerStates[e]=[c.SHOW,c.IS_FULL]):r=this.maxPercentage;this.simpleValue&&(r<this.maxPercentage&&r>o?r=1:r=0),this.entryContainerStyles[e]=`${r}`},getEntryContainerClasses(e){return["timeline__entry-container",this.entryContainerStates[e]]},getEntryContainerStyle(e){return`--timeline-entry-container-percentage: ${this.entryContainerStyles[e]?this.entryContainerStyles[e]:this.simpleValue?0:this.maxPercentage}`},getScrollPercentage(){const e=this.$refs.root;if(!e)return;const i=e.getBoundingClientRect().height,t=window.innerHeight/3;let o=w.getScrollTop(e)-t;o<0&&(o=0);const m=window.scrollY-o,n=i-t;return m*100/n},isInViewport(){if(this.isVisible)return;const e=this.$refs.root;!e||!w.isInViewportPercent(e,this.percentageInViewport)||this.startAnimation()}},props:{headline:Object,bgColor:{default:null},color:{default:null},entries:Array,expanded:{default:null},spacing:String,simple:{default:null},subline:String}},ee={class:"container"},te={class:"timeline__row row"},ne={class:"timeline__col col"},ie={key:0,class:"timeline__header"},se={key:0,class:"timeline__subline"},le={class:"timeline__content"},re={class:"timeline__line"},ae={class:"timeline__entry-inner"},oe={class:"timeline__entry-inner-line"},ce={key:0,class:"timeline__entry-vertical-line"},me={class:"timeline__entry-inner"},de={class:"timeline__entry-inner-line"},ue={key:0,class:"timeline__entry-vertical-line"};function he(e,i,t,o,m,n){var y,k,P,V;const r=X,_=$,p=G;return l(),a("div",{class:C(n.classList),style:u(n.style),ref:"root"},[s("div",ee,[s("div",te,[s("div",ne,[t.subline?(l(),a("div",ie,[b(r,{text:(y=t.headline)==null?void 0:y.text,level:(k=t.headline)==null?void 0:k.level,classes:n.headlineClasses},null,8,["text","level","classes"]),t.subline?(l(),a("div",se,L(t.subline),1)):h("",!0)])):(l(),x(r,{key:1,text:(P=t.headline)==null?void 0:P.text,level:(V=t.headline)==null?void 0:V.level,classes:n.headlineClasses},null,8,["text","level","classes"])),s("div",le,[s("div",re,[i[0]||(i[0]=s("div",{class:"timeline__line-start"},[s("div",{class:"timeline__line-corner"},[s("span")])],-1)),(l(!0),a(z,null,q(t.entries,(T,d)=>(l(),a("div",{class:C(n.getEntryContainerClasses(d)),style:u(n.getEntryContainerStyle(d)),key:d},[s("div",{class:"timeline__entry",style:u(n.getEntryLineStyle(d))},[s("div",ae,[b(_,{entry:T,simple:n.simpleValue},null,8,["entry","simple"]),s("div",oe,[n.simpleValue?(l(),x(p,{key:0,icon:n.iconName,class:"timeline__entry-inner-line-icon"},null,8,["icon"])):h("",!0)]),n.simpleValue?(l(),a("div",ce)):h("",!0)])],4),s("div",{class:"timeline__entry-line",style:u(n.getEntryLineStyle(d)),ref_for:!0,ref:"entry-line"},null,4),s("div",{class:"timeline__entry-spacer",style:u(n.getEntryLineStyle(d))},[s("div",me,[b(_,{entry:T,simple:n.simpleValue},null,8,["entry","simple"]),s("div",de,[n.simpleValue?(l(),x(p,{key:0,icon:n.iconName,class:"timeline__entry-inner-line-icon"},null,8,["icon"])):h("",!0)]),n.simpleValue?(l(),a("div",ue)):h("",!0)])],4)],6))),128)),s("div",{class:"timeline__line-end",style:u(n.lineEndStyle)},null,4)])])])])])],6)}const _e=F(Y,[["render",he]]);Y.__docgenInfo={exportName:"default",displayName:"timeline",description:"",tags:{},props:[{name:"headline",type:{name:"object"}},{name:"bgColor",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"entries",type:{name:"array"}},{name:"expanded",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"spacing",type:{name:"string"}},{name:"simple",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"subline",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/timeline.vue"]};const fe={title:"Components/Timeline",component:_e,decorators:[e=>({components:{story:e},template:`
        <div>
          <div style="height: 60vh;" class="dummy-content"></div>
          <story />
          <div style="height: 300vh;" class="dummy-content"></div>
        </div>
      `})]},g={args:{headline:{text:"Lorem was sie erwartet",level:"h3"},entries:["Initial Security Audit & Recommendations","Roadmap Workshops","Implementation of Security Solutions","Initial Baselining","Blueprint Matching"]}},f={args:{expanded:!0,headline:{text:"Lorem was sie erwartet",level:"h3"},entries:["Initial Security Audit & Recommendations","Roadmap Workshops","Implementation of Security Solutions","Initial Baselining","Blueprint Matching"]}},S={args:{simple:!0,headline:{text:"Lorem was sie erwartet",level:"h3"},entries:[{title:"Title 1",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 2",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 3",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 4",text:"Lorem ipsum dolor sit amet, consectet"}]}},v={args:{simple:!0,headline:{text:"Lorem was sie erwartet",level:"h3"},subline:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",entries:[{title:"Title 1",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 2",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 3",text:"Lorem ipsum dolor sit amet, consectet"}]}};var E,I,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    entries: ['Initial Security Audit & Recommendations', 'Roadmap Workshops', 'Implementation of Security Solutions', 'Initial Baselining', 'Blueprint Matching']
  }
}`,...(A=(I=g.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var B,N,R;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    expanded: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    entries: ['Initial Security Audit & Recommendations', 'Roadmap Workshops', 'Implementation of Security Solutions', 'Initial Baselining', 'Blueprint Matching']
  }
}`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,j,D;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    simple: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    entries: [{
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 4',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }]
  }
}`,...(D=(j=S.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var O,H,M;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    simple: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    subline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
    entries: [{
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }]
  }
}`,...(M=(H=v.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Se=["Default","Expanded","Simple","SimpleWithSubline"];export{g as Default,f as Expanded,S as Simple,v as SimpleWithSubline,Se as __namedExportsOrder,fe as default};
