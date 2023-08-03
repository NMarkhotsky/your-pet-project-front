import{s as O,b as T,I as se,P as z,j as x,t as fe,r as me,a6 as he,a4 as be,a as xe,T as ve}from"./index-df96e4a9.js";import{i as ye}from"./catImg-34c1bda9.js";const Ce=O.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
  margin-right: auto;
  /* width: 280px; */
  height: 44px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: ${({theme:a})=>a.boxShadow.main};

  @media ${T} {
    width: 608px;
  }
`,ke=O.input`
  width: 100%;
  padding: 14px 36px 13px 20px;
  border-radius: 24px;
  border: none;
  color: ${({theme:a})=>a.colors.grey};
  font-family: ${({theme:a})=>a.fonts.secondary.medium};
  font-size: ${({theme:a})=>a.fontSizes.sm};

  &:focus {
    outline: 1px solid ${({theme:a})=>a.colors.blue};
  }

  @media ${T} {
    padding: 10px 80px 10px 20px;
    font-size: ${({theme:a})=>a.fontSizes.lg};
  }
`,Pe=O.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`,Le=O.button`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-right: ${({value:a})=>a?"10px":"12px"};

  @media ${T} {
    margin-right: ${({value:a})=>a?"10px":"20px"};
  }

  transition: transform ${({theme:a})=>a.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:a})=>a.transitionHover};
  }
`,Ne=O.button`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;

  @media ${T} {
    margin-right: 20px;
  }

  transition: transform ${({theme:a})=>a.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({theme:a})=>a.transitionHover};
  }
`,pe=O(se)``,we=({value:a,onChange:G,onSubmit:K,onDelete:U})=>x.jsxs(Ce,{onSubmit:K,children:[x.jsx(ke,{type:"text",value:a,onChange:Q=>G(Q.target.value),placeholder:fe("other_search")}),x.jsxs(Pe,{children:[x.jsx(Le,{type:"submit",value:a,onClick:K,children:x.jsx(pe,{iconName:"icon-search",fill:"#54ADFF"})}),a&&x.jsx(Ne,{type:"button",onClick:U,children:x.jsx(pe,{iconName:"icon-cross",stroke:"#FFC107"})})]})]});we.propTypes={value:z.string,onChange:z.func.isRequired,onSubmit:z.func.isRequired,onDelete:z.func.isRequired};var ue={exports:{}};(function(a,G){(function(K,U){a.exports=U(me)})(he,K=>(()=>{var U={703:(g,d,C)=>{var t=C(414);function F(){}function W(){}W.resetWarningCache=F,g.exports=function(){function b(le,S,X,Z,ce,V){if(V!==t){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function j(){return b}b.isRequired=b;var J={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:j,element:b,elementType:b,instanceOf:j,node:b,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:W,resetWarningCache:F};return J.PropTypes=J,J}},697:(g,d,C)=>{g.exports=C(703)()},414:g=>{g.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:g=>{g.exports=K}},Q={};function y(g){var d=Q[g];if(d!==void 0)return d.exports;var C=Q[g]={exports:{}};return U[g](C,C.exports,y),C.exports}y.n=g=>{var d=g&&g.__esModule?()=>g.default:()=>g;return y.d(d,{a:d}),d},y.d=(g,d)=>{for(var C in d)y.o(d,C)&&!y.o(g,C)&&Object.defineProperty(g,C,{enumerable:!0,get:d[C]})},y.o=(g,d)=>Object.prototype.hasOwnProperty.call(g,d),y.r=g=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})};var re={};return(()=>{y.r(re),y.d(re,{default:()=>ge});var g=y(98),d=y.n(g),C=y(697),t=y.n(C);function F(){return F=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},F.apply(this,arguments)}var W=function(r){var o=r.pageClassName,l=r.pageLinkClassName,c=r.page,_=r.selected,q=r.activeClassName,R=r.activeLinkClassName,n=r.getEventListener,e=r.pageSelectedHandler,u=r.href,i=r.extraAriaContext,s=r.pageLabelBuilder,p=r.rel,m=r.ariaLabel||"Page "+c+(i?" "+i:""),v=null;return _&&(v="page",m=r.ariaLabel||"Page "+c+" is your current page",o=o!==void 0?o+" "+q:q,l!==void 0?R!==void 0&&(l=l+" "+R):l=R),d().createElement("li",{className:o},d().createElement("a",F({rel:p,role:u?void 0:"button",className:l,href:u,tabIndex:_?"-1":"0","aria-label":m,"aria-current":v,onKeyPress:e},n(e)),s(c)))};W.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const b=W;function j(){return j=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},j.apply(this,arguments)}var J=function(r){var o=r.breakLabel,l=r.breakAriaLabel,c=r.breakClassName,_=r.breakLinkClassName,q=r.breakHandler,R=r.getEventListener,n=c||"break";return d().createElement("li",{className:n},d().createElement("a",j({className:_,role:"button",tabIndex:"0","aria-label":l,onKeyPress:q},R(q)),o))};J.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const le=J;function S(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??o}function X(r){return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},X(r)}function Z(){return Z=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},Z.apply(this,arguments)}function ce(r,o){for(var l=0;l<o.length;l++){var c=o[l];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function V(r,o){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,c){return l.__proto__=c,l},V(r,o)}function ee(r,o){if(o&&(X(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(r)}function L(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function te(r){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},te(r)}function k(r,o,l){return o in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,r}var ie=function(r){(function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&V(n,e)})(R,r);var o,l,c,_,q=(c=R,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var n,e=te(c);if(_){var u=te(this).constructor;n=Reflect.construct(e,arguments,u)}else n=e.apply(this,arguments);return ee(this,n)});function R(n){var e,u;return function(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}(this,R),k(L(e=q.call(this,n)),"handlePreviousPage",function(i){var s=e.state.selected;e.handleClick(i,null,s>0?s-1:void 0,{isPrevious:!0})}),k(L(e),"handleNextPage",function(i){var s=e.state.selected,p=e.props.pageCount;e.handleClick(i,null,s<p-1?s+1:void 0,{isNext:!0})}),k(L(e),"handlePageSelected",function(i,s){if(e.state.selected===i)return e.callActiveCallback(i),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,i)}),k(L(e),"handlePageChange",function(i){e.state.selected!==i&&(e.setState({selected:i}),e.callCallback(i))}),k(L(e),"getEventListener",function(i){return k({},e.props.eventListener,i)}),k(L(e),"handleClick",function(i,s,p){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},v=m.isPrevious,E=v!==void 0&&v,M=m.isNext,Y=M!==void 0&&M,H=m.isBreak,N=H!==void 0&&H,$=m.isActive,A=$!==void 0&&$;i.preventDefault?i.preventDefault():i.returnValue=!1;var B=e.state.selected,f=e.props.onClick,w=p;if(f){var P=f({index:s,selected:B,nextSelectedPage:p,event:i,isPrevious:E,isNext:Y,isBreak:N,isActive:A});if(P===!1)return;Number.isInteger(P)&&(w=P)}w!==void 0&&e.handlePageChange(w)}),k(L(e),"handleBreakClick",function(i,s){var p=e.state.selected;e.handleClick(s,i,p<i?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),k(L(e),"callCallback",function(i){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:i})}),k(L(e),"callActiveCallback",function(i){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:i})}),k(L(e),"getElementPageRel",function(i){var s=e.state.selected,p=e.props,m=p.nextPageRel,v=p.prevPageRel,E=p.selectedPageRel;return s-1===i?v:s===i?E:s+1===i?m:void 0}),k(L(e),"pagination",function(){var i=[],s=e.props,p=s.pageRangeDisplayed,m=s.pageCount,v=s.marginPagesDisplayed,E=s.breakLabel,M=s.breakClassName,Y=s.breakLinkClassName,H=s.breakAriaLabels,N=e.state.selected;if(m<=p)for(var $=0;$<m;$++)i.push(e.getPageElement($));else{var A=p/2,B=p-A;N>m-p/2?A=p-(B=m-N):N<p/2&&(B=p-(A=N));var f,w,P=function(D){return e.getPageElement(D)},h=[];for(f=0;f<m;f++){var ae=f+1;if(ae<=v)h.push({type:"page",index:f,display:P(f)});else if(ae>m-v)h.push({type:"page",index:f,display:P(f)});else if(f>=N-A&&f<=N+(N===0&&p>1?B-1:B))h.push({type:"page",index:f,display:P(f)});else if(E&&h.length>0&&h[h.length-1].display!==w&&(p>0||v>0)){var oe=f<N?H.backward:H.forward;w=d().createElement(le,{key:f,breakAriaLabel:oe,breakLabel:E,breakClassName:M,breakLinkClassName:Y,breakHandler:e.handleBreakClick.bind(null,f),getEventListener:e.getEventListener}),h.push({type:"break",index:f,display:w})}}h.forEach(function(D,I){var ne=D;D.type==="break"&&h[I-1]&&h[I-1].type==="page"&&h[I+1]&&h[I+1].type==="page"&&h[I+1].index-h[I-1].index<=2&&(ne={type:"page",index:D.index,display:P(D.index)}),i.push(ne.display)})}return i}),n.initialPage!==void 0&&n.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(n.initialPage,") and forcePage (").concat(n.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),u=n.initialPage?n.initialPage:n.forcePage?n.forcePage:0,e.state={selected:u},e}return o=R,(l=[{key:"componentDidMount",value:function(){var n=this.props,e=n.initialPage,u=n.disableInitialCallback,i=n.extraAriaContext,s=n.pageCount,p=n.forcePage;e===void 0||u||this.callCallback(e),i&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),p!==void 0&&p>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(n){this.props.forcePage!==void 0&&this.props.forcePage!==n.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(n.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var n=this.state.selected,e=this.props,u=e.pageCount,i=n+e.pageRangeDisplayed;return i>=u?u-1:i}},{key:"getBackwardJump",value:function(){var n=this.state.selected-this.props.pageRangeDisplayed;return n<0?0:n}},{key:"getElementHref",value:function(n){var e=this.props,u=e.hrefBuilder,i=e.pageCount,s=e.hrefAllControls;if(u)return s||n>=0&&n<i?u(n+1,i,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(n){var e=n===this.state.selected;if(this.props.ariaLabelBuilder&&n>=0&&n<this.props.pageCount){var u=this.props.ariaLabelBuilder(n+1,e);return this.props.extraAriaContext&&!e&&(u=u+" "+this.props.extraAriaContext),u}}},{key:"getPageElement",value:function(n){var e=this.state.selected,u=this.props,i=u.pageClassName,s=u.pageLinkClassName,p=u.activeClassName,m=u.activeLinkClassName,v=u.extraAriaContext,E=u.pageLabelBuilder;return d().createElement(b,{key:n,pageSelectedHandler:this.handlePageSelected.bind(null,n),selected:e===n,rel:this.getElementPageRel(n),pageClassName:i,pageLinkClassName:s,activeClassName:p,activeLinkClassName:m,extraAriaContext:v,href:this.getElementHref(n),ariaLabel:this.ariaLabelBuilder(n),page:n+1,pageLabelBuilder:E,getEventListener:this.getEventListener})}},{key:"render",value:function(){var n=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&n!==void 0)return n&&n(this.props);var e=this.props,u=e.disabledClassName,i=e.disabledLinkClassName,s=e.pageCount,p=e.className,m=e.containerClassName,v=e.previousLabel,E=e.previousClassName,M=e.previousLinkClassName,Y=e.previousAriaLabel,H=e.prevRel,N=e.nextLabel,$=e.nextClassName,A=e.nextLinkClassName,B=e.nextAriaLabel,f=e.nextRel,w=this.state.selected,P=w===0,h=w===s-1,ae="".concat(S(E)).concat(P?" ".concat(S(u)):""),oe="".concat(S($)).concat(h?" ".concat(S(u)):""),D="".concat(S(M)).concat(P?" ".concat(S(i)):""),I="".concat(S(A)).concat(h?" ".concat(S(i)):""),ne=P?"true":"false",de=h?"true":"false";return d().createElement("ul",{className:p||m,role:"navigation","aria-label":"Pagination"},d().createElement("li",{className:ae},d().createElement("a",Z({className:D,href:this.getElementHref(w-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ne,"aria-label":Y,rel:H},this.getEventListener(this.handlePreviousPage)),v)),this.pagination(),d().createElement("li",{className:oe},d().createElement("a",Z({className:I,href:this.getElementHref(w+1),tabIndex:h?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":de,"aria-label":B,rel:f},this.getEventListener(this.handleNextPage)),N)))}}])&&ce(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),R}(g.Component);k(ie,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),k(ie,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ge=ie})(),re})())})(ue);var je=ue.exports;const Re=be(je),Ee=O.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  .pagination {
    padding: 8px 12px;
    border-radius: 45px;

    display: flex;
    justify-content: center;
    gap: 7px;

    box-shadow: ${({theme:a})=>a.boxShadow.secondary};
    list-style: none;
  }

  .item {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${({theme:a})=>a.colors.blueLight};

    background-color: transparent;

    @media ${T} {
      width: 34px;
      height: 34px;
    }
  }

  .link {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${a=>a.theme.fonts.secondary.regular};
    font-size: ${a=>a.theme.fontSizes.md};
    line-height: 15px;

    color: ${({theme:a})=>a.colors.blueLight};
    cursor: pointer;
  }

  .prevLink {
    @extend .link;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    margin-left: 2px;

    fill: ${({theme:a})=>a.colors.blue};

    &[aria-disabled='true'] {
      opacity: 0.2;
      cursor: default;
    }

    @media ${T} {
      margin-top: 3px;
      margin-left: 3px;
      width: 24px;
      height: 24px;
    }
  }

  .nextLink {
    @extend .link;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    margin-left: 2px;

    fill: ${({theme:a})=>a.colors.blue};

    &[aria-disabled='true'] {
      opacity: 0.2;
      cursor: default;
    }

    @media ${T} {
      margin-top: 3px;
      margin-left: 3px;
      width: 24px;
      height: 24px;
    }
  }

  .active {
    @extend .item;

    background-color: ${({theme:a})=>a.colors.blue};
    color: ${({theme:a})=>a.colors.bgdColor};
    border-color: ${({theme:a})=>a.colors.blue};
  }
`,Oe=({handlePageChange:a,pageCount:G=1})=>x.jsx(Ee,{children:x.jsx(Re,{nextLabel:x.jsx(se,{iconName:"icon-pagination-arrow-right",width:"16",height:"7"}),onPageChange:a,pageRangeDisplayed:3,marginPagesDisplayed:1,pageCount:G,previousLabel:x.jsx(se,{iconName:"icon-pagination-arrow-left",width:"16",height:"7"}),pageClassName:"item",pageLinkClassName:"link",previousClassName:"item",previousLinkClassName:"prevLink",nextClassName:"item",nextLinkClassName:"nextLink",breakLabel:"...",breakClassName:"item",breakLinkClassName:"link",activeClassName:"active",renderOnZeroPageCount:null,className:"pagination"})});Oe.propTypes={handlePageChange:z.func.isRequired,pageCount:z.number.isRequired,currentPage:z.number};const De=()=>{window.scrollTo({top:0,behavior:"smooth"})},Se=O.div`
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
`,Te=O.h1`
  color: ${a=>a.theme.colors.text};
  font-family: ${a=>a.theme.fonts.main.bold};
  font-size: ${a=>a.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${T} {
    font-family: ${a=>a.theme.fonts.main.semiBold};
    font-size: ${a=>a.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`,$e=O.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${T} {
    max-width: 250px;
  }

  @media ${xe} {
    max-width: 292px;
  }
`,Ie=()=>x.jsxs(Se,{children:[x.jsx(Te,{children:x.jsxs(ve,{i18nKey:"sorry_message",children:[x.jsx("p",{children:"Sorry..."})," There is no information on your request :("," "]})}),x.jsx($e,{src:ye,alt:"Cat with tongue"})]});export{Ie as N,Oe as P,we as S,De as s};
