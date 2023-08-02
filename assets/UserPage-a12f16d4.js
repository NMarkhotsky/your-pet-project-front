import{s as c,b as h,a as b,g as O,B as G,k as K,r as d,j as s,t as u,I as v,M as U,v as xe,w as ge,d as ve,F as ye,e as B,x as we,f as je,p as be,P as x,y as Se,z as Oe,c as $e,L as Ie,T as _e,S as Me,A as Ee,D as Fe,E as ke,u as Ce,G as Pe}from"./index-3b0d8a39.js";import{b as ze,c as Z,d as Te,E as Le}from"./formik.esm-f37e2839.js";import{M as Be}from"./ModalConfirmDelete-b2780a2f.js";import{i as Ae}from"./catImg-34c1bda9.js";const Ue=c.section`
  background-color: ${e=>e.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${h} {
    padding: 62px 0;
  }

  @media ${b} {
    display: flex;
    gap: 32px;
  }
`,Re=c.div``,De=c.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,qe=c.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,Qe=c.div`
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
`,He=c.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,Ne=c(ze)`
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

  @media ${b} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,_=c.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,M=c.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${h} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,E=c(Z)`
  width: 190px;
  border-radius: 20px;
  border: 1px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${h} {
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
`,Ye=c.button`
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

  @media ${h} {
    letter-spacing: 0.64px;
  }
`,Ve=c.div`
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
`;c.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const We=c.div`
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
`;O.defaults.baseURL=G;const Ge=async()=>{try{const e=await O.get("/users"),{user:t}=await e.data;return t}catch(e){console.log(e)}},Ke=async e=>{try{return await O.patch("/users",e)}catch(t){console.log(t)}},Ze=()=>{const e=K(),[t,r]=d.useState(null),[o,n]=d.useState(!1),[i,a]=d.useState(void 0),[l,se]=d.useState(""),[m,L]=d.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[F,q]=d.useState(null),[g,$]=d.useState(!1),[Q,k]=d.useState(!0);d.useEffect(()=>{n(!0),Ge().then(p=>{r(p)}).catch(p=>console.log(p)).finally(()=>n(!1))},[]),d.useEffect(()=>{},[t]);const[ie,H]=d.useState(!1),ae=()=>{H(!0)},N=()=>{H(!1)};d.useEffect(()=>{t&&(L({name:t&&t.name,birthday:t?t.birthday:"",phone:t?t.phone:"",city:t?t.city:"",avatar:m.avatar||"",avatarURL:t.avatarURL}),se(t&&t.email),a(F?i:t.avatarURL))},[F,i,t,m.avatar]);const ce=()=>{k(!1)},C=p=>{const{name:y,value:I}=p.target;L({...m,[y]:I})},le=()=>{L({...m,avatar:F}),$(!0),k(!0)},de=()=>{q(null),$(!0),k(!0)},ue=p=>{const y=p.target.files[0];y&&y.size<=ye?(q(y),a(URL.createObjectURL(y))):(B("Your photo is large"),k(!0),a(t&&t.avatarURL))},he=async()=>{if(F&&!m.avatar){B("Press confirm or cancel your new photo");return}$(!1);try{const p=new FormData,y=Object.entries(m);let I={};y.forEach(w=>{w[1]&&(p.append(w[0],w[1]),I={...I,[w[0]]:w[1]})});const fe={};p.forEach((w,me)=>{fe[me]=w}),await we.validate(I),n(!0),Ke(p),je("Changes saved successfully")}catch(p){p.name==="ValidationError"&&($(!0),B(p.errors[0]))}finally{n(!1)}},pe=()=>{$(!g)};return s.jsxs(Re,{children:[s.jsx(De,{children:u("user_myinfo_title")}),s.jsx(Te,{initialValues:m,onSubmit:he,children:s.jsxs(Ne,{children:[s.jsx(We,{onClick:pe,children:g?s.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):s.jsx(v,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),s.jsxs(Qe,{children:[s.jsx(qe,{children:i&&s.jsx("img",{src:i,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),g&&s.jsxs("label",{htmlFor:"avatar",style:{display:Q?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:ce,children:[s.jsx(v,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),u("user_myinfo_editPhoto")]}),s.jsx(Z,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:ue}),s.jsx(Le,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),g&&!Q&&s.jsxs(He,{children:[s.jsx("button",{type:"button",onClick:le,children:s.jsx(v,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),u("other_confirm"),s.jsx("button",{type:"button",onClick:de,children:s.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),s.jsxs("div",{children:[s.jsxs(_,{children:[s.jsxs(M,{htmlFor:"name",children:[" ",u("other_name"),":"]}),s.jsx(E,{id:"name",name:"name",placeholder:"Anna",disabled:!g,value:m.name,onChange:C})]}),s.jsxs(_,{children:[s.jsxs(M,{htmlFor:"email",children:[u("other_mail"),":"]}),s.jsx(E,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:l})]}),s.jsxs(_,{children:[s.jsxs(M,{htmlFor:"birthday",children:[u("other_birthday"),":"]}),s.jsx(E,{type:"date",id:"birthday",name:"birthday",disabled:!g,value:m.birthday,onChange:C})]}),s.jsxs(_,{children:[s.jsxs(M,{htmlFor:"phone",children:[u("other_phone"),":"]}),s.jsx(E,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!g,value:m.phone,onChange:C})]}),s.jsxs(_,{children:[s.jsxs(M,{htmlFor:"city",children:[u("other_city"),":"]}),s.jsx(E,{id:"city",name:"city",placeholder:u("user_myinfo_formPlaceholder_city"),disabled:!g,value:m.city,onChange:C})]}),g?s.jsx(Ye,{type:"submit",children:u("user_myinfo_saveBtn")}):s.jsxs(Ve,{onClick:ae,children:[s.jsx(v,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),s.jsx("p",{children:u("user_myinfo_logout")})]})]})]})}),ie&&s.jsx(U,{onClose:N,children:s.jsx(xe,{handleModal:N,handleLogout:()=>e(ge())})}),o?s.jsx(ve,{}):null]})},Je=()=>s.jsx(s.Fragment,{children:s.jsx(Ze,{})}),Xe=c.div`
  @media ${b} {
    width: 821px;
  }
`,et=c.div`
  display: flex;
  justify-content: space-between;

  @media ${be} {
    align-items: baseline;
  }

  @media ${h} {
    align-items: flex-start;
  }
`,tt=c.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,nt=c.ul``,ot=c.button`
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
`,rt=c.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${h} {
    max-width: 250px;
  }

  @media ${b} {
    max-width: 292px;
  }
`,st=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,it=c.h1`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${h} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,at=c.div`
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  box-shadow: ${e=>e.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${h} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${b} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,ct=c.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${h} {
    width: 128px;
  }

  @media ${b} {
    width: 161px;
  }
`,P=c.p`
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

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${b} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,lt=c.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${h} {
    top: 8%;
    right: 2%;
  }

  transform: scale(1);
  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    transform: scale(1.1);
    transition: ${({theme:e})=>e.transitionHover};
  }
`,J=({item:e,deletePet:t})=>{const[r,o]=d.useState(!1);let n;e.birthday&&(n=e.birthday.split("-").reverse().join("."));const i=()=>{o(!0)},a=()=>{o(!1)};return s.jsxs(at,{children:[s.jsx(lt,{onClick:i,children:s.jsx(v,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),s.jsx(ct,{src:e.photoURL}),s.jsxs("div",{children:[s.jsxs(P,{children:[s.jsxs("b",{children:[u("other_name"),":"]})," ",e.name]}),s.jsxs(P,{children:[s.jsxs("b",{children:[u("user_mypets_petInfo_dateOfBirth"),":"]})," ",n]}),s.jsxs(P,{children:[s.jsxs("b",{children:[u("other_type"),":"]})," ",e.type]}),s.jsxs(P,{children:[s.jsxs("b",{children:[u("other_comments"),":"]})," ",e.comments]})]}),r&&s.jsx(U,{onClose:a,children:s.jsx(Be,{title:u("modal_deletePet_title"),name:e.name,handleModal:a,handleDelete:()=>t(e._id)})})]})};J.propTypes={item:x.shape({name:x.string.isRequired,birthday:x.string.isRequired,type:x.string.isRequired,comments:x.string.isRequired,photoURL:x.string.isRequired,_id:x.string.isRequired}).isRequired,deletePet:x.func.isRequired};var X={},z={linear:function(e,t,r,o){var n=r-t;return n*e/o+t},easeInQuad:function(e,t,r,o){var n=r-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,r,o){var n=r-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,r,o){var n=r-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,r,o){var n=r-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,r,o){var n=r-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,o){var n=r-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,r,o){var n=r-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,r,o){var n=r-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,r,o){var n=r-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,r,o){var n=r-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,r,o){var n=r-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,o){var n=r-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,r,o){var n=r-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,o){var n=r-t,i,a,l;return l=1.70158,a=0,i=n,e===0?t:(e/=o)===1?t+n:(a||(a=o*.3),i<Math.abs(n)?(i=n,l=a/4):l=a/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*o-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,r,o){var n=r-t,i,a,l;return l=1.70158,a=0,i=n,e===0?t:(e/=o)===1?t+n:(a||(a=o*.3),i<Math.abs(n)?(i=n,l=a/4):l=a/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*e)*Math.sin((e*o-l)*(2*Math.PI)/a)+n+t)},easeInOutElastic:function(e,t,r,o){var n=r-t,i,a,l;return l=1.70158,a=0,i=n,e===0?t:(e/=o/2)===2?t+n:(a||(a=o*(.3*1.5)),i<Math.abs(n)?(i=n,l=a/4):l=a/(2*Math.PI)*Math.asin(n/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*o-l)*(2*Math.PI)/a))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*o-l)*(2*Math.PI)/a)*.5+n+t)},easeInBack:function(e,t,r,o,n){var i=r-t;return n===void 0&&(n=1.70158),i*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,r,o,n){var i=r-t;return n===void 0&&(n=1.70158),i*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,r,o,n){var i=r-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?i/2*(e*e*(((n*=1.525)+1)*e-n))+t:i/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,r,o){var n=r-t,i;return i=z.easeOutBounce(o-e,0,n,o),n-i+t},easeOutBounce:function(e,t,r,o){var n=r-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,o){var n=r-t,i;return e<o/2?(i=z.easeInBounce(e*2,0,n,o),i*.5+t):(i=z.easeOutBounce(e*2-o,0,n,o),i*.5+n*.5+t)}},dt=z,f=typeof window<"u"?window:{screen:{},navigator:{}},S=(f.matchMedia||function(){return{matches:!1}}).bind(f),ee=!1,ut={get passive(){return ee=!0}},te=function(){};f.addEventListener&&f.addEventListener("p",te,ut);f.removeEventListener&&f.removeEventListener("p",te,!1);var ht=ee,R="ontouchstart"in f,pt="TouchEvent"in f,ft=R||pt&&S("(any-pointer: coarse)").matches;(f.navigator.maxTouchPoints||0)>0;var ne=f.navigator.userAgent||"",mt=S("(pointer: coarse)").matches&&/iPad|Macintosh/.test(ne)&&Math.min(f.screen.width||0,f.screen.height||0)>=768;(S("(pointer: coarse)").matches||!S("(pointer: fine)").matches&&R)&&/Windows.*Firefox/.test(ne);S("(any-pointer: fine)").matches||S("(any-hover: hover)").matches;const xt=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:ht},Symbol.toStringTag,{value:"Module"})),gt=Se(xt);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;function wt(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function jt(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var o=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(i){n[i]=i}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var bt=jt()?Object.assign:function(e,t){for(var r,o=wt(e),n,i=1;i<arguments.length;i++){r=Object(arguments[i]);for(var a in r)vt.call(r,a)&&(o[a]=r[a]);if(Y){n=Y(r);for(var l=0;l<n.length;l++)yt.call(r,n[l])&&(o[n[l]]=r[n[l]])}}return o};Object.defineProperty(X,"__esModule",{value:!0});var St=function(){function e(t,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),Ot=d,A=T(Ot),$t=Oe,j=T($t),It=dt,_t=T(It),V=gt,Mt=bt,W=T(Mt);function T(e){return e&&e.__esModule?e:{default:e}}function Et(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ft(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function kt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var D=function(e){kt(t,e);function t(r){Et(this,t);var o=Ft(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r));return o.state={show:!1},o.data={startValue:0,currentTime:0,startTime:null,rafId:null},o.handleClick=o.handleClick.bind(o),o.handleScroll=o.handleScroll.bind(o),o.scrollStep=o.scrollStep.bind(o),o.stopScrolling=o.stopScrolling.bind(o),o}return St(t,[{key:"shouldComponentUpdate",value:function(o,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,V.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,V.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(o){this.data.startTime||(this.data.startTime=o),this.data.currentTime=o-this.data.startTime;var n=_t.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var o=this.props.style,n=A.default.createElement("div",{style:o,onClick:this.handleClick},this.props.children),i=(0,W.default)({},t.defaultProps.style);return i=(0,W.default)(i,o),i.opacity=this.state.show?1:0,i.visibility=this.state.show?"visible":"hidden",i.transitionProperty="opacity, visibility",A.default.cloneElement(n,{style:i})}}]),t}(A.default.Component),Ct=X.default=D;D.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};D.propTypes={topPosition:j.default.number,showUnder:j.default.number.isRequired,easing:j.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:j.default.number,style:j.default.object,onShow:j.default.func,onHide:j.default.func};const Pt=c.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,zt=()=>s.jsx("div",{children:s.jsx(Ct,{showUnder:160,children:s.jsx(Pt,{children:s.jsx(v,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});O.defaults.baseURL=G;const Tt=async()=>{try{return await O.get("/pets")}catch(e){console.log(e)}},Lt=async e=>{try{return await O.delete(`/pets/${e}`)}catch(t){console.log(t)}},Bt=()=>{const[e,t]=d.useState([]),r=$e();d.useEffect(()=>{Tt().then(({data:n})=>{t(n.pets)}).catch(n=>console.log(n))},[]),d.useEffect(()=>{e.length},[e]);const o=async n=>{await Lt(n),t(i=>i.filter(a=>a._id!==n))};return s.jsxs(Xe,{children:[s.jsxs(et,{children:[s.jsxs(tt,{children:[u("user_mypets_title"),":"]}),s.jsx(Ie,{to:"/add-pet",state:{from:r},children:s.jsxs(ot,{type:"button",children:[u("user_mypets_addBtn"),s.jsx(v,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),s.jsx(nt,{children:e.map(n=>s.jsx(J,{item:n,deletePet:o},n._id))}),e.length===0&&s.jsxs(st,{children:[s.jsx(it,{children:s.jsxs(_e,{i18nKey:"user_mypets_petList",children:[s.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",s.jsx("br",{}),s.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]})}),s.jsx(rt,{src:Ae,alt:"Cat with tongue"})]}),s.jsx(zt,{})]})},At=()=>s.jsx(s.Fragment,{children:s.jsx(Bt,{})}),oe=({onClick:e,text:t})=>s.jsxs(Me,{onClick:e,children:[s.jsx(Ee,{children:t}),s.jsx(Fe,{children:s.jsx(ke,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});oe.propTypes={onClick:x.func.isRequired,text:x.string.isRequired};const Ut=c.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${h} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Rt=c.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${h} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Dt=c.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.text};

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,re=({onClose:e})=>s.jsx(U,{onClose:e,children:s.jsxs(Ut,{children:[s.jsx(Rt,{children:"Congrats!"}),s.jsx(Dt,{children:"Your registration is success"}),s.jsx(oe,{onClick:e,text:"Go to profile"})]})});re.propTypes={onClose:x.func.isRequired};function Yt(){const{isNewUser:e}=Ce(),[t,r]=d.useState(!0),o=K(),n=()=>{r(!1),o(Pe())};return d.useEffect(()=>{},[e]),s.jsxs(Ue,{children:[e&&t&&s.jsx("div",{children:s.jsx(re,{onClose:n})}),s.jsx(Je,{}),s.jsx(At,{})]})}export{Yt as default};
