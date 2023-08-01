import{s as a,b as h,a as b,d as S,B as K,h as J,r as u,j as s,t as d,I as v,M as U,p as je,q as be,e as $e,F as Se,v as L,w as Oe,x as Ie,n as _e,P as p,T as Z,y as Me,z as Ee,A as R,Y as Fe,D as X,S as ee,E as ke,G as Ce,c as Pe,L as ze,H as Te,u as Be,J as Le}from"./index-d9684122.js";import{b as Ae,c as te,d as Re,E as Ue}from"./formik.esm-4c35b569.js";const De=a.section`
  background-color: ${e=>e.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${h} {
    padding: 62px 0;
  }

  @media ${b} {
    display: flex;
    gap: 32px;
  }
`,qe=a.div``,He=a.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,Ne=a.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${e=>e.theme.colors.bgdColor};
`,Qe=a.div`
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
`,Ye=a.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,We=a(Ae)`
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
`,I=a.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,_=a.label`
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${h} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,M=a(te)`
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
`,Ve=a.button`
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
`,Ge=a.div`
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
`;const Ke=a.div`
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
`;S.defaults.baseURL=K;const Je=async()=>{try{const e=await S.get("/users"),{user:t}=await e.data;return t}catch(e){console.log(e)}},Ze=async e=>{try{return await S.patch("/users",e)}catch(t){console.log(t)}},Xe=()=>{const e=J(),[t,i]=u.useState(null),[o,n]=u.useState(!1),[r,l]=u.useState(void 0),[c,de]=u.useState(""),[x,B]=u.useState({name:"",avatar:"",birthday:"",phone:"",city:""}),[E,H]=u.useState(null),[g,F]=u.useState(!1),[N,k]=u.useState(!0);u.useEffect(()=>{n(!0),Je().then(f=>{i(f)}).catch(f=>console.log(f)).finally(()=>n(!1))},[]),u.useEffect(()=>{},[t]);const[ue,Q]=u.useState(!1),he=()=>{Q(!0)},Y=()=>{Q(!1)};u.useEffect(()=>{t&&(B({name:t&&t.name,birthday:t?t.birthday:"",phone:t?t.phone:"",city:t?t.city:"",avatar:x.avatar||"",avatarURL:t.avatarURL}),de(t&&t.email),l(E?r:t.avatarURL))},[E,r,t,x.avatar]);const pe=()=>{k(!1)},C=f=>{const{name:y,value:O}=f.target;B({...x,[y]:O})},fe=()=>{B({...x,avatar:E}),F(!0),k(!0)},me=()=>{H(null),F(!0),k(!0)},xe=f=>{const y=f.target.files[0];y&&y.size<=Se?(H(y),l(URL.createObjectURL(y))):(L("Your photo is large"),k(!0),l(t&&t.avatarURL))},ge=async()=>{if(E&&!x.avatar){L("Press confirm or cancel your new photo");return}F(!1);try{const f=new FormData,y=Object.entries(x);let O={};y.forEach(w=>{w[1]&&(f.append(w[0],w[1]),O={...O,[w[0]]:w[1]})});const ye={};f.forEach((w,we)=>{ye[we]=w}),await Oe.validate(O),n(!0),Ze(f),Ie("Changes saved successfully")}catch(f){f.name==="ValidationError"&&L(f.errors[0])}finally{n(!1)}},ve=()=>{F(!g)};return s.jsxs(qe,{children:[s.jsx(He,{children:d("user_myinfo_title")}),s.jsx(Re,{initialValues:x,onSubmit:ge,children:s.jsxs(We,{children:[s.jsx(Ke,{onClick:ve,children:g?s.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"}):s.jsx(v,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"})}),s.jsxs(Qe,{children:[s.jsx(Ne,{children:r&&s.jsx("img",{src:r,style:{borderRadius:40,objectFit:"cover",width:"100%",height:"100%"},alt:"Попередній перегляд аватарки"})}),g&&s.jsxs("label",{htmlFor:"avatar",style:{display:N?"flex":"none",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"},onClick:pe,children:[s.jsx(v,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),d("user_myinfo_editPhoto")]}),s.jsx(te,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:xe}),s.jsx(Ue,{name:"avatar",component:"div",style:{color:"red",fontSize:12}}),g&&!N&&s.jsxs(Ye,{children:[s.jsx("button",{type:"button",onClick:fe,children:s.jsx(v,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"})}),d("other_confirm"),s.jsx("button",{type:"button",onClick:me,children:s.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})})]})]}),s.jsxs("div",{children:[s.jsxs(I,{children:[s.jsxs(_,{htmlFor:"name",children:[" ",d("other_name"),":"]}),s.jsx(M,{id:"name",name:"name",placeholder:"Anna",disabled:!g,value:x.name,onChange:C})]}),s.jsxs(I,{children:[s.jsxs(_,{htmlFor:"email",children:[d("other_mail"),":"]}),s.jsx(M,{id:"email",name:"email",placeholder:"anna00@gmail.com",disabled:!0,value:c})]}),s.jsxs(I,{children:[s.jsxs(_,{htmlFor:"birthday",children:[d("other_birthday"),":"]}),s.jsx(M,{type:"date",id:"birthday",name:"birthday",disabled:!g,value:x.birthday,onChange:C})]}),s.jsxs(I,{children:[s.jsxs(_,{htmlFor:"phone",children:[d("other_phone"),":"]}),s.jsx(M,{id:"phone",name:"phone",placeholder:"+38000000000",disabled:!g,value:x.phone,onChange:C})]}),s.jsxs(I,{children:[s.jsxs(_,{htmlFor:"city",children:[d("other_city"),":"]}),s.jsx(M,{id:"city",name:"city",placeholder:d("user_myinfo_formPlaceholder_city"),disabled:!g,value:x.city,onChange:C})]}),g?s.jsx(Ve,{type:"submit",children:d("user_myinfo_saveBtn")}):s.jsxs(Ge,{onClick:he,children:[s.jsx(v,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),s.jsx("p",{children:d("user_myinfo_logout")})]})]})]})}),ue&&s.jsx("div",{children:s.jsx(U,{onClose:Y,children:s.jsx(je,{handleModal:Y,handleLogout:()=>e(be())})})}),o?s.jsx($e,{}):null]})},et=()=>s.jsx(s.Fragment,{children:s.jsx(Xe,{})}),tt=a.div`
  @media ${b} {
    width: 821px;
  }
`,nt=a.div`
  display: flex;
  justify-content: space-between;

  @media ${_e} {
    align-items: baseline;
  }

  @media ${h} {
    align-items: flex-start;
  }
`,ot=a.h2`
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.text};
  margin-bottom: 24px;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,st=a.ul``,it=a.button`
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
`,rt=a.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${h} {
    max-width: 250px;
  }

  @media ${b} {
    max-width: 292px;
  }
`,at=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,lt=a.h1`
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
`,ct=a.div`
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
`,dt=a.img`
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
`,ut=a.button`
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
`,ht=a.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${h} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`,pt=a.h2`
  margin-bottom: 14px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.text};

  @media ${h} {
    margin-bottom: 40px;
    font-size: ${e=>e.theme.fontSizes.xxl};
    line-height: 49px;
  }
