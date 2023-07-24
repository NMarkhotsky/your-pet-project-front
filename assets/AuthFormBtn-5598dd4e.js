import{R as c,e as x,f as p,s,g,b as l,N as f,P as a,j as r,h as n}from"./index-bde021fe.js";import{d as b}from"./index.esm-51ec5af7.js";function m(e=c){const o=e===c?x:p(e);return function(){const{store:t}=o();return t}}const $=m();function k(e=c){const o=e===c?$:m(e);return function(){return o().dispatch}}const D=k(),F=s.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${g} {
    width: 280px;
  }

  @media ${l} {
    width: 608px;
    padding: 60px 75px;
  }
`,S=s.h1`
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.black};
  text-align: center;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${l} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,E=s.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,M=s(f)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function v({title:e,children:o}){return r.jsxs(F,{children:[r.jsx(S,{children:e}),o]})}v.propTypes={title:a.string.isRequired,children:a.element.isRequired};const w=e=>e.auth.user,y=e=>e.auth.token,z=e=>e.auth.isLoggedIn,R=e=>e.auth.isLoading,j=e=>e.auth.isNewUser,T=e=>e.auth.error,P=()=>{const e=n(w),o=n(y),i=n(z),t=n(R),d=n(j),u=n(T);return{user:e,token:o,isLoggedIn:i,isRefreshing:t,isNewUser:d,error:u}},I=s.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${l} {
    margin-bottom: 32px;
  }
`,C=s.input`
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
`,h=s.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${l} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,L=s(h)`
  color: ${e=>e.theme.colors.red};
`,N=s(h)`
  color: ${e=>e.theme.colors.green};
`,A=({successMessage:e,...o})=>{const[i,t]=b(o),d=t.touched&&t.error,u=t.touched&&!t.error;return r.jsx(r.Fragment,{children:r.jsxs(I,{children:[r.jsx(C,{...i,...o,$invalid:t.touched&&t.error,$valid:t.touched&&!t.error}),d?r.jsx(L,{children:t.error}):null,u&&e?r.jsx(N,{children:e}):null]})})};A.propTypes={successMessage:a.string};const H=s.button`
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
`,U=({btnText:e})=>r.jsx(H,{type:"submit",children:e});U.propTypes={btnText:a.string.isRequired};export{U as A,A as F,P as a,E as b,M as c,v as d,D as u};
