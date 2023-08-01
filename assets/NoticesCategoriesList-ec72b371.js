import{s as o,b as s,P as l,j as t,M as v,T as k,a6 as O,a7 as W,a8 as K,I as c,a9 as V,t as a,a as M,e as f,B as G,x as J,v as A,r as d,u as N,z as Q}from"./index-e14aeea0.js";import{B as X}from"./Btn.styled-82e52ae7.js";import{M as Y}from"./ModalConfirmDelete-69264568.js";const Z=o.div`
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
`,_=({onClose:e})=>t.jsx(v,{onClose:e,children:t.jsxs(Z,{children:[t.jsxs(k,{i18nKey:"modal_attention",children:[t.jsx(ee,{children:"Attention"}),t.jsx(te,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(O,{children:[t.jsxs(W,{to:"/login",children:[t.jsxs(k,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(K,{children:"in"})]}),t.jsx(c,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(V,{to:"/register",children:a("header_nav_signupBtn")})]})]})});_.propTypes={onClose:l.func.isRequired};const oe=o.ul`
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

  border-radius: 0 0 40px 40px;

  box-shadow: ${e=>e.theme.boxShadow.main};
  background-color: ${e=>e.theme.colors.bgdColorAuth};

  @media ${s} {
    width: 336px;
  }

  @media ${M} {
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
  display: flex;
  flex-direction: column;
  gap: 12px;
`,F=o.button`
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

  @media ${M} {
    gap: 12px;
  }
`,b=o.li`
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
`,w=o.span`
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
`,he=e=>e.length>5?e.substring(0,5)+"...":e,L=({children:e,onClick:n})=>t.jsx(X,{type:"button",onClick:n,children:e});L.propTypes={children:l.any.isRequired,onClick:l.func};o.button`
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
`,je=o.tbody`
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
`,T=o.a`
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
`,ze=o(ve)`
  border: 2px solid transparent;
`,Se=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,C=o.a`
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
`;f.defaults.baseURL=G;const Ae=async e=>{try{let n="";for(let r in e)n+=`&${r}=${e[r]}`;const{data:i}=await f.get(`/notices?${n}`);return i}catch(n){console.log(n)}},Fe=async e=>{try{return await f.get(`/notices/${e}`)}catch(n){console.log(n)}},Ne=async e=>{try{const n=await f.delete(`/notices/${e}`);return J("The card was successfully removed"),n}catch(n){console.log(n),A("It is not your pet and you cannot remove it")}},B=async e=>{try{return await f.patch(`/notices/favorites/${e}`)}catch(n){console.log(n)}},_e=async e=>{try{let n="";for(let r in e)n+=`&${r}=${e[r]}`;const{data:i}=await f.get(`/notices/self?${n}`);return i}catch(n){console.log(n)}},Le=async e=>{try{let n="";for(let r in e)n+=`&${r}=${e[r]}`;const{data:i}=await f.get(`/notices/favorites?${n}`);return i}catch(n){console.log(n)}},D=({item:e,toggleModal:n})=>{const[i,r]=d.useState({}),{user:u}=N();let g;d.useEffect(()=>{(async()=>{const h=await Fe(e.id);r(h.data.notice)})()},[e.id]),d.useEffect(()=>{Object.keys(i).length});const y=async()=>{u.name===null&&u.email===null&&A("Sorry, but you are not authorized. Try it!");const h=await B(e.id);r(h.data.notice)};return i.birthday&&(g=i.birthday.split("-").reverse().join(".")),t.jsx(v,{onClose:n,children:t.jsxs(pe,{children:[t.jsxs(xe,{children:[t.jsxs(me,{children:[t.jsx(fe,{src:i.photoURL,alt:"pet",loading:"lazy"}),t.jsx(ge,{children:i.noticeType})]}),t.jsxs(ue,{children:[t.jsx(ye,{children:i.title}),t.jsx($e,{children:t.jsxs(je,{children:[t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_name"),": "]}),t.jsx(m,{children:i.name})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_birthday"),": "]}),t.jsx(m,{children:g})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_type"),": "]}),t.jsx(m,{children:i.petType})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_place"),": "]}),t.jsx(m,{children:i.location})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(m,{children:i.sex})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_mail"),": "]}),t.jsx(m,{children:t.jsx(T,{href:`mailto:${i.ownerEmail}`,children:i.ownerEmail})})]}),t.jsxs(p,{children:[t.jsxs(x,{children:[a("other_phone"),": "]}),t.jsx(m,{children:t.jsx(T,{href:`tel:${i.ownerPhone}`,children:i.ownerPhone})})]})]})})]})]}),t.jsxs(be,{children:[t.jsxs(ke,{children:[a("other_comments"),":"]})," ",i.comments]}),t.jsxs(we,{children:[t.jsxs(ze,{onClick:y,style:{color:i.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:i.isFavorite?"#FEF9F9":"#54ADFF",borderColor:i.isFavorite&&"#54ADFF"},children:[t.jsx(Se,{children:a("notices_cardInfoDetails_addToBtn")}),i.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),i.ownerPhone===void 0?t.jsx(C,{href:`mailto:${i.ownerEmail}`,children:a("other_contact")}):t.jsx(C,{href:`tel:${i.ownerPhone}`,children:a("other_contact")})]})]})})};D.propTypes={item:l.shape({id:l.string.isRequired}).isRequired,toggleModal:l.func};const I=({item:e,handleDeleteNotice:n})=>{const[i,r]=d.useState(!1),[u,g]=d.useState(!1),[y,h]=d.useState(!1),[E,P]=d.useState({}),{user:$}=N(),z=()=>{r(j=>!j)},H=()=>{g(!0)},S=()=>{g(!1)},q=()=>{h(!1)};d.useEffect(()=>{Object.keys(E).length});const U=async()=>{$.name===null&&$.email===null&&h(!0);const j=await B(e.id);P(j.data.notice)};return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsxs(ne,{children:[t.jsx(se,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(re,{children:[t.jsx(ae,{children:e.noticeType}),t.jsxs(le,{children:[t.jsx(F,{onClick:U,"aria-label":"add to favorites",children:e.isFavorite?t.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),$.name!==null&&t.jsx(F,{onClick:H,"aria-label":"delete from favorites",children:t.jsx(c,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(ce,{children:[t.jsxs(b,{children:[t.jsx(c,{iconName:"icon-location"}),t.jsx(w,{children:he(e.location)})]}),t.jsxs(b,{children:[t.jsx(c,{iconName:"icon-clock"}),t.jsx(w,{children:e.age})]}),t.jsxs(b,{children:[t.jsx(c,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(w,{children:e.sex})]})]})]}),t.jsx(de,{children:e.title}),t.jsx(L,{onClick:z,children:"Learn more"}),u&&t.jsx(v,{onClose:S,children:t.jsx(Y,{title:"Delete a notice?",name:e.title,handleModal:S,handleDelete:()=>n(e.id)})}),i&&t.jsx(D,{item:e,toggleModal:z})]},e.id),y&&t.jsx(_,{onClose:q})]})};I.propTypes={props:l.object};const R=({notices:e,handleDeleteNotice:n})=>t.jsx(oe,{children:e&&e.map(i=>t.jsx(I,{item:i,handleDeleteNotice:n},i.id))});R.propTypes={notices:l.arrayOf(Q.shape({id:l.string.isRequired})).isRequired,handleDeleteNotice:l.func};const Be=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{_ as A,R as N,_e as a,Le as b,Be as c,Ne as d,Ae as g};
