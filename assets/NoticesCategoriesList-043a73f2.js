import{s as o,b as s,P as l,j as t,M as z,T as C,a6 as U,a7 as O,a8 as W,I as c,a9 as K,t as r,a as N,g as f,B as V,r as d,u as B,z as G}from"./index-bb383ab6.js";import{B as J}from"./Btn.styled-c91af844.js";import{M as Q}from"./ModalConfirmDelete-c1af8f01.js";import{N as X}from"./NoInfoPart-c242ae6b.js";const Y=o.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgColor};

  @media ${s} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`,Z=o.h3`
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
`,ee=o.p`
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
`,k=({onClose:e})=>t.jsx(z,{onClose:e,children:t.jsxs(Y,{children:[t.jsxs(C,{i18nKey:"modal_attention",children:[t.jsx(Z,{children:"Attention"}),t.jsx(ee,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(U,{children:[t.jsxs(O,{to:"/login",children:[t.jsxs(C,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(W,{children:"in"})]}),t.jsx(c,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(K,{to:"/register",children:r("header_nav_signupBtn")})]})]})});k.propTypes={onClose:l.func.isRequired};const te=o.ul`
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
`,oe=o.li`
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

  @media ${N} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,ne=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,ie=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,se=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,re=o.p`
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
`,ae=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_=o.button`
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
`,le=o.ul`
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

  @media ${N} {
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
`,ce=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,de=e=>e.length>5?e.substring(0,5)+"...":e,L=({children:e,onClick:i})=>t.jsx(J,{type:"button",onClick:i,children:e});L.propTypes={children:l.any.isRequired,onClick:l.func};o.button`
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
`;const he=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${s} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,pe=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${s} {
    flex-direction: row;
    gap: 24px;
  }
`,xe=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${s} {
    height: 298px;
    width: 262px;
  }
`,me=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,fe=o.span`
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
`,ge=o.div`
  @media ${s} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,ue=o.h4`
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
`,ye=o.tbody`
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
`,$e=o.p`
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
`,be=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${s} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,we=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,ve=o(we)`
  border: 2px solid transparent;
