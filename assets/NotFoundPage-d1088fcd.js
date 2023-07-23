import{s as o,P as s,j as e,a as i,b as n,I as p}from"./index-f75f1d64.js";const c=o.button`
  position: relative;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 248px;
  height: 40px;
  padding: 8px 28px 8px 28px;
  letter-spacing: 0.64px;
  border-radius: 40px;

  color: ${t=>t.theme.colors.blue};
  font-family: ${t=>t.theme.fonts.main.bold};
  border: 2px solid ${t=>t.theme.colors.blue};
  font-size: ${t=>t.theme.fontSizes.md};
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${t=>t.theme.colors.white};
    border: 2px solid transparent;
    background: ${t=>t.theme.colors.blueGradient};
    transition: all ${t=>t.theme.transitionHover};
  }

  &:hover svg use,
  &:focus svg use {
    fill: ${t=>t.theme.colors.white};
    transition: ${t=>t.theme.transitionHover};
  }
`,a=({children:t,onClick:r})=>e.jsx(c,{type:"button",onClick:r,children:t});a.propTypes={children:s.any.isRequired,onClick:s.func};const x=o.h1`
  color: ${t=>t.theme.colors.black};
  font-family: 'Manrope';
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  margin: 80px auto;
  width: 280px;

  @media ${i} {
    margin-top: 60px;
    width: 450px;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
  }

  @media ${n} {
  }
`,d=o.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`,m=o.div`
  margin: auto;
  margin-bottom: 60px;

  @media ${i} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${n} {
    margin: auto;
    margin-bottom: 18px;
  }
`,l=o.img`
  margin: auto;
  max-width: 280px;
  height: 123px;

  @media ${i} {
    max-width: 704px;
    height: 308px;
  }

  @media ${n} {
    max-width: 822px;
    height: 360px;
  }
`,h="/your-pet-project-front/assets/catdesktop-5f423fe7.png",g="/your-pet-project-front/assets/catdesktop@2x-63410937.png",u="/your-pet-project-front/assets/cattablet@2x-3747ec80.png",f="/your-pet-project-front/assets/catmobile@2x-01c6e8a2.png",j=()=>e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx(d,{children:"Ooops!"})," This page not found :("]}),e.jsx(m,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:g,media:"(min-width: 1280px)"}),e.jsx("source",{srcSet:u,media:"(min-width: 768px) and (max-width: 1279px)"}),e.jsx("source",{srcSet:f,media:"(max-width: 767px)"}),e.jsx(l,{src:h,alt:"Cat with tongue"})]})}),e.jsxs(a,{children:["To main page",e.jsx(p,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})]});export{j as default};
