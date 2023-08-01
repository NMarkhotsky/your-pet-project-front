import{s as r,b as k,L as H,P as A,u as G,c as M,j as o,r as d,I as b,C as V}from"./index-96a8865b.js";import{g as q,a as U,b as W,N as _}from"./NoticesCategoriesList-85414aea.js";import{S as J}from"./SearchInput-928422db.js";import{T as K}from"./TitlePage-c0f0c48e.js";import"./Btn.styled-53245ec5.js";import"./Pagination-5aebc636.js";let v=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,i)=>(i&=63,i<36?l+=i.toString(36):i<62?l+=(i-26).toString(36).toUpperCase():i>62?l+="-":l+="_",l),"");const Q=[{id:v(),to:"/notices/sell",text:"sell",name:"sell"},{id:v(),to:"/notices/lost-found",text:"lost/found",name:"lost-or-found"},{id:v(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],X=[{id:v(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:v(),to:"/notices/own",text:"my ads",name:"my-ads"}],N=r.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${k} {
    gap: 12px;
  }
`,z=r(H)`
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
`,E=({getCategoryParams:e})=>{const{isLoggedIn:l}=G(),{search:i}=M();return o.jsxs(o.Fragment,{children:[o.jsx(N,{children:Q.map(({to:p,text:a,id:c,name:h})=>o.jsx("li",{children:o.jsx(z,{to:{pathname:p,search:i},onClick:()=>e(h),children:a})},c))}),l&&o.jsx(N,{children:X.map(({to:p,text:a,id:c,name:h})=>o.jsx("li",{children:o.jsx(z,{to:{pathname:p,search:i},onClick:()=>e(h),children:a})},c))})]})};E.propTypes={getCategoryParams:A.func.isRequired};const Y=r.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${k} {
    position: static;
  }
`,Z=r.button`
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

  @media ${k} {
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
`,ee=r.div`
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
`,oe=r.span`
  display: none;

  @media ${k} {
    display: block;
  }
`;r.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const te=r.div`
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
  @media ${k} {
    margin-top: 20px;
  }
`,ne=r.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,L=r.div`
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
`,T=r.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,O=r.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,P=r.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,y=r.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,j=r.input`
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
`,D=({getFilterParams:e})=>{const[l,i]=d.useState(!1),[p,a]=d.useState(!1),[c,h]=d.useState(!1),[s,x]=d.useState([]);d.useEffect(()=>{const t={younger:!1,middle:!1,older:!1,sex:null};s.includes("0-12 m")?t.young=!0:t.young=!1,s.includes("1 year")?t.middle=!0:t.middle=!1,s.includes("2 years +")?t.older=!0:t.older=!1,s.includes("male")&&s.includes("female")?t.sex=null:s.includes("male")?t.sex="male":s.includes("female")?t.sex="female":t.sex=null,Object.keys(t).forEach(u=>{(t[u]===!1||t[u]===null)&&delete t[u]}),e(t)},[s]);const f=()=>{i(t=>!t)},$=()=>{a(t=>!t)},C=()=>{h(t=>!t)},m=t=>{s.includes(t.target.value)?x(u=>u.filter(w=>w!==t.target.value)):x(u=>[...u,t.target.value])};return o.jsxs(Y,{children:[o.jsxs(Z,{onClick:f,type:"button","aria-label":"toggle filters",children:[o.jsx(oe,{children:"Filter"}),o.jsx(ee,{children:o.jsx(b,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&o.jsx(te,{children:o.jsxs("div",{children:[o.jsx(ne,{children:"Filters"}),o.jsxs(L,{children:[o.jsxs(T,{type:"button",onClick:$,"aria-label":"toggle age options",children:[p?o.jsx(b,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):o.jsx(b,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),o.jsx(O,{children:"By age"})]}),p&&o.jsxs(P,{children:[o.jsxs(y,{children:[o.jsx(j,{onChange:m,type:"checkbox",name:"age",value:"0-12 m",checked:s.includes("0-12 m")}),"0-12 m"]}),o.jsxs(y,{children:[o.jsx(j,{onChange:m,type:"checkbox",name:"age",value:"1 year",checked:s.includes("1 year")}),"1 year"]}),o.jsxs(y,{children:[o.jsx(j,{onChange:m,type:"checkbox",name:"age",value:"2 years +",checked:s.includes("2 years +")}),"2 year +"]})]})]}),o.jsxs(L,{children:[o.jsxs(T,{type:"button",onClick:C,"aria-label":"toggle gender options",children:[c?o.jsx(b,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):o.jsx(b,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),o.jsx(O,{children:"By gender"})]}),c&&o.jsxs(P,{children:[o.jsxs(y,{children:[o.jsx(j,{onChange:m,type:"checkbox",name:"gender",value:"male",checked:s.includes("male")}),"male"]}),o.jsxs(y,{children:[o.jsx(j,{onChange:m,type:"checkbox",name:"gender",value:"female",checked:s.includes("female")}),"female"]})]})]})]})})]})};D.propTypes={getFilterParams:A.func.isRequired};function de(){const[e,l]=d.useState([]),[i,p]=d.useState(""),[a,c]=d.useState({category:"sell",page:1,search:""}),[h,s]=d.useState(0),x=12;d.useEffect(()=>{(async()=>{if(!a.category||a.category==="sell"||a.category==="in-good-hands"||a.category==="lost-or-found"){const n=await q(a);return s(Math.ceil(n.total/x)),console.log(n.data[0].noticeType),l(f(n))}if(a.category==="my-ads"){const n=await U(a);return s(Math.ceil(n.total/x)),l(f(n))}if(a.category==="favorite"){const n=await W(a);return s(Math.ceil(n.total/x)),l(f(n))}})()},[a]);const f=n=>n.data.map(g=>({...g,noticeType:V[g.noticeType]||g.noticeType})),$=()=>{c(n=>({...n,search:i,page:1}))},C=()=>{p(""),c(n=>({...n,search:"",page:1}))},m=n=>{p(n)},t=n=>{c(g=>({...g,category:n}))},u=n=>{c(g=>{const{category:I,page:R,search:B}=g,F={};return Object.keys(n).forEach(S=>{F[S]=n[S]}),{category:I,page:R,search:B,...F}})},w=d.useCallback(n=>{c(g=>({...g,page:n.selected+1}))},[]);return o.jsxs(o.Fragment,{children:[o.jsx(K,{children:"Find your favorite pet"}),o.jsx(J,{onSubmit:$,onChange:m,onDelete:C,value:i}),o.jsx(E,{getCategoryParams:t}),o.jsx(D,{getFilterParams:u}),o.jsx(_,{notices:e,pageCount:h,handlePageChange:w})]})}export{de as default};
