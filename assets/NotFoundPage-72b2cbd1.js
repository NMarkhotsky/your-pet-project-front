import{s as o,P as s,j as e,a as i,b as n,N as p,I as c}from"./index-9c87dbe8.js";import{B as d}from"./BackgroundWrapper-c46f26d5.js";const x=o.button`
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
    border: transparent;
    background: ${t=>t.theme.colors.blueGradient};
    transition: all ${t=>t.theme.transitionHover};
  }

  &:hover svg use,
  &:focus svg use {
    fill: ${t=>t.theme.colors.white};
    transition: ${t=>t.theme.transitionHover};
  }
`,a=({children:t,onClick:r})=>e.jsx(x,{type:"button",onClick:r,children:t});a.propTypes={children:s.any.isRequired,onClick:s.func};const m=o.div`
  @media ${i} {
    width: 100%;
    height: calc(100vh - 128px);
  }
`,h=o.h1`
  color: ${t=>t.theme.colors.black};
  font-family: ${t=>t.theme.fonts.main.bold};
  font-size: ${t=>t.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;
  margin: auto;
  padding: 80px 0;
  width: 280px;

  @media ${n} {
    padding-top: 60px;
    width: 450px;
    font-family: ${t=>t.theme.fonts.main.semiBold};
    font-size: ${t=>t.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }

  @media ${i} {
  }
`,l=o.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`,g=o.div`
  margin: auto;
  margin-bottom: 60px;

  @media ${n} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${i} {
    margin: auto;
    margin-bottom: 18px;
  }
`,u=o.img`
  margin: auto;
  max-width: 280px;
  height: 123px;

  @media ${n} {
    max-width: 704px;
    height: 308px;
  }

  @media ${i} {
    max-width: 822px;
    height: 360px;
  }
`,f="/your-pet-project-front/assets/catdesktop-5f423fe7.png",b="/your-pet-project-front/assets/catdesktop@2x-63410937.png",j="/your-pet-project-front/assets/cattablet@2x-3747ec80.png",$="/your-pet-project-front/assets/catmobile@2x-01c6e8a2.png",k=()=>e.jsx(d,{children:e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsx(l,{children:"Ooops!"})," This page not found :("]}),e.jsx(g,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:b,media:"(min-width: 1280px)"}),e.jsx("source",{srcSet:j,media:"(min-width: 768px) and (max-width: 1279px)"}),e.jsx("source",{srcSet:$,media:"(max-width: 767px)"}),e.jsx(u,{src:f,alt:"Cat with tongue"})]})}),e.jsx(p,{to:"/",children:e.jsxs(a,{children:["To main page",e.jsx(c,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})})]})});export{k as default};
