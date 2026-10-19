import{s as t,b as o,a as d,e as W,d as O,P as p,j as i,k as H}from"./index-ee3ce916.js";import{r as k}from"./react-ecc61561.js";import{T as L}from"./TitlePage-12b93e7d.js";import{t as n}from"./translations-5abde677.js";import{B as w,u as C,N as q}from"./useResource-0c2fa8d4.js";import{R as E}from"./catImg-bc7fe17e.js";import"./state-c18d5234.js";import"./forms-b2853f00.js";import"./Btn.styled-bc5f3f54.js";const P=t.section`
  padding-bottom: 75px;
`,A=t.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${d} {
    margin-bottom: 60px;
  }
`,M=async(e={})=>(await W.get("/friends",e)).data.data,B=t.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: ${({theme:e})=>e.colors.bgdColorAuth};

  @media ${o} {
    min-width: 336px;
  }

  @media ${d} {
    min-width: 394px;

    &:last-child {
      flex: 0;
      margin-right: auto;
    }
  }

  transition: transform ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus {
    transform: scale(1.02);
    transition: transform ${({theme:e})=>e.transitionHover};
  }

  cursor: pointer;
  ${O}
`,N=t.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,D=t.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,G=t.div``,J=t.img`
  width: 100px;
  height: 68px;

  @media ${o} {
    width: 124px;
    height: 88px;
  }

  @media ${d} {
    width: 146px;
    height: 104px;
  }
`,K=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,m=t.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${d} {
    font-size: ${({theme:e})=>e.fontSizes.md};
  }

  &:hover {
    color: ${({theme:e})=>e.colors.blue};

    cursor: pointer;
  }

  &:hover > a {
    color: ${({theme:e})=>e.colors.blue};

    cursor: pointer;
  }
`,Q=t.p`
  position: relative;
`,y=t.p``,f=t.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,V=t.ul`
  position: absolute;
  top: 107px;
  right: 97px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 130px;
  height: auto;
  padding: 12px;

  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.blue};

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: ${e=>e.theme.colors.bgdColorSecond};

  transition: all ${({theme:e})=>e.transitionHover};
`,X=t.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,Y=t.p`
  color: ${e=>e.theme.colors.text};
`,Z=t.p`
  color: ${e=>e.theme.colors.text};
`,_=({items:e,handleTimeHover:a,hoveredTime:r})=>{const c=["MN","TU","WE","TH","FR","SA","SU"].map(s=>n(`other_${s}`)),l=(new Date().getDay()+6)%7;return i.jsx(i.Fragment,{children:e.map(({imageUrl:s,url:F,title:v,workDays:x,address:S,email:j,phone:b,addressUrl:R})=>{var T;return i.jsxs(B,{children:[i.jsx(D,{href:`${F}`,target:"_blank",rel:"noopener noreferrer",children:v}),i.jsxs(N,{children:[i.jsx(G,{children:i.jsx(J,{src:s,alt:v,loading:"lazy"})}),i.jsxs(K,{children:[i.jsxs(m,{onMouseEnter:()=>a(s),onMouseLeave:()=>a(""),children:[i.jsxs(Q,{children:[n("other_time"),":"]}),i.jsx(f,{children:x?(T=x[l])!=null&&T.isOpen?`${x[l].from} - ${x[l].to}`:n("other_close"):n("friends_friendItem_workTime")})]}),i.jsxs(m,{children:[i.jsxs(y,{children:[n("other_address"),":"]}),i.jsx(f,{href:R,target:"_blank",rel:"noopener noreferrer",children:S===null?"Website only":S})]}),i.jsxs(m,{children:[i.jsxs(y,{children:[n("other_email"),":"]}),i.jsx(f,{href:`mailto:${j}`,children:j===null?n("friends_friendItem_phoneOnly"):j})]}),i.jsxs(m,{children:[i.jsxs(y,{children:[n("other_phone"),":"]}),i.jsx(f,{href:`tel:${b}`,children:b===null?n("friends_friendItem_emailOnly"):b})]})]})]}),r===s&&i.jsx(V,{children:x?x.map((h,I)=>h&&i.jsxs(X,{children:[i.jsxs(Y,{children:[c[I],": "]}),i.jsx(Z,{children:h.isOpen?`${h.from} - ${h.to}`:n("other_closed")})]},I)):n("friends_friendItem_workTime")})]},F||s)})})};_.propTypes={items:p.array.isRequired,handleTimeHover:p.func.isRequired,hoveredTime:p.string.isRequired};const U=t.div``,ee=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ie=H`
0%{
  opacity: 0.5;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0.5;
}
`,te=t.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 255px;

  padding: 16px 12px;
  background-color: ${({theme:e})=>e.colors.bgdColorAuth};
  box-shadow: ${({theme:e})=>e.boxShadow.main};
  border-radius: 20px;

  @media ${o} {
    border-radius: 40px;
    width: 342px;
    height: 263px;
  }

  @media ${d} {
    width: 394px;
    height: 287px;

    transition: box-shadow ${({theme:e})=>e.transitionHover};

    &:last-child {
      margin-right: auto;
    }
  }
`,ne=t(w)`
  display: block;
  margin: 0 auto;

  height: 27px;
  width: 50%;
  border-radius: 20px;

  @media ${o} {
    border-radius: 40px;
  }
`,oe=t.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media ${o} {
    gap: 12px;
  }
  @media ${d} {
    gap: 16px;
  }