`,ft=a.p`
  margin-bottom: 44px;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-family: ${e=>e.theme.fonts.main.medium};
  color: ${({theme:e})=>e.colors.text};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 22px;
  }
`,mt=a.span`
  font-family: ${e=>e.theme.fonts.main.bold};
`,ne=({handleModal:e,handleDelete:t,title:i="Delete advertisement?",name:o})=>s.jsxs(ht,{children:[s.jsx(pt,{children:i}),s.jsx(ft,{children:s.jsxs(Z,{i18nKey:"modal_deletePet_description",values:{name:o},children:["Are you sure you want to delete ",s.jsxs(mt,{children:["“",o,"”"]}),"? You can`t undo this action."]})}),s.jsxs(Me,{children:[s.jsx(Ee,{onClick:e,children:s.jsx(R,{children:d("other_cancel")})}),s.jsxs(Fe,{onClick:t,children:[s.jsx(R,{children:d("other_yes")}),s.jsx(X,{children:s.jsx(ee,{iconName:"icon-trash",stroke:"#FDF7F2"})})]})]})]});ne.propTypes={handleModal:p.func.isRequired,handleDelete:p.func.isRequired,title:p.string.isRequired,name:p.string.isRequired};const oe=({item:e,deletePet:t})=>{const[i,o]=u.useState(!1),n=()=>{o(!0)},r=()=>{o(!1)};return s.jsxs(ct,{children:[s.jsx(ut,{onClick:n,children:s.jsx(v,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),s.jsx(dt,{src:e.photoURL}),s.jsxs("div",{children:[s.jsxs(P,{children:[s.jsxs("b",{children:[d("other_name"),":"]})," ",e.name]}),s.jsxs(P,{children:[s.jsxs("b",{children:[d("user_mypets_petInfo_dateOfBirth"),":"]})," ",e.birthday]}),s.jsxs(P,{children:[s.jsxs("b",{children:[d("other_type"),":"]})," ",e.type]}),s.jsxs(P,{children:[s.jsxs("b",{children:[d("other_comments"),":"]})," ",e.comments]})]}),i&&s.jsx("div",{children:s.jsx(U,{onClose:r,children:s.jsx(ne,{title:d("modal_deletePet_title"),name:e.name,handleModal:r,handleDelete:()=>t(e._id)})})})]})};oe.propTypes={item:p.shape({name:p.string.isRequired,birthday:p.string.isRequired,type:p.string.isRequired,comments:p.string.isRequired,photoURL:p.string.isRequired,_id:p.string.isRequired}).isRequired,deletePet:p.func.isRequired};const xt="/your-pet-project-front/assets/catImg-4fba710b.png";var se={},z={linear:function(e,t,i,o){var n=i-t;return n*e/o+t},easeInQuad:function(e,t,i,o){var n=i-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,i,o){var n=i-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,i,o){var n=i-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,i,o){var n=i-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,i,o){var n=i-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,i,o){var n=i-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,i,o){var n=i-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,i,o){var n=i-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,i,o){var n=i-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,i,o){var n=i-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,i,o){var n=i-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,i,o){var n=i-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,i,o){var n=i-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,i,o){var n=i-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,i,o){var n=i-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,i,o){var n=i-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,i,o){var n=i-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,i,o){var n=i-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,i,o){var n=i-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,i,o){var n=i-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,i,o){var n=i-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,i,o){var n=i-t,r,l,c;return c=1.70158,l=0,r=n,e===0?t:(e/=o)===1?t+n:(l||(l=o*.3),r<Math.abs(n)?(r=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/r),-(r*Math.pow(2,10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l))+t)},easeOutElastic:function(e,t,i,o){var n=i-t,r,l,c;return c=1.70158,l=0,r=n,e===0?t:(e/=o)===1?t+n:(l||(l=o*.3),r<Math.abs(n)?(r=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*o-c)*(2*Math.PI)/l)+n+t)},easeInOutElastic:function(e,t,i,o){var n=i-t,r,l,c;return c=1.70158,l=0,r=n,e===0?t:(e/=o/2)===2?t+n:(l||(l=o*(.3*1.5)),r<Math.abs(n)?(r=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/r),e<1?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l))+t:r*Math.pow(2,-10*(e-=1))*Math.sin((e*o-c)*(2*Math.PI)/l)*.5+n+t)},easeInBack:function(e,t,i,o,n){var r=i-t;return n===void 0&&(n=1.70158),r*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,i,o,n){var r=i-t;return n===void 0&&(n=1.70158),r*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,i,o,n){var r=i-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?r/2*(e*e*(((n*=1.525)+1)*e-n))+t:r/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,i,o){var n=i-t,r;return r=z.easeOutBounce(o-e,0,n,o),n-r+t},easeOutBounce:function(e,t,i,o){var n=i-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,i,o){var n=i-t,r;return e<o/2?(r=z.easeInBounce(e*2,0,n,o),r*.5+t):(r=z.easeOutBounce(e*2-o,0,n,o),r*.5+n*.5+t)}},gt=z,m=typeof window<"u"?window:{screen:{},navigator:{}},$=(m.matchMedia||function(){return{matches:!1}}).bind(m),ie=!1,vt={get passive(){return ie=!0}},re=function(){};m.addEventListener&&m.addEventListener("p",re,vt);m.removeEventListener&&m.removeEventListener("p",re,!1);var yt=ie,D="ontouchstart"in m,wt="TouchEvent"in m,jt=D||wt&&$("(any-pointer: coarse)").matches;(m.navigator.maxTouchPoints||0)>0;var ae=m.navigator.userAgent||"",bt=$("(pointer: coarse)").matches&&/iPad|Macintosh/.test(ae)&&Math.min(m.screen.width||0,m.screen.height||0)>=768;($("(pointer: coarse)").matches||!$("(pointer: fine)").matches&&D)&&/Windows.*Firefox/.test(ae);$("(any-pointer: fine)").matches||$("(any-hover: hover)").matches;const $t=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:yt},Symbol.toStringTag,{value:"Module"})),St=ke($t);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var W=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;function _t(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Mt(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;var o=Object.getOwnPropertyNames(t).map(function(r){return t[r]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Et=Mt()?Object.assign:function(e,t){for(var i,o=_t(e),n,r=1;r<arguments.length;r++){i=Object(arguments[r]);for(var l in i)Ot.call(i,l)&&(o[l]=i[l]);if(W){n=W(i);for(var c=0;c<n.length;c++)It.call(i,n[c])&&(o[n[c]]=i[n[c]])}}return o};Object.defineProperty(se,"__esModule",{value:!0});var Ft=function(){function e(t,i){for(var o=0;o<i.length;o++){var n=i[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),kt=u,A=T(kt),Ct=Ce,j=T(Ct),Pt=gt,zt=T(Pt),V=St,Tt=Et,G=T(Tt);function T(e){return e&&e.__esModule?e:{default:e}}function Bt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function At(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e){At(t,e);function t(i){Bt(this,t);var o=Lt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i));return o.state={show:!1},o.data={startValue:0,currentTime:0,startTime:null,rafId:null},o.handleClick=o.handleClick.bind(o),o.handleScroll=o.handleScroll.bind(o),o.scrollStep=o.scrollStep.bind(o),o.stopScrolling=o.stopScrolling.bind(o),o}return Ft(t,[{key:"shouldComponentUpdate",value:function(o,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,V.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,V.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(o){this.data.startTime||(this.data.startTime=o),this.data.currentTime=o-this.data.startTime;var n=zt.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var o=this.props.style,n=A.default.createElement("div",{style:o,onClick:this.handleClick},this.props.children),r=(0,G.default)({},t.defaultProps.style);return r=(0,G.default)(r,o),r.opacity=this.state.show?1:0,r.visibility=this.state.show?"visible":"hidden",r.transitionProperty="opacity, visibility",A.default.cloneElement(n,{style:r})}}]),t}(A.default.Component),Rt=se.default=q;q.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};q.propTypes={topPosition:j.default.number,showUnder:j.default.number.isRequired,easing:j.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:j.default.number,style:j.default.object,onShow:j.default.func,onHide:j.default.func};const Ut=a.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,Dt=()=>s.jsx("div",{children:s.jsx(Rt,{showUnder:160,children:s.jsx(Ut,{children:s.jsx(v,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});S.defaults.baseURL=K;const qt=async()=>{try{return await S.get("/pets")}catch(e){console.log(e)}},Ht=async e=>{try{return await S.delete(`/pets/${e}`)}catch(t){console.log(t)}},Nt=()=>{const[e,t]=u.useState([]),i=Pe();u.useEffect(()=>{qt().then(({data:n})=>{t(n.pets)}).catch(n=>console.log(n))},[]),u.useEffect(()=>{e.length},[e]);const o=async n=>{await Ht(n),t(r=>r.filter(l=>l._id!==n))};return s.jsxs(tt,{children:[s.jsxs(nt,{children:[s.jsxs(ot,{children:[d("user_mypets_title"),":"]}),s.jsx(ze,{to:"/add-pet",state:{from:i},children:s.jsxs(it,{type:"button",children:[d("user_mypets_addBtn"),s.jsx(v,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})})]}),s.jsx(st,{children:e.map(n=>s.jsx(oe,{item:n,deletePet:o},n._id))}),e.length===0&&s.jsxs(at,{children:[s.jsx(lt,{children:s.jsxs(Z,{i18nKey:"user_mypets_petList",children:[s.jsx("p",{children:"Sorry..."})," You do not have any pets :( ",s.jsx("br",{}),s.jsx("span",{style:{color:"#FFC107"},children:"But you can add them."})]})}),s.jsx(rt,{src:xt,alt:"Cat with tongue"})]}),s.jsx(Dt,{})]})},Qt=()=>s.jsx(s.Fragment,{children:s.jsx(Nt,{})}),le=({onClick:e,text:t})=>s.jsxs(Te,{onClick:e,children:[s.jsx(R,{children:t}),s.jsx(X,{children:s.jsx(ee,{iconName:"icon-pawprint",fill:"#FDF7F2"})})]});le.propTypes={onClick:p.func.isRequired,text:p.string.isRequired};const Yt=a.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.colors.bgdColor};

  @media ${h} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`,Wt=a.h3`
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
`,Vt=a.p`
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
`,ce=({onClose:e})=>s.jsx(U,{onClose:e,children:s.jsxs(Yt,{children:[s.jsx(Wt,{children:"Congrats!"}),s.jsx(Vt,{children:"Your registration is success"}),s.jsx(le,{onClick:e,text:"Go to profile"})]})});ce.propTypes={onClose:p.func.isRequired};function Jt(){const{isNewUser:e}=Be(),[t,i]=u.useState(!0),o=J(),n=()=>{i(!1),o(Le())};return u.useEffect(()=>{},[e]),s.jsxs(De,{children:[e&&t&&s.jsx("div",{children:s.jsx(ce,{onClose:n})}),s.jsx(et,{}),s.jsx(Qt,{})]})}export{Jt as default};
