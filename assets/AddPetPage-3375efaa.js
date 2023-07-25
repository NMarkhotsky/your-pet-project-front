import{s as o,b as c,j as t,c as A,m as H,n as B,o as Z,u as _,a as Q,r as ee}from"./index-abc3c24c.js";import{d as te,a as d,c as y}from"./index.esm-47e0bf46.js";import{u as g}from"./formik.esm-77a3ab17.js";const v=({currentPage:e,type:n,num:a})=>{switch(n){case"text":if(e===a)return"current";if(e>a)return"select";if(e<a)return"ordinary";break;case"bar":if(e===a)return"current";if(e>a)return"select";if(e<a)return"opacity-ordinary";break}},w={current:"#54ADFF",select:"#00C3AD",ordinary:"#888",opacityOrdinary:"#CCE4FB"},U=e=>{switch(e.variant){case"current":return w.current;case"select":return w.select;case"ordinary":return w.ordinary;case"opacity-ordinary":return w.opacityOrdinary;default:return"tomato"}},P=({value:e,formik:n})=>n.values.gender===e?"#fff":"#888888",ne=o.ul`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media ${c} {
    margin-bottom: 40px;
  }
`,I=o.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,T=o.p`
  white-space: nowrap;
  color: ${U};
  font-size: 10px;
  font-weight: 500;
  line-height: calc(14/10);

  @media ${c} {
    font-size: 16px;
    line-height: calc(26.5 / 16);
  }
`,O=o.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${U};
`;function ae({currentPage:e}){return t.jsx(t.Fragment,{children:t.jsxs(ne,{children:[t.jsxs(I,{children:[t.jsx(T,{variant:e===0?"current":"select",children:"Choose option"}),t.jsx(O,{variant:e===0?"current":"select"})]}),t.jsxs(I,{children:[t.jsx(T,{variant:v({currentPage:e,type:"text",num:1}),children:"Personal details"}),t.jsx(O,{variant:v({currentPage:e,type:"bar",num:1})})]}),t.jsxs(I,{children:[t.jsx(T,{variant:v({currentPage:e,type:"text",num:2}),children:"More info"}),t.jsx(O,{variant:v({currentPage:e,type:"bar",num:2})})]})]})})}A.defaults.baseURL="";const S=H("addPet",async(e,n)=>{try{return(await A.post("",e)).data}catch(a){return console.log(a),n.rejectWithValue(a)}}),M=H("addNotice",async(e,n)=>{try{return(await A.post("",e)).data}catch(a){return console.log(a),n.rejectWithValue(a)}});B({name:"moreInfoSlice",initialState:{data:null,isLoad:!1,error:null},extraReducers:e=>{e.addCase(S.pending,n=>{n.isLoad=!0}).addCase(S.fulfilled,(n,a)=>{n.isLoad=!1,n.error=null,n.data=a.payload}).addCase(S.rejected,(n,a)=>{n.isLoad=!1,n.error=a.payload}).addCase(M.pending,n=>{n.isLoad=!0}).addCase(M.fulfilled,(n,a)=>{n.isLoad=!1,n.error=null,n.data=a.payload}).addCase(M.rejected,(n,a)=>{n.isLoad=!1,n.error=a.payload})}});const oe=B({name:"option",initialState:{option:""},reducers:{setOption(e,n){e.option=n.payload}}}),{setOption:se}=oe.actions,V=3,R=70,N={photo:te().required("Pet photo is required").test("fileFormat","Only JPG files are allowed",e=>e?e.type==="image/jpeg":!1).test("fileSize",`File size should not exceed ${V} MB`,e=>e?e.size<=V*1024*1024:!1),comments:d().max(R,`Maximum message length - ${R} characters`).required("Comments are required")},q={name:"",birthday:"2020-07-31",type:""},ie={...q,title:""},i={yourPet:"yourPet",SELL:"sell",LOST_FOUND:"lost/found",IN_GOOD_HANDS:"in good hands",name:"name",birthday:"birthday",type:"type",female:"female",male:"male"},re=B({name:"personal-details",initialState:q,reducers:{setPersonalDetails(e,n){e.title=n.payload.title,e.name=n.payload.name,e.birthday=n.payload.birthday,e.type=n.payload.type}}}),{setPersonalDetails:le}=re.actions,de=e=>e.option.option,ce=e=>e.personalDetails,X=()=>({option:Z(de),personalDetails:Z(ce)}),he=o.div`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #F43F5E;
`;function D({text:e}){return t.jsx(he,{children:e})}const pe="#F43F5E",xe="#54ADFF",ue=({mistake:e})=>e==="true"?pe:xe,ge=o.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(26.5 / 14);
  position: relative;

  @media ${c} {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }
`,me=o.input`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(24 / 16);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${ue};
  padding: 12px 16px;
  max-height: 40px;

  @media ${c} {
    max-height: 48px;
  }
`;function h({text:e,id:n,value:a,name:s,onChange:r,formik:l,date:p,placeholder:x}){const u=!!l.errors[n]&&l.touched[n];return t.jsx(t.Fragment,{children:t.jsxs(ge,{htmlFor:n,children:[t.jsx("span",{children:e}),t.jsx(me,{mistake:`${u}`,name:s,type:p?"date":"text",id:n,value:a,onChange:r,onBlur:l.handleBlur,placeholder:x||""}),l.errors[n]&&l.touched[n]?t.jsx(D,{text:l.errors[n]}):null]})})}const Ce=y().shape({name:d().required("Please enter pat name"),birthday:d().required("Please enter date of birth"),type:d().required("Please enter breed")}),Y=o.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 120px);
  box-sizing: border-box;

  @media ${c} {
    gap: 20px;
    height: calc(100% - 140px);
  }
