import{R as s,f as x,g as p,s as o,h,b as a,N as g,P as i,j as r}from"./index-c34c2432.js";import{d as b}from"./index.esm-08707090.js";function d(e=s){const n=e===s?x:p(e);return function(){const{store:t}=n();return t}}const f=d();function $(e=s){const n=e===s?f:d(e);return function(){return n().dispatch}}const q=$(),F=o.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${h} {
    width: 280px;
  }

  @media ${a} {
    width: 608px;
    padding: 60px 75px;
  }
`,k=o.h1`
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.black};
  text-align: center;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${a} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,A=o.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,B=o(g)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function v({title:e,children:n}){return r.jsxs(F,{children:[r.jsx(k,{children:e}),n]})}v.propTypes={title:i.string.isRequired,children:i.element.isRequired};const y=o.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${a} {
    margin-bottom: 32px;
  }
`,z=o.input`
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
`,l=o.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${a} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,S=o(l)`
  color: ${e=>e.theme.colors.red};
`,j=o(l)`
  color: ${e=>e.theme.colors.green};
`,R=({successMessage:e,...n})=>{const[c,t]=b(n),m=t.touched&&t.error,u=t.touched&&!t.error;return r.jsx(r.Fragment,{children:r.jsxs(y,{children:[r.jsx(z,{...c,...n,$invalid:t.touched&&t.error,$valid:t.touched&&!t.error}),m?r.jsx(S,{children:t.error}):null,u&&e?r.jsx(j,{children:e}):null]})})};R.propTypes={successMessage:i.string};const w=o.button`
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
`,T=({btnText:e})=>r.jsx(w,{type:"submit",children:e});T.propTypes={btnText:i.string.isRequired};export{T as A,R as F,A as a,B as b,v as c,q as u};
