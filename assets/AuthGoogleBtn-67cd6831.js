import{s as t,q as x,b as r,N as u,P as i,j as o,I as s,v as b}from"./index-a1b5a053.js";import{a as $}from"./formik.esm-31e4d8f6.js";const f=t.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${x} {
    /* width: 280px; */
  }

  @media ${r} {
    width: 608px;
    padding: 60px 75px;
  }
`,F=t.h1`
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${r} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,D=t.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,P=t(u)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function v({title:e,children:n}){return o.jsxs(f,{children:[o.jsx(F,{children:e}),n]})}v.propTypes={title:i.string.isRequired,children:i.element.isRequired};const j=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${r} {
    margin-bottom: 32px;
  }
`,y=t.input`
  padding: 12px 16px;
  width: 100%;
  border-radius: 40px;
  border-color: ${e=>e.$invalid?e.theme.colors.red:e.$valid?e.theme.colors.green:e.theme.colors.blue};
  border-width: 1px;
  border-style: solid;
  outline: none;
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 150%;
  letter-spacing: 0.64px;

  &::placeholder {
    color: ${e=>e.theme.colors.grey};
  }
`,h=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${r} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,z=t(h)`
  color: ${e=>e.theme.colors.red};
`,w=t(h)`
  color: ${e=>e.theme.colors.green};
`,p=t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$touched?"52px":"16px"};
`;const k=({successMessage:e,isFormSubmitted:n,...l})=>{const[a,d]=$(l),m=n&&d.error,c=n&&!d.error;return o.jsx(o.Fragment,{children:o.jsxs(j,{children:[o.jsx(y,{...a,...l,$invalid:m,$valid:c}),m?o.jsxs(o.Fragment,{children:[o.jsx(p,{children:o.jsx(s,{iconName:"icon-cross",stroke:"#F43F5E",fill:"#F43F5E"})}),o.jsx(z,{children:d.error})]}):null,c?o.jsx(p,{children:o.jsx(s,{iconName:"icon-check",stroke:"#00C3AD",fill:"#00C3AD"})}):null,c&&e?o.jsx(w,{children:e}):null]})})};k.propTypes={successMessage:i.string,isFormSubmitted:i.bool.isRequired};const S=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${r} {
    margin-bottom: 32px;
  }
`;t.input`
  padding: 12px 16px;
  width: 100%;
  border-radius: 40px;
  border-color: ${e=>e.$invalid?e.theme.colors.red:e.$valid?e.theme.colors.green:e.theme.colors.blue};
  border-width: 1px;
  border-style: solid;
  outline: none;
  color: ${e=>e.theme.colors.grey};
  font-size: ${e=>e.theme.fontSizes.md};
  line-height: 150%;
  letter-spacing: 0.64px;

  &::placeholder {
    color: ${e=>e.theme.colors.grey};
  }
`;const g=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${r} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`;t(g)`
  color: ${e=>e.theme.colors.red};
`;t(g)`
  color: ${e=>e.theme.colors.green};
`;t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;const A=t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$validated?"52px":"16px"};
`,C=({isPasswordShown:e,isFormSubmitted:n,onClick:l,children:a})=>o.jsx(o.Fragment,{children:o.jsxs(S,{children:[a,o.jsx(A,{$validated:n,onClick:l,children:e?o.jsx(s,{iconName:"icon-eye-open",stroke:"#54ADFF",fill:"#54ADFF"}):o.jsx(s,{iconName:"icon-eye-closed",stroke:"#54ADFF",fill:"#54ADFF"})})]})});C.propTypes={isPasswordShown:i.bool,isFormSubmitted:i.bool,onClick:i.func.isRequired,children:i.node.isRequired};const T=t.button`
  margin-bottom: 16px;
  padding: 10px 28px;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: none;
  background-color: ${e=>e.theme.colors.blue};
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.lg};
  letter-spacing: 0.8px;
  /* transition: background ${e=>e.theme.transitionHover}; */

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.blueGradient};
  }
`,I=({btnText:e})=>o.jsx(T,{type:"submit",children:e});I.propTypes={btnText:i.string.isRequired};const q=t.a`
  position: relative;

  display: flex;
  justify-content: center;

  margin-bottom: 16px;
  padding: 10px 28px;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: none;
  border: 1px solid ${e=>e.theme.colors.blue};
  color: ${e=>e.theme.colors.blue};
  font-family: ${e=>e.theme.fonts.main.semiBold};
  font-size: ${e=>e.theme.fontSizes.lg};
  letter-spacing: 0.8px;
  transition: background ${e=>e.theme.transitionHover};
  fill: #54adff;

  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.blueGradient};
    fill: white;
    color: white;
  }

  @media ${x} {
    text-align: center;
    align-items: center;
    height: 50px;
    font-size: 18px;
  }
`,B=t.div`
  position: absolute;
  left: 16px;
`,E=()=>{const{t:e}=b();return o.jsxs(q,{href:"https://mypets-backend.onrender.com/api/auth/google",children:[o.jsx(B,{children:o.jsx(s,{iconName:"icon-google"})}),e("auth_googleBtn")]})};export{I as A,k as F,C as a,E as b,D as c,P as d,v as e};