`,m=o.button`
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

  @media ${c} {
    flex-basis: 66%;
  }
`,C=o.button`
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

  @media ${c} {
    flex-basis: 33%;
  }
`;function j(){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",stroke:"#54ADFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function J({stroke:e}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 11L6 19M3 16L9 16",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function K({stroke:e}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 9.5C3.23858 9.5 1 11.7386 1 14.5C1 17.2614 3.23858 19.5 6 19.5C8.76142 19.5 11 17.2614 11 14.5C11 11.7386 8.76142 9.5 6 9.5ZM6 9.5V1.5M6 1.5L10 5.5M6 1.5L2 5.5",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function f(){return t.jsx(t.Fragment,{children:t.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{clipPath:"url(#clip0_41439_1347)",children:[t.jsx("path",{d:"M15.8613 14.3614C15.5946 12.378 14.3528 10.689 12.5393 9.84335C10.7259 8.99778 8.63364 9.13211 6.94302 10.2027L2.86887 12.7822C2.19287 13.2102 1.68351 13.8312 1.39581 14.5777C1.10804 15.3244 1.06917 16.1265 1.28316 16.8976C1.49755 17.6688 1.94487 18.336 2.57661 18.8273C3.20843 19.3185 3.96541 19.5877 4.76566 19.6055L4.81795 19.6064C6.82515 19.6654 8.73238 20.5626 10.0576 22.0732C10.3995 22.4627 10.8104 22.7707 11.2701 22.985C11.52 23.1016 11.7847 23.1904 12.0602 23.2498C12.8426 23.4181 13.6413 23.3319 14.37 23.0005C15.0983 22.669 15.6881 22.1235 16.0753 21.4232C16.4625 20.7227 16.6108 19.9334 16.5042 19.1402L15.8613 14.3614ZM13.7874 21.7199C12.8605 22.1415 11.7867 21.9107 11.1152 21.1454C10.3171 20.2356 9.34232 19.5124 8.26431 19.0097C7.18729 18.5075 6.00694 18.2256 4.79792 18.1988L4.7635 18.1981C3.75999 18.1617 2.90849 17.4913 2.6386 16.5211C2.36646 15.5402 2.76132 14.5154 3.6214 13.9707L7.69572 11.3913C8.97945 10.5785 10.5677 10.4765 11.9446 11.1185C13.3215 11.7606 14.2645 13.0429 14.4671 14.5489L15.1099 19.3277C15.2455 20.3371 14.714 21.2984 13.7874 21.7199Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M5.22141 9.395C6.04872 9.45268 6.84539 9.13584 7.46485 8.50281C8.05409 7.90035 8.41268 7.07719 8.4743 6.18465C8.53553 5.29253 8.29336 4.42803 7.79259 3.75024C7.26615 3.03826 6.52075 2.61472 5.69438 2.55808C4.03247 2.44276 2.5737 3.88268 2.44231 5.76882C2.3395 7.27089 3.10962 8.60845 4.26712 9.14821C4.56268 9.28603 4.88352 9.37179 5.22141 9.395ZM3.84575 5.86564C3.92319 4.75419 4.70887 3.89987 5.59756 3.96152C5.75809 3.97253 5.91412 4.01357 6.06098 4.08206C6.28767 4.18776 6.49296 4.35885 6.66113 4.58657C6.9637 4.99576 7.10917 5.52908 7.07079 6.08799C7.03208 6.64716 6.81495 7.15525 6.45913 7.51885C6.13302 7.85207 5.72802 8.02001 5.31905 7.99154L5.31823 7.99156C4.43038 7.93071 3.76986 6.9768 3.84575 5.86564Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M11.1413 8.64674C12.903 9.46825 15.0978 8.50366 16.0337 6.4965C16.9699 4.48884 16.2982 2.1872 14.5365 1.36569C12.7749 0.544262 10.5802 1.50926 9.644 3.51692C8.70804 5.52408 9.37973 7.82531 11.1413 8.64674ZM13.942 2.64068C15.0006 3.13431 15.3671 4.59743 14.7587 5.90196C14.1507 7.206 12.7944 7.86538 11.7358 7.37175C10.6772 6.87812 10.3109 5.41549 10.919 4.11146C11.5273 2.80692 12.8834 2.14705 13.942 2.64068Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M16.2437 12.1137L16.2439 12.1137C16.473 12.33 16.7294 12.5019 17.0047 12.6303C18.2895 13.2294 19.9776 12.8782 21.1256 11.6638C21.7865 10.9649 22.1763 10.0817 22.2231 9.1772C22.2722 8.23053 21.9445 7.37386 21.3004 6.76479C20.6561 6.15605 19.7819 5.87691 18.8394 5.97926C17.9389 6.07718 17.0793 6.51599 16.4189 7.21518C15.0251 8.68985 14.9466 10.8873 16.2437 12.1137ZM17.4413 8.18148C17.8726 7.72497 18.423 7.43976 18.9915 7.37795C19.5174 7.32074 19.9943 7.46614 20.3341 7.78723C20.6736 8.1084 20.8455 8.57605 20.8181 9.10434C20.7885 9.67522 20.5348 10.241 20.1032 10.6974C19.2422 11.6083 17.9444 11.785 17.2102 11.0913C16.4768 10.3977 16.5804 9.09242 17.4413 8.18148Z",fill:"#FEF9F9"}),t.jsx("path",{d:"M23.1699 14.8269L23.1696 14.8262C22.3732 13.3622 20.3748 12.9039 18.7144 13.8049C17.0546 14.707 16.3507 16.6321 17.145 18.0959C17.4346 18.6299 17.8843 19.0304 18.4193 19.2798C19.3518 19.7147 20.5439 19.6911 21.6004 19.1182C23.2601 18.2161 23.9642 16.2911 23.1699 14.8269ZM20.9293 17.8818C19.9491 18.4133 18.8064 18.2084 18.3816 17.4249C17.9569 16.6424 18.4076 15.5729 19.3859 15.0411C20.0359 14.6884 20.7581 14.6603 21.2949 14.9107C21.5664 15.0373 21.7906 15.2351 21.9337 15.4984C22.3576 16.2812 21.9069 17.3503 20.9293 17.8818Z",fill:"#FEF9F9"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_41439_1347",children:t.jsx("rect",{width:"24",height:"24",fill:"black",transform:"translate(0.5)"})})})]})})}const je=o.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${c} {
    height: calc(100% - 140px);
  }
`,fe=o.div`
  display: flex;
  flex-direction: column;
  max-width: 140px;
  gap: 12px;
`,b=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;

  @media ${c} {
    flex-direction: row-reverse;
  }
