import{s as i,b as s,a as n,d as P,P as o,j as t,e as z}from"./index-ee3ce916.js";import{r as h}from"./react-ecc61561.js";import{t as S}from"./translations-5abde677.js";import{s as I,S as D,P as B}from"./scrollToTop-e2ffb466.js";import{B as u,u as E,N as L}from"./useResource-0c2fa8d4.js";import{S as _}from"./ScrollToTopButton-18e13f37.js";import{R as A}from"./catImg-bc7fe17e.js";import"./state-c18d5234.js";import"./forms-b2853f00.js";import"./Btn.styled-bc5f3f54.js";const F=i.li`
  position: relative;
  width: 100%;
  height: 578px;
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 20px;

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }

  &:before {
    position: absolute;
    content: '';
    top: -20px;
    display: block;
    height: 8px;
    width: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 1;
  }

  @media ${s} {
    height: 556px;
    flex-basis: calc((100% - 32px) / 2);

    &:before {
      top: -22px;
    }
  }

  @media ${n} {
    height: 534px;
    flex-basis: calc((100% - 62px) / 3);
  }

  cursor: pointer;
  ${P}
`,M=i.div`
  height: 252px;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
`,V=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media ${s} {
  }

  @media ${n} {
  }
`,W=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  height: 310px;

  @media ${s} {
    padding-left: 12px;
    padding-right: 12px;
    height: 288px;
  }

  @media ${n} {
    height: 266px;
  }
`,H=i.h4`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-style: normal;
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.text};

  @media ${s} {
  }

  @media ${n} {
  }
`,U=i.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  margin-top: 16px;

  font-family: ${e=>e.theme.fonts.main.regular};
  font-style: normal;
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 22px;
  color: ${e=>e.theme.colors.text};
`,G=i.div`
  display: flex;
  justify-content: space-between;
`,O=i.span`
  font-family: ${e=>e.theme.fonts.main.regular};
  font-style: normal;
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 22px;
  color: ${e=>e.theme.colors.grey};
`,Y=i.a`
  text-decoration: none;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-style: normal;
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 22px;
  text-align: right;
  color: ${e=>e.theme.colors.blue};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.yellow};
  }
`,R=({article:e})=>{const{url:r="",text:d,title:p,imgUrl:x,date:c}=e,m=new globalThis.Date(c),g=Number.isFinite(m.getTime())?new Intl.DateTimeFormat(void 0,{dateStyle:"short"}).format(m):"—";return t.jsxs(F,{children:[t.jsx(M,{children:t.jsx(V,{src:x,alt:p,loading:"lazy"})}),t.jsxs(W,{children:[t.jsxs("div",{children:[t.jsx(H,{children:p}),t.jsx(U,{children:d})]}),t.jsxs(G,{children:[t.jsx(O,{children:g}),t.jsx(Y,{href:r,target:"_blank",rel:"noopener noreferrer",children:S("other_readMore")})]})]})]})};R.propTypes={article:o.shape({url:o.string,text:o.string.isRequired,title:o.string.isRequired,imgUrl:o.string.isRequired,date:o.string.isRequired}).isRequired};const k=i.ul`
  width: 100%;
  margin-bottom: 40px;
  margin-top: 44px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 46px;

  @media ${s} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 24px;
    margin-top: 62px;
    margin-bottom: 60px;
  }

  @media ${n} {
    max-width: 1200px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 68px;
  }
`,w=({list:e})=>t.jsx(t.Fragment,{children:e.length>0&&t.jsx(k,{children:e.map(r=>t.jsx(R,{article:r},r._id))})});w.defaultProps={list:[]};w.propTypes={list:o.arrayOf(o.shape({url:o.string,text:o.string.isRequired,title:o.string.isRequired,imgUrl:o.string.isRequired,date:o.string.isRequired}).isRequired),pageCount:o.number.isRequired,handlePageChange:o.func.isRequired};const J=i.h1`
  margin-bottom: 40px;
  margin-top: 80px;

  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;

  text-align: center;

  color: ${e=>e.theme.colors.text};

  @media ${s} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,K=(e={},r={})=>z.get("/news",{...r,params:e}),Q=i.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 534px;
  box-shadow: ${({theme:e})=>e.boxShadow.main};
  border-radius: 20px;

  background-color: ${({theme:e})=>e.colors.bgdColorAuth};
  transition: box-shadow 300ms ${({theme:e})=>e.transitionHover};
  &:hover {
    box-shadow: ${({theme:e})=>e.boxShadow.secondary};
  }

  &::before {
    content: '';
    position: absolute;
    top: -14px;
    left: 0;
    width: 100%;
    height: 8px;
    width: 100%;

    transform: translateY(-100%);
    border-radius: 40px;
    background-image: ${({theme:e})=>e.colors.blueGradient};
  }

  @media ${s} {
    width: calc((100% - 32px) / 2);

    &::before {
      height: 8px;
    }
  }
  @media ${n} {
    width: calc((100% - 32px * 2) / 3);
  }
`,X=i.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 252px;

  background-color: ${({theme:e})=>e.colors.bgdColorSecond};
  border-radius: 20px;

  @media ${s} {
    width: 336px;
  }

  @media ${n} {
    width: 375px;
  }
`,Z=i.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 16px 12px 15px;
  row-gap: 16px;
  flex-grow: 1;

  @media ${s} {
    width: 336px;
  }

  @media ${n} {
    width: 395px;
  }
`,ee=i.div`
  margin-top: 17px;
  width: 100%;
`,te=i(u)`
  width: 100%;
  height: 30px;

  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 5px;
  }

  @media ${n} {
    width: 352px;
  }
`,ie=i(u)`
  width: 100%;

  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 4px;
  }

  @media ${n} {
    width: 352px;
  }
`,oe=i.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${n} {
    width: 352px;
  }
`,N=i(u)`
  width: 88px;
  height: 22px;

  border-radius: 8px;
`,re=i(N)``,ne=({cards:e})=>t.jsx(k,{children:Array(e).fill(0).map((r,d)=>t.jsxs(Q,{children:[t.jsx(X,{}),t.jsxs(Z,{children:[t.jsx(te,{count:2,inline:!0}),t.jsx(ee,{children:t.jsx(ie,{inline:!0})}),t.jsxs(oe,{children:[t.jsx(N,{inline:!0}),t.jsx(re,{inline:!0})]})]})]},d))}),se=async(e,r)=>(await K(e,r)).data,v=6;function ue(){const[e,r]=h.useState(""),[d,p]=h.useState(""),[x,c]=h.useState(1),[m,g]=h.useState(0),{data:l,isLoading:b,error:$}=E(se,{page:x,search:d,limit:v},m),j=(l==null?void 0:l.data)||[],f=Math.ceil(((l==null?void 0:l.total)||0)/v),y=h.useCallback(a=>{c(a.selected+1),I()},[]),T=a=>{r(a)},C=a=>{a.preventDefault(),c(1),p(e.trim())},q=()=>{r(""),p(""),c(1)};return t.jsxs(t.Fragment,{children:[t.jsx(J,{children:S("news_title")}),t.jsx(D,{value:e,onChange:T,onSubmit:C,onDelete:q}),b?t.jsx(ne,{cards:6}):$?t.jsx(A,{onRetry:()=>g(a=>a+1)}):t.jsx(w,{list:j,pageCount:f,handlePageChange:y}),f>1&&t.jsx(B,{currentPage:x,pageCount:f,handlePageChange:y}),j.length===0&&!b&&!$&&t.jsx(L,{}),t.jsx(_,{})]})}export{ue as default};
