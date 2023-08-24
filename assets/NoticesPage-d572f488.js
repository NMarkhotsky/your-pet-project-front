import{s as o,b as d,a as F,N as J,P as V,u as P,c as K,j as t,r as c,t as g,I as y,L as Q,C as X,O as Y,e as Z,d as ee}from"./index-95ff7c19.js";import{A as te,L as oe,g as ne,a as se,b as ie,N as re,c as ae,d as le}from"./NoticesCategoriesList-3581d694.js";import{s as ce,S as de,P as pe,N as xe}from"./NoInfoPart-18653022.js";import{T as ge}from"./TitlePage-36465f7e.js";import{S as ue}from"./ScrollToTopButton-76c052e3.js";import{B as C}from"./BaseSkeleton.styled-c684b783.js";import"./Btn.styled-78a96bc0.js";import"./ModalConfirmDelete-b785e5e8.js";let k=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((l,r)=>(r&=63,r<36?l+=r.toString(36):r<62?l+=(r-26).toString(36).toUpperCase():r>62?l+="-":l+="_",l),"");const he=[{id:k(),to:"/notices/sell",text:"sell",name:"sell"},{id:k(),to:"/notices/lost-found",text:"lost or found",name:"lost-or-found"},{id:k(),to:"/notices/for-free",text:"in good hands",name:"in-good-hands"}],me=[{id:k(),to:"/notices/favorite",text:"favorite ads",name:"favorite"},{id:k(),to:"/notices/own",text:"my ads",name:"my-ads"}],fe=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${d} {
    gap: 12px;
  }

  @media ${F} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`,O=o.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media ${d} {
    gap: 12px;
  }
`,M=o(J)`
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
`,q=({getCategoryParams:e})=>{const{isLoggedIn:l}=P(),{search:r}=K();return t.jsxs(fe,{children:[t.jsx(O,{children:he.map(({to:h,text:a,id:p,name:m})=>t.jsx("li",{children:t.jsx(M,{to:{pathname:h,search:r},onClick:()=>e(m),children:a})},p))}),l&&t.jsx(O,{children:me.map(({to:h,text:a,id:p,name:m})=>t.jsx("li",{children:t.jsx(M,{to:{pathname:h,search:r},onClick:()=>e(m),children:a})},p))})]})};q.propTypes={getCategoryParams:V.func.isRequired};const be=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${d}{
    flex-direction: row;
    gap: 12px;
    
  }
`,ye=o.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${d} {
    position: static;
  }
`,je=o.button`
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

  @media ${d} {
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
`,ve=o.div`
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
`,$e=o.span`
  display: none;

  @media ${d} {
    display: block;
  }
`;o.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;const we=o.div`
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
  @media ${d} {
    margin-top: 20px;
  }
`,ke=o.p`
  margin-bottom: 8px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({theme:e})=>e.colors.blue};
`,H=o.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: all ${({theme:e})=>e.transitionHover};
`,R=o.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.colors.blueLight};
  transition: ${({theme:e})=>e.transitionHover};
`,W=o.span`
  font-family: ${e=>e.theme.fonts.secondary.regular};

  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({theme:e})=>e.colors.blue};
`,G=o.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=o.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${e=>e.theme.fonts.secondary.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({theme:e})=>e.colors.blue};
`,w=o.input`
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
`,Ce=o.button`
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
  @media ${d} {
    padding: 8px 20px;
  }
