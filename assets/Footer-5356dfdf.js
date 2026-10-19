import{s,j as t,I as i}from"./index-ee3ce916.js";import{L as e}from"./react-ecc61561.js";import{t as j}from"./translations-5abde677.js";import"./state-c18d5234.js";import"./forms-b2853f00.js";const b=s.footer`
  width: 100%;

  position: fixed;
  left: 0;
  bottom: 0;

  z-index: 20;

  background-color: rgba(255, 255, 255, 0.8);
  transition: left 0.3s ease;
`,f=s.h2`
  position: absolute;
  left: 45%;
  padding-top: 20px;
  text-align: center;
  font-size: ${o=>o.theme.fontSizes.xxxl};

  color: ${({theme:o})=>o.colors.black};
`;s.span`
  display: flex;
  align-items: center;
`;const u=s.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 30px;
  padding-bottom: 20px;

  color: ${({theme:o})=>o.colors.black};
`,g=s.div`
  animation: pulse 1s infinite;
  width: 24px;
  height: 24px;
`,m=s.div`
  width: 24px;
  height: 24px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 12px;
    top: 2px;
    width: 12px;
    height: 19.2px;
    background: ${o=>o.theme.colors.yellow};
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: pulsecolor 1s infinite;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: pulsecolor 1s infinite;
  }

  @keyframes pulse {
    10% {
      transform: scale(1.1);
    }
  }

  @keyframes pulsecolor {
    10% {
      background: ${o=>o.theme.colors.blue};
    }
  }
`,y=s.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`,r=s.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 74px;

  transform: scale(0.55);
`,x=s.img`
  pointer-events: none;
  position: relative;
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
`,c=s.div`
  border-radius: 50%;
  height: 312px;
  -webkit-tap-highlight-color: transparent;
  transform: scale(0.48);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 400px;
  cursor: pointer;

  &:hover {
    transform: scale(0.54);
  }

  &:hover ${x} {
    transform: translateY(0) scale(1.2);
  }
`,l=s.div`
  clip-path: path(
    'M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z'
  );
  position: relative;
  transform-origin: 50%;
`,a=s.img`
  background-color: #fee7d3;
  border-radius: 50%;
  cursor: pointer;
  height: 380px;
  left: 10px;
  pointer-events: none;
  position: absolute;
  top: 210px;
  width: 380px;
`,d=s(x)`
  left: 22px;
  top: 164px;
  overflow: hidden;
  width: 340px;
`,k=s(x)`
  left: 22px;
  top: 180px;
  overflow: hidden;
  width: 340px;
`,v=s(x)`
  left: 22px;
  top: 200px;
  overflow: hidden;
  width: 340px;
`,h=s.div`
  position: absolute;
  top: 6%;
  left: 24%;
  display: flex;
  padding-bottom: 5px;
  flex-direction: column;
  width: 170px;
  justify-content: center;
  align-items: center;
  background-color: rgba(225, 225, 225, 0.6);
  border: 1px solid ${o=>o.theme.colors.yellow};
  box-shadow: ${({theme:o})=>o.boxShadow.main};
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
  /* transition: all ${({theme:o})=>o.transitionHover}; */

  ${r}:hover & {
    opacity: 1;
  }
`,p=s.div`
  color: #404245;
  font-size: ${o=>o.theme.fontSizes.md};
  margin-top: 10px;
  text-align: center;
  font-family: ${o=>o.theme.fonts.main.bold};
`,n=s.div`
  color: #6e6e6e;
  font-family: arial;
  font-size: ${o=>o.theme.fontSizes.md};
  font-style: italic;
  margin-top: 4px;
