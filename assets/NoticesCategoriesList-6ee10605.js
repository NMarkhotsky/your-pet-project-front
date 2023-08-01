import{s as o,b as r,a as v,P as l,j as t,d as x,B as L,r as u,u as k,M as _,t as a,I as p,v as A,G as I}from"./index-cb6ef55e.js";import{B as P}from"./Btn.styled-4996d0cb.js";import{P as R}from"./Pagination-fcd4046a.js";const D=o.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  width: 100%;
  margin-bottom: 60px;

  gap: 24px;

  @media ${r} {
    flex-direction: row;
    flex-wrap: wrap;

    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`,H=o.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;
  /* min-height: 456px; */

  border-radius: 0 0 40px 40px;

  box-shadow: ${e=>e.theme.boxShadow.main};
  background-color: ${e=>e.theme.colors.bgdColorAuth};

  @media ${r} {
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
`,M=o.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,E=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,q=o.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,U=o.p`
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
`,O=o.div`
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
`,G=o.ul`
  position: absolute;
  bottom: 12px;
  right: 8px;
  left: 8px;

  display: flex;
  justify-content: space-between;
  gap: 12px;

  padding: 0;

  @media ${r} {
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
`,V=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,W=e=>e.length>5?e.substring(0,5)+"...":e,z=({children:e,onClick:n})=>t.jsx(P,{type:"button",onClick:n,children:e});z.propTypes={children:l.any.isRequired,onClick:l.func};o.button`
  position: absolute;
  right: 12px;
  top: 12px;

  width: 24px;
  height: 24px;

  padding: 0;

  line-height: 0;

  border: none;

  background: transparent;

  @media ${r} {
    right: 24px;
    top: 24px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`;const J=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${r} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,K=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${r} {
    flex-direction: row;
    gap: 24px;
  }
`,Q=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${r} {
    height: 298px;
    width: 262px;
  }
`,X=o.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,Y=o.span`
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
`,Z=o.div`
  @media ${r} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,ee=o.h4`
  width: 198px;

  margin-bottom: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  letter-spacing: -0.01em;
  line-height: 33px;

  color: ${e=>e.theme.colors.text};

  @media ${r} {
    width: 321px;

    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 38px;
  }
`,te=o.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${r} {
    width: 340px;
  }
`,oe=o.tbody`
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

  @media ${r} {
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

  @media ${r} {
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
`,ie=o.p`
  margin-bottom: 12px;
  word-wrap: break-word;

  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  letter-spacing: 0.04em;
  line-height: 19px;

  overflow: hidden;
  text-overflow: ellipsis;

  @media ${r} {
    margin-bottom: 70px;

    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 24px;
  }
`,ne=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${r} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,se=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;
`,re=o(se)`
  border: 2px solid transparent;
`,ae=o.span`
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

  @media ${r} {
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
`,le=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;x.defaults.baseURL=L;const me=async e=>{try{let n="";for(let s in e)n+=`&${s}=${e[s]}`;const{data:i}=await x.get(`/notices?${n}`);return i}catch(n){console.log(n)}},ce=async e=>{try{return await x.get(`/notices/${e}`)}catch(n){console.log(n)}},de=async e=>{try{return await x.patch(`/notices/favorites/${e}`)}catch(n){console.log(n)}},fe=async e=>{try{let n="";for(let s in e)n+=`&${s}=${e[s]}`;const{data:i}=await x.get(`/notices/self?${n}`);return i}catch(n){console.log(n)}},ge=async e=>{try{let n="";for(let s in e)n+=`&${s}=${e[s]}`;const{data:i}=await x.get(`/notices/self?${n}`);return i}catch(n){console.log(n)}},F=({item:e,toggleModal:n})=>{const[i,s]=u.useState({}),{user:m}=k();let f;const C=async g=>{const N=await ce(g);s(N.data.notice)};u.useEffect(()=>{C(e.id)},[e.id]),u.useEffect(()=>{Object.keys(i).length});const B=async()=>{m.name===null&&m.email===null&&A("Sorry, but you are not authorized. Try it!");const g=await de(e.id);s(g.data.notice)};return i.birthday&&(f=i.birthday.split("-").reverse().join(".")),t.jsx(_,{onClose:n,children:t.jsxs(J,{children:[t.jsxs(K,{children:[t.jsxs(Q,{children:[t.jsx(X,{src:i.photoURL,alt:"pet",loading:"lazy"}),t.jsx(Y,{children:i.noticeType})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Cute dog looking for a home"}),t.jsx(te,{children:t.jsxs(oe,{children:[t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_name"),": "]}),t.jsx(h,{children:i.name})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_birthday"),": "]}),t.jsx(h,{children:f})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_type"),": "]}),t.jsx(h,{children:i.petType})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_place"),": "]}),t.jsx(h,{children:i.location})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("notices_cardInfoDetails_theSex"),": "]}),t.jsx(h,{children:e.sex})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_mail"),": "]}),t.jsx(h,{children:t.jsx(j,{href:`mailto:${i.ownerEmail}`,children:i.ownerEmail})})]}),t.jsxs(c,{children:[t.jsxs(d,{children:[a("other_phone"),": "]}),t.jsx(h,{children:t.jsx(j,{href:`tel:${i.ownerPhone}`,children:i.ownerPhone})})]})]})})]})]}),t.jsxs(ie,{children:[t.jsxs(le,{children:[a("other_comments"),":"]})," ",i.comments]}),t.jsxs(ne,{children:[t.jsxs(re,{style:{color:i.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:i.isFavorite?"#FEF9F9":"#54ADFF",borderColor:i.isFavorite&&"#54ADFF"},children:[t.jsx(ae,{onClick:B,children:a("notices_cardInfoDetails_addToBtn")}),i.isFavorite?t.jsx(p,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(p,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),i.ownerPhone===void 0?t.jsx(w,{href:`mailto:${i.ownerEmail}`,children:a("other_contact")}):t.jsx(w,{href:`tel:${i.ownerPhone}`,children:a("other_contact")})]})]})})};F.propTypes={toggleModal:l.func};const S=({item:e})=>{const[n,i]=u.useState(!1),{user:s}=k();console.log("user -->",s),console.log("item-->",e);const m=()=>{i(f=>!f)};return t.jsxs(t.Fragment,{children:[t.jsxs(H,{children:[t.jsxs(M,{children:[t.jsx(E,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(q,{children:[t.jsx(U,{children:e.noticeType}),t.jsxs(O,{children:[t.jsx(y,{"aria-label":"add to favorites",children:t.jsx(p,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),s.name!==null&&t.jsx(y,{"aria-label":"delete from favorites",children:t.jsx(p,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(G,{children:[t.jsxs(b,{children:[t.jsx(p,{iconName:"icon-location"}),t.jsx($,{children:W(e.location)})]}),t.jsxs(b,{children:[t.jsx(p,{iconName:"icon-clock"}),t.jsx($,{children:e.age})]}),t.jsxs(b,{children:[t.jsx(p,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx($,{children:e.sex})]})]})]}),t.jsx(V,{children:e.title}),t.jsx(z,{onClick:m,children:"Learn more"})]},e.id),n&&t.jsx(F,{item:e,toggleModal:m})]})};S.propTypes={props:l.object};const T=({notices:e,pageCount:n,handlePageChange:i})=>t.jsxs(D,{children:[e&&e.map(s=>t.jsx(S,{item:s},s.id)),t.jsx(R,{pageCount:n,handlePageChange:i})]});T.propTypes={notices:l.arrayOf(I.shape({id:l.string.isRequired})).isRequired,pageCount:l.number.isRequired,handlePageChange:l.func.isRequired};const ue=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{T as N,fe as a,ge as b,ue as c,me as g};
