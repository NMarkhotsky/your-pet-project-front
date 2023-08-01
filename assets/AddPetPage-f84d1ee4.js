import{s as o,b as p,j as t,f as D,g,K as k,a as m,L as ae,O as j,Q as ie,r as u,I as h,R as oe,h as v,U as se,V as le,W as K,X as Q,Z as R,c as Z,_ as re,$ as ce,a0 as de,a1 as A,a2 as V,a3 as B,a4 as H,a5 as pe}from"./index-776af8de.js";import{u as $}from"./formik.esm-a5edc806.js";import{B as xe}from"./BackgroundWrapper-1bbe0c6f.js";const d={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost-or-found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},L=({currentPage:e,type:s,num:i})=>{switch(s){case"text":if(e===i)return"current";if(e>i)return"select";if(e<i)return"ordinary";break;case"bar":if(e===i)return"current";if(e>i)return"select";if(e<i)return"opacity-ordinary";break}},I={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},J=e=>{switch(e.variant){case"current":return I.current;case"select":return I.select;case"ordinary":return I.ordinary;case"opacity-ordinary":return I.opacityOrdinary;default:return"tomato"}},he=o.ul`
  max-width: 392px;
  display: flex;
  justify-content: space-between;
  // margin: auto;

  @media ${p} {
    margin: auto;
  }
`,M=o.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,_=o.p`
  white-space: nowrap;
  color: ${J};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 1.65;
  }
`,q=o.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${J};
`;function ue({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(he,{children:[t.jsxs(M,{children:[t.jsx(_,{variant:e===0?"current":"select",children:"Choose option"}),t.jsx(q,{variant:e===0?"current":"select"})]}),t.jsxs(M,{children:[t.jsx(_,{variant:L({currentPage:e,type:"text",num:1}),children:"Personal details"}),t.jsx(q,{variant:L({currentPage:e,type:"bar",num:1})})]}),t.jsxs(M,{children:[t.jsx(_,{variant:L({currentPage:e,type:"text",num:2}),children:"More info"}),t.jsx(q,{variant:L({currentPage:e,type:"bar",num:2})})]})]})})}const me=o.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function z({text:e}){return t.jsx(me,{children:e})}const fe="#F43F5E",ge="#54ADFF",je=({mistake:e})=>e==="true"?fe:ge,be=o.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(19 / 14);
  position: relative;

  @media ${p} {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }

  color: ${e=>e.theme.colors.text};
`,ye=o.input`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(21 / 14);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${je};
  padding: 8px 16px;
  max-height: 40px;

  @media ${p} {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;function f({text:e,id:s,name:i,onChange:a,formik:n,date:l,placeholder:c}){const r=!!n.errors[s]&&n.touched[s];return t.jsx(t.Fragment,{children:t.jsxs(be,{htmlFor:s,children:[t.jsx("span",{children:e}),t.jsx(ye,{mistake:`${r}`,name:i,type:l?"date":"text",id:s,value:n.values[s],onChange:a,onBlur:n.handleBlur,placeholder:c||""}),n.errors[s]&&n.touched[s]?t.jsx(z,{text:n.errors[s]}):null]})})}const Fe=D().shape({name:g().required("Please enter pet name"),birthday:k().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:g().required("Please enter breed")}),ee=o.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 140px);
  box-sizing: border-box;
  margin-top: 16px;
  @media ${p} {
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
`,C=o.button`
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

  @media ${p} {
    /* flex-basis: 66%; */
    margin: 0;
  }
`,w=o.button`
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

  @media ${p} {
    /* flex-basis: 33%; */
  }
`,$e=o(ae)`
  display: flex;
  justify-content: center;
  align-items: center;
`,ve=o.form`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  @media ${p} {
    max-width: 458px;
    height: calc(100% - 160px);
    margin-top: 40px;
  }
  @media ${m} {
    height: calc(100% - 140px);
  }
`,Ce=o.div`
  display: flex;
  flex-direction: column;
  max-width: 131px;
  gap: 12px;
  margin-bottom: 91px;
  @media ${p} {
    margin-bottom: 137px;
  }
`,S=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${e=>e.page==="yourPet"?"44px":"auto"};

  @media ${p} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;function we({onSubmit:e,handleDefinePage:s}){const{personalDetails:i,option:a}=j(),n=$({initialValues:ie,onSubmit:e,validationSchema:Fe});return u.useEffect(()=>{for(let l in i)i[l]!==""&&n.setFieldValue(l,i[l])},[n.setFieldValue,i]),t.jsxs(ee,{onSubmit:n.handleSubmit,children:[t.jsx(f,{formik:n,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:n.handleChange}),t.jsx(f,{formik:n,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(f,{formik:n,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:n.handleChange}),t.jsxs(S,{page:a,children:[t.jsxs(C,{type:"submit",children:["Next",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>s(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})}const Se=D().shape({name:g().required("Please enter pet name"),birthday:k().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:g().required("Please enter breed"),title:g().required("Please enter title")});function Pe({onSubmit:e,handleDefinePage:s}){const{personalDetails:i}=j(),a=$({initialValues:oe,onSubmit:e,validationSchema:Se});return u.useEffect(()=>{for(let n in i)n in i&&a.setFieldValue(n,i[n])},[]),t.jsxs(ee,{onSubmit:a.handleSubmit,children:[t.jsx(f,{formik:a,placeholder:"Title of add",text:"Title of add",id:"title",name:"title",onChange:a.handleChange}),t.jsx(f,{formik:a,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:a.handleChange}),t.jsx(f,{formik:a,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:a.handleChange}),t.jsx(f,{formik:a,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:a.handleChange}),t.jsxs(S,{children:[t.jsxs(C,{disabled:a.values.option==="",type:"submit",children:["Next",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>s(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"})," Back"]})]})]})}function De({option:e,handleDefinePage:s}){const i=v(),a=n=>{i(se(n)),s(1)};return t.jsx(t.Fragment,{children:e===d.yourPet?t.jsx(we,{onSubmit:a,handleDefinePage:s}):t.jsx(Pe,{onSubmit:a,handleDefinePage:s})})}const Le=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",Ie=o.label`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.lg};
    line-height: 1.4;
  }

  color: ${e=>e.theme.colors.text};
`,Ne=o.textarea`
  color: ${e=>e.theme.colors.grey};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${Le};

  @media ${p} {
    height: 108px;
    font-size: ${e=>e.theme.fontSizes.md};
  }
`;function G({formik:e}){const s=v(),{moreInfo:i}=j();u.useEffect(()=>{i.data.comments!==""&&e.setFieldValue("comments",i.data.comments)},[e.setFieldValue,i.data.comments]);const a=l=>{e.handleChange(l),s(le(l.target.value))},n=l=>{e.handleBlur(l)};return t.jsxs(Ie,{htmlFor:"comments",children:["Comments",t.jsx(Ne,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:n,onChange:a,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(z,{text:e.errors.comments}):null]})}const Te=o.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;function ze({file:e}){const[s,i]=u.useState(null),a=new FileReader;return a.readAsDataURL(e),a.onload=()=>{i(a.result)},t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx(Te,{src:s,alt:"Preview",width:112})})}const Oe=o.div`
  width: 112px;
  height: 112px;
  background-color: ${e=>e.mistake==="true"?"#FBCCCC":"#CCE4FB"};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  @media ${p} {
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
`,Ee=o.label`
  display: flex;
  position: relative;
  flex-direction: ${e=>e.direction};
  align-items: center;
  justify-content: ${e=>e.justify};
  gap: 16px;

  @media ${p} {
    flex-direction: ${e=>e.value==="yourPet"?"row":"column"};
    justify-content: ${e=>e.value==="yourPet"?"flex-start":"center"};
    align-items: ${e=>(e.value==="yourPet","center")};
    gap: ${e=>e.value==="yourPet"?"16px":"0"};
  }
`,Ae=o.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,Ve=o.span`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  max-width: 80px;
  line-height: 1.35;

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.lg};
    max-width: ${e=>e.value==="yourPet"?"114px":"100%"};
    line-height: 1.4;
    margin-bottom: 8px;
  }

  color: ${e=>e.theme.colors.text};
`;function U({formik:e,text:s,direction:i,items:a,justify:n,gap:l,setFile:c,file:r}){const{option:x}=j();u.useEffect(()=>{r&&e.setFieldValue("photo",r)},[e.setFieldValue,r]);const y=O=>{const P=O.target.files[0];P&&(e.setFieldValue("photo",P),c(P))},b=e.errors.photo&&e.touched.photo;return t.jsxs(t.Fragment,{children:[t.jsxs(Ee,{direction:i,items:a,justify:n,gap:l,htmlFor:"photo",value:x,children:[t.jsx(Ve,{value:x,children:s}),t.jsx(Oe,{file:e.values.photo,mistake:`${b}`,children:e.values.photo&&t.jsx(ze,{file:e.values.photo})}),b?t.jsx(z,{text:e.errors.photo}):null]}),t.jsx(Ae,{type:"file",name:"photo",id:"photo",accept:".jpg",onBlur:e.handleFileChange,onChange:y})]})}const Be=o.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${e=>e.checked?"#54ADFF":"#fff"};
  border-radius: 40px;
`,Me=o.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`,_e=o.span`
  color: ${e=>e.checked?"#fff":"#888"};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 1.5;
  letter-spacing: 0.64px;
`;function T({icon:e,text:s,id:i,onChange:a,value:n,checked:l,formik:c}){const r=c.errors.gender&&c.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(Be,{htmlFor:i,checked:l===n,children:[e,t.jsx(_e,{checked:l===n,children:s}),r?t.jsx(z,{text:c.errors.gender}):null]}),t.jsx(Me,{type:"radio",name:"gender",id:i,value:n,onChange:a,checked:l===n})]})}const qe=o.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${p} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${m} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`,Re=o.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,Ge=o.div`
  @media ${p} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${m} {
    gap: 78px;
  }
`,Ue=o.div`
  @media ${p} {
  }

  @media ${m} {
    display: flex;
    flex-direction: column;
  }
`,We=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${p} {
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
`,He=o.div`
  margin-bottom: 40px;
`,Xe=o.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function Ye({formik:e,handleDefinePage:s,setFile:i,file:a}){const n=v(),{moreInfo:l}=j();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let x in l.data)l.data[x]!==""&&e.setFieldValue(x,l.data[x])},[e.setFieldValue,l.data]);const c=x=>{e.handleChange(x),n(K(x.target.id))},r=x=>{e.handleChange(x);const{name:y,value:b}=x.target;n(Q({name:y,value:b}))};return t.jsxs(qe,{onSubmit:e.handleSubmit,children:[t.jsxs(Ge,{children:[t.jsxs(Ue,{children:[t.jsx(Xe,{children:"The Sex"}),t.jsx(He,{children:t.jsxs(Re,{children:[t.jsx(T,{formik:e,text:"Female",id:"female",onChange:c,value:d.female,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-female",stroke:e.values.gender===d.female?"#fff":e.values.gender===d.male?"#888888":"#F43F5E"})}),t.jsx(T,{formik:e,text:"Male",id:"male",onChange:c,value:d.male,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-male",stroke:e.values.gender===d.male?"#fff":e.values.gender===d.female?"#888888":"#54ADFF"})})]})}),t.jsx(U,{text:"Load the pet’s image:",setFile:i,file:a,formik:e})]}),t.jsxs(We,{children:[t.jsx(f,{formik:e,text:"Location",id:"location",name:"location",placeholder:"Type of location",value:e.values.location,onChange:r}),t.jsx(G,{formik:e})]})]}),t.jsxs(S,{children:[t.jsxs(C,{type:"submit",children:["Done",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>s(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})}const ke=o.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${p} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${m} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`,Ke=o.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,Qe=o.div`
  @media ${p} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${m} {
    gap: 78px;
  }
`,Ze=o.div`
  @media ${p} {
  }

  @media ${m} {
    display: flex;
    flex-direction: column;
  }
`,Je=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${p} {
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
`,et=o.div`
  margin-bottom: 40px;
`,tt=o.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function nt({formik:e,handleDefinePage:s,setFile:i,file:a}){const n=v(),{moreInfo:l}=j();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let x in l.data)l.data[x]!==""&&e.setFieldValue(x,l.data[x])},[e.setFieldValue,l.data]);const c=x=>{e.handleChange(x),n(K(x.target.id))},r=x=>{e.handleChange(x);const{name:y,value:b}=x.target;n(Q({name:y,value:b}))};return t.jsxs(ke,{onSubmit:e.handleSubmit,children:[t.jsxs(Qe,{children:[t.jsxs(Ze,{children:[t.jsx(tt,{children:"The Sex"}),t.jsx(et,{children:t.jsxs(Ke,{children:[t.jsx(T,{formik:e,text:"Female",id:"female",onChange:c,value:d.female,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-female",stroke:e.values.gender===d.female?"#fff":e.values.gender===d.male?"#888888":"#F43F5E"})}),t.jsx(T,{formik:e,text:"Male",id:"male",onChange:c,value:d.male,checked:e.values.gender,icon:t.jsx(h,{iconName:"icon-male",stroke:e.values.gender===d.male?"#fff":e.values.gender===d.female?"#888888":"#54ADFF"})})]})}),t.jsx(U,{setFile:i,file:a,text:"Load the pet’s image:",formik:e,items:"center",gap:"14px"})]}),t.jsxs(Je,{children:[t.jsx(f,{formik:e,text:"Location",id:"location",name:"location",placeholder:"Type of location",value:e.values.location,onChange:r}),t.jsx(f,{formik:e,text:"Price",id:"price",name:"price",placeholder:"Type of price",value:e.values.price,onChange:r}),t.jsx(G,{formik:e})]})]}),t.jsxs(S,{children:[t.jsxs(C,{type:"submit",children:["Done",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>s(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})}const at=o.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${p} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${m} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`;function it({formik:e,handleDefinePage:s,setFile:i,file:a}){return t.jsx(t.Fragment,{children:t.jsxs(at,{onSubmit:e.handleSubmit,children:[t.jsx(U,{setFile:i,file:a,formik:e,text:"Load the pet’s image:",direction:"row",items:"center",gap:"14px"}),t.jsx(G,{formik:e}),t.jsxs(S,{children:[t.jsxs(C,{disabled:e.values.option==="",type:"submit",children:["Done",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>s(-1),children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Back"]})]})]})})}const ot=D().shape(R),X=20,st=D().shape({gender:g().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:g().max(X,`Maximum location length - ${X} characters`).required("Location is required"),...R}),Y=20,lt=/^\d+$/,rt=D().shape({gender:g().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:g().max(Y,`Maximum location length - ${Y} characters`).required("Location is required"),price:g().matches(lt,"Price must contain only numbers").required("Price is required"),...R});function ct({option:e,handleDefinePage:s,setFile:i,file:a}){const{personalDetails:n,moreInfo:{redirect:l}}=j(),c=Z(),r=v();u.useEffect(()=>{l&&r(re())},[l,r]);const x=async(P,{resetForm:E})=>{const F={...P,...n},{title:yt,...te}=F;if(e===d.yourPet){r(de(te)),E(),r(A()),r(V()),r(B());return}const{type:Ft,gender:$t,...W}=F;if(e===d.SELL){r(H({noticeType:e,sex:F.gender,petType:F.type,...W})),E(),r(A()),r(V()),r(B());return}const{price:vt,...ne}=W;r(H({noticeType:e,sex:F.gender,petType:F.type,...ne})),r(A()),r(V()),r(B()),E()},y=$({initialValues:{photo:null,comments:""},onSubmit:x,validationSchema:ot}),b=$({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:x,validationSchema:rt}),O=$({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:x,validationSchema:st});if(l)return t.jsx(ce,{to:c.state&&c.state.from&&c.state.from.pathname||"/notices"});switch(e){case d.yourPet:return t.jsx(it,{setFile:i,file:a,formik:y,handleDefinePage:s});case d.SELL:return t.jsx(nt,{setFile:i,file:a,formik:b,handleDefinePage:s});default:return t.jsx(Ye,{setFile:i,file:a,formik:O,handleDefinePage:s})}}const dt=o.label``,pt=o.span`
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
`,xt=o.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function N({value:e,text:s,onChange:i,checked:a}){return t.jsxs(t.Fragment,{children:[t.jsx(dt,{htmlFor:e,children:t.jsx(pt,{checked:a,children:s})}),t.jsx(xt,{id:e,name:"option",type:"radio",onChange:i,value:e,checked:a})]})}function ht({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(N,{onChange:e.handleChange,text:"your pet",value:d.yourPet,checked:e.values.option===d.yourPet}),t.jsx(N,{onChange:e.handleChange,text:"sell",value:d.SELL,checked:e.values.option===d.SELL}),t.jsx(N,{onChange:e.handleChange,text:"lost/found",value:d.LOST_FOUND,checked:e.values.option===d.LOST_FOUND}),t.jsx(N,{onChange:e.handleChange,text:"in good hands",value:d.IN_GOOD_HANDS,checked:e.values.option===d.IN_GOOD_HANDS})]})}const ut={option:""};function mt({handleDefinePage:e,currentPage:s}){const i=v(),a=Z(),{option:n}=j(),c=$({initialValues:ut,onSubmit:r=>{s===0&&i(pe(r.option)),e(1)}});return u.useEffect(()=>{n!==""&&c.setFieldValue("option",n)},[c.setFieldValue,n]),t.jsxs(ve,{onSubmit:c.handleSubmit,children:[t.jsx(Ce,{children:t.jsx(ht,{formik:c})}),t.jsxs(S,{children:[t.jsxs(C,{disabled:c.values.option==="",type:"submit",children:["Next",t.jsx(h,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsx($e,{to:a.state&&a.state.from&&a.state.from.pathname||"/notices",children:t.jsxs(w,{type:"button",children:[t.jsx(h,{iconName:"icon-arrow-left",stroke:"#54adff"}),"Cancel"]})})]})]})}function ft({currentPage:e,setCurrentPage:s,setFile:i,file:a}){const{option:n}=j(),l=c=>{if(c===-1&&e===0){console.log("start");return}s(r=>r+c)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(mt,{currentPage:e,handleDefinePage:l}),e===1&&t.jsx(De,{option:n,handleDefinePage:l}),e===2&&t.jsx(ct,{setFile:i,file:a,option:n,handleDefinePage:l})]})}const gt=o.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 24px;

  @media ${p} {
    margin-top: 60px;
  }

  @media ${m} {
    margin-top: 40px;
  }
`,jt=o.div`
  width: 100%;
  height: 90%;
  background-color: ${({theme:e})=>e.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${p} {
    width: ${e=>e.value===2?"704px":"458px"};
    max-width: ${e=>e.namepage==="yourPet"?"458px":"704px"};

    padding: 20px 32px 20px 32px;
  }

  @media ${m} {
    width: ${e=>e.value===2?"822px":"458px"};
  }
`,bt=o.h2`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  line-height: 1.35;
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.xxl};
    margin-left: 0px;
    text-align: center;
  }
`;function Pt(){const[e,s]=u.useState(0),[i,a]=u.useState(null),{option:n,moreInfo:{isLoad:l}}=j(),c=n===d.SELL?"Add pet for sell":n===d.LOST_FOUND?"Add lost pet":n===d.IN_GOOD_HANDS?"Add pet in good hands":"Add pet";return t.jsxs(t.Fragment,{children:[t.jsx(xe,{}),t.jsx(gt,{children:t.jsxs(jt,{value:e,namepage:n,children:[t.jsx(bt,{children:c}),t.jsx(ue,{currentPage:e}),!l&&t.jsx(ft,{currentPage:e,setCurrentPage:s,setFile:a,file:i})]})})]})}export{Pt as default};
