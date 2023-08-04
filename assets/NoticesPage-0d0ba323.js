import{s as n,b as m,a as I,N as X,P as q,u as P,c as Y,j as t,r as g,t as y,I as N,L as Z,R as k,d as ee,C as te,O as oe,e as ne,f as se}from"./index-aad183ad.js";import{A as ie,L as ae,g as re,a as le,b as ce,N as de,c as pe,d as xe}from"./NoticesCategoriesList-89a40a28.js";import{s as ue,S as fe,P as ge,N as me}from"./NoInfoPart-58f40b5b.js";import{T as he}from"./TitlePage-fbaa030d.js";import{S as be}from"./ScrollToTopButton-da6bbbab.js";import"./Btn.styled-8e3434c4.js";import"./ModalConfirmDelete-8d66f16d.js";import"./catImg-34c1bda9.js";let E=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,a)=>(a&=63,a<36?l+=a.toString(36):a<62?l+=(a-26).toString(36).toUpperCase():a>62?l+="-":l+="_",l),"");const ye=[{id:E(),to:"/notices/sell",text:"sell",name:"sell"},{id:E(),to:"/notices/lost-found",text:"lost or found",name:"lost-or-found"},{id:E(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],je=[{id:E(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:E(),to:"/notices/own",text:"my ads",name:"my-ads"}],ve=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${m} {
    gap: 12px;
  }

  @media ${I} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,M=n.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media ${m} {
    gap: 12px;
  }
`,H=n(X)`
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
`,U=({getCategoryParams:e})=>{const{isLoggedIn:l}=P(),{search:a}=Y();return t.jsxs(ve,{children:[t.jsx(M,{children:ye.map(({to:x,text:r,id:p,name:f})=>t.jsx("li",{children:t.jsx(H,{to:{pathname:x,search:a},onClick:()=>e(f),children:r})},p))}),l&&t.jsx(M,{children:je.map(({to:x,text:r,id:p,name:f})=>t.jsx("li",{children:t.jsx(H,{to:{pathname:x,search:a},onClick:()=>e(f),children:r})},p))})]})};U.propTypes={getCategoryParams:q.func.isRequired};const $e=n.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${m}{
    flex-direction: row;
    gap: 12px;
    
  }
`,ke=n.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${m} {
    position: static;
  }
`,we=n.button`
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
`,Ce=n.div`
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
`,Se=n.span`
  display: none;

  @media ${m} {
    display: block;
  }
`;n.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const _e=n.div`
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
`,Ne=n.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,R=n.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,W=n.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,G=n.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,V=n.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,A=n.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,z=n.input`
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
`,Fe=n.button`
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
  @media ${m} {
    padding: 8px 20px;
  }
`,Be=n.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,J=({getFilterParams:e})=>{const[l,a]=g.useState(!1),[x,r]=g.useState(!1),[p,f]=g.useState(!1),[i,b]=g.useState([]),[d,$]=g.useState(!1),{user:j}=P(),C=()=>{j.name===null&&j.email===null&&$(!0)},v=()=>{$(!1)};g.useEffect(()=>{const s={younger:!1,middle:!1,older:!1,sex:null};i.includes("0-12 m")?s.young=!0:s.young=!1,i.includes("1 year")?s.middle=!0:s.middle=!1,i.includes("2 years +")?s.older=!0:s.older=!1,i.includes("male")&&i.includes("female")?s.sex=null:i.includes("male")?s.sex="male":i.includes("female")?s.sex="female":s.sex=null,Object.keys(s).forEach(c=>{(s[c]===!1||s[c]===null)&&delete s[c]}),e(s)},[i]);const F=()=>{a(s=>!s)},S=()=>{r(s=>!s)},B=()=>{f(s=>!s)},h=s=>{i.includes(s.target.value)?b(c=>c.filter(o=>o!==s.target.value)):b(c=>[...c,s.target.value])};return t.jsxs($e,{children:[t.jsxs(ke,{children:[t.jsxs(we,{onClick:F,type:"button","aria-label":"toggle filters",children:[t.jsx(Se,{children:y("notices_filterBnt")}),t.jsx(Ce,{children:t.jsx(N,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(_e,{children:t.jsxs("div",{children:[t.jsx(Ne,{children:y("notices_filterBnt_filters")}),t.jsxs(R,{children:[t.jsxs(W,{type:"button",onClick:S,"aria-label":"toggle age options",children:[x?t.jsx(N,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(N,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(G,{children:y("notices_filterBnt_filters_byAge")})]}),x&&t.jsxs(V,{children:[t.jsxs(A,{children:[t.jsx(z,{onChange:h,type:"checkbox",name:"age",value:"0-12 m",checked:i.includes("0-12 m")}),y("notices_filterBnt_filters_byAge_lt1")]}),t.jsxs(A,{children:[t.jsx(z,{onChange:h,type:"checkbox",name:"age",value:"1 year",checked:i.includes("1 year")}),y("notices_filterBnt_filters_byAge_gt1")]}),t.jsxs(A,{children:[t.jsx(z,{onChange:h,type:"checkbox",name:"age",value:"2 years +",checked:i.includes("2 years +")}),y("notices_filterBnt_filters_byAge_gt2")]})]})]}),t.jsxs(R,{children:[t.jsxs(W,{type:"button",onClick:B,"aria-label":"toggle gender options",children:[p?t.jsx(N,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(N,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(G,{children:y("notices_filterBnt_filters_byGender")})]}),p&&t.jsxs(V,{children:[t.jsxs(A,{children:[t.jsx(z,{onChange:h,type:"checkbox",name:"gender",value:"male",checked:i.includes("male")}),y("notices_filterBnt_filters_male")]}),t.jsxs(A,{children:[t.jsx(z,{onChange:h,type:"checkbox",name:"gender",value:"female",checked:i.includes("female")}),y("notices_filterBnt_filters_female")]})]})]})]})})]}),t.jsx(Z,{to:j.email!==null&&"/add-pet",onClick:C,children:t.jsxs(Fe,{type:"button",children:[t.jsx(Be,{children:y("user_mypets_addBtn")}),t.jsx(N,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),d&&t.jsx(ie,{onClose:v})]})};J.propTypes={getFilterParams:q.func.isRequired};const Ae=n.section`
padding-bottom: 117px;

  @media ${m} {
    padding-bottom: 209px;
  }

  @media ${I} {
    padding-bottom: 112px;
  }
`,ze=n.div`
margin-bottom: 24px;

  @media ${m} {
    margin-bottom: 40px;
  }
`,Ee=n.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  margin: 24px 0;

  @media ${m} {
    margin: 43px 0;
  }

  @media ${I} {
      /* flex-wrap: nowrap; */

  }
`;n.div`
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
`;const Le=k.createContext({}),K=!0;function Te({baseColor:e,highlightColor:l,width:a,height:x,borderRadius:r,circle:p,direction:f,duration:i,enableAnimation:b=K}){const d={};return f==="rtl"&&(d["--animation-direction"]="reverse"),typeof i=="number"&&(d["--animation-duration"]=`${i}s`),b||(d["--pseudo-element-display"]="none"),(typeof a=="string"||typeof a=="number")&&(d.width=a),(typeof x=="string"||typeof x=="number")&&(d.height=x),(typeof r=="string"||typeof r=="number")&&(d.borderRadius=r),p&&(d.borderRadius="50%"),typeof e<"u"&&(d["--base-color"]=e),typeof l<"u"&&(d["--highlight-color"]=l),d}function Ie({count:e=1,wrapper:l,className:a,containerClassName:x,containerTestId:r,circle:p=!1,style:f,...i}){var b,d,$;const j=k.useContext(Le),C={...i};for(const[c,o]of Object.entries(i))typeof o>"u"&&delete C[c];const v={...j,...C,circle:p},F={...f,...Te(v)};let S="react-loading-skeleton";a&&(S+=` ${a}`);const B=(b=v.inline)!==null&&b!==void 0?b:!1,h=[],s=Math.ceil(e);for(let c=0;c<s;c++){let o=F;if(s>e&&c===s-1){const w=(d=o.width)!==null&&d!==void 0?d:"100%",_=e%1,T=typeof w=="number"?w*_:`calc(${w} * ${_})`;o={...o,width:T}}const u=k.createElement("span",{className:S,style:o,key:c},"‌");B?h.push(u):h.push(k.createElement(k.Fragment,{key:c},u,k.createElement("br",null)))}return k.createElement("span",{className:x,"data-testid":r,"aria-live":"polite","aria-busy":($=v.enableAnimation)!==null&&$!==void 0?$:K},l?h.map((c,o)=>k.createElement(l,{key:o},c)):h)}const Oe=ee`
0%{
  background-position: 0 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0 50%;
}
`,L=n(Ie)`
  display: flex;

  background: linear-gradient(290.46deg, #c3e0f9 0%, #b3b3b3 107.89%);
  background-size: 300% 300%;

  animation: ${Oe} 1s ease infinite;

  overflow: hidden;
`,Pe=n.li`
  width: 100%;
  height: 425px;
  padding-bottom: 24px;
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({theme:e})=>e.boxShadow.main};

  @media ${m} {
    width: 336px;
  }

  @media ${I} {
    width: 288px;
  }
`,De=n.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e7f5fb;
  background-position: center;
  background-size: cover;

  max-width: 100%;
  height: 288px;
`,Me=n(L)`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
  height: 32px;
  border-radius: 0px 16px 16px 0px;
`,Q=n(L)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
`,He=n(Q)`
  top: 68px;
  right: 12px;
`,Re=n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 20px;
`,O=n(L)`
  width: 80px;
  padding: 5;
  border-radius: 16px;
`,We=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 0px 0px 40px 40px;
`,Ge=n(L)`
  /* margin: 20px auto; */

  width: 248px;
  height: 63px;

  border-radius: 10px;
`,Ve=n(L)`
  /* margin: 0 auto; */
  width: 248px;
  height: 42px;

  border-radius: 40px;
`,qe=({cards:e})=>t.jsx(ae,{children:Array(e).fill(0).map((l,a)=>t.jsxs(Pe,{children:[t.jsxs(De,{children:[t.jsx(Me,{inline:!0}),t.jsx(Q,{}),t.jsx(He,{}),t.jsxs(Re,{children:[t.jsx(O,{inline:!0}),t.jsx(O,{inline:!0}),t.jsx(O,{inline:!0})]})]}),t.jsxs(We,{children:[t.jsx(Ge,{inline:!0}),t.jsx(Ve,{inline:!0})]})]},a))});function tt(){const[e,l]=g.useState([]),[a,x]=g.useState(""),[r,p]=g.useState({category:"sell",page:1,search:""}),[f,i]=g.useState(0),[b,d]=g.useState(!1),{user:$}=P(),j=12,C=async o=>{if((await pe(o)).data.notice.ownerEmail!==$.email){ne("It is not your pet and you cannot remove it");return}await xe(o),se("The card was successfully removed"),l(w=>w.filter(_=>_.id!==o))};g.useEffect(()=>{(async()=>{try{if(d(!0),!r.category||r.category==="sell"||r.category==="in-good-hands"||r.category==="lost-or-found"){const o=await re(r);return i(Math.ceil(o.total/j)),l(v(o))}if(r.category==="my-ads"){const o=await le(r);return i(Math.ceil(o.total/j)),l(v(o))}if(r.category==="favorite"){const o=await ce(r);return i(Math.ceil(o.total/j)),l(v(o))}}catch(o){console.log(o)}finally{d(!1)}})()},[r]);const v=o=>o.data.map(u=>({...u,noticeType:te[u.noticeType]||u.noticeType})),F=o=>{o.preventDefault(),p(u=>({...u,search:a,page:1})),i(1)},S=()=>{x(""),p(o=>({...o,search:"",page:1}))},B=o=>{x(o)},h=o=>{p(u=>({...u,category:o,page:1})),i(1)},s=o=>{i(1),p(u=>{const{category:w,search:_}=u,T={};return Object.keys(o).forEach(D=>{T[D]=o[D]}),{category:w,page:1,search:_,...T}})},c=g.useCallback(o=>{p(u=>({...u,page:o.selected+1})),ue()},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(Ae,{children:[t.jsx(ze,{children:t.jsx(he,{children:y("notices_title")})}),t.jsx(fe,{onSubmit:F,onChange:B,onDelete:S,value:a}),t.jsxs(Ee,{children:[t.jsx(U,{getCategoryParams:h}),t.jsx(J,{getFilterParams:s})]}),b?t.jsx(qe,{cards:12}):t.jsx(de,{notices:e,pageCount:f,handlePageChange:c,handleDeleteNotice:C}),f>1&&t.jsx(ge,{pageCount:f,handlePageChange:c}),e.length===0&&!b&&t.jsx(me,{})]}),t.jsx(be,{}),t.jsx(oe,{})]})}export{tt as default};
