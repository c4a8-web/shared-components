import{_ as w}from"./Bmqh5XEG.js";import{a as x}from"./D72VV5Dy.js";import"./CU4Hs53D.js";import"./CxlEFrmm.js";import"./BUWw9eUD.js";import"./CMtOK7Wv.js";import"./bwTbpmIf.js";import"./UjBAOQs5.js";import"./-_gES4nC.js";import"./Di832tzS.js";import"./BnGjbtkr.js";const o={list:[{value:"AF",text:"Afghanistan"},{value:"AX",text:"Åland Islands"},{value:"AL",text:"Albania"}]},T={component:w,argTypes:{hasAnimation:{description:"Toggles Animation for the Form",type:"boolean"},analytics:x,form:{description:"Form Content contains Headline/Subline/Cta/Fields etc.",type:"object"},light:{description:"Toggles Light Mode",type:"boolean"},space:{description:"Helper Class for the Form Spacing",type:{summary:"Spacings",detail:"space-top-1, space-top-2"}},container:{description:"Toggles Container",type:"boolean"},customValidation:{description:"Toggles Custom Validation for the Form",type:"boolean"},ajax:{description:"Asynchronous Javascript and XML datatransfer",type:"string"},additionalFields:{description:"Adds additiona Fields",type:"object"},uncentered:{description:"Toggle to center/uncenter the Form",type:"string"},replaceValue:{description:"Replace Value for a Form Field",type:"string"},options:{description:"Field Options",type:"object"},hasUuid:{description:"Toggles unique id for fields",type:"boolean"}},title:"Components/Formular"},r={container:!0,analytics:"AW-1060776844/Uj_0CL3wgMgDEIzX6PkD",uncentered:!1,form:{headline:"Headline Form",subline:"Subline lorem ipsum dolor sit",cta:{skin:"primary",width:"w-50"},ctaText:"Bewerbung absenden",ctaPosition:"justify-content-center",method:"post",action:"../",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0,id:"firstName"},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0,id:"lastName"},{label:"E-Mail Adresse",type:"email",col:6,rowStart:!0,required:!0,id:"email"},{label:"Telefon",type:"text",col:6,rowEnd:!0,required:!0,id:"phone"},{label:"Kündigungsfrist (optional)",type:"text",col:6,rowStart:!0,id:"cancellation"},{label:"Gehaltsvorstellung (optional)",type:"text",col:6,rowEnd:!0,id:"salary"},{label:"Sitze",type:"text",col:5,rowStart:!0,rowEnd:!0,id:"seats"},{label:"Nachricht",type:"textarea",id:"message",required:!0,requiredMsg:"Bitte geben Sie eine Nachricht ein"},{type:"hidden",id:"_gotcha"},{label:"<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",type:"checkbox",id:"privacy",required:!0}]}},e={args:{...r}},t={args:{...r,hasUuid:!0}},n={args:{...r,form:{headline:"Headline with Checkboxes",subline:"Subline lorem ipsum dolor sit",cta:{skin:"primary",width:"w-50"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Company",type:"text",id:"company",required:!0,requiredMsg:"Please enter your company name."},{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0},{label:"Lorem ipsum",type:"text",required:!0},{label:"Country",type:"select",id:"country",required:!0,requiredMsg:"Please select country.",placeholder:"Select country",col:6,rowStart:!0,options:o.list},{label:"Do you have a Microsoft Teams Phone System License?",type:"select",id:"TeamsPhoneSystemLicense",required:!0,requiredMsg:"Please select an answer.",placeholder:"Select an answer",options:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],col:6,rowEnd:!0},{label:"lorem",type:"select",id:"lorem",placeholder:"lorem ipsum",col:6,rowStart:!0,options:o.list},{label:"lorem ipsum",type:"select",id:"loremid",placeholder:"lorem ipsum",options:[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"}],col:6,rowEnd:!0},{label:"How are your client devices managed?",id:"managed_",required:!0,requiredMsg:"Please select at least one answer.",checkboxes:[{id:"not_1",label:"Not managed 1"},{id:"not_2",label:"Not managed 2"},{id:"not_3",label:"Not managed 3 "},{id:"not_4",label:"Not managed 4"},{id:"other",placeholder:"Other"}]},{label:"Lorem ipsum test",id:"test_",required:!0,requiredMsg:"Please select at least one answer.",checkboxes:[{id:"not_1",label:"Not managed 1"},{id:"not_2",label:"Not managed 2"},{id:"not_3",label:"Not managed 3 "},{id:"not_4",label:"Not managed 4"},{id:"other",placeholder:"Other"}]},{label:"Lorem Ipsum 2",id:"test",required:!0,requiredMsg:"Please select at least one answer.",radios:[{id:"not_1",label:"CHANGES ACTION!!",changeAction:"www.google.com"},{id:"not_2",label:"Not managed 2"},{id:"not_3",label:"Not managed 3 "},{id:"not_4",label:"Not managed 4"}]},{type:"hidden",id:"_subject",value:"Unified Contacts Support Request"},{type:"hidden",id:"_gotcha"}]}}},a={args:{...r,hasAnimation:!0,form:{headline:"Headline with Checkboxes",subline:"Subline lorem ipsum dolor sit",cta:{skin:"primary",width:"w-50"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0},{label:"Lorem ipsum",type:"text",required:!0},{label:"Country",type:"select",id:"country",required:!0,requiredMsg:"Please select country.",placeholder:"Select country",col:6,rowStart:!0,options:o.list},{label:"Do you have a Microsoft Teams Phone System License?",type:"select",id:"TeamsPhoneSystemLicense",required:!0,requiredMsg:"Please select an answer.",placeholder:"Select an answer",options:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],col:6,rowEnd:!0},{label:"lorem",type:"select",id:"lorem",placeholder:"lorem ipsum",col:6,rowStart:!0,options:o.list},{label:"lorem ipsum",type:"select",id:"loremid",placeholder:"lorem ipsum",options:[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"}],col:6,rowEnd:!0},{label:"How are your client devices managed?",id:"managed_",required:!0,requiredMsg:"Please select at least one answer.",checkboxes:[{id:"not_1",label:"Not managed 1"},{id:"not_2",label:"Not managed 2"},{id:"not_3",label:"Not managed 3 "},{id:"not_4",label:"Not managed 4"}]},{label:"Lorem Ipsum 2",id:"test",required:!0,radios:[{id:"not_1",label:"Not managed 1"},{id:"not_2",label:"Not managed 2"},{id:"not_3",label:"Not managed 3 "},{id:"not_4",label:"Not managed 4"}]},{type:"hidden",id:"_gotcha"}]}}};var l,i,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    hasUuid: true
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    form: {
      headline: 'Headline with Checkboxes',
      subline: 'Subline lorem ipsum dolor sit',
      cta: {
        skin: 'primary',
        width: 'w-50'
      },
      ctaText: 'Bewerbung absenden',
      method: 'post',
      action: '',
      fields: [{
        label: 'Company',
        type: 'text',
        id: 'company',
        required: true,
        requiredMsg: 'Please enter your company name.'
      }, {
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true
      }, {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true
      }, {
        label: 'Lorem ipsum',
        type: 'text',
        required: true
      }, {
        label: 'Country',
        type: 'select',
        id: 'country',
        required: true,
        requiredMsg: 'Please select country.',
        placeholder: 'Select country',
        col: 6,
        rowStart: true,
        options: options.list
      }, {
        label: 'Do you have a Microsoft Teams Phone System License?',
        type: 'select',
        id: 'TeamsPhoneSystemLicense',
        required: true,
        requiredMsg: 'Please select an answer.',
        placeholder: 'Select an answer',
        options: [{
          value: 'yes',
          text: 'Yes'
        }, {
          value: 'no',
          text: 'No'
        }],
        col: 6,
        rowEnd: true
      }, {
        label: 'lorem',
        type: 'select',
        id: 'lorem',
        placeholder: 'lorem ipsum',
        col: 6,
        rowStart: true,
        options: options.list
      }, {
        label: 'lorem ipsum',
        type: 'select',
        id: 'loremid',
        placeholder: 'lorem ipsum',
        options: [{
          value: '1',
          text: '1'
        }, {
          value: '2',
          text: '2'
        }, {
          value: '3',
          text: '3'
        }],
        col: 6,
        rowEnd: true
      }, {
        label: 'How are your client devices managed?',
        id: 'managed_',
        required: true,
        requiredMsg: 'Please select at least one answer.',
        checkboxes: [{
          id: 'not_1',
          label: 'Not managed 1'
        }, {
          id: 'not_2',
          label: 'Not managed 2'
        }, {
          id: 'not_3',
          label: 'Not managed 3 '
        }, {
          id: 'not_4',
          label: 'Not managed 4'
        }, {
          id: 'other',
          placeholder: 'Other'
        }]
      }, {
        label: 'Lorem ipsum test',
        id: 'test_',
        required: true,
        requiredMsg: 'Please select at least one answer.',
        checkboxes: [{
          id: 'not_1',
          label: 'Not managed 1'
        }, {
          id: 'not_2',
          label: 'Not managed 2'
        }, {
          id: 'not_3',
          label: 'Not managed 3 '
        }, {
          id: 'not_4',
          label: 'Not managed 4'
        }, {
          id: 'other',
          placeholder: 'Other'
        }]
      }, {
        label: 'Lorem Ipsum 2',
        id: 'test',
        required: true,
        requiredMsg: 'Please select at least one answer.',
        radios: [{
          id: 'not_1',
          label: 'CHANGES ACTION!!',
          changeAction: 'www.google.com'
        }, {
          id: 'not_2',
          label: 'Not managed 2'
        }, {
          id: 'not_3',
          label: 'Not managed 3 '
        }, {
          id: 'not_4',
          label: 'Not managed 4'
        }]
      }, {
        type: 'hidden',
        id: '_subject',
        value: 'Unified Contacts Support Request'
      }, {
        type: 'hidden',
        id: '_gotcha'
      }]
    }
  }
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    hasAnimation: true,
    form: {
      headline: 'Headline with Checkboxes',
      subline: 'Subline lorem ipsum dolor sit',
      cta: {
        skin: 'primary',
        width: 'w-50'
      },
      ctaText: 'Bewerbung absenden',
      method: 'post',
      action: '',
      fields: [{
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true
      }, {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true
      }, {
        label: 'Lorem ipsum',
        type: 'text',
        required: true
      }, {
        label: 'Country',
        type: 'select',
        id: 'country',
        required: true,
        requiredMsg: 'Please select country.',
        placeholder: 'Select country',
        col: 6,
        rowStart: true,
        options: options.list
      }, {
        label: 'Do you have a Microsoft Teams Phone System License?',
        type: 'select',
        id: 'TeamsPhoneSystemLicense',
        required: true,
        requiredMsg: 'Please select an answer.',
        placeholder: 'Select an answer',
        options: [{
          value: 'yes',
          text: 'Yes'
        }, {
          value: 'no',
          text: 'No'
        }],
        col: 6,
        rowEnd: true
      }, {
        label: 'lorem',
        type: 'select',
        id: 'lorem',
        placeholder: 'lorem ipsum',
        col: 6,
        rowStart: true,
        options: options.list
      }, {
        label: 'lorem ipsum',
        type: 'select',
        id: 'loremid',
        placeholder: 'lorem ipsum',
        options: [{
          value: '1',
          text: '1'
        }, {
          value: '2',
          text: '2'
        }, {
          value: '3',
          text: '3'
        }],
        col: 6,
        rowEnd: true
      }, {
        label: 'How are your client devices managed?',
        id: 'managed_',
        required: true,
        requiredMsg: 'Please select at least one answer.',
        checkboxes: [{
          id: 'not_1',
          label: 'Not managed 1'
        }, {
          id: 'not_2',
          label: 'Not managed 2'
        }, {
          id: 'not_3',
          label: 'Not managed 3 '
        }, {
          id: 'not_4',
          label: 'Not managed 4'
        }]
      }, {
        label: 'Lorem Ipsum 2',
        id: 'test',
        required: true,
        radios: [{
          id: 'not_1',
          label: 'Not managed 1'
        }, {
          id: 'not_2',
          label: 'Not managed 2'
        }, {
          id: 'not_3',
          label: 'Not managed 3 '
        }, {
          id: 'not_4',
          label: 'Not managed 4'
        }]
      }, {
        type: 'hidden',
        id: '_gotcha'
      }]
    }
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const E=["BaseValidation","BaseValidationWithUuid","WithCheckboxes","WithAnimation"];export{e as BaseValidation,t as BaseValidationWithUuid,a as WithAnimation,n as WithCheckboxes,E as __namedExportsOrder,T as default};
