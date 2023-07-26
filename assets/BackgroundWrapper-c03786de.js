import{s as e,b as t,a as o,j as i}from"./index-2bfba2e3.js";const a="/your-pet-project-front/assets/bg_desktop-9087b7f4.webp",r="/your-pet-project-front/assets/bg_desktop@2x-c4d85c9b.webp",s="/your-pet-project-front/assets/bg_tablet-ff99c698.webp",c="/your-pet-project-front/assets/bg_tablet@2x-7daf05ac.webp",n="/your-pet-project-front/assets/bg_mobile-7969756c.webp",p="/your-pet-project-front/assets/bg_mobile@2x-6ff8cc11.webp",b=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${n});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${p});
  }

  @media ${t} {
    width: calc(100vw - 20px);
    height: calc(100vh - 72px);
    background-image: url(${s});
    background-position-y: -68px;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${c});
      background-position-y: -68px;
    }
  }

  @media ${o} {
    background-image: url(${a});
    background-position-y: -68px;
    height: calc(100vh - 70px);

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${r});
      background-position-y: -68px;
    }
  }

  z-index: -1;
`,g=()=>i.jsx(b,{});export{g as B};
