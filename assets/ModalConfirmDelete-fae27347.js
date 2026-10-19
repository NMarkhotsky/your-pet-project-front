import{s as n,b as i,P as s,j as t,B as p,D as h,x as l,Y as f,y as u,z as g}from"./index-ee3ce916.js";import{r as y}from"./react-ecc61561.js";import{T as j,t as c}from"./translations-5abde677.js";const b=n.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${i} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`,$=n.h2`
  margin-bottom: 14px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.text};

  @media ${i} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 49px;
  }
`,z=n.p`
  margin-bottom: 44px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  color: ${({theme:e})=>e.colors.text};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,T=n.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,B=({handleModal:e,handleDelete:d,title:x="Delete advertisement?",name:o})=>{const[r,a]=y.useState(!1),m=async()=>{if(!r){a(!0);try{await d(),e()}finally{a(!1)}}};return t.jsxs(b,{children:[t.jsx($,{children:x}),t.jsx(z,{children:t.jsxs(j,{i18nKey:"modal_deletePet_description",values:{name:o},children:["Are you sure you want to delete ",t.jsxs(T,{children:["“",o,"”"]}),"? You can`t undo this action."]})}),t.jsxs(p,{children:[t.jsx(h,{onClick:e,children:t.jsx(l,{children:c("other_cancel")})}),t.jsxs(f,{disabled:r,onClick:m,children:[t.jsx(l,{children:c("other_yes")}),t.jsx(u,{children:t.jsx(g,{iconName:"icon-trash",stroke:"#FDF7F2"})})]})]})]})};B.propTypes={handleModal:s.func.isRequired,handleDelete:s.func.isRequired,title:s.string.isRequired,name:s.string.isRequired};export{B as M};
