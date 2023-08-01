import{s as o,b as r,a as w,P as a,j as t,d as p,B,r as g,u as v,M as A,I as h,v as L,G as P}from"./index-5a5d7908.js";import{B as I}from"./Btn.styled-be740b35.js";import{P as R}from"./Pagination-e68d0478.js";const E=o.ul`
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

  @media ${w} {
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
`,D=o.img`
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
`,_=o.div`
  /* display: block; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$=o.button`
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

  @media ${r} {
    left: 24px;
    right: 24px;

    gap: 24px;
  }

  @media ${w} {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,u=o.li`
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
`,b=o.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};

  letter-spacing: 0.48px;
`,G=o.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,V=e=>e.length>5?e.substring(0,5)+"...":e,k=({children:e,onClick:n})=>t.jsx(I,{type:"button",onClick:n,children:e});k.propTypes={children:a.any.isRequired,onClick:a.func};o.button`
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
`;const W=o.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${r} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,J=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${r} {
    flex-direction: row;
    gap: 24px;
  }
`,K=o.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${r} {
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
  @media ${r} {
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

  @media ${r} {
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

  @media ${r} {
    width: 340px;
  }
`,te=o.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,l=o.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,c=o.td`
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
`,d=o.td`
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
`,y=o.a`
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

  @media ${r} {
    margin-bottom: 70px;

    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 24px;
  }
`,ie=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${r} {
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
`,j=o.a`
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
`,ae=o.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;p.defaults.baseURL=B;const xe=async e=>{try{let n="";for(let s in e)n+=`&${s}=${e[s]}`;const{data:i}=await p.get(`/notices?${n}`);return i}catch(n){console.log(n)}},le=async e=>{try{return await p.get(`/notices/${e}`)}catch(n){console.log(n)}},ce=async e=>{try{return await p.patch(`/notices/favorites/${e}`)}catch(n){console.log(n)}},me=async e=>{try{let n="";for(let s in e)n+=`&${s}=${e[s]}`;const{data:i}=await p.get(`/notices/self?${n}`);return i}catch(n){console.log(n)}},fe=async e=>{try{let n="";for(let s in e)n+=`&${s}=${e[s]}`;const{data:i}=await p.get(`/notices/self?${n}`);return i}catch(n){console.log(n)}},z=({item:e,toggleModal:n})=>{const[i,s]=g.useState({}),{user:x}=v();let m;const C=async f=>{const N=await le(f);s(N.data.notice)};g.useEffect(()=>{C(e.id)},[e.id]),g.useEffect(()=>{Object.keys(i).length});const T=async()=>{x.name===null&&x.email===null&&L("Sorry, but you are not authorized. Try it!");const f=await ce(e.id);s(f.data.notice)};return i.birthday&&(m=i.birthday.split("-").reverse().join(".")),t.jsx(A,{onClose:n,children:t.jsxs(W,{children:[t.jsxs(J,{children:[t.jsxs(K,{children:[t.jsx(Q,{src:i.photoURL,alt:"pet",loading:"lazy"}),t.jsx(X,{children:i.noticeType})]}),t.jsxs(Y,{children:[t.jsx(Z,{children:"Cute dog looking for a home"}),t.jsx(ee,{children:t.jsxs(te,{children:[t.jsxs(l,{children:[t.jsx(c,{children:"Name: "}),t.jsx(d,{children:i.name})]}),t.jsxs(l,{children:[t.jsx(c,{children:"Birthday: "}),t.jsx(d,{children:m})]}),t.jsxs(l,{children:[t.jsx(c,{children:"Type: "}),t.jsx(d,{children:i.petType})]}),t.jsxs(l,{children:[t.jsx(c,{children:"Place: "}),t.jsx(d,{children:i.location})]}),t.jsxs(l,{children:[t.jsx(c,{children:"The sex: "}),t.jsx(d,{children:e.sex})]}),t.jsxs(l,{children:[t.jsx(c,{children:"Email: "}),t.jsx(d,{children:t.jsx(y,{href:`mailto:${i.ownerEmail}`,children:i.ownerEmail})})]}),t.jsxs(l,{children:[t.jsx(c,{children:"Phone: "}),t.jsx(d,{children:t.jsx(y,{href:`tel:${i.ownerPhone}`,children:i.ownerPhone})})]})]})})]})]}),t.jsxs(oe,{children:[t.jsx(ae,{children:"Comments:"})," ",i.comments]}),t.jsxs(ie,{children:[t.jsxs(se,{style:{color:i.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:i.isFavorite?"#FEF9F9":"#54ADFF",borderColor:i.isFavorite&&"#54ADFF"},children:[t.jsx(re,{onClick:T,children:"Add to"}),i.isFavorite?t.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),i.ownerPhone===void 0?t.jsx(j,{href:`mailto:${i.ownerEmail}`,children:"Contact"}):t.jsx(j,{href:`tel:${i.ownerPhone}`,children:"Contact"})]})]})})};z.propTypes={toggleModal:a.func};const F=({item:e})=>{const[n,i]=g.useState(!1),{user:s}=v();console.log("user -->",s),console.log("item-->",e);const x=()=>{i(m=>!m)};return t.jsxs(t.Fragment,{children:[t.jsxs(H,{children:[t.jsxs(M,{children:[t.jsx(D,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(q,{children:[t.jsx(U,{children:e.noticeType}),t.jsxs(_,{children:[t.jsx($,{"aria-label":"add to favorites",children:t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),s.name!==null&&t.jsx($,{"aria-label":"delete from favorites",children:t.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(O,{children:[t.jsxs(u,{children:[t.jsx(h,{iconName:"icon-location"}),t.jsx(b,{children:V(e.location)})]}),t.jsxs(u,{children:[t.jsx(h,{iconName:"icon-clock"}),t.jsx(b,{children:e.age})]}),t.jsxs(u,{children:[t.jsx(h,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(b,{children:e.sex})]})]})]}),t.jsx(G,{children:e.title}),t.jsx(k,{onClick:x,children:"Learn more"})]},e.id),n&&t.jsx(z,{item:e,toggleModal:x})]})};F.propTypes={props:a.object};const S=({notices:e,pageCount:n,handlePageChange:i})=>t.jsxs(E,{children:[e&&e.map(s=>t.jsx(F,{item:s},s.id)),t.jsx(R,{pageCount:n,handlePageChange:i})]});S.propTypes={notices:a.arrayOf(P.shape({id:a.string.isRequired})).isRequired,pageCount:a.number.isRequired,handlePageChange:a.func.isRequired};const ge=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{S as N,me as a,fe as b,ge as c,xe as g};
