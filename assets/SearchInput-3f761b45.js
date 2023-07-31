import{s as e,b as o,I as l,P as i,j as n}from"./index-c479c0e8.js";const x=e.div`
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

  @media ${o} {
    width: 608px;
  }
`,d=e.input`
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

  @media ${o} {
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

  @media ${o} {
    margin-right: ${({value:t})=>t?"10px":"20px"};
  }

  transition: transform ${({theme:t})=>t.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:t})=>t.transitionHover};
  }
`,h=e.button`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;

  @media ${o} {
    margin-right: 20px;
  }

  transition: transform ${({theme:t})=>t.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:t})=>t.transitionHover};
  }
`,r=e(l)``,m=({value:t,onChange:s,onSubmit:a,onDelete:c})=>n.jsxs(x,{children:[n.jsx(d,{type:"text",value:t,onChange:p=>s(p.target.value),placeholder:"Search"}),n.jsxs(u,{children:[n.jsx(f,{type:"button",value:t,onClick:a,children:n.jsx(r,{iconName:"icon-search",fill:"#54ADFF"})}),t&&n.jsx(h,{type:"button",onClick:c,children:n.jsx(r,{iconName:"icon-cross",stroke:"#FFC107"})})]})]});m.propTypes={value:i.string,onChange:i.func.isRequired,onSubmit:i.func.isRequired,onDelete:i.func.isRequired};export{m as S};
