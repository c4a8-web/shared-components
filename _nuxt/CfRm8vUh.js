import{_ as j}from"./CU4Hs53D.js";import{_ as w}from"./CFW_hTri.js";import{U}from"./UjBAOQs5.js";import{S as A}from"./FmeOhSOs.js";import{_ as F,c as e,b as r,f as V,d as h,t as H,F as g,r as p,n as E,T,o as n}from"./CxlEFrmm.js";import"./D8DpVsr-.js";import"./BdDtwVcA.js";import"./D7BQVBcX.js";import"./CMtOK7Wv.js";import"./BUWw9eUD.js";import"./Dq3WPmkH.js";import"./Dj7y2ldm.js";const x={tagName:"success-story",props:{successStory:{type:Object,required:!0},level:{type:String,default:"h2"},sticky:{type:Boolean,default:!1},spacing:{type:String,default:""}},mounted(){this.$refs.root&&(T.initSlickSlider(this.$refs.container,this.slickOptions),this.sticky&&A.init([this.$refs.root]),U.init([this.$refs.root]))},computed:{successStorySlider(){var u,l;return((l=(u=this.successStory)==null?void 0:u.videos)==null?void 0:l.length)>2},successStoryLevel(){return this.level||"h2"},successStorySticky(){return this.sticky},successStorySpacing(){return this.spacing},successStoryHeadlineClass(){return this.successStory.headlineClasses||"h2-font-size"},slickOptions(){return{rows:0,slidesToShow:2,slidesToScroll:2,prevArrow:'<span class="slick__arrow-left rounded-circle"></span>',nextArrow:'<span class="slick__arrow-right rounded-circle"></span>',dots:!0,centerMode:!1,dotsClass:"slick-pagination is-default",responsive:[{breakpoint:992,settings:{centerMode:!0,infinite:!0,centerPadding:"30px",slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{centerMode:!0,infinite:!1,centerPadding:"30px",slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{centerMode:!0,infinite:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1}}]}}}},D={class:"container"},I={class:"row"},B={class:"col-lg-12 col-md-10 mt-6 mt-lg-8 fade-in-bottom","data-utility-animation-step":"1"},O={class:"mt-5 mb-5 w-lg-65"},Z={key:0,class:"col success-story__container js-slick-carousel fade-in-bottom","data-utility-animation-step":"1",ref:"container"};function L(u,l,t,R,N,i){const M=j,m=w;return n(),e("div",{class:E(["success-story utility-animation",i.successStorySpacing,{"is-sticky-scroller":i.successStorySticky}]),ref:"root"},[r("div",{class:"success-story__bg",style:V({backgroundColor:t.successStory.bgColor})},null,4),r("div",D,[r("div",I,[r("div",B,[h(M,{level:i.successStoryLevel,text:t.successStory.headline,classes:`${i.successStoryHeadlineClass} success-story__headline`},null,8,["level","text","classes"]),r("div",O,H(t.successStory.subline),1)]),i.successStorySlider?(n(),e("div",Z,[(n(!0),e(g,null,p(t.successStory.videos,(d,c)=>(n(),e("div",{key:c,class:"success-story__slide mb-lg-5"},[h(m,{video:d,lazy:!0},null,8,["video"])]))),128))],512)):(n(!0),e(g,{key:1},p(t.successStory.videos,(d,c)=>(n(),e("div",{key:c,class:"col-lg-6 col-md-10 mb-lg-5 fade-in-bottom","data-utility-animation-step":"1"},[h(m,{video:d,lazy:!0},null,8,["video"])]))),128))])])],2)}const P=F(x,[["render",L]]);x.__docgenInfo={exportName:"default",displayName:"success-story",description:"",tags:{},props:[{name:"successStory",type:{name:"object"},required:!0},{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'h2'"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/success-story.vue"]};const ie={title:"Components/Success Story",component:P},s={args:{successStory:{bgColor:"#5cbbff",headline:"Leuchtturmprojekte",subline:"In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.",videos:[{thumb:"thumbs/video-thumb-haniel.jpg",alt:"Video Casestudy Franz Haniel",id:"hV97zDTlDko",headline:"Franz Haniel verlässt sich auf glueckkanja",logo:"/c_lpad,h_100,w_180/logos/cust-haniel.png",logoAlt:"Franz Haniel",text:"Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird."},{ctaText:"Button",ctaHref:"",type:"button",target:"_blank",thumb:"thumbs/video-thumb-uniper.jpg",alt:"Video Casestudy Uniper",id:"ThxpyUOz2R8",headline:"Uniper setzt auf M365 und CSOC",logo:"c_lpad,h_100,w_180/logos/cust-uniper.png",logoAlt:"alt logo",text:"Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen."}]}}},a={args:{successStory:{bgColor:"#5cbbff",headline:"Leuchtturmprojekte",subline:"In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.",videos:[{thumb:"thumbs/video-thumb-haniel.jpg",alt:"Video Casestudy Franz Haniel",headline:"Franz Haniel verlässt sich auf glueckkanja",logo:"/c_lpad,h_100,w_180/logos/cust-haniel.png",logoAlt:"Franz Haniel",text:"Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird."},{ctaText:"Button",ctaHref:"",type:"button",target:"_blank",thumb:"thumbs/video-thumb-uniper.jpg",alt:"Video Casestudy Uniper",headline:"Uniper setzt auf M365 und CSOC",logo:"c_lpad,h_100,w_180/logos/cust-uniper.png",logoAlt:"alt logo",text:"Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen."}]}}},o={args:{successStory:{bgColor:"#5cbbff",headline:"Leuchtturmprojekte",headlineClasses:"h3-font-size",subline:"In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.",videos:[{thumb:"thumbs/video-thumb-haniel.jpg",alt:"Video Casestudy Franz Haniel",id:"hV97zDTlDko",headline:"Franz Haniel verlässt sich auf glueckkanja",logo:"/c_lpad,h_100,w_180/logos/cust-haniel.png",logoAlt:"Franz Haniel",text:"Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird."},{ctaText:"Button",ctaHref:"",type:"button",target:"_blank",thumb:"thumbs/video-thumb-uniper.jpg",alt:"Video Casestudy Uniper",id:"ThxpyUOz2R8",headline:"Uniper setzt auf M365 und CSOC",logo:"c_lpad,h_100,w_180/logos/cust-uniper.png",logoAlt:"alt logo",text:"Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen."},{thumb:"thumbs/video-thumb-fuchs.jpg",alt:"Video Casestudy FUCHS PETROLUB",id:"U2ExmypuUvs",headline:"Modernes und sicheres Arbeiten in der Microsoft Cloud",logo:"/c_lpad,h_70,w_180/logos/cust-fuchs.svg",logoAlt:"alt logo",text:"glueckkanja hat den führenden Schmierstoffhersteller FUCHS PETROLUB SE dabei unterstützt, seinen Mitarbeitern einen modernen und sicheren Abeitsplatz mit Azure Virtual Desktop zur Verfügung zu stellen. Somit kann auch in Krisenzeiten aus dem Home Office aus ein reibungsloser Geschäftsbetrieb aufrecht erhalten und sicher gestellt werden."},{thumb:"thumbs/video-thumb-wvd-webcast.jpg",alt:"Video Casestudy Uniper",id:"j1-grXIZt8M",headline:"Sicherer Remote-Zugriff auf alle Anwendungen mit Azure Virtual Desktop",text:"Mit Azure Virtual Desktop leitet Microsoft ein neues Zeitalter für Virtualisierungs-Services ein. Mit diesem Cloud-Service können virtuelle Desktop-Umgebungen und Anwendungen auf Microsoft Azure innerhalb kürzester Zeit eingerichtet und auf jedem beliebigen Gerät bereitgestellt werden. Aktuelle Sicherheits- und Compliance-Richtlinien werden dabei eingehalten."}]}}};var f,b,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    successStory: {
      bgColor: '#5cbbff',
      headline: 'Leuchtturmprojekte',
      subline: 'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
      videos: [{
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        id: 'hV97zDTlDko',
        headline: 'Franz Haniel verlässt sich auf glueckkanja',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.'
      }, {
        ctaText: 'Button',
        ctaHref: '',
        type: 'button',
        target: '_blank',
        thumb: 'thumbs/video-thumb-uniper.jpg',
        alt: 'Video Casestudy Uniper',
        id: 'ThxpyUOz2R8',
        headline: 'Uniper setzt auf M365 und CSOC',
        logo: 'c_lpad,h_100,w_180/logos/cust-uniper.png',
        logoAlt: 'alt logo',
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.'
      }]
    }
  }
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var v,S,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    successStory: {
      bgColor: '#5cbbff',
      headline: 'Leuchtturmprojekte',
      subline: 'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
      videos: [{
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        headline: 'Franz Haniel verlässt sich auf glueckkanja',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.'
      }, {
        ctaText: 'Button',
        ctaHref: '',
        type: 'button',
        target: '_blank',
        thumb: 'thumbs/video-thumb-uniper.jpg',
        alt: 'Video Casestudy Uniper',
        headline: 'Uniper setzt auf M365 und CSOC',
        logo: 'c_lpad,h_100,w_180/logos/cust-uniper.png',
        logoAlt: 'alt logo',
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.'
      }]
    }
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,C,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    successStory: {
      bgColor: '#5cbbff',
      headline: 'Leuchtturmprojekte',
      headlineClasses: 'h3-font-size',
      subline: 'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
      videos: [{
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        id: 'hV97zDTlDko',
        headline: 'Franz Haniel verlässt sich auf glueckkanja',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.'
      }, {
        ctaText: 'Button',
        ctaHref: '',
        type: 'button',
        target: '_blank',
        thumb: 'thumbs/video-thumb-uniper.jpg',
        alt: 'Video Casestudy Uniper',
        id: 'ThxpyUOz2R8',
        headline: 'Uniper setzt auf M365 und CSOC',
        logo: 'c_lpad,h_100,w_180/logos/cust-uniper.png',
        logoAlt: 'alt logo',
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.'
      }, {
        thumb: 'thumbs/video-thumb-fuchs.jpg',
        alt: 'Video Casestudy FUCHS PETROLUB',
        id: 'U2ExmypuUvs',
        headline: 'Modernes und sicheres Arbeiten in der Microsoft Cloud',
        logo: '/c_lpad,h_70,w_180/logos/cust-fuchs.svg',
        logoAlt: 'alt logo',
        text: 'glueckkanja hat den führenden Schmierstoffhersteller FUCHS PETROLUB SE dabei unterstützt, seinen Mitarbeitern einen modernen und sicheren Abeitsplatz mit Azure Virtual Desktop zur Verfügung zu stellen. Somit kann auch in Krisenzeiten aus dem Home Office aus ein reibungsloser Geschäftsbetrieb aufrecht erhalten und sicher gestellt werden.'
      }, {
        thumb: 'thumbs/video-thumb-wvd-webcast.jpg',
        alt: 'Video Casestudy Uniper',
        id: 'j1-grXIZt8M',
        headline: 'Sicherer Remote-Zugriff auf alle Anwendungen mit Azure Virtual Desktop',
        text: 'Mit Azure Virtual Desktop leitet Microsoft ein neues Zeitalter für Virtualisierungs-Services ein. Mit diesem Cloud-Service können virtuelle Desktop-Umgebungen und Anwendungen auf Microsoft Azure innerhalb kürzester Zeit eingerichtet und auf jedem beliebigen Gerät bereitgestellt werden. Aktuelle Sicherheits- und Compliance-Richtlinien werden dabei eingehalten.'
      }]
    }
  }
}`,...(z=(C=o.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const re=["Videos","NoVideo","Slider"];export{a as NoVideo,o as Slider,s as Videos,re as __namedExportsOrder,ie as default};