`,w="/your-pet-project-front/assets/1-f7f92678.jpg",_="/your-pet-project-front/assets/2-622f4d6c.jpg",A="/your-pet-project-front/assets/3-0b1f5598.jpg",I="/your-pet-project-front/assets/4-d63aba8d.jpg",N="/your-pet-project-front/assets/5-b39b3846.jpg",z="/your-pet-project-front/assets/6-7f6a84cd.jpg",T="/your-pet-project-front/assets/7-f82a7483.jpg",$="/your-pet-project-front/assets/8-10eeef21.jpg",F="/your-pet-project-front/assets/9-263a0253.jpg",M="/your-pet-project-front/assets/11-2675b7d0.jpg",K="/your-pet-project-front/assets/12-38fce299.jpg",P="/your-pet-project-front/assets/Albina-bd93d669.png",S="/your-pet-project-front/assets/Kolya-d7d44b23.png",B="/your-pet-project-front/assets/Artem-f8db23da.png",D="/your-pet-project-front/assets/Natalia-2400ba8c.png",C="/your-pet-project-front/assets/Anton-1fd0549c.png",L="/your-pet-project-front/assets/Maria-c68dc50c.png",G="/your-pet-project-front/assets/Alla-2b028e42.png",H="/your-pet-project-front/assets/Larin-7731e997.png",Q="/your-pet-project-front/assets/Kate-5a2861ec.png",R="/your-pet-project-front/assets/Bodya-77beb030.png",Y="/your-pet-project-front/assets/Dima-61310208.png",q=()=>t.jsxs(b,{children:[t.jsx(f,{children:j("footer_title")}),t.jsxs(y,{children:[t.jsx(e,{target:"_blank",to:"https://github.com/NMarkhotsky",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:z}),t.jsx(d,{src:S})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Mykola Markhotskyi"}),t.jsx(n,{children:"Team lead"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{style:{marginTop:5},target:"_blank",to:"https://github.com/NMarkhotsky",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/yogurtfirst",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:F}),t.jsx(d,{src:H})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Anton Larin"}),t.jsx(n,{children:"Team lead"}),t.jsx(n,{children:"Backend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/yogurtfirst",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/AllaGrey",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:_}),t.jsx(k,{src:G})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Alla Basanko"}),t.jsx(n,{children:"Scrum master"}),t.jsx(n,{children:"Fullstack developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/AllaGrey",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/albuska",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:w}),t.jsx(d,{src:P})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Albina Anistratenko"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/albuska",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/ArtemTerzi",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:$}),t.jsx(d,{src:B})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Artem Terzi"}),t.jsx(n,{children:"Fullstack developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/ArtemTerzi",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/Kate-Panchenko",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:N}),t.jsx(d,{src:Q})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Kateryna Panchenko"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/Kate-Panchenko",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/TaleQ",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:A}),t.jsx(d,{src:D})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Nataliia Kalynovska"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/TaleQ",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/Dmytro-Kobets",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:K}),t.jsx(d,{src:Y})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Dmytro Kobets"}),t.jsx(n,{children:"Backend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/Dmytro-Kobets",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/AntonAnatoliyovich",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:M}),t.jsx(v,{src:C})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Anton Shadura"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/AntonAnatoliyovich",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/bohdan-ryzhko",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:T}),t.jsx(d,{src:R})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Bohdan Ryzhko"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/bohdan-ryzhko",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})}),t.jsx(e,{target:"_blank",to:"https://github.com/mashapopov",children:t.jsxs(r,{children:[t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(a,{src:I}),t.jsx(d,{src:L})]})}),t.jsxs(h,{children:[t.jsx(p,{children:"Maria Popova"}),t.jsx(n,{children:"Frontend developer"}),t.jsx(e,{target:"_blank",to:"https://github.com/mashapopov",children:t.jsx(i,{iconName:"icon-icon-github",width:"20px",height:"20px",fill:"#404245"})})]})]})})]}),t.jsxs(u,{children:["© 2023 | ",j("footer_ps"),t.jsx(g,{children:t.jsx(m,{})}),t.jsx(g,{children:t.jsx(m,{})})]})]});export{q as Footer};
