import{s as a,b as u,a as j,d as $,B as G,h as K,r as d,j as i,I as g,M as R,o as ye,p as we,e as je,F as be,q as L,t as $e,v as Se,n as Oe,P as h,w as Ie,C as Ce,x as A,Y as Me,y as Z,S as J,z as Ee,A as ke,c as Fe,L as Pe,D as ze,u as Te,E as _e}from"./index-6697fed1.js";import{b as Le,c as X,d as Be,E as Ae}from"./formik.esm-53919ed3.js";const Re=a.section`
  background-color: ${e=>e.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${u} {
    padding: 62px 0;
  }

  @media ${j} {
    display: flex;
    gap: 32px;
  }
`,Ue=a.div``,De=a.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${u} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,qe=a.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,Ne=a.div`
  text-align: center;
  margin-bottom: 26px;

  & svg {
    transform: scale(1);
    transition: ${({theme:e})=>e.transitionHover};
  }

  & svg:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`,Qe=a.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,He=a(Le)`
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  border-radius: 40px;
  position: relative;
  padding: 20px 8px 16px;
  margin-bottom: 46px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
    margin-bottom: 40px;
    padding: 20px 24px 16px;
  }

  @media ${j} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,O=a.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,I=a.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${u} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,C=a(X)`
  width: 190px;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${u} {
    min-width: 255px;
    font-size: ${e=>e.theme.fontSizes.md};
    letter-spacing: 0.64px;

    &:first-child {
      margin-bottom: 90px;
    }
  }

  &:focus {
    outline: 1px solid ${e=>e.theme.colors.blue};
  }

  &:disabled {
    background-color: #ffffff;
  }

  &::placeholder {
    color: #dcdcdc;
  }
