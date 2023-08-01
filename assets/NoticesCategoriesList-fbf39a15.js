import{s as i,b as r,a as b,P as d,j as t,d as p,B as z,r as m,I as h,E as F}from"./index-60ca3da1.js";import{B as C}from"./Btn.styled-088aba9d.js";import{P as S}from"./Pagination-7f18d0d9.js";const T=i.ul`
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
`,L=i.li`
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

  @media ${b} {
    width: 288px;
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }
`,B=i.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`,N=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`,P=i.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,I=i.p`
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
`,A=i.div`
  display: block;
`,R=i.button`
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
`,E=i.ul`
  position: absolute;
  bottom: 12px;
  right: 8px;
  left: 8px;

  display: flex;
  justify-content: center;
  gap: 12px;

  padding: 0;

  @media ${r} {
    left: 24px;
    right: 24px;

    gap: 24px;
  }

  @media ${b} {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,f=i.li`
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
`,g=i.span`
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.xs};

  line-height: 16px;
  letter-spacing: 0.04em;
`,H=i.p`
  display: flex;
  padding: 20px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
`,M=e=>e.length>5?e.substring(0,5)+"...":e,$=({children:e,onClick:o})=>t.jsx(C,{type:"button",onClick:o,children:e});$.propTypes={children:d.any.isRequired,onClick:d.func};const D=i.div`
  display: block;
`,q=i.div`
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
`,U=i.div`
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
`,_=i.button`
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
`,O=i.div`
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
`,V=i.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${r} {
    height: 298px;
    width: 262px;
  }
`,G=i.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`,J=i.span`
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
`,K=i.div`
  @media ${r} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`,Q=i.h4`
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
`,X=i.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${e=>e.theme.fonts.main.bold};
  text-indent: 0;

  @media ${r} {
    width: 340px;
  }
`,Y=i.tbody`
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
`,u=i.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${e=>e.theme.colors.yellow};

  cursor: pointer;
`,Z=i.p`
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
`,ee=i.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${r} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`,te=i.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 40px;

`,oe=i.span`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`,ie=i.a`
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
`,ne=i.a`
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  color: ${e=>e.theme.colors.blue};

  z-index: 5;

  cursor: pointer;
`,re=i.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`;p.defaults.baseURL=z;const pe=async e=>{try{let o="";for(let n in e)o+=`&${n}=${e[n]}`;const{data:s}=await p.get(`/notices?${o}`);return s}catch(o){console.log(o)}},se=async e=>{try{return await p.get(`/notices/${e}`)}catch(o){console.log(o)}},ae=async e=>{try{return await p.patch(`/notices/${e}`)}catch(o){console.log(o)}},xe=async e=>{try{let o="";for(let n in e)o+=`&${n}=${e[n]}`;const{data:s}=await p.get(`/notices/self?${o}`);return s}catch(o){console.log(o)}},me=async e=>{try{let o="";for(let n in e)o+=`&${n}=${e[n]}`;const{data:s}=await p.get(`/notices/self?${o}`);return s}catch(o){console.log(o)}},le=({item:e})=>{const[o,s]=m.useState({});let n;const w=async x=>{const k=await se(x);s(k.data.notice)};m.useEffect(()=>{w(e.id)},[e.id]),m.useEffect(()=>{Object.keys(o).length});const v=async()=>{const x=await ae(e.id);s(x)};return console.log("card ===>",o),o.birthday&&(n=o.birthday.split("-").reverse().join(".")),t.jsx(t.Fragment,{children:t.jsx(D,{children:t.jsx(q,{children:t.jsxs(U,{children:[t.jsx(_,{children:t.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),t.jsxs(O,{children:[t.jsxs(W,{children:[t.jsxs(V,{children:[t.jsx(G,{src:o.photoURL,alt:"pet",loading:"lazy"}),t.jsx(J,{children:o.noticeType})]}),t.jsxs(K,{children:[t.jsx(Q,{children:"Cute dog looking for a home"}),t.jsx(X,{children:t.jsxs(Y,{children:[t.jsxs(a,{children:[t.jsx(l,{children:"Name: "}),t.jsx(c,{children:o.name})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Birthday: "}),t.jsx(c,{children:n})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Type: "}),t.jsx(c,{children:o.petType})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Place: "}),t.jsx(c,{children:o.location})]}),t.jsxs(a,{children:[t.jsx(l,{children:"The sex: "}),t.jsx(c,{children:e.sex})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Email: "}),t.jsx(c,{children:t.jsx(u,{href:`mailto:${o.ownerEmail}`,children:o.ownerEmail})})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Phone: "}),t.jsx(c,{children:t.jsx(u,{href:`tel:${o.ownerPhone}`,children:o.ownerPhone})})]})]})})]})]}),t.jsxs(Z,{children:[t.jsx(re,{children:"Comments:"})," ",o.comments]}),t.jsxs(ee,{children:[t.jsxs(te,{style:{color:o.isFavorite?"#54ADFF":"#FEF9F9",backgroundColor:o.isFavorite?"#FEF9F9":"#54ADFF",borderColor:o.isFavorite?"#54ADFF":"transparent"},children:[t.jsx(oe,{onClick:v,children:"Add to"}),o.isFavorite?t.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",fill:"#54ADFF"}):t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#fff"})]}),t.jsx(ie,{children:t.jsx(ne,{href:`tel:${o.ownerPhone}`,children:"Contact"})})]})]})]})})})})},j=({item:e})=>{const[o,s]=m.useState(!1),n=()=>{s(!0)};return t.jsxs(t.Fragment,{children:[t.jsxs(L,{children:[t.jsxs(B,{children:[t.jsx(N,{src:e.photoURL,alt:"pet",loading:"lazy"}),t.jsxs(P,{children:[t.jsx(I,{children:e.noticeType}),t.jsx(A,{children:t.jsx(R,{"aria-label":"add to favorites",children:t.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})})]}),t.jsxs(E,{children:[t.jsxs(f,{children:[t.jsx(h,{iconName:"icon-location"}),t.jsx(g,{children:M(e.location)})]}),t.jsxs(f,{children:[t.jsx(h,{iconName:"icon-clock"}),t.jsx(g,{children:e.age})]}),t.jsxs(f,{children:[t.jsx(h,{iconName:e.sex==="Female"?"icon-female":"icon-male"}),t.jsx(g,{children:e.sex})]})]})]}),t.jsx(H,{children:e.title}),t.jsx($,{onClick:n,children:"Learn more"})]},e.id),o&&t.jsx(le,{item:e})]})};j.propTypes={props:d.object};const y=({notices:e,pageCount:o,handlePageChange:s})=>t.jsxs(T,{children:[e&&e.map(n=>t.jsx(j,{item:n},n.id)),t.jsx(S,{pageCount:o,handlePageChange:s})]});y.propTypes={notices:d.arrayOf(F.shape({id:d.string.isRequired})).isRequired,pageCount:d.number.isRequired,handlePageChange:d.func.isRequired};const fe=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{y as N,xe as a,me as b,fe as c,pe as g};
