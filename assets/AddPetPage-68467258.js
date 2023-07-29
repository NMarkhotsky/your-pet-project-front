import{s as i,b as h,j as e,d as v,e as d,x as m,y as Q,r as j,z as ee,u as E,A as te,D as ne,E as B,F as ae,G as q,H as se,a as oe}from"./index-f7592796.js";import{u as g}from"./formik.esm-48ed994a.js";const l={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost/found",IN_GOOD_HANDS:"in-good-hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},P=({currentPage:t,type:a,num:s})=>{switch(a){case"text":if(t===s)return"current";if(t>s)return"select";if(t<s)return"ordinary";break;case"bar":if(t===s)return"current";if(t>s)return"select";if(t<s)return"opacity-ordinary";break}},$={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},G=t=>{switch(t.variant){case"current":return $.current;case"select":return $.select;case"ordinary":return $.ordinary;case"opacity-ordinary":return $.opacityOrdinary;default:return"tomato"}},S=({value:t,formik:a})=>a.values.gender===t?"#fff":"#888888",ie=i.ul`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media ${h} {
    margin-bottom: 40px;
  }
`,T=i.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,O=i.p`
  white-space: nowrap;
  color: ${G};
  font-size: 10px;
  font-weight: 500;
  line-height: calc(14/10);

  @media ${h} {
    font-size: 16px;
    line-height: calc(26.5 / 16);
  }
`,A=i.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${G};
`;function le({currentPage:t}){return e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsxs(T,{children:[e.jsx(O,{variant:t===0?"current":"select",children:"Choose option"}),e.jsx(A,{variant:t===0?"current":"select"})]}),e.jsxs(T,{children:[e.jsx(O,{variant:P({currentPage:t,type:"text",num:1}),children:"Personal details"}),e.jsx(A,{variant:P({currentPage:t,type:"bar",num:1})})]}),e.jsxs(T,{children:[e.jsx(O,{variant:P({currentPage:t,type:"text",num:2}),children:"More info"}),e.jsx(A,{variant:P({currentPage:t,type:"bar",num:2})})]})]})})}const re=i.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function w({text:t}){return e.jsx(re,{children:t})}const ce="#F43F5E",de="#54ADFF",he=({mistake:t})=>t==="true"?ce:de,xe=i.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(26.5 / 14);
  position: relative;

  @media ${h} {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }
`,pe=i.input`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(24 / 16);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${he};
  padding: 12px 16px;
  max-height: 40px;

  @media ${h} {
    max-height: 48px;
  }
`;function x({text:t,id:a,name:s,onChange:n,formik:o,date:r,placeholder:c}){const p=!!o.errors[a]&&o.touched[a];return e.jsx(e.Fragment,{children:e.jsxs(xe,{htmlFor:a,children:[e.jsx("span",{children:t}),e.jsx(pe,{mistake:`${p}`,name:s,type:r?"date":"text",id:a,value:o.values[a],onChange:n,onBlur:o.handleBlur,placeholder:c||""}),o.errors[a]&&o.touched[a]?e.jsx(w,{text:o.errors[a]}):null]})})}const ue=v().shape({name:d().required("Please enter pet name"),birthday:d().required("Please enter date of birth"),type:d().required("Please enter breed")}),R=i.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 120px);
  box-sizing: border-box;

  @media ${h} {
    gap: 20px;
    height: calc(100% - 140px);
  }
`,C=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 0px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(20/16);
  letter-spacing: 0.64px;
  background-color: #54ADFF;
  border-radius: 40px;
  border: none;
  transition: all 300ms ease;

  &:disabled {
    cursor: no-drop;
    background-color: #CCE4FB;
  }

  @media ${h} {
    flex-basis: 66%;
  }
`,f=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 12px;
  color: #54ADFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.64px;

  @media ${h} {
    flex-basis: 33%;
  }
