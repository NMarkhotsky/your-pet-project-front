import{s as o,b as s,P as d,j as t,M as z,T as F,a6 as V,a7 as G,a8 as J,I as l,a9 as Q,t as a,a as A,e as y,B as X,r as c,u as _,v as B,x as Y,z as Z}from"./index-5cba7e78.js";import{B as ee}from"./Btn.styled-81d9a298.js";import{M as te}from"./ModalConfirmDelete-979cf19c.js";const oe=o.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgColor};

  @media ${s} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`,ie=o.h3`
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
`,ne=o.p`
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
`,N=({onClose:e})=>t.jsx(z,{onClose:e,children:t.jsxs(oe,{children:[t.jsxs(F,{i18nKey:"modal_attention",children:[t.jsx(ie,{children:"Attention"}),t.jsx(ne,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(V,{children:[t.jsxs(G,{to:"/login",children:[t.jsxs(F,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(J,{children:"in"})]}),t.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(Q,{to:"/register",children:a("header_nav_signupBtn")})]})]})});N.propTypes={onClose:d.func.isRequired};const se=o.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  /* justify-content: flex-start; */

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
`,re=o.li`
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

  @media ${A} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,ae=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,le=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,ce=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,de=o.p`
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
`,he=o.div`
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
`,pe=o.ul`
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

  @media ${A} {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,w=o.li`
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
`,v=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};

  letter-spacing: 0.48px;
`,xe=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,me=e=>e.length>5?e.substring(0,5)+"...":e,L=({children:e,onClick:i})=>t.jsx(ee,{type:"button",onClick:i,children:e});L.propTypes={children:d.any.isRequired,onClick:d.func};o.button`
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
`;const fe=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${s} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,ge=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${s} {
    flex-direction: row;
    gap: 24px;
  }
`,ue=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${s} {
    height: 298px;
    width: 262px;
  }
`,ye=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,$e=o.span`
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
`,be=o.div`
  @media ${s} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,je=o.h4`
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
`,we=o.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${s} {
    width: 340px;
  }
`,ve=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,f=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,g=o.td`
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
`,u=o.td`
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
`,C=o.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,ze=o.p`
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
`,Se=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${s} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,ke=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,Fe=o(ke)`
  border: 2px solid transparent;
