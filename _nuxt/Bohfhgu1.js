import{_ as k}from"./D8DpVsr-.js";import{_ as S}from"./Bo3mZvBG.js";import{_ as C}from"./D7BQVBcX.js";import{_ as O,e as l,w as i,o as e,h as j,k as w,m as R,d as m,c as s,F as P,r as D,a as I,t as L}from"./CxlEFrmm.js";import{_ as N}from"./BUWw9eUD.js";import"./BdDtwVcA.js";import"./CU4Hs53D.js";import"./Dq3WPmkH.js";import"./-_gES4nC.js";import"./CMtOK7Wv.js";const f={tagName:"lightbox-slider",computed:{sliderOptions(){return{dots:!1,prevArrow:'<span class="slick__arrow-left rounded-circle bg-white"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle bg-white"></span>'}}},props:{variant:String,teaser:Object,images:Array}},H={key:0,class:"d-flex justify-content-center text-light font-size-1 py-4"};function J(o,z,n,A,B,b){const c=k,x=S,v=C;return e(),l(v,null,{"lightbox-content":i(()=>[m(x,{"hide-background":!0,hideContainer:!0,options:b.sliderOptions,overflow:"true",class:"col-10"},{default:i(()=>[(e(!0),s(P,null,D(n.images,t=>(e(),s("div",{key:o.index},[m(c,{cloudinary:t.cloudinary,img:t.img,class:"w-100 mx-auto"},null,8,["cloudinary","img"]),t.caption?(e(),s("div",H,L(t.caption),1)):I("",!0)]))),128))]),_:1},8,["options"])]),default:i(()=>[n.variant==="noImg"?j(o.$slots,"default",{key:0}):(e(),l(c,w(R({key:1},n.teaser?n.teaser:n.images[0])),null,16))]),_:3})}const y=O(f,[["render",J]]);f.__docgenInfo={exportName:"default",displayName:"lightbox-slider",description:"",tags:{},props:[{name:"variant",type:{name:"string"}},{name:"teaser",type:{name:"object"}},{name:"images",type:{name:"array"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/lightbox-slider.vue"]};const W={component:y,title:"Components/LightboxSlider"},a={args:{teaser:{img:"/company/locations/Offenbach/_JR_8285-HDR.jpg",cloudinary:!0},images:[{img:"/company/locations/Offenbach/_JR_8285-HDR.jpg",cloudinary:!0,caption:"Photo 1"},{img:"/company/locations/Offenbach/gk-Sinclair.jpg",cloudinary:!0,caption:"Photo 2"}]}},r={args:{variant:"noImg",images:[{img:"/company/locations/Offenbach/_JR_8285-HDR.jpg",cloudinary:!0,caption:"Photo 1"},{img:"/company/locations/Offenbach/gk-Sinclair.jpg",cloudinary:!0,caption:"Photo 2"}]},render:o=>({components:{LightboxSliderComponent:y,Cta:N},setup(){return{args:o}},template:`
            <LightboxSliderComponent v-bind="args">
               <div class="d-flex" style="flex-direction: column; align-items: center; gap: 1rem;">
                   <cta variant="button" text="Click me to open the lightbox slider!" color="primary" size="large"/>
                   <p>This content is provided via <strong>slot</strong> using the <strong>"noImg"</strong>-variant</p>
                </div>
            </LightboxSliderComponent>
        `})};var p,g,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    teaser: {
      img: "/company/locations/Offenbach/_JR_8285-HDR.jpg",
      cloudinary: true
    },
    images: [{
      img: "/company/locations/Offenbach/_JR_8285-HDR.jpg",
      cloudinary: true,
      caption: 'Photo 1'
    }, {
      img: "/company/locations/Offenbach/gk-Sinclair.jpg",
      cloudinary: true,
      caption: 'Photo 2'
    }]
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,_,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'noImg',
    images: [{
      img: "/company/locations/Offenbach/_JR_8285-HDR.jpg",
      cloudinary: true,
      caption: 'Photo 1'
    }, {
      img: "/company/locations/Offenbach/gk-Sinclair.jpg",
      cloudinary: true,
      caption: 'Photo 2'
    }]
  },
  render: args => ({
    components: {
      LightboxSliderComponent,
      Cta
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <LightboxSliderComponent v-bind="args">
               <div class="d-flex" style="flex-direction: column; align-items: center; gap: 1rem;">
                   <cta variant="button" text="Click me to open the lightbox slider!" color="primary" size="large"/>
                   <p>This content is provided via <strong>slot</strong> using the <strong>"noImg"</strong>-variant</p>
                </div>
            </LightboxSliderComponent>
        \`
  })
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const X=["Default","NoImg"];export{a as Default,r as NoImg,X as __namedExportsOrder,W as default};
