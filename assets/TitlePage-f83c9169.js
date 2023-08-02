import{s as i,b as o,P as s,j as t}from"./index-7a2e64c5.js";const n=i.div`
  margin-top: 40px;

  @media ${o} {
    margin-top: 80px;
  }
`,r=i.h2`
  font-family: ${({theme:e})=>e.fonts.main.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({theme:e})=>e.colors.text};

  @media ${o} {
    font-size: ${({theme:e})=>e.fontSizes.huge};
  }
`,a=({children:e})=>t.jsx(n,{children:t.jsx(r,{children:e})});a.propTypes={children:s.any.isRequired};export{a as T};
