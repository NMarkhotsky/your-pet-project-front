import{s as o,b as a,a as g,f as y,B as D,k as T,r as n,j as t,t as i,I as f,M as A,v as te,w as se,x as oe,F as ne,e as R,y as ie,d as ae,p as re,P as m,c as le,L as ce,T as de,S as me,z as he,A as pe,D as xe,u as ue,E as fe}from"./index-582bd8a7.js";import{b as ge,c as q,d as be,E as je}from"./formik.esm-918e7f77.js";import{M as ye}from"./ModalConfirmDelete-ec5df9d4.js";import{i as $e,S as ve}from"./ScrollToTopButton-072d7553.js";const we=o.section`
  background-color: ${e=>e.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${a} {
    padding: 62px 0;
  }

  @media ${g} {
    display: flex;
    gap: 32px;
  }
`,Fe=o.div``,Se=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Ce=o.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,ze=o.div`
  text-align: center;
  margin-bottom: 26px;

  & svg {
    transform: scale(1);
    transition: ${({theme:e})=>e.transitionHover};
  }

  & svg:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`,_e=o.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,ke=o(ge)`
  background-color: ${e=>e.theme.colors.bgdColorAuth};
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

  @media ${g} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,w=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media ${a} {
    gap: 8px;
  }
  @media ${g} {
    gap: 0;
  }
`,F=o.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${a} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,S=o(q)`
  width: 190px;
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

  &:focus {
    outline: 1px solid ${e=>e.theme.colors.blue};
  }

  &:disabled {
    background-color: #ffffff;
  }

  &::placeholder {
    color: #dcdcdc;
  }
`,Le=o.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${e=>e.theme.colors.blue};
  color: ${e=>e.theme.colors.textBtn};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.56px;
  margin-left: auto;

  @media ${a} {
    letter-spacing: 0.64px;
  }
