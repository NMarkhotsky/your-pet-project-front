import{s as o,b as s,P as l,j as t,M as k,T as M,a6 as U,a7 as O,a8 as W,I as h,a9 as K,t as a,a as I,g,B as V,r as d,u as G,z as J}from"./index-f6808489.js";import{B as Q}from"./Btn.styled-c4ac1c21.js";import{M as X}from"./ModalConfirmDelete-d46e7025.js";import{N as Y}from"./NoInfoPart-34979aa7.js";const Z=o.div`
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
`,F=({onClose:e})=>t.jsx(k,{onClose:e,children:t.jsxs(Z,{children:[t.jsxs(M,{i18nKey:"modal_attention",children:[t.jsx(ee,{children:"Attention"}),t.jsx(te,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]}),t.jsxs(U,{children:[t.jsxs(O,{to:"/login",children:[t.jsxs(M,{i18nKey:"header_nav_loginBtn",children:["Log ",t.jsx(W,{children:"in"})]}),t.jsx(h,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]}),t.jsx(K,{to:"/register",children:a("header_nav_signupBtn")})]})]})});F.propTypes={onClose:l.func.isRequired};const oe=o.ul`
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

  @media ${I} {
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
`,N=o.button`
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
`,de=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,he=e=>e.length>5?e.substring(0,5)+"...":e,D=({children:e,onClick:n})=>t.jsx(Q,{type:"button",onClick:n,children:e});D.propTypes={children:l.any.isRequired,onClick:l.func};o.button`
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
`,ye=o.table`
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
`,x=o.tr`
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
`,B=o.a`
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
`,ke=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;g.defaults.baseURL=V;const Ne=async e=>{try{let n="";for(let c in e)n+=`&${c}=${e[c]}`;const{data:r}=await g.get(`/notices?${n}`);return r}catch(n){console.log(n)}},Fe=async e=>{try{return await g.get(`/notices/${e}`)}catch(n){console.log(n)}},Be=async e=>{try{return await g.delete(`/notices/${e}`)}catch(n){console.log(n)}},Te=async e=>{try{return await g.patch(`/notices/favorites/${e}`)}catch(n){console.log(n)}},Le=async e=>{try{let n="";for(let c in e)n+=`&${c}=${e[c]}`;const{data:r}=await g.get(`/notices/self?${n}`);return r}catch(n){console.log(n)}},Ie=async e=>{try{let n="";for(let c in e)n+=`&${c}=${e[c]}`;const{data:r}=await g.get(`/notices/favorites?${n}`);return r}catch(n){console.log(n)}},R=({item:e,toggleModal:n,isFavorite:r,handleAddInFavorite:c})=>{const[i,y]=d.useState({}),[w,$]=d.useState(!1),v=()=>{$(!1)};let b;return d.useEffect(()=>{(async()=>{const p=await Fe(e.id);y({...p.data.notice,noticeType:e.noticeType})})()},[e]),d.useEffect(()=>{Object.keys(i).length}),i.birthday&&(b=i.birthday.split("-").reverse().join(".")),t.jsxs(t.Fragment,{children:[t.jsx(k,{onClose:n,children:t.jsxs(pe,{children:[t.jsxs(xe,{children:[t.jsxs(me,{children:[t.jsx(fe,{src:i.photoURL,alt:"pet",loading:"lazy"}),t.jsx(ge,{children:i.noticeType})]}),t.jsxs(ue,{children:[t.jsx(je,{children:i.title}),t.jsx(ye,{children:t.jsxs($e,{children:[t.jsxs(x,{children:[t.jsxs(m,{children:[a("other_name"),": "]}),t.jsx(f,{children:i.name})]}),t.jsxs(x,{children:[t.jsxs(m,{children:[a("other_birthday"),": "]}),t.jsx(f,{children:b})]}),t.jsxs(x,{children:[t.jsxs(m,{children:[a("other_type"),": "]}),t.jsx(f,{children:i.petType})]}),t.jsxs(x,{children:[t.jsxs(m,{children:[a("other_place"),": "]}),t.jsx(f,{children:i.location})]}),t.jsxs(x,{children:[t.jsxs(m,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(f,{children:i.sex})]}),t.jsxs(x,{children:[t.jsxs(m,{children:[a("other_mail"),": "]}),t.jsx(f,{children:t.jsx(B,{href:`mailto:${i.ownerEmail}`,children:i.ownerEmail})})]}),t.jsxs(x,{children:[t.jsxs(m,{children:[a("other_phone"),": "]}),t.jsx(f,{children:t.jsx(B,{href:`tel:${i.ownerPhone}`,children:i.ownerPhone})})]})]})})]})]}),t.jsxs(be,{children:[t.jsxs(ke,{children:[a("other_comments"),":"]})," ",i.comments]}),t.jsxs(we,{children:[t.jsxs(Se,{onClick:c,style:{color:r?"#54ADFF":"#FEF9F9",backgroundColor:r?"#FEF9F9":"#54ADFF",borderColor:r&&"#54ADFF"},children:[t.jsx(ze,{children:r?"Remove from":a("notices_cardInfoDetails_addToBtn")}),r?t.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),i.ownerPhone===void 0?t.jsx(L,{href:`mailto:${i.ownerEmail}`,children:a("other_contact")}):t.jsx(L,{href:`tel:${i.ownerPhone}`,children:a("other_contact")})]})]})}),w&&t.jsx(F,{onClose:v})]})};R.propTypes={item:l.shape({id:l.string.isRequired,noticeType:l.string.isRequired}).isRequired,toggleModal:l.func,isFavorite:l.bool,handleAddInFavorite:l.func};const E=({item:e,handleDeleteNotice:n})=>{const[r,c]=d.useState(!1),[i,y]=d.useState(!1),[w,$]=d.useState(!1),[v,b]=d.useState({}),[p,T]=d.useState(e.isFavorite),{user:u}=G();d.useEffect(()=>{!u.name&&!u.email&&T(!1)},[u]);const C=()=>{c(j=>!j)},q=()=>{y(!0)},_=()=>{y(!1)},H=()=>{$(!1)};d.useEffect(()=>{Object.keys(v).length});const A=async()=>{try{if(u.name===null&&u.email===null)$(!0);else{const j=await Te(e.id,{isFavorite:!p});b(j.data.notice),T(!p)}}catch(j){console.error(j)}};return console.log("item ===>",e),t.jsxs(t.Fragment,{children:[t.jsxs(ne,{children:[t.jsxs(ie,{children:[t.jsx(se,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(re,{children:[t.jsx(ae,{children:e.noticeType}),t.jsxs(le,{children:[t.jsx(N,{onClick:A,"aria-label":"add to favorites",children:p?t.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),u.name!==null&&e.isOwn&&t.jsx(N,{onClick:q,"aria-label":"delete from favorites",children:t.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(ce,{children:[t.jsxs(S,{children:[t.jsx(h,{iconName:"icon-location"}),t.jsx(z,{children:he(e.location)})]}),t.jsxs(S,{children:[t.jsx(h,{iconName:"icon-clock"}),t.jsx(z,{children:e.age})]}),t.jsxs(S,{children:[t.jsx(h,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(z,{children:e.sex})]})]})]}),t.jsx(de,{children:e.title}),t.jsx(D,{onClick:C,children:a("notice_card_learMore_Btn")}),i&&t.jsx(k,{onClose:_,children:t.jsx(X,{title:a("notice_card_deleteNotice_Btn"),name:e.title,handleModal:_,handleDelete:()=>n(e.id)})}),r&&t.jsx(R,{item:e,isFavorite:p,toggleModal:C,handleAddInFavorite:A})]},e.id),w&&t.jsx(F,{onClose:H})]})};E.propTypes={props:l.object};const P=({notices:e,handleDeleteNotice:n})=>t.jsx(t.Fragment,{children:e.length>0?t.jsx(oe,{children:e.map(r=>t.jsx(E,{item:r,handleDeleteNotice:n},r.id))}):t.jsx(Y,{})});P.propTypes={notices:l.arrayOf(J.shape({id:l.string.isRequired})).isRequired,handleDeleteNotice:l.func};const De=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{F as A,P as N,Le as a,Ie as b,Fe as c,Be as d,De as e,Ne as g};
