import{s,b as g,a as L,L as G,P as W,u as T,c as J,j as t,r as c,t as u,I as y,C as K,d as Q,e as X,f as Y}from"./index-bb383ab6.js";import{A as Z,g as ee,a as te,b as oe,N as ne,c as se,d as ie}from"./NoticesCategoriesList-043a73f2.js";import{s as ae,S as re,P as le}from"./scrollToTop-19b074ab.js";import{T as ce}from"./TitlePage-d965aa84.js";import"./Btn.styled-c91af844.js";import"./ModalConfirmDelete-c1af8f01.js";import"./NoInfoPart-c242ae6b.js";import"./catImg-34c1bda9.js";let k=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((r,l)=>(l&=63,l<36?r+=l.toString(36):l<62?r+=(l-26).toString(36).toUpperCase():l>62?r+="-":r+="_",r),"");const de=[{id:k(),to:"/notices/sell",text:"sell",name:"sell"},{id:k(),to:"/notices/lost-found",text:"lost or found",name:"lost-or-found"},{id:k(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],pe=[{id:k(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:k(),to:"/notices/own",text:"my ads",name:"my-ads"}],ge=s.div`
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

  @media ${g} {
    gap: 12px;
  }
`,I=s(G)`
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
`,V=({getCategoryParams:e})=>{const{isLoggedIn:r}=T(),{search:l}=J();return t.jsxs(ge,{children:[t.jsx(E,{children:de.map(({to:x,text:a,id:d,name:h})=>t.jsx("li",{children:t.jsx(I,{to:{pathname:x,search:l},onClick:()=>e(h),children:a})},d))}),r&&t.jsx(E,{children:pe.map(({to:x,text:a,id:d,name:h})=>t.jsx("li",{children:t.jsx(I,{to:{pathname:x,search:l},onClick:()=>e(h),children:a})},d))})]})};V.propTypes={getCategoryParams:W.func.isRequired};const ue=s.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${g}{
    flex-direction: row;
    gap: 12px;
    
  }
`,me=s.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${g} {
    position: static;
  }
`,xe=s.button`
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
`,he=s.div`
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
`,fe=s.span`
  display: none;

  @media ${g} {
    display: block;
  }
`;s.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const be=s.div`
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
`,ye=s.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,M=s.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,O=s.button`
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
`,j=s.label`
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
`,ve=s.button`
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
`,je=s.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,q=({getFilterParams:e})=>{const[r,l]=c.useState(!1),[x,a]=c.useState(!1),[d,h]=c.useState(!1),[i,w]=c.useState([]),[C,_]=c.useState(!1),{user:f}=T(),S=()=>{f.name===null&&f.email===null&&_(!0)},v=()=>{_(!1)};c.useEffect(()=>{const n={younger:!1,middle:!1,older:!1,sex:null};i.includes("0-12 m")?n.young=!0:n.young=!1,i.includes("1 year")?n.middle=!0:n.middle=!1,i.includes("2 years +")?n.older=!0:n.older=!1,i.includes("male")&&i.includes("female")?n.sex=null:i.includes("male")?n.sex="male":i.includes("female")?n.sex="female":n.sex=null,Object.keys(n).forEach(m=>{(n[m]===!1||n[m]===null)&&delete n[m]}),e(n)},[i]);const F=()=>{l(n=>!n)},N=()=>{a(n=>!n)},A=()=>{h(n=>!n)},b=n=>{i.includes(n.target.value)?w(m=>m.filter(o=>o!==n.target.value)):w(m=>[...m,n.target.value])};return t.jsxs(ue,{children:[t.jsxs(me,{children:[t.jsxs(xe,{onClick:F,type:"button","aria-label":"toggle filters",children:[t.jsx(fe,{children:u("notices_filterBnt")}),t.jsx(he,{children:t.jsx(y,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),r&&t.jsx(be,{children:t.jsxs("div",{children:[t.jsx(ye,{children:u("notices_filterBnt_filters")}),t.jsxs(M,{children:[t.jsxs(O,{type:"button",onClick:N,"aria-label":"toggle age options",children:[x?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(H,{children:u("notices_filterBnt_filters_byAge")})]}),x&&t.jsxs(R,{children:[t.jsxs(j,{children:[t.jsx($,{onChange:b,type:"checkbox",name:"age",value:"0-12 m",checked:i.includes("0-12 m")}),u("notices_filterBnt_filters_byAge_lt1")]}),t.jsxs(j,{children:[t.jsx($,{onChange:b,type:"checkbox",name:"age",value:"1 year",checked:i.includes("1 year")}),u("notices_filterBnt_filters_byAge_gt1")]}),t.jsxs(j,{children:[t.jsx($,{onChange:b,type:"checkbox",name:"age",value:"2 years +",checked:i.includes("2 years +")}),u("notices_filterBnt_filters_byAge_gt2")]})]})]}),t.jsxs(M,{children:[t.jsxs(O,{type:"button",onClick:A,"aria-label":"toggle gender options",children:[d?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(H,{children:u("notices_filterBnt_filters_byGender")})]}),d&&t.jsxs(R,{children:[t.jsxs(j,{children:[t.jsx($,{onChange:b,type:"checkbox",name:"gender",value:"male",checked:i.includes("male")}),u("notices_filterBnt_filters_male")]}),t.jsxs(j,{children:[t.jsx($,{onChange:b,type:"checkbox",name:"gender",value:"female",checked:i.includes("female")}),u("notices_filterBnt_filters_female")]})]})]})]})})]}),t.jsx(G,{to:f.email!==null&&"/add-pet",onClick:S,children:t.jsxs(ve,{type:"button",children:[t.jsx(je,{children:u("user_mypets_addBtn")}),t.jsx(y,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),C&&t.jsx(Z,{onClose:v})]})};q.propTypes={getFilterParams:W.func.isRequired};const $e=s.section`
padding-bottom: 117px;

  @media ${g} {
    padding-bottom: 209px;
  }

  @media ${L} {
    padding-bottom: 112px;
  }
`,ke=s.div`
margin-bottom: 24px;

  @media ${g} {
    margin-bottom: 40px;
  }
`,we=s.div`
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
`;function Le(){const[e,r]=c.useState([]),[l,x]=c.useState(""),[a,d]=c.useState({category:"sell",page:1,search:""}),[h,i]=c.useState(0),[w,C]=c.useState(!1),{user:_}=T(),f=12,S=async o=>{if((await se(o)).data.notice.ownerEmail!==_.email){X("It is not your pet and you cannot remove it");return}await ie(o),Y("The card was successfully removed"),r(B=>B.filter(z=>z.id!==o))};c.useEffect(()=>{(async()=>{try{if(C(!0),!a.category||a.category==="sell"||a.category==="in-good-hands"||a.category==="lost-or-found"){const o=await ee(a);return i(Math.ceil(o.total/f)),r(v(o))}if(a.category==="my-ads"){const o=await te(a);return i(Math.ceil(o.total/f)),r(v(o))}if(a.category==="favorite"){const o=await oe(a);return i(Math.ceil(o.total/f)),r(v(o))}}catch(o){console.log(o)}finally{C(!1)}})()},[a]);const v=o=>o.data.map(p=>({...p,noticeType:K[p.noticeType]||p.noticeType})),F=o=>{o.preventDefault(),d(p=>({...p,search:l,page:1}))},N=()=>{x(""),d(o=>({...o,search:"",page:1}))},A=o=>{x(o)},b=o=>{d(p=>({...p,category:o}))},n=o=>{d(p=>{const{category:B,page:z,search:U}=p,P={};return Object.keys(o).forEach(D=>{P[D]=o[D]}),{category:B,page:z,search:U,...P}})},m=c.useCallback(o=>{d(p=>({...p,page:o.selected+1})),ae()},[]);return t.jsxs($e,{children:[t.jsx(ke,{children:t.jsx(ce,{children:u("notices_title")})}),t.jsx(re,{onSubmit:F,onChange:A,onDelete:N,value:l}),t.jsxs(we,{children:[t.jsx(V,{getCategoryParams:b}),t.jsx(q,{getFilterParams:n})]}),t.jsx(ne,{notices:e,pageCount:h,handlePageChange:m,handleDeleteNotice:S}),t.jsx(le,{pageCount:h,handlePageChange:m}),w?t.jsx(Q,{}):null]})}export{Le as default};