`;function b(){return e.jsx(e.Fragment,{children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",stroke:"#54ADFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function W({stroke:t}){return e.jsx(e.Fragment,{children:e.jsx("svg",{width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 11L6 19M3 16L9 16",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function H({stroke:t}){return e.jsx(e.Fragment,{children:e.jsx("svg",{width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 9.5C3.23858 9.5 1 11.7386 1 14.5C1 17.2614 3.23858 19.5 6 19.5C8.76142 19.5 11 17.2614 11 14.5C11 11.7386 8.76142 9.5 6 9.5ZM6 9.5V1.5M6 1.5L10 5.5M6 1.5L2 5.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function y(){return e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_41439_1347)",children:[e.jsx("path",{d:"M15.8613 14.3614C15.5946 12.378 14.3528 10.689 12.5393 9.84335C10.7259 8.99778 8.63364 9.13211 6.94302 10.2027L2.86887 12.7822C2.19287 13.2102 1.68351 13.8312 1.39581 14.5777C1.10804 15.3244 1.06917 16.1265 1.28316 16.8976C1.49755 17.6688 1.94487 18.336 2.57661 18.8273C3.20843 19.3185 3.96541 19.5877 4.76566 19.6055L4.81795 19.6064C6.82515 19.6654 8.73238 20.5626 10.0576 22.0732C10.3995 22.4627 10.8104 22.7707 11.2701 22.985C11.52 23.1016 11.7847 23.1904 12.0602 23.2498C12.8426 23.4181 13.6413 23.3319 14.37 23.0005C15.0983 22.669 15.6881 22.1235 16.0753 21.4232C16.4625 20.7227 16.6108 19.9334 16.5042 19.1402L15.8613 14.3614ZM13.7874 21.7199C12.8605 22.1415 11.7867 21.9107 11.1152 21.1454C10.3171 20.2356 9.34232 19.5124 8.26431 19.0097C7.18729 18.5075 6.00694 18.2256 4.79792 18.1988L4.7635 18.1981C3.75999 18.1617 2.90849 17.4913 2.6386 16.5211C2.36646 15.5402 2.76132 14.5154 3.6214 13.9707L7.69572 11.3913C8.97945 10.5785 10.5677 10.4765 11.9446 11.1185C13.3215 11.7606 14.2645 13.0429 14.4671 14.5489L15.1099 19.3277C15.2455 20.3371 14.714 21.2984 13.7874 21.7199Z",fill:"#FEF9F9"}),e.jsx("path",{d:"M5.22141 9.395C6.04872 9.45268 6.84539 9.13584 7.46485 8.50281C8.05409 7.90035 8.41268 7.07719 8.4743 6.18465C8.53553 5.29253 8.29336 4.42803 7.79259 3.75024C7.26615 3.03826 6.52075 2.61472 5.69438 2.55808C4.03247 2.44276 2.5737 3.88268 2.44231 5.76882C2.3395 7.27089 3.10962 8.60845 4.26712 9.14821C4.56268 9.28603 4.88352 9.37179 5.22141 9.395ZM3.84575 5.86564C3.92319 4.75419 4.70887 3.89987 5.59756 3.96152C5.75809 3.97253 5.91412 4.01357 6.06098 4.08206C6.28767 4.18776 6.49296 4.35885 6.66113 4.58657C6.9637 4.99576 7.10917 5.52908 7.07079 6.08799C7.03208 6.64716 6.81495 7.15525 6.45913 7.51885C6.13302 7.85207 5.72802 8.02001 5.31905 7.99154L5.31823 7.99156C4.43038 7.93071 3.76986 6.9768 3.84575 5.86564Z",fill:"#FEF9F9"}),e.jsx("path",{d:"M11.1413 8.64674C12.903 9.46825 15.0978 8.50366 16.0337 6.4965C16.9699 4.48884 16.2982 2.1872 14.5365 1.36569C12.7749 0.544262 10.5802 1.50926 9.644 3.51692C8.70804 5.52408 9.37973 7.82531 11.1413 8.64674ZM13.942 2.64068C15.0006 3.13431 15.3671 4.59743 14.7587 5.90196C14.1507 7.206 12.7944 7.86538 11.7358 7.37175C10.6772 6.87812 10.3109 5.41549 10.919 4.11146C11.5273 2.80692 12.8834 2.14705 13.942 2.64068Z",fill:"#FEF9F9"}),e.jsx("path",{d:"M16.2437 12.1137L16.2439 12.1137C16.473 12.33 16.7294 12.5019 17.0047 12.6303C18.2895 13.2294 19.9776 12.8782 21.1256 11.6638C21.7865 10.9649 22.1763 10.0817 22.2231 9.1772C22.2722 8.23053 21.9445 7.37386 21.3004 6.76479C20.6561 6.15605 19.7819 5.87691 18.8394 5.97926C17.9389 6.07718 17.0793 6.51599 16.4189 7.21518C15.0251 8.68985 14.9466 10.8873 16.2437 12.1137ZM17.4413 8.18148C17.8726 7.72497 18.423 7.43976 18.9915 7.37795C19.5174 7.32074 19.9943 7.46614 20.3341 7.78723C20.6736 8.1084 20.8455 8.57605 20.8181 9.10434C20.7885 9.67522 20.5348 10.241 20.1032 10.6974C19.2422 11.6083 17.9444 11.785 17.2102 11.0913C16.4768 10.3977 16.5804 9.09242 17.4413 8.18148Z",fill:"#FEF9F9"}),e.jsx("path",{d:"M23.1699 14.8269L23.1696 14.8262C22.3732 13.3622 20.3748 12.9039 18.7144 13.8049C17.0546 14.707 16.3507 16.6321 17.145 18.0959C17.4346 18.6299 17.8843 19.0304 18.4193 19.2798C19.3518 19.7147 20.5439 19.6911 21.6004 19.1182C23.2601 18.2161 23.9642 16.2911 23.1699 14.8269ZM20.9293 17.8818C19.9491 18.4133 18.8064 18.2084 18.3816 17.4249C17.9569 16.6424 18.4076 15.5729 19.3859 15.0411C20.0359 14.6884 20.7581 14.6603 21.2949 14.9107C21.5664 15.0373 21.7906 15.2351 21.9337 15.4984C22.3576 16.2812 21.9069 17.3503 20.9293 17.8818Z",fill:"#FEF9F9"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_41439_1347",children:e.jsx("rect",{width:"24",height:"24",fill:"black",transform:"translate(0.5)"})})})]})})}const ge=i.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${h} {
    height: calc(100% - 140px);
  }
`,me=i.div`
  display: flex;
  flex-direction: column;
  max-width: 140px;
  gap: 12px;
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;

  @media ${h} {
    flex-direction: row-reverse;
  }
`;function je({onSubmit:t,handleDefinePage:a}){const{personalDetails:s}=m(),n=g({initialValues:Q,onSubmit:t,validationSchema:ue});return j.useEffect(()=>{for(let o in s)s[o]!==""&&n.setFieldValue(o,s[o])},[n.setFieldValue,s]),e.jsxs(R,{onSubmit:n.handleSubmit,children:[e.jsx(x,{formik:n,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:n.handleChange}),e.jsx(x,{formik:n,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),e.jsx(x,{formik:n,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:n.handleChange}),e.jsxs(F,{children:[e.jsxs(C,{type:"submit",children:["Next",e.jsx(y,{})]}),e.jsxs(f,{type:"button",onClick:()=>a(-1),children:[e.jsx(b,{}),"Cancel"]})]})]})}const Ce=v().shape({name:d().required("Please enter pet name"),birthday:d().required("Please enter date of birth"),type:d().required("Please enter breed"),title:d().required("Please enter title")});function fe({onSubmit:t,handleDefinePage:a}){const{personalDetails:s}=m(),n=g({initialValues:ee,onSubmit:t,validationSchema:Ce});return j.useEffect(()=>{for(let o in s)o in s&&n.setFieldValue(o,s[o])},[]),e.jsxs(R,{onSubmit:n.handleSubmit,children:[e.jsx(x,{formik:n,placeholder:"Title of add",text:"Title of add",id:"title",name:"title",onChange:n.handleChange}),e.jsx(x,{formik:n,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",onChange:n.handleChange}),e.jsx(x,{formik:n,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,name:"birthday",onChange:n.handleChange}),e.jsx(x,{formik:n,placeholder:"Type of pet",text:"Type",id:"type",name:"type",onChange:n.handleChange}),e.jsxs(F,{children:[e.jsxs(C,{disabled:n.values.option==="",type:"submit",children:["Next",e.jsx(y,{})]}),e.jsxs(f,{type:"button",onClick:()=>a(-1),children:[e.jsx(b,{}),"Cancel"]})]})]})}function be({option:t,handleDefinePage:a}){const s=E(),n=o=>{s(te(o)),a(1)};return e.jsx(e.Fragment,{children:t===l.yourPet?e.jsx(je,{onSubmit:n,handleDefinePage:a}):e.jsx(fe,{onSubmit:n,handleDefinePage:a})})}const ye=({mistake:t})=>t==="true"?"#F43F5E":"#54ADFF",Fe=i.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
`,ve=i.textarea`
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${ye};

  @media ${h} {
    height: 108px;
  }
`;function N({formik:t}){const a=E(),{moreInfo:s}=m();j.useEffect(()=>{s.data.comments!==""&&t.setFieldValue("comments",s.data.comments)},[t.setFieldValue,s.data.comments]);const n=r=>{t.handleChange(r),a(ne(r.target.textContent))},o=r=>{t.handleBlur(r)};return e.jsxs(Fe,{htmlFor:"comments",children:["Comments",e.jsx(ve,{mistake:`${t.errors.comments&&t.touched.comments}`,name:"comments",id:"comments",onBlur:o,onChange:n,value:t.values.comments}),t.errors.comments&&t.touched.comments?e.jsx(w,{text:t.errors.comments}):null]})}const we=i.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;function Le({file:t}){const[a,s]=j.useState(null),n=new FileReader;return n.readAsDataURL(t),n.onload=()=>{s(n.result)},e.jsx("div",{style:{width:"112px",height:"112px"},children:e.jsx(we,{src:a,alt:"Preview",width:112})})}const Pe=i.div`
  width: 112px;
  height: 112px;
  background-color: ${t=>t.mistake==="true"?"#FBCCCC":"#CCE4FB"};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  &:hover {
    background-color: ${t=>t.mistake==="true"?"#ff9898":"#98ccff"};
  }

  &::before,
  &::after {
    content: "";
    position: ${t=>t.file?"":"absolute"};
    top: 50%;
    left: 50%;
    border-radius: 100px;
    background-color: ${t=>t.mistake==="true"?"#ff5454":"#54ADFF"};
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
`,$e=i.label`
  display: flex;
  position: relative;
  flex-direction: ${t=>t.direction};
  align-items: ${t=>t.items};
  justify-content: ${t=>t.justify};
  gap: ${t=>t.gap};
`,Me=i.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,Se=i.span`
  max-width: 80px;
`;function _({formik:t,text:a,direction:s,items:n,justify:o,gap:r}){const c=I=>{const L=I.target.files[0];L&&t.setFieldValue("photo",L)},p=t.errors.photo&&t.touched.photo;return e.jsxs(e.Fragment,{children:[e.jsxs($e,{direction:s,items:n,justify:o,gap:r,htmlFor:"photo",children:[e.jsx(Se,{children:a}),e.jsx(Pe,{file:t.values.photo,mistake:`${p}`,children:t.values.photo&&e.jsx(Le,{file:t.values.photo})}),p?e.jsx(w,{text:t.errors.photo}):null]}),e.jsx(Me,{type:"file",name:"photo",id:"photo",accept:".jpg",onBlur:t.handleFileChange,onChange:c})]})}const De=i.label`
  display: flex;
  align-items: center;
  gap: 12px;
`,Ee=i.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function D({icon:t,text:a,id:s,onChange:n,value:o,checked:r,formik:c}){const p=c.errors.gender&&c.touched.gender;return e.jsxs(e.Fragment,{children:[e.jsxs(De,{htmlFor:s,children:[t,e.jsx("span",{children:a}),p?e.jsx(w,{text:c.errors.gender}):null]}),e.jsx(Ee,{type:"radio",name:"gender",id:s,value:o,onChange:n,checked:r===o})]})}function Ie({formik:t,handleDefinePage:a}){return e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsx(D,{formik:t,text:"Female",id:"female",onChange:t.handleChange,value:l.female,checked:t.values.gender,icon:e.jsx(W,{stroke:S({value:l.female,formik:t})})}),e.jsx(D,{formik:t,text:"Male",id:"male",onChange:t.handleChange,value:l.male,checked:t.values.gender,icon:e.jsx(H,{stroke:S({value:l.male,formik:t})})}),e.jsx(_,{formik:t}),e.jsx(x,{formik:t,text:"Location",id:"location",name:"location",value:t.values.location,onChange:t.handleChange}),e.jsx(N,{formik:t}),e.jsxs(F,{children:[e.jsxs(C,{type:"submit",children:["Done",e.jsx(y,{})]}),e.jsxs(f,{type:"button",onClick:()=>a(-1),children:[e.jsx(b,{}),"Cancel"]})]})]})}const Te=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  position: relative;
`;function Oe({formik:t,handleDefinePage:a}){return e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsxs(Te,{children:[e.jsx(D,{formik:t,text:"Female",id:"female",onChange:t.handleChange,value:l.female,checked:t.values.gender,icon:e.jsx(W,{stroke:S({value:l.female,formik:t})})}),e.jsx(D,{formik:t,text:"Male",id:"male",onChange:t.handleChange,value:l.male,checked:t.values.gender,icon:e.jsx(H,{stroke:S({value:l.male,formik:t})})}),t.errors.gender&&t.touched.gender?e.jsx(w,{text:t.errors.gender}):null]}),e.jsx(_,{text:"Load the pet’s image:",formik:t,items:"center",gap:"14px"}),e.jsx(x,{formik:t,text:"Location",id:"location",name:"location",value:t.values.location,onChange:t.handleChange}),e.jsx(x,{formik:t,text:"Price",id:"price",name:"price",value:t.values.price,onChange:t.handleChange}),e.jsx(N,{formik:t}),e.jsxs(F,{children:[e.jsxs(C,{type:"submit",children:["Done",e.jsx(y,{})]}),e.jsxs(f,{type:"button",onClick:()=>a(-1),children:[e.jsx(b,{}),"Cancel"]})]})]})}const Ae=i.form`
  height: calc(100% - 140px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;function Be({formik:t,handleDefinePage:a}){return e.jsx(e.Fragment,{children:e.jsxs(Ae,{onSubmit:t.handleSubmit,children:[e.jsx(_,{formik:t,text:"Load the pet’s image:",direction:"row",items:"center",gap:"14px"}),e.jsx(N,{formik:t}),e.jsxs(F,{children:[e.jsxs(C,{disabled:t.values.option==="",type:"submit",children:["Done",e.jsx(y,{})]}),e.jsxs(f,{type:"button",onClick:()=>a(-1),children:[e.jsx(b,{}),"Cancel"]})]})]})})}const Ne=v().shape(B),z=20,_e=v().shape({gender:d().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:d().max(z,`Maximum location length - ${z} characters`).required("Location is required"),...B}),Z=20,Ve=/^\d+$/,qe=v().shape({gender:d().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:d().max(Z,`Maximum location length - ${Z} characters`).required("Location is required"),price:d().matches(Ve,"Price must contain only numbers").required("Price is required"),...B});function ze({option:t,handleDefinePage:a}){const{personalDetails:s}=m(),n=E(),o=async(I,{resetForm:L})=>{const u={...I,...s},{title:U,...Y}=u;if(t===l.yourPet){n(ae(Y)),L();return}const{type:X,gender:k,...V}=u;if(t===l.SELL){n(q({noticeType:t,sex:u.gender,petType:u.type,...V}));return}const{price:J,...K}=V;console.log(U),console.log(X),console.log(k),console.log(J),n(q({noticeType:t,sex:u.gender,petType:u.type,...K}))},r=g({initialValues:{photo:null,comments:""},onSubmit:o,validationSchema:Ne}),c=g({initialValues:{gender:"",photo:null,location:"",price:"",comments:""},onSubmit:o,validationSchema:qe}),p=g({initialValues:{gender:"",photo:null,location:"",comments:""},onSubmit:o,validationSchema:_e});switch(t){case l.yourPet:return e.jsx(Be,{formik:r,handleDefinePage:a});case l.SELL:return e.jsx(Oe,{formik:c,handleDefinePage:a});default:return e.jsx(Ie,{formik:p,handleDefinePage:a})}}const Ze=i.label``,Ge=i.span`
  display: inline-block;
  color: ${t=>t.checked?"#fff":"#54ADFF"};
  background-color: ${t=>t.checked?"#54ADFF":"#CCE4FB"};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 40px;
  transition: all 300ms ease;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.56px;
`,Re=i.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function M({value:t,text:a,onChange:s,checked:n}){return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{htmlFor:t,children:e.jsx(Ge,{checked:n,children:a})}),e.jsx(Re,{id:t,name:"option",type:"radio",onChange:s,value:t,checked:n})]})}function We({formik:t}){return e.jsxs(e.Fragment,{children:[e.jsx(M,{onChange:t.handleChange,text:"your pet",value:l.yourPet,checked:t.values.option===l.yourPet}),e.jsx(M,{onChange:t.handleChange,text:"sell",value:l.SELL,checked:t.values.option===l.SELL}),e.jsx(M,{onChange:t.handleChange,text:"lost/found",value:l.LOST_FOUND,checked:t.values.option===l.LOST_FOUND}),e.jsx(M,{onChange:t.handleChange,text:"in good hands",value:l.IN_GOOD_HANDS,checked:t.values.option===l.IN_GOOD_HANDS})]})}const He={option:""};function Ue({handleDefinePage:t,currentPage:a}){const s=E(),{option:n}=m(),r=g({initialValues:He,onSubmit:c=>{a===0&&s(se(c.option)),t(1)}});return j.useEffect(()=>{n!==""&&r.setFieldValue("option",n)},[r.setFieldValue,n]),e.jsxs(ge,{onSubmit:r.handleSubmit,children:[e.jsx(me,{children:e.jsx(We,{formik:r})}),e.jsxs(F,{children:[e.jsxs(C,{disabled:r.values.option==="",type:"submit",children:["Next",e.jsx(y,{})]}),e.jsxs(f,{type:"button",children:[e.jsx(b,{}),"Cancel"]})]})]})}function Ye({currentPage:t,setCurrentPage:a}){const{option:s}=m(),n=o=>{if(o===-1&&t===0){console.log("start");return}a(r=>r+o)};return e.jsxs(e.Fragment,{children:[t===0&&e.jsx(Ue,{currentPage:t,handleDefinePage:n}),t===1&&e.jsx(be,{option:s,handleDefinePage:n}),t===2&&e.jsx(ze,{option:s,handleDefinePage:n})]})}const Xe=i.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #FEF9F9;
  margin-top: 20px;
  padding: 0 20px;
`,ke=i.div`
  width: 100%;
  height: 80%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${h} {
    padding: 20px 32px;
    height: 90%;
  }

  @media ${oe} {
    max-width: 500px;
  }
`,Je=i.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: calc(24/20);
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${h} {
    margin-left: 0px;
  }
`;function et(){const[t,a]=j.useState(0);return e.jsx(e.Fragment,{children:e.jsx(Xe,{children:e.jsxs(ke,{children:[e.jsx(Je,{children:"Add pet"}),e.jsx(le,{currentPage:t}),e.jsx(Ye,{currentPage:t,setCurrentPage:a})]})})})}export{et as default};