`,Ye=a.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${e=>e.theme.colors.blue};
  color: ${e=>e.theme.colors.textBtn};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.56px;
  margin-left: auto;

  @media ${u} {
    letter-spacing: 0.64px;
  }
`,We=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  & > svg {
    transform: scale(1);
    transition: ${({theme:e})=>e.transitionHover};
  }

  & > svg:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`;a.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const Ve=a.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;

  & > svg {
    transform: scale(1);
    transition: ${({theme:e})=>e.transitionHover};
  }

  & > svg:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`;$.defaults.baseURL=G;const Ge=async()=>{try{const e=await $.get("/users"),{user:t}=await e.data;return t}catch(e){console.log(e)}},Ke=async e=>{try{return await $.patch("/users",e)}catch(t){console.log(t)}},Ze=()=>{const e=K(),[t,s]=d.useState(null),[o,n]=d.useState(!1),[r,l]=d.useState(void 0),[c,le]=d.useState(""),[m,_]=d.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[M,q]=d.useState(null),[x,E]=d.useState(!1),[N,k]=d.useState(!0);d.useEffect(()=>{n(!0),Ge().then(p=>{s(p)}).catch(p=>console.log(p)).finally(()=>n(!1))},[]),d.useEffect(()=>{},[t]);const[ce,Q]=d.useState(!1),de=()=>{Q(!0)},H=()=>{Q(!1)};d.useEffect(()=>{t&&(_({name:t&&t.name,birthday:t?t.birthday:"",phone:t?t.phone:"",city:t?t.city:"",avatar:m.avatar||"",avatarURL:t.avatarURL}),le(t&&t.email),l(M?r:t.avatarURL))},[M,r,t,m.avatar]);const ue=()=>{k(!1)},F=p=>{const{name:v,value:S}=p.target;_({...m,[v]:S})},he=()=>{_({...m,avatar:M}),E(!0),k(!0)},pe=()=>{q(null),E(!0),k(!0)},fe=p=>{const v=p.target.files[0];v&&v.size<=be?(q(v),l(URL.createObjectURL(v))):(L("Your photo is large"),k(!0),l(t&&t.avatarURL))},me=async()=>{if(M&&!m.avatar){L("Press confirm or cancel your new photo");return}E(!1);try{const p=new FormData,v=Object.entries(m);let S={};v.forEach(y=>{y[1]&&(p.append(y[0],y[1]),S={...S,[y[0]]:y[1]})});const ge={};p.forEach((y,ve)=>{ge[ve]=y}),await $e.validate(S),n(!0),Ke(p),Se("Changes saved successfully")}catch(p){p.name==="ValidationError"&&L(p.errors[0])}finally{n(!1)}},xe=()=>{E(!x)};return i.jsxs(Ue,{children:[i.jsx(De,{children:"My information:"}),i.jsx(Be,{initialValues:m,onSubmit:me,children:i.jsxs(He,{children:[i.jsx(Ve,{onClick:xe,children:x?i.jsx(g,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):i.jsx(g,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),i.jsxs(Ne,{children:[i.jsx(qe,{children:r&&i.jsx("img",{src:r,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),x&&i.jsxs("label",{htmlFor:"avatar",style:{display:N?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:ue,children:[i.jsx(g,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),i.jsx(X,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:fe}),i.jsx(Ae,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),x&&!N&&i.jsxs(Qe,{children:[i.jsx("button",{type:"button",onClick:he,children:i.jsx(g,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),"Confirm",i.jsx("button",{type:"button",onClick:pe,children:i.jsx(g,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),i.jsxs("div",{children:[i.jsxs(O,{children:[i.jsx(I,{htmlFor:"name",children:"Name:"}),i.jsx(C,{id:"name",name:"name",placeholder:"Anna",disabled:!x,value:m.name,onChange:F})]}),i.jsxs(O,{children:[i.jsx(I,{htmlFor:"email",children:"Email:"}),i.jsx(C,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:c})]}),i.jsxs(O,{children:[i.jsx(I,{htmlFor:"birthday",children:"Birthday:"}),i.jsx(C,{type:"date",id:"birthday",name:"birthday",disabled:!x,value:m.birthday,onChange:F})]}),i.jsxs(O,{children:[i.jsx(I,{htmlFor:"phone",children:"Phone:"}),i.jsx(C,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!x,value:m.phone,onChange:F})]}),i.jsxs(O,{children:[i.jsx(I,{htmlFor:"city",children:"City:"}),i.jsx(C,{id:"city",name:"city",placeholder:"Kyiv",disabled:!x,value:m.city,onChange:F})]}),x?i.jsx(Ye,{type:"submit",children:"Save"}):i.jsxs(We,{onClick:de,children:[i.jsx(g,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),i.jsx("p",{children:"Log Out"})]})]})]})}),ce&&i.jsx("div",{children:i.jsx(R,{onClose:H,children:i.jsx(ye,{handleModal:H,handleLogout:()=>e(we())})})}),o?i.jsx(je,{}):null]})},Je=()=>i.jsx(i.Fragment,{children:i.jsx(Ze,{})}),Xe=a.div`
  @media ${j} {
    width: 821px;
  }
`,et=a.div`
  display: flex;
  justify-content: space-between;

  @media ${Oe} {
    align-items: baseline;
  }

  @media ${u} {
    align-items: flex-start;
  }
`,tt=a.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${u} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,nt=a.ul``,ot=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${e=>e.theme.colors.textBtn};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.64px;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: ${e=>e.theme.colors.blueDark};

    transition: ${({theme:e})=>e.transitionHover};
  }
`,it=a.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${u} {
    max-width: 250px;
  }

  @media ${j} {
    max-width: 292px;
  }
`,st=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,rt=a.h1`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${u} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,at=a.div`
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${u} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${j} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,lt=a.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${u} {
    width: 128px;
  }

  @media ${j} {
    width: 161px;
  }
`,P=a.p`
  font-size: ${e=>e.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:last-child {
    padding-bottom: 40px;
  }

  &:first-child {
    padding-top: 20px;
  }

  @media ${u} {
    font-size: ${e=>e.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${j} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,ct=a.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${u} {
    top: 8%;
    right: 2%;
  }

  transform: scale(1);
  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`,dt=a.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${u} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`,ut=a.h2`
  margin-bottom: 14px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.text};

  @media ${u} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 49px;
  }
`,ht=a.p`
  margin-bottom: 44px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  color: ${({theme:e})=>e.colors.text};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${u} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,pt=a.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,ee=({handleModal:e,handleDelete:t,title:s="Delete advertisement?",name:o})=>i.jsxs(dt,{children:[i.jsx(ut,{children:s}),i.jsxs(ht,{children:["Are you sure you want to delete ",i.jsxs(pt,{children:["“",o,"”"]}),"? You can`t undo this action."]}),i.jsxs(Ie,{children:[i.jsx(Ce,{onClick:e,children:i.jsx(A,{children:"Cancel"})}),i.jsxs(Me,{onClick:t,children:[i.jsx(A,{children:"Yes"}),i.jsx(Z,{children:i.jsx(J,{iconName:"icon-trash",stroke:"#FDF7F2"})})]})]})]});ee.propTypes={handleModal:h.func.isRequired,handleDelete:h.func.isRequired,title:h.string.isRequired,name:h.string.isRequired};const te=({item:e,deletePet:t})=>{const[s,o]=d.useState(!1),n=()=>{o(!0)},r=()=>{o(!1)};return i.jsxs(at,{children:[i.jsx(ct,{onClick:n,children:i.jsx(g,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),i.jsx(lt,{src:e.photoURL}),i.jsxs("div",{children:[i.jsxs(P,{children:[i.jsx("b",{children:"Name:"})," ",e.name]}),i.jsxs(P,{children:[i.jsx("b",{children:"Date of birth:"})," ",e.birthday]}),i.jsxs(P,{children:[i.jsx("b",{children:"Type:"})," ",e.type]}),i.jsxs(P,{children:[i.jsx("b",{children:"Comments:"})," ",e.comments]})]}),s&&i.jsx("div",{children:i.jsx(R,{onClose:r,children:i.jsx(ee,{title:"Are you really want to kill your lovely pet? ⚰️",name:e.name,handleModal:r,handleDelete:()=>t(e._id)})})})]})};te.propTypes={item:h.shape({name:h.string.isRequired,birthday:h.string.isRequired,type:h.string.isRequired,comments:h.string.isRequired,photoURL:h.string.isRequired,_id:h.string.isRequired}).isRequired,deletePet:h.func.isRequired};const ft="/your-pet-project-front/assets/catImg-4fba710b.png";var ne={},z={linear:function(e,t,s,o){var n=s-t;return n*e/o+t},easeInQuad:function(e,t,s,o){var n=s-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,s,o){var n=s-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,s,o){var n=s-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,s,o){var n=s-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,s,o){var n=s-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,s,o){var n=s-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,s,o){var n=s-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,s,o){var n=s-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,s,o){var n=s-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,s,o){var n=s-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,s,o){var n=s-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,s,o){var n=s-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,s,o){var n=s-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,s,o){var n=s-t,r,l,c;return c=1.70158,l=0,r=n,e===0?t:(e/=o)===1?t+n:(l||(l=o*.3),r<Math.abs(n)?(r=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/r),-(r*Math.pow(2,10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l))+t)},easeOutElastic:function(e,t,s,o){var n=s-t,r,l,c;return c=1.70158,l=0,r=n,e===0?t:(e/=o)===1?t+n:(l||(l=o*.3),r<Math.abs(n)?(r=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*o-c)*(2*Math.PI)/l)+n+t)},easeInOutElastic:function(e,t,s,o){var n=s-t,r,l,c;return c=1.70158,l=0,r=n,e===0?t:(e/=o/2)===2?t+n:(l||(l=o*(.3*1.5)),r<Math.abs(n)?(r=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/r),e<1?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l))+t:r*Math.pow(2,-10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l)*.5+n+t)},easeInBack:function(e,t,s,o,n){var r=s-t;return n===void 0&&(n=1.70158),r*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,s,o,n){var r=s-t;return n===void 0&&(n=1.70158),r*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,s,o,n){var r=s-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?r/2*(e*e*(((n*=1.525)+1)*e-n))+t:r/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,s,o){var n=s-t,r;return r=z.easeOutBounce(o-e,0,n,o),n-r+t},easeOutBounce:function(e,t,s,o){var n=s-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,s,o){var n=s-t,r;return e<o/2?(r=z.easeInBounce(e*2,0,n,o),r*.5+t):(r=z.easeOutBounce(e*2-o,0,n,o),r*.5+n*.5+t)}},mt=z,f=typeof window<"u"?window:{screen:{},navigator:{}},b=(f.matchMedia||function(){return{matches:!1}}).bind(f),oe=!1,xt={get passive(){return oe=!0}},ie=function(){};f.addEventListener&&f.addEventListener("p",ie,xt);f.removeEventListener&&f.removeEventListener("p",ie,!1);var gt=oe,U="ontouchstart"in f,vt="TouchEvent"in f,yt=U||vt&&b("(any-pointer: coarse)").matches;(f.navigator.maxTouchPoints||0)>0;var se=f.navigator.userAgent||"",wt=b("(pointer: coarse)").matches&&/iPad|Macintosh/.test(se)&&Math.min(f.screen.width||0,f.screen.height||0)>=768;(b("(pointer: coarse)").matches||!b("(pointer: fine)").matches&&U)&&/Windows.*Firefox/.test(se);b("(any-pointer: fine)").matches||b("(any-hover: hover)").matches;const jt=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:gt},Symbol.toStringTag,{value:"Module"})),bt=Ee(jt);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,$t=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;function Ot(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function It(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},s=0;s<10;s++)t["_"+String.fromCharCode(s)]=s;var o=Object.getOwnPropertyNames(t).map(function(r){return t[r]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ct=It()?Object.assign:function(e,t){for(var s,o=Ot(e),n,r=1;r<arguments.length;r++){s=Object(arguments[r]);for(var l in s)$t.call(s,l)&&(o[l]=s[l]);if(Y){n=Y(s);for(var c=0;c<n.length;c++)St.call(s,n[c])&&(o[n[c]]=s[n[c]])}}return o};Object.defineProperty(ne,"__esModule",{value:!0});var Mt=function(){function e(t,s){for(var o=0;o<s.length;o++){var n=s[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,s,o){return s&&e(t.prototype,s),o&&e(t,o),t}}(),Et=d,B=T(Et),kt=ke,w=T(kt),Ft=mt,Pt=T(Ft),W=bt,zt=Ct,V=T(zt);function T(e){return e&&e.__esModule?e:{default:e}}function Tt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Lt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var D=function(e){Lt(t,e);function t(s){Tt(this,t);var o=_t(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s));return o.state={show:!1},o.data={startValue:0,currentTime:0,startTime:null,rafId:null},o.handleClick=o.handleClick.bind(o),o.handleScroll=o.handleScroll.bind(o),o.scrollStep=o.scrollStep.bind(o),o.stopScrolling=o.stopScrolling.bind(o),o}return Mt(t,[{key:"shouldComponentUpdate",value:function(o,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,W.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,W.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(o){this.data.startTime||(this.data.startTime=o),this.data.currentTime=o-this.data.startTime;var n=Pt.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var o=this.props.style,n=B.default.createElement("div",{style:o,onClick:this.handleClick},this.props.children),r=(0,V.default)({},t.defaultProps.style);return r=(0,V.default)(r,o),r.opacity=this.state.show?1:0,r.visibility=this.state.show?"visible":"hidden",r.transitionProperty="opacity, visibility",B.default.cloneElement(n,{style:r})}}]),t}(B.default.Component),Bt=ne.default=D;D.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};D.propTypes={topPosition:w.default.number,showUnder:w.default.number.isRequired,easing:w.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:w.default.number,style:w.default.object,onShow:w.default.func,onHide:w.default.func};const At=a.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,Rt=()=>i.jsx("div",{children:i.jsx(Bt,{showUnder:160,children:i.jsx(At,{children:i.jsx(g,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});$.defaults.baseURL=G;const Ut=async()=>{try{return await $.get("/pets")}catch(e){console.log(e)}},Dt=async e=>{try{return await $.delete(`/pets/${e}`)}catch(t){console.log(t)}},qt=()=>{const[e,t]=d.useState([]),s=Fe();d.useEffect(()=>{Ut().then(({data:n})=>{t(n.pets)}).catch(n=>console.log(n))},[]),d.useEffect(()=>{e.length},[e]);const o=async n=>{await Dt(n),t(r=>r.filter(l=>l._id!==n))};return i.jsxs(Xe,{children:[i.jsxs(et,{children:[i.jsx(tt,{children:"My pets:"}),i.jsx(Pe,{to:"/add-pet",state:{from:s},children:i.jsxs(ot,{type:"button",children:["Add Pet",i.jsx(g,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),i.jsx(nt,{children:e.map(n=>i.jsx(te,{item:n,deletePet:o},n._id))}),e.length===0&&i.jsxs(st,{children:[i.jsxs(rt,{children:[i.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",i.jsx("br",{}),i.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]}),i.jsx(it,{src:ft,alt:"Cat with tongue"})]}),i.jsx(Rt,{})]})},Nt=()=>i.jsx(i.Fragment,{children:i.jsx(qt,{})}),re=({onClick:e,text:t})=>i.jsxs(ze,{onClick:e,children:[i.jsx(A,{children:t}),i.jsx(Z,{children:i.jsx(J,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});re.propTypes={onClick:h.func.isRequired,text:h.string.isRequired};const Qt=a.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${u} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Ht=a.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${u} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Yt=a.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.text};

  @media ${u} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,ae=({onClose:e})=>i.jsx(R,{onClose:e,children:i.jsxs(Qt,{children:[i.jsx(Ht,{children:"Congrats!"}),i.jsx(Yt,{children:"Your registration is success"}),i.jsx(re,{onClick:e,text:"Go to profile"})]})});ae.propTypes={onClose:h.func.isRequired};function Gt(){const{isNewUser:e}=Te(),[t,s]=d.useState(!0),o=K(),n=()=>{s(!1),o(_e())};return d.useEffect(()=>{},[e]),i.jsxs(Re,{children:[e&&t&&i.jsx("div",{children:i.jsx(ae,{onClose:n})}),i.jsx(Je,{}),i.jsx(Nt,{})]})}export{Gt as default};
