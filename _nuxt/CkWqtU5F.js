import{_ as x}from"./D8DpVsr-.js";import{_ as w,c as f,o as i,r as E,e as y,w as b,d as c,f as v,n as p,u as B,F as I,b as m,T as S,a as D}from"./CxlEFrmm.js";import{_ as C}from"./Dq3WPmkH.js";import{S as W}from"./FmeOhSOs.js";import{U as N}from"./UjBAOQs5.js";import"./BdDtwVcA.js";const k={tagName:"logo-list-items",computed:{},methods:{getItemComponent(t){return t!=null&&t.url?"a":"span"},getDelay(t){const s=this.getIndex(t),n=s>0?100:0;return`--utility-animation-delay: ${`${s*n}ms`};`},getIndex(t){return this.isClone?this.list.length+t:t}},props:{list:Array,isOverlapping:Boolean,isClone:Boolean}};function O(t,s,n,r,u,e){const o=x;return i(!0),f(I,null,E(n.list,(l,g)=>(i(),y(B(e.getItemComponent(l)),{href:l.url,target:"_blank",rel:"noopener",class:p(["logo-list__item justify-content-center align-items-center fade-in-bottom",{"py-8 px-4 mb-3":!n.isOverlapping,"logo-list--clone":n.isClone}]),title:l.title,"data-utility-animation-step":"1",style:v(e.getDelay(g)),key:g},{default:b(()=>[c(o,{img:l.img,alt:l.alt,preset:"logoList",cloudinary:!0,lazy:!0},null,8,["img","alt"])]),_:2},1032,["href","class","title","style"]))),128)}const U=w(k,[["render",O]]);k.__docgenInfo={exportName:"default",displayName:"logo-list-items",description:"",tags:{},props:[{name:"list",type:{name:"array"}},{name:"isOverlapping",type:{name:"boolean"}},{name:"isClone",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/logo-list-items.vue"]};const L={tagName:"logo-list",mounted(){this.$refs.root&&(this.sticky&&W.init([this.$refs.root]),N.init([this.$refs.root]))},computed:{defaultSpacing(){},classList(){return["logo-list container utility-animation vue-component",this.aspectRatio?"logo-list--aspect-ratio":"",this.sticky?"is-sticky-scroller":"",this.spacing?this.spacing:"py-4",this.isOverlapping?"logo-list--is-overlapping":""]},isOverlapping(){return S.isTrue(this.overlapping)},columnsValue(){const s=parseInt(this.columns);return"--column-width: "+`calc(${100/(Number.isNaN(s)?4:s)}% - 3px)`},aspectRatioValue(){if(!this.aspectRatio)return"";const t=this.aspectRatio.split("/");return t.length!=2?"":`--aspect-ratio-width: ${t[0]}; --aspect-ratio-height: ${t[1]}`},styles(){return[this.columnsValue,this.aspectRatioValue,this.bgColor?`--logo-list-background: ${this.bgColor}`:""].join("; ")}},props:{list:Array,sticky:{default:!1},spacing:String,columns:Number,aspectRatio:{default:!1},overlapping:{default:!1},bgColor:String}},z={class:"logo-list__row row"};function H(t,s,n,r,u,e){const o=U,l=C;return i(),f("div",{class:p(e.classList),style:v(e.styles),ref:"root"},[m("div",z,[c(l,{classes:"logo-list__scroller","hide-container":!e.isOverlapping,"hide-container-class":!0},{default:b(()=>[m("div",{class:p(["logo-list__col col d-flex",{"flex-wrap":!e.isOverlapping}])},[c(o,{list:n.list,"is-overlapping":e.isOverlapping},null,8,["list","is-overlapping"]),e.isOverlapping?(i(),y(o,{key:0,list:n.list,"is-clone":"true","is-overlapping":e.isOverlapping},null,8,["list","is-overlapping"])):D("",!0)],2)]),_:1},8,["hide-container"])])],6)}const M=w(L,[["render",H]]);L.__docgenInfo={exportName:"default",displayName:"logo-list",description:"",tags:{},props:[{name:"list",type:{name:"array"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spacing",type:{name:"string"}},{name:"columns",type:{name:"number"}},{name:"aspectRatio",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"overlapping",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bgColor",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/logo-list.vue"]};const $={component:M,argTypes:{},title:"Components/LogoList"},a={args:{list:[{img:"/c_lpad,h_60,w_180/logos/cust-dbschenker.png",alt:"DB Schenker",url:"https://youtu.be/ABUieErMHLU",title:"DB Schenker"},{img:"/c_lpad,h_60,w_180/logos/cust-dmgmori.png",alt:"DMG MORI",url:"https://de.dmgmori.com",title:"DMG MORI"},{img:"/c_lpad,h_60,w_180/logos/cust-ewe-netz.png",alt:"EWE",url:"https://www.ewe-netz.de",title:"EWE"},{img:"/c_lpad,h_60,w_180/logos/cust-enbw.png",alt:"EnBW",url:"https://www.enbw.com",title:"EnBW"},{img:"/c_lpad,h_60,w_160/logos/cust-enpal.png",alt:"Enpal",url:"https://www.enpal.de",title:"Enpal"},{img:"/c_lpad,h_120,w_180/logos/cust-fuchs.png",alt:"Fuchs Schmierstoffe",url:"https://youtu.be/U2ExmypuUvs",title:"Fuchs Schmierstoffe"},{img:"/c_lpad,h_60,w_180/logos/cust-freudenberg.png",alt:"Freudenberg",url:"https://www.freudenberg.com",title:"Freudenberg"},{img:"/c_lpad,h_60,w_160/logos/cust-haniel.png",alt:"Haniel",url:"https://youtu.be/hV97zDTlDko",title:"Haniel"},{img:"/c_lpad,h_60,w_180/logos/cust-microsoft.png",alt:"Microsoft",url:"https://www.microsoft.com/en-us/microsoft-365/business?rtc=1",title:"Microsoft"},{img:"/c_lpad,h_60,w_100/logos/cust-swb.png",alt:"SWB",url:"https://www.swb.de",title:"SWB"},{img:"/c_lpad,h_100,w_180/logos/cust-uniper.png",alt:"Uniper",url:"https://youtu.be/ThxpyUOz2R8",title:"Uniper"},{img:"/c_lpad,h_130,w_80/logos/cust-zwilling.png",alt:"ZWILLING J.A. Henckels Deutschland GmbH",url:"https://www.zwilling.com/de",title:"ZWILLING J.A. Henckels Deutschland GmbH"}]}};var _,h,d;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    list: [{
      img: '/c_lpad,h_60,w_180/logos/cust-dbschenker.png',
      alt: 'DB Schenker',
      url: 'https://youtu.be/ABUieErMHLU',
      title: 'DB Schenker'
    }, {
      img: '/c_lpad,h_60,w_180/logos/cust-dmgmori.png',
      alt: 'DMG MORI',
      url: 'https://de.dmgmori.com',
      title: 'DMG MORI'
    }, {
      img: '/c_lpad,h_60,w_180/logos/cust-ewe-netz.png',
      alt: 'EWE',
      url: 'https://www.ewe-netz.de',
      title: 'EWE'
    }, {
      img: '/c_lpad,h_60,w_180/logos/cust-enbw.png',
      alt: 'EnBW',
      url: 'https://www.enbw.com',
      title: 'EnBW'
    }, {
      img: '/c_lpad,h_60,w_160/logos/cust-enpal.png',
      alt: 'Enpal',
      url: 'https://www.enpal.de',
      title: 'Enpal'
    }, {
      img: '/c_lpad,h_120,w_180/logos/cust-fuchs.png',
      alt: 'Fuchs Schmierstoffe',
      url: 'https://youtu.be/U2ExmypuUvs',
      title: 'Fuchs Schmierstoffe'
    }, {
      img: '/c_lpad,h_60,w_180/logos/cust-freudenberg.png',
      alt: 'Freudenberg',
      url: 'https://www.freudenberg.com',
      title: 'Freudenberg'
    }, {
      img: '/c_lpad,h_60,w_160/logos/cust-haniel.png',
      alt: 'Haniel',
      url: 'https://youtu.be/hV97zDTlDko',
      title: 'Haniel'
    }, {
      img: '/c_lpad,h_60,w_180/logos/cust-microsoft.png',
      alt: 'Microsoft',
      url: 'https://www.microsoft.com/en-us/microsoft-365/business?rtc=1',
      title: 'Microsoft'
    }, {
      img: '/c_lpad,h_60,w_100/logos/cust-swb.png',
      alt: 'SWB',
      url: 'https://www.swb.de',
      title: 'SWB'
    }, {
      img: '/c_lpad,h_100,w_180/logos/cust-uniper.png',
      alt: 'Uniper',
      url: 'https://youtu.be/ThxpyUOz2R8',
      title: 'Uniper'
    }, {
      img: '/c_lpad,h_130,w_80/logos/cust-zwilling.png',
      alt: 'ZWILLING J.A. Henckels Deutschland GmbH',
      url: 'https://www.zwilling.com/de',
      title: 'ZWILLING J.A. Henckels Deutschland GmbH'
    }]
  }
}`,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const J=["LogoList"];export{a as LogoList,J as __namedExportsOrder,$ as default};
