import{s,b as i,P as n,j as t,T as c,a6 as x,aa as h,A as r,t as a,ab as m,D as p,E as f}from"./index-bb383ab6.js";const u=s.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${i} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`,g=s.h2`
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
`,j=s.p`
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
`,$=s.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,b=({handleModal:e,handleDelete:l,title:d="Delete advertisement?",name:o})=>t.jsxs(u,{children:[t.jsx(g,{children:d}),t.jsx(j,{children:t.jsxs(c,{i18nKey:"modal_deletePet_description",values:{name:o},children:["Are you sure you want to delete ",t.jsxs($,{children:["“",o,"”"]}),"? You can`t undo this action."]})}),t.jsxs(x,{children:[t.jsx(h,{onClick:e,children:t.jsx(r,{children:a("other_cancel")})}),t.jsxs(m,{onClick:l,children:[t.jsx(r,{children:a("other_yes")}),t.jsx(p,{children:t.jsx(f,{iconName:"icon-trash",stroke:"#FDF7F2"})})]})]})]});b.propTypes={handleModal:n.func.isRequired,handleDelete:n.func.isRequired,title:n.string.isRequired,name:n.string.isRequired};export{b as M};
