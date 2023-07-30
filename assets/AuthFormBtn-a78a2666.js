import{s as t,k as u,b as n,N as g,P as i,j as o,I as l}from"./index-a585dff9.js";import{a as b}from"./formik.esm-26c5048e.js";const $=t.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${u} {
    width: 280px;
  }

  @media ${n} {
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

  @media ${n} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,q=t.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,D=t(g)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function F({title:e,children:r}){return o.jsxs($,{children:[o.jsx(f,{children:e}),r]})}F.propTypes={title:i.string.isRequired,children:i.element.isRequired};const v=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${n} {
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

  @media ${n} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,y=t(x)`
  color: ${e=>e.theme.colors.red};
`,z=t(x)`
  color: ${e=>e.theme.colors.green};
`,p=t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$touched?"52px":"16px"};
`;const k=({successMessage:e,isFormSubmitted:r,...s})=>{const[a,d]=b(s),m=r&&d.error,c=r&&!d.error;return o.jsx(o.Fragment,{children:o.jsxs(v,{children:[o.jsx(j,{...a,...s,$invalid:m,$valid:c}),m?o.jsxs(o.Fragment,{children:[o.jsx(p,{children:o.jsx(l,{iconName:"icon-cross",stroke:"#F43F5E",fill:"#F43F5E"})}),o.jsx(y,{children:d.error})]}):null,c?o.jsx(p,{children:o.jsx(l,{iconName:"icon-check",stroke:"#00C3AD",fill:"#00C3AD"})}):null,c&&e?o.jsx(z,{children:e}):null]})})};k.propTypes={successMessage:i.string,isFormSubmitted:i.bool.isRequired};const w=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${n} {
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

  @media ${n} {
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
`,C=({isPasswordShown:e,isFormSubmitted:r,onClick:s,children:a})=>o.jsx(o.Fragment,{children:o.jsxs(w,{children:[a,o.jsx(S,{$validated:r,onClick:s,children:e?o.jsx(l,{iconName:"icon-eye-open",stroke:"#54ADFF",fill:"#54ADFF"}):o.jsx(l,{iconName:"icon-eye-closed",stroke:"#54ADFF",fill:"#54ADFF"})})]})});C.propTypes={isPasswordShown:i.bool,isFormSubmitted:i.bool,onClick:i.func.isRequired,children:i.node.isRequired};const A=t.button`
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
`,T=({btnText:e})=>o.jsx(A,{type:"submit",children:e});T.propTypes={btnText:i.string.isRequired};export{T as A,k as F,C as a,q as b,D as c,F as d};
