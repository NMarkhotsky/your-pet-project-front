import{s as o,b as s,P as l,j as t,M as z,T as C,a6 as U,a7 as O,a8 as W,I as c,a9 as K,t as a,a as _,e as f,B as V,x as G,v as J,r as d,u as L,z as Q}from"./index-980b7c2e.js";import{B as X}from"./Btn.styled-4918f02d.js";import{M as Y}from"./ModalConfirmDelete-bba2ffd2.js";const Z=o.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgColor};

  @media ${s} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`,ee=o.h3`
  margin-bottom: 20px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${s} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,te=o.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.56px;
  color: ${({theme:e})=>e.colors.text};

  @media ${s} {
    font-size: ${e=>e.theme.fontSizes.lg};
    letter-spacing: 0.8px;
    line-height: 28px;
  }
`,k=({onClose:e})=>t.jsx(z,{onClose:e,children:t.jsxs(Z,{children:[t.jsxs(C,{i18nKey:"modal_attention",children:[t.jsx(ee,{children:"Attention"}),t.jsx(te,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(U,{children:[t.jsxs(O,{to:"/login",children:[t.jsxs(C,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(W,{children:"in"})]}),t.jsx(c,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(K,{to:"/register",children:a("header_nav_signupBtn")})]})]})});k.propTypes={onClose:l.func.isRequired};const oe=o.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  width: 100%;
  margin-bottom: 60px;

  gap: 24px;

  @media ${s} {
    flex-direction: row;
    flex-wrap: wrap;

    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`,ne=o.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;

  border-radius: 0 0 40px 40px;

  box-shadow: ${e=>e.theme.boxShadow.main};
  background-color: ${e=>e.theme.colors.bgdColorAuth};

  @media ${s} {
    width: 336px;
  }

  @media ${_} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,ie=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,se=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,re=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,ae=o.p`
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
`,le=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,M=o.button`
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
`,ce=o.ul`
  position: absolute;
  bottom: 12px;

  width: 100%;
  margin: 0 auto;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  gap: 12px;

  padding: 0;

  @media ${s} {
    gap: 24px;
  }

  @media ${_} {
    gap: 12px;
  }
`,v=o.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  max-width: 100%;
  height: 28px;
  padding: 5px 5px;

  border-radius: 16px;

  background-color: ${e=>e.theme.colors.blueLight};
  color: ${e=>e.theme.colors.black};
  stroke: ${e=>e.theme.colors.blue};

  cursor: pointer;

  transition: ${({theme:e})=>e.transitionHover};
`,S=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};
  text-align: center;
  letter-spacing: 0.48px;
`,de=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,he=e=>e.length>5?e.substring(0,5)+"...":e,B=({children:e,onClick:i})=>t.jsx(X,{type:"button",onClick:i,children:e});B.propTypes={children:l.any.isRequired,onClick:l.func};o.button`
  position: absolute;
  right: 12px;
  top: 12px;

  width: 24px;
  height: 24px;

  padding: 0;

  line-height: 0;

  border: none;

  background: transparent;

  @media ${s} {
    right: 24px;
    top: 24px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`;const pe=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${s} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,xe=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${s} {
    flex-direction: row;
    gap: 24px;
  }
`,me=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${s} {
    height: 298px;
    width: 262px;
  }
`,fe=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,ge=o.span`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
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
`,ue=o.div`
  @media ${s} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,ye=o.h4`
  width: 198px;

  margin-bottom: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  letter-spacing: -0.01em;
  line-height: 33px;

  color: ${e=>e.theme.colors.text};

  @media ${s} {
    width: 321px;

    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 38px;
  }
