import{s,b as h,j as t,d as P,e as p,a as b,A as de,G as g,H as he,r as u,J as xe,u as y,K as pe,Q as ue,R as Y,T as k,z as J,U as me,V as ge,W as A,X as V,Z as N,_ as H,$ as fe}from"./index-d3dd5b29.js";import{u as C}from"./formik.esm-86dadfa2.js";import{B as je}from"./BackgroundWrapper-92987e30.js";const d={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost-or-found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},D=({currentPage:e,type:i,num:a})=>{switch(i){case"text":if(e===a)return"current";if(e>a)return"select";if(e<a)return"ordinary";break;case"bar":if(e===a)return"current";if(e>a)return"select";if(e<a)return"opacity-ordinary";break}},I={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},K=e=>{switch(e.variant){case"current":return I.current;case"select":return I.select;case"ordinary":return I.ordinary;case"opacity-ordinary":return I.opacityOrdinary;default:return"tomato"}},z=({value:e,formik:i})=>i.values.gender===e?"#fff":"#888888",Ce=s.ul`
  max-width: 392px;
  display: flex;
  justify-content: space-between;
  // margin: auto;

  @media ${h} {
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
  color: ${K};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.md};
    line-height: 1.65;
  }
`,Z=s.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${K};
`;function be({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(Ce,{children:[t.jsxs(_,{children:[t.jsx(q,{variant:e===0?"current":"select",children:"Choose option"}),t.jsx(Z,{variant:e===0?"current":"select"})]}),t.jsxs(_,{children:[t.jsx(q,{variant:D({currentPage:e,type:"text",num:1}),children:"Personal details"}),t.jsx(Z,{variant:D({currentPage:e,type:"bar",num:1})})]}),t.jsxs(_,{children:[t.jsx(q,{variant:D({currentPage:e,type:"text",num:2}),children:"More info"}),t.jsx(Z,{variant:D({currentPage:e,type:"bar",num:2})})]})]})})}const ye=s.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function M({text:e}){return t.jsx(ye,{children:e})}const Fe="#F43F5E",ve="#54ADFF",we=({mistake:e})=>e==="true"?Fe:ve,$e=s.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(19 / 14);
  position: relative;

  @media ${h} {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }
`,Se=s.input`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(21 / 14);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${we};
  padding: 8px 16px;
  max-height: 40px;

  @media ${h} {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;function m({text:e,id:i,name:a,onChange:n,formik:o,date:l,placeholder:r}){const c=!!o.errors[i]&&o.touched[i];return t.jsx(t.Fragment,{children:t.jsxs($e,{htmlFor:i,children:[t.jsx("span",{children:e}),t.jsx(Se,{mistake:`${c}`,name:a,type:l?"date":"text",id:i,value:o.values[i],onChange:n,onBlur:o.handleBlur,placeholder:r||""}),o.errors[i]&&o.touched[i]?t.jsx(M,{text:o.errors[i]}):null]})})}const Le=P().shape({name:p().required("Please enter pet name"),birthday:p().required("Please enter date of birth"),type:p().required("Please enter breed")}),Q=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 140px);
  box-sizing: border-box;
  margin-top: 16px;
  margin-bouttom @media ${h} {
    max-width: 458px;
    margin-top: 20px;
    gap: 24px;
    height: calc(100% - 160px);
  }
  @media ${b} {
    margin-top: 16px;
    gap: 24px;
    height: calc(100% - 140px);
  }
`,F=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 28px;
  max-width: 248px;
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

  @media ${h} {
    flex-basis: 66%;
  }
`,v=s.button`
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

  @media ${h} {
    flex-basis: 33%;
  }
`,Pe=s(de)`
  display: flex;
  justify-content: center;
  align-items: center;
