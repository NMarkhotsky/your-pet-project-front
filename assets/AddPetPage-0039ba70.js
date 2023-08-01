import{s,b as x,j as t,t as a,f as I,g as j,H as J,a as f,L as oe,J as b,K as ie,r as u,I as m,O as se,h as v,Q as re,R as le,U as K,V as Q,W as G,c as Z,X as de,Y as ce,Z as pe,_ as A,$ as V,a0 as B,a1 as Y,a2 as xe}from"./index-4f3331d1.js";import{u as $}from"./formik.esm-96e11f6b.js";import{B as he}from"./BackgroundWrapper-ad87507c.js";const p={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost-or-found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},O=({currentPage:e,type:r,num:i})=>{switch(r){case"text":if(e===i)return"current";if(e>i)return"select";if(e<i)return"ordinary";break;case"bar":if(e===i)return"current";if(e>i)return"select";if(e<i)return"opacity-ordinary";break}},D={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},ee=e=>{switch(e.variant){case"current":return D.current;case"select":return D.select;case"ordinary":return D.ordinary;case"opacity-ordinary":return D.opacityOrdinary;default:return"tomato"}},me=s.ul`
  max-width: 392px;
  display: flex;
  justify-content: space-between;
  // margin: auto;

  @media ${x} {
    margin: auto;
  }
`,M=s.li`
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

  @media ${x} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 1.65;
  }
`,R=s.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${ee};
`;function ue({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(me,{children:[t.jsxs(M,{children:[t.jsx(q,{variant:e===0?"current":"select",children:a("addPet_formPaginationList_chooseOption")}),t.jsx(R,{variant:e===0?"current":"select"})]}),t.jsxs(M,{children:[t.jsx(q,{variant:O({currentPage:e,type:"text",num:1}),children:a("addPet_formPaginationList_personalDetails")}),t.jsx(R,{variant:O({currentPage:e,type:"bar",num:1})})]}),t.jsxs(M,{children:[t.jsx(q,{variant:O({currentPage:e,type:"text",num:2}),children:a("addPet_formPaginationList_moreInfo")}),t.jsx(R,{variant:O({currentPage:e,type:"bar",num:2})})]})]})})}const fe=s.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function z({text:e}){return t.jsx(fe,{children:e})}const ge="#F43F5E",je="#54ADFF",be=({mistake:e})=>e==="true"?ge:je,ye=s.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(19 / 14);
  position: relative;

  @media ${x} {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }

  color: ${e=>e.theme.colors.text};
`,_e=s.input`
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

  @media ${x} {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;function g({text:e,id:r,name:i,onChange:o,formik:n,date:l,placeholder:c}){const d=!!n.errors[r]&&n.touched[r];return t.jsx(t.Fragment,{children:t.jsxs(ye,{htmlFor:r,children:[t.jsx("span",{children:e}),t.jsx(_e,{mistake:`${d}`,name:i,type:l?"date":"text",id:r,value:n.values[r],onChange:o,onBlur:n.handleBlur,placeholder:c||""}),n.errors[r]&&n.touched[r]?t.jsx(z,{text:n.errors[r]}):null]})})}const Fe=I().shape({name:j().required("Please enter pet name"),birthday:J().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:j().required("Please enter breed")}),te=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 140px);
  box-sizing: border-box;
  margin-top: 16px;
  @media ${x} {
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

  @media ${x} {
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

  @media ${x} {
    /* flex-basis: 33%; */
  }
`,$e=s(oe)`
  display: flex;
  justify-content: center;
  align-items: center;
`,ve=s.form`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  @media ${x} {
    max-width: 458px;
    height: calc(100% - 160px);
    margin-top: 40px;
  }
  @media ${f} {
    height: calc(100% - 140px);
  }
`,Ce=s.div`
  display: flex;
  flex-direction: column;
  max-width: 131px;
  gap: 12px;
  margin-bottom: 91px;
  @media ${x} {
    margin-bottom: 137px;
  }
`,P=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${e=>e.page==="yourPet"?"44px":"auto"};

  @media ${x} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;function we({onSubmit:e,handleDefinePage:r}){const{personalDetails:i,option:o}=b(),n=$({initialValues:ie,onSubmit:e,validationSchema:Fe});return u.useEffect(()=>{for(let l in i)i[l]!==""&&n.setFieldValue(l,i[l])},[n.setFieldValue,i]),t.jsxs(te,{onSubmit:n.handleSubmit,children:[t.jsx(g,{formik:n,placeholder:a("addPet_form_personalInfo_petName_placeholder"),text:a("addPet_form_personalInfo_petName"),id:"name",name:"name",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:"Type date of birth",text:a("user_mypets_petInfo_dateOfBirth"),id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:a("addPet_form_personalInfo_petType_placeholder"),text:a("other_type"),id:"type",name:"type",onChange:n.handleChange}),t.jsxs(P,{page:o,children:[t.jsxs(C,{type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const Pe=I().shape({name:j().required("Please enter pet name"),birthday:J().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:j().required("Please enter breed"),title:j().required("Please enter title")});function Se({onSubmit:e,handleDefinePage:r}){const{personalDetails:i}=b(),o=$({initialValues:se,onSubmit:e,validationSchema:Pe});return u.useEffect(()=>{for(let n in i)n in i&&o.setFieldValue(n,i[n])},[]),t.jsxs(te,{onSubmit:o.handleSubmit,children:[t.jsx(g,{formik:o,placeholder:a("addPet_form_personalInfo_titleOfAdd"),text:a("addPet_form_personalInfo_titleOfAdd"),id:"title",name:"title",onChange:o.handleChange}),t.jsx(g,{formik:o,placeholder:a("addPet_form_personalInfo_petName_placeholder"),text:a("addPet_form_personalInfo_petName"),id:"name",name:"name",onChange:o.handleChange}),t.jsx(g,{formik:o,placeholder:"Type date of birth",text:a("user_mypets_petInfo_dateOfBirth"),id:"birthday",date:!0,name:"birthday",onChange:o.handleChange}),t.jsx(g,{formik:o,placeholder:a("addPet_form_personalInfo_petType_placeholder"),text:a("other_type"),id:"type",name:"type",onChange:o.handleChange}),t.jsxs(P,{children:[t.jsxs(C,{disabled:o.values.option==="",type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"})," ",a("other_back")]})]})]})}function Ie({option:e,handleDefinePage:r}){const i=v(),o=n=>{i(re(n)),r(1)};return t.jsx(t.Fragment,{children:e===p.yourPet?t.jsx(we,{onSubmit:o,handleDefinePage:r}):t.jsx(Se,{onSubmit:o,handleDefinePage:r})})}const Oe=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",De=s.label`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  @media ${x} {
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
  border: 1px solid ${Oe};

  @media ${x} {
    height: 108px;
    font-size: ${e=>e.theme.fontSizes.md};
  }
`;function H({formik:e}){const r=v(),{moreInfo:i}=b();u.useEffect(()=>{i.data.comments!==""&&e.setFieldValue("comments",i.data.comments)},[e.setFieldValue,i.data.comments]);const o=l=>{e.handleChange(l),r(le(l.target.value))},n=l=>{e.handleBlur(l)};return t.jsxs(De,{htmlFor:"comments",children:[a("other_comments"),t.jsx(Ne,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:n,onChange:o,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(z,{text:e.errors.comments}):null]})}const Le=s.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;function ze({file:e}){const[r,i]=u.useState(null),o=new FileReader;return o.readAsDataURL(e),o.onload=()=>{i(o.result)},t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx(Le,{src:r,alt:"Preview",width:112})})}const Ee=s.div`
  width: 112px;
  height: 112px;
  background-color: ${e=>e.mistake==="true"?"#FBCCCC":"#CCE4FB"};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  @media ${x} {
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
`,Te=s.label`
  display: flex;
  position: relative;
  flex-direction: ${e=>e.direction};
  align-items: center;
  justify-content: ${e=>e.justify};
  gap: 16px;

  @media ${x} {
    flex-direction: ${e=>e.value==="yourPet"?"row":"column"};
    justify-content: ${e=>e.value==="yourPet"?"flex-start":"center"};
    align-items: ${e=>(e.value==="yourPet","center")};
    gap: ${e=>e.value==="yourPet"?"16px":"0"};
  }
`,Ae=s.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,Ve=s.span`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  max-width: 80px;
  line-height: 1.35;

  @media ${x} {
    font-size: ${e=>e.theme.fontSizes.lg};
    max-width: ${e=>e.value==="yourPet"?"114px":"100%"};
    line-height: 1.4;
    margin-bottom: 8px;
  }

  color: ${e=>e.theme.colors.text};
`;function U({formik:e,text:r,direction:i,items:o,justify:n,gap:l,setFile:c,file:d}){const{option:h}=b();u.useEffect(()=>{d&&e.setFieldValue("photo",d)},[e.setFieldValue,d]);const _=E=>{const S=E.target.files[0];S&&(e.setFieldValue("photo",S),c(S))},y=e.errors.photo&&e.touched.photo;return t.jsxs(t.Fragment,{children:[t.jsxs(Te,{direction:i,items:o,justify:n,gap:l,htmlFor:"photo",value:h,children:[t.jsx(Ve,{value:h,children:r}),t.jsx(Ee,{file:e.values.photo,mistake:`${y}`,children:e.values.photo&&t.jsx(ze,{file:e.values.photo})}),y?t.jsx(z,{text:e.errors.photo}):null]}),t.jsx(Ae,{type:"file",name:"photo",id:"photo",accept:".jpg",onBlur:e.handleFileChange,onChange:_})]})}const Be=s.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${e=>e.checked?"#54ADFF":"#fff"};
  border-radius: 40px;
`,Me=s.input`
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
`;function L({icon:e,text:r,id:i,onChange:o,value:n,checked:l,formik:c}){const d=c.errors.gender&&c.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(Be,{htmlFor:i,checked:l===n,children:[e,t.jsx(qe,{checked:l===n,children:r}),d?t.jsx(z,{text:c.errors.gender}):null]}),t.jsx(Me,{type:"radio",name:"gender",id:i,value:n,onChange:o,checked:l===n})]})}const Re=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${x} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${f} {
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
  @media ${x} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${f} {
    gap: 78px;
  }
`,Ue=s.div`
  @media ${x} {
  }

  @media ${f} {
    display: flex;
    flex-direction: column;
  }
`,We=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${x} {
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
`,Ye=s.div`
  margin-bottom: 40px;
`,Xe=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function ke({formik:e,handleDefinePage:r,setFile:i,file:o}){const n=v(),{moreInfo:l}=b();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let h in l.data)l.data[h]!==""&&e.setFieldValue(h,l.data[h])},[e.setFieldValue,l.data]);const c=h=>{e.handleChange(h),n(K(h.target.id))},d=h=>{e.handleChange(h);const{name:_,value:y}=h.target;n(Q({name:_,value:y}))};return t.jsxs(Re,{onSubmit:e.handleSubmit,children:[t.jsxs(He,{children:[t.jsxs(Ue,{children:[t.jsx(Xe,{children:a("addPet_form_moreInfo_theSex")}),t.jsx(Ye,{children:t.jsxs(Ge,{children:[t.jsx(L,{formik:e,text:a("other_female"),id:"female",onChange:c,value:p.female,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-female",stroke:e.values.gender===p.female?"#fff":e.values.gender===p.male?"#888888":"#F43F5E"})}),t.jsx(L,{formik:e,text:a("other_male"),id:"male",onChange:c,value:p.male,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-male",stroke:e.values.gender===p.male?"#fff":e.values.gender===p.female?"#888888":"#54ADFF"})})]})}),t.jsx(U,{text:a("addPet_form_moreInfo_file"),setFile:i,file:o,formik:e})]}),t.jsxs(We,{children:[t.jsx(g,{formik:e,text:a("other_location"),id:"location",name:"location",placeholder:a("addPet_form_moreInfo_location_placeholder"),value:e.values.location,onChange:d}),t.jsx(H,{formik:e})]})]}),t.jsxs(P,{children:[t.jsxs(C,{type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const Je=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${x} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${f} {
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
  @media ${x} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${f} {
    gap: 78px;
  }
`,Ze=s.div`
  @media ${x} {
  }

  @media ${f} {
    display: flex;
    flex-direction: column;
  }
`,et=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${x} {
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
`,tt=s.div`
  margin-bottom: 40px;
`,nt=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function at({formik:e,handleDefinePage:r,setFile:i,file:o}){const n=v(),{moreInfo:l}=b();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let h in l.data)l.data[h]!==""&&e.setFieldValue(h,l.data[h])},[e.setFieldValue,l.data]);const c=h=>{e.handleChange(h),n(K(h.target.id))},d=h=>{e.handleChange(h);const{name:_,value:y}=h.target;n(Q({name:_,value:y}))};return t.jsxs(Je,{onSubmit:e.handleSubmit,children:[t.jsxs(Qe,{children:[t.jsxs(Ze,{children:[t.jsx(nt,{children:a("addPet_form_moreInfo_theSex")}),t.jsx(tt,{children:t.jsxs(Ke,{children:[t.jsx(L,{formik:e,text:a("other_female"),id:"female",onChange:c,value:p.female,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-female",stroke:e.values.gender===p.female?"#fff":e.values.gender===p.male?"#888888":"#F43F5E"})}),t.jsx(L,{formik:e,text:a("other_male"),id:"male",onChange:c,value:p.male,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-male",stroke:e.values.gender===p.male?"#fff":e.values.gender===p.female?"#888888":"#54ADFF"})})]})}),t.jsx(U,{setFile:i,file:o,text:a("addPet_form_moreInfo_file"),formik:e,items:"center",gap:"14px"})]}),t.jsxs(et,{children:[t.jsx(g,{formik:e,text:a("other_location"),id:"location",name:"location",placeholder:a("addPet_form_moreInfo_location_placeholder"),value:e.values.location,onChange:d}),t.jsx(g,{formik:e,text:a("other_price"),id:"price",name:"price",placeholder:a("addPet_form_moreInfo_price_placeholder"),value:e.values.price,onChange:d}),t.jsx(H,{formik:e})]})]}),t.jsxs(P,{children:[t.jsxs(C,{type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const ot=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${x} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${f} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`;function it({formik:e,handleDefinePage:r,setFile:i,file:o}){return t.jsx(t.Fragment,{children:t.jsxs(ot,{onSubmit:e.handleSubmit,children:[t.jsx(U,{setFile:i,file:o,formik:e,text:a("addPet_form_moreInfo_file"),direction:"row",items:"center",gap:"14px"}),t.jsx(H,{formik:e}),t.jsxs(P,{children:[t.jsxs(C,{disabled:e.values.option==="",type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(w,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})})}const st=I().shape(G),X=20,rt=I().shape({gender:j().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:j().max(X,`Maximum location length - ${X} characters`).required("Location is required"),...G}),k=20,lt=/^\d+$/,dt=I().shape({gender:j().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:j().max(k,`Maximum location length - ${k} characters`).required("Location is required"),price:j().matches(lt,"Price must contain only numbers").required("Price is required"),...G});function ct({option:e,handleDefinePage:r,setFile:i,file:o}){const{personalDetails:n,moreInfo:{redirect:l}}=b(),c=Z(),d=v();u.useEffect(()=>{l&&d(de())},[l,d]);const h=async(S,{resetForm:T})=>{const F={...S,...n},{title:_t,...ne}=F;if(e===p.yourPet){d(pe(ne)),T(),d(A()),d(V()),d(B());return}const{type:Ft,gender:$t,...W}=F;if(e===p.SELL){d(Y({noticeType:e,sex:F.gender,petType:F.type,...W})),T(),d(A()),d(V()),d(B());return}const{price:vt,...ae}=W;d(Y({noticeType:e,sex:F.gender,petType:F.type,...ae})),d(A()),d(V()),d(B()),T()},_=$({initialValues:{photo:null,comments:""},onSubmit:h,validationSchema:st}),y=$({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:h,validationSchema:dt}),E=$({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:h,validationSchema:rt});if(l)return t.jsx(ce,{to:c.state&&c.state.from&&c.state.from.pathname||"/notices"});switch(e){case p.yourPet:return t.jsx(it,{setFile:i,file:o,formik:_,handleDefinePage:r});case p.SELL:return t.jsx(at,{setFile:i,file:o,formik:y,handleDefinePage:r});default:return t.jsx(ke,{setFile:i,file:o,formik:E,handleDefinePage:r})}}const pt=s.label``,xt=s.span`
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
`;function N({value:e,text:r,onChange:i,checked:o}){return t.jsxs(t.Fragment,{children:[t.jsx(pt,{htmlFor:e,children:t.jsx(xt,{checked:o,children:r})}),t.jsx(ht,{id:e,name:"option",type:"radio",onChange:i,value:e,checked:o})]})}function mt({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_yourPet"),value:p.yourPet,checked:e.values.option===p.yourPet}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_sell"),value:p.SELL,checked:e.values.option===p.SELL}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_lost/found"),value:p.LOST_FOUND,checked:e.values.option===p.LOST_FOUND}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_inGoodHands"),value:p.IN_GOOD_HANDS,checked:e.values.option===p.IN_GOOD_HANDS})]})}const ut={option:""};function ft({handleDefinePage:e,currentPage:r}){const i=v(),o=Z(),{option:n}=b(),c=$({initialValues:ut,onSubmit:d=>{r===0&&i(xe(d.option)),e(1)}});return u.useEffect(()=>{n!==""&&c.setFieldValue("option",n)},[c.setFieldValue,n]),t.jsxs(ve,{onSubmit:c.handleSubmit,children:[t.jsx(Ce,{children:t.jsx(mt,{formik:c})}),t.jsxs(P,{children:[t.jsxs(C,{disabled:c.values.option==="",type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsx($e,{to:o.state&&o.state.from&&o.state.from.pathname||"/notices",children:t.jsxs(w,{type:"button",children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_cancel")]})})]})]})}function gt({currentPage:e,setCurrentPage:r,setFile:i,file:o}){const{option:n}=b(),l=c=>{if(c===-1&&e===0){console.log("start");return}r(d=>d+c)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(ft,{currentPage:e,handleDefinePage:l}),e===1&&t.jsx(Ie,{option:n,handleDefinePage:l}),e===2&&t.jsx(ct,{setFile:i,file:o,option:n,handleDefinePage:l})]})}const jt=s.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 24px;

  @media ${x} {
    margin-top: 60px;
  }

  @media ${f} {
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

  @media ${x} {
    width: ${e=>e.value===2?"704px":"458px"};
    max-width: ${e=>e.namepage==="yourPet"?"458px":"704px"};

    padding: 20px 32px 20px 32px;
  }

  @media ${f} {
    width: ${e=>e.value===2?"822px":"458px"};
  }
`,yt=s.h2`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  line-height: 1.35;
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${x} {
    font-size: ${e=>e.theme.fontSizes.xxl};
    margin-left: 0px;
    text-align: center;
  }
`;function St(){const[e,r]=u.useState(0),[i,o]=u.useState(null),{option:n,moreInfo:{isLoad:l}}=b(),c=n===p.SELL?a("addPet_form_titleText_sell"):n===p.LOST_FOUND?a("addPet_form_titleText_lostFound"):n===p.IN_GOOD_HANDS?a("addPet_form_titleText_inGoodHands"):a("addPet_form_titleText_default");return t.jsxs(t.Fragment,{children:[t.jsx(he,{}),t.jsx(jt,{children:t.jsxs(bt,{value:e,namepage:n,children:[t.jsx(yt,{children:c}),t.jsx(ue,{currentPage:e}),!l&&t.jsx(gt,{currentPage:e,setCurrentPage:r,setFile:o,file:i})]})})]})}export{St as default};
