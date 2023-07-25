import{s as o,b as a,a as w,c as u,d as Q,e as F,P as i,u as D,r as s,j as t,I as h,m as W,Q as S,N as Z,n as J,g as X,o as ee}from"./index-a224a882.js";import{b as te,c as I,d as oe,E as ie}from"./formik.esm-f4d2d1cd.js";const ne=o.section`
  background-color: #fef9f9;
  padding: 40px 0;

  @media ${a} {
    padding: 62px 0;
  }

  @media ${w} {
    display: flex;
    gap: 32px;
  }
`,se=o.div``,ae=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,re=o.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,ce=o.div`
  text-align: center;
  margin-bottom: 26px;
`,le=o.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,de=o(te)`
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

  @media ${w} {
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

  @media ${a} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,v=o(I)`
  width: 190px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${a} {
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
`,pe=o.button`
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

  @media ${a} {
    letter-spacing: 0.64px;
  }
`,he=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;o.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const me=o.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;u.defaults.baseURL="https://mypets-backend.onrender.com/api/";const xe=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,fe=3e6,ge=Q().shape({name:F().min(2).max(16).required("Name  is required field"),birthday:F().required("Enter a date of birth").min(new Date(1900,0,1)).max(new Date,"You can't be born in the future!"),phone:F().matches(xe,"Invalid phone number"),city:F().min(2).max(16)}),q=({user:e})=>{const n=D(),[r,c]=s.useState(void 0),[l,f]=s.useState(""),[d,j]=s.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[m,z]=s.useState(!1),[L,R]=s.useState(!0);s.useEffect(()=>{e&&(j({name:e&&e.name,birthday:e?e.birthday:"",phone:e?e.phone:"",city:e?e.city:"",avatar:e&&e.avatarURL}),f(e&&e.email),c(e&&e.avatarURL))},[e]);const M=()=>{R(!1)},k=p=>{const{name:x,value:b}=p.target;j({...d,[x]:b})},O=()=>{z(!0),R(!0)},_=()=>{z(!0),R(!0),j({...d,avatar:e&&e.avatarURL}),c(e&&e.avatarURL)},H=p=>{const x=p.target.files[0];x&&x.size<=fe?(j({...d,avatar:x}),c(URL.createObjectURL(x))):(S.error("Your photo is large"),j({...d,avatar:e&&e.avatarURL}),c(e&&e.avatarURL))},Y=async()=>{console.log("name --->",d.name);try{const p=new FormData,x=Object.entries(d);console.log("entries ===>",x);let b={};x.forEach(g=>{g[1]&&(p.append(g[0],g[1]),b={...b,[g[0]]:g[1]})}),console.log("values ===>",d);const U={};p.forEach((g,K)=>{U[K]=g}),console.log("formDataObject----->",U),console.log("validationObject ===>",b),await ge.validate(b);const V=await u.patch("/users",p);S.success("Changes saved successfully"),console.log("Дані успішно відправлені:",V)}catch(p){console.error("Помилка при відправці даних:",p),S.error(p.message)}},G=()=>{z(!m)};return t.jsxs(se,{children:[t.jsx(ae,{children:"My information:"}),t.jsx(oe,{initialValues:d,onSubmit:Y,children:t.jsxs(de,{children:[t.jsx(me,{onClick:G,children:m?t.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):t.jsx(h,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),t.jsxs(ce,{children:[t.jsx(re,{children:r&&t.jsx("img",{src:r,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),m&&t.jsxs("label",{htmlFor:"avatar",style:{display:L?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:M,children:[t.jsx(h,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),t.jsx(I,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:H}),t.jsx(ie,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),m&&!L&&t.jsxs(le,{children:[t.jsx("button",{type:"button",onClick:O,children:t.jsx(h,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),"Confirm",t.jsx("button",{type:"button",onClick:_,children:t.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),t.jsxs("div",{children:[t.jsxs(y,{children:[t.jsx($,{htmlFor:"name",children:"Name:"}),t.jsx(v,{id:"name",name:"name",placeholder:"Anna",disabled:!m,value:d.name,onChange:k})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"email",children:"Email:"}),t.jsx(v,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:l})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(v,{type:"date",id:"birthday",name:"birthday",disabled:!m,value:d.birthday,onChange:k})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"phone",children:"Phone:"}),t.jsx(v,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!m,value:d.phone,onChange:k})]}),t.jsxs(y,{children:[t.jsx($,{htmlFor:"city",children:"City:"}),t.jsx(v,{id:"city",name:"city",placeholder:"Kyiv",disabled:!m,value:d.city,onChange:k})]}),m?t.jsx(pe,{type:"submit",children:"Save"}):t.jsxs(he,{onClick:()=>n(W()),children:[t.jsx(h,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx("p",{children:"Log Out"})]})]})]})})]})};q.propTypes={user:i.shape({name:i.string,email:i.string,avatarURL:i.string,birthday:i.string,phone:i.string,city:i.string})};u.defaults.baseURL="https://mypets-backend.onrender.com/api/";const ue=()=>{const[e,n]=s.useState(null),r=async()=>{try{const c=await u("/users"),{user:l}=await c.data;n(l)}catch(c){console.log(c.message)}};return s.useEffect(()=>{},[e]),s.useEffect(()=>{r()},[]),t.jsx(t.Fragment,{children:t.jsx(q,{user:e})})},be=o.div``,je=o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,ye=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,$e=o.ul``,ve=o.button`
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
`,we=o.div`
  background-color: #ffffff;
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${a} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${w} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,ke=o.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${a} {
    width: 128px;
  }

  @media ${w} {
    width: 161px;
  }
`,C=o.p`
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

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${w} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,Fe=o.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${a} {
    top: 8%;
    right: 2%;
  }
`,A=({item:e,deletePet:n})=>t.jsxs(we,{children:[t.jsx(Fe,{onClick:()=>n(e._id),children:t.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),t.jsx(ke,{src:e.photoURL}),t.jsxs("div",{children:[t.jsxs(C,{children:[t.jsx("b",{children:"Name:"})," ",e.name]}),t.jsxs(C,{children:[t.jsx("b",{children:"Date of birth:"})," ",e.birthday]}),t.jsxs(C,{children:[t.jsx("b",{children:"Type:"})," ",e.type]}),t.jsxs(C,{children:[t.jsx("b",{children:"Comments:"})," ",e.comments]})]})]});A.propTypes={item:i.shape({name:i.string.isRequired,birthday:i.string.isRequired,type:i.string.isRequired,comments:i.string.isRequired,photoURL:i.string.isRequired,_id:i.string.isRequired}).isRequired,deletePet:i.func.isRequired};const P=({pets:e,deletePet:n})=>(s.useEffect(()=>{},[e]),t.jsxs(be,{children:[t.jsxs(je,{children:[t.jsx(ye,{children:"My pets:"}),t.jsx(Z,{to:"/add-pet",children:t.jsxs(ve,{type:"button",children:["Add Pet",t.jsx(h,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),t.jsx($e,{children:e.map(r=>t.jsx(A,{item:r,deletePet:n},r._id))})]}));P.propTypes={pets:i.arrayOf(i.shape({_id:i.string.isRequired})).isRequired,deletePet:i.func.isRequired};u.defaults.baseURL="https://mypets-backend.onrender.com/api/";const Ce=()=>{const[e,n]=s.useState([]),r=async()=>{try{const{data:l}=await u.get("/pets");n(l.pets)}catch(l){console.log(l.message)}},c=async l=>{await u.delete(`/pets/${l}`).then(()=>{n(f=>f.filter(d=>d._id!==l))}).catch(f=>{console.error("Error deleting pet:",f)})};return s.useEffect(()=>{},[e]),s.useEffect(()=>{r()},[]),t.jsx(t.Fragment,{children:t.jsx(P,{pets:e,deletePet:c})})},ze=o.div`
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
`,Re=o.div`
  min-height: 200px;
  min-width: 200px;
  border-radius: 20px;

  position: absolute;
  top: 20%;

  background-color: ${({theme:e})=>e.colors.white};
`,Se=o.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;

  position: absolute;
  right: 12px;
  top: 12px;

  line-height: 0;

  background: transparent;

  @media ${a} {
    right: 24px;
    top: 24px;
  }
`,Ee=document.querySelector("#modal-root"),N=({children:e,onClose:n})=>{const r=s.useCallback(({target:c,currentTarget:l,code:f})=>{(c===l||f==="Escape")&&n()},[n]);return s.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[r]),J.createPortal(t.jsx(ze,{onClick:r,children:t.jsxs(Re,{children:[t.jsx(Se,{type:"button",onClick:n,"aria-label":"close",children:t.jsx(h,{iconName:"icon-cross-small",width:"24px",height:"24px",stroke:"#54ADFF"})}),e]})}),Ee)};N.propTypes={onClose:i.func.isRequired,children:i.element.isRequired};o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${a} {
    flex-direction: row;
    gap: 17px;
  }
