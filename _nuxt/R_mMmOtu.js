import{a as mr}from"./D72VV5Dy.js";import{_ as ur}from"./BUWw9eUD.js";import"./CMtOK7Wv.js";import"./CxlEFrmm.js";const xr={component:ur,argTypes:{text:{description:"The Text of the Cta",type:"string",required:!0},analytics:mr,link:{description:"Toggles Link Mode",type:"boolean"},skin:{description:"The skin of the Cta",control:{type:"select"},options:["","primary","secondary","primary is-cutoff","secondary is-cutoff","primary is-cutoff is-light","secondary is-cutoff is-light","primary is-light","secondary is-light"]},width:{description:"Adds helper classes for the width:",table:{disabled:!1},control:{type:"text"},type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."}},grow:{control:{type:"boolean"},description:"Will apply w-lg-auto when you don't specify a width.",type:{summary:null}},href:{description:"The link of the Cta",type:"string"},target:{description:"The link target",type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."},options:["","_self","_blank","_parent","_top"],control:{type:"select"}},button:{description:"Toggles Button Mode",type:"boolean"},alternativeHref:{description:"An alternative link for the pricing details toggle",type:"string"},type:{description:"The type attribute of the Cta",control:{type:"select"},options:["","submit","reset","button"],type:"string"},trigger:{description:"A trigger for modals or other components",control:{type:"select"},options:["","modal"],type:"string"},external:{description:"Adds an external icon to the Cta",type:"boolean"},icon:{description:"Adds an icon to the Cta",control:{type:"text"},type:{summary:"Icon name",detail:"arrow, mail, phone, ..."}},download:{description:"Adds an download icon to the Cta",type:"boolean"},reversed:{description:"Reverses the order of the icon and the text. Does not work with download.",type:"boolean"},active:{description:"Sets the active State of the Cta",type:"boolean"},hasBackground:{description:"Sets a semi transparent background for the secondary skin",type:"boolean"},small:{description:"Reduces the padding and scales the icon down",type:"boolean"},classes:{description:"Adds classes:",table:{disabled:!1},control:{type:"text"},type:{summary:"Examples",detail:"space-4, parent-component-class, ..."}}},title:"Components/Cta"},r={href:"javascript:void(0)"},pr=[{label:"Primary / Secondary buttons",variants:[{...r,text:"Primary",skin:"primary",button:!0},{...r,text:"Secondary",skin:"secondary",button:!0},{...r,text:"Secondary monochrome",skin:"secondary",button:!0,monochrome:!0}]},{label:"Cutoff buttons",variants:[{...r,text:"Primary cutoff",skin:"primary is-cutoff",button:!0},{...r,text:"Secondary cutoff",skin:"secondary is-cutoff",button:!0},{...r,text:"Secondary cutoff bg",skin:"secondary is-cutoff",button:!0,hasBackground:!0}]},{label:"Buttons with icons",variants:[{...r,text:"Primary external",skin:"primary",button:!0,external:!0},{...r,text:"Primary download",skin:"primary",button:!0,download:!0},{...r,text:"Secondary external",skin:"secondary",button:!0,external:!0}]},{label:"Small buttons",variants:[{...r,text:"Primary small",skin:"primary",button:!0,small:!0},{...r,text:"Secondary small",skin:"secondary",button:!0,small:!0},{...r,text:"Primary small external",skin:"primary",button:!0,small:!0,external:!0},{...r,text:"Primary small cutoff external",skin:"primary is-cutoff",button:!0,small:!0,external:!0}]}],lr=[{label:"Default",onSurface:!1},{label:"On surface",onSurface:!0}],e={parameters:{controls:{disable:!0}},render:()=>({components:{CtaComponent:ur},setup(){return{sections:lr.map(v=>({...v,rows:pr.map(g=>({...g,variants:g.variants.map(dr=>({...dr,onSurface:v.onSurface}))}))}))}},template:`
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <section
          v-for="section in sections"
          :key="section.label"
          :style="section.onSurface
            ? 'background: var(--color-primary); padding: 2rem; border-radius: 4px; color: var(--color-copy-on-primary); --color-headlines: var(--color-copy-on-primary);'
            : ''"
        >
          <h3 style="margin-bottom: 1.5rem;">{{ section.label }}</h3>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="row in section.rows" :key="row.label">
              <div style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 0.5rem;">{{ row.label }}</div>
              <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
                <cta-component
                  v-for="(variant, index) in row.variants"
                  :key="index"
                  v-bind="variant"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    `})},o={args:{text:"Primary Button Cutoff",skin:"primary is-cutoff",button:!0}},n={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff"}},a={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff",hasBackground:!0}},s={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0}},i={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,download:!0}},c={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},u={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0}},d={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,small:!0,external:!0}},m={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0,monochrome:!0}},p={args:{text:"Primary Link",href:"javascript:void(0)",link:!0}},t={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,active:!0}};t.argTypes={width:{table:{disable:!0}},skin:{table:{disable:!0}}};const l={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,monochrome:!0}},y={args:{text:"Primary Link lorem ipsum dolor sit amet",href:"javascript:void(0)",link:!0,reversed:!0}},f={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,loading:!0}};var h,x,k;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      CtaComponent
    },
    setup() {
      const sections = overviewSections.map(section => ({
        ...section,
        rows: overviewRows.map(row => ({
          ...row,
          variants: row.variants.map(variant => ({
            ...variant,
            onSurface: section.onSurface
          }))
        }))
      }));
      return {
        sections
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <section
          v-for="section in sections"
          :key="section.label"
          :style="section.onSurface
            ? 'background: var(--color-primary); padding: 2rem; border-radius: 4px; color: var(--color-copy-on-primary); --color-headlines: var(--color-copy-on-primary);'
            : ''"
        >
          <h3 style="margin-bottom: 1.5rem;">{{ section.label }}</h3>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="row in section.rows" :key="row.label">
              <div style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 0.5rem;">{{ row.label }}</div>
              <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
                <cta-component
                  v-for="(variant, index) in row.variants"
                  :key="index"
                  v-bind="variant"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    \`
  })
}`,...(k=(x=e.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var b,w,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button Cutoff',
    skin: 'primary is-cutoff',
    button: true
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,P,j;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff'
  }
}`,...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,L,_;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff',
    hasBackground: true
  }
}`,...(_=(L=a.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var T,A,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true
  }
}`,...(M=(A=s.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var R,D,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    download: true
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var O,H,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    external: true
  }
}`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var q,I,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true
  }
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var F,G,J;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    small: true,
    external: true
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true,
    monochrome: true
  }
}`,...(Q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,V,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true
  }
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    active: true
  }
}`,...($=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,tr,er;l.parameters={...l.parameters,docs:{...(rr=l.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    monochrome: true
  }
}`,...(er=(tr=l.parameters)==null?void 0:tr.docs)==null?void 0:er.source}}};var or,nr,ar;y.parameters={...y.parameters,docs:{...(or=y.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link lorem ipsum dolor sit amet',
    href: 'javascript:void(0)',
    link: true,
    reversed: true
  }
}`,...(ar=(nr=y.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var sr,ir,cr;f.parameters={...f.parameters,docs:{...(sr=f.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    loading: true
  }
}`,...(cr=(ir=f.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};const kr=["Overview","PrimaryButtonCutoff","SecondaryButtonCutoff","SecondaryButtonHasBackground","PrimaryButton","PrimaryButtonDownload","PrimaryButtonExternal","SecondaryButton","PrimaryButtonSmall","SecondaryButtonMonochrome","PrimaryLink","PrimaryLinkActive","PrimaryLinkMonochrome","PrimaryLinkReversed","PrimaryButtonLoading"];export{e as Overview,s as PrimaryButton,o as PrimaryButtonCutoff,i as PrimaryButtonDownload,c as PrimaryButtonExternal,f as PrimaryButtonLoading,d as PrimaryButtonSmall,p as PrimaryLink,t as PrimaryLinkActive,l as PrimaryLinkMonochrome,y as PrimaryLinkReversed,u as SecondaryButton,n as SecondaryButtonCutoff,a as SecondaryButtonHasBackground,m as SecondaryButtonMonochrome,kr as __namedExportsOrder,xr as default};
