import{s as t,b as o,a as s,f as S,t as n,P as u,j as i,g as z,r as y}from"./index-95ff7c19.js";import{T as W}from"./TitlePage-36465f7e.js";import{B as w}from"./BaseSkeleton.styled-c684b783.js";const O=t.section`
  padding-bottom: 75px;
`,H=t.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${s} {
    margin-bottom: 60px;
  }
`;S.defaults.baseURL="https://mypets-backend.onrender.com/api";const R=async()=>{try{const{data:{friends:e}}=await S.get("/friends");return e}catch(e){console.log(e)}},C=t.li`
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
`,L=t.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,E=t.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,q=t.div``,A=t.img`
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
`,P=t.div`
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
`,B=t.p`
  position: relative;
`,b=t.p``,p=t.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,M=t.ul`
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
`,N=t.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,D=t.p`
  color: ${e=>e.theme.colors.text};
`,G=t.p`
  color: ${e=>e.theme.colors.text};
`,J=[n("other_MN"),n("other_TU"),n("other_WE"),n("other_TH"),n("other_FR"),n("other_SA"),n("other_SU")],T=({items:e,handleTimeHover:d,hoveredTime:a})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:r,url:g,title:I,workDays:l,address:F,email:$,phone:j,addressUrl:k})=>i.jsxs(C,{children:[i.jsx(E,{href:`${g}`,target:"_blank",children:I}),i.jsxs(L,{children:[i.jsx(q,{children:i.jsx(A,{src:r})}),i.jsxs(P,{children:[i.jsxs(x,{onMouseEnter:()=>d(r),onMouseLeave:()=>d(""),children:[i.jsxs(B,{children:[n("other_time"),":"]}),i.jsx(p,{children:l?l[0].isOpen?`${l[0].from} - ${l[0].to}`:n("other_close"):n("friends_friendItem_workTime")})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_address"),":"]}),i.jsx(p,{href:k,target:"_blank",rel:"noopener noreferrer",children:F===null?"Website only":F})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_email"),":"]}),i.jsx(p,{href:`mailto:${$}`,children:$===null?n("friends_friendItem_phoneOnly"):$})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_phone"),":"]}),i.jsx(p,{href:`tel:${j}`,children:j===null?n("friends_friendItem_emailOnly"):j})]})]})]}),a===r&&i.jsx(M,{children:l?l.map((c,v)=>c&&i.jsxs(N,{children:[i.jsxs(D,{children:[J[v],": "]}),i.jsx(G,{children:c.isOpen?`${c.from} - ${c.to}`:n("other_closed")})]},v)):n("friends_friendItem_workTime")})]},r))});T.propTypes={items:u.array.isRequired,handleTimeHover:u.func.isRequired,hoveredTime:u.string.isRequired};const K=t.div``,Q=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,U=z`
0%{
  opacity: 0.5;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0.5;
}
`,V=t.li`
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
`,X=t(w)`
  display: block;
  margin: 0 auto;

  height: 27px;
  width: 50%;
  border-radius: 20px;

  @media ${o} {
    border-radius: 40px;
  }
`,Y=t.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media ${o} {
    gap: 12px;
  }
  @media ${s} {
    gap: 16px;
  }
`,Z=t.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 68px;

  background-color: #fbf0e7;

  & svg {
    animation: ${U} 1s ease infinite;
  }

  @media ${o} {
    width: 120px;
    height: 88px;
  }
  @media ${s} {
    width: 158px;
    height: 104px;
  }
`,ee=t.ul`
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
`,ie=({count:e})=>i.jsx(i.Fragment,{children:Array(e).fill(0).map((d,a)=>i.jsxs(V,{children:[i.jsx(X,{inline:!0}),i.jsxs(Y,{children:[i.jsx(Z,{}),i.jsxs(ee,{children:[i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]})]})]})]},a))}),_=({items:e})=>{const[d,a]=y.useState(""),r=g=>{a(g)};return i.jsx(K,{children:i.jsx(Q,{children:e.length!==0?i.jsx(T,{items:e,handleTimeHover:r,hoveredTime:d}):i.jsx(ie,{count:10})})})};_.propTypes={items:u.array.isRequired};function re(){const[e,d]=y.useState([]);return y.useEffect(()=>{(async()=>{try{const r=await R();d(r)}catch(r){console.log(r)}})()},[]),i.jsxs(O,{children:[i.jsx(H,{children:i.jsx(W,{children:n("friends_title")})}),i.jsx(_,{items:e})]})}export{re as default};
