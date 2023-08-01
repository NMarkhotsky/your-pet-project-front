import{s,b as f,L as H,P as A,u as G,c as M,j as t,r as d,I as y,C as W}from"./index-461b1c85.js";import{g as V,a as q,b as U,N as _}from"./NoticesCategoriesList-cc3a42b7.js";import{S as J,P as K}from"./Pagination-12d4bb80.js";import{T as Q}from"./TitlePage-0c91be23.js";import"./Btn.styled-c19b5214.js";let $=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,r)=>(r&=63,r<36?l+=r.toString(36):r<62?l+=(r-26).toString(36).toUpperCase():r>62?l+="-":l+="_",l),"");const X=[{id:$(),to:"/notices/sell",text:"sell",name:"sell"},{id:$(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:$(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],Y=[{id:$(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:$(),to:"/notices/own",text:"my ads",name:"my-ads"}],Z=s.div`
  display: flex;
  gap: 12px;
`,N=s.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${f} {
    gap: 12px;
  }
`,z=s(H)`
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
`,E=({getCategoryParams:e})=>{const{isLoggedIn:l}=G(),{search:r}=M();return t.jsxs(Z,{children:[t.jsx(N,{children:X.map(({to:p,text:i,id:c,name:h})=>t.jsx("li",{children:t.jsx(z,{to:{pathname:p,search:r},onClick:()=>e(h),children:i})},c))}),l&&t.jsx(N,{children:Y.map(({to:p,text:i,id:c,name:h})=>t.jsx("li",{children:t.jsx(z,{to:{pathname:p,search:r},onClick:()=>e(h),children:i})},c))})]})};E.propTypes={getCategoryParams:A.func.isRequired};const ee=s.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${f} {
    position: static;
  }
`,te=s.button`
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
`,oe=s.div`
  position: relative;
  z-index: 5;

  & svg use {
    stroke: ${e=>e.theme.colors.blue};
  }
  &:hover,
  &:focus svg use {
    stroke: ${e=>e.theme.colors.white};
    transition: fill ${({theme:e})=>e.transitionHover};
  }
`,ne=s.span`
  display: none;

  @media ${f} {
    display: block;
  }
`;s.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const se=s.div`
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
`,ae=s.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,P=s.div`
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
`,L=s.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,T=s.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,O=s.form`
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
`,D=({getFilterParams:e})=>{const[l,r]=d.useState(!1),[p,i]=d.useState(!1),[c,h]=d.useState(!1),[a,m]=d.useState([]);d.useEffect(()=>{const o={younger:!1,middle:!1,older:!1,sex:null};a.includes("0-12 m")?o.young=!0:o.young=!1,a.includes("1 year")?o.middle=!0:o.middle=!1,a.includes("2 years +")?o.older=!0:o.older=!1,a.includes("male")&&a.includes("female")?o.sex=null:a.includes("male")?o.sex="male":a.includes("female")?o.sex="female":o.sex=null,Object.keys(o).forEach(g=>{(o[g]===!1||o[g]===null)&&delete o[g]}),e(o)},[a]);const b=()=>{r(o=>!o)},C=()=>{i(o=>!o)},w=()=>{h(o=>!o)},x=o=>{a.includes(o.target.value)?m(g=>g.filter(k=>k!==o.target.value)):m(g=>[...g,o.target.value])};return t.jsxs(ee,{children:[t.jsxs(te,{onClick:b,type:"button","aria-label":"toggle filters",children:[t.jsx(ne,{children:"Filter"}),t.jsx(oe,{children:t.jsx(y,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(se,{children:t.jsxs("div",{children:[t.jsx(ae,{children:"Filters"}),t.jsxs(P,{children:[t.jsxs(L,{type:"button",onClick:C,"aria-label":"toggle age options",children:[p?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(T,{children:"By age"})]}),p&&t.jsxs(O,{children:[t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"age",value:"0-12 m",checked:a.includes("0-12 m")}),"0-12 m"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"age",value:"1 year",checked:a.includes("1 year")}),"1 year"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"age",value:"2 years +",checked:a.includes("2 years +")}),"2 year +"]})]})]}),t.jsxs(P,{children:[t.jsxs(L,{type:"button",onClick:w,"aria-label":"toggle gender options",children:[c?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(T,{children:"By gender"})]}),c&&t.jsxs(O,{children:[t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"gender",value:"male",checked:a.includes("male")}),"male"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"gender",value:"female",checked:a.includes("female")}),"female"]})]})]})]})})]})};D.propTypes={getFilterParams:A.func.isRequired};const ie=s.section`
padding-bottom: 112px;
`,re=s.div`
margin-bottom: 40px;
`,le=s.div`
  display: flex;
  justify-content: space-between;
  margin: 43px 0;
`;s.div`
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
`;function he(){const[e,l]=d.useState([]),[r,p]=d.useState(""),[i,c]=d.useState({category:"sell",page:1,search:""}),[h,a]=d.useState(0),m=12;d.useEffect(()=>{(async()=>{if(!i.category||i.category==="sell"||i.category==="in-good-hands"||i.category==="lost-or-found"){const n=await V(i);return a(Math.ceil(n.total/m)),l(b(n))}if(i.category==="my-ads"){const n=await q(i);return a(Math.ceil(n.total/m)),l(b(n))}if(i.category==="favorite"){const n=await U(i);return a(Math.ceil(n.total/m)),l(b(n))}})()},[i]);const b=n=>n.data.map(u=>({...u,noticeType:W[u.noticeType]||u.noticeType})),C=()=>{c(n=>({...n,search:r,page:1}))},w=()=>{p(""),c(n=>({...n,search:"",page:1}))},x=n=>{p(n)},o=n=>{c(u=>({...u,category:n}))},g=n=>{c(u=>{const{category:I,page:B,search:R}=u,F={};return Object.keys(n).forEach(S=>{F[S]=n[S]}),{category:I,page:B,search:R,...F}})},k=d.useCallback(n=>{c(u=>({...u,page:n.selected+1}))},[]);return t.jsxs(ie,{children:[t.jsx(re,{children:t.jsx(Q,{children:"Find your favorite pet"})}),t.jsx(J,{onSubmit:C,onChange:x,onDelete:w,value:r}),t.jsxs(le,{children:[t.jsx(E,{getCategoryParams:o}),t.jsx(D,{getFilterParams:g})]}),t.jsx(_,{notices:e,pageCount:h,handlePageChange:k}),t.jsx(K,{pageCount:h,handlePageChange:k})]})}export{he as default};
