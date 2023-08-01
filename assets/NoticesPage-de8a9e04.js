import{s as n,b as p,a as z,L as H,P as I,u as M,c as V,j as t,r as c,I as f,t as q,C as U,d as J}from"./index-0b669ee9.js";import{A as K,g as Q,a as X,b as Y,N as Z}from"./NoticesCategoriesList-d27fbc58.js";import{S as ee,P as te}from"./Pagination-e14fb269.js";import{T as oe}from"./TitlePage-07625fb2.js";import"./Btn.styled-de333121.js";import"./ModalConfirmDelete-7f3e3a9b.js";let j=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,r)=>(r&=63,r<36?l+=r.toString(36):r<62?l+=(r-26).toString(36).toUpperCase():r>62?l+="-":l+="_",l),"");const ne=[{id:j(),to:"/notices/sell",text:"sell",name:"sell"},{id:j(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:j(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],se=[{id:j(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:j(),to:"/notices/own",text:"my ads",name:"my-ads"}],ae=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

    @media ${p} {
    gap: 12px;
  }

  @media ${z} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,P=n.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${p} {
    gap: 12px;
  }
`,B=n(H)`
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
`,R=({getCategoryParams:e})=>{const{isLoggedIn:l}=M(),{search:r}=V();return t.jsxs(ae,{children:[t.jsx(P,{children:ne.map(({to:g,text:i,id:d,name:x})=>t.jsx("li",{children:t.jsx(B,{to:{pathname:g,search:r},onClick:()=>e(x),children:i})},d))}),l&&t.jsx(P,{children:se.map(({to:g,text:i,id:d,name:x})=>t.jsx("li",{children:t.jsx(B,{to:{pathname:g,search:r},onClick:()=>e(x),children:i})},d))})]})};R.propTypes={getCategoryParams:I.func.isRequired};const ie=n.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${p}{
    flex-direction: row;
    gap: 12px;
    
  }
`,re=n.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${p} {
    position: static;
  }
`,le=n.button`
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

  @media ${p} {
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
`,ce=n.div`
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
`,de=n.span`
  display: none;

  @media ${p} {
    display: block;
  }
`;n.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const pe=n.div`
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
  @media ${p} {
    margin-top: 20px;
  }
`,ge=n.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,D=n.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,E=n.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,T=n.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,O=n.form`
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
`,xe=n.button`
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
  @media ${p} {
    padding: 8px 20px;
  }
`,ue=n.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,G=({getFilterParams:e})=>{const[l,r]=c.useState(!1),[g,i]=c.useState(!1),[d,x]=c.useState(!1),[a,v]=c.useState([]),[$,h]=c.useState(!1),{user:m}=M(),k=()=>{m.name===null&&m.email===null&&h(!0)},w=()=>{h(!1)};c.useEffect(()=>{const o={younger:!1,middle:!1,older:!1,sex:null};a.includes("0-12 m")?o.young=!0:o.young=!1,a.includes("1 year")?o.middle=!0:o.middle=!1,a.includes("2 years +")?o.older=!0:o.older=!1,a.includes("male")&&a.includes("female")?o.sex=null:a.includes("male")?o.sex="male":a.includes("female")?o.sex="female":o.sex=null,Object.keys(o).forEach(s=>{(o[s]===!1||o[s]===null)&&delete o[s]}),e(o)},[a]);const C=()=>{r(o=>!o)},F=()=>{i(o=>!o)},S=()=>{x(o=>!o)},u=o=>{a.includes(o.target.value)?v(s=>s.filter(N=>N!==o.target.value)):v(s=>[...s,o.target.value])};return t.jsxs(ie,{children:[t.jsxs(re,{children:[t.jsxs(le,{onClick:C,type:"button","aria-label":"toggle filters",children:[t.jsx(de,{children:"Filter"}),t.jsx(ce,{children:t.jsx(f,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(pe,{children:t.jsxs("div",{children:[t.jsx(ge,{children:"Filters"}),t.jsxs(D,{children:[t.jsxs(E,{type:"button",onClick:F,"aria-label":"toggle age options",children:[g?t.jsx(f,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(f,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(T,{children:"By age"})]}),g&&t.jsxs(O,{children:[t.jsxs(b,{children:[t.jsx(y,{onChange:u,type:"checkbox",name:"age",value:"0-12 m",checked:a.includes("0-12 m")}),"0-12 m"]}),t.jsxs(b,{children:[t.jsx(y,{onChange:u,type:"checkbox",name:"age",value:"1 year",checked:a.includes("1 year")}),"1 year"]}),t.jsxs(b,{children:[t.jsx(y,{onChange:u,type:"checkbox",name:"age",value:"2 years +",checked:a.includes("2 years +")}),"2 year +"]})]})]}),t.jsxs(D,{children:[t.jsxs(E,{type:"button",onClick:S,"aria-label":"toggle gender options",children:[d?t.jsx(f,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(f,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(T,{children:"By gender"})]}),d&&t.jsxs(O,{children:[t.jsxs(b,{children:[t.jsx(y,{onChange:u,type:"checkbox",name:"gender",value:"male",checked:a.includes("male")}),"male"]}),t.jsxs(b,{children:[t.jsx(y,{onChange:u,type:"checkbox",name:"gender",value:"female",checked:a.includes("female")}),"female"]})]})]})]})})]}),t.jsx(H,{to:m.email!==null&&"/add-pet",onClick:k,children:t.jsxs(xe,{type:"button",children:[t.jsx(ue,{children:q("user_mypets_addBtn")}),t.jsx(f,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),$&&t.jsx("div",{children:t.jsx(K,{onClose:w})})]})};G.propTypes={getFilterParams:I.func.isRequired};const me=n.section`
padding-bottom: 117px;

  @media ${p} {
    padding-bottom: 209px;
  }

  @media ${z} {
    padding-bottom: 112px;
  }
`,he=n.div`
margin-bottom: 24px;

  @media ${p} {
    margin-bottom: 40px;
  }
`,fe=n.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  margin: 24px 0;

  @media ${p} {
    margin: 43px 0;
  }

  @media ${z} {
      /* flex-wrap: nowrap; */

  }
`;n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  margin-top: 20px;
  position: relative;

  @media ${p} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;function we(){const[e,l]=c.useState([]),[r,g]=c.useState(""),[i,d]=c.useState({category:"sell",page:1,search:""}),[x,a]=c.useState(0),[v,$]=c.useState(!1),h=12;c.useEffect(()=>{(async()=>{try{if($(!0),!i.category||i.category==="sell"||i.category==="in-good-hands"||i.category==="lost-or-found"){const o=await Q(i);return a(Math.ceil(o.total/h)),l(m(o))}if(i.category==="my-ads"){const o=await X(i);return a(Math.ceil(o.total/h)),l(m(o))}if(i.category==="favorite"){const o=await Y(i);return a(Math.ceil(o.total/h)),l(m(o))}}catch(o){console.log(o)}finally{$(!1)}})()},[i]);const m=o=>o.data.map(s=>({...s,noticeType:U[s.noticeType]||s.noticeType})),k=o=>{o.preventDefault(),d(s=>({...s,search:r,page:1}))},w=()=>{g(""),d(o=>({...o,search:"",page:1}))},C=o=>{g(o)},F=o=>{d(s=>({...s,category:o}))},S=o=>{d(s=>{const{category:N,page:W,search:_}=s,A={};return Object.keys(o).forEach(L=>{A[L]=o[L]}),{category:N,page:W,search:_,...A}})},u=c.useCallback(o=>{d(s=>({...s,page:o.selected+1}))},[]);return t.jsxs(me,{children:[t.jsx(he,{children:t.jsx(oe,{children:"Find your favorite pet"})}),t.jsx(ee,{onSubmit:k,onChange:C,onDelete:w,value:r}),t.jsxs(fe,{children:[t.jsx(R,{getCategoryParams:F}),t.jsx(G,{getFilterParams:S})]}),t.jsx(Z,{notices:e,pageCount:x,handlePageChange:u}),t.jsx(te,{pageCount:x,handlePageChange:u}),v?t.jsx(J,{}):null]})}export{we as default};