`;const E=o.button`
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

  @media ${a} {
    width: 129px;
    padding: 8px 20px;
  }
`;o(E)`
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
`;o(E)`
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
`;const Le=o(E)`
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

  @media ${a} {
    width: 248px;
  }
`,Ue=o.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`,De=o.div`
  position: relative;
  z-index: 5;
`,Ie=o(h)`
  stroke: ${({theme:e})=>e.colors.white};
  fill: transparent;
`,T=({onClick:e,text:n})=>t.jsxs(Le,{onClick:e,children:[t.jsx(Ue,{children:n}),t.jsx(De,{children:t.jsx(Ie,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});T.propTypes={onClick:i.func.isRequired,text:i.string.isRequired};const qe=o.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.white};

  @media ${a} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Ae=o.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.black};

  @media ${a} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Pe=o.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.black};

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,B=({onClose:e})=>t.jsx(N,{onClose:e,children:t.jsxs(qe,{children:[t.jsx(Ae,{children:"Congrats!"}),t.jsx(Pe,{children:"Your registration is success"}),t.jsx(T,{onClick:e,text:"Go to profile"})]})});B.propTypes={onClose:i.func.isRequired};function Be(){const{isNewUser:e}=X(),[n,r]=s.useState(!0),c=D(),l=()=>{r(!1),c(ee())};return s.useEffect(()=>{},[e]),t.jsxs(ne,{children:[e&&n&&t.jsx("div",{children:t.jsx(B,{onClose:l})}),t.jsx(ue,{}),t.jsx(Ce,{})]})}export{Be as default};
