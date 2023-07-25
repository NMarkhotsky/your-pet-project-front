import{s as t,k as u,b as i,N as b,P as s,j as o,I as a,r as $}from"./index-a224a882.js";import{a as p}from"./formik.esm-f4d2d1cd.js";const f=t.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${u} {
    width: 280px;
  }

  @media ${i} {
    width: 608px;
    padding: 60px 75px;
  }
`,F=t.h1`
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.black};
  text-align: center;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${i} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,D=t.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,E=t(b)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function v({title:e,children:n}){return o.jsxs(f,{children:[o.jsx(F,{children:e}),n]})}v.propTypes={title:s.string.isRequired,children:s.element.isRequired};const y=t.div`
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

  @media ${i} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,w=t(x)`
  color: ${e=>e.theme.colors.red};
`,z=t(x)`
  color: ${e=>e.theme.colors.green};
`,m=t.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$touched?"52px":"16px"};
`;const h=({successMessage:e,...n})=>{const[c,r]=p(n),d=r.touched&&r.error,l=r.touched&&!r.error;return o.jsx(o.Fragment,{children:o.jsxs(y,{children:[o.jsx(j,{...c,...n,$invalid:r.touched&&r.error,$valid:r.touched&&!r.error}),d?o.jsxs(o.Fragment,{children:[o.jsx(m,{children:o.jsx(a,{iconName:"icon-cross-small",stroke:"#F43F5E",fill:"#F43F5E"})}),o.jsx(w,{children:r.error})]}):null,l?o.jsx(m,{children:o.jsx(a,{iconName:"icon-check",stroke:"#00C3AD",fill:"#00C3AD"})}):null,l&&e?o.jsx(z,{children:e}):null]})})};h.propTypes={successMessage:s.string};t.div`
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

  @media ${i} {
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
`;const S=t.div`
  position: absolute;
  top: 12px;
  right: ${e=>e.$touched?"52px":"16px"};
`,T=({...e})=>{const[n,c]=p(e),[r,d]=$.useState(!1),l=()=>{d(!r)};return o.jsx(o.Fragment,{children:o.jsxs(k,{children:[o.jsx(h,{...n,...e,type:r?"text":"password"}),o.jsx(S,{$touched:c.touched,onClick:l,children:r?o.jsx(a,{iconName:"icon-eye-open",stroke:"#54ADFF",fill:"#54ADFF"}):o.jsx(a,{iconName:"icon-eye-closed",stroke:"#54ADFF",fill:"#54ADFF"})})]})})};T.propTypes={successMessage:s.string};const A=t.button`
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
`,C=({btnText:e})=>o.jsx(A,{type:"submit",children:e});C.propTypes={btnText:s.string.isRequired};export{C as A,h as F,T as a,D as b,E as c,v as d};
