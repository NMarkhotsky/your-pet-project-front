import{s as o,b as n,a as j,c as b,d as W,e as S,m as Z,P as i,u as D,r as a,j as t,I as h,n as J,Q as E,N as X,o as ee,g as te,p as oe}from"./index-12854a88.js";import{b as ie,c as q,d as ne,E as se}from"./formik.esm-e2da3074.js";const ae=o.section`
  background-color: #fef9f9;
  padding: 40px 0;

  @media ${n} {
    padding: 62px 0;
  }

  @media ${j} {
    display: flex;
    gap: 32px;
  }
`,re=o.div``,ce=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${n} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,le=o.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,de=o.div`
  text-align: center;
  margin-bottom: 26px;
`,pe=o.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,he=o(ie)`
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
`,y=o.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,$=o.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${n} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,v=o(q)`
  width: 190px;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${n} {
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

  &::placeholder {
    color: #dcdcdc;
  }
`,me=o.button`
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

  @media ${n} {
    letter-spacing: 0.64px;
  }
`,xe=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;o.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const fe=o.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;b.defaults.baseURL="https://mypets-backend.onrender.com/api/";const ge=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,ue=3e6,U=W().shape({name:S().min(2).max(16).required("Name  is required field"),birthday:Z().required("Enter a date of birth").min(new Date(1900,0,1)).max(new Date,"You can't be born in the future!"),phone:S().matches(ge,"Invalid phone number"),city:S().min(2).max(16)}),A=({user:e})=>{const s=D(),[r,d]=a.useState(void 0),[l,f]=a.useState(""),[c,w]=a.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[m,k]=a.useState(!1),[L,C]=a.useState(!0);a.useEffect(()=>{e&&(w({name:e&&e.name,birthday:e?e.birthday:"",phone:e?e.phone:"",city:e?e.city:"",avatar:c.avatar||""}),f(e&&e.email),d(c.avatar?URL.createObjectURL(c.avatar):e.avatarURL))},[e,c.avatar]);const O=()=>{C(!1)},F=p=>{const{name:x,value:g}=p.target;w({...c,[x]:g})},_=()=>{k(!0),C(!0)},H=()=>{k(!0),C(!0)},Y=p=>{const x=p.target.files[0];x&&x.size<=ue?(w({...c,avatar:x}),d(URL.createObjectURL(x))):(E.error("Your photo is large"),w({...c,avatar:e&&e.avatarURL}),d(e&&e.avatarURL))},V=async()=>{k(!1);try{const p=new FormData,x=Object.entries(c);console.log("entries ===>",x);let g={};x.forEach(u=>{u[1]&&(p.append(u[0],u[1]),g={...g,[u[0]]:u[1]})}),console.log("values ===>",c);const I={};p.forEach((u,Q)=>{I[Q]=u}),console.log("formDataObject----->",I),console.log("validationObject ===>",g),await U.validate(g),console.log(await U.validate(g));const K=await b.patch("/users",p);E.success("Changes saved successfully"),console.log("Дані успішно відправлені:",K)}catch(p){p.name==="ValidationError"&&(console.log("ErrorErrors--->",p.errors[0]),E.error(p.errors[0]))}},G=()=>{k(!m)};return t.jsxs(re,{children:[t.jsx(ce,{children:"My information:"}),t.jsx(ne,{initialValues:c,onSubmit:V,children:t.jsxs(he,{children:[t.jsx(fe,{onClick:G,children:m?t.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):t.jsx(h,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),t.jsxs(de,{children:[t.jsx(le,{children:r&&t.jsx("img",{src:r,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),m&&t.jsxs("label",{htmlFor:"avatar",style:{display:L?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:O,children:[t.jsx(h,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),t.jsx(q,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:Y}),t.jsx(se,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),m&&!L&&t.jsxs(pe,{children:[t.jsx("button",{type:"button",onClick:_,children:t.jsx(h,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),"Confirm",t.jsx("button",{type:"button",onClick:H,children:t.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),t.jsxs("div",{children:[t.jsxs(y,{children:[t.jsx($,{htmlFor:"name",children:"Name:"}),t.jsx(v,{id:"name",name:"name",placeholder:"Anna",disabled:!m,value:c.name,onChange:F})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"email",children:"Email:"}),t.jsx(v,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:l})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(v,{type:"date",id:"birthday",name:"birthday",disabled:!m,value:c.birthday,onChange:F})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"phone",children:"Phone:"}),t.jsx(v,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!m,value:c.phone,onChange:F})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"city",children:"City:"}),t.jsx(v,{id:"city",name:"city",placeholder:"Kyiv",disabled:!m,value:c.city,onChange:F})]}),m?t.jsx(me,{type:"submit",children:"Save"}):t.jsxs(xe,{onClick:()=>s(J()),children:[t.jsx(h,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx("p",{children:"Log Out"})]})]})]})})]})};A.propTypes={user:i.shape({name:i.string,email:i.string,avatarURL:i.string,birthday:i.string,phone:i.string,city:i.string})};b.defaults.baseURL="https://mypets-backend.onrender.com/api/";const be=()=>{const[e,s]=a.useState(null),r=async()=>{try{const d=await b("/users"),{user:l}=await d.data;s(l)}catch(d){console.log(d.message)}};return a.useEffect(()=>{},[e]),a.useEffect(()=>{r()},[]),t.jsx(t.Fragment,{children:t.jsx(A,{user:e})})},je=o.div`
  @media ${j} {
    width: 821px;
  }
`,ye=o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,$e=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${n} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,ve=o.ul``,we=o.button`
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
`,ke=o.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;
  /* height: 131px; */

  @media ${n} {
    max-width: 250px;
    /* height: 330px; */
  }

  @media ${j} {
    max-width: 292px;
  }
`,Fe=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  /* margin: 0 auto; */
`,ze=o.h1`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${n} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,Ce=o.div`
  background-color: #ffffff;
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${n} {
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
`,Se=o.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${n} {
    width: 128px;
  }

  @media ${j} {
    width: 161px;
  }
`,z=o.p`
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

  @media ${n} {
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
`,Ee=o.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${n} {
    top: 8%;
    right: 2%;
  }
`,P=({item:e,deletePet:s})=>t.jsxs(Ce,{children:[t.jsx(Ee,{onClick:()=>s(e._id),children:t.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),t.jsx(Se,{src:e.photoURL}),t.jsxs("div",{children:[t.jsxs(z,{children:[t.jsx("b",{children:"Name:"})," ",e.name]}),t.jsxs(z,{children:[t.jsx("b",{children:"Date of birth:"})," ",e.birthday]}),t.jsxs(z,{children:[t.jsx("b",{children:"Type:"})," ",e.type]}),t.jsxs(z,{children:[t.jsx("b",{children:"Comments:"})," ",e.comments]})]})]});P.propTypes={item:i.shape({name:i.string.isRequired,birthday:i.string.isRequired,type:i.string.isRequired,comments:i.string.isRequired,photoURL:i.string.isRequired,_id:i.string.isRequired}).isRequired,deletePet:i.func.isRequired};const Re="/your-pet-project-front/assets/catImg-4fba710b.png",T=({pets:e,deletePet:s})=>(a.useEffect(()=>{e.length},[e]),t.jsxs(je,{children:[t.jsxs(ye,{children:[t.jsx($e,{children:"My pets:"}),t.jsx(X,{to:"/add-pet",children:t.jsxs(we,{type:"button",children:["Add Pet",t.jsx(h,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),t.jsx(ve,{children:e.map(r=>t.jsx(P,{item:r,deletePet:s},r._id))}),e.length===0&&t.jsxs(Fe,{children:[t.jsxs(ze,{children:[t.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",t.jsx("br",{}),t.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]}),t.jsx(ke,{src:Re,alt:"Cat with tongue"})]})]}));T.propTypes={pets:i.arrayOf(i.shape({_id:i.string.isRequired})).isRequired,deletePet:i.func.isRequired};b.defaults.baseURL="https://mypets-backend.onrender.com/api/";const Le=()=>{const[e,s]=a.useState([]),r=async()=>{try{const{data:l}=await b.get("/pets");s(l.pets)}catch(l){console.log(l.message)}},d=async l=>{await b.delete(`/pets/${l}`).then(()=>{s(f=>f.filter(c=>c._id!==l))}).catch(f=>{console.error("Error deleting pet:",f)})};return a.useEffect(()=>{},[e]),a.useEffect(()=>{r()},[]),t.jsx(t.Fragment,{children:t.jsx(T,{pets:e,deletePet:d})})},Ie=o.div`
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
`,Ue=o.div`
  min-height: 200px;
  min-width: 200px;
  border-radius: 20px;

  position: absolute;
  top: 20%;

  background-color: ${({theme:e})=>e.colors.white};
`,De=o.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;

  position: absolute;
  right: 12px;
  top: 12px;

  line-height: 0;

  background: transparent;

  @media ${n} {
    right: 24px;
    top: 24px;
  }
`,qe=document.querySelector("#modal-root"),B=({children:e,onClose:s})=>{const r=a.useCallback(({target:d,currentTarget:l,code:f})=>{(d===l||f==="Escape")&&s()},[s]);return a.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[r]),ee.createPortal(t.jsx(Ie,{onClick:r,children:t.jsxs(Ue,{children:[t.jsx(De,{type:"button",onClick:s,"aria-label":"close",children:t.jsx(h,{iconName:"icon-cross-small",width:"24px",height:"24px",stroke:"#54ADFF"})}),e]})}),qe)};B.propTypes={onClose:i.func.isRequired,children:i.element.isRequired};o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${n} {
    flex-direction: row;
    gap: 17px;
  }
`;const R=o.button`
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

  @media ${n} {
    width: 129px;
    padding: 8px 20px;
  }
`;o(R)`
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
`;o(R)`
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
`;const Ae=o(R)`
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

  @media ${n} {
    width: 248px;
  }
`,Pe=o.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`,Te=o.div`
  position: relative;
  z-index: 5;
`,Be=o(h)`
  stroke: ${({theme:e})=>e.colors.white};
  fill: transparent;
`,N=({onClick:e,text:s})=>t.jsxs(Ae,{onClick:e,children:[t.jsx(Pe,{children:s}),t.jsx(Te,{children:t.jsx(Be,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});N.propTypes={onClick:i.func.isRequired,text:i.string.isRequired};const Ne=o.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.white};

  @media ${n} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Me=o.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.black};

  @media ${n} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Oe=o.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.black};

  @media ${n} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,M=({onClose:e})=>t.jsx(B,{onClose:e,children:t.jsxs(Ne,{children:[t.jsx(Me,{children:"Congrats!"}),t.jsx(Oe,{children:"Your registration is success"}),t.jsx(N,{onClick:e,text:"Go to profile"})]})});M.propTypes={onClose:i.func.isRequired};function Ye(){const{isNewUser:e}=te(),[s,r]=a.useState(!0),d=D(),l=()=>{r(!1),d(oe())};return a.useEffect(()=>{},[e]),t.jsxs(ae,{children:[e&&s&&t.jsx("div",{children:t.jsx(M,{onClose:l})}),t.jsx(be,{}),t.jsx(Le,{})]})}export{Ye as default};