`,je=o.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${s} {
    width: 340px;
  }
`,$e=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,p=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,x=o.td`
  display: table-cell;
  width: 80px;

  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 19px;
  vertical-align: inherit;

  color: ${e=>e.theme.colors.text};

  @media ${s} {
    width: 120px;

    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,m=o.td`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 16px;

  color: ${e=>e.theme.colors.text};

  @media ${s} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,A=o.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,be=o.p`
  margin-bottom: 12px;
  word-wrap: break-word;

  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  letter-spacing: 0.04em;
  line-height: 19px;

  overflow: hidden;
  text-overflow: ellipsis;

  @media ${s} {
    margin-bottom: 70px;

    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 24px;
  }
`,we=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${s} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,ve=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,Se=o(ve)`
  border: 2px solid transparent;
`,ze=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,N=o.a`
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

  @media ${s} {
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
`,ke=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;f.defaults.baseURL=V;const Ae=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await f.get(`/notices?${i}`);return n}catch(i){console.log(i)}},Fe=async e=>{try{return await f.get(`/notices/${e}`)}catch(i){console.log(i)}},Ne=async e=>{try{const i=await f.delete(`/notices/${e}`);return G("The card was successfully removed"),i}catch(i){console.log(i),J("It is not your pet and you cannot remove it")}},D=async e=>{try{return await f.patch(`/notices/favorites/${e}`)}catch(i){console.log(i)}},_e=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await f.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},Le=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await f.get(`/notices/favorites?${i}`);return n}catch(i){console.log(i)}},I=({item:e,toggleModal:i})=>{const[n,r]=d.useState({}),[$,g]=d.useState(!1),{user:u}=L(),y=()=>{g(!1)};let j;d.useEffect(()=>{(async()=>{const h=await Fe(e.id);r(h.data.notice)})()},[e.id]),d.useEffect(()=>{Object.keys(n).length});const b=async()=>{u.name===null&&u.email===null&&g(!0);const h=await D(e.id);r(h.data.notice)};return n.birthday&&(j=n.birthday.split("-").reverse().join(".")),t.jsxs(t.Fragment,{children:[t.jsx(z,{onClose:i,children:t.jsxs(pe,{children:[t.jsxs(xe,{children:[t.jsxs(me,{children:[t.jsx(fe,{src:n.photoURL,alt:"pet",loading:"lazy"}),t.jsx(ge,{children:n.noticeType})]}),t.jsxs(ue,{children:[t.jsx(ye,{children:n.title}),t.jsx(je,{children:t.jsxs($e,{children:[t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_name"),": "]}),t.jsx(m,{children:n.name})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_birthday"),": "]}),t.jsx(m,{children:j})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_type"),": "]}),t.jsx(m,{children:n.petType})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_place"),": "]}),t.jsx(m,{children:n.location})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(m,{children:n.sex})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_mail"),": "]}),t.jsx(m,{children:t.jsx(A,{href:`mailto:${n.ownerEmail}`,children:n.ownerEmail})})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_phone"),": "]}),t.jsx(m,{children:t.jsx(A,{href:`tel:${n.ownerPhone}`,children:n.ownerPhone})})]})]})})]})]}),t.jsxs(be,{children:[t.jsxs(ke,{children:[a("other_comments"),":"]})," ",n.comments]}),t.jsxs(we,{children:[t.jsxs(Se,{onClick:b,style:{color:n.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:n.isFavorite?"#FEF9F9":"#54ADFF",borderColor:n.isFavorite&&"#54ADFF"},children:[t.jsx(ze,{children:a("notices_cardInfoDetails_addToBtn")}),n.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),n.ownerPhone===void 0?t.jsx(N,{href:`mailto:${n.ownerEmail}`,children:a("other_contact")}):t.jsx(N,{href:`tel:${n.ownerPhone}`,children:a("other_contact")})]})]})}),$&&t.jsx(k,{onClose:y})]})};I.propTypes={item:l.shape({id:l.string.isRequired}).isRequired,toggleModal:l.func};const R=({item:e,handleDeleteNotice:i})=>{const[n,r]=d.useState(!1),[$,g]=d.useState(!1),[u,y]=d.useState(!1),[j,b]=d.useState({}),{user:h}=L(),F=()=>{r(w=>!w)},P=()=>{g(!0)},T=()=>{g(!1)},H=()=>{y(!1)};d.useEffect(()=>{Object.keys(j).length});const q=async()=>{h.name===null&&h.email===null&&y(!0);const w=await D(e.id);b(w.data.notice)};return t.jsxs(t.Fragment,{children:[t.jsxs(ne,{children:[t.jsxs(ie,{children:[t.jsx(se,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(re,{children:[t.jsx(ae,{children:e.noticeType}),t.jsxs(le,{children:[t.jsx(M,{onClick:q,"aria-label":"add to favorites",children:e.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),h.name!==null&&t.jsx(M,{onClick:P,"aria-label":"delete from favorites",children:t.jsx(c,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(ce,{children:[t.jsxs(v,{children:[t.jsx(c,{iconName:"icon-location"}),t.jsx(S,{children:he(e.location)})]}),t.jsxs(v,{children:[t.jsx(c,{iconName:"icon-clock"}),t.jsx(S,{children:e.age})]}),t.jsxs(v,{children:[t.jsx(c,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(S,{children:e.sex})]})]})]}),t.jsx(de,{children:e.title}),t.jsx(B,{onClick:F,children:"Learn more"}),$&&t.jsx(z,{onClose:T,children:t.jsx(Y,{title:"Delete a notice?",name:e.title,handleModal:T,handleDelete:()=>i(e.id)})}),n&&t.jsx(I,{item:e,toggleModal:F})]},e.id),u&&t.jsx(k,{onClose:H})]})};R.propTypes={props:l.object};const E=({notices:e,handleDeleteNotice:i})=>t.jsx(oe,{children:e&&e.map(n=>t.jsx(R,{item:n,handleDeleteNotice:i},n.id))});E.propTypes={notices:l.arrayOf(Q.shape({id:l.string.isRequired})).isRequired,handleDeleteNotice:l.func};const Be=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{k as A,E as N,_e as a,Le as b,Be as c,Ne as d,Ae as g};
