import{s,b as p,j as t,a as f,E as b,G as ae,I as m,H as oe,J as ie,K as se,N as k,O as J,Q as R,R as re,T as le,U as de,V as ce,W,X as O,Z as pe}from"./index-ee3ce916.js";import{L as xe,r as u,b as he,u as me}from"./react-ecc61561.js";import{t as a}from"./translations-5abde677.js";import{l as v}from"./state-c18d5234.js";import{c as I,a as j,b as K,u as $}from"./forms-b2853f00.js";import{B as ue}from"./BackgroundWrapper-737bd8f4.js";const c={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost-or-found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},D=({currentPage:e,type:r,num:o})=>{switch(r){case"text":if(e===o)return"current";if(e>o)return"select";if(e<o)return"ordinary";break;case"bar":if(e===o)return"current";if(e>o)return"select";if(e<o)return"opacity-ordinary";break}},L={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},Q=e=>{switch(e.variant){case"current":return L.current;case"select":return L.select;case"ordinary":return L.ordinary;case"opacity-ordinary":return L.opacityOrdinary;default:return"tomato"}},fe=s.ul`
  max-width: 392px;
  display: flex;
  justify-content: space-between;
  // margin: auto;

  @media ${p} {
    margin: auto;
  }
`,B=s.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,M=s.p`
  white-space: nowrap;
  color: ${Q};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;

  text-align: center;

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 1.65;
  }
`,q=s.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${Q};
`;function ge({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(fe,{children:[t.jsxs(B,{children:[t.jsx(M,{variant:e===0?"current":"select",children:a("addPet_formPaginationList_chooseOption")}),t.jsx(q,{variant:e===0?"current":"select"})]}),t.jsxs(B,{children:[t.jsx(M,{variant:D({currentPage:e,type:"text",num:1}),children:a("addPet_formPaginationList_personalDetails")}),t.jsx(q,{variant:D({currentPage:e,type:"bar",num:1})})]}),t.jsxs(B,{children:[t.jsx(M,{variant:D({currentPage:e,type:"text",num:2}),children:a("addPet_formPaginationList_moreInfo")}),t.jsx(q,{variant:D({currentPage:e,type:"bar",num:2})})]})]})})}const je=s.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function E({text:e}){return t.jsx(je,{children:e})}const be="#F43F5E",ye="#54ADFF",_e=({mistake:e})=>e==="true"?be:ye,Fe=s.label`
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
`,$e=s.input`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(21 / 14);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${_e};
  padding: 8px 16px;
  max-height: 40px;

  @media ${p} {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;function g({text:e,id:r,name:o,onChange:i,formik:n,date:l,placeholder:d}){const h=!!n.errors[r]&&n.touched[r];return t.jsx(t.Fragment,{children:t.jsxs(Fe,{htmlFor:r,children:[t.jsx("span",{children:e}),t.jsx($e,{mistake:`${h}`,name:o,type:l?"date":"text",id:r,value:n.values[r],onChange:i,onBlur:n.handleBlur,placeholder:d||""}),n.errors[r]&&n.touched[r]?t.jsx(E,{text:n.errors[r]}):null]})})}const ve=I().shape({name:j().required("Please enter pet name"),birthday:K().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:j().required("Please enter breed")}),Z=s.form`
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
  @media ${f} {
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

  @media ${p} {
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

  @media ${p} {
    /* flex-basis: 33%; */
  }
`,Ce=s(xe)`
  display: flex;
  justify-content: center;
  align-items: center;
`,we=s.form`
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
  @media ${f} {
    height: calc(100% - 140px);
  }
`,Pe=s.div`
  display: flex;
  flex-direction: column;
  max-width: 131px;
  gap: 12px;
  margin-bottom: 91px;
  @media ${p} {
    margin-bottom: 137px;
  }
`,P=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${e=>e.page==="yourPet"?"44px":"auto"};

  @media ${p} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;function Se({onSubmit:e,handleDefinePage:r}){const{personalDetails:o,option:i}=b(),n=$({initialValues:ae,onSubmit:e,validationSchema:ve});return u.useEffect(()=>{for(let l in o)o[l]!==""&&n.setFieldValue(l,o[l])},[n.setFieldValue,o]),t.jsxs(Z,{onSubmit:n.handleSubmit,children:[t.jsx(g,{formik:n,placeholder:a("addPet_form_personalInfo_petName_placeholder"),text:a("addPet_form_personalInfo_petName"),id:"name",name:"name",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:"Type date of birth",text:a("user_mypets_petInfo_dateOfBirth"),id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:a("addPet_form_personalInfo_petType_placeholder"),text:a("other_type"),id:"type",name:"type",onChange:n.handleChange}),t.jsxs(P,{page:i,children:[t.jsxs(C,{type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const Ie=I().shape({name:j().required("Please enter pet name"),birthday:K().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:j().required("Please enter breed"),title:j().max(30,"Title must be at most 30 characters").required("Please enter title")});function Oe({onSubmit:e,handleDefinePage:r}){const{personalDetails:o}=b(),i=$({initialValues:oe,onSubmit:e,validationSchema:Ie});return u.useEffect(()=>{for(let n in o)n in o&&i.setFieldValue(n,o[n])},[]),t.jsxs(Z,{onSubmit:i.handleSubmit,children:[t.jsx(g,{formik:i,placeholder:a("addPet_form_personalInfo_titleOfAdd"),text:a("addPet_form_personalInfo_titleOfAdd"),id:"title",name:"title",onChange:i.handleChange}),t.jsx(g,{formik:i,placeholder:a("addPet_form_personalInfo_petName_placeholder"),text:a("addPet_form_personalInfo_petName"),id:"name",name:"name",onChange:i.handleChange}),t.jsx(g,{formik:i,placeholder:"Type date of birth",text:a("user_mypets_petInfo_dateOfBirth"),id:"birthday",date:!0,name:"birthday",onChange:i.handleChange}),t.jsx(g,{formik:i,placeholder:a("addPet_form_personalInfo_petType_placeholder"),text:a("other_type"),id:"type",name:"type",onChange:i.handleChange}),t.jsxs(P,{children:[t.jsxs(C,{disabled:i.values.option==="",type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"})," ",a("other_back")]})]})]})}function De({option:e,handleDefinePage:r}){const o=v(),i=n=>{o(ie(n)),r(1)};return t.jsx(t.Fragment,{children:e===c.yourPet?t.jsx(Se,{onSubmit:i,handleDefinePage:r}):t.jsx(Oe,{onSubmit:i,handleDefinePage:r})})}const Le=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",Ne=s.label`
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
`,ze=s.textarea`
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
`;function G({formik:e}){const r=v(),{moreInfo:o}=b();u.useEffect(()=>{o.data.comments!==""&&e.setFieldValue("comments",o.data.comments)},[e.setFieldValue,o.data.comments]);const i=l=>{e.handleChange(l),r(se(l.target.value))},n=l=>{e.handleBlur(l)};return t.jsxs(Ne,{htmlFor:"comments",children:[a("other_comments"),t.jsx(ze,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:n,onChange:i,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(E,{text:e.errors.comments}):null]})}const Ee=s.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;function Te({file:e}){const[r,o]=u.useState(null);return u.useEffect(()=>{if(!e)return;const i=URL.createObjectURL(e);return o(i),()=>URL.revokeObjectURL(i)},[e]),t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx(Ee,{src:r,alt:"Preview",width:112})})}const Ve=s.div`
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
`,Ae=s.label`
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
`,Be=s.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,Me=s.span`
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
`;function U({formik:e,text:r,direction:o,items:i,justify:n,gap:l,setFile:d,file:h}){const{option:x}=b();u.useEffect(()=>{h&&e.setFieldValue("photo",h)},[e.setFieldValue,h]);const _=T=>{const S=T.target.files[0];S&&(e.setFieldValue("photo",S),d(S))},y=e.errors.photo&&e.touched.photo;return t.jsxs(t.Fragment,{children:[t.jsxs(Ae,{direction:o,items:i,justify:n,gap:l,htmlFor:"photo",value:x,children:[t.jsx(Me,{value:x,children:r}),t.jsx(Ve,{file:e.values.photo,mistake:`${y}`,children:e.values.photo&&t.jsx(Te,{file:e.values.photo})}),y?t.jsx(E,{text:e.errors.photo}):null]}),t.jsx(Be,{type:"file",name:"photo",id:"photo",accept:".jpg, .png, .jpeg",onBlur:e.handleBlur,onChange:_})]})}const qe=s.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${e=>e.checked?"#54ADFF":"#fff"};
  border-radius: 40px;
`,Re=s.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`,Ge=s.span`
  color: ${e=>e.checked?"#fff":"#888"};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 1.5;
  letter-spacing: 0.64px;
`;function z({icon:e,text:r,id:o,onChange:i,value:n,checked:l,formik:d}){const h=d.errors.gender&&d.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(qe,{htmlFor:o,checked:l===n,children:[e,t.jsx(Ge,{checked:l===n,children:r}),h?t.jsx(E,{text:d.errors.gender}):null]}),t.jsx(Re,{type:"radio",name:"gender",id:o,value:n,onChange:i,checked:l===n})]})}const Ue=s.form`
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

  @media ${f} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`,He=s.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,We=s.div`
  @media ${p} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${f} {
    gap: 78px;
  }
`,Xe=s.div`
  @media ${p} {
  }

  @media ${f} {
    display: flex;
    flex-direction: column;
  }
`,Ye=s.div`
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

  @media ${f} {
  }
`,ke=s.div`
  margin-bottom: 40px;
`,Je=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function Ke({formik:e,handleDefinePage:r,setFile:o,file:i}){const n=v(),{moreInfo:l}=b();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let x in l.data)l.data[x]!==""&&e.setFieldValue(x,l.data[x])},[e.setFieldValue,l.data]);const d=x=>{e.handleChange(x),n(k(x.target.id))},h=x=>{e.handleChange(x);const{name:_,value:y}=x.target;n(J({name:_,value:y}))};return t.jsxs(Ue,{onSubmit:e.handleSubmit,children:[t.jsxs(We,{children:[t.jsxs(Xe,{children:[t.jsx(Je,{children:a("addPet_form_moreInfo_theSex")}),t.jsx(ke,{children:t.jsxs(He,{children:[t.jsx(z,{formik:e,text:a("other_female"),id:"female",onChange:d,value:c.female,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-female",stroke:e.values.gender===c.female?"#fff":e.values.gender===c.male?"#888888":"#F43F5E"})}),t.jsx(z,{formik:e,text:a("other_male"),id:"male",onChange:d,value:c.male,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-male",stroke:e.values.gender===c.male?"#fff":e.values.gender===c.female?"#888888":"#54ADFF"})})]})}),t.jsx(U,{text:a("addPet_form_moreInfo_file"),setFile:o,file:i,formik:e})]}),t.jsxs(Ye,{children:[t.jsx(g,{formik:e,text:a("other_location"),id:"location",name:"location",placeholder:a("addPet_form_moreInfo_location_placeholder"),value:e.values.location,onChange:h}),t.jsx(G,{formik:e})]})]}),t.jsxs(P,{children:[t.jsxs(C,{type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const Qe=s.form`
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

  @media ${f} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`,Ze=s.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,et=s.div`
  @media ${p} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${f} {
    gap: 78px;
  }
`,tt=s.div`
  @media ${p} {
  }

  @media ${f} {
    display: flex;
    flex-direction: column;
  }
`,nt=s.div`
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

  @media ${f} {
  }
`,at=s.div`
  margin-bottom: 40px;
`,ot=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function it({formik:e,handleDefinePage:r,setFile:o,file:i}){const n=v(),{moreInfo:l}=b();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let x in l.data)l.data[x]!==""&&e.setFieldValue(x,l.data[x])},[e.setFieldValue,l.data]);const d=x=>{e.handleChange(x),n(k(x.target.id))},h=x=>{e.handleChange(x);const{name:_,value:y}=x.target;n(J({name:_,value:y}))};return t.jsxs(Qe,{onSubmit:e.handleSubmit,children:[t.jsxs(et,{children:[t.jsxs(tt,{children:[t.jsx(ot,{children:a("addPet_form_moreInfo_theSex")}),t.jsx(at,{children:t.jsxs(Ze,{children:[t.jsx(z,{formik:e,text:a("other_female"),id:"female",onChange:d,value:c.female,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-female",stroke:e.values.gender===c.female?"#fff":e.values.gender===c.male?"#888888":"#F43F5E"})}),t.jsx(z,{formik:e,text:a("other_male"),id:"male",onChange:d,value:c.male,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-male",stroke:e.values.gender===c.male?"#fff":e.values.gender===c.female?"#888888":"#54ADFF"})})]})}),t.jsx(U,{setFile:o,file:i,text:a("addPet_form_moreInfo_file"),formik:e,items:"center",gap:"14px"})]}),t.jsxs(nt,{children:[t.jsx(g,{formik:e,text:a("other_location"),id:"location",name:"location",placeholder:a("addPet_form_moreInfo_location_placeholder"),value:e.values.location,onChange:h}),t.jsx(g,{formik:e,text:a("other_price"),id:"price",name:"price",placeholder:a("addPet_form_moreInfo_price_placeholder"),value:e.values.price,onChange:h}),t.jsx(G,{formik:e})]})]}),t.jsxs(P,{children:[t.jsxs(C,{type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const st=s.form`
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

  @media ${f} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`;function rt({formik:e,handleDefinePage:r,setFile:o,file:i}){return t.jsx(t.Fragment,{children:t.jsxs(st,{onSubmit:e.handleSubmit,children:[t.jsx(U,{setFile:o,file:i,formik:e,text:a("addPet_form_moreInfo_file"),direction:"row",items:"center",gap:"14px"}),t.jsx(G,{formik:e}),t.jsxs(P,{children:[t.jsxs(C,{disabled:e.values.option==="",type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})})}const lt=I().shape(R),X=20,dt=I().shape({gender:j().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:j().max(X,`Maximum location length - ${X} characters`).required("Location is required"),...R}),Y=20,ct=/^\d+$/,pt=I().shape({gender:j().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:j().max(Y,`Maximum location length - ${Y} characters`).required("Location is required"),price:j().matches(ct,"Price must contain only numbers").required("Price is required"),...R});function xt({option:e,handleDefinePage:r,setFile:o,file:i}){const{personalDetails:n,moreInfo:{redirect:l}}=b(),d=v();u.useEffect(()=>{l&&(d(re()),d(le()),d(de()),d(ce()))},[l,d]);const h=async(S,{resetForm:V})=>{const F={...S,...n},{title:$t,...ee}=F;if(e===c.yourPet){const A=await d(W(ee));W.fulfilled.match(A)&&V();return}const{type:vt,gender:Ct,...H}=F;if(e===c.SELL){const A=await d(O({noticeType:e,sex:F.gender,petType:F.type,...H}));O.fulfilled.match(A)&&V();return}const{price:wt,...te}=H,ne=await d(O({noticeType:e,sex:F.gender,petType:F.type,...te}));O.fulfilled.match(ne)&&V()},x=$({initialValues:{photo:null,comments:""},onSubmit:h,validationSchema:lt}),_=$({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:h,validationSchema:pt}),y=$({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:h,validationSchema:dt}),T=e==="yourPet"?"/user":"/notices";if(l)return t.jsx(he,{to:T});switch(e){case c.yourPet:return t.jsx(rt,{setFile:o,file:i,formik:x,handleDefinePage:r});case c.SELL:return t.jsx(it,{setFile:o,file:i,formik:_,handleDefinePage:r});default:return t.jsx(Ke,{setFile:o,file:i,formik:y,handleDefinePage:r})}}const ht=s.label``,mt=s.span`
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
`,ut=s.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function N({value:e,text:r,onChange:o,checked:i}){return t.jsxs(t.Fragment,{children:[t.jsx(ht,{htmlFor:e,children:t.jsx(mt,{checked:i,children:r})}),t.jsx(ut,{id:e,name:"option",type:"radio",onChange:o,value:e,checked:i})]})}function ft({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_yourPet"),value:c.yourPet,checked:e.values.option===c.yourPet}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_sell"),value:c.SELL,checked:e.values.option===c.SELL}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_lost/found"),value:c.LOST_FOUND,checked:e.values.option===c.LOST_FOUND}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_inGoodHands"),value:c.IN_GOOD_HANDS,checked:e.values.option===c.IN_GOOD_HANDS})]})}const gt={option:""};function jt({handleDefinePage:e,currentPage:r}){const o=v(),i=me(),{option:n}=b(),d=$({initialValues:gt,onSubmit:h=>{r===0&&o(pe(h.option)),e(1)}});return u.useEffect(()=>{n!==""&&d.setFieldValue("option",n)},[d.setFieldValue,n]),t.jsxs(we,{onSubmit:d.handleSubmit,children:[t.jsx(Pe,{children:t.jsx(ft,{formik:d})}),t.jsxs(P,{children:[t.jsxs(C,{disabled:d.values.option==="",type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsx(Ce,{to:i.state&&i.state.from&&i.state.from.pathname||"/notices",children:t.jsxs(w,{type:"button",children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_cancel")]})})]})]})}function bt({currentPage:e,setCurrentPage:r,setFile:o,file:i}){const{option:n}=b(),l=d=>{if(d===-1&&e===0){console.log("start");return}r(h=>h+d)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(jt,{currentPage:e,handleDefinePage:l}),e===1&&t.jsx(De,{option:n,handleDefinePage:l}),e===2&&t.jsx(xt,{setFile:o,file:i,option:n,handleDefinePage:l})]})}const yt=s.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 24px;

  @media ${p} {
    margin-top: 60px;
  }

  @media ${f} {
    margin-top: 40px;
  }
`,_t=s.div`
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

  @media ${f} {
    width: ${e=>e.value===2?"822px":"458px"};
  }
`,Ft=s.h2`
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
`;function Nt(){const[e,r]=u.useState(0),[o,i]=u.useState(null),{option:n,moreInfo:{isLoad:l}}=b(),d=n===c.SELL?a("addPet_form_titleText_sell"):n===c.LOST_FOUND?a("addPet_form_titleText_lostFound"):n===c.IN_GOOD_HANDS?a("addPet_form_titleText_inGoodHands"):a("addPet_form_titleText_default");return t.jsxs(t.Fragment,{children:[t.jsx(ue,{}),t.jsx(yt,{children:t.jsxs(_t,{value:e,namepage:n,children:[t.jsx(Ft,{children:d}),t.jsx(ge,{currentPage:e}),!l&&t.jsx(bt,{currentPage:e,setCurrentPage:r,setFile:i,file:o})]})})]})}export{Nt as default};
