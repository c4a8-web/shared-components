import{_ as x}from"./CU4Hs53D.js";import{_ as y}from"./DhR9t0hD.js";import{_ as w,c as r,b as l,a as p,n as a,d as T,F as P,r as E,T as M,o as s,e as h}from"./CxlEFrmm.js";import{U as u}from"./UjBAOQs5.js";import"./D8DpVsr-.js";import"./BdDtwVcA.js";import"./s5NYNtt9.js";import"./CMtOK7Wv.js";import"./B7evLEkz.js";import"./BPdwSOdP.js";import"./BUWw9eUD.js";import"./Bo61Q_GB.js";const v={tagName:"check-card",computed:{classList(){return["check-card vue-component",this.hasProducts?"check-card--products":null,this.classes?this.classes:null]},checkCardsContainerClass(){return["check-card__container utility-animation fade-in-bottom js-slick-carousel slick--single-list"]},containerValue(){return`col-lg-12 col-md-10 ${this.spacing?this.spacing:""} mb-9`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h3"},headlineClassesValue(){return`h2-font-size utility-animation fade-in-bottom ${this.headlineClasses?this.headlineClasses:""} ${this.subline?"mb-10":""}`},sublineClassesValue(){return`check-card__subline utility-animation fade-in-bottom e w-lg-65 ${this.sublineClasses?this.sublineClasses:"font-size-2"}`},itemClass(){return"check-card__slide"},hasProducts(){var n;return(n=this.checks[0])==null?void 0:n.product},carouselOptions(){const n=this.hasProducts?2:3;return{slidesToShow:n,slidesToScroll:n,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:this.checks.length>n,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,dots:this.checks.length>2}},{breakpoint:992,settings:{centerMode:!0,infinite:!0,centerPadding:this.hasProducts?"37px":"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}},{breakpoint:768,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:this.checks.length>1}}]}}},mounted(){M.initSlickSlider(this.$refs.container,this.carouselOptions),this.$refs.headline&&u.init([this.$refs.headline]),this.$refs.subline&&u.init([this.$refs.subline]),this.$refs.container&&u.init([this.$refs.container])},methods:{},props:{headline:String,headlineLevel:String,headlineClasses:String,subline:String,sublineClasses:String,spacing:String,checks:{default:null},classes:String}},j={class:"container"},B={key:0,class:"row"},z=["innerHTML"];function L(n,V,i,D,F,t){const S=x,d=y;return s(),r("div",{class:a(t.classList)},[l("div",j,[i.headline?(s(),r("div",B,[l("div",{class:a(t.containerValue)},[T(S,{level:t.headlineLevelValue,text:i.headline,classes:t.headlineClassesValue,"data-utility-animation-step":"1",ref:"headline"},null,8,["level","text","classes"]),i.subline?(s(),r("div",{key:0,class:a(t.sublineClassesValue),innerHTML:i.subline,"data-utility-animation-step":"1",ref:"subline"},null,10,z)):p("",!0)],2)])):p("",!0),l("div",{class:a(t.checkCardsContainerClass),"data-utility-animation-step":"1",ref:"container"},[(s(!0),r(P,null,E(i.checks,(e,_)=>(s(),r("div",{key:_,class:a(t.itemClass)},[t.hasProducts?(s(),h(d,{key:0,product:e.product,title:e.title,tag:e.tag,blogtitlepic:e.picture},null,8,["product","title","tag","blogtitlepic"])):(s(),h(d,{key:1,url:e.url,title:e.title,blogtitlepic:e.picture,excerpt:e.subline,"sub-points":e.subpoints,scope:e.scope,footer:e.footer,cta:e.cta,long:"true"},null,8,["url","title","blogtitlepic","excerpt","sub-points","scope","footer","cta"]))],2))),128))],2)])],2)}const A=w(v,[["render",L],["__scopeId","data-v-138f793e"]]);v.__docgenInfo={exportName:"default",displayName:"check-card",description:"",tags:{},props:[{name:"headline",type:{name:"string"}},{name:"headlineLevel",type:{name:"string"}},{name:"headlineClasses",type:{name:"string"}},{name:"subline",type:{name:"string"}},{name:"sublineClasses",type:{name:"string"}},{name:"spacing",type:{name:"string"}},{name:"checks",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"classes",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/check-card.vue"]};const O=[{url:"/",scope:"Umfang: 0,5 Tage",title:"glueckkanja Quick-Check",subline:"Bei glueckkanja sitzt du nicht nur direkt an der Microsoft-Quelle- du profitierst auch von einer Microsoft-Expertise lorem ipsum dolor sit amet erat non proident",picture:"blog/pics/img-quick-check.png",subpoints:["Bei glueckkanja sitzt du nicht nur direkt an der Mircrosoft-Quelle- du profitierst auch von einer Microsoft-Expertise, die so kaum ein anderes IT-Beratungsunternehmen in Deutschland hat","Dir stehen bei glueckkanja viele Türen offen und","Auch wenn du heute nicht so weit bist"],cta:{text:"Lorem ipsum",href:"https://www.youtube.com/watch?v=m2pa27Hv8K0"}},{title:"glueckkanja Detailed-Check",scope:"Umfang: 2-3 Tage",subline:"Bei glueckkanja sitzt du nicht nur direkt an der Microsoft-Quelle- du profitierst auch von einer Microsoft-Expertise",picture:"blog/pics/img-detailed-check.png",subpoints:["Bei glueckkanja sitzt du nicht nur direkt an der Mircrosoft-Quelle- du profitierst auch von einer Microsoft-Expertise, die so kaum ein anderes IT-Beratungsunternehmen in Deutschland hat","Dir stehen bei glueckkanja viele Türen offen und","Auch wenn du heute nicht so weit bist - wir","machen dich zum Experten für unsere Produkte - wenn du die richtigen Fähigkeiten mitbringst"]},{title:"glueckkanja 3",scope:"Umfang: 5 Tage",subline:"Bei glueckkanja sitzt du nicht nur direkt an der Microsoft-Quelle- du profitierst auch von einer Microsoft-Expertise",picture:"blog/pics/img-detailed-check.png",subpoints:["Bei glueckkanja sitzt du nicht nur direkt an der Mircrosoft-Quelle- du profitierst auch von einer Microsoft-Expertise, die so kaum ein anderes IT-Beratungsunternehmen in Deutschland hat","Dir stehen bei glueckkanja viele Türen offen und","Auch wenn du heute nicht so weit bist - wir","machen dich zum Experten für unsere Produkte - wenn du die richtigen Fähigkeiten mitbringst"]}],J={component:A,argTypes:{headline:{description:"Headline of Check Cards",type:"string"},level:{description:"Headline Level of Check Cards",control:{type:"text"},type:{summary:"Headline Levels",detail:"h1, h2, h3, h4"}},headlineClasses:{description:"Headline Classes of Check Cards",type:"string"},subline:{description:"Subline of Check Cards",type:"string"},sublineClasses:{description:"Subline Classes of Check Cards",type:"string"},spacing:{description:"Adds helper classes for the spacing",control:{type:"text"},type:{summary:"Bootstrap Spacing",detail:"space-bottom-1, space-bottom-2, space-top-1, space-top-2"}},checks:{description:"Checks Content",control:{type:"array"},required:!0}},title:"Components/Check Card"},o={args:{checks:O,headline:"Wir checken jetzt ihre IT-Sicherheit on Premises und in der Cloud",level:"h2",headlineClasses:"text-black",subline:"<strong>In Zusammenarbeit mit Microsoft sind verschiedene </strong>Video Casestudies im Rahmen useres '100% Cloud' Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung"}},c={args:{headline:"Plan comparison",level:"h2",headlineClasses:"bold text-black text-center",checks:[{title:"Unified Contact",picture:"products/unified-contacts/unified-contacts-products-header.png",product:[{title:"Tenant",subpoints:[{subpoint:"Runs in your tenant (SaaS)"}]},{title:"Contact Sources",subpoints:[{subpoint:"Azure AD users & contacts"},{included:!0,subpoint:"Personal Exchange Online contacts"},{subpoint:"SharePoint Online list"}]},{title:"Other",subpoints:[{included:!0,subpoint:"Support service"},{subpoint:"Favorite contacts list"}]}]},{title:"Unified Contact",tag:{text:"Free",color:"var(--color-black)",bgColor:"var(--color-uc-yellow)"},picture:"products/unified-contacts/unified-contacts-products-header.png",product:[{title:"Tenant",subpoints:[{included:!0,subpoint:"Runs in your tenant (SaaS)"}]},{title:"Contact Sources",subpoints:[{subpoint:"Azure AD users & contacts"},{included:!0,subpoint:"Personal Exchange Online contacts"},{subpoint:"SharePoint Online list"}]},{title:"Other",subpoints:[{included:!0,subpoint:"Support service"},{subpoint:"Favorite contacts list"}]}]}]}};var m,g,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checks: Checks,
    headline: 'Wir checken jetzt ihre IT-Sicherheit on Premises und in der Cloud',
    level: 'h2',
    headlineClasses: 'text-black',
    subline: "<strong>In Zusammenarbeit mit Microsoft sind verschiedene </strong>Video Casestudies im Rahmen useres '100% Cloud' Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung"
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,k,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headline: 'Plan comparison',
    level: 'h2',
    headlineClasses: 'bold text-black text-center',
    checks: [{
      title: 'Unified Contact',
      picture: 'products/unified-contacts/unified-contacts-products-header.png',
      product: [{
        title: 'Tenant',
        subpoints: [{
          subpoint: 'Runs in your tenant (SaaS)'
        }]
      }, {
        title: 'Contact Sources',
        subpoints: [{
          subpoint: 'Azure AD users & contacts'
        }, {
          included: true,
          subpoint: 'Personal Exchange Online contacts'
        }, {
          subpoint: 'SharePoint Online list'
        }]
      }, {
        title: 'Other',
        subpoints: [{
          included: true,
          subpoint: 'Support service'
        }, {
          subpoint: 'Favorite contacts list'
        }]
      }]
    }, {
      title: 'Unified Contact',
      tag: {
        text: 'Free',
        color: 'var(--color-black)',
        bgColor: 'var(--color-uc-yellow)'
      },
      picture: 'products/unified-contacts/unified-contacts-products-header.png',
      product: [{
        title: 'Tenant',
        subpoints: [{
          included: true,
          subpoint: 'Runs in your tenant (SaaS)'
        }]
      }, {
        title: 'Contact Sources',
        subpoints: [{
          subpoint: 'Azure AD users & contacts'
        }, {
          included: true,
          subpoint: 'Personal Exchange Online contacts'
        }, {
          subpoint: 'SharePoint Online list'
        }]
      }, {
        title: 'Other',
        subpoints: [{
          included: true,
          subpoint: 'Support service'
        }, {
          subpoint: 'Favorite contacts list'
        }]
      }]
    }]
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const X=["CheckCard","Products"];export{o as CheckCard,c as Products,X as __namedExportsOrder,J as default};
