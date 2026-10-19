import{s as g,b as j,a as O,j as u,k as L,h as R}from"./index-ee3ce916.js";import{i as _}from"./catImg-bc7fe17e.js";import{T as A}from"./translations-5abde677.js";import{R as l,r as E}from"./react-ecc61561.js";const B=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;
  padding-top: 60px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`,I=g.h1`
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${j} {
    font-family: ${e=>e.theme.fonts.main.semiBold};
    font-size: ${e=>e.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,J=g.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${j} {
    max-width: 250px;
  }

  @media ${O} {
    max-width: 292px;
  }
`,Q=()=>u.jsxs(B,{children:[u.jsx(I,{children:u.jsxs(A,{i18nKey:"sorry_message",children:[u.jsx("p",{children:"Sorry..."})," There is no information on your request :("," "]})}),u.jsx(J,{src:_,alt:"Cat with tongue"})]}),M=l.createContext({}),v=!0;function P({baseColor:e,highlightColor:c,width:s,height:f,borderRadius:n,circle:d,direction:a,duration:i,enableAnimation:m=v}){const t={};return a==="rtl"&&(t["--animation-direction"]="reverse"),typeof i=="number"&&(t["--animation-duration"]=`${i}s`),m||(t["--pseudo-element-display"]="none"),(typeof s=="string"||typeof s=="number")&&(t.width=s),(typeof f=="string"||typeof f=="number")&&(t.height=f),(typeof n=="string"||typeof n=="number")&&(t.borderRadius=n),d&&(t.borderRadius="50%"),typeof e<"u"&&(t["--base-color"]=e),typeof c<"u"&&(t["--highlight-color"]=c),t}function q({count:e=1,wrapper:c,className:s,containerClassName:f,containerTestId:n,circle:d=!1,style:a,...i}){var m,t,x;const N=l.useContext(M),k={...i};for(const[o,r]of Object.entries(i))typeof r>"u"&&delete k[o];const y={...N,...k,circle:d},T={...a,...P(y)};let S="react-loading-skeleton";s&&(S+=` ${s}`);const z=(m=y.inline)!==null&&m!==void 0?m:!1,p=[],h=Math.ceil(e);for(let o=0;o<h;o++){let r=T;if(h>e&&o===h-1){const b=(t=r.width)!==null&&t!==void 0?t:"100%",w=e%1,C=typeof b=="number"?b*w:`calc(${b} * ${w})`;r={...r,width:C}}const $=l.createElement("span",{className:S,style:r,key:o},"‌");z?p.push($):p.push(l.createElement(l.Fragment,{key:o},$,l.createElement("br",null)))}return l.createElement("span",{className:f,"data-testid":n,"aria-live":"polite","aria-busy":(x=y.enableAnimation)!==null&&x!==void 0?x:v},c?p.map((o,r)=>l.createElement(c,{key:r},o)):p)}const D=L`
0%{
  background-position: 0 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0 50%;
}
`,U=g(q)`
  display: flex;

  background: linear-gradient(290.46deg, #c3e0f9 0%, #b3b3b3 107.89%);
  background-size: 300% 300%;

  animation: ${D} 1s ease infinite;

  overflow: hidden;
`,V=(e,c={},s=0)=>{const[f,n]=E.useState({data:null,isLoading:!0,error:null}),d=JSON.stringify(c);return E.useEffect(()=>{const a=new AbortController;return n({data:null,isLoading:!0,error:null}),e(JSON.parse(d),{signal:a.signal}).then(i=>{a.signal.aborted||n({data:i,isLoading:!1,error:null})}).catch(i=>{a.signal.aborted||n({data:null,isLoading:!1,error:R(i)})}),()=>a.abort()},[e,d,s]),f};export{U as B,Q as N,V as u};
