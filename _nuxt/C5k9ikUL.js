import{_ as L}from"./Dbjosn9x.js";import{_ as P}from"./mbBm67Yn.js";import{_ as N,c as i,b as a,n as d,d as O,a as s,w as R,F as h,r as u,o as n,g as D,t as c,f as H,e as W}from"./hHSgbJcN.js";const F={tagName:"v-table",props:{headline:{type:String,default:null},table:{type:Array,required:!0},hideContainer:{type:Boolean,default:!1},theme:{type:String,default:"striped"},classes:{type:String,default:""},head:{type:Boolean,default:!1},agenda:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},headBg:{type:String},headColor:{type:String},bgImg:{type:String}},mounted(){this.setStyle()},methods:{setStyle(){this.$refs.head&&(this.$refs.head.style.backgroundColor=this.headBg,this.$refs.head.style.color=this.headColor),this.$refs.headSticky&&(this.$refs.head.style.backgroundColor=this.bgImg?"transparent":this.headBg,this.$refs.head.style.backgroundImage=this.bgImg?`url(${this.bgImg})`:"none",this.$refs.head.style.backgroundSize=this.bgImg?"100% 100%":"",this.$refs.headSticky.style.background=this.bgImg?"var(--color-gk-white)":"")}},computed:{tableHideContainer(){return this.hideContainer},styleClass(){return"table-"+this.theme},tableRows(){return this.head?this.table.slice(1):this.table}}},V={key:0,class:"agenda"},K={key:0},U={key:0,ref:"head"},G=["innerHTML"],j=["innerHTML"],J=["innerHTML"],q=["innerHTML"];function Z(X,l,e,Y,$,o){const _=L,z=P;return n(),i("div",null,[a("div",{class:d([o.tableHideContainer?"mb-8":"container","mt-8 mt-lg-10"])},[a("div",{class:d([o.tableHideContainer?"":"row"])},[a("div",{class:d(["table-responsive",e.classes])},[O(_,{level:"h2",class:"space-bottom-1"},{default:R(()=>[D(c(e.headline),1)]),_:1}),e.agenda?(n(),i("table",V,[(n(!0),i(h,null,u(e.table,t=>(n(),i("tr",{key:t.id},[a("td",null,[a("span",null,c(t.timeFrom),1),t.timeTo?(n(),i("span",K," - "+c(t.timeTo),1)):s("",!0),l[0]||(l[0]=a("br",null,null,-1)),a("strong",null,c(t.title),1),l[1]||(l[1]=a("br",null,null,-1)),t.speaker?(n(),i("em",{key:1,style:H(t.highlight?"--color-highlight-underline: var(--color-gk-yellow)":"--color-highlight-underline: null"),class:"highlight-underline"},c(t.speaker),5)):s("",!0),a("p",null,c(t.description),1)])]))),128))])):s("",!0),a("table",{class:d(["v-table table",e.sticky?"sticky":"",o.styleClass])},[e.head&&e.table.length?(n(),i("thead",U,[a("tr",null,[e.sticky?(n(),i("th",{key:0,class:"stickyColumn col-3 col-lg-4 py-3 font-size-1",innerHTML:e.table[0][0],ref:"headSticky"},null,8,G)):s("",!0),(n(!0),i(h,null,u(e.sticky?e.table[0].length-1:e.table[0],(t,r)=>(n(),i("th",{key:"head-"+r,innerHTML:e.sticky?e.table[0][r+1]:t},null,8,j))),128))])],512)):s("",!0),a("tbody",null,[(n(!0),i(h,null,u(o.tableRows,(t,r)=>(n(),i("tr",{key:"row-"+r},[e.sticky?(n(),i("td",{key:0,class:"stickyColumn col-3 col-lg-4",innerHTML:o.tableRows[r][0]},null,8,J)):s("",!0),(n(!0),i(h,null,u(e.sticky?t.length-1:t,(y,b)=>(n(),i("td",{key:"cell-"+r+"-"+b},[["check","x"].includes(t[y])?(n(),W(z,{key:0,icon:t[y]==="check"?"check-mark":"x-mark",color:"var(--color-black)",size:"medium"},null,8,["icon"])):(n(),i("div",{key:1,innerHTML:e.sticky?e.table[r+1][b+1]:y},null,8,q))]))),128))]))),128))])],2)],2)],2)],2)])}const Q=N(F,[["render",Z]]);F.__docgenInfo={exportName:"default",displayName:"v-table",description:"",tags:{},props:[{name:"headline",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"table",type:{name:"array"},required:!0},{name:"hideContainer",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'striped'"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"head",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"agenda",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headBg",type:{name:"string"}},{name:"headColor",type:{name:"string"}},{name:"bgImg",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/v-table.vue"]};const ie={title:"Components/Table",component:Q,argTypes:{}},m={args:{head:"true",hideContainer:"true",table:[["header1","header2"],["data1","data2"]]}},g={args:{agenda:"true",headline:"Event-Agenda",head:"true",HideContainer:"true",table:[{timeFrom:"09:00",timeTo:"09:30",title:"Einlass & Warm-Up inkl. Frühstück"},{timeFrom:"09:30",timeTo:"09:45",title:"Begrüßung & Einführung"},{timeFrom:"09:45",timeTo:"10:30",title:"Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)",speaker:"Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)",highlight:!0,description:"Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen."},{timeFrom:"10:30",timeTo:"11:30",title:"Windows 365 & Link vs. Azure Virtual Desktop",speaker:"Timo Herzig, Cloud Architect",description:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben."},{timeFrom:"ab 11:30",to:"12:30",title:"Mittagspause"},{timeFrom:"12:30",timeTo:"13:30",title:"Microsoft Lizenz Wrap-Up & Azure FinOps",speaker:"Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)",highlight:!0,description:"Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext."},{timeFrom:"13:30",timeTo:"14:30",title:"Microsoft 365 Copilot Control System",speaker:"Christoph Wilfing, CEO & Microsoft MVP (atwork)",highlight:!0},{timeFrom:"14:30",timeTo:"15:30",title:"Modern Client Management at Scale (Evergreen Approach)",speaker:"Alexander Schlindwein, Managed Services Lead"},{timeFrom:"ab 15:30",title:"Abschluss & Apéro",description:"Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen."}]}},k={args:{head:"true",headBg:"var(--color-gk-violet)",headColor:"var(--color-gk-white)",theme:"verticallyStriped",sticky:"true",table:[["Risk Measures / GK Services","NIS2","CSOC","APT Response","Preventive Services","Managed Red Tennant","AzERE","Data Security","Workplace / Azure"],["Risk Analysis and Information System Security","12.2 a)","","","check","","","check",""],["Incident Handling","12.2 b)","check","check","","","","",""],["Business Continuity","12.2 c)","","check","","","check","",""],["Supply Chain Security","12.2 d)","check","","","","","",""],["Security in Network and Information Systems","12.2 e)","check","","","check","","","check"],["Effectiveness of Cybersecurity Risk Management Measures","12.2 f)","check","","","","","",""],["Basic Computer Hygiene Practices and Cybersecurity Training","12.2 g)","check","","","","","",""],["Cryptography","12.2 h)","","","","","","check","check"],["Human Resources Security, Access Control Policies and Asset Management","12.2 i)","","","","","","","check"],["Multifactor Authentication or Secured Communication","12.2 j)","","","","","","","check"]]}},p={args:{head:"true",headBg:"var(--color-gk-yellow)",headColor:"#02071f",bgImg:"https://res.cloudinary.com/c4a8/image/upload/v1757063548/products/scepman/scepman-products-header.jpg",theme:"products",sticky:"true",table:[["","MICROSOFT CLOUD PKI","SCEPMAN CLOUD PKI EDITION","SCEPMAN ENTERPRISE EDITION"],["CERTIFICATE SUPPORT","","",""],["Intune managed devices (Windows, MacOS, iOS/iPadOS, Android)","check","x","check"],["Linux devices","x","check","check"],["Active Directory Auto-Enrollment","x","check","check"],["Servers","x","check","check"],["Network devices","x","check","check"],["IoT devices","x","check","check"],["Manual and API-based certificate issuance","x","check","check"],["Third-party MDM solutions (Jamf Pro, Google Workspace MDM, Kandji, Mosyle, SOTI MobiControl, and more)","x","check","check"]]}};var f,S,C;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    head: 'true',
    hideContainer: 'true',
    table: [['header1', 'header2'], ['data1', 'data2']]
  }
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var v,M,T;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    agenda: 'true',
    headline: 'Event-Agenda',
    head: 'true',
    HideContainer: 'true',
    table: [{
      timeFrom: '09:00',
      timeTo: '09:30',
      title: 'Einlass & Warm-Up inkl. Frühstück'
    }, {
      timeFrom: '09:30',
      timeTo: '09:45',
      title: 'Begrüßung & Einführung'
    }, {
      timeFrom: '09:45',
      timeTo: '10:30',
      title: 'Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)',
      speaker: 'Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)',
      highlight: true,
      description: 'Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.'
    }, {
      timeFrom: '10:30',
      timeTo: '11:30',
      title: 'Windows 365 & Link vs. Azure Virtual Desktop',
      speaker: 'Timo Herzig, Cloud Architect',
      description: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.'
    }, {
      timeFrom: 'ab 11:30',
      to: '12:30',
      title: 'Mittagspause'
    }, {
      timeFrom: '12:30',
      timeTo: '13:30',
      title: 'Microsoft Lizenz Wrap-Up & Azure FinOps',
      speaker: 'Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)',
      highlight: true,
      description: 'Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext.'
    }, {
      timeFrom: '13:30',
      timeTo: '14:30',
      title: 'Microsoft 365 Copilot Control System',
      speaker: 'Christoph Wilfing, CEO & Microsoft MVP (atwork)',
      highlight: true
    }, {
      timeFrom: '14:30',
      timeTo: '15:30',
      title: 'Modern Client Management at Scale (Evergreen Approach)',
      speaker: 'Alexander Schlindwein, Managed Services Lead'
    }, {
      timeFrom: 'ab 15:30',
      title: 'Abschluss & Apéro',
      description: 'Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen.'
    }]
  }
}`,...(T=(M=g.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var x,A,E;k.parameters={...k.parameters,docs:{...(x=k.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    head: 'true',
    headBg: 'var(--color-gk-violet)',
    headColor: 'var(--color-gk-white)',
    theme: 'verticallyStriped',
    sticky: 'true',
    table: [['Risk Measures / GK Services', 'NIS2', 'CSOC', 'APT Response', 'Preventive Services', 'Managed Red Tennant', 'AzERE', 'Data Security', 'Workplace / Azure'], ['Risk Analysis and Information System Security', '12.2 a)', '', '', 'check', '', '', 'check', ''], ['Incident Handling', '12.2 b)', 'check', 'check', '', '', '', '', ''], ['Business Continuity', '12.2 c)', '', 'check', '', '', 'check', '', ''], ['Supply Chain Security', '12.2 d)', 'check', '', '', '', '', '', ''], ['Security in Network and Information Systems', '12.2 e)', 'check', '', '', 'check', '', '', 'check'], ['Effectiveness of Cybersecurity Risk Management Measures', '12.2 f)', 'check', '', '', '', '', '', ''], ['Basic Computer Hygiene Practices and Cybersecurity Training', '12.2 g)', 'check', '', '', '', '', '', ''], ['Cryptography', '12.2 h)', '', '', '', '', '', 'check', 'check'], ['Human Resources Security, Access Control Policies and Asset Management', '12.2 i)', '', '', '', '', '', '', 'check'], ['Multifactor Authentication or Secured Communication', '12.2 j)', '', '', '', '', '', '', 'check']]
  }
}`,...(E=(A=k.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var w,I,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    head: 'true',
    headBg: 'var(--color-gk-yellow)',
    headColor: '#02071f',
    bgImg: 'https://res.cloudinary.com/c4a8/image/upload/v1757063548/products/scepman/scepman-products-header.jpg',
    theme: 'products',
    sticky: 'true',
    table: [['', 'MICROSOFT CLOUD PKI', 'SCEPMAN CLOUD PKI EDITION', 'SCEPMAN ENTERPRISE EDITION'], ['CERTIFICATE SUPPORT', '', '', ''], ['Intune managed devices (Windows, MacOS, iOS/iPadOS, Android)', 'check', 'x', 'check'], ['Linux devices', 'x', 'check', 'check'], ['Active Directory Auto-Enrollment', 'x', 'check', 'check'], ['Servers', 'x', 'check', 'check'], ['Network devices', 'x', 'check', 'check'], ['IoT devices', 'x', 'check', 'check'], ['Manual and API-based certificate issuance', 'x', 'check', 'check'], ['Third-party MDM solutions (Jamf Pro, Google Workspace MDM, Kandji, Mosyle, SOTI MobiControl, and more)', 'x', 'check', 'check']]
  }
}`,...(B=(I=p.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const ae=["Table","Agenda","StickyColumn","Products"];export{g as Agenda,p as Products,k as StickyColumn,m as Table,ae as __namedExportsOrder,ie as default};