`;function be({onSubmit:e,handleDefinePage:n}){const a=g({initialValues:q,onSubmit:e,validationSchema:Ce});return t.jsxs(Y,{onSubmit:a.handleSubmit,children:[t.jsx(h,{formik:a,placeholder:"Type name pet",text:"Pet’s name",id:"name",name:"name",value:a.values.name,onChange:a.handleChange}),t.jsx(h,{formik:a,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,value:a.values.birthday,name:"birthday",onChange:a.handleChange}),t.jsx(h,{formik:a,placeholder:"Type of pet",text:"Type",id:"type",value:a.values.type,name:"type",onChange:a.handleChange}),t.jsxs(b,{children:[t.jsxs(m,{type:"submit",children:["Next",t.jsx(f,{})]}),t.jsxs(C,{type:"button",onClick:()=>n(-1),children:[t.jsx(j,{}),"Cancel"]})]})]})}const ye=y().shape({name:d().required("Please enter pat name"),birthday:d().required("Please enter date of birth"),type:d().required("Please enter breed"),title:d().required("Please enter title")});function Fe({onSubmit:e,handleDefinePage:n}){const a=g({initialValues:ie,onSubmit:e,validationSchema:ye});return t.jsxs(Y,{onSubmit:a.handleSubmit,children:[t.jsx(h,{formik:a,placeholder:"Title of add",text:"Title of add",id:"title",value:a.values.title,name:"title",onChange:a.handleChange}),t.jsx(h,{formik:a,placeholder:"Type name pet",text:"Pet’s name",id:"name",value:a.values.name,name:"name",onChange:a.handleChange}),t.jsx(h,{formik:a,placeholder:"Type date of birth",text:"Date of birth",id:"birthday",date:!0,value:a.values.birthday,name:"birthday",onChange:a.handleChange}),t.jsx(h,{formik:a,placeholder:"Type of pet",text:"Type",id:"type",value:a.values.type,name:"type",onChange:a.handleChange}),t.jsxs(b,{children:[t.jsxs(m,{disabled:a.values.option==="",type:"submit",children:["Next",t.jsx(f,{})]}),t.jsxs(C,{type:"button",onClick:()=>n(-1),children:[t.jsx(j,{}),"Cancel"]})]})]})}function ve({option:e,handleDefinePage:n}){const a=_(),s=r=>{a(le(r)),n(1)};return t.jsx(t.Fragment,{children:e===i.yourPet?t.jsx(be,{onSubmit:s,handleDefinePage:n}):t.jsx(Fe,{onSubmit:s,handleDefinePage:n})})}const we=({mistake:e})=>e==="true"?"#F43F5E":"#54ADFF",Le=o.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
`,Se=o.textarea`
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${we};

  @media ${c} {
    height: 108px;
  }
`;function z({formik:e}){const n=s=>{e.handleChange(s)},a=s=>{e.handleBlur(s)};return console.log(e.touched),t.jsxs(Le,{htmlFor:"comments",children:["Comments",t.jsx(Se,{mistake:`${e.errors.comments&&e.touched.comments}`,name:"comments",id:"comments",onBlur:a,onChange:n,value:e.values.comments}),e.errors.comments&&e.touched.comments?t.jsx(D,{text:e.errors.comments}):null]})}const Me=o.div`
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
    content: "";
    position: absolute;
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
`,Pe=o.label`
  display: flex;
  position: relative;
  flex-direction: ${e=>e.direction};
  align-items: ${e=>e.items};
  justify-content: ${e=>e.justify};
  gap: ${e=>e.gap};
`,$e=o.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`,De=o.span`
  max-width: 80px;
