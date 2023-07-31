import{s as r,b as v,L as E,P as A,u as M,c as R,j as o,r as d,I as f}from"./index-6697fed1.js";import{g as G,a as V,b as q,N as U}from"./NoticesCategoriesList-402435ee.js";import{S as W}from"./SearchInput-28ec2080.js";import{T as _}from"./TitlePage-ce4e4ed7.js";import"./Btn.styled-f6dc484d.js";import"./Pagination-1cd5bb01.js";let j=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((i,l)=>(l&=63,l<36?i+=l.toString(36):l<62?i+=(l-26).toString(36).toUpperCase():l>62?i+="-":i+="_",i),"");const J=[{id:j(),to:"/notices/sell",text:"sell",name:"sell"},{id:j(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:j(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],K=[{id:j(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:j(),to:"/notices/own",text:"my ads",name:"my-ads"}],S=r.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${v} {
    gap: 12px;
  }
`,N=r(E)`
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
`,D=({getCategoryParams:e})=>{const{isLoggedIn:i}=M(),{search:l}=R();return o.jsxs(o.Fragment,{children:[o.jsx(S,{children:J.map(({to:p,text:a,id:c,name:g})=>o.jsx("li",{children:o.jsx(N,{to:{pathname:p,search:l},onClick:()=>e(g),children:a})},c))}),i&&o.jsx(S,{children:K.map(({to:p,text:a,id:c,name:g})=>o.jsx("li",{children:o.jsx(N,{to:{pathname:p,search:l},onClick:()=>e(g),children:a})},c))})]})};D.propTypes={getCategoryParams:A.func.isRequired};const Q=r.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${v} {
    position: static;
  }
`,X=r.button`
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

  @media ${v} {
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
`,Y=r.div`
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
`,Z=r.span`
  display: none;

  @media ${v} {
    display: block;
  }
`;r.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const ee=r.div`
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
  @media ${v} {
    margin-top: 20px;
  }
`,oe=r.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,z=r.div`
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
`,L=r.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,P=r.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,O=r.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,b=r.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,y=r.input`
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
`,I=({getFilterParams:e})=>{const[i,l]=d.useState(!1),[p,a]=d.useState(!1),[c,g]=d.useState(!1),[n,m]=d.useState([]);d.useEffect(()=>{const t={younger:!1,middle:!1,older:!1,sex:null};n.includes("0-12 m")?t.young=!0:t.young=!1,n.includes("1 year")?t.middle=!0:t.middle=!1,n.includes("2 years +")?t.older=!0:t.older=!1,n.includes("male")?t.sex="male":n.includes("female")?t.sex="female":(n.includes("male","female"),t.sex=null),Object.keys(t).forEach(u=>{(t[u]===!1||t[u]===null)&&delete t[u]}),e(t)},[n]);const k=()=>{l(t=>!t)},$=()=>{a(t=>!t)},C=()=>{g(t=>!t)},h=t=>{n.includes(t.target.value)?m(u=>u.filter(s=>s!==t.target.value)):m(u=>[...u,t.target.value])};return o.jsxs(Q,{children:[o.jsxs(X,{onClick:k,type:"button","aria-label":"toggle filters",children:[o.jsx(Z,{children:"Filter"}),o.jsx(Y,{children:o.jsx(f,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),i&&o.jsx(ee,{children:o.jsxs("div",{children:[o.jsx(oe,{children:"Filters"}),o.jsxs(z,{children:[o.jsxs(L,{type:"button",onClick:$,"aria-label":"toggle age options",children:[p?o.jsx(f,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):o.jsx(f,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),o.jsx(P,{children:"By age"})]}),p&&o.jsxs(O,{children:[o.jsxs(b,{children:[o.jsx(y,{onChange:h,type:"checkbox",name:"age",value:"0-12 m",checked:n.includes("0-12 m")}),"0-12 m"]}),o.jsxs(b,{children:[o.jsx(y,{onChange:h,type:"checkbox",name:"age",value:"1 year",checked:n.includes("1 year")}),"1 year"]}),o.jsxs(b,{children:[o.jsx(y,{onChange:h,type:"checkbox",name:"age",value:"2 years +",checked:n.includes("2 years +")}),"2 year +"]})]})]}),o.jsxs(z,{children:[o.jsxs(L,{type:"button",onClick:C,"aria-label":"toggle gender options",children:[c?o.jsx(f,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):o.jsx(f,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),o.jsx(P,{children:"By gender"})]}),c&&o.jsxs(O,{children:[o.jsxs(b,{children:[o.jsx(y,{onChange:h,type:"checkbox",name:"gender",value:"male",checked:n.includes("male")}),"male"]}),o.jsxs(b,{children:[o.jsx(y,{onChange:h,type:"checkbox",name:"gender",value:"female",checked:n.includes("female")}),"female"]})]})]})]})})]})};I.propTypes={getFilterParams:A.func.isRequired};function le(){const[e,i]=d.useState([]),[l,p]=d.useState(""),[a,c]=d.useState({category:"sell",page:1,search:""}),[g,n]=d.useState(0),m=12;d.useEffect(()=>{(async()=>{if(!a.category||a.category==="sell"||a.category==="in-good-hands"||a.category==="lost-or-found"){const s=await G(a);return n(Math.ceil(s.total/m)),i(s.data)}if(a.category==="my-ads"){const s=await V(a);return n(Math.ceil(s.total/m)),i(s.data)}if(a.category==="favorite"){const s=await q(a);return n(Math.ceil(s.total/m)),i(s.data)}})()},[a]);const k=()=>{c(s=>({...s,search:l,page:1}))},$=()=>{p(""),c(s=>({...s,search:"",page:1}))},C=s=>{p(s)},h=s=>{c(x=>({...x,category:s}))},t=s=>{c(x=>{const{category:B,page:H,search:T}=x,w={};return Object.keys(s).forEach(F=>{w[F]=s[F]}),{category:B,page:H,search:T,...w}})},u=d.useCallback(s=>{c(x=>({...x,page:s.selected+1}))},[]);return o.jsxs(o.Fragment,{children:[o.jsx(_,{children:"Find your favorite pet"}),o.jsx(W,{onSubmit:k,onChange:C,onDelete:$}),o.jsx(D,{getCategoryParams:h}),o.jsx(I,{getFilterParams:t}),o.jsx(U,{notices:e,pageCount:g,handlePageChange:u})]})}export{le as default};
