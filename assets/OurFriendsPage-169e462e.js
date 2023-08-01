import{s as i,b as d,a as u,e as y,t as o,P as p,j as t,r as f,d as I}from"./index-ce3f9b10.js";import{T as S}from"./TitlePage-204193bb.js";const w=i.section`
  padding-bottom: 75px;
`,z=i.div`
  margin-bottom: 24px;

  @media ${d} {
    margin-top: 40px;
  }

  @media ${u} {
    margin-bottom: 60px;
  }
`;y.defaults.baseURL="https://mypets-backend.onrender.com/api";const L=async()=>{try{const{data:{friends:e}}=await y.get("/friends");return e}catch(e){console.log(e)}},O=i.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({theme:e})=>e.boxShadow.main};

  background-color: ${({theme:e})=>e.colors.bgdColorAuth};

  @media ${d} {
    min-width: 336px;
  }

  @media ${u} {
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
`,W=i.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`,R=i.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({theme:e})=>e.colors.blue};
`,k=i.div``,H=i.img`
  width: 100px;
  height: 68px;

  @media ${d} {
    width: 124px;
    height: 88px;
  }

  @media ${u} {
    width: 146px;
    height: 104px;
  }
`,E=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,x=i.div`
  font-family: ${({theme:e})=>e.fonts.main.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;

  @media ${d} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media ${u} {
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
`,q=i.p`
  position: relative;
`,j=i.p``,m=i.a`
  font-family: ${({theme:e})=>e.fonts.main.regular};
  color: ${({theme:e})=>e.colors.text};
`,P=i.ul`
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
`,C=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};

  /* color: #111; */
`,M=i.p`
  color: ${e=>e.theme.colors.text};
`,A=i.p`
  color: ${e=>e.theme.colors.text};
`,B=[o("other_MN"),o("other_TU"),o("other_WE"),o("other_TH"),o("other_FR"),o("other_SA"),o("other_SU")],T=({items:e,handleTimeHover:n,hoveredTime:l})=>t.jsx(t.Fragment,{children:e.map(({imageUrl:r,url:c,title:a,workDays:s,address:b,email:g,phone:$,addressUrl:F})=>t.jsxs(O,{children:[t.jsx(R,{href:`${c}`,target:"_blank",children:a}),t.jsxs(W,{children:[t.jsx(k,{children:t.jsx(H,{src:r})}),t.jsxs(E,{children:[t.jsxs(x,{onMouseEnter:()=>n(r),onMouseLeave:()=>n(""),children:[t.jsxs(q,{children:[o("other_time"),":"]}),t.jsx(m,{children:s?s[0].isOpen?`${s[0].from} - ${s[0].to}`:o("other_close"):o("friends_friendItem_workTime")})]}),t.jsxs(x,{children:[t.jsxs(j,{children:[o("other_address"),":"]}),t.jsx(m,{href:F,target:"_blank",rel:"noopener noreferrer",children:b===null?"Website only":b})]}),t.jsxs(x,{children:[t.jsxs(j,{children:[o("other_email"),":"]}),t.jsx(m,{href:`mailto:${g}`,children:g===null?o("friends_friendItem_phoneOnly"):g})]}),t.jsxs(x,{children:[t.jsxs(j,{children:[o("other_phone"),":"]}),t.jsx(m,{href:`tel:${$}`,children:$===null?o("friends_friendItem_emailOnly"):$})]})]})]}),l===r&&t.jsx(P,{children:s?s.map((h,_)=>h&&t.jsxs(C,{children:[t.jsxs(M,{children:[B[_],": "]}),t.jsx(A,{children:h.isOpen?`${h.from} - ${h.to}`:o("other_closed")})]},_)):o("friends_friendItem_workTime")})]},r))});T.propTypes={items:p.array.isRequired,handleTimeHover:p.func.isRequired,hoveredTime:p.string.isRequired};const N=i.div``,D=i.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${d} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,v=({items:e})=>{const[n,l]=f.useState(""),r=c=>{l(c)};return t.jsx(N,{children:t.jsx(D,{children:t.jsx(T,{items:e,handleTimeHover:r,hoveredTime:n})})})};v.propTypes={items:p.array.isRequired};function K(){const[e,n]=f.useState([]),[l,r]=f.useState(!1);return f.useEffect(()=>{(async()=>{try{r(!0);const a=await L();n(a)}catch(a){console.log(a)}finally{r(!1)}})()},[]),t.jsxs(w,{children:[t.jsx(z,{children:t.jsx(S,{children:o("friends_title")})}),t.jsx(v,{items:e}),l?t.jsx(I,{}):null]})}export{K as default};
