import{_ as O}from"./Cel4Twc-.js";import{_ as E}from"./BOV3asV6.js";import{_ as R}from"./Dbjosn9x.js";import{_ as q}from"./CggN1iVS.js";import{_ as F}from"./BeM_ocaS.js";import{U as P}from"./DXsy6Cm4.js";import{_ as M,c as a,b as n,a as o,f as l,d as H,F as m,r as y,o as t,n as g,e as r,t as h}from"./hHSgbJcN.js";import"./BzRxihbK.js";import"./mbBm67Yn.js";const x={props:{productBlocks:Object,headline:String||Object},computed:{backgroundColorStyle(){return{backgroundColor:this.productBlocks.bgColor}}},methods:{animationStyle(d){return{"--utility-animation-index":d}}},mounted(){this.$refs.root&&P.init([this.$refs.root])}},B={class:"container space-2"},W={class:"row"},G={class:"product-blocks__content"},Y={key:1},V={key:2,class:"dashed"},j={class:"product-blocks__buttons"};function L(d,J,u,U,$,c){const w=O,A=E,T=R,z=q,I=F;return t(),a("div",{class:"product-blocks utility-animation container-fluid",style:l(c.backgroundColorStyle),ref:"root"},[n("div",B,[u.headline?(t(),a("div",{key:0,class:"container pb-4 pb-lg-6 fade-in-bottom","data-utility-animation-step":"1",style:l(c.animationStyle(1))},[H(w,{text:u.headline,centered:!0},null,8,["text"])],4)):o("",!0),n("div",W,[(t(!0),a(m,null,y(u.productBlocks.items,(e,p)=>(t(),a("div",{key:p,class:"product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom","data-utility-animation-step":"1",style:l(c.animationStyle(p+1))},[n("div",{class:g(["product-blocks__block",{"text-center":e.copy===""},"pl-lg-3 pr-lg-8"])},[n("div",G,[n("figure",{class:g(["product-blocks__img",{"mx-auto":e.copy===""},"mb-4"])},[e.image?(t(),r(A,{key:0,img:e.image,cloudinary:e.cloudinary,alt:e.alt},null,8,["img","cloudinary","alt"])):o("",!0)],2),e.headline?(t(),r(T,{key:0,text:e.headline.text||e.headline,level:e.headline.level||"h3",classes:e.headline.classes||"","utility-animation-step":e.headline.utilityAnimationStep||null},null,8,["text","level","classes","utility-animation-step"])):o("",!0),e.copy?(t(),a("p",Y,h(e.copy),1)):o("",!0),e.bulletList?(t(),a("ul",V,[(t(!0),a(m,null,y(e.bulletList,(S,D)=>(t(),a("li",{key:D},h(S),1))),128))])):o("",!0)]),n("div",j,[e.list?(t(),r(z,{key:0,list:e.list},null,8,["list"])):e.ctaText?(t(),r(I,{key:1,text:e.ctaText,href:e.ctaHref,link:e.link,target:e.target,type:e.type},null,8,["text","href","link","target","type"])):o("",!0)])],2)],4))),128))])])],4)}const N=M(x,[["render",L]]);x.__docgenInfo={exportName:"default",displayName:"product-blocks",description:"",tags:{},props:[{name:"productBlocks",type:{name:"object"}},{name:"headline",type:{name:"String || Object",func:!0}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/product-blocks.vue"]};const re={title:"Components/Product Blocks",component:N},i={args:{productBlocks:{items:[{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png",headline:"Ready for The Day After It Actually Happens?",copy:"AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png",headline:"Cloud Strategy as Fast as Your Coffee Intake",copy:"Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png",headline:"Say Goodbye to Tech Headaches",copy:"Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png",headline:"Cloud Chaos? Will AMM Be Your Azure GPS?",copy:"AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png",headline:"Your Cloud's New Brain Trust!",copy:"Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing"},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png",headline:"Safe, or Playing Security Roulette?",copy:"Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship."}],cloudinary:!0}}},s={args:{productBlocks:{items:[{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png",headline:"Ready for The Day After It Actually Happens?",copy:"AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.",list:[{ctaText:"Read more",ctaHref:"/azure/azure-emergency-response-environment",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AzERE.pdf",link:!0}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png",headline:"Cloud Strategy as Fast as Your Coffee Intake",copy:"Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.",list:[{ctaText:"Read more",ctaHref:"/azure/azure-foundation",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AzureFoundation.pdf",link:!0}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png",headline:"Say Goodbye to Tech Headaches",copy:"Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.",list:[{ctaText:"Read more",ctaHref:"/azure/avd-foundation",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AvDFoundation.pdf",link:!0,skin:"secondary"}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png",headline:"Cloud Chaos? Will AMM Be Your Azure GPS?",copy:"AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.",list:[{ctaText:"Read more",ctaHref:"https://www.glueckkanja.com/",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AMM.pdf",link:!0,skin:"secondary"}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png",headline:"Your Cloud's New Brain Trust!",copy:"Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing",list:[{ctaText:"Read more",ctaHref:"/azure/cloud-competence-center",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-CloudCompetenceCenter.pdf",link:!0,skin:"secondary"}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png",headline:"Safe, or Playing Security Roulette?",copy:"Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship.",list:[{ctaText:"Read more",ctaHref:"/security/cloud-security-operations-center",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-CSOC.pdf",link:!0,skin:"secondary"}]}],cloudinary:!0}}};var f,b,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    productBlocks: {
      items: [{
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png',
        headline: 'Ready for The Day After It Actually Happens?',
        copy: 'AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png',
        headline: 'Cloud Strategy as Fast as Your Coffee Intake',
        copy: 'Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png',
        headline: 'Say Goodbye to Tech Headaches',
        copy: 'Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png',
        headline: 'Cloud Chaos? Will AMM Be Your Azure GPS?',
        copy: 'AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png',
        headline: "Your Cloud's New Brain Trust!",
        copy: "Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing"
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png',
        headline: "Safe, or Playing Security Roulette?",
        copy: "Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship."
      }],
      cloudinary: true
    }
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,v,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    productBlocks: {
      items: [{
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png',
        headline: 'Ready for The Day After It Actually Happens?',
        copy: 'AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.',
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/azure-emergency-response-environment',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AzERE.pdf',
          link: true
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png',
        headline: 'Cloud Strategy as Fast as Your Coffee Intake',
        copy: 'Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.',
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/azure-foundation',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AzureFoundation.pdf',
          link: true
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png',
        headline: 'Say Goodbye to Tech Headaches',
        copy: 'Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.',
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/avd-foundation',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AvDFoundation.pdf',
          link: true,
          skin: 'secondary'
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png',
        headline: 'Cloud Chaos? Will AMM Be Your Azure GPS?',
        copy: 'AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.',
        list: [{
          ctaText: 'Read more',
          ctaHref: 'https://www.glueckkanja.com/',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AMM.pdf',
          link: true,
          skin: 'secondary'
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png',
        headline: "Your Cloud's New Brain Trust!",
        copy: "Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing",
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/cloud-competence-center',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-CloudCompetenceCenter.pdf',
          link: true,
          skin: 'secondary'
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png',
        headline: "Safe, or Playing Security Roulette?",
        copy: "Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship.",
        list: [{
          ctaText: 'Read more',
          ctaHref: '/security/cloud-security-operations-center',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-CSOC.pdf',
          link: true,
          skin: 'secondary'
        }]
      }],
      cloudinary: true
    }
  }
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ie=["Default","WithLinks"];export{i as Default,s as WithLinks,ie as __namedExportsOrder,re as default};
