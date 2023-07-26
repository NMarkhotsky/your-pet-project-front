import{s as o,P as s,j as t,b as i,a as n,N as c,I as d}from"./index-59a6d71f.js";const m=o.button`
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

  color: ${e=>e.theme.colors.blue};
  font-family: ${e=>e.theme.fonts.main.bold};
  border: 2px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.md};
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.white};
    border: transparent;
    background: ${e=>e.theme.colors.blueGradient};
    transition: all ${e=>e.theme.transitionHover};
  }

  &:hover svg use,
  &:focus svg use {
    fill: ${e=>e.theme.colors.white};
    transition: ${e=>e.theme.transitionHover};
  }
`,a=({children:e,onClick:p})=>t.jsx(m,{type:"button",onClick:p,children:e});a.propTypes={children:s.any.isRequired,onClick:s.func};const x=o.h1`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;
  margin: auto;
  padding: 80px 0;
  width: 280px;

  @media ${i} {
    padding-top: 60px;
    width: 450px;
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }

  @media ${n} {
  }
`,l=o.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`,g=o.div`
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
`,h=o.img`
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
`,u="/your-pet-project-front/assets/bg_desktop-2f3785e8.png",b="/your-pet-project-front/assets/bg_desktop@2x-655e5e5f.png",f="/your-pet-project-front/assets/bg_tablet-0df9b1e2.png",j="/your-pet-project-front/assets/bg_tablet@2x-6c3725ec.png",k="/your-pet-project-front/assets/bg_mobile-fde2e03c.png",$="/your-pet-project-front/assets/bg_mobile@2x-92c0ddcd.png",y=o.div`
  background-image: url(${k});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -68px;

  height: 100% @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${$});
  }

  @media ${i} {
    width: 768px;
    height: 1125px;
    background-image: url(${f});
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${j});
    }
  }

  @media ${n} {
    background-image: url(${u});
    width: 1280px;
    height: 702px;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${b});
    }
  }
`,r=({children:e})=>t.jsx(y,{children:e});r.propTypes={children:s.any.isRequired};const w="/your-pet-project-front/assets/catdesktop-5f423fe7.png",v="/your-pet-project-front/assets/catdesktop@2x-63410937.png",T="/your-pet-project-front/assets/cattablet@2x-3747ec80.png",z="/your-pet-project-front/assets/catmobile@2x-01c6e8a2.png",B=()=>t.jsx(r,{children:t.jsxs("div",{children:[t.jsxs(x,{children:[t.jsx(l,{children:"Ooops!"})," This page not found :("]}),t.jsx(g,{children:t.jsxs("picture",{children:[t.jsx("source",{srcSet:v,media:"(min-width: 1280px)"}),t.jsx("source",{srcSet:T,media:"(min-width: 768px) and (max-width: 1279px)"}),t.jsx("source",{srcSet:z,media:"(max-width: 767px)"}),t.jsx(h,{src:w,alt:"Cat with tongue"})]})}),t.jsx(c,{to:"/",children:t.jsxs(a,{children:["To main page",t.jsx(d,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})})]})});export{B as default};
