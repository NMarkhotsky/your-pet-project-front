import{s,b as m,L as M,P as D,u as W,c as V,j as t,r as d,I as y,C as q,d as U}from"./index-776af8de.js";import{g as _,a as J,b as K,N as Q}from"./NoticesCategoriesList-004d72e6.js";import{S as X,P as Y}from"./Pagination-2d67441d.js";import{T as Z}from"./TitlePage-145d6de8.js";import"./Btn.styled-ef5eb0a1.js";let $=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,r)=>(r&=63,r<36?l+=r.toString(36):r<62?l+=(r-26).toString(36).toUpperCase():r>62?l+="-":l+="_",l),"");const ee=[{id:$(),to:"/notices/sell",text:"sell",name:"sell"},{id:$(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:$(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],te=[{id:$(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:$(),to:"/notices/own",text:"my ads",name:"my-ads"}],oe=s.div`
  display: flex;
  gap: 12px;
`,L=s.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${m} {
    gap: 12px;
  }
`,z=s(M)`
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
`,E=({getCategoryParams:e})=>{const{isLoggedIn:l}=W(),{search:r}=V();return t.jsxs(oe,{children:[t.jsx(L,{children:ee.map(({to:g,text:i,id:c,name:h})=>t.jsx("li",{children:t.jsx(z,{to:{pathname:g,search:r},onClick:()=>e(h),children:i})},c))}),l&&t.jsx(L,{children:te.map(({to:g,text:i,id:c,name:h})=>t.jsx("li",{children:t.jsx(z,{to:{pathname:g,search:r},onClick:()=>e(h),children:i})},c))})]})};E.propTypes={getCategoryParams:D.func.isRequired};const ne=s.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${m} {
    position: static;
  }
`,se=s.button`
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

  @media ${m} {
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
`,ae=s.div`
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
`,ie=s.span`
  display: none;

  @media ${m} {
    display: block;
  }
`;s.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const re=s.div`
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
  @media ${m} {
    margin-top: 20px;
  }
`,le=s.p`
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
`,T=s.button`
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
`,A=s.form`
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
`,I=({getFilterParams:e})=>{const[l,r]=d.useState(!1),[g,i]=d.useState(!1),[c,h]=d.useState(!1),[a,k]=d.useState([]);d.useEffect(()=>{const o={younger:!1,middle:!1,older:!1,sex:null};a.includes("0-12 m")?o.young=!0:o.young=!1,a.includes("1 year")?o.middle=!0:o.middle=!1,a.includes("2 years +")?o.older=!0:o.older=!1,a.includes("male")&&a.includes("female")?o.sex=null:a.includes("male")?o.sex="male":a.includes("female")?o.sex="female":o.sex=null,Object.keys(o).forEach(u=>{(o[u]===!1||o[u]===null)&&delete o[u]}),e(o)},[a]);const C=()=>{r(o=>!o)},f=()=>{i(o=>!o)},b=()=>{h(o=>!o)},x=o=>{a.includes(o.target.value)?k(u=>u.filter(w=>w!==o.target.value)):k(u=>[...u,o.target.value])};return t.jsxs(ne,{children:[t.jsxs(se,{onClick:C,type:"button","aria-label":"toggle filters",children:[t.jsx(ie,{children:"Filter"}),t.jsx(ae,{children:t.jsx(y,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(re,{children:t.jsxs("div",{children:[t.jsx(le,{children:"Filters"}),t.jsxs(P,{children:[t.jsxs(T,{type:"button",onClick:f,"aria-label":"toggle age options",children:[g?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(O,{children:"By age"})]}),g&&t.jsxs(A,{children:[t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"age",value:"0-12 m",checked:a.includes("0-12 m")}),"0-12 m"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"age",value:"1 year",checked:a.includes("1 year")}),"1 year"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"age",value:"2 years +",checked:a.includes("2 years +")}),"2 year +"]})]})]}),t.jsxs(P,{children:[t.jsxs(T,{type:"button",onClick:b,"aria-label":"toggle gender options",children:[c?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(O,{children:"By gender"})]}),c&&t.jsxs(A,{children:[t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"gender",value:"male",checked:a.includes("male")}),"male"]}),t.jsxs(j,{children:[t.jsx(v,{onChange:x,type:"checkbox",name:"gender",value:"female",checked:a.includes("female")}),"female"]})]})]})]})})]})};I.propTypes={getFilterParams:D.func.isRequired};const ce=s.section`
padding-bottom: 112px;
`,de=s.div`
margin-bottom: 40px;
`,pe=s.div`
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

  @media ${m} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;function fe(){const[e,l]=d.useState([]),[r,g]=d.useState(""),[i,c]=d.useState({category:"sell",page:1,search:""}),[h,a]=d.useState(0),[k,C]=d.useState(!1),f=12;d.useEffect(()=>{(async()=>{try{if(C(!0),!i.category||i.category==="sell"||i.category==="in-good-hands"||i.category==="lost-or-found"){const n=await _(i);return a(Math.ceil(n.total/f)),l(b(n))}if(i.category==="my-ads"){const n=await J(i);return a(Math.ceil(n.total/f)),l(b(n))}if(i.category==="favorite"){const n=await K(i);return a(Math.ceil(n.total/f)),l(b(n))}}catch(n){console.log(n)}finally{C(!1)}})()},[i]);const b=n=>n.data.map(p=>({...p,noticeType:q[p.noticeType]||p.noticeType})),x=n=>{n.preventDefault(),c(p=>({...p,search:r,page:1}))},o=()=>{g(""),c(n=>({...n,search:"",page:1}))},u=n=>{g(n)},w=n=>{c(p=>({...p,category:n}))},B=n=>{c(p=>{const{category:R,page:H,search:G}=p,F={};return Object.keys(n).forEach(N=>{F[N]=n[N]}),{category:R,page:H,search:G,...F}})},S=d.useCallback(n=>{c(p=>({...p,page:n.selected+1}))},[]);return t.jsxs(ce,{children:[t.jsx(de,{children:t.jsx(Z,{children:"Find your favorite pet"})}),t.jsx(X,{onSubmit:x,onChange:u,onDelete:o,value:r}),t.jsxs(pe,{children:[t.jsx(E,{getCategoryParams:w}),t.jsx(I,{getFilterParams:B})]}),t.jsx(Q,{notices:e,pageCount:h,handlePageChange:S}),t.jsx(Y,{pageCount:h,handlePageChange:S}),k?t.jsx(U,{}):null]})}export{fe as default};
