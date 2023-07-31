import{s,b as d,j as t,d as D,e as f,G as J,a as m,A as ie,H as j,J as oe,r as u,I as h,K as se,u as v,Q as le,R as re,T as K,U as Q,V as G,z as Z,W as ce,X as de,Z as pe,_ as V,$ as B,a0 as M,a1 as X,a2 as xe}from"./index-6b402b3b.js";import{u as $}from"./formik.esm-d4ff90d6.js";import{B as he}from"./BackgroundWrapper-5a5260a6.js";const x={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost-or-found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},I=({currentPage:e,type:o,num:i})=>{switch(o){case"text":if(e===i)return"current";if(e>i)return"select";if(e<i)return"ordinary";break;case"bar":if(e===i)return"current";if(e>i)return"select";if(e<i)return"opacity-ordinary";break}},L={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},ee=e=>{switch(e.variant){case"current":return L.current;case"select":return L.select;case"ordinary":return L.ordinary;case"opacity-ordinary":return L.opacityOrdinary;default:return"tomato"}},z=({value:e,formik:o})=>o.values.gender===e?"#fff":"#888888",ue=s.ul`
  max-width: 392px;
  display: flex;
  justify-content: space-between;
  // margin: auto;

  @media ${d} {
    margin: auto;
  }
`,_=s.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,q=s.p`
  white-space: nowrap;
  color: ${ee};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 1.65;
  }
`,R=s.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${ee};
`;function me({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(ue,{children:[t.jsxs(_,{children:[t.jsx(q,{variant:e===0?"current":"select",children:"Choose option"}),t.jsx(R,{variant:e===0?"current":"select"})]}),t.jsxs(_,{children:[t.jsx(q,{variant:I({currentPage:e,type:"text",num:1}),children:"Personal details"}),t.jsx(R,{variant:I({currentPage:e,type:"bar",num:1})})]}),t.jsxs(_,{children:[t.jsx(q,{variant:I({currentPage:e,type:"text",num:2}),children:"More info"}),t.jsx(R,{variant:I({currentPage:e,type:"bar",num:2})})]})]})})}const ge=s.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function T({text:e}){return t.jsx(ge,{children:e})}const fe="#F43F5E",je="#54ADFF",be=({mistake:e})=>e==="true"?fe:je,ye=s.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(19 / 14);
  position: relative;

  @media ${d} {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }

  color: ${e=>e.theme.colors.text};
`,Fe=s.input`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(21 / 14);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${be};
  padding: 8px 16px;
  max-height: 40px;

  @media ${d} {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;function g({text:e,id:o,name:i,onChange:a,formik:n,date:l,placeholder:c}){const r=!!n.errors[o]&&n.touched[o];return t.jsx(t.Fragment,{children:t.jsxs(ye,{htmlFor:o,children:[t.jsx("span",{children:e}),t.jsx(Fe,{mistake:`${r}`,name:i,type:l?"date":"text",id:o,value:n.values[o],onChange:a,onBlur:n.handleBlur,placeholder:c||""}),n.errors[o]&&n.touched[o]?t.jsx(T,{text:n.errors[o]}):null]})})}const $e=D().shape({name:f().required("Please enter pet name"),birthday:J().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:f().required("Please enter breed")}),te=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 140px);
  box-sizing: border-box;
  margin-top: 16px;
  @media ${d} {
    max-width: 458px;
    margin-top: 20px;
    gap: 24px;
    height: calc(100% - 160px);
  }
  @media ${m} {
    margin-top: 16px;
    gap: 24px;
    height: calc(100% - 140px);
  }
`,C=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 28px;
  margin: 0 auto;
  width: 248px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(20 / 16);
  letter-spacing: 0.64px;
  background-color: #54adff;
  border-radius: 40px;
  border: none;
  transition: all 300ms ease;

  &:disabled {
    cursor: no-drop;
    background-color: #cce4fb;
  }

  @media ${d} {
    /* flex-basis: 66%; */
    margin: 0;
  }
`,w=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 12px;
  color: #54adff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.64px;

  @media ${d} {
    /* flex-basis: 33%; */
  }
`,ve=s(ie)`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ce=s.form`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  @media ${d} {
    max-width: 458px;
    height: calc(100% - 160px);
    margin-top: 40px;
  }
  @media ${m} {
    height: calc(100% - 140px);
  }
