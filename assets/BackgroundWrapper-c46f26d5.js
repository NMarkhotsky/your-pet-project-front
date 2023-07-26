import{s as t,b as o,a as i,P as r,j as a}from"./index-9c87dbe8.js";const s="/your-pet-project-front/assets/bg_desktop-9087b7f4.webp",p="/your-pet-project-front/assets/bg_desktop@2x-c4d85c9b.webp",c="/your-pet-project-front/assets/bg_tablet-ff99c698.webp",n="/your-pet-project-front/assets/bg_tablet@2x-7daf05ac.webp",b="/your-pet-project-front/assets/bg_mobile-7969756c.webp",d="/your-pet-project-front/assets/bg_mobile@2x-6ff8cc11.webp",g=t.div`
  background-image: url(${b});
  background-repeat: no-repeat;
  background-size: cover;

  height: calc(100vh - 50px);
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${d});
  }

  @media ${o} {
    width: 720px;
    height: calc(100vh - 72px);
    background-image: url(${c});

    background-position-y: -68px;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${n});
      background-position-y: -68px;
    }
  }

  @media ${i} {
    background-image: url(${s});
    background-position-y: -68px;

    width: 1280px;
    height: calc(100vh - 70px);
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${p});
      background-position-y: -68px;
    }
  }
`,u=({children:e})=>a.jsx(g,{children:e});u.propTypes={children:r.any.isRequired};export{u as B};
