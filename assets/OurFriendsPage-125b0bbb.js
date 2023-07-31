import{s as i,b as t,P as d,j as n,a as f,c as y,r as m,L as z}from"./index-02054e5d.js";const w=i.div`
  margin-top: 40px;

  @media ${t} {
    margin-top: 80px;
  }
`,I=i.h2`
  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({theme:e})=>e.colors.text};

  @media ${t} {
    font-size: ${({theme:e})=>e.fontSizes.huge};
  }
`,T=({children:e})=>n.jsx(w,{children:n.jsx(I,{children:e})});T.propTypes={children:d.any.isRequired};const L=i.section`
  padding-bottom: 75px;
`,R=i.div`
  margin-bottom: 24px;

  @media ${t} {
    margin-top: 40px;
  }

  @media ${f} {
    margin-bottom: 60px;
  }
`;y.defaults.baseURL="https://mypets-backend.onrender.com/api";const W=async()=>{try{const{data:{friends:e}}=await y.get("/friends");return e}catch(e){console.log(e)}},E=i.li`
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
`,O=i.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,C=i.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,H=i.div``,q=i.img`
  width: 100px;
  height: 68px;

  @media ${t} {
    width: 124px;
    height: 88px;
  }

  @media ${f} {
    width: 146px;
    height: 104px;
  }
`,P=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,p=i.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${t} {
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
`,k=i.p`
  position: relative;
`,$=i.p``,h=i.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,A=i.ul`
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
`,M=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,N=i.p`
  color: ${e=>e.theme.colors.text};
`,D=i.p`
  color: ${e=>e.theme.colors.text};
`,_=["MN","TU","WE","TH","FR","SA","SU"],v=({items:e,handleTimeHover:s,hoveredTime:l})=>n.jsx(n.Fragment,{children:e.map(({imageUrl:o,url:c,title:a,workDays:r,address:j,email:u,phone:g,addressUrl:S})=>n.jsxs(E,{children:[n.jsx(C,{href:`${c}`,target:"_blank",children:a}),n.jsxs(O,{children:[n.jsx(H,{children:n.jsx(q,{src:o})}),n.jsxs(P,{children:[n.jsxs(p,{onMouseEnter:()=>s(o),onMouseLeave:()=>s(""),children:[n.jsx(k,{children:"Time:"}),n.jsx(h,{children:r?r[0].isOpen?`${r[0].from} - ${r[0].to}`:"Close":"Day and Night"})]}),n.jsxs(p,{children:[n.jsx($,{children:"Address:"}),n.jsx(h,{href:S,target:"_blank",rel:"noopener noreferrer",children:j===null?"Website only":j})]}),n.jsxs(p,{children:[n.jsx($,{children:"Email:"}),n.jsx(h,{href:`mailto:${u}`,children:u===null?"Telephone only":u})]}),n.jsxs(p,{children:[n.jsx($,{children:"Phone:"}),n.jsx(h,{href:`tel:${g}`,children:g===null?"Email only":g})]})]})]}),l===o&&n.jsx(A,{children:r?r.map((x,b)=>x&&n.jsxs(M,{children:[n.jsxs(N,{children:[_[b],": "]}),n.jsx(D,{children:x.isOpen?`${x.from} - ${x.to}`:"Closed"})]},b)):"Day and Night"})]},o))});v.propTypes={items:d.array.isRequired,handleTimeHover:d.func.isRequired,hoveredTime:d.string.isRequired};const B=i.div``,G=i.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${t} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,F=({items:e})=>{const[s,l]=m.useState(""),o=c=>{l(c)};return n.jsx(B,{children:n.jsx(G,{children:n.jsx(v,{items:e,handleTimeHover:o,hoveredTime:s})})})};F.propTypes={items:d.array.isRequired};function K(){const[e,s]=m.useState([]),[l,o]=m.useState(!1);return m.useEffect(()=>{(async()=>{try{o(!0);const a=await W();s(a)}catch(a){console.log(a)}finally{o(!1)}})()},[]),n.jsxs(L,{children:[n.jsx(R,{children:n.jsx(T,{children:"Our friends"})}),n.jsx(F,{items:e}),l?n.jsx(z,{}):null]})}export{K as default};
