import{s as o,b as i,a as N,u as E,j as t,r as je,P as v,M as G,B as $e,L as ye,S as we,I as u,c as ve,d as ke,e as R,f as Se,g as le,h as ce,C as _e,i as Fe}from"./index-ee3ce916.js";import{N as Ce,u as de,r as c,h as pe,L as ze,b as Be}from"./react-ecc61561.js";import{u as he,T as X,t as r}from"./translations-5abde677.js";import{R as xe,B as Ne}from"./catImg-bc7fe17e.js";import{M as Te}from"./ModalConfirmDelete-fae27347.js";import{S as Ae,P as Ie,s as Le}from"./scrollToTop-e2ffb466.js";import{T as Me}from"./TitlePage-12b93e7d.js";import{B as P,u as De,N as Pe}from"./useResource-0c2fa8d4.js";import{S as Ee}from"./ScrollToTopButton-18e13f37.js";import"./state-c18d5234.js";import"./forms-b2853f00.js";import"./Btn.styled-bc5f3f54.js";let D=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((s,a)=>(a&=63,a<36?s+=a.toString(36):a<62?s+=(a-26).toString(36).toUpperCase():a>62?s+="-":s+="_",s),"");const Re=[{id:D(),to:"/notices/sell",text:"sell",name:"sell"},{id:D(),to:"/notices/lost-found",text:"lost or found",name:"lost-or-found"},{id:D(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],He=[{id:D(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:D(),to:"/notices/own",text:"my ads",name:"my-ads"}],Oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${i} {
    gap: 12px;
  }

  @media ${N} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,Y=o.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media ${i} {
    gap: 12px;
  }
`,Z=o(Ce)`
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
`,We=()=>{const{t:e}=he(),{isLoggedIn:s}=E(),a=de(),d=new URLSearchParams(a.search);d.delete("page");const y=d.toString();return t.jsxs(Oe,{children:[t.jsx(Y,{children:Re.map(({to:n,text:b,id:x})=>t.jsx("li",{children:t.jsx(Z,{to:{pathname:n,search:y},children:e(`category_${b}`)})},x))}),s&&t.jsx(Y,{children:He.map(({to:n,text:b,id:x})=>t.jsx("li",{children:t.jsx(Z,{to:{pathname:n,search:y},children:e(`category_${b}`)})},x))})]})},qe=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${i}{
    flex-direction: row;
    gap: 12px;
    
  }
`,Ue=o.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${i} {
    position: static;
  }
`,Ge=o.button`
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

  @media ${i} {
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
`,Ve=o.div`
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
`,Ke=o.span`
  display: none;

  @media ${i} {
    display: block;
  }
`;o.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const Je=o.div`
  animation: ${je} 180ms ease;
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
  @media ${i} {
    margin-top: 20px;
  }
`,Qe=o.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,ee=o.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,te=o.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,oe=o.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,ne=o.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,L=o.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,M=o.input`
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
`,Xe=o.button`
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
  @media ${i} {
    padding: 8px 20px;
  }
`,Ye=o.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,Ze=o.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgColor};

  @media ${i} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`,et=o.h3`
  margin-bottom: 20px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${i} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,tt=o.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.56px;
  color: ${({theme:e})=>e.colors.text};

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.lg};
    letter-spacing: 0.8px;
    line-height: 28px;
  }
`,V=({onClose:e})=>t.jsx(G,{onClose:e,children:t.jsxs(Ze,{children:[t.jsxs(X,{i18nKey:"modal_attention",children:[t.jsx(et,{children:"Attention"}),t.jsx(tt,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs($e,{children:[t.jsxs(ye,{to:"/login",children:[t.jsxs(X,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(we,{children:"in"})]}),t.jsx(u,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(ve,{to:"/register",children:r("header_nav_signupBtn")})]})]})});V.propTypes={onClose:v.func.isRequired};const me=({getFilterParams:e})=>{const[s,a]=c.useState(!1),[d,y]=c.useState(!1),[n,b]=c.useState(!1),[x]=pe(),[h,k]=c.useState([]),[S,$]=c.useState(!1),{isLoggedIn:p}=E(),_=l=>{p||(l.preventDefault(),$(!0))},T=()=>{$(!1)};c.useEffect(()=>{const l=[];x.get("young")==="true"&&l.push("0-12 m"),x.get("middle")==="true"&&l.push("1 year"),x.get("older")==="true"&&l.push("2 years +"),x.get("sex")&&l.push(x.get("sex")),k(l)},[x]);const j=()=>{a(l=>!l)},B=()=>{y(l=>!l)},A=()=>{b(l=>!l)},w=l=>{const m=l.target.value,g=h.includes(m)?h.filter(I=>I!==m):[...h,m];k(g),e({young:g.includes("0-12 m")||null,middle:g.includes("1 year")||null,older:g.includes("2 years +")||null,sex:g.includes("male")===g.includes("female")?null:g.includes("male")?"male":"female"})};return t.jsxs(qe,{children:[t.jsxs(Ue,{children:[t.jsxs(Ge,{onClick:j,type:"button","aria-label":"toggle filters","aria-expanded":s,children:[t.jsx(Ke,{children:r("notices_filterBnt")}),t.jsx(Ve,{children:t.jsx(u,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),s&&t.jsx(Je,{children:t.jsxs("div",{children:[t.jsx(Qe,{children:r("notices_filterBnt_filters")}),t.jsxs(ee,{children:[t.jsxs(te,{type:"button",onClick:B,"aria-label":"toggle age options",children:[d?t.jsx(u,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(u,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(oe,{children:r("notices_filterBnt_filters_byAge")})]}),d&&t.jsxs(ne,{children:[t.jsxs(L,{children:[t.jsx(M,{onChange:w,type:"checkbox",name:"age",value:"0-12 m",checked:h.includes("0-12 m")}),r("notices_filterBnt_filters_byAge_lt1")]}),t.jsxs(L,{children:[t.jsx(M,{onChange:w,type:"checkbox",name:"age",value:"1 year",checked:h.includes("1 year")}),r("notices_filterBnt_filters_byAge_gt1")]}),t.jsxs(L,{children:[t.jsx(M,{onChange:w,type:"checkbox",name:"age",value:"2 years +",checked:h.includes("2 years +")}),r("notices_filterBnt_filters_byAge_gt2")]})]})]}),t.jsxs(ee,{children:[t.jsxs(te,{type:"button",onClick:A,"aria-label":"toggle gender options",children:[n?t.jsx(u,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(u,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(oe,{children:r("notices_filterBnt_filters_byGender")})]}),n&&t.jsxs(ne,{children:[t.jsxs(L,{children:[t.jsx(M,{onChange:w,type:"checkbox",name:"gender",value:"male",checked:h.includes("male")}),r("notices_filterBnt_filters_male")]}),t.jsxs(L,{children:[t.jsx(M,{onChange:w,type:"checkbox",name:"gender",value:"female",checked:h.includes("female")}),r("notices_filterBnt_filters_female")]})]})]})]})})]}),t.jsx(ze,{to:"/add-pet",onClick:_,children:t.jsxs(Xe,{type:"button",children:[t.jsx(Ye,{children:r("user_mypets_addBtn")}),t.jsx(u,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),S&&t.jsx(V,{onClose:T})]})};me.propTypes={getFilterParams:v.func.isRequired};const ge=o.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  gap: 24px;

  @media ${i} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;

    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`,ot=o.li`
  display: flex;
  flex-direction: column;
  /* max-width: 480px; */
  width: 100%;
  height: auto;
  padding-bottom: 24px;

  border-radius: 0 0 40px 40px;

  box-shadow: ${e=>e.theme.boxShadow.main};
  background-color: ${e=>e.theme.colors.bgdColorAuth};

  @media ${i} {
    width: 336px;
  }

  @media ${N} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
  ${ke}
`,nt=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,it=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,st=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,rt=o.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 126px;
  height: 32px;
  padding: 11px 17px;

  border-radius: 0 16px 16px 0;

  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: 19px;

  background-color: ${e=>e.theme.colors.blueLight};
  color: ${e=>e.theme.colors.black};
`,at=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ie=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: transparent;

  width: 40px;
  height: 40px;

  margin: 0;
  padding: 0;

  border: none;
  border-radius: 50%;

  line-height: 0;

  background-color: ${e=>e.theme.colors.blueLight};

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,lt=o.ul`
  position: absolute;
  bottom: 12px;

  width: 100%;
  margin: 0 auto;
  /* padding: 0 8px; */
  display: flex;
  justify-content: space-evenly;
  gap: 12px;

  padding: 0;

  @media ${i} {
    gap: 24px;
  }

  @media ${N} {
    gap: 12px;
  }
`,W=o.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 80px;
  height: 28px;
  padding: 5px 5px;

  border-radius: 16px;

  background-color: ${e=>e.theme.colors.blueLight};
  color: ${e=>e.theme.colors.black};
  stroke: ${e=>e.theme.colors.blue};

  cursor: pointer;

  transition: ${({theme:e})=>e.transitionHover};
`,q=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};
  text-align: center;
  letter-spacing: 0.48px;
`,ct=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  word-break: break-word;
`,se=e=>e.length>5?e.substring(0,4)+"...":e;o.button`
  position: absolute;
  right: 12px;
  top: 12px;

  width: 24px;
  height: 24px;

  padding: 0;

  line-height: 0;

  border: none;

  background: transparent;

  @media ${i} {
    right: 24px;
    top: 24px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`;const dt=o.div`
  width: 100%;
  min-width: 0;
  padding: 44px 12px 16px;
  /* width: 280px; */

  @media ${i} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,pt=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${i} {
    flex-direction: row;
    gap: 24px;
  }
`,ht=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${i} {
    height: 298px;
    width: 262px;
  }
`,xt=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,mt=o.span`
  position: absolute;
  top: 16px;
  left: 0;

  width: 130px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11px 17px;

  border-radius: 0 16px 16px 0;

  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 19px;

  background-color: ${e=>e.theme.colors.blueLight};
  color: #111;
`,gt=o.div`
  @media ${i} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,ft=o.h4`
  width: 100%;
  overflow-wrap: anywhere;

  margin-bottom: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  letter-spacing: -0.01em;
  line-height: 33px;

  color: ${e=>e.theme.colors.text};

  @media ${i} {
    width: 321px;

    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 38px;
  }
`,ut=o.table`
  width: 100%;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${i} {
    width: 340px;
  }
`,bt=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,F=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,C=o.td`
  display: table-cell;
  width: 80px;

  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 19px;
  vertical-align: inherit;

  color: ${e=>e.theme.colors.text};

  @media ${i} {
    width: 120px;

    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,z=o.td`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${e=>e.theme.colors.text};

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,re=o.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,jt=o.p`
  margin-bottom: 12px;
  word-wrap: break-word;

  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  letter-spacing: 0.04em;
  line-height: 19px;

  overflow: hidden;
  text-overflow: ellipsis;

  @media ${i} {
    margin-bottom: 70px;

    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 24px;
  }
`,$t=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${i} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,yt=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,wt=o(yt)`
  border: 2px solid transparent;
`,vt=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,kt=o.a`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 256px;
  height: 40px;

  padding: 8px 20px;
  border-radius: 40px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  text-decoration: none;
  letter-spacing: 0.04em;
  line-height: 22px;

  border: 2px solid ${e=>e.theme.colors.blue};

  color: ${e=>e.theme.colors.blue};

  @media ${i} {
    width: 129px;
  }

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: ${e=>e.theme.colors.blue};
    color: ${e=>e.theme.colors.white};

    transition: ${({theme:e})=>e.transitionHover};
  }

  &:hover > span {
    color: ${e=>e.theme.colors.white};
    transition: ${({theme:e})=>e.transitionHover};
  }
`,St=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,K=async(e,s={},a={})=>{const{data:d}=await R.get(e,{...a,params:s});return d},_t=(e,s)=>K("/notices",e,s),Ft=(e,s)=>K("/notices/self",e,s),Ct=(e,s)=>K("/notices/favorites",e,s),zt=(e,s)=>R.get(`/notices/${e}`,s),Bt=e=>R.delete(`/notices/${e}`),Nt=e=>R.patch(`/notices/favorites/${e}`),fe=({item:e,toggleModal:s,isFavorite:a,isSaving:d,handleAddInFavorite:y})=>{const[n,b]=c.useState({}),[x,h]=c.useState(!1),[k,S]=c.useState(0);let $;return c.useEffect(()=>{const p=new AbortController;return h(!1),zt(e.id,{signal:p.signal}).then(_=>{p.signal.aborted||b({..._.data.notice,noticeType:e.noticeType})}).catch(()=>{p.signal.aborted||h(!0)}),()=>p.abort()},[e.id,e.noticeType,k]),n.birthday&&($=n.birthday.split("-").reverse().join(".")),t.jsx(t.Fragment,{children:t.jsx(G,{onClose:s,children:t.jsx(dt,{children:x?t.jsx(xe,{onRetry:()=>S(p=>p+1)}):n._id?t.jsxs(t.Fragment,{children:[t.jsxs(pt,{children:[t.jsxs(ht,{children:[t.jsx(xt,{src:n.photoURL,alt:"pet",loading:"lazy"}),t.jsx(mt,{children:r(`category_${n.noticeType}`)})]}),t.jsxs(gt,{children:[t.jsx(ft,{children:n.title}),t.jsx(ut,{children:t.jsxs(bt,{children:[t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_name"),": "]}),t.jsx(z,{children:n.name})]}),t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_birthday"),": "]}),t.jsx(z,{children:$})]}),t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_type"),": "]}),t.jsx(z,{children:n.petType})]}),t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_place"),": "]}),t.jsx(z,{children:n.location})]}),t.jsxs(F,{children:[t.jsxs(C,{children:[r("notices_cardInfoDetails_theSex"),": "]}),t.jsx(z,{children:r(`notices_filterBnt_filters_${n.sex}`)})]}),n.price!=null&&t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_price"),":"]}),t.jsx(z,{children:new Intl.NumberFormat(void 0,{style:"currency",currency:"UAH",maximumFractionDigits:0}).format(n.price)})]}),n.ownerEmail&&t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_mail"),":"]}),t.jsx(z,{children:t.jsx(re,{href:`mailto:${n.ownerEmail}`,children:n.ownerEmail})})]}),n.ownerPhone&&t.jsxs(F,{children:[t.jsxs(C,{children:[r("other_phone"),":"]}),t.jsx(z,{children:t.jsx(re,{href:`tel:${n.ownerPhone}`,children:n.ownerPhone})})]})]})})]})]}),t.jsxs(jt,{children:[t.jsxs(St,{children:[r("other_comments"),":"]})," ",n.comments]}),t.jsxs($t,{children:[t.jsxs(wt,{disabled:d,onClick:y,style:{color:a?"#54ADFF":"#FEF9F9",backgroundColor:a?"#FEF9F9":"#54ADFF",borderColor:a?"#54ADFF":void 0},children:[t.jsx(vt,{children:a?r("notices_cardInfoDetails_removeFrom"):r("notices_cardInfoDetails_addToBtn")}),a?t.jsx(u,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(u,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),(n.ownerPhone||n.ownerEmail)&&t.jsx(kt,{href:n.ownerPhone?`tel:${n.ownerPhone}`:`mailto:${n.ownerEmail}`,children:r("other_contact")})]})]}):t.jsx(Se,{})})})})};fe.propTypes={item:v.shape({id:v.string.isRequired,noticeType:v.string.isRequired}).isRequired,toggleModal:v.func,isFavorite:v.bool,isSaving:v.bool,handleAddInFavorite:v.func};const ue=({item:e,handleDeleteNotice:s,onFavoriteChange:a})=>{const[d,y]=c.useState(!1),[n,b]=c.useState(!1),[x,h]=c.useState(!1),[k,S]=c.useState(!1),$=c.useRef(!1),[p,_]=c.useState(e.isFavorite),{user:T,isLoggedIn:j}=E();c.useEffect(()=>{_(j&&e.isFavorite)},[j,e.isFavorite]);const B=()=>{y(g=>!g)},A=()=>{b(!0)},w=()=>{b(!1)},l=()=>{h(!1)},m=async()=>{if(!j){h(!0);return}if(!$.current){$.current=!0,S(!0);try{const g=await Nt(e.id);_(g.data.notice.isFavorite),a==null||a()}catch(g){le(ce(g))}finally{$.current=!1,S(!1)}}};return t.jsxs(t.Fragment,{children:[t.jsxs(ot,{children:[t.jsxs(nt,{children:[t.jsx(it,{src:e.photoURL,alt:e.title,loading:"lazy"}),t.jsxs(st,{children:[t.jsx(rt,{children:r(`category_${e.noticeType}`)}),t.jsxs(at,{children:[t.jsx(ie,{onClick:m,"aria-label":"add to favorites","aria-pressed":p,disabled:k,children:p?t.jsx(u,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(u,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),T.name!==null&&e.isOwn&&t.jsx(ie,{onClick:A,"aria-label":"delete from favorites",children:t.jsx(u,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(lt,{children:[t.jsxs(W,{children:[t.jsx(u,{iconName:"icon-location"}),t.jsx(q,{children:se(e.location)})]}),t.jsxs(W,{children:[t.jsx(u,{iconName:"icon-clock"}),t.jsx(q,{children:se(e.age)})]}),t.jsxs(W,{children:[t.jsx(u,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(q,{children:r(`notices_filterBnt_filters_${e.sex}`)})]})]})]}),t.jsx(ct,{children:e.title}),t.jsx(Ne,{onClick:B,children:r("notice_card_learMore_Btn")}),n&&t.jsx(G,{onClose:w,children:t.jsx(Te,{title:r("notice_card_deleteNotice_Btn"),name:e.title,handleModal:w,handleDelete:()=>s(e.id)})}),d&&t.jsx(fe,{item:e,isFavorite:p,isSaving:k,toggleModal:B,handleAddInFavorite:m})]},e.id),x&&t.jsx(V,{onClose:l})]})};ue.propTypes={props:v.object};const Tt=({notices:e,handleDeleteNotice:s,onFavoriteChange:a})=>t.jsx(t.Fragment,{children:e&&t.jsx(ge,{children:e.map(d=>t.jsx(ue,{item:d,onFavoriteChange:a,handleDeleteNotice:s},d.id))})}),At=o.section`
padding-bottom: 117px;

  @media ${i} {
    padding-bottom: 209px;
  }

  @media ${N} {
    padding-bottom: 112px;
  }
`,It=o.div`
margin-bottom: 24px;

  @media ${i} {
    margin-bottom: 40px;
  }
`,Lt=o.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  margin: 24px 0;

  @media ${i} {
    margin: 43px 0;
  }

  @media ${N} {
      /* flex-wrap: nowrap; */

  }
`;o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  margin-top: 20px;
  position: relative;

  @media ${i} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;const Mt=o.li`
  width: 100%;
  height: 425px;
  padding-bottom: 24px;
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({theme:e})=>e.boxShadow.main};
  @media ${i} {
    width: 336px;
  }

  @media ${N} {
    width: 288px;
  }
`,Dt=o.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme:e})=>e.colors.bgdColorSecond};
  background-position: center;
  background-size: cover;

  max-width: 100%;
  height: 288px;
`,Pt=o(P)`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
  height: 32px;
  border-radius: 0px 16px 16px 0px;
`,Et=o(P)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
`,Rt=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 20px;
`,U=o(P)`
  width: 80px;
  padding: 5;
  border-radius: 16px;
`,Ht=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColorAuth};
  border-radius: 0px 0px 40px 40px;
`,Ot=o(P)`
  margin-top: 20px;

  width: 248px;
  height: 40px;

  border-radius: 10px;
`,Wt=o(P)`
  width: 248px;
  height: 42px;

  border-radius: 40px;
`,qt=({cards:e})=>t.jsx(ge,{children:Array(e).fill(0).map((s,a)=>t.jsxs(Mt,{children:[t.jsxs(Dt,{children:[t.jsx(Pt,{inline:!0}),t.jsx(Et,{}),t.jsxs(Rt,{children:[t.jsx(U,{inline:!0}),t.jsx(U,{inline:!0}),t.jsx(U,{inline:!0})]})]}),t.jsxs(Ht,{children:[t.jsx(Ot,{inline:!0}),t.jsx(Wt,{inline:!0})]})]},a))}),Ut={sell:"sell","lost-found":"lost-or-found","for-free":"in-good-hands",favorite:"favorite",own:"my-ads"},ae=12;function io(){const{t:e}=he(),{pathname:s}=de(),{isLoggedIn:a}=E(),d=Ut[s.split("/").pop()],[y,n]=pe(),b=y.get("search")||"",[x,h]=c.useState(b),[k,S]=c.useState(0),$=Number(y.get("page")),p=Number.isSafeInteger($)&&$>0?$:1,_={...Object.fromEntries(y),category:d,page:p,limit:ae},T=d==="favorite"?Ct:d==="my-ads"?Ft:_t,{data:j,isLoading:B,error:A}=De(T,_,`${k}:${a}`),w=((j==null?void 0:j.data)||[]).map(f=>({...f,noticeType:_e[f.noticeType]||f.noticeType})),l=Math.ceil(((j==null?void 0:j.total)||0)/ae);c.useEffect(()=>h(b),[b]);const m=c.useCallback(f=>{n(H=>{const O=new URLSearchParams(H);return Object.entries(f).forEach(([J,Q])=>Q?O.set(J,Q):O.delete(J)),O})},[n]);c.useEffect(()=>{j&&p>Math.max(1,l)&&m({page:Math.max(1,l)})},[j,p,l,m]);const g=c.useCallback(f=>{m({young:null,middle:null,older:null,sex:null,...f,page:null})},[m]),I=()=>S(f=>f+1),be=async f=>{try{await Bt(f),Fe(e("notice_removed")),w.length===1&&p>1?m({page:p-1}):I()}catch(H){le(ce(H))}};return d?t.jsxs(t.Fragment,{children:[t.jsxs(At,{"aria-busy":B,children:[t.jsx(It,{children:t.jsx(Me,{children:e("notices_title")})}),t.jsx(Ae,{value:x,onChange:h,onSubmit:f=>{f.preventDefault(),m({search:x.trim(),page:null})},onDelete:()=>{h(""),m({search:null,page:null})}}),t.jsxs(Lt,{children:[t.jsx(We,{}),t.jsx(me,{getFilterParams:g})]}),B?t.jsx(qt,{cards:12}):A?t.jsx(xe,{onRetry:I}):t.jsxs(t.Fragment,{children:[t.jsx(Tt,{notices:w,handleDeleteNotice:be,onFavoriteChange:d==="favorite"?I:void 0}),!w.length&&t.jsx(Pe,{}),l>1&&t.jsx(Ie,{pageCount:l,currentPage:p,handlePageChange:f=>{m({page:f.selected+1}),Le()}})]})]}),t.jsx(Ee,{})]}):t.jsx(Be,{to:"/notices/sell",replace:!0})}export{io as default};
