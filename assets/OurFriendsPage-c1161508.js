import{s as n,b as t,P as l,j as i,a as p,c as b,r as g}from"./index-0f2efbe4.js";const z=n.div`
  margin-top: 40px;

  @media ${t} {
    margin-top: 80px;
  }
`,w=n.h2`
  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({theme:e})=>e.colors.text};

  @media ${t} {
    font-size: ${({theme:e})=>e.fontSizes.huge};
  }
`,y=({children:e})=>i.jsx(z,{children:i.jsx(w,{children:e})});y.propTypes={children:l.any.isRequired};const I=n.section`
  padding-bottom: 75px;
`,R=n.div`
  margin-bottom: 24px;

  @media ${t} {
    margin-top: 40px;
  }

  @media ${p} {
    margin-bottom: 60px;
  }
`;b.defaults.baseURL="https://mypets-backend.onrender.com/api";const W=async()=>{try{const{data:{friends:e}}=await b.get("/friends");return e}catch(e){console.log(e)}},E=n.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: ${({theme:e})=>e.colors.bgdColorAuth};

  @media ${t} {
    min-width: 336px;
  }

  @media ${p} {
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
`,O=n.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,C=n.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,H=n.div``,q=n.img`
  width: 100px;
  height: 68px;

  @media ${t} {
    width: 124px;
    height: 88px;
  }

  @media ${p} {
    width: 146px;
    height: 104px;
  }
`,L=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c=n.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${t} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${p} {
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
`,P=n.p`
  position: relative;
`,u=n.p``,x=n.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,k=n.ul`
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
`,A=n.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,M=n.p`
  color: ${e=>e.theme.colors.text};
`,N=n.p`
  color: ${e=>e.theme.colors.text};
`,D=["MN","TU","WE","TH","FR","SA","SU"],T=({items:e,handleTimeHover:s,hoveredTime:a})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:o,url:h,title:F,workDays:r,address:$,email:m,phone:f,addressUrl:S})=>i.jsxs(E,{children:[i.jsx(C,{href:`${h}`,target:"_blank",children:F}),i.jsxs(O,{children:[i.jsx(H,{children:i.jsx(q,{src:o})}),i.jsxs(L,{children:[i.jsxs(c,{onMouseEnter:()=>s(o),onMouseLeave:()=>s(""),children:[i.jsx(P,{children:"Time:"}),i.jsx(x,{children:r?r[0].isOpen?`${r[0].from} - ${r[0].to}`:"Close":"Day and Night"})]}),i.jsxs(c,{children:[i.jsx(u,{children:"Address:"}),i.jsx(x,{href:S,target:"_blank",rel:"noopener noreferrer",children:$===null?"Website only":$})]}),i.jsxs(c,{children:[i.jsx(u,{children:"Email:"}),i.jsx(x,{href:`mailto:${m}`,children:m===null?"Telephone only":m})]}),i.jsxs(c,{children:[i.jsx(u,{children:"Phone:"}),i.jsx(x,{href:`tel:${f}`,children:f===null?"Email only":f})]})]})]}),a===o&&i.jsx(k,{children:r?r.map((d,j)=>d&&i.jsxs(A,{children:[i.jsxs(M,{children:[D[j],": "]}),i.jsx(N,{children:d.isOpen?`${d.from} - ${d.to}`:"Closed"})]},j)):"Day and Night"})]},o))});T.propTypes={items:l.array.isRequired,handleTimeHover:l.func.isRequired,hoveredTime:l.string.isRequired};const _=n.div``,B=n.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${t} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,v=({items:e})=>{const[s,a]=g.useState(""),o=h=>{a(h)};return i.jsx(_,{children:i.jsx(B,{children:i.jsx(T,{items:e,handleTimeHover:o,hoveredTime:s})})})};v.propTypes={items:l.array.isRequired};function J(){const[e,s]=g.useState([]);return g.useEffect(()=>{(async()=>{try{const o=await W();s(o)}catch(o){console.log(o)}})()},[]),i.jsxs(I,{children:[i.jsx(R,{children:i.jsx(y,{children:"Our friends"})}),i.jsx(v,{items:e})]})}export{J as default};
