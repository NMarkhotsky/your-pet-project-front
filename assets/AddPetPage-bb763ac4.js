import{s,b as p,j as t,t as a,h as I,i as j,H as Y,a as f,L as ee,J as b,K as te,r as u,I as m,Q as ne,k as v,R as ae,U as oe,V as X,W as k,X as M,Y as ie,Z as se,_ as re,$ as le,a0 as de,a1 as ce,a2 as H,c as pe,a3 as xe}from"./index-52828b33.js";import{u as $}from"./formik.esm-e64cd330.js";import{B as he}from"./BackgroundWrapper-20e07aa0.js";const c={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost-or-found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},O=({currentPage:e,type:r,num:i})=>{switch(r){case"text":if(e===i)return"current";if(e>i)return"select";if(e<i)return"ordinary";break;case"bar":if(e===i)return"current";if(e>i)return"select";if(e<i)return"opacity-ordinary";break}},D={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},J=e=>{switch(e.variant){case"current":return D.current;case"select":return D.select;case"ordinary":return D.ordinary;case"opacity-ordinary":return D.opacityOrdinary;default:return"tomato"}},me=s.ul`
  max-width: 392px;
  display: flex;
  justify-content: space-between;
  // margin: auto;

  @media ${p} {
    margin: auto;
  }
`,A=s.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,V=s.p`
  white-space: nowrap;
  color: ${J};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;

  text-align: center;

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 1.65;
  }
`,B=s.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${J};
`;function ue({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(me,{children:[t.jsxs(A,{children:[t.jsx(V,{variant:e===0?"current":"select",children:a("addPet_formPaginationList_chooseOption")}),t.jsx(B,{variant:e===0?"current":"select"})]}),t.jsxs(A,{children:[t.jsx(V,{variant:O({currentPage:e,type:"text",num:1}),children:a("addPet_formPaginationList_personalDetails")}),t.jsx(B,{variant:O({currentPage:e,type:"bar",num:1})})]}),t.jsxs(A,{children:[t.jsx(V,{variant:O({currentPage:e,type:"text",num:2}),children:a("addPet_formPaginationList_moreInfo")}),t.jsx(B,{variant:O({currentPage:e,type:"bar",num:2})})]})]})})}const fe=s.div`
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

  @media ${p} {
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

  @media ${p} {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;function g({text:e,id:r,name:i,onChange:o,formik:n,date:l,placeholder:d}){const h=!!n.errors[r]&&n.touched[r];return t.jsx(t.Fragment,{children:t.jsxs(ye,{htmlFor:r,children:[t.jsx("span",{children:e}),t.jsx(_e,{mistake:`${h}`,name:i,type:l?"date":"text",id:r,value:n.values[r],onChange:o,onBlur:n.handleBlur,placeholder:d||""}),n.errors[r]&&n.touched[r]?t.jsx(z,{text:n.errors[r]}):null]})})}const Fe=I().shape({name:j().required("Please enter pet name"),birthday:Y().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:j().required("Please enter breed")}),K=s.form`
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
`,P=s.button`
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
`,$e=s(ee)`
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

  @media ${p} {
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
  @media ${p} {
    margin-bottom: 137px;
  }
`,w=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${e=>e.page==="yourPet"?"44px":"auto"};

  @media ${p} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;function Pe({onSubmit:e,handleDefinePage:r}){const{personalDetails:i,option:o}=b(),n=$({initialValues:te,onSubmit:e,validationSchema:Fe});return u.useEffect(()=>{for(let l in i)i[l]!==""&&n.setFieldValue(l,i[l])},[n.setFieldValue,i]),t.jsxs(K,{onSubmit:n.handleSubmit,children:[t.jsx(g,{formik:n,placeholder:a("addPet_form_personalInfo_petName_placeholder"),text:a("addPet_form_personalInfo_petName"),id:"name",name:"name",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:"Type date of birth",text:a("user_mypets_petInfo_dateOfBirth"),id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(g,{formik:n,placeholder:a("addPet_form_personalInfo_petType_placeholder"),text:a("other_type"),id:"type",name:"type",onChange:n.handleChange}),t.jsxs(w,{page:o,children:[t.jsxs(C,{type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(P,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const we=I().shape({name:j().required("Please enter pet name"),birthday:Y().max(new Date,"Date of birth cannot be in the future").required("Please enter date of birth"),type:j().required("Please enter breed"),title:j().required("Please enter title")});function Se({onSubmit:e,handleDefinePage:r}){const{personalDetails:i}=b(),o=$({initialValues:ne,onSubmit:e,validationSchema:we});return u.useEffect(()=>{for(let n in i)n in i&&o.setFieldValue(n,i[n])},[]),t.jsxs(K,{onSubmit:o.handleSubmit,children:[t.jsx(g,{formik:o,placeholder:a("addPet_form_personalInfo_titleOfAdd"),text:a("addPet_form_personalInfo_titleOfAdd"),id:"title",name:"title",onChange:o.handleChange}),t.jsx(g,{formik:o,placeholder:a("addPet_form_personalInfo_petName_placeholder"),text:a("addPet_form_personalInfo_petName"),id:"name",name:"name",onChange:o.handleChange}),t.jsx(g,{formik:o,placeholder:"Type date of birth",text:a("user_mypets_petInfo_dateOfBirth"),id:"birthday",date:!0,name:"birthday",onChange:o.handleChange}),t.jsx(g,{formik:o,placeholder:a("addPet_form_personalInfo_petType_placeholder"),text:a("other_type"),id:"type",name:"type",onChange:o.handleChange}),t.jsxs(w,{children:[t.jsxs(C,{disabled:o.values.option==="",type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(P,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"})," ",a("other_back")]})]})]})}function Ie({option:e,handleDefinePage:r}){const i=v(),o=n=>{i(ae(n)),r(1)};return t.jsx(t.Fragment,{children:e===c.yourPet?t.jsx(Pe,{onSubmit:o,handleDefinePage:r}):t.jsx(Se,{onSubmit:o,handleDefinePage:r})})}const Oe=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",De=s.label`
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

  @media ${p} {
    height: 108px;
    font-size: ${e=>e.theme.fontSizes.md};
  }
`;function q({formik:e}){const r=v(),{moreInfo:i}=b();u.useEffect(()=>{i.data.comments!==""&&e.setFieldValue("comments",i.data.comments)},[e.setFieldValue,i.data.comments]);const o=l=>{e.handleChange(l),r(oe(l.target.value))},n=l=>{e.handleBlur(l)};return t.jsxs(De,{htmlFor:"comments",children:[a("other_comments"),t.jsx(Ne,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:n,onChange:o,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(z,{text:e.errors.comments}):null]})}const Le=s.img`
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
`,Te=s.label`
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

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.lg};
    max-width: ${e=>e.value==="yourPet"?"114px":"100%"};
    line-height: 1.4;
    margin-bottom: 8px;
  }

  color: ${e=>e.theme.colors.text};
`;function R({formik:e,text:r,direction:i,items:o,justify:n,gap:l,setFile:d,file:h}){const{option:x}=b();u.useEffect(()=>{h&&e.setFieldValue("photo",h)},[e.setFieldValue,h]);const _=E=>{const S=E.target.files[0];S&&(e.setFieldValue("photo",S),d(S))},y=e.errors.photo&&e.touched.photo;return t.jsxs(t.Fragment,{children:[t.jsxs(Te,{direction:i,items:o,justify:n,gap:l,htmlFor:"photo",value:x,children:[t.jsx(Ve,{value:x,children:r}),t.jsx(Ee,{file:e.values.photo,mistake:`${y}`,children:e.values.photo&&t.jsx(ze,{file:e.values.photo})}),y?t.jsx(z,{text:e.errors.photo}):null]}),t.jsx(Ae,{type:"file",name:"photo",id:"photo",onBlur:e.handleFileChange,onChange:_})]})}const Be=s.label`
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
`;function L({icon:e,text:r,id:i,onChange:o,value:n,checked:l,formik:d}){const h=d.errors.gender&&d.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(Be,{htmlFor:i,checked:l===n,children:[e,t.jsx(qe,{checked:l===n,children:r}),h?t.jsx(z,{text:d.errors.gender}):null]}),t.jsx(Me,{type:"radio",name:"gender",id:i,value:n,onChange:o,checked:l===n})]})}const Re=s.form`
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
`,Ge=s.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,He=s.div`
  @media ${p} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${f} {
    gap: 78px;
  }
`,Ue=s.div`
  @media ${p} {
  }

  @media ${f} {
    display: flex;
    flex-direction: column;
  }
`,We=s.div`
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
`,Ye=s.div`
  margin-bottom: 40px;
`,Xe=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function ke({formik:e,handleDefinePage:r,setFile:i,file:o}){const n=v(),{moreInfo:l}=b();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let x in l.data)l.data[x]!==""&&e.setFieldValue(x,l.data[x])},[e.setFieldValue,l.data]);const d=x=>{e.handleChange(x),n(X(x.target.id))},h=x=>{e.handleChange(x);const{name:_,value:y}=x.target;n(k({name:_,value:y}))};return t.jsxs(Re,{onSubmit:e.handleSubmit,children:[t.jsxs(He,{children:[t.jsxs(Ue,{children:[t.jsx(Xe,{children:a("addPet_form_moreInfo_theSex")}),t.jsx(Ye,{children:t.jsxs(Ge,{children:[t.jsx(L,{formik:e,text:a("other_female"),id:"female",onChange:d,value:c.female,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-female",stroke:e.values.gender===c.female?"#fff":e.values.gender===c.male?"#888888":"#F43F5E"})}),t.jsx(L,{formik:e,text:a("other_male"),id:"male",onChange:d,value:c.male,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-male",stroke:e.values.gender===c.male?"#fff":e.values.gender===c.female?"#888888":"#54ADFF"})})]})}),t.jsx(R,{text:a("addPet_form_moreInfo_file"),setFile:i,file:o,formik:e})]}),t.jsxs(We,{children:[t.jsx(g,{formik:e,text:a("other_location"),id:"location",name:"location",placeholder:a("addPet_form_moreInfo_location_placeholder"),value:e.values.location,onChange:h}),t.jsx(q,{formik:e})]})]}),t.jsxs(w,{children:[t.jsxs(C,{type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(P,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const Je=s.form`
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
`,Ke=s.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`,Qe=s.div`
  @media ${p} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${f} {
    gap: 78px;
  }
`,Ze=s.div`
  @media ${p} {
  }

  @media ${f} {
    display: flex;
    flex-direction: column;
  }
`,et=s.div`
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
`,tt=s.div`
  margin-bottom: 40px;
`,nt=s.p`
  margin-bottom: 8px;

  font-family: ${({theme:e})=>e.fonts.main.medium};
  font-size: ${({theme:e})=>e.fontSizes.lg};
`;function at({formik:e,handleDefinePage:r,setFile:i,file:o}){const n=v(),{moreInfo:l}=b();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]),u.useEffect(()=>{for(let x in l.data)l.data[x]!==""&&e.setFieldValue(x,l.data[x])},[e.setFieldValue,l.data]);const d=x=>{e.handleChange(x),n(X(x.target.id))},h=x=>{e.handleChange(x);const{name:_,value:y}=x.target;n(k({name:_,value:y}))};return t.jsxs(Je,{onSubmit:e.handleSubmit,children:[t.jsxs(Qe,{children:[t.jsxs(Ze,{children:[t.jsx(nt,{children:a("addPet_form_moreInfo_theSex")}),t.jsx(tt,{children:t.jsxs(Ke,{children:[t.jsx(L,{formik:e,text:a("other_female"),id:"female",onChange:d,value:c.female,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-female",stroke:e.values.gender===c.female?"#fff":e.values.gender===c.male?"#888888":"#F43F5E"})}),t.jsx(L,{formik:e,text:a("other_male"),id:"male",onChange:d,value:c.male,checked:e.values.gender,icon:t.jsx(m,{iconName:"icon-male",stroke:e.values.gender===c.male?"#fff":e.values.gender===c.female?"#888888":"#54ADFF"})})]})}),t.jsx(R,{setFile:i,file:o,text:a("addPet_form_moreInfo_file"),formik:e,items:"center",gap:"14px"})]}),t.jsxs(et,{children:[t.jsx(g,{formik:e,text:a("other_location"),id:"location",name:"location",placeholder:a("addPet_form_moreInfo_location_placeholder"),value:e.values.location,onChange:h}),t.jsx(g,{formik:e,text:a("other_price"),id:"price",name:"price",placeholder:a("addPet_form_moreInfo_price_placeholder"),value:e.values.price,onChange:h}),t.jsx(q,{formik:e})]})]}),t.jsxs(w,{children:[t.jsxs(C,{type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(P,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})}const ot=s.form`
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
`;function it({formik:e,handleDefinePage:r,setFile:i,file:o}){return t.jsx(t.Fragment,{children:t.jsxs(ot,{onSubmit:e.handleSubmit,children:[t.jsx(R,{setFile:i,file:o,formik:e,text:a("addPet_form_moreInfo_file"),direction:"row",items:"center",gap:"14px"}),t.jsx(q,{formik:e}),t.jsxs(w,{children:[t.jsxs(C,{disabled:e.values.option==="",type:"submit",children:[a("other_done"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsxs(P,{type:"button",onClick:()=>r(-1),children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_back")]})]})]})})}const st=I().shape(M),U=20,rt=I().shape({gender:j().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:j().max(U,`Maximum location length - ${U} characters`).required("Location is required"),...M}),W=20,lt=/^\d+$/,dt=I().shape({gender:j().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:j().max(W,`Maximum location length - ${W} characters`).required("Location is required"),price:j().matches(lt,"Price must contain only numbers").required("Price is required"),...M});function ct({option:e,handleDefinePage:r,setFile:i,file:o}){const{personalDetails:n,moreInfo:{redirect:l}}=b(),d=v();u.useEffect(()=>{l&&(d(ie()),d(se()),d(re()),d(le()))},[l,d]);const h=async(S,{resetForm:T})=>{const F={...S,...n},{title:_t,...Q}=F;if(e===c.yourPet){d(ce(Q)),T();return}const{type:Ft,gender:$t,...G}=F;if(e===c.SELL){d(H({noticeType:e,sex:F.gender,petType:F.type,...G})),T();return}const{price:vt,...Z}=G;d(H({noticeType:e,sex:F.gender,petType:F.type,...Z})),T()},x=$({initialValues:{photo:null,comments:""},onSubmit:h,validationSchema:st}),_=$({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:h,validationSchema:dt}),y=$({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:h,validationSchema:rt}),E=e==="yourPet"?"/user":"/notices";if(l)return t.jsx(de,{to:E});switch(e){case c.yourPet:return t.jsx(it,{setFile:i,file:o,formik:x,handleDefinePage:r});case c.SELL:return t.jsx(at,{setFile:i,file:o,formik:_,handleDefinePage:r});default:return t.jsx(ke,{setFile:i,file:o,formik:y,handleDefinePage:r})}}const pt=s.label``,xt=s.span`
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
`;function N({value:e,text:r,onChange:i,checked:o}){return t.jsxs(t.Fragment,{children:[t.jsx(pt,{htmlFor:e,children:t.jsx(xt,{checked:o,children:r})}),t.jsx(ht,{id:e,name:"option",type:"radio",onChange:i,value:e,checked:o})]})}function mt({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_yourPet"),value:c.yourPet,checked:e.values.option===c.yourPet}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_sell"),value:c.SELL,checked:e.values.option===c.SELL}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_lost/found"),value:c.LOST_FOUND,checked:e.values.option===c.LOST_FOUND}),t.jsx(N,{onChange:e.handleChange,text:a("addPet_form_chooseOption_radio_inGoodHands"),value:c.IN_GOOD_HANDS,checked:e.values.option===c.IN_GOOD_HANDS})]})}const ut={option:""};function ft({handleDefinePage:e,currentPage:r}){const i=v(),o=pe(),{option:n}=b(),d=$({initialValues:ut,onSubmit:h=>{r===0&&i(xe(h.option)),e(1)}});return u.useEffect(()=>{n!==""&&d.setFieldValue("option",n)},[d.setFieldValue,n]),t.jsxs(ve,{onSubmit:d.handleSubmit,children:[t.jsx(Ce,{children:t.jsx(mt,{formik:d})}),t.jsxs(w,{children:[t.jsxs(C,{disabled:d.values.option==="",type:"submit",children:[a("other_next"),t.jsx(m,{iconName:"icon-pawprint",fill:"#FFFFFF"})]}),t.jsx($e,{to:o.state&&o.state.from&&o.state.from.pathname||"/notices",children:t.jsxs(P,{type:"button",children:[t.jsx(m,{iconName:"icon-arrow-left",stroke:"#54adff"}),a("other_cancel")]})})]})]})}function gt({currentPage:e,setCurrentPage:r,setFile:i,file:o}){const{option:n}=b(),l=d=>{if(d===-1&&e===0){console.log("start");return}r(h=>h+d)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(ft,{currentPage:e,handleDefinePage:l}),e===1&&t.jsx(Ie,{option:n,handleDefinePage:l}),e===2&&t.jsx(ct,{setFile:i,file:o,option:n,handleDefinePage:l})]})}const jt=s.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 24px;

  @media ${p} {
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

  @media ${p} {
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

  @media ${p} {
    font-size: ${e=>e.theme.fontSizes.xxl};
    margin-left: 0px;
    text-align: center;
  }
`;function St(){const[e,r]=u.useState(0),[i,o]=u.useState(null),{option:n,moreInfo:{isLoad:l}}=b(),d=n===c.SELL?a("addPet_form_titleText_sell"):n===c.LOST_FOUND?a("addPet_form_titleText_lostFound"):n===c.IN_GOOD_HANDS?a("addPet_form_titleText_inGoodHands"):a("addPet_form_titleText_default");return t.jsxs(t.Fragment,{children:[t.jsx(he,{}),t.jsx(jt,{children:t.jsxs(bt,{value:e,namepage:n,children:[t.jsx(yt,{children:d}),t.jsx(ue,{currentPage:e}),!l&&t.jsx(gt,{currentPage:e,setCurrentPage:r,setFile:o,file:i})]})})]})}export{St as default};
