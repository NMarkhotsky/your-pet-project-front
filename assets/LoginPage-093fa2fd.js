import{d as x,e as l,u as w,f as F,g as f,r as o,j as e,l as j}from"./index-cf68e1bf.js";import{F as m,a as P,A as b,b as S,c as v,d as k}from"./AuthFormBtn-c3228cd6.js";import{u as q,F as L}from"./formik.esm-a445f1f4.js";import{B as E}from"./BackgroundWrapper-3b97e227.js";const y=x().shape({email:l().email("Enter a valid email").required("This field is required"),password:l().min(6,"Password must be min 6 characters long").max(16,"Password must be max 16 characters long").matches(/[0-9]/,"Password requires at least one number").matches(/[a-z]/,"Password requires at least one lowercase letter").matches(/[A-Z]/,"Password requires at least one uppercase letter").required("This field is required")}),A=()=>{const d=w(),i=F(),{isLoggedIn:n}=f(),[a,c]=o.useState(!1),[r,u]=o.useState(!1),h=()=>{u(!r)},p=async t=>{t.preventDefault(),c(!0);const g=await s.validateForm();Object.keys(g).length===0&&s.handleSubmit()};o.useEffect(()=>{n&&i("/user")},[n,i]);const s=q({initialValues:{email:"",password:""},validationSchema:y,onSubmit:async t=>{d(j(t))}});return e.jsx(L.Provider,{value:s,children:e.jsxs("form",{onSubmit:p,noValidate:!0,children:[e.jsx(m,{name:"email",type:"email",label:"Email",placeholder:"Email",isFormSubmitted:a,...s.getFieldProps("email")}),e.jsx(P,{isPasswordShown:r,isFormSubmitted:a,onClick:h,children:e.jsx(m,{name:"password",type:r?"text":"password",label:"Password",placeholder:"Password",isFormSubmitted:a,...s.getFieldProps("password")})}),e.jsx(b,{btnText:"Login"}),e.jsxs(S,{children:["Do not have an account? ",e.jsx(v,{to:"/register",children:"Register"})]})]})})};function I(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(k,{title:"Login",children:e.jsx(A,{})})]})}export{I as default};
