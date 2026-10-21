import{_ as L}from"./Dbjosn9x.js";import{S as g}from"./o6rQEAVd.js";import{_ as D,c as s,b as n,a as f,e as H,k as V,m as w,F as v,r as b,f as _,t as G,n as x,S as N,o as i,d as I}from"./hHSgbJcN.js";import{F as O}from"./DPMFaKwf.js";import{U as h}from"./DXsy6Cm4.js";import"./BOV3asV6.js";import"./BzRxihbK.js";import"./mbBm67Yn.js";const q={tagName:"masonry-grid",data(){return{itemsChanged:!1,displayedCount:this.initialItemsCount||null,State:N,observer:null,containerHeight:0}},computed:{headlineValue(){return{...this.headline,level:this.headline.level||"h2",classes:`masonry-grid__headline ${this.headline.classes}`}},styleVars(){var a,l,u,t;const e=((a=this.columns)==null?void 0:a.sm)||1,o=((l=this.columns)==null?void 0:l.md)||e,r=((u=this.columns)==null?void 0:u.lg)||o,k=((t=this.columns)==null?void 0:t.xl)||r,p=this.gap;return{"--masonry-columns-sm":e,"--masonry-columns-md":o,"--masonry-columns-lg":r,"--masonry-columns-xl":k,"--masonry-gap":p}},clipperStyle(){return!this.showLoadMore||!this.containerHeight?{}:{maxHeight:`${this.containerHeight*.85}px`,overflow:"hidden"}},displayedItems(){return this.displayedCount===null||this.displayedCount>=this.items.length?this.items:this.items.slice(0,this.displayedCount+this.itemsPerLoad)},showLoadMore(){return this.initialItemsCount!==null&&this.displayedCount<this.items.length}},watch:{items(){this.itemsChanged=!0},initialItemsCount(e){e!==null&&(this.displayedCount=e)}},mounted(){this.reinitUtilityAnimation(),this.observer=new ResizeObserver(e=>{e.length&&(this.containerHeight=e[0].contentRect.height)}),this.observer.observe(this.$refs.group)},updated(){this.itemsChanged&&(this.itemsChanged=!1,this.reinitUtilityAnimation())},beforeDestroy(){this.observer&&this.observer.disconnect()},methods:{reinitUtilityAnimation(){this.observeOnScroll&&(!this.$refs.items||this.$refs.items.length===0||(h.instances=[],h.init(Array.from(this.$refs.items)),h.addObserver()))},loadMore(){this.itemsPerLoad?this.displayedCount=Math.min(this.displayedCount+this.itemsPerLoad,this.items.length):this.displayedCount=this.items.length,this.$nextTick(()=>{this.reinitUtilityAnimation()})}},props:{items:{type:Array,default:()=>[]},columns:{type:Object,default:()=>({sm:1,md:2,lg:3,xl:3})},gap:{type:String,default:"1rem"},observeOnScroll:{type:Boolean,default:!0},initialItemsCount:{type:Number,default:null},itemsPerLoad:{type:Number,default:6},headline:{type:Object,default:null},socials:{type:Array,default:()=>O.socials}}},z={class:"container"},E={class:"row"},F={class:"col"},B={class:"masonry-grid__header"},W={class:"masonry-grid__socials"},Q=["href"],T={key:0,class:"masonry-grid__load-more text-center"};function R(e,o,r,k,p,a){const l=L,u=g;return i(),s("div",{class:x(["masonry-grid",{[p.State.HAS_LOADING]:a.showLoadMore}])},[n("div",z,[n("div",E,[n("div",F,[n("header",B,[r.headline?(i(),H(l,V(w({key:0},a.headlineValue)),null,16)):f("",!0),n("div",W,[(i(!0),s(v,null,b(r.socials,(t,m)=>(i(),s("a",{href:t.url,target:"_blank",rel:"noopener",class:"masonry-grid__social-item custom",key:m},[n("i",{class:x([t.icon,"fab"])},null,2)],8,Q))),128))])]),n("div",{class:"masonry-grid__clipper",style:_(a.clipperStyle)},[n("div",{class:"masonry-grid__container utility-animation__group vue-component",style:_(a.styleVars),ref:"group"},[(i(!0),s(v,null,b(a.displayedItems,(t,m)=>(i(),s("div",{key:(t==null?void 0:t.id)||m,class:"masonry-item",ref_for:!0,ref:"items"},[I(u,w({ref_for:!0},t,{index:m,hasAnimation:!0}),null,16,["index"])]))),128))],4)],4),a.showLoadMore?(i(),s("div",T,[n("button",{class:"masonry-grid__load-more-button",onClick:o[0]||(o[0]=(...t)=>a.loadMore&&a.loadMore(...t))},G(e.$t("loadMorePosts")),1)])):f("",!0)])])])],2)}const y=D(q,[["render",R]]);q.__docgenInfo={exportName:"default",displayName:"masonry-grid",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"object"},defaultValue:{func:!1,value:`{
  sm: 1,
  md: 2,
  lg: 3,
  xl: 3
}`}},{name:"gap",type:{name:"string"},defaultValue:{func:!1,value:"'1rem'"}},{name:"observeOnScroll",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"initialItemsCount",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"itemsPerLoad",type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"headline",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"socials",type:{name:"array"},defaultValue:{func:!0,value:"() => FooterData.socials"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/masonry-grid.vue"]};const ae={component:y,argTypes:{},title:"Components/Masonry Grid"},M=[{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1770218107043,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:1",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"Launching our new whitepaper on Zero Trust adoption. Learn how to implement comprehensive security strategies.",stats:{likes:45,comments:3,reposts:1},media:[{type:"image",src:"https://picsum.photos/id/1024/800/600"}]},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1770218107043,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:2",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"Proud of our team winning the Partner of the Year award! 🏆",stats:{likes:210,comments:22,reposts:7},media:[{type:"image",src:"https://picsum.photos/id/1005/800/900"}]},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1770201385023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:3",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"Quick tip: Secure score improvements you can do today.",stats:{likes:80,comments:6,reposts:2}},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1770124985023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:4",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"Event recap: Key takeaways from our latest webinar on cloud security.",stats:{likes:60,comments:4,reposts:1},media:[{type:"image",src:"https://picsum.photos/id/1035/800/500"}]},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1770038585023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:5",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"We are hiring! Join our growing engineering team.",stats:{likes:120,comments:10,reposts:5}},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1769952185023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:6",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"AVD automation – a behind-the-scenes look at our deployment process.",stats:{likes:90,comments:8,reposts:3},media:[{type:"image",src:"https://picsum.photos/id/1015/800/700"}]},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1769865785023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"Watch our latest video on Microsoft 365 security best practices!",stats:{likes:150,comments:15,reposts:8},media:[{type:"video",src:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",thumbnail:"https://picsum.photos/id/1018/800/450"}]},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1769779385023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:8",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",stats:{likes:75,comments:5,reposts:2},media:[{type:"image",src:"https://picsum.photos/id/1025/800/600"}],resharedPost:{author:{name:"glueckkanja",handle:"@glueckkanja",avatarUrl:"https://i.pravatar.cc/80?img=19"},postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:8",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",media:[{type:"image"}]}},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1769779385023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:8",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",stats:{likes:75,comments:5,reposts:2},media:[{type:"image",src:"https://picsum.photos/id/1025/800/600"}]},{author:{name:"glueckkanja",handle:"@glueckkanja"},postedAt:1769779385023,postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:8",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",stats:{likes:75,comments:5,reposts:2},media:[{type:"image",src:"https://picsum.photos/id/1025/800/600"}],resharedPost:{author:{name:"glueckkanja",handle:"@glueckkanja",avatarUrl:"https://i.pravatar.cc/80?img=19"},postUrl:"https://www.linkedin.com/feed/update/urn:li:activity:8",companyPageUrl:"https://www.linkedin.com/company/glueckkanja",contentHtml:"New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",media:[{type:"image",src:"https://picsum.photos/id/1025/800/600"}]}}],c={args:{items:M,headline:{text:"Social Feed"}},render:e=>({components:{MasonryGrid:y,SocialPostCard:g},setup(){return{args:e}},template:`
      <MasonryGrid v-bind="args">
        <template #default="{ item, index }">
          <SocialPostCard v-bind="item" :index="index" :hasAnimation="true" />
        </template>
      </MasonryGrid>
    `})},d={args:{items:M,columns:{sm:1,md:2,lg:3,xl:3},gap:"1rem",observeOnScroll:!0,initialItemsCount:3,itemsPerLoad:3},render:e=>({components:{MasonryGrid:y,SocialPostCard:g},setup(){return{args:e}},template:`
      <MasonryGrid v-bind="args">
        <template #default="{ item, index }">
          <SocialPostCard v-bind="item" :index="index" :hasAnimation="true" />
        </template>
      </MasonryGrid>
    `})};var U,j,A;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: mockPosts,
    headline: {
      text: 'Social Feed'
    }
  },
  render: args => ({
    components: {
      MasonryGrid,
      SocialPostCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <MasonryGrid v-bind="args">
        <template #default="{ item, index }">
          <SocialPostCard v-bind="item" :index="index" :hasAnimation="true" />
        </template>
      </MasonryGrid>
    \`
  })
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var P,S,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: mockPosts,
    columns: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 3
    },
    gap: '1rem',
    observeOnScroll: true,
    initialItemsCount: 3,
    itemsPerLoad: 3
  },
  render: args => ({
    components: {
      MasonryGrid,
      SocialPostCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <MasonryGrid v-bind="args">
        <template #default="{ item, index }">
          <SocialPostCard v-bind="item" :index="index" :hasAnimation="true" />
        </template>
      </MasonryGrid>
    \`
  })
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ne=["Default","WithLoadMore"];export{c as Default,d as WithLoadMore,ne as __namedExportsOrder,ae as default};
