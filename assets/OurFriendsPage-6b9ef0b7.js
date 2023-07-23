import{s as t,a as o,P as p,j as s,b as a}from"./index-190f6553.js";const m=t.div`
  margin-top: 40px;

  @media ${o} {
    margin-top: 80px;
  }
`,d=t.h2`
  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({theme:e})=>e.colors.black};

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.huge};
  }
`,n=({children:e})=>s.jsx(m,{children:s.jsx(d,{children:e})});n.propTypes={children:p.any.isRequired};const u=[{title:"Сіріус",url:"https://dogcat.com.ua",addressUrl:"https://goo.gl/maps/iq8NXEUf31EAQCzc6",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png",address:"Fedorivka, Kyiv Oblast",workDays:[{isOpen:!1},{isOpen:!1},{isOpen:!1},{isOpen:!1},{isOpen:!1},{isOpen:!0,from:"11:00",to:"16:00"},{isOpen:!0,from:"11:00",to:"16:00"}],phone:"+380931934069",email:null},{title:"Happy Paw",url:"https://happypaw.ua/ua",addressUrl:"https://goo.gl/maps/3RyzTYBvMr9WQWCC6",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_288.png",address:"Київ",workDays:[{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"}],phone:"+380442900329",email:"hello@happypaw.ua"},{title:"Харківський притулок",url:"https://www.city.kharkov.ua/uk/news/-51132.html",addressUrl:"https://goo.gl/maps/gjMzx3ifaRgXSftP9",imageUrl:"https://animals-city.org/wp-content/themes/animals-city/img/logo.svg",address:"Харків",workDays:null,phone:"+380577607961",email:"press@citynet.kharkov.ua"},{title:"ЛКП “ЛЕВ”",url:"https://lkplev.com/",addressUrl:"https://goo.gl/maps/4xMfxtahHPfXeAYU8",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_289.png",address:"Львів, вул. Промислова 56",workDays:null,phone:"+380685354545",email:null},{title:"Велике серце",url:"https://pethelp.com.ua/interv_yu_z_zasnovnitseyu_pritulku_velike_sertse/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_286.png",address:null,workDays:null,phone:null,email:"pethelp.ukr@gmail.com"},{title:"БАРБОС",url:"https://uk-ua.facebook.com/NGO.Barbos/",addressUrl:"https://goo.gl/maps/pnzYL8t7jbG7j1SQ9",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_293.png",address:"Ужгород",workDays:null,phone:"+380664880480",email:null},{title:"LicoVet",url:"https://lico.vet/",addressUrl:"https://goo.gl/maps/sub8u9TAAvLJRE9j9",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_292.png",address:"Ужгород",workDays:[{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"}],phone:"+380965098005",email:null},{title:"Purina",url:"https://www.purina.ua/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_290.png",address:null,workDays:null,phone:"+380800500950",email:"info@ua.nestle.com"},{title:"Whiskas",url:"https://www.whiskas.ua/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_285.png",address:null,phone:"+380800500155",email:null},{title:"Josera",url:"https://josera.ua/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_291.png",address:null,workDays:[{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!1,from:"",to:""},{isOpen:!1,from:"",to:""}],phone:"+380800409060",email:"info@josera.ua"}],g=t.section`
  padding-bottom: 75px;
`,h=t.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${a} {
    margin-bottom: 60px;
  }
`,c=t.div``,f=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,x=t.li`
  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: #fff;

  @media ${o} {
    min-width: 336px;
  }

  @media ${a} {
    min-width: 394px;
    flex: 0;
  }
`,k=t.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,w=t.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,y=t.div``,j=t.img`
  width: 100px;
  height: 68px;

  @media ${o} {
    width: 124px;
    height: 88px;
  }

  @media ${a} {
    width: 146px;
    height: 104px;
  }
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,i=t.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${a} {
    font-size: ${({theme:e})=>e.fontSizes.md};
  }
`,r=t.p``,l=t.p`
  font-family: ${({theme:e})=>e.fonts.main.regular};
`;function v(){return s.jsxs(g,{children:[s.jsx(h,{children:s.jsx(n,{children:"Our friends"})}),s.jsx(c,{children:s.jsx(f,{children:u.map(e=>s.jsxs(x,{children:[s.jsx(w,{href:`${e.url}`,target:"_blank",children:e.title}),s.jsxs(k,{children:[s.jsx(y,{children:s.jsx(j,{src:e.imageUrl})}),s.jsxs(b,{children:[s.jsxs(i,{children:[s.jsx(r,{children:"Time:"}),s.jsx(l,{children:"8:00 - 20:00"})]}),s.jsxs(i,{children:[s.jsx(r,{children:"Address:"}),s.jsx(l,{children:e.address===null?"Website only":e.address})]}),s.jsxs(i,{children:[s.jsx(r,{children:"Email:"}),s.jsx(l,{children:e.email===null?"Telephone only":e.email})]}),s.jsxs(i,{children:[s.jsx(r,{children:"Phone:"}),s.jsx(l,{children:e.phone===null?"Email only":e.phone})]})]})]})]},e.imageUrl))})})]})}export{v as default};
