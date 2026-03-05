(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var SA={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function Ey(){if(Vm)return tl;Vm=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return tl.Fragment=t,tl.jsx=i,tl.jsxs=i,tl}var km;function vy(){return km||(km=1,SA.exports=Ey()),SA.exports}var Xi=vy(),CA={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function yy(){if(qm)return le;qm=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function y(D,Z,pt){this.props=D,this.context=Z,this.refs=x,this.updater=pt||v}y.prototype.isReactComponent={},y.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function m(){}m.prototype=y.prototype;function L(D,Z,pt){this.props=D,this.context=Z,this.refs=x,this.updater=pt||v}var w=L.prototype=new m;w.constructor=L,C(w,y.prototype),w.isPureReactComponent=!0;var T=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function F(D,Z,pt,vt,bt,it){return pt=it.ref,{$$typeof:r,type:D,key:Z,ref:pt!==void 0?pt:null,props:it}}function H(D,Z){return F(D.type,Z,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function b(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pt){return Z[pt]})}var U=/\/+/g;function j(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?b(""+D.key):Z.toString(36)}function st(){}function rt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(st,st):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ct(D,Z,pt,vt,bt){var it=typeof D;(it==="undefined"||it==="boolean")&&(D=null);var ht=!1;if(D===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(D.$$typeof){case r:case t:ht=!0;break;case g:return ht=D._init,ct(ht(D._payload),Z,pt,vt,bt)}}if(ht)return bt=bt(D),ht=vt===""?"."+j(D,0):vt,T(bt)?(pt="",ht!=null&&(pt=ht.replace(U,"$&/")+"/"),ct(bt,Z,pt,"",function(Yt){return Yt})):bt!=null&&(R(bt)&&(bt=H(bt,pt+(bt.key==null||D&&D.key===bt.key?"":(""+bt.key).replace(U,"$&/")+"/")+ht)),Z.push(bt)),1;ht=0;var yt=vt===""?".":vt+":";if(T(D))for(var Lt=0;Lt<D.length;Lt++)vt=D[Lt],it=yt+j(vt,Lt),ht+=ct(vt,Z,pt,it,bt);else if(Lt=E(D),typeof Lt=="function")for(D=Lt.call(D),Lt=0;!(vt=D.next()).done;)vt=vt.value,it=yt+j(vt,Lt++),ht+=ct(vt,Z,pt,it,bt);else if(it==="object"){if(typeof D.then=="function")return ct(rt(D),Z,pt,vt,bt);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ht}function N(D,Z,pt){if(D==null)return D;var vt=[],bt=0;return ct(D,vt,"","",function(it){return Z.call(pt,it,bt++)}),vt}function k(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(pt){(D._status===0||D._status===-1)&&(D._status=1,D._result=pt)},function(pt){(D._status===0||D._status===-1)&&(D._status=2,D._result=pt)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var Y=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function gt(){}return le.Children={map:N,forEach:function(D,Z,pt){N(D,function(){Z.apply(this,arguments)},pt)},count:function(D){var Z=0;return N(D,function(){Z++}),Z},toArray:function(D){return N(D,function(Z){return Z})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=L,le.StrictMode=s,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cloneElement=function(D,Z,pt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var vt=C({},D.props),bt=D.key,it=void 0;if(Z!=null)for(ht in Z.ref!==void 0&&(it=void 0),Z.key!==void 0&&(bt=""+Z.key),Z)!O.call(Z,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&Z.ref===void 0||(vt[ht]=Z[ht]);var ht=arguments.length-2;if(ht===1)vt.children=pt;else if(1<ht){for(var yt=Array(ht),Lt=0;Lt<ht;Lt++)yt[Lt]=arguments[Lt+2];vt.children=yt}return F(D.type,bt,void 0,void 0,it,vt)},le.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},le.createElement=function(D,Z,pt){var vt,bt={},it=null;if(Z!=null)for(vt in Z.key!==void 0&&(it=""+Z.key),Z)O.call(Z,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(bt[vt]=Z[vt]);var ht=arguments.length-2;if(ht===1)bt.children=pt;else if(1<ht){for(var yt=Array(ht),Lt=0;Lt<ht;Lt++)yt[Lt]=arguments[Lt+2];bt.children=yt}if(D&&D.defaultProps)for(vt in ht=D.defaultProps,ht)bt[vt]===void 0&&(bt[vt]=ht[vt]);return F(D,it,void 0,void 0,null,bt)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:h,render:D}},le.isValidElement=R,le.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:k}},le.memo=function(D,Z){return{$$typeof:d,type:D,compare:Z===void 0?null:Z}},le.startTransition=function(D){var Z=P.T,pt={};P.T=pt;try{var vt=D(),bt=P.S;bt!==null&&bt(pt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(gt,Y)}catch(it){Y(it)}finally{P.T=Z}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(D){return P.H.use(D)},le.useActionState=function(D,Z,pt){return P.H.useActionState(D,Z,pt)},le.useCallback=function(D,Z){return P.H.useCallback(D,Z)},le.useContext=function(D){return P.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,Z){return P.H.useDeferredValue(D,Z)},le.useEffect=function(D,Z,pt){var vt=P.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(D,Z)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(D,Z,pt){return P.H.useImperativeHandle(D,Z,pt)},le.useInsertionEffect=function(D,Z){return P.H.useInsertionEffect(D,Z)},le.useLayoutEffect=function(D,Z){return P.H.useLayoutEffect(D,Z)},le.useMemo=function(D,Z){return P.H.useMemo(D,Z)},le.useOptimistic=function(D,Z){return P.H.useOptimistic(D,Z)},le.useReducer=function(D,Z,pt){return P.H.useReducer(D,Z,pt)},le.useRef=function(D){return P.H.useRef(D)},le.useState=function(D){return P.H.useState(D)},le.useSyncExternalStore=function(D,Z,pt){return P.H.useSyncExternalStore(D,Z,pt)},le.useTransition=function(){return P.H.useTransition()},le.version="19.1.1",le}var Ym;function td(){return Ym||(Ym=1,CA.exports=yy()),CA.exports}var is=td(),xA={exports:{}},el={},MA={exports:{}},IA={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function Sy(){return Xm||(Xm=1,function(r){function t(N,k){var Y=N.length;N.push(k);t:for(;0<Y;){var gt=Y-1>>>1,D=N[gt];if(0<l(D,k))N[gt]=k,N[Y]=D,Y=gt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var k=N[0],Y=N.pop();if(Y!==k){N[0]=Y;t:for(var gt=0,D=N.length,Z=D>>>1;gt<Z;){var pt=2*(gt+1)-1,vt=N[pt],bt=pt+1,it=N[bt];if(0>l(vt,Y))bt<D&&0>l(it,vt)?(N[gt]=it,N[bt]=Y,gt=bt):(N[gt]=vt,N[pt]=Y,gt=pt);else if(bt<D&&0>l(it,Y))N[gt]=it,N[bt]=Y,gt=bt;else break t}}return k}function l(N,k){var Y=N.sortIndex-k.sortIndex;return Y!==0?Y:N.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],d=[],g=1,_=null,E=3,v=!1,C=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function T(N){for(var k=i(d);k!==null;){if(k.callback===null)s(d);else if(k.startTime<=N)s(d),k.sortIndex=k.expirationTime,t(p,k);else break;k=i(d)}}function P(N){if(x=!1,T(N),!C)if(i(p)!==null)C=!0,O||(O=!0,j());else{var k=i(d);k!==null&&ct(P,k.startTime-N)}}var O=!1,F=-1,H=5,R=-1;function b(){return y?!0:!(r.unstable_now()-R<H)}function U(){if(y=!1,O){var N=r.unstable_now();R=N;var k=!0;try{t:{C=!1,x&&(x=!1,L(F),F=-1),v=!0;var Y=E;try{e:{for(T(N),_=i(p);_!==null&&!(_.expirationTime>N&&b());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,E=_.priorityLevel;var D=gt(_.expirationTime<=N);if(N=r.unstable_now(),typeof D=="function"){_.callback=D,T(N),k=!0;break e}_===i(p)&&s(p),T(N)}else s(p);_=i(p)}if(_!==null)k=!0;else{var Z=i(d);Z!==null&&ct(P,Z.startTime-N),k=!1}}break t}finally{_=null,E=Y,v=!1}k=void 0}}finally{k?j():O=!1}}}var j;if(typeof w=="function")j=function(){w(U)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,rt=st.port2;st.port1.onmessage=U,j=function(){rt.postMessage(null)}}else j=function(){m(U,0)};function ct(N,k){F=m(function(){N(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(N){switch(E){case 1:case 2:case 3:var k=3;break;default:k=E}var Y=E;E=k;try{return N()}finally{E=Y}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=E;E=N;try{return k()}finally{E=Y}},r.unstable_scheduleCallback=function(N,k,Y){var gt=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?gt+Y:gt):Y=gt,N){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,N={id:g++,callback:k,priorityLevel:N,startTime:Y,expirationTime:D,sortIndex:-1},Y>gt?(N.sortIndex=Y,t(d,N),i(p)===null&&N===i(d)&&(x?(L(F),F=-1):x=!0,ct(P,Y-gt))):(N.sortIndex=D,t(p,N),C||v||(C=!0,O||(O=!0,j()))),N},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(N){var k=E;return function(){var Y=E;E=k;try{return N.apply(this,arguments)}finally{E=Y}}}}(IA)),IA}var Wm;function Cy(){return Wm||(Wm=1,MA.exports=Sy()),MA.exports}var BA={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function xy(){if(Km)return Qn;Km=1;var r=td();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Qn.flushSync=function(p){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=d,s.p=g,s.d.f()}},Qn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},Qn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Qn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),E=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:E,fetchPriority:v}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:E,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Qn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},Qn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Qn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},Qn.requestFormReset=function(p){s.d.r(p)},Qn.unstable_batchedUpdates=function(p,d){return p(d)},Qn.useFormState=function(p,d,g){return f.H.useFormState(p,d,g)},Qn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qn.version="19.1.1",Qn}var Jm;function My(){if(Jm)return BA.exports;Jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),BA.exports=xy(),BA.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Iy(){if(jm)return el;jm=1;var r=Cy(),t=td(),i=My();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var A=u.alternate;if(A===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===A.child){for(A=u.child;A;){if(A===a)return h(u),e;if(A===o)return h(u),n;A=A.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=A;else{for(var S=!1,I=u.child;I;){if(I===a){S=!0,a=u,o=A;break}if(I===o){S=!0,o=u,a=A;break}I=I.sibling}if(!S){for(I=A.child;I;){if(I===a){S=!0,a=A,o=u;break}if(I===o){S=!0,o=A,a=u;break}I=I.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case w:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case T:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:rt(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return rt(e(n))}catch{}}return null}var ct=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},gt=[],D=-1;function Z(e){return{current:e}}function pt(e){0>D||(e.current=gt[D],gt[D]=null,D--)}function vt(e,n){D++,gt[D]=e.current,e.current=n}var bt=Z(null),it=Z(null),ht=Z(null),yt=Z(null);function Lt(e,n){switch(vt(ht,n),vt(it,e),vt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?mm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=mm(n),e=_m(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(bt),vt(bt,e)}function Yt(){pt(bt),pt(it),pt(ht)}function ne(e){e.memoizedState!==null&&vt(yt,e);var n=bt.current,a=_m(n,e.type);n!==a&&(vt(it,e),vt(bt,a))}function ze(e){it.current===e&&(pt(bt),pt(it)),yt.current===e&&(pt(yt),Ko._currentValue=Y)}var pe=Object.prototype.hasOwnProperty,z=r.unstable_scheduleCallback,be=r.unstable_cancelCallback,Jt=r.unstable_shouldYield,ve=r.unstable_requestPaint,Ft=r.unstable_now,He=r.unstable_getCurrentPriorityLevel,Ot=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,We=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,Q=r.unstable_IdlePriority,M=r.log,et=r.unstable_setDisableYieldValue,ft=null,Et=null;function ut(e){if(typeof M=="function"&&et(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(ft,e)}catch{}}var Qt=Math.clz32?Math.clz32:qt,It=Math.log,Vt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(It(e)/Vt|0)|0}var St=256,Dt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,A=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var I=o&134217727;return I!==0?(o=I&~A,o!==0?u=Wt(o):(S&=I,S!==0?u=Wt(S):a||(a=I&~e,a!==0&&(u=Wt(a))))):(I=o&~A,I!==0?u=Wt(I):S!==0?u=Wt(S):a||(a=o&~e,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&A)===0&&(A=u&-u,a=n&-n,A>=a||A===32&&(a&4194048)!==0)?n:u}function Tt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Mt(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,n,a,o,u,A){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var I=e.entanglements,G=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var At=31-Qt(a),mt=1<<At;I[At]=0,G[At]=-1;var nt=tt[At];if(nt!==null)for(tt[At]=null,At=0;At<nt.length;At++){var at=nt[At];at!==null&&(at.lane&=-536870913)}a&=~mt}o!==0&&_t(e,o,0),A!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=A&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Pm(e.type))}function Ci(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,Ze="__reactProps$"+un,Qi="__reactContainer$"+un,Js="__reactEvents$"+un,Ml="__reactListeners$"+un,js="__reactHandles$"+un,ro="__reactResources$"+un,Ni="__reactMarker$"+un;function Zs(e){delete e[fn],delete e[Ze],delete e[Js],delete e[Ml],delete e[js]}function ta(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Sm(e);e!==null;){if(a=e[fn])return a;e=Sm(e)}return n}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[fn]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ba(e){var n=e[ro];return n||(n=e[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Ni]=!0}var Il=new Set,Bl={};function B(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Bl[e]=n,e=0;e<n.length;e++)Il.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},J={};function xt(e){return pe.call(J,e)?!0:pe.call(lt,e)?!1:ot.test(e)?J[e]=!0:(lt[e]=!0,!1)}function wt(e,n,a){if(xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ut(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var jt,$t;function kt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+$t}var ue=!1;function xe(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var nt=at}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(at){nt=at}e.call(mt.prototype)}}else{try{throw Error()}catch(at){nt=at}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var A=o.DetermineComponentFrameRoot(),S=A[0],I=A[1];if(S&&I){var G=S.split(`
`),tt=I.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===tt.length)for(o=G.length-1,u=tt.length-1;1<=o&&0<=u&&G[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==tt[u]){var At=`
`+G[o].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?kt(a):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return kt("Activity");default:return""}}function Ue(e){try{var n="";do n+=qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ke(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,A=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,A.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=ke(e))}function Dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function mn(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(e,n,a,o,u,A,S,I){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Un(e,S,fe(n)):a!=null?Un(e,S,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&A!=null&&(e.defaultChecked=!!A),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),I!=null&&typeof I!="function"&&typeof I!="symbol"&&typeof I!="boolean"?e.name=""+fe(I):e.removeAttribute("name")}function Gn(e,n,a,o,u,A,S,I){if(A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(e.type=A),n!=null||a!=null){if(!(A!=="submit"&&A!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,I||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=I?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Un(e,n,a){n==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function $s(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Xn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var g0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||g0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _d(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&md(e,u,o)}else for(var A in n)n.hasOwnProperty(A)&&md(e,A,n[A])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var m0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(e){return _0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,er=null;function Ed(e){var n=Ia(e);if(n&&(e=n.stateNode)){var a=e[Ze]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ze]||null;if(!u)throw Error(s(90));Oe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Dn(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var Cu=!1;function vd(e,n,a){if(Cu)return e(n,a);Cu=!0;try{var o=e(n);return o}finally{if(Cu=!1,(tr!==null||er!==null)&&(hc(),tr&&(n=tr,e=er,er=tr=null,Ed(n),e)))for(n=0;n<e.length;n++)Ed(e[n])}}function oo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ze]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(ea)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){xu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{xu=!1}var ba=null,Mu=null,Tl=null;function yd(){if(Tl)return Tl;var e,n=Mu,a=n.length,o,u="value"in ba?ba.value:ba.textContent,A=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[A-o];o++);return Tl=u.slice(e,1<o?1-o:void 0)}function Rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function Sd(){return!1}function Wn(e){function n(a,o,u,A,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=A,this.target=S,this.currentTarget=null;for(var I in e)e.hasOwnProperty(I)&&(a=e[I],this[I]=a?a(A):A[I]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?wl:Sd,this.isPropagationStopped=Sd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Wn(fs),co=g({},fs,{view:0,detail:0}),E0=Wn(co),Iu,Bu,uo,Ul=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uo&&(uo&&e.type==="mousemove"?(Iu=e.screenX-uo.screenX,Bu=e.screenY-uo.screenY):Bu=Iu=0,uo=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),Cd=Wn(Ul),v0=g({},Ul,{dataTransfer:0}),y0=Wn(v0),S0=g({},co,{relatedTarget:0}),bu=Wn(S0),C0=g({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=Wn(C0),M0=g({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=Wn(M0),B0=g({},fs,{data:0}),xd=Wn(B0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=R0[e])?!!n[e]:!1}function Tu(){return w0}var D0=g({},co,{key:function(e){if(e.key){var n=b0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U0=Wn(D0),L0=g({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=Wn(L0),Q0=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),N0=Wn(Q0),P0=g({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Wn(P0),O0=g({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Wn(O0),z0=g({},fs,{newState:0,oldState:0}),H0=Wn(z0),V0=[9,13,27,32],Ru=ea&&"CompositionEvent"in window,fo=null;ea&&"documentMode"in document&&(fo=document.documentMode);var k0=ea&&"TextEvent"in window&&!fo,Id=ea&&(!Ru||fo&&8<fo&&11>=fo),Bd=" ",bd=!1;function Td(e,n){switch(e){case"keyup":return V0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function q0(e,n){switch(e){case"compositionend":return Rd(n);case"keypress":return n.which!==32?null:(bd=!0,Bd);case"textInput":return e=n.data,e===Bd&&bd?null:e;default:return null}}function Y0(e,n){if(nr)return e==="compositionend"||!Ru&&Td(e,n)?(e=yd(),Tl=Mu=ba=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!X0[e.type]:n==="textarea"}function Dd(e,n,a,o){tr?er?er.push(o):er=[o]:tr=o,n=Ec(n,"onChange"),0<n.length&&(a=new Dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ao=null,ho=null;function W0(e){Am(e,0)}function Ll(e){var n=us(e);if(Dn(n))return e}function Ud(e,n){if(e==="change")return n}var Ld=!1;if(ea){var wu;if(ea){var Du="oninput"in document;if(!Du){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Du=typeof Qd.oninput=="function"}wu=Du}else wu=!1;Ld=wu&&(!document.documentMode||9<document.documentMode)}function Nd(){Ao&&(Ao.detachEvent("onpropertychange",Pd),ho=Ao=null)}function Pd(e){if(e.propertyName==="value"&&Ll(ho)){var n=[];Dd(n,ho,e,Su(e)),vd(W0,n)}}function K0(e,n,a){e==="focusin"?(Nd(),Ao=n,ho=a,Ao.attachEvent("onpropertychange",Pd)):e==="focusout"&&Nd()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(ho)}function j0(e,n){if(e==="click")return Ll(n)}function Z0(e,n){if(e==="input"||e==="change")return Ll(n)}function $0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:$0;function po(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!pe.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Od(e,n){var a=Fd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fd(a)}}function Gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xi(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tv=ea&&"documentMode"in document&&11>=document.documentMode,ir=null,Lu=null,go=null,Qu=!1;function Hd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||ir==null||ir!==xi(o)||(o=ir,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&po(go,o)||(go=o,o=Ec(Lu,"onSelect"),0<o.length&&(n=new Dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ir)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ar={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Nu={},Vd={};ea&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function hs(e){if(Nu[e])return Nu[e];if(!ar[e])return e;var n=ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return Nu[e]=n[a];return e}var kd=hs("animationend"),qd=hs("animationiteration"),Yd=hs("animationstart"),ev=hs("transitionrun"),nv=hs("transitionstart"),iv=hs("transitioncancel"),Xd=hs("transitionend"),Wd=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Mi(e,n){Wd.set(e,n),B(n,[e])}var Kd=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Kd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ue(n)},Kd.set(e,n),n)}return{value:e,source:n,stack:Ue(n)}}var pi=[],sr=0,Fu=0;function Ql(){for(var e=sr,n=Fu=sr=0;n<e;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var A=pi[n];if(pi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}A!==0&&Jd(a,u,A)}}function Nl(e,n,a,o){pi[sr++]=e,pi[sr++]=n,pi[sr++]=a,pi[sr++]=o,Fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return Nl(e,n,a,o),Pl(e)}function rr(e,n){return Nl(e,null,null,n),Pl(e)}function Jd(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,A=e.return;A!==null;)A.childLanes|=a,o=A.alternate,o!==null&&(o.childLanes|=a),A.tag===22&&(e=A.stateNode,e===null||e._visibility&1||(u=!0)),e=A,A=A.return;return e.tag===3?(A=e.stateNode,u&&n!==null&&(u=31-Qt(a),e=A.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),A):null}function Pl(e){if(50<zo)throw zo=0,Yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var or={};function av(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new av(e,n,a,o)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fl(e,n,a,o,u,A){var S=0;if(o=e,typeof e=="function")Gu(e)&&(S=1);else if(typeof e=="string")S=ry(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=ii(31,a,n,u),e.elementType=R,e.lanes=A,e;case C:return ds(a.children,u,A,n);case x:S=8,u|=24;break;case y:return e=ii(12,a,n,u|2),e.elementType=y,e.lanes=A,e;case P:return e=ii(13,a,n,u),e.elementType=P,e.lanes=A,e;case O:return e=ii(19,a,n,u),e.elementType=O,e.lanes=A,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case m:case w:S=10;break t;case L:S=9;break t;case T:S=11;break t;case F:S=14;break t;case H:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(S,a,n,u),n.elementType=e,n.type=o,n.lanes=A,n}function ds(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Hu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lr=[],cr=0,Ol=null,Gl=0,gi=[],mi=0,ps=null,ia=1,aa="";function gs(e,n){lr[cr++]=Gl,lr[cr++]=Ol,Ol=e,Gl=n}function Zd(e,n,a){gi[mi++]=ia,gi[mi++]=aa,gi[mi++]=ps,ps=e;var o=ia;e=aa;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var A=32-Qt(n)+u;if(30<A){var S=u-u%5;A=(o&(1<<S)-1).toString(32),o>>=S,u-=S,ia=1<<32-Qt(n)+u|a<<u|o,aa=A+e}else ia=1<<A|a<<u|o,aa=e}function Vu(e){e.return!==null&&(gs(e,1),Zd(e,1,0))}function ku(e){for(;e===Ol;)Ol=lr[--cr],lr[cr]=null,Gl=lr[--cr],lr[cr]=null;for(;e===ps;)ps=gi[--mi],gi[mi]=null,aa=gi[--mi],gi[mi]=null,ia=gi[--mi],gi[mi]=null}var zn=null,tn=null,Be=!1,ms=null,Pi=!1,qu=Error(s(519));function _s(e){var n=Error(s(418,""));throw Eo(di(n,e)),qu}function $d(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[Ze]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)_e(Vo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),$s(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||gm(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=vc),n=!0):n=!1,n||_s(e)}function tp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:zn=zn.return}}function mo(e){if(e!==zn)return!1;if(!Be)return tp(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lA(e.type,e.memoizedProps)),a=!a),a&&tn&&_s(e),tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=Bi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,ka(e.type)?(e=AA,AA=null,tn=e):tn=n):tn=zn?Bi(e.stateNode.nextSibling):null;return!0}function _o(){tn=zn=null,Be=!1}function ep(){var e=ms;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ms=null),e}function Eo(e){ms===null?ms=[e]:ms.push(e)}var Yu=Z(null),Es=null,sa=null;function Ta(e,n,a){vt(Yu,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Yu.current,pt(Yu)}function Xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var A=u.dependencies;if(A!==null){var S=u.child;A=A.firstContext;t:for(;A!==null;){var I=A;A=u;for(var G=0;G<n.length;G++)if(I.context===n[G]){A.lanes|=a,I=A.alternate,I!==null&&(I.lanes|=a),Xu(A.return,a,e),o||(S=null);break t}A=I.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,A=S.alternate,A!==null&&(A.lanes|=a),Xu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function vo(e,n,a,o){e=null;for(var u=n,A=!1;u!==null;){if(!A){if((u.flags&524288)!==0)A=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var I=u.type;ni(u.pendingProps.value,S.value)||(e!==null?e.push(I):e=[I])}}else if(u===yt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&Wu(n,e,a,o),n.flags|=262144}function zl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){Es=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return np(Es,e)}function Hl(e,n){return Es===null&&vs(e),np(e,n)}function np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var sv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},rv=r.unstable_scheduleCallback,ov=r.unstable_NormalPriority,An={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new sv,data:new Map,refCount:0}}function yo(e){e.refCount--,e.refCount===0&&rv(ov,function(){e.controller.abort()})}var So=null,Ju=0,ur=0,fr=null;function lv(e,n){if(So===null){var a=So=[];Ju=0,ur=$f(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ju++,n.then(ip,ip),n}function ip(){if(--Ju===0&&So!==null){fr!==null&&(fr.status="fulfilled");var e=So;So=null,ur=0,fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var ap=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&lv(e,n),ap!==null&&ap(e,n)};var ys=Z(null);function ju(){var e=ys.current;return e!==null?e:Ve.pooledCache}function Vl(e,n){n===null?vt(ys,ys.current):vt(ys,n.pool)}function sp(){var e=ju();return e===null?null:{parent:An._currentValue,pool:e}}var Co=Error(s(460)),rp=Error(s(474)),kl=Error(s(542)),Zu={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ql(){}function lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ql,ql),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e;default:if(typeof n.status=="string")n.then(ql,ql);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e}throw xo=n,Co}}var xo=null;function cp(){if(xo===null)throw Error(s(459));var e=xo;return xo=null,e}function up(e){if(e===Co||e===kl)throw Error(s(483))}var Ra=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Pl(e),Jd(e,null,a),n}return Nl(e,o,n,a),Pl(e)}function Mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zt(e,a)}}function ef(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,A=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};A===null?u=A=S:A=A.next=S,a=a.next}while(a!==null);A===null?u=A=n:A=A.next=n}else u=A=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:A,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nf=!1;function Io(){if(nf){var e=fr;if(e!==null)throw e}}function Bo(e,n,a,o){nf=!1;var u=e.updateQueue;Ra=!1;var A=u.firstBaseUpdate,S=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var G=I,tt=G.next;G.next=null,S===null?A=tt:S.next=tt,S=G;var At=e.alternate;At!==null&&(At=At.updateQueue,I=At.lastBaseUpdate,I!==S&&(I===null?At.firstBaseUpdate=tt:I.next=tt,At.lastBaseUpdate=G))}if(A!==null){var mt=u.baseState;S=0,At=tt=G=null,I=A;do{var nt=I.lane&-536870913,at=nt!==I.lane;if(at?(Ee&nt)===nt:(o&nt)===nt){nt!==0&&nt===ur&&(nf=!0),At!==null&&(At=At.next={lane:0,tag:I.tag,payload:I.payload,callback:null,next:null});t:{var ee=e,Zt=I;nt=n;var Ne=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){mt=ee.call(Ne,mt,nt);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,nt=typeof ee=="function"?ee.call(Ne,mt,nt):ee,nt==null)break t;mt=g({},mt,nt);break t;case 2:Ra=!0}}nt=I.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:I.tag,payload:I.payload,callback:I.callback,next:null},At===null?(tt=At=at,G=mt):At=At.next=at,S|=nt;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;at=I,I=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);At===null&&(G=mt),u.baseState=G,u.firstBaseUpdate=tt,u.lastBaseUpdate=At,A===null&&(u.shared.lanes=0),Ga|=S,e.lanes=S,e.memoizedState=mt}}function fp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ap(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fp(a[e],n)}var Ar=Z(null),Yl=Z(0);function hp(e,n){e=ha,vt(Yl,e),vt(Ar,n),ha=e|n.baseLanes}function af(){vt(Yl,ha),vt(Ar,Ar.current)}function sf(){ha=Yl.current,pt(Ar),pt(Yl)}var Ua=0,he=null,Le=null,on=null,Xl=!1,hr=!1,Ss=!1,Wl=0,bo=0,dr=null,uv=0;function nn(){throw Error(s(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function of(e,n,a,o,u,A){return Ua=A,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Jp:jp,Ss=!1,A=a(o,u),Ss=!1,hr&&(A=pp(n,a,o,u)),dp(e),A}function dp(e){N.H=tc;var n=Le!==null&&Le.next!==null;if(Ua=0,on=Le=he=null,Xl=!1,bo=0,dr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&zl(e)&&(_n=!0))}function pp(e,n,a,o){he=e;var u=0;do{if(hr&&(dr=null),bo=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,on=Le=null,e.updateQueue!=null){var A=e.updateQueue;A.lastEffect=null,A.events=null,A.stores=null,A.memoCache!=null&&(A.memoCache.index=0)}N.H=mv,A=n(a,o)}while(hr);return A}function fv(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?To(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(he.flags|=1024),n}function lf(){var e=Wl!==0;return Wl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(Xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xl=!1}Ua=0,on=Le=he=null,hr=!1,bo=Wl=0,dr=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?he.memoizedState=on=e:on=on.next=e,on}function ln(){if(Le===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=on===null?he.memoizedState:on.next;if(n!==null)on=n,Le=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},on===null?he.memoizedState=on=e:on=on.next=e}return on}function ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var n=bo;return bo+=1,dr===null&&(dr=[]),e=lp(dr,e,n),n=he,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Jp:jp),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===w)return Ln(e)}throw Error(s(438,String(e)))}function Af(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ff(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=b;return n.index++,a}function oa(e,n){return typeof n=="function"?n(e):n}function Jl(e){var n=ln();return hf(n,Le,e)}function hf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,A=o.pending;if(A!==null){if(u!==null){var S=u.next;u.next=A.next,A.next=S}n.baseQueue=u=A,o.pending=null}if(A=e.baseState,u===null)e.memoizedState=A;else{n=u.next;var I=S=null,G=null,tt=n,At=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(Ee&mt)===mt:(Ua&mt)===mt){var nt=tt.revertLane;if(nt===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===ur&&(At=!0);else if((Ua&nt)===nt){tt=tt.next,nt===ur&&(At=!0);continue}else mt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(I=G=mt,S=A):G=G.next=mt,he.lanes|=nt,Ga|=nt;mt=tt.action,Ss&&a(A,mt),A=tt.hasEagerState?tt.eagerState:a(A,mt)}else nt={lane:mt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(I=G=nt,S=A):G=G.next=nt,he.lanes|=mt,Ga|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(G===null?S=A:G.next=I,!ni(A,e.memoizedState)&&(_n=!0,At&&(a=fr,a!==null)))throw a;e.memoizedState=A,e.baseState=S,e.baseQueue=G,o.lastRenderedState=A}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function df(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,A=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do A=e(A,S.action),S=S.next;while(S!==u);ni(A,n.memoizedState)||(_n=!0),n.memoizedState=A,n.baseQueue===null&&(n.baseState=A),a.lastRenderedState=A}return[A,o]}function gp(e,n,a){var o=he,u=ln(),A=Be;if(A){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ni((Le||u).memoizedState,a);S&&(u.memoizedState=a,_n=!0),u=u.queue;var I=Ep.bind(null,o,u,e);if(Ro(2048,8,I,[e]),u.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,pr(9,jl(),_p.bind(null,o,u,a,n),null),Ve===null)throw Error(s(349));A||(Ua&124)!==0||mp(o,n,a)}return a}function mp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=ff(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _p(e,n,a,o){n.value=a,n.getSnapshot=o,vp(n)&&yp(e)}function Ep(e,n,a){return a(function(){vp(n)&&yp(e)})}function vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function yp(e){var n=rr(e,2);n!==null&&li(n,e,2)}function pf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Ss){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},n}function Sp(e,n,a,o){return e.baseState=a,hf(e,Le,typeof o=="function"?o:oa)}function Av(e,n,a,o,u){if($l(e))throw Error(s(485));if(e=n.action,e!==null){var A={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){A.listeners.push(S)}};N.T!==null?a(!0):A.isTransition=!1,o(A),a=n.pending,a===null?(A.next=n.pending=A,Cp(n,A)):(A.next=a.next,n.pending=a.next=A)}}function Cp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var A=N.T,S={};N.T=S;try{var I=a(u,o),G=N.S;G!==null&&G(S,I),xp(e,n,I)}catch(tt){gf(e,n,tt)}finally{N.T=A}}else try{A=a(u,o),xp(e,n,A)}catch(tt){gf(e,n,tt)}}function xp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mp(e,n,o)},function(o){return gf(e,n,o)}):Mp(e,n,a)}function Mp(e,n,a){n.status="fulfilled",n.value=a,Ip(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cp(e,a)))}function gf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==o)}e.action=null}function Ip(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bp(e,n){return n}function bp(e,n){if(Be){var a=Ve.formState;if(a!==null){t:{var o=he;if(Be){if(tn){e:{for(var u=tn,A=Pi;u.nodeType!==8;){if(!A){u=null;break e}if(u=Bi(u.nextSibling),u===null){u=null;break e}}A=u.data,u=A==="F!"||A==="F"?u:null}if(u){tn=Bi(u.nextSibling),o=u.data==="F!";break t}}_s(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:n},a.queue=o,a=Xp.bind(null,he,o),o.dispatch=a,o=pf(!1),A=yf.bind(null,he,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Av.bind(null,he,u,A,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Tp(e){var n=ln();return Rp(n,Le,e)}function Rp(e,n,a){if(n=hf(e,n,Bp)[0],e=Jl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(S){throw S===Co?kl:S}else o=n;n=ln();var u=n.queue,A=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,pr(9,jl(),hv.bind(null,u,a),null)),[o,A,e]}function hv(e,n){e.action=n}function wp(e){var n=ln(),a=Le;if(a!==null)return Rp(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function pr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=ff(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jl(){return{destroy:void 0,resource:void 0}}function Dp(){return ln().memoizedState}function Zl(e,n,a,o){var u=Kn();o=o===void 0?null:o,he.flags|=e,u.memoizedState=pr(1|n,jl(),a,o)}function Ro(e,n,a,o){var u=ln();o=o===void 0?null:o;var A=u.memoizedState.inst;Le!==null&&o!==null&&rf(o,Le.memoizedState.deps)?u.memoizedState=pr(n,A,a,o):(he.flags|=e,u.memoizedState=pr(1|n,A,a,o))}function Up(e,n){Zl(8390656,8,e,n)}function Lp(e,n){Ro(2048,8,e,n)}function Qp(e,n){return Ro(4,2,e,n)}function Np(e,n){return Ro(4,4,e,n)}function Pp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fp(e,n,a){a=a!=null?a.concat([e]):null,Ro(4,4,Pp.bind(null,n,e),a)}function mf(){}function Op(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=e(),Ss){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(Ua&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Vg(),he.lanes|=e,Ga|=e,a)}function zp(e,n,a,o){return ni(a,n)?a:Ar.current!==null?(e=_f(e,a,o),ni(e,n)||(_n=!0),e):(Ua&42)===0?(_n=!0,e.memoizedState=a):(e=Vg(),he.lanes|=e,Ga|=e,n)}function Hp(e,n,a,o,u){var A=k.p;k.p=A!==0&&8>A?A:8;var S=N.T,I={};N.T=I,yf(e,!1,n,a);try{var G=u(),tt=N.S;if(tt!==null&&tt(I,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var At=cv(G,o);wo(e,n,At,oi(e))}else wo(e,n,o,oi(e))}catch(mt){wo(e,n,{then:function(){},status:"rejected",reason:mt},oi())}finally{k.p=A,N.T=S}}function dv(){}function Ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Vp(e).queue;Hp(e,u,n,Y,a===null?dv:function(){return kp(e),a(o)})}function Vp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function kp(e){var n=Vp(e).next.queue;wo(e,n,{},oi())}function vf(){return Ln(Ko)}function qp(){return ln().memoizedState}function Yp(){return ln().memoizedState}function pv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=wa(a);var o=Da(n,e,a);o!==null&&(li(o,n,a),Mo(o,n,a)),n={cache:Ku()},e.payload=n;return}n=n.return}}function gv(e,n,a){var o=oi();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)?Wp(n,a):(a=Ou(e,n,a,o),a!==null&&(li(a,e,o),Kp(a,n,o)))}function Xp(e,n,a){var o=oi();wo(e,n,a,o)}function wo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(e))Wp(n,u);else{var A=e.alternate;if(e.lanes===0&&(A===null||A.lanes===0)&&(A=n.lastRenderedReducer,A!==null))try{var S=n.lastRenderedState,I=A(S,a);if(u.hasEagerState=!0,u.eagerState=I,ni(I,S))return Nl(e,n,u,0),Ve===null&&Ql(),!1}catch{}finally{}if(a=Ou(e,n,u,o),a!==null)return li(a,e,o),Kp(a,n,o),!0}return!1}function yf(e,n,a,o){if(o={lane:2,revertLane:$f(),action:o,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&li(n,e,2)}function $l(e){var n=e.alternate;return e===he||n!==null&&n===he}function Wp(e,n){hr=Xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zt(e,a)}}var tc={readContext:Ln,use:Kl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},Jp={readContext:Ln,use:Kl,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Up,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Zl(4194308,4,Pp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Zl(4194308,4,e,n)},useInsertionEffect:function(e,n){Zl(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(Ss){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Ss){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=gv.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=Xp.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(e,n){var a=Kn();return _f(a,e,n)},useTransition:function(){var e=pf(!1);return e=Hp.bind(null,he,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Kn();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(Ee&124)!==0||mp(o,n,a)}u.memoizedState=a;var A={value:a,getSnapshot:n};return u.queue=A,Up(Ep.bind(null,o,A,e),[e]),o.flags|=2048,pr(9,jl(),_p.bind(null,o,A,a,n),null),a},useId:function(){var e=Kn(),n=Ve.identifierPrefix;if(Be){var a=aa,o=ia;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Wl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=uv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:vf,useFormState:bp,useActionState:bp,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Af,useCacheRefresh:function(){return Kn().memoizedState=pv.bind(null,he)}},jp={readContext:Ln,use:Kl,useCallback:Op,useContext:Ln,useEffect:Lp,useImperativeHandle:Fp,useInsertionEffect:Qp,useLayoutEffect:Np,useMemo:Gp,useReducer:Jl,useRef:Dp,useState:function(){return Jl(oa)},useDebugValue:mf,useDeferredValue:function(e,n){var a=ln();return zp(a,Le.memoizedState,e,n)},useTransition:function(){var e=Jl(oa)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:gp,useId:qp,useHostTransitionStatus:vf,useFormState:Tp,useActionState:Tp,useOptimistic:function(e,n){var a=ln();return Sp(a,Le,e,n)},useMemoCache:Af,useCacheRefresh:Yp},mv={readContext:Ln,use:Kl,useCallback:Op,useContext:Ln,useEffect:Lp,useImperativeHandle:Fp,useInsertionEffect:Qp,useLayoutEffect:Np,useMemo:Gp,useReducer:df,useRef:Dp,useState:function(){return df(oa)},useDebugValue:mf,useDeferredValue:function(e,n){var a=ln();return Le===null?_f(a,e,n):zp(a,Le.memoizedState,e,n)},useTransition:function(){var e=df(oa)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:gp,useId:qp,useHostTransitionStatus:vf,useFormState:wp,useActionState:wp,useOptimistic:function(e,n){var a=ln();return Le!==null?Sp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Af,useCacheRefresh:Yp},gr=null,Do=0;function ec(e){var n=Do;return Do+=1,gr===null&&(gr=[]),lp(gr,e,n)}function Uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nc(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Zp(e){var n=e._init;return n(e._payload)}function $p(e){function n(K,V){if(e){var $=K.deletions;$===null?(K.deletions=[V],K.flags|=16):$.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=na(K,V),K.index=0,K.sibling=null,K}function A(K,V,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<V?(K.flags|=67108866,V):$):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function I(K,V,$,dt){return V===null||V.tag!==6?(V=zu($,K.mode,dt),V.return=K,V):(V=u(V,$),V.return=K,V)}function G(K,V,$,dt){var Gt=$.type;return Gt===C?At(K,V,$.props.children,dt,$.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===H&&Zp(Gt)===V.type)?(V=u(V,$.props),Uo(V,$),V.return=K,V):(V=Fl($.type,$.key,$.props,null,K.mode,dt),Uo(V,$),V.return=K,V)}function tt(K,V,$,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Hu($,K.mode,dt),V.return=K,V):(V=u(V,$.children||[]),V.return=K,V)}function At(K,V,$,dt,Gt){return V===null||V.tag!==7?(V=ds($,K.mode,dt,Gt),V.return=K,V):(V=u(V,$),V.return=K,V)}function mt(K,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=zu(""+V,K.mode,$),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return $=Fl(V.type,V.key,V.props,null,K.mode,$),Uo($,V),$.return=K,$;case v:return V=Hu(V,K.mode,$),V.return=K,V;case H:var dt=V._init;return V=dt(V._payload),mt(K,V,$)}if(ct(V)||j(V))return V=ds(V,K.mode,$,null),V.return=K,V;if(typeof V.then=="function")return mt(K,ec(V),$);if(V.$$typeof===w)return mt(K,Hl(K,V),$);nc(K,V)}return null}function nt(K,V,$,dt){var Gt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:I(K,V,""+$,dt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Gt?G(K,V,$,dt):null;case v:return $.key===Gt?tt(K,V,$,dt):null;case H:return Gt=$._init,$=Gt($._payload),nt(K,V,$,dt)}if(ct($)||j($))return Gt!==null?null:At(K,V,$,dt,null);if(typeof $.then=="function")return nt(K,V,ec($),dt);if($.$$typeof===w)return nt(K,V,Hl(K,$),dt);nc(K,$)}return null}function at(K,V,$,dt,Gt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return K=K.get($)||null,I(V,K,""+dt,Gt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case E:return K=K.get(dt.key===null?$:dt.key)||null,G(V,K,dt,Gt);case v:return K=K.get(dt.key===null?$:dt.key)||null,tt(V,K,dt,Gt);case H:var de=dt._init;return dt=de(dt._payload),at(K,V,$,dt,Gt)}if(ct(dt)||j(dt))return K=K.get($)||null,At(V,K,dt,Gt,null);if(typeof dt.then=="function")return at(K,V,$,ec(dt),Gt);if(dt.$$typeof===w)return at(K,V,$,Hl(V,dt),Gt);nc(V,dt)}return null}function ee(K,V,$,dt){for(var Gt=null,de=null,Xt=V,te=V=0,vn=null;Xt!==null&&te<$.length;te++){Xt.index>te?(vn=Xt,Xt=null):vn=Xt.sibling;var Me=nt(K,Xt,$[te],dt);if(Me===null){Xt===null&&(Xt=vn);break}e&&Xt&&Me.alternate===null&&n(K,Xt),V=A(Me,V,te),de===null?Gt=Me:de.sibling=Me,de=Me,Xt=vn}if(te===$.length)return a(K,Xt),Be&&gs(K,te),Gt;if(Xt===null){for(;te<$.length;te++)Xt=mt(K,$[te],dt),Xt!==null&&(V=A(Xt,V,te),de===null?Gt=Xt:de.sibling=Xt,de=Xt);return Be&&gs(K,te),Gt}for(Xt=o(Xt);te<$.length;te++)vn=at(Xt,K,te,$[te],dt),vn!==null&&(e&&vn.alternate!==null&&Xt.delete(vn.key===null?te:vn.key),V=A(vn,V,te),de===null?Gt=vn:de.sibling=vn,de=vn);return e&&Xt.forEach(function(Ka){return n(K,Ka)}),Be&&gs(K,te),Gt}function Zt(K,V,$,dt){if($==null)throw Error(s(151));for(var Gt=null,de=null,Xt=V,te=V=0,vn=null,Me=$.next();Xt!==null&&!Me.done;te++,Me=$.next()){Xt.index>te?(vn=Xt,Xt=null):vn=Xt.sibling;var Ka=nt(K,Xt,Me.value,dt);if(Ka===null){Xt===null&&(Xt=vn);break}e&&Xt&&Ka.alternate===null&&n(K,Xt),V=A(Ka,V,te),de===null?Gt=Ka:de.sibling=Ka,de=Ka,Xt=vn}if(Me.done)return a(K,Xt),Be&&gs(K,te),Gt;if(Xt===null){for(;!Me.done;te++,Me=$.next())Me=mt(K,Me.value,dt),Me!==null&&(V=A(Me,V,te),de===null?Gt=Me:de.sibling=Me,de=Me);return Be&&gs(K,te),Gt}for(Xt=o(Xt);!Me.done;te++,Me=$.next())Me=at(Xt,K,te,Me.value,dt),Me!==null&&(e&&Me.alternate!==null&&Xt.delete(Me.key===null?te:Me.key),V=A(Me,V,te),de===null?Gt=Me:de.sibling=Me,de=Me);return e&&Xt.forEach(function(_y){return n(K,_y)}),Be&&gs(K,te),Gt}function Ne(K,V,$,dt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Gt=$.key;V!==null;){if(V.key===Gt){if(Gt=$.type,Gt===C){if(V.tag===7){a(K,V.sibling),dt=u(V,$.props.children),dt.return=K,K=dt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===H&&Zp(Gt)===V.type){a(K,V.sibling),dt=u(V,$.props),Uo(dt,$),dt.return=K,K=dt;break t}a(K,V);break}else n(K,V);V=V.sibling}$.type===C?(dt=ds($.props.children,K.mode,dt,$.key),dt.return=K,K=dt):(dt=Fl($.type,$.key,$.props,null,K.mode,dt),Uo(dt,$),dt.return=K,K=dt)}return S(K);case v:t:{for(Gt=$.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(K,V.sibling),dt=u(V,$.children||[]),dt.return=K,K=dt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}dt=Hu($,K.mode,dt),dt.return=K,K=dt}return S(K);case H:return Gt=$._init,$=Gt($._payload),Ne(K,V,$,dt)}if(ct($))return ee(K,V,$,dt);if(j($)){if(Gt=j($),typeof Gt!="function")throw Error(s(150));return $=Gt.call($),Zt(K,V,$,dt)}if(typeof $.then=="function")return Ne(K,V,ec($),dt);if($.$$typeof===w)return Ne(K,V,Hl(K,$),dt);nc(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(K,V.sibling),dt=u(V,$),dt.return=K,K=dt):(a(K,V),dt=zu($,K.mode,dt),dt.return=K,K=dt),S(K)):a(K,V)}return function(K,V,$,dt){try{Do=0;var Gt=Ne(K,V,$,dt);return gr=null,Gt}catch(Xt){if(Xt===Co||Xt===kl)throw Xt;var de=ii(29,Xt,null,K.mode);return de.lanes=dt,de.return=K,de}finally{}}}var mr=$p(!0),tg=$p(!1),_i=Z(null),Fi=null;function La(e){var n=e.alternate;vt(hn,hn.current&1),vt(_i,e),Fi===null&&(n===null||Ar.current!==null||n.memoizedState!==null)&&(Fi=e)}function eg(e){if(e.tag===22){if(vt(hn,hn.current),vt(_i,e),Fi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Fi=e)}}else Qa()}function Qa(){vt(hn,hn.current),vt(_i,_i.current)}function la(e){pt(_i),Fi===e&&(Fi=null),pt(hn)}var hn=Z(0);function ic(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||fA(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=wa(o);u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,o),n!==null&&(li(n,e,o),Mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,o),n!==null&&(li(n,e,o),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=wa(a);o.tag=2,n!=null&&(o.callback=n),n=Da(e,o,a),n!==null&&(li(n,e,a),Mo(n,e,a))}};function ng(e,n,a,o,u,A,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,A,S):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,A):!0}function ig(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function Cs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ac=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){ac(e)}function sg(e){console.error(e)}function rg(e){ac(e)}function sc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(e,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){sc(e,n)},a}function lg(e){return e=wa(e),e.tag=3,e}function cg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var A=o.value;e.payload=function(){return u(A)},e.callback=function(){og(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){og(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var I=o.stack;this.componentDidCatch(o.value,{componentStack:I!==null?I:""})})}function _v(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&vo(n,a,u,!0),a=_i.current,a!==null){switch(a.tag){case 13:return Fi===null?Wf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Zu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Jf(e,o,u)),!1;case 22:return a.flags|=65536,o===Zu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Jf(e,o,u)),!1}throw Error(s(435,a.tag))}return Jf(e,o,u),Wf(),!1}if(Be)return n=_i.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(e=Error(s(422),{cause:o}),Eo(di(e,a)))):(o!==qu&&(n=Error(s(423),{cause:o}),Eo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=xf(e.stateNode,o,u),ef(e,u),en!==4&&(en=2)),!1;var A=Error(s(520),{cause:o});if(A=di(A,a),Go===null?Go=[A]:Go.push(A),en!==4&&(en=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xf(a.stateNode,o,e),ef(a,e),!1;case 1:if(n=a.type,A=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(za===null||!za.has(A))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lg(u),cg(u,e,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var ug=Error(s(461)),_n=!1;function Cn(e,n,a,o){n.child=e===null?tg(n,null,a,o):mr(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var A=n.ref;if("ref"in o){var S={};for(var I in o)I!=="ref"&&(S[I]=o[I])}else S=o;return vs(n),o=of(e,n,a,S,A,u),I=lf(),e!==null&&!_n?(cf(e,n,u),ca(e,n,u)):(Be&&I&&Vu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function Ag(e,n,a,o,u){if(e===null){var A=a.type;return typeof A=="function"&&!Gu(A)&&A.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=A,hg(e,n,A,o,u)):(e=Fl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(A=e.child,!Df(e,u)){var S=A.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(S,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=na(A,o),e.ref=n.ref,e.return=n,n.child=e}function hg(e,n,a,o,u){if(e!==null){var A=e.memoizedProps;if(po(A,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=A,Df(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Mf(e,n,a,o,u)}function dg(e,n,a){var o=n.pendingProps,u=o.children,A=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=A!==null?A.baseLanes|a:a,e!==null){for(u=n.child=e.child,A=0;u!==null;)A=A|u.lanes|u.childLanes,u=u.sibling;n.childLanes=A&~o}else n.childLanes=0,n.child=null;return pg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(n,A!==null?A.cachePool:null),A!==null?hp(n,A):af(),eg(n);else return n.lanes=n.childLanes=536870912,pg(e,n,A!==null?A.baseLanes|a:a,a)}else A!==null?(Vl(n,A.cachePool),hp(n,A),Qa(),n.memoizedState=null):(e!==null&&Vl(n,null),af(),Qa());return Cn(e,n,u,a),n.child}function pg(e,n,a,o){var u=ju();return u=u===null?null:{parent:An._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Vl(n,null),af(),eg(n),e!==null&&vo(e,n,o,!0),null}function rc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mf(e,n,a,o,u){return vs(n),a=of(e,n,a,o,void 0,u),o=lf(),e!==null&&!_n?(cf(e,n,u),ca(e,n,u)):(Be&&o&&Vu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function gg(e,n,a,o,u,A){return vs(n),n.updateQueue=null,a=pp(n,o,a,u),dp(e),o=lf(),e!==null&&!_n?(cf(e,n,A),ca(e,n,A)):(Be&&o&&Vu(n),n.flags|=1,Cn(e,n,a,A),n.child)}function mg(e,n,a,o,u){if(vs(n),n.stateNode===null){var A=or,S=a.contextType;typeof S=="object"&&S!==null&&(A=Ln(S)),A=new a(o,A),n.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=Cf,n.stateNode=A,A._reactInternals=n,A=n.stateNode,A.props=o,A.state=n.memoizedState,A.refs={},$u(n),S=a.contextType,A.context=typeof S=="object"&&S!==null?Ln(S):or,A.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Sf(n,a,S,o),A.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof A.getSnapshotBeforeUpdate=="function"||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(S=A.state,typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount(),S!==A.state&&Cf.enqueueReplaceState(A,A.state,null),Bo(n,o,A,u),Io(),A.state=n.memoizedState),typeof A.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){A=n.stateNode;var I=n.memoizedProps,G=Cs(a,I);A.props=G;var tt=A.context,At=a.contextType;S=or,typeof At=="object"&&At!==null&&(S=Ln(At));var mt=a.getDerivedStateFromProps;At=typeof mt=="function"||typeof A.getSnapshotBeforeUpdate=="function",I=n.pendingProps!==I,At||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I||tt!==S)&&ig(n,A,o,S),Ra=!1;var nt=n.memoizedState;A.state=nt,Bo(n,o,A,u),Io(),tt=n.memoizedState,I||nt!==tt||Ra?(typeof mt=="function"&&(Sf(n,a,mt,o),tt=n.memoizedState),(G=Ra||ng(n,a,G,o,nt,tt,S))?(At||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(n.flags|=4194308)):(typeof A.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),A.props=o,A.state=tt,A.context=S,o=G):(typeof A.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{A=n.stateNode,tf(e,n),S=n.memoizedProps,At=Cs(a,S),A.props=At,mt=n.pendingProps,nt=A.context,tt=a.contextType,G=or,typeof tt=="object"&&tt!==null&&(G=Ln(tt)),I=a.getDerivedStateFromProps,(tt=typeof I=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(S!==mt||nt!==G)&&ig(n,A,o,G),Ra=!1,nt=n.memoizedState,A.state=nt,Bo(n,o,A,u),Io();var at=n.memoizedState;S!==mt||nt!==at||Ra||e!==null&&e.dependencies!==null&&zl(e.dependencies)?(typeof I=="function"&&(Sf(n,a,I,o),at=n.memoizedState),(At=Ra||ng(n,a,At,o,nt,at,G)||e!==null&&e.dependencies!==null&&zl(e.dependencies))?(tt||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(o,at,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(o,at,G)),typeof A.componentDidUpdate=="function"&&(n.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof A.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),A.props=o,A.state=at,A.context=G,o=At):(typeof A.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return A=o,rc(e,n),o=(n.flags&128)!==0,A||o?(A=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:A.render(),n.flags|=1,e!==null&&o?(n.child=mr(n,e.child,null,u),n.child=mr(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=A.state,e=n.child):e=ca(e,n,u),e}function _g(e,n,a,o){return _o(),n.flags|=256,Cn(e,n,a,o),n.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(e){return{baseLanes:e,cachePool:sp()}}function bf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ei),e}function Eg(e,n,a){var o=n.pendingProps,u=!1,A=(n.flags&128)!==0,S;if((S=A)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?La(n):Qa(),Be){var I=tn,G;if(G=I){t:{for(G=I,I=Pi;G.nodeType!==8;){if(!I){I=null;break t}if(G=Bi(G.nextSibling),G===null){I=null;break t}}I=G}I!==null?(n.memoizedState={dehydrated:I,treeContext:ps!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},G=ii(18,null,null,0),G.stateNode=I,G.return=n,n.child=G,zn=n,tn=null,G=!0):G=!1}G||_s(n)}if(I=n.memoizedState,I!==null&&(I=I.dehydrated,I!==null))return fA(I)?n.lanes=32:n.lanes=536870912,null;la(n)}return I=o.children,o=o.fallback,u?(Qa(),u=n.mode,I=oc({mode:"hidden",children:I},u),o=ds(o,u,a,null),I.return=n,o.return=n,I.sibling=o,n.child=I,u=n.child,u.memoizedState=Bf(a),u.childLanes=bf(e,S,a),n.memoizedState=If,o):(La(n),Tf(n,I))}if(G=e.memoizedState,G!==null&&(I=G.dehydrated,I!==null)){if(A)n.flags&256?(La(n),n.flags&=-257,n=Rf(e,n,a)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,n=null):(Qa(),u=o.fallback,I=n.mode,o=oc({mode:"visible",children:o.children},I),u=ds(u,I,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,mr(n,e.child,null,a),o=n.child,o.memoizedState=Bf(a),o.childLanes=bf(e,S,a),n.memoizedState=If,n=u);else if(La(n),fA(I)){if(S=I.nextSibling&&I.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(s(419)),o.stack="",o.digest=S,Eo({value:o,source:null,stack:null}),n=Rf(e,n,a)}else if(_n||vo(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=Ve,S!==null&&(o=a&-a,o=(o&42)!==0?1:ie(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,rr(e,o),li(S,e,o),ug;I.data==="$?"||Wf(),n=Rf(e,n,a)}else I.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,tn=Bi(I.nextSibling),zn=n,Be=!0,ms=null,Pi=!1,e!==null&&(gi[mi++]=ia,gi[mi++]=aa,gi[mi++]=ps,ia=e.id,aa=e.overflow,ps=n),n=Tf(n,o.children),n.flags|=4096);return n}return u?(Qa(),u=o.fallback,I=n.mode,G=e.child,tt=G.sibling,o=na(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,tt!==null?u=na(tt,u):(u=ds(u,I,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,I=e.child.memoizedState,I===null?I=Bf(a):(G=I.cachePool,G!==null?(tt=An._currentValue,G=G.parent!==tt?{parent:tt,pool:tt}:G):G=sp(),I={baseLanes:I.baseLanes|a,cachePool:G}),u.memoizedState=I,u.childLanes=bf(e,S,a),n.memoizedState=If,o):(La(n),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Tf(e,n){return n=oc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function oc(e,n){return e=ii(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rf(e,n,a){return mr(n,e.child,null,a),e=Tf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Xu(e.return,n,a)}function wf(e,n,a,o,u){var A=e.memoizedState;A===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(A.isBackwards=n,A.rendering=null,A.renderingStartTime=0,A.last=o,A.tail=a,A.tailMode=u)}function yg(e,n,a){var o=n.pendingProps,u=o.revealOrder,A=o.tail;if(Cn(e,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,a,n);else if(e.tag===19)vg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(vt(hn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ic(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,A);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ic(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}wf(n,!0,a,null,A);break;case"together":wf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(vo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=na(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&zl(e)))}function Ev(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Ta(n,An,e.memoizedState.cache),_o();break;case 27:case 5:ne(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eg(e,n,a):(La(n),e=ca(e,n,a),e!==null?e.sibling:null);La(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(vo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,dg(e,n,a);case 24:Ta(n,An,e.memoizedState.cache)}return ca(e,n,a)}function Sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Df(e,a)&&(n.flags&128)===0)return _n=!1,Ev(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Be&&(n.flags&1048576)!==0&&Zd(n,Gl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Gu(o)?(e=Cs(o,e),n.tag=1,n=mg(null,n,o,e,a)):(n.tag=0,n=Mf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===T){n.tag=11,n=fg(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=Ag(null,n,o,e,a);break t}}throw n=rt(o)||o,Error(s(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),mg(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var A=n.memoizedState;u=A.element,tf(e,n),Bo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ta(n,An,o),o!==A.cache&&Wu(n,[An],a,!0),Io(),o=S.element,A.isDehydrated)if(A={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=A,n.memoizedState=A,n.flags&256){n=_g(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),Eo(u),n=_g(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Bi(e.firstChild),zn=n,Be=!0,ms=null,Pi=!0,a=tg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_o(),o===u){n=ca(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return rc(e,n),e===null?(a=Im(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=yc(ht.current).createElement(a),o[fn]=n,o[Ze]=e,Mn(o,a,e),rn(o),n.stateNode=o):n.memoizedState=Im(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Be&&(o=n.stateNode=Cm(n.type,n.pendingProps,ht.current),zn=n,Pi=!0,u=tn,ka(n.type)?(AA=u,tn=Bi(o.firstChild)):tn=u),Cn(e,n,n.pendingProps.children,a),rc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=tn)&&(o=Xv(o,n.type,n.pendingProps,Pi),o!==null?(n.stateNode=o,zn=n,tn=Bi(o.firstChild),Pi=!1,u=!0):u=!1),u||_s(n)),ne(n),u=n.type,A=n.pendingProps,S=e!==null?e.memoizedProps:null,o=A.children,lA(u,A)?o=null:S!==null&&lA(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,fv,null,null,a),Ko._currentValue=u),rc(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=tn)&&(a=Wv(a,n.pendingProps,Pi),a!==null?(n.stateNode=a,zn=n,tn=null,e=!0):e=!1),e||_s(n)),null;case 13:return Eg(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mr(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Ln(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return Ag(e,n,n.type,n.pendingProps,a);case 15:return hg(e,n,n.type,n.pendingProps,a);case 19:return yg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=oc(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=na(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dg(e,n,a);case 24:return vs(n),o=Ln(An),e===null?(u=ju(),u===null&&(u=Ve,A=Ku(),u.pooledCache=A,A.refCount++,A!==null&&(u.pooledCacheLanes|=a),u=A),n.memoizedState={parent:o,cache:u},$u(n),Ta(n,An,u)):((e.lanes&a)!==0&&(tf(e,n),Bo(n,null,null,a),Io()),u=e.memoizedState,A=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,An,o)):(o=A.cache,Ta(n,An,o),o!==u.cache&&Wu(n,[An],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wm(n)){if(n=_i.current,n!==null&&((Ee&4194048)===Ee?Fi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Fi))throw xo=Zu,rp;e.flags|=8192}}function lc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mt():536870912,e.lanes|=n,yr|=n)}function Lo(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function vv(e,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(An),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mo(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ep())),Je(n),null;case 26:return a=n.memoizedState,e===null?(ua(n),a!==null?(Je(n),Cg(n,a)):(Je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ua(n),Je(n),Cg(n,a)):(Je(n),n.flags&=-16777217):(e.memoizedProps!==o&&ua(n),Je(n),n.flags&=-16777217),null;case 27:ze(n),a=ht.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=bt.current,mo(n)?$d(n):(e=Cm(u,o,a),n.stateNode=e,ua(n))}return Je(n),null;case 5:if(ze(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(e=bt.current,mo(n))$d(n);else{switch(u=yc(ht.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[fn]=n,e[Ze]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ua(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ht.current,mo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||gm(e.nodeValue,a)),e||_s(n)}else e=yc(e).createTextNode(o),e[fn]=n,n.stateNode=e}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=mo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else _o(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(la(n),n):(la(n),null)}if(la(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var A=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(A=o.memoizedState.cachePool.pool),A!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),lc(n,n.updateQueue),Je(n),null;case 4:return Yt(),e===null&&iA(n.stateNode.containerInfo),Je(n),null;case 10:return ra(n.type),Je(n),null;case 19:if(pt(hn),u=n.memoizedState,u===null)return Je(n),null;if(o=(n.flags&128)!==0,A=u.rendering,A===null)if(o)Lo(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(A=ic(e),A!==null){for(n.flags|=128,Lo(u,!1),e=A.updateQueue,n.updateQueue=e,lc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jd(a,e),a=a.sibling;return vt(hn,hn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>fc&&(n.flags|=128,o=!0,Lo(u,!1),n.lanes=4194304)}else{if(!o)if(e=ic(A),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,lc(n,e),Lo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!A.alternate&&!Be)return Je(n),null}else 2*Ft()-u.renderingStartTime>fc&&a!==536870912&&(n.flags|=128,o=!0,Lo(u,!1),n.lanes=4194304);u.isBackwards?(A.sibling=n.child,n.child=A):(e=u.last,e!==null?e.sibling=A:n.child=A,u.last=A)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=hn.current,vt(hn,o?e&1|2:e&1),n):(Je(n),null);case 22:case 23:return la(n),sf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&lc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&pt(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(An),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yv(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(An),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ze(n),null;case 13:if(la(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_o()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return pt(hn),null;case 4:return Yt(),null;case 10:return ra(n.type),null;case 22:case 23:return la(n),sf(),e!==null&&pt(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(An),null;case 25:return null;default:return null}}function xg(e,n){switch(ku(n),n.tag){case 3:ra(An),Yt();break;case 26:case 27:case 5:ze(n);break;case 4:Yt();break;case 13:la(n);break;case 19:pt(hn);break;case 10:ra(n.type);break;case 22:case 23:la(n),sf(),e!==null&&pt(ys);break;case 24:ra(An)}}function Qo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var A=a.create,S=a.inst;o=A(),S.destroy=o}a=a.next}while(a!==u)}}catch(I){Ge(n,n.return,I)}}function Na(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var A=u.next;o=A;do{if((o.tag&e)===e){var S=o.inst,I=S.destroy;if(I!==void 0){S.destroy=void 0,u=n;var G=a,tt=I;try{tt()}catch(At){Ge(u,G,At)}}}o=o.next}while(o!==A)}}catch(At){Ge(n,n.return,At)}}function Mg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ap(n,a)}catch(o){Ge(e,e.return,o)}}}function Ig(e,n,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function No(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Oi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Uf(e,n,a){try{var o=e.stateNode;Hv(o,e.type,a,n),o[Ze]=n}catch(u){Ge(e,e.return,u)}}function bg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=vc));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Qf(e,n,a),e=e.sibling;e!==null;)Qf(e,n,a),e=e.sibling}function cc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(cc(e,n,a),e=e.sibling;e!==null;)cc(e,n,a),e=e.sibling}function Tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,a),n[fn]=e,n[Ze]=a}catch(A){Ge(e,e.return,A)}}var fa=!1,an=!1,Nf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Sv(e,n){if(e=e.containerInfo,rA=Bc,e=zd(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,A=o.focusNode;o=o.focusOffset;try{a.nodeType,A.nodeType}catch{a=null;break t}var S=0,I=-1,G=-1,tt=0,At=0,mt=e,nt=null;e:for(;;){for(var at;mt!==a||u!==0&&mt.nodeType!==3||(I=S+u),mt!==A||o!==0&&mt.nodeType!==3||(G=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(at=mt.firstChild)!==null;)nt=mt,mt=at;for(;;){if(mt===e)break e;if(nt===a&&++tt===u&&(I=S),nt===A&&++At===o&&(G=S),(at=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=at}a=I===-1||G===-1?null:{start:I,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(oA={focusedElem:e,selectionRange:a},Bc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,A=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&A!==null){e=void 0,a=n,u=A.memoizedProps,A=A.memoizedState,o=a.stateNode;try{var ee=Cs(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,A),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Ge(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)uA(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uA(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function wg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Pa(e,a),o&4&&Qo(5,a);break;case 1:if(Pa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Mg(a),o&512&&No(a,a.return);break;case 3:if(Pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ap(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&Tg(a);case 26:case 5:Pa(e,a),n===null&&o&4&&Bg(a),o&512&&No(a,a.return);break;case 12:Pa(e,a);break;case 13:Pa(e,a),o&4&&Lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wv.bind(null,a),Kv(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||an,u=fa;var A=an;fa=o,(an=n)&&!A?Fa(e,a,(a.subtreeFlags&8772)!==0):Pa(e,a),fa=u,an=A}break;case 30:break;default:Pa(e,a)}}function Dg(e){var n=e.alternate;n!==null&&(e.alternate=null,Dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Jn=!1;function Aa(e,n,a){for(a=a.child;a!==null;)Ug(e,n,a),a=a.sibling}function Ug(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:an||Oi(a,n),Aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Oi(a,n);var o=Ye,u=Jn;ka(a.type)&&(Ye=a.stateNode,Jn=!1),Aa(e,n,a),qo(a.stateNode),Ye=o,Jn=u;break;case 5:an||Oi(a,n);case 6:if(o=Ye,u=Jn,Ye=null,Aa(e,n,a),Ye=o,Jn=u,Ye!==null)if(Jn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(A){Ge(a,n,A)}else try{Ye.removeChild(a.stateNode)}catch(A){Ge(a,n,A)}break;case 18:Ye!==null&&(Jn?(e=Ye,ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$o(e)):ym(Ye,a.stateNode));break;case 4:o=Ye,u=Jn,Ye=a.stateNode.containerInfo,Jn=!0,Aa(e,n,a),Ye=o,Jn=u;break;case 0:case 11:case 14:case 15:an||Na(2,a,n),an||Na(4,a,n),Aa(e,n,a);break;case 1:an||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ig(a,n,o)),Aa(e,n,a);break;case 21:Aa(e,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,Aa(e,n,a),an=o;break;default:Aa(e,n,a)}}function Lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$o(e)}catch(a){Ge(n,n.return,a)}}function Cv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rg),n;default:throw Error(s(435,e.tag))}}function Pf(e,n){var a=Cv(e);n.forEach(function(o){var u=Dv.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ai(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],A=e,S=n,I=S;t:for(;I!==null;){switch(I.tag){case 27:if(ka(I.type)){Ye=I.stateNode,Jn=!1;break t}break;case 5:Ye=I.stateNode,Jn=!1;break t;case 3:case 4:Ye=I.stateNode.containerInfo,Jn=!0;break t}I=I.return}if(Ye===null)throw Error(s(160));Ug(A,S,u),Ye=null,Jn=!1,A=u.alternate,A!==null&&(A.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Qg(n,e),n=n.sibling}var Ii=null;function Qg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(n,e),si(e),o&4&&(Na(3,e,e.return),Qo(3,e),Na(5,e,e.return));break;case 1:ai(n,e),si(e),o&512&&(an||a===null||Oi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ii;if(ai(n,e),si(e),o&512&&(an||a===null||Oi(a,a.return)),o&4){var A=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":A=u.getElementsByTagName("title")[0],(!A||A[Ni]||A[fn]||A.namespaceURI==="http://www.w3.org/2000/svg"||A.hasAttribute("itemprop"))&&(A=u.createElement(o),u.head.insertBefore(A,u.querySelector("head > title"))),Mn(A,o,a),A[fn]=e,rn(A),o=A;break t;case"link":var S=Tm("link","href",u).get(o+(a.href||""));if(S){for(var I=0;I<S.length;I++)if(A=S[I],A.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&A.getAttribute("rel")===(a.rel==null?null:a.rel)&&A.getAttribute("title")===(a.title==null?null:a.title)&&A.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(I,1);break e}}A=u.createElement(o),Mn(A,o,a),u.head.appendChild(A);break;case"meta":if(S=Tm("meta","content",u).get(o+(a.content||""))){for(I=0;I<S.length;I++)if(A=S[I],A.getAttribute("content")===(a.content==null?null:""+a.content)&&A.getAttribute("name")===(a.name==null?null:a.name)&&A.getAttribute("property")===(a.property==null?null:a.property)&&A.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&A.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(I,1);break e}}A=u.createElement(o),Mn(A,o,a),u.head.appendChild(A);break;default:throw Error(s(468,o))}A[fn]=e,rn(A),o=A}e.stateNode=o}else Rm(u,e.type,e.stateNode);else e.stateNode=bm(u,o,e.memoizedProps);else A!==o?(A===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):A.count--,o===null?Rm(u,e.type,e.stateNode):bm(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ai(n,e),si(e),o&512&&(an||a===null||Oi(a,a.return)),a!==null&&o&4&&Uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ai(n,e),si(e),o&512&&(an||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{Xn(u,"")}catch(at){Ge(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Uf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(ai(n,e),si(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Ge(e,e.return,at)}}break;case 3:if(xc=null,u=Ii,Ii=Sc(n.containerInfo),ai(n,e),Ii=u,si(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{$o(n.containerInfo)}catch(at){Ge(e,e.return,at)}Nf&&(Nf=!1,Ng(e));break;case 4:o=Ii,Ii=Sc(e.stateNode.containerInfo),ai(n,e),si(e),Ii=o;break;case 12:ai(n,e),si(e);break;case 13:ai(n,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pf(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,tt=fa,At=an;if(fa=tt||u,an=At||G,ai(n,e),an=At,fa=tt,si(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||fa||an||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(A=G.stateNode,u)S=A.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{I=G.stateNode;var mt=G.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;I.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){Ge(G,G.return,at)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(at){Ge(G,G.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Pf(e,a))));break;case 19:ai(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pf(e,o)));break;case 30:break;case 21:break;default:ai(n,e),si(e)}}function si(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(bg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,A=Lf(e);cc(e,A,u);break;case 5:var S=a.stateNode;a.flags&32&&(Xn(S,""),a.flags&=-33);var I=Lf(e);cc(e,I,S);break;case 3:case 4:var G=a.stateNode.containerInfo,tt=Lf(e);Qf(e,tt,G);break;default:throw Error(s(161))}}catch(At){Ge(e,e.return,At)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ng(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Pa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wg(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),xs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ig(n,n.return,a),xs(n);break;case 27:qo(n.stateNode);case 26:case 5:Oi(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function Fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,A=n,S=A.flags;switch(A.tag){case 0:case 11:case 15:Fa(u,A,a),Qo(4,A);break;case 1:if(Fa(u,A,a),o=A,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=A,u=o.updateQueue,u!==null){var I=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)fp(G[u],I)}catch(tt){Ge(o,o.return,tt)}}a&&S&64&&Mg(A),No(A,A.return);break;case 27:Tg(A);case 26:case 5:Fa(u,A,a),a&&o===null&&S&4&&Bg(A),No(A,A.return);break;case 12:Fa(u,A,a);break;case 13:Fa(u,A,a),a&&S&4&&Lg(u,A);break;case 22:A.memoizedState===null&&Fa(u,A,a),No(A,A.return);break;case 30:break;default:Fa(u,A,a)}n=n.sibling}}function Ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yo(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&yo(e))}function Gi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(e,n,a,o),n=n.sibling}function Pg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Gi(e,n,a,o),u&2048&&Qo(9,n);break;case 1:Gi(e,n,a,o);break;case 3:Gi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&yo(e)));break;case 12:if(u&2048){Gi(e,n,a,o),e=n.stateNode;try{var A=n.memoizedProps,S=A.id,I=A.onPostCommit;typeof I=="function"&&I(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else Gi(e,n,a,o);break;case 13:Gi(e,n,a,o);break;case 23:break;case 22:A=n.stateNode,S=n.alternate,n.memoizedState!==null?A._visibility&2?Gi(e,n,a,o):Po(e,n):A._visibility&2?Gi(e,n,a,o):(A._visibility|=2,_r(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Ff(S,n);break;case 24:Gi(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Gi(e,n,a,o)}}function _r(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var A=e,S=n,I=a,G=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:_r(A,S,I,G,u),Qo(8,S);break;case 23:break;case 22:var At=S.stateNode;S.memoizedState!==null?At._visibility&2?_r(A,S,I,G,u):Po(A,S):(At._visibility|=2,_r(A,S,I,G,u)),u&&tt&2048&&Ff(S.alternate,S);break;case 24:_r(A,S,I,G,u),u&&tt&2048&&Of(S.alternate,S);break;default:_r(A,S,I,G,u)}n=n.sibling}}function Po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Po(a,o),u&2048&&Of(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var Fo=8192;function Er(e){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)Fg(e),e=e.sibling}function Fg(e){switch(e.tag){case 26:Er(e),e.flags&Fo&&e.memoizedState!==null&&ly(Ii,e.memoizedState,e.memoizedProps);break;case 5:Er(e);break;case 3:case 4:var n=Ii;Ii=Sc(e.stateNode.containerInfo),Er(e),Ii=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fo,Fo=16777216,Er(e),Fo=n):Er(e));break;default:Er(e)}}function Og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,zg(o,e)}Og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gg(e),e=e.sibling}function Gg(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,uc(e)):Oo(e);break;default:Oo(e)}}function uc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,zg(o,e)}Og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,uc(n));break;default:uc(n)}e=e.sibling}}function zg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,A=o.return;if(Dg(o),o===a){En=null;break t}if(u!==null){u.return=A,En=u;break t}En=A}}}var xv={getCacheForType:function(e){var n=Ln(An),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Mv=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ve=null,me=null,Ee=0,we=0,ri=null,Oa=!1,vr=!1,Gf=!1,ha=0,en=0,Ga=0,Ms=0,zf=0,Ei=0,yr=0,Go=null,jn=null,Hf=!1,Vf=0,fc=1/0,Ac=null,za=null,xn=0,Ha=null,Sr=null,Cr=0,kf=0,qf=null,Hg=null,zo=0,Yf=null;function oi(){if((Re&2)!==0&&Ee!==0)return Ee&-Ee;if(N.T!==null){var e=ur;return e!==0?e:$f()}return ye()}function Vg(){Ei===0&&(Ei=(Ee&536870912)===0||Be?q():536870912);var e=_i.current;return e!==null&&(e.flags|=32),Ei}function li(e,n,a){(e===Ve&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Va(e,Ee,Ei,!1)),Nt(e,a),((Re&2)===0||e!==Ve)&&(e===Ve&&((Re&2)===0&&(Ms|=a),en===4&&Va(e,Ee,Ei,!1)),zi(e))}function kg(e,n,a){if((Re&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Tt(e,n),u=o?bv(e,n):Kf(e,n,!0),A=o;do{if(u===0){vr&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,A&&!Iv(a)){u=Kf(e,n,!1),A=!1;continue}if(u===2){if(A=n,e.errorRecoveryDisabledLanes&A)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var I=e;u=Go;var G=I.current.memoizedState.isDehydrated;if(G&&(xr(I,S).flags|=256),S=Kf(I,S,!1),S!==2){if(Gf&&!G){I.errorRecoveryDisabledLanes|=A,Ms|=A,u=4;break t}A=jn,jn=u,A!==null&&(jn===null?jn=A:jn.push.apply(jn,A))}u=S}if(A=!1,u!==2)continue}}if(u===1){xr(e,0),Va(e,n,0,!0);break}t:{switch(o=e,A=u,A){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,Ei,!Oa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vf+300-Ft(),10<u)){if(Va(o,n,Ei,!Oa),Ht(o,0,!0)!==0)break t;o.timeoutHandle=Em(qg.bind(null,o,a,jn,Ac,Hf,n,Ei,Ms,yr,Oa,A,2,-0,0),u);break t}qg(o,a,jn,Ac,Hf,n,Ei,Ms,yr,Oa,A,0,-0,0)}}break}while(!0);zi(e)}function qg(e,n,a,o,u,A,S,I,G,tt,At,mt,nt,at){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Wo={stylesheets:null,count:0,unsuspend:oy},Fg(n),mt=cy(),mt!==null)){e.cancelPendingCommit=mt(Zg.bind(null,e,n,A,a,o,u,S,I,G,At,1,nt,at)),Va(e,A,S,!tt);return}Zg(e,n,A,a,o,u,S,I,G)}function Iv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],A=u.getSnapshot;u=u.value;try{if(!ni(A(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~zf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var A=31-Qt(u),S=1<<A;o[A]=-1,u&=~S}a!==0&&_t(e,a,n)}function hc(){return(Re&6)===0?(Ho(0),!1):!0}function Xf(){if(me!==null){if(we===0)var e=me.return;else e=me,sa=Es=null,uf(e),gr=null,Do=0,e=me;for(;e!==null;)xg(e.alternate,e),e=e.return;me=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xf(),Ve=e,me=a=na(e.current,null),Ee=n,we=0,ri=null,Oa=!1,vr=Tt(e,n),Gf=!1,yr=Ei=zf=Ms=Ga=en=0,jn=Go=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),A=1<<u;n|=e[u],o&=~A}return ha=n,Ql(),a}function Yg(e,n){he=null,N.H=tc,n===Co||n===kl?(n=cp(),we=3):n===rp?(n=cp(),we=4):we=n===ug?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,me===null&&(en=1,sc(e,di(n,e.current)))}function Xg(){var e=N.H;return N.H=tc,e===null?tc:e}function Wg(){var e=N.A;return N.A=xv,e}function Wf(){en=4,Oa||(Ee&4194048)!==Ee&&_i.current!==null||(vr=!0),(Ga&134217727)===0&&(Ms&134217727)===0||Ve===null||Va(Ve,Ee,Ei,!1)}function Kf(e,n,a){var o=Re;Re|=2;var u=Xg(),A=Wg();(Ve!==e||Ee!==n)&&(Ac=null,xr(e,n)),n=!1;var S=en;t:do try{if(we!==0&&me!==null){var I=me,G=ri;switch(we){case 8:Xf(),S=6;break t;case 3:case 2:case 9:case 6:_i.current===null&&(n=!0);var tt=we;if(we=0,ri=null,Mr(e,I,G,tt),a&&vr){S=0;break t}break;default:tt=we,we=0,ri=null,Mr(e,I,G,tt)}}Bv(),S=en;break}catch(At){Yg(e,At)}while(!0);return n&&e.shellSuspendCounter++,sa=Es=null,Re=o,N.H=u,N.A=A,me===null&&(Ve=null,Ee=0,Ql()),S}function Bv(){for(;me!==null;)Kg(me)}function bv(e,n){var a=Re;Re|=2;var o=Xg(),u=Wg();Ve!==e||Ee!==n?(Ac=null,fc=Ft()+500,xr(e,n)):vr=Tt(e,n);t:do try{if(we!==0&&me!==null){n=me;var A=ri;e:switch(we){case 1:we=0,ri=null,Mr(e,n,A,1);break;case 2:case 9:if(op(A)){we=0,ri=null,Jg(n);break}n=function(){we!==2&&we!==9||Ve!==e||(we=7),zi(e)},A.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:op(A)?(we=0,ri=null,Jg(n)):(we=0,ri=null,Mr(e,n,A,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var I=me;if(!S||wm(S)){we=0,ri=null;var G=I.sibling;if(G!==null)me=G;else{var tt=I.return;tt!==null?(me=tt,dc(tt)):me=null}break e}}we=0,ri=null,Mr(e,n,A,5);break;case 6:we=0,ri=null,Mr(e,n,A,6);break;case 8:Xf(),en=6;break t;default:throw Error(s(462))}}Tv();break}catch(At){Yg(e,At)}while(!0);return sa=Es=null,N.H=o,N.A=u,Re=a,me!==null?0:(Ve=null,Ee=0,Ql(),en)}function Tv(){for(;me!==null&&!Jt();)Kg(me)}function Kg(e){var n=Sg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?dc(e):me=n}function Jg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:uf(n);default:xg(a,n),n=me=jd(n,ha),n=Sg(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?dc(e):me=n}function Mr(e,n,a,o){sa=Es=null,uf(n),gr=null,Do=0;var u=n.return;try{if(_v(e,u,n,a,Ee)){en=1,sc(e,di(a,e.current)),me=null;return}}catch(A){if(u!==null)throw me=u,A;en=1,sc(e,di(a,e.current)),me=null;return}n.flags&32768?(Be||o===1?e=!0:vr||(Ee&536870912)!==0?e=!1:(Oa=e=!0,(o===2||o===9||o===3||o===6)&&(o=_i.current,o!==null&&o.tag===13&&(o.flags|=16384))),jg(n,e)):dc(n)}function dc(e){var n=e;do{if((n.flags&32768)!==0){jg(n,Oa);return}e=n.return;var a=vv(n.alternate,n,ha);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);en===0&&(en=5)}function jg(e,n){do{var a=yv(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);en=6,me=null}function Zg(e,n,a,o,u,A,S,I,G){e.cancelPendingCommit=null;do pc();while(xn!==0);if((Re&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(A=n.lanes|n.childLanes,A|=Fu,Ct(e,a,A,S,I,G),e===Ve&&(me=Ve=null,Ee=0),Sr=n,Ha=e,Cr=a,kf=A,qf=u,Hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Uv(We,function(){return im(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=k.p,k.p=2,S=Re,Re|=4;try{Sv(e,n,a)}finally{Re=S,k.p=u,N.T=o}}xn=1,$g(),tm(),em()}}function $g(){if(xn===1){xn=0;var e=Ha,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=k.p;k.p=2;var u=Re;Re|=4;try{Qg(n,e);var A=oA,S=zd(e.containerInfo),I=A.focusedElem,G=A.selectionRange;if(S!==I&&I&&I.ownerDocument&&Gd(I.ownerDocument.documentElement,I)){if(G!==null&&Uu(I)){var tt=G.start,At=G.end;if(At===void 0&&(At=tt),"selectionStart"in I)I.selectionStart=tt,I.selectionEnd=Math.min(At,I.value.length);else{var mt=I.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),ee=I.textContent.length,Zt=Math.min(G.start,ee),Ne=G.end===void 0?Zt:Math.min(G.end,ee);!at.extend&&Zt>Ne&&(S=Ne,Ne=Zt,Zt=S);var K=Od(I,Zt),V=Od(I,Ne);if(K&&V&&(at.rangeCount!==1||at.anchorNode!==K.node||at.anchorOffset!==K.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var $=mt.createRange();$.setStart(K.node,K.offset),at.removeAllRanges(),Zt>Ne?(at.addRange($),at.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),at.addRange($))}}}}for(mt=[],at=I;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<mt.length;I++){var dt=mt[I];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Bc=!!rA,oA=rA=null}finally{Re=u,k.p=o,N.T=a}}e.current=n,xn=2}}function tm(){if(xn===2){xn=0;var e=Ha,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=k.p;k.p=2;var u=Re;Re|=4;try{wg(e,n.alternate,n)}finally{Re=u,k.p=o,N.T=a}}xn=3}}function em(){if(xn===4||xn===3){xn=0,ve();var e=Ha,n=Sr,a=Cr,o=Hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Ha=null,nm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Te(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=k.p,k.p=2,N.T=null;try{for(var A=e.onRecoverableError,S=0;S<o.length;S++){var I=o[S];A(I.value,{componentStack:I.stack})}}finally{N.T=n,k.p=u}}(Cr&3)!==0&&pc(),zi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Yf?zo++:(zo=0,Yf=e):zo=0,Ho(0)}}function nm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,yo(n)))}function pc(e){return $g(),tm(),em(),im()}function im(){if(xn!==5)return!1;var e=Ha,n=kf;kf=0;var a=Te(Cr),o=N.T,u=k.p;try{k.p=32>a?32:a,N.T=null,a=qf,qf=null;var A=Ha,S=Cr;if(xn=0,Sr=Ha=null,Cr=0,(Re&6)!==0)throw Error(s(331));var I=Re;if(Re|=4,Gg(A.current),Pg(A,A.current,S,a),Re=I,Ho(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ft,A)}catch{}return!0}finally{k.p=u,N.T=o,nm(e,n)}}function am(e,n,a){n=di(a,n),n=xf(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(Nt(e,2),zi(e))}function Ge(e,n,a){if(e.tag===3)am(e,e,a);else for(;n!==null;){if(n.tag===3){am(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){e=di(a,e),a=lg(2),o=Da(n,a,2),o!==null&&(cg(a,o,n,e),Nt(o,2),zi(o));break}}n=n.return}}function Jf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Mv;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=Rv.bind(null,e,n,a),n.then(e,e))}function Rv(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Ee&a)===a&&(en===4||en===3&&(Ee&62914560)===Ee&&300>Ft()-Vf?(Re&2)===0&&xr(e,0):zf|=a,yr===Ee&&(yr=0)),zi(e)}function sm(e,n){n===0&&(n=Mt()),e=rr(e,n),e!==null&&(Nt(e,n),zi(e))}function wv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),sm(e,a)}function Dv(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),sm(e,a)}function Uv(e,n){return z(e,n)}var gc=null,Ir=null,jf=!1,mc=!1,Zf=!1,Is=0;function zi(e){e!==Ir&&e.next===null&&(Ir===null?gc=Ir=e:Ir=Ir.next=e),mc=!0,jf||(jf=!0,Qv())}function Ho(e,n){if(!Zf&&mc){Zf=!0;do for(var a=!1,o=gc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var A=0;else{var S=o.suspendedLanes,I=o.pingedLanes;A=(1<<31-Qt(42|e)+1)-1,A&=u&~(S&~I),A=A&201326741?A&201326741|1:A?A|2:0}A!==0&&(a=!0,cm(o,A))}else A=Ee,A=Ht(o,o===Ve?A:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(A&3)===0||Tt(o,A)||(a=!0,cm(o,A));o=o.next}while(a);Zf=!1}}function Lv(){rm()}function rm(){mc=jf=!1;var e=0;Is!==0&&(Vv()&&(e=Is),Is=0);for(var n=Ft(),a=null,o=gc;o!==null;){var u=o.next,A=om(o,n);A===0?(o.next=null,a===null?gc=u:a.next=u,u===null&&(Ir=a)):(a=o,(e!==0||(A&3)!==0)&&(mc=!0)),o=u}Ho(e)}function om(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,A=e.pendingLanes&-62914561;0<A;){var S=31-Qt(A),I=1<<S,G=u[S];G===-1?((I&a)===0||(I&o)!==0)&&(u[S]=re(I,n)):G<=n&&(e.expiredLanes|=I),A&=~I}if(n=Ve,a=Ee,a=Ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(we===2||we===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&be(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Tt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&be(o),Te(a)){case 2:case 8:a=oe;break;case 32:a=We;break;case 268435456:a=Q;break;default:a=We}return o=lm.bind(null,e),a=z(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&be(o),e.callbackPriority=2,e.callbackNode=null,2}function lm(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pc()&&e.callbackNode!==a)return null;var o=Ee;return o=Ht(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kg(e,o,n),om(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?lm.bind(null,e):null)}function cm(e,n){if(pc())return null;kg(e,n,!0)}function Qv(){qv(function(){(Re&6)!==0?z(Ot,Lv):rm()})}function $f(){return Is===0&&(Is=q()),Is}function um(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bl(""+e)}function fm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Nv(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var A=um((u[Ze]||null).action),S=o.submitter;S&&(n=(n=S[Ze]||null)?um(n.formAction):S.getAttribute("formAction"),n!==null&&(A=n,S=null));var I=new Dl("action","action",null,o,u);e.push({event:I,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Is!==0){var G=S?fm(u,S):new FormData(u);Ef(a,{pending:!0,data:G,method:u.method,action:A},null,G)}}else typeof A=="function"&&(I.preventDefault(),G=S?fm(u,S):new FormData(u),Ef(a,{pending:!0,data:G,method:u.method,action:A},A,G))},currentTarget:u}]})}}for(var tA=0;tA<Pu.length;tA++){var eA=Pu[tA],Pv=eA.toLowerCase(),Fv=eA[0].toUpperCase()+eA.slice(1);Mi(Pv,"on"+Fv)}Mi(kd,"onAnimationEnd"),Mi(qd,"onAnimationIteration"),Mi(Yd,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(ev,"onTransitionRun"),Mi(nv,"onTransitionStart"),Mi(iv,"onTransitionCancel"),Mi(Xd,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),B("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),B("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),B("onBeforeInput",["compositionend","keypress","textInput","paste"]),B("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Am(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var A=void 0;if(n)for(var S=o.length-1;0<=S;S--){var I=o[S],G=I.instance,tt=I.currentTarget;if(I=I.listener,G!==A&&u.isPropagationStopped())break t;A=I,u.currentTarget=tt;try{A(u)}catch(At){ac(At)}u.currentTarget=null,A=G}else for(S=0;S<o.length;S++){if(I=o[S],G=I.instance,tt=I.currentTarget,I=I.listener,G!==A&&u.isPropagationStopped())break t;A=I,u.currentTarget=tt;try{A(u)}catch(At){ac(At)}u.currentTarget=null,A=G}}}}function _e(e,n){var a=n[Js];a===void 0&&(a=n[Js]=new Set);var o=e+"__bubble";a.has(o)||(hm(n,e,2,!1),a.add(o))}function nA(e,n,a){var o=0;n&&(o|=4),hm(a,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function iA(e){if(!e[_c]){e[_c]=!0,Il.forEach(function(a){a!=="selectionchange"&&(Ov.has(a)||nA(a,!1,e),nA(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,nA("selectionchange",!1,n))}}function hm(e,n,a,o){switch(Pm(n)){case 2:var u=Ay;break;case 8:u=hy;break;default:u=mA}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function aA(e,n,a,o,u){var A=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var I=o.stateNode.containerInfo;if(I===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;I!==null;){if(S=ta(I),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=A=S;continue t}I=I.parentNode}}o=o.return}vd(function(){var tt=A,At=Su(a),mt=[];t:{var nt=Wd.get(e);if(nt!==void 0){var at=Dl,ee=e;switch(e){case"keypress":if(Rl(a)===0)break t;case"keydown":case"keyup":at=U0;break;case"focusin":ee="focus",at=bu;break;case"focusout":ee="blur",at=bu;break;case"beforeblur":case"afterblur":at=bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=N0;break;case kd:case qd:case Yd:at=x0;break;case Xd:at=F0;break;case"scroll":case"scrollend":at=E0;break;case"wheel":at=G0;break;case"copy":case"cut":case"paste":at=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Md;break;case"toggle":case"beforetoggle":at=H0}var Zt=(n&4)!==0,Ne=!Zt&&(e==="scroll"||e==="scrollend"),K=Zt?nt!==null?nt+"Capture":null:nt;Zt=[];for(var V=tt,$;V!==null;){var dt=V;if($=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||$===null||K===null||(dt=oo(V,K),dt!=null&&Zt.push(ko(V,dt,$))),Ne)break;V=V.return}0<Zt.length&&(nt=new at(nt,ee,null,a,At),mt.push({event:nt,listeners:Zt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&a!==yu&&(ee=a.relatedTarget||a.fromElement)&&(ta(ee)||ee[Qi]))break t;if((at||nt)&&(nt=At.window===At?At:(nt=At.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(ee=a.relatedTarget||a.toElement,at=tt,ee=ee?ta(ee):null,ee!==null&&(Ne=c(ee),Zt=ee.tag,ee!==Ne||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(at=null,ee=tt),at!==ee)){if(Zt=Cd,dt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Md,dt="onPointerLeave",K="onPointerEnter",V="pointer"),Ne=at==null?nt:us(at),$=ee==null?nt:us(ee),nt=new Zt(dt,V+"leave",at,a,At),nt.target=Ne,nt.relatedTarget=$,dt=null,ta(At)===tt&&(Zt=new Zt(K,V+"enter",ee,a,At),Zt.target=$,Zt.relatedTarget=Ne,dt=Zt),Ne=dt,at&&ee)e:{for(Zt=at,K=ee,V=0,$=Zt;$;$=Br($))V++;for($=0,dt=K;dt;dt=Br(dt))$++;for(;0<V-$;)Zt=Br(Zt),V--;for(;0<$-V;)K=Br(K),$--;for(;V--;){if(Zt===K||K!==null&&Zt===K.alternate)break e;Zt=Br(Zt),K=Br(K)}Zt=null}else Zt=null;at!==null&&dm(mt,nt,at,Zt,!1),ee!==null&&Ne!==null&&dm(mt,Ne,ee,Zt,!0)}}t:{if(nt=tt?us(tt):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Gt=Ud;else if(wd(nt))if(Ld)Gt=Z0;else{Gt=J0;var de=K0}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&vu(tt.elementType)&&(Gt=Ud):Gt=j0;if(Gt&&(Gt=Gt(e,tt))){Dd(mt,Gt,a,At);break t}de&&de(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Un(nt,"number",nt.value)}switch(de=tt?us(tt):window,e){case"focusin":(wd(de)||de.contentEditable==="true")&&(ir=de,Lu=tt,go=null);break;case"focusout":go=Lu=ir=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Hd(mt,a,At);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":Hd(mt,a,At)}var Xt;if(Ru)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else nr?Td(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Id&&a.locale!=="ko"&&(nr||te!=="onCompositionStart"?te==="onCompositionEnd"&&nr&&(Xt=yd()):(ba=At,Mu="value"in ba?ba.value:ba.textContent,nr=!0)),de=Ec(tt,te),0<de.length&&(te=new xd(te,e,null,a,At),mt.push({event:te,listeners:de}),Xt?te.data=Xt:(Xt=Rd(a),Xt!==null&&(te.data=Xt)))),(Xt=k0?q0(e,a):Y0(e,a))&&(te=Ec(tt,"onBeforeInput"),0<te.length&&(de=new xd("onBeforeInput","beforeinput",null,a,At),mt.push({event:de,listeners:te}),de.data=Xt)),Nv(mt,e,tt,a,At)}Am(mt,n)})}function ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ec(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,A=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||A===null||(u=oo(e,a),u!=null&&o.unshift(ko(e,u,A)),u=oo(e,n),u!=null&&o.push(ko(e,u,A))),e.tag===3)return o;e=e.return}return[]}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dm(e,n,a,o,u){for(var A=n._reactName,S=[];a!==null&&a!==o;){var I=a,G=I.alternate,tt=I.stateNode;if(I=I.tag,G!==null&&G===o)break;I!==5&&I!==26&&I!==27||tt===null||(G=tt,u?(tt=oo(a,A),tt!=null&&S.unshift(ko(a,tt,G))):u||(tt=oo(a,A),tt!=null&&S.push(ko(a,tt,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Gv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function pm(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(zv,"")}function gm(e,n){return n=pm(n),pm(e)===n}function vc(){}function Qe(e,n,a,o,u,A){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Xn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Xn(e,""+o);break;case"className":Pt(e,"class",o);break;case"tabIndex":Pt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,o);break;case"style":_d(e,o,A);break;case"data":if(n!=="object"){Pt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof A=="function"&&(a==="formAction"?(n!=="input"&&Qe(e,n,"name",u.name,u,null),Qe(e,n,"formEncType",u.formEncType,u,null),Qe(e,n,"formMethod",u.formMethod,u,null),Qe(e,n,"formTarget",u.formTarget,u,null)):(Qe(e,n,"encType",u.encType,u,null),Qe(e,n,"method",u.method,u,null),Qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=vc);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=bl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),wt(e,"popover",o);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=m0.get(a)||a,wt(e,a,o))}}function sA(e,n,a,o,u,A){switch(a){case"style":_d(e,o,A);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Xn(e,o):(typeof o=="number"||typeof o=="bigint")&&Xn(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=vc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),A=e[Ze]||null,A=A!=null?A[a]:null,typeof A=="function"&&e.removeEventListener(n,A,u),typeof o=="function")){typeof A!="function"&&A!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):wt(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,A;for(A in a)if(a.hasOwnProperty(A)){var S=a[A];if(S!=null)switch(A){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,A,S,a,null)}}u&&Qe(e,n,"srcSet",a.srcSet,a,null),o&&Qe(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var I=A=S=u=null,G=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var At=a[o];if(At!=null)switch(o){case"name":u=At;break;case"type":S=At;break;case"checked":G=At;break;case"defaultChecked":tt=At;break;case"value":A=At;break;case"defaultValue":I=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(s(137,n));break;default:Qe(e,n,o,At,a,null)}}Gn(e,A,I,G,tt,S,u,!1),ge(e);return;case"select":_e("invalid",e),o=S=A=null;for(u in a)if(a.hasOwnProperty(u)&&(I=a[u],I!=null))switch(u){case"value":A=I;break;case"defaultValue":S=I;break;case"multiple":o=I;default:Qe(e,n,u,I,a,null)}n=A,a=S,e.multiple=!!o,n!=null?$e(e,!!o,n,!1):a!=null&&$e(e,!!o,a,!0);return;case"textarea":_e("invalid",e),A=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(I=a[S],I!=null))switch(S){case"value":o=I;break;case"defaultValue":u=I;break;case"children":A=I;break;case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(91));break;default:Qe(e,n,S,I,a,null)}$s(e,o,u,A),ge(e);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(e,n,G,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)_e(Vo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,tt,o,a,null)}return;default:if(vu(n)){for(At in a)a.hasOwnProperty(At)&&(o=a[At],o!==void 0&&sA(e,n,At,o,a,void 0));return}}for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null&&Qe(e,n,I,o,a,null))}function Hv(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,A=null,S=null,I=null,G=null,tt=null,At=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":G=mt;default:o.hasOwnProperty(at)||Qe(e,n,at,null,o,mt)}}for(var nt in o){var at=o[nt];if(mt=a[nt],o.hasOwnProperty(nt)&&(at!=null||mt!=null))switch(nt){case"type":A=at;break;case"name":u=at;break;case"checked":tt=at;break;case"defaultChecked":At=at;break;case"value":S=at;break;case"defaultValue":I=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==mt&&Qe(e,n,nt,at,o,mt)}}Oe(e,S,I,G,tt,At,A,u);return;case"select":at=S=I=nt=null;for(A in a)if(G=a[A],a.hasOwnProperty(A)&&G!=null)switch(A){case"value":break;case"multiple":at=G;default:o.hasOwnProperty(A)||Qe(e,n,A,null,o,G)}for(u in o)if(A=o[u],G=a[u],o.hasOwnProperty(u)&&(A!=null||G!=null))switch(u){case"value":nt=A;break;case"defaultValue":I=A;break;case"multiple":S=A;default:A!==G&&Qe(e,n,u,A,o,G)}n=I,a=S,o=at,nt!=null?$e(e,!!a,nt,!1):!!o!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(I in a)if(u=a[I],a.hasOwnProperty(I)&&u!=null&&!o.hasOwnProperty(I))switch(I){case"value":break;case"children":break;default:Qe(e,n,I,null,o,u)}for(S in o)if(u=o[S],A=a[S],o.hasOwnProperty(S)&&(u!=null||A!=null))switch(S){case"value":nt=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==A&&Qe(e,n,S,u,o,A)}Sn(e,nt,at);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Qe(e,n,ee,null,o,nt)}for(G in o)if(nt=o[G],at=a[G],o.hasOwnProperty(G)&&nt!==at&&(nt!=null||at!=null))switch(G){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Qe(e,n,G,nt,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)nt=a[Zt],a.hasOwnProperty(Zt)&&nt!=null&&!o.hasOwnProperty(Zt)&&Qe(e,n,Zt,null,o,nt);for(tt in o)if(nt=o[tt],at=a[tt],o.hasOwnProperty(tt)&&nt!==at&&(nt!=null||at!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Qe(e,n,tt,nt,o,at)}return;default:if(vu(n)){for(var Ne in a)nt=a[Ne],a.hasOwnProperty(Ne)&&nt!==void 0&&!o.hasOwnProperty(Ne)&&sA(e,n,Ne,void 0,o,nt);for(At in o)nt=o[At],at=a[At],!o.hasOwnProperty(At)||nt===at||nt===void 0&&at===void 0||sA(e,n,At,nt,o,at);return}}for(var K in a)nt=a[K],a.hasOwnProperty(K)&&nt!=null&&!o.hasOwnProperty(K)&&Qe(e,n,K,null,o,nt);for(mt in o)nt=o[mt],at=a[mt],!o.hasOwnProperty(mt)||nt===at||nt==null&&at==null||Qe(e,n,mt,nt,o,at)}var rA=null,oA=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function mm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _m(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function lA(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cA=null;function Vv(){var e=window.event;return e&&e.type==="popstate"?e===cA?!1:(cA=e,!0):(cA=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(e){return vm.resolve(null).then(e).catch(Yv)}:Em;function Yv(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function ym(e,n){var a=n,o=0,u=0;do{var A=a.nextSibling;if(e.removeChild(a),A&&A.nodeType===8)if(a=A.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&qo(S.documentElement),a&2&&qo(S.body),a&4)for(a=S.head,qo(a),S=a.firstChild;S;){var I=S.nextSibling,G=S.nodeName;S[Ni]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=I}}if(u===0){e.removeChild(A),$o(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=A}while(a);$o(n)}function uA(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uA(a),Zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xv(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ni])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(A=e.getAttribute("rel"),A==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(A!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(A=e.getAttribute("src"),(A!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&A&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var A=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===A)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function Wv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bi(e.nextSibling),e===null))return null;return e}function fA(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Kv(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var AA=null;function Sm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Cm(e,n,a){switch(n=yc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zs(e)}var vi=new Map,xm=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=k.d;k.d={f:Jv,r:jv,D:Zv,C:$v,L:ty,m:ey,X:iy,S:ny,M:ay};function Jv(){var e=da.f(),n=hc();return e||n}function jv(e){var n=Ia(e);n!==null&&n.tag===5&&n.type==="form"?kp(n):da.r(e)}var br=typeof document>"u"?null:document;function Mm(e,n,a){var o=br;if(o&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),xm.has(u)||(xm.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),rn(n),o.head.appendChild(n)))}}function Zv(e){da.D(e),Mm("dns-prefetch",e,null)}function $v(e,n){da.C(e,n),Mm("preconnect",e,n)}function ty(e,n,a){da.L(e,n,a);var o=br;if(o&&e&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+mn(a.imageSizes)+'"]')):u+='[href="'+mn(e)+'"]';var A=u;switch(n){case"style":A=Tr(e);break;case"script":A=Rr(e)}vi.has(A)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(A,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Yo(A))||n==="script"&&o.querySelector(Xo(A))||(n=o.createElement("link"),Mn(n,"link",e),rn(n),o.head.appendChild(n)))}}function ey(e,n){da.m(e,n);var a=br;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(e)+'"]',A=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":A=Rr(e)}if(!vi.has(A)&&(e=g({rel:"modulepreload",href:e},n),vi.set(A,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xo(A)))return}o=a.createElement("link"),Mn(o,"link",e),rn(o),a.head.appendChild(o)}}}function ny(e,n,a){da.S(e,n,a);var o=br;if(o&&e){var u=Ba(o).hoistableStyles,A=Tr(e);n=n||"default";var S=u.get(A);if(!S){var I={loading:0,preload:null};if(S=o.querySelector(Yo(A)))I.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(A))&&hA(e,a);var G=S=o.createElement("link");rn(G),Mn(G,"link",e),G._p=new Promise(function(tt,At){G.onload=tt,G.onerror=At}),G.addEventListener("load",function(){I.loading|=1}),G.addEventListener("error",function(){I.loading|=2}),I.loading|=4,Cc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:I},u.set(A,S)}}}function iy(e,n){da.X(e,n);var a=br;if(a&&e){var o=Ba(a).hoistableScripts,u=Rr(e),A=o.get(u);A||(A=a.querySelector(Xo(u)),A||(e=g({src:e,async:!0},n),(n=vi.get(u))&&dA(e,n),A=a.createElement("script"),rn(A),Mn(A,"link",e),a.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},o.set(u,A))}}function ay(e,n){da.M(e,n);var a=br;if(a&&e){var o=Ba(a).hoistableScripts,u=Rr(e),A=o.get(u);A||(A=a.querySelector(Xo(u)),A||(e=g({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&dA(e,n),A=a.createElement("script"),rn(A),Mn(A,"link",e),a.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},o.set(u,A))}}function Im(e,n,a,o){var u=(u=ht.current)?Sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=Ba(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tr(a.href);var A=Ba(u).hoistableStyles,S=A.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},A.set(e,S),(A=u.querySelector(Yo(e)))&&!A._p&&(S.instance=A,S.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),A||sy(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Ba(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Tr(e){return'href="'+mn(e)+'"'}function Yo(e){return'link[rel="stylesheet"]['+e+"]"}function Bm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function sy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),rn(n),e.head.appendChild(n))}function Rr(e){return'[src="'+mn(e)+'"]'}function Xo(e){return"script[async]"+e}function bm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),Mn(o,"style",u),Cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Tr(a.href);var A=e.querySelector(Yo(u));if(A)return n.state.loading|=4,n.instance=A,rn(A),A;o=Bm(a),(u=vi.get(u))&&hA(o,u),A=(e.ownerDocument||e).createElement("link"),rn(A);var S=A;return S._p=new Promise(function(I,G){S.onload=I,S.onerror=G}),Mn(A,"link",o),n.state.loading|=4,Cc(A,a.precedence,e),n.instance=A;case"script":return A=Rr(a.src),(u=e.querySelector(Xo(A)))?(n.instance=u,rn(u),u):(o=a,(u=vi.get(A))&&(o=g({},a),dA(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,a.precedence,e));return n.instance}function Cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,A=u,S=0;S<o.length;S++){var I=o[S];if(I.dataset.precedence===n)A=I;else if(A!==u)break}A?A.parentNode.insertBefore(e,A.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function hA(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function dA(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var xc=null;function Tm(e,n,a){if(xc===null){var o=new Map,u=xc=new Map;u.set(a,o)}else u=xc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var A=a[u];if(!(A[Ni]||A[fn]||e==="link"&&A.getAttribute("rel")==="stylesheet")&&A.namespaceURI!=="http://www.w3.org/2000/svg"){var S=A.getAttribute(n)||"";S=e+S;var I=o.get(S);I?I.push(A):o.set(S,[A])}}return o}function Rm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ry(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wo=null;function oy(){}function ly(e,n,a){if(Wo===null)throw Error(s(475));var o=Wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Tr(a.href),A=e.querySelector(Yo(u));if(A){e=A._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Mc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=A,rn(A);return}A=e.ownerDocument||e,a=Bm(a),(u=vi.get(u))&&hA(a,u),A=A.createElement("link"),rn(A);var S=A;S._p=new Promise(function(I,G){S.onload=I,S.onerror=G}),Mn(A,"link",a),n.instance=A}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Mc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function cy(){if(Wo===null)throw Error(s(475));var e=Wo;return e.stylesheets&&e.count===0&&pA(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&pA(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Mc(){if(this.count--,this.count===0){if(this.stylesheets)pA(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ic=null;function pA(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ic=new Map,n.forEach(uy,e),Ic=null,Mc.call(e))}function uy(e,n){if(!(n.state.loading&4)){var a=Ic.get(e);if(a)var o=a.get(null);else{a=new Map,Ic.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),A=0;A<u.length;A++){var S=u[A];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),A=a.get(S)||o,A===o&&a.set(null,u),a.set(S,u),this.count++,o=Mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),A?A.parentNode.insertBefore(u,A.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ko={$$typeof:w,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function fy(e,n,a,o,u,A,S,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.hiddenUpdates=Bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=A,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Dm(e,n,a,o,u,A,S,I,G,tt,At,mt){return e=new fy(e,n,a,S,I,G,tt,mt),n=1,A===!0&&(n|=24),A=ii(3,null,null,n),e.current=A,A.stateNode=e,n=Ku(),n.refCount++,e.pooledCache=n,n.refCount++,A.memoizedState={element:o,isDehydrated:a,cache:n},$u(A),e}function Um(e){return e?(e=or,e):or}function Lm(e,n,a,o,u,A){u=Um(u),o.context===null?o.context=u:o.pendingContext=u,o=wa(n),o.payload={element:a},A=A===void 0?null:A,A!==null&&(o.callback=A),a=Da(e,o,n),a!==null&&(li(a,e,n),Mo(a,e,n))}function Qm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gA(e,n){Qm(e,n),(e=e.alternate)&&Qm(e,n)}function Nm(e){if(e.tag===13){var n=rr(e,67108864);n!==null&&li(n,e,67108864),gA(e,67108864)}}var Bc=!0;function Ay(e,n,a,o){var u=N.T;N.T=null;var A=k.p;try{k.p=2,mA(e,n,a,o)}finally{k.p=A,N.T=u}}function hy(e,n,a,o){var u=N.T;N.T=null;var A=k.p;try{k.p=8,mA(e,n,a,o)}finally{k.p=A,N.T=u}}function mA(e,n,a,o){if(Bc){var u=_A(o);if(u===null)aA(e,n,o,bc,a),Fm(e,o);else if(py(u,e,n,a,o))o.stopPropagation();else if(Fm(e,o),n&4&&-1<dy.indexOf(e)){for(;u!==null;){var A=Ia(u);if(A!==null)switch(A.tag){case 3:if(A=A.stateNode,A.current.memoizedState.isDehydrated){var S=Wt(A.pendingLanes);if(S!==0){var I=A;for(I.pendingLanes|=2,I.entangledLanes|=2;S;){var G=1<<31-Qt(S);I.entanglements[1]|=G,S&=~G}zi(A),(Re&6)===0&&(fc=Ft()+500,Ho(0))}}break;case 13:I=rr(A,2),I!==null&&li(I,A,2),hc(),gA(A,2)}if(A=_A(o),A===null&&aA(e,n,o,bc,a),A===u)break;u=A}u!==null&&o.stopPropagation()}else aA(e,n,o,null,a)}}function _A(e){return e=Su(e),EA(e)}var bc=null;function EA(e){if(bc=null,e=ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return bc=e,null}function Pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case Ot:return 2;case oe:return 8;case We:case Ke:return 32;case Q:return 268435456;default:return 32}default:return 32}}var vA=!1,qa=null,Ya=null,Xa=null,Jo=new Map,jo=new Map,Wa=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fm(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Zo(e,n,a,o,u,A){return e===null||e.nativeEvent!==A?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:A,targetContainers:[u]},n!==null&&(n=Ia(n),n!==null&&Nm(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function py(e,n,a,o,u){switch(n){case"focusin":return qa=Zo(qa,e,n,a,o,u),!0;case"dragenter":return Ya=Zo(Ya,e,n,a,o,u),!0;case"mouseover":return Xa=Zo(Xa,e,n,a,o,u),!0;case"pointerover":var A=u.pointerId;return Jo.set(A,Zo(Jo.get(A)||null,e,n,a,o,u)),!0;case"gotpointercapture":return A=u.pointerId,jo.set(A,Zo(jo.get(A)||null,e,n,a,o,u)),!0}return!1}function Om(e){var n=ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){if(a.tag===13){var o=oi();o=ie(o);var u=rr(a,o);u!==null&&li(u,a,o),gA(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_A(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Ia(a),n!==null&&Nm(n),e.blockedOn=a,!1;n.shift()}return!0}function Gm(e,n,a){Tc(e)&&a.delete(n)}function gy(){vA=!1,qa!==null&&Tc(qa)&&(qa=null),Ya!==null&&Tc(Ya)&&(Ya=null),Xa!==null&&Tc(Xa)&&(Xa=null),Jo.forEach(Gm),jo.forEach(Gm)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,vA||(vA=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gy)))}var wc=null;function zm(e){wc!==e&&(wc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===e&&(wc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(EA(o||a)===null)continue;break}var A=Ia(a);A!==null&&(e.splice(n,3),n-=3,Ef(A,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function $o(e){function n(G){return Rc(G,e)}qa!==null&&Rc(qa,e),Ya!==null&&Rc(Ya,e),Xa!==null&&Rc(Xa,e),Jo.forEach(n),jo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Om(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],A=a[o+1],S=u[Ze]||null;if(typeof A=="function")S||zm(a);else if(S){var I=null;if(A&&A.hasAttribute("formAction")){if(u=A,S=A[Ze]||null)I=S.formAction;else if(EA(u)!==null)continue}else I=S.action;typeof I=="function"?a[o+1]=I:(a.splice(o,3),o-=3),zm(a)}}}function yA(e){this._internalRoot=e}Dc.prototype.render=yA.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();Lm(a,o,e,n,null,null)},Dc.prototype.unmount=yA.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lm(e.current,2,null,e,null,null),hc(),n[Qi]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Om(e)}};var Hm=t.version;if(Hm!=="19.1.1")throw Error(s(527,Hm,"19.1.1"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var my={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{ft=Uc.inject(my),Et=Uc}catch{}}return el.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=ag,A=sg,S=rg,I=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(A=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(I=n.unstable_transitionCallbacks)),n=Dm(e,1,!1,null,null,a,o,u,A,S,I,null),e[Qi]=n.current,iA(e),new yA(n)},el.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",A=ag,S=sg,I=rg,G=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(A=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(I=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Dm(e,1,!0,n,a??null,o,u,A,S,I,G,tt),n.context=Um(null),a=n.current,o=oi(),o=ie(o),u=wa(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,Nt(n,a),zi(n),e[Qi]=n.current,iA(e),new Dc(n)},el.version="19.1.1",el}var Zm;function By(){if(Zm)return xA.exports;Zm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xA.exports=Iy(),xA.exports}var by=By();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="179",Jr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ty=0,$m=1,Ry=2,dE=1,pE=2,ya=3,os=0,Yn=1,ki=2,ss=0,Os=1,t_=2,e_=3,n_=4,wy=5,Ls=100,Dy=101,Uy=102,Ly=103,Qy=104,Ny=200,Py=201,Fy=202,Oy=203,_h=204,Eh=205,Gy=206,zy=207,Hy=208,Vy=209,ky=210,qy=211,Yy=212,Xy=213,Wy=214,vh=0,yh=1,Sh=2,eo=3,Ch=4,xh=5,Mh=6,Ih=7,gE=0,Ky=1,Jy=2,rs=0,jy=1,Zy=2,$y=3,tS=4,eS=5,nS=6,iS=7,mE=300,qs=301,no=302,Bh=303,bh=304,pu=306,Th=1e3,Wi=1001,Rh=1002,Ai=1003,aS=1004,Lc=1005,Fn=1006,bA=1007,Ca=1008,sn=1009,_E=1010,EE=1011,Al=1012,nd=1013,Ys=1014,ei=1015,Ui=1016,id=1017,ad=1018,hl=1020,vE=35902,yE=1021,SE=1022,Tn=1023,dl=1026,pl=1027,Ns=1028,sd=1029,Ps=1030,rd=1031,od=1033,jr=33776,Gs=33777,Zr=33778,zs=33779,lu=35840,wh=35841,cu=35842,Dh=35843,uu=36196,gl=37492,ml=37496,Hs=37808,Uh=37809,Lh=37810,Qh=37811,_l=37812,Nh=37813,Ph=37814,Fh=37815,Oh=37816,Gh=37817,zh=37818,Hh=37819,Vh=37820,kh=37821,Vs=36492,qh=36494,fu=36495,CE=36283,Yh=36284,Xh=36285,Wh=36286,sS=3200,rS=3201,xE=0,oS=1,qi="",$n="srgb",Ji="srgb-linear",Au="linear",Pe="srgb",wr=7680,i_=519,lS=512,cS=513,uS=514,ME=515,fS=516,AS=517,hS=518,dS=519,Kh=35044,a_="300 es",Ki=2e3,hu=2001;class Ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s_=1234567;const cl=Math.PI/180,El=180/Math.PI;function xa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function se(r,t,i){return Math.max(t,Math.min(i,r))}function ld(r,t){return(r%t+t)%t}function pS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function gS(r,t,i){return r!==t?(i-r)/(t-r):0}function ul(r,t,i){return(1-i)*r+i*t}function mS(r,t,i,s){return ul(r,t,1-Math.exp(-i*s))}function _S(r,t=1){return t-Math.abs(ld(r,t*2)-t)}function ES(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function vS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function yS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function SS(r,t){return r+Math.random()*(t-r)}function CS(r){return r*(.5-Math.random())}function xS(r){r!==void 0&&(s_=r);let t=s_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function MS(r){return r*cl}function IS(r){return r*El}function BS(r){return(r&r-1)===0&&r!==0}function bS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function TS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function RS(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),p=f(i/2),d=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),E=f((t-s)/2),v=c((s-t)/2),C=f((s-t)/2);switch(l){case"XYX":r.set(h*g,p*_,p*E,h*d);break;case"YZY":r.set(p*E,h*g,p*_,h*d);break;case"ZXZ":r.set(p*_,p*E,h*g,h*d);break;case"XZX":r.set(h*g,p*C,p*v,h*d);break;case"YXY":r.set(p*v,h*g,p*C,h*d);break;case"ZYZ":r.set(p*C,p*v,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function De(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const IE={DEG2RAD:cl,RAD2DEG:El,generateUUID:xa,clamp:se,euclideanModulo:ld,mapLinear:pS,inverseLerp:gS,lerp:ul,damp:mS,pingpong:_S,smoothstep:ES,smootherstep:vS,randInt:yS,randFloat:SS,randFloatSpread:CS,seededRandom:xS,degToRad:MS,radToDeg:IS,isPowerOfTwo:BS,ceilPowerOfTwo:bS,floorPowerOfTwo:TS,setQuaternionFromProperEuler:RS,normalize:De,denormalize:wi};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=se(this.x,t.x,i.x),this.y=se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=se(this.x,t,i),this.y=se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let p=s[l+0],d=s[l+1],g=s[l+2],_=s[l+3];const E=c[f+0],v=c[f+1],C=c[f+2],x=c[f+3];if(h===0){t[i+0]=p,t[i+1]=d,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=E,t[i+1]=v,t[i+2]=C,t[i+3]=x;return}if(_!==x||p!==E||d!==v||g!==C){let y=1-h;const m=p*E+d*v+g*C+_*x,L=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const P=Math.sqrt(w),O=Math.atan2(P,m*L);y=Math.sin(y*O)/P,h=Math.sin(h*O)/P}const T=h*L;if(p=p*y+E*T,d=d*y+v*T,g=g*y+C*T,_=_*y+x*T,y===1-h){const P=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=P,d*=P,g*=P,_*=P}}t[i]=p,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],p=s[l+1],d=s[l+2],g=s[l+3],_=c[f],E=c[f+1],v=c[f+2],C=c[f+3];return t[i]=h*C+g*_+p*v-d*E,t[i+1]=p*C+g*E+d*_-h*v,t[i+2]=d*C+g*v+h*E-p*_,t[i+3]=g*C-h*_-p*E-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,d=h(s/2),g=h(l/2),_=h(c/2),E=p(s/2),v=p(l/2),C=p(c/2);switch(f){case"XYZ":this._x=E*g*_+d*v*C,this._y=d*v*_-E*g*C,this._z=d*g*C+E*v*_,this._w=d*g*_-E*v*C;break;case"YXZ":this._x=E*g*_+d*v*C,this._y=d*v*_-E*g*C,this._z=d*g*C-E*v*_,this._w=d*g*_+E*v*C;break;case"ZXY":this._x=E*g*_-d*v*C,this._y=d*v*_+E*g*C,this._z=d*g*C+E*v*_,this._w=d*g*_-E*v*C;break;case"ZYX":this._x=E*g*_-d*v*C,this._y=d*v*_+E*g*C,this._z=d*g*C-E*v*_,this._w=d*g*_+E*v*C;break;case"YZX":this._x=E*g*_+d*v*C,this._y=d*v*_+E*g*C,this._z=d*g*C-E*v*_,this._w=d*g*_-E*v*C;break;case"XZY":this._x=E*g*_-d*v*C,this._y=d*v*_-E*g*C,this._z=d*g*C+E*v*_,this._w=d*g*_+E*v*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],d=i[2],g=i[6],_=i[10],E=s+h+_;if(E>0){const v=.5/Math.sqrt(E+1);this._w=.25/v,this._x=(g-p)*v,this._y=(c-d)*v,this._z=(f-l)*v}else if(s>h&&s>_){const v=2*Math.sqrt(1+s-h-_);this._w=(g-p)/v,this._x=.25*v,this._y=(l+f)/v,this._z=(c+d)/v}else if(h>_){const v=2*Math.sqrt(1+h-s-_);this._w=(c-d)/v,this._x=(l+f)/v,this._y=.25*v,this._z=(p+g)/v}else{const v=2*Math.sqrt(1+_-s-h);this._w=(f-l)/v,this._x=(c+d)/v,this._y=(p+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,d=i._z,g=i._w;return this._x=s*g+f*h+l*d-c*p,this._y=l*g+f*p+c*h-s*d,this._z=c*g+f*d+s*p-l*h,this._w=f*g-s*h-l*p-c*d,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const v=1-i;return this._w=v*f+i*this._w,this._x=v*s+i*this._x,this._y=v*l+i*this._y,this._z=v*c+i*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),_=Math.sin((1-i)*g)/d,E=Math.sin(i*g)/d;return this._w=f*_+this._w*E,this._x=s*_+this._x*E,this._y=l*_+this._y*E,this._z=c*_+this._z*E,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,i=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(r_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(r_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,d=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+p*d+f*_-h*g,this.y=s+p*g+h*d-c*_,this.z=l+p*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=se(this.x,t.x,i.x),this.y=se(this.y,t.y,i.y),this.z=se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=se(this.x,t,i),this.y=se(this.y,t,i),this.z=se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return TA.copy(this).projectOnVector(t),this.sub(TA)}reflect(t){return this.sub(TA.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const TA=new X,r_=new Xs;class ce{constructor(t,i,s,l,c,f,h,p,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,p,d)}set(t,i,s,l,c,f,h,p,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],p=s[6],d=s[1],g=s[4],_=s[7],E=s[2],v=s[5],C=s[8],x=l[0],y=l[3],m=l[6],L=l[1],w=l[4],T=l[7],P=l[2],O=l[5],F=l[8];return c[0]=f*x+h*L+p*P,c[3]=f*y+h*w+p*O,c[6]=f*m+h*T+p*F,c[1]=d*x+g*L+_*P,c[4]=d*y+g*w+_*O,c[7]=d*m+g*T+_*F,c[2]=E*x+v*L+C*P,c[5]=E*y+v*w+C*O,c[8]=E*m+v*T+C*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return i*f*g-i*h*d-s*c*g+s*h*p+l*c*d-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=g*f-h*d,E=h*p-g*c,v=d*c-f*p,C=i*_+s*E+l*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/C;return t[0]=_*x,t[1]=(l*d-g*s)*x,t[2]=(h*s-l*f)*x,t[3]=E*x,t[4]=(g*i-l*p)*x,t[5]=(l*c-h*i)*x,t[6]=v*x,t[7]=(s*p-d*i)*x,t[8]=(f*i-s*c)*x,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const p=Math.cos(c),d=Math.sin(c);return this.set(s*p,s*d,-s*(p*f+d*h)+f+t,-l*d,l*p,-l*(-d*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(RA.makeScale(t,i)),this}rotate(t){return this.premultiply(RA.makeRotation(-t)),this}translate(t,i){return this.premultiply(RA.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const RA=new ce;function BE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wS(){const r=vl("canvas");return r.style.display="block",r}const o_={};function $r(r){r in o_||(o_[r]=!0,console.warn(r))}function DS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const l_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const r={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Pe&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pe&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qi?Au:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ji]:{primaries:t,whitePoint:s,transfer:Au,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),r}const Ie=US();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class LS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Dr===void 0&&(Dr=vl("canvas")),Dr.width=t.width,Dr.height=t.height;const l=Dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=vl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QS=0;class cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=xa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(wA(l[f].image)):c.push(wA(l[f]))}else c=wA(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wA(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;const DA=new X;class Rn extends Ks{constructor(t=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,s=Wi,l=Wi,c=Fn,f=Ca,h=Tn,p=sn,d=Rn.DEFAULT_ANISOTROPY,g=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=xa(),this.name="",this.source=new cd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(DA).x}get height(){return this.source.getSize(DA).y}get depth(){return this.source.getSize(DA).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Th:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Th:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=mE;Rn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,i=0,s=0,l=1){Se.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,d=p[0],g=p[4],_=p[8],E=p[1],v=p[5],C=p[9],x=p[2],y=p[6],m=p[10];if(Math.abs(g-E)<.01&&Math.abs(_-x)<.01&&Math.abs(C-y)<.01){if(Math.abs(g+E)<.1&&Math.abs(_+x)<.1&&Math.abs(C+y)<.1&&Math.abs(d+v+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(d+1)/2,T=(v+1)/2,P=(m+1)/2,O=(g+E)/4,F=(_+x)/4,H=(C+y)/4;return w>T&&w>P?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=O/s,c=F/s):T>P?T<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(T),s=O/l,c=H/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=F/c,l=H/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-C)*(y-C)+(_-x)*(_-x)+(E-g)*(E-g));return Math.abs(L)<.001&&(L=1),this.x=(y-C)/L,this.y=(_-x)/L,this.z=(E-g)/L,this.w=Math.acos((d+v+m-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=se(this.x,t.x,i.x),this.y=se(this.y,t.y,i.y),this.z=se(this.z,t.z,i.z),this.w=se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=se(this.x,t,i),this.y=se(this.y,t,i),this.z=se(this.z,t,i),this.w=se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Ks{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Se(0,0,t,i),this.scissorTest=!1,this.viewport=new Se(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Rn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ws extends PS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class bE extends Rn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends Rn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qc.copy(s.boundingBox)),Qc.applyMatrix4(t.matrixWorld),this.union(Qc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Nc.subVectors(this.max,nl),Ur.subVectors(t.a,nl),Lr.subVectors(t.b,nl),Qr.subVectors(t.c,nl),Ja.subVectors(Lr,Ur),ja.subVectors(Qr,Lr),Bs.subVectors(Ur,Qr);let i=[0,-Ja.z,Ja.y,0,-ja.z,ja.y,0,-Bs.z,Bs.y,Ja.z,0,-Ja.x,ja.z,0,-ja.x,Bs.z,0,-Bs.x,-Ja.y,Ja.x,0,-ja.y,ja.x,0,-Bs.y,Bs.x,0];return!UA(i,Ur,Lr,Qr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!UA(i,Ur,Lr,Qr,Nc))?!1:(Pc.crossVectors(Ja,ja),i=[Pc.x,Pc.y,Pc.z],UA(i,Ur,Lr,Qr,Nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new X,new X,new X,new X,new X,new X,new X,new X],bi=new X,Qc=new ls,Ur=new X,Lr=new X,Qr=new X,Ja=new X,ja=new X,Bs=new X,nl=new X,Nc=new X,Pc=new X,bs=new X;function UA(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){bs.fromArray(r,c);const h=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),p=t.dot(bs),d=i.dot(bs),g=s.dot(bs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const FS=new ls,il=new X,LA=new X;class yl{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):FS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(LA.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(LA)),this.expandByPoint(il.copy(t.center).sub(LA))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new X,QA=new X,Fc=new X,Za=new X,NA=new X,Oc=new X,PA=new X;class RE{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){QA.copy(t).add(i).multiplyScalar(.5),Fc.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(QA);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Fc),h=Za.dot(this.direction),p=-Za.dot(Fc),d=Za.lengthSq(),g=Math.abs(1-f*f);let _,E,v,C;if(g>0)if(_=f*p-h,E=f*h-p,C=c*g,_>=0)if(E>=-C)if(E<=C){const x=1/g;_*=x,E*=x,v=_*(_+f*E+2*h)+E*(f*_+E+2*p)+d}else E=c,_=Math.max(0,-(f*E+h)),v=-_*_+E*(E+2*p)+d;else E=-c,_=Math.max(0,-(f*E+h)),v=-_*_+E*(E+2*p)+d;else E<=-C?(_=Math.max(0,-(-f*c+h)),E=_>0?-c:Math.min(Math.max(-c,-p),c),v=-_*_+E*(E+2*p)+d):E<=C?(_=0,E=Math.min(Math.max(-c,-p),c),v=E*(E+2*p)+d):(_=Math.max(0,-(f*c+h)),E=_>0?c:Math.min(Math.max(-c,-p),c),v=-_*_+E*(E+2*p)+d);else E=f>0?-c:c,_=Math.max(0,-(f*E+h)),v=-_*_+E*(E+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(QA).addScaledVector(Fc,E),v}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,E=this.origin;return d>=0?(s=(t.min.x-E.x)*d,l=(t.max.x-E.x)*d):(s=(t.max.x-E.x)*d,l=(t.min.x-E.x)*d),g>=0?(c=(t.min.y-E.y)*g,f=(t.max.y-E.y)*g):(c=(t.max.y-E.y)*g,f=(t.min.y-E.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-E.z)*_,p=(t.max.z-E.z)*_):(h=(t.max.z-E.z)*_,p=(t.min.z-E.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){NA.subVectors(i,t),Oc.subVectors(s,t),PA.crossVectors(NA,Oc);let f=this.direction.dot(PA),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Za.subVectors(this.origin,t);const p=h*this.direction.dot(Oc.crossVectors(Za,Oc));if(p<0)return null;const d=h*this.direction.dot(NA.cross(Za));if(d<0||p+d>f)return null;const g=-h*Za.dot(PA);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,c,f,h,p,d,g,_,E,v,C,x,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,p,d,g,_,E,v,C,x,y)}set(t,i,s,l,c,f,h,p,d,g,_,E,v,C,x,y){const m=this.elements;return m[0]=t,m[4]=i,m[8]=s,m[12]=l,m[1]=c,m[5]=f,m[9]=h,m[13]=p,m[2]=d,m[6]=g,m[10]=_,m[14]=E,m[3]=v,m[7]=C,m[11]=x,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Nr.setFromMatrixColumn(t,0).length(),c=1/Nr.setFromMatrixColumn(t,1).length(),f=1/Nr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const E=f*g,v=f*_,C=h*g,x=h*_;i[0]=p*g,i[4]=-p*_,i[8]=d,i[1]=v+C*d,i[5]=E-x*d,i[9]=-h*p,i[2]=x-E*d,i[6]=C+v*d,i[10]=f*p}else if(t.order==="YXZ"){const E=p*g,v=p*_,C=d*g,x=d*_;i[0]=E+x*h,i[4]=C*h-v,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=v*h-C,i[6]=x+E*h,i[10]=f*p}else if(t.order==="ZXY"){const E=p*g,v=p*_,C=d*g,x=d*_;i[0]=E-x*h,i[4]=-f*_,i[8]=C+v*h,i[1]=v+C*h,i[5]=f*g,i[9]=x-E*h,i[2]=-f*d,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const E=f*g,v=f*_,C=h*g,x=h*_;i[0]=p*g,i[4]=C*d-v,i[8]=E*d+x,i[1]=p*_,i[5]=x*d+E,i[9]=v*d-C,i[2]=-d,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const E=f*p,v=f*d,C=h*p,x=h*d;i[0]=p*g,i[4]=x-E*_,i[8]=C*_+v,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-d*g,i[6]=v*_+C,i[10]=E-x*_}else if(t.order==="XZY"){const E=f*p,v=f*d,C=h*p,x=h*d;i[0]=p*g,i[4]=-_,i[8]=d*g,i[1]=E*_+x,i[5]=f*g,i[9]=v*_-C,i[2]=C*_-v,i[6]=h*g,i[10]=x*_+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OS,t,GS)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),$a.crossVectors(s,ci),$a.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),$a.crossVectors(s,ci)),$a.normalize(),Gc.crossVectors(ci,$a),l[0]=$a.x,l[4]=Gc.x,l[8]=ci.x,l[1]=$a.y,l[5]=Gc.y,l[9]=ci.y,l[2]=$a.z,l[6]=Gc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],p=s[8],d=s[12],g=s[1],_=s[5],E=s[9],v=s[13],C=s[2],x=s[6],y=s[10],m=s[14],L=s[3],w=s[7],T=s[11],P=s[15],O=l[0],F=l[4],H=l[8],R=l[12],b=l[1],U=l[5],j=l[9],st=l[13],rt=l[2],ct=l[6],N=l[10],k=l[14],Y=l[3],gt=l[7],D=l[11],Z=l[15];return c[0]=f*O+h*b+p*rt+d*Y,c[4]=f*F+h*U+p*ct+d*gt,c[8]=f*H+h*j+p*N+d*D,c[12]=f*R+h*st+p*k+d*Z,c[1]=g*O+_*b+E*rt+v*Y,c[5]=g*F+_*U+E*ct+v*gt,c[9]=g*H+_*j+E*N+v*D,c[13]=g*R+_*st+E*k+v*Z,c[2]=C*O+x*b+y*rt+m*Y,c[6]=C*F+x*U+y*ct+m*gt,c[10]=C*H+x*j+y*N+m*D,c[14]=C*R+x*st+y*k+m*Z,c[3]=L*O+w*b+T*rt+P*Y,c[7]=L*F+w*U+T*ct+P*gt,c[11]=L*H+w*j+T*N+P*D,c[15]=L*R+w*st+T*k+P*Z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],d=t[13],g=t[2],_=t[6],E=t[10],v=t[14],C=t[3],x=t[7],y=t[11],m=t[15];return C*(+c*p*_-l*d*_-c*h*E+s*d*E+l*h*v-s*p*v)+x*(+i*p*v-i*d*E+c*f*E-l*f*v+l*d*g-c*p*g)+y*(+i*d*_-i*h*v-c*f*_+s*f*v+c*h*g-s*d*g)+m*(-l*h*g-i*p*_+i*h*E+l*f*_-s*f*E+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=t[9],E=t[10],v=t[11],C=t[12],x=t[13],y=t[14],m=t[15],L=_*y*d-x*E*d+x*p*v-h*y*v-_*p*m+h*E*m,w=C*E*d-g*y*d-C*p*v+f*y*v+g*p*m-f*E*m,T=g*x*d-C*_*d+C*h*v-f*x*v-g*h*m+f*_*m,P=C*_*p-g*x*p-C*h*E+f*x*E+g*h*y-f*_*y,O=i*L+s*w+l*T+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=L*F,t[1]=(x*E*c-_*y*c-x*l*v+s*y*v+_*l*m-s*E*m)*F,t[2]=(h*y*c-x*p*c+x*l*d-s*y*d-h*l*m+s*p*m)*F,t[3]=(_*p*c-h*E*c-_*l*d+s*E*d+h*l*v-s*p*v)*F,t[4]=w*F,t[5]=(g*y*c-C*E*c+C*l*v-i*y*v-g*l*m+i*E*m)*F,t[6]=(C*p*c-f*y*c-C*l*d+i*y*d+f*l*m-i*p*m)*F,t[7]=(f*E*c-g*p*c+g*l*d-i*E*d-f*l*v+i*p*v)*F,t[8]=T*F,t[9]=(C*_*c-g*x*c-C*s*v+i*x*v+g*s*m-i*_*m)*F,t[10]=(f*x*c-C*h*c+C*s*d-i*x*d-f*s*m+i*h*m)*F,t[11]=(g*h*c-f*_*c-g*s*d+i*_*d+f*s*v-i*h*v)*F,t[12]=P*F,t[13]=(g*x*l-C*_*l+C*s*E-i*x*E-g*s*y+i*_*y)*F,t[14]=(C*h*l-f*x*l-C*s*p+i*x*p+f*s*y-i*h*y)*F,t[15]=(f*_*l-g*h*l+g*s*p-i*_*p-f*s*E+i*h*E)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,p=t.z,d=c*f,g=c*h;return this.set(d*f+s,d*h-l*p,d*p+l*h,0,d*h+l*p,g*h+s,g*p-l*f,0,d*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,d=c+c,g=f+f,_=h+h,E=c*d,v=c*g,C=c*_,x=f*g,y=f*_,m=h*_,L=p*d,w=p*g,T=p*_,P=s.x,O=s.y,F=s.z;return l[0]=(1-(x+m))*P,l[1]=(v+T)*P,l[2]=(C-w)*P,l[3]=0,l[4]=(v-T)*O,l[5]=(1-(E+m))*O,l[6]=(y+L)*O,l[7]=0,l[8]=(C+w)*F,l[9]=(y-L)*F,l[10]=(1-(E+x))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Nr.set(l[0],l[1],l[2]).length();const f=Nr.set(l[4],l[5],l[6]).length(),h=Nr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ti.copy(this);const d=1/c,g=1/f,_=1/h;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Ki,p=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(s-l),E=(i+t)/(i-t),v=(s+l)/(s-l);let C,x;if(p)C=c/(f-c),x=f*c/(f-c);else if(h===Ki)C=-(f+c)/(f-c),x=-2*f*c/(f-c);else if(h===hu)C=-f/(f-c),x=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=E,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=C,d[14]=x,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Ki,p=!1){const d=this.elements,g=2/(i-t),_=2/(s-l),E=-(i+t)/(i-t),v=-(s+l)/(s-l);let C,x;if(p)C=1/(f-c),x=f/(f-c);else if(h===Ki)C=-2/(f-c),x=-(f+c)/(f-c);else if(h===hu)C=-1/(f-c),x=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=E,d[1]=0,d[5]=_,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=C,d[14]=x,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Nr=new X,Ti=new je,OS=new X(0,0,0),GS=new X(1,1,1),$a=new X,Gc=new X,ci=new X,u_=new je,f_=new Xs;class ji{constructor(t=0,i=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],d=l[5],g=l[9],_=l[2],E=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(E,d),this._z=0);break;case"YXZ":this._x=Math.asin(-se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(se(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(E,v),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(E,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return u_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(u_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class wE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zS=0;const A_=new X,Pr=new Xs,ma=new je,zc=new X,al=new X,HS=new X,VS=new Xs,h_=new X(1,0,0),d_=new X(0,1,0),p_=new X(0,0,1),g_={type:"added"},kS={type:"removed"},Fr={type:"childadded",child:null},FA={type:"childremoved",child:null};class wn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new X,i=new ji,s=new Xs,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ce}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(h_,t)}rotateY(t){return this.rotateOnAxis(d_,t)}rotateZ(t){return this.rotateOnAxis(p_,t)}translateOnAxis(t,i){return A_.copy(t).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(h_,t)}translateY(t){return this.translateOnAxis(d_,t)}translateZ(t){return this.translateOnAxis(p_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?zc.copy(t):zc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(al,zc,this.up):ma.lookAt(zc,al,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Pr.setFromRotationMatrix(ma),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kS),FA.child=t,this.dispatchEvent(FA),FA.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,HS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,VS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),E=f(t.skeletons),v=f(t.animations),C=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),E.length>0&&(s.skeletons=E),v.length>0&&(s.animations=v),C.length>0&&(s.nodes=C)}return s.object=l,s;function f(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new X(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new X,_a=new X,OA=new X,Ea=new X,Or=new X,Gr=new X,m_=new X,GA=new X,zA=new X,HA=new X,VA=new Se,kA=new Se,qA=new Se;class Di{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ri.subVectors(l,i),_a.subVectors(s,i),OA.subVectors(t,i);const f=Ri.dot(Ri),h=Ri.dot(_a),p=Ri.dot(OA),d=_a.dot(_a),g=_a.dot(OA),_=f*d-h*h;if(_===0)return c.set(0,0,0),null;const E=1/_,v=(d*p-h*g)*E,C=(f*g-h*p)*E;return c.set(1-v-C,C,v)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,i,s,l,c,f,h,p){return this.getBarycoord(t,i,s,l,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ea.x),p.addScaledVector(f,Ea.y),p.addScaledVector(h,Ea.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return VA.setScalar(0),kA.setScalar(0),qA.setScalar(0),VA.fromBufferAttribute(t,i),kA.fromBufferAttribute(t,s),qA.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(VA,c.x),f.addScaledVector(kA,c.y),f.addScaledVector(qA,c.z),f}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),_a.subVectors(t,i),Ri.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ri.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Di.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Or.subVectors(l,s),Gr.subVectors(c,s),GA.subVectors(t,s);const p=Or.dot(GA),d=Gr.dot(GA);if(p<=0&&d<=0)return i.copy(s);zA.subVectors(t,l);const g=Or.dot(zA),_=Gr.dot(zA);if(g>=0&&_<=g)return i.copy(l);const E=p*_-g*d;if(E<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(Or,f);HA.subVectors(t,c);const v=Or.dot(HA),C=Gr.dot(HA);if(C>=0&&v<=C)return i.copy(c);const x=v*d-p*C;if(x<=0&&d>=0&&C<=0)return h=d/(d-C),i.copy(s).addScaledVector(Gr,h);const y=g*C-v*_;if(y<=0&&_-g>=0&&v-C>=0)return m_.subVectors(c,l),h=(_-g)/(_-g+(v-C)),i.copy(l).addScaledVector(m_,h);const m=1/(y+x+E);return f=x*m,h=E*m,i.copy(s).addScaledVector(Or,f).addScaledVector(Gr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const DE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function YA(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ie.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ie.workingColorSpace){if(t=ld(t,1),i=se(i,0,1),s=se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=YA(f,c,t+1/3),this.g=YA(f,c,t),this.b=YA(f,c,t-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(t,i=$n){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=$n){const s=DE[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return Ie.workingToColorSpace(Pn.copy(this),t),Math.round(se(Pn.r*255,0,255))*65536+Math.round(se(Pn.g*255,0,255))*256+Math.round(se(Pn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,d;const g=(h+f)/2;if(h===f)p=0,d=0;else{const _=f-h;switch(d=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=$n){Ie.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==$n?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(Hc);const s=ul(ts.h,Hc.h,i),l=ul(ts.s,Hc.s,i),c=ul(ts.l,Hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ce;Ce.NAMES=DE;let qS=0;class Sl extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=Os,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=Eh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==_h&&(s.blendSrc=this.blendSrc),this.blendDst!==Eh&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gu extends Sl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=gE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new X,Vc=new ae;let YS=0;class Li{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Kh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Vc.fromBufferAttribute(this,i),Vc.applyMatrix3(t),this.setXY(i,Vc.x,Vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=De(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array),c=De(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kh&&(t.usage=this.usage),t}}class UE extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class LE extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class hi extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}let XS=0;const yi=new je,XA=new wn,zr=new X,ui=new ls,sl=new ls,yn=new X;class $i extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(BE(t)?LE:UE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return XA.lookAt(t),XA.updateMatrix(),this.applyMatrix4(XA.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new hi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];sl.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ui.min,sl.min),ui.expandByPoint(yn),yn.addVectors(ui.max,sl.max),ui.expandByPoint(yn)):(ui.expandByPoint(sl.min),ui.expandByPoint(sl.max))}ui.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)yn.fromBufferAttribute(h,d),p&&(zr.fromBufferAttribute(t,d),yn.add(zr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let H=0;H<s.count;H++)h[H]=new X,p[H]=new X;const d=new X,g=new X,_=new X,E=new ae,v=new ae,C=new ae,x=new X,y=new X;function m(H,R,b){d.fromBufferAttribute(s,H),g.fromBufferAttribute(s,R),_.fromBufferAttribute(s,b),E.fromBufferAttribute(c,H),v.fromBufferAttribute(c,R),C.fromBufferAttribute(c,b),g.sub(d),_.sub(d),v.sub(E),C.sub(E);const U=1/(v.x*C.y-C.x*v.y);isFinite(U)&&(x.copy(g).multiplyScalar(C.y).addScaledVector(_,-v.y).multiplyScalar(U),y.copy(_).multiplyScalar(v.x).addScaledVector(g,-C.x).multiplyScalar(U),h[H].add(x),h[R].add(x),h[b].add(x),p[H].add(y),p[R].add(y),p[b].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let H=0,R=L.length;H<R;++H){const b=L[H],U=b.start,j=b.count;for(let st=U,rt=U+j;st<rt;st+=3)m(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const w=new X,T=new X,P=new X,O=new X;function F(H){P.fromBufferAttribute(l,H),O.copy(P);const R=h[H];w.copy(R),w.sub(P.multiplyScalar(P.dot(R))).normalize(),T.crossVectors(O,R);const U=T.dot(p[H])<0?-1:1;f.setXYZW(H,w.x,w.y,w.z,U)}for(let H=0,R=L.length;H<R;++H){const b=L[H],U=b.start,j=b.count;for(let st=U,rt=U+j;st<rt;st+=3)F(t.getX(st+0)),F(t.getX(st+1)),F(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let E=0,v=s.count;E<v;E++)s.setXYZ(E,0,0,0);const l=new X,c=new X,f=new X,h=new X,p=new X,d=new X,g=new X,_=new X;if(t)for(let E=0,v=t.count;E<v;E+=3){const C=t.getX(E+0),x=t.getX(E+1),y=t.getX(E+2);l.fromBufferAttribute(i,C),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),d.fromBufferAttribute(s,y),h.add(g),p.add(g),d.add(g),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let E=0,v=i.count;E<v;E+=3)l.fromBufferAttribute(i,E+0),c.fromBufferAttribute(i,E+1),f.fromBufferAttribute(i,E+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(E+0,g.x,g.y,g.z),s.setXYZ(E+1,g.x,g.y,g.z),s.setXYZ(E+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,_=h.normalized,E=new d.constructor(p.length*g);let v=0,C=0;for(let x=0,y=p.length;x<y;x++){h.isInterleavedBufferAttribute?v=p[x]*h.data.stride+h.offset:v=p[x]*g;for(let m=0;m<g;m++)E[C++]=d[v++]}return new Li(E,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],d=t(p,s);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const E=d[g],v=t(E,s);p.push(v)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const d=f[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const d=s[p];t.data.attributes[p]=d.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,E=d.length;_<E;_++){const v=d[_];g.push(v.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let E=0,v=_.length;E<v;E++)g.push(_[E].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new je,Ts=new RE,kc=new yl,E_=new X,qc=new X,Yc=new X,Xc=new X,WA=new X,Wc=new X,v_=new X,Kc=new X;class qn extends wn{constructor(t=new $i,i=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Wc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(WA.fromBufferAttribute(_,t),f?Wc.addScaledVector(WA,g):Wc.addScaledVector(WA.sub(i),g))}i.add(Wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(kc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(kc,E_)===null||Ts.origin.distanceToSquared(E_)>(t.far-t.near)**2))&&(__.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(__),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,E=c.groups,v=c.drawRange;if(h!==null)if(Array.isArray(f))for(let C=0,x=E.length;C<x;C++){const y=E[C],m=f[y.materialIndex],L=Math.max(y.start,v.start),w=Math.min(h.count,Math.min(y.start+y.count,v.start+v.count));for(let T=L,P=w;T<P;T+=3){const O=h.getX(T),F=h.getX(T+1),H=h.getX(T+2);l=Jc(this,m,t,s,d,g,_,O,F,H),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,v.start),x=Math.min(h.count,v.start+v.count);for(let y=C,m=x;y<m;y+=3){const L=h.getX(y),w=h.getX(y+1),T=h.getX(y+2);l=Jc(this,f,t,s,d,g,_,L,w,T),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let C=0,x=E.length;C<x;C++){const y=E[C],m=f[y.materialIndex],L=Math.max(y.start,v.start),w=Math.min(p.count,Math.min(y.start+y.count,v.start+v.count));for(let T=L,P=w;T<P;T+=3){const O=T,F=T+1,H=T+2;l=Jc(this,m,t,s,d,g,_,O,F,H),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,v.start),x=Math.min(p.count,v.start+v.count);for(let y=C,m=x;y<m;y+=3){const L=y,w=y+1,T=y+2;l=Jc(this,f,t,s,d,g,_,L,w,T),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function WS(r,t,i,s,l,c,f,h){let p;if(t.side===Yn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,t.side===os,h),p===null)return null;Kc.copy(h),Kc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Kc);return d<i.near||d>i.far?null:{distance:d,point:Kc.clone(),object:r}}function Jc(r,t,i,s,l,c,f,h,p,d){r.getVertexPosition(h,qc),r.getVertexPosition(p,Yc),r.getVertexPosition(d,Xc);const g=WS(r,t,i,s,qc,Yc,Xc,v_);if(g){const _=new X;Di.getBarycoord(v_,qc,Yc,Xc,_),l&&(g.uv=Di.getInterpolatedAttribute(l,h,p,d,_,new ae)),c&&(g.uv1=Di.getInterpolatedAttribute(c,h,p,d,_,new ae)),f&&(g.normal=Di.getInterpolatedAttribute(f,h,p,d,_,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const E={a:h,b:p,c:d,normal:new X,materialIndex:0};Di.getNormal(qc,Yc,Xc,E.normal),g.face=E,g.barycoord=_}return g}class Cl extends $i{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],d=[],g=[],_=[];let E=0,v=0;C("z","y","x",-1,-1,s,i,t,f,c,0),C("z","y","x",1,-1,s,i,-t,f,c,1),C("x","z","y",1,1,t,s,i,l,f,2),C("x","z","y",1,-1,t,s,-i,l,f,3),C("x","y","z",1,-1,t,i,s,l,c,4),C("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new hi(d,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(_,2));function C(x,y,m,L,w,T,P,O,F,H,R){const b=T/F,U=P/H,j=T/2,st=P/2,rt=O/2,ct=F+1,N=H+1;let k=0,Y=0;const gt=new X;for(let D=0;D<N;D++){const Z=D*U-st;for(let pt=0;pt<ct;pt++){const vt=pt*b-j;gt[x]=vt*L,gt[y]=Z*w,gt[m]=rt,d.push(gt.x,gt.y,gt.z),gt[x]=0,gt[y]=0,gt[m]=O>0?1:-1,g.push(gt.x,gt.y,gt.z),_.push(pt/F),_.push(1-D/H),k+=1}}for(let D=0;D<H;D++)for(let Z=0;Z<F;Z++){const pt=E+Z+ct*D,vt=E+Z+ct*(D+1),bt=E+(Z+1)+ct*(D+1),it=E+(Z+1)+ct*D;p.push(pt,vt,it),p.push(vt,bt,it),Y+=6}h.addGroup(v,Y,R),v+=Y,E+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function io(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=io(r[i]);for(const l in s)t[l]=s[l]}return t}function KS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function QE(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const ud={clone:io,merge:kn};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Sl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=KS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class NE extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new X,y_=new ae,S_=new ae;class fi extends NE{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=El*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return El*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,y_,S_),i.subVectors(S_,y_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(cl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/d,l*=f.width/p,s*=f.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Hr=-90,Vr=1;class ZS extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Hr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new fi(Hr,Vr,t,i);c.layers=this.layers,this.add(c);const f=new fi(Hr,Vr,t,i);f.layers=this.layers,this.add(f);const h=new fi(Hr,Vr,t,i);h.layers=this.layers,this.add(h);const p=new fi(Hr,Vr,t,i);p.layers=this.layers,this.add(p);const d=new fi(Hr,Vr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,p]=i;for(const d of i)this.remove(d);if(t===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===hu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,d,g]=this.children,_=t.getRenderTarget(),E=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const x=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,d),s.texture.generateMipmaps=x,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,E,v),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class PE extends Rn{constructor(t=[],i=qs,s,l,c,f,h,p,d,g){super(t,i,s,l,c,f,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $S extends Ws{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new PE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Cl(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ss});c.uniforms.tEquirect.value=i;const f=new qn(l,c),h=i.minFilter;return i.minFilter===Ca&&(i.minFilter=Fn),new ZS(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Fs extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class KA{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const x of t.hand.values()){const y=i.getJointPose(x,s),m=this._getHandJoint(d,x);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],E=g.position.distanceTo(_.position),v=.02,C=.005;d.inputState.pinching&&E>v+C?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&E<=v-C&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class FE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class eC{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=xa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new X;class as{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=De(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),s=De(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array),c=De(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Li(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new as(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nC extends Rn{constructor(t=null,i=1,s=1,l,c,f,h,p,d=Ai,g=Ai,_,E){super(null,f,h,p,d,g,l,c,_,E),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const JA=new X,iC=new X,aC=new ce;class ns{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=JA.subVectors(s,i).cross(iC.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(JA),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||aC.getNormalMatrix(t),l=this.coplanarPoint(JA).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new yl,sC=new ae(.5,.5),jc=new X;class fd{constructor(t=new ns,i=new ns,s=new ns,l=new ns,c=new ns,f=new ns){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ki,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],E=c[6],v=c[7],C=c[8],x=c[9],y=c[10],m=c[11],L=c[12],w=c[13],T=c[14],P=c[15];if(l[0].setComponents(d-f,v-g,m-C,P-L).normalize(),l[1].setComponents(d+f,v+g,m+C,P+L).normalize(),l[2].setComponents(d+h,v+_,m+x,P+w).normalize(),l[3].setComponents(d-h,v-_,m-x,P-w).normalize(),s)l[4].setComponents(p,E,y,T).normalize(),l[5].setComponents(d-p,v-E,m-y,P-T).normalize();else if(l[4].setComponents(d-p,v-E,m-y,P-T).normalize(),i===Ki)l[5].setComponents(d+p,v+E,m+y,P+T).normalize();else if(i===hu)l[5].setComponents(p,E,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=sC.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?t.max.x:t.min.x,jc.y=l.normal.y>0?t.max.y:t.min.y,jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mu extends Rn{constructor(t,i,s,l,c,f,h,p,d,g,_,E){super(null,f,h,p,d,g,l,c,_,E),this.isCompressedTexture=!0,this.image={width:i,height:s},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class rC extends mu{constructor(t,i,s,l,c,f){super(t,i,s,c,f),this.isCompressedArrayTexture=!0,this.image.depth=l,this.wrapR=Wi,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oC extends mu{constructor(t,i,s){super(void 0,t[0].width,t[0].height,i,s,qs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class OE extends Rn{constructor(t,i,s=Ys,l,c,f,h=Ai,p=Ai,d,g=dl,_=1){if(g!==dl&&g!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:t,height:i,depth:_};super(E,l,c,f,h,p,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _u extends $i{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),p=Math.floor(l),d=h+1,g=p+1,_=t/h,E=i/p,v=[],C=[],x=[],y=[];for(let m=0;m<g;m++){const L=m*E-f;for(let w=0;w<d;w++){const T=w*_-c;C.push(T,-L,0),x.push(0,0,1),y.push(w/h),y.push(1-m/p)}}for(let m=0;m<p;m++)for(let L=0;L<h;L++){const w=L+d*m,T=L+d*(m+1),P=L+1+d*(m+1),O=L+1+d*m;v.push(w,T,O),v.push(T,P,O)}this.setIndex(v),this.setAttribute("position",new hi(C,3)),this.setAttribute("normal",new hi(x,3)),this.setAttribute("uv",new hi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.width,t.height,t.widthSegments,t.heightSegments)}}class ao extends $i{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let d=0;const g=[],_=new X,E=new X,v=[],C=[],x=[],y=[];for(let m=0;m<=s;m++){const L=[],w=m/s;let T=0;m===0&&f===0?T=.5/i:m===s&&p===Math.PI&&(T=-.5/i);for(let P=0;P<=i;P++){const O=P/i;_.x=-t*Math.cos(l+O*c)*Math.sin(f+w*h),_.y=t*Math.cos(f+w*h),_.z=t*Math.sin(l+O*c)*Math.sin(f+w*h),C.push(_.x,_.y,_.z),E.copy(_).normalize(),x.push(E.x,E.y,E.z),y.push(O+T,1-w),L.push(d++)}g.push(L)}for(let m=0;m<s;m++)for(let L=0;L<i;L++){const w=g[m][L+1],T=g[m][L],P=g[m+1][L],O=g[m+1][L+1];(m!==0||f>0)&&v.push(w,T,O),(m!==s-1||p<Math.PI)&&v.push(T,P,O)}this.setIndex(v),this.setAttribute("position",new hi(C,3)),this.setAttribute("normal",new hi(x,3)),this.setAttribute("uv",new hi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lC extends $i{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new X,c=new X;if(t.index!==null){const f=t.attributes.position,h=t.index;let p=t.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let d=0,g=p.length;d<g;++d){const _=p[d],E=_.start,v=_.count;for(let C=E,x=E+v;C<x;C+=3)for(let y=0;y<3;y++){const m=h.getX(C+y),L=h.getX(C+(y+1)%3);l.fromBufferAttribute(f,m),c.fromBufferAttribute(f,L),C_(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=t.attributes.position;for(let h=0,p=f.count/3;h<p;h++)for(let d=0;d<3;d++){const g=3*h+d,_=3*h+(d+1)%3;l.fromBufferAttribute(f,g),c.fromBufferAttribute(f,_),C_(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new hi(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function C_(r,t,i){const s=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class GE extends Sl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xE,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cC extends Sl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uC extends Sl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class fC{constructor(t,i,s){const l=this;let c=!1,f=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,E=d.length;_<E;_+=2){const v=d[_],C=d[_+1];if(v.global&&(v.lastIndex=0),v.test(g))return C}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const AC=new fC;class xl{constructor(t){this.manager=t!==void 0?t:AC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xl.DEFAULT_MATERIAL_NAME="__DEFAULT";const va={};class hC extends Error{constructor(t,i){super(t),this.response=i}}class jA extends xl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=fl.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(va[t]!==void 0){va[t].push({onLoad:i,onProgress:s,onError:l});return}va[t]=[],va[t].push({onLoad:i,onProgress:s,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=va[t],_=d.body.getReader(),E=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),v=E?parseInt(E):0,C=v!==0;let x=0;const y=new ReadableStream({start(m){L();function L(){_.read().then(({done:w,value:T})=>{if(w)m.close();else{x+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:C,loaded:x,total:v});for(let O=0,F=g.length;O<F;O++){const H=g[O];H.onProgress&&H.onProgress(P)}m.enqueue(T),L()}},w=>{m.error(w)})}}});return new Response(y)}else throw new hC(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),E=_&&_[1]?_[1].toLowerCase():void 0,v=new TextDecoder(E);return d.arrayBuffer().then(C=>v.decode(C))}}}).then(d=>{fl.add(`file:${t}`,d);const g=va[t];delete va[t];for(let _=0,E=g.length;_<E;_++){const v=g[_];v.onLoad&&v.onLoad(d)}}).catch(d=>{const g=va[t];if(g===void 0)throw this.manager.itemError(t),d;delete va[t];for(let _=0,E=g.length;_<E;_++){const v=g[_];v.onError&&v.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const kr=new WeakMap;class dC extends xl{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=fl.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let _=kr.get(f);_===void 0&&(_=[],kr.set(f,_)),_.push({onLoad:i,onError:l})}return f}const h=vl("img");function p(){g(),i&&i(this);const _=kr.get(this)||[];for(let E=0;E<_.length;E++){const v=_[E];v.onLoad&&v.onLoad(this)}kr.delete(this),c.manager.itemEnd(t)}function d(_){g(),l&&l(_),fl.remove(`image:${t}`);const E=kr.get(this)||[];for(let v=0;v<E.length;v++){const C=E[v];C.onError&&C.onError(_)}kr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),fl.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class zE extends xl{constructor(t){super(t)}load(t,i,s,l){const c=new Rn,f=new dC(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Ad extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ZA=new je,x_=new X,M_=new X;class HE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fd,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;x_.setFromMatrixPosition(t.matrixWorld),i.position.copy(x_),M_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(M_),i.updateMatrixWorld(),ZA.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ZA,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ZA)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const I_=new je,rl=new X,$A=new X;class pC extends HE{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),rl.setFromMatrixPosition(t.matrixWorld),s.position.copy(rl),$A.copy(s.position),$A.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt($A),s.updateMatrixWorld(),l.makeTranslation(-rl.x,-rl.y,-rl.z),I_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(I_,s.coordinateSystem,s.reversedDepth)}}class gC extends Ad{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new pC}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class VE extends NE{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mC extends HE{constructor(){super(new VE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _C extends Ad{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new mC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class EC extends Ad{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class vC extends $i{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class yC extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jh extends eC{constructor(t,i,s=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}class B_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const b_=new X,Zc=new X,qr=new X,Yr=new X,th=new X,SC=new X,CC=new X;class xC{constructor(t=new X,i=new X){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){b_.subVectors(t,this.start),Zc.subVectors(this.end,this.start);const s=Zc.dot(Zc);let c=Zc.dot(b_)/s;return i&&(c=se(c,0,1)),c}closestPointToPoint(t,i,s){const l=this.closestPointToPointParameter(t,i);return this.delta(s).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,i=SC,s=CC){const l=10000000000000001e-32;let c,f;const h=this.start,p=t.start,d=this.end,g=t.end;qr.subVectors(d,h),Yr.subVectors(g,p),th.subVectors(h,p);const _=qr.dot(qr),E=Yr.dot(Yr),v=Yr.dot(th);if(_<=l&&E<=l)return i.copy(h),s.copy(p),i.sub(s),i.dot(i);if(_<=l)c=0,f=v/E,f=se(f,0,1);else{const C=qr.dot(th);if(E<=l)f=0,c=se(-C/_,0,1);else{const x=qr.dot(Yr),y=_*E-x*x;y!==0?c=se((x*v-C*E)/y,0,1):c=0,f=(x*c+v)/E,f<0?(f=0,c=se(-C/_,0,1)):f>1&&(f=1,c=se((x-C)/_,0,1))}}return i.copy(h).add(qr.multiplyScalar(c)),s.copy(p).add(Yr.multiplyScalar(f)),i.sub(s),i.dot(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class MC extends Ks{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function T_(r,t,i,s){const l=IC(s);switch(i){case yE:return r*t;case Ns:return r*t/l.components*l.byteLength;case sd:return r*t/l.components*l.byteLength;case Ps:return r*t*2/l.components*l.byteLength;case rd:return r*t*2/l.components*l.byteLength;case SE:return r*t*3/l.components*l.byteLength;case Tn:return r*t*4/l.components*l.byteLength;case od:return r*t*4/l.components*l.byteLength;case jr:case Gs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zr:case zs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wh:case Dh:return Math.max(r,16)*Math.max(t,8)/4;case lu:case cu:return Math.max(r,8)*Math.max(t,8)/2;case uu:case gl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vs:case qh:case fu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case CE:case Yh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xh:case Wh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IC(r){switch(r){case sn:case _E:return{byteLength:1,components:1};case Al:case EE:case Ui:return{byteLength:2,components:1};case id:case ad:return{byteLength:2,components:4};case Ys:case nd:case ei:return{byteLength:4,components:1};case vE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kE(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function BC(r){const t=new WeakMap;function i(h,p){const d=h.array,g=h.usage,_=d.byteLength,E=r.createBuffer();r.bindBuffer(p,E),r.bufferData(p,d,g),h.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:E,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((v,C)=>v.start-C.start);let E=0;for(let v=1;v<_.length;v++){const C=_[E],x=_[v];x.start<=C.start+C.count+1?C.count=Math.max(C.count,x.start+x.count-C.start):(++E,_[E]=x)}_.length=E+1;for(let v=0,C=_.length;v<C;v++){const x=_[v];r.bufferSubData(d,x.start*g.BYTES_PER_ELEMENT,g,x.start,x.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,i(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,p),d.version=h.version}}return{get:l,remove:c,update:f}}var bC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$C=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ix=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Px=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:bC,alphahash_pars_fragment:TC,alphamap_fragment:RC,alphamap_pars_fragment:wC,alphatest_fragment:DC,alphatest_pars_fragment:UC,aomap_fragment:LC,aomap_pars_fragment:QC,batching_pars_vertex:NC,batching_vertex:PC,begin_vertex:FC,beginnormal_vertex:OC,bsdfs:GC,iridescence_fragment:zC,bumpmap_pars_fragment:HC,clipping_planes_fragment:VC,clipping_planes_pars_fragment:kC,clipping_planes_pars_vertex:qC,clipping_planes_vertex:YC,color_fragment:XC,color_pars_fragment:WC,color_pars_vertex:KC,color_vertex:JC,common:jC,cube_uv_reflection_fragment:ZC,defaultnormal_vertex:$C,displacementmap_pars_vertex:tx,displacementmap_vertex:ex,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:ax,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ox,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:vx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:Ax,fog_fragment:hx,fog_pars_fragment:dx,gradientmap_pars_fragment:px,lightmap_pars_fragment:gx,lights_lambert_fragment:mx,lights_lambert_pars_fragment:_x,lights_pars_begin:Ex,lights_toon_fragment:yx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Cx,lights_phong_pars_fragment:xx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Bx,lights_fragment_maps:bx,lights_fragment_end:Tx,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Ux,map_fragment:Lx,map_pars_fragment:Qx,map_particle_fragment:Nx,map_particle_pars_fragment:Px,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Gx,morphcolor_vertex:zx,morphnormal_vertex:Hx,morphtarget_pars_vertex:Vx,morphtarget_vertex:kx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Xx,normal_pars_vertex:Wx,normal_vertex:Kx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:tM,opaque_fragment:eM,packing:nM,premultiplied_alpha_fragment:iM,project_vertex:aM,dithering_fragment:sM,dithering_pars_fragment:rM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:lM,shadowmap_pars_fragment:cM,shadowmap_pars_vertex:uM,shadowmap_vertex:fM,shadowmask_pars_fragment:AM,skinbase_vertex:hM,skinning_pars_vertex:dM,skinning_vertex:pM,skinnormal_vertex:gM,specularmap_fragment:mM,specularmap_pars_fragment:_M,tonemapping_fragment:EM,tonemapping_pars_fragment:vM,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:CM,uv_pars_vertex:xM,uv_vertex:MM,worldpos_vertex:IM,background_vert:BM,background_frag:bM,backgroundCube_vert:TM,backgroundCube_frag:RM,cube_vert:wM,cube_frag:DM,depth_vert:UM,depth_frag:LM,distanceRGBA_vert:QM,distanceRGBA_frag:NM,equirect_vert:PM,equirect_frag:FM,linedashed_vert:OM,linedashed_frag:GM,meshbasic_vert:zM,meshbasic_frag:HM,meshlambert_vert:VM,meshlambert_frag:kM,meshmatcap_vert:qM,meshmatcap_frag:YM,meshnormal_vert:XM,meshnormal_frag:WM,meshphong_vert:KM,meshphong_frag:JM,meshphysical_vert:jM,meshphysical_frag:ZM,meshtoon_vert:$M,meshtoon_frag:tI,points_vert:eI,points_frag:nI,shadow_vert:iI,shadow_frag:aI,sprite_vert:sI,sprite_frag:rI},Rt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ti={basic:{uniforms:kn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:kn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:kn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:kn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:kn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:kn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:kn([Rt.points,Rt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:kn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:kn([Rt.common,Rt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:kn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:kn([Rt.sprite,Rt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:kn([Rt.common,Rt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:kn([Rt.lights,Rt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};ti.physical={uniforms:kn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const $c={r:0,b:0,g:0},ws=new ji,oI=new je;function lI(r,t,i,s,l,c,f){const h=new Ce(0);let p=c===!0?0:1,d,g,_=null,E=0,v=null;function C(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?i:t).get(T)),T}function x(w){let T=!1;const P=C(w);P===null?m(h,p):P&&P.isColor&&(m(P,1),T=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||T)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,T){const P=C(T);P&&(P.isCubeTexture||P.mapping===pu)?(g===void 0&&(g=new qn(new Cl(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:io(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ws.copy(T.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(oI.makeRotationFromEuler(ws)),g.material.toneMapped=Ie.getTransfer(P.colorSpace)!==Pe,(_!==P||E!==P.version||v!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,E=P.version,v=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new qn(new _u(2,2),new Zi({name:"BackgroundMaterial",uniforms:io(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=Ie.getTransfer(P.colorSpace)!==Pe,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||E!==P.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,_=P,E=P.version,v=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function m(w,T){w.getRGB($c,QE(r)),s.buffers.color.setClear($c.r,$c.g,$c.b,T,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,T=1){h.set(w),p=T,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,m(h,p)},render:x,addToRenderList:y,dispose:L}}function cI(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=E(null);let c=l,f=!1;function h(b,U,j,st,rt){let ct=!1;const N=_(st,j,U);c!==N&&(c=N,d(c.object)),ct=v(b,st,j,rt),ct&&C(b,st,j,rt),rt!==null&&t.update(rt,r.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,T(b,U,j,st),rt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function p(){return r.createVertexArray()}function d(b){return r.bindVertexArray(b)}function g(b){return r.deleteVertexArray(b)}function _(b,U,j){const st=j.wireframe===!0;let rt=s[b.id];rt===void 0&&(rt={},s[b.id]=rt);let ct=rt[U.id];ct===void 0&&(ct={},rt[U.id]=ct);let N=ct[st];return N===void 0&&(N=E(p()),ct[st]=N),N}function E(b){const U=[],j=[],st=[];for(let rt=0;rt<i;rt++)U[rt]=0,j[rt]=0,st[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:j,attributeDivisors:st,object:b,attributes:{},index:null}}function v(b,U,j,st){const rt=c.attributes,ct=U.attributes;let N=0;const k=j.getAttributes();for(const Y in k)if(k[Y].location>=0){const D=rt[Y];let Z=ct[Y];if(Z===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),D===void 0||D.attribute!==Z||Z&&D.data!==Z.data)return!0;N++}return c.attributesNum!==N||c.index!==st}function C(b,U,j,st){const rt={},ct=U.attributes;let N=0;const k=j.getAttributes();for(const Y in k)if(k[Y].location>=0){let D=ct[Y];D===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(D=b.instanceColor));const Z={};Z.attribute=D,D&&D.data&&(Z.data=D.data),rt[Y]=Z,N++}c.attributes=rt,c.attributesNum=N,c.index=st}function x(){const b=c.newAttributes;for(let U=0,j=b.length;U<j;U++)b[U]=0}function y(b){m(b,0)}function m(b,U){const j=c.newAttributes,st=c.enabledAttributes,rt=c.attributeDivisors;j[b]=1,st[b]===0&&(r.enableVertexAttribArray(b),st[b]=1),rt[b]!==U&&(r.vertexAttribDivisor(b,U),rt[b]=U)}function L(){const b=c.newAttributes,U=c.enabledAttributes;for(let j=0,st=U.length;j<st;j++)U[j]!==b[j]&&(r.disableVertexAttribArray(j),U[j]=0)}function w(b,U,j,st,rt,ct,N){N===!0?r.vertexAttribIPointer(b,U,j,rt,ct):r.vertexAttribPointer(b,U,j,st,rt,ct)}function T(b,U,j,st){x();const rt=st.attributes,ct=j.getAttributes(),N=U.defaultAttributeValues;for(const k in ct){const Y=ct[k];if(Y.location>=0){let gt=rt[k];if(gt===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),gt!==void 0){const D=gt.normalized,Z=gt.itemSize,pt=t.get(gt);if(pt===void 0)continue;const vt=pt.buffer,bt=pt.type,it=pt.bytesPerElement,ht=bt===r.INT||bt===r.UNSIGNED_INT||gt.gpuType===nd;if(gt.isInterleavedBufferAttribute){const yt=gt.data,Lt=yt.stride,Yt=gt.offset;if(yt.isInstancedInterleavedBuffer){for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne,yt.meshPerAttribute);b.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ne=0;ne<Y.locationSize;ne++)y(Y.location+ne);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let ne=0;ne<Y.locationSize;ne++)w(Y.location+ne,Z/Y.locationSize,bt,D,Lt*it,(Yt+Z/Y.locationSize*ne)*it,ht)}else{if(gt.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)m(Y.location+yt,gt.meshPerAttribute);b.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let yt=0;yt<Y.locationSize;yt++)y(Y.location+yt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let yt=0;yt<Y.locationSize;yt++)w(Y.location+yt,Z/Y.locationSize,bt,D,Z*it,Z/Y.locationSize*yt*it,ht)}}else if(N!==void 0){const D=N[k];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(Y.location,D);break;case 3:r.vertexAttrib3fv(Y.location,D);break;case 4:r.vertexAttrib4fv(Y.location,D);break;default:r.vertexAttrib1fv(Y.location,D)}}}}L()}function P(){H();for(const b in s){const U=s[b];for(const j in U){const st=U[j];for(const rt in st)g(st[rt].object),delete st[rt];delete U[j]}delete s[b]}}function O(b){if(s[b.id]===void 0)return;const U=s[b.id];for(const j in U){const st=U[j];for(const rt in st)g(st[rt].object),delete st[rt];delete U[j]}delete s[b.id]}function F(b){for(const U in s){const j=s[U];if(j[b.id]===void 0)continue;const st=j[b.id];for(const rt in st)g(st[rt].object),delete st[rt];delete j[b.id]}}function H(){R(),f=!0,c!==l&&(c=l,d(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:y,disableUnusedAttributes:L}}function uI(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(s,d,g,_),i.update(g,s,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let v=0;for(let C=0;C<_;C++)v+=g[C];i.update(v,s,1)}function p(d,g,_,E){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let C=0;C<d.length;C++)f(d[C],g[C],E[C]);else{v.multiDrawArraysInstancedWEBGL(s,d,0,g,0,E,0,_);let C=0;for(let x=0;x<_;x++)C+=g[x]*E[x];i.update(C,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function fI(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Tn&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const H=F===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==sn&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ei&&!H)}function p(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=C>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:E,maxTextures:v,maxVertexTextures:C,maxTextureSize:x,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:P,maxSamples:O}}function AI(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ns,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,E){const v=_.length!==0||E||s!==0||l;return l=E,s=_.length,v},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,E){i=g(_,E,0)},this.setState=function(_,E,v){const C=_.clippingPlanes,x=_.clipIntersection,y=_.clipShadows,m=r.get(_);if(!l||C===null||C.length===0||c&&!y)c?g(null):d();else{const L=c?0:s,w=L*4;let T=m.clippingState||null;p.value=T,T=g(C,E,w,v);for(let P=0;P!==w;++P)T[P]=i[P];m.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,E,v,C){const x=_!==null?_.length:0;let y=null;if(x!==0){if(y=p.value,C!==!0||y===null){const m=v+x*4,L=E.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<m)&&(y=new Float32Array(m));for(let w=0,T=v;w!==x;++w,T+=4)f.copy(_[w]).applyMatrix4(L,h),f.normal.toArray(y,T),y[T+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}function hI(r){let t=new WeakMap;function i(f,h){return h===Bh?f.mapping=qs:h===bh&&(f.mapping=no),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Bh||h===bh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const d=new $S(p.height);return d.fromEquirectangularTexture(r,f),t.set(f,d),f.addEventListener("dispose",l),i(d.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Kr=4,R_=[.125,.215,.35,.446,.526,.582],Qs=20,eh=new VE,w_=new Ce;let nh=null,ih=0,ah=0,sh=!1;const Us=(1+Math.sqrt(5))/2,Xr=1/Us,D_=[new X(-Us,Xr,0),new X(Us,Xr,0),new X(-Xr,0,Us),new X(Xr,0,Us),new X(0,Us,-Xr),new X(0,Us,Xr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],dI=new X;class U_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=dI}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=sh,t.scissorTest=!1,tu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ui,format:Tn,colorSpace:Ji,depthBuffer:!1},l=L_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pI(c)),this._blurMaterial=gI(c,t,i)}return l}_compileMaterial(t){const i=new qn(this._lodPlanes[0],t);this._renderer.compile(i,eh)}_sceneToCubeUV(t,i,s,l,c){const p=new fi(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,E=_.autoClear,v=_.toneMapping;_.getClearColor(w_),_.toneMapping=rs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const x=new gu({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),y=new qn(new Cl,x);let m=!1;const L=t.background;L?L.isColor&&(x.color.copy(L),t.background=null,m=!0):(x.color.copy(w_),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[w],c.y,c.z)):T===1?(p.up.set(0,0,d[w]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[w],c.z)):(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[w]));const P=this._cubeSize;tu(l,T*P,w>2?P:0,P,P),_.setRenderTarget(l),m&&_.render(y,p),_.render(t,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=v,_.autoClear=E,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new qn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;tu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,eh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=D_[(l-c-1)%D_.length];this._blur(t,c-1,c,f,h)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const p=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new qn(this._lodPlanes[l],d),E=d.uniforms,v=this._sizeLods[s]-1,C=isFinite(c)?Math.PI/(2*v):2*Math.PI/(2*Qs-1),x=c/C,y=isFinite(c)?1+Math.floor(g*x):Qs;y>Qs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qs}`);const m=[];let L=0;for(let F=0;F<Qs;++F){const H=F/x,R=Math.exp(-H*H/2);m.push(R),F===0?L+=R:F<y&&(L+=2*R)}for(let F=0;F<m.length;F++)m[F]=m[F]/L;E.envMap.value=t.texture,E.samples.value=y,E.weights.value=m,E.latitudinal.value=f==="latitudinal",h&&(E.poleAxis.value=h);const{_lodMax:w}=this;E.dTheta.value=C,E.mipInt.value=w-s;const T=this._sizeLods[l],P=3*T*(l>w-Kr?l-w+Kr:0),O=4*(this._cubeSize-T);tu(i,P,O,3*T,2*T),p.setRenderTarget(i),p.render(_,eh)}}function pI(r){const t=[],i=[],s=[];let l=r;const c=r-Kr+1+R_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>r-Kr?p=R_[f-r+Kr-1]:f===0&&(p=0),s.push(p);const d=1/(h-2),g=-d,_=1+d,E=[g,g,_,g,_,_,g,g,_,_,g,_],v=6,C=6,x=3,y=2,m=1,L=new Float32Array(x*C*v),w=new Float32Array(y*C*v),T=new Float32Array(m*C*v);for(let O=0;O<v;O++){const F=O%3*2/3-1,H=O>2?0:-1,R=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];L.set(R,x*C*O),w.set(E,y*C*O);const b=[O,O,O,O,O,O];T.set(b,m*C*O)}const P=new $i;P.setAttribute("position",new Li(L,x)),P.setAttribute("uv",new Li(w,y)),P.setAttribute("faceIndex",new Li(T,m)),t.push(P),l>Kr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function L_(r,t,i){const s=new Ws(r,t,i);return s.texture.mapping=pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function tu(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function gI(r,t,i){const s=new Float32Array(Qs),l=new X(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Q_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function N_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mI(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,d=p===Bh||p===bh,g=p===qs||p===no;if(d||g){let _=t.get(h);const E=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==E)return i===null&&(i=new U_(r)),_=d?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const v=h.image;return d&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new U_(r)),_=d?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function _I(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function EI(r,t,i,s){const l={},c=new WeakMap;function f(_){const E=_.target;E.index!==null&&t.remove(E.index);for(const C in E.attributes)t.remove(E.attributes[C]);E.removeEventListener("dispose",f),delete l[E.id];const v=c.get(E);v&&(t.remove(v),c.delete(E)),s.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function h(_,E){return l[E.id]===!0||(E.addEventListener("dispose",f),l[E.id]=!0,i.memory.geometries++),E}function p(_){const E=_.attributes;for(const v in E)t.update(E[v],r.ARRAY_BUFFER)}function d(_){const E=[],v=_.index,C=_.attributes.position;let x=0;if(v!==null){const L=v.array;x=v.version;for(let w=0,T=L.length;w<T;w+=3){const P=L[w+0],O=L[w+1],F=L[w+2];E.push(P,O,O,F,F,P)}}else if(C!==void 0){const L=C.array;x=C.version;for(let w=0,T=L.length/3-1;w<T;w+=3){const P=w+0,O=w+1,F=w+2;E.push(P,O,O,F,F,P)}}else return;const y=new(BE(E)?LE:UE)(E,1);y.version=x;const m=c.get(_);m&&t.remove(m),c.set(_,y)}function g(_){const E=c.get(_);if(E){const v=_.index;v!==null&&E.version<v.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function vI(r,t,i){let s;function l(E){s=E}let c,f;function h(E){c=E.type,f=E.bytesPerElement}function p(E,v){r.drawElements(s,v,c,E*f),i.update(v,s,1)}function d(E,v,C){C!==0&&(r.drawElementsInstanced(s,v,c,E*f,C),i.update(v,s,C))}function g(E,v,C){if(C===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,E,0,C);let y=0;for(let m=0;m<C;m++)y+=v[m];i.update(y,s,1)}function _(E,v,C,x){if(C===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<E.length;m++)d(E[m]/f,v[m],x[m]);else{y.multiDrawElementsInstancedWEBGL(s,v,0,c,E,0,x,0,C);let m=0;for(let L=0;L<C;L++)m+=v[L]*x[L];i.update(m,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function yI(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function SI(r,t,i){const s=new WeakMap,l=new Se;function c(f,h,p){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let E=s.get(h);if(E===void 0||E.count!==_){let b=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",b)};var v=b;E!==void 0&&E.texture.dispose();const C=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,m=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let T=0;C===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let P=h.attributes.position.count*T,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const F=new Float32Array(P*O*4*_),H=new bE(F,P,O,_);H.type=ei,H.needsUpdate=!0;const R=T*4;for(let U=0;U<_;U++){const j=m[U],st=L[U],rt=w[U],ct=P*O*4*U;for(let N=0;N<j.count;N++){const k=N*R;C===!0&&(l.fromBufferAttribute(j,N),F[ct+k+0]=l.x,F[ct+k+1]=l.y,F[ct+k+2]=l.z,F[ct+k+3]=0),x===!0&&(l.fromBufferAttribute(st,N),F[ct+k+4]=l.x,F[ct+k+5]=l.y,F[ct+k+6]=l.z,F[ct+k+7]=0),y===!0&&(l.fromBufferAttribute(rt,N),F[ct+k+8]=l.x,F[ct+k+9]=l.y,F[ct+k+10]=l.z,F[ct+k+11]=rt.itemSize===4?l.w:1)}}E={count:_,texture:H,size:new ae(P,O)},s.set(h,E),h.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let C=0;for(let y=0;y<d.length;y++)C+=d[y];const x=h.morphTargetsRelative?1:1-C;p.getUniforms().setValue(r,"morphTargetBaseInfluence",x),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",E.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",E.size)}return{update:c}}function CI(r,t,i,s){let l=new WeakMap;function c(p){const d=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==d&&(t.update(_),l.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==d&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,d))),p.isSkinnedMesh){const E=p.skeleton;l.get(E)!==d&&(E.update(),l.set(E,d))}return _}function f(){l=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),i.remove(d.instanceMatrix),d.instanceColor!==null&&i.remove(d.instanceColor)}return{update:c,dispose:f}}const qE=new Rn,P_=new OE(1,1),YE=new bE,XE=new TE,WE=new PE,F_=[],O_=[],G_=new Float32Array(16),z_=new Float32Array(9),H_=new Float32Array(4);function so(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function gn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Eu(r,t){let i=O_[t];i===void 0&&(i=new Int32Array(t),O_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function xI(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function MI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),gn(i,t)}}function II(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),gn(i,t)}}function BI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),gn(i,t)}}function bI(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(pn(i,s))return;H_.set(s),r.uniformMatrix2fv(this.addr,!1,H_),gn(i,s)}}function TI(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(pn(i,s))return;z_.set(s),r.uniformMatrix3fv(this.addr,!1,z_),gn(i,s)}}function RI(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(pn(i,s))return;G_.set(s),r.uniformMatrix4fv(this.addr,!1,G_),gn(i,s)}}function wI(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function DI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),gn(i,t)}}function UI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),gn(i,t)}}function LI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),gn(i,t)}}function QI(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function NI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),gn(i,t)}}function PI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),gn(i,t)}}function FI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),gn(i,t)}}function OI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(P_.compareFunction=ME,c=P_):c=qE,i.setTexture2D(t||c,l)}function GI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||XE,l)}function zI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||WE,l)}function HI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||YE,l)}function VI(r){switch(r){case 5126:return xI;case 35664:return MI;case 35665:return II;case 35666:return BI;case 35674:return bI;case 35675:return TI;case 35676:return RI;case 5124:case 35670:return wI;case 35667:case 35671:return DI;case 35668:case 35672:return UI;case 35669:case 35673:return LI;case 5125:return QI;case 36294:return NI;case 36295:return PI;case 36296:return FI;case 35678:case 36198:case 36298:case 36306:case 35682:return OI;case 35679:case 36299:case 36307:return GI;case 35680:case 36300:case 36308:case 36293:return zI;case 36289:case 36303:case 36311:case 36292:return HI}}function kI(r,t){r.uniform1fv(this.addr,t)}function qI(r,t){const i=so(t,this.size,2);r.uniform2fv(this.addr,i)}function YI(r,t){const i=so(t,this.size,3);r.uniform3fv(this.addr,i)}function XI(r,t){const i=so(t,this.size,4);r.uniform4fv(this.addr,i)}function WI(r,t){const i=so(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function KI(r,t){const i=so(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function JI(r,t){const i=so(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function jI(r,t){r.uniform1iv(this.addr,t)}function ZI(r,t){r.uniform2iv(this.addr,t)}function $I(r,t){r.uniform3iv(this.addr,t)}function tB(r,t){r.uniform4iv(this.addr,t)}function eB(r,t){r.uniform1uiv(this.addr,t)}function nB(r,t){r.uniform2uiv(this.addr,t)}function iB(r,t){r.uniform3uiv(this.addr,t)}function aB(r,t){r.uniform4uiv(this.addr,t)}function sB(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||qE,c[f])}function rB(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||XE,c[f])}function oB(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||WE,c[f])}function lB(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||YE,c[f])}function cB(r){switch(r){case 5126:return kI;case 35664:return qI;case 35665:return YI;case 35666:return XI;case 35674:return WI;case 35675:return KI;case 35676:return JI;case 5124:case 35670:return jI;case 35667:case 35671:return ZI;case 35668:case 35672:return $I;case 35669:case 35673:return tB;case 5125:return eB;case 36294:return nB;case 36295:return iB;case 36296:return aB;case 35678:case 36198:case 36298:case 36306:case 35682:return sB;case 35679:case 36299:case 36307:return rB;case 35680:case 36300:case 36308:case 36293:return oB;case 36289:case 36303:case 36311:case 36292:return lB}}class uB{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VI(i.type)}}class fB{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cB(i.type)}}class AB{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function V_(r,t){r.seq.push(t),r.map[t.id]=t}function hB(r,t,i){const s=r.name,l=s.length;for(rh.lastIndex=0;;){const c=rh.exec(s),f=rh.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&f+2===l){V_(i,d===void 0?new uB(h,r,t):new fB(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new AB(h),V_(i,_)),i=_}}}class ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);hB(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function k_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const dB=37297;let pB=0;function gB(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const q_=new ce;function mB(r){Ie._getMatrix(q_,Ie.workingColorSpace,r);const t=`mat3( ${q_.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(r)){case Au:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Y_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+gB(r.getShaderSource(t),h)}else return c}function _B(r,t){const i=mB(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function EB(r,t){let i;switch(t){case jy:i="Linear";break;case Zy:i="Reinhard";break;case $y:i="Cineon";break;case tS:i="ACESFilmic";break;case nS:i="AgX";break;case iS:i="Neutral";break;case eS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const eu=new X;function vB(){Ie.getLuminanceCoefficients(eu);const r=eu.x.toFixed(4),t=eu.y.toFixed(4),i=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yB(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function SB(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function CB(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function ll(r){return r!==""}function X_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function W_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xB=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(r){return r.replace(xB,IB)}const MB=new Map;function IB(r,t){let i=Ae[t];if(i===void 0){const s=MB.get(t);if(s!==void 0)i=Ae[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return jh(i)}const BB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(r){return r.replace(BB,bB)}function bB(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TB(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dE?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===pE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ya&&(t="SHADOWMAP_TYPE_VSM"),t}function RB(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qs:case no:t="ENVMAP_TYPE_CUBE";break;case pu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wB(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function DB(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gE:t="ENVMAP_BLENDING_MULTIPLY";break;case Ky:t="ENVMAP_BLENDING_MIX";break;case Jy:t="ENVMAP_BLENDING_ADD";break}return t}function UB(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LB(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=TB(i),d=RB(i),g=wB(i),_=DB(i),E=UB(i),v=yB(i),C=SB(c),x=l.createProgram();let y,m,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(ll).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(ll).join(`
`),m.length>0&&(m+=`
`)):(y=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),m=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==rs?"#define TONE_MAPPING":"",i.toneMapping!==rs?Ae.tonemapping_pars_fragment:"",i.toneMapping!==rs?EB("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,_B("linearToOutputTexel",i.outputColorSpace),vB(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=jh(f),f=X_(f,i),f=W_(f,i),h=jh(h),h=X_(h,i),h=W_(h,i),f=K_(f),h=K_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=L+y+f,T=L+m+h,P=k_(l,l.VERTEX_SHADER,w),O=k_(l,l.FRAGMENT_SHADER,T);l.attachShader(x,P),l.attachShader(x,O),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function F(U){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(x)||"",st=l.getShaderInfoLog(P)||"",rt=l.getShaderInfoLog(O)||"",ct=j.trim(),N=st.trim(),k=rt.trim();let Y=!0,gt=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,x,P,O);else{const D=Y_(l,P,"vertex"),Z=Y_(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ct+`
`+D+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(N===""||k==="")&&(gt=!1);gt&&(U.diagnostics={runnable:Y,programLog:ct,vertexShader:{log:N,prefix:y},fragmentShader:{log:k,prefix:m}})}l.deleteShader(P),l.deleteShader(O),H=new ou(l,x),R=CB(l,x)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(x,dB)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pB++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=O,this}let QB=0;class NB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new PB(t),i.set(t,s)),s}}class PB{constructor(t){this.id=QB++,this.code=t,this.usedTimes=0}}function FB(r,t,i,s,l,c,f){const h=new wE,p=new NB,d=new Set,g=[],_=l.logarithmicDepthBuffer,E=l.vertexTextures;let v=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return d.add(R),R===0?"uv":`uv${R}`}function y(R,b,U,j,st){const rt=j.fog,ct=st.geometry,N=R.isMeshStandardMaterial?j.environment:null,k=(R.isMeshStandardMaterial?i:t).get(R.envMap||N),Y=k&&k.mapping===pu?k.image.height:null,gt=C[R.type];R.precision!==null&&(v=l.getMaxPrecision(R.precision),v!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",v,"instead."));const D=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Z=D!==void 0?D.length:0;let pt=0;ct.morphAttributes.position!==void 0&&(pt=1),ct.morphAttributes.normal!==void 0&&(pt=2),ct.morphAttributes.color!==void 0&&(pt=3);let vt,bt,it,ht;if(gt){const ye=ti[gt];vt=ye.vertexShader,bt=ye.fragmentShader}else vt=R.vertexShader,bt=R.fragmentShader,p.update(R),it=p.getVertexShaderID(R),ht=p.getFragmentShaderID(R);const yt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),Yt=st.isInstancedMesh===!0,ne=st.isBatchedMesh===!0,ze=!!R.map,pe=!!R.matcap,z=!!k,be=!!R.aoMap,Jt=!!R.lightMap,ve=!!R.bumpMap,Ft=!!R.normalMap,He=!!R.displacementMap,Ot=!!R.emissiveMap,oe=!!R.metalnessMap,We=!!R.roughnessMap,Ke=R.anisotropy>0,Q=R.clearcoat>0,M=R.dispersion>0,et=R.iridescence>0,ft=R.sheen>0,Et=R.transmission>0,ut=Ke&&!!R.anisotropyMap,Qt=Q&&!!R.clearcoatMap,It=Q&&!!R.clearcoatNormalMap,Vt=Q&&!!R.clearcoatRoughnessMap,qt=et&&!!R.iridescenceMap,St=et&&!!R.iridescenceThicknessMap,Dt=ft&&!!R.sheenColorMap,Wt=ft&&!!R.sheenRoughnessMap,Ht=!!R.specularMap,Tt=!!R.specularColorMap,re=!!R.specularIntensityMap,q=Et&&!!R.transmissionMap,Mt=Et&&!!R.thicknessMap,Bt=!!R.gradientMap,Nt=!!R.alphaMap,Ct=R.alphaTest>0,_t=!!R.alphaHash,zt=!!R.extensions;let ie=rs;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Te={shaderID:gt,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:bt,defines:R.defines,customVertexShaderID:it,customFragmentShaderID:ht,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:v,batching:ne,batchingColor:ne&&st._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&st.instanceColor!==null,instancingMorph:Yt&&st.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ji,alphaToCoverage:!!R.alphaToCoverage,map:ze,matcap:pe,envMap:z,envMapMode:z&&k.mapping,envMapCubeUVHeight:Y,aoMap:be,lightMap:Jt,bumpMap:ve,normalMap:Ft,displacementMap:E&&He,emissiveMap:Ot,normalMapObjectSpace:Ft&&R.normalMapType===oS,normalMapTangentSpace:Ft&&R.normalMapType===xE,metalnessMap:oe,roughnessMap:We,anisotropy:Ke,anisotropyMap:ut,clearcoat:Q,clearcoatMap:Qt,clearcoatNormalMap:It,clearcoatRoughnessMap:Vt,dispersion:M,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:Dt,sheenRoughnessMap:Wt,specularMap:Ht,specularColorMap:Tt,specularIntensityMap:re,transmission:Et,transmissionMap:q,thicknessMap:Mt,gradientMap:Bt,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Ct,alphaHash:_t,combine:R.combine,mapUv:ze&&x(R.map.channel),aoMapUv:be&&x(R.aoMap.channel),lightMapUv:Jt&&x(R.lightMap.channel),bumpMapUv:ve&&x(R.bumpMap.channel),normalMapUv:Ft&&x(R.normalMap.channel),displacementMapUv:He&&x(R.displacementMap.channel),emissiveMapUv:Ot&&x(R.emissiveMap.channel),metalnessMapUv:oe&&x(R.metalnessMap.channel),roughnessMapUv:We&&x(R.roughnessMap.channel),anisotropyMapUv:ut&&x(R.anisotropyMap.channel),clearcoatMapUv:Qt&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&x(R.sheenRoughnessMap.channel),specularMapUv:Ht&&x(R.specularMap.channel),specularColorMapUv:Tt&&x(R.specularColorMap.channel),specularIntensityMapUv:re&&x(R.specularIntensityMap.channel),transmissionMapUv:q&&x(R.transmissionMap.channel),thicknessMapUv:Mt&&x(R.thicknessMap.channel),alphaMapUv:Nt&&x(R.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ft||Ke),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ct.attributes.uv&&(ze||Nt),fog:!!rt,useFog:R.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Lt,skinning:st.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:ze&&R.map.isVideoTexture===!0&&Ie.getTransfer(R.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ot&&R.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(R.emissiveMap.colorSpace)===Pe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ki,flipSided:R.side===Yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:zt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&R.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Te.vertexUv1s=d.has(1),Te.vertexUv2s=d.has(2),Te.vertexUv3s=d.has(3),d.clear(),Te}function m(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const U in R.defines)b.push(U),b.push(R.defines[U]);return R.isRawShaderMaterial===!1&&(L(b,R),w(b,R),b.push(r.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function L(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function w(R,b){h.disableAll(),b.supportsVertexTextures&&h.enable(0),b.instancing&&h.enable(1),b.instancingColor&&h.enable(2),b.instancingMorph&&h.enable(3),b.matcap&&h.enable(4),b.envMap&&h.enable(5),b.normalMapObjectSpace&&h.enable(6),b.normalMapTangentSpace&&h.enable(7),b.clearcoat&&h.enable(8),b.iridescence&&h.enable(9),b.alphaTest&&h.enable(10),b.vertexColors&&h.enable(11),b.vertexAlphas&&h.enable(12),b.vertexUv1s&&h.enable(13),b.vertexUv2s&&h.enable(14),b.vertexUv3s&&h.enable(15),b.vertexTangents&&h.enable(16),b.anisotropy&&h.enable(17),b.alphaHash&&h.enable(18),b.batching&&h.enable(19),b.dispersion&&h.enable(20),b.batchingColor&&h.enable(21),b.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),b.fog&&h.enable(0),b.useFog&&h.enable(1),b.flatShading&&h.enable(2),b.logarithmicDepthBuffer&&h.enable(3),b.reversedDepthBuffer&&h.enable(4),b.skinning&&h.enable(5),b.morphTargets&&h.enable(6),b.morphNormals&&h.enable(7),b.morphColors&&h.enable(8),b.premultipliedAlpha&&h.enable(9),b.shadowMapEnabled&&h.enable(10),b.doubleSided&&h.enable(11),b.flipSided&&h.enable(12),b.useDepthPacking&&h.enable(13),b.dithering&&h.enable(14),b.transmission&&h.enable(15),b.sheen&&h.enable(16),b.opaque&&h.enable(17),b.pointsUvs&&h.enable(18),b.decodeVideoTexture&&h.enable(19),b.decodeVideoTextureEmissive&&h.enable(20),b.alphaToCoverage&&h.enable(21),R.push(h.mask)}function T(R){const b=C[R.type];let U;if(b){const j=ti[b];U=ud.clone(j.uniforms)}else U=R.uniforms;return U}function P(R,b){let U;for(let j=0,st=g.length;j<st;j++){const rt=g[j];if(rt.cacheKey===b){U=rt,++U.usedTimes;break}}return U===void 0&&(U=new LB(r,b,R,c),g.push(U)),U}function O(R){if(--R.usedTimes===0){const b=g.indexOf(R);g[b]=g[g.length-1],g.pop(),R.destroy()}}function F(R){p.remove(R)}function H(){p.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:P,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:H}}function OB(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function GB(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function j_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Z_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,E,v,C,x,y){let m=r[t];return m===void 0?(m={id:_.id,object:_,geometry:E,material:v,groupOrder:C,renderOrder:_.renderOrder,z:x,group:y},r[t]=m):(m.id=_.id,m.object=_,m.geometry=E,m.material=v,m.groupOrder=C,m.renderOrder=_.renderOrder,m.z=x,m.group=y),t++,m}function h(_,E,v,C,x,y){const m=f(_,E,v,C,x,y);v.transmission>0?s.push(m):v.transparent===!0?l.push(m):i.push(m)}function p(_,E,v,C,x,y){const m=f(_,E,v,C,x,y);v.transmission>0?s.unshift(m):v.transparent===!0?l.unshift(m):i.unshift(m)}function d(_,E){i.length>1&&i.sort(_||GB),s.length>1&&s.sort(E||j_),l.length>1&&l.sort(E||j_)}function g(){for(let _=t,E=r.length;_<E;_++){const v=r[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:d}}function zB(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Z_,r.set(s,[f])):l>=c.length?(f=new Z_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function HB(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new Ce};break;case"SpotLight":i={position:new X,direction:new X,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function VB(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let kB=0;function qB(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function YB(r){const t=new HB,i=VB(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new X);const l=new X,c=new je,f=new je;function h(d){let g=0,_=0,E=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let v=0,C=0,x=0,y=0,m=0,L=0,w=0,T=0,P=0,O=0,F=0;d.sort(qB);for(let R=0,b=d.length;R<b;R++){const U=d[R],j=U.color,st=U.intensity,rt=U.distance,ct=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)g+=j.r*st,_+=j.g*st,E+=j.b*st;else if(U.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(U.sh.coefficients[N],st);F++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const k=U.shadow,Y=i.get(U);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,s.directionalShadow[v]=Y,s.directionalShadowMap[v]=ct,s.directionalShadowMatrix[v]=U.shadow.matrix,L++}s.directional[v]=N,v++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(j).multiplyScalar(st),N.distance=rt,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,s.spot[x]=N;const k=U.shadow;if(U.map&&(s.spotLightMap[P]=U.map,P++,k.updateMatrices(U),U.castShadow&&O++),s.spotLightMatrix[x]=k.matrix,U.castShadow){const Y=i.get(U);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,s.spotShadow[x]=Y,s.spotShadowMap[x]=ct,T++}x++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(j).multiplyScalar(st),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),s.rectArea[y]=N,y++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const k=U.shadow,Y=i.get(U);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,s.pointShadow[C]=Y,s.pointShadowMap[C]=ct,s.pointShadowMatrix[C]=U.shadow.matrix,w++}s.point[C]=N,C++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(st),N.groundColor.copy(U.groundColor).multiplyScalar(st),s.hemi[m]=N,m++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Rt.LTC_FLOAT_1,s.rectAreaLTC2=Rt.LTC_FLOAT_2):(s.rectAreaLTC1=Rt.LTC_HALF_1,s.rectAreaLTC2=Rt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=E;const H=s.hash;(H.directionalLength!==v||H.pointLength!==C||H.spotLength!==x||H.rectAreaLength!==y||H.hemiLength!==m||H.numDirectionalShadows!==L||H.numPointShadows!==w||H.numSpotShadows!==T||H.numSpotMaps!==P||H.numLightProbes!==F)&&(s.directional.length=v,s.spot.length=x,s.rectArea.length=y,s.point.length=C,s.hemi.length=m,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=T+P-O,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,H.directionalLength=v,H.pointLength=C,H.spotLength=x,H.rectAreaLength=y,H.hemiLength=m,H.numDirectionalShadows=L,H.numPointShadows=w,H.numSpotShadows=T,H.numSpotMaps=P,H.numLightProbes=F,s.version=kB++)}function p(d,g){let _=0,E=0,v=0,C=0,x=0;const y=g.matrixWorldInverse;for(let m=0,L=d.length;m<L;m++){const w=d[m];if(w.isDirectionalLight){const T=s.directional[_];T.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(y),_++}else if(w.isSpotLight){const T=s.spot[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(y),v++}else if(w.isRectAreaLight){const T=s.rectArea[C];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(y),f.identity(),c.copy(w.matrixWorld),c.premultiply(y),f.extractRotation(c),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(f),T.halfHeight.applyMatrix4(f),C++}else if(w.isPointLight){const T=s.point[E];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(y),E++}else if(w.isHemisphereLight){const T=s.hemi[x];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(y),x++}}}return{setup:h,setupView:p,state:s}}function $_(r){const t=new YB(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function XB(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new $_(r),t.set(l,[h])):c>=f.length?(h=new $_(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const WB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JB(r,t,i){let s=new fd;const l=new ae,c=new ae,f=new Se,h=new cC({depthPacking:rS}),p=new uC,d={},g=i.maxTextureSize,_={[os]:Yn,[Yn]:os,[ki]:ki},E=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:WB,fragmentShader:KB}),v=E.clone();v.defines.HORIZONTAL_PASS=1;const C=new $i;C.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qn(C,E),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dE;let m=this.type;this.render=function(O,F,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),j=r.state;j.setBlending(ss),j.buffers.depth.getReversed()?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const st=m!==ya&&this.type===ya,rt=m===ya&&this.type!==ya;for(let ct=0,N=O.length;ct<N;ct++){const k=O[ct],Y=k.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const gt=Y.getFrameExtents();if(l.multiply(gt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/gt.x),l.x=c.x*gt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/gt.y),l.y=c.y*gt.y,Y.mapSize.y=c.y)),Y.map===null||st===!0||rt===!0){const Z=this.type!==ya?{minFilter:Ai,magFilter:Ai}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ws(l.x,l.y,Z),Y.map.texture.name=k.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const D=Y.getViewportCount();for(let Z=0;Z<D;Z++){const pt=Y.getViewport(Z);f.set(c.x*pt.x,c.y*pt.y,c.x*pt.z,c.y*pt.w),j.viewport(f),Y.updateMatrices(k,Z),s=Y.getFrustum(),T(F,H,Y.camera,k,this.type)}Y.isPointLightShadow!==!0&&this.type===ya&&L(Y,H),Y.needsUpdate=!1}m=this.type,y.needsUpdate=!1,r.setRenderTarget(R,b,U)};function L(O,F){const H=t.update(x);E.defines.VSM_SAMPLES!==O.blurSamples&&(E.defines.VSM_SAMPLES=O.blurSamples,v.defines.VSM_SAMPLES=O.blurSamples,E.needsUpdate=!0,v.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ws(l.x,l.y)),E.uniforms.shadow_pass.value=O.map.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,H,E,x,null),v.uniforms.shadow_pass.value=O.mapPass.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,H,v,x,null)}function w(O,F,H,R){let b=null;const U=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(U!==void 0)b=U;else if(b=H.isPointLight===!0?p:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=b.uuid,st=F.uuid;let rt=d[j];rt===void 0&&(rt={},d[j]=rt);let ct=rt[st];ct===void 0&&(ct=b.clone(),rt[st]=ct,F.addEventListener("dispose",P)),b=ct}if(b.visible=F.visible,b.wireframe=F.wireframe,R===ya?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:_[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=r.properties.get(b);j.light=H}return b}function T(O,F,H,R,b){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&b===ya)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const st=t.update(O),rt=O.material;if(Array.isArray(rt)){const ct=st.groups;for(let N=0,k=ct.length;N<k;N++){const Y=ct[N],gt=rt[Y.materialIndex];if(gt&&gt.visible){const D=w(O,gt,R,b);O.onBeforeShadow(r,O,F,H,st,D,Y),r.renderBufferDirect(H,null,st,D,O,Y),O.onAfterShadow(r,O,F,H,st,D,Y)}}}else if(rt.visible){const ct=w(O,rt,R,b);O.onBeforeShadow(r,O,F,H,st,ct,null),r.renderBufferDirect(H,null,st,ct,O,null),O.onAfterShadow(r,O,F,H,st,ct,null)}}const j=O.children;for(let st=0,rt=j.length;st<rt;st++)T(j[st],F,H,R,b)}function P(O){O.target.removeEventListener("dispose",P);for(const H in d){const R=d[H],b=O.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}const jB={[vh]:yh,[Sh]:Mh,[Ch]:Ih,[eo]:xh,[yh]:vh,[Mh]:Sh,[Ih]:Ch,[xh]:eo};function ZB(r,t){function i(){let q=!1;const Mt=new Se;let Bt=null;const Nt=new Se(0,0,0,0);return{setMask:function(Ct){Bt!==Ct&&!q&&(r.colorMask(Ct,Ct,Ct,Ct),Bt=Ct)},setLocked:function(Ct){q=Ct},setClear:function(Ct,_t,zt,ie,Te){Te===!0&&(Ct*=ie,_t*=ie,zt*=ie),Mt.set(Ct,_t,zt,ie),Nt.equals(Mt)===!1&&(r.clearColor(Ct,_t,zt,ie),Nt.copy(Mt))},reset:function(){q=!1,Bt=null,Nt.set(-1,0,0,0)}}}function s(){let q=!1,Mt=!1,Bt=null,Nt=null,Ct=null;return{setReversed:function(_t){if(Mt!==_t){const zt=t.get("EXT_clip_control");_t?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Mt=_t;const ie=Ct;Ct=null,this.setClear(ie)}},getReversed:function(){return Mt},setTest:function(_t){_t?yt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(_t){Bt!==_t&&!q&&(r.depthMask(_t),Bt=_t)},setFunc:function(_t){if(Mt&&(_t=jB[_t]),Nt!==_t){switch(_t){case vh:r.depthFunc(r.NEVER);break;case yh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case Ch:r.depthFunc(r.EQUAL);break;case xh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Nt=_t}},setLocked:function(_t){q=_t},setClear:function(_t){Ct!==_t&&(Mt&&(_t=1-_t),r.clearDepth(_t),Ct=_t)},reset:function(){q=!1,Bt=null,Nt=null,Ct=null,Mt=!1}}}function l(){let q=!1,Mt=null,Bt=null,Nt=null,Ct=null,_t=null,zt=null,ie=null,Te=null;return{setTest:function(ye){q||(ye?yt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(ye){Mt!==ye&&!q&&(r.stencilMask(ye),Mt=ye)},setFunc:function(ye,Ci,un){(Bt!==ye||Nt!==Ci||Ct!==un)&&(r.stencilFunc(ye,Ci,un),Bt=ye,Nt=Ci,Ct=un)},setOp:function(ye,Ci,un){(_t!==ye||zt!==Ci||ie!==un)&&(r.stencilOp(ye,Ci,un),_t=ye,zt=Ci,ie=un)},setLocked:function(ye){q=ye},setClear:function(ye){Te!==ye&&(r.clearStencil(ye),Te=ye)},reset:function(){q=!1,Mt=null,Bt=null,Nt=null,Ct=null,_t=null,zt=null,ie=null,Te=null}}}const c=new i,f=new s,h=new l,p=new WeakMap,d=new WeakMap;let g={},_={},E=new WeakMap,v=[],C=null,x=!1,y=null,m=null,L=null,w=null,T=null,P=null,O=null,F=new Ce(0,0,0),H=0,R=!1,b=null,U=null,j=null,st=null,rt=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=k>=2);let gt=null,D={};const Z=r.getParameter(r.SCISSOR_BOX),pt=r.getParameter(r.VIEWPORT),vt=new Se().fromArray(Z),bt=new Se().fromArray(pt);function it(q,Mt,Bt,Nt){const Ct=new Uint8Array(4),_t=r.createTexture();r.bindTexture(q,_t),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<Bt;zt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Mt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return _t}const ht={};ht[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),f.setFunc(eo),ve(!1),Ft($m),yt(r.CULL_FACE),be(ss);function yt(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Lt(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Yt(q,Mt){return _[q]!==Mt?(r.bindFramebuffer(q,Mt),_[q]=Mt,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Mt),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ne(q,Mt){let Bt=v,Nt=!1;if(q){Bt=E.get(Mt),Bt===void 0&&(Bt=[],E.set(Mt,Bt));const Ct=q.textures;if(Bt.length!==Ct.length||Bt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,zt=Ct.length;_t<zt;_t++)Bt[_t]=r.COLOR_ATTACHMENT0+_t;Bt.length=Ct.length,Nt=!0}}else Bt[0]!==r.BACK&&(Bt[0]=r.BACK,Nt=!0);Nt&&r.drawBuffers(Bt)}function ze(q){return C!==q?(r.useProgram(q),C=q,!0):!1}const pe={[Ls]:r.FUNC_ADD,[Dy]:r.FUNC_SUBTRACT,[Uy]:r.FUNC_REVERSE_SUBTRACT};pe[Ly]=r.MIN,pe[Qy]=r.MAX;const z={[Ny]:r.ZERO,[Py]:r.ONE,[Fy]:r.SRC_COLOR,[_h]:r.SRC_ALPHA,[ky]:r.SRC_ALPHA_SATURATE,[Hy]:r.DST_COLOR,[Gy]:r.DST_ALPHA,[Oy]:r.ONE_MINUS_SRC_COLOR,[Eh]:r.ONE_MINUS_SRC_ALPHA,[Vy]:r.ONE_MINUS_DST_COLOR,[zy]:r.ONE_MINUS_DST_ALPHA,[qy]:r.CONSTANT_COLOR,[Yy]:r.ONE_MINUS_CONSTANT_COLOR,[Xy]:r.CONSTANT_ALPHA,[Wy]:r.ONE_MINUS_CONSTANT_ALPHA};function be(q,Mt,Bt,Nt,Ct,_t,zt,ie,Te,ye){if(q===ss){x===!0&&(Lt(r.BLEND),x=!1);return}if(x===!1&&(yt(r.BLEND),x=!0),q!==wy){if(q!==y||ye!==R){if((m!==Ls||T!==Ls)&&(r.blendEquation(r.FUNC_ADD),m=Ls,T=Ls),ye)switch(q){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case t_:r.blendFunc(r.ONE,r.ONE);break;case e_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case t_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case e_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,w=null,P=null,O=null,F.set(0,0,0),H=0,y=q,R=ye}return}Ct=Ct||Mt,_t=_t||Bt,zt=zt||Nt,(Mt!==m||Ct!==T)&&(r.blendEquationSeparate(pe[Mt],pe[Ct]),m=Mt,T=Ct),(Bt!==L||Nt!==w||_t!==P||zt!==O)&&(r.blendFuncSeparate(z[Bt],z[Nt],z[_t],z[zt]),L=Bt,w=Nt,P=_t,O=zt),(ie.equals(F)===!1||Te!==H)&&(r.blendColor(ie.r,ie.g,ie.b,Te),F.copy(ie),H=Te),y=q,R=!1}function Jt(q,Mt){q.side===ki?Lt(r.CULL_FACE):yt(r.CULL_FACE);let Bt=q.side===Yn;Mt&&(Bt=!Bt),ve(Bt),q.blending===Os&&q.transparent===!1?be(ss):be(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Nt=q.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ot(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(q){b!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),b=q)}function Ft(q){q!==Ty?(yt(r.CULL_FACE),q!==U&&(q===$m?r.cullFace(r.BACK):q===Ry?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),U=q}function He(q){q!==j&&(N&&r.lineWidth(q),j=q)}function Ot(q,Mt,Bt){q?(yt(r.POLYGON_OFFSET_FILL),(st!==Mt||rt!==Bt)&&(r.polygonOffset(Mt,Bt),st=Mt,rt=Bt)):Lt(r.POLYGON_OFFSET_FILL)}function oe(q){q?yt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function We(q){q===void 0&&(q=r.TEXTURE0+ct-1),gt!==q&&(r.activeTexture(q),gt=q)}function Ke(q,Mt,Bt){Bt===void 0&&(gt===null?Bt=r.TEXTURE0+ct-1:Bt=gt);let Nt=D[Bt];Nt===void 0&&(Nt={type:void 0,texture:void 0},D[Bt]=Nt),(Nt.type!==q||Nt.texture!==Mt)&&(gt!==Bt&&(r.activeTexture(Bt),gt=Bt),r.bindTexture(q,Mt||ht[q]),Nt.type=q,Nt.texture=Mt)}function Q(){const q=D[gt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{r.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{r.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{r.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Vt(){try{r.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{r.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{r.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(q){vt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),vt.copy(q))}function Wt(q){bt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),bt.copy(q))}function Ht(q,Mt){let Bt=d.get(Mt);Bt===void 0&&(Bt=new WeakMap,d.set(Mt,Bt));let Nt=Bt.get(q);Nt===void 0&&(Nt=r.getUniformBlockIndex(Mt,q.name),Bt.set(q,Nt))}function Tt(q,Mt){const Nt=d.get(Mt).get(q);p.get(Mt)!==Nt&&(r.uniformBlockBinding(Mt,Nt,q.__bindingPointIndex),p.set(Mt,Nt))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},gt=null,D={},_={},E=new WeakMap,v=[],C=null,x=!1,y=null,m=null,L=null,w=null,T=null,P=null,O=null,F=new Ce(0,0,0),H=0,R=!1,b=null,U=null,j=null,st=null,rt=null,vt.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Lt,bindFramebuffer:Yt,drawBuffers:ne,useProgram:ze,setBlending:be,setMaterial:Jt,setFlipSided:ve,setCullFace:Ft,setLineWidth:He,setPolygonOffset:Ot,setScissorTest:oe,activeTexture:We,bindTexture:Ke,unbindTexture:Q,compressedTexImage2D:M,compressedTexImage3D:et,texImage2D:qt,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:Tt,texStorage2D:It,texStorage3D:Vt,texSubImage2D:ft,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:Qt,scissor:Dt,viewport:Wt,reset:re}}function $B(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ae,g=new WeakMap;let _;const E=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(Q,M){return v?new OffscreenCanvas(Q,M):vl("canvas")}function x(Q,M,et){let ft=1;const Et=Ke(Q);if((Et.width>et||Et.height>et)&&(ft=et/Math.max(Et.width,Et.height)),ft<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const ut=Math.floor(ft*Et.width),Qt=Math.floor(ft*Et.height);_===void 0&&(_=C(ut,Qt));const It=M?C(ut,Qt):_;return It.width=ut,It.height=Qt,It.getContext("2d").drawImage(Q,0,0,ut,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ut+"x"+Qt+")."),It}else return"data"in Q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),Q;return Q}function y(Q){return Q.generateMipmaps}function m(Q){r.generateMipmap(Q)}function L(Q){return Q.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:Q.isWebGL3DRenderTarget?r.TEXTURE_3D:Q.isWebGLArrayRenderTarget||Q.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(Q,M,et,ft,Et=!1){if(Q!==null){if(r[Q]!==void 0)return r[Q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let ut=M;if(M===r.RED&&(et===r.FLOAT&&(ut=r.R32F),et===r.HALF_FLOAT&&(ut=r.R16F),et===r.UNSIGNED_BYTE&&(ut=r.R8)),M===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.R8UI),et===r.UNSIGNED_SHORT&&(ut=r.R16UI),et===r.UNSIGNED_INT&&(ut=r.R32UI),et===r.BYTE&&(ut=r.R8I),et===r.SHORT&&(ut=r.R16I),et===r.INT&&(ut=r.R32I)),M===r.RG&&(et===r.FLOAT&&(ut=r.RG32F),et===r.HALF_FLOAT&&(ut=r.RG16F),et===r.UNSIGNED_BYTE&&(ut=r.RG8)),M===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RG8UI),et===r.UNSIGNED_SHORT&&(ut=r.RG16UI),et===r.UNSIGNED_INT&&(ut=r.RG32UI),et===r.BYTE&&(ut=r.RG8I),et===r.SHORT&&(ut=r.RG16I),et===r.INT&&(ut=r.RG32I)),M===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),et===r.UNSIGNED_INT&&(ut=r.RGB32UI),et===r.BYTE&&(ut=r.RGB8I),et===r.SHORT&&(ut=r.RGB16I),et===r.INT&&(ut=r.RGB32I)),M===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),et===r.UNSIGNED_INT&&(ut=r.RGBA32UI),et===r.BYTE&&(ut=r.RGBA8I),et===r.SHORT&&(ut=r.RGBA16I),et===r.INT&&(ut=r.RGBA32I)),M===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),M===r.RGBA){const Qt=Et?Au:Ie.getTransfer(ft);et===r.FLOAT&&(ut=r.RGBA32F),et===r.HALF_FLOAT&&(ut=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ut=Qt===Pe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function T(Q,M){let et;return Q?M===null||M===Ys||M===hl?et=r.DEPTH24_STENCIL8:M===ei?et=r.DEPTH32F_STENCIL8:M===Al&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ys||M===hl?et=r.DEPTH_COMPONENT24:M===ei?et=r.DEPTH_COMPONENT32F:M===Al&&(et=r.DEPTH_COMPONENT16),et}function P(Q,M){return y(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==Ai&&Q.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?M.mipmaps.length:1}function O(Q){const M=Q.target;M.removeEventListener("dispose",O),H(M),M.isVideoTexture&&g.delete(M)}function F(Q){const M=Q.target;M.removeEventListener("dispose",F),b(M)}function H(Q){const M=s.get(Q);if(M.__webglInit===void 0)return;const et=Q.source,ft=E.get(et);if(ft){const Et=ft[M.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&R(Q),Object.keys(ft).length===0&&E.delete(et)}s.remove(Q)}function R(Q){const M=s.get(Q);r.deleteTexture(M.__webglTexture);const et=Q.source,ft=E.get(et);delete ft[M.__cacheKey],f.memory.textures--}function b(Q){const M=s.get(Q);if(Q.depthTexture&&(Q.depthTexture.dispose(),s.remove(Q.depthTexture)),Q.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(M.__webglFramebuffer[ft]))for(let Et=0;Et<M.__webglFramebuffer[ft].length;Et++)r.deleteFramebuffer(M.__webglFramebuffer[ft][Et]);else r.deleteFramebuffer(M.__webglFramebuffer[ft]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ft])}else{if(Array.isArray(M.__webglFramebuffer))for(let ft=0;ft<M.__webglFramebuffer.length;ft++)r.deleteFramebuffer(M.__webglFramebuffer[ft]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ft=0;ft<M.__webglColorRenderbuffer.length;ft++)M.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ft]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const et=Q.textures;for(let ft=0,Et=et.length;ft<Et;ft++){const ut=s.get(et[ft]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(et[ft])}s.remove(Q)}let U=0;function j(){U=0}function st(){const Q=U;return Q>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+l.maxTextures),U+=1,Q}function rt(Q){const M=[];return M.push(Q.wrapS),M.push(Q.wrapT),M.push(Q.wrapR||0),M.push(Q.magFilter),M.push(Q.minFilter),M.push(Q.anisotropy),M.push(Q.internalFormat),M.push(Q.format),M.push(Q.type),M.push(Q.generateMipmaps),M.push(Q.premultiplyAlpha),M.push(Q.flipY),M.push(Q.unpackAlignment),M.push(Q.colorSpace),M.join()}function ct(Q,M){const et=s.get(Q);if(Q.isVideoTexture&&oe(Q),Q.isRenderTargetTexture===!1&&Q.isExternalTexture!==!0&&Q.version>0&&et.__version!==Q.version){const ft=Q.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(et,Q,M);return}}else Q.isExternalTexture&&(et.__webglTexture=Q.sourceTexture?Q.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+M)}function N(Q,M){const et=s.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&et.__version!==Q.version){ht(et,Q,M);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+M)}function k(Q,M){const et=s.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&et.__version!==Q.version){ht(et,Q,M);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+M)}function Y(Q,M){const et=s.get(Q);if(Q.version>0&&et.__version!==Q.version){yt(et,Q,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+M)}const gt={[Th]:r.REPEAT,[Wi]:r.CLAMP_TO_EDGE,[Rh]:r.MIRRORED_REPEAT},D={[Ai]:r.NEAREST,[aS]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[bA]:r.LINEAR_MIPMAP_NEAREST,[Ca]:r.LINEAR_MIPMAP_LINEAR},Z={[lS]:r.NEVER,[dS]:r.ALWAYS,[cS]:r.LESS,[ME]:r.LEQUAL,[uS]:r.EQUAL,[hS]:r.GEQUAL,[fS]:r.GREATER,[AS]:r.NOTEQUAL};function pt(Q,M){if(M.type===ei&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===bA||M.magFilter===Lc||M.magFilter===Ca||M.minFilter===Fn||M.minFilter===bA||M.minFilter===Lc||M.minFilter===Ca)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(Q,r.TEXTURE_WRAP_S,gt[M.wrapS]),r.texParameteri(Q,r.TEXTURE_WRAP_T,gt[M.wrapT]),(Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY)&&r.texParameteri(Q,r.TEXTURE_WRAP_R,gt[M.wrapR]),r.texParameteri(Q,r.TEXTURE_MAG_FILTER,D[M.magFilter]),r.texParameteri(Q,r.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(r.texParameteri(Q,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(Q,r.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ai||M.minFilter!==Lc&&M.minFilter!==Ca||M.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(Q,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function vt(Q,M){let et=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,M.addEventListener("dispose",O));const ft=M.source;let Et=E.get(ft);Et===void 0&&(Et={},E.set(ft,Et));const ut=rt(M);if(ut!==Q.__cacheKey){Et[ut]===void 0&&(Et[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,et=!0),Et[ut].usedTimes++;const Qt=Et[Q.__cacheKey];Qt!==void 0&&(Et[Q.__cacheKey].usedTimes--,Qt.usedTimes===0&&R(M)),Q.__cacheKey=ut,Q.__webglTexture=Et[ut].texture}return et}function bt(Q,M,et){return Math.floor(Math.floor(Q/et)/M)}function it(Q,M,et,ft){const ut=Q.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,et,ft,M.data);else{ut.sort((St,Dt)=>St.start-Dt.start);let Qt=0;for(let St=1;St<ut.length;St++){const Dt=ut[Qt],Wt=ut[St],Ht=Dt.start+Dt.count,Tt=bt(Wt.start,M.width,4),re=bt(Dt.start,M.width,4);Wt.start<=Ht+1&&Tt===re&&bt(Wt.start+Wt.count-1,M.width,4)===Tt?Dt.count=Math.max(Dt.count,Wt.start+Wt.count-Dt.start):(++Qt,ut[Qt]=Wt)}ut.length=Qt+1;const It=r.getParameter(r.UNPACK_ROW_LENGTH),Vt=r.getParameter(r.UNPACK_SKIP_PIXELS),qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let St=0,Dt=ut.length;St<Dt;St++){const Wt=ut[St],Ht=Math.floor(Wt.start/4),Tt=Math.ceil(Wt.count/4),re=Ht%M.width,q=Math.floor(Ht/M.width),Mt=Tt,Bt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,re,q,Mt,Bt,et,ft,M.data)}Q.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,It),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,qt)}}function ht(Q,M,et){let ft=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ft=r.TEXTURE_3D);const Et=vt(Q,M),ut=M.source;i.bindTexture(ft,Q.__webglTexture,r.TEXTURE0+et);const Qt=s.get(ut);if(ut.version!==Qt.__version||Et===!0){i.activeTexture(r.TEXTURE0+et);const It=Ie.getPrimaries(Ie.workingColorSpace),Vt=M.colorSpace===qi?null:Ie.getPrimaries(M.colorSpace),qt=M.colorSpace===qi||It===Vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let St=x(M.image,!1,l.maxTextureSize);St=We(M,St);const Dt=c.convert(M.format,M.colorSpace),Wt=c.convert(M.type);let Ht=w(M.internalFormat,Dt,Wt,M.colorSpace,M.isVideoTexture);pt(ft,M);let Tt;const re=M.mipmaps,q=M.isVideoTexture!==!0,Mt=Qt.__version===void 0||Et===!0,Bt=ut.dataReady,Nt=P(M,St);if(M.isDepthTexture)Ht=T(M.format===pl,M.type),Mt&&(q?i.texStorage2D(r.TEXTURE_2D,1,Ht,St.width,St.height):i.texImage2D(r.TEXTURE_2D,0,Ht,St.width,St.height,0,Dt,Wt,null));else if(M.isDataTexture)if(re.length>0){q&&Mt&&i.texStorage2D(r.TEXTURE_2D,Nt,Ht,re[0].width,re[0].height);for(let Ct=0,_t=re.length;Ct<_t;Ct++)Tt=re[Ct],q?Bt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Tt.width,Tt.height,Dt,Wt,Tt.data):i.texImage2D(r.TEXTURE_2D,Ct,Ht,Tt.width,Tt.height,0,Dt,Wt,Tt.data);M.generateMipmaps=!1}else q?(Mt&&i.texStorage2D(r.TEXTURE_2D,Nt,Ht,St.width,St.height),Bt&&it(M,St,Dt,Wt)):i.texImage2D(r.TEXTURE_2D,0,Ht,St.width,St.height,0,Dt,Wt,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){q&&Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Ht,re[0].width,re[0].height,St.depth);for(let Ct=0,_t=re.length;Ct<_t;Ct++)if(Tt=re[Ct],M.format!==Tn)if(Dt!==null)if(q){if(Bt)if(M.layerUpdates.size>0){const zt=T_(Tt.width,Tt.height,M.format,M.type);for(const ie of M.layerUpdates){const Te=Tt.data.subarray(ie*zt/Tt.data.BYTES_PER_ELEMENT,(ie+1)*zt/Tt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,ie,Tt.width,Tt.height,1,Dt,Te)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Tt.width,Tt.height,St.depth,Dt,Tt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ct,Ht,Tt.width,Tt.height,St.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Bt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Tt.width,Tt.height,St.depth,Dt,Wt,Tt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ct,Ht,Tt.width,Tt.height,St.depth,0,Dt,Wt,Tt.data)}else{q&&Mt&&i.texStorage2D(r.TEXTURE_2D,Nt,Ht,re[0].width,re[0].height);for(let Ct=0,_t=re.length;Ct<_t;Ct++)Tt=re[Ct],M.format!==Tn?Dt!==null?q?Bt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ct,0,0,Tt.width,Tt.height,Dt,Tt.data):i.compressedTexImage2D(r.TEXTURE_2D,Ct,Ht,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Bt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Tt.width,Tt.height,Dt,Wt,Tt.data):i.texImage2D(r.TEXTURE_2D,Ct,Ht,Tt.width,Tt.height,0,Dt,Wt,Tt.data)}else if(M.isDataArrayTexture)if(q){if(Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Ht,St.width,St.height,St.depth),Bt)if(M.layerUpdates.size>0){const Ct=T_(St.width,St.height,M.format,M.type);for(const _t of M.layerUpdates){const zt=St.data.subarray(_t*Ct/St.data.BYTES_PER_ELEMENT,(_t+1)*Ct/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Dt,Wt,zt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Dt,Wt,St.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,St.width,St.height,St.depth,0,Dt,Wt,St.data);else if(M.isData3DTexture)q?(Mt&&i.texStorage3D(r.TEXTURE_3D,Nt,Ht,St.width,St.height,St.depth),Bt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Dt,Wt,St.data)):i.texImage3D(r.TEXTURE_3D,0,Ht,St.width,St.height,St.depth,0,Dt,Wt,St.data);else if(M.isFramebufferTexture){if(Mt)if(q)i.texStorage2D(r.TEXTURE_2D,Nt,Ht,St.width,St.height);else{let Ct=St.width,_t=St.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(r.TEXTURE_2D,zt,Ht,Ct,_t,0,Dt,Wt,null),Ct>>=1,_t>>=1}}else if(re.length>0){if(q&&Mt){const Ct=Ke(re[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Ht,Ct.width,Ct.height)}for(let Ct=0,_t=re.length;Ct<_t;Ct++)Tt=re[Ct],q?Bt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Dt,Wt,Tt):i.texImage2D(r.TEXTURE_2D,Ct,Ht,Dt,Wt,Tt);M.generateMipmaps=!1}else if(q){if(Mt){const Ct=Ke(St);i.texStorage2D(r.TEXTURE_2D,Nt,Ht,Ct.width,Ct.height)}Bt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,Wt,St)}else i.texImage2D(r.TEXTURE_2D,0,Ht,Dt,Wt,St);y(M)&&m(ft),Qt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}Q.__version=M.version}function yt(Q,M,et){if(M.image.length!==6)return;const ft=vt(Q,M),Et=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+et);const ut=s.get(Et);if(Et.version!==ut.__version||ft===!0){i.activeTexture(r.TEXTURE0+et);const Qt=Ie.getPrimaries(Ie.workingColorSpace),It=M.colorSpace===qi?null:Ie.getPrimaries(M.colorSpace),Vt=M.colorSpace===qi||Qt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,St=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let _t=0;_t<6;_t++)!qt&&!St?Dt[_t]=x(M.image[_t],!0,l.maxCubemapSize):Dt[_t]=St?M.image[_t].image:M.image[_t],Dt[_t]=We(M,Dt[_t]);const Wt=Dt[0],Ht=c.convert(M.format,M.colorSpace),Tt=c.convert(M.type),re=w(M.internalFormat,Ht,Tt,M.colorSpace),q=M.isVideoTexture!==!0,Mt=ut.__version===void 0||ft===!0,Bt=Et.dataReady;let Nt=P(M,Wt);pt(r.TEXTURE_CUBE_MAP,M);let Ct;if(qt){q&&Mt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,re,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){Ct=Dt[_t].mipmaps;for(let zt=0;zt<Ct.length;zt++){const ie=Ct[zt];M.format!==Tn?Ht!==null?q?Bt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,ie.width,ie.height,Ht,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,ie.width,ie.height,Ht,Tt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,re,ie.width,ie.height,0,Ht,Tt,ie.data)}}}else{if(Ct=M.mipmaps,q&&Mt){Ct.length>0&&Nt++;const _t=Ke(Dt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){q?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt[_t].width,Dt[_t].height,Ht,Tt,Dt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Dt[_t].width,Dt[_t].height,0,Ht,Tt,Dt[_t].data);for(let zt=0;zt<Ct.length;zt++){const Te=Ct[zt].image[_t].image;q?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,Te.width,Te.height,Ht,Tt,Te.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,re,Te.width,Te.height,0,Ht,Tt,Te.data)}}else{q?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ht,Tt,Dt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Ht,Tt,Dt[_t]);for(let zt=0;zt<Ct.length;zt++){const ie=Ct[zt];q?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,Ht,Tt,ie.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,re,Ht,Tt,ie.image[_t])}}}y(M)&&m(r.TEXTURE_CUBE_MAP),ut.__version=Et.version,M.onUpdate&&M.onUpdate(M)}Q.__version=M.version}function Lt(Q,M,et,ft,Et,ut){const Qt=c.convert(et.format,et.colorSpace),It=c.convert(et.type),Vt=w(et.internalFormat,Qt,It,et.colorSpace),qt=s.get(M),St=s.get(et);if(St.__renderTarget=M,!qt.__hasExternalTextures){const Dt=Math.max(1,M.width>>ut),Wt=Math.max(1,M.height>>ut);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,ut,Vt,Dt,Wt,M.depth,0,Qt,It,null):i.texImage2D(Et,ut,Vt,Dt,Wt,0,Qt,It,null)}i.bindFramebuffer(r.FRAMEBUFFER,Q),Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,Et,St.__webglTexture,0,He(M)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,Et,St.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(Q,M,et){if(r.bindRenderbuffer(r.RENDERBUFFER,Q),M.depthBuffer){const ft=M.depthTexture,Et=ft&&ft.isDepthTexture?ft.type:null,ut=T(M.stencilBuffer,Et),Qt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=He(M);Ot(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,ut,M.width,M.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,ut,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ut,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,Q)}else{const ft=M.textures;for(let Et=0;Et<ft.length;Et++){const ut=ft[Et],Qt=c.convert(ut.format,ut.colorSpace),It=c.convert(ut.type),Vt=w(ut.internalFormat,Qt,It,ut.colorSpace),qt=He(M);et&&Ot(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Vt,M.width,M.height):Ot(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,Vt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Vt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(Q,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,Q),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(M.depthTexture);ft.__renderTarget=M,(!ft.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ct(M.depthTexture,0);const Et=ft.__webglTexture,ut=He(M);if(M.depthTexture.format===dl)Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(M.depthTexture.format===pl)Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function ze(Q){const M=s.get(Q),et=Q.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==Q.depthTexture){const ft=Q.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ft){const Et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ft.removeEventListener("dispose",Et)};ft.addEventListener("dispose",Et),M.__depthDisposeCallback=Et}M.__boundDepthTexture=ft}if(Q.depthTexture&&!M.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=Q.texture.mipmaps;ft&&ft.length>0?ne(M.__webglFramebuffer[0],Q):ne(M.__webglFramebuffer,Q)}else if(et){M.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ft]),M.__webglDepthbuffer[ft]===void 0)M.__webglDepthbuffer[ft]=r.createRenderbuffer(),Yt(M.__webglDepthbuffer[ft],Q,!1);else{const Et=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,ut)}}else{const ft=Q.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Yt(M.__webglDepthbuffer,Q,!1);else{const Et=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(Q,M,et){const ft=s.get(Q);M!==void 0&&Lt(ft.__webglFramebuffer,Q,Q.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&ze(Q)}function z(Q){const M=Q.texture,et=s.get(Q),ft=s.get(M);Q.addEventListener("dispose",F);const Et=Q.textures,ut=Q.isWebGLCubeRenderTarget===!0,Qt=Et.length>1;if(Qt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=M.version,f.memory.textures++),ut){et.__webglFramebuffer=[];for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0){et.__webglFramebuffer[It]=[];for(let Vt=0;Vt<M.mipmaps.length;Vt++)et.__webglFramebuffer[It][Vt]=r.createFramebuffer()}else et.__webglFramebuffer[It]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){et.__webglFramebuffer=[];for(let It=0;It<M.mipmaps.length;It++)et.__webglFramebuffer[It]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let It=0,Vt=Et.length;It<Vt;It++){const qt=s.get(Et[It]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),f.memory.textures++)}if(Q.samples>0&&Ot(Q)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let It=0;It<Et.length;It++){const Vt=Et[It];et.__webglColorRenderbuffer[It]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[It]);const qt=c.convert(Vt.format,Vt.colorSpace),St=c.convert(Vt.type),Dt=w(Vt.internalFormat,qt,St,Vt.colorSpace,Q.isXRRenderTarget===!0),Wt=He(Q);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Dt,Q.width,Q.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,et.__webglColorRenderbuffer[It])}r.bindRenderbuffer(r.RENDERBUFFER,null),Q.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(et.__webglDepthRenderbuffer,Q,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),pt(r.TEXTURE_CUBE_MAP,M);for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0)for(let Vt=0;Vt<M.mipmaps.length;Vt++)Lt(et.__webglFramebuffer[It][Vt],Q,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,Vt);else Lt(et.__webglFramebuffer[It],Q,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);y(M)&&m(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let It=0,Vt=Et.length;It<Vt;It++){const qt=Et[It],St=s.get(qt);let Dt=r.TEXTURE_2D;(Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(Dt=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,St.__webglTexture),pt(Dt,qt),Lt(et.__webglFramebuffer,Q,qt,r.COLOR_ATTACHMENT0+It,Dt,0),y(qt)&&m(Dt)}i.unbindTexture()}else{let It=r.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(It=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(It,ft.__webglTexture),pt(It,M),M.mipmaps&&M.mipmaps.length>0)for(let Vt=0;Vt<M.mipmaps.length;Vt++)Lt(et.__webglFramebuffer[Vt],Q,M,r.COLOR_ATTACHMENT0,It,Vt);else Lt(et.__webglFramebuffer,Q,M,r.COLOR_ATTACHMENT0,It,0);y(M)&&m(It),i.unbindTexture()}Q.depthBuffer&&ze(Q)}function be(Q){const M=Q.textures;for(let et=0,ft=M.length;et<ft;et++){const Et=M[et];if(y(Et)){const ut=L(Q),Qt=s.get(Et).__webglTexture;i.bindTexture(ut,Qt),m(ut),i.unbindTexture()}}}const Jt=[],ve=[];function Ft(Q){if(Q.samples>0){if(Ot(Q)===!1){const M=Q.textures,et=Q.width,ft=Q.height;let Et=r.COLOR_BUFFER_BIT;const ut=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(Q),It=M.length>1;if(It)for(let qt=0;qt<M.length;qt++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const Vt=Q.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let qt=0;qt<M.length;qt++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),It){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[qt]);const St=s.get(M[qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,et,ft,0,0,et,ft,Et,r.NEAREST),p===!0&&(Jt.length=0,ve.length=0,Jt.push(r.COLOR_ATTACHMENT0+qt),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(Jt.push(ut),ve.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),It)for(let qt=0;qt<M.length;qt++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[qt]);const St=s.get(M[qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,St,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&p){const M=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function He(Q){return Math.min(l.maxSamples,Q.samples)}function Ot(Q){const M=s.get(Q);return Q.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(Q){const M=f.render.frame;g.get(Q)!==M&&(g.set(Q,M),Q.update())}function We(Q,M){const et=Q.colorSpace,ft=Q.format,Et=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||et!==Ji&&et!==qi&&(Ie.getTransfer(et)===Pe?(ft!==Tn||Et!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),M}function Ke(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(d.width=Q.naturalWidth||Q.width,d.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(d.width=Q.displayWidth,d.height=Q.displayHeight):(d.width=Q.width,d.height=Q.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=j,this.setTexture2D=ct,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=pe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ot}function tb(r,t){function i(s,l=qi){let c;const f=Ie.getTransfer(l);if(s===sn)return r.UNSIGNED_BYTE;if(s===id)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ad)return r.UNSIGNED_SHORT_5_5_5_1;if(s===vE)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===_E)return r.BYTE;if(s===EE)return r.SHORT;if(s===Al)return r.UNSIGNED_SHORT;if(s===nd)return r.INT;if(s===Ys)return r.UNSIGNED_INT;if(s===ei)return r.FLOAT;if(s===Ui)return r.HALF_FLOAT;if(s===yE)return r.ALPHA;if(s===SE)return r.RGB;if(s===Tn)return r.RGBA;if(s===dl)return r.DEPTH_COMPONENT;if(s===pl)return r.DEPTH_STENCIL;if(s===Ns)return r.RED;if(s===sd)return r.RED_INTEGER;if(s===Ps)return r.RG;if(s===rd)return r.RG_INTEGER;if(s===od)return r.RGBA_INTEGER;if(s===jr||s===Gs||s===Zr||s===zs)if(f===Pe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jr)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jr)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gs)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zr)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zs)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lu||s===wh||s===cu||s===Dh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===lu)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cu)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uu||s===gl||s===ml)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===uu||s===gl)return f===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ml)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hs||s===Uh||s===Lh||s===Qh||s===_l||s===Nh||s===Ph||s===Fh||s===Oh||s===Gh||s===zh||s===Hh||s===Vh||s===kh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hs)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_l)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ph)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vs||s===qh||s===fu)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vs)return f===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fu)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===CE||s===Yh||s===Xh||s===Wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vs)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Yh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class KE extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new KE(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:eb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qn(new _u(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ab extends Ks{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,d=null,g=null,_=null,E=null,v=null,C=null;const x=new ib,y={},m=i.getContextAttributes();let L=null,w=null;const T=[],P=[],O=new ae;let F=null;const H=new fi;H.viewport=new Se;const R=new fi;R.viewport=new Se;const b=[H,R],U=new yC;let j=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=T[it];return ht===void 0&&(ht=new KA,T[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=T[it];return ht===void 0&&(ht=new KA,T[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=T[it];return ht===void 0&&(ht=new KA,T[it]=ht),ht.getHandSpace()};function rt(it){const ht=P.indexOf(it.inputSource);if(ht===-1)return;const yt=T[ht];yt!==void 0&&(yt.update(it.inputSource,it.frame,d||f),yt.dispatchEvent({type:it.type,data:it.inputSource}))}function ct(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",N);for(let it=0;it<T.length;it++){const ht=P[it];ht!==null&&(P[it]=null,T[it].disconnect(ht))}j=null,st=null,x.reset();for(const it in y)delete y[it];t.setRenderTarget(L),v=null,E=null,_=null,l=null,w=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(F),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return E!==null?E:v},this.getBinding=function(){return _},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Lt=null,Yt=null;m.depth&&(Yt=m.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=m.stencil?pl:dl,Lt=m.stencil?hl:Ys);const ne={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};E=_.createProjectionLayer(ne),l.updateRenderState({layers:[E]}),t.setPixelRatio(1),t.setSize(E.textureWidth,E.textureHeight,!1),w=new Ws(E.textureWidth,E.textureHeight,{format:Tn,type:sn,depthTexture:new OE(E.textureWidth,E.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:c};v=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new Ws(v.framebufferWidth,v.framebufferHeight,{format:Tn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,f=await l.requestReferenceSpace(h),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(it){for(let ht=0;ht<it.removed.length;ht++){const yt=it.removed[ht],Lt=P.indexOf(yt);Lt>=0&&(P[Lt]=null,T[Lt].disconnect(yt))}for(let ht=0;ht<it.added.length;ht++){const yt=it.added[ht];let Lt=P.indexOf(yt);if(Lt===-1){for(let ne=0;ne<T.length;ne++)if(ne>=P.length){P.push(yt),Lt=ne;break}else if(P[ne]===null){P[ne]=yt,Lt=ne;break}if(Lt===-1)break}const Yt=T[Lt];Yt&&Yt.connect(yt)}}const k=new X,Y=new X;function gt(it,ht,yt){k.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const Lt=k.distanceTo(Y),Yt=ht.projectionMatrix.elements,ne=yt.projectionMatrix.elements,ze=Yt[14]/(Yt[10]-1),pe=Yt[14]/(Yt[10]+1),z=(Yt[9]+1)/Yt[5],be=(Yt[9]-1)/Yt[5],Jt=(Yt[8]-1)/Yt[0],ve=(ne[8]+1)/ne[0],Ft=ze*Jt,He=ze*ve,Ot=Lt/(-Jt+ve),oe=Ot*-Jt;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(oe),it.translateZ(Ot),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Yt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const We=ze+Ot,Ke=pe+Ot,Q=Ft-oe,M=He+(Lt-oe),et=z*pe/Ke*We,ft=be*pe/Ke*We;it.projectionMatrix.makePerspective(Q,M,et,ft,We,Ke),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function D(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ht=it.near,yt=it.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),U.near=R.near=H.near=ht,U.far=R.far=H.far=yt,(j!==U.near||st!==U.far)&&(l.updateRenderState({depthNear:U.near,depthFar:U.far}),j=U.near,st=U.far),U.layers.mask=it.layers.mask|6,H.layers.mask=U.layers.mask&3,R.layers.mask=U.layers.mask&5;const Lt=it.parent,Yt=U.cameras;D(U,Lt);for(let ne=0;ne<Yt.length;ne++)D(Yt[ne],Lt);Yt.length===2?gt(U,H,R):U.projectionMatrix.copy(H.projectionMatrix),Z(it,U,Lt)};function Z(it,ht,yt){yt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(yt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=El*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(E===null&&v===null))return p},this.setFoveation=function(it){p=it,E!==null&&(E.fixedFoveation=it),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(it){return y[it]};let pt=null;function vt(it,ht){if(g=ht.getViewerPose(d||f),C=ht,g!==null){const yt=g.views;v!==null&&(t.setRenderTargetFramebuffer(w,v.framebuffer),t.setRenderTarget(w));let Lt=!1;yt.length!==U.cameras.length&&(U.cameras.length=0,Lt=!0);for(let pe=0;pe<yt.length;pe++){const z=yt[pe];let be=null;if(v!==null)be=v.getViewport(z);else{const ve=_.getViewSubImage(E,z);be=ve.viewport,pe===0&&(t.setRenderTargetTextures(w,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(w))}let Jt=b[pe];Jt===void 0&&(Jt=new fi,Jt.layers.enable(pe),Jt.viewport=new Se,b[pe]=Jt),Jt.matrix.fromArray(z.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(z.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(U.matrix.copy(Jt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Lt===!0&&U.cameras.push(Jt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const pe=_.getDepthInformation(yt[0]);pe&&pe.isValid&&pe.texture&&x.init(pe,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let pe=0;pe<yt.length;pe++){const z=yt[pe].camera;if(z){let be=y[z];be||(be=new KE,y[z]=be);const Jt=_.getCameraImage(z);be.sourceTexture=Jt}}}for(let yt=0;yt<T.length;yt++){const Lt=P[yt],Yt=T[yt];Lt!==null&&Yt!==void 0&&Yt.update(Lt,ht,d||f)}pt&&pt(it,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),C=null}const bt=new kE;bt.setAnimationLoop(vt),this.setAnimationLoop=function(it){pt=it},this.dispose=function(){}}}const Ds=new ji,sb=new je;function rb(r,t){function i(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function s(y,m){m.color.getRGB(y.fogColor.value,QE(r)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function l(y,m,L,w,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?c(y,m):m.isMeshToonMaterial?(c(y,m),_(y,m)):m.isMeshPhongMaterial?(c(y,m),g(y,m)):m.isMeshStandardMaterial?(c(y,m),E(y,m),m.isMeshPhysicalMaterial&&v(y,m,T)):m.isMeshMatcapMaterial?(c(y,m),C(y,m)):m.isMeshDepthMaterial?c(y,m):m.isMeshDistanceMaterial?(c(y,m),x(y,m)):m.isMeshNormalMaterial?c(y,m):m.isLineBasicMaterial?(f(y,m),m.isLineDashedMaterial&&h(y,m)):m.isPointsMaterial?p(y,m,L,w):m.isSpriteMaterial?d(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function c(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,i(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Yn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,i(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Yn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,i(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,i(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const L=t.get(m),w=L.envMap,T=L.envMapRotation;w&&(y.envMap.value=w,Ds.copy(T),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),y.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Ds)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,y.aoMapTransform))}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform))}function h(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function p(y,m,L,w){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*L,y.scale.value=w*.5,m.map&&(y.map.value=m.map,i(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function E(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function v(y,m,L){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,m){m.matcap&&(y.matcap.value=m.matcap)}function x(y,m){const L=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ob(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,w){const T=w.program;s.uniformBlockBinding(L,T)}function d(L,w){let T=l[L.id];T===void 0&&(C(L),T=g(L),l[L.id]=T,L.addEventListener("dispose",y));const P=w.program;s.updateUBOMapping(L,P);const O=t.render.frame;c[L.id]!==O&&(E(L),c[L.id]=O)}function g(L){const w=_();L.__bindingPointIndex=w;const T=r.createBuffer(),P=L.__size,O=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,P,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,T),T}function _(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(L){const w=l[L.id],T=L.uniforms,P=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let O=0,F=T.length;O<F;O++){const H=Array.isArray(T[O])?T[O]:[T[O]];for(let R=0,b=H.length;R<b;R++){const U=H[R];if(v(U,O,R,P)===!0){const j=U.__offset,st=Array.isArray(U.value)?U.value:[U.value];let rt=0;for(let ct=0;ct<st.length;ct++){const N=st[ct],k=x(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,j+rt,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,rt),rt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(L,w,T,P){const O=L.value,F=w+"_"+T;if(P[F]===void 0)return typeof O=="number"||typeof O=="boolean"?P[F]=O:P[F]=O.clone(),!0;{const H=P[F];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return P[F]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function C(L){const w=L.uniforms;let T=0;const P=16;for(let F=0,H=w.length;F<H;F++){const R=Array.isArray(w[F])?w[F]:[w[F]];for(let b=0,U=R.length;b<U;b++){const j=R[b],st=Array.isArray(j.value)?j.value:[j.value];for(let rt=0,ct=st.length;rt<ct;rt++){const N=st[rt],k=x(N),Y=T%P,gt=Y%k.boundary,D=Y+gt;T+=gt,D!==0&&P-D<k.storage&&(T+=P-D),j.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=T,T+=k.storage}}}const O=T%P;return O>0&&(T+=P-O),L.__size=T,L.__cache={},this}function x(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function y(L){const w=L.target;w.removeEventListener("dispose",y);const T=f.indexOf(w.__bindingPointIndex);f.splice(T,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function m(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:d,dispose:m}}class lb{constructor(t={}){const{canvas:i=wS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:E=!1}=t;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=f;const C=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const L=[],w=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=$n;let O=0,F=0,H=null,R=-1,b=null;const U=new Se,j=new Se;let st=null;const rt=new Ce(0);let ct=0,N=i.width,k=i.height,Y=1,gt=null,D=null;const Z=new Se(0,0,N,k),pt=new Se(0,0,N,k);let vt=!1;const bt=new fd;let it=!1,ht=!1;const yt=new je,Lt=new X,Yt=new Se,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function pe(){return H===null?Y:1}let z=s;function be(B,W){return i.getContext(B,W)}try{const B={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ed}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),z===null){const W="webgl2";if(z=be(W,B),z===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Jt,ve,Ft,He,Ot,oe,We,Ke,Q,M,et,ft,Et,ut,Qt,It,Vt,qt,St,Dt,Wt,Ht,Tt,re;function q(){Jt=new _I(z),Jt.init(),Ht=new tb(z,Jt),ve=new fI(z,Jt,t,Ht),Ft=new ZB(z,Jt),ve.reversedDepthBuffer&&E&&Ft.buffers.depth.setReversed(!0),He=new yI(z),Ot=new OB,oe=new $B(z,Jt,Ft,Ot,ve,Ht,He),We=new hI(T),Ke=new mI(T),Q=new BC(z),Tt=new cI(z,Q),M=new EI(z,Q,He,Tt),et=new CI(z,M,Q,He),St=new SI(z,ve,oe),It=new AI(Ot),ft=new FB(T,We,Ke,Jt,ve,Tt,It),Et=new rb(T,Ot),ut=new zB,Qt=new XB(Jt),qt=new lI(T,We,Ke,Ft,et,v,p),Vt=new JB(T,et,ve),re=new ob(z,He,ve,Ft),Dt=new uI(z,Jt,He),Wt=new vI(z,Jt,He),He.programs=ft.programs,T.capabilities=ve,T.extensions=Jt,T.properties=Ot,T.renderLists=ut,T.shadowMap=Vt,T.state=Ft,T.info=He}q();const Mt=new ab(T,z);this.xr=Mt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const B=Jt.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=Jt.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(B){B!==void 0&&(Y=B,this.setSize(N,k,!1))},this.getSize=function(B){return B.set(N,k)},this.setSize=function(B,W,ot=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=B,k=W,i.width=Math.floor(B*Y),i.height=Math.floor(W*Y),ot===!0&&(i.style.width=B+"px",i.style.height=W+"px"),this.setViewport(0,0,B,W)},this.getDrawingBufferSize=function(B){return B.set(N*Y,k*Y).floor()},this.setDrawingBufferSize=function(B,W,ot){N=B,k=W,Y=ot,i.width=Math.floor(B*ot),i.height=Math.floor(W*ot),this.setViewport(0,0,B,W)},this.getCurrentViewport=function(B){return B.copy(U)},this.getViewport=function(B){return B.copy(Z)},this.setViewport=function(B,W,ot,lt){B.isVector4?Z.set(B.x,B.y,B.z,B.w):Z.set(B,W,ot,lt),Ft.viewport(U.copy(Z).multiplyScalar(Y).round())},this.getScissor=function(B){return B.copy(pt)},this.setScissor=function(B,W,ot,lt){B.isVector4?pt.set(B.x,B.y,B.z,B.w):pt.set(B,W,ot,lt),Ft.scissor(j.copy(pt).multiplyScalar(Y).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(B){Ft.setScissorTest(vt=B)},this.setOpaqueSort=function(B){gt=B},this.setTransparentSort=function(B){D=B},this.getClearColor=function(B){return B.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(B=!0,W=!0,ot=!0){let lt=0;if(B){let J=!1;if(H!==null){const xt=H.texture.format;J=xt===od||xt===rd||xt===sd}if(J){const xt=H.texture.type,wt=xt===sn||xt===Ys||xt===Al||xt===hl||xt===id||xt===ad,Pt=qt.getClearColor(),Ut=qt.getClearAlpha(),jt=Pt.r,$t=Pt.g,kt=Pt.b;wt?(C[0]=jt,C[1]=$t,C[2]=kt,C[3]=Ut,z.clearBufferuiv(z.COLOR,0,C)):(x[0]=jt,x[1]=$t,x[2]=kt,x[3]=Ut,z.clearBufferiv(z.COLOR,0,x))}else lt|=z.COLOR_BUFFER_BIT}W&&(lt|=z.DEPTH_BUFFER_BIT),ot&&(lt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),qt.dispose(),ut.dispose(),Qt.dispose(),Ot.dispose(),We.dispose(),Ke.dispose(),et.dispose(),Tt.dispose(),re.dispose(),ft.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",un),Mt.removeEventListener("sessionend",fn),Ze.stop()};function Bt(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const B=He.autoReset,W=Vt.enabled,ot=Vt.autoUpdate,lt=Vt.needsUpdate,J=Vt.type;q(),He.autoReset=B,Vt.enabled=W,Vt.autoUpdate=ot,Vt.needsUpdate=lt,Vt.type=J}function Ct(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function _t(B){const W=B.target;W.removeEventListener("dispose",_t),zt(W)}function zt(B){ie(B),Ot.remove(B)}function ie(B){const W=Ot.get(B).programs;W!==void 0&&(W.forEach(function(ot){ft.releaseProgram(ot)}),B.isShaderMaterial&&ft.releaseShaderCache(B))}this.renderBufferDirect=function(B,W,ot,lt,J,xt){W===null&&(W=ne);const wt=J.isMesh&&J.matrixWorld.determinant()<0,Pt=Ia(B,W,ot,lt,J);Ft.setMaterial(lt,wt);let Ut=ot.index,jt=1;if(lt.wireframe===!0){if(Ut=M.getWireframeAttribute(ot),Ut===void 0)return;jt=2}const $t=ot.drawRange,kt=ot.attributes.position;let ue=$t.start*jt,xe=($t.start+$t.count)*jt;xt!==null&&(ue=Math.max(ue,xt.start*jt),xe=Math.min(xe,(xt.start+xt.count)*jt)),Ut!==null?(ue=Math.max(ue,0),xe=Math.min(xe,Ut.count)):kt!=null&&(ue=Math.max(ue,0),xe=Math.min(xe,kt.count));const qe=xe-ue;if(qe<0||qe===1/0)return;Tt.setup(J,lt,Pt,ot,Ut);let Ue,fe=Dt;if(Ut!==null&&(Ue=Q.get(Ut),fe=Wt,fe.setIndex(Ue)),J.isMesh)lt.wireframe===!0?(Ft.setLineWidth(lt.wireframeLinewidth*pe()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(J.isLine){let Kt=lt.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*pe()),J.isLineSegments?fe.setMode(z.LINES):J.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else J.isPoints?fe.setMode(z.POINTS):J.isSprite&&fe.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))fe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,ke=J._multiDrawCounts,ge=J._multiDrawCount,Dn=Ut?Q.get(Ut).bytesPerElement:1,xi=Ot.get(lt).currentProgram.getUniforms();for(let On=0;On<ge;On++)xi.setValue(z,"_gl_DrawID",On),fe.render(Kt[On]/Dn,ke[On])}else if(J.isInstancedMesh)fe.renderInstances(ue,qe,J.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ke=Math.min(ot.instanceCount,Kt);fe.renderInstances(ue,qe,ke)}else fe.render(ue,qe)};function Te(B,W,ot){B.transparent===!0&&B.side===ki&&B.forceSinglePass===!1?(B.side=Yn,B.needsUpdate=!0,Ni(B,W,ot),B.side=os,B.needsUpdate=!0,Ni(B,W,ot),B.side=ki):Ni(B,W,ot)}this.compile=function(B,W,ot=null){ot===null&&(ot=B),m=Qt.get(ot),m.init(W),w.push(m),ot.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),B!==ot&&B.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();const lt=new Set;return B.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const xt=J.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const Pt=xt[wt];Te(Pt,ot,J),lt.add(Pt)}else Te(xt,ot,J),lt.add(xt)}),m=w.pop(),lt},this.compileAsync=function(B,W,ot=null){const lt=this.compile(B,W,ot);return new Promise(J=>{function xt(){if(lt.forEach(function(wt){Ot.get(wt).currentProgram.isReady()&&lt.delete(wt)}),lt.size===0){J(B);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ye=null;function Ci(B){ye&&ye(B)}function un(){Ze.stop()}function fn(){Ze.start()}const Ze=new kE;Ze.setAnimationLoop(Ci),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(B){ye=B,Mt.setAnimationLoop(B),B===null?Ze.stop():Ze.start()},Mt.addEventListener("sessionstart",un),Mt.addEventListener("sessionend",fn),this.render=function(B,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(W),W=Mt.getCamera()),B.isScene===!0&&B.onBeforeRender(T,B,W,H),m=Qt.get(B,w.length),m.init(W),w.push(m),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),bt.setFromProjectionMatrix(yt,Ki,W.reversedDepth),ht=this.localClippingEnabled,it=It.init(this.clippingPlanes,ht),y=ut.get(B,L.length),y.init(),L.push(y),Mt.enabled===!0&&Mt.isPresenting===!0){const xt=T.xr.getDepthSensingMesh();xt!==null&&Qi(xt,W,-1/0,T.sortObjects)}Qi(B,W,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(gt,D),ze=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ze&&qt.addToRenderList(y,B),this.info.render.frame++,it===!0&&It.beginShadows();const ot=m.state.shadowsArray;Vt.render(ot,B,W),it===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,J=y.transmissive;if(m.setupLights(),W.isArrayCamera){const xt=W.cameras;if(J.length>0)for(let wt=0,Pt=xt.length;wt<Pt;wt++){const Ut=xt[wt];Ml(lt,J,B,Ut)}ze&&qt.render(B);for(let wt=0,Pt=xt.length;wt<Pt;wt++){const Ut=xt[wt];Js(y,B,Ut,Ut.viewport)}}else J.length>0&&Ml(lt,J,B,W),ze&&qt.render(B),Js(y,B,W);H!==null&&F===0&&(oe.updateMultisampleRenderTarget(H),oe.updateRenderTargetMipmap(H)),B.isScene===!0&&B.onAfterRender(T,B,W),Tt.resetDefaultState(),R=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],it===!0&&It.setGlobalState(T.clippingPlanes,m.state.camera)):m=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Qi(B,W,ot,lt){if(B.visible===!1)return;if(B.layers.test(W.layers)){if(B.isGroup)ot=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(W);else if(B.isLight)m.pushLight(B),B.castShadow&&m.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||bt.intersectsSprite(B)){lt&&Yt.setFromMatrixPosition(B.matrixWorld).applyMatrix4(yt);const wt=et.update(B),Pt=B.material;Pt.visible&&y.push(B,wt,Pt,ot,Yt.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||bt.intersectsObject(B))){const wt=et.update(B),Pt=B.material;if(lt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Yt.copy(B.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Yt.copy(wt.boundingSphere.center)),Yt.applyMatrix4(B.matrixWorld).applyMatrix4(yt)),Array.isArray(Pt)){const Ut=wt.groups;for(let jt=0,$t=Ut.length;jt<$t;jt++){const kt=Ut[jt],ue=Pt[kt.materialIndex];ue&&ue.visible&&y.push(B,wt,ue,ot,Yt.z,kt)}}else Pt.visible&&y.push(B,wt,Pt,ot,Yt.z,null)}}const xt=B.children;for(let wt=0,Pt=xt.length;wt<Pt;wt++)Qi(xt[wt],W,ot,lt)}function Js(B,W,ot,lt){const J=B.opaque,xt=B.transmissive,wt=B.transparent;m.setupLightsView(ot),it===!0&&It.setGlobalState(T.clippingPlanes,ot),lt&&Ft.viewport(U.copy(lt)),J.length>0&&js(J,W,ot),xt.length>0&&js(xt,W,ot),wt.length>0&&js(wt,W,ot),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Ml(B,W,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[lt.id]===void 0&&(m.state.transmissionRenderTarget[lt.id]=new Ws(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Ui:sn,minFilter:Ca,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const xt=m.state.transmissionRenderTarget[lt.id],wt=lt.viewport||U;xt.setSize(wt.z*T.transmissionResolutionScale,wt.w*T.transmissionResolutionScale);const Pt=T.getRenderTarget(),Ut=T.getActiveCubeFace(),jt=T.getActiveMipmapLevel();T.setRenderTarget(xt),T.getClearColor(rt),ct=T.getClearAlpha(),ct<1&&T.setClearColor(16777215,.5),T.clear(),ze&&qt.render(ot);const $t=T.toneMapping;T.toneMapping=rs;const kt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),m.setupLightsView(lt),it===!0&&It.setGlobalState(T.clippingPlanes,lt),js(B,ot,lt),oe.updateMultisampleRenderTarget(xt),oe.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let xe=0,qe=W.length;xe<qe;xe++){const Ue=W[xe],fe=Ue.object,Kt=Ue.geometry,ke=Ue.material,ge=Ue.group;if(ke.side===ki&&fe.layers.test(lt.layers)){const Dn=ke.side;ke.side=Yn,ke.needsUpdate=!0,ro(fe,ot,lt,Kt,ke,ge),ke.side=Dn,ke.needsUpdate=!0,ue=!0}}ue===!0&&(oe.updateMultisampleRenderTarget(xt),oe.updateRenderTargetMipmap(xt))}T.setRenderTarget(Pt,Ut,jt),T.setClearColor(rt,ct),kt!==void 0&&(lt.viewport=kt),T.toneMapping=$t}function js(B,W,ot){const lt=W.isScene===!0?W.overrideMaterial:null;for(let J=0,xt=B.length;J<xt;J++){const wt=B[J],Pt=wt.object,Ut=wt.geometry,jt=wt.group;let $t=wt.material;$t.allowOverride===!0&&lt!==null&&($t=lt),Pt.layers.test(ot.layers)&&ro(Pt,W,ot,Ut,$t,jt)}}function ro(B,W,ot,lt,J,xt){B.onBeforeRender(T,W,ot,lt,J,xt),B.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),J.onBeforeRender(T,W,ot,lt,B,xt),J.transparent===!0&&J.side===ki&&J.forceSinglePass===!1?(J.side=Yn,J.needsUpdate=!0,T.renderBufferDirect(ot,W,lt,J,B,xt),J.side=os,J.needsUpdate=!0,T.renderBufferDirect(ot,W,lt,J,B,xt),J.side=ki):T.renderBufferDirect(ot,W,lt,J,B,xt),B.onAfterRender(T,W,ot,lt,J,xt)}function Ni(B,W,ot){W.isScene!==!0&&(W=ne);const lt=Ot.get(B),J=m.state.lights,xt=m.state.shadowsArray,wt=J.state.version,Pt=ft.getParameters(B,J.state,xt,W,ot),Ut=ft.getProgramCacheKey(Pt);let jt=lt.programs;lt.environment=B.isMeshStandardMaterial?W.environment:null,lt.fog=W.fog,lt.envMap=(B.isMeshStandardMaterial?Ke:We).get(B.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&B.envMap===null?W.environmentRotation:B.envMapRotation,jt===void 0&&(B.addEventListener("dispose",_t),jt=new Map,lt.programs=jt);let $t=jt.get(Ut);if($t!==void 0){if(lt.currentProgram===$t&&lt.lightsStateVersion===wt)return ta(B,Pt),$t}else Pt.uniforms=ft.getUniforms(B),B.onBeforeCompile(Pt,T),$t=ft.acquireProgram(Pt,Ut),jt.set(Ut,$t),lt.uniforms=Pt.uniforms;const kt=lt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(kt.clippingPlanes=It.uniform),ta(B,Pt),lt.needsLights=Ba(B),lt.lightsStateVersion=wt,lt.needsLights&&(kt.ambientLightColor.value=J.state.ambient,kt.lightProbe.value=J.state.probe,kt.directionalLights.value=J.state.directional,kt.directionalLightShadows.value=J.state.directionalShadow,kt.spotLights.value=J.state.spot,kt.spotLightShadows.value=J.state.spotShadow,kt.rectAreaLights.value=J.state.rectArea,kt.ltc_1.value=J.state.rectAreaLTC1,kt.ltc_2.value=J.state.rectAreaLTC2,kt.pointLights.value=J.state.point,kt.pointLightShadows.value=J.state.pointShadow,kt.hemisphereLights.value=J.state.hemi,kt.directionalShadowMap.value=J.state.directionalShadowMap,kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,kt.spotShadowMap.value=J.state.spotShadowMap,kt.spotLightMatrix.value=J.state.spotLightMatrix,kt.spotLightMap.value=J.state.spotLightMap,kt.pointShadowMap.value=J.state.pointShadowMap,kt.pointShadowMatrix.value=J.state.pointShadowMatrix),lt.currentProgram=$t,lt.uniformsList=null,$t}function Zs(B){if(B.uniformsList===null){const W=B.currentProgram.getUniforms();B.uniformsList=ou.seqWithValue(W.seq,B.uniforms)}return B.uniformsList}function ta(B,W){const ot=Ot.get(B);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function Ia(B,W,ot,lt,J){W.isScene!==!0&&(W=ne),oe.resetTextureUnits();const xt=W.fog,wt=lt.isMeshStandardMaterial?W.environment:null,Pt=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ji,Ut=(lt.isMeshStandardMaterial?Ke:We).get(lt.envMap||wt),jt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),kt=!!ot.morphAttributes.position,ue=!!ot.morphAttributes.normal,xe=!!ot.morphAttributes.color;let qe=rs;lt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qe=T.toneMapping);const Ue=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,fe=Ue!==void 0?Ue.length:0,Kt=Ot.get(lt),ke=m.state.lights;if(it===!0&&(ht===!0||B!==b)){const $e=B===b&&lt.id===R;It.setState(lt,B,$e)}let ge=!1;lt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ke.state.version||Kt.outputColorSpace!==Pt||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Ut||lt.fog===!0&&Kt.fog!==xt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==It.numPlanes||Kt.numIntersection!==It.numIntersection)||Kt.vertexAlphas!==jt||Kt.vertexTangents!==$t||Kt.morphTargets!==kt||Kt.morphNormals!==ue||Kt.morphColors!==xe||Kt.toneMapping!==qe||Kt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Kt.__version=lt.version);let Dn=Kt.currentProgram;ge===!0&&(Dn=Ni(lt,W,J));let xi=!1,On=!1,mn=!1;const Oe=Dn.getUniforms(),Gn=Kt.uniforms;if(Ft.useProgram(Dn.program)&&(xi=!0,On=!0,mn=!0),lt.id!==R&&(R=lt.id,On=!0),xi||b!==B){Ft.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Oe.setValue(z,"projectionMatrix",B.projectionMatrix),Oe.setValue(z,"viewMatrix",B.matrixWorldInverse);const Sn=Oe.map.cameraPosition;Sn!==void 0&&Sn.setValue(z,Lt.setFromMatrixPosition(B.matrixWorld)),ve.logarithmicDepthBuffer&&Oe.setValue(z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Oe.setValue(z,"isOrthographic",B.isOrthographicCamera===!0),b!==B&&(b=B,On=!0,mn=!0)}if(J.isSkinnedMesh){Oe.setOptional(z,J,"bindMatrix"),Oe.setOptional(z,J,"bindMatrixInverse");const $e=J.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Oe.setValue(z,"boneTexture",$e.boneTexture,oe))}J.isBatchedMesh&&(Oe.setOptional(z,J,"batchingTexture"),Oe.setValue(z,"batchingTexture",J._matricesTexture,oe),Oe.setOptional(z,J,"batchingIdTexture"),Oe.setValue(z,"batchingIdTexture",J._indirectTexture,oe),Oe.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Oe.setValue(z,"batchingColorTexture",J._colorsTexture,oe));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&St.update(J,ot,Dn),(On||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,Oe.setValue(z,"receiveShadow",J.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Gn.envMap.value=Ut,Gn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&W.environment!==null&&(Gn.envMapIntensity.value=W.environmentIntensity),On&&(Oe.setValue(z,"toneMappingExposure",T.toneMappingExposure),Kt.needsLights&&us(Gn,mn),xt&&lt.fog===!0&&Et.refreshFogUniforms(Gn,xt),Et.refreshMaterialUniforms(Gn,lt,Y,k,m.state.transmissionRenderTarget[B.id]),ou.upload(z,Zs(Kt),Gn,oe)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ou.upload(z,Zs(Kt),Gn,oe),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Oe.setValue(z,"center",J.center),Oe.setValue(z,"modelViewMatrix",J.modelViewMatrix),Oe.setValue(z,"normalMatrix",J.normalMatrix),Oe.setValue(z,"modelMatrix",J.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const $e=lt.uniformsGroups;for(let Sn=0,$s=$e.length;Sn<$s;Sn++){const Xn=$e[Sn];re.update(Xn,Dn),re.bind(Xn,Dn)}}return Dn}function us(B,W){B.ambientLightColor.needsUpdate=W,B.lightProbe.needsUpdate=W,B.directionalLights.needsUpdate=W,B.directionalLightShadows.needsUpdate=W,B.pointLights.needsUpdate=W,B.pointLightShadows.needsUpdate=W,B.spotLights.needsUpdate=W,B.spotLightShadows.needsUpdate=W,B.rectAreaLights.needsUpdate=W,B.hemisphereLights.needsUpdate=W}function Ba(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(B,W,ot){const lt=Ot.get(B);lt.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ot.get(B.texture).__webglTexture=W,Ot.get(B.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,W){const ot=Ot.get(B);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0};const rn=z.createFramebuffer();this.setRenderTarget=function(B,W=0,ot=0){H=B,O=W,F=ot;let lt=!0,J=null,xt=!1,wt=!1;if(B){const Ut=Ot.get(B);if(Ut.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(z.FRAMEBUFFER,null),lt=!1;else if(Ut.__webglFramebuffer===void 0)oe.setupRenderTarget(B);else if(Ut.__hasExternalTextures)oe.rebindTextures(B,Ot.get(B.texture).__webglTexture,Ot.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const kt=B.depthTexture;if(Ut.__boundDepthTexture!==kt){if(kt!==null&&Ot.has(kt)&&(B.width!==kt.image.width||B.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(B)}}const jt=B.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(wt=!0);const $t=Ot.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray($t[W])?J=$t[W][ot]:J=$t[W],xt=!0):B.samples>0&&oe.useMultisampledRTT(B)===!1?J=Ot.get(B).__webglMultisampledFramebuffer:Array.isArray($t)?J=$t[ot]:J=$t,U.copy(B.viewport),j.copy(B.scissor),st=B.scissorTest}else U.copy(Z).multiplyScalar(Y).floor(),j.copy(pt).multiplyScalar(Y).floor(),st=vt;if(ot!==0&&(J=rn),Ft.bindFramebuffer(z.FRAMEBUFFER,J)&&lt&&Ft.drawBuffers(B,J),Ft.viewport(U),Ft.scissor(j),Ft.setScissorTest(st),xt){const Ut=Ot.get(B.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,ot)}else if(wt){const Ut=W;for(let jt=0;jt<B.textures.length;jt++){const $t=Ot.get(B.textures[jt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+jt,$t.__webglTexture,ot,Ut)}}else if(B!==null&&ot!==0){const Ut=Ot.get(B.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ut.__webglTexture,ot)}R=-1},this.readRenderTargetPixels=function(B,W,ot,lt,J,xt,wt,Pt=0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){Ft.bindFramebuffer(z.FRAMEBUFFER,Ut);try{const jt=B.textures[Pt],$t=jt.format,kt=jt.type;if(!ve.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=B.width-lt&&ot>=0&&ot<=B.height-J&&(B.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pt),z.readPixels(W,ot,lt,J,Ht.convert($t),Ht.convert(kt),xt))}finally{const jt=H!==null?Ot.get(H).__webglFramebuffer:null;Ft.bindFramebuffer(z.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(B,W,ot,lt,J,xt,wt,Pt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut)if(W>=0&&W<=B.width-lt&&ot>=0&&ot<=B.height-J){Ft.bindFramebuffer(z.FRAMEBUFFER,Ut);const jt=B.textures[Pt],$t=jt.format,kt=jt.type;if(!ve.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,xt.byteLength,z.STREAM_READ),B.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pt),z.readPixels(W,ot,lt,J,Ht.convert($t),Ht.convert(kt),0);const xe=H!==null?Ot.get(H).__webglFramebuffer:null;Ft.bindFramebuffer(z.FRAMEBUFFER,xe);const qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await DS(z,qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xt),z.deleteBuffer(ue),z.deleteSync(qe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,W=null,ot=0){const lt=Math.pow(2,-ot),J=Math.floor(B.image.width*lt),xt=Math.floor(B.image.height*lt),wt=W!==null?W.x:0,Pt=W!==null?W.y:0;oe.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,wt,Pt,J,xt),Ft.unbindTexture()};const Il=z.createFramebuffer(),Bl=z.createFramebuffer();this.copyTextureToTexture=function(B,W,ot=null,lt=null,J=0,xt=null){xt===null&&(J!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=J,J=0):xt=0);let wt,Pt,Ut,jt,$t,kt,ue,xe,qe;const Ue=B.isCompressedTexture?B.mipmaps[xt]:B.image;if(ot!==null)wt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,Ut=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,$t=ot.min.y,kt=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-J);wt=Math.floor(Ue.width*Un),Pt=Math.floor(Ue.height*Un),B.isDataArrayTexture?Ut=Ue.depth:B.isData3DTexture?Ut=Math.floor(Ue.depth*Un):Ut=1,jt=0,$t=0,kt=0}lt!==null?(ue=lt.x,xe=lt.y,qe=lt.z):(ue=0,xe=0,qe=0);const fe=Ht.convert(W.format),Kt=Ht.convert(W.type);let ke;W.isData3DTexture?(oe.setTexture3D(W,0),ke=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(oe.setTexture2DArray(W,0),ke=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(W,0),ke=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),Dn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xi=z.getParameter(z.UNPACK_SKIP_PIXELS),On=z.getParameter(z.UNPACK_SKIP_ROWS),mn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,$t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,kt);const Oe=B.isDataArrayTexture||B.isData3DTexture,Gn=W.isDataArrayTexture||W.isData3DTexture;if(B.isDepthTexture){const Un=Ot.get(B),$e=Ot.get(W),Sn=Ot.get(Un.__renderTarget),$s=Ot.get($e.__renderTarget);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Xn=0;Xn<Ut;Xn++)Oe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(B).__webglTexture,J,kt+Xn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(W).__webglTexture,xt,qe+Xn)),z.blitFramebuffer(jt,$t,wt,Pt,ue,xe,wt,Pt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||B.isRenderTargetTexture||Ot.has(B)){const Un=Ot.get(B),$e=Ot.get(W);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,Il),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bl);for(let Sn=0;Sn<Ut;Sn++)Oe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Un.__webglTexture,J,kt+Sn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Un.__webglTexture,J),Gn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$e.__webglTexture,xt,qe+Sn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$e.__webglTexture,xt),J!==0?z.blitFramebuffer(jt,$t,wt,Pt,ue,xe,wt,Pt,z.COLOR_BUFFER_BIT,z.NEAREST):Gn?z.copyTexSubImage3D(ke,xt,ue,xe,qe+Sn,jt,$t,wt,Pt):z.copyTexSubImage2D(ke,xt,ue,xe,jt,$t,wt,Pt);Ft.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Gn?B.isDataTexture||B.isData3DTexture?z.texSubImage3D(ke,xt,ue,xe,qe,wt,Pt,Ut,fe,Kt,Ue.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,xt,ue,xe,qe,wt,Pt,Ut,fe,Ue.data):z.texSubImage3D(ke,xt,ue,xe,qe,wt,Pt,Ut,fe,Kt,Ue):B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xt,ue,xe,wt,Pt,fe,Kt,Ue.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xt,ue,xe,Ue.width,Ue.height,fe,Ue.data):z.texSubImage2D(z.TEXTURE_2D,xt,ue,xe,wt,Pt,fe,Kt,Ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xi),z.pixelStorei(z.UNPACK_SKIP_ROWS,On),z.pixelStorei(z.UNPACK_SKIP_IMAGES,mn),xt===0&&W.generateMipmaps&&z.generateMipmap(ke),Ft.unbindTexture()},this.copyTextureToTexture3D=function(B,W,ot=null,lt=null,J=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,W,ot,lt,J)},this.initRenderTarget=function(B){Ot.get(B).__webglFramebuffer===void 0&&oe.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?oe.setTextureCube(B,0):B.isData3DTexture?oe.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?oe.setTexture2DArray(B,0):oe.setTexture2D(B,0),Ft.unbindTexture()},this.resetState=function(){O=0,F=0,H=null,Ft.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const tE={type:"change"},dd={type:"start"},JE={type:"end"},nu=new RE,eE=new ns,cb=Math.cos(70*IE.DEG2RAD),dn=new X,Zn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6;class ub extends MC{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Xs,this._lastTargetPosition=new X,this._quat=new Xs().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new B_,this._sphericalDelta=new B_,this._scale=1,this._panOffset=new X,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new X,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ab.bind(this),this._onPointerDown=fb.bind(this),this._onPointerUp=hb.bind(this),this._onContextMenu=vb.bind(this),this._onMouseWheel=gb.bind(this),this._onKeyDown=mb.bind(this),this._onTouchStart=_b.bind(this),this._onTouchMove=Eb.bind(this),this._onMouseDown=db.bind(this),this._onMouseMove=pb.bind(this),this._interceptControlDown=yb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tE),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;dn.copy(i).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=dn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(nu.origin.copy(this.object.position),nu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nu.direction))<cb?this.object.lookAt(this.target):(eE.setFromNormalAndCoplanarPoint(this.object.up,this.target),nu.intersectPlane(eE,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(tE),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){dn.setFromMatrixColumn(i,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,i){this.screenSpacePanning===!0?dn.setFromMatrixColumn(i,1):(dn.setFromMatrixColumn(i,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let c=dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function fb(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Ab(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function hb(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(JE),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function db(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Jr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Jr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(dd)}function pb(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function gb(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(dd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(JE))}function mb(r){this.enabled!==!1&&this._handleKeyDown(r)}function _b(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(dd)}function Eb(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function vb(r){this.enabled!==!1&&r.preventDefault()}function yb(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cb=()=>{const r=new FE,t=new zE().load("starmap.webp"),i=new ao(99999999999,32,32);i.scale(20,20,20);const s=new gu({map:t,side:Yn,depthWrite:!1,transparent:!0,opacity:1}),l=new qn(i,s);return r.add(l),r},xb=Math.PI*2/60,nE=[{value:0,label:"Stop",description:"HammerTime"},{value:695e-6,label:"1m",description:"Slowest"},{value:.04167,label:"1h",description:"Slower"},{value:.25,label:"4h",description:"Slow"},{value:1,label:"1d",description:"Base Speed"},{value:7,label:"7d",description:"Fast"},{value:30.4167,label:"month",description:"Faster"},{value:92.0833,label:"3m",description:"Fastest"}];let Zh=1,iu=[];const du={multiplier:1,setMultiplier:r=>{Zh=r,du.multiplier=r,iu.forEach(t=>t(r))},getMultiplier:()=>Zh,subscribe:r=>(iu.push(r),()=>{iu=iu.filter(t=>t!==r)})},Mb=()=>{const[r,t]=is.useState(Zh);return is.useEffect(()=>du.subscribe(s=>{t(s)}),[]),[r,s=>{du.setMultiplier(s)}]},iE=new ls,au=new X;class jE extends vC{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new hi(t,3)),this.setAttribute("uv",new hi(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,s=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),s.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new Jh(i,6,1);return this.setAttribute("instanceStart",new as(s,3,0)),this.setAttribute("instanceEnd",new as(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new Jh(i,6,1);return this.setAttribute("instanceColorStart",new as(s,3,0)),this.setAttribute("instanceColorEnd",new as(s,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new lC(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),iE.setFromBufferAttribute(i),this.boundingBox.union(iE))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)au.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(au)),au.fromBufferAttribute(i,c),l=Math.max(l,s.distanceToSquared(au));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ti.line={uniforms:ud.merge([Rt.common,Rt.fog,Rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class pd extends Zi{constructor(t){super({type:"LineMaterial",uniforms:ud.clone(ti.line.uniforms),vertexShader:ti.line.vertexShader,fragmentShader:ti.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const lh=new Se,aE=new X,sE=new X,In=new Se,Bn=new Se,Hi=new Se,ch=new X,uh=new je,bn=new xC,rE=new X,su=new ls,ru=new yl,Vi=new Se;let Yi,ks;function oE(r,t,i){return Vi.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),Vi.multiplyScalar(1/Vi.w),Vi.x=ks/i.width,Vi.y=ks/i.height,Vi.applyMatrix4(r.projectionMatrixInverse),Vi.multiplyScalar(1/Vi.w),Math.abs(Math.max(Vi.x,Vi.y))}function Ib(r,t){const i=r.matrixWorld,s=r.geometry,l=s.attributes.instanceStart,c=s.attributes.instanceEnd,f=Math.min(s.instanceCount,l.count);for(let h=0,p=f;h<p;h++){bn.start.fromBufferAttribute(l,h),bn.end.fromBufferAttribute(c,h),bn.applyMatrix4(i);const d=new X,g=new X;Yi.distanceSqToSegment(bn.start,bn.end,g,d),g.distanceTo(d)<ks*.5&&t.push({point:g,pointOnLine:d,distance:Yi.origin.distanceTo(g),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function Bb(r,t,i){const s=t.projectionMatrix,c=r.material.resolution,f=r.matrixWorld,h=r.geometry,p=h.attributes.instanceStart,d=h.attributes.instanceEnd,g=Math.min(h.instanceCount,p.count),_=-t.near;Yi.at(1,Hi),Hi.w=1,Hi.applyMatrix4(t.matrixWorldInverse),Hi.applyMatrix4(s),Hi.multiplyScalar(1/Hi.w),Hi.x*=c.x/2,Hi.y*=c.y/2,Hi.z=0,ch.copy(Hi),uh.multiplyMatrices(t.matrixWorldInverse,f);for(let E=0,v=g;E<v;E++){if(In.fromBufferAttribute(p,E),Bn.fromBufferAttribute(d,E),In.w=1,Bn.w=1,In.applyMatrix4(uh),Bn.applyMatrix4(uh),In.z>_&&Bn.z>_)continue;if(In.z>_){const w=In.z-Bn.z,T=(In.z-_)/w;In.lerp(Bn,T)}else if(Bn.z>_){const w=Bn.z-In.z,T=(Bn.z-_)/w;Bn.lerp(In,T)}In.applyMatrix4(s),Bn.applyMatrix4(s),In.multiplyScalar(1/In.w),Bn.multiplyScalar(1/Bn.w),In.x*=c.x/2,In.y*=c.y/2,Bn.x*=c.x/2,Bn.y*=c.y/2,bn.start.copy(In),bn.start.z=0,bn.end.copy(Bn),bn.end.z=0;const x=bn.closestPointToPointParameter(ch,!0);bn.at(x,rE);const y=IE.lerp(In.z,Bn.z,x),m=y>=-1&&y<=1,L=ch.distanceTo(rE)<ks*.5;if(m&&L){bn.start.fromBufferAttribute(p,E),bn.end.fromBufferAttribute(d,E),bn.start.applyMatrix4(f),bn.end.applyMatrix4(f);const w=new X,T=new X;Yi.distanceSqToSegment(bn.start,bn.end,T,w),i.push({point:T,pointOnLine:w,distance:Yi.origin.distanceTo(T),object:r,face:null,faceIndex:E,uv:null,uv1:null})}}}class bb extends qn{constructor(t=new jE,i=new pd({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,s=t.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let f=0,h=0,p=i.count;f<p;f++,h+=2)aE.fromBufferAttribute(i,f),sE.fromBufferAttribute(s,f),l[h]=h===0?0:l[h-1],l[h+1]=l[h]+aE.distanceTo(sE);const c=new Jh(l,2,1);return t.setAttribute("instanceDistanceStart",new as(c,1,0)),t.setAttribute("instanceDistanceEnd",new as(c,1,1)),this}raycast(t,i){const s=this.material.worldUnits,l=t.camera;l===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Yi=t.ray;const f=this.matrixWorld,h=this.geometry,p=this.material;ks=p.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),ru.copy(h.boundingSphere).applyMatrix4(f);let d;if(s)d=ks*.5;else{const _=Math.max(l.near,ru.distanceToPoint(Yi.origin));d=oE(l,_,p.resolution)}if(ru.radius+=d,Yi.intersectsSphere(ru)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),su.copy(h.boundingBox).applyMatrix4(f);let g;if(s)g=ks*.5;else{const _=Math.max(l.near,su.distanceToPoint(Yi.origin));g=oE(l,_,p.resolution)}su.expandByScalar(g),Yi.intersectsBox(su)!==!1&&(s?Ib(this,i):Bb(this,l,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(lh),this.material.uniforms.resolution.value.set(lh.z,lh.w))}}class ZE extends jE{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,s=new Float32Array(2*i);for(let l=0;l<i;l+=3)s[2*l]=t[l],s[2*l+1]=t[l+1],s[2*l+2]=t[l+2],s[2*l+3]=t[l+3],s[2*l+4]=t[l+4],s[2*l+5]=t[l+5];return super.setPositions(s),this}setColors(t){const i=t.length-3,s=new Float32Array(2*i);for(let l=0;l<i;l+=3)s[2*l]=t[l],s[2*l+1]=t[l+1],s[2*l+2]=t[l+2],s[2*l+3]=t[l+3],s[2*l+4]=t[l+4],s[2*l+5]=t[l+5];return super.setColors(s),this}setFromPoints(t){const i=t.length-1,s=new Float32Array(6*i);for(let l=0;l<i;l++)s[6*l]=t[l].x,s[6*l+1]=t[l].y,s[6*l+2]=t[l].z||0,s[6*l+3]=t[l+1].x,s[6*l+4]=t[l+1].y,s[6*l+5]=t[l+1].z||0;return super.setPositions(s),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class lE extends bb{constructor(t=new ZE,i=new pd({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}class Tb{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(t){if(!this.workers[t]){const i=this.workerCreator();i.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=i}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,i){const s=this.workersResolve[t];if(s&&s(i),this.queue.length){const{resolve:l,msg:c,transfer:f}=this.queue.shift();this.workersResolve[t]=l,this.workers[t].postMessage(c,f)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,i){return new Promise(s=>{const l=this._getIdleWorker();l!==-1?(this._initWorker(l),this.workerStatus|=1<<l,this.workersResolve[l]=s,this.workers[l].postMessage(t,i)):this.queue.push({resolve:s,msg:t,transfer:i})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Rb=0,cE=2,wb=1,uE=2,Db=0,Ub=1,Lb=10,Qb=0,$E=9,t0=15,e0=16,n0=22,i0=37,a0=43,s0=76,r0=83,o0=97,l0=100,c0=103,u0=109,Nb=131,Pb=132,Fb=133,Ob=134,Gb=137,zb=138,Hb=141,Vb=142,kb=145,qb=146,f0=148,A0=152,Yb=157,Xb=158,h0=165,d0=166,gd=1000066e3;class Wb{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class ol{constructor(t,i,s,l){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+i,s),this._littleEndian=l,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){const i=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,i}_skip(t){return this._offset+=t,this}_scan(t,i){i===void 0&&(i=0);const s=this._offset;let l=0;for(;this._dataView.getUint8(this._offset)!==i&&l<t;)l++,this._offset++;return l<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+s,l)}}const Vn=[171,75,84,88,32,50,48,187,13,10,26,10];function fE(r){return new TextDecoder().decode(r)}function Kb(r){const t=new Uint8Array(r.buffer,r.byteOffset,Vn.length);if(t[0]!==Vn[0]||t[1]!==Vn[1]||t[2]!==Vn[2]||t[3]!==Vn[3]||t[4]!==Vn[4]||t[5]!==Vn[5]||t[6]!==Vn[6]||t[7]!==Vn[7]||t[8]!==Vn[8]||t[9]!==Vn[9]||t[10]!==Vn[10]||t[11]!==Vn[11])throw new Error("Missing KTX 2.0 identifier.");const i=new Wb,s=17*Uint32Array.BYTES_PER_ELEMENT,l=new ol(r,Vn.length,s,!0);i.vkFormat=l._nextUint32(),i.typeSize=l._nextUint32(),i.pixelWidth=l._nextUint32(),i.pixelHeight=l._nextUint32(),i.pixelDepth=l._nextUint32(),i.layerCount=l._nextUint32(),i.faceCount=l._nextUint32();const c=l._nextUint32();i.supercompressionScheme=l._nextUint32();const f=l._nextUint32(),h=l._nextUint32(),p=l._nextUint32(),d=l._nextUint32(),g=l._nextUint64(),_=l._nextUint64(),E=new ol(r,Vn.length+s,3*c*8,!0);for(let k=0;k<c;k++)i.levels.push({levelData:new Uint8Array(r.buffer,r.byteOffset+E._nextUint64(),E._nextUint64()),uncompressedByteLength:E._nextUint64()});const v=new ol(r,f,h,!0),C={vendorId:v._skip(4)._nextUint16(),descriptorType:v._nextUint16(),versionNumber:v._nextUint16(),descriptorBlockSize:v._nextUint16(),colorModel:v._nextUint8(),colorPrimaries:v._nextUint8(),transferFunction:v._nextUint8(),flags:v._nextUint8(),texelBlockDimension:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],bytesPlane:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],samples:[]},x=(C.descriptorBlockSize/4-6)/4;for(let k=0;k<x;k++){const Y={bitOffset:v._nextUint16(),bitLength:v._nextUint8(),channelType:v._nextUint8(),samplePosition:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&Y.channelType?(Y.sampleLower=v._nextInt32(),Y.sampleUpper=v._nextInt32()):(Y.sampleLower=v._nextUint32(),Y.sampleUpper=v._nextUint32()),C.samples[k]=Y}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(C);const y=new ol(r,p,d,!0);for(;y._offset<d;){const k=y._nextUint32(),Y=y._scan(k),gt=fE(Y);if(i.keyValue[gt]=y._nextUint8Array(k-Y.byteLength-1),gt.match(/^ktx/i)){const D=fE(i.keyValue[gt]);i.keyValue[gt]=D.substring(0,D.lastIndexOf("\0"))}y._skip(k%4?4-k%4:0)}if(_<=0)return i;const m=new ol(r,g,_,!0),L=m._nextUint16(),w=m._nextUint16(),T=m._nextUint32(),P=m._nextUint32(),O=m._nextUint32(),F=m._nextUint32(),H=[];for(let k=0;k<c;k++)H.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const R=g+m._offset,b=R+T,U=b+P,j=U+O,st=new Uint8Array(r.buffer,r.byteOffset+R,T),rt=new Uint8Array(r.buffer,r.byteOffset+b,P),ct=new Uint8Array(r.buffer,r.byteOffset+U,O),N=new Uint8Array(r.buffer,r.byteOffset+j,F);return i.globalData={endpointCount:L,selectorCount:w,imageDescs:H,endpointsData:st,selectorsData:rt,tablesData:ct,extendedData:N},i}let fh,Sa,$h;const Ah={env:{emscripten_notify_memory_growth:function(r){$h=new Uint8Array(Sa.exports.memory.buffer)}}};class Jb{init(){return fh||(fh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+AE).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Ah)).then(this._init):WebAssembly.instantiate(Buffer.from(AE,"base64"),Ah).then(this._init),fh)}_init(t){Sa=t.instance,Ah.env.emscripten_notify_memory_growth(0)}decode(t,i=0){if(!Sa)throw new Error("ZSTDDecoder: Await .init() before decoding.");const s=t.byteLength,l=Sa.exports.malloc(s);$h.set(t,l),i=i||Number(Sa.exports.ZSTD_findDecompressedSize(l,s));const c=Sa.exports.malloc(i),f=Sa.exports.ZSTD_decompress(c,i,l,s),h=$h.slice(c,c+f);return Sa.exports.free(l),Sa.exports.free(c),h}}const AE="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",jb="display-p3",Zb="display-p3-linear",hh=new WeakMap;let dh=0,ph;class Si extends xl{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Tb,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return this.workerConfig={astcSupported:await t.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await t.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await t.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await t.hasFeatureAsync("texture-compression-bc"),bptcSupported:await t.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await t.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-bc"),bptcSupported:t.hasFeature("texture-compression-bptc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const t=new jA(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const i=t.loadAsync("basis_transcoder.js"),s=new jA(this.manager);s.setPath(this.transcoderPath),s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials);const l=s.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([i,l]).then(([c,f])=>{const h=Si.BasisWorker.toString(),p=["/* constants */","let _EngineFormat = "+JSON.stringify(Si.EngineFormat),"let _EngineType = "+JSON.stringify(Si.EngineType),"let _TranscoderFormat = "+JSON.stringify(Si.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Si.BasisFormat),"/* basis_transcoder.js */",c,"/* worker */",h.substring(h.indexOf("{")+1,h.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([p])),this.transcoderBinary=f,this.workerPool.setWorkerCreator(()=>{const d=new Worker(this.workerSourceURL),g=this.transcoderBinary.slice(0);return d.postMessage({type:"init",config:this.workerConfig,transcoderBinary:g},[g]),d})}),dh>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),dh++}return this.transcoderPending}load(t,i,s,l){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const c=new jA(this.manager);c.setPath(this.path),c.setCrossOrigin(this.crossOrigin),c.setWithCredentials(this.withCredentials),c.setResponseType("arraybuffer"),c.load(t,f=>{this.parse(f,i,l)},s,l)}parse(t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(hh.has(t))return hh.get(t).promise.then(i).catch(s);this._createTexture(t).then(l=>i?i(l):null).catch(s)}_createTextureFrom(t,i){const{type:s,error:l,data:{faces:c,width:f,height:h,format:p,type:d,dfdFlags:g}}=t;if(s==="error")return Promise.reject(l);let _;if(i.faceCount===6)_=new oC(c,p,d);else{const E=c[0].mipmaps;_=i.layerCount>1?new rC(E,f,h,i.layerCount,p,d):new mu(E,f,h,p,d)}return _.minFilter=c[0].mipmaps.length===1?Fn:Ca,_.magFilter=Fn,_.generateMipmaps=!1,_.needsUpdate=!0,_.colorSpace=p0(i),_.premultiplyAlpha=!!(g&wb),_}async _createTexture(t,i={}){const s=Kb(new Uint8Array(t)),l=s.vkFormat===gd&&s.dataFormatDescriptor[0].colorModel===167;if(!(s.vkFormat===Qb||l&&!this.workerConfig.astcHDRSupported))return tT(s);const f=i,h=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:f},[t])).then(p=>this._createTextureFrom(p.data,s));return hh.set(t,{promise:h}),h}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),dh--}}Si.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Si.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Si.EngineFormat={RGBAFormat:Tn,RGBA_ASTC_4x4_Format:Hs,RGB_BPTC_UNSIGNED_Format:fu,RGBA_BPTC_Format:Vs,RGBA_ETC2_EAC_Format:ml,RGBA_PVRTC_4BPPV1_Format:cu,RGBA_S3TC_DXT5_Format:zs,RGB_ETC1_Format:uu,RGB_ETC2_Format:gl,RGB_PVRTC_4BPPV1_Format:lu,RGBA_S3TC_DXT1_Format:Gs};Si.EngineType={UnsignedByteType:sn,HalfFloatType:Ui,FloatType:ei};Si.BasisWorker=function(){let r,t,i;const s=_EngineFormat,l=_EngineType,c=_TranscoderFormat,f=_BasisFormat;self.addEventListener("message",function(C){const x=C.data;switch(x.type){case"init":r=x.config,h(x.transcoderBinary);break;case"transcode":t.then(()=>{try{const{faces:y,buffers:m,width:L,height:w,hasAlpha:T,format:P,type:O,dfdFlags:F}=p(x.buffer);self.postMessage({type:"transcode",id:x.id,data:{faces:y,width:L,height:w,hasAlpha:T,format:P,type:O,dfdFlags:F}},m)}catch(y){console.error(y),self.postMessage({type:"error",id:x.id,error:y.message})}});break}});function h(C){t=new Promise(x=>{i={wasmBinary:C,onRuntimeInitialized:x},BASIS(i)}).then(()=>{i.initializeBasis(),i.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function p(C){const x=new i.KTX2File(new Uint8Array(C));function y(){x.close(),x.delete()}if(!x.isValid())throw y(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let m;if(x.isUASTC())m=f.UASTC;else if(x.isETC1S())m=f.ETC1S;else if(x.isHDR())m=f.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const L=x.getWidth(),w=x.getHeight(),T=x.getLayers()||1,P=x.getLevels(),O=x.getFaces(),F=x.getHasAlpha(),H=x.getDFDFlags(),{transcoderFormat:R,engineFormat:b,engineType:U}=_(m,L,w,F);if(!L||!w||!P)throw y(),new Error("THREE.KTX2Loader:	Invalid texture");if(!x.startTranscoding())throw y(),new Error("THREE.KTX2Loader: .startTranscoding failed");const j=[],st=[];for(let rt=0;rt<O;rt++){const ct=[];for(let N=0;N<P;N++){const k=[];let Y,gt;for(let Z=0;Z<T;Z++){const pt=x.getImageLevelInfo(N,Z,rt);rt===0&&N===0&&Z===0&&(pt.origWidth%4!==0||pt.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),P>1?(Y=pt.origWidth,gt=pt.origHeight):(Y=pt.width,gt=pt.height);let vt=new Uint8Array(x.getImageTranscodedSizeInBytes(N,Z,0,R));const bt=x.transcodeImage(vt,N,Z,rt,R,0,-1,-1);if(U===l.HalfFloatType&&(vt=new Uint16Array(vt.buffer,vt.byteOffset,vt.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!bt)throw y(),new Error("THREE.KTX2Loader: .transcodeImage failed.");k.push(vt)}const D=v(k);ct.push({data:D,width:Y,height:gt}),st.push(D.buffer)}j.push({mipmaps:ct,width:L,height:w,format:b,type:U})}return y(),{faces:j,buffers:st,width:L,height:w,hasAlpha:F,dfdFlags:H,format:b,type:U}}const d=[{if:"astcSupported",basisFormat:[f.UASTC],transcoderFormat:[c.ASTC_4x4,c.ASTC_4x4],engineFormat:[s.RGBA_ASTC_4x4_Format,s.RGBA_ASTC_4x4_Format],engineType:[l.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.BC7_M5,c.BC7_M5],engineFormat:[s.RGBA_BPTC_Format,s.RGBA_BPTC_Format],engineType:[l.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.BC1,c.BC3],engineFormat:[s.RGBA_S3TC_DXT1_Format,s.RGBA_S3TC_DXT5_Format],engineType:[l.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.ETC1,c.ETC2],engineFormat:[s.RGB_ETC2_Format,s.RGBA_ETC2_EAC_Format],engineType:[l.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.ETC1],engineFormat:[s.RGB_ETC1_Format],engineType:[l.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.PVRTC1_4_RGB,c.PVRTC1_4_RGBA],engineFormat:[s.RGB_PVRTC_4BPPV1_Format,s.RGBA_PVRTC_4BPPV1_Format],engineType:[l.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[f.UASTC_HDR],transcoderFormat:[c.BC6H],engineFormat:[s.RGB_BPTC_UNSIGNED_Format],engineType:[l.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.RGBA32,c.RGBA32],engineFormat:[s.RGBAFormat,s.RGBAFormat],engineType:[l.UnsignedByteType,l.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[f.UASTC_HDR],transcoderFormat:[c.RGBA_HALF],engineFormat:[s.RGBAFormat],engineType:[l.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],g={[f.ETC1S]:d.filter(C=>C.basisFormat.includes(f.ETC1S)).sort((C,x)=>C.priorityUASTC-x.priorityUASTC),[f.UASTC]:d.filter(C=>C.basisFormat.includes(f.UASTC)).sort((C,x)=>C.priorityUASTC-x.priorityUASTC),[f.UASTC_HDR]:d.filter(C=>C.basisFormat.includes(f.UASTC_HDR)).sort((C,x)=>C.priorityHDR-x.priorityHDR)};function _(C,x,y,m){const L=g[C];for(let w=0;w<L.length;w++){const T=L[w];if(T.if&&!r[T.if]||!T.basisFormat.includes(C)||m&&T.transcoderFormat.length<2||T.needsPowerOfTwo&&!(E(x)&&E(y)))continue;const P=T.transcoderFormat[m?1:0],O=T.engineFormat[m?1:0],F=T.engineType[0];return{transcoderFormat:P,engineFormat:O,engineType:F}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function E(C){return C<=2?!0:(C&C-1)===0&&C!==0}function v(C){if(C.length===1)return C[0];let x=0;for(let L=0;L<C.length;L++){const w=C[L];x+=w.byteLength}const y=new Uint8Array(x);let m=0;for(let L=0;L<C.length;L++){const w=C[L];y.set(w,m),m+=w.byteLength}return y}};const $b=new Set([Tn,Ps,Ns]),gh={[u0]:Tn,[o0]:Tn,[i0]:Tn,[a0]:Tn,[c0]:Ps,[r0]:Ps,[e0]:Ps,[n0]:Ps,[l0]:Ns,[s0]:Ns,[t0]:Ns,[$E]:Ns,[f0]:gl,[A0]:ml,[gd]:Hs,[Xb]:Hs,[Yb]:Hs,[d0]:_l,[h0]:_l,[Fb]:Gs,[Ob]:Gs,[Nb]:jr,[Pb]:jr,[zb]:Zr,[Gb]:Zr,[Vb]:zs,[Hb]:zs,[qb]:Vs,[kb]:Vs},mh={[u0]:ei,[o0]:Ui,[i0]:sn,[a0]:sn,[c0]:ei,[r0]:Ui,[e0]:sn,[n0]:sn,[l0]:ei,[s0]:Ui,[t0]:sn,[$E]:sn,[f0]:sn,[A0]:sn,[gd]:Ui,[d0]:sn,[h0]:sn};async function tT(r){const{vkFormat:t}=r;if(gh[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let i;r.supercompressionScheme===cE&&(ph||(ph=new Promise(async c=>{const f=new Jb;await f.init(),c(f)})),i=await ph);const s=[];for(let c=0;c<r.levels.length;c++){const f=Math.max(1,r.pixelWidth>>c),h=Math.max(1,r.pixelHeight>>c),p=r.pixelDepth?Math.max(1,r.pixelDepth>>c):0,d=r.levels[c];let g;if(r.supercompressionScheme===Rb)g=d.levelData;else if(r.supercompressionScheme===cE)g=i.decode(d.levelData,d.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let _;mh[t]===ei?_=new Float32Array(g.buffer,g.byteOffset,g.byteLength/Float32Array.BYTES_PER_ELEMENT):mh[t]===Ui?_=new Uint16Array(g.buffer,g.byteOffset,g.byteLength/Uint16Array.BYTES_PER_ELEMENT):_=g,s.push({data:_,width:f,height:h,depth:p})}let l;if($b.has(gh[t]))l=r.pixelDepth===0?new nC(s[0].data,r.pixelWidth,r.pixelHeight):new TE(s[0].data,r.pixelWidth,r.pixelHeight,r.pixelDepth);else{if(r.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");l=new mu(s,r.pixelWidth,r.pixelHeight),l.minFilter=s.length===1?Fn:Ca,l.magFilter=Fn}return l.mipmaps=s,l.type=mh[t],l.format=gh[t],l.colorSpace=p0(r),l.needsUpdate=!0,Promise.resolve(l)}function p0(r){const t=r.dataFormatDescriptor[0];return t.colorPrimaries===Ub?t.transferFunction===uE?$n:Ji:t.colorPrimaries===Lb?t.transferFunction===uE?jb:Zb:(t.colorPrimaries===Db||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),qi)}function eT(r,t,i){const{tiles:s,diameter:l,luminosity:c}=r;if(!s)throw new Error("buildTiledSphere called without tiles config");const{columns:f,rows:h,tileSize:p,imageWidth:d,imageHeight:g,basePath:_,extension:E=".ktx2"}=s,v=new Fs;for(let C=0;C<h;C++)for(let x=0;x<f;x++){const y=Math.min(p,d-x*p),m=Math.min(p,g-C*p),L=x*p/d*Math.PI*2,w=y/d*Math.PI*2,T=C*p/g*Math.PI,P=m/g*Math.PI,O=Math.max(4,Math.round(64*(y/p))),F=Math.max(4,Math.round(64*(m/p))),H=new ao(l,O,F,L,w,T,P),R=H.getAttribute("uv");if(R&&R.array){const N=R.array;for(let k=1;k<N.length;k+=2)N[k]=1-N[k];R.needsUpdate=!0}const b=new GE,U=new qn(H,b);U.castShadow=!t,U.receiveShadow=!t,U.renderOrder=0;const j=String(C).padStart(2,"0"),st=String(x).padStart(2,"0"),ct=(r.tiles?.filenameOrder??"row_col")==="col_row"?`${_}_${st}_${j}${E}`:`${_}_${j}_${st}${E}`;i.loadAsync(ct).then(N=>{N.colorSpace=$n,(y!==p||m!==p)&&(N.generateMipmaps=!1,N.minFilter=Fn,N.magFilter=Fn,N.wrapS=Wi,N.wrapT=Wi,N.needsUpdate=!0),b.map=N,c&&(b.emissive.set(16777215),b.emissiveMap=N,b.emissiveIntensity=1),b.needsUpdate=!0}).catch(N=>{console.error(`[tiles] Failed to load ${ct}:`,N)}),v.add(U)}return v}function hE(r,t,i){const s=new Fs;let l=0;const c=(m,L,w,T=0)=>{const P=L,O=L*Math.sqrt(1-w*w),F=L*w;let H=P*Math.cos(m)-F,R=O*Math.sin(m);if(T!==0){const b=H*Math.cos(T)-R*Math.sin(T),U=H*Math.sin(T)+R*Math.cos(T);H=b,R=U}return{x:H,z:R}};let f=null;r.orbitalPath?.visible&&r.orbitRadius>0&&(f=((L=0,w,T=0,P="0x444444",O=.4,F=2,H=2048)=>{const R=[];for(let j=0;j<=H;j++){const st=j/H*Math.PI*2,{x:rt,z:ct}=c(st,w,L,T);R.push(rt,0,ct)}const b=new ZE;b.setPositions(R);const U=new pd({color:P,transparent:!0,opacity:O,linewidth:F});return U.resolution.set(window.innerWidth*2,window.innerHeight*2),new lE(b,U)})(r.eccentricity||0,r.orbitRadius,r.ellipseRotation||0,r.orbitalPath?.color||"0x444444",r.orbitalPath?.opacity||.4,r.orbitalPath?.lineWidth||2),r.orbitalInclination&&(f.rotation.x-=r.orbitalInclination),s.add(f));let h;if(r.tiles&&i)h=eT(r,r.systemId==="solSystem",i);else{const m=new ao(r.diameter,64,64),L=new GE,w=new qn(m,L);if(r.texture)if(r.texture.endsWith(".ktx2")&&!!i){const P=m.getAttribute("uv");if(P&&P.array){const O=P.array;for(let F=1;F<O.length;F+=2)O[F]=1-O[F];P.needsUpdate=!0}i.load(r.texture,O=>{O.colorSpace=Ji,L.map=O,r.luminosity&&(L.emissive.set(16777215),L.emissiveMap=O,L.emissiveIntensity=1),L.needsUpdate=!0},void 0,O=>console.error(`[ktx2] Failed to load ${r.texture}:`,O))}else{const P=new zE().load(r.texture);P.colorSpace=Ji,L.map=P,r.luminosity&&(L.emissive.set(16777215),L.emissiveMap=P,L.emissiveIntensity=1),L.needsUpdate=!0}r.systemId==="solSystem"?(w.castShadow=!1,w.receiveShadow=!1):(w.castShadow=!0,w.receiveShadow=!0),h=w}if(h.position.set(r.orbitRadius,0,0),r.axialTilt&&(h.rotation.x=r.axialTilt),h.renderOrder=0,s.add(h),r.luminosity){const m=new gC(16777215,15,1e15,.2);m.castShadow=!1,m.shadow.camera.far=2e9,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.position.copy(h.position),s.add(m)}let p=null;if(r.billboard){const m=Math.max(.2,r.billboard.scaleFactor*r.diameter),L=new ao(m,64,64),w=new gu({color:new Ce(r.billboard.color),transparent:!0,opacity:.04,depthWrite:!1,side:ki});p=new qn(L,w);const T=new Zi({uniforms:{color:{value:new Ce(r.billboard.color)},rimPower:{value:2},rimStrength:{value:1}},vertexShader:`
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

      vNormal = normalize(normalMatrix * normal);
      vViewDir = normalize(-mvPosition.xyz);

      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform vec3 color;
    uniform float rimPower;
    uniform float rimStrength;

    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      float rim = 1.0 - max(dot(vNormal, vViewDir), 0.0);
      rim = pow(rim, rimPower);

      float alpha = rim * rimStrength;

      // hard clamp so interior stays invisible
      alpha = smoothstep(0.4, 1.0, alpha);

      if (alpha < 0.01) discard;

      gl_FragColor = vec4(color, alpha);
    }
  `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Os}),P=new qn(L,T);P.renderOrder=1e3,p.renderOrder=999,p.add(P),p.position.copy(h.position),s.add(p)}const d=[];t&&t.forEach(m=>{const L=m();d.push(L),L.userData.parentSystemId=r.systemId,s.add(L)});const g=r.cameraDistance||r.diameter*10+.5,_=new X(g,g*.3,g*.5),E=r.orbitalInclination||0,v=Math.sin(l)*r.orbitRadius,C=E!==0?v*Math.sin(E):0,x=new X(r.orbitRadius,C,0),y=(m,L)=>{const w=r.rotationalPeriod??1,T=du.getMultiplier(),P=xb*T;w!==0&&(h.rotation.y+=P/w);let O,F;if(w===0)O=r.orbitRadius,F=0;else{const R=r.orbitalPeriod||365.25;if(l-=P/R,r.eccentricity&&m){const{x:b,z:U}=c(l,r.orbitRadius,r.eccentricity,r.ellipseRotation||0),j=r.orbitalInclination||0;let st=b,rt=U,ct=0;j!==0&&(rt=U*Math.cos(j),ct=U*Math.sin(j)),O=m.x+st,F=m.z+rt,h.position.y=m.y+ct}else if(m){const b=Math.cos(l)*r.orbitRadius,U=Math.sin(l)*r.orbitRadius,j=r.orbitalInclination||0;j!==0?(O=m.x+b,F=m.z+U*Math.cos(j),h.position.y=m.y+U*Math.sin(j)):(O=m.x+b,F=m.z+U,h.position.y=m.y)}else{const b=Math.cos(l)*r.orbitRadius,U=Math.sin(l)*r.orbitRadius,j=r.orbitalInclination||0;if(j!==0){O=b,F=U*Math.cos(j);const st=U*Math.sin(j);h.position.y=st}else O=b,F=U}}const H=h.position.y;if(h.position.set(O,H,F),x.set(O,H,F),p){p.position.set(O,H,F);const R=L===r.systemId,b=d.some(U=>U.userData.systemId===L);p.visible=!R&&!b}d.forEach(R=>{R&&R.userData.animate&&(R.userData.animate(h.position,L),R.children&&R.children.forEach(b=>{b instanceof lE&&b.position.copy(h.position)}))}),m&&f&&f.position.copy(m)};return s.userData={cameraOffset:_,systemId:r.systemId,animate:y,mesh:h,planetarySystemSphere:p,childSystems:d,parentSystemId:null,shadowRadius:r.shadowRadius??r.diameter},s}const Xe=20,nT={diameter:.2727,orbitRadius:30,eccentricity:.0549,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:27.3,rotationalPeriod:27.3,orbitalInclination:Math.PI*(5.145/180),ellipseRotation:Math.PI*.025,systemId:"lunaSystem"},iT={diameter:.00174,orbitRadius:.735,eccentricity:.01,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:1,scaleFactor:250},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:.3191,rotationalPeriod:.3191,systemId:"phobosSystem",orbitalInclination:Math.PI*(1.093/180),ellipseRotation:Math.PI*.025},aT={diameter:99e-5,orbitRadius:1.84,eccentricity:24e-5,sprite:{color:"transparent",borderColor:"grey",opacity:1,scaleFactor:250},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},texture:"solarimages/2k_mercury.jpg",orbitalPeriod:1.2624,rotationalPeriod:1.2624,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(1.8/180),systemId:"deimosSystem"},sT={diameter:.2859,orbitRadius:33.1,eccentricity:.0041,sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},texture:"solarimages/2k_mercury.jpg",orbitalPeriod:1.769,rotationalPeriod:1.769,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.05/180),systemId:"ioSystem"},rT={diameter:.245,orbitRadius:52.7,eccentricity:.009,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:3.551,rotationalPeriod:3.551,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.47/180),systemId:"europaSystem"},oT={diameter:.4134,orbitRadius:84,eccentricity:.0013,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:7.155,rotationalPeriod:7.155,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.2/180),systemId:"ganymedeSystem"},lT={diameter:.3784,orbitRadius:147.8,eccentricity:.0074,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:16.689,rotationalPeriod:16.689,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.192/180),systemId:"callistoSystem"},cT={diameter:.031,orbitRadius:14.56,eccentricity:.0196,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:.942,rotationalPeriod:.942,orbitalInclination:Math.PI*(1.574/180),ellipseRotation:Math.PI*.025,systemId:"mimasSystem"},uT={diameter:.0396,orbitRadius:18.68,eccentricity:.0047,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.37,rotationalPeriod:1.37,orbitalInclination:Math.PI*(.009/180),ellipseRotation:Math.PI*.025,systemId:"enceladusSystem"},fT={diameter:.0833,orbitRadius:23.13,eccentricity:1e-4,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.888,rotationalPeriod:1.888,orbitalInclination:Math.PI*(1.12/180),ellipseRotation:Math.PI*.025,systemId:"tethysSystem"},AT={diameter:.0881,orbitRadius:29.62,eccentricity:.0022,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:2.737,rotationalPeriod:2.737,orbitalInclination:Math.PI*(.028/180),ellipseRotation:Math.PI*.025,systemId:"dioneSystem"},hT={diameter:.1198,orbitRadius:41.36,eccentricity:.001,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:4.518,rotationalPeriod:4.518,orbitalInclination:Math.PI*(.327/180),ellipseRotation:Math.PI*.025,systemId:"rheaSystem"},dT={diameter:.4041,orbitRadius:95.89,eccentricity:.0288,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:15.945,rotationalPeriod:15.945,orbitalInclination:Math.PI*(.34/180),ellipseRotation:Math.PI*.025,systemId:"titanSystem"},pT={diameter:.0212,orbitRadius:116.2,eccentricity:.123,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:21.276,rotationalPeriod:21.276,orbitalInclination:Math.PI*(.43/180),ellipseRotation:Math.PI*.025,systemId:"hyperionSystem"},gT={diameter:.1153,orbitRadius:279.5,eccentricity:.0286,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:79.32,rotationalPeriod:79.32,orbitalInclination:Math.PI*(15.47/180),ellipseRotation:Math.PI*.025,systemId:"iapetusSystem"},mT={diameter:.0167,orbitRadius:1016.7,eccentricity:.163,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:550.31,rotationalPeriod:.387,orbitalInclination:Math.PI*(175.3/180),ellipseRotation:Math.PI*.025,systemId:"phoebeSystem"},_T={diameter:.037,orbitRadius:10.19,eccentricity:.0013,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.413,rotationalPeriod:1.413,orbitalInclination:Math.PI*(4.34/180),ellipseRotation:Math.PI*.025,systemId:"mirandaSystem"},ET={diameter:.0908,orbitRadius:14.99,eccentricity:.0012,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:2.52,rotationalPeriod:2.52,orbitalInclination:Math.PI*(.04/180),ellipseRotation:Math.PI*.025,systemId:"arielSystem"},vT={diameter:.0917,orbitRadius:20.87,eccentricity:.0039,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:4.144,rotationalPeriod:4.144,orbitalInclination:Math.PI*(.128/180),ellipseRotation:Math.PI*.025,systemId:"umbrielSystem"},yT={diameter:.1237,orbitRadius:34.21,eccentricity:.0011,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:8.706,rotationalPeriod:8.706,orbitalInclination:Math.PI*(.079/180),ellipseRotation:Math.PI*.025,systemId:"titaniaSystem"},ST={diameter:.1195,orbitRadius:45.73,eccentricity:.0014,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:13.46,rotationalPeriod:13.46,orbitalInclination:Math.PI*(.068/180),ellipseRotation:Math.PI*.025,systemId:"oberonSystem"},CT={diameter:.033,orbitRadius:9.23,eccentricity:5e-4,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.122,rotationalPeriod:1.122,orbitalInclination:Math.PI*(.026/180),ellipseRotation:Math.PI*.025,systemId:"proteusSystem"},xT={diameter:.2124,orbitRadius:27.85,eccentricity:16e-6,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:5.877,rotationalPeriod:5.877,orbitalInclination:Math.PI*(156.885/180),ellipseRotation:Math.PI*.025,systemId:"tritonSystem"},MT={diameter:.0267,orbitRadius:432.8,eccentricity:.7512,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:360.13,rotationalPeriod:.48,orbitalInclination:Math.PI*(7.23/180),ellipseRotation:Math.PI*.025,systemId:"nereidSystem"},IT=[nT],BT=[iT,aT],bT=[sT,rT,oT,lT],TT=[cT,uT,fT,AT,hT,dT,pT,gT,mT],RT=[_T,ET,vT,yT,ST],wT=[CT,xT,MT],cs=1e3,DT={diameter:109,orbitRadius:0,texture:"solarimages/4k_sun.jpg",systemId:"solSystem",axialTilt:Math.PI*(1e-5/180),luminosity:1e3,orbitalPeriod:0,rotationalPeriod:0,orbitalInclination:0,shadowRadius:120},UT={diameter:.383,orbitRadius:4545,axialTilt:Math.PI*(.03/180),texture:"solarimages/2k_mercury.jpg",billboard:{color:"lightgrey",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"lightgrey",opacity:.8,lineWidth:2},orbitalPeriod:88,rotationalPeriod:58.65,orbitalInclination:Math.PI*(7.01/180),systemId:"mercurySystem",shadowRadius:1},LT={diameter:.949,orbitRadius:8476,axialTilt:Math.PI*(177.4/180),texture:"solarimages/2k_venus_atmosphere.jpg",billboard:{color:"yellow",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"yellow",opacity:.8,lineWidth:2},orbitalPeriod:224.7,rotationalPeriod:243,orbitalInclination:Math.PI*(3.39/180),systemId:"venusSystem",shadowRadius:1.5},QT={diameter:1,orbitRadius:11740,axialTilt:Math.PI*(23.4/180),tiles:{columns:11,rows:6,tileSize:4096,imageWidth:43200,imageHeight:21600,basePath:"solarimages/earth/tile",extension:".ktx2",filenameOrder:"col_row"},billboard:{color:"#87CEEB",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"#87CEEB",opacity:.8,lineWidth:2},orbitalPeriod:365.25,rotationalPeriod:1,orbitalInclination:0,systemId:"earthSystem",shadowRadius:40},NT={diameter:.53,orbitRadius:17891,axialTilt:Math.PI*(25.2/180),texture:"solarimages/2k_mars.jpg",billboard:{color:"orange",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"orange",opacity:.8,lineWidth:2},orbitalPeriod:687,rotationalPeriod:1.03,orbitalInclination:Math.PI*(1.85/180),systemId:"marsSystem",shadowRadius:4},PT={diameter:11.209,orbitRadius:47300,axialTilt:Math.PI*(3.13/180),texture:"solarimages/2k_jupiter.jpg",billboard:{color:"orange",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"orange",opacity:.8,lineWidth:2},orbitalPeriod:4332.6,rotationalPeriod:.41,orbitalInclination:Math.PI*(1.31/180),systemId:"jupiterSystem",shadowRadius:30},FT={diameter:9.45,orbitRadius:77830,axialTilt:Math.PI*(26.73/180),texture:"solarimages/2k_saturn.jpg",billboard:{color:"beige",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"beige",opacity:.8,lineWidth:2},orbitalPeriod:10759,rotationalPeriod:.72,orbitalInclination:Math.PI*(2.49/180),systemId:"saturnSystem",shadowRadius:12},OT={diameter:4.01,orbitRadius:118600,axialTilt:Math.PI*(97.77/180),texture:"solarimages/2k_uranus.jpg",billboard:{color:"lightgreen",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"lightgreen",opacity:.8,lineWidth:2},orbitalPeriod:30687,rotationalPeriod:1.0274,orbitalInclination:Math.PI*(.77/180),systemId:"uranusSystem",shadowRadius:6},GT={diameter:3.88,orbitRadius:142900,axialTilt:Math.PI*(28.32/180),texture:"solarimages/2k_neptune.jpg",billboard:{color:"lightblue",opacity:.6,scaleFactor:cs},orbitalPath:{visible:!0,color:"lightblue",opacity:.8,lineWidth:2},orbitalPeriod:60190,rotationalPeriod:.67,orbitalInclination:Math.PI*(1.77/180),systemId:"neptuneSystem",shadowRadius:6},zT=[{config:DT,moons:[]},{config:UT,moons:[]},{config:LT,moons:[]},{config:QT,moons:IT},{config:NT,moons:BT},{config:PT,moons:bT},{config:FT,moons:TT},{config:OT,moons:RT},{config:GT,moons:wT}];function HT(){const[r,t]=Mb(),i=s=>nE.find(c=>c.value===s)?.label||`${s}x`;return Xi.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",zIndex:1e3,color:"white",fontFamily:"Arial, sans-serif"},children:[Xi.jsxs("label",{htmlFor:"speed-control",style:{display:"block",marginBottom:"5px"},children:["Time Speed: ",i(r)]}),Xi.jsx("select",{id:"speed-control",value:r,onChange:s=>{const l=s.target;t(Number(l.value))},style:{padding:"5px",fontSize:"14px",backgroundColor:"#333",color:"white",border:"1px solid #555",borderRadius:"4px"},children:nE.map(({value:s,description:l})=>Xi.jsx("option",{value:s,children:l},s))})]})}function VT(){const r=is.useRef(null),t=is.useRef(null),i=is.useRef(null),s=is.useRef([]);return is.useEffect(()=>{let l;if(!r.current)return;const c=new FE,f=new fi(60,window.innerWidth/window.innerHeight,.01,999999999);f.position.set(-8e3,2500,4e3);const h=new lb({canvas:r.current,antialias:!0});h.setPixelRatio(window.devicePixelRatio),h.setSize(window.innerWidth,window.innerHeight),h.outputColorSpace=Ji,h.shadowMap.enabled=!0,h.shadowMap.type=pE;const p=new Si().setTranscoderPath("/sol-system/basis/");p.detectSupport(h);const d=new ub(f,h.domElement);d.enableDamping=!0,d.dampingFactor=.05,d.update();const g=Cb();c.add(g);const _=zT.map(({config:F,moons:H})=>hE(F,H.map(R=>()=>hE(R,void 0,p)),p)),E=F=>{F.userData.childSystems&&F.userData.childSystems.forEach(H=>{_.push(H),H.userData.parentSystemId=F.userData.systemId,E(H)})};_.slice().forEach(E),s.current=_,_.forEach(F=>c.add(F));const v=F=>{const H=[],R=b=>{H.push(b),b.children.forEach(U=>{U instanceof Fs&&U.userData.systemId&&R(U)})};return F.forEach(R),H},C=F=>{const H=v(s.current);console.log(H);const R=80,b=t.current,U=H.filter(rt=>b&&!b.userData.parentSystemId?rt.userData.parentSystemId===b.userData.systemId||rt===b:!rt.userData.parentSystemId);let j=null,st=1/0;for(const rt of U){if(!rt.userData.mesh)continue;const N=rt.userData.mesh.position.clone().project(f),k=(N.x*.5+.5)*window.innerWidth,Y=(-N.y*.5+.5)*window.innerHeight,gt=k-F.clientX,D=Y-F.clientY,Z=Math.sqrt(gt*gt+D*D);Z<=st&&(st=Z,j=rt)}if(j&&st<=R){const rt=j.userData.mesh.position,ct=j.userData.cameraOffset;f.position.copy(rt).add(ct),d.target.copy(rt),t.current=j,i.current=rt.clone();return}t.current=null,i.current=null};h.domElement.addEventListener("dblclick",C);let x=0;const m=1e3/60,L=new EC(16777215,10);c.add(L);const w=new _C(16777215,2);w.castShadow=!0,w.shadow.mapSize.width=8192,w.shadow.mapSize.height=8192,w.visible=!1;const T=new wn;c.add(T),w.target=T,c.add(w);const P=new X,O=(F=0)=>{if(F-x<m){l=requestAnimationFrame(O);return}x=F;const H=t.current?.userData.systemId;s.current.forEach(b=>{if(b.userData.animate){let U;if(b.userData.parentSystemId){const j=s.current.find(st=>st.userData.systemId===b.userData.parentSystemId);j&&j.userData.mesh&&(U=j.userData.mesh.position)}b.userData.animate(U,H)}});const R=t.current;if(R&&R.userData.mesh){const b=R.userData.mesh.position,U=i.current;if(U){const j=b.clone().sub(U);f.position.add(j),d.target.add(j)}i.current=b.clone()}if(R&&R.userData.mesh){const b=R.userData.mesh.position,U=R.userData.shadowRadius??5,j=1e3;P.copy(b).negate().normalize(),w.position.copy(b).addScaledVector(P,j),T.position.copy(b),T.updateMatrixWorld(),w.shadow.camera.left=-U,w.shadow.camera.right=U,w.shadow.camera.top=U,w.shadow.camera.bottom=-U,w.shadow.camera.near=j-U-50,w.shadow.camera.far=j+U+50,w.shadow.camera.updateProjectionMatrix(),w.visible=!0}else w.visible=!1;d.update(),h.render(c,f),l=requestAnimationFrame(O)};return O(),()=>{h.domElement.removeEventListener("dblclick",C),cancelAnimationFrame(l),_.forEach(F=>c.remove(F)),c.remove(g),c.remove(w),c.remove(T),h.dispose()}},[]),Xi.jsxs(Xi.Fragment,{children:[Xi.jsx("canvas",{ref:r,id:"bg"}),Xi.jsx(HT,{})]})}by.createRoot(document.getElementById("root")).render(Xi.jsx(is.StrictMode,{children:Xi.jsx(VT,{})}));
