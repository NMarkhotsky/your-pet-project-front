import{s,b as f,L as D,P as O,u as W,c as _,j as t,r as d,I as m,t as V,C as q,d as U}from"./index-4f3331d1.js";import{g as J,a as K,b as Q,N as X}from"./NoticesCategoriesList-f14b0318.js";import{S as Y,P as Z}from"./Pagination-188ea9cb.js";import{T as ee}from"./TitlePage-63c4bc22.js";import"./Btn.styled-1dd174cd.js";import"./ModalConfirmDelete-4992c979.js";let $=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,r)=>(r&=63,r<36?l+=r.toString(36):r<62?l+=(r-26).toString(36).toUpperCase():r>62?l+="-":l+="_",l),"");const te=[{id:$(),to:"/notices/sell",text:"sell",name:"sell"},{id:$(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:$(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],oe=[{id:$(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:$(),to:"/notices/own",text:"my ads",name:"my-ads"}],ne=s.div`
  display: flex;
  gap: 12px;
`,z=s.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${f} {
    gap: 12px;
  }
`,L=s(D)`
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
`,A=({getCategoryParams:e})=>{const{isLoggedIn:l}=W(),{search:r}=_();return t.jsxs(ne,{children:[t.jsx(z,{children:te.map(({to:g,text:i,id:c,name:h})=>t.jsx("li",{children:t.jsx(L,{to:{pathname:g,search:r},onClick:()=>e(h),children:i})},c))}),l&&t.jsx(z,{children:oe.map(({to:g,text:i,id:c,name:h})=>t.jsx("li",{children:t.jsx(L,{to:{pathname:g,search:r},onClick:()=>e(h),children:i})},c))})]})};A.propTypes={getCategoryParams:O.func.isRequired};const se=s.div`
  display: flex;
  gap: 12px;
`,ae=s.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${f} {
    position: static;
  }
`,ie=s.button`
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
`,re=s.div`
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
`,le=s.span`
  display: none;

  @media ${f} {
    display: block;
  }
`;s.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const ce=s.div`
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
`,de=s.p`
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
`,E=s.button`
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
`,B=s.form`
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
`,j=s.input`
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
`,pe=s.button`
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
`,H=({getFilterParams:e})=>{const[l,r]=d.useState(!1),[g,i]=d.useState(!1),[c,h]=d.useState(!1),[a,k]=d.useState([]);d.useEffect(()=>{const o={younger:!1,middle:!1,older:!1,sex:null};a.includes("0-12 m")?o.young=!0:o.young=!1,a.includes("1 year")?o.middle=!0:o.middle=!1,a.includes("2 years +")?o.older=!0:o.older=!1,a.includes("male")&&a.includes("female")?o.sex=null:a.includes("male")?o.sex="male":a.includes("female")?o.sex="female":o.sex=null,Object.keys(o).forEach(u=>{(o[u]===!1||o[u]===null)&&delete o[u]}),e(o)},[a]);const C=()=>{r(o=>!o)},b=()=>{i(o=>!o)},y=()=>{h(o=>!o)},x=o=>{a.includes(o.target.value)?k(u=>u.filter(w=>w!==o.target.value)):k(u=>[...u,o.target.value])};return t.jsxs(se,{children:[t.jsxs(ae,{children:[t.jsxs(ie,{onClick:C,type:"button","aria-label":"toggle filters",children:[t.jsx(le,{children:"Filter"}),t.jsx(re,{children:t.jsx(m,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(ce,{children:t.jsxs("div",{children:[t.jsx(de,{children:"Filters"}),t.jsxs(P,{children:[t.jsxs(E,{type:"button",onClick:b,"aria-label":"toggle age options",children:[g?t.jsx(m,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(m,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(T,{children:"By age"})]}),g&&t.jsxs(B,{children:[t.jsxs(v,{children:[t.jsx(j,{onChange:x,type:"checkbox",name:"age",value:"0-12 m",checked:a.includes("0-12 m")}),"0-12 m"]}),t.jsxs(v,{children:[t.jsx(j,{onChange:x,type:"checkbox",name:"age",value:"1 year",checked:a.includes("1 year")}),"1 year"]}),t.jsxs(v,{children:[t.jsx(j,{onChange:x,type:"checkbox",name:"age",value:"2 years +",checked:a.includes("2 years +")}),"2 year +"]})]})]}),t.jsxs(P,{children:[t.jsxs(E,{type:"button",onClick:y,"aria-label":"toggle gender options",children:[c?t.jsx(m,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(m,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(T,{children:"By gender"})]}),c&&t.jsxs(B,{children:[t.jsxs(v,{children:[t.jsx(j,{onChange:x,type:"checkbox",name:"gender",value:"male",checked:a.includes("male")}),"male"]}),t.jsxs(v,{children:[t.jsx(j,{onChange:x,type:"checkbox",name:"gender",value:"female",checked:a.includes("female")}),"female"]})]})]})]})})]}),t.jsx(D,{to:"/add-pet",children:t.jsxs(pe,{type:"button",children:[V("user_mypets_addBtn"),t.jsx(m,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]})};H.propTypes={getFilterParams:O.func.isRequired};const ge=s.section`
padding-bottom: 112px;
`,ue=s.div`
margin-bottom: 40px;
`,he=s.div`
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
`;function je(){const[e,l]=d.useState([]),[r,g]=d.useState(""),[i,c]=d.useState({category:"sell",page:1,search:""}),[h,a]=d.useState(0),[k,C]=d.useState(!1),b=12;d.useEffect(()=>{(async()=>{try{if(C(!0),!i.category||i.category==="sell"||i.category==="in-good-hands"||i.category==="lost-or-found"){const n=await J(i);return a(Math.ceil(n.total/b)),l(y(n))}if(i.category==="my-ads"){const n=await K(i);return a(Math.ceil(n.total/b)),l(y(n))}if(i.category==="favorite"){const n=await Q(i);return a(Math.ceil(n.total/b)),l(y(n))}}catch(n){console.log(n)}finally{C(!1)}})()},[i]);const y=n=>n.data.map(p=>({...p,noticeType:q[p.noticeType]||p.noticeType})),x=n=>{n.preventDefault(),c(p=>({...p,search:r,page:1}))},o=()=>{g(""),c(n=>({...n,search:"",page:1}))},u=n=>{g(n)},w=n=>{c(p=>({...p,category:n}))},I=n=>{c(p=>{const{category:R,page:G,search:M}=p,S={};return Object.keys(n).forEach(N=>{S[N]=n[N]}),{category:R,page:G,search:M,...S}})},F=d.useCallback(n=>{c(p=>({...p,page:n.selected+1}))},[]);return t.jsxs(ge,{children:[t.jsx(ue,{children:t.jsx(ee,{children:"Find your favorite pet"})}),t.jsx(Y,{onSubmit:x,onChange:u,onDelete:o,value:r}),t.jsxs(he,{children:[t.jsx(A,{getCategoryParams:w}),t.jsx(H,{getFilterParams:I})]}),t.jsx(X,{notices:e,pageCount:h,handlePageChange:F}),t.jsx(Z,{pageCount:h,handlePageChange:F}),k?t.jsx(U,{}):null]})}export{je as default};
