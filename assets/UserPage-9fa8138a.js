import{s as r,b as d,a as w,c as b,B as V,u as G,r as u,j as i,I as x,M as L,m as ge,n as ve,F as ye,o as _,p as we,q as je,k as be,P as h,t as Se,C as $e,v as A,Y as Oe,w as K,S as Z,x as Ie,y as Ce,N as Me,z as Ee,g as Fe,A as ke}from"./index-cf68e1bf.js";import{b as Pe,c as J,d as ze,E as Te}from"./formik.esm-a445f1f4.js";const _e=r.section`
  background-color: ${e=>e.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${d} {
    padding: 62px 0;
  }

  @media ${w} {
    display: flex;
    gap: 32px;
  }
`,Be=r.div``,Ae=r.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Le=r.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,Re=r.div`
  text-align: center;
  margin-bottom: 26px;
`,Ue=r.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,qe=r(Pe)`
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

  @media ${w} {
    box-shadow: ${e=>e.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,$=r.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,O=r.label`
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
`,De=r.button`
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

  @media ${d} {
    letter-spacing: 0.64px;
  }
`,Ne=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;r.p`
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const Qe=r.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;b.defaults.baseURL=V;const Ye=async()=>{try{const e=await b.get("/users"),{user:t}=await e.data;return t}catch(e){console.log(e)}},He=async e=>{try{return await b.patch("/users",e)}catch(t){console.log(t)}},We=()=>{const e=G(),[t,s]=u.useState(null),[o,n]=u.useState(void 0),[a,l]=u.useState(""),[c,T]=u.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[C,q]=u.useState(null),[m,M]=u.useState(!1),[D,E]=u.useState(!0);u.useEffect(()=>{Ye().then(p=>{s(p)}).catch(p=>console.log(p))},[]),u.useEffect(()=>{},[t]);const[re,N]=u.useState(!1),ce=()=>{N(!0)},Q=()=>{N(!1)};u.useEffect(()=>{t&&(T({name:t&&t.name,birthday:t?t.birthday:"",phone:t?t.phone:"",city:t?t.city:"",avatar:c.avatar||"",avatarURL:t.avatarURL}),l(t&&t.email),n(C?o:t.avatarURL))},[C,o,t,c.avatar]);const le=()=>{E(!1)},F=p=>{const{name:g,value:S}=p.target;T({...c,[g]:S})},de=()=>{T({...c,avatar:C}),M(!0),E(!0)},ue=()=>{q(null),M(!0),E(!0)},he=p=>{const g=p.target.files[0];g&&g.size<=ye?(q(g),n(URL.createObjectURL(g))):(_("Your photo is large"),E(!0),n(t&&t.avatarURL))},pe=async()=>{if(C&&!c.avatar){_("Press confirm or cancel your new photo");return}M(!1);try{const p=new FormData,g=Object.entries(c);let S={};g.forEach(v=>{v[1]&&(p.append(v[0],v[1]),S={...S,[v[0]]:v[1]})});const me={};p.forEach((v,xe)=>{me[xe]=v}),await we.validate(S),He(p),je("Changes saved successfully")}catch(p){p.name==="ValidationError"&&_(p.errors[0])}},fe=()=>{M(!m)};return i.jsxs(Be,{children:[i.jsx(Ae,{children:"My information:"}),i.jsx(ze,{initialValues:c,onSubmit:pe,children:i.jsxs(qe,{children:[i.jsx(Qe,{onClick:fe,children:m?i.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):i.jsx(x,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),i.jsxs(Re,{children:[i.jsx(Le,{children:o&&i.jsx("img",{src:o,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),m&&i.jsxs("label",{htmlFor:"avatar",style:{display:D?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:le,children:[i.jsx(x,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),i.jsx(J,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:he}),i.jsx(Te,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),m&&!D&&i.jsxs(Ue,{children:[i.jsx("button",{type:"button",onClick:de,children:i.jsx(x,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),"Confirm",i.jsx("button",{type:"button",onClick:ue,children:i.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),i.jsxs("div",{children:[i.jsxs($,{children:[i.jsx(O,{htmlFor:"name",children:"Name:"}),i.jsx(I,{id:"name",name:"name",placeholder:"Anna",disabled:!m,value:c.name,onChange:F})]}),i.jsxs($,{children:[i.jsx(O,{htmlFor:"email",children:"Email:"}),i.jsx(I,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:a})]}),i.jsxs($,{children:[i.jsx(O,{htmlFor:"birthday",children:"Birthday:"}),i.jsx(I,{type:"date",id:"birthday",name:"birthday",disabled:!m,value:c.birthday,onChange:F})]}),i.jsxs($,{children:[i.jsx(O,{htmlFor:"phone",children:"Phone:"}),i.jsx(I,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!m,value:c.phone,onChange:F})]}),i.jsxs($,{children:[i.jsx(O,{htmlFor:"city",children:"City:"}),i.jsx(I,{id:"city",name:"city",placeholder:"Kyiv",disabled:!m,value:c.city,onChange:F})]}),m?i.jsx(De,{type:"submit",children:"Save"}):i.jsxs(Ne,{onClick:ce,children:[i.jsx(x,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),i.jsx("p",{children:"Log Out"})]})]})]})}),re&&i.jsx("div",{children:i.jsx(L,{onClose:Q,children:i.jsx(ge,{handleModal:Q,handleLogout:()=>e(ve())})})})]})},Ve=()=>i.jsx(i.Fragment,{children:i.jsx(We,{})}),Ge=r.div`
  @media ${w} {
    width: 821px;
  }
`,Ke=r.div`
  display: flex;
  justify-content: space-between;

  @media ${be} {
    align-items: baseline;
  }

  @media ${d} {
    align-items: flex-start;
  }
`,Ze=r.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Je=r.ul``,Xe=r.button`
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
`,et=r.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${d} {
    max-width: 250px;
  }

  @media ${w} {
    max-width: 292px;
  }
`,tt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,nt=r.h1`
  color: ${e=>e.theme.colors.text};
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
  background-color: ${e=>e.theme.colors.bgdColorAuth};
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
`,it=r.img`
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
`,k=r.p`
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
`,st=r.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${d} {
    top: 8%;
    right: 2%;
  }
`,at=r.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${d} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`,rt=r.h2`
  margin-bottom: 14px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.text};

  @media ${d} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 49px;
  }
`,ct=r.p`
  margin-bottom: 44px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  color: ${({theme:e})=>e.colors.text};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,lt=r.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,X=({handleModal:e,handleDelete:t,title:s="Delete advertisement?",name:o})=>i.jsxs(at,{children:[i.jsx(rt,{children:s}),i.jsxs(ct,{children:["Are you sure you want to delete ",i.jsxs(lt,{children:["“",o,"”"]}),"? You can`t undo this action."]}),i.jsxs(Se,{children:[i.jsx($e,{onClick:e,children:i.jsx(A,{children:"Cancel"})}),i.jsxs(Oe,{onClick:t,children:[i.jsx(A,{children:"Yes"}),i.jsx(K,{children:i.jsx(Z,{iconName:"icon-trash",stroke:"#FDF7F2"})})]})]})]});X.propTypes={handleModal:h.func.isRequired,handleDelete:h.func.isRequired,title:h.string.isRequired,name:h.string.isRequired};const ee=({item:e,deletePet:t})=>{const[s,o]=u.useState(!1),n=()=>{o(!0)},a=()=>{o(!1)};return i.jsxs(ot,{children:[i.jsx(st,{onClick:n,children:i.jsx(x,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),i.jsx(it,{src:e.photoURL}),i.jsxs("div",{children:[i.jsxs(k,{children:[i.jsx("b",{children:"Name:"})," ",e.name]}),i.jsxs(k,{children:[i.jsx("b",{children:"Date of birth:"})," ",e.birthday]}),i.jsxs(k,{children:[i.jsx("b",{children:"Type:"})," ",e.type]}),i.jsxs(k,{children:[i.jsx("b",{children:"Comments:"})," ",e.comments]})]}),s&&i.jsx("div",{children:i.jsx(L,{onClose:a,children:i.jsx(X,{title:"Are you really want to kill your lovely pet? ⚰️",name:e.name,handleModal:a,handleDelete:()=>t(e._id)})})})]})};ee.propTypes={item:h.shape({name:h.string.isRequired,birthday:h.string.isRequired,type:h.string.isRequired,comments:h.string.isRequired,photoURL:h.string.isRequired,_id:h.string.isRequired}).isRequired,deletePet:h.func.isRequired};const dt="/your-pet-project-front/assets/catImg-4fba710b.png";var te={},P={linear:function(e,t,s,o){var n=s-t;return n*e/o+t},easeInQuad:function(e,t,s,o){var n=s-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,s,o){var n=s-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,s,o){var n=s-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,s,o){var n=s-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,s,o){var n=s-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,s,o){var n=s-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,s,o){var n=s-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,s,o){var n=s-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,s,o){var n=s-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,s,o){var n=s-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,s,o){var n=s-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,s,o){var n=s-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,s,o){var n=s-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,s,o){var n=s-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,s,o){var n=s-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,s,o){var n=s-t,a,l,c;return c=1.70158,l=0,a=n,e===0?t:(e/=o)===1?t+n:(l||(l=o*.3),a<Math.abs(n)?(a=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l))+t)},easeOutElastic:function(e,t,s,o){var n=s-t,a,l,c;return c=1.70158,l=0,a=n,e===0?t:(e/=o)===1?t+n:(l||(l=o*.3),a<Math.abs(n)?(a=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/a),a*Math.pow(2,-10*e)*Math.sin((e*o-c)*(2*Math.PI)/l)+n+t)},easeInOutElastic:function(e,t,s,o){var n=s-t,a,l,c;return c=1.70158,l=0,a=n,e===0?t:(e/=o/2)===2?t+n:(l||(l=o*(.3*1.5)),a<Math.abs(n)?(a=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/a),e<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l))+t:a*Math.pow(2,-10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l)*.5+n+t)},easeInBack:function(e,t,s,o,n){var a=s-t;return n===void 0&&(n=1.70158),a*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,s,o,n){var a=s-t;return n===void 0&&(n=1.70158),a*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,s,o,n){var a=s-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?a/2*(e*e*(((n*=1.525)+1)*e-n))+t:a/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,s,o){var n=s-t,a;return a=P.easeOutBounce(o-e,0,n,o),n-a+t},easeOutBounce:function(e,t,s,o){var n=s-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,s,o){var n=s-t,a;return e<o/2?(a=P.easeInBounce(e*2,0,n,o),a*.5+t):(a=P.easeOutBounce(e*2-o,0,n,o),a*.5+n*.5+t)}},ut=P,f=typeof window<"u"?window:{screen:{},navigator:{}},j=(f.matchMedia||function(){return{matches:!1}}).bind(f),ne=!1,ht={get passive(){return ne=!0}},oe=function(){};f.addEventListener&&f.addEventListener("p",oe,ht);f.removeEventListener&&f.removeEventListener("p",oe,!1);var pt=ne,R="ontouchstart"in f,ft="TouchEvent"in f,mt=R||ft&&j("(any-pointer: coarse)").matches;(f.navigator.maxTouchPoints||0)>0;var ie=f.navigator.userAgent||"",xt=j("(pointer: coarse)").matches&&/iPad|Macintosh/.test(ie)&&Math.min(f.screen.width||0,f.screen.height||0)>=768;(j("(pointer: coarse)").matches||!j("(pointer: fine)").matches&&R)&&/Windows.*Firefox/.test(ie);j("(any-pointer: fine)").matches||j("(any-hover: hover)").matches;const gt=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:pt},Symbol.toStringTag,{value:"Module"})),vt=Ie(gt);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable;function jt(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function bt(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},s=0;s<10;s++)t["_"+String.fromCharCode(s)]=s;var o=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(a){n[a]=a}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var St=bt()?Object.assign:function(e,t){for(var s,o=jt(e),n,a=1;a<arguments.length;a++){s=Object(arguments[a]);for(var l in s)yt.call(s,l)&&(o[l]=s[l]);if(Y){n=Y(s);for(var c=0;c<n.length;c++)wt.call(s,n[c])&&(o[n[c]]=s[n[c]])}}return o};Object.defineProperty(te,"__esModule",{value:!0});var $t=function(){function e(t,s){for(var o=0;o<s.length;o++){var n=s[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,s,o){return s&&e(t.prototype,s),o&&e(t,o),t}}(),Ot=u,B=z(Ot),It=Ce,y=z(It),Ct=ut,Mt=z(Ct),H=vt,Et=St,W=z(Et);function z(e){return e&&e.__esModule?e:{default:e}}function Ft(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Pt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var U=function(e){Pt(t,e);function t(s){Ft(this,t);var o=kt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s));return o.state={show:!1},o.data={startValue:0,currentTime:0,startTime:null,rafId:null},o.handleClick=o.handleClick.bind(o),o.handleScroll=o.handleScroll.bind(o),o.scrollStep=o.scrollStep.bind(o),o.stopScrolling=o.stopScrolling.bind(o),o}return $t(t,[{key:"shouldComponentUpdate",value:function(o,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,H.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,H.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(o){this.data.startTime||(this.data.startTime=o),this.data.currentTime=o-this.data.startTime;var n=Mt.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var o=this.props.style,n=B.default.createElement("div",{style:o,onClick:this.handleClick},this.props.children),a=(0,W.default)({},t.defaultProps.style);return a=(0,W.default)(a,o),a.opacity=this.state.show?1:0,a.visibility=this.state.show?"visible":"hidden",a.transitionProperty="opacity, visibility",B.default.cloneElement(n,{style:a})}}]),t}(B.default.Component),zt=te.default=U;U.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};U.propTypes={topPosition:y.default.number,showUnder:y.default.number.isRequired,easing:y.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:y.default.number,style:y.default.object,onShow:y.default.func,onHide:y.default.func};const Tt=r.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,_t=()=>i.jsx("div",{children:i.jsx(zt,{showUnder:160,children:i.jsx(Tt,{children:i.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});b.defaults.baseURL=V;const Bt=async()=>{try{return await b.get("/pets")}catch(e){console.log(e)}},At=async e=>{try{return await b.delete(`/pets/${e}`)}catch(t){console.log(t)}},Lt=()=>{const[e,t]=u.useState([]);u.useEffect(()=>{Bt().then(({data:o})=>{t(o.pets)}).catch(o=>console.log(o))},[]),u.useEffect(()=>{e.length},[e]);const s=async o=>{await At(o),t(n=>n.filter(a=>a._id!==o))};return i.jsxs(Ge,{children:[i.jsxs(Ke,{children:[i.jsx(Ze,{children:"My pets:"}),i.jsx(Me,{to:"/add-pet",children:i.jsxs(Xe,{type:"button",children:["Add Pet",i.jsx(x,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),i.jsx(Je,{children:e.map(o=>i.jsx(ee,{item:o,deletePet:s},o._id))}),e.length===0&&i.jsxs(tt,{children:[i.jsxs(nt,{children:[i.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",i.jsx("br",{}),i.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]}),i.jsx(et,{src:dt,alt:"Cat with tongue"})]}),i.jsx(_t,{})]})},Rt=()=>i.jsx(i.Fragment,{children:i.jsx(Lt,{})}),se=({onClick:e,text:t})=>i.jsxs(Ee,{onClick:e,children:[i.jsx(A,{children:t}),i.jsx(K,{children:i.jsx(Z,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});se.propTypes={onClick:h.func.isRequired,text:h.string.isRequired};const Ut=r.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${d} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,qt=r.h3`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({theme:e})=>e.colors.text};

  @media ${d} {
    margin-bottom: 52px;
    font-size: ${e=>e.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`,Dt=r.p`
  margin-bottom: 40px;
  font-size: ${e=>e.theme.fontSizes.md};
  font-family: ${e=>e.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.text};

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`,ae=({onClose:e})=>i.jsx(L,{onClose:e,children:i.jsxs(Ut,{children:[i.jsx(qt,{children:"Congrats!"}),i.jsx(Dt,{children:"Your registration is success"}),i.jsx(se,{onClick:e,text:"Go to profile"})]})});ae.propTypes={onClose:h.func.isRequired};function Yt(){const{isNewUser:e}=Fe(),[t,s]=u.useState(!0),o=G(),n=()=>{s(!1),o(ke())};return u.useEffect(()=>{},[e]),i.jsxs(_e,{children:[e&&t&&i.jsx("div",{children:i.jsx(ae,{onClose:n})}),i.jsx(Ve,{}),i.jsx(Rt,{})]})}export{Yt as default};