`,re=t.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 68px;

  background-color: #fbf0e7;

  & svg {
    animation: ${ie} 1s ease infinite;
  }

  @media ${o} {
    width: 120px;
    height: 88px;
  }
  @media ${d} {
    width: 158px;
    height: 104px;
  }
`,se=t.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media ${o} {
    gap: 16px;
  }
  @media ${d} {
    gap: 16px;
  }
`,u=t.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,g=t(w)`
  width: 40%;
  height: 16px;
  margin: 0;

  border-radius: 8px;

  @media ${o} {
    height: 16px;
  }
  @media ${d} {
    height: 16px;
  }
`,$=t(w)`
  width: 60%;
  height: 16px;

  border-radius: 8px;

  @media ${o} {
    height: 16px;
  }
  @media ${d} {
    height: 16px;
  }
`,de=({count:e})=>i.jsx(i.Fragment,{children:Array(e).fill(0).map((a,r)=>i.jsxs(te,{children:[i.jsx(ne,{inline:!0}),i.jsxs(oe,{children:[i.jsx(re,{}),i.jsxs(se,{children:[i.jsxs(u,{children:[i.jsx(g,{inline:!0}),i.jsx($,{inline:!0})]}),i.jsxs(u,{children:[i.jsx(g,{inline:!0}),i.jsx($,{inline:!0})]}),i.jsxs(u,{children:[i.jsx(g,{inline:!0}),i.jsx($,{inline:!0})]}),i.jsxs(u,{children:[i.jsx(g,{inline:!0}),i.jsx($,{inline:!0})]})]})]})]},r))}),z=({items:e,isLoading:a=!1})=>{const[r,c]=k.useState(""),l=s=>{c(s)};return i.jsx(U,{children:i.jsx(ee,{children:a?i.jsx(de,{count:10}):i.jsx(_,{items:e,handleTimeHover:l,hoveredTime:r})})})};z.propTypes={items:p.array.isRequired,isLoading:p.bool};const ae=(e,a)=>M(a);function $e(){const[e,a]=k.useState(0),{data:r=[],isLoading:c,error:l}=C(ae,{},e);return i.jsxs(P,{children:[i.jsx(A,{children:i.jsx(L,{children:n("friends_title")})}),i.jsx(z,{items:r||[],isLoading:c}),l&&i.jsx(E,{onRetry:()=>a(s=>s+1)}),!c&&!l&&!(r!=null&&r.length)&&i.jsx(q,{})]})}export{$e as default};
