import{s as i,b as a,a as f,d as y,P as m,j as o,r as h,e as S}from"./index-c479c0e8.js";import{T as w}from"./TitlePage-6d97faf7.js";const I=i.section`
  padding-bottom: 75px;
`,z=i.div`
  margin-bottom: 24px;

  @media ${a} {
    margin-top: 40px;
  }

  @media ${f} {
    margin-bottom: 60px;
  }
`;y.defaults.baseURL="https://mypets-backend.onrender.com/api";const L=async()=>{try{const{data:{friends:e}}=await y.get("/friends");return e}catch(e){console.log(e)}},W=i.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: ${({theme:e})=>e.colors.bgdColorAuth};

  @media ${a} {
    min-width: 336px;
  }

  @media ${f} {
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
`,E=i.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,O=i.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,R=i.div``,H=i.img`
  width: 100px;
  height: 68px;

  @media ${a} {
    width: 124px;
    height: 88px;
  }

  @media ${f} {
    width: 146px;
    height: 104px;
  }
`,C=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,x=i.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${a} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${f} {
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
`,P=i.p`
  position: relative;
`,$=i.p``,p=i.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,k=i.ul`
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
`,q=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,A=i.p`
  color: ${e=>e.theme.colors.text};
`,M=i.p`
  color: ${e=>e.theme.colors.text};
`,N=["MN","TU","WE","TH","FR","SA","SU"],T=({items:e,handleTimeHover:t,hoveredTime:r})=>o.jsx(o.Fragment,{children:e.map(({imageUrl:n,url:d,title:l,workDays:s,address:j,email:u,phone:g,addressUrl:F})=>o.jsxs(W,{children:[o.jsx(O,{href:`${d}`,target:"_blank",children:l}),o.jsxs(E,{children:[o.jsx(R,{children:o.jsx(H,{src:n})}),o.jsxs(C,{children:[o.jsxs(x,{onMouseEnter:()=>t(n),onMouseLeave:()=>t(""),children:[o.jsx(P,{children:"Time:"}),o.jsx(p,{children:s?s[0].isOpen?`${s[0].from} - ${s[0].to}`:"Close":"Day and Night"})]}),o.jsxs(x,{children:[o.jsx($,{children:"Address:"}),o.jsx(p,{href:F,target:"_blank",rel:"noopener noreferrer",children:j===null?"Website only":j})]}),o.jsxs(x,{children:[o.jsx($,{children:"Email:"}),o.jsx(p,{href:`mailto:${u}`,children:u===null?"Telephone only":u})]}),o.jsxs(x,{children:[o.jsx($,{children:"Phone:"}),o.jsx(p,{href:`tel:${g}`,children:g===null?"Email only":g})]})]})]}),r===n&&o.jsx(k,{children:s?s.map((c,b)=>c&&o.jsxs(q,{children:[o.jsxs(A,{children:[N[b],": "]}),o.jsx(M,{children:c.isOpen?`${c.from} - ${c.to}`:"Closed"})]},b)):"Day and Night"})]},n))});T.propTypes={items:m.array.isRequired,handleTimeHover:m.func.isRequired,hoveredTime:m.string.isRequired};const D=i.div``,_=i.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${a} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,v=({items:e})=>{const[t,r]=h.useState(""),n=d=>{r(d)};return o.jsx(D,{children:o.jsx(_,{children:o.jsx(T,{items:e,handleTimeHover:n,hoveredTime:t})})})};v.propTypes={items:m.array.isRequired};function J(){const[e,t]=h.useState([]),[r,n]=h.useState(!1);return h.useEffect(()=>{(async()=>{try{n(!0);const l=await L();t(l)}catch(l){console.log(l)}finally{n(!1)}})()},[]),o.jsxs(I,{children:[o.jsx(z,{children:o.jsx(w,{children:"Our friends"})}),o.jsx(v,{items:e}),r?o.jsx(S,{}):null]})}export{J as default};
