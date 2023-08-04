import{s as t,b as o,a as r,f as T,t as n,P as j,j as i,g as z,r as $,h as W}from"./index-54ec674c.js";import{T as L}from"./TitlePage-8f601fe2.js";import{B as F}from"./BaseSkeleton.styled-c38e7788.js";const O=t.section`
  padding-bottom: 75px;
`,H=t.div`
  margin-bottom: 24px;

  @media ${o} {
    margin-top: 40px;
  }

  @media ${r} {
    margin-bottom: 60px;
  }
`;T.defaults.baseURL="https://mypets-backend.onrender.com/api";const R=async()=>{try{const{data:{friends:e}}=await T.get("/friends");return e}catch(e){console.log(e)}},C=t.li`
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

  @media ${r} {
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
`,q=t.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,P=t.div``,A=t.img`
  width: 100px;
  height: 68px;

  @media ${o} {
    width: 124px;
    height: 88px;
  }

  @media ${r} {
    width: 146px;
    height: 104px;
  }
`,B=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,h=t.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${r} {
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
`,w=t.p``,m=t.a`
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
`,K=[n("other_MN"),n("other_TU"),n("other_WE"),n("other_TH"),n("other_FR"),n("other_SA"),n("other_SU")],_=({items:e,handleTimeHover:d,hoveredTime:a})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:s,url:x,title:c,workDays:l,address:S,email:b,phone:y,addressUrl:k})=>i.jsxs(C,{children:[i.jsx(q,{href:`${x}`,target:"_blank",children:c}),i.jsxs(E,{children:[i.jsx(P,{children:i.jsx(A,{src:s})}),i.jsxs(B,{children:[i.jsxs(h,{onMouseEnter:()=>d(s),onMouseLeave:()=>d(""),children:[i.jsxs(M,{children:[n("other_time"),":"]}),i.jsx(m,{children:l?l[0].isOpen?`${l[0].from} - ${l[0].to}`:n("other_close"):n("friends_friendItem_workTime")})]}),i.jsxs(h,{children:[i.jsxs(w,{children:[n("other_address"),":"]}),i.jsx(m,{href:k,target:"_blank",rel:"noopener noreferrer",children:S===null?"Website only":S})]}),i.jsxs(h,{children:[i.jsxs(w,{children:[n("other_email"),":"]}),i.jsx(m,{href:`mailto:${b}`,children:b===null?n("friends_friendItem_phoneOnly"):b})]}),i.jsxs(h,{children:[i.jsxs(w,{children:[n("other_phone"),":"]}),i.jsx(m,{href:`tel:${y}`,children:y===null?n("friends_friendItem_emailOnly"):y})]})]})]}),a===s&&i.jsx(N,{children:l?l.map((p,v)=>p&&i.jsxs(D,{children:[i.jsxs(G,{children:[K[v],": "]}),i.jsx(J,{children:p.isOpen?`${p.from} - ${p.to}`:n("other_closed")})]},v)):n("friends_friendItem_workTime")})]},s))});_.propTypes={items:j.array.isRequired,handleTimeHover:j.func.isRequired,hoveredTime:j.string.isRequired};const Q=t.div``,U=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${o} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,V=z`
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
  background-color: #ffffff;
  box-shadow: ${({theme:e})=>e.boxShadow.main};
  border-radius: 20px;

  @media ${o} {
    border-radius: 40px;
    width: 342px;
    height: 263px;
  }

  @media ${r} {
    width: 394px;
    height: 287px;

    transition: box-shadow ${({theme:e})=>e.transitionHover};

    &:last-child {
      margin-right: auto;
    }
  }
`,Y=t(F)`
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
  @media ${r} {
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
  @media ${r} {
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
  @media ${r} {
    gap: 16px;
  }
`,f=t.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,u=t(F)`
  width: 40%;
  height: 16px;
  margin: 0;

  border-radius: 8px;

  @media ${o} {
    height: 16px;
  }
  @media ${r} {
    height: 16px;
  }
`,g=t(F)`
  width: 60%;
  height: 16px;

  border-radius: 8px;

  @media ${o} {
    height: 16px;
  }
  @media ${r} {
    height: 16px;
  }
`,te=({count:e})=>i.jsx(i.Fragment,{children:Array(e).fill(0).map((d,a)=>i.jsxs(X,{children:[i.jsx(Y,{inline:!0}),i.jsxs(Z,{children:[i.jsx(ee,{}),i.jsxs(ie,{children:[i.jsxs(f,{children:[i.jsx(u,{inline:!0}),i.jsx(g,{inline:!0})]}),i.jsxs(f,{children:[i.jsx(u,{inline:!0}),i.jsx(g,{inline:!0})]}),i.jsxs(f,{children:[i.jsx(u,{inline:!0}),i.jsx(g,{inline:!0})]}),i.jsxs(f,{children:[i.jsx(u,{inline:!0}),i.jsx(g,{inline:!0})]})]})]})]},a))}),I=({items:e})=>{const[d,a]=$.useState(""),s=x=>{a(x)};return i.jsx(Q,{children:i.jsx(U,{children:e.length!==0?i.jsx(_,{items:e,handleTimeHover:s,hoveredTime:d}):i.jsx(te,{count:10})})})};I.propTypes={items:j.array.isRequired};function se(){const[e,d]=$.useState([]),[a,s]=$.useState(!1);return $.useEffect(()=>{(async()=>{try{s(!0);const c=await R();d(c)}catch(c){console.log(c)}finally{s(!1)}})()},[]),i.jsxs(O,{children:[i.jsx(H,{children:i.jsx(L,{children:n("friends_title")})}),i.jsx(I,{items:e}),a?i.jsx(W,{}):null]})}export{se as default};