`,Ee=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  & > svg {
    transform: scale(1);
    transition: ${({theme:e})=>e.transitionHover};
  }

  & > svg:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`;o.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const Ie=o.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;

  & > svg {
    transform: scale(1);
    transition: ${({theme:e})=>e.transitionHover};
  }

  & > svg:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`;y.defaults.baseURL=D;const Re=async()=>{try{const e=await y.get("/users"),{user:s}=await e.data;return s}catch(e){console.log(e)}},Ae=async e=>{try{return await y.patch("/users",e)}catch(s){console.log(s)}},Me=()=>{const e=T(),[s,b]=n.useState(null),[h,c]=n.useState(!1),[x,r]=n.useState(void 0),[C,E]=n.useState(""),[d,I]=n.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[z,M]=n.useState(null),[p,$]=n.useState(!1),[B,_]=n.useState(!0);n.useEffect(()=>{c(!0),Re().then(l=>{b(l)}).catch(l=>console.log(l)).finally(()=>c(!1))},[]),n.useEffect(()=>{},[s]);const[V,P]=n.useState(!1),Y=()=>{P(!0)},U=()=>{P(!1)};n.useEffect(()=>{s&&(I({name:s&&s.name,birthday:s?s.birthday:"",phone:s?s.phone:"",city:s?s.city:"",avatar:d.avatar||"",avatarURL:s.avatarURL}),E(s&&s.email),r(z?x:s.avatarURL))},[z,x,s,d.avatar]);const G=()=>{_(!1)},k=l=>{const{name:u,value:v}=l.target;I({...d,[u]:v})},K=()=>{I({...d,avatar:z}),$(!0),_(!0)},W=()=>{M(null),$(!0),_(!0)},Z=l=>{const u=l.target.files[0];u&&u.size<=ne?(M(u),r(URL.createObjectURL(u))):(R("Your photo is large"),_(!0),r(s&&s.avatarURL))},J=async()=>{if(z&&!d.avatar){R("Press confirm or cancel your new photo");return}$(!1);try{const l=new FormData,u=Object.entries(d);let v={};u.forEach(j=>{j[1]&&(l.append(j[0],j[1]),v={...v,[j[0]]:j[1]})});const X={};l.forEach((j,ee)=>{X[ee]=j}),await ie.validate(v),c(!0),Ae(l),ae("Changes saved successfully")}catch(l){l.name==="ValidationError"&&($(!0),R(l.errors[0]))}finally{c(!1)}},Q=()=>{$(!p)};return t.jsxs(Fe,{children:[t.jsx(Se,{children:i("user_myinfo_title")}),t.jsx(be,{initialValues:d,onSubmit:J,children:t.jsxs(ke,{children:[t.jsx(Ie,{onClick:Q,children:p?t.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):t.jsx(f,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),t.jsxs(ze,{children:[t.jsx(Ce,{children:x&&t.jsx("img",{src:x,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),p&&t.jsxs("label",{htmlFor:"avatar",style:{display:B?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:G,children:[t.jsx(f,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),i("user_myinfo_editPhoto")]}),t.jsx(q,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:Z}),t.jsx(je,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),p&&!B&&t.jsxs(_e,{children:[t.jsx("button",{type:"button",onClick:K,children:t.jsx(f,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),i("other_confirm"),t.jsx("button",{type:"button",onClick:W,children:t.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),t.jsxs("div",{children:[t.jsxs(w,{children:[t.jsxs(F,{htmlFor:"name",children:[" ",i("other_name"),":"]}),t.jsx(S,{id:"name",name:"name",placeholder:"Anna",disabled:!p,value:d.name,onChange:k})]}),t.jsxs(w,{children:[t.jsxs(F,{htmlFor:"email",children:[i("other_mail"),":"]}),t.jsx(S,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:C})]}),t.jsxs(w,{children:[t.jsxs(F,{htmlFor:"birthday",children:[i("other_birthday"),":"]}),t.jsx(S,{type:"date",id:"birthday",name:"birthday",disabled:!p,value:d.birthday,onChange:k})]}),t.jsxs(w,{children:[t.jsxs(F,{htmlFor:"phone",children:[i("other_phone"),":"]}),t.jsx(S,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!p,value:d.phone,onChange:k})]}),t.jsxs(w,{children:[t.jsxs(F,{htmlFor:"city",children:[i("other_city"),":"]}),t.jsx(S,{id:"city",name:"city",placeholder:i("user_myinfo_formPlaceholder_city"),disabled:!p,value:d.city,onChange:k})]}),p?t.jsx(Le,{type:"submit",children:i("user_myinfo_saveBtn")}):t.jsxs(Ee,{onClick:Y,children:[t.jsx(f,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx("p",{children:i("user_myinfo_logout")})]})]})]})}),V&&t.jsx(A,{onClose:U,children:t.jsx(te,{handleModal:U,handleLogout:()=>e(se())})}),h?t.jsx(oe,{}):null]})},Be=()=>t.jsx(t.Fragment,{children:t.jsx(Me,{})}),Pe=o.div`
  @media ${g} {
    width: 821px;
  }
`,Ue=o.div`
  display: flex;
  justify-content: space-between;

  @media ${re} {
    align-items: baseline;
  }

  @media ${a} {
    align-items: flex-start;
  }
`,De=o.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Te=o.ul``,qe=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${e=>e.theme.colors.textBtn};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.64px;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: ${e=>e.theme.colors.blueDark};

    transition: ${({theme:e})=>e.transitionHover};
  }
`,Ne=o.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${a} {
    max-width: 250px;
  }

  @media ${g} {
    max-width: 292px;
  }
`,He=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,Oe=o.h1`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${a} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,Ve=o.div`
  background-color: ${e=>e.theme.colors.bgdColorAuth};
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

  @media ${g} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,Ye=o.img`
  width: 100%;
  border-radius: 40px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${a} {
    width: 128px;
    height: 128px;
  }

  @media ${g} {
    width: 161px;
    height: 161px;
  }
`,Ge=o.div`
  padding-top: 20px;
  padding-bottom: 40px;