`,Se=o.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`,U=({getFilterParams:e})=>{const[l,r]=c.useState(!1),[h,a]=c.useState(!1),[p,m]=c.useState(!1),[i,j]=c.useState([]),[S,_]=c.useState(!1),{user:f}=P(),N=()=>{f.name===null&&f.email===null&&_(!0)},v=()=>{_(!1)};c.useEffect(()=>{const s={younger:!1,middle:!1,older:!1,sex:null};i.includes("0-12 m")?s.young=!0:s.young=!1,i.includes("1 year")?s.middle=!0:s.middle=!1,i.includes("2 years +")?s.older=!0:s.older=!1,i.includes("male")&&i.includes("female")?s.sex=null:i.includes("male")?s.sex="male":i.includes("female")?s.sex="female":s.sex=null,Object.keys(s).forEach(u=>{(s[u]===!1||s[u]===null)&&delete s[u]}),e(s)},[i]);const B=()=>{r(s=>!s)},A=()=>{a(s=>!s)},L=()=>{m(s=>!s)},b=s=>{i.includes(s.target.value)?j(u=>u.filter(n=>n!==s.target.value)):j(u=>[...u,s.target.value])};return t.jsxs(be,{children:[t.jsxs(ye,{children:[t.jsxs(je,{onClick:B,type:"button","aria-label":"toggle filters",children:[t.jsx($e,{children:g("notices_filterBnt")}),t.jsx(ve,{children:t.jsx(y,{iconName:"icon-filters-3",stroke:"#FDF7F2"})})]}),l&&t.jsx(we,{children:t.jsxs("div",{children:[t.jsx(ke,{children:g("notices_filterBnt_filters")}),t.jsxs(H,{children:[t.jsxs(R,{type:"button",onClick:A,"aria-label":"toggle age options",children:[h?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(W,{children:g("notices_filterBnt_filters_byAge")})]}),h&&t.jsxs(G,{children:[t.jsxs($,{children:[t.jsx(w,{onChange:b,type:"checkbox",name:"age",value:"0-12 m",checked:i.includes("0-12 m")}),g("notices_filterBnt_filters_byAge_lt1")]}),t.jsxs($,{children:[t.jsx(w,{onChange:b,type:"checkbox",name:"age",value:"1 year",checked:i.includes("1 year")}),g("notices_filterBnt_filters_byAge_gt1")]}),t.jsxs($,{children:[t.jsx(w,{onChange:b,type:"checkbox",name:"age",value:"2 years +",checked:i.includes("2 years +")}),g("notices_filterBnt_filters_byAge_gt2")]})]})]}),t.jsxs(H,{children:[t.jsxs(R,{type:"button",onClick:L,"aria-label":"toggle gender options",children:[p?t.jsx(y,{iconName:"icon-chevron-down",stroke:"#54ADFF"}):t.jsx(y,{iconName:"icon-chevron-up",stroke:"#54ADFF"}),t.jsx(W,{children:g("notices_filterBnt_filters_byGender")})]}),p&&t.jsxs(G,{children:[t.jsxs($,{children:[t.jsx(w,{onChange:b,type:"checkbox",name:"gender",value:"male",checked:i.includes("male")}),g("notices_filterBnt_filters_male")]}),t.jsxs($,{children:[t.jsx(w,{onChange:b,type:"checkbox",name:"gender",value:"female",checked:i.includes("female")}),g("notices_filterBnt_filters_female")]})]})]})]})})]}),t.jsx(Q,{to:f.email!==null&&"/add-pet",onClick:N,children:t.jsxs(Ce,{type:"button",children:[t.jsx(Se,{children:g("user_mypets_addBtn")}),t.jsx(y,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})}),S&&t.jsx(te,{onClose:v})]})};U.propTypes={getFilterParams:V.func.isRequired};const _e=o.section`
padding-bottom: 117px;

  @media ${d} {
    padding-bottom: 209px;
  }

  @media ${F} {
    padding-bottom: 112px;
  }
`,Fe=o.div`
margin-bottom: 24px;

  @media ${d} {
    margin-bottom: 40px;
  }
`,Ne=o.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  margin: 24px 0;

  @media ${d} {
    margin: 43px 0;
  }

  @media ${F} {
      /* flex-wrap: nowrap; */

  }
`;o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  margin-top: 20px;
  position: relative;

  @media ${d} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;const Be=o.li`
  width: 100%;
  height: 425px;
  padding-bottom: 24px;
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({theme:e})=>e.boxShadow.main};
  @media ${d} {
    width: 336px;
  }

  @media ${F} {
    width: 288px;
  }
`,Ae=o.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme:e})=>e.colors.bgdColorSecond};
  background-position: center;
  background-size: cover;

  max-width: 100%;
  height: 288px;
`,Le=o(C)`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
  height: 32px;
  border-radius: 0px 16px 16px 0px;
`,ze=o(C)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
`,Ie=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 20px;
`,T=o(C)`
  width: 80px;
  padding: 5;
  border-radius: 16px;
`,Te=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColorAuth};
  border-radius: 0px 0px 40px 40px;
