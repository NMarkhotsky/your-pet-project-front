import{s as c,b as h,a as b,g as O,B as K,k as Z,r as d,j as r,t as u,I as v,M as R,v as xe,w as ge,d as ve,F as ye,e as A,x as we,f as je,p as be,P as x,y as Se,z as Oe,c as $e,L as Ie,T as _e,S as Me,A as Ee,D as Fe,E as ke,u as Ce,G as Pe}from"./index-0c2c32de.js";import{b as ze,c as J,d as Le,E as Te}from"./formik.esm-da73f39c.js";import{M as Be}from"./ModalConfirmDelete-943ac2fd.js";import{i as Ae}from"./catImg-34c1bda9.js";const Ue=c.section`
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
`,E=c(J)`
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
`;O.defaults.baseURL=K;const Ge=async()=>{try{const e=await O.get("/users"),{user:t}=await e.data;return t}catch(e){console.log(e)}},Ke=async e=>{try{return await O.patch("/users",e)}catch(t){console.log(t)}},Ze=()=>{const e=Z(),[t,s]=d.useState(null),[o,n]=d.useState(!1),[i,a]=d.useState(void 0),[l,T]=d.useState(""),[m,B]=d.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[F,Q]=d.useState(null),[g,$]=d.useState(!1),[H,k]=d.useState(!0);d.useEffect(()=>{n(!0),Ge().then(p=>{s(p)}).catch(p=>console.log(p)).finally(()=>n(!1))},[]),d.useEffect(()=>{},[t]);const[ie,N]=d.useState(!1),ae=()=>{N(!0)},Y=()=>{N(!1)};d.useEffect(()=>{t&&(B({name:t&&t.name,birthday:t?t.birthday:"",phone:t?t.phone:"",city:t?t.city:"",avatar:m.avatar||"",avatarURL:t.avatarURL}),T(t&&t.email),a(F?i:t.avatarURL))},[F,i,t,m.avatar]);const ce=()=>{k(!1)},C=p=>{const{name:y,value:I}=p.target;B({...m,[y]:I})},le=()=>{B({...m,avatar:F}),$(!0),k(!0)},de=()=>{Q(null),$(!0),k(!0)},ue=p=>{const y=p.target.files[0];y&&y.size<=ye?(Q(y),a(URL.createObjectURL(y))):(A("Your photo is large"),k(!0),a(t&&t.avatarURL))},he=async()=>{if(F&&!m.avatar){A("Press confirm or cancel your new photo");return}$(!1);try{const p=new FormData,y=Object.entries(m);let I={};y.forEach(w=>{w[1]&&(p.append(w[0],w[1]),I={...I,[w[0]]:w[1]})});const fe={};p.forEach((w,me)=>{fe[me]=w}),await we.validate(I),n(!0),Ke(p),je("Changes saved successfully")}catch(p){p.name==="ValidationError"&&($(!0),A(p.errors[0]))}finally{n(!1)}},pe=()=>{$(!g)};return r.jsxs(Re,{children:[r.jsx(De,{children:u("user_myinfo_title")}),r.jsx(Le,{initialValues:m,onSubmit:he,children:r.jsxs(Ne,{children:[r.jsx(We,{onClick:pe,children:g?r.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):r.jsx(v,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),r.jsxs(Qe,{children:[r.jsx(qe,{children:i&&r.jsx("img",{src:i,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),g&&r.jsxs("label",{htmlFor:"avatar",style:{display:H?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:ce,children:[r.jsx(v,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),u("user_myinfo_editPhoto")]}),r.jsx(J,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:ue}),r.jsx(Te,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),g&&!H&&r.jsxs(He,{children:[r.jsx("button",{type:"button",onClick:le,children:r.jsx(v,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),u("other_confirm"),r.jsx("button",{type:"button",onClick:de,children:r.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),r.jsxs("div",{children:[r.jsxs(_,{children:[r.jsxs(M,{htmlFor:"name",children:[" ",u("other_name"),":"]}),r.jsx(E,{id:"name",name:"name",placeholder:"Anna",disabled:!g,value:m.name,onChange:C})]}),r.jsxs(_,{children:[r.jsxs(M,{htmlFor:"email",children:[u("other_mail"),":"]}),r.jsx(E,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:l})]}),r.jsxs(_,{children:[r.jsxs(M,{htmlFor:"birthday",children:[u("other_birthday"),":"]}),r.jsx(E,{type:"date",id:"birthday",name:"birthday",disabled:!g,value:m.birthday,onChange:C})]}),r.jsxs(_,{children:[r.jsxs(M,{htmlFor:"phone",children:[u("other_phone"),":"]}),r.jsx(E,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!g,value:m.phone,onChange:C})]}),r.jsxs(_,{children:[r.jsxs(M,{htmlFor:"city",children:[u("other_city"),":"]}),r.jsx(E,{id:"city",name:"city",placeholder:u("user_myinfo_formPlaceholder_city"),disabled:!g,value:m.city,onChange:C})]}),g?r.jsx(Ye,{type:"submit",children:u("user_myinfo_saveBtn")}):r.jsxs(Ve,{onClick:ae,children:[r.jsx(v,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),r.jsx("p",{children:u("user_myinfo_logout")})]})]})]})}),ie&&r.jsx(R,{onClose:Y,children:r.jsx(xe,{handleModal:Y,handleLogout:()=>e(ge())})}),o?r.jsx(ve,{}):null]})},Je=()=>r.jsx(r.Fragment,{children:r.jsx(Ze,{})}),Xe=c.div`
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
`,st=c.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${h} {
    max-width: 250px;
  }

  @media ${b} {
    max-width: 292px;
  }
`,rt=c.div`
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
`,X=({item:e,deletePet:t})=>{const[s,o]=d.useState(!1);let n;e.birthday&&(n=e.birthday.split("-").reverse().join("."));const i=()=>{o(!0)},a=()=>{o(!1)};return r.jsxs(at,{children:[r.jsx(lt,{onClick:i,children:r.jsx(v,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),r.jsx(ct,{src:e.photoURL}),r.jsxs("div",{children:[r.jsxs(P,{children:[r.jsxs("b",{children:[u("other_name"),":"]})," ",e.name]}),r.jsxs(P,{children:[r.jsxs("b",{children:[u("user_mypets_petInfo_dateOfBirth"),":"]})," ",n]}),r.jsxs(P,{children:[r.jsxs("b",{children:[u("other_type"),":"]})," ",e.type]}),r.jsxs(P,{children:[r.jsxs("b",{children:[u("other_comments"),":"]})," ",e.comments]})]}),s&&r.jsx(R,{onClose:a,children:r.jsx(Be,{title:u("modal_deletePet_title"),name:e.name,handleModal:a,handleDelete:()=>t(e._id)})})]})};X.propTypes={item:x.shape({name:x.string.isRequired,birthday:x.string.isRequired,type:x.string.isRequired,comments:x.string.isRequired,photoURL:x.string.isRequired,_id:x.string.isRequired}).isRequired,deletePet:x.func.isRequired};var ee={},z={linear:function(e,t,s,o){var n=s-t;return n*e/o+t},easeInQuad:function(e,t,s,o){var n=s-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,s,o){var n=s-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,s,o){var n=s-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,s,o){var n=s-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,s,o){var n=s-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,s,o){var n=s-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,s,o){var n=s-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,s,o){var n=s-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,s,o){var n=s-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,s,o){var n=s-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,s,o){var n=s-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,s,o){var n=s-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,s,o){var n=s-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,s,o){var n=s-t,i,a,l;return l=1.70158,a=0,i=n,e===0?t:(e/=o)===1?t+n:(a||(a=o*.3),i<Math.abs(n)?(i=n,l=a/4):l=a/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*o-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,s,o){var n=s-t,i,a,l;return l=1.70158,a=0,i=n,e===0?t:(e/=o)===1?t+n:(a||(a=o*.3),i<Math.abs(n)?(i=n,l=a/4):l=a/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*e)*Math.sin((e*o-l)*(2*Math.PI)/a)+n+t)},easeInOutElastic:function(e,t,s,o){var n=s-t,i,a,l;return l=1.70158,a=0,i=n,e===0?t:(e/=o/2)===2?t+n:(a||(a=o*(.3*1.5)),i<Math.abs(n)?(i=n,l=a/4):l=a/(2*Math.PI)*Math.asin(n/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*o-l)*(2*Math.PI)/a))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*o-l)*(2*Math.PI)/a)*.5+n+t)},easeInBack:function(e,t,s,o,n){var i=s-t;return n===void 0&&(n=1.70158),i*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,s,o,n){var i=s-t;return n===void 0&&(n=1.70158),i*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,s,o,n){var i=s-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?i/2*(e*e*(((n*=1.525)+1)*e-n))+t:i/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,s,o){var n=s-t,i;return i=z.easeOutBounce(o-e,0,n,o),n-i+t},easeOutBounce:function(e,t,s,o){var n=s-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,s,o){var n=s-t,i;return e<o/2?(i=z.easeInBounce(e*2,0,n,o),i*.5+t):(i=z.easeOutBounce(e*2-o,0,n,o),i*.5+n*.5+t)}},dt=z,f=typeof window<"u"?window:{screen:{},navigator:{}},S=(f.matchMedia||function(){return{matches:!1}}).bind(f),te=!1,ut={get passive(){return te=!0}},ne=function(){};f.addEventListener&&f.addEventListener("p",ne,ut);f.removeEventListener&&f.removeEventListener("p",ne,!1);var ht=te,D="ontouchstart"in f,pt="TouchEvent"in f,ft=D||pt&&S("(any-pointer: coarse)").matches;(f.navigator.maxTouchPoints||0)>0;var oe=f.navigator.userAgent||"",mt=S("(pointer: coarse)").matches&&/iPad|Macintosh/.test(oe)&&Math.min(f.screen.width||0,f.screen.height||0)>=768;(S("(pointer: coarse)").matches||!S("(pointer: fine)").matches&&D)&&/Windows.*Firefox/.test(oe);S("(any-pointer: fine)").matches||S("(any-hover: hover)").matches;const xt=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:ht},Symbol.toStringTag,{value:"Module"})),gt=Se(xt);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var V=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;function wt(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function jt(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},s=0;s<10;s++)t["_"+String.fromCharCode(s)]=s;var o=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(i){n[i]=i}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var bt=jt()?Object.assign:function(e,t){for(var s,o=wt(e),n,i=1;i<arguments.length;i++){s=Object(arguments[i]);for(var a in s)vt.call(s,a)&&(o[a]=s[a]);if(V){n=V(s);for(var l=0;l<n.length;l++)yt.call(s,n[l])&&(o[n[l]]=s[n[l]])}}return o};Object.defineProperty(ee,"__esModule",{value:!0});var St=function(){function e(t,s){for(var o=0;o<s.length;o++){var n=s[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,s,o){return s&&e(t.prototype,s),o&&e(t,o),t}}(),Ot=d,U=L(Ot),$t=Oe,j=L($t),It=dt,_t=L(It),W=gt,Mt=bt,G=L(Mt);function L(e){return e&&e.__esModule?e:{default:e}}function Et(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ft(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function kt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e){kt(t,e);function t(s){Et(this,t);var o=Ft(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s));return o.state={show:!1},o.data={startValue:0,currentTime:0,startTime:null,rafId:null},o.handleClick=o.handleClick.bind(o),o.handleScroll=o.handleScroll.bind(o),o.scrollStep=o.scrollStep.bind(o),o.stopScrolling=o.stopScrolling.bind(o),o}return St(t,[{key:"shouldComponentUpdate",value:function(o,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,W.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,W.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(o){this.data.startTime||(this.data.startTime=o),this.data.currentTime=o-this.data.startTime;var n=_t.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var o=this.props.style,n=U.default.createElement("div",{style:o,onClick:this.handleClick},this.props.children),i=(0,G.default)({},t.defaultProps.style);return i=(0,G.default)(i,o),i.opacity=this.state.show?1:0,i.visibility=this.state.show?"visible":"hidden",i.transitionProperty="opacity, visibility",U.default.cloneElement(n,{style:i})}}]),t}(U.default.Component),Ct=ee.default=q;q.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};q.propTypes={topPosition:j.default.number,showUnder:j.default.number.isRequired,easing:j.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:j.default.number,style:j.default.object,onShow:j.default.func,onHide:j.default.func};const Pt=c.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,zt=()=>r.jsx("div",{children:r.jsx(Ct,{showUnder:160,children:r.jsx(Pt,{children:r.jsx(v,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});O.defaults.baseURL=K;const Lt=async()=>{try{return await O.get("/pets")}catch(e){console.log(e)}},Tt=async e=>{try{return await O.delete(`/pets/${e}`)}catch(t){console.log(t)}},Bt=()=>{const[e,t]=d.useState([]),[s,o]=d.useState(!1),n=$e();d.useEffect(()=>{Lt().then(({data:a})=>{o(!0),t(a.pets)}).catch(a=>{o(!0),console.log(a)}).finally(()=>{o(!1)})},[]),d.useEffect(()=>{e.length},[e]);const i=async a=>{await Tt(a),t(l=>l.filter(T=>T._id!==a))};return r.jsxs(Xe,{children:[r.jsxs(et,{children:[r.jsxs(tt,{children:[u("user_mypets_title"),":"]}),r.jsx(Ie,{to:"/add-pet",state:{from:n},children:r.jsxs(ot,{type:"button",children:[u("user_mypets_addBtn"),r.jsx(v,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),r.jsx(nt,{children:e.map(a=>r.jsx(X,{item:a,deletePet:i},a._id))}),e.length===0&&!s&&r.jsxs(rt,{children:[r.jsx(it,{children:r.jsxs(_e,{i18nKey:"user_mypets_petList",children:[r.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",r.jsx("br",{}),r.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]})}),r.jsx(st,{src:Ae,alt:"Cat with tongue"})]}),r.jsx(zt,{})]})},At=()=>r.jsx(r.Fragment,{children:r.jsx(Bt,{})}),se=({onClick:e,text:t})=>r.jsxs(Me,{onClick:e,children:[r.jsx(Ee,{children:t}),r.jsx(Fe,{children:r.jsx(ke,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});se.propTypes={onClick:x.func.isRequired,text:x.string.isRequired};const Ut=c.div`
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
`,re=({onClose:e})=>r.jsx(R,{onClose:e,children:r.jsxs(Ut,{children:[r.jsx(Rt,{children:"Congrats!"}),r.jsx(Dt,{children:"Your registration is success"}),r.jsx(se,{onClick:e,text:"Go to profile"})]})});re.propTypes={onClose:x.func.isRequired};function Yt(){const{isNewUser:e}=Ce(),[t,s]=d.useState(!0),o=Z(),n=()=>{s(!1),o(Pe())};return d.useEffect(()=>{},[e]),r.jsxs(Ue,{children:[e&&t&&r.jsx("div",{children:r.jsx(re,{onClose:n})}),r.jsx(Je,{}),r.jsx(At,{})]})}export{Yt as default};
