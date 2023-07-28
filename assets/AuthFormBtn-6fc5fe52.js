import{s as t,k as u,b as i,N as b,P as s,j as e,I as a,r as $}from"./index-ede945e5.js";import{a as p}from"./formik.esm-473f5168.js";const f=t.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: ${o=>o.theme.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: ${o=>o.theme.boxShadow.main};

  @media ${u} {
    width: 280px;
  }

  @media ${i} {
    width: 608px;
    padding: 60px 75px;
  }
`,F=t.h1`
  margin-bottom: 20px;
  color: ${o=>console.log(o)};
  text-align: center;
  font-family: ${o=>o.theme.fonts.main.medium};
  font-size: ${o=>o.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${i} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,D=t.p`
  text-align: center;
  font-size: ${o=>o.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,E=t(b)`
  color: ${o=>o.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function v({title:o,children:n}){return e.jsxs(f,{children:[e.jsx(F,{children:o}),n]})}v.propTypes={title:s.string.isRequired,children:s.element.isRequired};const y=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${i} {
    margin-bottom: 32px;
  }
`;t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${i} {
    margin-bottom: 32px;
  }
`;const j=t.input`
  padding: 12px 16px;
  width: 100%;
  border-radius: 40px;
  border-color: ${o=>o.$invalid?o.theme.colors.red:o.$valid?o.theme.colors.green:o.theme.colors.blue};
  border-width: 1px;
  border-style: solid;
  outline: none;
  color: ${o=>o.theme.colors.grey};
  font-size: ${o=>o.theme.fontSizes.md};
  line-height: 150%;
  letter-spacing: 0.64px;

  &::placeholder {
    color: ${o=>o.theme.colors.grey};
  }
`,x=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${i} {
    font-size: ${o=>o.theme.fontSizes.xs};
    bottom: -18px;
  }
`,w=t(x)`
  color: ${o=>o.theme.colors.red};
`,z=t(x)`
  color: ${o=>o.theme.colors.green};
`,m=t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;t.div`
  position: absolute;
  top: 12px;
  right: ${o=>o.$touched?"52px":"16px"};
`;const h=({successMessage:o,...n})=>{const[c,r]=p(n),d=r.touched&&r.error,l=r.touched&&!r.error;return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(j,{...c,...n,$invalid:r.touched&&r.error,$valid:r.touched&&!r.error}),d?e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx(a,{iconName:"icon-cross-small",stroke:"#F43F5E",fill:"#F43F5E"})}),e.jsx(w,{children:r.error})]}):null,l?e.jsx(m,{children:e.jsx(a,{iconName:"icon-check",stroke:"#00C3AD",fill:"#00C3AD"})}):null,l&&o?e.jsx(z,{children:o}):null]})})};h.propTypes={successMessage:s.string};t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${i} {
    margin-bottom: 32px;
  }
`;const k=t.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${i} {
    margin-bottom: 32px;
  }
`;t.input`
  padding: 12px 16px;
  width: 100%;
  border-radius: 40px;
  border-color: ${o=>o.$invalid?o.theme.colors.red:o.$valid?o.theme.colors.green:o.theme.colors.blue};
  border-width: 1px;
  border-style: solid;
  outline: none;
  color: ${o=>o.theme.colors.grey};
  font-size: ${o=>o.theme.fontSizes.md};
  line-height: 150%;
  letter-spacing: 0.64px;

  &::placeholder {
    color: ${o=>o.theme.colors.grey};
  }
`;const g=t.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${i} {
    font-size: ${o=>o.theme.fontSizes.xs};
    bottom: -18px;
  }
`;t(g)`
  color: ${o=>o.theme.colors.red};
`;t(g)`
  color: ${o=>o.theme.colors.green};
`;t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;const S=t.div`
  position: absolute;
  top: 12px;
  right: ${o=>o.$touched?"52px":"16px"};
`,A=({...o})=>{const[n,c]=p(o),[r,d]=$.useState(!1),l=()=>{d(!r)};return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx(h,{...n,...o,type:r?"text":"password"}),e.jsx(S,{$touched:c.touched,onClick:l,children:r?e.jsx(a,{iconName:"icon-eye-open",stroke:"#54ADFF",fill:"#54ADFF"}):e.jsx(a,{iconName:"icon-eye-closed",stroke:"#54ADFF",fill:"#54ADFF"})})]})})};A.propTypes={successMessage:s.string};const C=t.button`
  margin-bottom: 16px;
  padding: 10px 28px;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: none;
  background-color: ${o=>o.theme.colors.blue};
  color: ${o=>o.theme.colors.white};
  font-family: ${o=>o.theme.fonts.main.semiBold};
  font-size: ${o=>o.theme.fontSizes.lg};
  letter-spacing: 0.8px;
  /* transition: background ${o=>o.theme.transitionHover}; */

  &:hover,
  &:focus {
    background: ${o=>o.theme.colors.blueGradient};
  }
`,T=({btnText:o})=>e.jsx(C,{type:"submit",children:o});T.propTypes={btnText:s.string.isRequired};export{T as A,h as F,A as a,D as b,E as c,v as d};
