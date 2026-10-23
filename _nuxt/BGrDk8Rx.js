import{_ as k}from"./B8TPzmYh.js";import{l as T}from"./_1vLXP-S.js";import"./CU4Hs53D.js";import"./CxlEFrmm.js";import"./D8DpVsr-.js";import"./BdDtwVcA.js";const b={component:k,title:"Components/Event",argTypes:{title:{description:"The Title",type:"string"},date:{description:"The date of the element in YYYY-MM-DD or in DD.-DD.MM.YYYY format",type:"string"},category:{description:"The category",type:"string"},text:{description:"The text of the element",type:"string"},image:{description:"The image data object",type:"object"},bgColor:{description:"The background color of the date block",options:["","var(--color-gk-yellow)","var(--color-primary)"],control:{type:"select"}},color:{description:"The text color of the date block",options:["","var(--color-copy)","var(--color-copy-light)","var(--color-yellow-medium)"],control:{type:"select"}},timeColor:{description:"The text color of the category and the time text",options:["","var(--color-copy)","var(--color-copy-light)","var(--color-yellow-medium)"],control:{type:"select"}},time:{description:"The time of the element",type:"string"},url:{description:"The url of the element",type:"string"},classes:{description:"Additional Classes of the element",type:"string"}}},e={args:{title:"Event Title",date:"2020-01-01",category:"Event Category",text:"Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa"}},t={args:{title:"Event Title lorem ipsum dolor",date:"2023-12-17",category:"Event Category",text:"Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa",image:{img:"/events/event-thumb-tech-conf.jpg",alt:"Event Image",cloudinary:!0},bgColor:"var(--color-gk-yellow)",color:"var(--color-copy)",timeColor:"var(--color-yellow-medium)",time:"15-16 Uhr"}},o={args:{title:"Event Title lorem ipsum dolor",date:"10.-12.10.2023",category:"Event Category",text:"Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa",image:{img:"/shared-components/card-sec-motion-dus.png",alt:"Event Image",cloudinary:!0},bgColor:"var(--color-gk-yellow)",color:"var(--color-copy)",timeColor:"var(--color-yellow-medium)"}},r={args:{title:"Event Title",date:"2020-01-01",category:"Event Category",text:"Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa",external:!0,url:"https://www.google.com/search?q=glueckkanja"}},n={args:{title:"Event Title lorem ipsum dolor",moment:"2023-12-17",category:"Event Category",text:"Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa",image:{lottie:T,alt:"Event Image",cloudinary:!0},bgColor:"var(--color-gk-yellow)",color:"var(--color-copy)",timeColor:"var(--color-yellow-medium)",time:"15-16 Uhr"}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Event Title',
    date: '2020-01-01',
    category: 'Event Category',
    text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,c,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Event Title lorem ipsum dolor',
    date: '2023-12-17',
    category: 'Event Category',
    text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
    image: {
      img: '/events/event-thumb-tech-conf.jpg',
      alt: 'Event Image',
      cloudinary: true
    },
    bgColor: 'var(--color-gk-yellow)',
    color: 'var(--color-copy)',
    timeColor: 'var(--color-yellow-medium)',
    time: '15-16 Uhr'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Event Title lorem ipsum dolor',
    date: '10.-12.10.2023',
    category: 'Event Category',
    text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
    image: {
      img: '/shared-components/card-sec-motion-dus.png',
      alt: 'Event Image',
      cloudinary: true
    },
    bgColor: 'var(--color-gk-yellow)',
    color: 'var(--color-copy)',
    timeColor: 'var(--color-yellow-medium)'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,y,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Event Title',
    date: '2020-01-01',
    category: 'Event Category',
    text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
    external: true,
    url: 'https://www.google.com/search?q=glueckkanja'
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,C,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Event Title lorem ipsum dolor',
    moment: '2023-12-17',
    category: 'Event Category',
    text: 'Die IT-Messe der Goethe-Universität Frankfurt, Campus Bockenheim, Neue Mensa',
    image: {
      lottie: lottie1,
      alt: 'Event Image',
      cloudinary: true
    },
    bgColor: 'var(--color-gk-yellow)',
    color: 'var(--color-copy)',
    timeColor: 'var(--color-yellow-medium)',
    time: '15-16 Uhr'
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const U=["Default","YellowWithImage","MultipleDays","External","WithAnimation"];export{e as Default,r as External,o as MultipleDays,n as WithAnimation,t as YellowWithImage,U as __namedExportsOrder,b as default};