`,we=s.div`
  display: flex;
  flex-direction: column;
  max-width: 131px;
  gap: 12px;
  margin-bottom: 91px;
  @media ${d} {
    margin-bottom: 137px;
  }
`,S=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${e=>e.page==="yourPet"?"44px":"auto"};

  @media ${d} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;function Se({onSubmit:e,handleDefinePage:o}){const{personalDetails:i,option:a}=j(),n=$({initialValues:oe,onSubmit:e,validationSchema:$e});return u.useEffect(()=>{for(let l in i)i[l]!==""&&n.setFieldValue(l,i[l])},[n.setFieldValue,i]),t.jsxs(te,{onSubmit:n.handleSubmit,children:[t.jsx(g,{formik:n,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:n.handleChange}),t.jsxs(S,{page:a,children:[t.jsxs(C,{type:"submit",children:["Next",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>o(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})}const Pe=D().shape({name:f().required("Please enter pet name"),birthday:J().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:f().required("Please enter breed"),title:f().required("Please enter title")});function De({onSubmit:e,handleDefinePage:o}){const{personalDetails:i}=j(),a=$({initialValues:se,onSubmit:e,validationSchema:Pe});return u.useEffect(()=>{for(let n in i)n in i&&a.setFieldValue(n,i[n])},[]),t.jsxs(te,{onSubmit:a.handleSubmit,children:[t.jsx(g,{formik:a,placeholder:"Title of add",text:"Title of add",id:"title",name:"title",onChange:a.handleChange}),t.jsx(g,{formik:a,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:a.handleChange}),t.jsx(g,{formik:a,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:a.handleChange}),t.jsx(g,{formik:a,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:a.handleChange}),t.jsxs(S,{children:[t.jsxs(C,{disabled:a.values.option==="",type:"submit",children:["Next",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>o(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"})," Back"]})]})]})}function Te({option:e,handleDefinePage:o}){const i=v(),a=n=>{i(le(n)),o(1)};return t.jsx(t.Fragment,{children:e===x.yourPet?t.jsx(Se,{onSubmit:a,handleDefinePage:o}):t.jsx(De,{onSubmit:a,handleDefinePage:o})})}const Ie=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",Le=s.label`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.lg};
    line-height: 1.4;
  }

  color: ${e=>e.theme.colors.text};
`,Ne=s.textarea`
  color: ${e=>e.theme.colors.grey};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${Ie};

  @media ${d} {
    height: 108px;
    font-size: ${e=>e.theme.fontSizes.md};
  }
`;function H({formik:e}){const o=v(),{moreInfo:i}=j();u.useEffect(()=>{i.data.comments!==""&&e.setFieldValue("comments",i.data.comments)},[e.setFieldValue,i.data.comments]);const a=l=>{e.handleChange(l),o(re(l.target.textContent))},n=l=>{e.handleBlur(l)};return t.jsxs(Le,{htmlFor:"comments",children:["Comments",t.jsx(Ne,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:n,onChange:a,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(T,{text:e.errors.comments}):null]})}const ze=s.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;function Oe({file:e}){const[o,i]=u.useState(null),a=new FileReader;return a.readAsDataURL(e),a.onload=()=>{i(a.result)},t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx(ze,{src:o,alt:"Preview",width:112})})}const Ee=s.div`
  width: 112px;
  height: 112px;
  background-color: ${e=>e.mistake==="true"?"#FBCCCC":"#CCE4FB"};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  @media ${d} {
    width: 182px;
    height: 182px;
  }

  &:hover {
    background-color: ${e=>e.mistake==="true"?"#ff9898":"#98ccff"};
  }

  &::before,
  &::after {
    content: '';
    position: ${e=>e.file?"":"absolute"};
    top: 50%;
    left: 50%;
    border-radius: 100px;
    background-color: ${e=>e.mistake==="true"?"#ff5454":"#54ADFF"};
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all 300ms ease;
  }

  &::before {
    width: 60px;
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 60px;
  }
