import{F as g}from"./DH568vPI.js";import"./mbBm67Yn.js";import"./hHSgbJcN.js";const f={component:g,argTypes:{description:{description:"Description of the Form Attachment",type:"string"},text:{description:"Smaller underlined Subtext below the Description",type:"string"},extensions:{description:"Acceptable file types",control:{type:"array"},type:{summary:"Filetypes",detail:"pdf, txt, doc, ..."}},maxSize:{description:"Allowed max Filesize",type:"number"},id:{description:"Input Id for the Form Attachment",type:"string"},required:{description:"Toggle for required Form Attachment",type:"boolean"},requiredMsg:{description:"Message for the required Form Attachment",type:"string"},hasError:{description:"Toggle for Error in Form Attachment",type:"boolean"}},title:"Components/Form Attachments"},n={description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf","txt","doc"],maxSize:2e7,id:"file"},e={args:{...n}},r={args:{...n,required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",hasError:!0}},t={args:{...n,required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",maxFiles:2}};var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,d,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    required: true,
    requiredMsg: 'Bitte einen Anhang hinzufügen',
    hasError: true
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    required: true,
    requiredMsg: 'Bitte einen Anhang hinzufügen',
    maxFiles: 2
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const q=["NotRequired","RequiredWithError","RequiredMaxTwoFiles"];export{e as NotRequired,t as RequiredMaxTwoFiles,r as RequiredWithError,q as __namedExportsOrder,f as default};
