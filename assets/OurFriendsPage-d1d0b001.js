import{s as t,b as o,a as s,f as _,B as z,t as n,P as u,j as i,g as W,r as y}from"./index-582bd8a7.js";import{T as O}from"./TitlePage-5eb4a125.js";import{B as w}from"./BaseSkeleton.styled-cebba54a.js";const R=t.section`
  padding-bottom: 75px;
`,H=t.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${s} {
    margin-bottom: 60px;
  }
`;_.defaults.baseURL=z;const L=async()=>{try{const{data:{friends:e}}=await _.get("/friends");return e}catch(e){console.log(e)}},C=t.li`
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
`,E=t.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,A=t.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,B=t.div``,q=t.img`
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
`,M=t.p`
  position: relative;
`,b=t.p``,p=t.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,N=t.ul`
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
`,U=t.li`
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
`,J=[n("other_MN"),n("other_TU"),n("other_WE"),n("other_TH"),n("other_FR"),n("other_SA"),n("other_SU")],v=({items:e,handleTimeHover:d,hoveredTime:l})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:r,url:g,title:I,workDays:a,address:F,email:$,phone:j,addressUrl:k})=>i.jsxs(C,{children:[i.jsx(A,{href:`${g}`,target:"_blank",children:I}),i.jsxs(E,{children:[i.jsx(B,{children:i.jsx(q,{src:r})}),i.jsxs(P,{children:[i.jsxs(x,{onMouseEnter:()=>d(r),onMouseLeave:()=>d(""),children:[i.jsxs(M,{children:[n("other_time"),":"]}),i.jsx(p,{children:a?a[0].isOpen?`${a[0].from} - ${a[0].to}`:n("other_close"):n("friends_friendItem_workTime")})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_address"),":"]}),i.jsx(p,{href:k,target:"_blank",rel:"noopener noreferrer",children:F===null?"Website only":F})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_email"),":"]}),i.jsx(p,{href:`mailto:${$}`,children:$===null?n("friends_friendItem_phoneOnly"):$})]}),i.jsxs(x,{children:[i.jsxs(b,{children:[n("other_phone"),":"]}),i.jsx(p,{href:`tel:${j}`,children:j===null?n("friends_friendItem_emailOnly"):j})]})]})]}),l===r&&i.jsx(N,{children:a?a.map((c,S)=>c&&i.jsxs(U,{children:[i.jsxs(D,{children:[J[S],": "]}),i.jsx(G,{children:c.isOpen?`${c.from} - ${c.to}`:n("other_closed")})]},S)):n("friends_friendItem_workTime")})]},r))});v.propTypes={items:u.array.isRequired,handleTimeHover:u.func.isRequired,hoveredTime:u.string.isRequired};const K=t.div``,Q=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,V=W`
0%{
  opacity: 0.5;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0.5;
}
`,X=t.li`
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
`,Y=t(w)`
  display: block;
  margin: 0 auto;

  height: 27px;
  width: 50%;
  border-radius: 20px;

  @media ${o} {
    border-radius: 40px;
  }
`,Z=t.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media ${o} {
    gap: 12px;
  }
  @media ${s} {
    gap: 16px;
  }
`,ee=t.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 68px;

  background-color: #fbf0e7;

  & svg {
    animation: ${V} 1s ease infinite;
  }

  @media ${o} {
    width: 120px;
    height: 88px;
  }
  @media ${s} {
    width: 158px;
    height: 104px;
  }
`,ie=t.ul`
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
`,te=({count:e})=>i.jsx(i.Fragment,{children:Array(e).fill(0).map((d,l)=>i.jsxs(X,{children:[i.jsx(Y,{inline:!0}),i.jsxs(Z,{children:[i.jsx(ee,{}),i.jsxs(ie,{children:[i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]}),i.jsxs(h,{children:[i.jsx(m,{inline:!0}),i.jsx(f,{inline:!0})]})]})]})]},l))}),T=({items:e})=>{const[d,l]=y.useState(""),r=g=>{l(g)};return i.jsx(K,{children:i.jsx(Q,{children:e.length!==0?i.jsx(v,{items:e,handleTimeHover:r,hoveredTime:d}):i.jsx(te,{count:10})})})};T.propTypes={items:u.array.isRequired};function se(){const[e,d]=y.useState([]);return y.useEffect(()=>{(async()=>{try{const r=await L();console.log("friends: ",r),d(r)}catch(r){console.log(r)}})()},[]),i.jsxs(R,{children:[i.jsx(H,{children:i.jsx(O,{children:n("friends_title")})}),i.jsx(T,{items:e})]})}export{se as default};