`,Pe=o(C)`
  margin-top: 20px;

  width: 248px;
  height: 40px;

  border-radius: 10px;
`,De=o(C)`
  width: 248px;
  height: 42px;

  border-radius: 40px;
`,Ee=({cards:e})=>t.jsx(oe,{children:Array(e).fill(0).map((l,r)=>t.jsxs(Be,{children:[t.jsxs(Ae,{children:[t.jsx(Le,{inline:!0}),t.jsx(ze,{}),t.jsxs(Ie,{children:[t.jsx(T,{inline:!0}),t.jsx(T,{inline:!0}),t.jsx(T,{inline:!0})]})]}),t.jsxs(Te,{children:[t.jsx(Pe,{inline:!0}),t.jsx(De,{inline:!0})]})]},r))});function Ue(){const[e,l]=c.useState([]),[r,h]=c.useState(""),[a,p]=c.useState({category:"sell",page:1,search:""}),[m,i]=c.useState(0),[j,S]=c.useState(!1),{user:_}=P(),f=12,N=async n=>{if((await ae(n)).data.notice.ownerEmail!==_.email){Z("It is not your pet and you cannot remove it");return}await le(n),ee("The card was successfully removed"),l(z=>z.filter(I=>I.id!==n))};c.useEffect(()=>{(async()=>{try{if(S(!0),!a.category||a.category==="sell"||a.category==="in-good-hands"||a.category==="lost-or-found"){const n=await ne(a);return i(Math.ceil(n.total/f)),l(v(n))}if(a.category==="my-ads"){const n=await se(a);return i(Math.ceil(n.total/f)),l(v(n))}if(a.category==="favorite"){const n=await ie(a);return i(Math.ceil(n.total/f)),l(v(n))}}catch(n){console.log(n)}finally{S(!1)}})()},[a]);const v=n=>n.data.map(x=>({...x,noticeType:X[x.noticeType]||x.noticeType})),B=n=>{n.preventDefault(),p(x=>({...x,search:r,page:1})),i(1)},A=()=>{h(""),p(n=>({...n,search:"",page:1}))},L=n=>{h(n)},b=n=>{p(x=>({...x,category:n,page:1})),i(1)},s=n=>{i(1),p(x=>{const{category:z,search:I}=x,D={};return Object.keys(n).forEach(E=>{D[E]=n[E]}),{category:z,page:1,search:I,...D}})},u=c.useCallback(n=>{p(x=>({...x,page:n.selected+1})),ce()},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(_e,{children:[t.jsx(Fe,{children:t.jsx(ge,{children:g("notices_title")})}),t.jsx(de,{onSubmit:B,onChange:L,onDelete:A,value:r}),t.jsxs(Ne,{children:[t.jsx(q,{getCategoryParams:b}),t.jsx(U,{getFilterParams:s})]}),j?t.jsx(Ee,{cards:12}):t.jsx(re,{notices:e,pageCount:m,handlePageChange:u,handleDeleteNotice:N}),m>1&&t.jsx(pe,{pageCount:m,handlePageChange:u}),e.length===0&&!j&&t.jsx(xe,{})]}),t.jsx(ue,{}),t.jsx(Y,{})]})}export{Ue as default};