`;function w(){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",stroke:"#54ADFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function ee({stroke:e}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 11L6 19M3 16L9 16",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function te({stroke:e}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 9.5C3.23858 9.5 1 11.7386 1 14.5C1 17.2614 3.23858 19.5 6 19.5C8.76142 19.5 11 17.2614 11 14.5C11 11.7386 8.76142 9.5 6 9.5ZM6 9.5V1.5M6 1.5L10 5.5M6 1.5L2 5.5",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function $(){return t.jsx(t.Fragment,{children:t.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{clipPath:"url(#clip0_41439_1347)",children:[t.jsx("path",{d:"M15.8613 14.3614C15.5946 12.378 14.3528 10.689 12.5393 9.84335C10.7259 8.99778 8.63364 9.13211 6.94302 10.2027L2.86887 12.7822C2.19287 13.2102 1.68351 13.8312 1.39581 14.5777C1.10804 15.3244 1.06917 16.1265 1.28316 16.8976C1.49755 17.6688 1.94487 18.336 2.57661 18.8273C3.20843 19.3185 3.96541 19.5877 4.76566 19.6055L4.81795 19.6064C6.82515 19.6654 8.73238 20.5626 10.0576 22.0732C10.3995 22.4627 10.8104 22.7707 11.2701 22.985C11.52 23.1016 11.7847 23.1904 12.0602 23.2498C12.8426 23.4181 13.6413 23.3319 14.37 23.0005C15.0983 22.669 15.6881 22.1235 16.0753 21.4232C16.4625 20.7227 16.6108 19.9334 16.5042 19.1402L15.8613 14.3614ZM13.7874 21.7199C12.8605 22.1415 11.7867 21.9107 11.1152 21.1454C10.3171 20.2356 9.34232 19.5124 8.26431 19.0097C7.18729 18.5075 6.00694 18.2256 4.79792 18.1988L4.7635 18.1981C3.75999 18.1617 2.90849 17.4913 2.6386 16.5211C2.36646 15.5402 2.76132 14.5154 3.6214 13.9707L7.69572 11.3913C8.97945 10.5785 10.5677 10.4765 11.9446 11.1185C13.3215 11.7606 14.2645 13.0429 14.4671 14.5489L15.1099 19.3277C15.2455 20.3371 14.714 21.2984 13.7874 21.7199Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M5.22141 9.395C6.04872 9.45268 6.84539 9.13584 7.46485 8.50281C8.05409 7.90035 8.41268 7.07719 8.4743 6.18465C8.53553 5.29253 8.29336 4.42803 7.79259 3.75024C7.26615 3.03826 6.52075 2.61472 5.69438 2.55808C4.03247 2.44276 2.5737 3.88268 2.44231 5.76882C2.3395 7.27089 3.10962 8.60845 4.26712 9.14821C4.56268 9.28603 4.88352 9.37179 5.22141 9.395ZM3.84575 5.86564C3.92319 4.75419 4.70887 3.89987 5.59756 3.96152C5.75809 3.97253 5.91412 4.01357 6.06098 4.08206C6.28767 4.18776 6.49296 4.35885 6.66113 4.58657C6.9637 4.99576 7.10917 5.52908 7.07079 6.08799C7.03208 6.64716 6.81495 7.15525 6.45913 7.51885C6.13302 7.85207 5.72802 8.02001 5.31905 7.99154L5.31823 7.99156C4.43038 7.93071 3.76986 6.9768 3.84575 5.86564Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M11.1413 8.64674C12.903 9.46825 15.0978 8.50366 16.0337 6.4965C16.9699 4.48884 16.2982 2.1872 14.5365 1.36569C12.7749 0.544262 10.5802 1.50926 9.644 3.51692C8.70804 5.52408 9.37973 7.82531 11.1413 8.64674ZM13.942 2.64068C15.0006 3.13431 15.3671 4.59743 14.7587 5.90196C14.1507 7.206 12.7944 7.86538 11.7358 7.37175C10.6772 6.87812 10.3109 5.41549 10.919 4.11146C11.5273 2.80692 12.8834 2.14705 13.942 2.64068Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M16.2437 12.1137L16.2439 12.1137C16.473 12.33 16.7294 12.5019 17.0047 12.6303C18.2895 13.2294 19.9776 12.8782 21.1256 11.6638C21.7865 10.9649 22.1763 10.0817 22.2231 9.1772C22.2722 8.23053 21.9445 7.37386 21.3004 6.76479C20.6561 6.15605 19.7819 5.87691 18.8394 5.97926C17.9389 6.07718 17.0793 6.51599 16.4189 7.21518C15.0251 8.68985 14.9466 10.8873 16.2437 12.1137ZM17.4413 8.18148C17.8726 7.72497 18.423 7.43976 18.9915 7.37795C19.5174 7.32074 19.9943 7.46614 20.3341 7.78723C20.6736 8.1084 20.8455 8.57605 20.8181 9.10434C20.7885 9.67522 20.5348 10.241 20.1032 10.6974C19.2422 11.6083 17.9444 11.785 17.2102 11.0913C16.4768 10.3977 16.5804 9.09242 17.4413 8.18148Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M23.1699 14.8269L23.1696 14.8262C22.3732 13.3622 20.3748 12.9039 18.7144 13.8049C17.0546 14.707 16.3507 16.6321 17.145 18.0959C17.4346 18.6299 17.8843 19.0304 18.4193 19.2798C19.3518 19.7147 20.5439 19.6911 21.6004 19.1182C23.2601 18.2161 23.9642 16.2911 23.1699 14.8269ZM20.9293 17.8818C19.9491 18.4133 18.8064 18.2084 18.3816 17.4249C17.9569 16.6424 18.4076 15.5729 19.3859 15.0411C20.0359 14.6884 20.7581 14.6603 21.2949 14.9107C21.5664 15.0373 21.7906 15.2351 21.9337 15.4984C22.3576 16.2812 21.9069 17.3503 20.9293 17.8818Z",fill:"#FEF9F9"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_41439_1347",children:t.jsx("rect",{width:"24",height:"24",fill:"black",transform:"translate(0.5)"})})})]})})}const Me=s.form`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  @media ${h} {
    max-width: 458px;
    height: calc(100% - 160px);
    margin-top: 40px;
  }
  @media ${b} {
    height: calc(100% - 140px);
  }
