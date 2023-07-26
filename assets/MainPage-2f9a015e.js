import{s as i,a,b as o,j as e}from"./index-9c87dbe8.js";import{B as s}from"./BackgroundWrapper-c46f26d5.js";const p=i.section`
  width: 100%;
  height: calc(100vh - 128px);

  @media ${a} {
    position: relative;
    display: flex;
    margin-bottom: 0;
    width: 100%;
  }
`,n=i.h1`
  z-index: 20;
  margin-top: 60px;
  margin-bottom: 20px;
  width: 280px;
  height: 108px;
  font-family: ${t=>t.theme.fonts.main.bold};
  font-size: ${t=>t.theme.fontSizes.xxxl};
  line-height: 1.4;
  color: ${t=>t.theme.colors.black};

  @media ${o} {
    margin-top: 80px;
    margin-bottom: 27px;
    margin-left: 32px;
    width: 588px;
    height: 200px;
    font-size: ${t=>t.theme.fontSizes.gigantic};
  }

  @media ${a} {
    margin-top: 188px;
    margin-bottom: 248px;
    margin-left: 16px;
    width: 501px;
    height: 264px;
    font-family: ${t=>t.theme.fonts.main.extraBold};
    line-height: 1.3;
  }
`,m=i.img`
  position: absolute;
  width: 100%;
  left: 0px;

  @media ${o} {
    transform: translateY(-10%);
  }

  @media ${a} {
    width: auto;
    height: calc(100vh - 70px);
    left: auto;
    right: 0px;
    transform: none;
  }
`,r="/your-pet-project-front/assets/mp-mobile2x-1d663d35.webp",x="/your-pet-project-front/assets/mp-tablet2x-8a72873c.webp",l="/your-pet-project-front/assets/mp-desktop1x-e906f32d.webp",c="/your-pet-project-front/assets/mp-desktop2x-fc2e63e4.webp";function g(){return e.jsx(s,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Take good care of your small pets"}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:r,media:"(max-width: 767px)",type:"image/png",alt:"mobile image"}),e.jsx("source",{srcSet:x,media:"(min-width: 768px) and (max-width: 1279px)",type:"image/png",alt:"tablet image"}),e.jsx("source",{srcSet:c,media:"(min-width: 1280px)",type:"image/png",alt:"desktop image"}),e.jsx(m,{srcSet:l,alt:"puppy"})]})]})})}export{g as default};
