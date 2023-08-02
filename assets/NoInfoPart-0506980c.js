import{s as i,b as n,a as o,j as t}from"./index-4a5d1b46.js";import{i as s}from"./catImg-34c1bda9.js";const a=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;
  padding-top: 60px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,r=i.h1`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${n} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,m=i.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${n} {
    max-width: 250px;
  }

  @media ${o} {
    max-width: 292px;
  }
`,d=()=>t.jsxs(a,{children:[t.jsxs(r,{children:[t.jsx("p",{children:"Sorry..."})," There is no information on your request :("," "]}),t.jsx(m,{src:s,alt:"Cat with tongue"})]});export{d as N};
