import{s as o,a as i,b as a,j as e,N as s,I as n}from"./index-af9d40fb.js";import{B as r}from"./Btn.styled-5448547b.js";import{B as c}from"./BackgroundWrapper-170dd3cf.js";const p=o.div`
  @media ${i} {
    width: 100%;
    height: calc(100vh - 128px);
  }
`,x=o.h1`
  color: ${t=>t.theme.colors.black};
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
`,m=o.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`,d=o.div`
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
`,l=o(r)`
  background: ${t=>t.theme.colors.blue};
  color: ${t=>t.theme.colors.textBtn};

  & > svg > use {
    fill: ${t=>t.theme.colors.textBtn};
  }

  &:hover,
  &:focus {
    background: ${t=>t.theme.colors.blueGradient};
  }
`,g="/your-pet-project-front/assets/catdesktop-5f423fe7.png",u="/your-pet-project-front/assets/catdesktop@2x-63410937.png",f="/your-pet-project-front/assets/cattablet@2x-3747ec80.png",j="/your-pet-project-front/assets/catmobile@2x-01c6e8a2.png",k=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsxs(p,{children:[e.jsxs(x,{children:[e.jsx(m,{children:"Ooops!"})," This page not found :("]}),e.jsx(d,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:u,media:"(min-width: 1280px)"}),e.jsx("source",{srcSet:f,media:"(min-width: 768px) and (max-width: 1279px)"}),e.jsx("source",{srcSet:j,media:"(max-width: 767px)"}),e.jsx(h,{src:g,alt:"Cat with tongue"})]})}),e.jsx(s,{to:"/",children:e.jsxs(l,{children:["To main page",e.jsx(n,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})})]})]});export{k as default};
