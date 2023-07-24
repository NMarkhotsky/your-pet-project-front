import{s as n,b as s,P as d,j as i,a as p,c as b,r as f}from"./index-bde021fe.js";const z=n.div`
  margin-top: 40px;

  @media ${s} {
    margin-top: 80px;
  }
`,S=n.h2`
  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({theme:e})=>e.colors.black};

  @media ${s} {
    font-size: ${({theme:e})=>e.fontSizes.huge};
  }
`,y=({children:e})=>i.jsx(z,{children:i.jsx(S,{children:e})});y.propTypes={children:d.any.isRequired};const w=n.section`
  padding-bottom: 75px;
`,I=n.div`
  margin-bottom: 24px;

  @media ${s} {
    margin-top: 40px;
  }

  @media ${p} {
    margin-bottom: 60px;
  }
`;b.defaults.baseURL="https://mypets-backend.onrender.com/api/friends";const R=async()=>{try{const{data:{friends:e}}=await b.get();return e}catch(e){console.log(e)}},W=n.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: #fff;

  @media ${s} {
    min-width: 336px;
  }

  @media ${p} {
    min-width: 394px;

    &:last-child {
      flex: 0;
      margin-right: auto;
    }
  }
`,E=n.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,O=n.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,q=n.div``,L=n.img`
  width: 100px;
  height: 68px;

  @media ${s} {
    width: 124px;
    height: 88px;
  }

  @media ${p} {
    width: 146px;
    height: 104px;
  }
`,P=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c=n.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${s} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${p} {
    font-size: ${({theme:e})=>e.fontSizes.md};
  }

  &:hover {
    color: ${({theme:e})=>e.colors.blue};

    cursor: pointer;
  }
`,k=n.p`
  position: relative;
`,h=n.p``,x=n.p`
  font-family: ${({theme:e})=>e.fonts.main.regular};
`,C=n.ul`
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

  background-color: #fff;

  transition: all ${({theme:e})=>e.transitionHover};
`,H=n.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,M=n.p``,N=n.p``,A=["MN","TU","WE","TH","FR","SA","SU"],T=({items:e,handleTimeHover:o,hoveredTime:l})=>i.jsx(i.Fragment,{children:e.map(({imageUrl:t,url:m,title:v,workDays:r,address:u,email:g,phone:j})=>i.jsxs(W,{children:[i.jsx(O,{href:`${m}`,target:"_blank",children:v}),i.jsxs(E,{children:[i.jsx(q,{children:i.jsx(L,{src:t})}),i.jsxs(P,{children:[i.jsxs(c,{onMouseEnter:()=>o(t),onMouseLeave:()=>o(""),children:[i.jsx(k,{children:"Time:"}),i.jsx(x,{children:r?r[0].isOpen?`${r[0].from} - ${r[0].to}`:"Close":"Day and Night"})]}),i.jsxs(c,{children:[i.jsx(h,{children:"Address:"}),i.jsx(x,{children:u===null?"Website only":u})]}),i.jsxs(c,{children:[i.jsx(h,{children:"Email:"}),i.jsx(x,{children:g===null?"Telephone only":g})]}),i.jsxs(c,{children:[i.jsx(h,{children:"Phone:"}),i.jsx(x,{children:j===null?"Email only":j})]})]})]}),l===t&&i.jsx(C,{children:r?r.map((a,$)=>a&&i.jsxs(H,{children:[i.jsxs(M,{children:[A[$],": "]}),i.jsx(N,{children:a.isOpen?`${a.from} - ${a.to}`:"Closed"})]},$)):"Day and Night"})]},t))});T.propTypes={items:d.array.isRequired,handleTimeHover:d.func.isRequired,hoveredTime:d.string.isRequired};const D=n.div``,B=n.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${s} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,F=({items:e})=>{const[o,l]=f.useState(""),t=m=>{l(m)};return i.jsx(D,{children:i.jsx(B,{children:i.jsx(T,{items:e,handleTimeHover:t,hoveredTime:o})})})};F.propTypes={items:d.array.isRequired};function G(){const[e,o]=f.useState([]);return f.useEffect(()=>{(async()=>{try{const t=await R();o(t)}catch(t){console.log(t)}})()},[]),i.jsxs(w,{children:[i.jsx(I,{children:i.jsx(y,{children:"Our friends"})}),i.jsx(F,{items:e})]})}export{G as default};
