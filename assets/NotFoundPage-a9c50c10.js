import{s as o,a,b as i,j as e,t as n,N as s,I as r}from"./index-8b649952.js";import{B as x}from"./Btn.styled-ff6a5cac.js";import{B as c}from"./BackgroundWrapper-121bb1ee.js";const m=o.div`
  @media ${a} {
    width: 100%;
    height: calc(100vh - 128px);
  }
`,d=o.h1`
  color: ${t=>t.theme.colors.text};
  font-family: ${t=>t.theme.fonts.main.bold};
  font-size: ${t=>t.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;
  margin: auto;
  padding: 80px 0;
  width: 280px;

  @media ${i} {
    padding-top: 60px;
    width: 450px;
    font-family: ${t=>t.theme.fonts.main.semiBold};
    font-size: ${t=>t.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }

  @media ${a} {
  }
`;o.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`;const p=o.div`
  margin: auto;
  margin-bottom: 60px;

  @media ${i} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${a} {
    margin: auto;
    margin-bottom: 18px;
  }
`,h=o.img`
  margin: auto;
  max-width: 280px;
  height: 123px;

  @media ${i} {
    max-width: 704px;
    height: 308px;
  }

  @media ${a} {
    max-width: 822px;
    height: 360px;
  }
`,l=o(x)`
  background: ${t=>t.theme.colors.blue};
  color: ${t=>t.theme.colors.textBtn};

  & > svg > use {
    fill: ${t=>t.theme.colors.textBtn};
  }

  &:hover,
  &:focus {
    background: ${t=>t.theme.colors.blueGradient};
  }
`,g="/your-pet-project-front/assets/catdesktop-5f423fe7.png",u="/your-pet-project-front/assets/catdesktop@2x-63410937.png",f="/your-pet-project-front/assets/cattablet@2x-3747ec80.png",j="/your-pet-project-front/assets/catmobile@2x-01c6e8a2.png",k=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsxs(m,{children:[e.jsxs(d,{children:[n("notFoundPage_title"),":("]}),e.jsx(p,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:u,media:"(min-width: 1280px)"}),e.jsx("source",{srcSet:f,media:"(min-width: 768px) and (max-width: 1279px)"}),e.jsx("source",{srcSet:j,media:"(max-width: 767px)"}),e.jsx(h,{src:g,alt:"Cat with tongue"})]})}),e.jsx(s,{to:"/",children:e.jsxs(l,{children:[n("notFoundPage_btn"),e.jsx(r,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})})]})]});export{k as default};
