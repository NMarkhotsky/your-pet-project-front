import{s as o,b as s,P as d,j as t,M as k,T as M,a7 as q,a8 as U,a9 as O,I as h,aa as W,t as a,a as I,g,B as K,r as c,u as V}from"./index-44b86bba.js";import{B as G}from"./Btn.styled-6645344d.js";import{M as J}from"./ModalConfirmDelete-80c9ce3e.js";const Q=o.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgColor};

  @media ${s} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`,X=o.h3`
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
`,Y=o.p`
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
`,F=({onClose:e})=>t.jsx(k,{onClose:e,children:t.jsxs(Q,{children:[t.jsxs(M,{i18nKey:"modal_attention",children:[t.jsx(X,{children:"Attention"}),t.jsx(Y,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(q,{children:[t.jsxs(U,{to:"/login",children:[t.jsxs(M,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(O,{children:"in"})]}),t.jsx(h,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(W,{to:"/register",children:a("header_nav_signupBtn")})]})]})});F.propTypes={onClose:d.func.isRequired};const Z=o.ul`
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
`,ee=o.li`
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

  @media ${I} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,te=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,oe=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,ne=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,ie=o.p`
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
`,se=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,B=o.button`
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
`,re=o.ul`
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

  @media ${I} {
    gap: 12px;
  }
`,S=o.li`
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
`,z=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};
  text-align: center;
  letter-spacing: 0.48px;
`,ae=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,le=e=>e.length>5?e.substring(0,5)+"...":e,D=({children:e,onClick:n})=>t.jsx(G,{type:"button",onClick:n,children:e});D.propTypes={children:d.any.isRequired,onClick:d.func};o.button`
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
`;const ce=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${s} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,de=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${s} {
    flex-direction: row;
    gap: 24px;
  }
`,he=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${s} {
    height: 298px;
    width: 262px;
  }
`,xe=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,pe=o.span`
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
`,me=o.div`
  @media ${s} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,fe=o.h4`
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
`,ge=o.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${s} {
    width: 340px;
  }
`,ue=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,p=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,m=o.td`
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
`,f=o.td`
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
`,N=o.a`
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
`,ye=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${s} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,$e=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,be=o($e)`
  border: 2px solid transparent;
