import{s as a,a as i,b as o,j as t}from"./index-64191879.js";import{B as s}from"./BackgroundWrapper-bc75c01e.js";const n=a.section`
  width: 100%;
  height: calc(100vh - 128px);

  @media ${i} {
    position: relative;
    display: flex;
    margin-bottom: 0;
    width: 100%;
  }
`,p=a.h1`
  z-index: 20;
  margin-top: 60px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xxxl};
  line-height: 1.4;
  color: ${e=>e.theme.colors.text};
  text-align: left;

  @media ${o} {
    margin-top: 80px;
    margin-bottom: 27px;

    width: 588px;
    height: 200px;
    font-size: ${e=>e.theme.fontSizes.gigantic};
  }

  @media ${i} {
    margin-top: 188px;
    margin-bottom: 248px;

    width: 501px;
    height: 264px;
    font-family: ${e=>e.theme.fonts.main.extraBold};
    line-height: 1.3;
  }
`,r=a.img`
  position: absolute;
  width: 100%;
  left: 0px;

  @media ${o} {
    transform: translateY(-10%);
  }

  @media ${i} {
    width: auto;
    height: calc(100vh - 70px);
    left: auto;
    right: 0px;
    transform: none;
  }
`,m="/your-pet-project-front/assets/mp-mobile2x-1d663d35.webp",x="/your-pet-project-front/assets/mp-tablet2x-8a72873c.webp",l="/your-pet-project-front/assets/mp-desktop1x-e906f32d.webp",c="/your-pet-project-front/assets/mp-desktop2x-fc2e63e4.webp";function g(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),t.jsxs(n,{children:[t.jsx(p,{children:"Take good care of your small pets"}),t.jsxs("picture",{children:[t.jsx("source",{srcSet:m,media:"(max-width: 767px)",type:"image/png",alt:"mobile image"}),t.jsx("source",{srcSet:x,media:"(min-width: 768px) and (max-width: 1279px)",type:"image/png",alt:"tablet image"}),t.jsx("source",{srcSet:c,media:"(min-width: 1280px)",type:"image/png",alt:"desktop image"}),t.jsx(r,{srcSet:l,alt:"puppy"})]})]})]})}export{g as default};
