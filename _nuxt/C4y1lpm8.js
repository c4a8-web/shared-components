import{_ as l}from"./Bo3mZvBG.js";import{_ as u}from"./BGXcdo9U.js";import"./CU4Hs53D.js";import"./CxlEFrmm.js";import"./Dq3WPmkH.js";import"./-_gES4nC.js";import"./D8DpVsr-.js";import"./BdDtwVcA.js";import"./BUWw9eUD.js";import"./CMtOK7Wv.js";const p=(d,m)=>c=>({components:{SliderComponent:l,TeamCardsItem:u},setup(){return{args:c,items:m}},template:`
    <SliderComponent v-bind="args">
      ${d}
    </SliderComponent>
  `}),D={component:l,argTypes:{},title:"Components/Slider"},e={args:{},render:p(`
    <div class="slider-item" style="padding: 20px; background: #f0f0f0; margin: 10px; border-radius: 8px;" v-for="item in items" :key="item.text">
      {{ item.text }}
    </div>
  `,[{text:1},{text:2},{text:3}])},n={args:{hideBackground:!0,wrapped:!1,options:{loop:!0,breakpoints:{320:{slidesPerView:1.5},576:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4,loopAdditionalSlides:2}}},v2:!0},render:p(`
    <team-cards-item
      v-for="(member, index) in items"
      :key="index"
      :img="member.img"
      :alt="member.alt"
      :name="member.name"
      :job="member.job"
      :description="member.description"
      :skills="member.skills"
      :twitter="member.twitter"
      :linkedin="member.linkedin"
    />
  `,[{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",alt:"John Doe 1",name:"John Doe 1",job:"Frontend Developer",description:"Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.",skills:"Vue.js, JavaScript, CSS, HTML",twitter:"https://twitter.com/johndoe",linkedin:"https://linkedin.com/in/johndoe"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png",alt:"Jane Smith 2",name:"Jane Smith 2",job:"Backend Developer",description:"Experienced in building scalable server-side applications and APIs. Loves working with Node.js and databases.",skills:"Node.js, Python, PostgreSQL, Docker",twitter:"https://twitter.com/janesmith",linkedin:"https://linkedin.com/in/janesmith"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",alt:"Mike Johnson 3",name:"Mike Johnson 3",job:"UI/UX Designer",description:"Creative designer focused on user experience and visual design. Brings ideas to life through thoughtful design.",skills:"Figma, Adobe Creative Suite, User Research",twitter:"https://twitter.com/mikejohnson",linkedin:"https://linkedin.com/in/mikejohnson"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png",alt:"Sarah Wilson 4",name:"Sarah Wilson 4",job:"DevOps Engineer",description:"Expert in cloud infrastructure and deployment automation. Ensures smooth and reliable application delivery.",skills:"AWS, Kubernetes, CI/CD, Terraform",twitter:"https://twitter.com/sarahwilson",linkedin:"https://linkedin.com/in/sarahwilson"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",alt:"John Doe 5",name:"John Doe 5",job:"Frontend Developer",description:"Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.",skills:"Vue.js, JavaScript, CSS, HTML",twitter:"https://twitter.com/johndoe",linkedin:"https://linkedin.com/in/johndoe"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",alt:"Mike Johnson 6",name:"Mike Johnson 6",job:"UI/UX Designer",description:"Creative designer focused on user experience and visual design. Brings ideas to life through thoughtful design.",skills:"Figma, Adobe Creative Suite, User Research",twitter:"https://twitter.com/mikejohnson",linkedin:"https://linkedin.com/in/mikejohnson"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png",alt:"Sarah Wilson 7",name:"Sarah Wilson 7",job:"DevOps Engineer",description:"Expert in cloud infrastructure and deployment automation. Ensures smooth and reliable application delivery.",skills:"AWS, Kubernetes, CI/CD, Terraform",twitter:"https://twitter.com/sarahwilson",linkedin:"https://linkedin.com/in/sarahwilson"},{img:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",alt:"John Doe 8",name:"John Doe 8",job:"Frontend Developer",description:"Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.",skills:"Vue.js, JavaScript, CSS, HTML",twitter:"https://twitter.com/johndoe",linkedin:"https://linkedin.com/in/johndoe"}])};var i,t,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: sliderRender(\`
    <div class="slider-item" style="padding: 20px; background: #f0f0f0; margin: 10px; border-radius: 8px;" v-for="item in items" :key="item.text">
      {{ item.text }}
    </div>
  \`, [{
    text: 1
  }, {
    text: 2
  }, {
    text: 3
  }])
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    hideBackground: true,
    wrapped: false,
    options: {
      loop: true,
      // navigation: true,
      breakpoints: {
        320: {
          slidesPerView: 1.5
        },
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4,
          loopAdditionalSlides: 2
        }
      }
    },
    v2: true
  },
  render: sliderRender(\`
    <team-cards-item
      v-for="(member, index) in items"
      :key="index"
      :img="member.img"
      :alt="member.alt"
      :name="member.name"
      :job="member.job"
      :description="member.description"
      :skills="member.skills"
      :twitter="member.twitter"
      :linkedin="member.linkedin"
    />
  \`, [{
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
    alt: 'John Doe 1',
    name: 'John Doe 1',
    job: 'Frontend Developer',
    description: 'Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.',
    skills: 'Vue.js, JavaScript, CSS, HTML',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png',
    alt: 'Jane Smith 2',
    name: 'Jane Smith 2',
    job: 'Backend Developer',
    description: 'Experienced in building scalable server-side applications and APIs. Loves working with Node.js and databases.',
    skills: 'Node.js, Python, PostgreSQL, Docker',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
    alt: 'Mike Johnson 3',
    name: 'Mike Johnson 3',
    job: 'UI/UX Designer',
    description: 'Creative designer focused on user experience and visual design. Brings ideas to life through thoughtful design.',
    skills: 'Figma, Adobe Creative Suite, User Research',
    twitter: 'https://twitter.com/mikejohnson',
    linkedin: 'https://linkedin.com/in/mikejohnson'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png',
    alt: 'Sarah Wilson 4',
    name: 'Sarah Wilson 4',
    job: 'DevOps Engineer',
    description: 'Expert in cloud infrastructure and deployment automation. Ensures smooth and reliable application delivery.',
    skills: 'AWS, Kubernetes, CI/CD, Terraform',
    twitter: 'https://twitter.com/sarahwilson',
    linkedin: 'https://linkedin.com/in/sarahwilson'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
    alt: 'John Doe 5',
    name: 'John Doe 5',
    job: 'Frontend Developer',
    description: 'Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.',
    skills: 'Vue.js, JavaScript, CSS, HTML',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
    alt: 'Mike Johnson 6',
    name: 'Mike Johnson 6',
    job: 'UI/UX Designer',
    description: 'Creative designer focused on user experience and visual design. Brings ideas to life through thoughtful design.',
    skills: 'Figma, Adobe Creative Suite, User Research',
    twitter: 'https://twitter.com/mikejohnson',
    linkedin: 'https://linkedin.com/in/mikejohnson'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png',
    alt: 'Sarah Wilson 7',
    name: 'Sarah Wilson 7',
    job: 'DevOps Engineer',
    description: 'Expert in cloud infrastructure and deployment automation. Ensures smooth and reliable application delivery.',
    skills: 'AWS, Kubernetes, CI/CD, Terraform',
    twitter: 'https://twitter.com/sarahwilson',
    linkedin: 'https://linkedin.com/in/sarahwilson'
  }, {
    img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
    alt: 'John Doe 8',
    name: 'John Doe 8',
    job: 'Frontend Developer',
    description: 'Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.',
    skills: 'Vue.js, JavaScript, CSS, HTML',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  }])
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const y=["Slider","TeamCardsSlider"];export{e as Slider,n as TeamCardsSlider,y as __namedExportsOrder,D as default};
