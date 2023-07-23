import{R as Z,c as ye,d as ve,s as w,e as Te,a as ne,N as Ee,P as ee,j as z,f as U,g as p,t as y}from"./index-0737ae35.js";import{d as be}from"./index.esm-93251fa4.js";function me(e=Z){const t=e===Z?ye:ve(e);return function(){const{store:n}=t();return n}}const xe=me();function Ce(e=Z){const t=e===Z?xe:me(e);return function(){return t().dispatch}}const Ye=Ce(),Ie=w.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: ${e=>e.theme.boxShadow.main};

  @media ${Te} {
    width: 280px;
  }

  @media ${ne} {
    width: 608px;
    padding: 60px 75px;
  }
`,$e=w.h1`
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.black};
  text-align: center;
  font-family: ${e=>e.theme.fonts.main.medium};
  font-size: ${e=>e.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${ne} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`,Ke=w.p`
  text-align: center;
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`,Je=w(Ee)`
  color: ${e=>e.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;function Le({title:e,children:t}){return z.jsxs(Ie,{children:[z.jsx($e,{children:e}),t]})}Le.propTypes={title:ee.string.isRequired,children:ee.element.isRequired};const _e=e=>e.auth.user,Re=e=>e.auth.token,Ne=e=>e.auth.isLoggedIn,Oe=e=>e.auth.isLoading,we=e=>e.auth.isNewUser,ke=e=>e.auth.error,Ze=()=>{const e=U(_e),t=U(Re),s=U(Ne),n=U(Oe),l=U(we),i=U(ke);return{user:e,token:t,isLoggedIn:s,isRefreshing:n,isNewUser:l,error:i}},Me=w.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${ne} {
    margin-bottom: 32px;
  }
`,ze=w.input`
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
`,pe=w.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${ne} {
    font-size: ${e=>e.theme.fontSizes.xs};
    bottom: -18px;
  }
`,Fe=w(pe)`
  color: ${e=>e.theme.colors.red};
`,Pe=w(pe)`
  color: ${e=>e.theme.colors.green};
`,Se=({successMessage:e,...t})=>{const[s,n]=be(t),l=n.touched&&n.error,i=n.touched&&!n.error;return z.jsx(z.Fragment,{children:z.jsxs(Me,{children:[z.jsx(ze,{...s,...t,$invalid:n.touched&&n.error,$valid:n.touched&&!n.error}),l?z.jsx(Fe,{children:n.error}):null,i&&e?z.jsx(Pe,{children:e}):null]})})};Se.propTypes={successMessage:ee.string};const Ae=w.button`
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
`,Be=({btnText:e})=>z.jsx(Ae,{type:"submit",children:e});Be.propTypes={btnText:ee.string.isRequired};function fe(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=fe(e[t]))&&(n&&(n+=" "),n+=s);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function S(){for(var e,t,s=0,n="";s<arguments.length;)(e=arguments[s++])&&(t=fe(e))&&(n&&(n+=" "),n+=t);return n}const G=e=>typeof e=="number"&&!isNaN(e),q=e=>typeof e=="string",L=e=>typeof e=="function",J=e=>q(e)||L(e)?e:null,re=e=>p.isValidElement(e)||q(e)||L(e)||G(e);function De(e,t,s){s===void 0&&(s=300);const{scrollHeight:n,style:l}=e;requestAnimationFrame(()=>{l.minHeight="initial",l.height=n+"px",l.transition=`all ${s}ms`,requestAnimationFrame(()=>{l.height="0",l.padding="0",l.margin="0",setTimeout(t,s)})})}function oe(e){let{enter:t,exit:s,appendPosition:n=!1,collapse:l=!0,collapseDuration:i=300}=e;return function(o){let{children:r,position:x,preventExitTransition:E,done:v,nodeRef:h,isIn:C}=o;const c=n?`${t}--${x}`:t,d=n?`${s}--${x}`:s,m=p.useRef(0);return p.useLayoutEffect(()=>{const a=h.current,u=c.split(" "),b=$=>{$.target===h.current&&(a.dispatchEvent(new Event("d")),a.removeEventListener("animationend",b),a.removeEventListener("animationcancel",b),m.current===0&&$.type!=="animationcancel"&&a.classList.remove(...u))};a.classList.add(...u),a.addEventListener("animationend",b),a.addEventListener("animationcancel",b)},[]),p.useEffect(()=>{const a=h.current,u=()=>{a.removeEventListener("animationend",u),l?De(a,v,i):v()};C||(E?u():(m.current=1,a.className+=` ${d}`,a.addEventListener("animationend",u)))},[C]),y.createElement(y.Fragment,null,r)}}function ce(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const O={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(n=>n!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},Y=e=>{let{theme:t,type:s,...n}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...n})},ae={info:function(e){return y.createElement(Y,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(Y,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(Y,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(Y,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function He(e){const[,t]=p.useReducer(c=>c+1,0),[s,n]=p.useState([]),l=p.useRef(null),i=p.useRef(new Map).current,o=c=>s.indexOf(c)!==-1,r=p.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:c=>i.get(c)}).current;function x(c){let{containerId:d}=c;const{limit:m}=r.props;!m||d&&r.containerId!==d||(r.count-=r.queue.length,r.queue=[])}function E(c){n(d=>c==null?[]:d.filter(m=>m!==c))}function v(){const{toastContent:c,toastProps:d,staleId:m}=r.queue.shift();C(c,d,m)}function h(c,d){let{delay:m,staleId:a,...u}=d;if(!re(c)||function(N){return!l.current||r.props.enableMultiContainer&&N.containerId!==r.props.containerId||i.has(N.toastId)&&N.updateId==null}(u))return;const{toastId:b,updateId:$,data:f}=u,{props:g}=r,F=()=>E(b),P=$==null;P&&r.count++;const I={...g,style:g.toastStyle,key:r.toastKey++,...Object.fromEntries(Object.entries(u).filter(N=>{let[k,_]=N;return _!=null})),toastId:b,updateId:$,data:f,closeToast:F,isIn:!1,className:J(u.className||g.toastClassName),bodyClassName:J(u.bodyClassName||g.bodyClassName),progressClassName:J(u.progressClassName||g.progressClassName),autoClose:!u.isLoading&&(A=u.autoClose,Q=g.autoClose,A===!1||G(A)&&A>0?A:Q),deleteToast(){const N=ce(i.get(b),"removed");i.delete(b),O.emit(4,N);const k=r.queue.length;if(r.count=b==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),k>0){const _=b==null?r.props.limit:1;if(k===1||_===1)r.displayedToast++,v();else{const D=_>k?k:_;r.displayedToast=D;for(let R=0;R<D;R++)v()}}else t()}};var A,Q;I.iconOut=function(N){let{theme:k,type:_,isLoading:D,icon:R}=N,M=null;const H={theme:k,type:_};return R===!1||(L(R)?M=R(H):p.isValidElement(R)?M=p.cloneElement(R,H):q(R)||G(R)?M=R:D?M=ae.spinner():(X=>X in ae)(_)&&(M=ae[_](H))),M}(I),L(u.onOpen)&&(I.onOpen=u.onOpen),L(u.onClose)&&(I.onClose=u.onClose),I.closeButton=g.closeButton,u.closeButton===!1||re(u.closeButton)?I.closeButton=u.closeButton:u.closeButton===!0&&(I.closeButton=!re(g.closeButton)||g.closeButton);let B=c;p.isValidElement(c)&&!q(c.type)?B=p.cloneElement(c,{closeToast:F,toastProps:I,data:f}):L(c)&&(B=c({closeToast:F,toastProps:I,data:f})),g.limit&&g.limit>0&&r.count>g.limit&&P?r.queue.push({toastContent:B,toastProps:I,staleId:a}):G(m)?setTimeout(()=>{C(B,I,a)},m):C(B,I,a)}function C(c,d,m){const{toastId:a}=d;m&&i.delete(m);const u={content:c,props:d};i.set(a,u),n(b=>[...b,a].filter($=>$!==m)),O.emit(4,ce(u,u.props.updateId==null?"added":"updated"))}return p.useEffect(()=>(r.containerId=e.containerId,O.cancelEmit(3).on(0,h).on(1,c=>l.current&&E(c)).on(5,x).emit(2,r),()=>{i.clear(),O.emit(3,r)}),[]),p.useEffect(()=>{r.props=e,r.isToastActive=o,r.displayedToast=s.length}),{getToastToRender:function(c){const d=new Map,m=Array.from(i.values());return e.newestOnTop&&m.reverse(),m.forEach(a=>{const{position:u}=a.props;d.has(u)||d.set(u,[]),d.get(u).push(a)}),Array.from(d,a=>c(a[0],a[1]))},containerRef:l,isToastActive:o}}function le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ue(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function je(e){const[t,s]=p.useState(!1),[n,l]=p.useState(!1),i=p.useRef(null),o=p.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=p.useRef(e),{autoClose:x,pauseOnHover:E,closeToast:v,onClick:h,closeOnClick:C}=e;function c(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",u),document.addEventListener("mouseup",b),document.addEventListener("touchmove",u),document.addEventListener("touchend",b);const g=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=g.getBoundingClientRect(),g.style.transition="",o.x=le(f.nativeEvent),o.y=ue(f.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=g.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=g.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(f){if(o.boundingRect){const{top:g,bottom:F,left:P,right:I}=o.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=P&&o.x<=I&&o.y>=g&&o.y<=F?a():m()}}function m(){s(!0)}function a(){s(!1)}function u(f){const g=i.current;o.canDrag&&g&&(o.didMove=!0,t&&a(),o.x=le(f),o.y=ue(f),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),g.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,g.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function b(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",b);const f=i.current;if(o.canDrag&&o.didMove&&f){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return l(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}p.useEffect(()=>{r.current=e}),p.useEffect(()=>(i.current&&i.current.addEventListener("d",m,{once:!0}),L(e.onOpen)&&e.onOpen(p.isValidElement(e.children)&&e.children.props),()=>{const f=r.current;L(f.onClose)&&f.onClose(p.isValidElement(f.children)&&f.children.props)}),[]),p.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||a(),window.addEventListener("focus",m),window.addEventListener("blur",a)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",a))}),[e.pauseOnFocusLoss]);const $={onMouseDown:c,onTouchStart:c,onMouseUp:d,onTouchEnd:d};return x&&E&&($.onMouseEnter=a,$.onMouseLeave=m),C&&($.onClick=f=>{h&&h(f),o.canCloseOnClick&&v()}),{playToast:m,pauseToast:a,isRunning:t,preventExitTransition:n,toastRef:i,eventHandlers:$}}function he(e){let{closeToast:t,theme:s,ariaLabel:n="close"}=e;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:l=>{l.stopPropagation(),t(l)},"aria-label":n},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qe(e){let{delay:t,isRunning:s,closeToast:n,type:l="default",hide:i,className:o,style:r,controlledProgress:x,progress:E,rtl:v,isIn:h,theme:C}=e;const c=i||x&&E===0,d={...r,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:c?0:1};x&&(d.transform=`scaleX(${E})`);const m=S("Toastify__progress-bar",x?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${C}`,`Toastify__progress-bar--${l}`,{"Toastify__progress-bar--rtl":v}),a=L(o)?o({rtl:v,type:l,defaultClassName:m}):S(m,o);return y.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:a,style:d,[x&&E>=1?"onTransitionEnd":"onAnimationEnd"]:x&&E<1?null:()=>{h&&n()}})}const Qe=e=>{const{isRunning:t,preventExitTransition:s,toastRef:n,eventHandlers:l}=je(e),{closeButton:i,children:o,autoClose:r,onClick:x,type:E,hideProgressBar:v,closeToast:h,transition:C,position:c,className:d,style:m,bodyClassName:a,bodyStyle:u,progressClassName:b,progressStyle:$,updateId:f,role:g,progress:F,rtl:P,toastId:I,deleteToast:A,isIn:Q,isLoading:B,iconOut:N,closeOnClick:k,theme:_}=e,D=S("Toastify__toast",`Toastify__toast-theme--${_}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":k}),R=L(d)?d({rtl:P,position:c,type:E,defaultClassName:D}):S(D,d),M=!!F||!r,H={closeToast:h,type:E,theme:_};let X=null;return i===!1||(X=L(i)?i(H):p.isValidElement(i)?p.cloneElement(i,H):he(H)),y.createElement(C,{isIn:Q,done:A,position:c,preventExitTransition:s,nodeRef:n},y.createElement("div",{id:I,onClick:x,className:R,...l,style:m,ref:n},y.createElement("div",{...Q&&{role:g},className:L(a)?a({type:E}):S("Toastify__toast-body",a),style:u},N!=null&&y.createElement("div",{className:S("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},N),y.createElement("div",null,o)),X,y.createElement(qe,{...f&&!M?{key:`pb-${f}`}:{},rtl:P,theme:_,delay:r,isRunning:t,isIn:Q,closeToast:h,hide:v,type:E,style:$,className:b,controlledProgress:M,progress:F||0})))},se=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ue=oe(se("bounce",!0));oe(se("slide",!0));oe(se("zoom"));oe(se("flip"));const de=p.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:n,isToastActive:l}=He(e),{className:i,style:o,rtl:r,containerId:x}=e;function E(v){const h=S("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":r});return L(i)?i({position:v,rtl:r,defaultClassName:h}):S(h,J(i))}return p.useEffect(()=>{t&&(t.current=n.current)},[]),y.createElement("div",{ref:n,className:"Toastify",id:x},s((v,h)=>{const C=h.length?{...o}:{...o,pointerEvents:"none"};return y.createElement("div",{className:E(v),style:C,key:`container-${v}`},h.map((c,d)=>{let{content:m,props:a}=c;return y.createElement(Qe,{...a,isIn:l(a.toastId),style:{...a.style,"--nth":d+1,"--len":h.length},key:`toast-${a.key}`},m)}))}))});de.displayName="ToastContainer",de.defaultProps={position:"top-right",transition:Ue,autoClose:5e3,closeButton:he,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ie,j=new Map,V=[],Ve=1;function ge(){return""+Ve++}function Ge(e){return e&&(q(e.toastId)||G(e.toastId))?e.toastId:ge()}function W(e,t){return j.size>0?O.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function te(e,t){return{...t,type:t&&t.type||e,toastId:Ge(t)}}function K(e){return(t,s)=>W(t,te(e,s))}function T(e,t){return W(e,te("default",t))}T.loading=(e,t)=>W(e,te("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),T.promise=function(e,t,s){let n,{pending:l,error:i,success:o}=t;l&&(n=q(l)?T.loading(l,s):T.loading(l.render,{...s,...l}));const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},x=(v,h,C)=>{if(h==null)return void T.dismiss(n);const c={type:v,...r,...s,data:C},d=q(h)?{render:h}:h;return n?T.update(n,{...c,...d}):T(d.render,{...c,...d}),C},E=L(e)?e():e;return E.then(v=>x("success",o,v)).catch(v=>x("error",i,v)),E},T.success=K("success"),T.info=K("info"),T.error=K("error"),T.warning=K("warning"),T.warn=T.warning,T.dark=(e,t)=>W(e,te("default",{theme:"dark",...t})),T.dismiss=e=>{j.size>0?O.emit(1,e):V=V.filter(t=>e!=null&&t.options.toastId!==e)},T.clearWaitingQueue=function(e){return e===void 0&&(e={}),O.emit(5,e)},T.isActive=e=>{let t=!1;return j.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},T.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(n,l){let{containerId:i}=l;const o=j.get(i||ie);return o&&o.getToast(n)}(e,t);if(s){const{props:n,content:l}=s,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:ge()};i.toastId!==e&&(i.staleId=e);const o=i.render||l;delete i.render,W(o,i)}},0)},T.done=e=>{T.update(e,{progress:1})},T.onChange=e=>(O.on(4,e),()=>{O.off(4,e)}),T.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},T.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,e=>{ie=e.containerId||e,j.set(ie,e),V.forEach(t=>{O.emit(0,t.content,t.options)}),V=[]}).on(3,e=>{j.delete(e.containerId||e),j.size===0&&O.off(0).off(1).off(5)});export{Be as A,Se as F,T as Q,Ze as a,Ke as b,Je as c,Le as d,de as k,Ye as u};
