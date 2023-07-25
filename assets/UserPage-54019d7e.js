import{s as o,b as i,a as j,c as k,P as a,u as L,r as s,j as t,I as p,m as Z,Q as S,N as J,n as Q,g as W,o as X}from"./index-8a3db3b4.js";import{b as ee,c as R,d as te,E as u}from"./formik.esm-2acaac51.js";const oe=o.section`
  background-color: #fef9f9;
  padding: 40px 0;

  @media ${i} {
    padding: 62px 0;
  }

  @media ${j} {
    display: flex;
    gap: 32px;
  }
`,ae=o.div``,ie=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,ne=o.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,se=o.div`
  text-align: center;
  margin-bottom: 26px;
`,re=o.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,le=o(ee)`
  background-color: #ffffff;
  border-radius: 40px;
  position: relative;
  padding: 20px 8px 16px;
  margin-bottom: 46px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
    margin-bottom: 40px;
    padding: 20px 24px 16px;
  }

  @media ${j} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,f=o.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,w=o.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${i} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,y=o(R)`
  width: 190px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${i} {
    min-width: 255px;
    font-size: ${e=>e.theme.fontSizes.md};
    letter-spacing: 0.64px;

    &:first-child {
      margin-bottom: 90px;
    }
  }

  &:disabled {
    background-color: #ffffff;
  }
