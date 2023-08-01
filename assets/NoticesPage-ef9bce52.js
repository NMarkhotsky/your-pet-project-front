import{s as n,b as f,L as O,P as H,u as I,c as _,j as t,r as c,I as m,t as V,C as q,d as U}from"./index-ce3f9b10.js";import{A as J,g as K,a as Q,b as X,N as Y}from"./NoticesCategoriesList-9d42b364.js";import{S as Z,P as ee}from"./Pagination-d4702fe9.js";import{T as te}from"./TitlePage-204193bb.js";import"./Btn.styled-83a0cbef.js";import"./ModalConfirmDelete-4de9b473.js";let v=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,r)=>(r&=63,r<36?l+=r.toString(36):r<62?l+=(r-26).toString(36).toUpperCase():r>62?l+="-":l+="_",l),"");const oe=[{id:v(),to:"/notices/sell",text:"sell",name:"sell"},{id:v(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:v(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],ne=[{id:v(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:v(),to:"/notices/own",text:"my ads",name:"my-ads"}],se=n.div`
  display: flex;
  gap: 12px;
`,L=n.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${f} {
    gap: 12px;
  }
`,P=n(O)`
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
`,M=({getCategoryParams:e})=>{const{isLoggedIn:l}=I(),{search:r}=_();return t.jsxs(se,{children:[t.jsx(L,{children:oe.map(({to:p,text:i,id:d,name:u})=>t.jsx("li",{children:t.jsx(P,{to:{pathname:p,search:r},onClick:()=>e(u),children:i})},d))}),l&&t.jsx(L,{children:ne.map(({to:p,text:i,id:d,name:u})=>t.jsx("li",{children:t.jsx(P,{to:{pathname:p,search:r},onClick:()=>e(u),children:i})},d))})]})};M.propTypes={getCategoryParams:H.func.isRequired};const ae=n.div`
  display: flex;
  gap: 12px;
`,ie=n.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${f} {
    position: static;
  }
`,re=n.button`
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

  @media ${f} {
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
`,le=n.div`
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
`,ce=n.span`
  display: none;

  @media ${f} {
    display: block;
  }
`;n.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const de=n.div`
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
  @media ${f} {
    margin-top: 20px;
  }
`,pe=n.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,E=n.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};

  /* &:hover,
  &:focus {
    background-color: #aed1f3;

    & button {
      background-color: #aed1f3;
    }
  } */
`,T=n.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,B=n.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,D=n.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,b=n.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,y=n.input`
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
`,ue=n.button`
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
`,R=({getFilterParams:e})=>{const[l,r]=c.useState(!1),[p,i]=c.useState(!1),[d,u]=c.useState(!1),[a,j]=c.useState([]),[$,x]=c.useState(!1),{user:h}=I(),k=()=>{h.name===null&&h.email===null&&x(!0)},C=()=>{x(!1)};c.useEffect(()=>{const o={younger:!1,middle:!1,older:!1,sex:null};a.includes("0-12 m")?o.young=!0:o.young=!1,a.includes("1 year")?o.middle=!0:o.middle=!1,a.includes("2 years +")?o.older=!0:o.older=!1,a.includes("male")&&a.includes("female")?o.sex=null:a.includes("male")?o.sex="male":a.includes("female")?o.sex="female":o.sex=null,Object.keys(o).forEach(s=>{(o[s]===!1||o[s]===null)&&delete o[s]}),e(o)},[a]);const w=()=>{r(o=>!o)},F=()=>{i(o=>!o)},S=()=>{u(o=>!o)},g=o=>{a.includes(o.target.value)?j(s=>s.filter(N=>N!==o.target.value)):j(s=>[...s,o.target.value])};return t.jsxs(ae,{children:[t.jsxs(ie,{children:[t.jsxs(re,{onClick:w,type:"button","aria-label":"toggle filters",children:[t.jsx(ce,{children:"Filter"}),t.jsx(le,{children:t.jsx(m,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(de,{children:t.jsxs("div",{children:[t.jsx(pe,{children:"Filters"}),t.jsxs(E,{children:[t.jsxs(T,{type:"button",onClick:F,"aria-label":"toggle age options",children:[p?t.jsx(m,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(m,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(B,{children:"By age"})]}),p&&t.jsxs(D,{children:[t.jsxs(b,{children:[t.jsx(y,{onChange:g,type:"checkbox",name:"age",value:"0-12 m",checked:a.includes("0-12 m")}),"0-12 m"]}),t.jsxs(b,{children:[t.jsx(y,{onChange:g,type:"checkbox",name:"age",value:"1 year",checked:a.includes("1 year")}),"1 year"]}),t.jsxs(b,{children:[t.jsx(y,{onChange:g,type:"checkbox",name:"age",value:"2 years +",checked:a.includes("2 years +")}),"2 year +"]})]})]}),t.jsxs(E,{children:[t.jsxs(T,{type:"button",onClick:S,"aria-label":"toggle gender options",children:[d?t.jsx(m,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(m,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(B,{children:"By gender"})]}),d&&t.jsxs(D,{children:[t.jsxs(b,{children:[t.jsx(y,{onChange:g,type:"checkbox",name:"gender",value:"male",checked:a.includes("male")}),"male"]}),t.jsxs(b,{children:[t.jsx(y,{onChange:g,type:"checkbox",name:"gender",value:"female",checked:a.includes("female")}),"female"]})]})]})]})})]}),t.jsx(O,{to:h.email!==null&&"/add-pet",onClick:k,children:t.jsxs(ue,{type:"button",children:[V("user_mypets_addBtn"),t.jsx(m,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),$&&t.jsx("div",{children:t.jsx(J,{onClose:C})})]})};R.propTypes={getFilterParams:H.func.isRequired};const ge=n.section`
padding-bottom: 112px;
`,he=n.div`
margin-bottom: 40px;
`,xe=n.div`
  display: flex;
  justify-content: space-between;
  margin: 43px 0;
`;n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  margin-top: 20px;
  position: relative;

  @media ${f} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;function $e(){const[e,l]=c.useState([]),[r,p]=c.useState(""),[i,d]=c.useState({category:"sell",page:1,search:""}),[u,a]=c.useState(0),[j,$]=c.useState(!1),x=12;c.useEffect(()=>{(async()=>{try{if($(!0),!i.category||i.category==="sell"||i.category==="in-good-hands"||i.category==="lost-or-found"){const o=await K(i);return a(Math.ceil(o.total/x)),l(h(o))}if(i.category==="my-ads"){const o=await Q(i);return a(Math.ceil(o.total/x)),l(h(o))}if(i.category==="favorite"){const o=await X(i);return a(Math.ceil(o.total/x)),l(h(o))}}catch(o){console.log(o)}finally{$(!1)}})()},[i]);const h=o=>o.data.map(s=>({...s,noticeType:q[s.noticeType]||s.noticeType})),k=o=>{o.preventDefault(),d(s=>({...s,search:r,page:1}))},C=()=>{p(""),d(o=>({...o,search:"",page:1}))},w=o=>{p(o)},F=o=>{d(s=>({...s,category:o}))},S=o=>{d(s=>{const{category:N,page:G,search:W}=s,z={};return Object.keys(o).forEach(A=>{z[A]=o[A]}),{category:N,page:G,search:W,...z}})},g=c.useCallback(o=>{d(s=>({...s,page:o.selected+1}))},[]);return t.jsxs(ge,{children:[t.jsx(he,{children:t.jsx(te,{children:"Find your favorite pet"})}),t.jsx(Z,{onSubmit:k,onChange:w,onDelete:C,value:r}),t.jsxs(xe,{children:[t.jsx(M,{getCategoryParams:F}),t.jsx(R,{getFilterParams:S})]}),t.jsx(Y,{notices:e,pageCount:u,handlePageChange:g}),t.jsx(ee,{pageCount:u,handlePageChange:g}),j?t.jsx(U,{}):null]})}export{$e as default};
