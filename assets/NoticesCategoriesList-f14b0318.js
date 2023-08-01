import{s as o,b as s,a as B,P as d,j as t,e as u,B as V,r as l,u as _,M as S,t as a,I as c,v as G,T as C,a6 as J,a7 as Q,a8 as X,a9 as Y,z as Z}from"./index-4f3331d1.js";import{B as ee}from"./Btn.styled-1dd174cd.js";import{M as te}from"./ModalConfirmDelete-4992c979.js";const oe=o.ul`
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
`,ie=o.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;
  /* min-height: 456px; */

  border-radius: 0 0 40px 40px;

  box-shadow: ${e=>e.theme.boxShadow.main};
  background-color: ${e=>e.theme.colors.bgdColorAuth};

  @media ${s} {
    width: 336px;
  }

  @media ${B} {
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
  /* display: block; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`,T=o.button`
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
  right: 8px;
  left: 8px;

  display: flex;
  justify-content: space-between;
  gap: 12px;

  padding: 0;

  @media ${s} {
    left: 24px;
    right: 24px;

    gap: 24px;
  }

  @media ${B} {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,v=o.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 80px;
  height: 28px;
  padding: 0 5px;

  border-radius: 16px;

  background-color: ${e=>e.theme.colors.blueLight};
  color: ${e=>e.theme.colors.black};
  stroke: ${e=>e.theme.colors.blue};

  cursor: pointer;

  transition: ${({theme:e})=>e.transitionHover};

  /* &:hover {
    background-color: ${e=>e.theme.colors.blue};
    color: ${e=>e.theme.colors.white};
    transition: ${({theme:e})=>e.transitionHover};
  }

  &:hover > svg {
    stroke: ${e=>e.theme.colors.white};
    transition: ${({theme:e})=>e.transitionHover};
  } */
`,z=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};

  letter-spacing: 0.48px;
`,de=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,he=e=>e.length>5?e.substring(0,5)+"...":e,L=({children:e,onClick:i})=>t.jsx(ee,{type:"button",onClick:i,children:e});L.propTypes={children:d.any.isRequired,onClick:d.func};o.button`
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
`,$e=o.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${s} {
    width: 340px;
  }
`,be=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,m=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,f=o.td`
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
`,g=o.td`
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
`,M=o.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,je=o.p`
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
`,ze=o(ve)`
  border: 2px solid transparent;
`,Se=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,A=o.a`
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
`;u.defaults.baseURL=V;const Le=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await u.get(`/notices?${i}`);return n}catch(i){console.log(i)}},N=async e=>{try{return await u.get(`/notices/${e}`)}catch(i){console.log(i)}},Fe=async e=>{try{return await u.delete(`/notices/${e}`)}catch(i){console.log(i)}},D=async e=>{try{return await u.patch(`/notices/favorites/${e}`)}catch(i){console.log(i)}},Ne=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await u.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},De=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await u.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},I=({item:e,toggleModal:i})=>{const[n,r]=l.useState({}),{user:$}=_();let b;const j=async h=>{const x=await N(h);r(x.data.notice)};l.useEffect(()=>{j(e.id)},[e.id]),l.useEffect(()=>{Object.keys(n).length});const y=async()=>{$.name===null&&$.email===null&&G("Sorry, but you are not authorized. Try it!");const h=await D(e.id);r(h.data.notice)};return n.birthday&&(b=n.birthday.split("-").reverse().join(".")),t.jsx(S,{onClose:i,children:t.jsxs(pe,{children:[t.jsxs(xe,{children:[t.jsxs(me,{children:[t.jsx(fe,{src:n.photoURL,alt:"pet",loading:"lazy"}),t.jsx(ge,{children:n.noticeType})]}),t.jsxs(ue,{children:[t.jsx(ye,{children:n.title}),t.jsx($e,{children:t.jsxs(be,{children:[t.jsxs(m,{children:[t.jsxs(f,{children:[a("other_name"),": "]}),t.jsx(g,{children:n.name})]}),t.jsxs(m,{children:[t.jsxs(f,{children:[a("other_birthday"),": "]}),t.jsx(g,{children:b})]}),t.jsxs(m,{children:[t.jsxs(f,{children:[a("other_type"),": "]}),t.jsx(g,{children:n.petType})]}),t.jsxs(m,{children:[t.jsxs(f,{children:[a("other_place"),": "]}),t.jsx(g,{children:n.location})]}),t.jsxs(m,{children:[t.jsxs(f,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(g,{children:e.sex})]}),t.jsxs(m,{children:[t.jsxs(f,{children:[a("other_mail"),": "]}),t.jsx(g,{children:t.jsx(M,{href:`mailto:${n.ownerEmail}`,children:n.ownerEmail})})]}),t.jsxs(m,{children:[t.jsxs(f,{children:[a("other_phone"),": "]}),t.jsx(g,{children:t.jsx(M,{href:`tel:${n.ownerPhone}`,children:n.ownerPhone})})]})]})})]})]}),t.jsxs(je,{children:[t.jsxs(ke,{children:[a("other_comments"),":"]})," ",n.comments]}),t.jsxs(we,{children:[t.jsxs(ze,{style:{color:n.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:n.isFavorite?"#FEF9F9":"#54ADFF",borderColor:n.isFavorite&&"#54ADFF"},children:[t.jsx(Se,{onClick:y,children:a("notices_cardInfoDetails_addToBtn")}),n.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),n.ownerPhone===void 0?t.jsx(A,{href:`mailto:${n.ownerEmail}`,children:a("other_contact")}):t.jsx(A,{href:`tel:${n.ownerPhone}`,children:a("other_contact")})]})]})})};I.propTypes={item:d.shape({id:d.string.isRequired}).isRequired,toggleModal:d.func};const Ce=o.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgColor};

  @media ${s} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`,Te=o.h3`
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
`,Me=o.p`
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
`,E=({onClose:e})=>t.jsx(S,{onClose:e,children:t.jsxs(Ce,{children:[t.jsxs(C,{i18nKey:"modal_attention",children:[t.jsx(Te,{children:"Attention"}),t.jsx(Me,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(J,{children:[t.jsxs(Q,{to:"/login",children:[t.jsxs(C,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(X,{children:"in"})]}),t.jsx(c,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(Y,{to:"/register",children:a("header_nav_signupBtn")})]})]})});E.propTypes={onClose:d.func.isRequired};const R=({item:e})=>{const[i,n]=l.useState(!1),[r,$]=l.useState(!1),[b,j]=l.useState(!1),[y,h]=l.useState({}),{user:x}=_();console.log("user -->",x);const k=()=>{n(p=>!p)},H=()=>{$(!0)},F=()=>{$(!1)},q=()=>{j(!1)},U=async p=>{const w=await N(p);h(w.data.notice)};l.useEffect(()=>{U(e.id)},[e.id]),l.useEffect(()=>{Object.keys(y).length});const O=async()=>{x.name===null&&x.email===null&&j(!0),console.log("item -->",e);const p=await D(e.id);h(p.data.notice)},W=async p=>{console.log("card ==>",y),x.email===y.ownerEmail&&(await Fe(p),h(w=>w.filter(K=>K.id!==p)))};return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsxs(ne,{children:[t.jsx(se,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(re,{children:[t.jsx(ae,{children:e.noticeType}),t.jsxs(le,{children:[t.jsx(T,{onClick:O,"aria-label":"add to favorites",children:y.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),x.name!==null&&t.jsx(T,{onClick:H,"aria-label":"delete from favorites",children:t.jsx(c,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(ce,{children:[t.jsxs(v,{children:[t.jsx(c,{iconName:"icon-location"}),t.jsx(z,{children:he(e.location)})]}),t.jsxs(v,{children:[t.jsx(c,{iconName:"icon-clock"}),t.jsx(z,{children:e.age})]}),t.jsxs(v,{children:[t.jsx(c,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(z,{children:e.sex})]})]})]}),t.jsx(de,{children:e.title}),t.jsx(L,{onClick:k,children:"Learn more"}),r&&t.jsx("div",{children:t.jsx(S,{onClose:F,children:t.jsx(te,{title:"Delete a notice?",name:e.title,handleModal:F,handleDelete:()=>W(e.id)})})})]},e.id),i&&t.jsx(I,{item:e,toggleModal:k}),b&&t.jsx("div",{children:t.jsx(E,{onClose:q})})]})};R.propTypes={props:d.object};const P=({notices:e})=>t.jsx(oe,{children:e&&e.map(i=>t.jsx(R,{item:i},i.id))});P.propTypes={notices:d.arrayOf(Z.shape({id:d.string.isRequired})).isRequired};const Ie=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P as N,Ne as a,De as b,Ie as c,Le as g};