`,Se=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,M=o.a`
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
`,ze=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;f.defaults.baseURL=V;const Ae=async e=>{try{let i="";for(let a in e)i+=`&${a}=${e[a]}`;const{data:n}=await f.get(`/notices?${i}`);return n}catch(i){console.log(i)}},ke=async e=>{try{return await f.get(`/notices/${e}`)}catch(i){console.log(i)}},Me=async e=>{try{return await f.delete(`/notices/${e}`)}catch(i){console.log(i)}},D=async e=>{try{return await f.patch(`/notices/favorites/${e}`)}catch(i){console.log(i)}},Ne=async e=>{try{let i="";for(let a in e)i+=`&${a}=${e[a]}`;const{data:n}=await f.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},Be=async e=>{try{let i="";for(let a in e)i+=`&${a}=${e[a]}`;const{data:n}=await f.get(`/notices/favorites?${i}`);return n}catch(i){console.log(i)}},I=({item:e,toggleModal:i})=>{const[n,a]=d.useState({}),[$,g]=d.useState(!1),{user:u}=B(),j=()=>{g(!1)};let y;d.useEffect(()=>{(async()=>{const h=await ke(e.id);a({...h.data.notice,noticeType:e.noticeType})})()},[e]),d.useEffect(()=>{Object.keys(n).length});const b=async()=>{u.name===null&&u.email===null&&g(!0);const h=await D(e.id);a(h.data.notice)};return n.birthday&&(y=n.birthday.split("-").reverse().join(".")),t.jsxs(t.Fragment,{children:[t.jsx(z,{onClose:i,children:t.jsxs(he,{children:[t.jsxs(pe,{children:[t.jsxs(xe,{children:[t.jsx(me,{src:n.photoURL,alt:"pet",loading:"lazy"}),t.jsx(fe,{children:n.noticeType})]}),t.jsxs(ge,{children:[t.jsx(ue,{children:n.title}),t.jsx(je,{children:t.jsxs(ye,{children:[t.jsxs(p,{children:[t.jsxs(x,{children:[r("other_name"),": "]}),t.jsx(m,{children:n.name})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[r("other_birthday"),": "]}),t.jsx(m,{children:y})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[r("other_type"),": "]}),t.jsx(m,{children:n.petType})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[r("other_place"),": "]}),t.jsx(m,{children:n.location})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[r("notices_cardInfoDetails_theSex"),": "]}),t.jsx(m,{children:n.sex})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[r("other_mail"),": "]}),t.jsx(m,{children:t.jsx(A,{href:`mailto:${n.ownerEmail}`,children:n.ownerEmail})})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[r("other_phone"),": "]}),t.jsx(m,{children:t.jsx(A,{href:`tel:${n.ownerPhone}`,children:n.ownerPhone})})]})]})})]})]}),t.jsxs($e,{children:[t.jsxs(ze,{children:[r("other_comments"),":"]})," ",n.comments]}),t.jsxs(be,{children:[t.jsxs(ve,{onClick:b,style:{color:n.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:n.isFavorite?"#FEF9F9":"#54ADFF",borderColor:n.isFavorite&&"#54ADFF"},children:[t.jsx(Se,{children:r("notices_cardInfoDetails_addToBtn")}),n.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),n.ownerPhone===void 0?t.jsx(M,{href:`mailto:${n.ownerEmail}`,children:r("other_contact")}):t.jsx(M,{href:`tel:${n.ownerPhone}`,children:r("other_contact")})]})]})}),$&&t.jsx(k,{onClose:j})]})};I.propTypes={item:l.shape({id:l.string.isRequired,noticeType:l.string.isRequired}).isRequired,toggleModal:l.func};const R=({item:e,handleDeleteNotice:i})=>{const[n,a]=d.useState(!1),[$,g]=d.useState(!1),[u,j]=d.useState(!1),[y,b]=d.useState({}),{user:h}=B(),F=()=>{a(w=>!w)},E=()=>{g(!0)},T=()=>{g(!1)},q=()=>{j(!1)};d.useEffect(()=>{Object.keys(y).length});const H=async()=>{console.log("Click"),h.name===null&&h.email===null&&j(!0);const w=await D(e.id);b(w.data.notice)};return t.jsxs(t.Fragment,{children:[t.jsxs(oe,{children:[t.jsxs(ne,{children:[t.jsx(ie,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(se,{children:[t.jsx(re,{children:e.noticeType}),t.jsxs(ae,{children:[t.jsx(_,{onClick:H,"aria-label":"add to favorites",children:e.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),h.name!==null&&t.jsx(_,{onClick:E,"aria-label":"delete from favorites",children:t.jsx(c,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(le,{children:[t.jsxs(v,{children:[t.jsx(c,{iconName:"icon-location"}),t.jsx(S,{children:de(e.location)})]}),t.jsxs(v,{children:[t.jsx(c,{iconName:"icon-clock"}),t.jsx(S,{children:e.age})]}),t.jsxs(v,{children:[t.jsx(c,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(S,{children:e.sex})]})]})]}),t.jsx(ce,{children:e.title}),t.jsx(L,{onClick:F,children:r("notice_card_learMore_Btn")}),$&&t.jsx(z,{onClose:T,children:t.jsx(Q,{title:r("notice_card_deleteNotice_Btn"),name:e.title,handleModal:T,handleDelete:()=>i(e.id)})}),n&&t.jsx(I,{item:e,toggleModal:F})]},e.id),u&&t.jsx(k,{onClose:q})]})};R.propTypes={props:l.object};const P=({notices:e,handleDeleteNotice:i})=>t.jsx(t.Fragment,{children:e.length>0?t.jsx(te,{children:e.map(n=>t.jsx(R,{item:n,handleDeleteNotice:i},n.id))}):t.jsx(X,{})});P.propTypes={notices:l.arrayOf(G.shape({id:l.string.isRequired})).isRequired,handleDeleteNotice:l.func};const Le=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{k as A,P as N,Ne as a,Be as b,ke as c,Me as d,Le as e,Ae as g};
