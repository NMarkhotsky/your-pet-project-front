import{s,b as g,a as L,N as U,P as G,u as T,c as J,j as t,r as c,t as u,I as y,L as K,C as Q,d as X,O as Y,e as Z,f as ee}from"./index-52828b33.js";import{A as te,g as oe,a as ne,b as se,N as ie,c as ae,d as re}from"./NoticesCategoriesList-523eaff7.js";import{s as le,S as ce,P as de,N as pe}from"./NoInfoPart-e6725208.js";import{T as ge}from"./TitlePage-8fa39898.js";import{S as ue}from"./ScrollToTopButton-95a6959b.js";import"./Btn.styled-2e3a41cf.js";import"./ModalConfirmDelete-71807199.js";import"./catImg-34c1bda9.js";let w=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((r,l)=>(l&=63,l<36?r+=l.toString(36):l<62?r+=(l-26).toString(36).toUpperCase():l>62?r+="-":r+="_",r),"");const xe=[{id:w(),to:"/notices/sell",text:"sell",name:"sell"},{id:w(),to:"/notices/lost-found",text:"lost or found",name:"lost-or-found"},{id:w(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],me=[{id:w(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:w(),to:"/notices/own",text:"my ads",name:"my-ads"}],he=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${g} {
    gap: 12px;
  }

  @media ${L} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,E=s.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media ${g} {
    gap: 12px;
  }
`,I=s(U)`
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

  &.active {
    color: ${({theme:e})=>e.colors.white};
    background-color: ${({theme:e})=>e.colors.blue};
  }
`,W=({getCategoryParams:e})=>{const{isLoggedIn:r}=T(),{search:l}=J();return t.jsxs(he,{children:[t.jsx(E,{children:xe.map(({to:m,text:a,id:d,name:h})=>t.jsx("li",{children:t.jsx(I,{to:{pathname:m,search:l},onClick:()=>e(h),children:a})},d))}),r&&t.jsx(E,{children:me.map(({to:m,text:a,id:d,name:h})=>t.jsx("li",{children:t.jsx(I,{to:{pathname:m,search:l},onClick:()=>e(h),children:a})},d))})]})};W.propTypes={getCategoryParams:G.func.isRequired};const fe=s.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${g}{
    flex-direction: row;
    gap: 12px;
    
  }
`,be=s.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${g} {
    position: static;
  }
`,ye=s.button`
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
`,je=s.div`
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
`,ve=s.span`
  display: none;

  @media ${g} {
    display: block;
  }
`;s.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const $e=s.div`
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
`,ke=s.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,O=s.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,M=s.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,H=s.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,R=s.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=s.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,k=s.input`
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
`,we=s.button`
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
`,Ce=s.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,V=({getFilterParams:e})=>{const[r,l]=c.useState(!1),[m,a]=c.useState(!1),[d,h]=c.useState(!1),[i,j]=c.useState([]),[C,_]=c.useState(!1),{user:f}=T(),S=()=>{f.name===null&&f.email===null&&_(!0)},v=()=>{_(!1)};c.useEffect(()=>{const n={younger:!1,middle:!1,older:!1,sex:null};i.includes("0-12 m")?n.young=!0:n.young=!1,i.includes("1 year")?n.middle=!0:n.middle=!1,i.includes("2 years +")?n.older=!0:n.older=!1,i.includes("male")&&i.includes("female")?n.sex=null:i.includes("male")?n.sex="male":i.includes("female")?n.sex="female":n.sex=null,Object.keys(n).forEach(x=>{(n[x]===!1||n[x]===null)&&delete n[x]}),e(n)},[i]);const F=()=>{l(n=>!n)},N=()=>{a(n=>!n)},B=()=>{h(n=>!n)},b=n=>{i.includes(n.target.value)?j(x=>x.filter(o=>o!==n.target.value)):j(x=>[...x,n.target.value])};return t.jsxs(fe,{children:[t.jsxs(be,{children:[t.jsxs(ye,{onClick:F,type:"button","aria-label":"toggle filters",children:[t.jsx(ve,{children:u("notices_filterBnt")}),t.jsx(je,{children:t.jsx(y,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),r&&t.jsx($e,{children:t.jsxs("div",{children:[t.jsx(ke,{children:u("notices_filterBnt_filters")}),t.jsxs(O,{children:[t.jsxs(M,{type:"button",onClick:N,"aria-label":"toggle age options",children:[m?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(H,{children:u("notices_filterBnt_filters_byAge")})]}),m&&t.jsxs(R,{children:[t.jsxs($,{children:[t.jsx(k,{onChange:b,type:"checkbox",name:"age",value:"0-12 m",checked:i.includes("0-12 m")}),u("notices_filterBnt_filters_byAge_lt1")]}),t.jsxs($,{children:[t.jsx(k,{onChange:b,type:"checkbox",name:"age",value:"1 year",checked:i.includes("1 year")}),u("notices_filterBnt_filters_byAge_gt1")]}),t.jsxs($,{children:[t.jsx(k,{onChange:b,type:"checkbox",name:"age",value:"2 years +",checked:i.includes("2 years +")}),u("notices_filterBnt_filters_byAge_gt2")]})]})]}),t.jsxs(O,{children:[t.jsxs(M,{type:"button",onClick:B,"aria-label":"toggle gender options",children:[d?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(H,{children:u("notices_filterBnt_filters_byGender")})]}),d&&t.jsxs(R,{children:[t.jsxs($,{children:[t.jsx(k,{onChange:b,type:"checkbox",name:"gender",value:"male",checked:i.includes("male")}),u("notices_filterBnt_filters_male")]}),t.jsxs($,{children:[t.jsx(k,{onChange:b,type:"checkbox",name:"gender",value:"female",checked:i.includes("female")}),u("notices_filterBnt_filters_female")]})]})]})]})})]}),t.jsx(K,{to:f.email!==null&&"/add-pet",onClick:S,children:t.jsxs(we,{type:"button",children:[t.jsx(Ce,{children:u("user_mypets_addBtn")}),t.jsx(y,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),C&&t.jsx(te,{onClose:v})]})};V.propTypes={getFilterParams:G.func.isRequired};const _e=s.section`
padding-bottom: 117px;

  @media ${g} {
    padding-bottom: 209px;
  }

  @media ${L} {
    padding-bottom: 112px;
  }
`,Se=s.div`
margin-bottom: 24px;

  @media ${g} {
    margin-bottom: 40px;
  }
`,Fe=s.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  margin: 24px 0;

  @media ${g} {
    margin: 43px 0;
  }

  @media ${L} {
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
`;function Ee(){const[e,r]=c.useState([]),[l,m]=c.useState(""),[a,d]=c.useState({category:"sell",page:1,search:""}),[h,i]=c.useState(0),[j,C]=c.useState(!1),{user:_}=T(),f=12,S=async o=>{if((await ae(o)).data.notice.ownerEmail!==_.email){Z("It is not your pet and you cannot remove it");return}await re(o),ee("The card was successfully removed"),r(A=>A.filter(z=>z.id!==o))};c.useEffect(()=>{(async()=>{try{if(C(!0),!a.category||a.category==="sell"||a.category==="in-good-hands"||a.category==="lost-or-found"){const o=await oe(a);return i(Math.ceil(o.total/f)),r(v(o))}if(a.category==="my-ads"){const o=await ne(a);return i(Math.ceil(o.total/f)),r(v(o))}if(a.category==="favorite"){const o=await se(a);return i(Math.ceil(o.total/f)),r(v(o))}}catch(o){console.log(o)}finally{C(!1)}})()},[a]);const v=o=>o.data.map(p=>({...p,noticeType:Q[p.noticeType]||p.noticeType})),F=o=>{o.preventDefault(),d(p=>({...p,search:l,page:1}))},N=()=>{m(""),d(o=>({...o,search:"",page:1}))},B=o=>{m(o)},b=o=>{d(p=>({...p,category:o}))},n=o=>{d(p=>{const{category:A,page:z,search:q}=p,P={};return Object.keys(o).forEach(D=>{P[D]=o[D]}),{category:A,page:z,search:q,...P}})},x=c.useCallback(o=>{d(p=>({...p,page:o.selected+1})),le()},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(_e,{children:[t.jsx(Se,{children:t.jsx(ge,{children:u("notices_title")})}),t.jsx(ce,{onSubmit:F,onChange:B,onDelete:N,value:l}),t.jsxs(Fe,{children:[t.jsx(W,{getCategoryParams:b}),t.jsx(V,{getFilterParams:n})]}),t.jsx(ie,{notices:e,pageCount:h,handlePageChange:x,handleDeleteNotice:S}),h>1&&t.jsx(de,{pageCount:h,handlePageChange:x}),j?t.jsx(X,{}):null,e.length===0&&!j&&t.jsx(pe,{})]}),t.jsx(ue,{}),t.jsx(Y,{})]})}export{Ee as default};
