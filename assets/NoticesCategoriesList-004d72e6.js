import{s as o,b as s,a as v,P as l,j as t,e as x,B as L,r as u,u as k,M as _,t as a,I as p,v as A,G as I}from"./index-776af8de.js";import{B as P}from"./Btn.styled-ef5eb0a1.js";const R=o.ul`
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
`,D=o.li`
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

  @media ${v} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,H=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,M=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,E=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,q=o.p`
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
`,U=o.div`
  /* display: block; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=o.button`
  display: flex;
  align-items: center;
  justify-content: center;

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
`,O=o.ul`
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

  @media ${v} {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,b=o.li`
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

  &:hover {
    background-color: ${e=>e.theme.colors.blue};
    color: ${e=>e.theme.colors.white};
    transition: ${({theme:e})=>e.transitionHover};
  }

  &:hover > svg {
    stroke: ${e=>e.theme.colors.white};
    transition: ${({theme:e})=>e.transitionHover};
  }
`,$=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};

  letter-spacing: 0.48px;
`,G=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,V=e=>e.length>5?e.substring(0,5)+"...":e,z=({children:e,onClick:i})=>t.jsx(P,{type:"button",onClick:i,children:e});z.propTypes={children:l.any.isRequired,onClick:l.func};o.button`
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
`;const W=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${s} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,J=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${s} {
    flex-direction: row;
    gap: 24px;
  }
`,K=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${s} {
    height: 298px;
    width: 262px;
  }
`,Q=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,X=o.span`
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
`,Y=o.div`
  @media ${s} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,Z=o.h4`
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
`,ee=o.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${s} {
    width: 340px;
  }
`,te=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,c=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,d=o.td`
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
`,h=o.td`
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
`,j=o.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,oe=o.p`
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
`,ie=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${s} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,ne=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,se=o(ne)`
  border: 2px solid transparent;
`,re=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,w=o.a`
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
`,ae=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;x.defaults.baseURL=L;const pe=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await x.get(`/notices?${i}`);return n}catch(i){console.log(i)}},le=async e=>{try{return await x.get(`/notices/${e}`)}catch(i){console.log(i)}},ce=async e=>{try{return await x.patch(`/notices/favorites/${e}`)}catch(i){console.log(i)}},xe=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await x.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},me=async e=>{try{let i="";for(let r in e)i+=`&${r}=${e[r]}`;const{data:n}=await x.get(`/notices/self?${i}`);return n}catch(i){console.log(i)}},F=({item:e,toggleModal:i})=>{const[n,r]=u.useState({}),{user:m}=k();let f;const C=async g=>{const N=await le(g);r(N.data.notice)};u.useEffect(()=>{C(e.id)},[e.id]),u.useEffect(()=>{Object.keys(n).length});const B=async()=>{m.name===null&&m.email===null&&A("Sorry, but you are not authorized. Try it!");const g=await ce(e.id);r(g.data.notice)};return n.birthday&&(f=n.birthday.split("-").reverse().join(".")),t.jsx(_,{onClose:i,children:t.jsxs(W,{children:[t.jsxs(J,{children:[t.jsxs(K,{children:[t.jsx(Q,{src:n.photoURL,alt:"pet",loading:"lazy"}),t.jsx(X,{children:n.noticeType})]}),t.jsxs(Y,{children:[t.jsx(Z,{children:n.title}),t.jsx(ee,{children:t.jsxs(te,{children:[t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_name"),": "]}),t.jsx(h,{children:n.name})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_birthday"),": "]}),t.jsx(h,{children:f})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_type"),": "]}),t.jsx(h,{children:n.petType})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_place"),": "]}),t.jsx(h,{children:n.location})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(h,{children:e.sex})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_mail"),": "]}),t.jsx(h,{children:t.jsx(j,{href:`mailto:${n.ownerEmail}`,children:n.ownerEmail})})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_phone"),": "]}),t.jsx(h,{children:t.jsx(j,{href:`tel:${n.ownerPhone}`,children:n.ownerPhone})})]})]})})]})]}),t.jsxs(oe,{children:[t.jsxs(ae,{children:[a("other_comments"),":"]})," ",n.comments]}),t.jsxs(ie,{children:[t.jsxs(se,{style:{color:n.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:n.isFavorite?"#FEF9F9":"#54ADFF",borderColor:n.isFavorite&&"#54ADFF"},children:[t.jsx(re,{onClick:B,children:a("notices_cardInfoDetails_addToBtn")}),n.isFavorite?t.jsx(p,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(p,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),n.ownerPhone===void 0?t.jsx(w,{href:`mailto:${n.ownerEmail}`,children:a("other_contact")}):t.jsx(w,{href:`tel:${n.ownerPhone}`,children:a("other_contact")})]})]})})};F.propTypes={item:l.shape({id:l.string.isRequired}).isRequired,toggleModal:l.func};const S=({item:e})=>{const[i,n]=u.useState(!1),{user:r}=k();console.log("user -->",r),console.log("item-->",e);const m=()=>{n(f=>!f)};return t.jsxs(t.Fragment,{children:[t.jsxs(D,{children:[t.jsxs(H,{children:[t.jsx(M,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(E,{children:[t.jsx(q,{children:e.noticeType}),t.jsxs(U,{children:[t.jsx(y,{"aria-label":"add to favorites",children:t.jsx(p,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),r.name!==null&&t.jsx(y,{"aria-label":"delete from favorites",children:t.jsx(p,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(O,{children:[t.jsxs(b,{children:[t.jsx(p,{iconName:"icon-location"}),t.jsx($,{children:V(e.location)})]}),t.jsxs(b,{children:[t.jsx(p,{iconName:"icon-clock"}),t.jsx($,{children:e.age})]}),t.jsxs(b,{children:[t.jsx(p,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx($,{children:e.sex})]})]})]}),t.jsx(G,{children:e.title}),t.jsx(z,{onClick:m,children:"Learn more"})]},e.id),i&&t.jsx(F,{item:e,toggleModal:m})]})};S.propTypes={props:l.object};const T=({notices:e})=>t.jsx(R,{children:e&&e.map(i=>t.jsx(S,{item:i},i.id))});T.propTypes={notices:l.arrayOf(I.shape({id:l.string.isRequired})).isRequired};const fe=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{T as N,xe as a,me as b,fe as c,pe as g};
