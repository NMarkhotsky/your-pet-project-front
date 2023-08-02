import{s,b as g,a as B,L as I,P as M,u as R,c as U,j as t,r as d,t as x,I as b,C as J,d as K}from"./index-1310b7f4.js";import{A as Q,g as X,a as Y,b as Z,N as ee,d as te}from"./NoticesCategoriesList-a2101122.js";import{s as oe,S as ne,P as se}from"./scrollToTop-8a7058d2.js";import{T as ie}from"./TitlePage-e52723e1.js";import"./Btn.styled-6611d13b.js";import"./ModalConfirmDelete-3ca2f048.js";let k=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,c)=>(c&=63,c<36?l+=c.toString(36):c<62?l+=(c-26).toString(36).toUpperCase():c>62?l+="-":l+="_",l),"");const ae=[{id:k(),to:"/notices/sell",text:"sell",name:"sell"},{id:k(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:k(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],re=[{id:k(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:k(),to:"/notices/own",text:"my ads",name:"my-ads"}],le=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

    @media ${g} {
    gap: 12px;
  }

  @media ${B} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,P=s.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${g} {
    gap: 12px;
  }
`,T=s(I)`
  display: flex;
  border: none;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;

  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  letter-spacing: 0.56px;

  background-color: ${e=>e.theme.colors.blueLight};
  color: ${e=>e.theme.colors.blue};

  transition: all ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.white};
    background-color: ${({theme:e})=>e.colors.blue};
  }
`,G=({getCategoryParams:e})=>{const{isLoggedIn:l}=R(),{search:c}=U();return t.jsxs(le,{children:[t.jsx(P,{children:ae.map(({to:u,text:a,id:p,name:m})=>t.jsx("li",{children:t.jsx(T,{to:{pathname:u,search:c},onClick:()=>e(m),children:a})},p))}),l&&t.jsx(P,{children:re.map(({to:u,text:a,id:p,name:m})=>t.jsx("li",{children:t.jsx(T,{to:{pathname:u,search:c},onClick:()=>e(m),children:a})},p))})]})};G.propTypes={getCategoryParams:M.func.isRequired};const ce=s.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${g}{
    flex-direction: row;
    gap: 12px;
    
  }
`,de=s.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${g} {
    position: static;
  }
`,pe=s.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme:e})=>e.colors.blueLight};
  color: ${({theme:e})=>e.colors.blue};

  transition: color var(--timing), background-color var(--timing);

  & svg use {
    stroke: ${e=>e.theme.colors.bgdColor};
    transition: fill ${({theme:e})=>e.transitionHover};
  }

  &:hover svg use {
    stroke: ${e=>e.theme.colors.white};
    transition: stroke ${({theme:e})=>e.transitionHover};
  }

  &:hover,
  &:focus svg use {
    stroke: ${e=>e.theme.colors.white};
    transition: fill ${({theme:e})=>e.transitionHover};
  }

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.white};
    border: none;
    background-color: transparent;

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: ${({theme:e})=>e.colors.blueGradient};
    opacity: 0;

    transition: opacity ${({theme:e})=>e.transitionHover};
  }

  @media ${g} {
    position: relative;
    padding: 9px;
    width: 152px;
    border: 2px solid ${({theme:e})=>e.colors.blue};
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: transparent;

    font-family: ${e=>e.theme.fonts.main.bold};
    font-size: ${e=>e.theme.fontSizes.md};
    letter-spacing: 0.64px;
  }
`,ge=s.div`
  position: relative;
  z-index: 5;

  & svg use {
    stroke: ${e=>e.theme.colors.blue};
  }
  &:hover svg use,
  &:focus svg use {
    stroke: ${e=>e.theme.colors.white};
    transition: stroke ${({theme:e})=>e.transitionHover};
  }
`,xe=s.span`
  display: none;

  @media ${g} {
    display: block;
  }
`;s.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const ue=s.div`
  position: absolute;
  margin-top: 50px;
  padding: 8px;
  border-radius: 20px;

  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.boxShadow.secondary};

  @media screen and (max-width: 767px) {
    right: 0;
    top: 0;
  }
  @media ${g} {
    margin-top: 20px;
  }
`,me=s.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,D=s.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,E=s.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,O=s.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,H=s.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,v=s.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,$=s.input`
  width: 16px;
  height: 16px;
  margin: 0;

  display: grid;
  place-content: center;

  line-height: 0;

  border-radius: 4px;
  border: 2px solid ${({theme:e})=>e.colors.blue};

  appearance: none;

  &::before {
    content: '';
    width: 0.85em;
    height: 0.85em;
    transform: scale(0);

    box-shadow: inset 1em 1em ${({theme:e})=>e.colors.blue};

    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked {
    &::before {
      transform: scale(1);
    }

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`,he=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.blue};
  border: none;
  border-radius: 40px;
  color: ${e=>e.theme.colors.textBtn};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.64px;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: ${e=>e.theme.colors.blueDark};

    transition: ${({theme:e})=>e.transitionHover};
  }

  @media screen and (max-width: 767px) {
      width: 40px;
      height: 40px;
  }
  @media ${g} {
    padding: 8px 20px;
  }
