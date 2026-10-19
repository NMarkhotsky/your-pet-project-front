import{s as t,n as x,b as n,P as i,j as o,I as s,o as u}from"./index-ee3ce916.js";import{N as b}from"./react-ecc61561.js";import{f}from"./forms-b2853f00.js";import{u as $}from"./translations-5abde677.js";const F=t.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: ${e=>e.theme.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${x} {
    /* width: 280px; */
  }

  @media ${n} {
    width: 608px;
    padding: 60px 75px;
  }
`,v=t.h1`
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
`,P=t.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,M=t(b)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function j({title:e,children:r}){return o.jsxs(F,{children:[o.jsx(v,{children:e}),r]})}j.propTypes={title:i.string.isRequired,children:i.element.isRequired};const y=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${n} {
    margin-bottom: 32px;
  }
`,z=t.input`
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

  @media ${n} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,w=t(h)`
  color: ${e=>e.theme.colors.red};
`,k=t(h)`
  color: ${e=>e.theme.colors.green};
`,p=t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$touched?"52px":"16px"};
`;const S=({successMessage:e,isFormSubmitted:r,...l})=>{const[a,d]=f(l),m=r&&d.error,c=r&&!d.error;return o.jsx(o.Fragment,{children:o.jsxs(y,{children:[o.jsx(z,{...a,...l,$invalid:m,$valid:c}),m?o.jsxs(o.Fragment,{children:[o.jsx(p,{children:o.jsx(s,{iconName:"icon-cross",stroke:"#F43F5E",fill:"#F43F5E"})}),o.jsx(w,{children:d.error})]}):null,c?o.jsx(p,{children:o.jsx(s,{iconName:"icon-check",stroke:"#00C3AD",fill:"#00C3AD"})}):null,c&&e?o.jsx(k,{children:e}):null]})})};S.propTypes={successMessage:i.string,isFormSubmitted:i.bool.isRequired};const A=t.div`
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
`;const g=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${n} {
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
`;const C=t.button`
  position: absolute;
  top: 12px;
  right: ${e=>e.$validated?"52px":"16px"};
`,T=({isPasswordShown:e,isFormSubmitted:r,onClick:l,children:a})=>o.jsx(o.Fragment,{children:o.jsxs(A,{children:[a,o.jsx(C,{type:"button","aria-label":"Show or hide password","aria-pressed":e,$validated:r,onClick:l,children:e?o.jsx(s,{iconName:"icon-eye-open",stroke:"#54ADFF",fill:"#54ADFF"}):o.jsx(s,{iconName:"icon-eye-closed",stroke:"#54ADFF",fill:"#54ADFF"})})]})});T.propTypes={isPasswordShown:i.bool,isFormSubmitted:i.bool,onClick:i.func.isRequired,children:i.node.isRequired};const B=t.button`
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
`,I=({btnText:e})=>o.jsx(B,{type:"submit",children:e});I.propTypes={btnText:i.string.isRequired};const R=t.a`
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
`,N=t.div`
  position: absolute;
  left: 16px;
`,L=()=>{const{t:e}=$();return o.jsxs(R,{href:`${u}/auth/google`,children:[o.jsx(N,{children:o.jsx(s,{iconName:"icon-google"})}),e("auth_googleBtn")]})};export{I as A,S as F,T as a,L as b,P as c,M as d,j as e};
