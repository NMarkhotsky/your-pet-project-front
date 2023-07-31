import{s as e,b as i,I as l,P as o,j as n,t as x}from"./index-af1b9a6b.js";const d=e.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 44px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: ${({theme:t})=>t.boxShadow.main};

  @media ${i} {
    width: 608px;
  }
`,h=e.input`
  width: 100%;
  padding: 14px 36px 13px 20px;
  border-radius: 24px;
  border: none;
  color: ${({theme:t})=>t.colors.grey};
  font-family: ${({theme:t})=>t.fonts.secondary.medium};
  font-size: ${({theme:t})=>t.fontSizes.sm};

  &:focus {
    outline: 1px solid ${({theme:t})=>t.colors.blue};
  };

  @media ${i} {
    padding: 10px 80px 10px 20px;
    font-size: ${({theme:t})=>t.fontSizes.lg};
  }
`,u=e.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`,f=e.button`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-right: ${({value:t})=>t?"10px":"12px"};

  @media ${i} {
    margin-right: ${({value:t})=>t?"10px":"20px"};
  }

  transition: transform ${({theme:t})=>t.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:t})=>t.transitionHover};
  }
`,m=e.button`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;

  @media ${i} {
    margin-right: 20px;
  }

  transition: transform ${({theme:t})=>t.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:t})=>t.transitionHover};
  }
`,r=e(l)``,g=({value:t,onChange:s,onSubmit:a,onDelete:c})=>n.jsxs(d,{children:[n.jsx(h,{type:"text",value:t,onChange:p=>s(p.target.value),placeholder:x("other_search")}),n.jsxs(u,{children:[n.jsx(f,{type:"button",value:t,onClick:a,children:n.jsx(r,{iconName:"icon-search",fill:"#54ADFF"})}),t&&n.jsx(m,{type:"button",onClick:c,children:n.jsx(r,{iconName:"icon-cross",stroke:"#FFC107"})})]})]});g.propTypes={value:o.string,onChange:o.func.isRequired,onSubmit:o.func.isRequired,onDelete:o.func.isRequired};export{g as S};
