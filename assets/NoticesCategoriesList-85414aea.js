import{s as i,b as r,a as j,P as h,j as t,d as p,B as T,r as f,u as w,M as L,I as d,v as N,G as B}from"./index-96a8865b.js";import{B as P}from"./Btn.styled-53245ec5.js";import{P as A}from"./Pagination-5aebc636.js";const I=i.ul`
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
`,H=i.li`
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

  @media ${j} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,R=i.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,E=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,M=i.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,D=i.p`
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
`,q=i.div`
  /* display: block; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`,b=i.button`
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
`,U=i.ul`
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

  @media ${j} {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,g=i.li`
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
`,u=i.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};

  letter-spacing: 0.48px;
`,_=i.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,O=e=>e.length>5?e.substring(0,5)+"...":e,v=({children:e,onClick:o})=>t.jsx(P,{type:"button",onClick:o,children:e});v.propTypes={children:h.any.isRequired,onClick:h.func};const G=i.div``;i.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
  z-index: 1200;

  backdrop-filter: blur(4px);
  background: rgba(97, 97, 97, 0.6);
`;i.div`
  position: absolute;
  top: 10%;
  min-height: 200px;
  min-width: 200px;

  border-radius: 20px;
  background-color: ${e=>e.theme.colors.bgdColor};

  @media ${r} {
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
`;i.button`
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
`;const V=i.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${r} {
    padding: 32px 32px 24px;
    width: 681px;
  }
`,W=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 12px;

  @media ${r} {
    flex-direction: row;
    gap: 24px;
  }
`,J=i.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${r} {
    height: 298px;
    width: 262px;
  }
`,K=i.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,Q=i.span`
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
`,X=i.div`
  @media ${r} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,Y=i.h4`
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
`,Z=i.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${r} {
    width: 340px;
  }
`,ee=i.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`,a=i.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`,l=i.td`
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
`,c=i.td`
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
`,$=i.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,te=i.p`
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
`,oe=i.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${r} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,ie=i.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 20px;
  border-radius: 40px;

  
`,ne=i(ie)`
  border: 2px solid transparent;
`,re=i.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,y=i.a`
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
`;i.a`
  /* font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  color: ${e=>e.theme.colors.blue};

  z-index: 5;

  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.white};

    transition: ${({theme:e})=>e.transitionHover};
  } */
`;const se=i.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;p.defaults.baseURL=T;const xe=async e=>{try{let o="";for(let n in e)o+=`&${n}=${e[n]}`;const{data:s}=await p.get(`/notices?${o}`);return s}catch(o){console.log(o)}},ae=async e=>{try{return await p.get(`/notices/${e}`)}catch(o){console.log(o)}},le=async e=>{try{return await p.patch(`/notices/favorites/${e}`)}catch(o){console.log(o)}},me=async e=>{try{let o="";for(let n in e)o+=`&${n}=${e[n]}`;const{data:s}=await p.get(`/notices/self?${o}`);return s}catch(o){console.log(o)}},fe=async e=>{try{let o="";for(let n in e)o+=`&${n}=${e[n]}`;const{data:s}=await p.get(`/notices/self?${o}`);return s}catch(o){console.log(o)}},ce=({item:e})=>{console.log(e.id);const[o,s]=f.useState({}),{user:n}=w();let x;const F=async m=>{const C=await ae(m);s(C.data.notice)};f.useEffect(()=>{F(e.id)},[e.id]),f.useEffect(()=>{Object.keys(o).length});const S=async()=>{n.name===null&&n.email===null&&N("Sorry, but you are not authorized. Try it!");const m=await le(e.id);s(m.data.notice)};return console.log("card ===>",o.ownerPhone),o.birthday&&(x=o.birthday.split("-").reverse().join(".")),t.jsx(L,{children:t.jsx(G,{children:t.jsxs(V,{children:[t.jsxs(W,{children:[t.jsxs(J,{children:[t.jsx(K,{src:o.photoURL,alt:"pet",loading:"lazy"}),t.jsx(Q,{children:o.noticeType})]}),t.jsxs(X,{children:[t.jsx(Y,{children:"Cute dog looking for a home"}),t.jsx(Z,{children:t.jsxs(ee,{children:[t.jsxs(a,{children:[t.jsx(l,{children:"Name: "}),t.jsx(c,{children:o.name})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Birthday: "}),t.jsx(c,{children:x})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Type: "}),t.jsx(c,{children:o.petType})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Place: "}),t.jsx(c,{children:o.location})]}),t.jsxs(a,{children:[t.jsx(l,{children:"The sex: "}),t.jsx(c,{children:e.sex})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Email: "}),t.jsx(c,{children:t.jsx($,{href:`mailto:${o.ownerEmail}`,children:o.ownerEmail})})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Phone: "}),t.jsx(c,{children:t.jsx($,{href:`tel:${o.ownerPhone}`,children:o.ownerPhone})})]})]})})]})]}),t.jsxs(te,{children:[t.jsx(se,{children:"Comments:"})," ",o.comments]}),t.jsxs(oe,{children:[t.jsxs(ne,{style:{color:o.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:o.isFavorite?"#FEF9F9":"#54ADFF",borderColor:o.isFavorite&&"#54ADFF"},children:[t.jsx(re,{onClick:S,children:"Add to"}),o.isFavorite?t.jsx(d,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(d,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),o.ownerPhone===void 0?t.jsx(y,{href:`mailto:${o.ownerEmail}`,children:"Contact"}):t.jsx(y,{href:`tel:${o.ownerPhone}`,children:"Contact"})]})]})})})},k=({item:e})=>{const[o,s]=f.useState(!1),{user:n}=w();console.log("user -->",n),console.log("item-->",e);const x=()=>{s(!0)};return t.jsxs(t.Fragment,{children:[t.jsxs(H,{children:[t.jsxs(R,{children:[t.jsx(E,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(M,{children:[t.jsx(D,{children:e.noticeType}),t.jsxs(q,{children:[t.jsx(b,{"aria-label":"add to favorites",children:t.jsx(d,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),n.name!==null&&t.jsx(b,{"aria-label":"delete from favorites",children:t.jsx(d,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})]})]}),t.jsxs(U,{children:[t.jsxs(g,{children:[t.jsx(d,{iconName:"icon-location"}),t.jsx(u,{children:O(e.location)})]}),t.jsxs(g,{children:[t.jsx(d,{iconName:"icon-clock"}),t.jsx(u,{children:e.age})]}),t.jsxs(g,{children:[t.jsx(d,{iconName:e.sex==="female"?"icon-female":"icon-male"}),t.jsx(u,{children:e.sex})]})]})]}),t.jsx(_,{children:e.title}),t.jsx(v,{onClick:x,children:"Learn more"})]},e.id),o&&t.jsx(ce,{item:e})]})};k.propTypes={props:h.object};const z=({notices:e,pageCount:o,handlePageChange:s})=>t.jsxs(I,{children:[e&&e.map(n=>t.jsx(k,{item:n},n.id)),t.jsx(A,{pageCount:o,handlePageChange:s})]});z.propTypes={notices:h.arrayOf(B.shape({id:h.string.isRequired})).isRequired,pageCount:h.number.isRequired,handlePageChange:h.func.isRequired};const ge=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as N,me as a,fe as b,ge as c,xe as g};
