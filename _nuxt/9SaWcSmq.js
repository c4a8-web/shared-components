import{E as f}from"./CBOqQJrR.js";import{_ as y,c as u,b as x,F as k,r as w,n as b,o as c,e as T,m as M}from"./CxlEFrmm.js";import"./BFtaTPt0.js";import"./D8DpVsr-.js";import"./BdDtwVcA.js";import"./CFdLTf4K.js";import"./CMtOK7Wv.js";import"./CU4Hs53D.js";import"./BUWw9eUD.js";import"./UjBAOQs5.js";const h={name:"EventList",props:{list:{type:Array,required:!0},overlap:{type:Boolean,default:!1},settings:{type:Array,default:()=>[]},sticky:{type:Boolean,default:!1},spacing:{type:String,default:"space-bottom-3"}},computed:{mergedTeasers(){var e;let a=0;const t=[];return(e=this.list)==null||e.forEach((n,o)=>{const s=o+1;let r=this.settings[a]||{},i=n.variant||r.variant;if(r.teaser){const v=this.getTeaserProps(r.teaser,{},i,s);t.push(v),a++,r=this.settings[a]||{},i=n.variant||r.variant}const m=this.getTeaserProps(n,n,i,s);t.push(m),a++}),t}},methods:{getTeaserProps(a,t,e,n){let o={...t,...a};return o.variant=e||t.variant,o.index=n,o}}},N={class:"event-list__row row col-lg-12"};function _(a,t,e,n,o,s){const r=f;return c(),u("div",{class:b(["event-list container",{"event-list--overlap":e.overlap,"is-sticky-scroller":e.sticky,[e.spacing]:!0}])},[x("div",N,[(c(!0),u(k,null,w(s.mergedTeasers,(i,m)=>(c(),T(r,M({key:m,ref_for:!0},i),null,16))),128))])],2)}const E=y(h,[["render",_]]);h.__docgenInfo={displayName:"EventList",exportName:"default",description:"",tags:{},props:[{name:"list",type:{name:"array"},required:!0},{name:"overlap",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"settings",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"'space-bottom-3'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/event-list.vue"]};const P={component:E,argTypes:{list:{description:"List of Events",type:"array"},settings:{description:"Event Teaser Variant/Size",type:"array"}},title:"Components/Event List"},l={args:{list:[{url:"javascript:void(0)",headline:"Neue Headline 2. Thema, maximal 2 Zeilig",content:"Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was",moment:"16.02.2022",time:"14-15 Uhr",shapes:[{color:"var(--color-gk-petrol)"},{color:"var(--color-gk-yellow)"}],webcast:!0,author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Neuer Webcast",icon:""},cta:{text:"Jetzt anmelden",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},{url:"javascript:void(0)",headline:"Neue Headline 2. Thema, maximal 2 Zeilig",content:"<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>",moment:"16.02.2022",time:"14-15 Uhr",shapes:[{color:"var(--color-gk-green)"}],webcast:!0,author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Neuer Webcast",icon:""},cta:{text:"Jetzt anmelden",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-gk-yellow)"},{color:"var(--color-gk-mid-blue)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-gk-yellow)"},{color:"var(--color-gk-mid-blue)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-gk-yellow)"},{color:"var(--color-gk-mid-blue)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-gk-yellow)"},{color:"var(--color-gk-mid-blue)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"}],settings:[{variant:6},{variant:6},{variant:8,teaser:{url:"javascript:void(0)",teaser:!0,headline:"Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",content:"<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>",cta:{text:"Schulungen anfragen",skin:"secondary is-light",button:!0}}},{variant:4}]}};var g,d,p;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list: [{
      url: 'javascript:void(0)',
      headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
      content: 'Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was',
      moment: '16.02.2022',
      time: '14-15 Uhr',
      shapes: [{
        color: 'var(--color-gk-petrol)'
      }, {
        color: 'var(--color-gk-yellow)'
      }],
      webcast: true,
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Neuer Webcast',
        icon: ''
      },
      cta: {
        text: 'Jetzt anmelden',
        href: 'javascript:void(0)',
        skin: 'primary',
        button: true,
        external: true
      }
    }, {
      url: 'javascript:void(0)',
      headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
      content: '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
      moment: '16.02.2022',
      time: '14-15 Uhr',
      shapes: [{
        color: 'var(--color-gk-green)'
      }],
      webcast: true,
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Neuer Webcast',
        icon: ''
      },
      cta: {
        text: 'Jetzt anmelden',
        href: 'javascript:void(0)',
        skin: 'primary',
        button: true,
        external: true
      }
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-gk-yellow)'
      }, {
        color: 'var(--color-gk-mid-blue)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-gk-yellow)'
      }, {
        color: 'var(--color-gk-mid-blue)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-gk-yellow)'
      }, {
        color: 'var(--color-gk-mid-blue)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-gk-yellow)'
      }, {
        color: 'var(--color-gk-mid-blue)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }],
    settings: [{
      variant: 6
    }, {
      variant: 6
    }, {
      variant: 8,
      teaser: {
        url: 'javascript:void(0)',
        teaser: true,
        headline: 'Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
        cta: {
          text: 'Schulungen anfragen',
          skin: 'secondary is-light',
          button: true
        }
      }
    }, {
      variant: 4
    }]
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const V=["EventList"];export{l as EventList,V as __namedExportsOrder,P as default};
