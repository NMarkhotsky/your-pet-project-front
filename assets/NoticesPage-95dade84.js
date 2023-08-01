import{s,b as g,a as A,L as I,P as M,u as R,c as q,j as t,r as d,I as f,t as U,C as J,d as K}from"./index-ab34d60e.js";import{A as Q,g as X,a as Y,b as Z,N as ee,d as te}from"./NoticesCategoriesList-a3e9e4a0.js";import{s as oe,S as ne,P as se}from"./scrollToTop-d4e17543.js";import{T as ae}from"./TitlePage-dfd80fdb.js";import"./Btn.styled-26cea601.js";import"./ModalConfirmDelete-780f5fee.js";let $=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,c)=>(c&=63,c<36?l+=c.toString(36):c<62?l+=(c-26).toString(36).toUpperCase():c>62?l+="-":l+="_",l),"");const ie=[{id:$(),to:"/notices/sell",text:"sell",name:"sell"},{id:$(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:$(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],re=[{id:$(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:$(),to:"/notices/own",text:"my ads",name:"my-ads"}],le=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

    @media ${g} {
    gap: 12px;
  }

  @media ${A} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,T=s.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${g} {
    gap: 12px;
  }
`,D=s(I)`
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
`,G=({getCategoryParams:e})=>{const{isLoggedIn:l}=R(),{search:c}=q();return t.jsxs(le,{children:[t.jsx(T,{children:ie.map(({to:x,text:i,id:p,name:u})=>t.jsx("li",{children:t.jsx(D,{to:{pathname:x,search:c},onClick:()=>e(u),children:i})},p))}),l&&t.jsx(T,{children:re.map(({to:x,text:i,id:p,name:u})=>t.jsx("li",{children:t.jsx(D,{to:{pathname:x,search:c},onClick:()=>e(u),children:i})},p))})]})};G.propTypes={getCategoryParams:M.func.isRequired};const ce=s.div`
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
`,B=s.div`
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
`,j=s.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,v=s.input`
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
`,W=({getFilterParams:e})=>{const[l,c]=d.useState(!1),[x,i]=d.useState(!1),[p,u]=d.useState(!1),[a,k]=d.useState([]),[w,h]=d.useState(!1),{user:b}=R(),y=()=>{b.name===null&&b.email===null&&h(!0)},C=()=>{h(!1)};d.useEffect(()=>{const n={younger:!1,middle:!1,older:!1,sex:null};a.includes("0-12 m")?n.young=!0:n.young=!1,a.includes("1 year")?n.middle=!0:n.middle=!1,a.includes("2 years +")?n.older=!0:n.older=!1,a.includes("male")&&a.includes("female")?n.sex=null:a.includes("male")?n.sex="male":a.includes("female")?n.sex="female":n.sex=null,Object.keys(n).forEach(o=>{(n[o]===!1||n[o]===null)&&delete n[o]}),e(n)},[a]);const F=()=>{c(n=>!n)},S=()=>{i(n=>!n)},N=()=>{u(n=>!n)},m=n=>{a.includes(n.target.value)?k(o=>o.filter(r=>r!==n.target.value)):k(o=>[...o,n.target.value])};return t.jsxs(ce,{children:[t.jsxs(de,{children:[t.jsxs(pe,{onClick:F,type:"button","aria-label":"toggle filters",children:[t.jsx(xe,{children:"Filter"}),t.jsx(ge,{children:t.jsx(f,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(ue,{children:t.jsxs("div",{children:[t.jsx(me,{children:"Filters"}),t.jsxs(B,{children:[t.jsxs(E,{type:"button",onClick:S,"aria-label":"toggle age options",children:[x?t.jsx(f,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(f,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(O,{children:"By age"})]}),x&&t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(v,{onChange:m,type:"checkbox",name:"age",value:"0-12 m",checked:a.includes("0-12 m")}),"0-12 m"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:m,type:"checkbox",name:"age",value:"1 year",checked:a.includes("1 year")}),"1 year"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:m,type:"checkbox",name:"age",value:"2 years +",checked:a.includes("2 years +")}),"2 year +"]})]})]}),t.jsxs(B,{children:[t.jsxs(E,{type:"button",onClick:N,"aria-label":"toggle gender options",children:[p?t.jsx(f,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(f,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(O,{children:"By gender"})]}),p&&t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(v,{onChange:m,type:"checkbox",name:"gender",value:"male",checked:a.includes("male")}),"male"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:m,type:"checkbox",name:"gender",value:"female",checked:a.includes("female")}),"female"]})]})]})]})})]}),t.jsx(I,{to:b.email!==null&&"/add-pet",onClick:y,children:t.jsxs(he,{type:"button",children:[t.jsx(fe,{children:U("user_mypets_addBtn")}),t.jsx(f,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),w&&t.jsx(Q,{onClose:C})]})};W.propTypes={getFilterParams:M.func.isRequired};const be=s.section`
padding-bottom: 117px;

  @media ${g} {
    padding-bottom: 209px;
  }

  @media ${A} {
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

  @media ${A} {
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
`;function Se(){const[e,l]=d.useState([]),[c,x]=d.useState(""),[i,p]=d.useState({category:"sell",page:1,search:""}),[u,a]=d.useState(0),[k,w]=d.useState(!1),h=12,b=async o=>{await te(o),l(r=>r.filter(z=>z.id!==o))};d.useEffect(()=>{(async()=>{try{if(w(!0),!i.category||i.category==="sell"||i.category==="in-good-hands"||i.category==="lost-or-found"){const o=await X(i);return a(Math.ceil(o.total/h)),l(y(o))}if(i.category==="my-ads"){const o=await Y(i);return a(Math.ceil(o.total/h)),l(y(o))}if(i.category==="favorite"){const o=await Z(i);return a(Math.ceil(o.total/h)),l(y(o))}}catch(o){console.log(o)}finally{w(!1)}})()},[i]);const y=o=>o.data.map(r=>({...r,noticeType:J[r.noticeType]||r.noticeType})),C=o=>{o.preventDefault(),p(r=>({...r,search:c,page:1}))},F=()=>{x(""),p(o=>({...o,search:"",page:1}))},S=o=>{x(o)},N=o=>{p(r=>({...r,category:o}))},m=o=>{p(r=>{const{category:z,page:_,search:V}=r,L={};return Object.keys(o).forEach(P=>{L[P]=o[P]}),{category:z,page:_,search:V,...L}})},n=d.useCallback(o=>{p(r=>({...r,page:o.selected+1})),oe()},[]);return t.jsxs(be,{children:[t.jsx(ye,{children:t.jsx(ae,{children:"Find your favorite pet"})}),t.jsx(ne,{onSubmit:C,onChange:S,onDelete:F,value:c}),t.jsxs(je,{children:[t.jsx(G,{getCategoryParams:N}),t.jsx(W,{getFilterParams:m})]}),t.jsx(ee,{notices:e,pageCount:u,handlePageChange:n,handleDeleteNotice:b}),t.jsx(se,{pageCount:u,handlePageChange:n}),k?t.jsx(K,{}):null]})}export{Se as default};