`,fe=s.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,W=({getFilterParams:e})=>{const[l,c]=d.useState(!1),[u,a]=d.useState(!1),[p,m]=d.useState(!1),[i,w]=d.useState([]),[C,f]=d.useState(!1),{user:y}=R(),j=()=>{y.name===null&&y.email===null&&f(!0)},_=()=>{f(!1)};d.useEffect(()=>{const n={younger:!1,middle:!1,older:!1,sex:null};i.includes("0-12 m")?n.young=!0:n.young=!1,i.includes("1 year")?n.middle=!0:n.middle=!1,i.includes("2 years +")?n.older=!0:n.older=!1,i.includes("male")&&i.includes("female")?n.sex=null:i.includes("male")?n.sex="male":i.includes("female")?n.sex="female":n.sex=null,Object.keys(n).forEach(o=>{(n[o]===!1||n[o]===null)&&delete n[o]}),e(n)},[i]);const S=()=>{c(n=>!n)},F=()=>{a(n=>!n)},N=()=>{m(n=>!n)},h=n=>{i.includes(n.target.value)?w(o=>o.filter(r=>r!==n.target.value)):w(o=>[...o,n.target.value])};return t.jsxs(ce,{children:[t.jsxs(de,{children:[t.jsxs(pe,{onClick:S,type:"button","aria-label":"toggle filters",children:[t.jsx(xe,{children:x("notices_filterBnt")}),t.jsx(ge,{children:t.jsx(b,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(ue,{children:t.jsxs("div",{children:[t.jsx(me,{children:x("notices_filterBnt_filters")}),t.jsxs(D,{children:[t.jsxs(E,{type:"button",onClick:F,"aria-label":"toggle age options",children:[u?t.jsx(b,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(b,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(O,{children:x("notices_filterBnt_filters_byAge")})]}),u&&t.jsxs(H,{children:[t.jsxs(v,{children:[t.jsx($,{onChange:h,type:"checkbox",name:"age",value:"0-12 m",checked:i.includes("0-12 m")}),x("notices_filterBnt_filters_byAge_lt1")]}),t.jsxs(v,{children:[t.jsx($,{onChange:h,type:"checkbox",name:"age",value:"1 year",checked:i.includes("1 year")}),x("notices_filterBnt_filters_byAge_gt1")]}),t.jsxs(v,{children:[t.jsx($,{onChange:h,type:"checkbox",name:"age",value:"2 years +",checked:i.includes("2 years +")}),x("notices_filterBnt_filters_byAge_gt2")]})]})]}),t.jsxs(D,{children:[t.jsxs(E,{type:"button",onClick:N,"aria-label":"toggle gender options",children:[p?t.jsx(b,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(b,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(O,{children:x("notices_filterBnt_filters_byGender")})]}),p&&t.jsxs(H,{children:[t.jsxs(v,{children:[t.jsx($,{onChange:h,type:"checkbox",name:"gender",value:"male",checked:i.includes("male")}),x("notices_filterBnt_filters_male")]}),t.jsxs(v,{children:[t.jsx($,{onChange:h,type:"checkbox",name:"gender",value:"female",checked:i.includes("female")}),x("notices_filterBnt_filters_female")]})]})]})]})})]}),t.jsx(I,{to:y.email!==null&&"/add-pet",onClick:j,children:t.jsxs(he,{type:"button",children:[t.jsx(fe,{children:x("user_mypets_addBtn")}),t.jsx(b,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),C&&t.jsx(Q,{onClose:_})]})};W.propTypes={getFilterParams:M.func.isRequired};const be=s.section`
padding-bottom: 117px;

  @media ${g} {
    padding-bottom: 209px;
  }

  @media ${B} {
    padding-bottom: 112px;
  }
`,ye=s.div`
margin-bottom: 24px;

  @media ${g} {
    margin-bottom: 40px;
  }
`,je=s.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  margin: 24px 0;

  @media ${g} {
    margin: 43px 0;
  }

  @media ${B} {
      /* flex-wrap: nowrap; */

  }
`;s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  margin-top: 20px;
  position: relative;

  @media ${g} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;function Se(){const[e,l]=d.useState([]),[c,u]=d.useState(""),[a,p]=d.useState({category:"sell",page:1,search:""}),[m,i]=d.useState(0),[w,C]=d.useState(!1),f=12,y=async o=>{await te(o),l(r=>r.filter(A=>A.id!==o))};d.useEffect(()=>{(async()=>{try{if(C(!0),!a.category||a.category==="sell"||a.category==="in-good-hands"||a.category==="lost-or-found"){const o=await X(a);return i(Math.ceil(o.total/f)),l(j(o))}if(a.category==="my-ads"){const o=await Y(a);return i(Math.ceil(o.total/f)),l(j(o))}if(a.category==="favorite"){const o=await Z(a);return i(Math.ceil(o.total/f)),l(j(o))}}catch(o){console.log(o)}finally{C(!1)}})()},[a]);const j=o=>o.data.map(r=>({...r,noticeType:J[r.noticeType]||r.noticeType})),_=o=>{o.preventDefault(),p(r=>({...r,search:c,page:1}))},S=()=>{u(""),p(o=>({...o,search:"",page:1}))},F=o=>{u(o)},N=o=>{p(r=>({...r,category:o}))},h=o=>{p(r=>{const{category:A,page:V,search:q}=r,z={};return Object.keys(o).forEach(L=>{z[L]=o[L]}),{category:A,page:V,search:q,...z}})},n=d.useCallback(o=>{p(r=>({...r,page:o.selected+1})),oe()},[]);return t.jsxs(be,{children:[t.jsx(ye,{children:t.jsx(ie,{children:x("notices_title")})}),t.jsx(ne,{onSubmit:_,onChange:F,onDelete:S,value:c}),t.jsxs(je,{children:[t.jsx(G,{getCategoryParams:N}),t.jsx(W,{getFilterParams:h})]}),t.jsx(ee,{notices:e,pageCount:m,handlePageChange:n,handleDeleteNotice:y}),t.jsx(se,{pageCount:m,handlePageChange:n}),w?t.jsx(K,{}):null]})}export{Se as default};
