import{s as r,b as d,a as w,Q as V,c as b,u as G,r as u,j as o,I as x,M as R,m as ve,n as ye,k as we,P as h,B as je,C as be,o as L,Y as Se,p as K,S as Z,q as Oe,t as $e,N as Ie,v as ke,g as Me,w as Ce}from"./index-fb60f49b.js";import{b as Ee,c as J,d as Fe,E as Pe}from"./formik.esm-5903162a.js";import{B as X,F as ze,s as Te}from"./globalConstants-a70150ac.js";const _e=r.section`
  background-color: #fef9f9;
  padding: 40px 0;

  @media ${d} {
    padding: 62px 0;
  }

  @media ${w} {
    display: flex;
    gap: 32px;
  }
`,_=e=>{V.error(e)},Be=e=>{V.success(e)},Le=r.div``,Re=r.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Ae=r.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,Ue=r.div`
  text-align: center;
  margin-bottom: 26px;
`,qe=r.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,De=r(Ee)`
  background-color: #ffffff;
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

  @media ${w} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,O=r.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,$=r.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${d} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,I=r(J)`
  width: 190px;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${d} {
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
`,Ne=r.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${e=>e.theme.colors.blue};
  color: ${e=>e.theme.colors.bgdColor};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.56px;
  margin-left: auto;

  @media ${d} {
    letter-spacing: 0.64px;
  }
`,Qe=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;r.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const Ye=r.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;b.defaults.baseURL=X;const He=async()=>{try{const e=await b.get("/users"),{user:t}=await e.data;return t}catch(e){console.log(e)}},We=async e=>{try{return await b.patch("/users",e)}catch(t){console.log(t)}},Ve=()=>{const e=G(),[t,s]=u.useState(null),[i,n]=u.useState(void 0),[a,l]=u.useState(""),[c,T]=u.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[k,q]=u.useState(null),[m,M]=u.useState(!1),[D,C]=u.useState(!0);u.useEffect(()=>{He().then(p=>{s(p)}).catch(p=>console.log(p))},[]),u.useEffect(()=>{},[t]);const[ce,N]=u.useState(!1),le=()=>{N(!0)},Q=()=>{N(!1)};u.useEffect(()=>{t&&(T({name:t&&t.name,birthday:t?t.birthday:"",phone:t?t.phone:"",city:t?t.city:"",avatar:c.avatar||"",avatarURL:t.avatarURL}),l(t&&t.email),n(k?i:t.avatarURL))},[k,i,t,c.avatar]);const de=()=>{C(!1)},E=p=>{const{name:g,value:S}=p.target;T({...c,[g]:S})},ue=()=>{T({...c,avatar:k}),M(!0),C(!0)},he=()=>{q(null),M(!0),C(!0)},pe=p=>{const g=p.target.files[0];g&&g.size<=ze?(q(g),n(URL.createObjectURL(g))):(_("Your photo is large"),C(!0),n(t&&t.avatarURL))},fe=async()=>{if(k&&!c.avatar){_("Press confirm or cancel your new photo");return}M(!1);try{const p=new FormData,g=Object.entries(c);let S={};g.forEach(v=>{v[1]&&(p.append(v[0],v[1]),S={...S,[v[0]]:v[1]})});const xe={};p.forEach((v,ge)=>{xe[ge]=v}),await Te.validate(S),We(p),Be("Changes saved successfully")}catch(p){p.name==="ValidationError"&&_(p.errors[0])}},me=()=>{M(!m)};return o.jsxs(Le,{children:[o.jsx(Re,{children:"My information:"}),o.jsx(Fe,{initialValues:c,onSubmit:fe,children:o.jsxs(De,{children:[o.jsx(Ye,{onClick:me,children:m?o.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):o.jsx(x,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),o.jsxs(Ue,{children:[o.jsx(Ae,{children:i&&o.jsx("img",{src:i,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),m&&o.jsxs("label",{htmlFor:"avatar",style:{display:D?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:de,children:[o.jsx(x,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),o.jsx(J,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:pe}),o.jsx(Pe,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),m&&!D&&o.jsxs(qe,{children:[o.jsx("button",{type:"button",onClick:ue,children:o.jsx(x,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),"Confirm",o.jsx("button",{type:"button",onClick:he,children:o.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),o.jsxs("div",{children:[o.jsxs(O,{children:[o.jsx($,{htmlFor:"name",children:"Name:"}),o.jsx(I,{id:"name",name:"name",placeholder:"Anna",disabled:!m,value:c.name,onChange:E})]}),o.jsxs(O,{children:[o.jsx($,{htmlFor:"email",children:"Email:"}),o.jsx(I,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:a})]}),o.jsxs(O,{children:[o.jsx($,{htmlFor:"birthday",children:"Birthday:"}),o.jsx(I,{type:"date",id:"birthday",name:"birthday",disabled:!m,value:c.birthday,onChange:E})]}),o.jsxs(O,{children:[o.jsx($,{htmlFor:"phone",children:"Phone:"}),o.jsx(I,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!m,value:c.phone,onChange:E})]}),o.jsxs(O,{children:[o.jsx($,{htmlFor:"city",children:"City:"}),o.jsx(I,{id:"city",name:"city",placeholder:"Kyiv",disabled:!m,value:c.city,onChange:E})]}),m?o.jsx(Ne,{type:"submit",children:"Save"}):o.jsxs(Qe,{onClick:le,children:[o.jsx(x,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),o.jsx("p",{children:"Log Out"})]})]})]})}),ce&&o.jsx("div",{children:o.jsx(R,{onClose:Q,children:o.jsx(ve,{handleModal:Q,handleLogout:()=>e(ye())})})})]})},Ge=()=>o.jsx(o.Fragment,{children:o.jsx(Ve,{})}),Ke=r.div`
  @media ${w} {
    width: 821px;
  }
`,Ze=r.div`
  display: flex;
  justify-content: space-between;

  @media ${we} {
    align-items: baseline;
  }

  @media ${d} {
    align-items: flex-start;
  }
`,Je=r.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Xe=r.ul``,et=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${e=>e.theme.colors.bgdColor};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.bold};
  letter-spacing: 0.64px;
`,tt=r.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;
  /* height: 131px; */

  @media ${d} {
    max-width: 250px;
    /* height: 330px; */
  }

  @media ${w} {
    max-width: 292px;
  }
`,nt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,it=r.h1`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${d} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,ot=r.div`
  background-color: #ffffff;
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${d} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${w} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,st=r.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${d} {
    width: 128px;
  }

  @media ${w} {
    width: 161px;
  }
`,F=r.p`
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

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${w} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,at=r.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${d} {
    top: 8%;
    right: 2%;
  }
`,rt=r.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.white};

  @media ${d} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`,ct=r.h2`
  margin-bottom: 14px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.black};

  @media ${d} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 49px;
  }
`,lt=r.p`
  margin-bottom: 44px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  color: ${({theme:e})=>e.colors.black};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,dt=r.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,ee=({handleModal:e,handleDelete:t,title:s="Delete advertisement?",name:i})=>o.jsxs(rt,{children:[o.jsx(ct,{children:s}),o.jsxs(lt,{children:["Are you sure you want to delete ",o.jsxs(dt,{children:["“",i,"”"]}),"? You can`t undo this action."]}),o.jsxs(je,{children:[o.jsx(be,{onClick:e,children:o.jsx(L,{children:"Cancel"})}),o.jsxs(Se,{onClick:t,children:[o.jsx(L,{children:"Yes"}),o.jsx(K,{children:o.jsx(Z,{iconName:"icon-trash",stroke:"#FDF7F2"})})]})]})]});ee.propTypes={handleModal:h.func.isRequired,handleDelete:h.func.isRequired,title:h.string.isRequired,name:h.string.isRequired};const te=({item:e,deletePet:t})=>{const[s,i]=u.useState(!1),n=()=>{i(!0)},a=()=>{i(!1)};return o.jsxs(ot,{children:[o.jsx(at,{onClick:n,children:o.jsx(x,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),o.jsx(st,{src:e.photoURL}),o.jsxs("div",{children:[o.jsxs(F,{children:[o.jsx("b",{children:"Name:"})," ",e.name]}),o.jsxs(F,{children:[o.jsx("b",{children:"Date of birth:"})," ",e.birthday]}),o.jsxs(F,{children:[o.jsx("b",{children:"Type:"})," ",e.type]}),o.jsxs(F,{children:[o.jsx("b",{children:"Comments:"})," ",e.comments]})]}),s&&o.jsx("div",{children:o.jsx(R,{onClose:a,children:o.jsx(ee,{title:"Are you really want to kill your lovely pet? ⚰️",name:e.name,handleModal:a,handleDelete:()=>t(e._id)})})})]})};te.propTypes={item:h.shape({name:h.string.isRequired,birthday:h.string.isRequired,type:h.string.isRequired,comments:h.string.isRequired,photoURL:h.string.isRequired,_id:h.string.isRequired}).isRequired,deletePet:h.func.isRequired};const ut="/your-pet-project-front/assets/catImg-4fba710b.png";var ne={},P={linear:function(e,t,s,i){var n=s-t;return n*e/i+t},easeInQuad:function(e,t,s,i){var n=s-t;return n*(e/=i)*e+t},easeOutQuad:function(e,t,s,i){var n=s-t;return-n*(e/=i)*(e-2)+t},easeInOutQuad:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,s,i){var n=s-t;return n*(e/=i)*e*e+t},easeOutCubic:function(e,t,s,i){var n=s-t;return n*((e=e/i-1)*e*e+1)+t},easeInOutCubic:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,s,i){var n=s-t;return n*(e/=i)*e*e*e+t},easeOutQuart:function(e,t,s,i){var n=s-t;return-n*((e=e/i-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,s,i){var n=s-t;return n*(e/=i)*e*e*e*e+t},easeOutQuint:function(e,t,s,i){var n=s-t;return n*((e=e/i-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,s,i){var n=s-t;return-n*Math.cos(e/i*(Math.PI/2))+n+t},easeOutSine:function(e,t,s,i){var n=s-t;return n*Math.sin(e/i*(Math.PI/2))+t},easeInOutSine:function(e,t,s,i){var n=s-t;return-n/2*(Math.cos(Math.PI*e/i)-1)+t},easeInExpo:function(e,t,s,i){var n=s-t;return e==0?t:n*Math.pow(2,10*(e/i-1))+t},easeOutExpo:function(e,t,s,i){var n=s-t;return e==i?t+n:n*(-Math.pow(2,-10*e/i)+1)+t},easeInOutExpo:function(e,t,s,i){var n=s-t;return e===0?t:e===i?t+n:(e/=i/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,s,i){var n=s-t;return-n*(Math.sqrt(1-(e/=i)*e)-1)+t},easeOutCirc:function(e,t,s,i){var n=s-t;return n*Math.sqrt(1-(e=e/i-1)*e)+t},easeInOutCirc:function(e,t,s,i){var n=s-t;return(e/=i/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,s,i){var n=s-t,a,l,c;return c=1.70158,l=0,a=n,e===0?t:(e/=i)===1?t+n:(l||(l=i*.3),a<Math.abs(n)?(a=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*i-c)*(2*Math.PI)/l))+t)},easeOutElastic:function(e,t,s,i){var n=s-t,a,l,c;return c=1.70158,l=0,a=n,e===0?t:(e/=i)===1?t+n:(l||(l=i*.3),a<Math.abs(n)?(a=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/a),a*Math.pow(2,-10*e)*Math.sin((e*i-c)*(2*Math.PI)/l)+n+t)},easeInOutElastic:function(e,t,s,i){var n=s-t,a,l,c;return c=1.70158,l=0,a=n,e===0?t:(e/=i/2)===2?t+n:(l||(l=i*(.3*1.5)),a<Math.abs(n)?(a=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/a),e<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*i-c)*(2*Math.PI)/l))+t:a*Math.pow(2,-10*(e-=1))*Math.sin((e*i-c)*(2*Math.PI)/l)*.5+n+t)},easeInBack:function(e,t,s,i,n){var a=s-t;return n===void 0&&(n=1.70158),a*(e/=i)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,s,i,n){var a=s-t;return n===void 0&&(n=1.70158),a*((e=e/i-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,s,i,n){var a=s-t;return n===void 0&&(n=1.70158),(e/=i/2)<1?a/2*(e*e*(((n*=1.525)+1)*e-n))+t:a/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,s,i){var n=s-t,a;return a=P.easeOutBounce(i-e,0,n,i),n-a+t},easeOutBounce:function(e,t,s,i){var n=s-t;return(e/=i)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,s,i){var n=s-t,a;return e<i/2?(a=P.easeInBounce(e*2,0,n,i),a*.5+t):(a=P.easeOutBounce(e*2-i,0,n,i),a*.5+n*.5+t)}},ht=P,f=typeof window<"u"?window:{screen:{},navigator:{}},j=(f.matchMedia||function(){return{matches:!1}}).bind(f),ie=!1,pt={get passive(){return ie=!0}},oe=function(){};f.addEventListener&&f.addEventListener("p",oe,pt);f.removeEventListener&&f.removeEventListener("p",oe,!1);var ft=ie,A="ontouchstart"in f,mt="TouchEvent"in f,xt=A||mt&&j("(any-pointer: coarse)").matches;(f.navigator.maxTouchPoints||0)>0;var se=f.navigator.userAgent||"",gt=j("(pointer: coarse)").matches&&/iPad|Macintosh/.test(se)&&Math.min(f.screen.width||0,f.screen.height||0)>=768;(j("(pointer: coarse)").matches||!j("(pointer: fine)").matches&&A)&&/Windows.*Firefox/.test(se);j("(any-pointer: fine)").matches||j("(any-hover: hover)").matches;const vt=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:ft},Symbol.toStringTag,{value:"Module"})),yt=Oe(vt);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable;function bt(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function St(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},s=0;s<10;s++)t["_"+String.fromCharCode(s)]=s;var i=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(i.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(a){n[a]=a}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ot=St()?Object.assign:function(e,t){for(var s,i=bt(e),n,a=1;a<arguments.length;a++){s=Object(arguments[a]);for(var l in s)wt.call(s,l)&&(i[l]=s[l]);if(Y){n=Y(s);for(var c=0;c<n.length;c++)jt.call(s,n[c])&&(i[n[c]]=s[n[c]])}}return i};Object.defineProperty(ne,"__esModule",{value:!0});var $t=function(){function e(t,s){for(var i=0;i<s.length;i++){var n=s[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}(),It=u,B=z(It),kt=$e,y=z(kt),Mt=ht,Ct=z(Mt),H=yt,Et=Ot,W=z(Et);function z(e){return e&&e.__esModule?e:{default:e}}function Ft(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var U=function(e){zt(t,e);function t(s){Ft(this,t);var i=Pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s));return i.state={show:!1},i.data={startValue:0,currentTime:0,startTime:null,rafId:null},i.handleClick=i.handleClick.bind(i),i.handleScroll=i.handleScroll.bind(i),i.scrollStep=i.scrollStep.bind(i),i.stopScrolling=i.stopScrolling.bind(i),i}return $t(t,[{key:"shouldComponentUpdate",value:function(i,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,H.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,H.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(i){this.data.startTime||(this.data.startTime=i),this.data.currentTime=i-this.data.startTime;var n=Ct.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var i=this.props.style,n=B.default.createElement("div",{style:i,onClick:this.handleClick},this.props.children),a=(0,W.default)({},t.defaultProps.style);return a=(0,W.default)(a,i),a.opacity=this.state.show?1:0,a.visibility=this.state.show?"visible":"hidden",a.transitionProperty="opacity, visibility",B.default.cloneElement(n,{style:a})}}]),t}(B.default.Component),Tt=ne.default=U;U.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};U.propTypes={topPosition:y.default.number,showUnder:y.default.number.isRequired,easing:y.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:y.default.number,style:y.default.object,onShow:y.default.func,onHide:y.default.func};const _t=r.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,Bt=()=>o.jsx("div",{children:o.jsx(Tt,{showUnder:160,children:o.jsx(_t,{children:o.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});b.defaults.baseURL=X;const Lt=async()=>{try{return await b.get("/pets")}catch(e){console.log(e)}},Rt=async e=>{try{return await b.delete(`/pets/${e}`)}catch(t){console.log(t)}},At=()=>{const[e,t]=u.useState([]);u.useEffect(()=>{Lt().then(({data:i})=>{t(i.pets)}).catch(i=>console.log(i))},[]),u.useEffect(()=>{e.length},[e]);const s=async i=>{await Rt(i),t(n=>n.filter(a=>a._id!==i))};return o.jsxs(Ke,{children:[o.jsxs(Ze,{children:[o.jsx(Je,{children:"My pets:"}),o.jsx(Ie,{to:"/add-pet",children:o.jsxs(et,{type:"button",children:["Add Pet",o.jsx(x,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),o.jsx(Xe,{children:e.map(i=>o.jsx(te,{item:i,deletePet:s},i._id))}),e.length===0&&o.jsxs(nt,{children:[o.jsxs(it,{children:[o.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",o.jsx("br",{}),o.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]}),o.jsx(tt,{src:ut,alt:"Cat with tongue"})]}),o.jsx(Bt,{})]})},Ut=()=>o.jsx(o.Fragment,{children:o.jsx(At,{})}),ae=({onClick:e,text:t})=>o.jsxs(ke,{onClick:e,children:[o.jsx(L,{children:t}),o.jsx(K,{children:o.jsx(Z,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});ae.propTypes={onClick:h.func.isRequired,text:h.string.isRequired};const qt=r.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.white};

  @media ${d} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Dt=r.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.black};

  @media ${d} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Nt=r.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.black};

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,re=({onClose:e})=>o.jsx(R,{onClose:e,children:o.jsxs(qt,{children:[o.jsx(Dt,{children:"Congrats!"}),o.jsx(Nt,{children:"Your registration is success"}),o.jsx(ae,{onClick:e,text:"Go to profile"})]})});re.propTypes={onClose:h.func.isRequired};function Wt(){const{isNewUser:e}=Me(),[t,s]=u.useState(!0),i=G(),n=()=>{s(!1),i(Ce())};return u.useEffect(()=>{},[e]),o.jsxs(_e,{children:[e&&t&&o.jsx("div",{children:o.jsx(re,{onClose:n})}),o.jsx(Ge,{}),o.jsx(Ut,{})]})}export{Wt as default};
