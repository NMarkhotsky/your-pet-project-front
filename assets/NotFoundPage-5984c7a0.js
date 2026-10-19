import{s as o,a as i,b as a,j as e,I as s}from"./index-ee3ce916.js";import{N as r}from"./react-ecc61561.js";import{B as m}from"./Btn.styled-bc5f3f54.js";import{B as p}from"./BackgroundWrapper-737bd8f4.js";import{t as n}from"./translations-5abde677.js";import"./state-c18d5234.js";import"./forms-b2853f00.js";const x=o.div`
  @media ${i} {
    width: 100%;
    height: calc(100vh - 128px);
  }
`,c=o.h1`
  color: ${t=>t.theme.colors.text};
  font-family: ${t=>t.theme.fonts.main.bold};
  font-size: ${t=>t.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;
  margin: auto;
  padding: 80px 0;
  width: 280px;

  @media ${a} {
    padding-top: 60px;
    width: 450px;
    font-family: ${t=>t.theme.fonts.main.semiBold};
    font-size: ${t=>t.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }

  @media ${i} {
  }
`;o.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`;const d=o.div`
  margin: auto;
  margin-bottom: 60px;

  @media ${a} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${i} {
    margin: auto;
    margin-bottom: 18px;
  }
`,h=o.img`
  margin: auto;
  max-width: 280px;
  height: 123px;

  @media ${a} {
    max-width: 704px;
    height: 308px;
  }

  @media ${i} {
    max-width: 822px;
    height: 360px;
  }
`,l=o(m)`
  background: ${t=>t.theme.colors.blue};
  color: ${t=>t.theme.colors.textBtn};

  & > svg > use {
    fill: ${t=>t.theme.colors.textBtn};
  }

  &:hover,
  &:focus {
    background: ${t=>t.theme.colors.blueGradient};
  }
`,g="/your-pet-project-front/assets/catdesktop-5f423fe7.png",u="/your-pet-project-front/assets/catdesktop@2x-63410937.png",f="/your-pet-project-front/assets/cattablet@2x-3747ec80.png",j="/your-pet-project-front/assets/catmobile@2x-01c6e8a2.png",F=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsxs(x,{children:[e.jsxs(c,{children:[n("notFoundPage_title"),":("]}),e.jsx(d,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:u,media:"(min-width: 1280px)"}),e.jsx("source",{srcSet:f,media:"(min-width: 768px) and (max-width: 1279px)"}),e.jsx("source",{srcSet:j,media:"(max-width: 767px)"}),e.jsx(h,{src:g,alt:"Cat with tongue"})]})}),e.jsx(r,{to:"/",children:e.jsxs(l,{children:[n("notFoundPage_btn"),e.jsx(s,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})})]})]});export{F as default};