`,de=o.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${e=>e.theme.colors.blue};
  color: ${e=>e.theme.colors.bgdColor};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.56px;
  margin-left: auto;

  @media ${i} {
    letter-spacing: 0.64px;
  }
`,me=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;o.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const ce=o.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;k.defaults.baseURL="https://mypets-backend.onrender.com/api/";const pe=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,he=3e6,E=({user:e})=>{const d=L(),[r,m]=s.useState(""),[h,g]=s.useState(void 0),[l,P]=s.useState({name:"",email:"",birthday:"",phone:"",city:""}),[c,A]=s.useState(!1),[F,C]=s.useState(!0);s.useEffect(()=>{},[r]),s.useEffect(()=>{e!==null&&(P({name:e&&e.name,email:e&&e.email,birthday:e?e.birthday:"",phone:e?e.phone:"",city:e?e.city:""}),g(e&&e.avatarURL))},[e]);const T=()=>{C(!1)},b=n=>{const{name:x,value:_}=n.target;P({...l,[x]:_})},[I,q]=s.useState(!1),N=()=>{q(!0),alert("Your photo has been successfully added")},U=()=>{C(!0),m(""),g(e&&e.avatarURL)},H=n=>{const x=n.target.files[0];x&&x.size<=he?(m(x),g(URL.createObjectURL(x))):(S.error("Your photo is large"),m(null),g(null))},K=async()=>{try{S.success("Changes saved successfully");const n=new FormData;n.append("name",l.name),n.append("email",l.email),n.append("birthday",l.birthday),n.append("phone",l.phone),n.append("city",l.city),n.append("avatar",r);const x={};n.forEach((V,Y)=>{x[Y]=V}),console.log("formData ==>",n);const _=await k.patch("/users",n);console.log("Дані успішно відправлені:",_)}catch(n){console.error("Помилка при відправці даних:",n)}},O=()=>{A(!c)};return t.jsxs(ae,{children:[t.jsx(ie,{children:"My information:"}),t.jsx(te,{initialValues:l,onSubmit:K,children:t.jsxs(le,{children:[t.jsx(ce,{onClick:O,children:c?t.jsx(p,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):t.jsx(p,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),t.jsxs(se,{children:[t.jsx(ne,{children:h&&t.jsx("img",{src:h,width:"182",height:"182",style:{borderRadius:40,objectFit:"cover"},alt:"Попередній перегляд аватарки"})}),c&&t.jsxs("label",{htmlFor:"avatar",style:{display:F?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:T,children:[t.jsx(p,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),t.jsx(R,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:H}),t.jsx(u,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),c&&!F&&t.jsxs(re,{children:[t.jsx("button",{type:"button",onClick:N,children:t.jsx(p,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),"Confirm",I&&t.jsx("button",{type:"button",onClick:U,children:t.jsx(p,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),t.jsxs("div",{children:[t.jsxs(f,{children:[t.jsx(w,{htmlFor:"name",children:"Name:"}),t.jsx(y,{id:"name",name:"name",placeholder:"Anna",disabled:!c,value:l.name,onChange:b,required:!0}),t.jsx(u,{name:"name",component:"div",style:{color:"red",fontSize:12}})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"email",children:"Email:"}),t.jsx(y,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!c,value:l.email,onChange:b,required:!0,type:"email"}),t.jsx(u,{name:"email",component:"div",style:{color:"red",fontSize:12}})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(y,{type:"date",id:"birthday",name:"birthday",disabled:!c,value:l.birthday,onChange:b,required:!0,min:new Date(1900,0,1),max:new Date}),t.jsx(u,{name:"birthday",component:"div",style:{color:"red",fontSize:12}})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"phone",children:"Phone:"}),t.jsx(y,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!c,value:l.phone,onChange:b,type:"number",required:!0,pattern:pe}),t.jsx(u,{name:"phone",component:"div",style:{color:"red",fontSize:12}})]}),t.jsxs(f,{children:[t.jsx(w,{htmlFor:"city",children:"City:"}),t.jsx(y,{id:"city",name:"city",placeholder:"Kyiv",disabled:!c,value:l.city,onChange:b,required:!0}),t.jsx(u,{name:"city",component:"div",style:{color:"red",fontSize:12}})]}),c?t.jsx(de,{type:"submit",children:"Save"}):t.jsxs(me,{onClick:()=>d(Z()),children:[t.jsx(p,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx("p",{children:"Log Out"})]})]})]})})]})};E.propTypes={user:a.shape({name:a.string,email:a.string,avatarURL:a.string,birthday:a.string,phone:a.string,city:a.string,_id:a.string})};k.defaults.baseURL="https://mypets-backend.onrender.com/api/";const xe=()=>{const[e,d]=s.useState(null),r=async()=>{try{const m=await k("/users"),{user:h}=await m.data;d(h)}catch(m){console.log(m.message)}};return s.useEffect(()=>{},[e]),s.useEffect(()=>{r()},[]),t.jsx(t.Fragment,{children:t.jsx(E,{user:e})})},ge=o.div``,ue=o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,be=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,fe=o.ul``,we=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${e=>e.theme.colors.bgdColor};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.64px;
`,ye=o.div`
  background-color: #ffffff;
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${i} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${j} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,je=o.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${i} {
    width: 128px;
  }

  @media ${j} {
    width: 161px;
  }
`,v=o.p`
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:last-child {
    padding-bottom: 40px;
  }

  &:first-child {
    padding-top: 20px;
  }

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${j} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,ke=o.div`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;

  @media ${i} {
    top: 8%;
    right: 2%;
  }
`,M=({item:e})=>t.jsxs(ye,{children:[t.jsx(ke,{children:t.jsx(p,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),t.jsx(je,{src:e.url}),t.jsxs("div",{children:[t.jsxs(v,{children:[t.jsx("b",{children:"Name:"})," ",e.name]}),t.jsxs(v,{children:[t.jsx("b",{children:"Date of birth:"})," ",e.birthday]}),t.jsxs(v,{children:[t.jsx("b",{children:"Type:"})," ",e.breed]}),t.jsxs(v,{children:[t.jsx("b",{children:"Comments:"})," ",e.comments]})]})]});M.propTypes={item:a.shape({name:a.string.isRequired,birthday:a.string.isRequired,breed:a.string.isRequired,comments:a.string.isRequired,url:a.string.isRequired}).isRequired};const ve=[{name:"Buddy",birthday:"2019-02-14",breed:"Labrador Retriever",comments:"Loves playing fetch!",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Luna",birthday:"2020-07-08",breed:"Maine Coon",comments:"A fluffy and gentle cat.",place:"Lviv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Max",birthday:"2018-11-03",breed:"German Shepherd",comments:"Great at guarding the house.",place:"Kharkiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Coco",birthday:"2021-04-20",breed:"French Bulldog",comments:"Enjoys napping on the couch.",place:"Dnipro",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Rocky",birthday:"2017-09-10",breed:"Golden Retriever",comments:"Loves swimming in the river.",place:"Odessa",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Molly",birthday:"2019-12-05",breed:"Siberian Husky",comments:"Energetic and loves running.",place:"Zaporizhzhia",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Leo",birthday:"2022-01-25",breed:"British Shorthair",comments:"Curious and playful.",place:"Vinnytsia",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Bella",birthday:"2020-03-12",breed:"Poodle",comments:"Loves learning new tricks.",place:"Kherson",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Oscar",birthday:"2018-06-18",breed:"Ragdoll",comments:"Very affectionate and gentle.",place:"Poltava",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Lucy",birthday:"2021-08-30",breed:"Bengal",comments:"Adores climbing and jumping.",place:"Chernihiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Charlie",birthday:"2019-11-02",breed:"Beagle",comments:"Has a great sense of smell.",place:"Sumy",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Daisy",birthday:"2020-05-22",breed:"Dachshund",comments:"Loves digging in the garden.",place:"Rivne",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Milo",birthday:"2017-07-17",breed:"Chihuahua",comments:"Tiny but full of energy.",place:"Ternopil",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Sophie",birthday:"2021-03-09",breed:"Scottish Fold",comments:"Likes playing with paper balls.",place:"Cherkasy",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Teddy",birthday:"2018-09-01",breed:"Bulldog",comments:"Loves cuddling on the couch.",place:"Ivano-Frankivsk",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Zoe",birthday:"2022-02-12",breed:"Siamese",comments:"Talkative and affectionate.",place:"Khmelnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Lucky",birthday:"2019-10-07",breed:"Jack Russell Terrier",comments:"Highly energetic and smart.",place:"Zhytomyr",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Mia",birthday:"2020-06-15",breed:"Persian",comments:"Loves lounging in the sun.",place:"Kropyvnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Bruno",birthday:"2018-04-27",breed:"Doberman",comments:"Protective and loyal.",place:"Mariupol",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Nala",birthday:"2022-03-20",breed:"Rottweiler",comments:"Fearless and confident.",place:"Mykolaiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Harley",birthday:"2019-12-08",breed:"Australian Shepherd",comments:"Loves herding anything that moves.",place:"Brovary",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Cleo",birthday:"2021-01-14",breed:"Exotic Shorthair",comments:"Playful and affectionate.",place:"Kremenchuk",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Toby",birthday:"2018-08-05",breed:"Boxer",comments:"Always up for a game of fetch.",place:"Chernivtsi",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Lola",birthday:"2020-04-03",breed:"Scottish Terrier",comments:"Playful and affectionate.",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"}],z={pets:ve},_e=()=>t.jsxs(ge,{children:[t.jsxs(ue,{children:[t.jsx(be,{children:"My pets:"}),t.jsx(J,{to:"/add-pet",children:t.jsxs(we,{type:"button",children:["Add Pet",t.jsx(p,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),z?t.jsx(fe,{children:z.pets.map(e=>t.jsx(M,{item:e},e.name))}):t.jsx("div",{children:t.jsx("h1",{children:"You have not pets in your collection. Please, add your pet(s)"})})]});k.defaults.baseURL="https://mypets-backend.onrender.com/api/";const $e=()=>t.jsx(t.Fragment,{children:t.jsx(_e,{})}),Pe=o.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  overflow-y: scroll;
`,Fe=o.div`
  min-height: 200px;
  min-width: 200px;
  border-radius: 20px;

  position: absolute;
  top: 20%;

  background-color: ${({theme:e})=>e.colors.white};
`,Ce=o.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;

  position: absolute;
  right: 12px;
  top: 12px;

  line-height: 0;

  background: transparent;

  @media ${i} {
    right: 24px;
    top: 24px;
  }
`,Se=document.querySelector("#modal-root"),G=({children:e,onClose:d})=>{const r=s.useCallback(({target:m,currentTarget:h,code:g})=>{(m===h||g==="Escape")&&d()},[d]);return s.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[r]),Q.createPortal(t.jsx(Pe,{onClick:r,children:t.jsxs(Fe,{children:[t.jsx(Ce,{type:"button",onClick:d,"aria-label":"close",children:t.jsx(p,{iconName:"icon-cross-small",width:"24px",height:"24px",stroke:"#54ADFF"})}),e]})}),Se)};G.propTypes={onClose:a.func.isRequired,children:a.element.isRequired};o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${i} {
    flex-direction: row;
    gap: 17px;
  }
`;const $=o.button`
  position: relative;
  width: 100%;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;

  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 1.2;
  letter-spacing: 0.64px;
  font-family: ${e=>e.theme.fonts.main.bold};

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    background: ${({theme:e})=>e.colors.blueGradient};
    opacity: 0;

    transition: opacity ${({theme:e})=>e.transitionHover};
  }

  @media ${i} {
    width: 129px;
    padding: 8px 20px;
  }
`;o($)`
  background-color: transparent;
  border: 2px solid ${({theme:e})=>e.colors.blue};
  color: ${({theme:e})=>e.colors.blue};
  transition: all ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.white};
    background-color: ${({theme:e})=>e.colors.blue};
    border-color: ${({theme:e})=>e.colors.blue};
    &::before {
      opacity: 1;
    }
  }
`;o($)`
  gap: 8px;
  padding: 6px 12px;
  border: none;
  background-color: ${({theme:e})=>e.colors.blue};
  color: ${({theme:e})=>e.colors.white};
  transition: all ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }
`;const ze=o($)`
  gap: 12px;
  margin: 0 auto;
  padding: 8px 28px;
  border: none;
  background-color: ${({theme:e})=>e.colors.blue};
  color: ${({theme:e})=>e.colors.white};
  transition: all ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }

  @media ${i} {
    width: 248px;
  }
`,Le=o.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`,Re=o.div`
  position: relative;
  z-index: 5;
`,Ee=o(p)`
  stroke: ${({theme:e})=>e.colors.white};
  fill: transparent;
`,B=({onClick:e,text:d})=>t.jsxs(ze,{onClick:e,children:[t.jsx(Le,{children:d}),t.jsx(Re,{children:t.jsx(Ee,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});B.propTypes={onClick:a.func.isRequired,text:a.string.isRequired};const Me=o.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.white};

  @media ${i} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Ge=o.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.black};

  @media ${i} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Be=o.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.black};

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,D=({onClose:e})=>t.jsx(G,{onClose:e,children:t.jsxs(Me,{children:[t.jsx(Ge,{children:"Congrats!"}),t.jsx(Be,{children:"Your registration is success"}),t.jsx(B,{onClick:e,text:"Go to profile"})]})});D.propTypes={onClose:a.func.isRequired};function Te(){const{isNewUser:e}=W(),[d,r]=s.useState(!0),m=L(),h=()=>{r(!1),m(X())};return s.useEffect(()=>{},[e]),t.jsxs(oe,{children:[e&&d&&t.jsx("div",{children:t.jsx(D,{onClose:h})}),t.jsx(xe,{}),t.jsx($e,{})]})}export{Te as default};