`,Ae=s.label`
  display: flex;
  position: relative;
  flex-direction: ${e=>e.direction};
  align-items: center;
  justify-content: ${e=>e.justify};
  gap: 16px;

  @media ${d} {
    flex-direction: ${e=>e.value==="yourPet"?"row":"column"};
    justify-content: ${e=>e.value==="yourPet"?"flex-start":"center"};
    align-items: ${e=>(e.value==="yourPet","center")};
    gap: ${e=>e.value==="yourPet"?"16px":"0"};
  }
`,Ve=s.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,Be=s.span`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  max-width: 80px;
  line-height: 1.35;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.lg};
    max-width: ${e=>e.value==="yourPet"?"114px":"100%"};
    line-height: 1.4;
    margin-bottom: 8px;
  }

  color: ${e=>e.theme.colors.text};
`;function U({formik:e,text:o,direction:i,items:a,justify:n,gap:l,setFile:c,file:r}){const{option:p}=j();u.useEffect(()=>{r&&e.setFieldValue("photo",r)},[e.setFieldValue,r]);const y=E=>{const P=E.target.files[0];P&&(e.setFieldValue("photo",P),c(P))},b=e.errors.photo&&e.touched.photo;return t.jsxs(t.Fragment,{children:[t.jsxs(Ae,{direction:i,items:a,justify:n,gap:l,htmlFor:"photo",value:p,children:[t.jsx(Be,{value:p,children:o}),t.jsx(Ee,{file:e.values.photo,mistake:`${b}`,children:e.values.photo&&t.jsx(Oe,{file:e.values.photo})}),b?t.jsx(T,{text:e.errors.photo}):null]}),t.jsx(Ve,{type:"file",name:"photo",id:"photo",accept:".jpg",onBlur:e.handleFileChange,onChange:y})]})}const Me=s.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${e=>e.checked?"#54ADFF":"#fff"};
  border-radius: 40px;
`,_e=s.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`,qe=s.span`
  color: ${e=>e.checked?"#fff":"#888"};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 1.5;
  letter-spacing: 0.64px;
`;function O({icon:e,text:o,id:i,onChange:a,value:n,checked:l,formik:c}){const r=c.errors.gender&&c.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(Me,{htmlFor:i,checked:l===n,children:[e,t.jsx(qe,{checked:l===n,children:o}),r?t.jsx(T,{text:c.errors.gender}):null]}),t.jsx(_e,{type:"radio",name:"gender",id:i,value:n,onChange:a,checked:l===n})]})}const Re=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${d} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${m} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`,Ge=s.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,He=s.div`
  @media ${d} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${m} {
    gap: 78px;
  }
`,Ue=s.div`
  @media ${d} {
  }

  @media ${m} {
    display: flex;
    flex-direction: column;
  }
`,We=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${d} {
    width: 100%;

    gap: 24px;

    & textarea {
      height: 182px;
    }

    & label {
      gap: 8px;
    }
  }

  @media ${m} {
  }
`,Xe=s.div`
  margin-bottom: 40px;
`,Ye=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function ke({formik:e,handleDefinePage:o,setFile:i,file:a}){const n=v(),{moreInfo:l}=j();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let p in l.data)l.data[p]!==""&&e.setFieldValue(p,l.data[p])},[e.setFieldValue,l.data]);const c=p=>{e.handleChange(p),n(K(p.target.id))},r=p=>{e.handleChange(p);const{name:y,value:b}=p.target;n(Q({name:y,value:b}))};return t.jsxs(Re,{onSubmit:e.handleSubmit,children:[t.jsxs(He,{children:[t.jsxs(Ue,{children:[t.jsx(Ye,{children:"The Sex"}),t.jsx(Xe,{children:t.jsxs(Ge,{children:[t.jsx(O,{formik:e,text:"Female",id:"female",onChange:c,value:x.female,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-female",stroke:z({value:x.female,formik:e})})}),t.jsx(O,{formik:e,text:"Male",id:"male",onChange:c,value:x.male,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-male",stroke:z({value:x.male,formik:e})})})]})}),t.jsx(U,{text:"Load the pet’s image:",setFile:i,file:a,formik:e})]}),t.jsxs(We,{children:[t.jsx(g,{formik:e,text:"Location",id:"location",name:"location",placeholder:"Type of location",value:e.values.location,onChange:r}),t.jsx(H,{formik:e})]})]}),t.jsxs(S,{children:[t.jsxs(C,{type:"submit",children:["Done",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>o(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})}const Je=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${d} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${m} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`,Ke=s.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,Qe=s.div`
  @media ${d} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${m} {
    gap: 78px;
  }
`,Ze=s.div`
  @media ${d} {
  }

  @media ${m} {
    display: flex;
    flex-direction: column;
  }
`,et=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${d} {
    width: 100%;

    gap: 24px;

    & textarea {
      height: 108px;
    }

    & label {
      gap: 8px;
    }
  }

  @media ${m} {
  }