`,Te=o.span`
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
`,Ce=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;y.defaults.baseURL=X;const Ne=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await y.get(`/notices?${i}`);return n}catch(i){console.log(i)}},I=async e=>{try{return await y.get(`/notices/${e}`)}catch(i){console.log(i)}},Me=async e=>{try{return await y.delete(`/notices/${e}`)}catch(i){console.log(i)}},D=async e=>{try{return await y.patch(`/notices/favorites/${e}`)}catch(i){console.log(i)}},Le=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await y.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},Ie=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await y.get(`/notices/favorites?${i}`);return n}catch(i){console.log(i)}},E=({item:e,toggleModal:i})=>{const[n,r]=c.useState({}),{user:$}=_();let b;const j=async h=>{const x=await I(h);r(x.data.notice)};c.useEffect(()=>{j(e.id)},[e.id]),c.useEffect(()=>{Object.keys(n).length});const p=async()=>{$.name===null&&$.email===null&&B("Sorry, but you are not authorized. Try it!");const h=await D(e.id);r(h.data.notice)};return n.birthday&&(b=n.birthday.split("-").reverse().join(".")),t.jsx(z,{onClose:i,children:t.jsxs(fe,{children:[t.jsxs(ge,{children:[t.jsxs(ue,{children:[t.jsx(ye,{src:n.photoURL,alt:"pet",loading:"lazy"}),t.jsx($e,{children:n.noticeType})]}),t.jsxs(be,{children:[t.jsx(je,{children:n.title}),t.jsx(we,{children:t.jsxs(ve,{children:[t.jsxs(f,{children:[t.jsxs(g,{children:[a("other_name"),": "]}),t.jsx(u,{children:n.name})]}),t.jsxs(f,{children:[t.jsxs(g,{children:[a("other_birthday"),": "]}),t.jsx(u,{children:b})]}),t.jsxs(f,{children:[t.jsxs(g,{children:[a("other_type"),": "]}),t.jsx(u,{children:n.petType})]}),t.jsxs(f,{children:[t.jsxs(g,{children:[a("other_place"),": "]}),t.jsx(u,{children:n.location})]}),t.jsxs(f,{children:[t.jsxs(g,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(u,{children:e.sex})]}),t.jsxs(f,{children:[t.jsxs(g,{children:[a("other_mail"),": "]}),t.jsx(u,{children:t.jsx(C,{href:`mailto:${n.ownerEmail}`,children:n.ownerEmail})})]}),t.jsxs(f,{children:[t.jsxs(g,{children:[a("other_phone"),": "]}),t.jsx(u,{children:t.jsx(C,{href:`tel:${n.ownerPhone}`,children:n.ownerPhone})})]})]})})]})]}),t.jsxs(ze,{children:[t.jsxs(Ce,{children:[a("other_comments"),":"]})," ",n.comments]}),t.jsxs(Se,{children:[t.jsxs(Fe,{style:{color:n.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:n.isFavorite?"#FEF9F9":"#54ADFF",borderColor:n.isFavorite&&"#54ADFF"},children:[t.jsx(Te,{onClick:p,children:a("notices_cardInfoDetails_addToBtn")}),n.isFavorite?t.jsx(l,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),n.ownerPhone===void 0?t.jsx(M,{href:`mailto:${n.ownerEmail}`,children:a("other_contact")}):t.jsx(M,{href:`tel:${n.ownerPhone}`,children:a("other_contact")})]})]})})};E.propTypes={item:d.shape({id:d.string.isRequired}).isRequired,toggleModal:d.func};const R=({item:e})=>{const[i,n]=c.useState(!1),[r,$]=c.useState(!1),[b,j]=c.useState(!1),[p,h]=c.useState({}),{user:x}=_();console.log("user -->",x);const S=()=>{n(m=>!m)},H=()=>{$(!0)},k=()=>{$(!1)},q=()=>{j(!1)},U=async m=>{const K=await I(m);h(K.data.notice)};c.useEffect(()=>{U(e.id)},[e.id]),c.useEffect(()=>{Object.keys(p).length});const O=async()=>{x.name===null&&x.email===null&&j(!0);const m=await D(e.id);h(m.data.notice)},W=async m=>{x.email===p.ownerEmail?($(!1),await Me(m),h({}),Y("The card was successfully removed")):B("It is not your pet and you cannot remove it")};return t.jsxs(t.Fragment,{children:[t.jsxs(re,{children:[t.jsxs(ae,{children:[t.jsx(le,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(ce,{children:[t.jsx(de,{children:e.noticeType}),t.jsxs(he,{children:[t.jsx(T,{onClick:O,"aria-label":"add to favorites",children:p.isFavorite?t.jsx(l,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),x.name!==null&&t.jsx(T,{onClick:H,"aria-label":"delete from favorites",children:t.jsx(l,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(pe,{children:[t.jsxs(w,{children:[t.jsx(l,{iconName:"icon-location"}),t.jsx(v,{children:me(e.location)})]}),t.jsxs(w,{children:[t.jsx(l,{iconName:"icon-clock"}),t.jsx(v,{children:e.age})]}),t.jsxs(w,{children:[t.jsx(l,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(v,{children:e.sex})]})]})]}),t.jsx(xe,{children:e.title}),t.jsx(L,{onClick:S,children:"Learn more"}),r&&t.jsx("div",{children:t.jsx(z,{onClose:k,children:t.jsx(te,{title:"Delete a notice?",name:p.name,handleModal:k,handleDelete:()=>W(p._id)})})})]},e.id),i&&t.jsx(E,{item:e,toggleModal:S}),b&&t.jsx("div",{children:t.jsx(N,{onClose:q})})]})};R.propTypes={props:d.object};const P=({notices:e})=>t.jsx(se,{children:e&&e.map(i=>t.jsx(R,{item:i},i.id))});P.propTypes={notices:d.arrayOf(Z.shape({id:d.string.isRequired})).isRequired};const De=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{N as A,P as N,Le as a,Ie as b,De as c,Ne as g};
