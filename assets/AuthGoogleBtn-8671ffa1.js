import{s as t,k as g,b as r,N as u,P as i,j as o,I as s}from"./index-209f992f.js";import{a as b}from"./formik.esm-1dd8eb07.js";const $=t.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${g} {
    width: 280px;
  }

  @media ${r} {
    width: 608px;
    padding: 60px 75px;
  }
`,f=t.h1`
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
`,B=t.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,D=t(u)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function F({title:e,children:n}){return o.jsxs($,{children:[o.jsx(f,{children:e}),n]})}F.propTypes={title:i.string.isRequired,children:i.element.isRequired};const v=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${r} {
    margin-bottom: 32px;
  }
`,j=t.input`
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
`,x=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${r} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,y=t(x)`
  color: ${e=>e.theme.colors.red};
`,w=t(x)`
  color: ${e=>e.theme.colors.green};
`,p=t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$touched?"52px":"16px"};
`;const z=({successMessage:e,isFormSubmitted:n,...l})=>{const[a,d]=b(l),m=n&&d.error,c=n&&!d.error;return o.jsx(o.Fragment,{children:o.jsxs(v,{children:[o.jsx(j,{...a,...l,$invalid:m,$valid:c}),m?o.jsxs(o.Fragment,{children:[o.jsx(p,{children:o.jsx(s,{iconName:"icon-cross",stroke:"#F43F5E",fill:"#F43F5E"})}),o.jsx(y,{children:d.error})]}):null,c?o.jsx(p,{children:o.jsx(s,{iconName:"icon-check",stroke:"#00C3AD",fill:"#00C3AD"})}):null,c&&e?o.jsx(w,{children:e}):null]})})};z.propTypes={successMessage:i.string,isFormSubmitted:i.bool.isRequired};const k=t.div`
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
`;const h=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${r} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`;t(h)`
  color: ${e=>e.theme.colors.red};
`;t(h)`
  color: ${e=>e.theme.colors.green};
`;t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;const S=t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$validated?"52px":"16px"};
`,C=({isPasswordShown:e,isFormSubmitted:n,onClick:l,children:a})=>o.jsx(o.Fragment,{children:o.jsxs(k,{children:[a,o.jsx(S,{$validated:n,onClick:l,children:e?o.jsx(s,{iconName:"icon-eye-open",stroke:"#54ADFF",fill:"#54ADFF"}):o.jsx(s,{iconName:"icon-eye-closed",stroke:"#54ADFF",fill:"#54ADFF"})})]})});C.propTypes={isPasswordShown:i.bool,isFormSubmitted:i.bool,onClick:i.func.isRequired,children:i.node.isRequired};const A=t.button`
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
`,T=({btnText:e})=>o.jsx(A,{type:"submit",children:e});T.propTypes={btnText:i.string.isRequired};const I=t.a`
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
`,N=t.div`
  position: absolute;
  left: 16px;
`,G=()=>o.jsxs(I,{href:"https://mypets-backend.onrender.com/api/auth/google",children:[o.jsx(N,{children:o.jsx(s,{iconName:"icon-google"})}),"Continue with Google"]});export{T as A,z as F,C as a,G as b,B as c,D as d,F as e};
