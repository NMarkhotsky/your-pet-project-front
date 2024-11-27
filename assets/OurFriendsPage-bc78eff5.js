import{s as t,b as o,a as s,f as v,B as W,t as n,P as u,j as i,g as O,r as y}from"./index-8b649952.js";import{T as R}from"./TitlePage-185a54a6.js";import{B as w}from"./BaseSkeleton.styled-b6680972.js";const H=t.section`
  padding-bottom: 75px;
`,L=t.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${s} {
    margin-bottom: 60px;
  }
`;v.defaults.baseURL=W;const C=async()=>{try{const{data:{data:e}}=await v.get("/friends");return e}catch(e){console.log(e)}},E=t.li`
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

  @media ${s} {
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
`,A=t.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,B=t.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,q=t.div``,P=t.img`
  width: 100px;
  height: 68px;

  @media ${o} {
    width: 124px;
    height: 88px;
  }

  @media ${s} {
    width: 146px;
    height: 104px;
  }
`,M=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,x=t.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${s} {
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
`,N=t.p`
  position: relative;
`,b=t.p``,p=t.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,U=t.ul`
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
`,D=t.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,G=t.p`
  color: ${e=>e.theme.colors.text};
`,J=t.p`
  color: ${e=>e.theme.colors.text};
`,K=[n("other_MN"),n("other_TU"),n("other_WE"),n("other_TH"),n("other_FR"),n("other_SA"),n("other_SU")],T=({items:e,handleTimeHover:d,hoveredTime:a})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:r,url:g,title:k,workDays:l,address:F,email:$,phone:j,addressUrl:z})=>{var S;return i.jsxs(E,{children:[i.jsx(B,{href:`${g}`,target:"_blank",children:k}),i.jsxs(A,{children:[i.jsx(q,{children:i.jsx(P,{src:r})}),i.jsxs(M,{children:[i.jsxs(x,{onMouseEnter:()=>d(r),onMouseLeave:()=>d(""),children:[i.jsxs(N,{children:[n("other_time"),":"]}),i.jsx(p,{children:l?(S=l[0])!=null&&S.isOpen?`${l[0].from} - ${l[0].to}`:n("other_close"):n("friends_friendItem_workTime")})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_address"),":"]}),i.jsx(p,{href:z,target:"_blank",rel:"noopener noreferrer",children:F===null?"Website only":F})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_email"),":"]}),i.jsx(p,{href:`mailto:${$}`,children:$===null?n("friends_friendItem_phoneOnly"):$})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_phone"),":"]}),i.jsx(p,{href:`tel:${j}`,children:j===null?n("friends_friendItem_emailOnly"):j})]})]})]}),a===r&&i.jsx(U,{children:l?l.map((c,_)=>c&&i.jsxs(D,{children:[i.jsxs(G,{children:[K[_],": "]}),i.jsx(J,{children:c.isOpen?`${c.from} - ${c.to}`:n("other_closed")})]},_)):n("friends_friendItem_workTime")})]},r)})});T.propTypes={items:u.array.isRequired,handleTimeHover:u.func.isRequired,hoveredTime:u.string.isRequired};const Q=t.div``,V=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,X=O`
0%{
  opacity: 0.5;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0.5;
}
`,Y=t.li`
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

  @media ${s} {
    width: 394px;
    height: 287px;

    transition: box-shadow ${({theme:e})=>e.transitionHover};

    &:last-child {
      margin-right: auto;
    }
  }
`,Z=t(w)`
  display: block;
  margin: 0 auto;

  height: 27px;
  width: 50%;
  border-radius: 20px;

  @media ${o} {
    border-radius: 40px;
  }
`,ee=t.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media ${o} {
    gap: 12px;
  }
  @media ${s} {
    gap: 16px;
  }
`,ie=t.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 68px;

  background-color: #fbf0e7;

  & svg {
    animation: ${X} 1s ease infinite;
  }

  @media ${o} {
    width: 120px;
    height: 88px;
  }
  @media ${s} {
    width: 158px;
    height: 104px;
  }
`,te=t.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media ${o} {
    gap: 16px;
  }
  @media ${s} {
    gap: 16px;
  }
`,h=t.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,m=t(w)`
  width: 40%;
  height: 16px;
  margin: 0;

  border-radius: 8px;

  @media ${o} {
    height: 16px;
  }
  @media ${s} {
    height: 16px;
  }
`,f=t(w)`
  width: 60%;
  height: 16px;

  border-radius: 8px;

  @media ${o} {
    height: 16px;
  }
  @media ${s} {
    height: 16px;
  }
`,ne=({count:e})=>i.jsx(i.Fragment,{children:Array(e).fill(0).map((d,a)=>i.jsxs(Y,{children:[i.jsx(Z,{inline:!0}),i.jsxs(ee,{children:[i.jsx(ie,{}),i.jsxs(te,{children:[i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]})]})]})]},a))}),I=({items:e})=>{const[d,a]=y.useState(""),r=g=>{a(g)};return i.jsx(Q,{children:i.jsx(V,{children:e.length!==0?i.jsx(T,{items:e,handleTimeHover:r,hoveredTime:d}):i.jsx(ne,{count:10})})})};I.propTypes={items:u.array.isRequired};function de(){const[e,d]=y.useState([]);return y.useEffect(()=>{(async()=>{try{const r=await C();d(r)}catch(r){console.log(r)}})()},[]),i.jsxs(H,{children:[i.jsx(L,{children:i.jsx(R,{children:n("friends_title")})}),i.jsx(I,{items:e})]})}export{de as default};
