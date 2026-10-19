import{s,b as l,a as j,e as M,j as t,I as b,M as I,p as ne,q as ae,f as T,F as re,g as E,t as le,v as de,i as ce,h as N,n as pe,d as me,P as m,w as he,x as xe,y as ue,z as fe,u as ge,A as be}from"./index-ee3ce916.js";import{g as je,h as Y,i as ye,E as Ae}from"./forms-b2853f00.js";import{r as n,u as ve,L as ke}from"./react-ecc61561.js";import{l as H}from"./state-c18d5234.js";import{t as a,T as Se}from"./translations-5abde677.js";import{M as ze}from"./ModalConfirmDelete-fae27347.js";import{R as we,i as Re}from"./catImg-bc7fe17e.js";import{S as Be}from"./ScrollToTopButton-18e13f37.js";import"./Btn.styled-bc5f3f54.js";const Fe=s.section`
  background-color: ${e=>e.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${l} {
    padding: 62px 0;
  }

  @media ${j} {
    display: flex;
    gap: 32px;
  }
`,L="data:image/png;base64,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",Le=s.div``,Ue=s.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${l} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Ee=s.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,Me=s.div`
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
`,De=s.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,Ce=s(je)`
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

  @media ${j} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,k=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media ${l} {
    gap: 8px;
  }
  @media ${j} {
    gap: 0;
  }
`,S=s.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${l} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,z=s(Y)`
  width: 190px;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${l} {
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
`,Ie=s.button`
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

  @media ${l} {
    letter-spacing: 0.64px;
  }
`,$e=s.button`
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
`;s.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const Je=s.button`
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
`,Qe=async()=>(await M.get("/users")).data.user,Pe=e=>M.patch("/users",e),Ge=()=>{const e=H(),[o,x]=n.useState(null),[h,c]=n.useState(!1),[y,g]=n.useState(void 0),[w,D]=n.useState(""),[d,r]=n.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[p,A]=n.useState(null),[u,v]=n.useState(!1),[$,R]=n.useState(!0);n.useEffect(()=>{c(!0),Qe().then(i=>{x(i)}).catch(i=>console.log(i)).finally(()=>c(!1))},[]);const[q,J]=n.useState(!1),K=()=>{J(!0)},Q=()=>{J(!1)};n.useEffect(()=>{o&&(r({name:o.name||"",birthday:o.birthday||"",phone:o.phone||"",city:o.city||"",avatar:""}),D(o.email||""))},[o]),n.useEffect(()=>{if(!p){g(o==null?void 0:o.avatarURL);return}const i=URL.createObjectURL(p);return g(i),()=>URL.revokeObjectURL(i)},[p,o==null?void 0:o.avatarURL]);const Z=()=>{R(!1)},B=i=>{const{name:f,value:F}=i.target;r({...d,[f]:F})},X=()=>{r({...d,avatar:p}),v(!0),R(!0)},_=()=>{A(null),r(i=>({...i,avatar:""})),v(!0),R(!0)},ee=i=>{const f=i.target.files[0];f&&f.type.startsWith("image/")&&f.size<=re?A(f):(E("Your photo is large"),R(!0),g(o&&o.avatarURL))},te=async()=>{if(p&&!d.avatar){E("Press confirm or cancel your new photo");return}try{const{name:i,birthday:f,phone:F,city:P}=d;await le.validate({name:i,birthday:f,phone:F,city:P});const C=new FormData;Object.entries({name:i,birthday:f,phone:F,city:P}).forEach(([oe,ie])=>C.append(oe,ie)),d.avatar&&C.append("avatar",d.avatar),c(!0);const{data:G}=await Pe(C);x(G.user),e(de(G.user)),A(null),v(!1),ce("Changes saved successfully")}catch(i){v(!0),E(i.name==="ValidationError"?i.errors[0]:N(i))}finally{c(!1)}},se=()=>{v(!u)};return t.jsxs(Le,{children:[t.jsx(Ue,{children:a("user_myinfo_title")}),t.jsx(ye,{initialValues:d,onSubmit:te,children:t.jsxs(Ce,{children:[t.jsx(Je,{"aria-label":"Edit profile",type:"button",onClick:se,children:u?t.jsx(b,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):t.jsx(b,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),t.jsxs(Me,{children:[t.jsx(Ee,{children:(y||L)&&t.jsx("img",{src:y||L,onError:i=>{i.currentTarget.src.endsWith(L)||(i.currentTarget.src=L)},style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),u&&t.jsxs("label",{htmlFor:"avatar",style:{display:$?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:Z,children:[t.jsx(b,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),a("user_myinfo_editPhoto")]}),t.jsx(Y,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:ee}),t.jsx(Ae,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),u&&!$&&t.jsxs(De,{children:[t.jsx("button",{type:"button",onClick:X,children:t.jsx(b,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),a("other_confirm"),t.jsx("button",{type:"button",onClick:_,children:t.jsx(b,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),t.jsxs("div",{children:[t.jsxs(k,{children:[t.jsxs(S,{htmlFor:"name",children:[" ",a("other_name"),":"]}),t.jsx(z,{id:"name",name:"name",placeholder:"Anna",disabled:!u,value:d.name,onChange:B})]}),t.jsxs(k,{children:[t.jsxs(S,{htmlFor:"email",children:[a("other_mail"),":"]}),t.jsx(z,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:w})]}),t.jsxs(k,{children:[t.jsxs(S,{htmlFor:"birthday",children:[a("other_birthday"),":"]}),t.jsx(z,{type:"date",id:"birthday",name:"birthday",disabled:!u,value:d.birthday,onChange:B})]}),t.jsxs(k,{children:[t.jsxs(S,{htmlFor:"phone",children:[a("other_phone"),":"]}),t.jsx(z,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!u,value:d.phone,onChange:B})]}),t.jsxs(k,{children:[t.jsxs(S,{htmlFor:"city",children:[a("other_city"),":"]}),t.jsx(z,{id:"city",name:"city",placeholder:a("user_myinfo_formPlaceholder_city"),disabled:!u,value:d.city,onChange:B})]}),u?t.jsx(Ie,{disabled:h,type:"submit",children:a("user_myinfo_saveBtn")}):t.jsxs($e,{type:"button",onClick:K,children:[t.jsx(b,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx("p",{children:a("user_myinfo_logout")})]})]})]})}),q&&t.jsx(I,{onClose:Q,children:t.jsx(ne,{handleModal:Q,handleLogout:()=>e(ae())})}),h?t.jsx(T,{}):null]})},Te=()=>t.jsx(t.Fragment,{children:t.jsx(Ge,{})}),Ne=s.div`
  @media ${j} {
    width: 821px;
  }
`,Ye=s.div`
  display: flex;
  justify-content: space-between;

  @media ${pe} {
    align-items: baseline;
  }

  @media ${l} {
    align-items: flex-start;
  }
`,He=s.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${l} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Oe=s.ul``,Ve=s.button`
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
`,We=s.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${l} {
    max-width: 250px;
  }

  @media ${j} {
    max-width: 292px;
  }
`,qe=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,Ke=s.h1`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${l} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,Ze=s.div`
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${l} {
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
  ${me}
`,Xe=s.img`
  width: 100%;
  border-radius: 40px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${l} {
    width: 128px;
    height: 128px;
  }

  @media ${j} {
    width: 161px;
    height: 161px;
  }
`,_e=s.div`
  padding-top: 20px;
  padding-bottom: 40px;
`,U=s.p`
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

  @media ${l} {
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
`,et=s.button`
  display: block;
  position: absolute;
  /* top: 0; */
  right: 7%;
  cursor: pointer;

  @media ${l} {
    top: 8%;
    right: 2%;
  }

  transform: scale(1);
  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`,O=({item:e,deletePet:o})=>{const[x,h]=n.useState(!1);let c;e.birthday&&(c=e.birthday.split("-").reverse().join("."));const y=()=>{h(!0)},g=()=>{h(!1)};return t.jsxs(Ze,{children:[t.jsx(Xe,{src:e.photoURL,alt:e.name,loading:"lazy"}),t.jsxs(_e,{children:[t.jsx(et,{"aria-label":"Delete pet",onClick:y,children:t.jsx(b,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),t.jsxs(U,{children:[t.jsxs("b",{children:[a("other_name"),":"]})," ",e.name]}),t.jsxs(U,{children:[t.jsxs("b",{children:[a("user_mypets_petInfo_dateOfBirth"),":"]})," ",c]}),t.jsxs(U,{children:[t.jsxs("b",{children:[a("other_type"),":"]})," ",e.type]}),t.jsxs(U,{children:[t.jsxs("b",{children:[a("other_comments"),":"]})," ",e.comments]})]}),x&&t.jsx(I,{onClose:g,children:t.jsx(ze,{title:a("modal_deletePet_title"),name:e.name,handleModal:g,handleDelete:()=>o(e._id)})})]})};O.propTypes={item:m.shape({name:m.string.isRequired,birthday:m.string.isRequired,type:m.string.isRequired,comments:m.string.isRequired,photoURL:m.string.isRequired,_id:m.string.isRequired}).isRequired,deletePet:m.func.isRequired};const tt=()=>M.get("/pets"),st=e=>M.delete(`/pets/${e}`),ot=()=>{const[e,o]=n.useState([]),[x,h]=n.useState(!0),[c,y]=n.useState(!1),[g,w]=n.useState(0),D=ve();n.useEffect(()=>{let r=!0;return h(!0),y(!1),tt().then(({data:p})=>{r&&o(p.pets)}).catch(()=>{r&&y(!0)}).finally(()=>{r&&h(!1)}),()=>{r=!1}},[g]);const d=async r=>{try{await st(r),o(p=>p.filter(A=>A._id!==r))}catch(p){E(N(p))}};return t.jsxs(Ne,{children:[t.jsxs(Ye,{children:[t.jsxs(He,{children:[a("user_mypets_title"),":"]}),t.jsx(ke,{to:"/add-pet",state:{from:D},children:t.jsxs(Ve,{type:"button",children:[a("user_mypets_addBtn"),t.jsx(b,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),x&&t.jsx(T,{}),c&&t.jsx(we,{onRetry:()=>w(r=>r+1)}),t.jsx(Oe,{children:e.map(r=>t.jsx(O,{item:r,deletePet:d},r._id))}),e.length===0&&!x&&!c&&t.jsxs(qe,{children:[t.jsx(Ke,{children:t.jsxs(Se,{i18nKey:"user_mypets_petList",children:[t.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",t.jsx("br",{}),t.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]})}),t.jsx(We,{src:Re,alt:"Cat with tongue"})]}),t.jsx(Be,{})]})},it=()=>t.jsx(t.Fragment,{children:t.jsx(ot,{})}),V=({onClick:e,text:o})=>t.jsxs(he,{onClick:e,children:[t.jsx(xe,{children:o}),t.jsx(ue,{children:t.jsx(fe,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});V.propTypes={onClick:m.func.isRequired,text:m.string.isRequired};const nt=s.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${l} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,at=s.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${l} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,rt=s.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.text};

  @media ${l} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,W=({onClose:e})=>t.jsx(I,{onClose:e,children:t.jsxs(nt,{children:[t.jsx(at,{children:"Congrats!"}),t.jsx(rt,{children:"Your registration is success"}),t.jsx(V,{onClick:e,text:"Go to profile"})]})});W.propTypes={onClose:m.func.isRequired};function gt(){const{isNewUser:e}=ge(),[o,x]=n.useState(!0),h=H(),c=()=>{x(!1),h(be())};return n.useEffect(()=>{},[e]),t.jsxs(Fe,{children:[e&&o&&t.jsx("div",{children:t.jsx(W,{onClose:c})}),t.jsx(Te,{}),t.jsx(it,{})]})}export{gt as default};