`,De=s.div`
  display: flex;
  flex-direction: column;
  max-width: 131px;
  gap: 12px;
  margin-bottom: 91px;
  @media ${h} {
    margin-bottom: 137px;
  }
`,S=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: auto;

  @media ${h} {
    flex-direction: row-reverse;
  }
`;function Ie({onSubmit:e,handleDefinePage:i}){const{personalDetails:a}=g(),n=C({initialValues:he,onSubmit:e,validationSchema:Le});return u.useEffect(()=>{for(let o in a)a[o]!==""&&n.setFieldValue(o,a[o])},[n.setFieldValue,a]),t.jsxs(Q,{onSubmit:n.handleSubmit,children:[t.jsx(m,{formik:n,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:n.handleChange}),t.jsx(m,{formik:n,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(m,{formik:n,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:n.handleChange}),t.jsxs(S,{children:[t.jsxs(F,{type:"submit",children:["Next",t.jsx($,{})]}),t.jsxs(v,{type:"button",onClick:()=>i(-1),children:[t.jsx(w,{}),"Back"]})]})]})}const Te=P().shape({name:p().required("Please enter pet name"),birthday:p().required("Please enter date of birth"),type:p().required("Please enter breed"),title:p().required("Please enter title")});function ze({onSubmit:e,handleDefinePage:i}){const{personalDetails:a}=g(),n=C({initialValues:xe,onSubmit:e,validationSchema:Te});return u.useEffect(()=>{for(let o in a)o in a&&n.setFieldValue(o,a[o])},[]),t.jsxs(Q,{onSubmit:n.handleSubmit,children:[t.jsx(m,{formik:n,placeholder:"Title of add",text:"Title of add",id:"title",name:"title",onChange:n.handleChange}),t.jsx(m,{formik:n,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:n.handleChange}),t.jsx(m,{formik:n,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),t.jsx(m,{formik:n,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:n.handleChange}),t.jsxs(S,{children:[t.jsxs(F,{disabled:n.values.option==="",type:"submit",children:["Next",t.jsx($,{})]}),t.jsxs(v,{type:"button",onClick:()=>i(-1),children:[t.jsx(w,{}),"Back"]})]})]})}function Ee({option:e,handleDefinePage:i}){const a=y(),n=o=>{a(pe(o)),i(1)};return t.jsx(t.Fragment,{children:e===d.yourPet?t.jsx(Ie,{onSubmit:n,handleDefinePage:i}):t.jsx(ze,{onSubmit:n,handleDefinePage:i})})}const Be=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",Oe=s.label`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.lg};
    line-height: 1.4;
  }
`,Ae=s.textarea`
  color: ${e=>e.theme.colors.grey};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.sm};
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${Be};

  @media ${h} {
    height: 108px;
    font-size: ${e=>e.theme.fontSizes.md};
  }
`;function G({formik:e}){const i=y(),{moreInfo:a}=g();u.useEffect(()=>{a.data.comments!==""&&e.setFieldValue("comments",a.data.comments)},[e.setFieldValue,a.data.comments]);const n=l=>{e.handleChange(l),i(ue(l.target.textContent))},o=l=>{e.handleBlur(l)};return t.jsxs(Oe,{htmlFor:"comments",children:["Comments",t.jsx(Ae,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:o,onChange:n,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(M,{text:e.errors.comments}):null]})}const Ve=s.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;function Ne({file:e}){const[i,a]=u.useState(null),n=new FileReader;return n.readAsDataURL(e),n.onload=()=>{a(n.result)},t.jsx("div",{style:{width:"112px",height:"112px"},children:t.jsx(Ve,{src:i,alt:"Preview",width:112})})}const _e=s.div`
  width: 112px;
  height: 112px;
  background-color: ${e=>e.mistake==="true"?"#FBCCCC":"#CCE4FB"};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

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
`,qe=s.label`
  display: flex;
  position: relative;
  flex-direction: ${e=>e.direction};
  align-items: ${e=>e.items};
  justify-content: ${e=>e.justify};
  gap: ${e=>e.gap};
`,Ze=s.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,ke=s.span`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.sm};
  max-width: 80px;
  line-height: 1.35;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.lg};
    max-width: 114px;
    line-height: 1.4;
  }
