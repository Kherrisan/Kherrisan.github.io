(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{9496:function(e){"use strict";e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,o=void 0,i=void 0,l=[];return function(){var u,s="function"==typeof t?t():t,c=new Date().getTime(),d=!n||c-n>s;n=c;for(var f=arguments.length,p=Array(f),h=0;h<f;h++)p[h]=arguments[h];if(d&&r.leading)return r.accumulate?Promise.resolve(e.call(this,[p])).then(function(e){return e[0]}):Promise.resolve(e.call.apply(e,[this].concat(p)));if(o?clearTimeout(i):((u={}).promise=new Promise(function(e,t){u.resolve=e,u.reject=t}),o=u),l.push(p),i=setTimeout(a.bind(this),s),r.accumulate){var v=l.length-1;return o.promise.then(function(e){return e[v]})}return o.promise};function a(){var t=o;clearTimeout(i),Promise.resolve(r.accumulate?e.call(this,l):e.apply(this,l[l.length-1])).then(t.resolve,t.reject),l=[],o=null}}},3986:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(8575)}])},3209:function(e,t,r){"use strict";var n=r(5893),o=r(1664),i=r.n(o);let l=e=>{let{href:t,isExternal:r,headingSlot:o,iconSlot:l,children:a}=e,u=r?"a":i();return(0,n.jsx)(u,{href:t,...r?{target:"_blank",rel:"noopener noreferrer"}:{},children:(0,n.jsxs)("div",{className:"mb-6 border border-gray-400/30 cursor-pointer rounded block transition-all duration-150 hover:opacity-80 hover:shadow-lg",children:[(0,n.jsxs)("div",{className:"relative heading-text p-4 bg-white border-b border-gray-400/30 dark:bg-dark-900",children:[o,l]}),(0,n.jsx)("div",{className:"bg-light-300 p-4 dark:bg-dark-700",children:a})]})})};t.Z=l},8575:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return eB},default:function(){return eV}});var n,o,i,l,a,u,s=r(5893),c=r(9008),d=r.n(c),f=r(3209),p=r(1355),h=r(7294),v=r(2984),m=r(2351),g=r(3784),y=r(1363),x=r(4103),b=r(9946),w=r(2180),E=((n=E||{})[n.None=1]="None",n[n.Focusable=2]="Focusable",n[n.Hidden=4]="Hidden",n);let j=(0,m.yV)(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(2&r)==2||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,m.sY)({ourProps:o,theirProps:n,slot:{},defaultTag:"div",name:"Hidden"})});var C=r(4575),k=r(3781),S=r(7815),T=((o=T||{})[o.Forwards=0]="Forwards",o[o.Backwards=1]="Backwards",o),P=r(4879),N=r(1074),R=r(3855);function D(e,t,r,n){let o=(0,R.E)(r);(0,h.useEffect)(()=>{function r(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)},[e,t,n])}var F=r(1021);function O(e,t){let r=(0,h.useRef)([]),n=(0,k.z)(e);(0,h.useEffect)(()=>{for(let[e,o]of t.entries())if(r.current[e]!==o){let i=n(t);return r.current=t,i}},[n,...t])}var _=((i=_||{})[i.None=1]="None",i[i.InitialFocus=2]="InitialFocus",i[i.TabLock=4]="TabLock",i[i.FocusLock=8]="FocusLock",i[i.RestoreFocus=16]="RestoreFocus",i[i.All=30]="All",i);let A=Object.assign((0,m.yV)(function(e,t){let r,n=(0,h.useRef)(null),o=(0,g.T)(n,t),{initialFocus:i,containers:l,features:a=30,...u}=e;(0,w.H)()||(a=1);let s=(0,N.i)(n);!function({ownerDocument:e},t){let r=(0,h.useRef)(null);D(null==e?void 0:e.defaultView,"focusout",e=>{!t||r.current||(r.current=e.target)},!0),O(()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,C.C5)(r.current),r.current=null)},[t]);let n=(0,h.useRef)(!1);(0,h.useEffect)(()=>(n.current=!1,()=>{n.current=!0,(0,F.Y)(()=>{n.current&&((0,C.C5)(r.current),r.current=null)})}),[])}({ownerDocument:s},Boolean(16&a));let c=function({ownerDocument:e,container:t,initialFocus:r},n){let o=(0,h.useRef)(null);return O(()=>{if(!n)return;let i=t.current;if(!i)return;let l=null==e?void 0:e.activeElement;if(null!=r&&r.current){if((null==r?void 0:r.current)===l){o.current=l;return}}else if(i.contains(l)){o.current=l;return}null!=r&&r.current?(0,C.C5)(r.current):(0,C.jA)(i,C.TO.First)===C.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement},[n]),o}({ownerDocument:s,container:n,initialFocus:i},Boolean(2&a));!function({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){let i=(0,P.t)();D(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!i.current)return;let l=new Set(null==r?void 0:r.current);l.add(t);let a=n.current;if(!a)return;let u=e.target;u&&u instanceof HTMLElement?function(e,t){var r;for(let n of e)if(null!=(r=n.current)&&r.contains(t))return!0;return!1}(l,u)?(n.current=u,(0,C.C5)(u)):(e.preventDefault(),e.stopPropagation(),(0,C.C5)(a)):(0,C.C5)(n.current)},!0)}({ownerDocument:s,container:n,containers:l,previousActiveElement:c},Boolean(8&a));let d=(r=(0,h.useRef)(0),(0,S.s)("keydown",e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},!0),r),f=(0,k.z)(()=>{let e=n.current;e&&(0,v.E)(d.current,{[T.Forwards]:()=>(0,C.jA)(e,C.TO.First),[T.Backwards]:()=>(0,C.jA)(e,C.TO.Last)})});return h.createElement(h.Fragment,null,Boolean(4&a)&&h.createElement(j,{as:"button",type:"button",onFocus:f,features:E.Focusable}),(0,m.sY)({ourProps:{ref:o},theirProps:u,defaultTag:"div",name:"FocusTrap"}),Boolean(4&a)&&h.createElement(j,{as:"button",type:"button",onFocus:f,features:E.Focusable}))}),{features:_});var M=r(5466),L=r(6723);let Y=new Set,I=new Map;function B(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function V(e){let t=I.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var z=r(3935);let H=(0,h.createContext)(!1);function $(e){return h.createElement(H.Provider,{value:e.force},e.children)}let W=h.Fragment,Z=(0,m.yV)(function(e,t){let r=(0,h.useRef)(null),n=(0,g.T)((0,g.h)(e=>{r.current=e}),t),o=(0,N.i)(r),i=function(e){let t=(0,h.useContext)(H),r=(0,h.useContext)(G),n=(0,N.i)(e),[o,i]=(0,h.useState)(()=>{if(!t&&null!==r||"undefined"==typeof window)return null;let e=null==n?void 0:n.getElementById("headlessui-portal-root");if(e)return e;if(null===n)return null;let o=n.createElement("div");return o.setAttribute("id","headlessui-portal-root"),n.body.appendChild(o)});return(0,h.useEffect)(()=>{null!==o&&(null!=n&&n.body.contains(o)||null==n||n.body.appendChild(o))},[o,n]),(0,h.useEffect)(()=>{t||null!==r&&i(r.current)},[r,i,t]),o}(r),[l]=(0,h.useState)(()=>{var e;return"undefined"==typeof window?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),a=(0,w.H)(),u=(0,h.useRef)(!1);return(0,L.e)(()=>{if(u.current=!1,!(!i||!l))return i.contains(l)||(l.setAttribute("data-headlessui-portal",""),i.appendChild(l)),()=>{u.current=!0,(0,F.Y)(()=>{var e;u.current&&i&&l&&(i.removeChild(l),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i)))})}},[i,l]),a&&i&&l?(0,z.createPortal)((0,m.sY)({ourProps:{ref:n},theirProps:e,defaultTag:W,name:"Portal"}),l):null}),q=h.Fragment,G=(0,h.createContext)(null),U=Object.assign(Z,{Group:(0,m.yV)(function(e,t){let{target:r,...n}=e,o={ref:(0,g.T)(t)};return h.createElement(G.Provider,{value:r},(0,m.sY)({ourProps:o,theirProps:n,defaultTag:q,name:"Popover.Group"}))})}),K=(0,h.createContext)(null),X=(0,m.yV)(function(e,t){let r=function e(){let t=(0,h.useContext)(K);if(null===t){let r=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return t}(),n=`headlessui-description-${(0,b.M)()}`,o=(0,g.T)(t);(0,L.e)(()=>r.register(n),[n,r.register]);let i={ref:o,...r.props,id:n};return(0,m.sY)({ourProps:i,theirProps:e,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})});var J=r(6567);let Q=(0,h.createContext)(()=>{});Q.displayName="StackContext";var ee=((l=ee||{})[l.Add=0]="Add",l[l.Remove=1]="Remove",l);function et({children:e,onUpdate:t,type:r,element:n}){let o=(0,h.useContext)(Q),i=(0,k.z)((...e)=>{null==t||t(...e),o(...e)});return(0,L.e)(()=>(i(0,r,n),()=>i(1,r,n)),[i,r,n]),h.createElement(Q.Provider,{value:i},e)}var er=r(292),en=((a=en||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a),eo=((u=eo||{})[u.SetTitleId=0]="SetTitleId",u);let ei={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},el=(0,h.createContext)(null);function ea(e){let t=(0,h.useContext)(el);if(null===t){let r=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ea),r}return t}function eu(e,t){return(0,v.E)(t.type,ei,e,t)}el.displayName="DialogContext";let es=m.AN.RenderStrategy|m.AN.Static,ec=(0,m.yV)(function(e,t){let{open:r,onClose:n,initialFocus:o,__demoMode:i=!1,...l}=e,[a,u]=(0,h.useState)(0),s=(0,J.oJ)();void 0===r&&null!==s&&(r=(0,v.E)(s,{[J.ZM.Open]:!0,[J.ZM.Closed]:!1}));let c=(0,h.useRef)(new Set),d=(0,h.useRef)(null),f=(0,g.T)(d,t),p=(0,h.useRef)(null),x=(0,N.i)(d),C=e.hasOwnProperty("open")||null!==s,S=e.hasOwnProperty("onClose");if(!C&&!S)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!C)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!S)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof r)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);if("function"!=typeof n)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);let T=r?0:1,[P,R]=(0,h.useReducer)(eu,{titleId:null,descriptionId:null,panelRef:(0,h.createRef)()}),F=(0,k.z)(()=>n(!1)),O=(0,k.z)(e=>R({type:0,id:e})),_=!!(0,w.H)()&&!i&&0===T,z=a>1,H=null!==(0,h.useContext)(el);(function(e,t=!0){(0,L.e)(()=>{if(!t||!e.current)return;let r=e.current,n=(0,M.r)(r);if(n){for(let o of(Y.add(r),I.keys()))o.contains(r)&&(V(o),I.delete(o));return n.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let t of Y)if(e.contains(t))return;1===Y.size&&(I.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),B(e))}}),()=>{if(Y.delete(r),Y.size>0)n.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!I.has(e)){for(let t of Y)if(e.contains(t))return;I.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),B(e)}});else for(let e of I.keys())V(e),I.delete(e)}}},[t])})(d,!!z&&_),(0,er.O)(()=>{var e,t;return[...Array.from(null!=(e=null==x?void 0:x.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(!(e instanceof HTMLElement)||e.contains(p.current)||P.panelRef.current&&e.contains(P.panelRef.current))),null!=(t=P.panelRef.current)?t:d.current]},F,_&&!z),D(null==x?void 0:x.defaultView,"keydown",e=>{e.defaultPrevented||e.key===y.R.Escape&&0===T&&(z||(e.preventDefault(),e.stopPropagation(),F()))}),(0,h.useEffect)(()=>{var e;if(0!==T||H)return;let t=(0,M.r)(d);if(!t)return;let r=t.documentElement,n=null!=(e=t.defaultView)?e:window,o=r.style.overflow,i=r.style.paddingRight,l=n.innerWidth-r.clientWidth;if(r.style.overflow="hidden",l>0){let a=r.clientWidth-r.offsetWidth;r.style.paddingRight=`${l-a}px`}return()=>{r.style.overflow=o,r.style.paddingRight=i}},[T,H]),(0,h.useEffect)(()=>{if(0!==T||!d.current)return;let e=new IntersectionObserver(e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&F()});return e.observe(d.current),()=>e.disconnect()},[T,d,F]);let[W,Z]=function(){let[e,t]=(0,h.useState)([]);return[e.length>0?e.join(" "):void 0,(0,h.useMemo)(()=>function(e){let r=(0,k.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,h.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return h.createElement(K.Provider,{value:n},e.children)},[t])]}(),q=`headlessui-dialog-${(0,b.M)()}`,G=(0,h.useMemo)(()=>[{dialogState:T,close:F,setTitleId:O},P],[T,P,F,O]),X=(0,h.useMemo)(()=>({open:0===T}),[T]),Q={ref:f,id:q,role:"dialog","aria-modal":0===T||void 0,"aria-labelledby":P.titleId,"aria-describedby":W};return h.createElement(et,{type:"Dialog",element:d,onUpdate:(0,k.z)((e,t,r)=>{"Dialog"===t&&(0,v.E)(e,{[ee.Add](){c.current.add(r),u(e=>e+1)},[ee.Remove](){c.current.add(r),u(e=>e-1)}})})},h.createElement($,{force:!0},h.createElement(U,null,h.createElement(el.Provider,{value:G},h.createElement(U.Group,{target:d},h.createElement($,{force:!1},h.createElement(Z,{slot:X,name:"Dialog.Description"},h.createElement(A,{initialFocus:o,containers:c,features:_?(0,v.E)(z?"parent":"leaf",{parent:A.features.RestoreFocus,leaf:A.features.All&~A.features.FocusLock}):A.features.None},(0,m.sY)({ourProps:Q,theirProps:l,slot:X,defaultTag:"div",features:es,visible:0===T,name:"Dialog"})))))))),h.createElement(j,{features:E.Hidden,ref:p}))}),ed=(0,m.yV)(function(e,t){let[{dialogState:r,close:n}]=ea("Dialog.Overlay"),o=(0,g.T)(t),i=`headlessui-dialog-overlay-${(0,b.M)()}`,l=(0,k.z)(e=>{if(e.target===e.currentTarget){if((0,x.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),n()}}),a=(0,h.useMemo)(()=>({open:0===r}),[r]);return(0,m.sY)({ourProps:{ref:o,id:i,"aria-hidden":!0,onClick:l},theirProps:e,slot:a,defaultTag:"div",name:"Dialog.Overlay"})}),ef=Object.assign(ec,{Backdrop:(0,m.yV)(function(e,t){let[{dialogState:r},n]=ea("Dialog.Backdrop"),o=(0,g.T)(t),i=`headlessui-dialog-backdrop-${(0,b.M)()}`;(0,h.useEffect)(()=>{if(null===n.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[n.panelRef]);let l=(0,h.useMemo)(()=>({open:0===r}),[r]);return h.createElement($,{force:!0},h.createElement(U,null,(0,m.sY)({ourProps:{ref:o,id:i,"aria-hidden":!0},theirProps:e,slot:l,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,m.yV)(function(e,t){let[{dialogState:r},n]=ea("Dialog.Panel"),o=(0,g.T)(t,n.panelRef),i=`headlessui-dialog-panel-${(0,b.M)()}`,l=(0,h.useMemo)(()=>({open:0===r}),[r]),a=(0,k.z)(e=>{e.stopPropagation()});return(0,m.sY)({ourProps:{ref:o,id:i,onClick:a},theirProps:e,slot:l,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:ed,Title:(0,m.yV)(function(e,t){let[{dialogState:r,setTitleId:n}]=ea("Dialog.Title"),o=`headlessui-dialog-title-${(0,b.M)()}`,i=(0,g.T)(t);(0,h.useEffect)(()=>(n(o),()=>n(null)),[o,n]);let l=(0,h.useMemo)(()=>({open:0===r}),[r]);return(0,m.sY)({ourProps:{ref:i,id:o},theirProps:e,slot:l,defaultTag:"h2",name:"Dialog.Title"})}),Description:X});var ep=r(9496),eh=r.n(ep),ev=function(){return(ev=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},em={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},eg=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,r=eh()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=r,t=null,r=function(){for(var r,n,o,i,l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];t&&t();var u=(r=e.apply(void 0,l),n=null,o=null,i=new Promise(function(e,t){n=e,o=t}),r&&r.then(function(e){n&&n(e)},function(e){o&&o(e)}),{promise:i,resolve:function(e){n&&n(e)},reject:function(e){o&&o(e)},cancel:function(){n=null,o=null}}),s=u.promise;return t=u.cancel,s}),{func:r}},e.prototype.getDebouncedFunction=function(e){var t,r=(t=this.config.options).key.apply(t,e);return null==r?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[r]||(this.debounceCache[r]=this._createDebouncedFunction()),this.debounceCache[r])},e}(),ey=function(e,t,r){var n=ev({},em,r),o=new eg({func:e,wait:t,options:n});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.getDebouncedFunction(e).func.apply(void 0,e)}};function ex(){return(ex=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var eb="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?h.useLayoutEffect:h.useEffect,ew=function(e){var t=(0,h.useRef)(e);return eb(function(){t.current=e}),(0,h.useCallback)(function(){return t.current},[t])},eE={status:"not-requested",loading:!1,result:void 0,error:void 0},ej={status:"loading",loading:!0,result:void 0,error:void 0},eC=function(){},ek={initialState:function(e){return e&&e.executeOnMount?ej:eE},executeOnMount:!0,executeOnUpdate:!0,setLoading:function(e){return ej},setResult:function(e,t){return{status:"success",loading:!1,result:e,error:void 0}},setError:function(e,t){return{status:"error",loading:!1,result:void 0,error:e}},onSuccess:eC,onError:eC},eS=function(e){var t=(0,h.useState)(function(){return e.initialState(e)}),r=t[0],n=t[1],o=(0,h.useCallback)(function(){return n(e.initialState(e))},[n,e]),i=(0,h.useCallback)(function(){return n(e.setLoading(r))},[r,n]),l=(0,h.useCallback)(function(t){return n(e.setResult(t,r))},[r,n]),a=(0,h.useCallback)(function(t){return n(e.setError(t,r))},[r,n]),u=(0,h.useCallback)(function(e){return n(ex({},r,{},e))},[r,n]);return{value:r,set:n,merge:u,reset:o,setLoading:i,setResult:l,setError:a}},eT=function(){var e=(0,h.useRef)(!1);return(0,h.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),function(){return e.current}},eP=function(){var e=(0,h.useRef)(null);return{set:function(t){return e.current=t},get:function(){return e.current},is:function(t){return e.current===t}}},eN=function(e,t,r){t||(t=[]);var n=ex({},ek,{},r),o=(0,h.useState)(null),i=o[0],l=o[1],a=eS(n),u=eT(),s=eP(),c=function(e){return u()&&s.is(e)},d=ew(function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=function(){try{return Promise.resolve(e.apply(void 0,r))}catch(t){return Promise.reject(t)}}();return l(r),s.set(i),a.setLoading(),i.then(function(e){c(i)&&a.setResult(e),n.onSuccess(e,{isCurrent:function(){return s.is(i)}})},function(e){c(i)&&a.setError(e),n.onError(e,{isCurrent:function(){return s.is(i)}})}),i}),f=(0,h.useCallback)(function(){return d().apply(void 0,arguments)},[d]),p=!u();return(0,h.useEffect)(function(){var e=function(){return d().apply(void 0,t)};p&&n.executeOnMount&&e(),!p&&n.executeOnUpdate&&e()},t),ex({},a.value,{set:a.set,merge:a.merge,reset:a.reset,execute:f,currentPromise:s.get(),currentParams:i})},eR=r(6893),eD=function(e){var t=(0,h.useRef)();return t.current||(t.current={v:e()}),t.current.v},eF=r(5675),eO=r.n(eF),e_=r(1664),eA=r.n(e_);let eM=()=>{let[e,t]=(0,h.useState)(""),r=async e=>{let t=await fetch("/api/search/".concat(e));return await t.json()},n=eD(()=>ey(r,1e3)),o=eN(async()=>0===e.length?[]:n(e),[e],void 0);return{query:e,setQuery:t,results:o}},eL=e=>{let{searchOpen:t,setSearchOpen:r}=e,n=()=>r(!1),{query:o,setQuery:i,results:l}=eM();return(0,s.jsx)(p.u,{appear:!0,show:t,as:h.Fragment,children:(0,s.jsx)(ef,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:n,children:(0,s.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,s.jsx)(p.u.Child,{as:h.Fragment,enter:"ease-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(ef.Overlay,{className:"fixed inset-0 bg-light-200/30 backdrop-blur backdrop-filter dark:bg-dark-200/30"})}),(0,s.jsx)(p.u.Child,{as:h.Fragment,enter:"ease-out duration-150",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-150",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsxs)("div",{className:"my-20 inline-block w-full max-w-3xl transform overflow-hidden rounded border border-gray-400/30 text-left shadow-xl transition-all ",children:[(0,s.jsxs)(ef.Title,{as:"h3",className:"primary-text relative",children:[(0,s.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,s.jsx)(eR.jRj,{size:18})}),(0,s.jsx)("input",{type:"text",id:"search-box",className:"block w-full border-b border-gray-400/30 bg-gray-50 p-2.5 pt-4 pl-10 focus:outline-none focus-visible:outline-none dark:bg-dark-700",placeholder:"Search in blog posts...",value:o,onChange:e=>i(e.target.value)})]}),(0,s.jsxs)("div",{className:"primary-text bg-white dark:bg-dark-800",children:[l.loading&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"animate-pulse",children:(0,s.jsx)(eO(),{src:"/images/purr-sleep.png",alt:"purr loading",width:300,height:300})}),(0,s.jsx)("div",{className:"secondary-text pb-4",children:"Loading ..."})]}),l.error&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(eO(),{src:"/images/error-result.png",alt:"errored out",width:450,height:300}),(0,s.jsxs)("div",{className:"secondary-text pb-4",children:["Error: ",l.error.message]})]}),l.result&&(0,s.jsx)(s.Fragment,{children:0===l.result.length?(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(eO(),{src:"/images/empty-list.png",alt:"empty list",width:300,height:300}),(0,s.jsx)("div",{className:"secondary-text pb-4",children:"Nothing here..."})]}):l.result.map((e,t)=>(0,s.jsxs)(eA(),{className:"flex cursor-pointer justify-between border-b border-gray-400/30 p-4 hover:bg-light-200 dark:hover:bg-dark-700",href:"/blog/".concat(e.properties.slug.rich_text[0].plain_text),passHref:!0,children:[(0,s.jsx)("div",{className:"w-9",children:e.icon.emoji}),(0,s.jsxs)("div",{className:"flex-1 overflow-hidden truncate",children:[(0,s.jsx)("div",{className:"pb-1 font-bold",children:e.properties.name.title[0].text.content}),(0,s.jsx)("div",{className:"secondary-text pb-1",children:e.properties.preview.rich_text[0].plain_text}),(0,s.jsx)("div",{className:"secondary-text font-mono text-xs",children:e.properties.date.date.start})]})]},t))})]})]})})]})})})};var eY=r(3001);let eI=e=>{let{posts:t}=e,{privateAccessable:r}=(0,h.useContext)(eY.w),[n,o]=(0,h.useState)(!1),[i,l]=(0,h.useState)(null);r||(t=t.filter(e=>{var t;return!(null===(t=e.properties)||void 0===t?void 0:t.private).checkbox}));let a=new Set,u=t.map(e=>{var t,r,n;let o=(null===(t=e.icon)||void 0===t?void 0:t.type)==="emoji"?e.icon.emoji:"\uD83C\uDF91",i=e.properties,l="results"in i.slug&&"rich_text"===i.slug.results[0].type?i.slug.results[0].rich_text.plain_text:"",u="results"in i.name&&"title"===i.name.results[0].type?i.name.results[0].title.plain_text:"",s="results"in i.preview&&"rich_text"===i.preview.results[0].type?i.preview.results[0].rich_text.plain_text:"",c="date"===i.date.type&&null!==(n=null===(r=i.date.date)||void 0===r?void 0:r.start)&&void 0!==n?n:"",d="results"in i.author?i.author.results:[],f="select"in i.category?i.category.select:null;return(null==f?void 0:f.name)&&a.add(f.name),{id:e.id,emoji:o,slug:l,name:u,preview:s,date:c,author:d,category:f}});return i&&(u=u.filter(e=>{var t;return(null===(t=e.category)||void 0===t?void 0:t.name)===i})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d(),{children:(0,s.jsx)("title",{children:"Kendrick Zou - Blog"})}),(0,s.jsx)(eL,{searchOpen:n,setSearchOpen:o}),(0,s.jsxs)("div",{className:"mx-auto max-w-3xl container px-6",children:[(0,s.jsx)("h1",{className:"heading-text my-8 font-extrabold lg:text-5xl md:text-4xl text-3xl",children:"Blog"}),u.map(e=>{var t,r;return(0,s.jsxs)(f.Z,{href:"/blog/".concat(e.slug),isExternal:!1,headingSlot:(0,s.jsx)("span",{className:"font-bold text-lg",children:e.name}),iconSlot:(0,s.jsx)("div",{className:"absolute right-4 -bottom-4 text-2xl",children:e.emoji}),children:[(0,s.jsx)("div",{className:"primary-text text-sm truncate",children:e.preview}),(0,s.jsxs)("div",{className:"secondary-text flex flex-wrap items-center space-x-2 text-sm",children:[(0,s.jsx)("span",{children:new Date(e.date).toLocaleDateString()}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsx)("span",{className:"text-orange-400",children:null===(t=e.category)||void 0===t?void 0:null===(r=t.name)||void 0===r?void 0:r.toLowerCase()})]}),(0,s.jsx)("div",{className:"secondary-text flex flex-wrap items-center space-x-2 text-sm"})]},e.id)})]}),(0,s.jsx)("div",{className:"flex-1"})]})};var eB=!0,eV=eI}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=3986)}),_N_E=e.O()}]);