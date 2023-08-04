import{a6 as o,g as C,s as N}from"./index-9e458746.js";const _=o.createContext({}),E=!0;function A({baseColor:i,highlightColor:a,width:s,height:l,borderRadius:r,circle:p,direction:u,duration:c,enableAnimation:f=E}){const e={};return u==="rtl"&&(e["--animation-direction"]="reverse"),typeof c=="number"&&(e["--animation-duration"]=`${c}s`),f||(e["--pseudo-element-display"]="none"),(typeof s=="string"||typeof s=="number")&&(e.width=s),(typeof l=="string"||typeof l=="number")&&(e.height=l),(typeof r=="string"||typeof r=="number")&&(e.borderRadius=r),p&&(e.borderRadius="50%"),typeof i<"u"&&(e["--base-color"]=i),typeof a<"u"&&(e["--highlight-color"]=a),e}function B({count:i=1,wrapper:a,className:s,containerClassName:l,containerTestId:r,circle:p=!1,style:u,...c}){var f,e,y;const S=o.useContext(_),g={...c};for(const[t,n]of Object.entries(c))typeof n>"u"&&delete g[t];const m={...S,...g,circle:p},$={...u,...A(m)};let v="react-loading-skeleton";s&&(v+=` ${s}`);const w=(f=m.inline)!==null&&f!==void 0?f:!1,d=[],b=Math.ceil(i);for(let t=0;t<b;t++){let n=$;if(b>i&&t===b-1){const k=(e=n.width)!==null&&e!==void 0?e:"100%",x=i%1,O=typeof k=="number"?k*x:`calc(${k} * ${x})`;n={...n,width:O}}const h=o.createElement("span",{className:v,style:n,key:t},"‌");w?d.push(h):d.push(o.createElement(o.Fragment,{key:t},h,o.createElement("br",null)))}return o.createElement("span",{className:l,"data-testid":r,"aria-live":"polite","aria-busy":(y=m.enableAnimation)!==null&&y!==void 0?y:E},a?d.map((t,n)=>o.createElement(a,{key:n},t)):d)}const T=C`
0%{
  background-position: 0 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0 50%;
}
`,z=N(B)`
  display: flex;

  background: linear-gradient(290.46deg, #c3e0f9 0%, #b3b3b3 107.89%);
  background-size: 300% 300%;

  animation: ${T} 1s ease infinite;

  overflow: hidden;
`;export{z as B};
