import{s as i,a as o,b as a,j as t}from"./index-ee3ce916.js";import{B as s}from"./BackgroundWrapper-737bd8f4.js";import{t as p}from"./translations-5abde677.js";import"./react-ecc61561.js";import"./state-c18d5234.js";import"./forms-b2853f00.js";const n=i.section`
  width: 100%;
  height: calc(100vh - 128px);

  @media ${o} {
    position: relative;
    display: flex;
    margin-bottom: 0;
    width: 100%;
  }
`,m=i.h1`
  z-index: 20;
  margin-top: 60px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xxxl};
  line-height: 1.4;
  color: ${e=>e.theme.colors.text};
  text-align: left;

  @media ${a} {
    margin-top: 80px;
    margin-bottom: 27px;

    width: 588px;
    height: 200px;
    font-size: ${e=>e.theme.fontSizes.gigantic};
  }

  @media ${o} {
    margin-top: 188px;
    margin-bottom: 248px;

    width: 501px;
    height: 264px;
    font-family: ${e=>e.theme.fonts.main.extraBold};
    line-height: 1.3;
  }
`,r=i.img`
  position: absolute;
  width: 100%;
  left: 0px;

  @media ${a} {
    transform: translateY(-10%);
  }

  @media ${o} {
    width: auto;
    height: calc(100vh - 70px);
    left: auto;
    right: 0px;
    transform: none;
  }
`,x="/your-pet-project-front/assets/mp-mobile2x-1d663d35.webp",l="/your-pet-project-front/assets/mp-tablet2x-8a72873c.webp",c="/your-pet-project-front/assets/mp-desktop1x-e906f32d.webp",d="/your-pet-project-front/assets/mp-desktop2x-fc2e63e4.webp";function w(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),t.jsxs(n,{children:[t.jsx(m,{children:p("main_hero_title")}),t.jsxs("picture",{children:[t.jsx("source",{srcSet:x,media:"(max-width: 767px)",type:"image/png",alt:"mobile image"}),t.jsx("source",{srcSet:l,media:"(min-width: 768px) and (max-width: 1279px)",type:"image/png",alt:"tablet image"}),t.jsx("source",{srcSet:d,media:"(min-width: 1280px)",type:"image/png",alt:"desktop image"}),t.jsx(r,{srcSet:c,alt:"puppy"})]})]})]})}export{w as default};
