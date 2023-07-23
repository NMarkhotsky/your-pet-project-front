import{u as d,j as e,k as c,Q as s,l as u}from"./index-f697d376.js";import{u as h,a as p,F as i,A as x,b as g,c as P,d as w}from"./AuthFormBtn-58cbfeda.js";import{c as j,a as o,u as F,F as f}from"./index.esm-2658efdc.js";const b=j().shape({email:o().email("Enter a valid email").required("This field is required"),password:o().min(6,"Password must be min 6 characters long").max(16,"Password must be max 16 characters long").matches(/[0-9]/,"Password requires at least one number").matches(/[a-z]/,"Password requires at least one lowercase letter").matches(/[A-Z]/,"Password requires at least one uppercase letter").required("This field is required")}),v=()=>{const n=h(),l=d(),{error:r}=p(),a=F({initialValues:{email:"",password:""},validationSchema:b,validateOnChange:!0,validateOnBlur:!0,onSubmit:async m=>{const t=await a.validateForm();Object.keys(t).length&&s.error("Please enter valid values in all the fields",{position:s.POSITION.TOP_CENTER}),Object.keys(t).length===0&&(await n(u(m)),r?s.error(r,{position:s.POSITION.TOP_CENTER}):l("/user"))}});return e.jsxs(f.Provider,{value:a,children:[e.jsxs("form",{onSubmit:a.handleSubmit,children:[e.jsx(i,{name:"email",type:"email",label:"Email",placeholder:"Email",...a.getFieldProps("email")}),e.jsx(i,{name:"password",type:"password",label:"Password",placeholder:"Password",...a.getFieldProps("password")}),e.jsx(x,{btnText:"Login"}),e.jsxs(g,{children:["Do not have an account? ",e.jsx(P,{to:"/register",children:"Register"})]})]}),e.jsx(c,{})]})};function k(){return e.jsx(w,{title:"Login",children:e.jsx(v,{})})}export{k as default};