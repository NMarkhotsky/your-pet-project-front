import{u as d,j as e,l as c}from"./index-0737ae35.js";import{u,a as h,F as i,A as p,b as x,c as g,k as P,Q as s,d as w}from"./ReactToastify-13ff4bcd.js";import{c as j,a as o,u as F,F as f}from"./index.esm-93251fa4.js";const b=j().shape({email:o().email("Enter a valid email").required("This field is required"),password:o().min(6,"Password must be min 6 characters long").max(16,"Password must be max 16 characters long").matches(/[0-9]/,"Password requires at least one number").matches(/[a-z]/,"Password requires at least one lowercase letter").matches(/[A-Z]/,"Password requires at least one uppercase letter").required("This field is required")}),v=()=>{const n=u(),l=d(),{error:r}=h(),a=F({initialValues:{email:"",password:""},validationSchema:b,validateOnChange:!0,validateOnBlur:!0,onSubmit:async m=>{const t=await a.validateForm();Object.keys(t).length&&s.error("Please enter valid values in all the fields",{position:s.POSITION.TOP_CENTER}),Object.keys(t).length===0&&(await n(c(m)),r?s.error(r,{position:s.POSITION.TOP_CENTER}):l("/user"))}});return e.jsxs(f.Provider,{value:a,children:[e.jsxs("form",{onSubmit:a.handleSubmit,children:[e.jsx(i,{name:"email",type:"email",label:"Email",placeholder:"Email",...a.getFieldProps("email")}),e.jsx(i,{name:"password",type:"password",label:"Password",placeholder:"Password",...a.getFieldProps("password")}),e.jsx(p,{btnText:"Login"}),e.jsxs(x,{children:["Do not have an account? ",e.jsx(g,{to:"/register",children:"Register"})]})]}),e.jsx(P,{})]})};function k(){return e.jsx(w,{title:"Login",children:e.jsx(v,{})})}export{k as default};