`;function R({formik:e,text:i,direction:a,items:n,justify:o,gap:l,setFile:r,file:c}){u.useEffect(()=>{c&&e.setFieldValue("photo",c)},[e.setFieldValue,c]);const x=B=>{const L=B.target.files[0];L&&(e.setFieldValue("photo",L),r(L))},f=e.errors.photo&&e.touched.photo;return t.jsxs(t.Fragment,{children:[t.jsxs(qe,{direction:a,items:n,justify:o,gap:l,htmlFor:"photo",children:[t.jsx(ke,{children:i}),t.jsx(_e,{file:e.values.photo,mistake:`${f}`,children:e.values.photo&&t.jsx(Ne,{file:e.values.photo})}),f?t.jsx(M,{text:e.errors.photo}):null]}),t.jsx(Ze,{type:"file",name:"photo",id:"photo",accept:".jpg",onBlur:e.handleFileChange,onChange:x})]})}const Ge=s.label`
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
`,We=s.span`
  color: ${e=>e.checked?"#fff":"#888"};
  font-family: ${e=>e.theme.fonts.main.regular};
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 1.5;
  letter-spacing: 0.64px;
`;function E({icon:e,text:i,id:a,onChange:n,value:o,checked:l,formik:r}){const c=r.errors.gender&&r.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(Ge,{htmlFor:a,checked:l===o,children:[e,t.jsx(We,{checked:l===o,children:i}),c?t.jsx(M,{text:r.errors.gender}):null]}),t.jsx(Re,{type:"radio",name:"gender",id:a,value:o,onChange:n,checked:l===o})]})}const He=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${h} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${b} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`,Ue=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;function Xe({formik:e,handleDefinePage:i,setFile:a,file:n}){const o=y(),{moreInfo:l}=g();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]);const r=c=>{e.handleChange(c),o(Y(c.target.id))};return t.jsxs(He,{onSubmit:e.handleSubmit,children:[t.jsxs(Ue,{children:[t.jsx(E,{formik:e,text:"Female",id:"female",onChange:r,value:d.female,checked:e.values.gender,icon:t.jsx(ee,{stroke:z({value:d.female,formik:e})})}),t.jsx(E,{formik:e,text:"Male",id:"male",onChange:r,value:d.male,checked:e.values.gender,icon:t.jsx(te,{stroke:z({value:d.male,formik:e})})})]}),t.jsx(R,{text:"Load the pet’s image:",setFile:a,file:n,formik:e}),t.jsx(m,{formik:e,text:"Location",id:"location",name:"location",placeholder:"Type of location",value:e.values.location,onChange:e.handleChange}),t.jsx(G,{formik:e}),t.jsxs(S,{children:[t.jsxs(F,{type:"submit",children:["Done",t.jsx($,{})]}),t.jsxs(v,{type:"button",onClick:()=>i(-1),children:[t.jsx(w,{}),"Back"]})]})]})}const Ye=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  @media ${h} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${b} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`,Je=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;function Ke({formik:e,handleDefinePage:i,setFile:a,file:n}){const o=y(),{moreInfo:l}=g();u.useEffect(()=>{l.data.sex!==""&&e.setFieldValue("gender",l.data.sex)},[e.setFieldValue,l.data.sex]);const r=c=>{e.handleChange(c),o(Y(c.target.id))};return t.jsxs(Ye,{onSubmit:e.handleSubmit,children:[t.jsxs(Je,{children:[t.jsx(E,{formik:e,text:"Female",id:"female",onChange:r,value:d.female,checked:e.values.gender,icon:t.jsx(ee,{stroke:z({value:d.female,formik:e})})}),t.jsx(E,{formik:e,text:"Male",id:"male",onChange:r,value:d.male,checked:e.values.gender,icon:t.jsx(te,{stroke:z({value:d.male,formik:e})})})]}),e.errors.gender&&e.touched.gender?t.jsx(M,{text:e.errors.gender}):null,t.jsx(R,{setFile:a,file:n,text:"Load the pet’s image:",formik:e,items:"center",gap:"14px"}),t.jsx(m,{formik:e,text:"Location",id:"location",name:"location",placeholder:"Type of location",value:e.values.location,onChange:e.handleChange}),t.jsx(m,{formik:e,text:"Price",id:"price",name:"price",placeholder:"Type of price",value:e.values.price,onChange:e.handleChange}),t.jsx(G,{formik:e}),t.jsxs(S,{children:[t.jsxs(F,{type:"submit",children:["Done",t.jsx($,{})]}),t.jsxs(v,{type:"button",onClick:()=>i(-1),children:[t.jsx(w,{}),"Back"]})]})]})}const Qe=s.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${h} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${b} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`;function et({formik:e,handleDefinePage:i,setFile:a,file:n}){return t.jsx(t.Fragment,{children:t.jsxs(Qe,{onSubmit:e.handleSubmit,children:[t.jsx(R,{setFile:a,file:n,formik:e,text:"Load the pet’s image:",direction:"row",items:"center",gap:"14px"}),t.jsx(G,{formik:e}),t.jsxs(S,{children:[t.jsxs(F,{disabled:e.values.option==="",type:"submit",children:["Done",t.jsx($,{})]}),t.jsxs(v,{type:"button",onClick:()=>i(-1),children:[t.jsx(w,{}),"Back"]})]})]})})}const tt=P().shape(k),U=20,nt=P().shape({gender:p().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:p().max(U,`Maximum location length - ${U} characters`).required("Location is required"),...k}),X=20,at=/^\d+$/,it=P().shape({gender:p().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:p().max(X,`Maximum location length - ${X} characters`).required("Location is required"),price:p().matches(at,"Price must contain only numbers").required("Price is required"),...k});function ot({option:e,handleDefinePage:i,setFile:a,file:n}){const[o,l]=u.useState(!1),{personalDetails:r}=g(),c=J(),x=y(),f=async(ae,{resetForm:O})=>{const j={...ae,...r},{title:ie,...oe}=j;if(e===d.yourPet){x(ge(oe)),O(),x(A()),x(V()),x(N()),l(!0);return}const{type:se,gender:le,...W}=j;if(e===d.SELL){x(H({noticeType:e,sex:j.gender,petType:j.type,...W})),O(),x(A()),x(V()),x(N()),l(!0);return}const{price:re,...ce}=W;console.log(ie),console.log(se),console.log(le),console.log(re),x(H({noticeType:e,sex:j.gender,petType:j.type,...ce})),x(A()),x(V()),x(N()),l(!0),O()},B=C({initialValues:{photo:null,comments:""},onSubmit:f,validationSchema:tt}),L=C({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:f,validationSchema:it}),ne=C({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:f,validationSchema:nt});if(o)return t.jsx(me,{to:c.state&&c.state.from&&c.state.from.pathname||"/notices"});switch(e){case d.yourPet:return t.jsx(et,{setFile:a,file:n,formik:B,handleDefinePage:i});case d.SELL:return t.jsx(Ke,{setFile:a,file:n,formik:L,handleDefinePage:i});default:return t.jsx(Xe,{setFile:a,file:n,formik:ne,handleDefinePage:i})}}const st=s.label``,lt=s.span`
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
`,rt=s.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function T({value:e,text:i,onChange:a,checked:n}){return t.jsxs(t.Fragment,{children:[t.jsx(st,{htmlFor:e,children:t.jsx(lt,{checked:n,children:i})}),t.jsx(rt,{id:e,name:"option",type:"radio",onChange:a,value:e,checked:n})]})}function ct({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(T,{onChange:e.handleChange,text:"your pet",value:d.yourPet,checked:e.values.option===d.yourPet}),t.jsx(T,{onChange:e.handleChange,text:"sell",value:d.SELL,checked:e.values.option===d.SELL}),t.jsx(T,{onChange:e.handleChange,text:"lost/found",value:d.LOST_FOUND,checked:e.values.option===d.LOST_FOUND}),t.jsx(T,{onChange:e.handleChange,text:"in good hands",value:d.IN_GOOD_HANDS,checked:e.values.option===d.IN_GOOD_HANDS})]})}const dt={option:""};function ht({handleDefinePage:e,currentPage:i}){const a=y(),n=J(),{option:o}=g(),r=C({initialValues:dt,onSubmit:c=>{i===0&&a(fe(c.option)),e(1)}});return u.useEffect(()=>{o!==""&&r.setFieldValue("option",o)},[r.setFieldValue,o]),t.jsxs(Me,{onSubmit:r.handleSubmit,children:[t.jsx(De,{children:t.jsx(ct,{formik:r})}),t.jsxs(S,{children:[t.jsxs(F,{disabled:r.values.option==="",type:"submit",children:["Next",t.jsx($,{})]}),t.jsx(Pe,{to:n.state&&n.state.from&&n.state.from.pathname||"/notices",children:t.jsxs(v,{type:"button",children:[t.jsx(w,{}),"Cancel"]})})]})]})}function xt({currentPage:e,setCurrentPage:i,setFile:a,file:n}){const{option:o}=g(),l=r=>{if(r===-1&&e===0){console.log("start");return}i(c=>c+r)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(ht,{currentPage:e,handleDefinePage:l}),e===1&&t.jsx(Ee,{option:o,handleDefinePage:l}),e===2&&t.jsx(ot,{setFile:a,file:n,option:o,handleDefinePage:l})]})}const pt=s.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 20px;
  padding: 0 20px;

  @media ${h} {
    margin-top: 60px;
  }

  @media ${b} {
    margin-top: 40px;
  }
`,ut=s.div`
  width: 100%;
  height: 90%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${h} {
    max-width: 458px;
    padding: 20px 32px;
  }
`,mt=s.h2`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.lg};
  line-height: 1.35;
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${h} {
    font-size: ${e=>e.theme.fontSizes.xxl};
    margin-left: 0px;
  }
`;function Ct(){const[e,i]=u.useState(0),[a,n]=u.useState(null);return t.jsxs(t.Fragment,{children:[t.jsx(je,{}),t.jsx(pt,{children:t.jsxs(ut,{children:[t.jsx(mt,{children:"Add pet"}),t.jsx(be,{currentPage:e}),t.jsx(xt,{currentPage:e,setCurrentPage:i,setFile:n,file:a})]})})]})}export{Ct as default};
