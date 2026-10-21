import{_ as D}from"./BOV3asV6.js";import{_ as z}from"./mbBm67Yn.js";import{_ as Z}from"./CggN1iVS.js";import{_ as F,c as u,o as a,a as v,b as i,n as y,d as s,t as g,e as O,m as B,w as H,f as K,T as S,F as N,r as P}from"./hHSgbJcN.js";import{_ as V}from"./Dx6tmUn-.js";import"./BzRxihbK.js";import"./BeM_ocaS.js";import"./Dbjosn9x.js";import"./D5dKPKeF.js";import"./-_gES4nC.js";const R={tagName:"highlight-teaser-infos",data(){return{isFadingOut:!1,isFadingIn:!1,currentIndex:0,timeout:null,timeoutDelay:1600,reducedTimeoutDelay:700,skipTransitionEnd:!1}},computed:{logo(){return this.currentEntry?this.currentEntry.logo:null},currentEntry(){return this.entries?this.entries[this.currentIndex]:this.entry},isInAnimation(){return this.isFadingOut||this.isFadingIn},isFirstEntryOrInAnimation(){return this.isInAnimation||this.isFirstEntry},isLastEntryOrInAnimation(){return this.isInAnimation||this.isLastEntry}},mounted(){const t=this.$refs.content;this.currentIndex=this.index,this.reduceAnimation&&(this.timeoutDelay=this.reducedTimeoutDelay),t&&t.addEventListener("transitionend",this.handleTransitionEnd)},beforeDestroy(){const t=this.$refs.content;t&&t.removeEventListener("transitionend",this.handleTransitionEnd)},methods:{emitTransitionEnd(){!this.isFadingIn&&!this.isFadingOut||this.$emit("transitionsEnd")},resetTransitions(){this.isFadingIn=!1,this.isFadingOut=!1},handleTransitionEnd(){this.skipTransitionEnd||(this.isFadingOut?(this.isFadingOut=!1,this.isFadingIn=!0,this.currentIndex=this.index):(this.emitTransitionEnd(),this.resetTransitions()))},resetTranstitionsFallback(){window.clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.emitTransitionEnd(),this.resetTransitions()},this.timeoutDelay)},update(t=!1){this.resetTransitions(),this.currentIndex=this.lastIndex,this.$nextTick(()=>{this.isFadingOut=!0,this.isFadingIn=!1,this.resetTranstitionsFallback(),t&&this.handleTransitionEnd()})}},watch:{index(){window.clearTimeout(this.timeout),this.isFadingIn||this.isFadingOut?(this.skipTransitionEnd=!0,this.$nextTick(()=>{this.skipTransitionEnd=!1,this.update(!0)})):this.update()}},props:{pagination:Boolean,lastIndex:Number,index:Number,currentPage:Number,lastPage:Number,entry:Object,entries:Array,prev:Function,next:Function,isFirstEntry:Boolean,isLastEntry:Boolean,reducedAnimation:Boolean}},J={class:"highlight-teaser__infos-current"},U={class:"highlight-teaser__infos-content",ref:"content"},q={class:"highlight-teaser__infos-title"},M={class:"highlight-teaser__infos-subline"};function G(t,o,n,L,r,e){const l=z,c=D,_=Z;return a(),u("div",{class:y(["highlight-teaser__infos",{"highlight-teaser__infos--fade-out":r.isFadingOut,"highlight-teaser__infos--fade-in":r.isFadingIn}]),ref:"infos"},[n.pagination?(a(),u("div",{key:0,class:y(["highlight-teaser__infos-pagination",{"highlight-teaser__infos-pagination--first":e.isFirstEntryOrInAnimation},{"highlight-teaser__infos-pagination--last":e.isLastEntryOrInAnimation}])},[s(l,{class:"highlight-teaser__infos-icon-prev",icon:"arrow",direction:"left",onClick:n.prev},null,8,["onClick"]),i("div",J,g(n.currentPage)+" / "+g(n.lastPage),1),s(l,{class:"highlight-teaser__infos-icon-next",icon:"arrow",onClick:n.next},null,8,["onClick"])],2)):v("",!0),i("div",U,[e.logo?(a(),O(c,B({key:0,class:"highlight-teaser__infos-logo"},e.logo),null,16)):v("",!0),i("div",q,g(e.currentEntry.title),1),i("p",M,g(e.currentEntry.subline),1),s(_,{list:e.currentEntry.ctaList,classes:"highlight-teaser__infos-cta-list"},null,8,["list"])],512)],2)}const Q=F(R,[["render",G]]);R.__docgenInfo={exportName:"default",displayName:"highlight-teaser-infos",description:"",tags:{},props:[{name:"pagination",type:{name:"boolean"}},{name:"lastIndex",type:{name:"number"}},{name:"index",type:{name:"number"}},{name:"currentPage",type:{name:"number"}},{name:"lastPage",type:{name:"number"}},{name:"entry",type:{name:"object"}},{name:"entries",type:{name:"array"}},{name:"prev",type:{name:"func"}},{name:"next",type:{name:"func"}},{name:"isFirstEntry",type:{name:"boolean"}},{name:"isLastEntry",type:{name:"boolean"}},{name:"reducedAnimation",type:{name:"boolean"}}],events:[{name:"transitionsEnd"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/highlight-teaser-infos.vue"]};const j={tagName:"highlight-teaser",data(){return{index:0,lastIndex:0,inAnimation:!1}},computed:{classList(){return["highlight-teaser",this.spacing,"vue-component",this.rightDirection?"highlight-teaser--right-direction":"",this.reducedAnimationValue?"highlight-teaser--reduce-animation":""]},style(){return`--highlight-teaser-animation-color: ${typeof this.animationColor<"u"?this.animationColor:"var(--color-primary)"};`},reducedAnimationValue(){return S.isTrue(this.reduceAnimation)},limitValue(){const n=parseInt(this.limit,10);return n>0?n:3},isFirstEntry(){return this.index===0},isLastEntry(){return this.index===this.entries.length-1},activeEntry(){return this.entries[this.index]},currentPage(){return this.index+1},lastPage(){return this.entries.length},pagination(){return this.entries.length>1},limitedEntries(){return this.entries.slice(0,this.limitValue)},sliderOptions(){return{rows:0,slidesToShow:1,slidesToScroll:1,dots:!1,centerMode:!1,fade:!0,dotsClass:"slick-pagination is-default",arrows:!1,responsive:[{breakpoint:992,settings:{centerMode:!0,infinite:!1,centerPadding:"30px",slidesToShow:1,slidesToScroll:1,dots:!1,fade:!1}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1,dots:!1,fade:!1}}]}},rightDirection(){return!this.lastIndex||this.lastIndex<this.index}},methods:{handleTransitionsEnd(){this.inAnimation=!1},next(){this.isLastEntry||this.switchSlide(!0)},prev(){this.isFirstEntry||this.switchSlide(!1)},switchSlide(t){const o=this.$refs.container;if(!o)return;const n=o.querySelector(".js-slick-carousel");n&&(this.lastIndex=this.index,t?this.index++:this.index--,this.inAnimation=!0,$(n).slick("slickGoTo",this.index))}},props:{entries:Array,limit:Number,spacing:String,reduceAnimation:{default:null},animationColor:String}},W={class:"highlight-teaser__container",ref:"container"},X={class:"highlight-teaser__slider-container"},Y={class:"highlight-teaser__entry-image"},ee={class:"highlight-teaser__overlay"},te={class:"highlight-teaser__overlay-container"},ne={class:"highlight-teaser__overlay-infos"};function ie(t,o,n,L,r,e){const l=D,c=Q,_=V;return a(),u("div",{class:y(e.classList),style:K(e.style)},[i("div",W,[i("div",X,[i("div",{class:y(["highlight-teaser__slider-blur",{"highlight-teaser__slider-blur--in-animation":r.inAnimation}])},[s(l,{img:e.activeEntry.image.img,alt:e.activeEntry.image.alt,cloudinary:e.activeEntry.image.cloudinary,class:"highlight-teaser__blur-image","img-src-sets":"highlightTeaser"},null,8,["img","alt","cloudinary"])],2),s(_,{options:e.sliderOptions,"hide-background":!0,class:"highlight-teaser__slider"},{default:H(()=>[(a(!0),u(N,null,P(e.limitedEntries,(d,f)=>(a(),u("div",{class:"highlight-teaser__entry",key:f},[i("div",Y,[s(l,{img:d.image.img,alt:d.image.alt,cloudinary:d.image.cloudinary,class:"highlight-teaser__image","img-src-sets":"highlightTeaser"},null,8,["img","alt","cloudinary"])]),s(c,{pagination:e.pagination,"current-page":f+1,"last-page":e.lastPage,entry:d},null,8,["pagination","current-page","last-page","entry"])]))),128))]),_:1},8,["options"])]),i("div",ee,[i("div",te,[i("div",ne,[s(c,{pagination:e.pagination,"current-page":e.currentPage,"last-page":e.lastPage,entry:e.activeEntry,entries:n.entries,next:e.next,prev:e.prev,"is-first-entry":e.isFirstEntry,"is-last-entry":e.isLastEntry,"is-changing":t.isChanging,index:r.index,"last-index":r.lastIndex,"reduced-animation":e.reducedAnimationValue,onTransitionsEnd:e.handleTransitionsEnd},null,8,["pagination","current-page","last-page","entry","entries","next","prev","is-first-entry","is-last-entry","is-changing","index","last-index","reduced-animation","onTransitionsEnd"])])])])],512)],6)}const se=F(j,[["render",ie]]);j.__docgenInfo={exportName:"default",displayName:"highlight-teaser",description:"",tags:{},props:[{name:"entries",type:{name:"array"}},{name:"limit",type:{name:"number"}},{name:"spacing",type:{name:"string"}},{name:"reduceAnimation",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"animationColor",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/highlight-teaser.vue"]};const pe={title:"Components/Highlight Teaser",component:se},m={args:{animationColor:"var(--color-secondary)",entries:[{title:"Azure @ DEKRA",subline:"Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)",image:{img:"/casestudies/casestudy-dekra-v2.png",alt:"Dekra Casestudy",cloudinary:!0},logo:{img:"/w_140/logos/cust-dekra.png",url:"javascript:void(0);",alt:"DEKRA",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]},{title:"BRZ",subline:"lorem ipsum dolor sit",image:{img:"casestudies/casestudy-brz.png",alt:"BRZ Casestudy",cloudinary:!0},logo:{img:"/w_180/logos/cust-brz.png",alt:"BRZ",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy 2",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]},{title:"Enercron",subline:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:{img:"casestudies/casestudy-enercon.jpg",alt:"Enercron Casestudy",cloudinary:!0},logo:{img:"/w_180/logos/cust-enercon.png",url:"javascript:void(0);",alt:"Enercron",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy 3",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]}]}},h={args:{spacing:"space-top-3",entries:[{title:"Azure @ DEKRA",subline:"Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)",image:{img:"/casestudies/casestudy-dekra-v2.png",alt:"Dekra Casestudy",cloudinary:!0},logo:{img:"/w_140/logos/cust-dekra.png",url:"https://www.dekra.com/",alt:"DEKRA",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]}]}},p={args:{reduceAnimation:!0,entries:[{title:"Azure @ DEKRA",subline:"Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)",image:{img:"/casestudies/casestudy-dekra-v2.png",alt:"Dekra Casestudy",cloudinary:!0},logo:{img:"/w_140/logos/cust-dekra.png",url:"javascript:void(0);",alt:"DEKRA",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]},{title:"BRZ",subline:"lorem ipsum dolor sit",image:{img:"/casestudies/casestudy-brz.png",alt:"BRZ Casestudy",cloudinary:!0},logo:{img:"/w_180/logos/cust-brz.png",alt:"BRZ",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy 2",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]},{title:"Enercron",subline:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:{img:"/casestudies/casestudy-enercon.jpg",alt:"Enercron Casestudy",cloudinary:!0},logo:{img:"/w_180/logos/cust-enercon.png",url:"javascript:void(0);",alt:"Enercron",cloudinary:!0},ctaList:[{ctaText:"Zur Casestudy 3",ctaHref:"javascript:void(0);",skin:"primary",link:!0}]}]}};var E,k,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    animationColor: 'var(--color-secondary)',
    entries: [{
      title: 'Azure @ DEKRA',
      subline: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
      image: {
        img: '/casestudies/casestudy-dekra-v2.png',
        alt: 'Dekra Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_140/logos/cust-dekra.png',
        url: 'javascript:void(0);',
        alt: 'DEKRA',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }, {
      title: 'BRZ',
      subline: 'lorem ipsum dolor sit',
      image: {
        img: 'casestudies/casestudy-brz.png',
        alt: 'BRZ Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_180/logos/cust-brz.png',
        alt: 'BRZ',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy 2',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }, {
      title: 'Enercron',
      subline: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: {
        img: 'casestudies/casestudy-enercon.jpg',
        alt: 'Enercron Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_180/logos/cust-enercon.png',
        url: 'javascript:void(0);',
        alt: 'Enercron',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy 3',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }]
  }
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,b,T;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    spacing: 'space-top-3',
    entries: [{
      title: 'Azure @ DEKRA',
      subline: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
      image: {
        img: '/casestudies/casestudy-dekra-v2.png',
        alt: 'Dekra Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_140/logos/cust-dekra.png',
        url: 'https://www.dekra.com/',
        alt: 'DEKRA',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }]
  }
}`,...(T=(b=h.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var A,w,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    reduceAnimation: true,
    entries: [{
      title: 'Azure @ DEKRA',
      subline: 'Effiziente Umsetzung der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
      image: {
        img: '/casestudies/casestudy-dekra-v2.png',
        alt: 'Dekra Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_140/logos/cust-dekra.png',
        url: 'javascript:void(0);',
        alt: 'DEKRA',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }, {
      title: 'BRZ',
      subline: 'lorem ipsum dolor sit',
      image: {
        img: '/casestudies/casestudy-brz.png',
        alt: 'BRZ Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_180/logos/cust-brz.png',
        alt: 'BRZ',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy 2',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }, {
      title: 'Enercron',
      subline: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: {
        img: '/casestudies/casestudy-enercon.jpg',
        alt: 'Enercron Casestudy',
        cloudinary: true
      },
      logo: {
        img: '/w_180/logos/cust-enercon.png',
        url: 'javascript:void(0);',
        alt: 'Enercron',
        cloudinary: true
      },
      ctaList: [{
        ctaText: 'Zur Casestudy 3',
        ctaHref: 'javascript:void(0);',
        skin: 'primary',
        link: true
      }]
    }]
  }
}`,...(I=(w=p.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const ye=["HighlightTeaser","OneEntry","ReduceAnimation"];export{m as HighlightTeaser,h as OneEntry,p as ReduceAnimation,ye as __namedExportsOrder,pe as default};
