(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var CA={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function By(){if(Xm)return el;Xm=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return el.Fragment=t,el.jsx=i,el.jsxs=i,el}var Wm;function by(){return Wm||(Wm=1,CA.exports=By()),CA.exports}var Fn=by(),xA={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function Ty(){if(Km)return le;Km=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function y(D,j,gt){this.props=D,this.context=j,this.refs=x,this.updater=gt||v}y.prototype.isReactComponent={},y.prototype.setState=function(D,j){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,j,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function m(){}m.prototype=y.prototype;function L(D,j,gt){this.props=D,this.context=j,this.refs=x,this.updater=gt||v}var w=L.prototype=new m;w.constructor=L,C(w,y.prototype),w.isPureReactComponent=!0;var b=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function O(D,j,gt,vt,bt,it){return gt=it.ref,{$$typeof:r,type:D,key:j,ref:gt!==void 0?gt:null,props:it}}function q(D,j){return O(D.type,j,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function T(D){var j={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(gt){return j[gt]})}var P=/\/+/g;function Z(D,j){return typeof D=="object"&&D!==null&&D.key!=null?T(""+D.key):j.toString(36)}function st(){}function lt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(st,st):(D.status="pending",D.then(function(j){D.status==="pending"&&(D.status="fulfilled",D.value=j)},function(j){D.status==="pending"&&(D.status="rejected",D.reason=j)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ct(D,j,gt,vt,bt){var it=typeof D;(it==="undefined"||it==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(it){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case r:case t:dt=!0;break;case g:return dt=D._init,ct(dt(D._payload),j,gt,vt,bt)}}if(dt)return bt=bt(D),dt=vt===""?"."+Z(D,0):vt,b(bt)?(gt="",dt!=null&&(gt=dt.replace(P,"$&/")+"/"),ct(bt,j,gt,"",function(Yt){return Yt})):bt!=null&&(R(bt)&&(bt=q(bt,gt+(bt.key==null||D&&D.key===bt.key?"":(""+bt.key).replace(P,"$&/")+"/")+dt)),j.push(bt)),1;dt=0;var yt=vt===""?".":vt+":";if(b(D))for(var Lt=0;Lt<D.length;Lt++)vt=D[Lt],it=yt+Z(vt,Lt),dt+=ct(vt,j,gt,it,bt);else if(Lt=E(D),typeof Lt=="function")for(D=Lt.call(D),Lt=0;!(vt=D.next()).done;)vt=vt.value,it=yt+Z(vt,Lt++),dt+=ct(vt,j,gt,it,bt);else if(it==="object"){if(typeof D.then=="function")return ct(lt(D),j,gt,vt,bt);throw j=String(D),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return dt}function U(D,j,gt){if(D==null)return D;var vt=[],bt=0;return ct(D,vt,"","",function(it){return j.call(gt,it,bt++)}),vt}function z(D){if(D._status===-1){var j=D._result;j=j(),j.then(function(gt){(D._status===0||D._status===-1)&&(D._status=1,D._result=gt)},function(gt){(D._status===0||D._status===-1)&&(D._status=2,D._result=gt)}),D._status===-1&&(D._status=0,D._result=j)}if(D._status===1)return D._result.default;throw D._result}var V=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ht(){}return le.Children={map:U,forEach:function(D,j,gt){U(D,function(){j.apply(this,arguments)},gt)},count:function(D){var j=0;return U(D,function(){j++}),j},toArray:function(D){return U(D,function(j){return j})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=L,le.StrictMode=s,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return N.H.useMemoCache(D)}},le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cloneElement=function(D,j,gt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var vt=C({},D.props),bt=D.key,it=void 0;if(j!=null)for(dt in j.ref!==void 0&&(it=void 0),j.key!==void 0&&(bt=""+j.key),j)!F.call(j,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&j.ref===void 0||(vt[dt]=j[dt]);var dt=arguments.length-2;if(dt===1)vt.children=gt;else if(1<dt){for(var yt=Array(dt),Lt=0;Lt<dt;Lt++)yt[Lt]=arguments[Lt+2];vt.children=yt}return O(D.type,bt,void 0,void 0,it,vt)},le.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},le.createElement=function(D,j,gt){var vt,bt={},it=null;if(j!=null)for(vt in j.key!==void 0&&(it=""+j.key),j)F.call(j,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(bt[vt]=j[vt]);var dt=arguments.length-2;if(dt===1)bt.children=gt;else if(1<dt){for(var yt=Array(dt),Lt=0;Lt<dt;Lt++)yt[Lt]=arguments[Lt+2];bt.children=yt}if(D&&D.defaultProps)for(vt in dt=D.defaultProps,dt)bt[vt]===void 0&&(bt[vt]=dt[vt]);return O(D,it,void 0,void 0,null,bt)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:h,render:D}},le.isValidElement=R,le.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:z}},le.memo=function(D,j){return{$$typeof:d,type:D,compare:j===void 0?null:j}},le.startTransition=function(D){var j=N.T,gt={};N.T=gt;try{var vt=D(),bt=N.S;bt!==null&&bt(gt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(ht,V)}catch(it){V(it)}finally{N.T=j}},le.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},le.use=function(D){return N.H.use(D)},le.useActionState=function(D,j,gt){return N.H.useActionState(D,j,gt)},le.useCallback=function(D,j){return N.H.useCallback(D,j)},le.useContext=function(D){return N.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,j){return N.H.useDeferredValue(D,j)},le.useEffect=function(D,j,gt){var vt=N.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(D,j)},le.useId=function(){return N.H.useId()},le.useImperativeHandle=function(D,j,gt){return N.H.useImperativeHandle(D,j,gt)},le.useInsertionEffect=function(D,j){return N.H.useInsertionEffect(D,j)},le.useLayoutEffect=function(D,j){return N.H.useLayoutEffect(D,j)},le.useMemo=function(D,j){return N.H.useMemo(D,j)},le.useOptimistic=function(D,j){return N.H.useOptimistic(D,j)},le.useReducer=function(D,j,gt){return N.H.useReducer(D,j,gt)},le.useRef=function(D){return N.H.useRef(D)},le.useState=function(D){return N.H.useState(D)},le.useSyncExternalStore=function(D,j,gt){return N.H.useSyncExternalStore(D,j,gt)},le.useTransition=function(){return N.H.useTransition()},le.version="19.1.1",le}var Jm;function id(){return Jm||(Jm=1,xA.exports=Ty()),xA.exports}var ti=id(),MA={exports:{}},nl={},IA={exports:{}},BA={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Ry(){return jm||(jm=1,function(r){function t(U,z){var V=U.length;U.push(z);t:for(;0<V;){var ht=V-1>>>1,D=U[ht];if(0<l(D,z))U[ht]=z,U[V]=D,V=ht;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var z=U[0],V=U.pop();if(V!==z){U[0]=V;t:for(var ht=0,D=U.length,j=D>>>1;ht<j;){var gt=2*(ht+1)-1,vt=U[gt],bt=gt+1,it=U[bt];if(0>l(vt,V))bt<D&&0>l(it,vt)?(U[ht]=it,U[bt]=V,ht=bt):(U[ht]=vt,U[gt]=V,ht=gt);else if(bt<D&&0>l(it,V))U[ht]=it,U[bt]=V,ht=bt;else break t}}return z}function l(U,z){var V=U.sortIndex-z.sortIndex;return V!==0?V:U.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],d=[],g=1,_=null,E=3,v=!1,C=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function b(U){for(var z=i(d);z!==null;){if(z.callback===null)s(d);else if(z.startTime<=U)s(d),z.sortIndex=z.expirationTime,t(p,z);else break;z=i(d)}}function N(U){if(x=!1,b(U),!C)if(i(p)!==null)C=!0,F||(F=!0,Z());else{var z=i(d);z!==null&&ct(N,z.startTime-U)}}var F=!1,O=-1,q=5,R=-1;function T(){return y?!0:!(r.unstable_now()-R<q)}function P(){if(y=!1,F){var U=r.unstable_now();R=U;var z=!0;try{t:{C=!1,x&&(x=!1,L(O),O=-1),v=!0;var V=E;try{e:{for(b(U),_=i(p);_!==null&&!(_.expirationTime>U&&T());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,E=_.priorityLevel;var D=ht(_.expirationTime<=U);if(U=r.unstable_now(),typeof D=="function"){_.callback=D,b(U),z=!0;break e}_===i(p)&&s(p),b(U)}else s(p);_=i(p)}if(_!==null)z=!0;else{var j=i(d);j!==null&&ct(N,j.startTime-U),z=!1}}break t}finally{_=null,E=V,v=!1}z=void 0}}finally{z?Z():F=!1}}}var Z;if(typeof w=="function")Z=function(){w(P)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,lt=st.port2;st.port1.onmessage=P,Z=function(){lt.postMessage(null)}}else Z=function(){m(P,0)};function ct(U,z){O=m(function(){U(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(U){switch(E){case 1:case 2:case 3:var z=3;break;default:z=E}var V=E;E=z;try{return U()}finally{E=V}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var V=E;E=U;try{return z()}finally{E=V}},r.unstable_scheduleCallback=function(U,z,V){var ht=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ht+V:ht):V=ht,U){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=V+D,U={id:g++,callback:z,priorityLevel:U,startTime:V,expirationTime:D,sortIndex:-1},V>ht?(U.sortIndex=V,t(d,U),i(p)===null&&U===i(d)&&(x?(L(O),O=-1):x=!0,ct(N,V-ht))):(U.sortIndex=D,t(p,U),C||v||(C=!0,F||(F=!0,Z()))),U},r.unstable_shouldYield=T,r.unstable_wrapCallback=function(U){var z=E;return function(){var V=E;E=z;try{return U.apply(this,arguments)}finally{E=V}}}}(BA)),BA}var Zm;function wy(){return Zm||(Zm=1,IA.exports=Ry()),IA.exports}var bA={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function Dy(){if($m)return Qn;$m=1;var r=id();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Qn.flushSync=function(p){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=d,s.p=g,s.d.f()}},Qn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},Qn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Qn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),E=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:E,fetchPriority:v}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:E,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Qn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},Qn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Qn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},Qn.requestFormReset=function(p){s.d.r(p)},Qn.unstable_batchedUpdates=function(p,d){return p(d)},Qn.useFormState=function(p,d,g){return f.H.useFormState(p,d,g)},Qn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qn.version="19.1.1",Qn}var t_;function Uy(){if(t_)return bA.exports;t_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bA.exports=Dy(),bA.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function Ly(){if(e_)return nl;e_=1;var r=wy(),t=id(),i=Uy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var A=u.alternate;if(A===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===A.child){for(A=u.child;A;){if(A===a)return h(u),e;if(A===o)return h(u),n;A=A.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=A;else{for(var S=!1,I=u.child;I;){if(I===a){S=!0,a=u,o=A;break}if(I===o){S=!0,o=u,a=A;break}I=I.sibling}if(!S){for(I=A.child;I;){if(I===a){S=!0,a=A,o=u;break}if(I===o){S=!0,o=A,a=u;break}I=I.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case w:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case b:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var ct=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ht=[],D=-1;function j(e){return{current:e}}function gt(e){0>D||(e.current=ht[D],ht[D]=null,D--)}function vt(e,n){D++,ht[D]=e.current,e.current=n}var bt=j(null),it=j(null),dt=j(null),yt=j(null);function Lt(e,n){switch(vt(dt,n),vt(it,e),vt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ym(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ym(n),e=Sm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gt(bt),vt(bt,e)}function Yt(){gt(bt),gt(it),gt(dt)}function ne(e){e.memoizedState!==null&&vt(yt,e);var n=bt.current,a=Sm(n,e.type);n!==a&&(vt(it,e),vt(bt,a))}function ze(e){it.current===e&&(gt(bt),gt(it)),yt.current===e&&(gt(yt),Jo._currentValue=V)}var pe=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,be=r.unstable_cancelCallback,Jt=r.unstable_shouldYield,ve=r.unstable_requestPaint,Ft=r.unstable_now,He=r.unstable_getCurrentPriorityLevel,Ot=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,We=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,Q=r.unstable_IdlePriority,M=r.log,et=r.unstable_setDisableYieldValue,ft=null,Et=null;function ut(e){if(typeof M=="function"&&et(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(ft,e)}catch{}}var Qt=Math.clz32?Math.clz32:qt,It=Math.log,kt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(It(e)/kt|0)|0}var St=256,Dt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,A=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var I=o&134217727;return I!==0?(o=I&~A,o!==0?u=Wt(o):(S&=I,S!==0?u=Wt(S):a||(a=I&~e,a!==0&&(u=Wt(a))))):(I=o&~A,I!==0?u=Wt(I):S!==0?u=Wt(S):a||(a=o&~e,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&A)===0&&(A=u&-u,a=n&-n,A>=a||A===32&&(a&4194048)!==0)?n:u}function Tt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Mt(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,n,a,o,u,A){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var I=e.entanglements,G=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var At=31-Qt(a),mt=1<<At;I[At]=0,G[At]=-1;var nt=tt[At];if(nt!==null)for(tt[At]=null,At=0;At<nt.length;At++){var at=nt[At];at!==null&&(at.lane&=-536870913)}a&=~mt}o!==0&&_t(e,o,0),A!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=A&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:zm(e.type))}function Mi(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,Ze="__reactProps$"+un,Fi="__reactContainer$"+un,Js="__reactEvents$"+un,Il="__reactListeners$"+un,js="__reactHandles$"+un,oo="__reactResources$"+un,Oi="__reactMarker$"+un;function Zs(e){delete e[fn],delete e[Ze],delete e[Js],delete e[Il],delete e[js]}function ea(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Im(e);e!==null;){if(a=e[fn])return a;e=Im(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[fn]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function fs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[oo];return n||(n=e[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Oi]=!0}var Bl=new Set,bl={};function B(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(bl[e]=n,e=0;e<n.length;e++)Bl.add(n[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},J={};function xt(e){return pe.call(J,e)?!0:pe.call(ot,e)?!1:rt.test(e)?J[e]=!0:(ot[e]=!0,!1)}function wt(e,n,a){if(xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ut(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var jt,$t;function Vt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+$t}var ue=!1;function xe(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var nt=at}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(at){nt=at}e.call(mt.prototype)}}else{try{throw Error()}catch(at){nt=at}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var A=o.DetermineComponentFrameRoot(),S=A[0],I=A[1];if(S&&I){var G=S.split(`
`),tt=I.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===tt.length)for(o=G.length-1,u=tt.length-1;1<=o&&0<=u&&G[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==tt[u]){var At=`
`+G[o].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Vt(a):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return Vt("Activity");default:return""}}function Ue(e){try{var n="";do n+=qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ve(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,A=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,A.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Ve(e))}function Dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function mn(e){return e.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(e,n,a,o,u,A,S,I){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Un(e,S,fe(n)):a!=null?Un(e,S,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&A!=null&&(e.defaultChecked=!!A),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),I!=null&&typeof I!="function"&&typeof I!="symbol"&&typeof I!="boolean"?e.name=""+fe(I):e.removeAttribute("name")}function zn(e,n,a,o,u,A,S,I){if(A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(e.type=A),n!=null||a!=null){if(!(A!=="submit"&&A!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,I||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=I?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Un(e,n,a){n==="number"&&Ii(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function $s(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Wn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var x0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||x0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&yd(e,u,o)}else for(var A in n)n.hasOwnProperty(A)&&yd(e,A,n[A])}function yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return I0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Su=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,er=null;function Cd(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[Ze]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ze]||null;if(!u)throw Error(s(90));Oe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Dn(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var xu=!1;function xd(e,n,a){if(xu)return e(n,a);xu=!0;try{var o=e(n);return o}finally{if(xu=!1,(tr!==null||er!==null)&&(dc(),tr&&(n=tr,e=er,er=tr=null,Cd(n),e)))for(n=0;n<e.length;n++)Cd(e[n])}}function lo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ze]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(na)try{var co={};Object.defineProperty(co,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Mu=!1}var Ra=null,Iu=null,Rl=null;function Md(){if(Rl)return Rl;var e,n=Iu,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,A=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[A-o];o++);return Rl=u.slice(e,1<o?1-o:void 0)}function wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function Id(){return!1}function Kn(e){function n(a,o,u,A,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=A,this.target=S,this.currentTarget=null;for(var I in e)e.hasOwnProperty(I)&&(a=e[I],this[I]=a?a(A):A[I]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?Dl:Id,this.isPropagationStopped=Id,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Kn(As),uo=g({},As,{view:0,detail:0}),B0=Kn(uo),Bu,bu,fo,Ll=g({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(Bu=e.screenX-fo.screenX,bu=e.screenY-fo.screenY):bu=Bu=0,fo=e),Bu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Bd=Kn(Ll),b0=g({},Ll,{dataTransfer:0}),T0=Kn(b0),R0=g({},uo,{relatedTarget:0}),Tu=Kn(R0),w0=g({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=Kn(w0),U0=g({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=Kn(U0),Q0=g({},As,{data:0}),bd=Kn(Q0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=F0[e])?!!n[e]:!1}function Ru(){return O0}var G0=g({},uo,{key:function(e){if(e.key){var n=N0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z0=Kn(G0),H0=g({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Kn(H0),k0=g({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),V0=Kn(k0),q0=g({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Kn(q0),X0=g({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=Kn(X0),K0=g({},As,{newState:0,oldState:0}),J0=Kn(K0),j0=[9,13,27,32],wu=na&&"CompositionEvent"in window,Ao=null;na&&"documentMode"in document&&(Ao=document.documentMode);var Z0=na&&"TextEvent"in window&&!Ao,Rd=na&&(!wu||Ao&&8<Ao&&11>=Ao),wd=" ",Dd=!1;function Ud(e,n){switch(e){case"keyup":return j0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function $0(e,n){switch(e){case"compositionend":return Ld(n);case"keypress":return n.which!==32?null:(Dd=!0,wd);case"textInput":return e=n.data,e===wd&&Dd?null:e;default:return null}}function tv(e,n){if(nr)return e==="compositionend"||!wu&&Ud(e,n)?(e=Md(),Rl=Iu=Ra=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ev[e.type]:n==="textarea"}function Nd(e,n,a,o){tr?er?er.push(o):er=[o]:tr=o,n=vc(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ho=null,po=null;function nv(e){gm(e,0)}function Ql(e){var n=fs(e);if(Dn(n))return e}function Pd(e,n){if(e==="change")return n}var Fd=!1;if(na){var Du;if(na){var Uu="oninput"in document;if(!Uu){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Uu=typeof Od.oninput=="function"}Du=Uu}else Du=!1;Fd=Du&&(!document.documentMode||9<document.documentMode)}function Gd(){ho&&(ho.detachEvent("onpropertychange",zd),po=ho=null)}function zd(e){if(e.propertyName==="value"&&Ql(po)){var n=[];Nd(n,po,e,Cu(e)),xd(nv,n)}}function iv(e,n,a){e==="focusin"?(Gd(),ho=n,po=a,ho.attachEvent("onpropertychange",zd)):e==="focusout"&&Gd()}function av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(po)}function sv(e,n){if(e==="click")return Ql(n)}function rv(e,n){if(e==="input"||e==="change")return Ql(n)}function ov(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:ov;function go(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!pe.call(n,u)||!ii(e[u],n[u]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,n){var a=Hd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hd(a)}}function Vd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ii(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ii(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lv=na&&"documentMode"in document&&11>=document.documentMode,ir=null,Qu=null,mo=null,Nu=!1;function Yd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||ir==null||ir!==Ii(o)||(o=ir,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&go(mo,o)||(mo=o,o=vc(Qu,"onSelect"),0<o.length&&(n=new Ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ir)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ar={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Pu={},Xd={};na&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ds(e){if(Pu[e])return Pu[e];if(!ar[e])return e;var n=ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xd)return Pu[e]=n[a];return e}var Wd=ds("animationend"),Kd=ds("animationiteration"),Jd=ds("animationstart"),cv=ds("transitionrun"),uv=ds("transitionstart"),fv=ds("transitioncancel"),jd=ds("transitionend"),Zd=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Bi(e,n){Zd.set(e,n),B(n,[e])}var $d=new WeakMap;function gi(e,n){if(typeof e=="object"&&e!==null){var a=$d.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ue(n)},$d.set(e,n),n)}return{value:e,source:n,stack:Ue(n)}}var mi=[],sr=0,Ou=0;function Nl(){for(var e=sr,n=Ou=sr=0;n<e;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var A=mi[n];if(mi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}A!==0&&tp(a,u,A)}}function Pl(e,n,a,o){mi[sr++]=e,mi[sr++]=n,mi[sr++]=a,mi[sr++]=o,Ou|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Pl(e,n,a,o),Fl(e)}function rr(e,n){return Pl(e,null,null,n),Fl(e)}function tp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,A=e.return;A!==null;)A.childLanes|=a,o=A.alternate,o!==null&&(o.childLanes|=a),A.tag===22&&(e=A.stateNode,e===null||e._visibility&1||(u=!0)),e=A,A=A.return;return e.tag===3?(A=e.stateNode,u&&n!==null&&(u=31-Qt(a),e=A.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),A):null}function Fl(e){if(50<Ho)throw Ho=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var or={};function Av(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,a,o){return new Av(e,n,a,o)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ol(e,n,a,o,u,A){var S=0;if(o=e,typeof e=="function")zu(e)&&(S=1);else if(typeof e=="string")S=dy(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=ai(31,a,n,u),e.elementType=R,e.lanes=A,e;case C:return ps(a.children,u,A,n);case x:S=8,u|=24;break;case y:return e=ai(12,a,n,u|2),e.elementType=y,e.lanes=A,e;case N:return e=ai(13,a,n,u),e.elementType=N,e.lanes=A,e;case F:return e=ai(19,a,n,u),e.elementType=F,e.lanes=A,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case m:case w:S=10;break t;case L:S=9;break t;case b:S=11;break t;case O:S=14;break t;case q:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ai(S,a,n,u),n.elementType=e,n.type=o,n.lanes=A,n}function ps(e,n,a,o){return e=ai(7,e,o,n),e.lanes=a,e}function Hu(e,n,a){return e=ai(6,e,null,n),e.lanes=a,e}function ku(e,n,a){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lr=[],cr=0,Gl=null,zl=0,_i=[],Ei=0,gs=null,aa=1,sa="";function ms(e,n){lr[cr++]=zl,lr[cr++]=Gl,Gl=e,zl=n}function np(e,n,a){_i[Ei++]=aa,_i[Ei++]=sa,_i[Ei++]=gs,gs=e;var o=aa;e=sa;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var A=32-Qt(n)+u;if(30<A){var S=u-u%5;A=(o&(1<<S)-1).toString(32),o>>=S,u-=S,aa=1<<32-Qt(n)+u|a<<u|o,sa=A+e}else aa=1<<A|a<<u|o,sa=e}function Vu(e){e.return!==null&&(ms(e,1),np(e,1,0))}function qu(e){for(;e===Gl;)Gl=lr[--cr],lr[cr]=null,zl=lr[--cr],lr[cr]=null;for(;e===gs;)gs=_i[--Ei],_i[Ei]=null,sa=_i[--Ei],_i[Ei]=null,aa=_i[--Ei],_i[Ei]=null}var Hn=null,tn=null,Be=!1,_s=null,Gi=!1,Yu=Error(s(519));function Es(e){var n=Error(s(418,""));throw vo(gi(n,e)),Yu}function ip(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[Ze]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)_e(Vo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),$s(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||vm(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=yc),n=!0):n=!1,n||Es(e)}function ap(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Hn=Hn.return}}function _o(e){if(e!==Hn)return!1;if(!Be)return ap(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cA(e.type,e.memoizedProps)),a=!a),a&&tn&&Es(e),ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=Ti(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,Ya(e.type)?(e=hA,hA=null,tn=e):tn=n):tn=Hn?Ti(e.stateNode.nextSibling):null;return!0}function Eo(){tn=Hn=null,Be=!1}function sp(){var e=_s;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),_s=null),e}function vo(e){_s===null?_s=[e]:_s.push(e)}var Xu=j(null),vs=null,ra=null;function wa(e,n,a){vt(Xu,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=Xu.current,gt(Xu)}function Wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ku(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var A=u.dependencies;if(A!==null){var S=u.child;A=A.firstContext;t:for(;A!==null;){var I=A;A=u;for(var G=0;G<n.length;G++)if(I.context===n[G]){A.lanes|=a,I=A.alternate,I!==null&&(I.lanes|=a),Wu(A.return,a,e),o||(S=null);break t}A=I.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,A=S.alternate,A!==null&&(A.lanes|=a),Wu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function yo(e,n,a,o){e=null;for(var u=n,A=!1;u!==null;){if(!A){if((u.flags&524288)!==0)A=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var I=u.type;ii(u.pendingProps.value,S.value)||(e!==null?e.push(I):e=[I])}}else if(u===yt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Jo):e=[Jo])}u=u.return}e!==null&&Ku(n,e,a,o),n.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){vs=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return rp(vs,e)}function kl(e,n){return vs===null&&ys(e),rp(e,n)}function rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var hv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dv=r.unstable_scheduleCallback,pv=r.unstable_NormalPriority,An={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new hv,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&dv(pv,function(){e.controller.abort()})}var Co=null,ju=0,ur=0,fr=null;function gv(e,n){if(Co===null){var a=Co=[];ju=0,ur=tA(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(op,op),n}function op(){if(--ju===0&&Co!==null){fr!==null&&(fr.status="fulfilled");var e=Co;Co=null,ur=0,fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lp=U.S;U.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gv(e,n),lp!==null&&lp(e,n)};var Ss=j(null);function Zu(){var e=Ss.current;return e!==null?e:ke.pooledCache}function Vl(e,n){n===null?vt(Ss,Ss.current):vt(Ss,n.pool)}function cp(){var e=Zu();return e===null?null:{parent:An._currentValue,pool:e}}var xo=Error(s(460)),up=Error(s(474)),ql=Error(s(542)),$u={then:function(){}};function fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yl(){}function Ap(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yl,Yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e;default:if(typeof n.status=="string")n.then(Yl,Yl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e}throw Mo=n,xo}}var Mo=null;function hp(){if(Mo===null)throw Error(s(459));var e=Mo;return Mo=null,e}function dp(e){if(e===xo||e===ql)throw Error(s(483))}var Da=!1;function tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Fl(e),tp(e,null,a),n}return Pl(e,o,n,a),Fl(e)}function Io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zt(e,a)}}function nf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,A=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};A===null?u=A=S:A=A.next=S,a=a.next}while(a!==null);A===null?u=A=n:A=A.next=n}else u=A=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:A,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var af=!1;function Bo(){if(af){var e=fr;if(e!==null)throw e}}function bo(e,n,a,o){af=!1;var u=e.updateQueue;Da=!1;var A=u.firstBaseUpdate,S=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var G=I,tt=G.next;G.next=null,S===null?A=tt:S.next=tt,S=G;var At=e.alternate;At!==null&&(At=At.updateQueue,I=At.lastBaseUpdate,I!==S&&(I===null?At.firstBaseUpdate=tt:I.next=tt,At.lastBaseUpdate=G))}if(A!==null){var mt=u.baseState;S=0,At=tt=G=null,I=A;do{var nt=I.lane&-536870913,at=nt!==I.lane;if(at?(Ee&nt)===nt:(o&nt)===nt){nt!==0&&nt===ur&&(af=!0),At!==null&&(At=At.next={lane:0,tag:I.tag,payload:I.payload,callback:null,next:null});t:{var ee=e,Zt=I;nt=n;var Ne=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){mt=ee.call(Ne,mt,nt);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,nt=typeof ee=="function"?ee.call(Ne,mt,nt):ee,nt==null)break t;mt=g({},mt,nt);break t;case 2:Da=!0}}nt=I.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:I.tag,payload:I.payload,callback:I.callback,next:null},At===null?(tt=At=at,G=mt):At=At.next=at,S|=nt;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;at=I,I=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);At===null&&(G=mt),u.baseState=G,u.firstBaseUpdate=tt,u.lastBaseUpdate=At,A===null&&(u.shared.lanes=0),Ha|=S,e.lanes=S,e.memoizedState=mt}}function pp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pp(a[e],n)}var Ar=j(null),Xl=j(0);function mp(e,n){e=da,vt(Xl,e),vt(Ar,n),da=e|n.baseLanes}function sf(){vt(Xl,da),vt(Ar,Ar.current)}function rf(){da=Xl.current,gt(Ar),gt(Xl)}var Qa=0,he=null,Le=null,on=null,Wl=!1,hr=!1,Cs=!1,Kl=0,To=0,dr=null,_v=0;function nn(){throw Error(s(321))}function of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ii(e[a],n[a]))return!1;return!0}function lf(e,n,a,o,u,A){return Qa=A,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?tg:eg,Cs=!1,A=a(o,u),Cs=!1,hr&&(A=Ep(n,a,o,u)),_p(e),A}function _p(e){U.H=ec;var n=Le!==null&&Le.next!==null;if(Qa=0,on=Le=he=null,Wl=!1,To=0,dr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&Hl(e)&&(_n=!0))}function Ep(e,n,a,o){he=e;var u=0;do{if(hr&&(dr=null),To=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,on=Le=null,e.updateQueue!=null){var A=e.updateQueue;A.lastEffect=null,A.events=null,A.stores=null,A.memoCache!=null&&(A.memoCache.index=0)}U.H=Mv,A=n(a,o)}while(hr);return A}function Ev(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Ro(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(he.flags|=1024),n}function cf(){var e=Kl!==0;return Kl=0,e}function uf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ff(e){if(Wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Wl=!1}Qa=0,on=Le=he=null,hr=!1,To=Kl=0,dr=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?he.memoizedState=on=e:on=on.next=e,on}function ln(){if(Le===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=on===null?he.memoizedState:on.next;if(n!==null)on=n,Le=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},on===null?he.memoizedState=on=e:on=on.next=e}return on}function Af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var n=To;return To+=1,dr===null&&(dr=[]),e=Ap(dr,e,n),n=he,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?tg:eg),e}function Jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===w)return Ln(e)}throw Error(s(438,String(e)))}function hf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Af(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=T;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=ln();return df(n,Le,e)}function df(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,A=o.pending;if(A!==null){if(u!==null){var S=u.next;u.next=A.next,A.next=S}n.baseQueue=u=A,o.pending=null}if(A=e.baseState,u===null)e.memoizedState=A;else{n=u.next;var I=S=null,G=null,tt=n,At=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(Ee&mt)===mt:(Qa&mt)===mt){var nt=tt.revertLane;if(nt===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===ur&&(At=!0);else if((Qa&nt)===nt){tt=tt.next,nt===ur&&(At=!0);continue}else mt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(I=G=mt,S=A):G=G.next=mt,he.lanes|=nt,Ha|=nt;mt=tt.action,Cs&&a(A,mt),A=tt.hasEagerState?tt.eagerState:a(A,mt)}else nt={lane:mt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(I=G=nt,S=A):G=G.next=nt,he.lanes|=mt,Ha|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(G===null?S=A:G.next=I,!ii(A,e.memoizedState)&&(_n=!0,At&&(a=fr,a!==null)))throw a;e.memoizedState=A,e.baseState=S,e.baseQueue=G,o.lastRenderedState=A}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function pf(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,A=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do A=e(A,S.action),S=S.next;while(S!==u);ii(A,n.memoizedState)||(_n=!0),n.memoizedState=A,n.baseQueue===null&&(n.baseState=A),a.lastRenderedState=A}return[A,o]}function vp(e,n,a){var o=he,u=ln(),A=Be;if(A){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ii((Le||u).memoizedState,a);S&&(u.memoizedState=a,_n=!0),u=u.queue;var I=Cp.bind(null,o,u,e);if(wo(2048,8,I,[e]),u.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,pr(9,Zl(),Sp.bind(null,o,u,a,n),null),ke===null)throw Error(s(349));A||(Qa&124)!==0||yp(o,n,a)}return a}function yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Af(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sp(e,n,a,o){n.value=a,n.getSnapshot=o,xp(n)&&Mp(e)}function Cp(e,n,a){return a(function(){xp(n)&&Mp(e)})}function xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ii(e,a)}catch{return!0}}function Mp(e){var n=rr(e,2);n!==null&&ci(n,e,2)}function gf(e){var n=Jn();if(typeof e=="function"){var a=e;if(e=a(),Cs){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function Ip(e,n,a,o){return e.baseState=a,df(e,Le,typeof o=="function"?o:la)}function vv(e,n,a,o,u){if(tc(e))throw Error(s(485));if(e=n.action,e!==null){var A={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){A.listeners.push(S)}};U.T!==null?a(!0):A.isTransition=!1,o(A),a=n.pending,a===null?(A.next=n.pending=A,Bp(n,A)):(A.next=a.next,n.pending=a.next=A)}}function Bp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var A=U.T,S={};U.T=S;try{var I=a(u,o),G=U.S;G!==null&&G(S,I),bp(e,n,I)}catch(tt){mf(e,n,tt)}finally{U.T=A}}else try{A=a(u,o),bp(e,n,A)}catch(tt){mf(e,n,tt)}}function bp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tp(e,n,o)},function(o){return mf(e,n,o)}):Tp(e,n,a)}function Tp(e,n,a){n.status="fulfilled",n.value=a,Rp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bp(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==o)}e.action=null}function Rp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wp(e,n){return n}function Dp(e,n){if(Be){var a=ke.formState;if(a!==null){t:{var o=he;if(Be){if(tn){e:{for(var u=tn,A=Gi;u.nodeType!==8;){if(!A){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}A=u.data,u=A==="F!"||A==="F"?u:null}if(u){tn=Ti(u.nextSibling),o=u.data==="F!";break t}}Es(o)}o=!1}o&&(n=a[0])}}return a=Jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=o,a=jp.bind(null,he,o),o.dispatch=a,o=gf(!1),A=Sf.bind(null,he,!1,o.queue),o=Jn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=vv.bind(null,he,u,A,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Up(e){var n=ln();return Lp(n,Le,e)}function Lp(e,n,a){if(n=df(e,n,wp)[0],e=jl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(S){throw S===xo?ql:S}else o=n;n=ln();var u=n.queue,A=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,pr(9,Zl(),yv.bind(null,u,a),null)),[o,A,e]}function yv(e,n){e.action=n}function Qp(e){var n=ln(),a=Le;if(a!==null)return Lp(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function pr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Af(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Zl(){return{destroy:void 0,resource:void 0}}function Np(){return ln().memoizedState}function $l(e,n,a,o){var u=Jn();o=o===void 0?null:o,he.flags|=e,u.memoizedState=pr(1|n,Zl(),a,o)}function wo(e,n,a,o){var u=ln();o=o===void 0?null:o;var A=u.memoizedState.inst;Le!==null&&o!==null&&of(o,Le.memoizedState.deps)?u.memoizedState=pr(n,A,a,o):(he.flags|=e,u.memoizedState=pr(1|n,A,a,o))}function Pp(e,n){$l(8390656,8,e,n)}function Fp(e,n){wo(2048,8,e,n)}function Op(e,n){return wo(4,2,e,n)}function Gp(e,n){return wo(4,4,e,n)}function zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hp(e,n,a){a=a!=null?a.concat([e]):null,wo(4,4,zp.bind(null,n,e),a)}function _f(){}function kp(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Vp(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=e(),Cs){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function Ef(e,n,a){return a===void 0||(Qa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Xg(),he.lanes|=e,Ha|=e,a)}function qp(e,n,a,o){return ii(a,n)?a:Ar.current!==null?(e=Ef(e,a,o),ii(e,n)||(_n=!0),e):(Qa&42)===0?(_n=!0,e.memoizedState=a):(e=Xg(),he.lanes|=e,Ha|=e,n)}function Yp(e,n,a,o,u){var A=z.p;z.p=A!==0&&8>A?A:8;var S=U.T,I={};U.T=I,Sf(e,!1,n,a);try{var G=u(),tt=U.S;if(tt!==null&&tt(I,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var At=mv(G,o);Do(e,n,At,li(e))}else Do(e,n,o,li(e))}catch(mt){Do(e,n,{then:function(){},status:"rejected",reason:mt},li())}finally{z.p=A,U.T=S}}function Sv(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Xp(e).queue;Yp(e,u,n,V,a===null?Sv:function(){return Wp(e),a(o)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e).next.queue;Do(e,n,{},li())}function yf(){return Ln(Jo)}function Kp(){return ln().memoizedState}function Jp(){return ln().memoizedState}function Cv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Ua(a);var o=La(n,e,a);o!==null&&(ci(o,n,a),Io(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function xv(e,n,a){var o=li();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},tc(e)?Zp(n,a):(a=Gu(e,n,a,o),a!==null&&(ci(a,e,o),$p(a,n,o)))}function jp(e,n,a){var o=li();Do(e,n,a,o)}function Do(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(e))Zp(n,u);else{var A=e.alternate;if(e.lanes===0&&(A===null||A.lanes===0)&&(A=n.lastRenderedReducer,A!==null))try{var S=n.lastRenderedState,I=A(S,a);if(u.hasEagerState=!0,u.eagerState=I,ii(I,S))return Pl(e,n,u,0),ke===null&&Nl(),!1}catch{}finally{}if(a=Gu(e,n,u,o),a!==null)return ci(a,e,o),$p(a,n,o),!0}return!1}function Sf(e,n,a,o){if(o={lane:2,revertLane:tA(),action:o,hasEagerState:!1,eagerState:null,next:null},tc(e)){if(n)throw Error(s(479))}else n=Gu(e,a,o,2),n!==null&&ci(n,e,2)}function tc(e){var n=e.alternate;return e===he||n!==null&&n===he}function Zp(e,n){hr=Wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function $p(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zt(e,a)}}var ec={readContext:Ln,use:Jl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},tg={readContext:Ln,use:Jl,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Pp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,$l(4194308,4,zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return $l(4194308,4,e,n)},useInsertionEffect:function(e,n){$l(4,2,e,n)},useMemo:function(e,n){var a=Jn();n=n===void 0?null:n;var o=e();if(Cs){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Jn();if(a!==void 0){var u=a(n);if(Cs){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xv.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:function(e){e=gf(e);var n=e.queue,a=jp.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=Jn();return Ef(a,e,n)},useTransition:function(){var e=gf(!1);return e=Yp.bind(null,he,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Jn();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(Ee&124)!==0||yp(o,n,a)}u.memoizedState=a;var A={value:a,getSnapshot:n};return u.queue=A,Pp(Cp.bind(null,o,A,e),[e]),o.flags|=2048,pr(9,Zl(),Sp.bind(null,o,A,a,n),null),a},useId:function(){var e=Jn(),n=ke.identifierPrefix;if(Be){var a=sa,o=aa;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Kl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=_v++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:yf,useFormState:Dp,useActionState:Dp,useOptimistic:function(e){var n=Jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:hf,useCacheRefresh:function(){return Jn().memoizedState=Cv.bind(null,he)}},eg={readContext:Ln,use:Jl,useCallback:kp,useContext:Ln,useEffect:Fp,useImperativeHandle:Hp,useInsertionEffect:Op,useLayoutEffect:Gp,useMemo:Vp,useReducer:jl,useRef:Np,useState:function(){return jl(la)},useDebugValue:_f,useDeferredValue:function(e,n){var a=ln();return qp(a,Le.memoizedState,e,n)},useTransition:function(){var e=jl(la)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Ro(e),n]},useSyncExternalStore:vp,useId:Kp,useHostTransitionStatus:yf,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=ln();return Ip(a,Le,e,n)},useMemoCache:hf,useCacheRefresh:Jp},Mv={readContext:Ln,use:Jl,useCallback:kp,useContext:Ln,useEffect:Fp,useImperativeHandle:Hp,useInsertionEffect:Op,useLayoutEffect:Gp,useMemo:Vp,useReducer:pf,useRef:Np,useState:function(){return pf(la)},useDebugValue:_f,useDeferredValue:function(e,n){var a=ln();return Le===null?Ef(a,e,n):qp(a,Le.memoizedState,e,n)},useTransition:function(){var e=pf(la)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Ro(e),n]},useSyncExternalStore:vp,useId:Kp,useHostTransitionStatus:yf,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,n){var a=ln();return Le!==null?Ip(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:Jp},gr=null,Uo=0;function nc(e){var n=Uo;return Uo+=1,gr===null&&(gr=[]),Ap(gr,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ic(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ng(e){var n=e._init;return n(e._payload)}function ig(e){function n(K,k){if(e){var $=K.deletions;$===null?(K.deletions=[k],K.flags|=16):$.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=ia(K,k),K.index=0,K.sibling=null,K}function A(K,k,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<k?(K.flags|=67108866,k):$):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function I(K,k,$,pt){return k===null||k.tag!==6?(k=Hu($,K.mode,pt),k.return=K,k):(k=u(k,$),k.return=K,k)}function G(K,k,$,pt){var Gt=$.type;return Gt===C?At(K,k,$.props.children,pt,$.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===q&&ng(Gt)===k.type)?(k=u(k,$.props),Lo(k,$),k.return=K,k):(k=Ol($.type,$.key,$.props,null,K.mode,pt),Lo(k,$),k.return=K,k)}function tt(K,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=ku($,K.mode,pt),k.return=K,k):(k=u(k,$.children||[]),k.return=K,k)}function At(K,k,$,pt,Gt){return k===null||k.tag!==7?(k=ps($,K.mode,pt,Gt),k.return=K,k):(k=u(k,$),k.return=K,k)}function mt(K,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Hu(""+k,K.mode,$),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return $=Ol(k.type,k.key,k.props,null,K.mode,$),Lo($,k),$.return=K,$;case v:return k=ku(k,K.mode,$),k.return=K,k;case q:var pt=k._init;return k=pt(k._payload),mt(K,k,$)}if(ct(k)||Z(k))return k=ps(k,K.mode,$,null),k.return=K,k;if(typeof k.then=="function")return mt(K,nc(k),$);if(k.$$typeof===w)return mt(K,kl(K,k),$);ic(K,k)}return null}function nt(K,k,$,pt){var Gt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:I(K,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Gt?G(K,k,$,pt):null;case v:return $.key===Gt?tt(K,k,$,pt):null;case q:return Gt=$._init,$=Gt($._payload),nt(K,k,$,pt)}if(ct($)||Z($))return Gt!==null?null:At(K,k,$,pt,null);if(typeof $.then=="function")return nt(K,k,nc($),pt);if($.$$typeof===w)return nt(K,k,kl(K,$),pt);ic(K,$)}return null}function at(K,k,$,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get($)||null,I(k,K,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return K=K.get(pt.key===null?$:pt.key)||null,G(k,K,pt,Gt);case v:return K=K.get(pt.key===null?$:pt.key)||null,tt(k,K,pt,Gt);case q:var de=pt._init;return pt=de(pt._payload),at(K,k,$,pt,Gt)}if(ct(pt)||Z(pt))return K=K.get($)||null,At(k,K,pt,Gt,null);if(typeof pt.then=="function")return at(K,k,$,nc(pt),Gt);if(pt.$$typeof===w)return at(K,k,$,kl(k,pt),Gt);ic(k,pt)}return null}function ee(K,k,$,pt){for(var Gt=null,de=null,Xt=k,te=k=0,vn=null;Xt!==null&&te<$.length;te++){Xt.index>te?(vn=Xt,Xt=null):vn=Xt.sibling;var Me=nt(K,Xt,$[te],pt);if(Me===null){Xt===null&&(Xt=vn);break}e&&Xt&&Me.alternate===null&&n(K,Xt),k=A(Me,k,te),de===null?Gt=Me:de.sibling=Me,de=Me,Xt=vn}if(te===$.length)return a(K,Xt),Be&&ms(K,te),Gt;if(Xt===null){for(;te<$.length;te++)Xt=mt(K,$[te],pt),Xt!==null&&(k=A(Xt,k,te),de===null?Gt=Xt:de.sibling=Xt,de=Xt);return Be&&ms(K,te),Gt}for(Xt=o(Xt);te<$.length;te++)vn=at(Xt,K,te,$[te],pt),vn!==null&&(e&&vn.alternate!==null&&Xt.delete(vn.key===null?te:vn.key),k=A(vn,k,te),de===null?Gt=vn:de.sibling=vn,de=vn);return e&&Xt.forEach(function(ja){return n(K,ja)}),Be&&ms(K,te),Gt}function Zt(K,k,$,pt){if($==null)throw Error(s(151));for(var Gt=null,de=null,Xt=k,te=k=0,vn=null,Me=$.next();Xt!==null&&!Me.done;te++,Me=$.next()){Xt.index>te?(vn=Xt,Xt=null):vn=Xt.sibling;var ja=nt(K,Xt,Me.value,pt);if(ja===null){Xt===null&&(Xt=vn);break}e&&Xt&&ja.alternate===null&&n(K,Xt),k=A(ja,k,te),de===null?Gt=ja:de.sibling=ja,de=ja,Xt=vn}if(Me.done)return a(K,Xt),Be&&ms(K,te),Gt;if(Xt===null){for(;!Me.done;te++,Me=$.next())Me=mt(K,Me.value,pt),Me!==null&&(k=A(Me,k,te),de===null?Gt=Me:de.sibling=Me,de=Me);return Be&&ms(K,te),Gt}for(Xt=o(Xt);!Me.done;te++,Me=$.next())Me=at(Xt,K,te,Me.value,pt),Me!==null&&(e&&Me.alternate!==null&&Xt.delete(Me.key===null?te:Me.key),k=A(Me,k,te),de===null?Gt=Me:de.sibling=Me,de=Me);return e&&Xt.forEach(function(Iy){return n(K,Iy)}),Be&&ms(K,te),Gt}function Ne(K,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Gt=$.key;k!==null;){if(k.key===Gt){if(Gt=$.type,Gt===C){if(k.tag===7){a(K,k.sibling),pt=u(k,$.props.children),pt.return=K,K=pt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===q&&ng(Gt)===k.type){a(K,k.sibling),pt=u(k,$.props),Lo(pt,$),pt.return=K,K=pt;break t}a(K,k);break}else n(K,k);k=k.sibling}$.type===C?(pt=ps($.props.children,K.mode,pt,$.key),pt.return=K,K=pt):(pt=Ol($.type,$.key,$.props,null,K.mode,pt),Lo(pt,$),pt.return=K,K=pt)}return S(K);case v:t:{for(Gt=$.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(K,k.sibling),pt=u(k,$.children||[]),pt.return=K,K=pt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}pt=ku($,K.mode,pt),pt.return=K,K=pt}return S(K);case q:return Gt=$._init,$=Gt($._payload),Ne(K,k,$,pt)}if(ct($))return ee(K,k,$,pt);if(Z($)){if(Gt=Z($),typeof Gt!="function")throw Error(s(150));return $=Gt.call($),Zt(K,k,$,pt)}if(typeof $.then=="function")return Ne(K,k,nc($),pt);if($.$$typeof===w)return Ne(K,k,kl(K,$),pt);ic(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(K,k.sibling),pt=u(k,$),pt.return=K,K=pt):(a(K,k),pt=Hu($,K.mode,pt),pt.return=K,K=pt),S(K)):a(K,k)}return function(K,k,$,pt){try{Uo=0;var Gt=Ne(K,k,$,pt);return gr=null,Gt}catch(Xt){if(Xt===xo||Xt===ql)throw Xt;var de=ai(29,Xt,null,K.mode);return de.lanes=pt,de.return=K,de}finally{}}}var mr=ig(!0),ag=ig(!1),vi=j(null),zi=null;function Na(e){var n=e.alternate;vt(hn,hn.current&1),vt(vi,e),zi===null&&(n===null||Ar.current!==null||n.memoizedState!==null)&&(zi=e)}function sg(e){if(e.tag===22){if(vt(hn,hn.current),vt(vi,e),zi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(zi=e)}}else Pa()}function Pa(){vt(hn,hn.current),vt(vi,vi.current)}function ca(e){gt(vi),zi===e&&(zi=null),gt(hn)}var hn=j(0);function ac(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||AA(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Cf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(ci(n,e,o),Io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(ci(n,e,o),Io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(e,o,a),n!==null&&(ci(n,e,a),Io(n,e,a))}};function rg(e,n,a,o,u,A,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,A,S):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(u,A):!0}function og(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&xf.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lg(e){sc(e)}function cg(e){console.error(e)}function ug(e){sc(e)}function rc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(e,n)},a}function Ag(e){return e=Ua(e),e.tag=3,e}function hg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var A=o.value;e.payload=function(){return u(A)},e.callback=function(){fg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){fg(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var I=o.stack;this.componentDidCatch(o.value,{componentStack:I!==null?I:""})})}function Iv(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&yo(n,a,u,!0),a=vi.current,a!==null){switch(a.tag){case 13:return zi===null?Kf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===$u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),jf(e,o,u)),!1;case 22:return a.flags|=65536,o===$u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),jf(e,o,u)),!1}throw Error(s(435,a.tag))}return jf(e,o,u),Kf(),!1}if(Be)return n=vi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(e=Error(s(422),{cause:o}),vo(gi(e,a)))):(o!==Yu&&(n=Error(s(423),{cause:o}),vo(gi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=gi(o,a),u=Mf(e.stateNode,o,u),nf(e,u),en!==4&&(en=2)),!1;var A=Error(s(520),{cause:o});if(A=gi(A,a),zo===null?zo=[A]:zo.push(A),en!==4&&(en=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,o,e),nf(a,e),!1;case 1:if(n=a.type,A=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ka===null||!ka.has(A))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ag(u),hg(u,e,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var dg=Error(s(461)),_n=!1;function Cn(e,n,a,o){n.child=e===null?ag(n,null,a,o):mr(n,e.child,a,o)}function pg(e,n,a,o,u){a=a.render;var A=n.ref;if("ref"in o){var S={};for(var I in o)I!=="ref"&&(S[I]=o[I])}else S=o;return ys(n),o=lf(e,n,a,S,A,u),I=cf(),e!==null&&!_n?(uf(e,n,u),ua(e,n,u)):(Be&&I&&Vu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var A=a.type;return typeof A=="function"&&!zu(A)&&A.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=A,mg(e,n,A,o,u)):(e=Ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(A=e.child,!Uf(e,u)){var S=A.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(S,o)&&e.ref===n.ref)return ua(e,n,u)}return n.flags|=1,e=ia(A,o),e.ref=n.ref,e.return=n,n.child=e}function mg(e,n,a,o,u){if(e!==null){var A=e.memoizedProps;if(go(A,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=A,Uf(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,ua(e,n,u)}return If(e,n,a,o,u)}function _g(e,n,a){var o=n.pendingProps,u=o.children,A=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=A!==null?A.baseLanes|a:a,e!==null){for(u=n.child=e.child,A=0;u!==null;)A=A|u.lanes|u.childLanes,u=u.sibling;n.childLanes=A&~o}else n.childLanes=0,n.child=null;return Eg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(n,A!==null?A.cachePool:null),A!==null?mp(n,A):sf(),sg(n);else return n.lanes=n.childLanes=536870912,Eg(e,n,A!==null?A.baseLanes|a:a,a)}else A!==null?(Vl(n,A.cachePool),mp(n,A),Pa(),n.memoizedState=null):(e!==null&&Vl(n,null),sf(),Pa());return Cn(e,n,u,a),n.child}function Eg(e,n,a,o){var u=Zu();return u=u===null?null:{parent:An._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Vl(n,null),sf(),sg(n),e!==null&&yo(e,n,o,!0),null}function oc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function If(e,n,a,o,u){return ys(n),a=lf(e,n,a,o,void 0,u),o=cf(),e!==null&&!_n?(uf(e,n,u),ua(e,n,u)):(Be&&o&&Vu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function vg(e,n,a,o,u,A){return ys(n),n.updateQueue=null,a=Ep(n,o,a,u),_p(e),o=cf(),e!==null&&!_n?(uf(e,n,A),ua(e,n,A)):(Be&&o&&Vu(n),n.flags|=1,Cn(e,n,a,A),n.child)}function yg(e,n,a,o,u){if(ys(n),n.stateNode===null){var A=or,S=a.contextType;typeof S=="object"&&S!==null&&(A=Ln(S)),A=new a(o,A),n.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=xf,n.stateNode=A,A._reactInternals=n,A=n.stateNode,A.props=o,A.state=n.memoizedState,A.refs={},tf(n),S=a.contextType,A.context=typeof S=="object"&&S!==null?Ln(S):or,A.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Cf(n,a,S,o),A.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof A.getSnapshotBeforeUpdate=="function"||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(S=A.state,typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount(),S!==A.state&&xf.enqueueReplaceState(A,A.state,null),bo(n,o,A,u),Bo(),A.state=n.memoizedState),typeof A.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){A=n.stateNode;var I=n.memoizedProps,G=xs(a,I);A.props=G;var tt=A.context,At=a.contextType;S=or,typeof At=="object"&&At!==null&&(S=Ln(At));var mt=a.getDerivedStateFromProps;At=typeof mt=="function"||typeof A.getSnapshotBeforeUpdate=="function",I=n.pendingProps!==I,At||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I||tt!==S)&&og(n,A,o,S),Da=!1;var nt=n.memoizedState;A.state=nt,bo(n,o,A,u),Bo(),tt=n.memoizedState,I||nt!==tt||Da?(typeof mt=="function"&&(Cf(n,a,mt,o),tt=n.memoizedState),(G=Da||rg(n,a,G,o,nt,tt,S))?(At||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(n.flags|=4194308)):(typeof A.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),A.props=o,A.state=tt,A.context=S,o=G):(typeof A.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{A=n.stateNode,ef(e,n),S=n.memoizedProps,At=xs(a,S),A.props=At,mt=n.pendingProps,nt=A.context,tt=a.contextType,G=or,typeof tt=="object"&&tt!==null&&(G=Ln(tt)),I=a.getDerivedStateFromProps,(tt=typeof I=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(S!==mt||nt!==G)&&og(n,A,o,G),Da=!1,nt=n.memoizedState,A.state=nt,bo(n,o,A,u),Bo();var at=n.memoizedState;S!==mt||nt!==at||Da||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof I=="function"&&(Cf(n,a,I,o),at=n.memoizedState),(At=Da||rg(n,a,At,o,nt,at,G)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(tt||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(o,at,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(o,at,G)),typeof A.componentDidUpdate=="function"&&(n.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof A.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),A.props=o,A.state=at,A.context=G,o=At):(typeof A.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return A=o,oc(e,n),o=(n.flags&128)!==0,A||o?(A=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:A.render(),n.flags|=1,e!==null&&o?(n.child=mr(n,e.child,null,u),n.child=mr(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=A.state,e=n.child):e=ua(e,n,u),e}function Sg(e,n,a,o){return Eo(),n.flags|=256,Cn(e,n,a,o),n.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:cp()}}function Tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=yi),e}function Cg(e,n,a){var o=n.pendingProps,u=!1,A=(n.flags&128)!==0,S;if((S=A)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?Na(n):Pa(),Be){var I=tn,G;if(G=I){t:{for(G=I,I=Gi;G.nodeType!==8;){if(!I){I=null;break t}if(G=Ti(G.nextSibling),G===null){I=null;break t}}I=G}I!==null?(n.memoizedState={dehydrated:I,treeContext:gs!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},G=ai(18,null,null,0),G.stateNode=I,G.return=n,n.child=G,Hn=n,tn=null,G=!0):G=!1}G||Es(n)}if(I=n.memoizedState,I!==null&&(I=I.dehydrated,I!==null))return AA(I)?n.lanes=32:n.lanes=536870912,null;ca(n)}return I=o.children,o=o.fallback,u?(Pa(),u=n.mode,I=lc({mode:"hidden",children:I},u),o=ps(o,u,a,null),I.return=n,o.return=n,I.sibling=o,n.child=I,u=n.child,u.memoizedState=bf(a),u.childLanes=Tf(e,S,a),n.memoizedState=Bf,o):(Na(n),Rf(n,I))}if(G=e.memoizedState,G!==null&&(I=G.dehydrated,I!==null)){if(A)n.flags&256?(Na(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),u=o.fallback,I=n.mode,o=lc({mode:"visible",children:o.children},I),u=ps(u,I,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,mr(n,e.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(e,S,a),n.memoizedState=Bf,n=u);else if(Na(n),AA(I)){if(S=I.nextSibling&&I.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(s(419)),o.stack="",o.digest=S,vo({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(_n||yo(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:ie(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,rr(e,o),ci(S,e,o),dg;I.data==="$?"||Kf(),n=wf(e,n,a)}else I.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,tn=Ti(I.nextSibling),Hn=n,Be=!0,_s=null,Gi=!1,e!==null&&(_i[Ei++]=aa,_i[Ei++]=sa,_i[Ei++]=gs,aa=e.id,sa=e.overflow,gs=n),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Pa(),u=o.fallback,I=n.mode,G=e.child,tt=G.sibling,o=ia(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,tt!==null?u=ia(tt,u):(u=ps(u,I,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,I=e.child.memoizedState,I===null?I=bf(a):(G=I.cachePool,G!==null?(tt=An._currentValue,G=G.parent!==tt?{parent:tt,pool:tt}:G):G=cp(),I={baseLanes:I.baseLanes|a,cachePool:G}),u.memoizedState=I,u.childLanes=Tf(e,S,a),n.memoizedState=Bf,o):(Na(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Rf(e,n){return n=lc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function lc(e,n){return e=ai(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function wf(e,n,a){return mr(n,e.child,null,a),e=Rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Wu(e.return,n,a)}function Df(e,n,a,o,u){var A=e.memoizedState;A===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(A.isBackwards=n,A.rendering=null,A.renderingStartTime=0,A.last=o,A.tail=a,A.tailMode=u)}function Mg(e,n,a){var o=n.pendingProps,u=o.revealOrder,A=o.tail;if(Cn(e,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xg(e,a,n);else if(e.tag===19)xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(vt(hn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ac(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,A);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ac(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,A);break;case"together":Df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(yo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function Bv(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),wa(n,An,e.memoizedState.cache),Eo();break;case 27:case 5:ne(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(e,n,a):(Na(n),e=ua(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(yo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Mg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,_g(e,n,a);case 24:wa(n,An,e.memoizedState.cache)}return ua(e,n,a)}function Ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return _n=!1,Bv(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Be&&(n.flags&1048576)!==0&&np(n,zl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")zu(o)?(e=xs(o,e),n.tag=1,n=yg(null,n,o,e,a)):(n.tag=0,n=If(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===b){n.tag=11,n=pg(null,n,o,e,a);break t}else if(u===O){n.tag=14,n=gg(null,n,o,e,a);break t}}throw n=lt(o)||o,Error(s(306,n,""))}}return n;case 0:return If(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),yg(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var A=n.memoizedState;u=A.element,ef(e,n),bo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,wa(n,An,o),o!==A.cache&&Ku(n,[An],a,!0),Bo(),o=S.element,A.isDehydrated)if(A={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=A,n.memoizedState=A,n.flags&256){n=Sg(e,n,o,a);break t}else if(o!==u){u=gi(Error(s(424)),n),vo(u),n=Sg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Ti(e.firstChild),Hn=n,Be=!0,_s=null,Gi=!0,a=ag(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Eo(),o===u){n=ua(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return oc(e,n),e===null?(a=Rm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=Sc(dt.current).createElement(a),o[fn]=n,o[Ze]=e,Mn(o,a,e),rn(o),n.stateNode=o):n.memoizedState=Rm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Be&&(o=n.stateNode=Bm(n.type,n.pendingProps,dt.current),Hn=n,Gi=!0,u=tn,Ya(n.type)?(hA=u,tn=Ti(o.firstChild)):tn=u),Cn(e,n,n.pendingProps.children,a),oc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=tn)&&(o=ey(o,n.type,n.pendingProps,Gi),o!==null?(n.stateNode=o,Hn=n,tn=Ti(o.firstChild),Gi=!1,u=!0):u=!1),u||Es(n)),ne(n),u=n.type,A=n.pendingProps,S=e!==null?e.memoizedProps:null,o=A.children,cA(u,A)?o=null:S!==null&&cA(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(e,n,Ev,null,null,a),Jo._currentValue=u),oc(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=tn)&&(a=ny(a,n.pendingProps,Gi),a!==null?(n.stateNode=a,Hn=n,tn=null,e=!0):e=!1),e||Es(n)),null;case 13:return Cg(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mr(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return pg(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,wa(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=Ln(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return mg(e,n,n.type,n.pendingProps,a);case 19:return Mg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=lc(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ia(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return _g(e,n,a);case 24:return ys(n),o=Ln(An),e===null?(u=Zu(),u===null&&(u=ke,A=Ju(),u.pooledCache=A,A.refCount++,A!==null&&(u.pooledCacheLanes|=a),u=A),n.memoizedState={parent:o,cache:u},tf(n),wa(n,An,u)):((e.lanes&a)!==0&&(ef(e,n),bo(n,null,null,a),Bo()),u=e.memoizedState,A=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,An,o)):(o=A.cache,wa(n,An,o),o!==u.cache&&Ku(n,[An],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(e){e.flags|=4}function Bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(n)){if(n=vi.current,n!==null&&((Ee&4194048)===Ee?zi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==zi))throw Mo=$u,up;e.flags|=8192}}function cc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mt():536870912,e.lanes|=n,yr|=n)}function Qo(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function bv(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(An),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_o(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sp())),Je(n),null;case 26:return a=n.memoizedState,e===null?(fa(n),a!==null?(Je(n),Bg(n,a)):(Je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(fa(n),Je(n),Bg(n,a)):(Je(n),n.flags&=-16777217):(e.memoizedProps!==o&&fa(n),Je(n),n.flags&=-16777217),null;case 27:ze(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=bt.current,_o(n)?ip(n):(e=Bm(u,o,a),n.stateNode=e,fa(n))}return Je(n),null;case 5:if(ze(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(e=bt.current,_o(n))ip(n);else{switch(u=Sc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[fn]=n,e[Ze]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&fa(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=dt.current,_o(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||vm(e.nodeValue,a)),e||Es(n)}else e=Sc(e).createTextNode(o),e[fn]=n,n.stateNode=e}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=_o(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else Eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ca(n),n):(ca(n),null)}if(ca(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var A=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(A=o.memoizedState.cachePool.pool),A!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),cc(n,n.updateQueue),Je(n),null;case 4:return Yt(),e===null&&aA(n.stateNode.containerInfo),Je(n),null;case 10:return oa(n.type),Je(n),null;case 19:if(gt(hn),u=n.memoizedState,u===null)return Je(n),null;if(o=(n.flags&128)!==0,A=u.rendering,A===null)if(o)Qo(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(A=ac(e),A!==null){for(n.flags|=128,Qo(u,!1),e=A.updateQueue,n.updateQueue=e,cc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ep(a,e),a=a.sibling;return vt(hn,hn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>Ac&&(n.flags|=128,o=!0,Qo(u,!1),n.lanes=4194304)}else{if(!o)if(e=ac(A),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,cc(n,e),Qo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!A.alternate&&!Be)return Je(n),null}else 2*Ft()-u.renderingStartTime>Ac&&a!==536870912&&(n.flags|=128,o=!0,Qo(u,!1),n.lanes=4194304);u.isBackwards?(A.sibling=n.child,n.child=A):(e=u.last,e!==null?e.sibling=A:n.child=A,u.last=A)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=hn.current,vt(hn,o?e&1|2:e&1),n):(Je(n),null);case 22:case 23:return ca(n),rf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&cc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&gt(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(An),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Tv(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(An),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ze(n),null;case 13:if(ca(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Eo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return gt(hn),null;case 4:return Yt(),null;case 10:return oa(n.type),null;case 22:case 23:return ca(n),rf(),e!==null&&gt(Ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(An),null;case 25:return null;default:return null}}function bg(e,n){switch(qu(n),n.tag){case 3:oa(An),Yt();break;case 26:case 27:case 5:ze(n);break;case 4:Yt();break;case 13:ca(n);break;case 19:gt(hn);break;case 10:oa(n.type);break;case 22:case 23:ca(n),rf(),e!==null&&gt(Ss);break;case 24:oa(An)}}function No(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var A=a.create,S=a.inst;o=A(),S.destroy=o}a=a.next}while(a!==u)}}catch(I){Ge(n,n.return,I)}}function Fa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var A=u.next;o=A;do{if((o.tag&e)===e){var S=o.inst,I=S.destroy;if(I!==void 0){S.destroy=void 0,u=n;var G=a,tt=I;try{tt()}catch(At){Ge(u,G,At)}}}o=o.next}while(o!==A)}}catch(At){Ge(n,n.return,At)}}function Tg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gp(n,a)}catch(o){Ge(e,e.return,o)}}}function Rg(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function wg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Lf(e,n,a){try{var o=e.stateNode;Jv(o,e.type,a,n),o[Ze]=n}catch(u){Ge(e,e.return,u)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=yc));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Nf(e,n,a),e=e.sibling;e!==null;)Nf(e,n,a),e=e.sibling}function uc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(uc(e,n,a),e=e.sibling;e!==null;)uc(e,n,a),e=e.sibling}function Ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,a),n[fn]=e,n[Ze]=a}catch(A){Ge(e,e.return,A)}}var Aa=!1,an=!1,Pf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Rv(e,n){if(e=e.containerInfo,oA=bc,e=qd(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,A=o.focusNode;o=o.focusOffset;try{a.nodeType,A.nodeType}catch{a=null;break t}var S=0,I=-1,G=-1,tt=0,At=0,mt=e,nt=null;e:for(;;){for(var at;mt!==a||u!==0&&mt.nodeType!==3||(I=S+u),mt!==A||o!==0&&mt.nodeType!==3||(G=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(at=mt.firstChild)!==null;)nt=mt,mt=at;for(;;){if(mt===e)break e;if(nt===a&&++tt===u&&(I=S),nt===A&&++At===o&&(G=S),(at=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=at}a=I===-1||G===-1?null:{start:I,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(lA={focusedElem:e,selectionRange:a},bc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,A=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&A!==null){e=void 0,a=n,u=A.memoizedProps,A=A.memoizedState,o=a.stateNode;try{var ee=xs(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,A),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Ge(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fA(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fA(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Qg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(e,a),o&4&&No(5,a);break;case 1:if(Oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Tg(a),o&512&&Po(a,a.return);break;case 3:if(Oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:Oa(e,a),n===null&&o&4&&wg(a),o&512&&Po(a,a.return);break;case 12:Oa(e,a);break;case 13:Oa(e,a),o&4&&Fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ov.bind(null,a),iy(e,a))));break;case 22:if(o=a.memoizedState!==null||Aa,!o){n=n!==null&&n.memoizedState!==null||an,u=Aa;var A=an;Aa=o,(an=n)&&!A?Ga(e,a,(a.subtreeFlags&8772)!==0):Oa(e,a),Aa=u,an=A}break;case 30:break;default:Oa(e,a)}}function Ng(e){var n=e.alternate;n!==null&&(e.alternate=null,Ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,jn=!1;function ha(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:an||Hi(a,n),ha(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Hi(a,n);var o=Ye,u=jn;Ya(a.type)&&(Ye=a.stateNode,jn=!1),ha(e,n,a),Yo(a.stateNode),Ye=o,jn=u;break;case 5:an||Hi(a,n);case 6:if(o=Ye,u=jn,Ye=null,ha(e,n,a),Ye=o,jn=u,Ye!==null)if(jn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(A){Ge(a,n,A)}else try{Ye.removeChild(a.stateNode)}catch(A){Ge(a,n,A)}break;case 18:Ye!==null&&(jn?(e=Ye,Mm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tl(e)):Mm(Ye,a.stateNode));break;case 4:o=Ye,u=jn,Ye=a.stateNode.containerInfo,jn=!0,ha(e,n,a),Ye=o,jn=u;break;case 0:case 11:case 14:case 15:an||Fa(2,a,n),an||Fa(4,a,n),ha(e,n,a);break;case 1:an||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Rg(a,n,o)),ha(e,n,a);break;case 21:ha(e,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,ha(e,n,a),an=o;break;default:ha(e,n,a)}}function Fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(a){Ge(n,n.return,a)}}function wv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lg),n;default:throw Error(s(435,e.tag))}}function Ff(e,n){var a=wv(e);n.forEach(function(o){var u=Gv.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function si(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],A=e,S=n,I=S;t:for(;I!==null;){switch(I.tag){case 27:if(Ya(I.type)){Ye=I.stateNode,jn=!1;break t}break;case 5:Ye=I.stateNode,jn=!1;break t;case 3:case 4:Ye=I.stateNode.containerInfo,jn=!0;break t}I=I.return}if(Ye===null)throw Error(s(160));Pg(A,S,u),Ye=null,jn=!1,A=u.alternate,A!==null&&(A.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Og(n,e),n=n.sibling}var bi=null;function Og(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(n,e),ri(e),o&4&&(Fa(3,e,e.return),No(3,e),Fa(5,e,e.return));break;case 1:si(n,e),ri(e),o&512&&(an||a===null||Hi(a,a.return)),o&64&&Aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(si(n,e),ri(e),o&512&&(an||a===null||Hi(a,a.return)),o&4){var A=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":A=u.getElementsByTagName("title")[0],(!A||A[Oi]||A[fn]||A.namespaceURI==="http://www.w3.org/2000/svg"||A.hasAttribute("itemprop"))&&(A=u.createElement(o),u.head.insertBefore(A,u.querySelector("head > title"))),Mn(A,o,a),A[fn]=e,rn(A),o=A;break t;case"link":var S=Um("link","href",u).get(o+(a.href||""));if(S){for(var I=0;I<S.length;I++)if(A=S[I],A.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&A.getAttribute("rel")===(a.rel==null?null:a.rel)&&A.getAttribute("title")===(a.title==null?null:a.title)&&A.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(I,1);break e}}A=u.createElement(o),Mn(A,o,a),u.head.appendChild(A);break;case"meta":if(S=Um("meta","content",u).get(o+(a.content||""))){for(I=0;I<S.length;I++)if(A=S[I],A.getAttribute("content")===(a.content==null?null:""+a.content)&&A.getAttribute("name")===(a.name==null?null:a.name)&&A.getAttribute("property")===(a.property==null?null:a.property)&&A.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&A.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(I,1);break e}}A=u.createElement(o),Mn(A,o,a),u.head.appendChild(A);break;default:throw Error(s(468,o))}A[fn]=e,rn(A),o=A}e.stateNode=o}else Lm(u,e.type,e.stateNode);else e.stateNode=Dm(u,o,e.memoizedProps);else A!==o?(A===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):A.count--,o===null?Lm(u,e.type,e.stateNode):Dm(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:si(n,e),ri(e),o&512&&(an||a===null||Hi(a,a.return)),a!==null&&o&4&&Lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(si(n,e),ri(e),o&512&&(an||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{Wn(u,"")}catch(at){Ge(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Lf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(si(n,e),ri(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Ge(e,e.return,at)}}break;case 3:if(Mc=null,u=bi,bi=Cc(n.containerInfo),si(n,e),bi=u,ri(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(n.containerInfo)}catch(at){Ge(e,e.return,at)}Pf&&(Pf=!1,Gg(e));break;case 4:o=bi,bi=Cc(e.stateNode.containerInfo),si(n,e),ri(e),bi=o;break;case 12:si(n,e),ri(e);break;case 13:si(n,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ff(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,tt=Aa,At=an;if(Aa=tt||u,an=At||G,si(n,e),an=At,Aa=tt,ri(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Aa||an||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(A=G.stateNode,u)S=A.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{I=G.stateNode;var mt=G.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;I.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){Ge(G,G.return,at)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(at){Ge(G,G.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ff(e,a))));break;case 19:si(n,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ff(e,o)));break;case 30:break;case 21:break;default:si(n,e),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,A=Qf(e);uc(e,A,u);break;case 5:var S=a.stateNode;a.flags&32&&(Wn(S,""),a.flags&=-33);var I=Qf(e);uc(e,I,S);break;case 3:case 4:var G=a.stateNode.containerInfo,tt=Qf(e);Nf(e,tt,G);break;default:throw Error(s(161))}}catch(At){Ge(e,e.return,At)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qg(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ms(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rg(n,n.return,a),Ms(n);break;case 27:Yo(n.stateNode);case 26:case 5:Hi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function Ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,A=n,S=A.flags;switch(A.tag){case 0:case 11:case 15:Ga(u,A,a),No(4,A);break;case 1:if(Ga(u,A,a),o=A,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=A,u=o.updateQueue,u!==null){var I=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)pp(G[u],I)}catch(tt){Ge(o,o.return,tt)}}a&&S&64&&Tg(A),Po(A,A.return);break;case 27:Ug(A);case 26:case 5:Ga(u,A,a),a&&o===null&&S&4&&wg(A),Po(A,A.return);break;case 12:Ga(u,A,a);break;case 13:Ga(u,A,a),a&&S&4&&Fg(u,A);break;case 22:A.memoizedState===null&&Ga(u,A,a),Po(A,A.return);break;case 30:break;default:Ga(u,A,a)}n=n.sibling}}function Of(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&So(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e))}function ki(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zg(e,n,a,o),n=n.sibling}function zg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n,a,o),u&2048&&No(9,n);break;case 1:ki(e,n,a,o);break;case 3:ki(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e)));break;case 12:if(u&2048){ki(e,n,a,o),e=n.stateNode;try{var A=n.memoizedProps,S=A.id,I=A.onPostCommit;typeof I=="function"&&I(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else ki(e,n,a,o);break;case 13:ki(e,n,a,o);break;case 23:break;case 22:A=n.stateNode,S=n.alternate,n.memoizedState!==null?A._visibility&2?ki(e,n,a,o):Fo(e,n):A._visibility&2?ki(e,n,a,o):(A._visibility|=2,_r(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Of(S,n);break;case 24:ki(e,n,a,o),u&2048&&Gf(n.alternate,n);break;default:ki(e,n,a,o)}}function _r(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var A=e,S=n,I=a,G=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:_r(A,S,I,G,u),No(8,S);break;case 23:break;case 22:var At=S.stateNode;S.memoizedState!==null?At._visibility&2?_r(A,S,I,G,u):Fo(A,S):(At._visibility|=2,_r(A,S,I,G,u)),u&&tt&2048&&Of(S.alternate,S);break;case 24:_r(A,S,I,G,u),u&&tt&2048&&Gf(S.alternate,S);break;default:_r(A,S,I,G,u)}n=n.sibling}}function Fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&Of(o.alternate,o);break;case 24:Fo(a,o),u&2048&&Gf(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Oo=8192;function Er(e){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 26:Er(e),e.flags&Oo&&e.memoizedState!==null&&gy(bi,e.memoizedState,e.memoizedProps);break;case 5:Er(e);break;case 3:case 4:var n=bi;bi=Cc(e.stateNode.containerInfo),Er(e),bi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Oo,Oo=16777216,Er(e),Oo=n):Er(e));break;default:Er(e)}}function kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,qg(o,e)}kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,fc(e)):Go(e);break;default:Go(e)}}function fc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,qg(o,e)}kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),fc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,fc(n));break;default:fc(n)}e=e.sibling}}function qg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,A=o.return;if(Ng(o),o===a){En=null;break t}if(u!==null){u.return=A,En=u;break t}En=A}}}var Dv={getCacheForType:function(e){var n=Ln(An),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Uv=typeof WeakMap=="function"?WeakMap:Map,Re=0,ke=null,me=null,Ee=0,we=0,oi=null,za=!1,vr=!1,zf=!1,da=0,en=0,Ha=0,Is=0,Hf=0,yi=0,yr=0,zo=null,Zn=null,kf=!1,Vf=0,Ac=1/0,hc=null,ka=null,xn=0,Va=null,Sr=null,Cr=0,qf=0,Yf=null,Yg=null,Ho=0,Xf=null;function li(){if((Re&2)!==0&&Ee!==0)return Ee&-Ee;if(U.T!==null){var e=ur;return e!==0?e:tA()}return ye()}function Xg(){yi===0&&(yi=(Ee&536870912)===0||Be?Y():536870912);var e=vi.current;return e!==null&&(e.flags|=32),yi}function ci(e,n,a){(e===ke&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(xr(e,0),qa(e,Ee,yi,!1)),Nt(e,a),((Re&2)===0||e!==ke)&&(e===ke&&((Re&2)===0&&(Is|=a),en===4&&qa(e,Ee,yi,!1)),Vi(e))}function Wg(e,n,a){if((Re&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Tt(e,n),u=o?Nv(e,n):Jf(e,n,!0),A=o;do{if(u===0){vr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,A&&!Lv(a)){u=Jf(e,n,!1),A=!1;continue}if(u===2){if(A=n,e.errorRecoveryDisabledLanes&A)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var I=e;u=zo;var G=I.current.memoizedState.isDehydrated;if(G&&(xr(I,S).flags|=256),S=Jf(I,S,!1),S!==2){if(zf&&!G){I.errorRecoveryDisabledLanes|=A,Is|=A,u=4;break t}A=Zn,Zn=u,A!==null&&(Zn===null?Zn=A:Zn.push.apply(Zn,A))}u=S}if(A=!1,u!==2)continue}}if(u===1){xr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,A=u,A){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,yi,!za);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vf+300-Ft(),10<u)){if(qa(o,n,yi,!za),Ht(o,0,!0)!==0)break t;o.timeoutHandle=Cm(Kg.bind(null,o,a,Zn,hc,kf,n,yi,Is,yr,za,A,2,-0,0),u);break t}Kg(o,a,Zn,hc,kf,n,yi,Is,yr,za,A,0,-0,0)}}break}while(!0);Vi(e)}function Kg(e,n,a,o,u,A,S,I,G,tt,At,mt,nt,at){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Ko={stylesheets:null,count:0,unsuspend:py},Hg(n),mt=my(),mt!==null)){e.cancelPendingCommit=mt(nm.bind(null,e,n,A,a,o,u,S,I,G,At,1,nt,at)),qa(e,A,S,!tt);return}nm(e,n,A,a,o,u,S,I,G)}function Lv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],A=u.getSnapshot;u=u.value;try{if(!ii(A(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~Hf,n&=~Is,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var A=31-Qt(u),S=1<<A;o[A]=-1,u&=~S}a!==0&&_t(e,a,n)}function dc(){return(Re&6)===0?(ko(0),!1):!0}function Wf(){if(me!==null){if(we===0)var e=me.return;else e=me,ra=vs=null,ff(e),gr=null,Uo=0,e=me;for(;e!==null;)bg(e.alternate,e),e=e.return;me=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wf(),ke=e,me=a=ia(e.current,null),Ee=n,we=0,oi=null,za=!1,vr=Tt(e,n),zf=!1,yr=yi=Hf=Is=Ha=en=0,Zn=zo=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),A=1<<u;n|=e[u],o&=~A}return da=n,Nl(),a}function Jg(e,n){he=null,U.H=ec,n===xo||n===ql?(n=hp(),we=3):n===up?(n=hp(),we=4):we=n===dg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,me===null&&(en=1,rc(e,gi(n,e.current)))}function jg(){var e=U.H;return U.H=ec,e===null?ec:e}function Zg(){var e=U.A;return U.A=Dv,e}function Kf(){en=4,za||(Ee&4194048)!==Ee&&vi.current!==null||(vr=!0),(Ha&134217727)===0&&(Is&134217727)===0||ke===null||qa(ke,Ee,yi,!1)}function Jf(e,n,a){var o=Re;Re|=2;var u=jg(),A=Zg();(ke!==e||Ee!==n)&&(hc=null,xr(e,n)),n=!1;var S=en;t:do try{if(we!==0&&me!==null){var I=me,G=oi;switch(we){case 8:Wf(),S=6;break t;case 3:case 2:case 9:case 6:vi.current===null&&(n=!0);var tt=we;if(we=0,oi=null,Mr(e,I,G,tt),a&&vr){S=0;break t}break;default:tt=we,we=0,oi=null,Mr(e,I,G,tt)}}Qv(),S=en;break}catch(At){Jg(e,At)}while(!0);return n&&e.shellSuspendCounter++,ra=vs=null,Re=o,U.H=u,U.A=A,me===null&&(ke=null,Ee=0,Nl()),S}function Qv(){for(;me!==null;)$g(me)}function Nv(e,n){var a=Re;Re|=2;var o=jg(),u=Zg();ke!==e||Ee!==n?(hc=null,Ac=Ft()+500,xr(e,n)):vr=Tt(e,n);t:do try{if(we!==0&&me!==null){n=me;var A=oi;e:switch(we){case 1:we=0,oi=null,Mr(e,n,A,1);break;case 2:case 9:if(fp(A)){we=0,oi=null,tm(n);break}n=function(){we!==2&&we!==9||ke!==e||(we=7),Vi(e)},A.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:fp(A)?(we=0,oi=null,tm(n)):(we=0,oi=null,Mr(e,n,A,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var I=me;if(!S||Qm(S)){we=0,oi=null;var G=I.sibling;if(G!==null)me=G;else{var tt=I.return;tt!==null?(me=tt,pc(tt)):me=null}break e}}we=0,oi=null,Mr(e,n,A,5);break;case 6:we=0,oi=null,Mr(e,n,A,6);break;case 8:Wf(),en=6;break t;default:throw Error(s(462))}}Pv();break}catch(At){Jg(e,At)}while(!0);return ra=vs=null,U.H=o,U.A=u,Re=a,me!==null?0:(ke=null,Ee=0,Nl(),en)}function Pv(){for(;me!==null&&!Jt();)$g(me)}function $g(e){var n=Ig(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?pc(e):me=n}function tm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:ff(n);default:bg(a,n),n=me=ep(n,da),n=Ig(a,n,da)}e.memoizedProps=e.pendingProps,n===null?pc(e):me=n}function Mr(e,n,a,o){ra=vs=null,ff(n),gr=null,Uo=0;var u=n.return;try{if(Iv(e,u,n,a,Ee)){en=1,rc(e,gi(a,e.current)),me=null;return}}catch(A){if(u!==null)throw me=u,A;en=1,rc(e,gi(a,e.current)),me=null;return}n.flags&32768?(Be||o===1?e=!0:vr||(Ee&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=vi.current,o!==null&&o.tag===13&&(o.flags|=16384))),em(n,e)):pc(n)}function pc(e){var n=e;do{if((n.flags&32768)!==0){em(n,za);return}e=n.return;var a=bv(n.alternate,n,da);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);en===0&&(en=5)}function em(e,n){do{var a=Tv(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);en=6,me=null}function nm(e,n,a,o,u,A,S,I,G){e.cancelPendingCommit=null;do gc();while(xn!==0);if((Re&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(A=n.lanes|n.childLanes,A|=Ou,Ct(e,a,A,S,I,G),e===ke&&(me=ke=null,Ee=0),Sr=n,Va=e,Cr=a,qf=A,Yf=u,Yg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zv(We,function(){return om(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=z.p,z.p=2,S=Re,Re|=4;try{Rv(e,n,a)}finally{Re=S,z.p=u,U.T=o}}xn=1,im(),am(),sm()}}function im(){if(xn===1){xn=0;var e=Va,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=z.p;z.p=2;var u=Re;Re|=4;try{Og(n,e);var A=lA,S=qd(e.containerInfo),I=A.focusedElem,G=A.selectionRange;if(S!==I&&I&&I.ownerDocument&&Vd(I.ownerDocument.documentElement,I)){if(G!==null&&Lu(I)){var tt=G.start,At=G.end;if(At===void 0&&(At=tt),"selectionStart"in I)I.selectionStart=tt,I.selectionEnd=Math.min(At,I.value.length);else{var mt=I.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),ee=I.textContent.length,Zt=Math.min(G.start,ee),Ne=G.end===void 0?Zt:Math.min(G.end,ee);!at.extend&&Zt>Ne&&(S=Ne,Ne=Zt,Zt=S);var K=kd(I,Zt),k=kd(I,Ne);if(K&&k&&(at.rangeCount!==1||at.anchorNode!==K.node||at.anchorOffset!==K.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var $=mt.createRange();$.setStart(K.node,K.offset),at.removeAllRanges(),Zt>Ne?(at.addRange($),at.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),at.addRange($))}}}}for(mt=[],at=I;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<mt.length;I++){var pt=mt[I];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}bc=!!oA,lA=oA=null}finally{Re=u,z.p=o,U.T=a}}e.current=n,xn=2}}function am(){if(xn===2){xn=0;var e=Va,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=z.p;z.p=2;var u=Re;Re|=4;try{Qg(e,n.alternate,n)}finally{Re=u,z.p=o,U.T=a}}xn=3}}function sm(){if(xn===4||xn===3){xn=0,ve();var e=Va,n=Sr,a=Cr,o=Yg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Va=null,rm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),Te(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=z.p,z.p=2,U.T=null;try{for(var A=e.onRecoverableError,S=0;S<o.length;S++){var I=o[S];A(I.value,{componentStack:I.stack})}}finally{U.T=n,z.p=u}}(Cr&3)!==0&&gc(),Vi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Xf?Ho++:(Ho=0,Xf=e):Ho=0,ko(0)}}function rm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,So(n)))}function gc(e){return im(),am(),sm(),om()}function om(){if(xn!==5)return!1;var e=Va,n=qf;qf=0;var a=Te(Cr),o=U.T,u=z.p;try{z.p=32>a?32:a,U.T=null,a=Yf,Yf=null;var A=Va,S=Cr;if(xn=0,Sr=Va=null,Cr=0,(Re&6)!==0)throw Error(s(331));var I=Re;if(Re|=4,Vg(A.current),zg(A,A.current,S,a),Re=I,ko(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ft,A)}catch{}return!0}finally{z.p=u,U.T=o,rm(e,n)}}function lm(e,n,a){n=gi(a,n),n=Mf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Nt(e,2),Vi(e))}function Ge(e,n,a){if(e.tag===3)lm(e,e,a);else for(;n!==null;){if(n.tag===3){lm(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=gi(a,e),a=Ag(2),o=La(n,a,2),o!==null&&(hg(a,o,n,e),Nt(o,2),Vi(o));break}}n=n.return}}function jf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Uv;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),e=Fv.bind(null,e,n,a),n.then(e,e))}function Fv(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Ee&a)===a&&(en===4||en===3&&(Ee&62914560)===Ee&&300>Ft()-Vf?(Re&2)===0&&xr(e,0):Hf|=a,yr===Ee&&(yr=0)),Vi(e)}function cm(e,n){n===0&&(n=Mt()),e=rr(e,n),e!==null&&(Nt(e,n),Vi(e))}function Ov(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cm(e,a)}function Gv(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),cm(e,a)}function zv(e,n){return H(e,n)}var mc=null,Ir=null,Zf=!1,_c=!1,$f=!1,Bs=0;function Vi(e){e!==Ir&&e.next===null&&(Ir===null?mc=Ir=e:Ir=Ir.next=e),_c=!0,Zf||(Zf=!0,kv())}function ko(e,n){if(!$f&&_c){$f=!0;do for(var a=!1,o=mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var A=0;else{var S=o.suspendedLanes,I=o.pingedLanes;A=(1<<31-Qt(42|e)+1)-1,A&=u&~(S&~I),A=A&201326741?A&201326741|1:A?A|2:0}A!==0&&(a=!0,hm(o,A))}else A=Ee,A=Ht(o,o===ke?A:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(A&3)===0||Tt(o,A)||(a=!0,hm(o,A));o=o.next}while(a);$f=!1}}function Hv(){um()}function um(){_c=Zf=!1;var e=0;Bs!==0&&(jv()&&(e=Bs),Bs=0);for(var n=Ft(),a=null,o=mc;o!==null;){var u=o.next,A=fm(o,n);A===0?(o.next=null,a===null?mc=u:a.next=u,u===null&&(Ir=a)):(a=o,(e!==0||(A&3)!==0)&&(_c=!0)),o=u}ko(e)}function fm(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,A=e.pendingLanes&-62914561;0<A;){var S=31-Qt(A),I=1<<S,G=u[S];G===-1?((I&a)===0||(I&o)!==0)&&(u[S]=re(I,n)):G<=n&&(e.expiredLanes|=I),A&=~I}if(n=ke,a=Ee,a=Ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(we===2||we===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&be(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Tt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&be(o),Te(a)){case 2:case 8:a=oe;break;case 32:a=We;break;case 268435456:a=Q;break;default:a=We}return o=Am.bind(null,e),a=H(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&be(o),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(gc()&&e.callbackNode!==a)return null;var o=Ee;return o=Ht(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Wg(e,o,n),fm(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?Am.bind(null,e):null)}function hm(e,n){if(gc())return null;Wg(e,n,!0)}function kv(){$v(function(){(Re&6)!==0?H(Ot,Hv):um()})}function tA(){return Bs===0&&(Bs=Y()),Bs}function dm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function pm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Vv(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var A=dm((u[Ze]||null).action),S=o.submitter;S&&(n=(n=S[Ze]||null)?dm(n.formAction):S.getAttribute("formAction"),n!==null&&(A=n,S=null));var I=new Ul("action","action",null,o,u);e.push({event:I,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Bs!==0){var G=S?pm(u,S):new FormData(u);vf(a,{pending:!0,data:G,method:u.method,action:A},null,G)}}else typeof A=="function"&&(I.preventDefault(),G=S?pm(u,S):new FormData(u),vf(a,{pending:!0,data:G,method:u.method,action:A},A,G))},currentTarget:u}]})}}for(var eA=0;eA<Fu.length;eA++){var nA=Fu[eA],qv=nA.toLowerCase(),Yv=nA[0].toUpperCase()+nA.slice(1);Bi(qv,"on"+Yv)}Bi(Wd,"onAnimationEnd"),Bi(Kd,"onAnimationIteration"),Bi(Jd,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(cv,"onTransitionRun"),Bi(uv,"onTransitionStart"),Bi(fv,"onTransitionCancel"),Bi(jd,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),B("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),B("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),B("onBeforeInput",["compositionend","keypress","textInput","paste"]),B("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function gm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var A=void 0;if(n)for(var S=o.length-1;0<=S;S--){var I=o[S],G=I.instance,tt=I.currentTarget;if(I=I.listener,G!==A&&u.isPropagationStopped())break t;A=I,u.currentTarget=tt;try{A(u)}catch(At){sc(At)}u.currentTarget=null,A=G}else for(S=0;S<o.length;S++){if(I=o[S],G=I.instance,tt=I.currentTarget,I=I.listener,G!==A&&u.isPropagationStopped())break t;A=I,u.currentTarget=tt;try{A(u)}catch(At){sc(At)}u.currentTarget=null,A=G}}}}function _e(e,n){var a=n[Js];a===void 0&&(a=n[Js]=new Set);var o=e+"__bubble";a.has(o)||(mm(n,e,2,!1),a.add(o))}function iA(e,n,a){var o=0;n&&(o|=4),mm(a,e,o,n)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function aA(e){if(!e[Ec]){e[Ec]=!0,Bl.forEach(function(a){a!=="selectionchange"&&(Xv.has(a)||iA(a,!1,e),iA(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ec]||(n[Ec]=!0,iA("selectionchange",!1,n))}}function mm(e,n,a,o){switch(zm(n)){case 2:var u=vy;break;case 8:u=yy;break;default:u=_A}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function sA(e,n,a,o,u){var A=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var I=o.stateNode.containerInfo;if(I===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;I!==null;){if(S=ea(I),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=A=S;continue t}I=I.parentNode}}o=o.return}xd(function(){var tt=A,At=Cu(a),mt=[];t:{var nt=Zd.get(e);if(nt!==void 0){var at=Ul,ee=e;switch(e){case"keypress":if(wl(a)===0)break t;case"keydown":case"keyup":at=z0;break;case"focusin":ee="focus",at=Tu;break;case"focusout":ee="blur",at=Tu;break;case"beforeblur":case"afterblur":at=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=V0;break;case Wd:case Kd:case Jd:at=D0;break;case jd:at=Y0;break;case"scroll":case"scrollend":at=B0;break;case"wheel":at=W0;break;case"copy":case"cut":case"paste":at=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Td;break;case"toggle":case"beforetoggle":at=J0}var Zt=(n&4)!==0,Ne=!Zt&&(e==="scroll"||e==="scrollend"),K=Zt?nt!==null?nt+"Capture":null:nt;Zt=[];for(var k=tt,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||K===null||(pt=lo(k,K),pt!=null&&Zt.push(qo(k,pt,$))),Ne)break;k=k.return}0<Zt.length&&(nt=new at(nt,ee,null,a,At),mt.push({event:nt,listeners:Zt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&a!==Su&&(ee=a.relatedTarget||a.fromElement)&&(ea(ee)||ee[Fi]))break t;if((at||nt)&&(nt=At.window===At?At:(nt=At.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(ee=a.relatedTarget||a.toElement,at=tt,ee=ee?ea(ee):null,ee!==null&&(Ne=c(ee),Zt=ee.tag,ee!==Ne||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(at=null,ee=tt),at!==ee)){if(Zt=Bd,pt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Td,pt="onPointerLeave",K="onPointerEnter",k="pointer"),Ne=at==null?nt:fs(at),$=ee==null?nt:fs(ee),nt=new Zt(pt,k+"leave",at,a,At),nt.target=Ne,nt.relatedTarget=$,pt=null,ea(At)===tt&&(Zt=new Zt(K,k+"enter",ee,a,At),Zt.target=$,Zt.relatedTarget=Ne,pt=Zt),Ne=pt,at&&ee)e:{for(Zt=at,K=ee,k=0,$=Zt;$;$=Br($))k++;for($=0,pt=K;pt;pt=Br(pt))$++;for(;0<k-$;)Zt=Br(Zt),k--;for(;0<$-k;)K=Br(K),$--;for(;k--;){if(Zt===K||K!==null&&Zt===K.alternate)break e;Zt=Br(Zt),K=Br(K)}Zt=null}else Zt=null;at!==null&&_m(mt,nt,at,Zt,!1),ee!==null&&Ne!==null&&_m(mt,Ne,ee,Zt,!0)}}t:{if(nt=tt?fs(tt):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Gt=Pd;else if(Qd(nt))if(Fd)Gt=rv;else{Gt=av;var de=iv}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&yu(tt.elementType)&&(Gt=Pd):Gt=sv;if(Gt&&(Gt=Gt(e,tt))){Nd(mt,Gt,a,At);break t}de&&de(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Un(nt,"number",nt.value)}switch(de=tt?fs(tt):window,e){case"focusin":(Qd(de)||de.contentEditable==="true")&&(ir=de,Qu=tt,mo=null);break;case"focusout":mo=Qu=ir=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Yd(mt,a,At);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Yd(mt,a,At)}var Xt;if(wu)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else nr?Ud(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Rd&&a.locale!=="ko"&&(nr||te!=="onCompositionStart"?te==="onCompositionEnd"&&nr&&(Xt=Md()):(Ra=At,Iu="value"in Ra?Ra.value:Ra.textContent,nr=!0)),de=vc(tt,te),0<de.length&&(te=new bd(te,e,null,a,At),mt.push({event:te,listeners:de}),Xt?te.data=Xt:(Xt=Ld(a),Xt!==null&&(te.data=Xt)))),(Xt=Z0?$0(e,a):tv(e,a))&&(te=vc(tt,"onBeforeInput"),0<te.length&&(de=new bd("onBeforeInput","beforeinput",null,a,At),mt.push({event:de,listeners:te}),de.data=Xt)),Vv(mt,e,tt,a,At)}gm(mt,n)})}function qo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function vc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,A=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||A===null||(u=lo(e,a),u!=null&&o.unshift(qo(e,u,A)),u=lo(e,n),u!=null&&o.push(qo(e,u,A))),e.tag===3)return o;e=e.return}return[]}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _m(e,n,a,o,u){for(var A=n._reactName,S=[];a!==null&&a!==o;){var I=a,G=I.alternate,tt=I.stateNode;if(I=I.tag,G!==null&&G===o)break;I!==5&&I!==26&&I!==27||tt===null||(G=tt,u?(tt=lo(a,A),tt!=null&&S.unshift(qo(a,tt,G))):u||(tt=lo(a,A),tt!=null&&S.push(qo(a,tt,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Wv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(Wv,`
`).replace(Kv,"")}function vm(e,n){return n=Em(n),Em(e)===n}function yc(){}function Qe(e,n,a,o,u,A){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Wn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Wn(e,""+o);break;case"className":Pt(e,"class",o);break;case"tabIndex":Pt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,o);break;case"style":Sd(e,o,A);break;case"data":if(n!=="object"){Pt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof A=="function"&&(a==="formAction"?(n!=="input"&&Qe(e,n,"name",u.name,u,null),Qe(e,n,"formEncType",u.formEncType,u,null),Qe(e,n,"formMethod",u.formMethod,u,null),Qe(e,n,"formTarget",u.formTarget,u,null)):(Qe(e,n,"encType",u.encType,u,null),Qe(e,n,"method",u.method,u,null),Qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=yc);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),wt(e,"popover",o);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M0.get(a)||a,wt(e,a,o))}}function rA(e,n,a,o,u,A){switch(a){case"style":Sd(e,o,A);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Wn(e,o):(typeof o=="number"||typeof o=="bigint")&&Wn(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=yc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),A=e[Ze]||null,A=A!=null?A[a]:null,typeof A=="function"&&e.removeEventListener(n,A,u),typeof o=="function")){typeof A!="function"&&A!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):wt(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,A;for(A in a)if(a.hasOwnProperty(A)){var S=a[A];if(S!=null)switch(A){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,A,S,a,null)}}u&&Qe(e,n,"srcSet",a.srcSet,a,null),o&&Qe(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var I=A=S=u=null,G=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var At=a[o];if(At!=null)switch(o){case"name":u=At;break;case"type":S=At;break;case"checked":G=At;break;case"defaultChecked":tt=At;break;case"value":A=At;break;case"defaultValue":I=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(s(137,n));break;default:Qe(e,n,o,At,a,null)}}zn(e,A,I,G,tt,S,u,!1),ge(e);return;case"select":_e("invalid",e),o=S=A=null;for(u in a)if(a.hasOwnProperty(u)&&(I=a[u],I!=null))switch(u){case"value":A=I;break;case"defaultValue":S=I;break;case"multiple":o=I;default:Qe(e,n,u,I,a,null)}n=A,a=S,e.multiple=!!o,n!=null?$e(e,!!o,n,!1):a!=null&&$e(e,!!o,a,!0);return;case"textarea":_e("invalid",e),A=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(I=a[S],I!=null))switch(S){case"value":o=I;break;case"defaultValue":u=I;break;case"children":A=I;break;case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(91));break;default:Qe(e,n,S,I,a,null)}$s(e,o,u,A),ge(e);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(e,n,G,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)_e(Vo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,tt,o,a,null)}return;default:if(yu(n)){for(At in a)a.hasOwnProperty(At)&&(o=a[At],o!==void 0&&rA(e,n,At,o,a,void 0));return}}for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null&&Qe(e,n,I,o,a,null))}function Jv(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,A=null,S=null,I=null,G=null,tt=null,At=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":G=mt;default:o.hasOwnProperty(at)||Qe(e,n,at,null,o,mt)}}for(var nt in o){var at=o[nt];if(mt=a[nt],o.hasOwnProperty(nt)&&(at!=null||mt!=null))switch(nt){case"type":A=at;break;case"name":u=at;break;case"checked":tt=at;break;case"defaultChecked":At=at;break;case"value":S=at;break;case"defaultValue":I=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==mt&&Qe(e,n,nt,at,o,mt)}}Oe(e,S,I,G,tt,At,A,u);return;case"select":at=S=I=nt=null;for(A in a)if(G=a[A],a.hasOwnProperty(A)&&G!=null)switch(A){case"value":break;case"multiple":at=G;default:o.hasOwnProperty(A)||Qe(e,n,A,null,o,G)}for(u in o)if(A=o[u],G=a[u],o.hasOwnProperty(u)&&(A!=null||G!=null))switch(u){case"value":nt=A;break;case"defaultValue":I=A;break;case"multiple":S=A;default:A!==G&&Qe(e,n,u,A,o,G)}n=I,a=S,o=at,nt!=null?$e(e,!!a,nt,!1):!!o!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(I in a)if(u=a[I],a.hasOwnProperty(I)&&u!=null&&!o.hasOwnProperty(I))switch(I){case"value":break;case"children":break;default:Qe(e,n,I,null,o,u)}for(S in o)if(u=o[S],A=a[S],o.hasOwnProperty(S)&&(u!=null||A!=null))switch(S){case"value":nt=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==A&&Qe(e,n,S,u,o,A)}Sn(e,nt,at);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Qe(e,n,ee,null,o,nt)}for(G in o)if(nt=o[G],at=a[G],o.hasOwnProperty(G)&&nt!==at&&(nt!=null||at!=null))switch(G){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Qe(e,n,G,nt,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)nt=a[Zt],a.hasOwnProperty(Zt)&&nt!=null&&!o.hasOwnProperty(Zt)&&Qe(e,n,Zt,null,o,nt);for(tt in o)if(nt=o[tt],at=a[tt],o.hasOwnProperty(tt)&&nt!==at&&(nt!=null||at!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Qe(e,n,tt,nt,o,at)}return;default:if(yu(n)){for(var Ne in a)nt=a[Ne],a.hasOwnProperty(Ne)&&nt!==void 0&&!o.hasOwnProperty(Ne)&&rA(e,n,Ne,void 0,o,nt);for(At in o)nt=o[At],at=a[At],!o.hasOwnProperty(At)||nt===at||nt===void 0&&at===void 0||rA(e,n,At,nt,o,at);return}}for(var K in a)nt=a[K],a.hasOwnProperty(K)&&nt!=null&&!o.hasOwnProperty(K)&&Qe(e,n,K,null,o,nt);for(mt in o)nt=o[mt],at=a[mt],!o.hasOwnProperty(mt)||nt===at||nt==null&&at==null||Qe(e,n,mt,nt,o,at)}var oA=null,lA=null;function Sc(e){return e.nodeType===9?e:e.ownerDocument}function ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function cA(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uA=null;function jv(){var e=window.event;return e&&e.type==="popstate"?e===uA?!1:(uA=e,!0):(uA=null,!1)}var Cm=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(e){return xm.resolve(null).then(e).catch(ty)}:Cm;function ty(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Mm(e,n){var a=n,o=0,u=0;do{var A=a.nextSibling;if(e.removeChild(a),A&&A.nodeType===8)if(a=A.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Yo(S.documentElement),a&2&&Yo(S.body),a&4)for(a=S.head,Yo(a),S=a.firstChild;S;){var I=S.nextSibling,G=S.nodeName;S[Oi]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=I}}if(u===0){e.removeChild(A),tl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=A}while(a);tl(n)}function fA(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fA(a),Zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ey(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Oi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(A=e.getAttribute("rel"),A==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(A!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(A=e.getAttribute("src"),(A!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&A&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var A=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===A)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function ny(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ti(e.nextSibling),e===null))return null;return e}function AA(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function iy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var hA=null;function Im(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Bm(e,n,a){switch(n=Sc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zs(e)}var Si=new Map,bm=new Set;function Cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=z.d;z.d={f:ay,r:sy,D:ry,C:oy,L:ly,m:cy,X:fy,S:uy,M:Ay};function ay(){var e=pa.f(),n=dc();return e||n}function sy(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):pa.r(e)}var br=typeof document>"u"?null:document;function Tm(e,n,a){var o=br;if(o&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),bm.has(u)||(bm.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),rn(n),o.head.appendChild(n)))}}function ry(e){pa.D(e),Tm("dns-prefetch",e,null)}function oy(e,n){pa.C(e,n),Tm("preconnect",e,n)}function ly(e,n,a){pa.L(e,n,a);var o=br;if(o&&e&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+mn(a.imageSizes)+'"]')):u+='[href="'+mn(e)+'"]';var A=u;switch(n){case"style":A=Tr(e);break;case"script":A=Rr(e)}Si.has(A)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(A,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Xo(A))||n==="script"&&o.querySelector(Wo(A))||(n=o.createElement("link"),Mn(n,"link",e),rn(n),o.head.appendChild(n)))}}function cy(e,n){pa.m(e,n);var a=br;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(e)+'"]',A=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":A=Rr(e)}if(!Si.has(A)&&(e=g({rel:"modulepreload",href:e},n),Si.set(A,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(A)))return}o=a.createElement("link"),Mn(o,"link",e),rn(o),a.head.appendChild(o)}}}function uy(e,n,a){pa.S(e,n,a);var o=br;if(o&&e){var u=Ta(o).hoistableStyles,A=Tr(e);n=n||"default";var S=u.get(A);if(!S){var I={loading:0,preload:null};if(S=o.querySelector(Xo(A)))I.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(A))&&dA(e,a);var G=S=o.createElement("link");rn(G),Mn(G,"link",e),G._p=new Promise(function(tt,At){G.onload=tt,G.onerror=At}),G.addEventListener("load",function(){I.loading|=1}),G.addEventListener("error",function(){I.loading|=2}),I.loading|=4,xc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:I},u.set(A,S)}}}function fy(e,n){pa.X(e,n);var a=br;if(a&&e){var o=Ta(a).hoistableScripts,u=Rr(e),A=o.get(u);A||(A=a.querySelector(Wo(u)),A||(e=g({src:e,async:!0},n),(n=Si.get(u))&&pA(e,n),A=a.createElement("script"),rn(A),Mn(A,"link",e),a.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},o.set(u,A))}}function Ay(e,n){pa.M(e,n);var a=br;if(a&&e){var o=Ta(a).hoistableScripts,u=Rr(e),A=o.get(u);A||(A=a.querySelector(Wo(u)),A||(e=g({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&pA(e,n),A=a.createElement("script"),rn(A),Mn(A,"link",e),a.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},o.set(u,A))}}function Rm(e,n,a,o){var u=(u=dt.current)?Cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=Ta(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tr(a.href);var A=Ta(u).hoistableStyles,S=A.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},A.set(e,S),(A=u.querySelector(Xo(e)))&&!A._p&&(S.instance=A,S.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),A||hy(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Ta(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Tr(e){return'href="'+mn(e)+'"'}function Xo(e){return'link[rel="stylesheet"]['+e+"]"}function wm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function hy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),rn(n),e.head.appendChild(n))}function Rr(e){return'[src="'+mn(e)+'"]'}function Wo(e){return"script[async]"+e}function Dm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),Mn(o,"style",u),xc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Tr(a.href);var A=e.querySelector(Xo(u));if(A)return n.state.loading|=4,n.instance=A,rn(A),A;o=wm(a),(u=Si.get(u))&&dA(o,u),A=(e.ownerDocument||e).createElement("link"),rn(A);var S=A;return S._p=new Promise(function(I,G){S.onload=I,S.onerror=G}),Mn(A,"link",o),n.state.loading|=4,xc(A,a.precedence,e),n.instance=A;case"script":return A=Rr(a.src),(u=e.querySelector(Wo(A)))?(n.instance=u,rn(u),u):(o=a,(u=Si.get(A))&&(o=g({},a),pA(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,e));return n.instance}function xc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,A=u,S=0;S<o.length;S++){var I=o[S];if(I.dataset.precedence===n)A=I;else if(A!==u)break}A?A.parentNode.insertBefore(e,A.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dA(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pA(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Mc=null;function Um(e,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var A=a[u];if(!(A[Oi]||A[fn]||e==="link"&&A.getAttribute("rel")==="stylesheet")&&A.namespaceURI!=="http://www.w3.org/2000/svg"){var S=A.getAttribute(n)||"";S=e+S;var I=o.get(S);I?I.push(A):o.set(S,[A])}}return o}function Lm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function dy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ko=null;function py(){}function gy(e,n,a){if(Ko===null)throw Error(s(475));var o=Ko;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Tr(a.href),A=e.querySelector(Xo(u));if(A){e=A._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ic.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=A,rn(A);return}A=e.ownerDocument||e,a=wm(a),(u=Si.get(u))&&dA(a,u),A=A.createElement("link"),rn(A);var S=A;S._p=new Promise(function(I,G){S.onload=I,S.onerror=G}),Mn(A,"link",a),n.instance=A}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ic.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function my(){if(Ko===null)throw Error(s(475));var e=Ko;return e.stylesheets&&e.count===0&&gA(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&gA(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ic(){if(this.count--,this.count===0){if(this.stylesheets)gA(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bc=null;function gA(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,n.forEach(_y,e),Bc=null,Ic.call(e))}function _y(e,n){if(!(n.state.loading&4)){var a=Bc.get(e);if(a)var o=a.get(null);else{a=new Map,Bc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),A=0;A<u.length;A++){var S=u[A];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),A=a.get(S)||o,A===o&&a.set(null,u),a.set(S,u),this.count++,o=Ic.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),A?A.parentNode.insertBefore(u,A.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Jo={$$typeof:w,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Ey(e,n,a,o,u,A,S,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.hiddenUpdates=Bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=A,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Nm(e,n,a,o,u,A,S,I,G,tt,At,mt){return e=new Ey(e,n,a,S,I,G,tt,mt),n=1,A===!0&&(n|=24),A=ai(3,null,null,n),e.current=A,A.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,A.memoizedState={element:o,isDehydrated:a,cache:n},tf(A),e}function Pm(e){return e?(e=or,e):or}function Fm(e,n,a,o,u,A){u=Pm(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},A=A===void 0?null:A,A!==null&&(o.callback=A),a=La(e,o,n),a!==null&&(ci(a,e,n),Io(a,e,n))}function Om(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mA(e,n){Om(e,n),(e=e.alternate)&&Om(e,n)}function Gm(e){if(e.tag===13){var n=rr(e,67108864);n!==null&&ci(n,e,67108864),mA(e,67108864)}}var bc=!0;function vy(e,n,a,o){var u=U.T;U.T=null;var A=z.p;try{z.p=2,_A(e,n,a,o)}finally{z.p=A,U.T=u}}function yy(e,n,a,o){var u=U.T;U.T=null;var A=z.p;try{z.p=8,_A(e,n,a,o)}finally{z.p=A,U.T=u}}function _A(e,n,a,o){if(bc){var u=EA(o);if(u===null)sA(e,n,o,Tc,a),Hm(e,o);else if(Cy(u,e,n,a,o))o.stopPropagation();else if(Hm(e,o),n&4&&-1<Sy.indexOf(e)){for(;u!==null;){var A=ba(u);if(A!==null)switch(A.tag){case 3:if(A=A.stateNode,A.current.memoizedState.isDehydrated){var S=Wt(A.pendingLanes);if(S!==0){var I=A;for(I.pendingLanes|=2,I.entangledLanes|=2;S;){var G=1<<31-Qt(S);I.entanglements[1]|=G,S&=~G}Vi(A),(Re&6)===0&&(Ac=Ft()+500,ko(0))}}break;case 13:I=rr(A,2),I!==null&&ci(I,A,2),dc(),mA(A,2)}if(A=EA(o),A===null&&sA(e,n,o,Tc,a),A===u)break;u=A}u!==null&&o.stopPropagation()}else sA(e,n,o,null,a)}}function EA(e){return e=Cu(e),vA(e)}var Tc=null;function vA(e){if(Tc=null,e=ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Tc=e,null}function zm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case Ot:return 2;case oe:return 8;case We:case Ke:return 32;case Q:return 268435456;default:return 32}default:return 32}}var yA=!1,Xa=null,Wa=null,Ka=null,jo=new Map,Zo=new Map,Ja=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hm(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function $o(e,n,a,o,u,A){return e===null||e.nativeEvent!==A?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:A,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&Gm(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cy(e,n,a,o,u){switch(n){case"focusin":return Xa=$o(Xa,e,n,a,o,u),!0;case"dragenter":return Wa=$o(Wa,e,n,a,o,u),!0;case"mouseover":return Ka=$o(Ka,e,n,a,o,u),!0;case"pointerover":var A=u.pointerId;return jo.set(A,$o(jo.get(A)||null,e,n,a,o,u)),!0;case"gotpointercapture":return A=u.pointerId,Zo.set(A,$o(Zo.get(A)||null,e,n,a,o,u)),!0}return!1}function km(e){var n=ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Mi(e.priority,function(){if(a.tag===13){var o=li();o=ie(o);var u=rr(a,o);u!==null&&ci(u,a,o),mA(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=EA(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Su=o,a.target.dispatchEvent(o),Su=null}else return n=ba(a),n!==null&&Gm(n),e.blockedOn=a,!1;n.shift()}return!0}function Vm(e,n,a){Rc(e)&&a.delete(n)}function xy(){yA=!1,Xa!==null&&Rc(Xa)&&(Xa=null),Wa!==null&&Rc(Wa)&&(Wa=null),Ka!==null&&Rc(Ka)&&(Ka=null),jo.forEach(Vm),Zo.forEach(Vm)}function wc(e,n){e.blockedOn===n&&(e.blockedOn=null,yA||(yA=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xy)))}var Dc=null;function qm(e){Dc!==e&&(Dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(vA(o||a)===null)continue;break}var A=ba(a);A!==null&&(e.splice(n,3),n-=3,vf(A,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function tl(e){function n(G){return wc(G,e)}Xa!==null&&wc(Xa,e),Wa!==null&&wc(Wa,e),Ka!==null&&wc(Ka,e),jo.forEach(n),Zo.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)km(a),a.blockedOn===null&&Ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],A=a[o+1],S=u[Ze]||null;if(typeof A=="function")S||qm(a);else if(S){var I=null;if(A&&A.hasAttribute("formAction")){if(u=A,S=A[Ze]||null)I=S.formAction;else if(vA(u)!==null)continue}else I=S.action;typeof I=="function"?a[o+1]=I:(a.splice(o,3),o-=3),qm(a)}}}function SA(e){this._internalRoot=e}Uc.prototype.render=SA.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();Fm(a,o,e,n,null,null)},Uc.prototype.unmount=SA.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fm(e.current,2,null,e,null,null),dc(),n[Fi]=null}};function Uc(e){this._internalRoot=e}Uc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,e),a===0&&km(e)}};var Ym=t.version;if(Ym!=="19.1.1")throw Error(s(527,Ym,"19.1.1"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var My={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{ft=Lc.inject(My),Et=Lc}catch{}}return nl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=lg,A=cg,S=ug,I=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(A=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(I=n.unstable_transitionCallbacks)),n=Nm(e,1,!1,null,null,a,o,u,A,S,I,null),e[Fi]=n.current,aA(e),new SA(n)},nl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",A=lg,S=cg,I=ug,G=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(A=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(I=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Nm(e,1,!0,n,a??null,o,u,A,S,I,G,tt),n.context=Pm(null),a=n.current,o=li(),o=ie(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Nt(n,a),Vi(n),e[Fi]=n.current,aA(e),new Uc(n)},nl.version="19.1.1",nl}var n_;function Qy(){if(n_)return MA.exports;n_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),MA.exports=Ly(),MA.exports}var Ny=Qy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="179",jr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,i_=1,Fy=2,vE=1,yE=2,Sa=3,ls=0,Xn=1,Xi=2,rs=0,Os=1,a_=2,s_=3,r_=4,Oy=5,Qs=100,Gy=101,zy=102,Hy=103,ky=104,Vy=200,qy=201,Yy=202,Xy=203,yh=204,Sh=205,Wy=206,Ky=207,Jy=208,jy=209,Zy=210,$y=211,tS=212,eS=213,nS=214,Ch=0,xh=1,Mh=2,no=3,Ih=4,Bh=5,bh=6,Th=7,SE=0,iS=1,aS=2,os=0,sS=1,rS=2,oS=3,lS=4,cS=5,uS=6,fS=7,CE=300,qs=301,io=302,Rh=303,wh=304,gu=306,Dh=1e3,Ji=1001,Uh=1002,di=1003,AS=1004,Qc=1005,On=1006,TA=1007,xa=1008,sn=1009,xE=1010,ME=1011,hl=1012,sd=1013,Ys=1014,ni=1015,Qi=1016,rd=1017,od=1018,dl=1020,IE=35902,BE=1021,bE=1022,Tn=1023,pl=1026,gl=1027,Ps=1028,ld=1029,Fs=1030,cd=1031,ud=1033,Zr=33776,Gs=33777,$r=33778,zs=33779,cu=35840,Lh=35841,uu=35842,Qh=35843,fu=36196,ml=37492,_l=37496,Hs=37808,Nh=37809,Ph=37810,Fh=37811,El=37812,Oh=37813,Gh=37814,zh=37815,Hh=37816,kh=37817,Vh=37818,qh=37819,Yh=37820,Xh=37821,ks=36492,Wh=36494,Au=36495,TE=36283,Kh=36284,Jh=36285,jh=36286,hS=3200,dS=3201,RE=0,pS=1,Wi="",Ai="srgb",Pi="srgb-linear",hu="linear",Pe="srgb",wr=7680,o_=519,gS=512,mS=513,_S=514,wE=515,ES=516,vS=517,yS=518,SS=519,Zh=35044,l_="300 es",ji=2e3,du=2001;class Ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let c_=1234567;const ul=Math.PI/180,vl=180/Math.PI;function Ia(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function se(r,t,i){return Math.max(t,Math.min(i,r))}function fd(r,t){return(r%t+t)%t}function CS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function xS(r,t,i){return r!==t?(i-r)/(t-r):0}function fl(r,t,i){return(1-i)*r+i*t}function MS(r,t,i,s){return fl(r,t,1-Math.exp(-i*s))}function IS(r,t=1){return t-Math.abs(fd(r,t*2)-t)}function BS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function bS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function TS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function RS(r,t){return r+Math.random()*(t-r)}function wS(r){return r*(.5-Math.random())}function DS(r){r!==void 0&&(c_=r);let t=c_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function US(r){return r*ul}function LS(r){return r*vl}function QS(r){return(r&r-1)===0&&r!==0}function NS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function FS(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),p=f(i/2),d=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),E=f((t-s)/2),v=c((s-t)/2),C=f((s-t)/2);switch(l){case"XYX":r.set(h*g,p*_,p*E,h*d);break;case"YZY":r.set(p*E,h*g,p*_,h*d);break;case"ZXZ":r.set(p*_,p*E,h*g,h*d);break;case"XZX":r.set(h*g,p*C,p*v,h*d);break;case"YXY":r.set(p*v,h*g,p*C,h*d);break;case"ZYZ":r.set(p*C,p*v,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function De(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const DE={DEG2RAD:ul,RAD2DEG:vl,generateUUID:Ia,clamp:se,euclideanModulo:fd,mapLinear:CS,inverseLerp:xS,lerp:fl,damp:MS,pingpong:IS,smoothstep:BS,smootherstep:bS,randInt:TS,randFloat:RS,randFloatSpread:wS,seededRandom:DS,degToRad:US,radToDeg:LS,isPowerOfTwo:QS,ceilPowerOfTwo:NS,floorPowerOfTwo:PS,setQuaternionFromProperEuler:FS,normalize:De,denormalize:Ui};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=se(this.x,t.x,i.x),this.y=se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=se(this.x,t,i),this.y=se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let p=s[l+0],d=s[l+1],g=s[l+2],_=s[l+3];const E=c[f+0],v=c[f+1],C=c[f+2],x=c[f+3];if(h===0){t[i+0]=p,t[i+1]=d,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=E,t[i+1]=v,t[i+2]=C,t[i+3]=x;return}if(_!==x||p!==E||d!==v||g!==C){let y=1-h;const m=p*E+d*v+g*C+_*x,L=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const N=Math.sqrt(w),F=Math.atan2(N,m*L);y=Math.sin(y*F)/N,h=Math.sin(h*F)/N}const b=h*L;if(p=p*y+E*b,d=d*y+v*b,g=g*y+C*b,_=_*y+x*b,y===1-h){const N=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=N,d*=N,g*=N,_*=N}}t[i]=p,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],p=s[l+1],d=s[l+2],g=s[l+3],_=c[f],E=c[f+1],v=c[f+2],C=c[f+3];return t[i]=h*C+g*_+p*v-d*E,t[i+1]=p*C+g*E+d*_-h*v,t[i+2]=d*C+g*v+h*E-p*_,t[i+3]=g*C-h*_-p*E-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,d=h(s/2),g=h(l/2),_=h(c/2),E=p(s/2),v=p(l/2),C=p(c/2);switch(f){case"XYZ":this._x=E*g*_+d*v*C,this._y=d*v*_-E*g*C,this._z=d*g*C+E*v*_,this._w=d*g*_-E*v*C;break;case"YXZ":this._x=E*g*_+d*v*C,this._y=d*v*_-E*g*C,this._z=d*g*C-E*v*_,this._w=d*g*_+E*v*C;break;case"ZXY":this._x=E*g*_-d*v*C,this._y=d*v*_+E*g*C,this._z=d*g*C+E*v*_,this._w=d*g*_-E*v*C;break;case"ZYX":this._x=E*g*_-d*v*C,this._y=d*v*_+E*g*C,this._z=d*g*C-E*v*_,this._w=d*g*_+E*v*C;break;case"YZX":this._x=E*g*_+d*v*C,this._y=d*v*_+E*g*C,this._z=d*g*C-E*v*_,this._w=d*g*_-E*v*C;break;case"XZY":this._x=E*g*_-d*v*C,this._y=d*v*_-E*g*C,this._z=d*g*C+E*v*_,this._w=d*g*_+E*v*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],d=i[2],g=i[6],_=i[10],E=s+h+_;if(E>0){const v=.5/Math.sqrt(E+1);this._w=.25/v,this._x=(g-p)*v,this._y=(c-d)*v,this._z=(f-l)*v}else if(s>h&&s>_){const v=2*Math.sqrt(1+s-h-_);this._w=(g-p)/v,this._x=.25*v,this._y=(l+f)/v,this._z=(c+d)/v}else if(h>_){const v=2*Math.sqrt(1+h-s-_);this._w=(c-d)/v,this._x=(l+f)/v,this._y=.25*v,this._z=(p+g)/v}else{const v=2*Math.sqrt(1+_-s-h);this._w=(f-l)/v,this._x=(c+d)/v,this._y=(p+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,d=i._z,g=i._w;return this._x=s*g+f*h+l*d-c*p,this._y=l*g+f*p+c*h-s*d,this._z=c*g+f*d+s*p-l*h,this._w=f*g-s*h-l*p-c*d,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const v=1-i;return this._w=v*f+i*this._w,this._x=v*s+i*this._x,this._y=v*l+i*this._y,this._z=v*c+i*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),_=Math.sin((1-i)*g)/d,E=Math.sin(i*g)/d;return this._w=f*_+this._w*E,this._x=s*_+this._x*E,this._y=l*_+this._y*E,this._z=c*_+this._z*E,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,i=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(u_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(u_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,d=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+p*d+f*_-h*g,this.y=s+p*g+h*d-c*_,this.z=l+p*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=se(this.x,t.x,i.x),this.y=se(this.y,t.y,i.y),this.z=se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=se(this.x,t,i),this.y=se(this.y,t,i),this.z=se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return RA.copy(this).projectOnVector(t),this.sub(RA)}reflect(t){return this.sub(RA.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const RA=new X,u_=new Xs;class ce{constructor(t,i,s,l,c,f,h,p,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,p,d)}set(t,i,s,l,c,f,h,p,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],p=s[6],d=s[1],g=s[4],_=s[7],E=s[2],v=s[5],C=s[8],x=l[0],y=l[3],m=l[6],L=l[1],w=l[4],b=l[7],N=l[2],F=l[5],O=l[8];return c[0]=f*x+h*L+p*N,c[3]=f*y+h*w+p*F,c[6]=f*m+h*b+p*O,c[1]=d*x+g*L+_*N,c[4]=d*y+g*w+_*F,c[7]=d*m+g*b+_*O,c[2]=E*x+v*L+C*N,c[5]=E*y+v*w+C*F,c[8]=E*m+v*b+C*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return i*f*g-i*h*d-s*c*g+s*h*p+l*c*d-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=g*f-h*d,E=h*p-g*c,v=d*c-f*p,C=i*_+s*E+l*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/C;return t[0]=_*x,t[1]=(l*d-g*s)*x,t[2]=(h*s-l*f)*x,t[3]=E*x,t[4]=(g*i-l*p)*x,t[5]=(l*c-h*i)*x,t[6]=v*x,t[7]=(s*p-d*i)*x,t[8]=(f*i-s*c)*x,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const p=Math.cos(c),d=Math.sin(c);return this.set(s*p,s*d,-s*(p*f+d*h)+f+t,-l*d,l*p,-l*(-d*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(wA.makeScale(t,i)),this}rotate(t){return this.premultiply(wA.makeRotation(-t)),this}translate(t,i){return this.premultiply(wA.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wA=new ce;function UE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function OS(){const r=yl("canvas");return r.style.display="block",r}const f_={};function to(r){r in f_||(f_[r]=!0,console.warn(r))}function GS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const A_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zS(){const r={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Pe&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pe&&(l.r=eo(l.r),l.g=eo(l.g),l.b=eo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wi?hu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Pi]:{primaries:t,whitePoint:s,transfer:hu,toXYZ:A_,fromXYZ:h_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:A_,fromXYZ:h_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const Ie=zS();function Ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class HS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Dr===void 0&&(Dr=yl("canvas")),Dr.width=t.width,Dr.height=t.height;const l=Dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=yl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ba(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ba(i[s]/255)*255):i[s]=Ba(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kS=0;class Ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ia(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(DA(l[f].image)):c.push(DA(l[f]))}else c=DA(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function DA(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;const UA=new X;class Rn extends Ks{constructor(t=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,s=Ji,l=Ji,c=On,f=xa,h=Tn,p=sn,d=Rn.DEFAULT_ANISOTROPY,g=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ia(),this.name="",this.source=new Ad(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(UA).x}get height(){return this.source.getSize(UA).y}get depth(){return this.source.getSize(UA).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==CE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=CE;Rn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,i=0,s=0,l=1){Se.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,d=p[0],g=p[4],_=p[8],E=p[1],v=p[5],C=p[9],x=p[2],y=p[6],m=p[10];if(Math.abs(g-E)<.01&&Math.abs(_-x)<.01&&Math.abs(C-y)<.01){if(Math.abs(g+E)<.1&&Math.abs(_+x)<.1&&Math.abs(C+y)<.1&&Math.abs(d+v+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(d+1)/2,b=(v+1)/2,N=(m+1)/2,F=(g+E)/4,O=(_+x)/4,q=(C+y)/4;return w>b&&w>N?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=F/s,c=O/s):b>N?b<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(b),s=F/l,c=q/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=O/c,l=q/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-C)*(y-C)+(_-x)*(_-x)+(E-g)*(E-g));return Math.abs(L)<.001&&(L=1),this.x=(y-C)/L,this.y=(_-x)/L,this.z=(E-g)/L,this.w=Math.acos((d+v+m-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=se(this.x,t.x,i.x),this.y=se(this.y,t.y,i.y),this.z=se(this.z,t.z,i.z),this.w=se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=se(this.x,t,i),this.y=se(this.y,t,i),this.z=se(this.z,t,i),this.w=se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qS extends Ks{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Se(0,0,t,i),this.scissorTest=!1,this.viewport=new Se(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Rn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ad(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ws extends qS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class LE extends Rn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QE extends Rn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ri):Ri.fromBufferAttribute(c,f),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(t.matrixWorld),this.union(Nc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(il),Pc.subVectors(this.max,il),Ur.subVectors(t.a,il),Lr.subVectors(t.b,il),Qr.subVectors(t.c,il),Za.subVectors(Lr,Ur),$a.subVectors(Qr,Lr),bs.subVectors(Ur,Qr);let i=[0,-Za.z,Za.y,0,-$a.z,$a.y,0,-bs.z,bs.y,Za.z,0,-Za.x,$a.z,0,-$a.x,bs.z,0,-bs.x,-Za.y,Za.x,0,-$a.y,$a.x,0,-bs.y,bs.x,0];return!LA(i,Ur,Lr,Qr,Pc)||(i=[1,0,0,0,1,0,0,0,1],!LA(i,Ur,Lr,Qr,Pc))?!1:(Fc.crossVectors(Za,$a),i=[Fc.x,Fc.y,Fc.z],LA(i,Ur,Lr,Qr,Pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new X,new X,new X,new X,new X,new X,new X,new X],Ri=new X,Nc=new cs,Ur=new X,Lr=new X,Qr=new X,Za=new X,$a=new X,bs=new X,il=new X,Pc=new X,Fc=new X,Ts=new X;function LA(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ts.fromArray(r,c);const h=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),p=t.dot(Ts),d=i.dot(Ts),g=s.dot(Ts);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const YS=new cs,al=new X,QA=new X;class Sl{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):YS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;al.subVectors(t,this.center);const i=al.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(al,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(QA.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(al.copy(t.center).add(QA)),this.expandByPoint(al.copy(t.center).sub(QA))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new X,NA=new X,Oc=new X,ts=new X,PA=new X,Gc=new X,FA=new X;class NE{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){NA.copy(t).add(i).multiplyScalar(.5),Oc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(NA);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Oc),h=ts.dot(this.direction),p=-ts.dot(Oc),d=ts.lengthSq(),g=Math.abs(1-f*f);let _,E,v,C;if(g>0)if(_=f*p-h,E=f*h-p,C=c*g,_>=0)if(E>=-C)if(E<=C){const x=1/g;_*=x,E*=x,v=_*(_+f*E+2*h)+E*(f*_+E+2*p)+d}else E=c,_=Math.max(0,-(f*E+h)),v=-_*_+E*(E+2*p)+d;else E=-c,_=Math.max(0,-(f*E+h)),v=-_*_+E*(E+2*p)+d;else E<=-C?(_=Math.max(0,-(-f*c+h)),E=_>0?-c:Math.min(Math.max(-c,-p),c),v=-_*_+E*(E+2*p)+d):E<=C?(_=0,E=Math.min(Math.max(-c,-p),c),v=E*(E+2*p)+d):(_=Math.max(0,-(f*c+h)),E=_>0?c:Math.min(Math.max(-c,-p),c),v=-_*_+E*(E+2*p)+d);else E=f>0?-c:c,_=Math.max(0,-(f*E+h)),v=-_*_+E*(E+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(NA).addScaledVector(Oc,E),v}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,E=this.origin;return d>=0?(s=(t.min.x-E.x)*d,l=(t.max.x-E.x)*d):(s=(t.max.x-E.x)*d,l=(t.min.x-E.x)*d),g>=0?(c=(t.min.y-E.y)*g,f=(t.max.y-E.y)*g):(c=(t.max.y-E.y)*g,f=(t.min.y-E.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-E.z)*_,p=(t.max.z-E.z)*_):(h=(t.max.z-E.z)*_,p=(t.min.z-E.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){PA.subVectors(i,t),Gc.subVectors(s,t),FA.crossVectors(PA,Gc);let f=this.direction.dot(FA),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ts.subVectors(this.origin,t);const p=h*this.direction.dot(Gc.crossVectors(ts,Gc));if(p<0)return null;const d=h*this.direction.dot(PA.cross(ts));if(d<0||p+d>f)return null;const g=-h*ts.dot(FA);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,c,f,h,p,d,g,_,E,v,C,x,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,p,d,g,_,E,v,C,x,y)}set(t,i,s,l,c,f,h,p,d,g,_,E,v,C,x,y){const m=this.elements;return m[0]=t,m[4]=i,m[8]=s,m[12]=l,m[1]=c,m[5]=f,m[9]=h,m[13]=p,m[2]=d,m[6]=g,m[10]=_,m[14]=E,m[3]=v,m[7]=C,m[11]=x,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Nr.setFromMatrixColumn(t,0).length(),c=1/Nr.setFromMatrixColumn(t,1).length(),f=1/Nr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const E=f*g,v=f*_,C=h*g,x=h*_;i[0]=p*g,i[4]=-p*_,i[8]=d,i[1]=v+C*d,i[5]=E-x*d,i[9]=-h*p,i[2]=x-E*d,i[6]=C+v*d,i[10]=f*p}else if(t.order==="YXZ"){const E=p*g,v=p*_,C=d*g,x=d*_;i[0]=E+x*h,i[4]=C*h-v,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=v*h-C,i[6]=x+E*h,i[10]=f*p}else if(t.order==="ZXY"){const E=p*g,v=p*_,C=d*g,x=d*_;i[0]=E-x*h,i[4]=-f*_,i[8]=C+v*h,i[1]=v+C*h,i[5]=f*g,i[9]=x-E*h,i[2]=-f*d,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const E=f*g,v=f*_,C=h*g,x=h*_;i[0]=p*g,i[4]=C*d-v,i[8]=E*d+x,i[1]=p*_,i[5]=x*d+E,i[9]=v*d-C,i[2]=-d,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const E=f*p,v=f*d,C=h*p,x=h*d;i[0]=p*g,i[4]=x-E*_,i[8]=C*_+v,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-d*g,i[6]=v*_+C,i[10]=E-x*_}else if(t.order==="XZY"){const E=f*p,v=f*d,C=h*p,x=h*d;i[0]=p*g,i[4]=-_,i[8]=d*g,i[1]=E*_+x,i[5]=f*g,i[9]=v*_-C,i[2]=C*_-v,i[6]=h*g,i[10]=x*_+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(XS,t,WS)}lookAt(t,i,s){const l=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),es.crossVectors(s,ui),es.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),es.crossVectors(s,ui)),es.normalize(),zc.crossVectors(ui,es),l[0]=es.x,l[4]=zc.x,l[8]=ui.x,l[1]=es.y,l[5]=zc.y,l[9]=ui.y,l[2]=es.z,l[6]=zc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],p=s[8],d=s[12],g=s[1],_=s[5],E=s[9],v=s[13],C=s[2],x=s[6],y=s[10],m=s[14],L=s[3],w=s[7],b=s[11],N=s[15],F=l[0],O=l[4],q=l[8],R=l[12],T=l[1],P=l[5],Z=l[9],st=l[13],lt=l[2],ct=l[6],U=l[10],z=l[14],V=l[3],ht=l[7],D=l[11],j=l[15];return c[0]=f*F+h*T+p*lt+d*V,c[4]=f*O+h*P+p*ct+d*ht,c[8]=f*q+h*Z+p*U+d*D,c[12]=f*R+h*st+p*z+d*j,c[1]=g*F+_*T+E*lt+v*V,c[5]=g*O+_*P+E*ct+v*ht,c[9]=g*q+_*Z+E*U+v*D,c[13]=g*R+_*st+E*z+v*j,c[2]=C*F+x*T+y*lt+m*V,c[6]=C*O+x*P+y*ct+m*ht,c[10]=C*q+x*Z+y*U+m*D,c[14]=C*R+x*st+y*z+m*j,c[3]=L*F+w*T+b*lt+N*V,c[7]=L*O+w*P+b*ct+N*ht,c[11]=L*q+w*Z+b*U+N*D,c[15]=L*R+w*st+b*z+N*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],d=t[13],g=t[2],_=t[6],E=t[10],v=t[14],C=t[3],x=t[7],y=t[11],m=t[15];return C*(+c*p*_-l*d*_-c*h*E+s*d*E+l*h*v-s*p*v)+x*(+i*p*v-i*d*E+c*f*E-l*f*v+l*d*g-c*p*g)+y*(+i*d*_-i*h*v-c*f*_+s*f*v+c*h*g-s*d*g)+m*(-l*h*g-i*p*_+i*h*E+l*f*_-s*f*E+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=t[9],E=t[10],v=t[11],C=t[12],x=t[13],y=t[14],m=t[15],L=_*y*d-x*E*d+x*p*v-h*y*v-_*p*m+h*E*m,w=C*E*d-g*y*d-C*p*v+f*y*v+g*p*m-f*E*m,b=g*x*d-C*_*d+C*h*v-f*x*v-g*h*m+f*_*m,N=C*_*p-g*x*p-C*h*E+f*x*E+g*h*y-f*_*y,F=i*L+s*w+l*b+c*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=L*O,t[1]=(x*E*c-_*y*c-x*l*v+s*y*v+_*l*m-s*E*m)*O,t[2]=(h*y*c-x*p*c+x*l*d-s*y*d-h*l*m+s*p*m)*O,t[3]=(_*p*c-h*E*c-_*l*d+s*E*d+h*l*v-s*p*v)*O,t[4]=w*O,t[5]=(g*y*c-C*E*c+C*l*v-i*y*v-g*l*m+i*E*m)*O,t[6]=(C*p*c-f*y*c-C*l*d+i*y*d+f*l*m-i*p*m)*O,t[7]=(f*E*c-g*p*c+g*l*d-i*E*d-f*l*v+i*p*v)*O,t[8]=b*O,t[9]=(C*_*c-g*x*c-C*s*v+i*x*v+g*s*m-i*_*m)*O,t[10]=(f*x*c-C*h*c+C*s*d-i*x*d-f*s*m+i*h*m)*O,t[11]=(g*h*c-f*_*c-g*s*d+i*_*d+f*s*v-i*h*v)*O,t[12]=N*O,t[13]=(g*x*l-C*_*l+C*s*E-i*x*E-g*s*y+i*_*y)*O,t[14]=(C*h*l-f*x*l-C*s*p+i*x*p+f*s*y-i*h*y)*O,t[15]=(f*_*l-g*h*l+g*s*p-i*_*p-f*s*E+i*h*E)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,p=t.z,d=c*f,g=c*h;return this.set(d*f+s,d*h-l*p,d*p+l*h,0,d*h+l*p,g*h+s,g*p-l*f,0,d*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,d=c+c,g=f+f,_=h+h,E=c*d,v=c*g,C=c*_,x=f*g,y=f*_,m=h*_,L=p*d,w=p*g,b=p*_,N=s.x,F=s.y,O=s.z;return l[0]=(1-(x+m))*N,l[1]=(v+b)*N,l[2]=(C-w)*N,l[3]=0,l[4]=(v-b)*F,l[5]=(1-(E+m))*F,l[6]=(y+L)*F,l[7]=0,l[8]=(C+w)*O,l[9]=(y-L)*O,l[10]=(1-(E+x))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Nr.set(l[0],l[1],l[2]).length();const f=Nr.set(l[4],l[5],l[6]).length(),h=Nr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],wi.copy(this);const d=1/c,g=1/f,_=1/h;return wi.elements[0]*=d,wi.elements[1]*=d,wi.elements[2]*=d,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=ji,p=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(s-l),E=(i+t)/(i-t),v=(s+l)/(s-l);let C,x;if(p)C=c/(f-c),x=f*c/(f-c);else if(h===ji)C=-(f+c)/(f-c),x=-2*f*c/(f-c);else if(h===du)C=-f/(f-c),x=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=E,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=C,d[14]=x,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=ji,p=!1){const d=this.elements,g=2/(i-t),_=2/(s-l),E=-(i+t)/(i-t),v=-(s+l)/(s-l);let C,x;if(p)C=1/(f-c),x=f/(f-c);else if(h===ji)C=-2/(f-c),x=-(f+c)/(f-c);else if(h===du)C=-1/(f-c),x=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=E,d[1]=0,d[5]=_,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=C,d[14]=x,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Nr=new X,wi=new je,XS=new X(0,0,0),WS=new X(1,1,1),es=new X,zc=new X,ui=new X,d_=new je,p_=new Xs;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],d=l[5],g=l[9],_=l[2],E=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(E,d),this._z=0);break;case"YXZ":this._x=Math.asin(-se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(se(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(E,v),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(E,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return d_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return p_.setFromEuler(this),this.setFromQuaternion(p_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class PE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KS=0;const g_=new X,Pr=new Xs,_a=new je,Hc=new X,sl=new X,JS=new X,jS=new Xs,m_=new X(1,0,0),__=new X(0,1,0),E_=new X(0,0,1),v_={type:"added"},ZS={type:"removed"},Fr={type:"childadded",child:null},OA={type:"childremoved",child:null};class wn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new X,i=new Zi,s=new Xs,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ce}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new PE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(m_,t)}rotateY(t){return this.rotateOnAxis(__,t)}rotateZ(t){return this.rotateOnAxis(E_,t)}translateOnAxis(t,i){return g_.copy(t).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(m_,t)}translateY(t){return this.translateOnAxis(__,t)}translateZ(t){return this.translateOnAxis(E_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Hc.copy(t):Hc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(sl,Hc,this.up):_a.lookAt(Hc,sl,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Pr.setFromRotationMatrix(_a),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v_),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ZS),OA.child=t,this.dispatchEvent(OA),OA.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v_),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,JS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,jS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),E=f(t.skeletons),v=f(t.animations),C=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),E.length>0&&(s.skeletons=E),v.length>0&&(s.animations=v),C.length>0&&(s.nodes=C)}return s.object=l,s;function f(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new X(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new X,Ea=new X,GA=new X,va=new X,Or=new X,Gr=new X,y_=new X,zA=new X,HA=new X,kA=new X,VA=new Se,qA=new Se,YA=new Se;class Li{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),Ea.subVectors(s,i),GA.subVectors(t,i);const f=Di.dot(Di),h=Di.dot(Ea),p=Di.dot(GA),d=Ea.dot(Ea),g=Ea.dot(GA),_=f*d-h*h;if(_===0)return c.set(0,0,0),null;const E=1/_,v=(d*p-h*g)*E,C=(f*g-h*p)*E;return c.set(1-v-C,C,v)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,f,h,p){return this.getBarycoord(t,i,s,l,va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,va.x),p.addScaledVector(f,va.y),p.addScaledVector(h,va.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return VA.setScalar(0),qA.setScalar(0),YA.setScalar(0),VA.fromBufferAttribute(t,i),qA.fromBufferAttribute(t,s),YA.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(VA,c.x),f.addScaledVector(qA,c.y),f.addScaledVector(YA,c.z),f}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),Ea.subVectors(t,i),Di.cross(Ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Di.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Or.subVectors(l,s),Gr.subVectors(c,s),zA.subVectors(t,s);const p=Or.dot(zA),d=Gr.dot(zA);if(p<=0&&d<=0)return i.copy(s);HA.subVectors(t,l);const g=Or.dot(HA),_=Gr.dot(HA);if(g>=0&&_<=g)return i.copy(l);const E=p*_-g*d;if(E<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(Or,f);kA.subVectors(t,c);const v=Or.dot(kA),C=Gr.dot(kA);if(C>=0&&v<=C)return i.copy(c);const x=v*d-p*C;if(x<=0&&d>=0&&C<=0)return h=d/(d-C),i.copy(s).addScaledVector(Gr,h);const y=g*C-v*_;if(y<=0&&_-g>=0&&v-C>=0)return y_.subVectors(c,l),h=(_-g)/(_-g+(v-C)),i.copy(l).addScaledVector(y_,h);const m=1/(y+x+E);return f=x*m,h=E*m,i.copy(s).addScaledVector(Or,f).addScaledVector(Gr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const FE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},kc={h:0,s:0,l:0};function XA(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ie.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ie.workingColorSpace){if(t=fd(t,1),i=se(i,0,1),s=se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=XA(f,c,t+1/3),this.g=XA(f,c,t),this.b=XA(f,c,t-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(t,i=Ai){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const s=FE[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Ie.workingToColorSpace(Pn.copy(this),t),Math.round(se(Pn.r*255,0,255))*65536+Math.round(se(Pn.g*255,0,255))*256+Math.round(se(Pn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,d;const g=(h+f)/2;if(h===f)p=0,d=0;else{const _=f-h;switch(d=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Ai){Ie.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(kc);const s=fl(ns.h,kc.h,i),l=fl(ns.s,kc.s,i),c=fl(ns.l,kc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ce;Ce.NAMES=FE;let $S=0;class Cl extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=Os,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Sh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==yh&&(s.blendSrc=this.blendSrc),this.blendDst!==Sh&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mu extends Cl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=SE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new X,Vc=new ae;let tC=0;class Ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tC++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Zh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Vc.fromBufferAttribute(this,i),Vc.applyMatrix3(t),this.setXY(i,Vc.x,Vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=De(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ui(i,this.array)),i}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ui(i,this.array)),i}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ui(i,this.array)),i}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ui(i,this.array)),i}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array),c=De(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zh&&(t.usage=this.usage),t}}class OE extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class GE extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pi extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eC=0;const Ci=new je,WA=new wn,zr=new X,fi=new cs,rl=new cs,yn=new X;class ta extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(UE(t)?GE:OE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,s){return Ci.makeTranslation(t,i,s),this.applyMatrix4(Ci),this}scale(t,i,s){return Ci.makeScale(t,i,s),this.applyMatrix4(Ci),this}lookAt(t){return WA.lookAt(t),WA.updateMatrix(),this.applyMatrix4(WA.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new pi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];rl.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(fi.min,rl.min),fi.expandByPoint(yn),yn.addVectors(fi.max,rl.max),fi.expandByPoint(yn)):(fi.expandByPoint(rl.min),fi.expandByPoint(rl.max))}fi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)yn.fromBufferAttribute(h,d),p&&(zr.fromBufferAttribute(t,d),yn.add(zr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<s.count;q++)h[q]=new X,p[q]=new X;const d=new X,g=new X,_=new X,E=new ae,v=new ae,C=new ae,x=new X,y=new X;function m(q,R,T){d.fromBufferAttribute(s,q),g.fromBufferAttribute(s,R),_.fromBufferAttribute(s,T),E.fromBufferAttribute(c,q),v.fromBufferAttribute(c,R),C.fromBufferAttribute(c,T),g.sub(d),_.sub(d),v.sub(E),C.sub(E);const P=1/(v.x*C.y-C.x*v.y);isFinite(P)&&(x.copy(g).multiplyScalar(C.y).addScaledVector(_,-v.y).multiplyScalar(P),y.copy(_).multiplyScalar(v.x).addScaledVector(g,-C.x).multiplyScalar(P),h[q].add(x),h[R].add(x),h[T].add(x),p[q].add(y),p[R].add(y),p[T].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,R=L.length;q<R;++q){const T=L[q],P=T.start,Z=T.count;for(let st=P,lt=P+Z;st<lt;st+=3)m(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const w=new X,b=new X,N=new X,F=new X;function O(q){N.fromBufferAttribute(l,q),F.copy(N);const R=h[q];w.copy(R),w.sub(N.multiplyScalar(N.dot(R))).normalize(),b.crossVectors(F,R);const P=b.dot(p[q])<0?-1:1;f.setXYZW(q,w.x,w.y,w.z,P)}for(let q=0,R=L.length;q<R;++q){const T=L[q],P=T.start,Z=T.count;for(let st=P,lt=P+Z;st<lt;st+=3)O(t.getX(st+0)),O(t.getX(st+1)),O(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let E=0,v=s.count;E<v;E++)s.setXYZ(E,0,0,0);const l=new X,c=new X,f=new X,h=new X,p=new X,d=new X,g=new X,_=new X;if(t)for(let E=0,v=t.count;E<v;E+=3){const C=t.getX(E+0),x=t.getX(E+1),y=t.getX(E+2);l.fromBufferAttribute(i,C),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),d.fromBufferAttribute(s,y),h.add(g),p.add(g),d.add(g),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let E=0,v=i.count;E<v;E+=3)l.fromBufferAttribute(i,E+0),c.fromBufferAttribute(i,E+1),f.fromBufferAttribute(i,E+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(E+0,g.x,g.y,g.z),s.setXYZ(E+1,g.x,g.y,g.z),s.setXYZ(E+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,_=h.normalized,E=new d.constructor(p.length*g);let v=0,C=0;for(let x=0,y=p.length;x<y;x++){h.isInterleavedBufferAttribute?v=p[x]*h.data.stride+h.offset:v=p[x]*g;for(let m=0;m<g;m++)E[C++]=d[v++]}return new Ni(E,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ta,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],d=t(p,s);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const E=d[g],v=t(E,s);p.push(v)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const d=f[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const d=s[p];t.data.attributes[p]=d.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,E=d.length;_<E;_++){const v=d[_];g.push(v.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let E=0,v=_.length;E<v;E++)g.push(_[E].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S_=new je,Rs=new NE,qc=new Sl,C_=new X,Yc=new X,Xc=new X,Wc=new X,KA=new X,Kc=new X,x_=new X,Jc=new X;class Yn extends wn{constructor(t=new ta,i=new mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Kc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(KA.fromBufferAttribute(_,t),f?Kc.addScaledVector(KA,g):Kc.addScaledVector(KA.sub(i),g))}i.add(Kc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(qc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(qc,C_)===null||Rs.origin.distanceToSquared(C_)>(t.far-t.near)**2))&&(S_.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(S_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,E=c.groups,v=c.drawRange;if(h!==null)if(Array.isArray(f))for(let C=0,x=E.length;C<x;C++){const y=E[C],m=f[y.materialIndex],L=Math.max(y.start,v.start),w=Math.min(h.count,Math.min(y.start+y.count,v.start+v.count));for(let b=L,N=w;b<N;b+=3){const F=h.getX(b),O=h.getX(b+1),q=h.getX(b+2);l=jc(this,m,t,s,d,g,_,F,O,q),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,v.start),x=Math.min(h.count,v.start+v.count);for(let y=C,m=x;y<m;y+=3){const L=h.getX(y),w=h.getX(y+1),b=h.getX(y+2);l=jc(this,f,t,s,d,g,_,L,w,b),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let C=0,x=E.length;C<x;C++){const y=E[C],m=f[y.materialIndex],L=Math.max(y.start,v.start),w=Math.min(p.count,Math.min(y.start+y.count,v.start+v.count));for(let b=L,N=w;b<N;b+=3){const F=b,O=b+1,q=b+2;l=jc(this,m,t,s,d,g,_,F,O,q),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,v.start),x=Math.min(p.count,v.start+v.count);for(let y=C,m=x;y<m;y+=3){const L=y,w=y+1,b=y+2;l=jc(this,f,t,s,d,g,_,L,w,b),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nC(r,t,i,s,l,c,f,h){let p;if(t.side===Xn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,t.side===ls,h),p===null)return null;Jc.copy(h),Jc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Jc);return d<i.near||d>i.far?null:{distance:d,point:Jc.clone(),object:r}}function jc(r,t,i,s,l,c,f,h,p,d){r.getVertexPosition(h,Yc),r.getVertexPosition(p,Xc),r.getVertexPosition(d,Wc);const g=nC(r,t,i,s,Yc,Xc,Wc,x_);if(g){const _=new X;Li.getBarycoord(x_,Yc,Xc,Wc,_),l&&(g.uv=Li.getInterpolatedAttribute(l,h,p,d,_,new ae)),c&&(g.uv1=Li.getInterpolatedAttribute(c,h,p,d,_,new ae)),f&&(g.normal=Li.getInterpolatedAttribute(f,h,p,d,_,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const E={a:h,b:p,c:d,normal:new X,materialIndex:0};Li.getNormal(Yc,Xc,Wc,E.normal),g.face=E,g.barycoord=_}return g}class xl extends ta{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],d=[],g=[],_=[];let E=0,v=0;C("z","y","x",-1,-1,s,i,t,f,c,0),C("z","y","x",1,-1,s,i,-t,f,c,1),C("x","z","y",1,1,t,s,i,l,f,2),C("x","z","y",1,-1,t,s,-i,l,f,3),C("x","y","z",1,-1,t,i,s,l,c,4),C("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new pi(d,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(_,2));function C(x,y,m,L,w,b,N,F,O,q,R){const T=b/O,P=N/q,Z=b/2,st=N/2,lt=F/2,ct=O+1,U=q+1;let z=0,V=0;const ht=new X;for(let D=0;D<U;D++){const j=D*P-st;for(let gt=0;gt<ct;gt++){const vt=gt*T-Z;ht[x]=vt*L,ht[y]=j*w,ht[m]=lt,d.push(ht.x,ht.y,ht.z),ht[x]=0,ht[y]=0,ht[m]=F>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(gt/O),_.push(1-D/q),z+=1}}for(let D=0;D<q;D++)for(let j=0;j<O;j++){const gt=E+j+ct*D,vt=E+j+ct*(D+1),bt=E+(j+1)+ct*(D+1),it=E+(j+1)+ct*D;p.push(gt,vt,it),p.push(vt,bt,it),V+=6}h.addGroup(v,V,R),v+=V,E+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function qn(r){const t={};for(let i=0;i<r.length;i++){const s=ao(r[i]);for(const l in s)t[l]=s[l]}return t}function iC(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function zE(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const hd={clone:ao,merge:qn};var aC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Cl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aC,this.fragmentShader=sC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=iC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class HE extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new X,M_=new ae,I_=new ae;class hi extends HE{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,M_,I_),i.subVectors(I_,M_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ul*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/d,l*=f.width/p,s*=f.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Hr=-90,kr=1;class rC extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Hr,kr,t,i);l.layers=this.layers,this.add(l);const c=new hi(Hr,kr,t,i);c.layers=this.layers,this.add(c);const f=new hi(Hr,kr,t,i);f.layers=this.layers,this.add(f);const h=new hi(Hr,kr,t,i);h.layers=this.layers,this.add(h);const p=new hi(Hr,kr,t,i);p.layers=this.layers,this.add(p);const d=new hi(Hr,kr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,p]=i;for(const d of i)this.remove(d);if(t===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===du)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,d,g]=this.children,_=t.getRenderTarget(),E=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const x=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,d),s.texture.generateMipmaps=x,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,E,v),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class kE extends Rn{constructor(t=[],i=qs,s,l,c,f,h,p,d,g){super(t,i,s,l,c,f,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oC extends Ws{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new kE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new xl(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:rs});c.uniforms.tEquirect.value=i;const f=new Yn(l,c),h=i.minFilter;return i.minFilter===xa&&(i.minFilter=On),new rC(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Kr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lC={type:"move"};class JA{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const x of t.hand.values()){const y=i.getJointPose(x,s),m=this._getHandJoint(d,x);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],E=g.position.distanceTo(_.position),v=.02,C=.005;d.inputState.pinching&&E>v+C?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&E<=v-C&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(lC)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Kr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class VE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cC{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Ia()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new X;class ss{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=De(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ui(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ui(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ui(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ui(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),s=De(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),s=De(s,this.array),l=De(l,this.array),c=De(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ni(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ss(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uC extends Rn{constructor(t=null,i=1,s=1,l,c,f,h,p,d=di,g=di,_,E){super(null,f,h,p,d,g,l,c,_,E),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jA=new X,fC=new X,AC=new ce;class as{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=jA.subVectors(s,i).cross(fC.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(jA),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||AC.getNormalMatrix(t),l=this.coplanarPoint(jA).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Sl,hC=new ae(.5,.5),Zc=new X;class dd{constructor(t=new as,i=new as,s=new as,l=new as,c=new as,f=new as){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ji,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],E=c[6],v=c[7],C=c[8],x=c[9],y=c[10],m=c[11],L=c[12],w=c[13],b=c[14],N=c[15];if(l[0].setComponents(d-f,v-g,m-C,N-L).normalize(),l[1].setComponents(d+f,v+g,m+C,N+L).normalize(),l[2].setComponents(d+h,v+_,m+x,N+w).normalize(),l[3].setComponents(d-h,v-_,m-x,N-w).normalize(),s)l[4].setComponents(p,E,y,b).normalize(),l[5].setComponents(d-p,v-E,m-y,N-b).normalize();else if(l[4].setComponents(d-p,v-E,m-y,N-b).normalize(),i===ji)l[5].setComponents(d+p,v+E,m+y,N+b).normalize();else if(i===du)l[5].setComponents(p,E,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=hC.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Zc.x=l.normal.x>0?t.max.x:t.min.x,Zc.y=l.normal.y>0?t.max.y:t.min.y,Zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _u extends Rn{constructor(t,i,s,l,c,f,h,p,d,g,_,E){super(null,f,h,p,d,g,l,c,_,E),this.isCompressedTexture=!0,this.image={width:i,height:s},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class dC extends _u{constructor(t,i,s,l,c,f){super(t,i,s,c,f),this.isCompressedArrayTexture=!0,this.image.depth=l,this.wrapR=Ji,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pC extends _u{constructor(t,i,s){super(void 0,t[0].width,t[0].height,i,s,qs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class qE extends Rn{constructor(t,i,s=Ys,l,c,f,h=di,p=di,d,g=pl,_=1){if(g!==pl&&g!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:t,height:i,depth:_};super(E,l,c,f,h,p,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ad(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Eu extends ta{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),p=Math.floor(l),d=h+1,g=p+1,_=t/h,E=i/p,v=[],C=[],x=[],y=[];for(let m=0;m<g;m++){const L=m*E-f;for(let w=0;w<d;w++){const b=w*_-c;C.push(b,-L,0),x.push(0,0,1),y.push(w/h),y.push(1-m/p)}}for(let m=0;m<p;m++)for(let L=0;L<h;L++){const w=L+d*m,b=L+d*(m+1),N=L+1+d*(m+1),F=L+1+d*m;v.push(w,b,F),v.push(b,N,F)}this.setIndex(v),this.setAttribute("position",new pi(C,3)),this.setAttribute("normal",new pi(x,3)),this.setAttribute("uv",new pi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class so extends ta{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let d=0;const g=[],_=new X,E=new X,v=[],C=[],x=[],y=[];for(let m=0;m<=s;m++){const L=[],w=m/s;let b=0;m===0&&f===0?b=.5/i:m===s&&p===Math.PI&&(b=-.5/i);for(let N=0;N<=i;N++){const F=N/i;_.x=-t*Math.cos(l+F*c)*Math.sin(f+w*h),_.y=t*Math.cos(f+w*h),_.z=t*Math.sin(l+F*c)*Math.sin(f+w*h),C.push(_.x,_.y,_.z),E.copy(_).normalize(),x.push(E.x,E.y,E.z),y.push(F+b,1-w),L.push(d++)}g.push(L)}for(let m=0;m<s;m++)for(let L=0;L<i;L++){const w=g[m][L+1],b=g[m][L],N=g[m+1][L],F=g[m+1][L+1];(m!==0||f>0)&&v.push(w,b,F),(m!==s-1||p<Math.PI)&&v.push(b,N,F)}this.setIndex(v),this.setAttribute("position",new pi(C,3)),this.setAttribute("normal",new pi(x,3)),this.setAttribute("uv",new pi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gC extends ta{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new X,c=new X;if(t.index!==null){const f=t.attributes.position,h=t.index;let p=t.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let d=0,g=p.length;d<g;++d){const _=p[d],E=_.start,v=_.count;for(let C=E,x=E+v;C<x;C+=3)for(let y=0;y<3;y++){const m=h.getX(C+y),L=h.getX(C+(y+1)%3);l.fromBufferAttribute(f,m),c.fromBufferAttribute(f,L),B_(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=t.attributes.position;for(let h=0,p=f.count/3;h<p;h++)for(let d=0;d<3;d++){const g=3*h+d,_=3*h+(d+1)%3;l.fromBufferAttribute(f,g),c.fromBufferAttribute(f,_),B_(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new pi(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function B_(r,t,i){const s=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class YE extends Cl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=RE,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mC extends Cl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _C extends Cl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Al={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class EC{constructor(t,i,s){const l=this;let c=!1,f=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,E=d.length;_<E;_+=2){const v=d[_],C=d[_+1];if(v.global&&(v.lastIndex=0),v.test(g))return C}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const vC=new EC;class Ml{constructor(t){this.manager=t!==void 0?t:vC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";const ya={};class yC extends Error{constructor(t,i){super(t),this.response=i}}class ZA extends Ml{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Al.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ya[t]!==void 0){ya[t].push({onLoad:i,onProgress:s,onError:l});return}ya[t]=[],ya[t].push({onLoad:i,onProgress:s,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=ya[t],_=d.body.getReader(),E=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),v=E?parseInt(E):0,C=v!==0;let x=0;const y=new ReadableStream({start(m){L();function L(){_.read().then(({done:w,value:b})=>{if(w)m.close();else{x+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:C,loaded:x,total:v});for(let F=0,O=g.length;F<O;F++){const q=g[F];q.onProgress&&q.onProgress(N)}m.enqueue(b),L()}},w=>{m.error(w)})}}});return new Response(y)}else throw new yC(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),E=_&&_[1]?_[1].toLowerCase():void 0,v=new TextDecoder(E);return d.arrayBuffer().then(C=>v.decode(C))}}}).then(d=>{Al.add(`file:${t}`,d);const g=ya[t];delete ya[t];for(let _=0,E=g.length;_<E;_++){const v=g[_];v.onLoad&&v.onLoad(d)}}).catch(d=>{const g=ya[t];if(g===void 0)throw this.manager.itemError(t),d;delete ya[t];for(let _=0,E=g.length;_<E;_++){const v=g[_];v.onError&&v.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vr=new WeakMap;class SC extends Ml{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Al.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let _=Vr.get(f);_===void 0&&(_=[],Vr.set(f,_)),_.push({onLoad:i,onError:l})}return f}const h=yl("img");function p(){g(),i&&i(this);const _=Vr.get(this)||[];for(let E=0;E<_.length;E++){const v=_[E];v.onLoad&&v.onLoad(this)}Vr.delete(this),c.manager.itemEnd(t)}function d(_){g(),l&&l(_),Al.remove(`image:${t}`);const E=Vr.get(this)||[];for(let v=0;v<E.length;v++){const C=E[v];C.onError&&C.onError(_)}Vr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Al.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class XE extends Ml{constructor(t){super(t)}load(t,i,s,l){const c=new Rn,f=new SC(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class pd extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const $A=new je,b_=new X,T_=new X;class WE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;b_.setFromMatrixPosition(t.matrixWorld),i.position.copy(b_),T_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(T_),i.updateMatrixWorld(),$A.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($A,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($A)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const R_=new je,ol=new X,th=new X;class CC extends WE{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),ol.setFromMatrixPosition(t.matrixWorld),s.position.copy(ol),th.copy(s.position),th.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(th),s.updateMatrixWorld(),l.makeTranslation(-ol.x,-ol.y,-ol.z),R_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R_,s.coordinateSystem,s.reversedDepth)}}class xC extends pd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new CC}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class KE extends HE{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MC extends WE{constructor(){super(new KE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IC extends pd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new MC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class BC extends pd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bC extends ta{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class TC extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $h extends cC{constructor(t,i,s=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}class w_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const D_=new X,$c=new X,qr=new X,Yr=new X,eh=new X,RC=new X,wC=new X;class DC{constructor(t=new X,i=new X){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){D_.subVectors(t,this.start),$c.subVectors(this.end,this.start);const s=$c.dot($c);let c=$c.dot(D_)/s;return i&&(c=se(c,0,1)),c}closestPointToPoint(t,i,s){const l=this.closestPointToPointParameter(t,i);return this.delta(s).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,i=RC,s=wC){const l=10000000000000001e-32;let c,f;const h=this.start,p=t.start,d=this.end,g=t.end;qr.subVectors(d,h),Yr.subVectors(g,p),eh.subVectors(h,p);const _=qr.dot(qr),E=Yr.dot(Yr),v=Yr.dot(eh);if(_<=l&&E<=l)return i.copy(h),s.copy(p),i.sub(s),i.dot(i);if(_<=l)c=0,f=v/E,f=se(f,0,1);else{const C=qr.dot(eh);if(E<=l)f=0,c=se(-C/_,0,1);else{const x=qr.dot(Yr),y=_*E-x*x;y!==0?c=se((x*v-C*E)/y,0,1):c=0,f=(x*c+v)/E,f<0?(f=0,c=se(-C/_,0,1)):f>1&&(f=1,c=se((x-C)/_,0,1))}}return i.copy(h).add(qr.multiplyScalar(c)),s.copy(p).add(Yr.multiplyScalar(f)),i.sub(s),i.dot(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class UC extends Ks{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function U_(r,t,i,s){const l=LC(s);switch(i){case BE:return r*t;case Ps:return r*t/l.components*l.byteLength;case ld:return r*t/l.components*l.byteLength;case Fs:return r*t*2/l.components*l.byteLength;case cd:return r*t*2/l.components*l.byteLength;case bE:return r*t*3/l.components*l.byteLength;case Tn:return r*t*4/l.components*l.byteLength;case ud:return r*t*4/l.components*l.byteLength;case Zr:case Gs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $r:case zs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lh:case Qh:return Math.max(r,16)*Math.max(t,8)/4;case cu:case uu:return Math.max(r,8)*Math.max(t,8)/2;case fu:case ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ks:case Wh:case Au:return Math.ceil(r/4)*Math.ceil(t/4)*16;case TE:case Kh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jh:case jh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LC(r){switch(r){case sn:case xE:return{byteLength:1,components:1};case hl:case ME:case Qi:return{byteLength:2,components:1};case rd:case od:return{byteLength:2,components:4};case Ys:case sd:case ni:return{byteLength:4,components:1};case IE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function JE(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function QC(r){const t=new WeakMap;function i(h,p){const d=h.array,g=h.usage,_=d.byteLength,E=r.createBuffer();r.bindBuffer(p,E),r.bufferData(p,d,g),h.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:E,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((v,C)=>v.start-C.start);let E=0;for(let v=1;v<_.length;v++){const C=_[E],x=_[v];x.start<=C.start+C.count+1?C.count=Math.max(C.count,x.start+x.count-C.start):(++E,_[E]=x)}_.length=E+1;for(let v=0,C=_.length;v<C;v++){const x=_[v];r.bufferSubData(d,x.start*g.BYTES_PER_ELEMENT,g,x.start,x.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,i(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,p),d.version=h.version}}return{get:l,remove:c,update:f}}var NC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PC=`#ifdef USE_ALPHAHASH
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
#endif`,FC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HC=`#ifdef USE_AOMAP
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
#endif`,kC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VC=`#ifdef USE_BATCHING
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
#endif`,qC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KC=`#ifdef USE_IRIDESCENCE
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
#endif`,JC=`#ifdef USE_BUMPMAP
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
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sx=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ox=`vec3 transformedNormal = objectNormal;
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
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
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
#endif`,Lx=`struct PhysicalMaterial {
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
}`,Qx=`
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qx=`#if defined( USE_POINTS_UV )
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
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
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
#endif`,sM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vM=`float getShadowMask() {
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
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SM=`#ifdef USE_SKINNING
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
#endif`,CM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
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
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#ifdef USE_TRANSMISSION
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NM=`uniform sampler2D t2D;
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
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
}`,HM=`#if DEPTH_PACKING == 3200
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
}`,kM=`#define DISTANCE
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
}`,VM=`#define DISTANCE
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`uniform float scale;
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
}`,WM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,JM=`uniform vec3 diffuse;
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
}`,jM=`#define LAMBERT
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
}`,ZM=`#define LAMBERT
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
}`,$M=`#define MATCAP
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
}`,tI=`#define MATCAP
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
}`,eI=`#define NORMAL
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
}`,nI=`#define NORMAL
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
}`,iI=`#define PHONG
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
}`,aI=`#define PHONG
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
}`,sI=`#define STANDARD
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
}`,rI=`#define STANDARD
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
}`,oI=`#define TOON
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
}`,lI=`#define TOON
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
}`,cI=`uniform float size;
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
}`,uI=`uniform vec3 diffuse;
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
}`,fI=`#include <common>
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
}`,AI=`uniform vec3 color;
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
}`,hI=`uniform float rotation;
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
}`,dI=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:NC,alphahash_pars_fragment:PC,alphamap_fragment:FC,alphamap_pars_fragment:OC,alphatest_fragment:GC,alphatest_pars_fragment:zC,aomap_fragment:HC,aomap_pars_fragment:kC,batching_pars_vertex:VC,batching_vertex:qC,begin_vertex:YC,beginnormal_vertex:XC,bsdfs:WC,iridescence_fragment:KC,bumpmap_pars_fragment:JC,clipping_planes_fragment:jC,clipping_planes_pars_fragment:ZC,clipping_planes_pars_vertex:$C,clipping_planes_vertex:tx,color_fragment:ex,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:ax,common:sx,cube_uv_reflection_fragment:rx,defaultnormal_vertex:ox,displacementmap_pars_vertex:lx,displacementmap_vertex:cx,emissivemap_fragment:ux,emissivemap_pars_fragment:fx,colorspace_fragment:Ax,colorspace_pars_fragment:hx,envmap_fragment:dx,envmap_common_pars_fragment:px,envmap_pars_fragment:gx,envmap_pars_vertex:mx,envmap_physical_pars_fragment:bx,envmap_vertex:_x,fog_vertex:Ex,fog_pars_vertex:vx,fog_fragment:yx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:xx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Bx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Rx,lights_phong_fragment:wx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Lx,lights_fragment_begin:Qx,lights_fragment_maps:Nx,lights_fragment_end:Px,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:zx,map_fragment:Hx,map_pars_fragment:kx,map_particle_fragment:Vx,map_particle_pars_fragment:qx,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:Wx,morphcolor_vertex:Kx,morphnormal_vertex:Jx,morphtarget_pars_vertex:jx,morphtarget_vertex:Zx,normal_fragment_begin:$x,normal_fragment_maps:tM,normal_pars_fragment:eM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:sM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:uM,premultiplied_alpha_fragment:fM,project_vertex:AM,dithering_fragment:hM,dithering_pars_fragment:dM,roughnessmap_fragment:pM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:_M,shadowmap_vertex:EM,shadowmask_pars_fragment:vM,skinbase_vertex:yM,skinning_pars_vertex:SM,skinning_vertex:CM,skinnormal_vertex:xM,specularmap_fragment:MM,specularmap_pars_fragment:IM,tonemapping_fragment:BM,tonemapping_pars_fragment:bM,transmission_fragment:TM,transmission_pars_fragment:RM,uv_pars_fragment:wM,uv_pars_vertex:DM,uv_vertex:UM,worldpos_vertex:LM,background_vert:QM,background_frag:NM,backgroundCube_vert:PM,backgroundCube_frag:FM,cube_vert:OM,cube_frag:GM,depth_vert:zM,depth_frag:HM,distanceRGBA_vert:kM,distanceRGBA_frag:VM,equirect_vert:qM,equirect_frag:YM,linedashed_vert:XM,linedashed_frag:WM,meshbasic_vert:KM,meshbasic_frag:JM,meshlambert_vert:jM,meshlambert_frag:ZM,meshmatcap_vert:$M,meshmatcap_frag:tI,meshnormal_vert:eI,meshnormal_frag:nI,meshphong_vert:iI,meshphong_frag:aI,meshphysical_vert:sI,meshphysical_frag:rI,meshtoon_vert:oI,meshtoon_frag:lI,points_vert:cI,points_frag:uI,shadow_vert:fI,shadow_frag:AI,sprite_vert:hI,sprite_frag:dI},Rt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ei={basic:{uniforms:qn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:qn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:qn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:qn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:qn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:qn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:qn([Rt.points,Rt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:qn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:qn([Rt.common,Rt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:qn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:qn([Rt.sprite,Rt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:qn([Rt.common,Rt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:qn([Rt.lights,Rt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};ei.physical={uniforms:qn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const tu={r:0,b:0,g:0},Ds=new Zi,pI=new je;function gI(r,t,i,s,l,c,f){const h=new Ce(0);let p=c===!0?0:1,d,g,_=null,E=0,v=null;function C(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?i:t).get(b)),b}function x(w){let b=!1;const N=C(w);N===null?m(h,p):N&&N.isColor&&(m(N,1),b=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,b){const N=C(b);N&&(N.isCubeTexture||N.mapping===gu)?(g===void 0&&(g=new Yn(new xl(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:ao(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ds.copy(b.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pI.makeRotationFromEuler(Ds)),g.material.toneMapped=Ie.getTransfer(N.colorSpace)!==Pe,(_!==N||E!==N.version||v!==r.toneMapping)&&(g.material.needsUpdate=!0,_=N,E=N.version,v=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Yn(new Eu(2,2),new $i({name:"BackgroundMaterial",uniforms:ao(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Ie.getTransfer(N.colorSpace)!==Pe,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||E!==N.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,_=N,E=N.version,v=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function m(w,b){w.getRGB(tu,zE(r)),s.buffers.color.setClear(tu.r,tu.g,tu.b,b,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,b=1){h.set(w),p=b,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,m(h,p)},render:x,addToRenderList:y,dispose:L}}function mI(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=E(null);let c=l,f=!1;function h(T,P,Z,st,lt){let ct=!1;const U=_(st,Z,P);c!==U&&(c=U,d(c.object)),ct=v(T,st,Z,lt),ct&&C(T,st,Z,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,b(T,P,Z,st),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return r.createVertexArray()}function d(T){return r.bindVertexArray(T)}function g(T){return r.deleteVertexArray(T)}function _(T,P,Z){const st=Z.wireframe===!0;let lt=s[T.id];lt===void 0&&(lt={},s[T.id]=lt);let ct=lt[P.id];ct===void 0&&(ct={},lt[P.id]=ct);let U=ct[st];return U===void 0&&(U=E(p()),ct[st]=U),U}function E(T){const P=[],Z=[],st=[];for(let lt=0;lt<i;lt++)P[lt]=0,Z[lt]=0,st[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Z,attributeDivisors:st,object:T,attributes:{},index:null}}function v(T,P,Z,st){const lt=c.attributes,ct=P.attributes;let U=0;const z=Z.getAttributes();for(const V in z)if(z[V].location>=0){const D=lt[V];let j=ct[V];if(j===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(j=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(j=T.instanceColor)),D===void 0||D.attribute!==j||j&&D.data!==j.data)return!0;U++}return c.attributesNum!==U||c.index!==st}function C(T,P,Z,st){const lt={},ct=P.attributes;let U=0;const z=Z.getAttributes();for(const V in z)if(z[V].location>=0){let D=ct[V];D===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(D=T.instanceColor));const j={};j.attribute=D,D&&D.data&&(j.data=D.data),lt[V]=j,U++}c.attributes=lt,c.attributesNum=U,c.index=st}function x(){const T=c.newAttributes;for(let P=0,Z=T.length;P<Z;P++)T[P]=0}function y(T){m(T,0)}function m(T,P){const Z=c.newAttributes,st=c.enabledAttributes,lt=c.attributeDivisors;Z[T]=1,st[T]===0&&(r.enableVertexAttribArray(T),st[T]=1),lt[T]!==P&&(r.vertexAttribDivisor(T,P),lt[T]=P)}function L(){const T=c.newAttributes,P=c.enabledAttributes;for(let Z=0,st=P.length;Z<st;Z++)P[Z]!==T[Z]&&(r.disableVertexAttribArray(Z),P[Z]=0)}function w(T,P,Z,st,lt,ct,U){U===!0?r.vertexAttribIPointer(T,P,Z,lt,ct):r.vertexAttribPointer(T,P,Z,st,lt,ct)}function b(T,P,Z,st){x();const lt=st.attributes,ct=Z.getAttributes(),U=P.defaultAttributeValues;for(const z in ct){const V=ct[z];if(V.location>=0){let ht=lt[z];if(ht===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ht=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ht=T.instanceColor)),ht!==void 0){const D=ht.normalized,j=ht.itemSize,gt=t.get(ht);if(gt===void 0)continue;const vt=gt.buffer,bt=gt.type,it=gt.bytesPerElement,dt=bt===r.INT||bt===r.UNSIGNED_INT||ht.gpuType===sd;if(ht.isInterleavedBufferAttribute){const yt=ht.data,Lt=yt.stride,Yt=ht.offset;if(yt.isInstancedInterleavedBuffer){for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne,yt.meshPerAttribute);T.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ne=0;ne<V.locationSize;ne++)y(V.location+ne);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let ne=0;ne<V.locationSize;ne++)w(V.location+ne,j/V.locationSize,bt,D,Lt*it,(Yt+j/V.locationSize*ne)*it,dt)}else{if(ht.isInstancedBufferAttribute){for(let yt=0;yt<V.locationSize;yt++)m(V.location+yt,ht.meshPerAttribute);T.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let yt=0;yt<V.locationSize;yt++)y(V.location+yt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let yt=0;yt<V.locationSize;yt++)w(V.location+yt,j/V.locationSize,bt,D,j*it,j/V.locationSize*yt*it,dt)}}else if(U!==void 0){const D=U[z];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}L()}function N(){q();for(const T in s){const P=s[T];for(const Z in P){const st=P[Z];for(const lt in st)g(st[lt].object),delete st[lt];delete P[Z]}delete s[T]}}function F(T){if(s[T.id]===void 0)return;const P=s[T.id];for(const Z in P){const st=P[Z];for(const lt in st)g(st[lt].object),delete st[lt];delete P[Z]}delete s[T.id]}function O(T){for(const P in s){const Z=s[P];if(Z[T.id]===void 0)continue;const st=Z[T.id];for(const lt in st)g(st[lt].object),delete st[lt];delete Z[T.id]}}function q(){R(),f=!0,c!==l&&(c=l,d(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:R,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:y,disableUnusedAttributes:L}}function _I(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(s,d,g,_),i.update(g,s,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let v=0;for(let C=0;C<_;C++)v+=g[C];i.update(v,s,1)}function p(d,g,_,E){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let C=0;C<d.length;C++)f(d[C],g[C],E[C]);else{v.multiDrawArraysInstancedWEBGL(s,d,0,g,0,E,0,_);let C=0;for(let x=0;x<_;x++)C+=g[x]*E[x];i.update(C,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function EI(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Tn&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const q=O===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==sn&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ni&&!q)}function p(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=C>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:E,maxTextures:v,maxVertexTextures:C,maxTextureSize:x,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:N,maxSamples:F}}function vI(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new as,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,E){const v=_.length!==0||E||s!==0||l;return l=E,s=_.length,v},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,E){i=g(_,E,0)},this.setState=function(_,E,v){const C=_.clippingPlanes,x=_.clipIntersection,y=_.clipShadows,m=r.get(_);if(!l||C===null||C.length===0||c&&!y)c?g(null):d();else{const L=c?0:s,w=L*4;let b=m.clippingState||null;p.value=b,b=g(C,E,w,v);for(let N=0;N!==w;++N)b[N]=i[N];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,E,v,C){const x=_!==null?_.length:0;let y=null;if(x!==0){if(y=p.value,C!==!0||y===null){const m=v+x*4,L=E.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<m)&&(y=new Float32Array(m));for(let w=0,b=v;w!==x;++w,b+=4)f.copy(_[w]).applyMatrix4(L,h),f.normal.toArray(y,b),y[b+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}function yI(r){let t=new WeakMap;function i(f,h){return h===Rh?f.mapping=qs:h===wh&&(f.mapping=io),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Rh||h===wh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const d=new oC(p.height);return d.fromEquirectangularTexture(r,f),t.set(f,d),f.addEventListener("dispose",l),i(d.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Jr=4,L_=[.125,.215,.35,.446,.526,.582],Ns=20,nh=new KE,Q_=new Ce;let ih=null,ah=0,sh=0,rh=!1;const Ls=(1+Math.sqrt(5))/2,Xr=1/Ls,N_=[new X(-Ls,Xr,0),new X(Ls,Xr,0),new X(-Xr,0,Ls),new X(Xr,0,Ls),new X(0,Ls,-Xr),new X(0,Ls,Xr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],SI=new X;class P_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=SI}=c;ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ih,ah,sh),this._renderer.xr.enabled=rh,t.scissorTest=!1,eu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Qi,format:Tn,colorSpace:Pi,depthBuffer:!1},l=F_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CI(c)),this._blurMaterial=xI(c,t,i)}return l}_compileMaterial(t){const i=new Yn(this._lodPlanes[0],t);this._renderer.compile(i,nh)}_sceneToCubeUV(t,i,s,l,c){const p=new hi(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,E=_.autoClear,v=_.toneMapping;_.getClearColor(Q_),_.toneMapping=os,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const x=new mu({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),y=new Yn(new xl,x);let m=!1;const L=t.background;L?L.isColor&&(x.color.copy(L),t.background=null,m=!0):(x.color.copy(Q_),m=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[w],c.y,c.z)):b===1?(p.up.set(0,0,d[w]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[w],c.z)):(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[w]));const N=this._cubeSize;eu(l,b*N,w>2?N:0,N,N),_.setRenderTarget(l),m&&_.render(y,p),_.render(t,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=v,_.autoClear=E,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===io;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Yn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;eu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,nh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=N_[(l-c-1)%N_.length];this._blur(t,c-1,c,f,h)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const p=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Yn(this._lodPlanes[l],d),E=d.uniforms,v=this._sizeLods[s]-1,C=isFinite(c)?Math.PI/(2*v):2*Math.PI/(2*Ns-1),x=c/C,y=isFinite(c)?1+Math.floor(g*x):Ns;y>Ns&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ns}`);const m=[];let L=0;for(let O=0;O<Ns;++O){const q=O/x,R=Math.exp(-q*q/2);m.push(R),O===0?L+=R:O<y&&(L+=2*R)}for(let O=0;O<m.length;O++)m[O]=m[O]/L;E.envMap.value=t.texture,E.samples.value=y,E.weights.value=m,E.latitudinal.value=f==="latitudinal",h&&(E.poleAxis.value=h);const{_lodMax:w}=this;E.dTheta.value=C,E.mipInt.value=w-s;const b=this._sizeLods[l],N=3*b*(l>w-Jr?l-w+Jr:0),F=4*(this._cubeSize-b);eu(i,N,F,3*b,2*b),p.setRenderTarget(i),p.render(_,nh)}}function CI(r){const t=[],i=[],s=[];let l=r;const c=r-Jr+1+L_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>r-Jr?p=L_[f-r+Jr-1]:f===0&&(p=0),s.push(p);const d=1/(h-2),g=-d,_=1+d,E=[g,g,_,g,_,_,g,g,_,_,g,_],v=6,C=6,x=3,y=2,m=1,L=new Float32Array(x*C*v),w=new Float32Array(y*C*v),b=new Float32Array(m*C*v);for(let F=0;F<v;F++){const O=F%3*2/3-1,q=F>2?0:-1,R=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];L.set(R,x*C*F),w.set(E,y*C*F);const T=[F,F,F,F,F,F];b.set(T,m*C*F)}const N=new ta;N.setAttribute("position",new Ni(L,x)),N.setAttribute("uv",new Ni(w,y)),N.setAttribute("faceIndex",new Ni(b,m)),t.push(N),l>Jr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function F_(r,t,i){const s=new Ws(r,t,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eu(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function xI(r,t,i){const s=new Float32Array(Ns),l=new X(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function O_(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function G_(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}function MI(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,d=p===Rh||p===wh,g=p===qs||p===io;if(d||g){let _=t.get(h);const E=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==E)return i===null&&(i=new P_(r)),_=d?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const v=h.image;return d&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new P_(r)),_=d?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function II(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&to("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function BI(r,t,i,s){const l={},c=new WeakMap;function f(_){const E=_.target;E.index!==null&&t.remove(E.index);for(const C in E.attributes)t.remove(E.attributes[C]);E.removeEventListener("dispose",f),delete l[E.id];const v=c.get(E);v&&(t.remove(v),c.delete(E)),s.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function h(_,E){return l[E.id]===!0||(E.addEventListener("dispose",f),l[E.id]=!0,i.memory.geometries++),E}function p(_){const E=_.attributes;for(const v in E)t.update(E[v],r.ARRAY_BUFFER)}function d(_){const E=[],v=_.index,C=_.attributes.position;let x=0;if(v!==null){const L=v.array;x=v.version;for(let w=0,b=L.length;w<b;w+=3){const N=L[w+0],F=L[w+1],O=L[w+2];E.push(N,F,F,O,O,N)}}else if(C!==void 0){const L=C.array;x=C.version;for(let w=0,b=L.length/3-1;w<b;w+=3){const N=w+0,F=w+1,O=w+2;E.push(N,F,F,O,O,N)}}else return;const y=new(UE(E)?GE:OE)(E,1);y.version=x;const m=c.get(_);m&&t.remove(m),c.set(_,y)}function g(_){const E=c.get(_);if(E){const v=_.index;v!==null&&E.version<v.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function bI(r,t,i){let s;function l(E){s=E}let c,f;function h(E){c=E.type,f=E.bytesPerElement}function p(E,v){r.drawElements(s,v,c,E*f),i.update(v,s,1)}function d(E,v,C){C!==0&&(r.drawElementsInstanced(s,v,c,E*f,C),i.update(v,s,C))}function g(E,v,C){if(C===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,E,0,C);let y=0;for(let m=0;m<C;m++)y+=v[m];i.update(y,s,1)}function _(E,v,C,x){if(C===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<E.length;m++)d(E[m]/f,v[m],x[m]);else{y.multiDrawElementsInstancedWEBGL(s,v,0,c,E,0,x,0,C);let m=0;for(let L=0;L<C;L++)m+=v[L]*x[L];i.update(m,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function TI(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function RI(r,t,i){const s=new WeakMap,l=new Se;function c(f,h,p){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let E=s.get(h);if(E===void 0||E.count!==_){let T=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",T)};var v=T;E!==void 0&&E.texture.dispose();const C=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,m=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let b=0;C===!0&&(b=1),x===!0&&(b=2),y===!0&&(b=3);let N=h.attributes.position.count*b,F=1;N>t.maxTextureSize&&(F=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*F*4*_),q=new LE(O,N,F,_);q.type=ni,q.needsUpdate=!0;const R=b*4;for(let P=0;P<_;P++){const Z=m[P],st=L[P],lt=w[P],ct=N*F*4*P;for(let U=0;U<Z.count;U++){const z=U*R;C===!0&&(l.fromBufferAttribute(Z,U),O[ct+z+0]=l.x,O[ct+z+1]=l.y,O[ct+z+2]=l.z,O[ct+z+3]=0),x===!0&&(l.fromBufferAttribute(st,U),O[ct+z+4]=l.x,O[ct+z+5]=l.y,O[ct+z+6]=l.z,O[ct+z+7]=0),y===!0&&(l.fromBufferAttribute(lt,U),O[ct+z+8]=l.x,O[ct+z+9]=l.y,O[ct+z+10]=l.z,O[ct+z+11]=lt.itemSize===4?l.w:1)}}E={count:_,texture:q,size:new ae(N,F)},s.set(h,E),h.addEventListener("dispose",T)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let C=0;for(let y=0;y<d.length;y++)C+=d[y];const x=h.morphTargetsRelative?1:1-C;p.getUniforms().setValue(r,"morphTargetBaseInfluence",x),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",E.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",E.size)}return{update:c}}function wI(r,t,i,s){let l=new WeakMap;function c(p){const d=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==d&&(t.update(_),l.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==d&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,d))),p.isSkinnedMesh){const E=p.skeleton;l.get(E)!==d&&(E.update(),l.set(E,d))}return _}function f(){l=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),i.remove(d.instanceMatrix),d.instanceColor!==null&&i.remove(d.instanceColor)}return{update:c,dispose:f}}const jE=new Rn,z_=new qE(1,1),ZE=new LE,$E=new QE,t0=new kE,H_=[],k_=[],V_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function ro(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function gn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function vu(r,t){let i=k_[t];i===void 0&&(i=new Int32Array(t),k_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function DI(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function UI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),gn(i,t)}}function LI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),gn(i,t)}}function QI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),gn(i,t)}}function NI(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(pn(i,s))return;Y_.set(s),r.uniformMatrix2fv(this.addr,!1,Y_),gn(i,s)}}function PI(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(pn(i,s))return;q_.set(s),r.uniformMatrix3fv(this.addr,!1,q_),gn(i,s)}}function FI(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(pn(i,s))return;V_.set(s),r.uniformMatrix4fv(this.addr,!1,V_),gn(i,s)}}function OI(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function GI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),gn(i,t)}}function zI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),gn(i,t)}}function HI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),gn(i,t)}}function kI(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function VI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),gn(i,t)}}function qI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),gn(i,t)}}function YI(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),gn(i,t)}}function XI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(z_.compareFunction=wE,c=z_):c=jE,i.setTexture2D(t||c,l)}function WI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||$E,l)}function KI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||t0,l)}function JI(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ZE,l)}function jI(r){switch(r){case 5126:return DI;case 35664:return UI;case 35665:return LI;case 35666:return QI;case 35674:return NI;case 35675:return PI;case 35676:return FI;case 5124:case 35670:return OI;case 35667:case 35671:return GI;case 35668:case 35672:return zI;case 35669:case 35673:return HI;case 5125:return kI;case 36294:return VI;case 36295:return qI;case 36296:return YI;case 35678:case 36198:case 36298:case 36306:case 35682:return XI;case 35679:case 36299:case 36307:return WI;case 35680:case 36300:case 36308:case 36293:return KI;case 36289:case 36303:case 36311:case 36292:return JI}}function ZI(r,t){r.uniform1fv(this.addr,t)}function $I(r,t){const i=ro(t,this.size,2);r.uniform2fv(this.addr,i)}function tB(r,t){const i=ro(t,this.size,3);r.uniform3fv(this.addr,i)}function eB(r,t){const i=ro(t,this.size,4);r.uniform4fv(this.addr,i)}function nB(r,t){const i=ro(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function iB(r,t){const i=ro(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function aB(r,t){const i=ro(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function sB(r,t){r.uniform1iv(this.addr,t)}function rB(r,t){r.uniform2iv(this.addr,t)}function oB(r,t){r.uniform3iv(this.addr,t)}function lB(r,t){r.uniform4iv(this.addr,t)}function cB(r,t){r.uniform1uiv(this.addr,t)}function uB(r,t){r.uniform2uiv(this.addr,t)}function fB(r,t){r.uniform3uiv(this.addr,t)}function AB(r,t){r.uniform4uiv(this.addr,t)}function hB(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||jE,c[f])}function dB(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||$E,c[f])}function pB(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||t0,c[f])}function gB(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ZE,c[f])}function mB(r){switch(r){case 5126:return ZI;case 35664:return $I;case 35665:return tB;case 35666:return eB;case 35674:return nB;case 35675:return iB;case 35676:return aB;case 5124:case 35670:return sB;case 35667:case 35671:return rB;case 35668:case 35672:return oB;case 35669:case 35673:return lB;case 5125:return cB;case 36294:return uB;case 36295:return fB;case 36296:return AB;case 35678:case 36198:case 36298:case 36306:case 35682:return hB;case 35679:case 36299:case 36307:return dB;case 35680:case 36300:case 36308:case 36293:return pB;case 36289:case 36303:case 36311:case 36292:return gB}}class _B{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=jI(i.type)}}class EB{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mB(i.type)}}class vB{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function X_(r,t){r.seq.push(t),r.map[t.id]=t}function yB(r,t,i){const s=r.name,l=s.length;for(oh.lastIndex=0;;){const c=oh.exec(s),f=oh.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&f+2===l){X_(i,d===void 0?new _B(h,r,t):new EB(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new vB(h),X_(i,_)),i=_}}}class lu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);yB(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function W_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const SB=37297;let CB=0;function xB(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const K_=new ce;function MB(r){Ie._getMatrix(K_,Ie.workingColorSpace,r);const t=`mat3( ${K_.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(r)){case hu:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function J_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+xB(r.getShaderSource(t),h)}else return c}function IB(r,t){const i=MB(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function BB(r,t){let i;switch(t){case sS:i="Linear";break;case rS:i="Reinhard";break;case oS:i="Cineon";break;case lS:i="ACESFilmic";break;case uS:i="AgX";break;case fS:i="Neutral";break;case cS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const nu=new X;function bB(){Ie.getLuminanceCoefficients(nu);const r=nu.x.toFixed(4),t=nu.y.toFixed(4),i=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TB(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function RB(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function wB(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function cl(r){return r!==""}function j_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DB=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(r){return r.replace(DB,LB)}const UB=new Map;function LB(r,t){let i=Ae[t];if(i===void 0){const s=UB.get(t);if(s!==void 0)i=Ae[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return td(i)}const QB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(r){return r.replace(QB,NB)}function NB(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function tE(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function PB(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vE?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===yE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Sa&&(t="SHADOWMAP_TYPE_VSM"),t}function FB(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qs:case io:t="ENVMAP_TYPE_CUBE";break;case gu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OB(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:t="ENVMAP_MODE_REFRACTION";break}return t}function GB(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case SE:t="ENVMAP_BLENDING_MULTIPLY";break;case iS:t="ENVMAP_BLENDING_MIX";break;case aS:t="ENVMAP_BLENDING_ADD";break}return t}function zB(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function HB(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=PB(i),d=FB(i),g=OB(i),_=GB(i),E=zB(i),v=TB(i),C=RB(c),x=l.createProgram();let y,m,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(cl).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(cl).join(`
`),m.length>0&&(m+=`
`)):(y=[tE(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),m=[tE(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==os?"#define TONE_MAPPING":"",i.toneMapping!==os?Ae.tonemapping_pars_fragment:"",i.toneMapping!==os?BB("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,IB("linearToOutputTexel",i.outputColorSpace),bB(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),f=td(f),f=j_(f,i),f=Z_(f,i),h=td(h),h=j_(h,i),h=Z_(h,i),f=$_(f),h=$_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=L+y+f,b=L+m+h,N=W_(l,l.VERTEX_SHADER,w),F=W_(l,l.FRAGMENT_SHADER,b);l.attachShader(x,N),l.attachShader(x,F),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function O(P){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(x)||"",st=l.getShaderInfoLog(N)||"",lt=l.getShaderInfoLog(F)||"",ct=Z.trim(),U=st.trim(),z=lt.trim();let V=!0,ht=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,x,N,F);else{const D=J_(l,N,"vertex"),j=J_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ct+`
`+D+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(U===""||z==="")&&(ht=!1);ht&&(P.diagnostics={runnable:V,programLog:ct,vertexShader:{log:U,prefix:y},fragmentShader:{log:z,prefix:m}})}l.deleteShader(N),l.deleteShader(F),q=new lu(l,x),R=wB(l,x)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(x,SB)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CB++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=F,this}let kB=0;class VB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new qB(t),i.set(t,s)),s}}class qB{constructor(t){this.id=kB++,this.code=t,this.usedTimes=0}}function YB(r,t,i,s,l,c,f){const h=new PE,p=new VB,d=new Set,g=[],_=l.logarithmicDepthBuffer,E=l.vertexTextures;let v=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return d.add(R),R===0?"uv":`uv${R}`}function y(R,T,P,Z,st){const lt=Z.fog,ct=st.geometry,U=R.isMeshStandardMaterial?Z.environment:null,z=(R.isMeshStandardMaterial?i:t).get(R.envMap||U),V=z&&z.mapping===gu?z.image.height:null,ht=C[R.type];R.precision!==null&&(v=l.getMaxPrecision(R.precision),v!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",v,"instead."));const D=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,j=D!==void 0?D.length:0;let gt=0;ct.morphAttributes.position!==void 0&&(gt=1),ct.morphAttributes.normal!==void 0&&(gt=2),ct.morphAttributes.color!==void 0&&(gt=3);let vt,bt,it,dt;if(ht){const ye=ei[ht];vt=ye.vertexShader,bt=ye.fragmentShader}else vt=R.vertexShader,bt=R.fragmentShader,p.update(R),it=p.getVertexShaderID(R),dt=p.getFragmentShaderID(R);const yt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),Yt=st.isInstancedMesh===!0,ne=st.isBatchedMesh===!0,ze=!!R.map,pe=!!R.matcap,H=!!z,be=!!R.aoMap,Jt=!!R.lightMap,ve=!!R.bumpMap,Ft=!!R.normalMap,He=!!R.displacementMap,Ot=!!R.emissiveMap,oe=!!R.metalnessMap,We=!!R.roughnessMap,Ke=R.anisotropy>0,Q=R.clearcoat>0,M=R.dispersion>0,et=R.iridescence>0,ft=R.sheen>0,Et=R.transmission>0,ut=Ke&&!!R.anisotropyMap,Qt=Q&&!!R.clearcoatMap,It=Q&&!!R.clearcoatNormalMap,kt=Q&&!!R.clearcoatRoughnessMap,qt=et&&!!R.iridescenceMap,St=et&&!!R.iridescenceThicknessMap,Dt=ft&&!!R.sheenColorMap,Wt=ft&&!!R.sheenRoughnessMap,Ht=!!R.specularMap,Tt=!!R.specularColorMap,re=!!R.specularIntensityMap,Y=Et&&!!R.transmissionMap,Mt=Et&&!!R.thicknessMap,Bt=!!R.gradientMap,Nt=!!R.alphaMap,Ct=R.alphaTest>0,_t=!!R.alphaHash,zt=!!R.extensions;let ie=os;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Te={shaderID:ht,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:bt,defines:R.defines,customVertexShaderID:it,customFragmentShaderID:dt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:v,batching:ne,batchingColor:ne&&st._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&st.instanceColor!==null,instancingMorph:Yt&&st.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Pi,alphaToCoverage:!!R.alphaToCoverage,map:ze,matcap:pe,envMap:H,envMapMode:H&&z.mapping,envMapCubeUVHeight:V,aoMap:be,lightMap:Jt,bumpMap:ve,normalMap:Ft,displacementMap:E&&He,emissiveMap:Ot,normalMapObjectSpace:Ft&&R.normalMapType===pS,normalMapTangentSpace:Ft&&R.normalMapType===RE,metalnessMap:oe,roughnessMap:We,anisotropy:Ke,anisotropyMap:ut,clearcoat:Q,clearcoatMap:Qt,clearcoatNormalMap:It,clearcoatRoughnessMap:kt,dispersion:M,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:Dt,sheenRoughnessMap:Wt,specularMap:Ht,specularColorMap:Tt,specularIntensityMap:re,transmission:Et,transmissionMap:Y,thicknessMap:Mt,gradientMap:Bt,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Ct,alphaHash:_t,combine:R.combine,mapUv:ze&&x(R.map.channel),aoMapUv:be&&x(R.aoMap.channel),lightMapUv:Jt&&x(R.lightMap.channel),bumpMapUv:ve&&x(R.bumpMap.channel),normalMapUv:Ft&&x(R.normalMap.channel),displacementMapUv:He&&x(R.displacementMap.channel),emissiveMapUv:Ot&&x(R.emissiveMap.channel),metalnessMapUv:oe&&x(R.metalnessMap.channel),roughnessMapUv:We&&x(R.roughnessMap.channel),anisotropyMapUv:ut&&x(R.anisotropyMap.channel),clearcoatMapUv:Qt&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&x(R.sheenRoughnessMap.channel),specularMapUv:Ht&&x(R.specularMap.channel),specularColorMapUv:Tt&&x(R.specularColorMap.channel),specularIntensityMapUv:re&&x(R.specularIntensityMap.channel),transmissionMapUv:Y&&x(R.transmissionMap.channel),thicknessMapUv:Mt&&x(R.thicknessMap.channel),alphaMapUv:Nt&&x(R.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ft||Ke),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ct.attributes.uv&&(ze||Nt),fog:!!lt,useFog:R.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Lt,skinning:st.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:ze&&R.map.isVideoTexture===!0&&Ie.getTransfer(R.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ot&&R.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(R.emissiveMap.colorSpace)===Pe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Xi,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:zt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&R.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Te.vertexUv1s=d.has(1),Te.vertexUv2s=d.has(2),Te.vertexUv3s=d.has(3),d.clear(),Te}function m(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const P in R.defines)T.push(P),T.push(R.defines[P]);return R.isRawShaderMaterial===!1&&(L(T,R),w(T,R),T.push(r.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function L(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function w(R,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),R.push(h.mask)}function b(R){const T=C[R.type];let P;if(T){const Z=ei[T];P=hd.clone(Z.uniforms)}else P=R.uniforms;return P}function N(R,T){let P;for(let Z=0,st=g.length;Z<st;Z++){const lt=g[Z];if(lt.cacheKey===T){P=lt,++P.usedTimes;break}}return P===void 0&&(P=new HB(r,T,R,c),g.push(P)),P}function F(R){if(--R.usedTimes===0){const T=g.indexOf(R);g[T]=g[g.length-1],g.pop(),R.destroy()}}function O(R){p.remove(R)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:N,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:q}}function XB(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function WB(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function eE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function nE(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,E,v,C,x,y){let m=r[t];return m===void 0?(m={id:_.id,object:_,geometry:E,material:v,groupOrder:C,renderOrder:_.renderOrder,z:x,group:y},r[t]=m):(m.id=_.id,m.object=_,m.geometry=E,m.material=v,m.groupOrder=C,m.renderOrder=_.renderOrder,m.z=x,m.group=y),t++,m}function h(_,E,v,C,x,y){const m=f(_,E,v,C,x,y);v.transmission>0?s.push(m):v.transparent===!0?l.push(m):i.push(m)}function p(_,E,v,C,x,y){const m=f(_,E,v,C,x,y);v.transmission>0?s.unshift(m):v.transparent===!0?l.unshift(m):i.unshift(m)}function d(_,E){i.length>1&&i.sort(_||WB),s.length>1&&s.sort(E||eE),l.length>1&&l.sort(E||eE)}function g(){for(let _=t,E=r.length;_<E;_++){const v=r[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:d}}function KB(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new nE,r.set(s,[f])):l>=c.length?(f=new nE,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function JB(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new Ce};break;case"SpotLight":i={position:new X,direction:new X,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function jB(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let ZB=0;function $B(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tb(r){const t=new JB,i=jB(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new X);const l=new X,c=new je,f=new je;function h(d){let g=0,_=0,E=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let v=0,C=0,x=0,y=0,m=0,L=0,w=0,b=0,N=0,F=0,O=0;d.sort($B);for(let R=0,T=d.length;R<T;R++){const P=d[R],Z=P.color,st=P.intensity,lt=P.distance,ct=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)g+=Z.r*st,_+=Z.g*st,E+=Z.b*st;else if(P.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(P.sh.coefficients[U],st);O++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,V=i.get(P);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,s.directionalShadow[v]=V,s.directionalShadowMap[v]=ct,s.directionalShadowMatrix[v]=P.shadow.matrix,L++}s.directional[v]=U,v++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(Z).multiplyScalar(st),U.distance=lt,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,s.spot[x]=U;const z=P.shadow;if(P.map&&(s.spotLightMap[N]=P.map,N++,z.updateMatrices(P),P.castShadow&&F++),s.spotLightMatrix[x]=z.matrix,P.castShadow){const V=i.get(P);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,s.spotShadow[x]=V,s.spotShadowMap[x]=ct,b++}x++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(Z).multiplyScalar(st),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=U,y++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const z=P.shadow,V=i.get(P);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,s.pointShadow[C]=V,s.pointShadowMap[C]=ct,s.pointShadowMatrix[C]=P.shadow.matrix,w++}s.point[C]=U,C++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(st),U.groundColor.copy(P.groundColor).multiplyScalar(st),s.hemi[m]=U,m++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Rt.LTC_FLOAT_1,s.rectAreaLTC2=Rt.LTC_FLOAT_2):(s.rectAreaLTC1=Rt.LTC_HALF_1,s.rectAreaLTC2=Rt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=E;const q=s.hash;(q.directionalLength!==v||q.pointLength!==C||q.spotLength!==x||q.rectAreaLength!==y||q.hemiLength!==m||q.numDirectionalShadows!==L||q.numPointShadows!==w||q.numSpotShadows!==b||q.numSpotMaps!==N||q.numLightProbes!==O)&&(s.directional.length=v,s.spot.length=x,s.rectArea.length=y,s.point.length=C,s.hemi.length=m,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=b+N-F,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=O,q.directionalLength=v,q.pointLength=C,q.spotLength=x,q.rectAreaLength=y,q.hemiLength=m,q.numDirectionalShadows=L,q.numPointShadows=w,q.numSpotShadows=b,q.numSpotMaps=N,q.numLightProbes=O,s.version=ZB++)}function p(d,g){let _=0,E=0,v=0,C=0,x=0;const y=g.matrixWorldInverse;for(let m=0,L=d.length;m<L;m++){const w=d[m];if(w.isDirectionalLight){const b=s.directional[_];b.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(y),_++}else if(w.isSpotLight){const b=s.spot[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(y),v++}else if(w.isRectAreaLight){const b=s.rectArea[C];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),f.identity(),c.copy(w.matrixWorld),c.premultiply(y),f.extractRotation(c),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),C++}else if(w.isPointLight){const b=s.point[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),E++}else if(w.isHemisphereLight){const b=s.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(y),x++}}}return{setup:h,setupView:p,state:s}}function iE(r){const t=new tb(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function eb(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new iE(r),t.set(l,[h])):c>=f.length?(h=new iE(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
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
}`;function ab(r,t,i){let s=new dd;const l=new ae,c=new ae,f=new Se,h=new mC({depthPacking:dS}),p=new _C,d={},g=i.maxTextureSize,_={[ls]:Xn,[Xn]:ls,[Xi]:Xi},E=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),v=E.clone();v.defines.HORIZONTAL_PASS=1;const C=new ta;C.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(C,E),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vE;let m=this.type;this.render=function(F,O,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(rs),Z.buffers.depth.getReversed()?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const st=m!==Sa&&this.type===Sa,lt=m===Sa&&this.type!==Sa;for(let ct=0,U=F.length;ct<U;ct++){const z=F[ct],V=z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const ht=V.getFrameExtents();if(l.multiply(ht),c.copy(V.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ht.x),l.x=c.x*ht.x,V.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ht.y),l.y=c.y*ht.y,V.mapSize.y=c.y)),V.map===null||st===!0||lt===!0){const j=this.type!==Sa?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new Ws(l.x,l.y,j),V.map.texture.name=z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const D=V.getViewportCount();for(let j=0;j<D;j++){const gt=V.getViewport(j);f.set(c.x*gt.x,c.y*gt.y,c.x*gt.z,c.y*gt.w),Z.viewport(f),V.updateMatrices(z,j),s=V.getFrustum(),b(O,q,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===Sa&&L(V,q),V.needsUpdate=!1}m=this.type,y.needsUpdate=!1,r.setRenderTarget(R,T,P)};function L(F,O){const q=t.update(x);E.defines.VSM_SAMPLES!==F.blurSamples&&(E.defines.VSM_SAMPLES=F.blurSamples,v.defines.VSM_SAMPLES=F.blurSamples,E.needsUpdate=!0,v.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ws(l.x,l.y)),E.uniforms.shadow_pass.value=F.map.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(O,null,q,E,x,null),v.uniforms.shadow_pass.value=F.mapPass.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(O,null,q,v,x,null)}function w(F,O,q,R){let T=null;const P=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(P!==void 0)T=P;else if(T=q.isPointLight===!0?p:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=T.uuid,st=O.uuid;let lt=d[Z];lt===void 0&&(lt={},d[Z]=lt);let ct=lt[st];ct===void 0&&(ct=T.clone(),lt[st]=ct,O.addEventListener("dispose",N)),T=ct}if(T.visible=O.visible,T.wireframe=O.wireframe,R===Sa?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:_[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=r.properties.get(T);Z.light=q}return T}function b(F,O,q,R,T){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Sa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const st=t.update(F),lt=F.material;if(Array.isArray(lt)){const ct=st.groups;for(let U=0,z=ct.length;U<z;U++){const V=ct[U],ht=lt[V.materialIndex];if(ht&&ht.visible){const D=w(F,ht,R,T);F.onBeforeShadow(r,F,O,q,st,D,V),r.renderBufferDirect(q,null,st,D,F,V),F.onAfterShadow(r,F,O,q,st,D,V)}}}else if(lt.visible){const ct=w(F,lt,R,T);F.onBeforeShadow(r,F,O,q,st,ct,null),r.renderBufferDirect(q,null,st,ct,F,null),F.onAfterShadow(r,F,O,q,st,ct,null)}}const Z=F.children;for(let st=0,lt=Z.length;st<lt;st++)b(Z[st],O,q,R,T)}function N(F){F.target.removeEventListener("dispose",N);for(const q in d){const R=d[q],T=F.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const sb={[Ch]:xh,[Mh]:bh,[Ih]:Th,[no]:Bh,[xh]:Ch,[bh]:Mh,[Th]:Ih,[Bh]:no};function rb(r,t){function i(){let Y=!1;const Mt=new Se;let Bt=null;const Nt=new Se(0,0,0,0);return{setMask:function(Ct){Bt!==Ct&&!Y&&(r.colorMask(Ct,Ct,Ct,Ct),Bt=Ct)},setLocked:function(Ct){Y=Ct},setClear:function(Ct,_t,zt,ie,Te){Te===!0&&(Ct*=ie,_t*=ie,zt*=ie),Mt.set(Ct,_t,zt,ie),Nt.equals(Mt)===!1&&(r.clearColor(Ct,_t,zt,ie),Nt.copy(Mt))},reset:function(){Y=!1,Bt=null,Nt.set(-1,0,0,0)}}}function s(){let Y=!1,Mt=!1,Bt=null,Nt=null,Ct=null;return{setReversed:function(_t){if(Mt!==_t){const zt=t.get("EXT_clip_control");_t?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Mt=_t;const ie=Ct;Ct=null,this.setClear(ie)}},getReversed:function(){return Mt},setTest:function(_t){_t?yt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(_t){Bt!==_t&&!Y&&(r.depthMask(_t),Bt=_t)},setFunc:function(_t){if(Mt&&(_t=sb[_t]),Nt!==_t){switch(_t){case Ch:r.depthFunc(r.NEVER);break;case xh:r.depthFunc(r.ALWAYS);break;case Mh:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case Ih:r.depthFunc(r.EQUAL);break;case Bh:r.depthFunc(r.GEQUAL);break;case bh:r.depthFunc(r.GREATER);break;case Th:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Nt=_t}},setLocked:function(_t){Y=_t},setClear:function(_t){Ct!==_t&&(Mt&&(_t=1-_t),r.clearDepth(_t),Ct=_t)},reset:function(){Y=!1,Bt=null,Nt=null,Ct=null,Mt=!1}}}function l(){let Y=!1,Mt=null,Bt=null,Nt=null,Ct=null,_t=null,zt=null,ie=null,Te=null;return{setTest:function(ye){Y||(ye?yt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(ye){Mt!==ye&&!Y&&(r.stencilMask(ye),Mt=ye)},setFunc:function(ye,Mi,un){(Bt!==ye||Nt!==Mi||Ct!==un)&&(r.stencilFunc(ye,Mi,un),Bt=ye,Nt=Mi,Ct=un)},setOp:function(ye,Mi,un){(_t!==ye||zt!==Mi||ie!==un)&&(r.stencilOp(ye,Mi,un),_t=ye,zt=Mi,ie=un)},setLocked:function(ye){Y=ye},setClear:function(ye){Te!==ye&&(r.clearStencil(ye),Te=ye)},reset:function(){Y=!1,Mt=null,Bt=null,Nt=null,Ct=null,_t=null,zt=null,ie=null,Te=null}}}const c=new i,f=new s,h=new l,p=new WeakMap,d=new WeakMap;let g={},_={},E=new WeakMap,v=[],C=null,x=!1,y=null,m=null,L=null,w=null,b=null,N=null,F=null,O=new Ce(0,0,0),q=0,R=!1,T=null,P=null,Z=null,st=null,lt=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=z>=1):V.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=z>=2);let ht=null,D={};const j=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),vt=new Se().fromArray(j),bt=new Se().fromArray(gt);function it(Y,Mt,Bt,Nt){const Ct=new Uint8Array(4),_t=r.createTexture();r.bindTexture(Y,_t),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<Bt;zt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Mt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return _t}const dt={};dt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),dt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),dt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),f.setFunc(no),ve(!1),Ft(i_),yt(r.CULL_FACE),be(rs);function yt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Lt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Yt(Y,Mt){return _[Y]!==Mt?(r.bindFramebuffer(Y,Mt),_[Y]=Mt,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Mt),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ne(Y,Mt){let Bt=v,Nt=!1;if(Y){Bt=E.get(Mt),Bt===void 0&&(Bt=[],E.set(Mt,Bt));const Ct=Y.textures;if(Bt.length!==Ct.length||Bt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,zt=Ct.length;_t<zt;_t++)Bt[_t]=r.COLOR_ATTACHMENT0+_t;Bt.length=Ct.length,Nt=!0}}else Bt[0]!==r.BACK&&(Bt[0]=r.BACK,Nt=!0);Nt&&r.drawBuffers(Bt)}function ze(Y){return C!==Y?(r.useProgram(Y),C=Y,!0):!1}const pe={[Qs]:r.FUNC_ADD,[Gy]:r.FUNC_SUBTRACT,[zy]:r.FUNC_REVERSE_SUBTRACT};pe[Hy]=r.MIN,pe[ky]=r.MAX;const H={[Vy]:r.ZERO,[qy]:r.ONE,[Yy]:r.SRC_COLOR,[yh]:r.SRC_ALPHA,[Zy]:r.SRC_ALPHA_SATURATE,[Jy]:r.DST_COLOR,[Wy]:r.DST_ALPHA,[Xy]:r.ONE_MINUS_SRC_COLOR,[Sh]:r.ONE_MINUS_SRC_ALPHA,[jy]:r.ONE_MINUS_DST_COLOR,[Ky]:r.ONE_MINUS_DST_ALPHA,[$y]:r.CONSTANT_COLOR,[tS]:r.ONE_MINUS_CONSTANT_COLOR,[eS]:r.CONSTANT_ALPHA,[nS]:r.ONE_MINUS_CONSTANT_ALPHA};function be(Y,Mt,Bt,Nt,Ct,_t,zt,ie,Te,ye){if(Y===rs){x===!0&&(Lt(r.BLEND),x=!1);return}if(x===!1&&(yt(r.BLEND),x=!0),Y!==Oy){if(Y!==y||ye!==R){if((m!==Qs||b!==Qs)&&(r.blendEquation(r.FUNC_ADD),m=Qs,b=Qs),ye)switch(Y){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case a_:r.blendFunc(r.ONE,r.ONE);break;case s_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case r_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case a_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case s_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}L=null,w=null,N=null,F=null,O.set(0,0,0),q=0,y=Y,R=ye}return}Ct=Ct||Mt,_t=_t||Bt,zt=zt||Nt,(Mt!==m||Ct!==b)&&(r.blendEquationSeparate(pe[Mt],pe[Ct]),m=Mt,b=Ct),(Bt!==L||Nt!==w||_t!==N||zt!==F)&&(r.blendFuncSeparate(H[Bt],H[Nt],H[_t],H[zt]),L=Bt,w=Nt,N=_t,F=zt),(ie.equals(O)===!1||Te!==q)&&(r.blendColor(ie.r,ie.g,ie.b,Te),O.copy(ie),q=Te),y=Y,R=!1}function Jt(Y,Mt){Y.side===Xi?Lt(r.CULL_FACE):yt(r.CULL_FACE);let Bt=Y.side===Xn;Mt&&(Bt=!Bt),ve(Bt),Y.blending===Os&&Y.transparent===!1?be(rs):be(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Nt=Y.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ot(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(Y){T!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),T=Y)}function Ft(Y){Y!==Py?(yt(r.CULL_FACE),Y!==P&&(Y===i_?r.cullFace(r.BACK):Y===Fy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),P=Y}function He(Y){Y!==Z&&(U&&r.lineWidth(Y),Z=Y)}function Ot(Y,Mt,Bt){Y?(yt(r.POLYGON_OFFSET_FILL),(st!==Mt||lt!==Bt)&&(r.polygonOffset(Mt,Bt),st=Mt,lt=Bt)):Lt(r.POLYGON_OFFSET_FILL)}function oe(Y){Y?yt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function We(Y){Y===void 0&&(Y=r.TEXTURE0+ct-1),ht!==Y&&(r.activeTexture(Y),ht=Y)}function Ke(Y,Mt,Bt){Bt===void 0&&(ht===null?Bt=r.TEXTURE0+ct-1:Bt=ht);let Nt=D[Bt];Nt===void 0&&(Nt={type:void 0,texture:void 0},D[Bt]=Nt),(Nt.type!==Y||Nt.texture!==Mt)&&(ht!==Bt&&(r.activeTexture(Bt),ht=Bt),r.bindTexture(Y,Mt||dt[Y]),Nt.type=Y,Nt.texture=Mt)}function Q(){const Y=D[ht];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{r.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{r.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{r.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(){try{r.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(){try{r.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function St(){try{r.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(Y){vt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),vt.copy(Y))}function Wt(Y){bt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),bt.copy(Y))}function Ht(Y,Mt){let Bt=d.get(Mt);Bt===void 0&&(Bt=new WeakMap,d.set(Mt,Bt));let Nt=Bt.get(Y);Nt===void 0&&(Nt=r.getUniformBlockIndex(Mt,Y.name),Bt.set(Y,Nt))}function Tt(Y,Mt){const Nt=d.get(Mt).get(Y);p.get(Mt)!==Nt&&(r.uniformBlockBinding(Mt,Nt,Y.__bindingPointIndex),p.set(Mt,Nt))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ht=null,D={},_={},E=new WeakMap,v=[],C=null,x=!1,y=null,m=null,L=null,w=null,b=null,N=null,F=null,O=new Ce(0,0,0),q=0,R=!1,T=null,P=null,Z=null,st=null,lt=null,vt.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Lt,bindFramebuffer:Yt,drawBuffers:ne,useProgram:ze,setBlending:be,setMaterial:Jt,setFlipSided:ve,setCullFace:Ft,setLineWidth:He,setPolygonOffset:Ot,setScissorTest:oe,activeTexture:We,bindTexture:Ke,unbindTexture:Q,compressedTexImage2D:M,compressedTexImage3D:et,texImage2D:qt,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:Tt,texStorage2D:It,texStorage3D:kt,texSubImage2D:ft,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:Qt,scissor:Dt,viewport:Wt,reset:re}}function ob(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ae,g=new WeakMap;let _;const E=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(Q,M){return v?new OffscreenCanvas(Q,M):yl("canvas")}function x(Q,M,et){let ft=1;const Et=Ke(Q);if((Et.width>et||Et.height>et)&&(ft=et/Math.max(Et.width,Et.height)),ft<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const ut=Math.floor(ft*Et.width),Qt=Math.floor(ft*Et.height);_===void 0&&(_=C(ut,Qt));const It=M?C(ut,Qt):_;return It.width=ut,It.height=Qt,It.getContext("2d").drawImage(Q,0,0,ut,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ut+"x"+Qt+")."),It}else return"data"in Q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),Q;return Q}function y(Q){return Q.generateMipmaps}function m(Q){r.generateMipmap(Q)}function L(Q){return Q.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:Q.isWebGL3DRenderTarget?r.TEXTURE_3D:Q.isWebGLArrayRenderTarget||Q.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(Q,M,et,ft,Et=!1){if(Q!==null){if(r[Q]!==void 0)return r[Q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let ut=M;if(M===r.RED&&(et===r.FLOAT&&(ut=r.R32F),et===r.HALF_FLOAT&&(ut=r.R16F),et===r.UNSIGNED_BYTE&&(ut=r.R8)),M===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.R8UI),et===r.UNSIGNED_SHORT&&(ut=r.R16UI),et===r.UNSIGNED_INT&&(ut=r.R32UI),et===r.BYTE&&(ut=r.R8I),et===r.SHORT&&(ut=r.R16I),et===r.INT&&(ut=r.R32I)),M===r.RG&&(et===r.FLOAT&&(ut=r.RG32F),et===r.HALF_FLOAT&&(ut=r.RG16F),et===r.UNSIGNED_BYTE&&(ut=r.RG8)),M===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RG8UI),et===r.UNSIGNED_SHORT&&(ut=r.RG16UI),et===r.UNSIGNED_INT&&(ut=r.RG32UI),et===r.BYTE&&(ut=r.RG8I),et===r.SHORT&&(ut=r.RG16I),et===r.INT&&(ut=r.RG32I)),M===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),et===r.UNSIGNED_INT&&(ut=r.RGB32UI),et===r.BYTE&&(ut=r.RGB8I),et===r.SHORT&&(ut=r.RGB16I),et===r.INT&&(ut=r.RGB32I)),M===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),et===r.UNSIGNED_INT&&(ut=r.RGBA32UI),et===r.BYTE&&(ut=r.RGBA8I),et===r.SHORT&&(ut=r.RGBA16I),et===r.INT&&(ut=r.RGBA32I)),M===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),M===r.RGBA){const Qt=Et?hu:Ie.getTransfer(ft);et===r.FLOAT&&(ut=r.RGBA32F),et===r.HALF_FLOAT&&(ut=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ut=Qt===Pe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(Q,M){let et;return Q?M===null||M===Ys||M===dl?et=r.DEPTH24_STENCIL8:M===ni?et=r.DEPTH32F_STENCIL8:M===hl&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ys||M===dl?et=r.DEPTH_COMPONENT24:M===ni?et=r.DEPTH_COMPONENT32F:M===hl&&(et=r.DEPTH_COMPONENT16),et}function N(Q,M){return y(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==di&&Q.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?M.mipmaps.length:1}function F(Q){const M=Q.target;M.removeEventListener("dispose",F),q(M),M.isVideoTexture&&g.delete(M)}function O(Q){const M=Q.target;M.removeEventListener("dispose",O),T(M)}function q(Q){const M=s.get(Q);if(M.__webglInit===void 0)return;const et=Q.source,ft=E.get(et);if(ft){const Et=ft[M.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&R(Q),Object.keys(ft).length===0&&E.delete(et)}s.remove(Q)}function R(Q){const M=s.get(Q);r.deleteTexture(M.__webglTexture);const et=Q.source,ft=E.get(et);delete ft[M.__cacheKey],f.memory.textures--}function T(Q){const M=s.get(Q);if(Q.depthTexture&&(Q.depthTexture.dispose(),s.remove(Q.depthTexture)),Q.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(M.__webglFramebuffer[ft]))for(let Et=0;Et<M.__webglFramebuffer[ft].length;Et++)r.deleteFramebuffer(M.__webglFramebuffer[ft][Et]);else r.deleteFramebuffer(M.__webglFramebuffer[ft]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ft])}else{if(Array.isArray(M.__webglFramebuffer))for(let ft=0;ft<M.__webglFramebuffer.length;ft++)r.deleteFramebuffer(M.__webglFramebuffer[ft]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ft=0;ft<M.__webglColorRenderbuffer.length;ft++)M.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ft]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const et=Q.textures;for(let ft=0,Et=et.length;ft<Et;ft++){const ut=s.get(et[ft]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(et[ft])}s.remove(Q)}let P=0;function Z(){P=0}function st(){const Q=P;return Q>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+l.maxTextures),P+=1,Q}function lt(Q){const M=[];return M.push(Q.wrapS),M.push(Q.wrapT),M.push(Q.wrapR||0),M.push(Q.magFilter),M.push(Q.minFilter),M.push(Q.anisotropy),M.push(Q.internalFormat),M.push(Q.format),M.push(Q.type),M.push(Q.generateMipmaps),M.push(Q.premultiplyAlpha),M.push(Q.flipY),M.push(Q.unpackAlignment),M.push(Q.colorSpace),M.join()}function ct(Q,M){const et=s.get(Q);if(Q.isVideoTexture&&oe(Q),Q.isRenderTargetTexture===!1&&Q.isExternalTexture!==!0&&Q.version>0&&et.__version!==Q.version){const ft=Q.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(et,Q,M);return}}else Q.isExternalTexture&&(et.__webglTexture=Q.sourceTexture?Q.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+M)}function U(Q,M){const et=s.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&et.__version!==Q.version){dt(et,Q,M);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+M)}function z(Q,M){const et=s.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&et.__version!==Q.version){dt(et,Q,M);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+M)}function V(Q,M){const et=s.get(Q);if(Q.version>0&&et.__version!==Q.version){yt(et,Q,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+M)}const ht={[Dh]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[Uh]:r.MIRRORED_REPEAT},D={[di]:r.NEAREST,[AS]:r.NEAREST_MIPMAP_NEAREST,[Qc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[TA]:r.LINEAR_MIPMAP_NEAREST,[xa]:r.LINEAR_MIPMAP_LINEAR},j={[gS]:r.NEVER,[SS]:r.ALWAYS,[mS]:r.LESS,[wE]:r.LEQUAL,[_S]:r.EQUAL,[yS]:r.GEQUAL,[ES]:r.GREATER,[vS]:r.NOTEQUAL};function gt(Q,M){if(M.type===ni&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===TA||M.magFilter===Qc||M.magFilter===xa||M.minFilter===On||M.minFilter===TA||M.minFilter===Qc||M.minFilter===xa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(Q,r.TEXTURE_WRAP_S,ht[M.wrapS]),r.texParameteri(Q,r.TEXTURE_WRAP_T,ht[M.wrapT]),(Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY)&&r.texParameteri(Q,r.TEXTURE_WRAP_R,ht[M.wrapR]),r.texParameteri(Q,r.TEXTURE_MAG_FILTER,D[M.magFilter]),r.texParameteri(Q,r.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(r.texParameteri(Q,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(Q,r.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===di||M.minFilter!==Qc&&M.minFilter!==xa||M.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(Q,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function vt(Q,M){let et=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,M.addEventListener("dispose",F));const ft=M.source;let Et=E.get(ft);Et===void 0&&(Et={},E.set(ft,Et));const ut=lt(M);if(ut!==Q.__cacheKey){Et[ut]===void 0&&(Et[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,et=!0),Et[ut].usedTimes++;const Qt=Et[Q.__cacheKey];Qt!==void 0&&(Et[Q.__cacheKey].usedTimes--,Qt.usedTimes===0&&R(M)),Q.__cacheKey=ut,Q.__webglTexture=Et[ut].texture}return et}function bt(Q,M,et){return Math.floor(Math.floor(Q/et)/M)}function it(Q,M,et,ft){const ut=Q.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,et,ft,M.data);else{ut.sort((St,Dt)=>St.start-Dt.start);let Qt=0;for(let St=1;St<ut.length;St++){const Dt=ut[Qt],Wt=ut[St],Ht=Dt.start+Dt.count,Tt=bt(Wt.start,M.width,4),re=bt(Dt.start,M.width,4);Wt.start<=Ht+1&&Tt===re&&bt(Wt.start+Wt.count-1,M.width,4)===Tt?Dt.count=Math.max(Dt.count,Wt.start+Wt.count-Dt.start):(++Qt,ut[Qt]=Wt)}ut.length=Qt+1;const It=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let St=0,Dt=ut.length;St<Dt;St++){const Wt=ut[St],Ht=Math.floor(Wt.start/4),Tt=Math.ceil(Wt.count/4),re=Ht%M.width,Y=Math.floor(Ht/M.width),Mt=Tt,Bt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,re,Y,Mt,Bt,et,ft,M.data)}Q.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,It),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,qt)}}function dt(Q,M,et){let ft=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ft=r.TEXTURE_3D);const Et=vt(Q,M),ut=M.source;i.bindTexture(ft,Q.__webglTexture,r.TEXTURE0+et);const Qt=s.get(ut);if(ut.version!==Qt.__version||Et===!0){i.activeTexture(r.TEXTURE0+et);const It=Ie.getPrimaries(Ie.workingColorSpace),kt=M.colorSpace===Wi?null:Ie.getPrimaries(M.colorSpace),qt=M.colorSpace===Wi||It===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let St=x(M.image,!1,l.maxTextureSize);St=We(M,St);const Dt=c.convert(M.format,M.colorSpace),Wt=c.convert(M.type);let Ht=w(M.internalFormat,Dt,Wt,M.colorSpace,M.isVideoTexture);gt(ft,M);let Tt;const re=M.mipmaps,Y=M.isVideoTexture!==!0,Mt=Qt.__version===void 0||Et===!0,Bt=ut.dataReady,Nt=N(M,St);if(M.isDepthTexture)Ht=b(M.format===gl,M.type),Mt&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Ht,St.width,St.height):i.texImage2D(r.TEXTURE_2D,0,Ht,St.width,St.height,0,Dt,Wt,null));else if(M.isDataTexture)if(re.length>0){Y&&Mt&&i.texStorage2D(r.TEXTURE_2D,Nt,Ht,re[0].width,re[0].height);for(let Ct=0,_t=re.length;Ct<_t;Ct++)Tt=re[Ct],Y?Bt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Tt.width,Tt.height,Dt,Wt,Tt.data):i.texImage2D(r.TEXTURE_2D,Ct,Ht,Tt.width,Tt.height,0,Dt,Wt,Tt.data);M.generateMipmaps=!1}else Y?(Mt&&i.texStorage2D(r.TEXTURE_2D,Nt,Ht,St.width,St.height),Bt&&it(M,St,Dt,Wt)):i.texImage2D(r.TEXTURE_2D,0,Ht,St.width,St.height,0,Dt,Wt,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Y&&Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Ht,re[0].width,re[0].height,St.depth);for(let Ct=0,_t=re.length;Ct<_t;Ct++)if(Tt=re[Ct],M.format!==Tn)if(Dt!==null)if(Y){if(Bt)if(M.layerUpdates.size>0){const zt=U_(Tt.width,Tt.height,M.format,M.type);for(const ie of M.layerUpdates){const Te=Tt.data.subarray(ie*zt/Tt.data.BYTES_PER_ELEMENT,(ie+1)*zt/Tt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,ie,Tt.width,Tt.height,1,Dt,Te)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Tt.width,Tt.height,St.depth,Dt,Tt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ct,Ht,Tt.width,Tt.height,St.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Bt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Tt.width,Tt.height,St.depth,Dt,Wt,Tt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ct,Ht,Tt.width,Tt.height,St.depth,0,Dt,Wt,Tt.data)}else{Y&&Mt&&i.texStorage2D(r.TEXTURE_2D,Nt,Ht,re[0].width,re[0].height);for(let Ct=0,_t=re.length;Ct<_t;Ct++)Tt=re[Ct],M.format!==Tn?Dt!==null?Y?Bt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ct,0,0,Tt.width,Tt.height,Dt,Tt.data):i.compressedTexImage2D(r.TEXTURE_2D,Ct,Ht,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Bt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Tt.width,Tt.height,Dt,Wt,Tt.data):i.texImage2D(r.TEXTURE_2D,Ct,Ht,Tt.width,Tt.height,0,Dt,Wt,Tt.data)}else if(M.isDataArrayTexture)if(Y){if(Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Ht,St.width,St.height,St.depth),Bt)if(M.layerUpdates.size>0){const Ct=U_(St.width,St.height,M.format,M.type);for(const _t of M.layerUpdates){const zt=St.data.subarray(_t*Ct/St.data.BYTES_PER_ELEMENT,(_t+1)*Ct/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Dt,Wt,zt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Dt,Wt,St.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,St.width,St.height,St.depth,0,Dt,Wt,St.data);else if(M.isData3DTexture)Y?(Mt&&i.texStorage3D(r.TEXTURE_3D,Nt,Ht,St.width,St.height,St.depth),Bt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Dt,Wt,St.data)):i.texImage3D(r.TEXTURE_3D,0,Ht,St.width,St.height,St.depth,0,Dt,Wt,St.data);else if(M.isFramebufferTexture){if(Mt)if(Y)i.texStorage2D(r.TEXTURE_2D,Nt,Ht,St.width,St.height);else{let Ct=St.width,_t=St.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(r.TEXTURE_2D,zt,Ht,Ct,_t,0,Dt,Wt,null),Ct>>=1,_t>>=1}}else if(re.length>0){if(Y&&Mt){const Ct=Ke(re[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Ht,Ct.width,Ct.height)}for(let Ct=0,_t=re.length;Ct<_t;Ct++)Tt=re[Ct],Y?Bt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Dt,Wt,Tt):i.texImage2D(r.TEXTURE_2D,Ct,Ht,Dt,Wt,Tt);M.generateMipmaps=!1}else if(Y){if(Mt){const Ct=Ke(St);i.texStorage2D(r.TEXTURE_2D,Nt,Ht,Ct.width,Ct.height)}Bt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,Wt,St)}else i.texImage2D(r.TEXTURE_2D,0,Ht,Dt,Wt,St);y(M)&&m(ft),Qt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}Q.__version=M.version}function yt(Q,M,et){if(M.image.length!==6)return;const ft=vt(Q,M),Et=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+et);const ut=s.get(Et);if(Et.version!==ut.__version||ft===!0){i.activeTexture(r.TEXTURE0+et);const Qt=Ie.getPrimaries(Ie.workingColorSpace),It=M.colorSpace===Wi?null:Ie.getPrimaries(M.colorSpace),kt=M.colorSpace===Wi||Qt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,St=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let _t=0;_t<6;_t++)!qt&&!St?Dt[_t]=x(M.image[_t],!0,l.maxCubemapSize):Dt[_t]=St?M.image[_t].image:M.image[_t],Dt[_t]=We(M,Dt[_t]);const Wt=Dt[0],Ht=c.convert(M.format,M.colorSpace),Tt=c.convert(M.type),re=w(M.internalFormat,Ht,Tt,M.colorSpace),Y=M.isVideoTexture!==!0,Mt=ut.__version===void 0||ft===!0,Bt=Et.dataReady;let Nt=N(M,Wt);gt(r.TEXTURE_CUBE_MAP,M);let Ct;if(qt){Y&&Mt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,re,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){Ct=Dt[_t].mipmaps;for(let zt=0;zt<Ct.length;zt++){const ie=Ct[zt];M.format!==Tn?Ht!==null?Y?Bt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,ie.width,ie.height,Ht,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,ie.width,ie.height,Ht,Tt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,re,ie.width,ie.height,0,Ht,Tt,ie.data)}}}else{if(Ct=M.mipmaps,Y&&Mt){Ct.length>0&&Nt++;const _t=Ke(Dt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){Y?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt[_t].width,Dt[_t].height,Ht,Tt,Dt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Dt[_t].width,Dt[_t].height,0,Ht,Tt,Dt[_t].data);for(let zt=0;zt<Ct.length;zt++){const Te=Ct[zt].image[_t].image;Y?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,Te.width,Te.height,Ht,Tt,Te.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,re,Te.width,Te.height,0,Ht,Tt,Te.data)}}else{Y?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ht,Tt,Dt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Ht,Tt,Dt[_t]);for(let zt=0;zt<Ct.length;zt++){const ie=Ct[zt];Y?Bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,Ht,Tt,ie.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,re,Ht,Tt,ie.image[_t])}}}y(M)&&m(r.TEXTURE_CUBE_MAP),ut.__version=Et.version,M.onUpdate&&M.onUpdate(M)}Q.__version=M.version}function Lt(Q,M,et,ft,Et,ut){const Qt=c.convert(et.format,et.colorSpace),It=c.convert(et.type),kt=w(et.internalFormat,Qt,It,et.colorSpace),qt=s.get(M),St=s.get(et);if(St.__renderTarget=M,!qt.__hasExternalTextures){const Dt=Math.max(1,M.width>>ut),Wt=Math.max(1,M.height>>ut);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,ut,kt,Dt,Wt,M.depth,0,Qt,It,null):i.texImage2D(Et,ut,kt,Dt,Wt,0,Qt,It,null)}i.bindFramebuffer(r.FRAMEBUFFER,Q),Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,Et,St.__webglTexture,0,He(M)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,Et,St.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(Q,M,et){if(r.bindRenderbuffer(r.RENDERBUFFER,Q),M.depthBuffer){const ft=M.depthTexture,Et=ft&&ft.isDepthTexture?ft.type:null,ut=b(M.stencilBuffer,Et),Qt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=He(M);Ot(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,ut,M.width,M.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,ut,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ut,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,Q)}else{const ft=M.textures;for(let Et=0;Et<ft.length;Et++){const ut=ft[Et],Qt=c.convert(ut.format,ut.colorSpace),It=c.convert(ut.type),kt=w(ut.internalFormat,Qt,It,ut.colorSpace),qt=He(M);et&&Ot(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,kt,M.width,M.height):Ot(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,kt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,kt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(Q,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,Q),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(M.depthTexture);ft.__renderTarget=M,(!ft.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ct(M.depthTexture,0);const Et=ft.__webglTexture,ut=He(M);if(M.depthTexture.format===pl)Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(M.depthTexture.format===gl)Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function ze(Q){const M=s.get(Q),et=Q.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==Q.depthTexture){const ft=Q.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ft){const Et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ft.removeEventListener("dispose",Et)};ft.addEventListener("dispose",Et),M.__depthDisposeCallback=Et}M.__boundDepthTexture=ft}if(Q.depthTexture&&!M.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=Q.texture.mipmaps;ft&&ft.length>0?ne(M.__webglFramebuffer[0],Q):ne(M.__webglFramebuffer,Q)}else if(et){M.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ft]),M.__webglDepthbuffer[ft]===void 0)M.__webglDepthbuffer[ft]=r.createRenderbuffer(),Yt(M.__webglDepthbuffer[ft],Q,!1);else{const Et=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,ut)}}else{const ft=Q.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Yt(M.__webglDepthbuffer,Q,!1);else{const Et=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(Q,M,et){const ft=s.get(Q);M!==void 0&&Lt(ft.__webglFramebuffer,Q,Q.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&ze(Q)}function H(Q){const M=Q.texture,et=s.get(Q),ft=s.get(M);Q.addEventListener("dispose",O);const Et=Q.textures,ut=Q.isWebGLCubeRenderTarget===!0,Qt=Et.length>1;if(Qt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=M.version,f.memory.textures++),ut){et.__webglFramebuffer=[];for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0){et.__webglFramebuffer[It]=[];for(let kt=0;kt<M.mipmaps.length;kt++)et.__webglFramebuffer[It][kt]=r.createFramebuffer()}else et.__webglFramebuffer[It]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){et.__webglFramebuffer=[];for(let It=0;It<M.mipmaps.length;It++)et.__webglFramebuffer[It]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let It=0,kt=Et.length;It<kt;It++){const qt=s.get(Et[It]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),f.memory.textures++)}if(Q.samples>0&&Ot(Q)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let It=0;It<Et.length;It++){const kt=Et[It];et.__webglColorRenderbuffer[It]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[It]);const qt=c.convert(kt.format,kt.colorSpace),St=c.convert(kt.type),Dt=w(kt.internalFormat,qt,St,kt.colorSpace,Q.isXRRenderTarget===!0),Wt=He(Q);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Dt,Q.width,Q.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,et.__webglColorRenderbuffer[It])}r.bindRenderbuffer(r.RENDERBUFFER,null),Q.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(et.__webglDepthRenderbuffer,Q,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),gt(r.TEXTURE_CUBE_MAP,M);for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Lt(et.__webglFramebuffer[It][kt],Q,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,kt);else Lt(et.__webglFramebuffer[It],Q,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);y(M)&&m(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let It=0,kt=Et.length;It<kt;It++){const qt=Et[It],St=s.get(qt);let Dt=r.TEXTURE_2D;(Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(Dt=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,St.__webglTexture),gt(Dt,qt),Lt(et.__webglFramebuffer,Q,qt,r.COLOR_ATTACHMENT0+It,Dt,0),y(qt)&&m(Dt)}i.unbindTexture()}else{let It=r.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(It=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(It,ft.__webglTexture),gt(It,M),M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Lt(et.__webglFramebuffer[kt],Q,M,r.COLOR_ATTACHMENT0,It,kt);else Lt(et.__webglFramebuffer,Q,M,r.COLOR_ATTACHMENT0,It,0);y(M)&&m(It),i.unbindTexture()}Q.depthBuffer&&ze(Q)}function be(Q){const M=Q.textures;for(let et=0,ft=M.length;et<ft;et++){const Et=M[et];if(y(Et)){const ut=L(Q),Qt=s.get(Et).__webglTexture;i.bindTexture(ut,Qt),m(ut),i.unbindTexture()}}}const Jt=[],ve=[];function Ft(Q){if(Q.samples>0){if(Ot(Q)===!1){const M=Q.textures,et=Q.width,ft=Q.height;let Et=r.COLOR_BUFFER_BIT;const ut=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(Q),It=M.length>1;if(It)for(let qt=0;qt<M.length;qt++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const kt=Q.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let qt=0;qt<M.length;qt++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),It){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[qt]);const St=s.get(M[qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,et,ft,0,0,et,ft,Et,r.NEAREST),p===!0&&(Jt.length=0,ve.length=0,Jt.push(r.COLOR_ATTACHMENT0+qt),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(Jt.push(ut),ve.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),It)for(let qt=0;qt<M.length;qt++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[qt]);const St=s.get(M[qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,St,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&p){const M=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function He(Q){return Math.min(l.maxSamples,Q.samples)}function Ot(Q){const M=s.get(Q);return Q.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(Q){const M=f.render.frame;g.get(Q)!==M&&(g.set(Q,M),Q.update())}function We(Q,M){const et=Q.colorSpace,ft=Q.format,Et=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||et!==Pi&&et!==Wi&&(Ie.getTransfer(et)===Pe?(ft!==Tn||Et!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),M}function Ke(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(d.width=Q.naturalWidth||Q.width,d.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(d.width=Q.displayWidth,d.height=Q.displayHeight):(d.width=Q.width,d.height=Q.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=Z,this.setTexture2D=ct,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=pe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ot}function lb(r,t){function i(s,l=Wi){let c;const f=Ie.getTransfer(l);if(s===sn)return r.UNSIGNED_BYTE;if(s===rd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===od)return r.UNSIGNED_SHORT_5_5_5_1;if(s===IE)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===xE)return r.BYTE;if(s===ME)return r.SHORT;if(s===hl)return r.UNSIGNED_SHORT;if(s===sd)return r.INT;if(s===Ys)return r.UNSIGNED_INT;if(s===ni)return r.FLOAT;if(s===Qi)return r.HALF_FLOAT;if(s===BE)return r.ALPHA;if(s===bE)return r.RGB;if(s===Tn)return r.RGBA;if(s===pl)return r.DEPTH_COMPONENT;if(s===gl)return r.DEPTH_STENCIL;if(s===Ps)return r.RED;if(s===ld)return r.RED_INTEGER;if(s===Fs)return r.RG;if(s===cd)return r.RG_INTEGER;if(s===ud)return r.RGBA_INTEGER;if(s===Zr||s===Gs||s===$r||s===zs)if(f===Pe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zr)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$r)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zr)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gs)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$r)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zs)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cu||s===Lh||s===uu||s===Qh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===cu)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uu)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fu||s===ml||s===_l)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===fu||s===ml)return f===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===_l)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hs||s===Nh||s===Ph||s===Fh||s===El||s===Oh||s===Gh||s===zh||s===Hh||s===kh||s===Vh||s===qh||s===Yh||s===Xh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hs)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ph)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===El)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Oh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xh)return f===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ks||s===Wh||s===Au)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ks)return f===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Au)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===TE||s===Kh||s===Jh||s===jh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ks)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class e0 extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new e0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new $i({vertexShader:cb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yn(new Eu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends Ks{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,d=null,g=null,_=null,E=null,v=null,C=null;const x=new fb,y={},m=i.getContextAttributes();let L=null,w=null;const b=[],N=[],F=new ae;let O=null;const q=new hi;q.viewport=new Se;const R=new hi;R.viewport=new Se;const T=[q,R],P=new TC;let Z=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=b[it];return dt===void 0&&(dt=new JA,b[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=b[it];return dt===void 0&&(dt=new JA,b[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=b[it];return dt===void 0&&(dt=new JA,b[it]=dt),dt.getHandSpace()};function lt(it){const dt=N.indexOf(it.inputSource);if(dt===-1)return;const yt=b[dt];yt!==void 0&&(yt.update(it.inputSource,it.frame,d||f),yt.dispatchEvent({type:it.type,data:it.inputSource}))}function ct(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",U);for(let it=0;it<b.length;it++){const dt=N[it];dt!==null&&(N[it]=null,b[it].disconnect(dt))}Z=null,st=null,x.reset();for(const it in y)delete y[it];t.setRenderTarget(L),v=null,E=null,_=null,l=null,w=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(O),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return E!==null?E:v},this.getBinding=function(){return _},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Lt=null,Yt=null;m.depth&&(Yt=m.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=m.stencil?gl:pl,Lt=m.stencil?dl:Ys);const ne={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};E=_.createProjectionLayer(ne),l.updateRenderState({layers:[E]}),t.setPixelRatio(1),t.setSize(E.textureWidth,E.textureHeight,!1),w=new Ws(E.textureWidth,E.textureHeight,{format:Tn,type:sn,depthTexture:new qE(E.textureWidth,E.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:c};v=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new Ws(v.framebufferWidth,v.framebufferHeight,{format:Tn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,f=await l.requestReferenceSpace(h),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(it){for(let dt=0;dt<it.removed.length;dt++){const yt=it.removed[dt],Lt=N.indexOf(yt);Lt>=0&&(N[Lt]=null,b[Lt].disconnect(yt))}for(let dt=0;dt<it.added.length;dt++){const yt=it.added[dt];let Lt=N.indexOf(yt);if(Lt===-1){for(let ne=0;ne<b.length;ne++)if(ne>=N.length){N.push(yt),Lt=ne;break}else if(N[ne]===null){N[ne]=yt,Lt=ne;break}if(Lt===-1)break}const Yt=b[Lt];Yt&&Yt.connect(yt)}}const z=new X,V=new X;function ht(it,dt,yt){z.setFromMatrixPosition(dt.matrixWorld),V.setFromMatrixPosition(yt.matrixWorld);const Lt=z.distanceTo(V),Yt=dt.projectionMatrix.elements,ne=yt.projectionMatrix.elements,ze=Yt[14]/(Yt[10]-1),pe=Yt[14]/(Yt[10]+1),H=(Yt[9]+1)/Yt[5],be=(Yt[9]-1)/Yt[5],Jt=(Yt[8]-1)/Yt[0],ve=(ne[8]+1)/ne[0],Ft=ze*Jt,He=ze*ve,Ot=Lt/(-Jt+ve),oe=Ot*-Jt;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(oe),it.translateZ(Ot),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Yt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const We=ze+Ot,Ke=pe+Ot,Q=Ft-oe,M=He+(Lt-oe),et=H*pe/Ke*We,ft=be*pe/Ke*We;it.projectionMatrix.makePerspective(Q,M,et,ft,We,Ke),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function D(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let dt=it.near,yt=it.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),P.near=R.near=q.near=dt,P.far=R.far=q.far=yt,(Z!==P.near||st!==P.far)&&(l.updateRenderState({depthNear:P.near,depthFar:P.far}),Z=P.near,st=P.far),P.layers.mask=it.layers.mask|6,q.layers.mask=P.layers.mask&3,R.layers.mask=P.layers.mask&5;const Lt=it.parent,Yt=P.cameras;D(P,Lt);for(let ne=0;ne<Yt.length;ne++)D(Yt[ne],Lt);Yt.length===2?ht(P,q,R):P.projectionMatrix.copy(q.projectionMatrix),j(it,P,Lt)};function j(it,dt,yt){yt===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(yt.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=vl*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(E===null&&v===null))return p},this.setFoveation=function(it){p=it,E!==null&&(E.fixedFoveation=it),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(it){return y[it]};let gt=null;function vt(it,dt){if(g=dt.getViewerPose(d||f),C=dt,g!==null){const yt=g.views;v!==null&&(t.setRenderTargetFramebuffer(w,v.framebuffer),t.setRenderTarget(w));let Lt=!1;yt.length!==P.cameras.length&&(P.cameras.length=0,Lt=!0);for(let pe=0;pe<yt.length;pe++){const H=yt[pe];let be=null;if(v!==null)be=v.getViewport(H);else{const ve=_.getViewSubImage(E,H);be=ve.viewport,pe===0&&(t.setRenderTargetTextures(w,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(w))}let Jt=T[pe];Jt===void 0&&(Jt=new hi,Jt.layers.enable(pe),Jt.viewport=new Se,T[pe]=Jt),Jt.matrix.fromArray(H.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(H.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(P.matrix.copy(Jt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Lt===!0&&P.cameras.push(Jt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const pe=_.getDepthInformation(yt[0]);pe&&pe.isValid&&pe.texture&&x.init(pe,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let pe=0;pe<yt.length;pe++){const H=yt[pe].camera;if(H){let be=y[H];be||(be=new e0,y[H]=be);const Jt=_.getCameraImage(H);be.sourceTexture=Jt}}}for(let yt=0;yt<b.length;yt++){const Lt=N[yt],Yt=b[yt];Lt!==null&&Yt!==void 0&&Yt.update(Lt,dt,d||f)}gt&&gt(it,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),C=null}const bt=new JE;bt.setAnimationLoop(vt),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const Us=new Zi,hb=new je;function db(r,t){function i(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function s(y,m){m.color.getRGB(y.fogColor.value,zE(r)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function l(y,m,L,w,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?c(y,m):m.isMeshToonMaterial?(c(y,m),_(y,m)):m.isMeshPhongMaterial?(c(y,m),g(y,m)):m.isMeshStandardMaterial?(c(y,m),E(y,m),m.isMeshPhysicalMaterial&&v(y,m,b)):m.isMeshMatcapMaterial?(c(y,m),C(y,m)):m.isMeshDepthMaterial?c(y,m):m.isMeshDistanceMaterial?(c(y,m),x(y,m)):m.isMeshNormalMaterial?c(y,m):m.isLineBasicMaterial?(f(y,m),m.isLineDashedMaterial&&h(y,m)):m.isPointsMaterial?p(y,m,L,w):m.isSpriteMaterial?d(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function c(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,i(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Xn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,i(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Xn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,i(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,i(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const L=t.get(m),w=L.envMap,b=L.envMapRotation;w&&(y.envMap.value=w,Us.copy(b),Us.x*=-1,Us.y*=-1,Us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(Us)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,y.aoMapTransform))}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform))}function h(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function p(y,m,L,w){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*L,y.scale.value=w*.5,m.map&&(y.map.value=m.map,i(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function E(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function v(y,m,L){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,m){m.matcap&&(y.matcap.value=m.matcap)}function x(y,m){const L=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function pb(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,w){const b=w.program;s.uniformBlockBinding(L,b)}function d(L,w){let b=l[L.id];b===void 0&&(C(L),b=g(L),l[L.id]=b,L.addEventListener("dispose",y));const N=w.program;s.updateUBOMapping(L,N);const F=t.render.frame;c[L.id]!==F&&(E(L),c[L.id]=F)}function g(L){const w=_();L.__bindingPointIndex=w;const b=r.createBuffer(),N=L.__size,F=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,N,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function _(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(L){const w=l[L.id],b=L.uniforms,N=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let F=0,O=b.length;F<O;F++){const q=Array.isArray(b[F])?b[F]:[b[F]];for(let R=0,T=q.length;R<T;R++){const P=q[R];if(v(P,F,R,N)===!0){const Z=P.__offset,st=Array.isArray(P.value)?P.value:[P.value];let lt=0;for(let ct=0;ct<st.length;ct++){const U=st[ct],z=x(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,Z+lt,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,lt),lt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(L,w,b,N){const F=L.value,O=w+"_"+b;if(N[O]===void 0)return typeof F=="number"||typeof F=="boolean"?N[O]=F:N[O]=F.clone(),!0;{const q=N[O];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return N[O]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function C(L){const w=L.uniforms;let b=0;const N=16;for(let O=0,q=w.length;O<q;O++){const R=Array.isArray(w[O])?w[O]:[w[O]];for(let T=0,P=R.length;T<P;T++){const Z=R[T],st=Array.isArray(Z.value)?Z.value:[Z.value];for(let lt=0,ct=st.length;lt<ct;lt++){const U=st[lt],z=x(U),V=b%N,ht=V%z.boundary,D=V+ht;b+=ht,D!==0&&N-D<z.storage&&(b+=N-D),Z.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=z.storage}}}const F=b%N;return F>0&&(b+=N-F),L.__size=b,L.__cache={},this}function x(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function y(L){const w=L.target;w.removeEventListener("dispose",y);const b=f.indexOf(w.__bindingPointIndex);f.splice(b,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function m(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:d,dispose:m}}class gb{constructor(t={}){const{canvas:i=OS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:E=!1}=t;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=f;const C=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const L=[],w=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Ai;let F=0,O=0,q=null,R=-1,T=null;const P=new Se,Z=new Se;let st=null;const lt=new Ce(0);let ct=0,U=i.width,z=i.height,V=1,ht=null,D=null;const j=new Se(0,0,U,z),gt=new Se(0,0,U,z);let vt=!1;const bt=new dd;let it=!1,dt=!1;const yt=new je,Lt=new X,Yt=new Se,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function pe(){return q===null?V:1}let H=s;function be(B,W){return i.getContext(B,W)}try{const B={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ad}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),H===null){const W="webgl2";if(H=be(W,B),H===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Jt,ve,Ft,He,Ot,oe,We,Ke,Q,M,et,ft,Et,ut,Qt,It,kt,qt,St,Dt,Wt,Ht,Tt,re;function Y(){Jt=new II(H),Jt.init(),Ht=new lb(H,Jt),ve=new EI(H,Jt,t,Ht),Ft=new rb(H,Jt),ve.reversedDepthBuffer&&E&&Ft.buffers.depth.setReversed(!0),He=new TI(H),Ot=new XB,oe=new ob(H,Jt,Ft,Ot,ve,Ht,He),We=new yI(b),Ke=new MI(b),Q=new QC(H),Tt=new mI(H,Q),M=new BI(H,Q,He,Tt),et=new wI(H,M,Q,He),St=new RI(H,ve,oe),It=new vI(Ot),ft=new YB(b,We,Ke,Jt,ve,Tt,It),Et=new db(b,Ot),ut=new KB,Qt=new eb(Jt),qt=new gI(b,We,Ke,Ft,et,v,p),kt=new ab(b,et,ve),re=new pb(H,He,ve,Ft),Dt=new _I(H,Jt,He),Wt=new bI(H,Jt,He),He.programs=ft.programs,b.capabilities=ve,b.extensions=Jt,b.properties=Ot,b.renderLists=ut,b.shadowMap=kt,b.state=Ft,b.info=He}Y();const Mt=new Ab(b,H);this.xr=Mt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const B=Jt.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=Jt.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(B){B!==void 0&&(V=B,this.setSize(U,z,!1))},this.getSize=function(B){return B.set(U,z)},this.setSize=function(B,W,rt=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=B,z=W,i.width=Math.floor(B*V),i.height=Math.floor(W*V),rt===!0&&(i.style.width=B+"px",i.style.height=W+"px"),this.setViewport(0,0,B,W)},this.getDrawingBufferSize=function(B){return B.set(U*V,z*V).floor()},this.setDrawingBufferSize=function(B,W,rt){U=B,z=W,V=rt,i.width=Math.floor(B*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,B,W)},this.getCurrentViewport=function(B){return B.copy(P)},this.getViewport=function(B){return B.copy(j)},this.setViewport=function(B,W,rt,ot){B.isVector4?j.set(B.x,B.y,B.z,B.w):j.set(B,W,rt,ot),Ft.viewport(P.copy(j).multiplyScalar(V).round())},this.getScissor=function(B){return B.copy(gt)},this.setScissor=function(B,W,rt,ot){B.isVector4?gt.set(B.x,B.y,B.z,B.w):gt.set(B,W,rt,ot),Ft.scissor(Z.copy(gt).multiplyScalar(V).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(B){Ft.setScissorTest(vt=B)},this.setOpaqueSort=function(B){ht=B},this.setTransparentSort=function(B){D=B},this.getClearColor=function(B){return B.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(B=!0,W=!0,rt=!0){let ot=0;if(B){let J=!1;if(q!==null){const xt=q.texture.format;J=xt===ud||xt===cd||xt===ld}if(J){const xt=q.texture.type,wt=xt===sn||xt===Ys||xt===hl||xt===dl||xt===rd||xt===od,Pt=qt.getClearColor(),Ut=qt.getClearAlpha(),jt=Pt.r,$t=Pt.g,Vt=Pt.b;wt?(C[0]=jt,C[1]=$t,C[2]=Vt,C[3]=Ut,H.clearBufferuiv(H.COLOR,0,C)):(x[0]=jt,x[1]=$t,x[2]=Vt,x[3]=Ut,H.clearBufferiv(H.COLOR,0,x))}else ot|=H.COLOR_BUFFER_BIT}W&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),qt.dispose(),ut.dispose(),Qt.dispose(),Ot.dispose(),We.dispose(),Ke.dispose(),et.dispose(),Tt.dispose(),re.dispose(),ft.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",un),Mt.removeEventListener("sessionend",fn),Ze.stop()};function Bt(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const B=He.autoReset,W=kt.enabled,rt=kt.autoUpdate,ot=kt.needsUpdate,J=kt.type;Y(),He.autoReset=B,kt.enabled=W,kt.autoUpdate=rt,kt.needsUpdate=ot,kt.type=J}function Ct(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function _t(B){const W=B.target;W.removeEventListener("dispose",_t),zt(W)}function zt(B){ie(B),Ot.remove(B)}function ie(B){const W=Ot.get(B).programs;W!==void 0&&(W.forEach(function(rt){ft.releaseProgram(rt)}),B.isShaderMaterial&&ft.releaseShaderCache(B))}this.renderBufferDirect=function(B,W,rt,ot,J,xt){W===null&&(W=ne);const wt=J.isMesh&&J.matrixWorld.determinant()<0,Pt=ba(B,W,rt,ot,J);Ft.setMaterial(ot,wt);let Ut=rt.index,jt=1;if(ot.wireframe===!0){if(Ut=M.getWireframeAttribute(rt),Ut===void 0)return;jt=2}const $t=rt.drawRange,Vt=rt.attributes.position;let ue=$t.start*jt,xe=($t.start+$t.count)*jt;xt!==null&&(ue=Math.max(ue,xt.start*jt),xe=Math.min(xe,(xt.start+xt.count)*jt)),Ut!==null?(ue=Math.max(ue,0),xe=Math.min(xe,Ut.count)):Vt!=null&&(ue=Math.max(ue,0),xe=Math.min(xe,Vt.count));const qe=xe-ue;if(qe<0||qe===1/0)return;Tt.setup(J,ot,Pt,rt,Ut);let Ue,fe=Dt;if(Ut!==null&&(Ue=Q.get(Ut),fe=Wt,fe.setIndex(Ue)),J.isMesh)ot.wireframe===!0?(Ft.setLineWidth(ot.wireframeLinewidth*pe()),fe.setMode(H.LINES)):fe.setMode(H.TRIANGLES);else if(J.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*pe()),J.isLineSegments?fe.setMode(H.LINES):J.isLineLoop?fe.setMode(H.LINE_LOOP):fe.setMode(H.LINE_STRIP)}else J.isPoints?fe.setMode(H.POINTS):J.isSprite&&fe.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))fe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,Ve=J._multiDrawCounts,ge=J._multiDrawCount,Dn=Ut?Q.get(Ut).bytesPerElement:1,Ii=Ot.get(ot).currentProgram.getUniforms();for(let Gn=0;Gn<ge;Gn++)Ii.setValue(H,"_gl_DrawID",Gn),fe.render(Kt[Gn]/Dn,Ve[Gn])}else if(J.isInstancedMesh)fe.renderInstances(ue,qe,J.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ve=Math.min(rt.instanceCount,Kt);fe.renderInstances(ue,qe,Ve)}else fe.render(ue,qe)};function Te(B,W,rt){B.transparent===!0&&B.side===Xi&&B.forceSinglePass===!1?(B.side=Xn,B.needsUpdate=!0,Oi(B,W,rt),B.side=ls,B.needsUpdate=!0,Oi(B,W,rt),B.side=Xi):Oi(B,W,rt)}this.compile=function(B,W,rt=null){rt===null&&(rt=B),m=Qt.get(rt),m.init(W),w.push(m),rt.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),B!==rt&&B.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();const ot=new Set;return B.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const xt=J.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const Pt=xt[wt];Te(Pt,rt,J),ot.add(Pt)}else Te(xt,rt,J),ot.add(xt)}),m=w.pop(),ot},this.compileAsync=function(B,W,rt=null){const ot=this.compile(B,W,rt);return new Promise(J=>{function xt(){if(ot.forEach(function(wt){Ot.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){J(B);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ye=null;function Mi(B){ye&&ye(B)}function un(){Ze.stop()}function fn(){Ze.start()}const Ze=new JE;Ze.setAnimationLoop(Mi),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(B){ye=B,Mt.setAnimationLoop(B),B===null?Ze.stop():Ze.start()},Mt.addEventListener("sessionstart",un),Mt.addEventListener("sessionend",fn),this.render=function(B,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(W),W=Mt.getCamera()),B.isScene===!0&&B.onBeforeRender(b,B,W,q),m=Qt.get(B,w.length),m.init(W),w.push(m),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),bt.setFromProjectionMatrix(yt,ji,W.reversedDepth),dt=this.localClippingEnabled,it=It.init(this.clippingPlanes,dt),y=ut.get(B,L.length),y.init(),L.push(y),Mt.enabled===!0&&Mt.isPresenting===!0){const xt=b.xr.getDepthSensingMesh();xt!==null&&Fi(xt,W,-1/0,b.sortObjects)}Fi(B,W,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ht,D),ze=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ze&&qt.addToRenderList(y,B),this.info.render.frame++,it===!0&&It.beginShadows();const rt=m.state.shadowsArray;kt.render(rt,B,W),it===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,J=y.transmissive;if(m.setupLights(),W.isArrayCamera){const xt=W.cameras;if(J.length>0)for(let wt=0,Pt=xt.length;wt<Pt;wt++){const Ut=xt[wt];Il(ot,J,B,Ut)}ze&&qt.render(B);for(let wt=0,Pt=xt.length;wt<Pt;wt++){const Ut=xt[wt];Js(y,B,Ut,Ut.viewport)}}else J.length>0&&Il(ot,J,B,W),ze&&qt.render(B),Js(y,B,W);q!==null&&O===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),B.isScene===!0&&B.onAfterRender(b,B,W),Tt.resetDefaultState(),R=-1,T=null,w.pop(),w.length>0?(m=w[w.length-1],it===!0&&It.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Fi(B,W,rt,ot){if(B.visible===!1)return;if(B.layers.test(W.layers)){if(B.isGroup)rt=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(W);else if(B.isLight)m.pushLight(B),B.castShadow&&m.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||bt.intersectsSprite(B)){ot&&Yt.setFromMatrixPosition(B.matrixWorld).applyMatrix4(yt);const wt=et.update(B),Pt=B.material;Pt.visible&&y.push(B,wt,Pt,rt,Yt.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||bt.intersectsObject(B))){const wt=et.update(B),Pt=B.material;if(ot&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Yt.copy(B.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Yt.copy(wt.boundingSphere.center)),Yt.applyMatrix4(B.matrixWorld).applyMatrix4(yt)),Array.isArray(Pt)){const Ut=wt.groups;for(let jt=0,$t=Ut.length;jt<$t;jt++){const Vt=Ut[jt],ue=Pt[Vt.materialIndex];ue&&ue.visible&&y.push(B,wt,ue,rt,Yt.z,Vt)}}else Pt.visible&&y.push(B,wt,Pt,rt,Yt.z,null)}}const xt=B.children;for(let wt=0,Pt=xt.length;wt<Pt;wt++)Fi(xt[wt],W,rt,ot)}function Js(B,W,rt,ot){const J=B.opaque,xt=B.transmissive,wt=B.transparent;m.setupLightsView(rt),it===!0&&It.setGlobalState(b.clippingPlanes,rt),ot&&Ft.viewport(P.copy(ot)),J.length>0&&js(J,W,rt),xt.length>0&&js(xt,W,rt),wt.length>0&&js(wt,W,rt),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Il(B,W,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ot.id]===void 0&&(m.state.transmissionRenderTarget[ot.id]=new Ws(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Qi:sn,minFilter:xa,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const xt=m.state.transmissionRenderTarget[ot.id],wt=ot.viewport||P;xt.setSize(wt.z*b.transmissionResolutionScale,wt.w*b.transmissionResolutionScale);const Pt=b.getRenderTarget(),Ut=b.getActiveCubeFace(),jt=b.getActiveMipmapLevel();b.setRenderTarget(xt),b.getClearColor(lt),ct=b.getClearAlpha(),ct<1&&b.setClearColor(16777215,.5),b.clear(),ze&&qt.render(rt);const $t=b.toneMapping;b.toneMapping=os;const Vt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),m.setupLightsView(ot),it===!0&&It.setGlobalState(b.clippingPlanes,ot),js(B,rt,ot),oe.updateMultisampleRenderTarget(xt),oe.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let xe=0,qe=W.length;xe<qe;xe++){const Ue=W[xe],fe=Ue.object,Kt=Ue.geometry,Ve=Ue.material,ge=Ue.group;if(Ve.side===Xi&&fe.layers.test(ot.layers)){const Dn=Ve.side;Ve.side=Xn,Ve.needsUpdate=!0,oo(fe,rt,ot,Kt,Ve,ge),Ve.side=Dn,Ve.needsUpdate=!0,ue=!0}}ue===!0&&(oe.updateMultisampleRenderTarget(xt),oe.updateRenderTargetMipmap(xt))}b.setRenderTarget(Pt,Ut,jt),b.setClearColor(lt,ct),Vt!==void 0&&(ot.viewport=Vt),b.toneMapping=$t}function js(B,W,rt){const ot=W.isScene===!0?W.overrideMaterial:null;for(let J=0,xt=B.length;J<xt;J++){const wt=B[J],Pt=wt.object,Ut=wt.geometry,jt=wt.group;let $t=wt.material;$t.allowOverride===!0&&ot!==null&&($t=ot),Pt.layers.test(rt.layers)&&oo(Pt,W,rt,Ut,$t,jt)}}function oo(B,W,rt,ot,J,xt){B.onBeforeRender(b,W,rt,ot,J,xt),B.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),J.onBeforeRender(b,W,rt,ot,B,xt),J.transparent===!0&&J.side===Xi&&J.forceSinglePass===!1?(J.side=Xn,J.needsUpdate=!0,b.renderBufferDirect(rt,W,ot,J,B,xt),J.side=ls,J.needsUpdate=!0,b.renderBufferDirect(rt,W,ot,J,B,xt),J.side=Xi):b.renderBufferDirect(rt,W,ot,J,B,xt),B.onAfterRender(b,W,rt,ot,J,xt)}function Oi(B,W,rt){W.isScene!==!0&&(W=ne);const ot=Ot.get(B),J=m.state.lights,xt=m.state.shadowsArray,wt=J.state.version,Pt=ft.getParameters(B,J.state,xt,W,rt),Ut=ft.getProgramCacheKey(Pt);let jt=ot.programs;ot.environment=B.isMeshStandardMaterial?W.environment:null,ot.fog=W.fog,ot.envMap=(B.isMeshStandardMaterial?Ke:We).get(B.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&B.envMap===null?W.environmentRotation:B.envMapRotation,jt===void 0&&(B.addEventListener("dispose",_t),jt=new Map,ot.programs=jt);let $t=jt.get(Ut);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===wt)return ea(B,Pt),$t}else Pt.uniforms=ft.getUniforms(B),B.onBeforeCompile(Pt,b),$t=ft.acquireProgram(Pt,Ut),jt.set(Ut,$t),ot.uniforms=Pt.uniforms;const Vt=ot.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Vt.clippingPlanes=It.uniform),ea(B,Pt),ot.needsLights=Ta(B),ot.lightsStateVersion=wt,ot.needsLights&&(Vt.ambientLightColor.value=J.state.ambient,Vt.lightProbe.value=J.state.probe,Vt.directionalLights.value=J.state.directional,Vt.directionalLightShadows.value=J.state.directionalShadow,Vt.spotLights.value=J.state.spot,Vt.spotLightShadows.value=J.state.spotShadow,Vt.rectAreaLights.value=J.state.rectArea,Vt.ltc_1.value=J.state.rectAreaLTC1,Vt.ltc_2.value=J.state.rectAreaLTC2,Vt.pointLights.value=J.state.point,Vt.pointLightShadows.value=J.state.pointShadow,Vt.hemisphereLights.value=J.state.hemi,Vt.directionalShadowMap.value=J.state.directionalShadowMap,Vt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Vt.spotShadowMap.value=J.state.spotShadowMap,Vt.spotLightMatrix.value=J.state.spotLightMatrix,Vt.spotLightMap.value=J.state.spotLightMap,Vt.pointShadowMap.value=J.state.pointShadowMap,Vt.pointShadowMatrix.value=J.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function Zs(B){if(B.uniformsList===null){const W=B.currentProgram.getUniforms();B.uniformsList=lu.seqWithValue(W.seq,B.uniforms)}return B.uniformsList}function ea(B,W){const rt=Ot.get(B);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function ba(B,W,rt,ot,J){W.isScene!==!0&&(W=ne),oe.resetTextureUnits();const xt=W.fog,wt=ot.isMeshStandardMaterial?W.environment:null,Pt=q===null?b.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Pi,Ut=(ot.isMeshStandardMaterial?Ke:We).get(ot.envMap||wt),jt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Vt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,xe=!!rt.morphAttributes.color;let qe=os;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qe=b.toneMapping);const Ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,fe=Ue!==void 0?Ue.length:0,Kt=Ot.get(ot),Ve=m.state.lights;if(it===!0&&(dt===!0||B!==T)){const $e=B===T&&ot.id===R;It.setState(ot,B,$e)}let ge=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ve.state.version||Kt.outputColorSpace!==Pt||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Ut||ot.fog===!0&&Kt.fog!==xt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==It.numPlanes||Kt.numIntersection!==It.numIntersection)||Kt.vertexAlphas!==jt||Kt.vertexTangents!==$t||Kt.morphTargets!==Vt||Kt.morphNormals!==ue||Kt.morphColors!==xe||Kt.toneMapping!==qe||Kt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Kt.__version=ot.version);let Dn=Kt.currentProgram;ge===!0&&(Dn=Oi(ot,W,J));let Ii=!1,Gn=!1,mn=!1;const Oe=Dn.getUniforms(),zn=Kt.uniforms;if(Ft.useProgram(Dn.program)&&(Ii=!0,Gn=!0,mn=!0),ot.id!==R&&(R=ot.id,Gn=!0),Ii||T!==B){Ft.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Oe.setValue(H,"projectionMatrix",B.projectionMatrix),Oe.setValue(H,"viewMatrix",B.matrixWorldInverse);const Sn=Oe.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Lt.setFromMatrixPosition(B.matrixWorld)),ve.logarithmicDepthBuffer&&Oe.setValue(H,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Oe.setValue(H,"isOrthographic",B.isOrthographicCamera===!0),T!==B&&(T=B,Gn=!0,mn=!0)}if(J.isSkinnedMesh){Oe.setOptional(H,J,"bindMatrix"),Oe.setOptional(H,J,"bindMatrixInverse");const $e=J.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Oe.setValue(H,"boneTexture",$e.boneTexture,oe))}J.isBatchedMesh&&(Oe.setOptional(H,J,"batchingTexture"),Oe.setValue(H,"batchingTexture",J._matricesTexture,oe),Oe.setOptional(H,J,"batchingIdTexture"),Oe.setValue(H,"batchingIdTexture",J._indirectTexture,oe),Oe.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Oe.setValue(H,"batchingColorTexture",J._colorsTexture,oe));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&St.update(J,rt,Dn),(Gn||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,Oe.setValue(H,"receiveShadow",J.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=Ut,zn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&W.environment!==null&&(zn.envMapIntensity.value=W.environmentIntensity),Gn&&(Oe.setValue(H,"toneMappingExposure",b.toneMappingExposure),Kt.needsLights&&fs(zn,mn),xt&&ot.fog===!0&&Et.refreshFogUniforms(zn,xt),Et.refreshMaterialUniforms(zn,ot,V,z,m.state.transmissionRenderTarget[B.id]),lu.upload(H,Zs(Kt),zn,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(lu.upload(H,Zs(Kt),zn,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Oe.setValue(H,"center",J.center),Oe.setValue(H,"modelViewMatrix",J.modelViewMatrix),Oe.setValue(H,"normalMatrix",J.normalMatrix),Oe.setValue(H,"modelMatrix",J.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const $e=ot.uniformsGroups;for(let Sn=0,$s=$e.length;Sn<$s;Sn++){const Wn=$e[Sn];re.update(Wn,Dn),re.bind(Wn,Dn)}}return Dn}function fs(B,W){B.ambientLightColor.needsUpdate=W,B.lightProbe.needsUpdate=W,B.directionalLights.needsUpdate=W,B.directionalLightShadows.needsUpdate=W,B.pointLights.needsUpdate=W,B.pointLightShadows.needsUpdate=W,B.spotLights.needsUpdate=W,B.spotLightShadows.needsUpdate=W,B.rectAreaLights.needsUpdate=W,B.hemisphereLights.needsUpdate=W}function Ta(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(B,W,rt){const ot=Ot.get(B);ot.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ot.get(B.texture).__webglTexture=W,Ot.get(B.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,W){const rt=Ot.get(B);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const rn=H.createFramebuffer();this.setRenderTarget=function(B,W=0,rt=0){q=B,F=W,O=rt;let ot=!0,J=null,xt=!1,wt=!1;if(B){const Ut=Ot.get(B);if(Ut.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Ut.__webglFramebuffer===void 0)oe.setupRenderTarget(B);else if(Ut.__hasExternalTextures)oe.rebindTextures(B,Ot.get(B.texture).__webglTexture,Ot.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const Vt=B.depthTexture;if(Ut.__boundDepthTexture!==Vt){if(Vt!==null&&Ot.has(Vt)&&(B.width!==Vt.image.width||B.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(B)}}const jt=B.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(wt=!0);const $t=Ot.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray($t[W])?J=$t[W][rt]:J=$t[W],xt=!0):B.samples>0&&oe.useMultisampledRTT(B)===!1?J=Ot.get(B).__webglMultisampledFramebuffer:Array.isArray($t)?J=$t[rt]:J=$t,P.copy(B.viewport),Z.copy(B.scissor),st=B.scissorTest}else P.copy(j).multiplyScalar(V).floor(),Z.copy(gt).multiplyScalar(V).floor(),st=vt;if(rt!==0&&(J=rn),Ft.bindFramebuffer(H.FRAMEBUFFER,J)&&ot&&Ft.drawBuffers(B,J),Ft.viewport(P),Ft.scissor(Z),Ft.setScissorTest(st),xt){const Ut=Ot.get(B.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,rt)}else if(wt){const Ut=W;for(let jt=0;jt<B.textures.length;jt++){const $t=Ot.get(B.textures[jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+jt,$t.__webglTexture,rt,Ut)}}else if(B!==null&&rt!==0){const Ut=Ot.get(B.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ut.__webglTexture,rt)}R=-1},this.readRenderTargetPixels=function(B,W,rt,ot,J,xt,wt,Pt=0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){Ft.bindFramebuffer(H.FRAMEBUFFER,Ut);try{const jt=B.textures[Pt],$t=jt.format,Vt=jt.type;if(!ve.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=B.width-ot&&rt>=0&&rt<=B.height-J&&(B.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(W,rt,ot,J,Ht.convert($t),Ht.convert(Vt),xt))}finally{const jt=q!==null?Ot.get(q).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(B,W,rt,ot,J,xt,wt,Pt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut)if(W>=0&&W<=B.width-ot&&rt>=0&&rt<=B.height-J){Ft.bindFramebuffer(H.FRAMEBUFFER,Ut);const jt=B.textures[Pt],$t=jt.format,Vt=jt.type;if(!ve.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,xt.byteLength,H.STREAM_READ),B.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(W,rt,ot,J,Ht.convert($t),Ht.convert(Vt),0);const xe=q!==null?Ot.get(q).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,xe);const qe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await GS(H,qe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xt),H.deleteBuffer(ue),H.deleteSync(qe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,W=null,rt=0){const ot=Math.pow(2,-rt),J=Math.floor(B.image.width*ot),xt=Math.floor(B.image.height*ot),wt=W!==null?W.x:0,Pt=W!==null?W.y:0;oe.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,wt,Pt,J,xt),Ft.unbindTexture()};const Bl=H.createFramebuffer(),bl=H.createFramebuffer();this.copyTextureToTexture=function(B,W,rt=null,ot=null,J=0,xt=null){xt===null&&(J!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=J,J=0):xt=0);let wt,Pt,Ut,jt,$t,Vt,ue,xe,qe;const Ue=B.isCompressedTexture?B.mipmaps[xt]:B.image;if(rt!==null)wt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,Ut=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,$t=rt.min.y,Vt=rt.isBox3?rt.min.z:0;else{const Un=Math.pow(2,-J);wt=Math.floor(Ue.width*Un),Pt=Math.floor(Ue.height*Un),B.isDataArrayTexture?Ut=Ue.depth:B.isData3DTexture?Ut=Math.floor(Ue.depth*Un):Ut=1,jt=0,$t=0,Vt=0}ot!==null?(ue=ot.x,xe=ot.y,qe=ot.z):(ue=0,xe=0,qe=0);const fe=Ht.convert(W.format),Kt=Ht.convert(W.type);let Ve;W.isData3DTexture?(oe.setTexture3D(W,0),Ve=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(oe.setTexture2DArray(W,0),Ve=H.TEXTURE_2D_ARRAY):(oe.setTexture2D(W,0),Ve=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),Dn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ii=H.getParameter(H.UNPACK_SKIP_PIXELS),Gn=H.getParameter(H.UNPACK_SKIP_ROWS),mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ue.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ue.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Vt);const Oe=B.isDataArrayTexture||B.isData3DTexture,zn=W.isDataArrayTexture||W.isData3DTexture;if(B.isDepthTexture){const Un=Ot.get(B),$e=Ot.get(W),Sn=Ot.get(Un.__renderTarget),$s=Ot.get($e.__renderTarget);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Wn=0;Wn<Ut;Wn++)Oe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(B).__webglTexture,J,Vt+Wn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(W).__webglTexture,xt,qe+Wn)),H.blitFramebuffer(jt,$t,wt,Pt,ue,xe,wt,Pt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||B.isRenderTargetTexture||Ot.has(B)){const Un=Ot.get(B),$e=Ot.get(W);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,Bl),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,bl);for(let Sn=0;Sn<Ut;Sn++)Oe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Un.__webglTexture,J,Vt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Un.__webglTexture,J),zn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,xt,qe+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$e.__webglTexture,xt),J!==0?H.blitFramebuffer(jt,$t,wt,Pt,ue,xe,wt,Pt,H.COLOR_BUFFER_BIT,H.NEAREST):zn?H.copyTexSubImage3D(Ve,xt,ue,xe,qe+Sn,jt,$t,wt,Pt):H.copyTexSubImage2D(Ve,xt,ue,xe,jt,$t,wt,Pt);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zn?B.isDataTexture||B.isData3DTexture?H.texSubImage3D(Ve,xt,ue,xe,qe,wt,Pt,Ut,fe,Kt,Ue.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ve,xt,ue,xe,qe,wt,Pt,Ut,fe,Ue.data):H.texSubImage3D(Ve,xt,ue,xe,qe,wt,Pt,Ut,fe,Kt,Ue):B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xt,ue,xe,wt,Pt,fe,Kt,Ue.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xt,ue,xe,Ue.width,Ue.height,fe,Ue.data):H.texSubImage2D(H.TEXTURE_2D,xt,ue,xe,wt,Pt,fe,Kt,Ue);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ii),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mn),xt===0&&W.generateMipmaps&&H.generateMipmap(Ve),Ft.unbindTexture()},this.copyTextureToTexture3D=function(B,W,rt=null,ot=null,J=0){return to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,W,rt,ot,J)},this.initRenderTarget=function(B){Ot.get(B).__webglFramebuffer===void 0&&oe.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?oe.setTextureCube(B,0):B.isData3DTexture?oe.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?oe.setTexture2DArray(B,0):oe.setTexture2D(B,0),Ft.unbindTexture()},this.resetState=function(){F=0,O=0,q=null,Ft.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const aE={type:"change"},md={type:"start"},n0={type:"end"},iu=new NE,sE=new as,mb=Math.cos(70*DE.DEG2RAD),dn=new X,$n=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lh=1e-6;class _b extends UC{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Xs,this._lastTargetPosition=new X,this._quat=new Xs().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new w_,this._sphericalDelta=new w_,this._scale=1,this._panOffset=new X,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new X,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vb.bind(this),this._onPointerDown=Eb.bind(this),this._onPointerUp=yb.bind(this),this._onContextMenu=bb.bind(this),this._onMouseWheel=xb.bind(this),this._onKeyDown=Mb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Bb.bind(this),this._onMouseDown=Sb.bind(this),this._onMouseMove=Cb.bind(this),this._interceptControlDown=Tb.bind(this),this._interceptControlUp=Rb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(aE),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;dn.copy(i).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=dn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(iu.origin.copy(this.object.position),iu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(iu.direction))<mb?this.object.lookAt(this.target):(sE.setFromNormalAndCoplanarPoint(this.object.up,this.target),iu.intersectPlane(sE,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lh||this._lastTargetPosition.distanceToSquared(this.target)>lh?(this.dispatchEvent(aE),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$n/60*this.autoRotateSpeed*t:$n/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){dn.setFromMatrixColumn(i,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,i){this.screenSpacePanning===!0?dn.setFromMatrixColumn(i,1):(dn.setFromMatrixColumn(i,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let c=dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Eb(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function vb(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function yb(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n0),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Sb(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case jr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case jr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(md)}function Cb(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function xb(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(md),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(n0))}function Mb(r){this.enabled!==!1&&this._handleKeyDown(r)}function Ib(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(md)}function Bb(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function bb(r){this.enabled!==!1&&r.preventDefault()}function Tb(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rb(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wb=()=>{const r=new VE,t=new XE().load("starmap.webp"),i=new so(99999999999,32,32);i.scale(20,20,20);const s=new mu({map:t,side:Xn,depthWrite:!1,transparent:!0,opacity:1}),l=new Yn(i,s);return r.add(l),r},Db=Math.PI*2/60,rE=[{value:0,label:"Stop",description:"HammerTime"},{value:695e-6,label:"1m",description:"Slowest"},{value:.04167,label:"1h",description:"Slower"},{value:.25,label:"4h",description:"Slow"},{value:1,label:"1d",description:"Base Speed"},{value:7,label:"7d",description:"Fast"},{value:30.4167,label:"month",description:"Faster"},{value:92.0833,label:"3m",description:"Fastest"}];let ed=1,au=[];const pu={multiplier:1,setMultiplier:r=>{ed=r,pu.multiplier=r,au.forEach(t=>t(r))},getMultiplier:()=>ed,subscribe:r=>(au.push(r),()=>{au=au.filter(t=>t!==r)})},Ub=()=>{const[r,t]=ti.useState(ed);return ti.useEffect(()=>pu.subscribe(s=>{t(s)}),[]),[r,s=>{pu.setMultiplier(s)}]},oE=new cs,su=new X;class i0 extends bC{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new pi(t,3)),this.setAttribute("uv",new pi(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,s=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),s.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new $h(i,6,1);return this.setAttribute("instanceStart",new ss(s,3,0)),this.setAttribute("instanceEnd",new ss(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new $h(i,6,1);return this.setAttribute("instanceColorStart",new ss(s,3,0)),this.setAttribute("instanceColorEnd",new ss(s,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new gC(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),oE.setFromBufferAttribute(i),this.boundingBox.union(oE))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)su.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(su)),su.fromBufferAttribute(i,c),l=Math.max(l,s.distanceToSquared(su));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ei.line={uniforms:hd.merge([Rt.common,Rt.fog,Rt.line]),vertexShader:`
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
		`};class _d extends $i{constructor(t){super({type:"LineMaterial",uniforms:hd.clone(ei.line.uniforms),vertexShader:ei.line.vertexShader,fragmentShader:ei.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ch=new Se,lE=new X,cE=new X,In=new Se,Bn=new Se,qi=new Se,uh=new X,fh=new je,bn=new DC,uE=new X,ru=new cs,ou=new Sl,Yi=new Se;let Ki,Vs;function fE(r,t,i){return Yi.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),Yi.multiplyScalar(1/Yi.w),Yi.x=Vs/i.width,Yi.y=Vs/i.height,Yi.applyMatrix4(r.projectionMatrixInverse),Yi.multiplyScalar(1/Yi.w),Math.abs(Math.max(Yi.x,Yi.y))}function Lb(r,t){const i=r.matrixWorld,s=r.geometry,l=s.attributes.instanceStart,c=s.attributes.instanceEnd,f=Math.min(s.instanceCount,l.count);for(let h=0,p=f;h<p;h++){bn.start.fromBufferAttribute(l,h),bn.end.fromBufferAttribute(c,h),bn.applyMatrix4(i);const d=new X,g=new X;Ki.distanceSqToSegment(bn.start,bn.end,g,d),g.distanceTo(d)<Vs*.5&&t.push({point:g,pointOnLine:d,distance:Ki.origin.distanceTo(g),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function Qb(r,t,i){const s=t.projectionMatrix,c=r.material.resolution,f=r.matrixWorld,h=r.geometry,p=h.attributes.instanceStart,d=h.attributes.instanceEnd,g=Math.min(h.instanceCount,p.count),_=-t.near;Ki.at(1,qi),qi.w=1,qi.applyMatrix4(t.matrixWorldInverse),qi.applyMatrix4(s),qi.multiplyScalar(1/qi.w),qi.x*=c.x/2,qi.y*=c.y/2,qi.z=0,uh.copy(qi),fh.multiplyMatrices(t.matrixWorldInverse,f);for(let E=0,v=g;E<v;E++){if(In.fromBufferAttribute(p,E),Bn.fromBufferAttribute(d,E),In.w=1,Bn.w=1,In.applyMatrix4(fh),Bn.applyMatrix4(fh),In.z>_&&Bn.z>_)continue;if(In.z>_){const w=In.z-Bn.z,b=(In.z-_)/w;In.lerp(Bn,b)}else if(Bn.z>_){const w=Bn.z-In.z,b=(Bn.z-_)/w;Bn.lerp(In,b)}In.applyMatrix4(s),Bn.applyMatrix4(s),In.multiplyScalar(1/In.w),Bn.multiplyScalar(1/Bn.w),In.x*=c.x/2,In.y*=c.y/2,Bn.x*=c.x/2,Bn.y*=c.y/2,bn.start.copy(In),bn.start.z=0,bn.end.copy(Bn),bn.end.z=0;const x=bn.closestPointToPointParameter(uh,!0);bn.at(x,uE);const y=DE.lerp(In.z,Bn.z,x),m=y>=-1&&y<=1,L=uh.distanceTo(uE)<Vs*.5;if(m&&L){bn.start.fromBufferAttribute(p,E),bn.end.fromBufferAttribute(d,E),bn.start.applyMatrix4(f),bn.end.applyMatrix4(f);const w=new X,b=new X;Ki.distanceSqToSegment(bn.start,bn.end,b,w),i.push({point:b,pointOnLine:w,distance:Ki.origin.distanceTo(b),object:r,face:null,faceIndex:E,uv:null,uv1:null})}}}class Nb extends Yn{constructor(t=new i0,i=new _d({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,s=t.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let f=0,h=0,p=i.count;f<p;f++,h+=2)lE.fromBufferAttribute(i,f),cE.fromBufferAttribute(s,f),l[h]=h===0?0:l[h-1],l[h+1]=l[h]+lE.distanceTo(cE);const c=new $h(l,2,1);return t.setAttribute("instanceDistanceStart",new ss(c,1,0)),t.setAttribute("instanceDistanceEnd",new ss(c,1,1)),this}raycast(t,i){const s=this.material.worldUnits,l=t.camera;l===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ki=t.ray;const f=this.matrixWorld,h=this.geometry,p=this.material;Vs=p.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),ou.copy(h.boundingSphere).applyMatrix4(f);let d;if(s)d=Vs*.5;else{const _=Math.max(l.near,ou.distanceToPoint(Ki.origin));d=fE(l,_,p.resolution)}if(ou.radius+=d,Ki.intersectsSphere(ou)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),ru.copy(h.boundingBox).applyMatrix4(f);let g;if(s)g=Vs*.5;else{const _=Math.max(l.near,ru.distanceToPoint(Ki.origin));g=fE(l,_,p.resolution)}ru.expandByScalar(g),Ki.intersectsBox(ru)!==!1&&(s?Lb(this,i):Qb(this,l,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(ch),this.material.uniforms.resolution.value.set(ch.z,ch.w))}}class a0 extends i0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,s=new Float32Array(2*i);for(let l=0;l<i;l+=3)s[2*l]=t[l],s[2*l+1]=t[l+1],s[2*l+2]=t[l+2],s[2*l+3]=t[l+3],s[2*l+4]=t[l+4],s[2*l+5]=t[l+5];return super.setPositions(s),this}setColors(t){const i=t.length-3,s=new Float32Array(2*i);for(let l=0;l<i;l+=3)s[2*l]=t[l],s[2*l+1]=t[l+1],s[2*l+2]=t[l+2],s[2*l+3]=t[l+3],s[2*l+4]=t[l+4],s[2*l+5]=t[l+5];return super.setColors(s),this}setFromPoints(t){const i=t.length-1,s=new Float32Array(6*i);for(let l=0;l<i;l++)s[6*l]=t[l].x,s[6*l+1]=t[l].y,s[6*l+2]=t[l].z||0,s[6*l+3]=t[l+1].x,s[6*l+4]=t[l+1].y,s[6*l+5]=t[l+1].z||0;return super.setPositions(s),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class AE extends Nb{constructor(t=new a0,i=new _d({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}class Pb{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(t){if(!this.workers[t]){const i=this.workerCreator();i.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=i}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,i){const s=this.workersResolve[t];if(s&&s(i),this.queue.length){const{resolve:l,msg:c,transfer:f}=this.queue.shift();this.workersResolve[t]=l,this.workers[t].postMessage(c,f)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,i){return new Promise(s=>{const l=this._getIdleWorker();l!==-1?(this._initWorker(l),this.workerStatus|=1<<l,this.workersResolve[l]=s,this.workers[l].postMessage(t,i)):this.queue.push({resolve:s,msg:t,transfer:i})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Fb=0,hE=2,Ob=1,dE=2,Gb=0,zb=1,Hb=10,kb=0,s0=9,r0=15,o0=16,l0=22,c0=37,u0=43,f0=76,A0=83,h0=97,d0=100,p0=103,g0=109,Vb=131,qb=132,Yb=133,Xb=134,Wb=137,Kb=138,Jb=141,jb=142,Zb=145,$b=146,m0=148,_0=152,tT=157,eT=158,E0=165,v0=166,Ed=1000066e3;class nT{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class ll{constructor(t,i,s,l){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+i,s),this._littleEndian=l,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){const i=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,i}_skip(t){return this._offset+=t,this}_scan(t,i){i===void 0&&(i=0);const s=this._offset;let l=0;for(;this._dataView.getUint8(this._offset)!==i&&l<t;)l++,this._offset++;return l<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+s,l)}}const Vn=[171,75,84,88,32,50,48,187,13,10,26,10];function pE(r){return new TextDecoder().decode(r)}function iT(r){const t=new Uint8Array(r.buffer,r.byteOffset,Vn.length);if(t[0]!==Vn[0]||t[1]!==Vn[1]||t[2]!==Vn[2]||t[3]!==Vn[3]||t[4]!==Vn[4]||t[5]!==Vn[5]||t[6]!==Vn[6]||t[7]!==Vn[7]||t[8]!==Vn[8]||t[9]!==Vn[9]||t[10]!==Vn[10]||t[11]!==Vn[11])throw new Error("Missing KTX 2.0 identifier.");const i=new nT,s=17*Uint32Array.BYTES_PER_ELEMENT,l=new ll(r,Vn.length,s,!0);i.vkFormat=l._nextUint32(),i.typeSize=l._nextUint32(),i.pixelWidth=l._nextUint32(),i.pixelHeight=l._nextUint32(),i.pixelDepth=l._nextUint32(),i.layerCount=l._nextUint32(),i.faceCount=l._nextUint32();const c=l._nextUint32();i.supercompressionScheme=l._nextUint32();const f=l._nextUint32(),h=l._nextUint32(),p=l._nextUint32(),d=l._nextUint32(),g=l._nextUint64(),_=l._nextUint64(),E=new ll(r,Vn.length+s,3*c*8,!0);for(let z=0;z<c;z++)i.levels.push({levelData:new Uint8Array(r.buffer,r.byteOffset+E._nextUint64(),E._nextUint64()),uncompressedByteLength:E._nextUint64()});const v=new ll(r,f,h,!0),C={vendorId:v._skip(4)._nextUint16(),descriptorType:v._nextUint16(),versionNumber:v._nextUint16(),descriptorBlockSize:v._nextUint16(),colorModel:v._nextUint8(),colorPrimaries:v._nextUint8(),transferFunction:v._nextUint8(),flags:v._nextUint8(),texelBlockDimension:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],bytesPlane:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],samples:[]},x=(C.descriptorBlockSize/4-6)/4;for(let z=0;z<x;z++){const V={bitOffset:v._nextUint16(),bitLength:v._nextUint8(),channelType:v._nextUint8(),samplePosition:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&V.channelType?(V.sampleLower=v._nextInt32(),V.sampleUpper=v._nextInt32()):(V.sampleLower=v._nextUint32(),V.sampleUpper=v._nextUint32()),C.samples[z]=V}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(C);const y=new ll(r,p,d,!0);for(;y._offset<d;){const z=y._nextUint32(),V=y._scan(z),ht=pE(V);if(i.keyValue[ht]=y._nextUint8Array(z-V.byteLength-1),ht.match(/^ktx/i)){const D=pE(i.keyValue[ht]);i.keyValue[ht]=D.substring(0,D.lastIndexOf("\0"))}y._skip(z%4?4-z%4:0)}if(_<=0)return i;const m=new ll(r,g,_,!0),L=m._nextUint16(),w=m._nextUint16(),b=m._nextUint32(),N=m._nextUint32(),F=m._nextUint32(),O=m._nextUint32(),q=[];for(let z=0;z<c;z++)q.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const R=g+m._offset,T=R+b,P=T+N,Z=P+F,st=new Uint8Array(r.buffer,r.byteOffset+R,b),lt=new Uint8Array(r.buffer,r.byteOffset+T,N),ct=new Uint8Array(r.buffer,r.byteOffset+P,F),U=new Uint8Array(r.buffer,r.byteOffset+Z,O);return i.globalData={endpointCount:L,selectorCount:w,imageDescs:q,endpointsData:st,selectorsData:lt,tablesData:ct,extendedData:U},i}let Ah,Ca,nd;const hh={env:{emscripten_notify_memory_growth:function(r){nd=new Uint8Array(Ca.exports.memory.buffer)}}};class aT{init(){return Ah||(Ah=typeof fetch<"u"?fetch("data:application/wasm;base64,"+gE).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,hh)).then(this._init):WebAssembly.instantiate(Buffer.from(gE,"base64"),hh).then(this._init),Ah)}_init(t){Ca=t.instance,hh.env.emscripten_notify_memory_growth(0)}decode(t,i=0){if(!Ca)throw new Error("ZSTDDecoder: Await .init() before decoding.");const s=t.byteLength,l=Ca.exports.malloc(s);nd.set(t,l),i=i||Number(Ca.exports.ZSTD_findDecompressedSize(l,s));const c=Ca.exports.malloc(i),f=Ca.exports.ZSTD_decompress(c,i,l,s),h=nd.slice(c,c+f);return Ca.exports.free(l),Ca.exports.free(c),h}}const gE="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",sT="display-p3",rT="display-p3-linear",dh=new WeakMap;let ph=0,gh;class xi extends Ml{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Pb,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return this.workerConfig={astcSupported:await t.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await t.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await t.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await t.hasFeatureAsync("texture-compression-bc"),bptcSupported:await t.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await t.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-bc"),bptcSupported:t.hasFeature("texture-compression-bptc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const t=new ZA(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const i=t.loadAsync("basis_transcoder.js"),s=new ZA(this.manager);s.setPath(this.transcoderPath),s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials);const l=s.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([i,l]).then(([c,f])=>{const h=xi.BasisWorker.toString(),p=["/* constants */","let _EngineFormat = "+JSON.stringify(xi.EngineFormat),"let _EngineType = "+JSON.stringify(xi.EngineType),"let _TranscoderFormat = "+JSON.stringify(xi.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(xi.BasisFormat),"/* basis_transcoder.js */",c,"/* worker */",h.substring(h.indexOf("{")+1,h.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([p])),this.transcoderBinary=f,this.workerPool.setWorkerCreator(()=>{const d=new Worker(this.workerSourceURL),g=this.transcoderBinary.slice(0);return d.postMessage({type:"init",config:this.workerConfig,transcoderBinary:g},[g]),d})}),ph>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),ph++}return this.transcoderPending}load(t,i,s,l){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const c=new ZA(this.manager);c.setPath(this.path),c.setCrossOrigin(this.crossOrigin),c.setWithCredentials(this.withCredentials),c.setResponseType("arraybuffer"),c.load(t,f=>{this.parse(f,i,l)},s,l)}parse(t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(dh.has(t))return dh.get(t).promise.then(i).catch(s);this._createTexture(t).then(l=>i?i(l):null).catch(s)}_createTextureFrom(t,i){const{type:s,error:l,data:{faces:c,width:f,height:h,format:p,type:d,dfdFlags:g}}=t;if(s==="error")return Promise.reject(l);let _;if(i.faceCount===6)_=new pC(c,p,d);else{const E=c[0].mipmaps;_=i.layerCount>1?new dC(E,f,h,i.layerCount,p,d):new _u(E,f,h,p,d)}return _.minFilter=c[0].mipmaps.length===1?On:xa,_.magFilter=On,_.generateMipmaps=!1,_.needsUpdate=!0,_.colorSpace=y0(i),_.premultiplyAlpha=!!(g&Ob),_}async _createTexture(t,i={}){const s=iT(new Uint8Array(t)),l=s.vkFormat===Ed&&s.dataFormatDescriptor[0].colorModel===167;if(!(s.vkFormat===kb||l&&!this.workerConfig.astcHDRSupported))return lT(s);const f=i,h=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:f},[t])).then(p=>this._createTextureFrom(p.data,s));return dh.set(t,{promise:h}),h}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),ph--}}xi.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};xi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};xi.EngineFormat={RGBAFormat:Tn,RGBA_ASTC_4x4_Format:Hs,RGB_BPTC_UNSIGNED_Format:Au,RGBA_BPTC_Format:ks,RGBA_ETC2_EAC_Format:_l,RGBA_PVRTC_4BPPV1_Format:uu,RGBA_S3TC_DXT5_Format:zs,RGB_ETC1_Format:fu,RGB_ETC2_Format:ml,RGB_PVRTC_4BPPV1_Format:cu,RGBA_S3TC_DXT1_Format:Gs};xi.EngineType={UnsignedByteType:sn,HalfFloatType:Qi,FloatType:ni};xi.BasisWorker=function(){let r,t,i;const s=_EngineFormat,l=_EngineType,c=_TranscoderFormat,f=_BasisFormat;self.addEventListener("message",function(C){const x=C.data;switch(x.type){case"init":r=x.config,h(x.transcoderBinary);break;case"transcode":t.then(()=>{try{const{faces:y,buffers:m,width:L,height:w,hasAlpha:b,format:N,type:F,dfdFlags:O}=p(x.buffer);self.postMessage({type:"transcode",id:x.id,data:{faces:y,width:L,height:w,hasAlpha:b,format:N,type:F,dfdFlags:O}},m)}catch(y){console.error(y),self.postMessage({type:"error",id:x.id,error:y.message})}});break}});function h(C){t=new Promise(x=>{i={wasmBinary:C,onRuntimeInitialized:x},BASIS(i)}).then(()=>{i.initializeBasis(),i.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function p(C){const x=new i.KTX2File(new Uint8Array(C));function y(){x.close(),x.delete()}if(!x.isValid())throw y(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let m;if(x.isUASTC())m=f.UASTC;else if(x.isETC1S())m=f.ETC1S;else if(x.isHDR())m=f.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const L=x.getWidth(),w=x.getHeight(),b=x.getLayers()||1,N=x.getLevels(),F=x.getFaces(),O=x.getHasAlpha(),q=x.getDFDFlags(),{transcoderFormat:R,engineFormat:T,engineType:P}=_(m,L,w,O);if(!L||!w||!N)throw y(),new Error("THREE.KTX2Loader:	Invalid texture");if(!x.startTranscoding())throw y(),new Error("THREE.KTX2Loader: .startTranscoding failed");const Z=[],st=[];for(let lt=0;lt<F;lt++){const ct=[];for(let U=0;U<N;U++){const z=[];let V,ht;for(let j=0;j<b;j++){const gt=x.getImageLevelInfo(U,j,lt);lt===0&&U===0&&j===0&&(gt.origWidth%4!==0||gt.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),N>1?(V=gt.origWidth,ht=gt.origHeight):(V=gt.width,ht=gt.height);let vt=new Uint8Array(x.getImageTranscodedSizeInBytes(U,j,0,R));const bt=x.transcodeImage(vt,U,j,lt,R,0,-1,-1);if(P===l.HalfFloatType&&(vt=new Uint16Array(vt.buffer,vt.byteOffset,vt.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!bt)throw y(),new Error("THREE.KTX2Loader: .transcodeImage failed.");z.push(vt)}const D=v(z);ct.push({data:D,width:V,height:ht}),st.push(D.buffer)}Z.push({mipmaps:ct,width:L,height:w,format:T,type:P})}return y(),{faces:Z,buffers:st,width:L,height:w,hasAlpha:O,dfdFlags:q,format:T,type:P}}const d=[{if:"astcSupported",basisFormat:[f.UASTC],transcoderFormat:[c.ASTC_4x4,c.ASTC_4x4],engineFormat:[s.RGBA_ASTC_4x4_Format,s.RGBA_ASTC_4x4_Format],engineType:[l.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.BC7_M5,c.BC7_M5],engineFormat:[s.RGBA_BPTC_Format,s.RGBA_BPTC_Format],engineType:[l.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.BC1,c.BC3],engineFormat:[s.RGBA_S3TC_DXT1_Format,s.RGBA_S3TC_DXT5_Format],engineType:[l.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.ETC1,c.ETC2],engineFormat:[s.RGB_ETC2_Format,s.RGBA_ETC2_EAC_Format],engineType:[l.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.ETC1],engineFormat:[s.RGB_ETC1_Format],engineType:[l.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.PVRTC1_4_RGB,c.PVRTC1_4_RGBA],engineFormat:[s.RGB_PVRTC_4BPPV1_Format,s.RGBA_PVRTC_4BPPV1_Format],engineType:[l.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[f.UASTC_HDR],transcoderFormat:[c.BC6H],engineFormat:[s.RGB_BPTC_UNSIGNED_Format],engineType:[l.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[f.ETC1S,f.UASTC],transcoderFormat:[c.RGBA32,c.RGBA32],engineFormat:[s.RGBAFormat,s.RGBAFormat],engineType:[l.UnsignedByteType,l.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[f.UASTC_HDR],transcoderFormat:[c.RGBA_HALF],engineFormat:[s.RGBAFormat],engineType:[l.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],g={[f.ETC1S]:d.filter(C=>C.basisFormat.includes(f.ETC1S)).sort((C,x)=>C.priorityUASTC-x.priorityUASTC),[f.UASTC]:d.filter(C=>C.basisFormat.includes(f.UASTC)).sort((C,x)=>C.priorityUASTC-x.priorityUASTC),[f.UASTC_HDR]:d.filter(C=>C.basisFormat.includes(f.UASTC_HDR)).sort((C,x)=>C.priorityHDR-x.priorityHDR)};function _(C,x,y,m){const L=g[C];for(let w=0;w<L.length;w++){const b=L[w];if(b.if&&!r[b.if]||!b.basisFormat.includes(C)||m&&b.transcoderFormat.length<2||b.needsPowerOfTwo&&!(E(x)&&E(y)))continue;const N=b.transcoderFormat[m?1:0],F=b.engineFormat[m?1:0],O=b.engineType[0];return{transcoderFormat:N,engineFormat:F,engineType:O}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function E(C){return C<=2?!0:(C&C-1)===0&&C!==0}function v(C){if(C.length===1)return C[0];let x=0;for(let L=0;L<C.length;L++){const w=C[L];x+=w.byteLength}const y=new Uint8Array(x);let m=0;for(let L=0;L<C.length;L++){const w=C[L];y.set(w,m),m+=w.byteLength}return y}};const oT=new Set([Tn,Fs,Ps]),mh={[g0]:Tn,[h0]:Tn,[c0]:Tn,[u0]:Tn,[p0]:Fs,[A0]:Fs,[o0]:Fs,[l0]:Fs,[d0]:Ps,[f0]:Ps,[r0]:Ps,[s0]:Ps,[m0]:ml,[_0]:_l,[Ed]:Hs,[eT]:Hs,[tT]:Hs,[v0]:El,[E0]:El,[Yb]:Gs,[Xb]:Gs,[Vb]:Zr,[qb]:Zr,[Kb]:$r,[Wb]:$r,[jb]:zs,[Jb]:zs,[$b]:ks,[Zb]:ks},_h={[g0]:ni,[h0]:Qi,[c0]:sn,[u0]:sn,[p0]:ni,[A0]:Qi,[o0]:sn,[l0]:sn,[d0]:ni,[f0]:Qi,[r0]:sn,[s0]:sn,[m0]:sn,[_0]:sn,[Ed]:Qi,[v0]:sn,[E0]:sn};async function lT(r){const{vkFormat:t}=r;if(mh[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let i;r.supercompressionScheme===hE&&(gh||(gh=new Promise(async c=>{const f=new aT;await f.init(),c(f)})),i=await gh);const s=[];for(let c=0;c<r.levels.length;c++){const f=Math.max(1,r.pixelWidth>>c),h=Math.max(1,r.pixelHeight>>c),p=r.pixelDepth?Math.max(1,r.pixelDepth>>c):0,d=r.levels[c];let g;if(r.supercompressionScheme===Fb)g=d.levelData;else if(r.supercompressionScheme===hE)g=i.decode(d.levelData,d.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let _;_h[t]===ni?_=new Float32Array(g.buffer,g.byteOffset,g.byteLength/Float32Array.BYTES_PER_ELEMENT):_h[t]===Qi?_=new Uint16Array(g.buffer,g.byteOffset,g.byteLength/Uint16Array.BYTES_PER_ELEMENT):_=g,s.push({data:_,width:f,height:h,depth:p})}let l;if(oT.has(mh[t]))l=r.pixelDepth===0?new uC(s[0].data,r.pixelWidth,r.pixelHeight):new QE(s[0].data,r.pixelWidth,r.pixelHeight,r.pixelDepth);else{if(r.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");l=new _u(s,r.pixelWidth,r.pixelHeight),l.minFilter=s.length===1?On:xa,l.magFilter=On}return l.mipmaps=s,l.type=_h[t],l.format=mh[t],l.colorSpace=y0(r),l.needsUpdate=!0,Promise.resolve(l)}function y0(r){const t=r.dataFormatDescriptor[0];return t.colorPrimaries===zb?t.transferFunction===dE?Ai:Pi:t.colorPrimaries===Hb?t.transferFunction===dE?sT:rT:(t.colorPrimaries===Gb||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),Wi)}function cT(r,t,i){const{tiles:s,diameter:l,luminosity:c}=r;if(!s)throw new Error("buildTiledSphere called without tiles config");const{columns:f,rows:h,tileSize:p,imageWidth:d,imageHeight:g,basePath:_,extension:E=".ktx2"}=s,v=new Kr;for(let C=0;C<h;C++)for(let x=0;x<f;x++){const y=Math.min(p,d-x*p),m=Math.min(p,g-C*p),L=x*p/d*Math.PI*2,w=y/d*Math.PI*2,b=C*p/g*Math.PI,N=m/g*Math.PI,F=Math.max(4,Math.round(64*(y/p))),O=Math.max(4,Math.round(64*(m/p))),q=new so(l,F,O,L,w,b,N),R=q.getAttribute("uv");if(R&&R.array){const U=R.array;for(let z=1;z<U.length;z+=2)U[z]=1-U[z];R.needsUpdate=!0}const T=new YE,P=new Yn(q,T);P.castShadow=!t,P.receiveShadow=!t,P.renderOrder=0;const Z=String(C).padStart(2,"0"),st=String(x).padStart(2,"0"),ct=(r.tiles?.filenameOrder??"row_col")==="col_row"?`${_}_${st}_${Z}${E}`:`${_}_${Z}_${st}${E}`;i.loadAsync(ct).then(U=>{U.colorSpace=Pi,(y!==p||m!==p)&&(U.generateMipmaps=!1,U.minFilter=On,U.magFilter=On,U.wrapS=Ji,U.wrapT=Ji,U.needsUpdate=!0),T.map=U,c&&(T.emissive.set(16777215),T.emissiveMap=U,T.emissiveIntensity=1),T.needsUpdate=!0}).catch(U=>{console.error(`[tiles] Failed to load ${ct}:`,U)}),v.add(P)}return v}function mE(r,t,i){const s=new Kr;let l=0;const c=(m,L,w,b=0)=>{const N=L,F=L*Math.sqrt(1-w*w),O=L*w;let q=N*Math.cos(m)-O,R=F*Math.sin(m);if(b!==0){const T=q*Math.cos(b)-R*Math.sin(b),P=q*Math.sin(b)+R*Math.cos(b);q=T,R=P}return{x:q,z:R}};let f=null;r.orbitalPath?.visible&&r.orbitRadius>0&&(f=((L=0,w,b=0,N="0x444444",F=.4,O=2,q=2048)=>{const R=[];for(let Z=0;Z<=q;Z++){const st=Z/q*Math.PI*2,{x:lt,z:ct}=c(st,w,L,b);R.push(lt,0,ct)}const T=new a0;T.setPositions(R);const P=new _d({color:N,transparent:!0,opacity:F,linewidth:O});return P.resolution.set(window.innerWidth*2,window.innerHeight*2),new AE(T,P)})(r.eccentricity||0,r.orbitRadius,r.ellipseRotation||0,r.orbitalPath?.color||"0x444444",r.orbitalPath?.opacity||.4,r.orbitalPath?.lineWidth||2),r.orbitalInclination&&(f.rotation.x-=r.orbitalInclination),s.add(f));let h;if(r.tiles&&i)h=cT(r,r.systemId==="solSystem",i);else{const m=new so(r.diameter,64,64),L=new YE,w=new Yn(m,L);if(r.texture)if(r.texture.endsWith(".ktx2")&&!!i){const N=m.getAttribute("uv");if(N&&N.array){const F=N.array;for(let O=1;O<F.length;O+=2)F[O]=1-F[O];N.needsUpdate=!0}i.load(r.texture,F=>{F.colorSpace=Pi,L.map=F,r.luminosity&&(L.emissive.set(16777215),L.emissiveMap=F,L.emissiveIntensity=2),L.needsUpdate=!0},void 0,F=>console.error(`[ktx2] Failed to load ${r.texture}:`,F))}else{const N=new XE().load(r.texture);N.colorSpace=Pi,L.map=N,r.luminosity&&(L.emissive.set(16777215),L.emissiveMap=N,L.emissiveIntensity=2),L.needsUpdate=!0}r.systemId==="solSystem"?(w.castShadow=!1,w.receiveShadow=!1):(w.castShadow=!0,w.receiveShadow=!0),h=w}if(h.position.set(r.orbitRadius,0,0),r.axialTilt&&(h.rotation.x=r.axialTilt),h.renderOrder=0,s.add(h),r.luminosity){const m=new xC(16777215,15,1e15,.2);m.castShadow=!1,m.shadow.camera.far=2e9,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.position.copy(h.position),s.add(m)}let p=null;if(r.billboard){const m=Math.max(.2,r.billboard.scaleFactor*r.diameter),L=new so(m,64,64),w=new mu({color:new Ce(r.billboard.color),transparent:!0,opacity:.04,depthWrite:!1,side:Xi});p=new Yn(L,w);const b=new $i({uniforms:{color:{value:new Ce(r.billboard.color)},rimPower:{value:2},rimStrength:{value:1}},vertexShader:`
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
  `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Os}),N=new Yn(L,b);N.renderOrder=1e3,p.renderOrder=999,p.add(N),p.position.copy(h.position),s.add(p)}const d=[];t&&t.forEach(m=>{const L=m();d.push(L),L.userData.parentSystemId=r.systemId,s.add(L)});const g=r.cameraDistance||r.diameter*10+.5,_=new X(g,g*.3,g*.5),E=r.orbitalInclination||0,v=Math.sin(l)*r.orbitRadius,C=E!==0?v*Math.sin(E):0,x=new X(r.orbitRadius,C,0),y=(m,L)=>{const w=r.rotationalPeriod??1,b=pu.getMultiplier(),N=Db*b;w!==0&&(h.rotation.y+=N/w);let F,O;if(w===0)F=r.orbitRadius,O=0;else{const R=r.orbitalPeriod||365.25;if(l-=N/R,r.eccentricity&&m){const{x:T,z:P}=c(l,r.orbitRadius,r.eccentricity,r.ellipseRotation||0),Z=r.orbitalInclination||0;let st=T,lt=P,ct=0;Z!==0&&(lt=P*Math.cos(Z),ct=P*Math.sin(Z)),F=m.x+st,O=m.z+lt,h.position.y=m.y+ct}else if(m){const T=Math.cos(l)*r.orbitRadius,P=Math.sin(l)*r.orbitRadius,Z=r.orbitalInclination||0;Z!==0?(F=m.x+T,O=m.z+P*Math.cos(Z),h.position.y=m.y+P*Math.sin(Z)):(F=m.x+T,O=m.z+P,h.position.y=m.y)}else{const T=Math.cos(l)*r.orbitRadius,P=Math.sin(l)*r.orbitRadius,Z=r.orbitalInclination||0;if(Z!==0){F=T,O=P*Math.cos(Z);const st=P*Math.sin(Z);h.position.y=st}else F=T,O=P}}const q=h.position.y;if(h.position.set(F,q,O),x.set(F,q,O),p){p.position.set(F,q,O);const R=L===r.systemId,T=d.some(P=>P.userData.systemId===L);p.visible=!R&&!T}d.forEach(R=>{R&&R.userData.animate&&(R.userData.animate(h.position,L),R.children&&R.children.forEach(T=>{T instanceof AE&&T.position.copy(h.position)}))}),m&&f&&f.position.copy(m)};return s.userData={cameraOffset:_,systemId:r.systemId,animate:y,mesh:h,planetarySystemSphere:p,childSystems:d,parentSystemId:null,shadowRadius:r.shadowRadius??r.diameter},s}const Ma=new X,Eh=new X,vh=new X;function uT(r){return r.userData?.mesh??null}function vd(r,t){const i=uT(r);return i?(i.getWorldPosition(t),!0):!1}function fT(r,t){return r.filter(i=>t&&!t.userData?.parentSystemId?i.userData?.parentSystemId===t.userData?.systemId||i===t:!i.userData?.parentSystemId)}function S0(r,t,i,s){const l=r.userData?.cameraOffset;l&&vd(r,Ma)&&(t.position.copy(Ma).add(l),i.target.copy(Ma),s.lockedSystemRef.current=r,s.previousLockedPositionRef.current=Ma.clone())}function C0(r){r.lockedSystemRef.current=null,r.previousLockedPositionRef.current=null}function AT(r,t,i){const s=i.lockedSystemRef.current;if(!s||!vd(s,Ma))return;const l=i.previousLockedPositionRef.current;l&&(Eh.copy(Ma).sub(l),r.position.add(Eh),t.target.add(Eh)),i.previousLockedPositionRef.current=Ma.clone()}function hT(r){const t=r.clickThresholdPx;return i=>{const s=r.getAllSystems(),l=fT(s,r.lockedSystemRef.current);let c=null,f=1/0;for(const h of l){if(!vd(h,Ma))continue;vh.copy(Ma).project(r.camera);const p=(vh.x*.5+.5)*window.innerWidth,d=(-vh.y*.5+.5)*window.innerHeight,g=p-i.clientX,_=d-i.clientY,E=Math.sqrt(g*g+_*_);E<=f&&(f=E,c=h)}if(c&&f<=t){S0(c,r.camera,r.controls,r);return}C0(r)}}const Xe=20,dT={diameter:.2727,orbitRadius:30,eccentricity:.0549,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:27.3,rotationalPeriod:27.3,orbitalInclination:Math.PI*(5.145/180),ellipseRotation:Math.PI*.025,systemId:"lunaSystem"},pT={diameter:.00174,orbitRadius:.735,eccentricity:.01,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:1,scaleFactor:250},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:.3191,rotationalPeriod:.3191,systemId:"phobosSystem",orbitalInclination:Math.PI*(1.093/180),ellipseRotation:Math.PI*.025},gT={diameter:99e-5,orbitRadius:1.84,eccentricity:24e-5,sprite:{color:"transparent",borderColor:"grey",opacity:1,scaleFactor:250},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},texture:"solarimages/2k_mercury.jpg",orbitalPeriod:1.2624,rotationalPeriod:1.2624,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(1.8/180),systemId:"deimosSystem"},mT={diameter:.2859,orbitRadius:33.1,eccentricity:.0041,sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},texture:"solarimages/2k_mercury.jpg",orbitalPeriod:1.769,rotationalPeriod:1.769,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.05/180),systemId:"ioSystem"},_T={diameter:.245,orbitRadius:52.7,eccentricity:.009,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:3.551,rotationalPeriod:3.551,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.47/180),systemId:"europaSystem"},ET={diameter:.4134,orbitRadius:84,eccentricity:.0013,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:7.155,rotationalPeriod:7.155,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.2/180),systemId:"ganymedeSystem"},vT={diameter:.3784,orbitRadius:147.8,eccentricity:.0074,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:16.689,rotationalPeriod:16.689,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.192/180),systemId:"callistoSystem"},yT={diameter:.031,orbitRadius:14.56,eccentricity:.0196,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:.942,rotationalPeriod:.942,orbitalInclination:Math.PI*(1.574/180),ellipseRotation:Math.PI*.025,systemId:"mimasSystem"},ST={diameter:.0396,orbitRadius:18.68,eccentricity:.0047,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.37,rotationalPeriod:1.37,orbitalInclination:Math.PI*(.009/180),ellipseRotation:Math.PI*.025,systemId:"enceladusSystem"},CT={diameter:.0833,orbitRadius:23.13,eccentricity:1e-4,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.888,rotationalPeriod:1.888,orbitalInclination:Math.PI*(1.12/180),ellipseRotation:Math.PI*.025,systemId:"tethysSystem"},xT={diameter:.0881,orbitRadius:29.62,eccentricity:.0022,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:2.737,rotationalPeriod:2.737,orbitalInclination:Math.PI*(.028/180),ellipseRotation:Math.PI*.025,systemId:"dioneSystem"},MT={diameter:.1198,orbitRadius:41.36,eccentricity:.001,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:4.518,rotationalPeriod:4.518,orbitalInclination:Math.PI*(.327/180),ellipseRotation:Math.PI*.025,systemId:"rheaSystem"},IT={diameter:.4041,orbitRadius:95.89,eccentricity:.0288,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:15.945,rotationalPeriod:15.945,orbitalInclination:Math.PI*(.34/180),ellipseRotation:Math.PI*.025,systemId:"titanSystem"},BT={diameter:.0212,orbitRadius:116.2,eccentricity:.123,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:21.276,rotationalPeriod:21.276,orbitalInclination:Math.PI*(.43/180),ellipseRotation:Math.PI*.025,systemId:"hyperionSystem"},bT={diameter:.1153,orbitRadius:279.5,eccentricity:.0286,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:79.32,rotationalPeriod:79.32,orbitalInclination:Math.PI*(15.47/180),ellipseRotation:Math.PI*.025,systemId:"iapetusSystem"},TT={diameter:.0167,orbitRadius:1016.7,eccentricity:.163,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:550.31,rotationalPeriod:.387,orbitalInclination:Math.PI*(175.3/180),ellipseRotation:Math.PI*.025,systemId:"phoebeSystem"},RT={diameter:.037,orbitRadius:10.19,eccentricity:.0013,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.413,rotationalPeriod:1.413,orbitalInclination:Math.PI*(4.34/180),ellipseRotation:Math.PI*.025,systemId:"mirandaSystem"},wT={diameter:.0908,orbitRadius:14.99,eccentricity:.0012,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:2.52,rotationalPeriod:2.52,orbitalInclination:Math.PI*(.04/180),ellipseRotation:Math.PI*.025,systemId:"arielSystem"},DT={diameter:.0917,orbitRadius:20.87,eccentricity:.0039,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:4.144,rotationalPeriod:4.144,orbitalInclination:Math.PI*(.128/180),ellipseRotation:Math.PI*.025,systemId:"umbrielSystem"},UT={diameter:.1237,orbitRadius:34.21,eccentricity:.0011,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:8.706,rotationalPeriod:8.706,orbitalInclination:Math.PI*(.079/180),ellipseRotation:Math.PI*.025,systemId:"titaniaSystem"},LT={diameter:.1195,orbitRadius:45.73,eccentricity:.0014,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:13.46,rotationalPeriod:13.46,orbitalInclination:Math.PI*(.068/180),ellipseRotation:Math.PI*.025,systemId:"oberonSystem"},QT={diameter:.033,orbitRadius:9.23,eccentricity:5e-4,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:1.122,rotationalPeriod:1.122,orbitalInclination:Math.PI*(.026/180),ellipseRotation:Math.PI*.025,systemId:"proteusSystem"},NT={diameter:.2124,orbitRadius:27.85,eccentricity:16e-6,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:5.877,rotationalPeriod:5.877,orbitalInclination:Math.PI*(156.885/180),ellipseRotation:Math.PI*.025,systemId:"tritonSystem"},PT={diameter:.0267,orbitRadius:432.8,eccentricity:.7512,texture:"solarimages/2k_mercury.jpg",orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},billboard:{color:"lightgrey",opacity:.8,scaleFactor:Xe},orbitalPeriod:360.13,rotationalPeriod:.48,orbitalInclination:Math.PI*(7.23/180),ellipseRotation:Math.PI*.025,systemId:"nereidSystem"},FT=[dT],OT=[pT,gT],GT=[mT,_T,ET,vT],zT=[yT,ST,CT,xT,MT,IT,BT,bT,TT],HT=[RT,wT,DT,UT,LT],kT=[QT,NT,PT],us=1e3,VT={diameter:109,orbitRadius:0,texture:"solarimages/4k_sun.jpg",systemId:"solSystem",axialTilt:Math.PI*(1e-5/180),luminosity:1e3,orbitalPeriod:0,rotationalPeriod:0,orbitalInclination:0,shadowRadius:120},qT={diameter:.383,orbitRadius:4545,axialTilt:Math.PI*(.03/180),texture:"solarimages/2k_mercury.jpg",billboard:{color:"lightgrey",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"lightgrey",opacity:.8,lineWidth:2},orbitalPeriod:88,rotationalPeriod:58.65,orbitalInclination:Math.PI*(7.01/180),systemId:"mercurySystem",shadowRadius:1},YT={diameter:.949,orbitRadius:8476,axialTilt:Math.PI*(177.4/180),texture:"solarimages/2k_venus_atmosphere.jpg",billboard:{color:"yellow",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"yellow",opacity:.8,lineWidth:2},orbitalPeriod:224.7,rotationalPeriod:243,orbitalInclination:Math.PI*(3.39/180),systemId:"venusSystem",shadowRadius:1.5},XT={diameter:1,orbitRadius:11740,axialTilt:Math.PI*(23.4/180),tiles:{columns:11,rows:6,tileSize:4096,imageWidth:43200,imageHeight:21600,basePath:"solarimages/earth/tile",extension:".ktx2",filenameOrder:"col_row"},billboard:{color:"#87CEEB",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"#87CEEB",opacity:.8,lineWidth:2},orbitalPeriod:365.25,rotationalPeriod:1,orbitalInclination:0,systemId:"earthSystem",shadowRadius:40},WT={diameter:.53,orbitRadius:17891,axialTilt:Math.PI*(25.2/180),texture:"solarimages/2k_mars.jpg",billboard:{color:"orange",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"orange",opacity:.8,lineWidth:2},orbitalPeriod:687,rotationalPeriod:1.03,orbitalInclination:Math.PI*(1.85/180),systemId:"marsSystem",shadowRadius:4},KT={diameter:11.209,orbitRadius:47300,axialTilt:Math.PI*(3.13/180),texture:"solarimages/2k_jupiter.jpg",billboard:{color:"orange",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"orange",opacity:.8,lineWidth:2},orbitalPeriod:4332.6,rotationalPeriod:.41,orbitalInclination:Math.PI*(1.31/180),systemId:"jupiterSystem",shadowRadius:30},JT={diameter:9.45,orbitRadius:77830,axialTilt:Math.PI*(26.73/180),texture:"solarimages/2k_saturn.jpg",billboard:{color:"beige",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"beige",opacity:.8,lineWidth:2},orbitalPeriod:10759,rotationalPeriod:.72,orbitalInclination:Math.PI*(2.49/180),systemId:"saturnSystem",shadowRadius:12},jT={diameter:4.01,orbitRadius:118600,axialTilt:Math.PI*(97.77/180),texture:"solarimages/2k_uranus.jpg",billboard:{color:"lightgreen",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"lightgreen",opacity:.8,lineWidth:2},orbitalPeriod:30687,rotationalPeriod:1.0274,orbitalInclination:Math.PI*(.77/180),systemId:"uranusSystem",shadowRadius:6},ZT={diameter:3.88,orbitRadius:142900,axialTilt:Math.PI*(28.32/180),texture:"solarimages/2k_neptune.jpg",billboard:{color:"lightblue",opacity:.6,scaleFactor:us},orbitalPath:{visible:!0,color:"lightblue",opacity:.8,lineWidth:2},orbitalPeriod:60190,rotationalPeriod:.67,orbitalInclination:Math.PI*(1.77/180),systemId:"neptuneSystem",shadowRadius:6},_E=[{config:VT,moons:[]},{config:qT,moons:[]},{config:YT,moons:[]},{config:XT,moons:FT},{config:WT,moons:OT},{config:KT,moons:GT},{config:JT,moons:zT},{config:jT,moons:HT},{config:ZT,moons:kT}];function $T(){const[r,t]=Ub(),i=s=>rE.find(c=>c.value===s)?.label||`${s}x`;return Fn.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",zIndex:1e3,color:"white",fontFamily:"Arial, sans-serif"},children:[Fn.jsxs("label",{htmlFor:"speed-control",style:{display:"block",marginBottom:"5px"},children:["Time Speed: ",i(r)]}),Fn.jsx("select",{id:"speed-control",value:r,onChange:s=>{const l=s.target;t(Number(l.value))},style:{padding:"5px",fontSize:"14px",backgroundColor:"#333",color:"white",border:"1px solid #555",borderRadius:"4px"},children:rE.map(({value:s,description:l})=>Fn.jsx("option",{value:s,children:l},s))})]})}function t1({value:r,options:t,onChange:i}){return Fn.jsxs("div",{style:{position:"absolute",top:"90px",left:"20px",zIndex:1e3,color:"white",fontFamily:"Arial, sans-serif"},children:[Fn.jsx("label",{htmlFor:"planet-nav",style:{display:"block",marginBottom:"5px"},children:"Navigate To"}),Fn.jsxs("select",{id:"planet-nav",value:r,onChange:s=>i(s.target.value),style:{padding:"5px"},children:[Fn.jsx("option",{value:"",children:"(none)"}),t.map(s=>Fn.jsx("option",{value:s.id,children:s.label},s.id))]})]})}function EE(r){const t=r.endsWith("System")?r.slice(0,-6):r;return t==="sol"?"Sun":t.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,i=>i.toUpperCase())}function e1(){const r=ti.useRef(null),t=ti.useRef(null),i=ti.useRef(null),s=ti.useRef([]),l=ti.useRef(null),c=ti.useRef(null),[f,h]=ti.useState(""),[p,d]=ti.useState(""),g=ti.useMemo(()=>_E.map(({config:E})=>({id:E.systemId,label:EE(E.systemId)})),[]),_=ti.useMemo(()=>{const E=[...g];if(!p||p==="solSystem")return E;const v=s.current.filter(C=>C.userData?.parentSystemId===p).map(C=>({id:C.userData.systemId,label:`- ${EE(C.userData.systemId)}`})).sort((C,x)=>C.label.localeCompare(x.label));return E.concat(v)},[g,p]);return ti.useEffect(()=>{let E;if(!r.current)return;const v=new VE,C=new hi(60,window.innerWidth/window.innerHeight,.01,999999999);C.position.set(-8e3,2500,4e3);const x=new gb({canvas:r.current,antialias:!0});x.setPixelRatio(window.devicePixelRatio),x.setSize(window.innerWidth,window.innerHeight),x.outputColorSpace=Pi,x.shadowMap.enabled=!0,x.shadowMap.type=yE;const y=new xi().setTranscoderPath("/sol-system/basis/");y.detectSupport(x);const m=new _b(C,x.domElement);m.enableDamping=!0,m.dampingFactor=.05,m.update();const L=wb();v.add(L);const w=_E.map(({config:U,moons:z})=>mE(U,z.map(V=>()=>mE(V,void 0,y)),y)),b=U=>{U.userData.childSystems&&U.userData.childSystems.forEach(z=>{w.push(z),z.userData.parentSystemId=U.userData.systemId,b(z)})};w.slice().forEach(b),s.current=w,w.forEach(U=>v.add(U));const N={lockedSystemRef:t,previousLockedPositionRef:i};l.current=U=>{const z=s.current.find(V=>V.userData?.systemId===U);z&&S0(z,C,m,N)},c.current=()=>C0(N);const F=hT({camera:C,controls:m,getAllSystems:()=>s.current,lockedSystemRef:t,previousLockedPositionRef:i,clickThresholdPx:80}),O=U=>{F(U);const z=t.current;h(z?.userData?.systemId??""),d(z?.userData?.parentSystemId??(z&&z.userData?.systemId!=="solSystem"?z.userData.systemId:""))};x.domElement.addEventListener("dblclick",O);let q=0;const T=1e3/60,P=new BC(16777215,1);v.add(P);const Z=new IC(16777215,1);Z.castShadow=!0,Z.shadow.mapSize.width=8192,Z.shadow.mapSize.height=8192,Z.visible=!1;const st=new wn;v.add(st),Z.target=st,v.add(Z);const lt=new X,ct=(U=0)=>{if(U-q<T){E=requestAnimationFrame(ct);return}q=U;const z=t.current,V=z?.userData.systemId;if(s.current.forEach(ht=>{if(ht.userData.animate){let D;if(ht.userData.parentSystemId){const j=s.current.find(gt=>gt.userData.systemId===ht.userData.parentSystemId);j&&j.userData.mesh&&(D=j.userData.mesh.position)}ht.userData.animate(D,V)}}),AT(C,m,N),z&&z.userData.mesh){const ht=z.userData.mesh.position,D=z.userData.shadowRadius??5,j=1e3;lt.copy(ht).negate().normalize(),Z.position.copy(ht).addScaledVector(lt,j),st.position.copy(ht),st.updateMatrixWorld(),Z.shadow.camera.left=-D,Z.shadow.camera.right=D,Z.shadow.camera.top=D,Z.shadow.camera.bottom=-D,Z.shadow.camera.near=j-D-50,Z.shadow.camera.far=j+D+50,Z.shadow.camera.updateProjectionMatrix(),Z.visible=!0}else Z.visible=!1;m.update(),x.render(v,C),E=requestAnimationFrame(ct)};return ct(),()=>{x.domElement.removeEventListener("dblclick",O),l.current=null,c.current=null,cancelAnimationFrame(E),w.forEach(U=>v.remove(U)),v.remove(L),v.remove(Z),v.remove(st),x.dispose()}},[]),Fn.jsxs(Fn.Fragment,{children:[Fn.jsx("canvas",{ref:r,id:"bg"}),Fn.jsx($T,{}),Fn.jsx(t1,{value:f,options:_,onChange:E=>{if(h(E),!E){c.current?.(),d("");return}l.current?.(E);const v=s.current.find(C=>C.userData?.systemId===E);d(v?.userData?.parentSystemId??(v&&v.userData?.systemId!=="solSystem"?v.userData.systemId:""))}})]})}Ny.createRoot(document.getElementById("root")).render(Fn.jsx(ti.StrictMode,{children:Fn.jsx(e1,{})}));
