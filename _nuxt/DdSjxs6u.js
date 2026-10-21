import{V as te}from"./Bdgoq9V5.js";import{H as e}from"./Dl7xyO-b.js";import"./mbBm67Yn.js";import"./hHSgbJcN.js";import"./BOV3asV6.js";import"./BzRxihbK.js";import"./B7pUaZTH.js";import"./BeM_ocaS.js";import"./ClCAOzaF.js";import"./BE7V0S87.js";const ve={title:"Components/Header",component:te,parameters:{layout:"fullscreen"},decorators:[(a,n)=>({components:{story:a},setup(){return{args:n.args}},template:`
        <story />
        <div v-if="args.onSurface" style="height: 200vh;background-color: var(--color-gk-yellow);opacity: 1;" class="dummy-content is--dark"></div>
        <div v-else style="height: 200vh;" class="dummy-content is--dark"></div>
      `})]},t={args:{home:e.home,navigation:[...e.navigation,{name:"lorem-ipsum-extra",languages:{de:{title:"Lorem Ipsum",url:"javascript:void(0);"},en:{title:"Lorem Ipsum",url:"javascript:void(0);"},es:{title:"Lorem Ipsum",url:"javascript:void(0);"}}}]}},o={args:{home:e.home,navigation:e.navigation,light:!0,blendMode:!0,bgColor:"var(--color-gk-dark-blue)"}},s={args:{home:e.home,navigation:e.navigation,lang:"en"}},i={args:{home:e.home,navigation:e.navigation,lang:"es"}},r={home:e.home,navigation:e.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/scepman/scepman-logo-rgb.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"},es:{title:"Home ES",url:"",alt:"alt text ES"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""},es:{title:"Inicio ES",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"},es:{title:"Precios ES",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""},es:{title:"Socios ES",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"},es:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"},c={args:{...r,onSurface:!0}},g={args:{...r}},u={args:{...r,lang:"en"}},m={args:{...r,lang:"es"}},oe=["Precios","Partners","Support Hub","Eventos","Acerca de nosotros"].map((a,n)=>{const H=a==="Support Hub";return{name:`terraprovider-${n}`,languages:{es:{title:a,...H?{}:{url:""}}},...H?{children:["Documentacion","Descargas","Contacto"].map(S=>({name:`terraprovider-${n}-${S.toLowerCase()}`,languages:{es:{title:S,url:""}}}))}:{}}}),d={args:{lang:"es",product:!0,theme:"terraprovider",collapse:22,showSecondaryNavigation:!0,button:{text:"Prueba gratuita",href:"/trial/",skin:"primary is-cutoff",external:!0},home:{name:"home",imgLight:"/products/terraprovider/logo-terraprovider-white.svg",img:"/products/terraprovider/logo-terraprovider.svg",languages:{es:{title:"Home",url:"",alt:"TerraProvider Logo"}}},navigation:oe}},l={args:{home:e.home,navigation:e.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/terraprovider/logo-terraprovider.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"}},p={args:{light:!0,...r,onSurface:!0}},h={args:{light:!0,blendMode:!0,...r}},v={args:{home:e.home,navigation:e.navigation,lang:"en",search:!0}};var P,f,E;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: [...HeaderData.navigation, {
      name: 'lorem-ipsum-extra',
      languages: {
        de: {
          title: 'Lorem Ipsum',
          url: 'javascript:void(0);'
        },
        en: {
          title: 'Lorem Ipsum',
          url: 'javascript:void(0);'
        },
        es: {
          title: 'Lorem Ipsum',
          url: 'javascript:void(0);'
        }
      }
    }]
    // lang: 'de', // should be default
  }
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var N,b,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    light: true,
    blendMode: true,
    bgColor: 'var(--color-gk-dark-blue)'
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var w,D,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en'
  }
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var k,x,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'es'
  }
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var I,_,j;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...productArgs,
    onSurface: true
  }
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var M,C,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...productArgs
  }
}`,...($=(C=g.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var O,T,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...productArgs,
    lang: 'en'
  }
}`,...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var V,q,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...productArgs,
    lang: 'es'
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,G,J;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    lang: 'es',
    product: true,
    theme: 'terraprovider',
    collapse: 22,
    showSecondaryNavigation: true,
    button: {
      text: 'Prueba gratuita',
      href: '/trial/',
      skin: 'primary is-cutoff',
      external: true
    },
    home: {
      name: 'home',
      imgLight: '/products/terraprovider/logo-terraprovider-white.svg',
      img: '/products/terraprovider/logo-terraprovider.svg',
      languages: {
        es: {
          title: 'Home',
          url: '',
          alt: 'TerraProvider Logo'
        }
      }
    },
    navigation: terraProviderNav
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,R;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    product: true,
    button: {
      text: 'Start now',
      href: '/start-now/',
      skin: 'primary is-cutoff'
    },
    home: {
      name: 'home',
      imgLight: '/products/scepman/scepman-logo-all-white.svg',
      img: '/products/terraprovider/logo-terraprovider.svg',
      languages: {
        en: {
          title: 'Home EN',
          url: '',
          alt: 'alt text EN'
        }
      }
    },
    navigation: [{
      name: 'home',
      languages: {
        de: {
          title: 'Home',
          url: ''
        },
        en: {
          title: 'Home EN',
          url: ''
        }
      }
    }, {
      name: 'pricing',
      languages: {
        en: {
          title: 'Pricing EN',
          url: '/iframe.html'
        }
      }
    }, {
      name: 'partner',
      languages: {
        en: {
          title: 'Partner EN',
          url: ''
        }
      }
    }, {
      name: 'docs',
      languages: {
        en: {
          title: 'Docs',
          url: 'https://docs.radiusaas.com/',
          target: '_blank'
        }
      }
    }],
    showSecondaryNavigation: true,
    theme: 'radiusaas'
  }
}`,...(R=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,W,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    light: true,
    ...productArgs,
    onSurface: true
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    light: true,
    blendMode: true,
    ...productArgs
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    search: true
  }
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const He=["Header","HeaderLight","HeaderEN","HeaderES","HeaderProductOnSurface","HeaderProduct","HeaderProductEN","HeaderProductES","HeaderProductTerraProviderES","HeaderProduct2","HeaderProductLight","HeaderProductLightBlendMode","HeaderSearch"];export{t as Header,s as HeaderEN,i as HeaderES,o as HeaderLight,g as HeaderProduct,l as HeaderProduct2,u as HeaderProductEN,m as HeaderProductES,p as HeaderProductLight,h as HeaderProductLightBlendMode,c as HeaderProductOnSurface,d as HeaderProductTerraProviderES,v as HeaderSearch,He as __namedExportsOrder,ve as default};