`,we=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,L=o.a`
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
`,ve=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;g.defaults.baseURL=K;const _e=async e=>{try{let n="";for(let l in e)n+=`&${l}=${e[l]}`;const{data:r}=await g.get(`/notices?${n}`);return r}catch(n){console.log(n)}},Se=async e=>{try{return await g.get(`/notices/${e}`)}catch(n){console.log(n)}},Ae=async e=>{try{return await g.delete(`/notices/${e}`)}catch(n){console.log(n)}},ze=async e=>{try{return await g.patch(`/notices/favorites/${e}`)}catch(n){console.log(n)}},Me=async e=>{try{let n="";for(let l in e)n+=`&${l}=${e[l]}`;const{data:r}=await g.get(`/notices/self?${n}`);return r}catch(n){console.log(n)}},Be=async e=>{try{let n="";for(let l in e)n+=`&${l}=${e[l]}`;const{data:r}=await g.get(`/notices/favorites?${n}`);return r}catch(n){console.log(n)}},R=({item:e,toggleModal:n,isFavorite:r,handleAddInFavorite:l})=>{const[i,y]=c.useState({}),[w,$]=c.useState(!1),v=()=>{$(!1)};let b;return c.useEffect(()=>{(async()=>{const x=await Se(e.id);y({...x.data.notice,noticeType:e.noticeType})})()},[e]),c.useEffect(()=>{Object.keys(i).length}),i.birthday&&(b=i.birthday.split("-").reverse().join(".")),t.jsxs(t.Fragment,{children:[t.jsx(k,{onClose:n,children:t.jsxs(ce,{children:[t.jsxs(de,{children:[t.jsxs(he,{children:[t.jsx(xe,{src:i.photoURL,alt:"pet",loading:"lazy"}),t.jsx(pe,{children:i.noticeType})]}),t.jsxs(me,{children:[t.jsx(fe,{children:i.title}),t.jsx(ge,{children:t.jsxs(ue,{children:[t.jsxs(p,{children:[t.jsxs(m,{children:[a("other_name"),": "]}),t.jsx(f,{children:i.name})]}),t.jsxs(p,{children:[t.jsxs(m,{children:[a("other_birthday"),": "]}),t.jsx(f,{children:b})]}),t.jsxs(p,{children:[t.jsxs(m,{children:[a("other_type"),": "]}),t.jsx(f,{children:i.petType})]}),t.jsxs(p,{children:[t.jsxs(m,{children:[a("other_place"),": "]}),t.jsx(f,{children:i.location})]}),t.jsxs(p,{children:[t.jsxs(m,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(f,{children:i.sex})]}),t.jsxs(p,{children:[t.jsxs(m,{children:[a("other_mail"),": "]}),t.jsx(f,{children:t.jsx(N,{href:`mailto:${i.ownerEmail}`,children:i.ownerEmail})})]}),t.jsxs(p,{children:[t.jsxs(m,{children:[a("other_phone"),": "]}),t.jsx(f,{children:t.jsx(N,{href:`tel:${i.ownerPhone}`,children:i.ownerPhone})})]})]})})]})]}),t.jsxs(je,{children:[t.jsxs(ve,{children:[a("other_comments"),":"]})," ",i.comments]}),t.jsxs(ye,{children:[t.jsxs(be,{onClick:l,style:{color:r?"#54ADFF":"#FEF9F9",backgroundColor:r?"#FEF9F9":"#54ADFF",borderColor:r&&"#54ADFF"},children:[t.jsx(we,{children:r?"Remove from":a("notices_cardInfoDetails_addToBtn")}),r?t.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),i.ownerPhone===void 0?t.jsx(L,{href:`mailto:${i.ownerEmail}`,children:a("other_contact")}):t.jsx(L,{href:`tel:${i.ownerPhone}`,children:a("other_contact")})]})]})}),w&&t.jsx(F,{onClose:v})]})};R.propTypes={item:d.shape({id:d.string.isRequired,noticeType:d.string.isRequired}).isRequired,toggleModal:d.func,isFavorite:d.bool,handleAddInFavorite:d.func};const E=({item:e,handleDeleteNotice:n})=>{const[r,l]=c.useState(!1),[i,y]=c.useState(!1),[w,$]=c.useState(!1),[v,b]=c.useState({}),[x,T]=c.useState(e.isFavorite),{user:u}=V();c.useEffect(()=>{!u.name&&!u.email&&T(!1)},[u]);const C=()=>{l(j=>!j)},P=()=>{y(!0)},_=()=>{y(!1)},H=()=>{$(!1)};c.useEffect(()=>{Object.keys(v).length});const A=async()=>{try{if(u.name===null&&u.email===null)$(!0);else{const j=await ze(e.id,{isFavorite:!x});b(j.data.notice),T(!x)}}catch(j){console.error(j)}};return t.jsxs(t.Fragment,{children:[t.jsxs(ee,{children:[t.jsxs(te,{children:[t.jsx(oe,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(ne,{children:[t.jsx(ie,{children:e.noticeType}),t.jsxs(se,{children:[t.jsx(B,{onClick:A,"aria-label":"add to favorites",children:x?t.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),u.name!==null&&e.isOwn&&t.jsx(B,{onClick:P,"aria-label":"delete from favorites",children:t.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(re,{children:[t.jsxs(S,{children:[t.jsx(h,{iconName:"icon-location"}),t.jsx(z,{children:le(e.location)})]}),t.jsxs(S,{children:[t.jsx(h,{iconName:"icon-clock"}),t.jsx(z,{children:e.age})]}),t.jsxs(S,{children:[t.jsx(h,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(z,{children:e.sex})]})]})]}),t.jsx(ae,{children:e.title}),t.jsx(D,{onClick:C,children:a("notice_card_learMore_Btn")}),i&&t.jsx(k,{onClose:_,children:t.jsx(J,{title:a("notice_card_deleteNotice_Btn"),name:e.title,handleModal:_,handleDelete:()=>n(e.id)})}),r&&t.jsx(R,{item:e,isFavorite:x,toggleModal:C,handleAddInFavorite:A})]},e.id),w&&t.jsx(F,{onClose:H})]})};E.propTypes={props:d.object};const ke=({notices:e,handleDeleteNotice:n})=>t.jsx(t.Fragment,{children:e&&t.jsx(Z,{children:e.map(r=>t.jsx(E,{item:r,handleDeleteNotice:n},r.id))})}),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{F as A,ke as N,Me as a,Be as b,Se as c,Ae as d,Ne as e,_e as g};
