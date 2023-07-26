import{d as u,e as a,h,u as p,f as g,g as f,r as w,j as e,i as x}from"./index-9c87dbe8.js";import{F as i,a as o,A as P,b as F,c as b,d as j}from"./AuthFormBtn-b7203914.js";import{u as v,F as q}from"./formik.esm-bf973079.js";import{B as A}from"./BackgroundWrapper-c46f26d5.js";const E=u().shape({name:a().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").min(2,"Name must be min 2 characters long").max(16,"Name must be max 16 characters long").required("This field is required"),email:a().email("Enter a valid email").required("This field is required"),password:a().min(6,"Password must be min 6 characters long").max(16,"Password must be max 16 characters long").matches(/[0-9]/,"Password requires at least one number").matches(/[a-z]/,"Password requires at least one lowercase letter").matches(/[A-Z]/,"Password requires at least one uppercase letter").required("This field is required"),confirmPassword:a().oneOf([h("password"),null],'Entered value does not match "password" field value').required("This field is required")}),T=()=>{const n=p(),r=g(),{isLoggedIn:t}=f();w.useEffect(()=>{t&&r("/user")},[t,r]);const s=v({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:E,validateOnChange:!0,validateOnBlur:!0,onSubmit:async({name:l,email:m,password:d})=>{const c=await s.validateForm();Object.keys(c).length===0&&n(x({name:l,email:m,password:d}))}});return e.jsx(q.Provider,{value:s,children:e.jsxs("form",{onSubmit:s.handleSubmit,noValidate:!0,children:[e.jsx(i,{name:"name",type:"text",label:"Name",placeholder:"Name",...s.getFieldProps("name")}),e.jsx(i,{name:"email",type:"email",label:"Email",placeholder:"Email",...s.getFieldProps("email")}),e.jsx(o,{name:"password",label:"Password",placeholder:"Password",successMessage:"Password is secure",...s.getFieldProps("password")}),e.jsx(o,{name:"confirmPassword",label:"Confirm password",placeholder:"Confirm password",successMessage:"Password confirmed",...s.getFieldProps("confirmPassword")}),e.jsx(P,{btnText:"Registration"}),e.jsxs(F,{children:["Already have an account? ",e.jsx(b,{to:"/login",children:"Login"})]})]})})};function S(){return e.jsx(A,{children:e.jsx(j,{title:"Registration",children:e.jsx(T,{})})})}export{S as default};
