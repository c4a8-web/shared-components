import{j as c,c as b,b as l,t as v,n as g,h as _,o as q}from"./hHSgbJcN.js";const x={class:"code-block"},n={__name:"code-block",setup(B){const r=c(null),e=c(!1);function f(){var a;const i=((a=r.value)==null?void 0:a.innerText)??"";navigator.clipboard.writeText(i).then(()=>{e.value=!0}).catch(k=>{console.debug(k)}),setTimeout(()=>{e.value=!1},2e3)}return(i,a)=>(q(),b("div",x,[l("button",{class:g(["code-block__copy",{"code-block__copy--copied":e.value}]),onClick:f},v(e.value?"Copied!":"Copy"),3),l("code",{ref_key:"codeRef",ref:r,class:"code-block__code"},[_(i.$slots,"default")],512)]))}};n.__docgenInfo={exportName:"default",displayName:"code-block",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/code-block.vue"]};const S={component:n,title:"Components/Code Block"},o={render:()=>({components:{CodeBlockComponent:n},template:`
      <CodeBlockComponent>
        javascript:void(0); console.log('Hello World');
      </CodeBlockComponent>
    `})},t={render:()=>({components:{CodeBlockComponent:n},template:`
      <CodeBlockComponent>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CodeBlockComponent>
    `})};var s,u,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeBlockComponent
    },
    template: \`
      <CodeBlockComponent>
        javascript:void(0); console.log('Hello World');
      </CodeBlockComponent>
    \`
  })
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,C;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeBlockComponent
    },
    template: \`
      <CodeBlockComponent>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CodeBlockComponent>
    \`
  })
}`,...(C=(p=t.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};const y=["Default","MultiLine"];export{o as Default,t as MultiLine,y as __namedExportsOrder,S as default};