`,L=o.p`
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  /* &:last-child {
    padding-bottom: 40px;
  }

  &:first-child {
    padding-top: 20px;
  } */

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${g} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,Ke=o.button`
  display: block;
  position: absolute;
  /* top: 0; */
  right: 7%;
  cursor: pointer;

  @media ${a} {
    top: 8%;
    right: 2%;
  }

  transform: scale(1);
  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`,N=({item:e,deletePet:s})=>{const[b,h]=n.useState(!1);let c;e.birthday&&(c=e.birthday.split("-").reverse().join("."));const x=()=>{h(!0)},r=()=>{h(!1)};return t.jsxs(Ve,{children:[t.jsx(Ye,{src:e.photoURL}),t.jsxs(Ge,{children:[t.jsx(Ke,{onClick:x,children:t.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),t.jsxs(L,{children:[t.jsxs("b",{children:[i("other_name"),":"]})," ",e.name]}),t.jsxs(L,{children:[t.jsxs("b",{children:[i("user_mypets_petInfo_dateOfBirth"),":"]})," ",c]}),t.jsxs(L,{children:[t.jsxs("b",{children:[i("other_type"),":"]})," ",e.type]}),t.jsxs(L,{children:[t.jsxs("b",{children:[i("other_comments"),":"]})," ",e.comments]})]}),b&&t.jsx(A,{onClose:r,children:t.jsx(ye,{title:i("modal_deletePet_title"),name:e.name,handleModal:r,handleDelete:()=>s(e._id)})})]})};N.propTypes={item:m.shape({name:m.string.isRequired,birthday:m.string.isRequired,type:m.string.isRequired,comments:m.string.isRequired,photoURL:m.string.isRequired,_id:m.string.isRequired}).isRequired,deletePet:m.func.isRequired};y.defaults.baseURL=D;const We=async()=>{try{return await y.get("/pets")}catch(e){console.log(e)}},Ze=async e=>{try{return await y.delete(`/pets/${e}`)}catch(s){console.log(s)}},Je=()=>{const[e,s]=n.useState([]),[b,h]=n.useState(!1),c=le();n.useEffect(()=>{We().then(({data:r})=>{h(!0),s(r.pets)}).catch(r=>{h(!0),console.log(r)}).finally(()=>{h(!1)})},[]),n.useEffect(()=>{e.length},[e]);const x=async r=>{await Ze(r),s(C=>C.filter(E=>E._id!==r))};return t.jsxs(Pe,{children:[t.jsxs(Ue,{children:[t.jsxs(De,{children:[i("user_mypets_title"),":"]}),t.jsx(ce,{to:"/add-pet",state:{from:c},children:t.jsxs(qe,{type:"button",children:[i("user_mypets_addBtn"),t.jsx(f,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),t.jsx(Te,{children:e.map(r=>t.jsx(N,{item:r,deletePet:x},r._id))}),e.length===0&&!b&&t.jsxs(He,{children:[t.jsx(Oe,{children:t.jsxs(de,{i18nKey:"user_mypets_petList",children:[t.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",t.jsx("br",{}),t.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]})}),t.jsx(Ne,{src:$e,alt:"Cat with tongue"})]}),t.jsx(ve,{})]})},Qe=()=>t.jsx(t.Fragment,{children:t.jsx(Je,{})}),H=({onClick:e,text:s})=>t.jsxs(me,{onClick:e,children:[t.jsx(he,{children:s}),t.jsx(pe,{children:t.jsx(xe,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});H.propTypes={onClick:m.func.isRequired,text:m.string.isRequired};const Xe=o.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${a} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,et=o.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${a} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,tt=o.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.text};

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,O=({onClose:e})=>t.jsx(A,{onClose:e,children:t.jsxs(Xe,{children:[t.jsx(et,{children:"Congrats!"}),t.jsx(tt,{children:"Your registration is success"}),t.jsx(H,{onClick:e,text:"Go to profile"})]})});O.propTypes={onClose:m.func.isRequired};function at(){const{isNewUser:e}=ue(),[s,b]=n.useState(!0),h=T(),c=()=>{b(!1),h(fe())};return n.useEffect(()=>{},[e]),t.jsxs(we,{children:[e&&s&&t.jsx("div",{children:t.jsx(O,{onClose:c})}),t.jsx(Be,{}),t.jsx(Qe,{})]})}export{at as default};