`;function G({formik:e,text:n,direction:a,items:s,justify:r,gap:l}){const p=u=>{const F=u.target.files[0];F&&e.setFieldValue("photo",F)},x=e.errors.photo&&e.touched.photo;return console.log(e.touched),t.jsxs(t.Fragment,{children:[t.jsxs(Pe,{direction:a,items:s,justify:r,gap:l,htmlFor:"photo",children:[t.jsx(De,{children:n}),t.jsx(Me,{mistake:`${x}`}),x?t.jsx(D,{text:e.errors.photo}):null]}),t.jsx($e,{type:"file",name:"photo",id:"photo",accept:".jpg",onBlur:e.handleFileChange,onChange:p})]})}const Ee=o.label`
  display: flex;
  align-items: center;
  gap: 12px;
`,Ie=o.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function $({icon:e,text:n,id:a,onChange:s,value:r,checked:l,formik:p}){const x=p.errors.gender&&p.touched.gender;return t.jsxs(t.Fragment,{children:[t.jsxs(Ee,{htmlFor:a,children:[e,t.jsx("span",{children:n}),x?t.jsx(D,{text:p.errors.gender}):null]}),t.jsx(Ie,{type:"radio",name:"gender",id:a,value:r,onChange:s,checked:l===r})]})}function Te({formik:e,handleDefinePage:n}){return t.jsxs("form",{onSubmit:e.handleSubmit,children:[t.jsx($,{formik:e,text:"Female",id:"female",onChange:e.handleChange,value:i.female,checked:e.values.gender,icon:t.jsx(J,{stroke:P({value:i.female,formik:e})})}),t.jsx($,{formik:e,text:"Male",id:"male",onChange:e.handleChange,value:i.male,checked:e.values.gender,icon:t.jsx(K,{stroke:P({value:i.male,formik:e})})}),t.jsx(G,{formik:e}),t.jsx(h,{formik:e,text:"Location",id:"location",name:"location",value:e.values.location,onChange:e.handleChange}),t.jsx(z,{formik:e}),t.jsxs(b,{children:[t.jsxs(m,{type:"submit",children:["Done",t.jsx(f,{})]}),t.jsxs(C,{type:"button",onClick:()=>n(-1),children:[t.jsx(j,{}),"Cancel"]})]})]})}const Oe=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;function Ae({formik:e,handleDefinePage:n}){return t.jsxs("form",{onSubmit:e.handleSubmit,children:[t.jsxs(Oe,{children:[t.jsx($,{formik:e,text:"Female",id:"female",onChange:e.handleChange,value:i.female,checked:e.values.gender,icon:t.jsx(J,{stroke:P({value:i.female,formik:e})})}),t.jsx($,{formik:e,text:"Male",id:"male",onChange:e.handleChange,value:i.male,checked:e.values.gender,icon:t.jsx(K,{stroke:P({value:i.male,formik:e})})})]}),t.jsx(G,{text:"Load the pet’s image:",formik:e,items:"center",gap:"14px"}),t.jsx(h,{formik:e,text:"Location",id:"location",name:"location",value:e.values.location,onChange:e.handleChange}),t.jsx(h,{formik:e,text:"Price",id:"price",name:"price",value:e.values.price,onChange:e.handleChange}),t.jsx(z,{formik:e}),t.jsxs(b,{children:[t.jsxs(m,{type:"submit",children:["Done",t.jsx(f,{})]}),t.jsxs(C,{type:"button",onClick:()=>n(-1),children:[t.jsx(j,{}),"Cancel"]})]})]})}const Be=o.form`
  height: calc(100% - 140px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;function _e({formik:e,handleDefinePage:n}){return t.jsx(t.Fragment,{children:t.jsxs(Be,{onSubmit:e.handleSubmit,children:[t.jsx(G,{formik:e,text:"Load the pet’s image:",direction:"row",items:"center",gap:"14px"}),t.jsx(z,{formik:e}),t.jsxs(b,{children:[t.jsxs(m,{disabled:e.values.option==="",type:"submit",children:["Done",t.jsx(f,{})]}),t.jsxs(C,{type:"button",onClick:()=>n(-1),children:[t.jsx(j,{}),"Cancel"]})]})]})})}const Ne=y().shape(N),W=20,qe=y().shape({gender:d().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:d().max(W,`Maximum location length - ${W} characters`).required("Location is required"),...N}),k=20,ze=/^\d+$/,Ge=y().shape({gender:d().oneOf(["male","female"],"Invalid gender").required("Please select a gender"),location:d().max(k,`Maximum location length - ${k} characters`).required("Location is required"),price:d().matches(ze,"Price must contain only numbers").required("Price is required"),...N});function Ze({option:e,handleDefinePage:n}){const{personalDetails:a}=X(),s=_(),r=(u,{resetForm:F})=>{const E={noticeType:e,...a,...u,sex:u.gender};if(console.log(E),e===i.yourPet){s(S(E));return}s(M(E)),F()},l=g({initialValues:{photo:null,comments:""},onSubmit:r,validationSchema:Ne}),p=g({onSubmit:r,initialValues:{gender:"",photo:null,location:"",price:"",comments:""},validationSchema:Ge}),x=g({onSubmit:r,initialValues:{gender:"",photo:null,location:"",comments:""},validationSchema:qe});switch(e){case i.yourPet:return t.jsx(_e,{formik:l,handleDefinePage:n});case i.SELL:return t.jsx(Ae,{formik:p,handleDefinePage:n});default:return t.jsx(Te,{formik:x,handleDefinePage:n})}}const Ve=o.label``,Re=o.span`
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
`,We=o.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;function L({value:e,text:n,onChange:a,checked:s}){return t.jsxs(t.Fragment,{children:[t.jsx(Ve,{htmlFor:e,children:t.jsx(Re,{checked:s,children:n})}),t.jsx(We,{id:e,name:"option",type:"radio",onChange:a,value:e,checked:s})]})}function ke({formik:e}){return t.jsxs(t.Fragment,{children:[t.jsx(L,{onChange:e.handleChange,text:"your pet",value:i.yourPet,checked:e.values.option===i.yourPet}),t.jsx(L,{onChange:e.handleChange,text:"sell",value:i.SELL,checked:e.values.option===i.SELL}),t.jsx(L,{onChange:e.handleChange,text:"lost/found",value:i.LOST_FOUND,checked:e.values.option===i.LOST_FOUND}),t.jsx(L,{onChange:e.handleChange,text:"in good hands",value:i.IN_GOOD_HANDS,checked:e.values.option===i.IN_GOOD_HANDS})]})}const He={option:""};function Ue({handleDefinePage:e,currentPage:n}){const a=_(),r=g({initialValues:He,onSubmit:l=>{n===0&&a(se(l.option)),e(1)}});return t.jsxs(je,{onSubmit:r.handleSubmit,children:[t.jsx(fe,{children:t.jsx(ke,{formik:r})}),t.jsxs(b,{children:[t.jsxs(m,{disabled:r.values.option==="",type:"submit",children:["Next",t.jsx(f,{})]}),t.jsxs(C,{type:"button",children:[t.jsx(j,{}),"Cancel"]})]})]})}function Xe({currentPage:e,setCurrentPage:n}){const{option:a}=X(),s=r=>{if(r===-1&&e===0){console.log("start");return}n(l=>l+r)};return t.jsxs(t.Fragment,{children:[e===0&&t.jsx(Ue,{currentPage:e,handleDefinePage:s}),e===1&&t.jsx(ve,{option:a,handleDefinePage:s}),e===2&&t.jsx(Ze,{option:a,handleDefinePage:s})]})}const Ye=o.main`
  width: 100vw;
  height: 100vh;
  background-color: #FEF9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`,Je=o.div`
  width: 100%;
  height: 80%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;

  @media ${c} {
    width: 60%;
    padding: 20px 32px;
    height: 90%;
  }

  @media ${Q} {
    width: 100%;
    max-width: 500px;
  }
`,Ke=o.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: calc(24/20);
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${c} {
    margin-left: 0px;
  }
`;function nt(){const[e,n]=ee.useState(0);return t.jsx(t.Fragment,{children:t.jsx(Ye,{children:t.jsxs(Je,{children:[t.jsx(Ke,{children:"Add pet"}),t.jsx(ae,{currentPage:e}),t.jsx(Xe,{currentPage:e,setCurrentPage:n})]})})})}export{nt as default};