`,tt=s.div`
  margin-bottom: 40px;
`,nt=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function at({formik:e,handleDefinePage:o,setFile:i,file:a}){const n=v(),{moreInfo:l}=j();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let p in l.data)l.data[p]!==""&&e.setFieldValue(p,l.data[p])},[e.setFieldValue,l.data]);const c=p=>{e.handleChange(p),n(K(p.target.id))},r=p=>{e.handleChange(p);const{name:y,value:b}=p.target;n(Q({name:y,value:b}))};return t.jsxs(Je,{onSubmit:e.handleSubmit,children:[t.jsxs(Qe,{children:[t.jsxs(Ze,{children:[t.jsx(nt,{children:"The Sex"}),t.jsx(tt,{children:t.jsxs(Ke,{children:[t.jsx(O,{formik:e,text:"Female",id:"female",onChange:c,value:x.female,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-female",stroke:z({value:x.female,formik:e})})}),t.jsx(O,{formik:e,text:"Male",id:"male",onChange:c,value:x.male,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-male",stroke:z({value:x.male,formik:e})})})]})}),e.errors.gender&&e.touched.gender?t.jsx(T,{text:e.errors.gender}):null,t.jsx(U,{setFile:i,file:a,text:"Load the pet’s image:",formik:e,items:"center",gap:"14px"})]}),t.jsxs(et,{children:[t.jsx(g,{formik:e,text:"Location",id:"location",name:"location",placeholder:"Type of location",value:e.values.location,onChange:r}),t.jsx(g,{formik:e,text:"Price",id:"price",name:"price",placeholder:"Type of price",value:e.values.price,onChange:r}),t.jsx(H,{formik:e})]})]}),t.jsxs(S,{children:[t.jsxs(C,{type:"submit",children:["Done",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>o(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})}const it=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${d} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${m} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`;function ot({formik:e,handleDefinePage:o,setFile:i,file:a}){return t.jsx(t.Fragment,{children:t.jsxs(it,{onSubmit:e.handleSubmit,children:[t.jsx(U,{setFile:i,file:a,formik:e,text:"Load the pet’s image:",direction:"row",items:"center",gap:"14px"}),t.jsx(H,{formik:e}),t.jsxs(S,{children:[t.jsxs(C,{disabled:e.values.option==="",type:"submit",children:["Done",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>o(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})})}const st=D().shape(G),Y=20,lt=D().shape({gender:f().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:f().max(Y,`Maximum location length - ${Y} characters`).required("Location is required"),...G}),k=20,rt=/^\d+$/,ct=D().shape({gender:f().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:f().max(k,`Maximum location length - ${k} characters`).required("Location is required"),price:f().matches(rt,"Price must contain only numbers").required("Price is required"),...G});function dt({option:e,handleDefinePage:o,setFile:i,file:a}){const{personalDetails:n,moreInfo:{redirect:l}}=j(),c=Z(),r=v();u.useEffect(()=>{l&&r(ce())},[l,r]);const p=async(P,{resetForm:A})=>{const F={...P,...n},{title:Ft,...ne}=F;if(e===x.yourPet){r(pe(ne)),A(),r(V()),r(B()),r(M());return}const{type:$t,gender:vt,...W}=F;if(e===x.SELL){r(X({noticeType:e,sex:F.gender,petType:F.type,...W})),A(),r(V()),r(B()),r(M());return}const{price:Ct,...ae}=W;r(X({noticeType:e,sex:F.gender,petType:F.type,...ae})),r(V()),r(B()),r(M()),A()},y=$({initialValues:{photo:null,comments:""},onSubmit:p,validationSchema:st}),b=$({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:p,validationSchema:ct}),E=$({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:p,validationSchema:lt});if(l)return t.jsx(de,{to:c.state&&c.state.from&&c.state.from.pathname||"/notices"});switch(e){case x.yourPet:return t.jsx(ot,{setFile:i,file:a,formik:y,handleDefinePage:o});case x.SELL:return t.jsx(at,{setFile:i,file:a,formik:b,handleDefinePage:o});default:return t.jsx(ke,{setFile:i,file:a,formik:E,handleDefinePage:o})}}const pt=s.label``,xt=s.span`
  display: inline-block;
  color: ${e=>e.checked?"#fff":"#54ADFF"};
  background-color: ${e=>e.checked?"#54ADFF":"#CCE4FB"};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 40px;
  transition: all 300ms ease;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.56px;
`,ht=s.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function N({value:e,text:o,onChange:i,checked:a}){return t.jsxs(t.Fragment,{children:[t.jsx(pt,{htmlFor:e,children:t.jsx(xt,{checked:a,children:o})}),t.jsx(ht,{id:e,name:"option",type:"radio",onChange:i,value:e,checked:a})]})}function ut({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(N,{onChange:e.handleChange,text:"your pet",value:x.yourPet,checked:e.values.option===x.yourPet}),t.jsx(N,{onChange:e.handleChange,text:"sell",value:x.SELL,checked:e.values.option===x.SELL}),t.jsx(N,{onChange:e.handleChange,text:"lost/found",value:x.LOST_FOUND,checked:e.values.option===x.LOST_FOUND}),t.jsx(N,{onChange:e.handleChange,text:"in good hands",value:x.IN_GOOD_HANDS,checked:e.values.option===x.IN_GOOD_HANDS})]})}const mt={option:""};function gt({handleDefinePage:e,currentPage:o}){const i=v(),a=Z(),{option:n}=j(),c=$({initialValues:mt,onSubmit:r=>{o===0&&i(xe(r.option)),e(1)}});return u.useEffect(()=>{n!==""&&c.setFieldValue("option",n)},[c.setFieldValue,n]),t.jsxs(Ce,{onSubmit:c.handleSubmit,children:[t.jsx(we,{children:t.jsx(ut,{formik:c})}),t.jsxs(S,{children:[t.jsxs(C,{disabled:c.values.option==="",type:"submit",children:["Next",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsx(ve,{to:a.state&&a.state.from&&a.state.from.pathname||"/notices",children:t.jsxs(w,{type:"button",children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Cancel"]})})]})]})}function ft({currentPage:e,setCurrentPage:o,setFile:i,file:a}){const{option:n}=j(),l=c=>{if(c===-1&&e===0){console.log("start");return}o(r=>r+c)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(gt,{currentPage:e,handleDefinePage:l}),e===1&&t.jsx(Te,{option:n,handleDefinePage:l}),e===2&&t.jsx(dt,{setFile:i,file:a,option:n,handleDefinePage:l})]})}const jt=s.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 24px;

  @media ${d} {
    margin-top: 60px;
  }

  @media ${m} {
    margin-top: 40px;
  }
`,bt=s.div`
  width: 100%;
  height: 90%;
  background-color: ${({theme:e})=>e.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${d} {
    width: ${e=>e.value===2?"704px":"458px"};
    max-width: ${e=>e.namepage==="yourPet"?"458px":"704px"};

    padding: 20px 32px 20px 32px;
  }

  @media ${m} {
    width: ${e=>e.value===2?"822px":"458px"};
  }
`,yt=s.h2`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  line-height: 1.35;
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${d} {
    font-size: ${e=>e.theme.fontSizes.xxl};
    margin-left: 0px;
    text-align: center;
  }
`;function Dt(){const[e,o]=u.useState(0),[i,a]=u.useState(null),{option:n,moreInfo:{isLoad:l}}=j(),c=n===x.SELL?"Add pet for sell":n===x.LOST_FOUND?"Add lost pet":n===x.IN_GOOD_HANDS?"Add pet in good hands":"Add pet";return t.jsxs(t.Fragment,{children:[t.jsx(he,{}),t.jsx(jt,{children:t.jsxs(bt,{value:e,namepage:n,children:[t.jsx(yt,{children:c}),t.jsx(me,{currentPage:e}),!l&&t.jsx(ft,{currentPage:e,setCurrentPage:o,setFile:a,file:i})]})})]})}export{Dt as default};
